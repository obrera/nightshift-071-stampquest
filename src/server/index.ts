import express, { type NextFunction, type Request, type Response } from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  ActivityRecord,
  AppState,
  AuthRequest,
  BootstrapResponse,
  ClaimRewardRequest,
  EnrollmentRecord,
  JoinRallyRequest,
  LeaderboardEntry,
  OperatorCheckpointSummary,
  OperatorOverview,
  PassportProgress,
  RallyCheckpoint,
  RallyRecord,
  RallySummary,
  RedemptionRecord,
  RedeemCheckpointRequest,
  RewardClaimRecord,
  UserRecord
} from "../shared/contracts.js";
import { FileDatabase } from "./db.js";
import { getRewardConfigStatus } from "./minting/config.js";
import { mintRewardBadge } from "./minting/solana.js";
import {
  clearCookieHeader,
  createId,
  getEnv,
  hashPassword,
  nowUtc,
  parseCookies,
  sanitizeUser,
  setCookieHeader,
  verifyPassword
} from "./utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..", "..");
const publicDir = path.resolve(rootDir, "dist", "public");
const cookieName = "stampquest_session";
const sessionMaxAgeSeconds = 60 * 60 * 24 * 14;
const dataPath =
  getEnv("STAMPQUEST_DATA_PATH") ??
  path.resolve(rootDir, "data", "stampquest-db.json");

const db = new FileDatabase(dataPath);
const app = express();

app.use(express.json({ limit: "1mb" }));

function asyncRoute(
  handler: (request: Request, response: Response, next: NextFunction) => Promise<void>
) {
  return (request: Request, response: Response, next: NextFunction) => {
    void handler(request, response, next).catch(next);
  };
}

function getSessionUser(state: AppState, request: Request): UserRecord | null {
  const sessionId = parseCookies(request)[cookieName];
  if (!sessionId) {
    return null;
  }

  const session = state.sessions.find(
    (entry) =>
      entry.id === sessionId &&
      new Date(entry.expiresAt).getTime() > Date.now()
  );
  if (!session) {
    return null;
  }

  return state.users.find((entry) => entry.id === session.userId) ?? null;
}

async function requireUser(request: Request, response: Response) {
  const state = await db.read();
  const user = getSessionUser(state, request);
  if (!user) {
    response.status(401).json({ error: "Authentication required." });
    return null;
  }

  return { state, user };
}

function validateAuthPayload(payload: Partial<AuthRequest>) {
  const username = payload.username?.trim().toLowerCase() ?? "";
  const password = payload.password ?? "";
  const displayName = payload.displayName?.trim() || username;

  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters.");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  return { username, password, displayName };
}

function makeActivity(
  user: UserRecord,
  kind: ActivityRecord["kind"],
  headline: string,
  detail: string
): ActivityRecord {
  return {
    id: createId("activity"),
    userId: user.id,
    userDisplayName: user.displayName,
    kind,
    headline,
    detail,
    createdAt: nowUtc()
  };
}

function getActiveEnrollment(
  state: AppState,
  userId: string
): EnrollmentRecord | undefined {
  return state.enrollments.find((entry) => entry.userId === userId && entry.active);
}

function getRally(state: AppState, rallyId: string): RallyRecord {
  const rally = state.rallies.find((entry) => entry.id === rallyId);
  if (!rally) {
    throw new Error("Rally not found.");
  }
  return rally;
}

