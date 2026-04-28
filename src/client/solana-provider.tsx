import {
  createSolanaDevnet,
  createWalletUiConfig,
  WalletUi
} from "@wallet-ui/react";
import type { ReactNode } from "react";

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet("https://api.devnet.solana.com")]
});

export function SolanaProvider({ children }: { children: ReactNode }) {
  return <WalletUi config={config}>{children}</WalletUi>;
}
