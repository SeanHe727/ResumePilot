import type { Message, StopReason, ToolCall, ToolSchema, TokenUsage } from '../types.js';

/**
 * Effort is an Anthropic concept (`output_config.effort`) that replaced the old
 * fixed thinking-token budget. Providers that have no equivalent ignore it.
 */
export type Effort = 'low' | 'medium' | 'high' | 'xhigh' | 'max';

export interface StreamParams {
  model: string;
  messages: Message[];
  systemPrompt?: string;
  tools?: ToolSchema[];
  maxTokens?: number;
  effort?: Effort;
  abortSignal?: AbortSignal;
}

/**
 * The normalised event stream. Every provider adapter emits exactly this
 * vocabulary, so the parser above it never branches on vendor.
 */
export type StreamEvent =
  | { type: 'text_delta'; content: string }
  | { type: 'tool_use_start'; id: string; name: string }
  | { type: 'tool_use_delta'; input: string }
  | { type: 'tool_use_end' }
  | { type: 'message_end'; usage: TokenUsage; stopReason: StopReason };

export interface LLMProvider {
  readonly name: string;
  stream(params: StreamParams): AsyncIterable<StreamEvent>;
  countTokens(messages: Message[], tools?: ToolSchema[]): Promise<number>;
}

/** What the stream parser assembles out of the event sequence. */
export interface ParsedResponse {
  type: 'text' | 'tool_use';
  content?: string;
  toolCalls?: ToolCall[];
  usage: TokenUsage;
  stopReason: StopReason;
}

// ---------------------------------------------------------------------------
// Failure taxonomy
// ---------------------------------------------------------------------------

export type ErrorCategory =
  /** 429 — wait for `retry-after`, then retry. */
  | 'rate_limit'
  /** 529/503 — the service is overloaded; back off exponentially. */
  | 'overloaded'
  | 'timeout'
  | 'network'
  /** 400 — malformed request. Retrying changes nothing. */
  | 'invalid_request'
  /** 401/403 — bad credentials. Retrying changes nothing. */
  | 'auth'
  /** Prompt exceeds the window: compact the context, then retry. */
  | 'context_length'
  /** Safety classifier declined. Not an HTTP error — arrives as stop_reason. */
  | 'refusal'
  | 'unknown';

export class QueryEngineError extends Error {
  constructor(
    message: string,
    readonly category: ErrorCategory,
    readonly retryable: boolean,
    readonly retryAfterMs?: number,
  ) {
    super(message);
    this.name = 'QueryEngineError';
  }
}

export interface RetryConfig {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
  backoffMultiplier: number;
}

// ---------------------------------------------------------------------------
// Routing and budget
// ---------------------------------------------------------------------------

/**
 * Task identifiers the Router dispatches on. Heavy reasoning goes to the
 * primary model; mechanical structural work goes to the cheap one.
 */
export type TaskKind =
  | 'diagnose_bullet'
  | 'rewrite_bullet'
  | 'match_jd'
  | 'generate_report'
  | 'split_sections'
  | 'split_bullets'
  | 'summarize';

export interface RouteRule {
  task: TaskKind;
  model: string;
  /** Why this task routes here — surfaced by `/config` for debugging. */
  reason: string;
}

export interface TokenBudget {
  maxInputTokens: number;
  maxOutputTokens: number;
  maxTotalCostUsd: number;
  spent: {
    inputTokens: number;
    outputTokens: number;
    totalCostUsd: number;
    requests: number;
  };
}

export interface QueryParams {
  /** Supplying a task lets the Router pick the model; otherwise pass `model`. */
  task?: TaskKind;
  model?: string;
  messages: Message[];
  systemPrompt?: string;
  tools?: ToolSchema[];
  maxTokens?: number;
  effort?: Effort;
  useCache?: boolean;
  cacheTtlSeconds?: number;
  onTextDelta?: (text: string) => void;
  abortSignal?: AbortSignal;
}

export interface QueryEngine {
  query(params: QueryParams): Promise<ParsedResponse>;
  getUsageSummary(): string;
  checkBudget(): { ok: boolean; reason?: string };
}