function getCheckpointsForRally(state: AppState, rallyId: string): RallyCheckpoint[] {
  return state.checkpoints
    .filter((entry) => entry.rallyId === rallyId)
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

function getUserRedemptions(state: AppState, userId: string, rallyId: string) {
  return state.redemptions
    .filter((entry) => entry.userId === userId && entry.rallyId === rallyId)
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

function buildPassport(
  state: AppState,
  user: UserRecord
): PassportProgress | null {
  const enrollment = getActiveEnrollment(state, user.id);
  if (!enrollment) {
    return null;
  }

  const rally = getRally(state, enrollment.rallyId);
  const checkpoints = getCheckpointsForRally(state, rally.id);
  const redemptions = getUserRedemptions(state, user.id, rally.id);
  const redeemedByCheckpoint = new Map<string, RedemptionRecord>();

  for (const redemption of [...redemptions].reverse()) {
    redeemedByCheckpoint.set(redemption.checkpointId, redemption);
  }

  const checkpointCards = checkpoints.map((checkpoint) => {
    const redemption = redeemedByCheckpoint.get(checkpoint.id);
    const latestAttempt = redemptions.find(
      (entry) => entry.checkpointId === checkpoint.id
    );
    const nextEligibleAt = latestAttempt
      ? new Date(
          new Date(latestAttempt.createdAt).getTime() +
            checkpoint.cooldownSeconds * 1000
        ).toISOString()
      : undefined;

    return {
      id: checkpoint.id,
      title: checkpoint.title,
      stampLabel: checkpoint.stampLabel,
      district: checkpoint.district,
      hint: checkpoint.hint,
      points: checkpoint.points,
      cooldownSeconds: checkpoint.cooldownSeconds,
      sortOrder: checkpoint.sortOrder,
      redeemed: Boolean(redemption),
      redeemedAt: redemption?.createdAt,
      nextEligibleAt
    };
  });

  const uniqueRedeemedCount = checkpointCards.filter((entry) => entry.redeemed).length;
  const totalPoints = redemptions.reduce(
    (sum, redemption) => sum + redemption.pointsAwarded,
    0
  );

  return {
    rallyId: rally.id,
    rallyTitle: rally.title,
    joinedAt: enrollment.joinedAt,
    redeemedCount: uniqueRedeemedCount,
    totalCheckpoints: checkpoints.length,
    totalPoints,
    completionPercent: Math.round((uniqueRedeemedCount / checkpoints.length) * 100),
    rewardEligible: uniqueRedeemedCount >= rally.reward.requiredCheckpoints,
    requiredCheckpoints: rally.reward.requiredCheckpoints,
    checkpointCards,
    redemptionHistory: redemptions.map((entry) => {
      const checkpoint = checkpoints.find((candidate) => candidate.id === entry.checkpointId)!;
      return {
        id: entry.id,
        checkpointTitle: checkpoint.title,
        district: checkpoint.district,
        code: entry.code,
        pointsAwarded: entry.pointsAwarded,
        createdAt: entry.createdAt
      };
    })
  };
}

function buildRallySummary(
  state: AppState,
  user: UserRecord | null,
  rally: RallyRecord
): RallySummary {
  const enrollment = user
    ? state.enrollments.find(
        (entry) => entry.userId === user.id && entry.rallyId === rally.id
      )
    : undefined;
  const redeemedCount = user
    ? new Set(
        state.redemptions
          .filter((entry) => entry.userId === user.id && entry.rallyId === rally.id)
          .map((entry) => entry.checkpointId)
      ).size
    : 0;

  return {
    id: rally.id,
    slug: rally.slug,
    title: rally.title,
    city: rally.city,
    seasonLabel: rally.seasonLabel,
    summary: rally.summary,
    status: rally.status,
    startsAt: rally.startsAt,
    endsAt: rally.endsAt,
    checkpointCount: rally.checkpointCount,
    reward: rally.reward,
    joined: Boolean(enrollment),
    active: Boolean(enrollment?.active),
    redeemedCount
  };
}

function buildLeaderboard(state: AppState, rallyId: string): LeaderboardEntry[] {
  const entries = new Map<string, LeaderboardEntry>();

  for (const redemption of state.redemptions.filter((entry) => entry.rallyId === rallyId)) {
    const user = state.users.find((candidate) => candidate.id === redemption.userId);
    if (!user) {
      continue;
    }
    const current =
      entries.get(user.id) ??
      {
        userId: user.id,
        displayName: user.displayName,
        redeemedCount: 0,
        totalPoints: 0,
        lastRedeemedAt: undefined
      };

    current.totalPoints += redemption.pointsAwarded;
    current.lastRedeemedAt = current.lastRedeemedAt
      ? [current.lastRedeemedAt, redemption.createdAt].sort().at(-1)
      : redemption.createdAt;
    entries.set(user.id, current);
  }

  for (const value of entries.values()) {
    value.redeemedCount = new Set(
      state.redemptions
        .filter((entry) => entry.userId === value.userId && entry.rallyId === rallyId)
        .map((entry) => entry.checkpointId)
    ).size;
  }

  return [...entries.values()].sort((left, right) => {
    if (right.redeemedCount !== left.redeemedCount) {
      return right.redeemedCount - left.redeemedCount;
    }
    if (right.totalPoints !== left.totalPoints) {
      return right.totalPoints - left.totalPoints;
    }
    return (right.lastRedeemedAt ?? "").localeCompare(left.lastRedeemedAt ?? "");
  });
}

function buildOperatorOverview(state: AppState): OperatorOverview | null {
  const rally = state.rallies.find((entry) => entry.status === "live");
  if (!rally) {
    return null;
  }

  const redemptions = state.redemptions.filter((entry) => entry.rallyId === rally.id);
  const leaderboard = buildLeaderboard(state, rally.id);
  const checkpointSummary: OperatorCheckpointSummary[] = getCheckpointsForRally(
    state,
    rally.id
  ).map((checkpoint) => {
    const matches = redemptions.filter((entry) => entry.checkpointId === checkpoint.id);
    return {
      checkpointId: checkpoint.id,
      title: checkpoint.title,
      district: checkpoint.district,
      redemptions: matches.length,
      uniqueParticipants: new Set(matches.map((entry) => entry.userId)).size,
      lastRedeemedAt: matches[0]?.createdAt
    };
  });

  return {
    liveRallyTitle: rally.title,
    participantCount: new Set(
      state.enrollments.filter((entry) => entry.rallyId === rally.id).map((entry) => entry.userId)
    ).size,
    redemptionCount: redemptions.length,
    rewardEligibleCount: leaderboard.filter(
      (entry) => entry.redeemedCount >= rally.reward.requiredCheckpoints
    ).length,
    checkpointSummary,
    recentRedemptions: redemptions.slice(0, 8).map((entry) => {
      const checkpoint = state.checkpoints.find(
        (candidate) => candidate.id === entry.checkpointId
      )!;
      const user = state.users.find((candidate) => candidate.id === entry.userId)!;
      return {
        id: entry.id,
        participantName: user.displayName,
        checkpointTitle: checkpoint.title,
        district: checkpoint.district,
        code: entry.code,
        createdAt: entry.createdAt
      };
    }),
    leaderboard: leaderboard.slice(0, 12)
  };
}

function buildBootstrap(state: AppState, user: UserRecord | null): BootstrapResponse {
  const passport = user ? buildPassport(state, user) : null;
  const activeEnrollment = user ? getActiveEnrollment(state, user.id) : undefined;
  const rewardClaim =
    user && activeEnrollment
      ? state.rewardClaims
          .filter(
            (entry) => entry.userId === user.id && entry.rallyId === activeEnrollment.rallyId
          )
          .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt))[0] ?? null
      : null;

  return {
    session: {
      user: user ? sanitizeUser(user) : null
    },
    rallies: state.rallies.map((entry) => buildRallySummary(state, user, entry)),
    activeRallyId: activeEnrollment?.rallyId ?? null,
    passport,
    rewardConfig: getRewardConfigStatus(),
    rewardClaim,
    operatorOverview: user?.role === "operator" ? buildOperatorOverview(state) : null,
    activity: [...state.activity]
      .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
      .slice(0, 16)
  };
}

