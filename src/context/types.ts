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

/**
 * Sized for a conversation, which is what this loop is for.
 *
 * The first version of these numbers was sized for one exchange: 3,000 tokens
 * of `recent` is six or eight messages, so a session where someone explains a
 * metric, edits a line and asks again had forgotten the explanation by the
 * time the edit arrived. Worse, eviction held the total so far under the
 * compaction threshold that the ladder was unreachable — a plateau of 5,663
 * against a threshold of 10,800, measured over thirty messages.
 *
 * Measured again at these values, over forty messages with a tool call every
 * third: compaction engages at message 11 and roughly every eight after,
 * always at level 2, and the window settles at 43% of budget. At the old cap
 * of three rounds it ran out by message 27 and crept back to 91%.
 */
export const DEFAULT_CONTEXT_CONFIG: ContextConfig = {
  maxTotalTokens: 16_000,
  systemPromptBudget: 2_000,
  profileBudget: 500,
  taskBudget: 4_000,
  historyBudget: 4_000,
  recentBudget: 12_000,
  toolResultBudget: 1_000,
  outputReserve: 4_000,
  // Twelve, not three. Three is a sensible ceiling for a single diagnosis and
  // a hard stop halfway through a conversation, and the difference is not the
  // model call it saves — it is that the layer stops summarising and the
  // running history degrades into a truncated log.
  maxCompactions: 12,
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
