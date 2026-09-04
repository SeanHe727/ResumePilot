/**
 * Harness primitives shared by every layer.
 *
 * These deliberately do NOT reuse `Anthropic.MessageParam` or the OpenAI
 * equivalents. The Query Engine normalises three providers behind one
 * interface, so everything above it must speak a vendor-neutral shape; the
 * provider adapters own the translation in both directions. Anywhere only one
 * SDK is in play, use that SDK's own types instead of re-declaring them.
 */

/** Minimal JSON Schema subset — enough to describe tool parameters. */
export interface JsonSchema {
  type?: 'object' | 'array' | 'string' | 'number' | 'integer' | 'boolean' | 'null';
  description?: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  enum?: readonly (string | number)[];
  minimum?: number;
  maximum?: number;
  /** Must be false on tools sent with `strict: true`. */
  additionalProperties?: boolean;
}

export type Role = 'system' | 'user' | 'assistant' | 'tool';

export interface ToolCall {
  id: string;
  name: string;
  input: Record<string, unknown>;
}

export interface Message {
  role: Role;
  content: string;
  /** Present on assistant turns that requested tools. */
  toolCalls?: ToolCall[];
  /** Present on `role: 'tool'` turns, linking back to the originating call. */
  toolCallId?: string;
}

export interface ToolSchema {
  name: string;
  description: string;
  parameters: JsonSchema;
}

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens?: number;
  cacheWriteTokens?: number;
}

/**
 * `refusal` is a real terminal state on current Anthropic models: the request
 * returns HTTP 200 with empty content. Callers must branch on it before
 * reading `content`, never assume text is present.
 */
export type StopReason = 'end_turn' | 'tool_use' | 'max_tokens' | 'refusal';

/** Wall-clock plus token accounting attached to any unit of work. */
export interface RunStats {
  durationMs: number;
  usage: TokenUsage;
  costUsd: number;
}
