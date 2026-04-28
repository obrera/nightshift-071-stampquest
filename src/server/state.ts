import type { AppState } from "../shared/contracts.js";
import { createSeedState } from "./seed.js";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function normalizeState(raw: unknown): AppState {
  if (!isObject(raw)) {
    return createSeedState();
  }

  if (raw.version === 3) {
    return raw as unknown as AppState;
  }

  return createSeedState();
}
