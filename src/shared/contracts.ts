export type UserRole = "operator" | "participant";

export interface UserRecord {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  passwordHash: string;
  createdAt: string;
}

export interface UserSummary {
  id: string;
  username: string;
  displayName: string;
  role: UserRole;
  createdAt: string;
}

export interface SessionRecord {
  id: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
}

export interface RallyCheckpoint {
  id: string;
  rallyId: string;
  title: string;
  stampLabel: string;
  district: string;
  hint: string;
  secretCode: string;
  cooldownSeconds: number;
  points: number;
  sortOrder: number;
}

export interface RallyReward {
  name: string;
  symbol: string;
  description: string;
  imagePath: string;
  requiredCheckpoints: number;
}

export interface RallyRecord {
  id: string;
  slug: string;
  title: string;
  city: string;
  seasonLabel: string;
  summary: string;
  status: "live" | "upcoming" | "closed";
  startsAt: string;
  endsAt: string;
  checkpointCount: number;
  reward: RallyReward;
}

export interface EnrollmentRecord {
  id: string;
  userId: string;
  rallyId: string;
  joinedAt: string;
  active: boolean;
}

export interface RedemptionRecord {
  id: string;
  userId: string;
  rallyId: string;
  checkpointId: string;
  code: string;
  createdAt: string;
  pointsAwarded: number;
}

export interface RewardClaimRecord {
  id: string;
  userId: string;
  rallyId: string;
  walletAddress: string;
  status: "blocked" | "submitted" | "minted";
  createdAt: string;
  updatedAt: string;
  message: string;
  executionMode: "execute-plugin-aware-collection";
  collectionAddress?: string;
  assetAddress?: string;
  signature?: string;
  explorerUrls?: {
    asset: string;
    collection: string;
    transaction: string;
  };
}

export interface ActivityRecord {
  id: string;
  userId: string;
  userDisplayName: string;
  kind: "auth" | "join" | "redeem" | "claim";
  headline: string;
  detail: string;
  createdAt: string;
}

export interface AppState {
  version: 3;
  users: UserRecord[];
  sessions: SessionRecord[];
  rallies: RallyRecord[];
  checkpoints: RallyCheckpoint[];
  enrollments: EnrollmentRecord[];
  redemptions: RedemptionRecord[];
  rewardClaims: RewardClaimRecord[];
  activity: ActivityRecord[];
}

export interface AuthRequest {
  username: string;
  password: string;
  displayName?: string;
}

export interface JoinRallyRequest {
  rallyId: string;
}

export interface RedeemCheckpointRequest {
  rallyId: string;
  checkpointId: string;
  code: string;
}

export interface ClaimRewardRequest {
  rallyId: string;
  walletAddress: string;
}

export interface CheckpointCard {
  id: string;
  title: string;
  stampLabel: string;
  district: string;
  hint: string;
  points: number;
  cooldownSeconds: number;
  sortOrder: number;
  redeemed: boolean;
  redeemedAt?: string;
  nextEligibleAt?: string;
}

export interface RedemptionHistoryItem {
  id: string;
  checkpointTitle: string;
  district: string;
  code: string;
  pointsAwarded: number;
  createdAt: string;
}

export interface PassportProgress {
  rallyId: string;
  rallyTitle: string;
  joinedAt: string;
  redeemedCount: number;
  totalCheckpoints: number;
  totalPoints: number;
  completionPercent: number;
  rewardEligible: boolean;
  requiredCheckpoints: number;
  checkpointCards: CheckpointCard[];
  redemptionHistory: RedemptionHistoryItem[];
}

export interface RewardConfigStatus {
  enabled: boolean;
  status: "ready" | "missing_public_base_url" | "missing_signer" | "missing_collection";
  message: string;
  publicBaseUrlConfigured: boolean;
  signerConfigured: boolean;
  executePluginCollectionConfigured: boolean;
  collectionAddress?: string;
  executionMode: "execute-plugin-aware-collection";
}

export interface RallySummary {
  id: string;
  slug: string;
  title: string;
  city: string;
  seasonLabel: string;
  summary: string;
  status: "live" | "upcoming" | "closed";
  startsAt: string;
  endsAt: string;
  checkpointCount: number;
  reward: RallyReward;
  joined: boolean;
  active: boolean;
  redeemedCount: number;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  redeemedCount: number;
  totalPoints: number;
  lastRedeemedAt?: string;
}

export interface OperatorCheckpointSummary {
  checkpointId: string;
  title: string;
  district: string;
  redemptions: number;
  uniqueParticipants: number;
  lastRedeemedAt?: string;
}

export interface RecentRedemption {
  id: string;
  participantName: string;
  checkpointTitle: string;
  district: string;
  code: string;
  createdAt: string;
}

export interface OperatorOverview {
  liveRallyTitle: string;
  participantCount: number;
  redemptionCount: number;
  rewardEligibleCount: number;
  checkpointSummary: OperatorCheckpointSummary[];
  recentRedemptions: RecentRedemption[];
  leaderboard: LeaderboardEntry[];
}

export interface BootstrapResponse {
  session: {
    user: UserSummary | null;
  };
  rallies: RallySummary[];
  activeRallyId: string | null;
  passport: PassportProgress | null;
  rewardConfig: RewardConfigStatus;
  rewardClaim: RewardClaimRecord | null;
  operatorOverview: OperatorOverview | null;
  activity: ActivityRecord[];
}
