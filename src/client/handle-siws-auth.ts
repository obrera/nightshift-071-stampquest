import { assertIsAddress, assertIsSignature, getBase58Decoder } from "@solana/kit";
import type {
  SolanaSignInInput,
  SolanaSignInOutput
} from "@wallet-ui/react";
import type {
  SolanaAuthNonceResponse,
  UserSummary
} from "../shared/contracts";

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

function createSignInInput(args: {
  address: string;
  challenge: SolanaAuthNonceResponse;
  statement: string;
}): SolanaSignInInput {
  return {
    address: args.address,
    chainId: args.challenge.chainId,
    domain: args.challenge.domain,
    uri: args.challenge.uri,
    version: "1",
    statement: args.statement,
    nonce: args.challenge.nonce,
    issuedAt: args.challenge.issuedAt,
    expirationTime: args.challenge.expirationTime
  };
}

function decodeSignature(bytes: Uint8Array): string {
  const decoded = getBase58Decoder().decode(bytes);
  assertIsSignature(decoded);
  return decoded;
}

export async function handleSiwsAuth(args: {
  address: string;
  refresh: () => Promise<void>;
  signIn: (input: SolanaSignInInput) => Promise<SolanaSignInOutput>;
  statement: string;
}): Promise<{ isNewUser: boolean; user: UserSummary }> {
  assertIsAddress(args.address);
  const challenge = await api<SolanaAuthNonceResponse>("/api/auth/solana-auth/nonce", {
    method: "POST",
    body: JSON.stringify({ walletAddress: args.address })
  });
  const { signature, signedMessage } = await args.signIn(
    createSignInInput({
      address: args.address,
      challenge,
      statement: args.statement
    })
  );
  const result = await api<{ isNewUser: boolean; user: UserSummary }>(
    "/api/auth/solana-auth/verify",
    {
      method: "POST",
      body: JSON.stringify({
        walletAddress: args.address,
        signature: decodeSignature(signature),
        message: new TextDecoder().decode(signedMessage)
      })
    }
  );
  await args.refresh();
  return result;
}
