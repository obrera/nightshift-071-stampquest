import { Resvg } from "@resvg/resvg-js";
import {
  address,
  assertIsAddress,
  assertIsSignature,
  getBase58Encoder,
  getPublicKeyFromAddress,
  signature,
  signatureBytes,
  verifySignature
} from "@solana/kit";
import express, { type NextFunction, type Request, type Response } from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  ActivityRecord,
  AppState,
  AuthChallengeRecord,
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
  SolanaAuthNonceRequest,
  SolanaAuthNonceResponse,
  SolanaAuthVerifyRequest,
  UserRecord,
  UserRole
} from "../shared/contracts.js";
import { FileDatabase } from "./db.js";
import { getRewardConfigStatus } from "./minting/config.js";
import { mintRewardBadge } from "./minting/solana.js";
import {
  clearCookieHeader,
  createId,
  createNonce,
  getEnv,
  normalizeWalletAddress,
  nowUtc,
  parseCookies,
  sanitizeUser,
  setCookieHeader,
  shortWalletAddress
} from "./utils.js";

interface ParsedSiwsMessage {
  address: string;
  chainId?: string;
  domain: string;
  expirationTime?: string;
  issuedAt?: string;
  nonce?: string;
  statement?: string;
  uri?: string;
  version?: string;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..", "..");
const publicDir = path.resolve(rootDir, "dist", "public");
const cookieName = "stampquest_session";
const sessionMaxAgeSeconds = 60 * 60 * 24 * 14;
const challengeMaxAgeMs = 15 * 60 * 1000;
const authStatement = "Sign in to StampQuest with your Solana wallet.";
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

function isFieldLine(value: string): boolean {
  return /^(URI|Version|Chain ID|Nonce|Issued At|Expiration Time|Not Before|Request ID|Resources): /.test(
    value
  ) || value === "Resources:";
}

function parseSiwsMessage(message: string): ParsedSiwsMessage {
  const normalized = message.replace(/\r/g, "");
  const lines = normalized.split("\n");
  const header = lines[0]?.match(/^(.*) wants you to sign in with your Solana account:$/);
  if (!header?.[1] || !lines[1]?.trim()) {
    throw new Error("Invalid SIWS message.");
  }

  const parsed: ParsedSiwsMessage = {
    domain: header[1],
    address: lines[1].trim()
  };

  let cursor = 2;
  if (lines[cursor] === "") {
    cursor += 1;
  }

  const fieldIndex = lines.findIndex((line, index) => index >= cursor && isFieldLine(line));
  if (fieldIndex === -1) {
    throw new Error("SIWS message is missing required fields.");
  }

  const statementLines = lines.slice(cursor, fieldIndex).filter((line) => line !== "");
  parsed.statement = statementLines.length > 0 ? statementLines.join("\n") : undefined;

  for (let index = fieldIndex; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line) {
      continue;
    }

    const separator = line.indexOf(": ");
    if (separator === -1) {
      throw new Error("SIWS message contains an invalid field.");
    }

    const key = line.slice(0, separator);
    const value = line.slice(separator + 2);
    switch (key) {
      case "URI":
        parsed.uri = value;
        break;
      case "Version":
        parsed.version = value;
        break;
      case "Chain ID":
        parsed.chainId = value;
        break;
      case "Nonce":
        parsed.nonce = value;
        break;
      case "Issued At":
        parsed.issuedAt = value;
        break;
      case "Expiration Time":
        parsed.expirationTime = value;
        break;
      case "Resources":
        index = lines.length;
        break;
      default:
        break;
    }
  }

  return parsed;
}

async function verifySolanaSignature(args: {
  message: string;
  signatureValue: string;
  walletAddress: string;
}): Promise<boolean> {
  const publicKey = await getPublicKeyFromAddress(address(args.walletAddress));
  return verifySignature(
    publicKey,
    signatureBytes(getBase58Encoder().encode(signature(args.signatureValue))),
    new TextEncoder().encode(args.message)
  );
}

function cleanupAuthState(state: AppState) {
  state.sessions = state.sessions.filter(
    (entry) => new Date(entry.expiresAt).getTime() > Date.now()
  );
  state.authChallenges = state.authChallenges.filter(
    (entry) => new Date(entry.expirationTime).getTime() > Date.now()
  );
}

function getOperatorWalletAllowlist(): Set<string> {
  return new Set(
    (getEnv("STAMPQUEST_OPERATOR_WALLETS") ?? "")
      .split(",")
      .map((entry) => normalizeWalletAddress(entry))
      .filter(Boolean)
  );
}

