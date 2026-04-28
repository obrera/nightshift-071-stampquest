import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { AppState } from "../shared/contracts.js";
import { createSeedState } from "./seed.js";
import { normalizeState } from "./state.js";

export class FileDatabase {
  private state: AppState | null = null;
  private ready: Promise<void> | null = null;
  private writeChain: Promise<void> = Promise.resolve();

  constructor(private readonly filePath: string) {}

  async init(): Promise<void> {
    if (!this.ready) {
      this.ready = this.load();
    }

    await this.ready;
  }

  async read(): Promise<AppState> {
    await this.init();
    return structuredClone(this.state!);
  }

  async update<T>(mutate: (state: AppState) => T | Promise<T>): Promise<T> {
    await this.init();

    let result: T | undefined;
    this.writeChain = this.writeChain.then(async () => {
      result = await mutate(this.state!);
      await this.persist();
    });

    await this.writeChain;
    return result as T;
  }

  private async load(): Promise<void> {
    await mkdir(path.dirname(this.filePath), { recursive: true });

    try {
      const raw = await readFile(this.filePath, "utf8");
      const parsed = JSON.parse(raw) as Record<string, unknown>;
      this.state = normalizeState(parsed);
      if (
        parsed.version !== 2 ||
        "mintIntents" in parsed
      ) {
        await this.persist();
      }
    } catch (error) {
      this.state = createSeedState();
      await this.persist();
    }
  }

  private async persist(): Promise<void> {
    const tempPath = `${this.filePath}.tmp`;
    const json = JSON.stringify(this.state, null, 2);
    await writeFile(tempPath, json, "utf8");
    await rename(tempPath, this.filePath);
  }
}
