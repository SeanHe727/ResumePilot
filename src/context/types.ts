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
  /** Reserved headroom for the model's own output. */
  outputReserve: number;
}

export const DEFAULT_CONTEXT_CONFIG: ContextConfig = {
  maxTotalTokens: 16_000,
  systemPromptBudget: 2_000,
  profileBudget: 500,
  taskBudget: 4_000,
  historyBudget: 2_000,
  recentBudget: 3_000,
  outputReserve: 4_000,
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
  autoCompact(queryEngine: QueryEngine): Promise<CompactionLevel | null>;
  getRecentMessages(): Message[];
  getStats(): string;
}