function resolveUserRole(walletAddress: string): UserRole {
  return getOperatorWalletAllowlist().has(normalizeWalletAddress(walletAddress))
    ? "operator"
    : "participant";
}

function getSessionUser(state: AppState, request: Request): UserRecord | null {
  cleanupAuthState(state);
  const sessionId = parseCookies(request)[cookieName];
  if (!sessionId) {
    return null;
  }

  const session = state.sessions.find((entry) => entry.id === sessionId);
  if (!session) {
    return null;
  }

  const user = state.users.find((entry) => entry.id === session.userId);
  if (!user) {
    return null;
  }

  return {
    ...user,
    role: resolveUserRole(user.walletAddress)
  };
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

function buildPassport(state: AppState, user: UserRecord): PassportProgress | null {
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
      demoCode: checkpoint.secretCode,
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

function getAuthOrigin(request: Request): { domain: string; uri: string } {
  const forwardedHost = request.get("x-forwarded-host");
  const forwardedProto = request.get("x-forwarded-proto");
  const host = forwardedHost ?? request.get("host") ?? "localhost:3001";
  const protocol = forwardedProto ?? request.protocol ?? "http";
  return {
    domain: host,
    uri: `${protocol}://${host}`
  };
}

function assertValidWalletAddress(walletAddress: string) {
  try {
    assertIsAddress(walletAddress);
  } catch {
    throw new Error("Wallet address must be a valid Solana address.");
  }
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
  "/api/auth/solana-auth/nonce",
  asyncRoute(async (request, response) => {
    const payload = request.body as Partial<SolanaAuthNonceRequest>;
    const walletAddress = normalizeWalletAddress(payload.walletAddress ?? "");
    assertValidWalletAddress(walletAddress);

    const { domain, uri } = getAuthOrigin(request);
    const issuedAt = nowUtc();
    const challenge: AuthChallengeRecord = {
      id: createId("challenge"),
      walletAddress,
      nonce: createNonce(),
      domain,
      uri,
      chainId: "solana:devnet",
      statement: authStatement,
      issuedAt,
      expirationTime: new Date(Date.now() + challengeMaxAgeMs).toISOString(),
      createdAt: issuedAt,
      expiresAt: new Date(Date.now() + challengeMaxAgeMs).toISOString()
    };

    await db.update((state) => {
      cleanupAuthState(state);
      state.authChallenges = state.authChallenges.filter(
        (entry) => entry.walletAddress !== walletAddress
      );
      state.authChallenges.unshift(challenge);
    });

    const result: SolanaAuthNonceResponse = {
      walletAddress: challenge.walletAddress,
      nonce: challenge.nonce,
      domain: challenge.domain,
      uri: challenge.uri,
      version: "1",
      issuedAt: challenge.issuedAt,
      expirationTime: challenge.expirationTime,
      chainId: challenge.chainId,
      statement: challenge.statement
    };
    response.json(result);
  })
);

app.post(
  "/api/auth/solana-auth/verify",
  asyncRoute(async (request, response) => {
    const payload = request.body as Partial<SolanaAuthVerifyRequest>;
    const walletAddress = normalizeWalletAddress(payload.walletAddress ?? "");
    const message = String(payload.message ?? "");
    const signatureValue = String(payload.signature ?? "");

    assertValidWalletAddress(walletAddress);
    try {
      assertIsSignature(signature(signatureValue));
    } catch {
      throw new Error("Signature must be a valid Solana signature.");
    }

    const parsedMessage = parseSiwsMessage(message);
    assertValidWalletAddress(parsedMessage.address);

    if (normalizeWalletAddress(parsedMessage.address) !== walletAddress) {
      response.status(401).json({ error: "Signed wallet does not match the requested wallet." });
      return;
    }

    const outcome = await db.update(async (state) => {
      cleanupAuthState(state);

      const challenge = state.authChallenges.find(
        (entry) =>
          entry.walletAddress === walletAddress &&
          entry.nonce === parsedMessage.nonce
      );
      if (!challenge) {
        throw new Error("Invalid or expired SIWS challenge. Request a new wallet sign-in.");
      }

      if (
        parsedMessage.domain !== challenge.domain ||
        parsedMessage.uri !== challenge.uri ||
        parsedMessage.chainId !== challenge.chainId ||
        parsedMessage.nonce !== challenge.nonce ||
        parsedMessage.issuedAt !== challenge.issuedAt ||
        parsedMessage.expirationTime !== challenge.expirationTime ||
        parsedMessage.statement !== challenge.statement ||
        parsedMessage.version !== "1"
      ) {
        throw new Error("SIWS message contents do not match the active challenge.");
      }

      if (new Date(challenge.expirationTime).getTime() <= Date.now()) {
        throw new Error("SIWS challenge expired. Request a new wallet sign-in.");
      }

      const verified = await verifySolanaSignature({
        message,
        signatureValue,
        walletAddress
      });
      if (!verified) {
        throw new Error("Wallet signature verification failed.");
      }

      state.authChallenges = state.authChallenges.filter(
        (entry) => entry.id !== challenge.id
      );

      const now = nowUtc();
      const role = resolveUserRole(walletAddress);
      const existingUser = state.users.find((entry) => entry.walletAddress === walletAddress);
      const user =
        existingUser ??
        {
          id: createId("user"),
          walletAddress,
          displayName: shortWalletAddress(walletAddress),
          role,
          createdAt: now,
          lastAuthenticatedAt: now
        };

      user.role = role;
      user.lastAuthenticatedAt = now;

      if (!existingUser) {
        state.users.push(user);
      }

      state.sessions = state.sessions.filter((entry) => entry.userId !== user.id);
      const sessionId = createId("sess");
      state.sessions.push({
        id: sessionId,
        userId: user.id,
        createdAt: now,
        expiresAt: new Date(Date.now() + sessionMaxAgeSeconds * 1000).toISOString()
      });
      state.activity.unshift(
        makeActivity(
          user,
          "auth",
          existingUser ? "Wallet signed back in" : "Wallet joined StampQuest",
          existingUser
            ? "Session refreshed with Sign In With Solana."
            : "Created a passport session from the connected wallet."
        )
      );

      return {
        isNewUser: !existingUser,
        sessionId,
        user: {
          ...user
        }
      };
    });

    response.setHeader(
      "Set-Cookie",
      setCookieHeader(cookieName, outcome.sessionId, sessionMaxAgeSeconds)
    );
    response.json({
      isNewUser: outcome.isNewUser,
      user: sanitizeUser(outcome.user)
    });
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

    const existingSuccessful = auth.state.rewardClaims.find(
      (entry) =>
        entry.userId === auth.user.id &&
        entry.rallyId === rally.id &&
        (entry.status === "submitted" || entry.status === "minted")
    );
    if (existingSuccessful) {
      response.status(409).json({
        claim: existingSuccessful,
        rewardConfig: getRewardConfigStatus(),
        error:
          existingSuccessful.status === "minted"
            ? "Reward already claimed for this passport."
            : "Reward claim is already in progress."
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
          walletAddress: auth.user.walletAddress,
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
        walletAddress: auth.user.walletAddress,
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
          `Minting ${rally.reward.name} to ${shortWalletAddress(auth.user.walletAddress)}.`
        )
      );
      return claim;
    });

    try {
      const minted = await mintRewardBadge({
        name: `${rally.reward.name} • ${auth.user.displayName}`,
        metadataUrl,
        walletAddress: auth.user.walletAddress
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

function getStampQuestBaseUrl() {
  return getEnv("STAMPQUEST_PUBLIC_BASE_URL") ?? `http://localhost:${port}`;
}

function renderSvgToPng(svg: string, width: number) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { loadSystemFonts: true }
  });
  return resvg.render().asPng();
}

function buildRewardBadgeSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
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
</svg>`;
}

app.get(
  "/api/rewards/:rallyId/metadata.json",
  asyncRoute(async (request, response) => {
    const state = await db.read();
    const rally = getRally(state, String(request.params.rallyId ?? ""));
    const user = state.users.find((entry) => entry.id === String(request.query.userId ?? ""));
    const imageUrl = `${getStampQuestBaseUrl()}/reward-badge.png`;
    response.json({
      name: `${rally.reward.name}${user ? ` • ${user.displayName}` : ""}`,
      symbol: rally.reward.symbol,
      description: rally.reward.description,
      image: imageUrl,
      external_url: getStampQuestBaseUrl(),
      attributes: [
        { trait_type: "Rally", value: rally.title },
        { trait_type: "Season", value: rally.seasonLabel },
        { trait_type: "Execution Mode", value: "execute-plugin-aware-collection" }
      ],
      properties: {
        category: "image",
        files: [
          {
            uri: imageUrl,
            type: "image/png"
          }
        ]
      }
    });
  })
);

app.get("/reward-badge.svg", (_request, response) => {
  response.type("image/svg+xml").send(buildRewardBadgeSvg());
});

app.get("/reward-badge.png", (_request, response) => {
  response.type("image/png").send(renderSvgToPng(buildRewardBadgeSvg(), 1024));
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
