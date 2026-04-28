# StampQuest

StampQuest is Nightshift build 071: a mobile-first dark-mode Solana week app for live rally passports. Participants sign up, join the active trail, redeem secret checkpoint codes, track stamp progress, and claim a collectible reward badge. Operators get a compact live operations surface for checkpoint flow, redemptions, and leaderboard movement.

## Product

- Real local auth with persisted users and cookie sessions
- Passport flow with active rally progress, checkpoint stamp cards, redemption history, and reward eligibility
- Checkpoint redemption validation with secret-code checks, duplicate prevention, cooldown rules, and progress math
- Reward claim server path backed by `@obrera/mpl-core-kit-lib` and an execute-plugin-aware collection configuration
- Operator surface for checkpoint overview, recent redemption feed, and participant leaderboard
- Durable JSON persistence in `data/stampquest-db.json`

## Stack

- TypeScript throughout
- React + Vite
- Express
- `@solana/kit`
- local `@obrera/mpl-core-kit-lib`
- no `@solana/web3.js`
- no `@solana/wallet-adapter-react`

## Seed Accounts

- `obrera` / `nightshift071!` — operator
- `pilot` / `pilotpass!` — participant
- `marina` / `relaypass!` — participant

## Run

```bash
npm install --ignore-scripts
npm run typecheck
npm run build
npm start
```

Default server URL:

- `http://localhost:3001`

## Reward Minting

The reward claim flow is execute-plugin-aware. The app is built to mint reward badges into a preconfigured MPL Core collection that is expected to already be execute-plugin-enabled.

Required environment variables for an enabled server-side mint path:

```bash
export STAMPQUEST_PUBLIC_BASE_URL="https://your-app.example.com"
export STAMPQUEST_DEVNET_SIGNER_KEYPAIR="/absolute/path/to/devnet-keypair.json"
export STAMPQUEST_EXECUTE_PLUGIN_COLLECTION_ADDRESS="YOUR_DEVNET_COLLECTION_ADDRESS"
```

Optional overrides:

```bash
export STAMPQUEST_DEVNET_RPC_URL="https://api.devnet.solana.com"
export STAMPQUEST_DEVNET_WS_URL="wss://api.devnet.solana.com"
export STAMPQUEST_DATA_PATH="/custom/path/stampquest-db.json"
```

`STAMPQUEST_DEVNET_SIGNER_KEYPAIR` may be:

- a path to a Solana keypair JSON file
- a raw JSON array
- a comma-separated 64-byte list
- a `base64:<value>` string

If any required reward-minting config is missing, the UI shows the exact missing piece and the server records the claim attempt honestly as blocked instead of pretending the mint succeeded.

## API

- `GET /api/health`
- `GET /api/bootstrap`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/rallies/join`
- `POST /api/redeem`
- `POST /api/rewards/claim`
- `GET /api/rewards/:rallyId/metadata.json`
- `GET /reward-badge.svg`

## Notes

- `npm install` in this sandbox required `--ignore-scripts` because the `esbuild` postinstall binary check hit an `EPERM` spawn restriction here. Dependency installation still completed and the app typechecks and builds successfully in this environment.
- The reward minting flow currently assumes an existing execute-plugin-aware collection address rather than creating that collection automatically.