app.get(
  "/api/health",
  asyncRoute(async (_request, response) => {
    response.json({ ok: true });
  })
);

app.get(
  "/api/bootstrap",
  asyncRoute(async (request, response) => {
    const state = await db.read();
    response.json(buildBootstrap(state, getSessionUser(state, request)));
  })
);

app.post(
  "/api/auth/register",
  asyncRoute(async (request, response) => {
    const payload = validateAuthPayload(request.body as Partial<AuthRequest>);
    const sessionId = createId("sess");

    const user = await db.update((state) => {
      if (state.users.some((entry) => entry.username === payload.username)) {
        throw new Error("Username is already in use.");
      }

      const createdAt = nowUtc();
      const createdUser: UserRecord = {
        id: createId("user"),
        username: payload.username,
        displayName: payload.displayName,
        role: "participant",
        passwordHash: hashPassword(payload.password),
        createdAt
      };

      state.users.push(createdUser);
      state.sessions.push({
        id: sessionId,
        userId: createdUser.id,
        createdAt,
        expiresAt: new Date(Date.now() + sessionMaxAgeSeconds * 1000).toISOString()
      });
      state.activity.unshift(
        makeActivity(createdUser, "auth", "Joined StampQuest", "Created an account.")
      );
      return createdUser;
    });

    response.setHeader(
      "Set-Cookie",
      setCookieHeader(cookieName, sessionId, sessionMaxAgeSeconds)
    );
    response.status(201).json({ user: sanitizeUser(user) });
  })
);

