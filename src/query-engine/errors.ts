import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

import { QueryEngineError, type ErrorCategory } from './types.js';

/**
 * Turns whatever a provider threw into a decision: is this worth retrying, and
 * if so, after how long.
 *
 * Both SDKs expose a typed `APIError` base carrying `.status`, so the shape is:
 * recognise the vendor's base class, then branch on the status code. Never
 * match on message text — those strings are not a stable interface.
 */
export function classifyError(err: unknown): QueryEngineError {
  if (err instanceof QueryEngineError) return err;

  // Caller aborted deliberately (Ctrl-C, session cancel). Not a failure to retry.
  if (
    err instanceof Anthropic.APIUserAbortError ||
    err instanceof OpenAI.APIUserAbortError ||
    (err instanceof Error && err.name === 'AbortError')
  ) {
    return new QueryEngineError('Request aborted', 'unknown', false);
  }

  if (
    err instanceof Anthropic.APIConnectionTimeoutError ||
    err instanceof OpenAI.APIConnectionTimeoutError
  ) {
    return new QueryEngineError('Request timed out', 'timeout', true);
  }

  if (err instanceof Anthropic.APIConnectionError || err instanceof OpenAI.APIConnectionError) {
    return new QueryEngineError('Connection failed', 'network', true);
  }

  if (err instanceof Anthropic.APIError || err instanceof OpenAI.APIError) {
    return fromStatus(err.status, err.message, readRetryAfterMs(err));
  }

  return new QueryEngineError(String(err), 'unknown', false);
}

function fromStatus(
  status: number | undefined,
  message: string,
  retryAfterMs: number | undefined,
): QueryEngineError {
  switch (status) {
    case 400:
      // A 400 can mean "prompt too long", which is recoverable by compacting
      // rather than by retrying the identical request.
      return looksLikeContextOverflow(message)
        ? new QueryEngineError(message, 'context_length', true)
        : new QueryEngineError(message, 'invalid_request', false);
    case 401:
    case 403:
      return new QueryEngineError(message, 'auth', false);
    case 404:
      return new QueryEngineError(message, 'invalid_request', false);
    case 413:
      return new QueryEngineError(message, 'context_length', true);
    case 429:
      return new QueryEngineError(message, 'rate_limit', true, retryAfterMs);
    case 529:
      return new QueryEngineError(message, 'overloaded', true, retryAfterMs);
    default:
      if (status !== undefined && status >= 500) {
        return new QueryEngineError(message, 'overloaded', true, retryAfterMs);
      }
      return new QueryEngineError(message, 'unknown', false);
  }
}

/**
 * The one place message text is inspected, and only to pick between two
 * recoverable paths — never to decide whether an error happened at all. Both
 * providers report an over-long prompt as a plain 400 with no machine-readable
 * marker, so there is nothing else to go on.
 */
function looksLikeContextOverflow(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes('context window') ||
    m.includes('context_length') ||
    m.includes('too many tokens') ||
    m.includes('prompt is too long') ||
    m.includes('maximum context length')
  );
}

/**
 * `retry-after` is seconds; some gateways send an HTTP date instead.
 *
 * Returns undefined when the server said nothing. That absence is meaningful:
 * it tells the retry layer to fall back to its own exponential schedule.
 * Substituting an invented default here would look harmless but silently
 * disable exponential growth and jitter for every category.
 */
function readRetryAfterMs(err: { headers?: unknown }): number | undefined {
  const raw = readHeader(err.headers, 'retry-after');
  if (raw === undefined) return undefined;

  const seconds = Number(raw);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.round(seconds * 1000);

  const at = Date.parse(raw);
  if (!Number.isNaN(at)) return Math.max(0, at - Date.now());

  return undefined;
}

function readHeader(headers: unknown, name: string): string | undefined {
  if (!headers) return undefined;
  if (typeof (headers as Headers).get === 'function') {
    return (headers as Headers).get(name) ?? undefined;
  }
  const record = headers as Record<string, unknown>;
  const value = record[name] ?? record[name.toLowerCase()];
  return typeof value === 'string' ? value : undefined;
}

/** Categories the caller may retry with the identical request. */
const PLAIN_RETRY: ReadonlySet<ErrorCategory> = new Set([
  'rate_limit',
  'overloaded',
  'timeout',
  'network',
]);

export function isPlainRetryable(category: ErrorCategory): boolean {
  return PLAIN_RETRY.has(category);
}

/**
 * `context_length` is retryable but not by repeating the same call — the caller
 * has to shrink the context first, which is why it is separated out here.
 */
export function needsCompaction(category: ErrorCategory): boolean {
  return category === 'context_length';
}
