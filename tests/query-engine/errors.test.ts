import Anthropic from '@anthropic-ai/sdk';
import { describe, expect, it } from 'vitest';

import { classifyError, isPlainRetryable, needsCompaction } from '../../src/query-engine/errors.js';
import { QueryEngineError } from '../../src/query-engine/types.js';

/**
 * `generate` is the SDK's own factory, so these are real subclass instances.
 *
 * Headers must always be supplied: `generate` returns an `APIConnectionError`
 * whenever `headers` is absent, on the assumption that no response arrived.
 */
function apiError(status: number, message: string, headers: Record<string, string> = {}) {
  return Anthropic.APIError.generate(
    status,
    { type: 'error', error: { type: 'api_error', message } },
    message,
    new Headers(headers),
  );
}

describe('classifyError', () => {
  it('marks 429 retryable and honours retry-after seconds', () => {
    const result = classifyError(apiError(429, 'Rate limited', { 'retry-after': '3' }));

    expect(result.category).toBe('rate_limit');
    expect(result.retryable).toBe(true);
    expect(result.retryAfterMs).toBe(3_000);
  });

  it('leaves retryAfterMs unset when the server sent no retry-after', () => {
    // Inventing a value here would make backoffMs take the "server said so"
    // branch every time, silently disabling exponential growth and jitter.
    expect(classifyError(apiError(429, 'Rate limited')).retryAfterMs).toBeUndefined();
    expect(classifyError(apiError(529, 'Overloaded')).retryAfterMs).toBeUndefined();
    expect(classifyError(new Anthropic.APIConnectionTimeoutError({})).retryAfterMs).toBeUndefined();
  });

  it('treats 529 as overload with a longer back-off', () => {
    const result = classifyError(apiError(529, 'Overloaded'));

    expect(result.category).toBe('overloaded');
    expect(result.retryable).toBe(true);
  });

  it('treats any other 5xx as retryable', () => {
    expect(classifyError(apiError(500, 'Internal error')).retryable).toBe(true);
    expect(classifyError(apiError(503, 'Unavailable')).retryable).toBe(true);
  });

  it('never retries auth failures', () => {
    expect(classifyError(apiError(401, 'Bad key'))).toMatchObject({
      category: 'auth',
      retryable: false,
    });
    expect(classifyError(apiError(403, 'Forbidden'))).toMatchObject({
      category: 'auth',
      retryable: false,
    });
  });

  it('never retries a malformed request', () => {
    expect(classifyError(apiError(400, 'messages: field required'))).toMatchObject({
      category: 'invalid_request',
      retryable: false,
    });
  });

  it('routes an over-long prompt to compaction even though it arrives as a 400', () => {
    const result = classifyError(apiError(400, 'prompt is too long: 250000 tokens > 200000'));

    expect(result.category).toBe('context_length');
    expect(needsCompaction(result.category)).toBe(true);
    // Retryable, but only after the caller shrinks the context.
    expect(isPlainRetryable(result.category)).toBe(false);
  });

  it('classifies a timeout as retryable', () => {
    expect(classifyError(new Anthropic.APIConnectionTimeoutError({}))).toMatchObject({
      category: 'timeout',
      retryable: true,
    });
  });

  it('classifies a dropped connection as retryable', () => {
    expect(classifyError(new Anthropic.APIConnectionError({ message: 'socket hang up' })))
      .toMatchObject({ category: 'network', retryable: true });
  });

  it('does not retry a deliberate abort', () => {
    expect(classifyError(new Anthropic.APIUserAbortError()).retryable).toBe(false);
  });

  it('passes an already-classified error through unchanged', () => {
    const original = new QueryEngineError('budget exhausted', 'rate_limit', false);

    expect(classifyError(original)).toBe(original);
  });

  it('does not retry something it cannot recognise', () => {
    expect(classifyError(new Error('boom'))).toMatchObject({
      category: 'unknown',
      retryable: false,
    });
  });
});