app.post(
  "/api/auth/login",
  asyncRoute(async (request, response) => {
    const payload = validateAuthPayload(request.body as Partial<AuthRequest>);
    const sessionId = createId("sess");

    const user = await db.update((state) => {
      const existing = state.users.find((entry) => entry.username === payload.username);
      if (!existing || !verifyPassword(payload.password, existing.passwordHash)) {
        throw new Error("Invalid username or password.");
      }

      state.sessions = state.sessions.filter(
        (entry) =>
          entry.userId !== existing.id ||
          new Date(entry.expiresAt).getTime() > Date.now()
      );
      state.sessions.push({
        id: sessionId,
        userId: existing.id,
        createdAt: nowUtc(),
        expiresAt: new Date(Date.now() + sessionMaxAgeSeconds * 1000).toISOString()
      });
      state.activity.unshift(
        makeActivity(existing, "auth", "Signed back in", "Session refreshed.")
      );
      return existing;
    });

    response.setHeader(
      "Set-Cookie",
      setCookieHeader(cookieName, sessionId, sessionMaxAgeSeconds)
    );
    response.json({ user: sanitizeUser(user) });
  })
);

app.post(
  "/api/auth/logout",
  asyncRoute(async (request, response) => {
    const sessionId = parseCookies(request)[cookieName];
    if (sessionId) {
      await db.update((state) => {
        state.sessions = state.sessions.filter((entry) => entry.id !== sessionId);
      });
    }

    response.setHeader("Set-Cookie", clearCookieHeader(cookieName));
    response.json({ ok: true });
  })
);

app.post(
  "/api/rallies/join",
  asyncRoute(async (request, response) => {
    const auth = await requireUser(request, response);
    if (!auth) {
      return;
    }

    const payload = request.body as JoinRallyRequest;

    await db.update((state) => {
      const rally = getRally(state, payload.rallyId);
      state.enrollments.forEach((entry) => {
        if (entry.userId === auth.user.id) {
          entry.active = false;
        }
      });

      const existing = state.enrollments.find(
        (entry) => entry.userId === auth.user.id && entry.rallyId === rally.id
      );
      if (existing) {
        existing.active = true;
      } else {
        state.enrollments.push({
          id: createId("enrollment"),
          userId: auth.user.id,
          rallyId: rally.id,
          joinedAt: nowUtc(),
          active: true
        });
      }

      state.activity.unshift(
        makeActivity(
          auth.user,
          "join",
          "Joined live rally",
          `Activated ${rally.title}.`
        )
      );
    });

    const nextState = await db.read();
    response.json(buildBootstrap(nextState, auth.user));
  })
);

