import type {
  ActivityRecord,
  AppState,
  RallyCheckpoint,
  RallyRecord
} from "../shared/contracts.js";
import { nowUtc } from "./utils.js";

function buildRally(): RallyRecord {
  return {
    id: "rally_sol_week_071",
    slug: "solana-week-rally",
    title: "Solana Week Stamp Rally",
    city: "San Francisco",
    seasonLabel: "Build 071",
    summary:
      "A late-night checkpoint passport for pop-up demos, street-side workshops, and after-hours community stops.",
    status: "live",
    startsAt: "2026-04-28T16:00:00.000Z",
    endsAt: "2026-05-02T06:00:00.000Z",
    checkpointCount: 5,
    reward: {
      name: "StampQuest Afterglow Badge",
      symbol: "SQ071",
      description:
        "A collectible MPL Core reward badge for participants who complete the live StampQuest trail.",
      imagePath: "/reward-badge.svg",
      requiredCheckpoints: 4
    }
  };
}

function buildCheckpoints(rallyId: string): RallyCheckpoint[] {
  return [
    {
      id: "cp_terminal",
      rallyId,
      title: "Terminal Alley",
      stampLabel: "Signal Ink",
      district: "Market South",
      hint: "Look for the orange canopy and the whisper-quiet validator demo.",
      secretCode: "INK-071",
      cooldownSeconds: 900,
      points: 10,
      sortOrder: 1
    },
    {
      id: "cp_rooftop",
      rallyId,
      title: "Rooftop Relay",
      stampLabel: "Sky Stamp",
      district: "SoMa Roofline",
      hint: "The checkpoint board is beside the skyline time-lapse rig.",
      secretCode: "SKY-204",
      cooldownSeconds: 900,
      points: 15,
      sortOrder: 2
    },
    {
      id: "cp_gallery",
      rallyId,
      title: "Mint Gallery",
      stampLabel: "Light Press",
      district: "Mission Arcade",
      hint: "Find the projection wall with the badge preview loop.",
      secretCode: "GLOW-318",
      cooldownSeconds: 900,
      points: 15,
      sortOrder: 3
    },
    {
      id: "cp_studio",
      rallyId,
      title: "Studio Sprint",
      stampLabel: "Patch Mark",
      district: "Hayes Workshop",
      hint: "Ask the host for the checkpoint slate after the mini build sprint.",
      secretCode: "PATCH-451",
      cooldownSeconds: 900,
      points: 20,
      sortOrder: 4
    },
    {
      id: "cp_dock",
      rallyId,
      title: "Dockside Finale",
      stampLabel: "Harbor Crest",
      district: "Embarcadero",
      hint: "The final code is pinned near the lantern trail by the dock.",
      secretCode: "TIDE-592",
      cooldownSeconds: 900,
      points: 25,
      sortOrder: 5
    }
  ];
}

export function createSeedState(): AppState {
  const rally = buildRally();

  return {
    version: 4,
    users: [],
    sessions: [],
    authChallenges: [],
    rallies: [rally],
    checkpoints: buildCheckpoints(rally.id),
    enrollments: [],
    redemptions: [],
    rewardClaims: [],
    activity: [] satisfies ActivityRecord[]
  };
}
