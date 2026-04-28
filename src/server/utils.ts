import { createPublicKey, randomBytes, verify as verifySignature } from "node:crypto";
import type { IncomingMessage } from "node:http";
import type { UserRecord, UserSummary } from "../shared/contracts.js";

export function nowUtc(): string {
  return new Date().toISOString();
}

export function createId(prefix: string): string {
  return `${prefix}_${randomBytes(6).toString("hex")}`;
}

export function sanitizeUser(user: UserRecord): UserSummary {
  return {
    id: user.id,
    walletAddress: user.walletAddress,
    displayName: user.displayName,
    role: user.role,
    createdAt: user.createdAt,
    lastAuthenticatedAt: user.lastAuthenticatedAt
  };
}

export function parseCookies(request: IncomingMessage): Record<string, string> {
  const raw = request.headers.cookie;
  if (!raw) {
    return {};
  }

  return raw.split(";").reduce<Record<string, string>>((accumulator, pair) => {
    const [key, ...valueParts] = pair.trim().split("=");
    if (!key) {
      return accumulator;
    }

    accumulator[key] = decodeURIComponent(valueParts.join("="));
    return accumulator;
  }, {});
}

export function setCookieHeader(
  name: string,
  value: string,
  maxAgeSeconds: number
): string {
  return `${name}=${encodeURIComponent(
    value
  )}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSeconds}`;
}

export function clearCookieHeader(name: string): string {
  return `${name}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function getEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export function createNonce(size = 16): string {
  return randomBytes(size).toString("base64url");
}

export function shortWalletAddress(value: string): string {
  return value.length <= 12 ? value : `${value.slice(0, 4)}...${value.slice(-4)}`;
}

export function normalizeWalletAddress(value: string): string {
  return value.trim();
}

export function buildSiwsMessage(args: {
  address: string;
  chainId: string;
  domain: string;
  expirationTime: string;
  issuedAt: string;
  nonce: string;
  statement: string;
  uri: string;
}): string {
  const lines = [
    `${args.domain} wants you to sign in with your Solana account:`,
    args.address,
    "",
    args.statement,
    "",
    `URI: ${args.uri}`,
    "Version: 1",
    `Chain ID: ${args.chainId}`,
    `Nonce: ${args.nonce}`,
    `Issued At: ${args.issuedAt}`,
    `Expiration Time: ${args.expirationTime}`
  ];

  return lines.join("\n");
}

export function verifyEd25519Signature(args: {
  message: string;
  publicKey: Uint8Array;
  signature: Uint8Array;
}): boolean {
  const spkiPrefix = Buffer.from("302a300506032b6570032100", "hex");
  const key = createPublicKey({
    key: Buffer.concat([spkiPrefix, Buffer.from(args.publicKey)]),
    format: "der",
    type: "spki"
  });

  return verifySignature(
    null,
    Buffer.from(args.message, "utf8"),
    key,
    Buffer.from(args.signature)
  );
}