app.post(
  "/api/redeem",
  asyncRoute(async (request, response) => {
    const auth = await requireUser(request, response);
    if (!auth) {
      return;
    }

    const payload = request.body as RedeemCheckpointRequest;
    const normalizedCode = payload.code?.trim().toUpperCase() ?? "";

    const result = await db.update((state) => {
      const enrollment = getActiveEnrollment(state, auth.user.id);
      if (!enrollment || enrollment.rallyId !== payload.rallyId) {
        throw new Error("Join this rally before redeeming checkpoints.");
      }

      const checkpoint = state.checkpoints.find(
        (entry) =>
          entry.id === payload.checkpointId && entry.rallyId === payload.rallyId
      );
      if (!checkpoint) {
        throw new Error("Checkpoint not found.");
      }

      if (checkpoint.secretCode !== normalizedCode) {
        throw new Error("Checkpoint code is invalid.");
      }

      const duplicate = state.redemptions.find(
        (entry) =>
          entry.userId === auth.user.id &&
          entry.rallyId === payload.rallyId &&
          entry.checkpointId === checkpoint.id
      );
      if (duplicate) {
        throw new Error("This checkpoint is already stamped in your passport.");
      }

      const latestForCheckpoint = state.redemptions
        .filter(
          (entry) =>
            entry.userId === auth.user.id &&
            entry.rallyId === payload.rallyId &&
            entry.checkpointId === checkpoint.id
        )
        .sort((left, right) => right.createdAt.localeCompare(left.createdAt))[0];

      if (latestForCheckpoint) {
        const nextEligibleAt = new Date(
          new Date(latestForCheckpoint.createdAt).getTime() +
            checkpoint.cooldownSeconds * 1000
        );
        if (nextEligibleAt.getTime() > Date.now()) {
          throw new Error(
            `Checkpoint cooldown is still active until ${nextEligibleAt.toISOString()}.`
          );
        }
      }

      const createdAt = nowUtc();
      state.redemptions.unshift({
        id: createId("redeem"),
        userId: auth.user.id,
        rallyId: payload.rallyId,
        checkpointId: checkpoint.id,
        code: normalizedCode,
        createdAt,
        pointsAwarded: checkpoint.points
      });
      state.activity.unshift(
        makeActivity(
          auth.user,
          "redeem",
          "Stamped checkpoint",
          `${checkpoint.title} redeemed for ${checkpoint.points} points.`
        )
      );
      return createdAt;
    });

    const nextState = await db.read();
    response.json({
      stampedAt: result,
      bootstrap: buildBootstrap(nextState, auth.user)
    });
  })
);

