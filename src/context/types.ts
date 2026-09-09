import type { Message } from '../types.js';
import type { QueryEngine } from '../query-engine/types.js';

/**
 * Each layer gets its own token allowance. The total is deliberately far below
 * the model's 1M window: input tokens are billed per request, and a long
 * window dilutes attention on the bullet actually being diagnosed.
 */
export interface ContextConfig {
  maxTotalTokens: number;
  systemPromptBudget: number;
  profileBudget: number;
  taskBudget: number;
  historyBudget: number;
  recentBudget: number;
  /** Ceiling for one tool result before it is compressed on the way in. */
  toolResultBudget: number;
  /** Reserved headroom for the model's own output. */
  outputReserve: number;
  /**
   * How many times `autoCompact` may escalate over a session's lifetime.
   *
   * A one-shot diagnosis does not need to compact more than a couple of times,
   * and past that the ladder stops paying: level 3 would summarise its own
   * summary, losing detail about the entry under diagnosis on every pass while
   * still costing a model call. Stopping is safe because each layer is capped
   * independently of compaction, so the window cannot grow past the sum of the
   * layer budgets either way.
   */
  maxCompactions: number;
}

export const DEFAULT_CONTEXT_CONFIG: ContextConfig = {
  maxTotalTokens: 16_000,
  systemPromptBudget: 2_000,
  profileBudget: 500,
  taskBudget: 4_000,
  historyBudget: 2_000,
  recentBudget: 3_000,
  toolResultBudget: 1_000,
  outputReserve: 4_000,
  maxCompactions: 3,
};

export interface ContextWindow {
  systemPrompt: string;
  messages: Message[];
  tokenCount: number;
  layers: {
    system: number;
    profile: number;
    task: number;
    history: number;
    recent: number;
  };
}

/** Escalating compaction. Each level is tried only if the one before it left the window over budget. */
export type CompactionLevel =
  /** Truncate oversized tool output. */
  | 1
  /** Summarise older turns, keeping the most recent few verbatim. */
  | 2
  /** Compress the task block itself. */
  | 3;

export interface ContextManager {
  setSystemPrompt(prompt: string): void;
  setProfile(profile: string): void;
  setTaskContext(context: string): void;
  addMessage(message: Message): void;
  addToolResult(toolCallId: string, result: string): void;
  build(): ContextWindow;
  needsCompaction(): boolean;
  /** Returns the level reached, or null if nothing ran — not needed, or out of rounds. */
  autoCompact(queryEngine: QueryEngine): Promise<CompactionLevel | null>;
  getRecentMessages(): Message[];
  getCompactions(): number;
  getStats(): string;
}
