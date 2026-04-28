import { startTransition, useEffect, useState, type FormEvent } from "react";
import type {
  BootstrapResponse,
  ClaimRewardRequest,
  JoinRallyRequest,
  RedeemCheckpointRequest
} from "../shared/contracts";

type TabId = "passport" | "trail" | "reward" | "operator";
type AuthMode = "login" | "register";

interface AuthFormState {
  username: string;
  password: string;
  displayName: string;
}

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {})
    },
    ...init
  });
  const data = (await response.json()) as T & { error?: string };
  if (!response.ok) {
    throw new Error(data.error ?? "Request failed.");
  }
  return data;
}

function formatUtc(value: string): string {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

export function App() {
  const [bootstrap, setBootstrap] = useState<BootstrapResponse | null>(null);
  const [tab, setTab] = useState<TabId>("passport");
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [authForm, setAuthForm] = useState<AuthFormState>({
    username: "pilot",
    password: "pilotpass!",
    displayName: ""
  });
  const [codeByCheckpoint, setCodeByCheckpoint] = useState<Record<string, string>>({});
  const [walletAddress, setWalletAddress] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyKey, setBusyKey] = useState<string | null>(null);

  const user = bootstrap?.session.user ?? null;
  const activeRally = bootstrap?.rallies.find((entry) => entry.active) ?? bootstrap?.rallies[0];
  const passport = bootstrap?.passport ?? null;
  const rewardConfig = bootstrap?.rewardConfig;
  const rewardClaim = bootstrap?.rewardClaim;
  const operatorOverview = bootstrap?.operatorOverview;

  async function refresh() {
    const data = await api<BootstrapResponse>("/api/bootstrap");
    setBootstrap(data);
    if (data.session.user?.role !== "operator" && tab === "operator") {
      setTab("passport");
    }
  }

  useEffect(() => {
    void refresh().catch((reason: unknown) => {
      setError(reason instanceof Error ? reason.message : "Failed to load StampQuest.");
    });
  }, []);

  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusyKey("auth");
    setError(null);

    try {
      const url = authMode === "login" ? "/api/auth/login" : "/api/auth/register";
      await api(url, {
        method: "POST",
        body: JSON.stringify(authForm)
      });
      await refresh();
      setNotice(authMode === "login" ? "Signed in." : "Account created.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Authentication failed.");
    } finally {
      setBusyKey(null);
    }
  }

  async function logout() {
    setBusyKey("logout");
    try {
      await api("/api/auth/logout", {
        method: "POST"
      });
      await refresh();
      setNotice("Signed out.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Logout failed.");
    } finally {
      setBusyKey(null);
    }
  }

  async function joinRally(rallyId: string) {
    setBusyKey(`join:${rallyId}`);
    setError(null);

    try {
      const payload: JoinRallyRequest = { rallyId };
      const next = await api<BootstrapResponse>("/api/rallies/join", {
        method: "POST",
        body: JSON.stringify(payload)
      });
      setBootstrap(next);
      setNotice("Passport activated.");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not join rally.");
    } finally {
      setBusyKey(null);
    }
  }

  async function redeem(checkpointId: string) {
    if (!activeRally) {
      return;
    }

    setBusyKey(`redeem:${checkpointId}`);
    setError(null);
    setNotice(null);

    try {
      const payload: RedeemCheckpointRequest = {
        rallyId: activeRally.id,
        checkpointId,
        code: codeByCheckpoint[checkpointId] ?? ""
      };
      const result = await api<{ stampedAt: string; bootstrap: BootstrapResponse }>(
        "/api/redeem",
        {
          method: "POST",
          body: JSON.stringify(payload)
        }
      );
      setBootstrap(result.bootstrap);
      setCodeByCheckpoint((current) => ({ ...current, [checkpointId]: "" }));
      setNotice(`Checkpoint stamped at ${formatUtc(result.stampedAt)}.`);
      startTransition(() => setTab("passport"));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Redemption failed.");
    } finally {
      setBusyKey(null);
    }
  }

  async function claimReward() {
    if (!activeRally) {
      return;
    }

    setBusyKey("claim");
    setError(null);
    setNotice(null);

    try {
      const payload: ClaimRewardRequest = {
        rallyId: activeRally.id,
        walletAddress
      };
      const result = await api<{ claim: { message: string } }>("/api/rewards/claim", {
        method: "POST",
        body: JSON.stringify(payload)
      });
      await refresh();
      setNotice(result.claim.message);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Reward claim failed.");
      await refresh().catch(() => undefined);
    } finally {
      setBusyKey(null);
    }
  }

  if (!bootstrap) {
    return <main className="app-shell loading">Loading StampQuest...</main>;
  }

  if (!user) {
    return (
      <main className="app-shell auth-shell">
        <section className="hero-card">
          <p className="eyebrow">Nightshift Build 071</p>
          <h1>StampQuest</h1>
          <p className="lede">
            A mobile passport for pop-up trails, checkpoint codes, live progress,
            and a collectible Solana reward badge.
          </p>
          <div className="hero-stamps">
            {bootstrap.rallies[0] ? (
              <>
                <span>{bootstrap.rallies[0].city}</span>
                <span>{bootstrap.rallies[0].checkpointCount} checkpoints</span>
                <span>Reward at {bootstrap.rallies[0].reward.requiredCheckpoints} stamps</span>
              </>
            ) : null}
          </div>
        </section>

        <section className="sheet auth-card">
          <div className="mode-switch">
            <button
              className={authMode === "login" ? "active" : ""}
              onClick={() => setAuthMode("login")}
              type="button"
            >
              Sign In
            </button>
            <button
              className={authMode === "register" ? "active" : ""}
              onClick={() => setAuthMode("register")}
              type="button"
            >
              Register
            </button>
          </div>

          <form className="stack" onSubmit={submitAuth}>
            <label>
              <span>Username</span>
              <input
                onChange={(event) =>
                  setAuthForm((current) => ({ ...current, username: event.target.value }))
                }
                value={authForm.username}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                onChange={(event) =>
                  setAuthForm((current) => ({ ...current, password: event.target.value }))
                }
                type="password"
                value={authForm.password}
              />
            </label>
            {authMode === "register" ? (
              <label>
                <span>Display name</span>
                <input
                  onChange={(event) =>
                    setAuthForm((current) => ({
                      ...current,
                      displayName: event.target.value
                    }))
                  }
                  value={authForm.displayName}
                />
              </label>
            ) : null}
            <button className="primary-button" disabled={busyKey === "auth"} type="submit">
              {busyKey === "auth"
                ? "Working..."
                : authMode === "login"
                  ? "Open Passport"
                  : "Create Passport"}
            </button>
          </form>

          <div className="seed-note">
            <strong>Seed logins</strong>
            <span>`obrera / nightshift071!` operator</span>
            <span>`pilot / pilotpass!` participant</span>
            <span>`marina / relaypass!` participant</span>
          </div>
        </section>

        {notice ? <div className="banner notice">{notice}</div> : null}
        {error ? <div className="banner error">{error}</div> : null}
      </main>
    );
  }

  return (
    <main className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <div>
          <p className="eyebrow">StampQuest Passport</p>
          <h1>{activeRally?.title ?? "Live Rally"}</h1>
          <p className="lede">
            {activeRally?.summary}
          </p>
        </div>
        <div className="topbar-actions">
          <div className="identity-chip">
            <strong>{user.displayName}</strong>
            <span>{user.role}</span>
          </div>
          <button className="ghost-button" disabled={busyKey === "logout"} onClick={logout} type="button">
            Sign Out
          </button>
        </div>
      </header>

      {notice ? <div className="banner notice">{notice}</div> : null}
      {error ? <div className="banner error">{error}</div> : null}

      <section className="passport-hero sheet">
        <div>
          <p className="eyebrow">Active Passport</p>
          <h2>{passport ? `${passport.redeemedCount}/${passport.totalCheckpoints} stamps` : "No active rally yet"}</h2>
          <p className="muted">
            {passport
              ? `${passport.totalPoints} trail points collected. Reward unlocks at ${passport.requiredCheckpoints} checkpoints.`
              : "Join the live rally to begin redeeming checkpoint codes."}
          </p>
        </div>
        <div className="progress-ring">
          <div className="progress-ring__value">{passport?.completionPercent ?? 0}%</div>
        </div>
      </section>

      <nav className="bottom-nav">
        <button className={tab === "passport" ? "active" : ""} onClick={() => setTab("passport")} type="button">Passport</button>
        <button className={tab === "trail" ? "active" : ""} onClick={() => setTab("trail")} type="button">Trail</button>
        <button className={tab === "reward" ? "active" : ""} onClick={() => setTab("reward")} type="button">Reward</button>
        {user.role === "operator" ? (
          <button className={tab === "operator" ? "active" : ""} onClick={() => setTab("operator")} type="button">Operator</button>
        ) : null}
      </nav>

      <section className="content-stack">
        {tab === "passport" ? (
          <>
            <section className="sheet">
              <div className="section-head">
                <h3>Rallies</h3>
                <span>{bootstrap.rallies.length} in passport rail</span>
              </div>
              <div className="rally-list">
                {bootstrap.rallies.map((rally) => (
                  <article className={`rally-card ${rally.active ? "active" : ""}`} key={rally.id}>
                    <div>
                      <strong>{rally.title}</strong>
                      <p>{rally.city} • {rally.seasonLabel}</p>
                    </div>
                    <div className="rally-meta">
                      <span>{rally.redeemedCount}/{rally.checkpointCount}</span>
                      <button
                        className="ghost-button"
                        disabled={busyKey === `join:${rally.id}`}
                        onClick={() => void joinRally(rally.id)}
                        type="button"
                      >
                        {rally.active ? "Active" : rally.joined ? "Resume" : "Join"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Checkpoint Stamps</h3>
                <span>{passport?.checkpointCards.length ?? 0} cards</span>
              </div>
              <div className="stamp-grid">
                {passport?.checkpointCards.map((checkpoint) => (
                  <article className={`stamp-card ${checkpoint.redeemed ? "redeemed" : ""}`} key={checkpoint.id}>
                    <p className="eyebrow">{checkpoint.stampLabel}</p>
                    <strong>{checkpoint.title}</strong>
                    <span>{checkpoint.district}</span>
                    <small>{checkpoint.redeemed ? `Stamped ${formatUtc(checkpoint.redeemedAt!)}` : checkpoint.hint}</small>
                  </article>
                )) ?? <p className="muted">No active passport yet.</p>}
              </div>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Redemption History</h3>
                <span>{passport?.redemptionHistory.length ?? 0} entries</span>
              </div>
              <div className="history-list">
                {passport?.redemptionHistory.map((entry) => (
                  <article className="history-item" key={entry.id}>
                    <div>
                      <strong>{entry.checkpointTitle}</strong>
                      <p>{entry.district} • code {entry.code}</p>
                    </div>
                    <div>
                      <span>+{entry.pointsAwarded}</span>
                      <small>{formatUtc(entry.createdAt)}</small>
                    </div>
                  </article>
                )) ?? <p className="muted">History appears after your first stamp.</p>}
              </div>
            </section>
          </>
        ) : null}

        {tab === "trail" ? (
          <section className="sheet">
            <div className="section-head">
              <h3>Redeem Checkpoints</h3>
              <span>Mobile-first code entry</span>
            </div>
            <div className="trail-list">
              {passport?.checkpointCards.map((checkpoint) => (
                <article className="trail-card" key={checkpoint.id}>
                  <div className="trail-copy">
                    <p className="eyebrow">{checkpoint.stampLabel}</p>
                    <strong>{checkpoint.title}</strong>
                    <span>{checkpoint.district}</span>
                    <small>{checkpoint.hint}</small>
                  </div>
                  <label>
                    <span>Checkpoint code</span>
                    <input
                      disabled={checkpoint.redeemed}
                      onChange={(event) =>
                        setCodeByCheckpoint((current) => ({
                          ...current,
                          [checkpoint.id]: event.target.value.toUpperCase()
                        }))
                      }
                      placeholder="Enter secret code"
                      value={codeByCheckpoint[checkpoint.id] ?? ""}
                    />
                  </label>
                  <button
                    className="primary-button"
                    disabled={checkpoint.redeemed || busyKey === `redeem:${checkpoint.id}`}
                    onClick={() => void redeem(checkpoint.id)}
                    type="button"
                  >
                    {checkpoint.redeemed
                      ? "Stamped"
                      : busyKey === `redeem:${checkpoint.id}`
                        ? "Checking..."
                        : "Stamp Passport"}
                  </button>
                </article>
              )) ?? <p className="muted">Join a rally to unlock checkpoint redemption.</p>}
            </div>
          </section>
        ) : null}

        {tab === "reward" ? (
          <>
            <section className="sheet reward-card">
              <div className="section-head">
                <h3>{activeRally?.reward.name ?? "Reward Badge"}</h3>
                <span>{rewardConfig?.executionMode}</span>
              </div>
              <p className="muted">
                {passport?.rewardEligible
                  ? "Your passport is eligible. Submit a Solana wallet address to claim the badge."
                  : `Claim unlocks at ${passport?.requiredCheckpoints ?? 0} stamped checkpoints.`}
              </p>
              <label>
                <span>Destination wallet</span>
                <input
                  onChange={(event) => setWalletAddress(event.target.value)}
                  placeholder="Solana address"
                  value={walletAddress}
                />
              </label>
              <button
                className="primary-button"
                disabled={!passport?.rewardEligible || busyKey === "claim"}
                onClick={() => void claimReward()}
                type="button"
              >
                {busyKey === "claim" ? "Submitting..." : "Claim Reward Badge"}
              </button>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Config Status</h3>
                <span>{rewardConfig?.status}</span>
              </div>
              <ul className="status-list">
                <li>Public base URL: {rewardConfig?.publicBaseUrlConfigured ? "configured" : "missing"}</li>
                <li>Devnet signer: {rewardConfig?.signerConfigured ? "configured" : "missing"}</li>
                <li>Execute-plugin collection: {rewardConfig?.executePluginCollectionConfigured ? rewardConfig.collectionAddress : "missing"}</li>
              </ul>
              <p className="muted">{rewardConfig?.message}</p>
            </section>

            {rewardClaim ? (
              <section className="sheet">
                <div className="section-head">
                  <h3>Latest Claim</h3>
                  <span>{rewardClaim.status}</span>
                </div>
                <p>{rewardClaim.message}</p>
                <div className="claim-meta">
                  <span>{formatUtc(rewardClaim.updatedAt)}</span>
                  {rewardClaim.explorerUrls ? (
                    <a href={rewardClaim.explorerUrls.transaction} rel="noreferrer" target="_blank">
                      View transaction
                    </a>
                  ) : null}
                </div>
              </section>
            ) : null}
          </>
        ) : null}

        {tab === "operator" && operatorOverview ? (
          <>
            <section className="sheet">
              <div className="section-head">
                <h3>Live Metrics</h3>
                <span>{operatorOverview.liveRallyTitle}</span>
              </div>
              <div className="metric-grid">
                <article><strong>{operatorOverview.participantCount}</strong><span>participants</span></article>
                <article><strong>{operatorOverview.redemptionCount}</strong><span>redemptions</span></article>
                <article><strong>{operatorOverview.rewardEligibleCount}</strong><span>eligible</span></article>
              </div>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Checkpoint Flow</h3>
                <span>Live redemption scan</span>
              </div>
              <div className="operator-list">
                {operatorOverview.checkpointSummary.map((entry) => (
                  <article className="operator-item" key={entry.checkpointId}>
                    <div>
                      <strong>{entry.title}</strong>
                      <p>{entry.district}</p>
                    </div>
                    <div>
                      <span>{entry.redemptions} redeems</span>
                      <small>{entry.uniqueParticipants} participants</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Recent Redemptions</h3>
                <span>{operatorOverview.recentRedemptions.length} latest</span>
              </div>
              <div className="history-list">
                {operatorOverview.recentRedemptions.map((entry) => (
                  <article className="history-item" key={entry.id}>
                    <div>
                      <strong>{entry.participantName}</strong>
                      <p>{entry.checkpointTitle} • {entry.code}</p>
                    </div>
                    <small>{formatUtc(entry.createdAt)}</small>
                  </article>
                ))}
              </div>
            </section>

            <section className="sheet">
              <div className="section-head">
                <h3>Leaderboard</h3>
                <span>Participant progress</span>
              </div>
              <div className="operator-list">
                {operatorOverview.leaderboard.map((entry, index) => (
                  <article className="operator-item" key={entry.userId}>
                    <div>
                      <strong>#{index + 1} {entry.displayName}</strong>
                      <p>{entry.redeemedCount} checkpoints</p>
                    </div>
                    <div>
                      <span>{entry.totalPoints} pts</span>
                      <small>{entry.lastRedeemedAt ? formatUtc(entry.lastRedeemedAt) : "No stamps yet"}</small>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : null}
      </section>
    </main>
  );
}