app.post(
  "/api/rewards/claim",
  asyncRoute(async (request, response) => {
    const auth = await requireUser(request, response);
    if (!auth) {
      return;
    }

    const payload = request.body as ClaimRewardRequest;
    const rally = getRally(auth.state, payload.rallyId);
    const passport = buildPassport(auth.state, auth.user);
    if (!passport || passport.rallyId !== rally.id) {
      response.status(400).json({ error: "No active passport for this rally." });
      return;
    }

    if (!passport.rewardEligible) {
      response.status(400).json({
        error: `Reward unlocks after ${rally.reward.requiredCheckpoints} checkpoints.`
      });
      return;
    }

    const rewardConfig = getRewardConfigStatus();
    const createdAt = nowUtc();

    if (!rewardConfig.enabled || !rewardConfig.collectionAddress) {
      const blocked = await db.update((state) => {
        const claim: RewardClaimRecord = {
          id: createId("claim"),
          userId: auth.user.id,
          rallyId: rally.id,
          walletAddress: payload.walletAddress.trim(),
          status: "blocked",
          createdAt,
          updatedAt: createdAt,
          message: rewardConfig.message,
          executionMode: "execute-plugin-aware-collection",
          collectionAddress: rewardConfig.collectionAddress
        };
        state.rewardClaims.unshift(claim);
        state.activity.unshift(
          makeActivity(
            auth.user,
            "claim",
            "Reward claim blocked",
            rewardConfig.message
          )
        );
        return claim;
      });

      response.status(409).json({
        claim: blocked,
        rewardConfig
      });
      return;
    }

    const metadataUrl = `${getEnv("STAMPQUEST_PUBLIC_BASE_URL")}/api/rewards/${rally.id}/metadata.json?userId=${auth.user.id}`;
    const submittedClaim = await db.update((state) => {
      const claim: RewardClaimRecord = {
        id: createId("claim"),
        userId: auth.user.id,
        rallyId: rally.id,
        walletAddress: payload.walletAddress.trim(),
        status: "submitted",
        createdAt,
        updatedAt: createdAt,
        message:
          "Submitting reward mint into the configured execute-plugin-aware collection.",
        executionMode: "execute-plugin-aware-collection",
        collectionAddress: rewardConfig.collectionAddress
      };
      state.rewardClaims.unshift(claim);
      state.activity.unshift(
        makeActivity(
          auth.user,
          "claim",
          "Reward claim submitted",
          `Minting ${rally.reward.name}.`
        )
      );
      return claim;
    });

    try {
      const minted = await mintRewardBadge({
        name: `${rally.reward.name} • ${auth.user.displayName}`,
        metadataUrl,
        walletAddress: payload.walletAddress.trim()
      });

      const finalClaim = await db.update((state) => {
        const claim = state.rewardClaims.find((entry) => entry.id === submittedClaim.id)!;
        claim.status = "minted";
        claim.updatedAt = nowUtc();
        claim.message = "Reward badge minted on Solana devnet.";
        claim.assetAddress = minted.assetAddress;
        claim.signature = minted.signature;
        claim.collectionAddress = minted.collectionAddress;
        claim.explorerUrls = minted.explorerUrls;
        return claim;
      });

      response.json({
        claim: finalClaim,
        rewardConfig
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Reward mint failed unexpectedly.";
      const failed = await db.update((state) => {
        const claim = state.rewardClaims.find((entry) => entry.id === submittedClaim.id)!;
        claim.status = "blocked";
        claim.updatedAt = nowUtc();
        claim.message = message;
        return claim;
      });

      response.status(500).json({
        claim: failed,
        rewardConfig,
        error: message
      });
    }
  })
);

app.get(
  "/api/rewards/:rallyId/metadata.json",
  asyncRoute(async (request, response) => {
    const state = await db.read();
    const rally = getRally(state, String(request.params.rallyId ?? ""));
    const user = state.users.find((entry) => entry.id === String(request.query.userId ?? ""));
    response.json({
      name: `${rally.reward.name}${user ? ` • ${user.displayName}` : ""}`,
      symbol: rally.reward.symbol,
      description: rally.reward.description,
      image: `${getEnv("STAMPQUEST_PUBLIC_BASE_URL")}/reward-badge.svg`,
      external_url: getEnv("STAMPQUEST_PUBLIC_BASE_URL"),
      attributes: [
        { trait_type: "Rally", value: rally.title },
        { trait_type: "Season", value: rally.seasonLabel },
        { trait_type: "Execution Mode", value: "execute-plugin-aware-collection" }
      ],
      properties: {
        category: "image",
        files: [
          {
            uri: `${getEnv("STAMPQUEST_PUBLIC_BASE_URL")}/reward-badge.svg`,
            type: "image/svg+xml"
          }
        ]
      }
    });
  })
);

app.get("/reward-badge.svg", (_request, response) => {
  response.type("image/svg+xml").send(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="640" height="640" rx="64" fill="#05101B"/>
  <rect x="22" y="22" width="596" height="596" rx="42" stroke="#1EC8A5" stroke-opacity="0.35" stroke-width="4"/>
  <circle cx="320" cy="238" r="122" fill="url(#g1)"/>
  <path d="M206 390C206 327.04 257.04 276 320 276C382.96 276 434 327.04 434 390V398C434 425.614 411.614 448 384 448H256C228.386 448 206 425.614 206 398V390Z" fill="#0D2234"/>
  <path d="M320 160L345.98 215.769L406.769 223.02L362.154 264.731L373.961 324.98L320 295.115L266.039 324.98L277.846 264.731L233.231 223.02L294.02 215.769L320 160Z" fill="#F4C15D"/>
  <text x="320" y="492" text-anchor="middle" fill="#F3F7FB" font-size="44" font-family="Verdana, sans-serif">STAMPQUEST</text>
  <text x="320" y="536" text-anchor="middle" fill="#88A0B5" font-size="24" font-family="Verdana, sans-serif">Afterglow Badge • Build 071</text>
  <defs>
    <linearGradient id="g1" x1="198" y1="116" x2="442" y2="360" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1EC8A5"/>
      <stop offset="1" stop-color="#F4C15D"/>
    </linearGradient>
  </defs>
</svg>`);
});

app.use(express.static(publicDir));

app.use((_request, response) => {
  if (existsSync(path.join(publicDir, "index.html"))) {
    response.sendFile(path.join(publicDir, "index.html"));
    return;
  }

  response.status(404).json({ error: "Build output not found. Run npm run build." });
});

app.use(
  (
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction
  ) => {
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    response.status(500).json({ error: message });
  }
);

const port = Number(process.env.PORT ?? 3001);

await db.init();

app.listen(port, () => {
  console.log(`StampQuest server listening on http://localhost:${port}`);
});
