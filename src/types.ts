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
  /**
   * A reasoning model's own working, carried so it can be handed back.
   *
   * DeepSeek's thinking models refuse the next request in a tool-calling
   * exchange unless the reasoning that produced the tool call comes with it —
   * the model is stateless, and without it the turn it is being asked to
   * continue is one it cannot see. Not shown to the user, and never counted as
   * content.
   */
  reasoning?: string;
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
 * Why the model stopped.
 *
 * Two of these are easy to overlook and both arrive as a successful HTTP 200:
 * `refusal` (a safety classifier declined — content is empty, so branch on this
 * before reading it) and `context_exceeded` (the prompt outgrew the window,
 * reported as a stop reason rather than an error, and the cue for the Context
 * layer to compact before trying again).
 */
export type StopReason =
  | 'end_turn'
  | 'tool_use'
  | 'max_tokens'
  | 'refusal'
  | 'context_exceeded';

/** Wall-clock plus token accounting attached to any unit of work. */
export interface RunStats {
  durationMs: number;
  usage: TokenUsage;
  costUsd: number;
}
