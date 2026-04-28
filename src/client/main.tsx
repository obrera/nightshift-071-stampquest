import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { SolanaProvider } from "./solana-provider";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SolanaProvider>
      <App />
    </SolanaProvider>
  </React.StrictMode>
);
