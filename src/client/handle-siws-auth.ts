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

function buildSiwsMessage(args: {
  address: string;
  challenge: SolanaAuthNonceResponse;
  statement: string;
}): string {
  return [
    `${args.challenge.domain} wants you to sign in with your Solana account:`,
    args.address,
    "",
    args.statement,
    "",
    `URI: ${args.challenge.uri}`,
    "Version: 1",
    `Chain ID: ${args.challenge.chainId}`,
    `Nonce: ${args.challenge.nonce}`,
    `Issued At: ${args.challenge.issuedAt}`,
    `Expiration Time: ${args.challenge.expirationTime}`
  ].join("\n");
}

function decodeSignature(bytes: Uint8Array): string {
  const decoded = getBase58Decoder().decode(bytes);
  assertIsSignature(decoded);
  return decoded;
}

async function requestSiwsChallenge(address: string): Promise<SolanaAuthNonceResponse> {
  return api<SolanaAuthNonceResponse>("/api/auth/solana-auth/nonce", {
    method: "POST",
    body: JSON.stringify({ walletAddress: address })
  });
}

async function completeSiwsAuth(args: {
  address: string;
  message: Uint8Array;
  refresh: () => Promise<void>;
  signature: Uint8Array;
}): Promise<{ isNewUser: boolean; user: UserSummary }> {
  const result = await api<{ isNewUser: boolean; user: UserSummary }>(
    "/api/auth/solana-auth/verify",
    {
      method: "POST",
      body: JSON.stringify({
        walletAddress: args.address,
        signature: decodeSignature(args.signature),
        message: new TextDecoder().decode(args.message)
      })
    }
  );
  await args.refresh();
  return result;
}

export async function handleSiwsAuth(args: {
  address: string;
  refresh: () => Promise<void>;
  signIn: (input: SolanaSignInInput) => Promise<SolanaSignInOutput>;
  statement: string;
}): Promise<{ isNewUser: boolean; user: UserSummary }> {
  assertIsAddress(args.address);
  const challenge = await requestSiwsChallenge(args.address);
  const { signature, signedMessage } = await args.signIn(
    createSignInInput({
      address: args.address,
      challenge,
      statement: args.statement
    })
  );

  return completeSiwsAuth({
    address: args.address,
    message: signedMessage,
    refresh: args.refresh,
    signature
  });
}

export async function handleSiwsAuthWithSignMessage(args: {
  address: string;
  refresh: () => Promise<void>;
  signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array; signedMessage: Uint8Array }>;
  statement: string;
}): Promise<{ isNewUser: boolean; user: UserSummary }> {
  assertIsAddress(args.address);
  const challenge = await requestSiwsChallenge(args.address);
  const siwsMessage = new TextEncoder().encode(
    buildSiwsMessage({
      address: args.address,
      challenge,
      statement: args.statement
    })
  );
  const { signature, signedMessage } = await args.signMessage(siwsMessage);

  return completeSiwsAuth({
    address: args.address,
    message: signedMessage,
    refresh: args.refresh,
    signature
  });
}
