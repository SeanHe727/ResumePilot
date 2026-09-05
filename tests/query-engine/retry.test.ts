import Anthropic from '@anthropic-ai/sdk';
import { describe, expect, it, vi } from 'vitest';

import { backoffMs, withRetry, DEFAULT_RETRY_CONFIG } from '../../src/query-engine/retry.js';
import { QueryEngineError, type ErrorCategory } from '../../src/query-engine/types.js';

function apiError(status: number, message: string, headers: Record<string, string> = {}) {
  return Anthropic.APIError.generate(status, { error: { message } }, message, new Headers(headers));
}

/** Collects the delays instead of actually waiting. */
function fakeSleep() {
  const delays: number[] = [];
  return { delays, sleep: async (ms: number) => void delays.push(ms) };
}

describe('withRetry', () => {
  it('returns immediately when the call succeeds', async () => {
    const fn = vi.fn().mockResolvedValue('ok');

    await expect(withRetry(fn)).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries a transient failure and succeeds', async () => {
    const { sleep } = fakeSleep();
    const fn = vi
      .fn()
      .mockRejectedValueOnce(apiError(529, 'Overloaded'))
      .mockResolvedValue('ok');

    await expect(withRetry(fn, DEFAULT_RETRY_CONFIG, { sleep })).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('gives up after maxRetries and throws the classified error', async () => {
    const { sleep, delays } = fakeSleep();
    const fn = vi.fn().mockRejectedValue(apiError(500, 'boom'));

    await expect(
      withRetry(fn, { ...DEFAULT_RETRY_CONFIG, maxRetries: 2 }, { sleep }),
    ).rejects.toMatchObject({ category: 'overloaded' });

    expect(fn).toHaveBeenCalledTimes(3); // initial attempt plus two retries
    expect(delays).toHaveLength(2);
  });

  it('does not retry a non-retryable failure', async () => {
    const fn = vi.fn().mockRejectedValue(apiError(401, 'bad key'));

    await expect(withRetry(fn)).rejects.toMatchObject({ category: 'auth' });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('does not replay an over-long prompt, which needs compaction instead', async () => {
    const fn = vi.fn().mockRejectedValue(apiError(400, 'prompt is too long'));

    await expect(withRetry(fn)).rejects.toMatchObject({ category: 'context_length' });
    // Retrying the identical oversized request would only burn attempts.
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('signals each retried attempt so a renderer can reset', async () => {
    const { sleep } = fakeSleep();
    const onAttempt = vi.fn();
    const fn = vi
      .fn()
      .mockRejectedValueOnce(apiError(529, 'first'))
      .mockRejectedValueOnce(apiError(529, 'second'))
      .mockResolvedValue('ok');

    await withRetry(fn, DEFAULT_RETRY_CONFIG, { sleep, onAttempt });

    expect(onAttempt).toHaveBeenCalledTimes(2);
    expect(onAttempt.mock.calls[0]?.[0]).toBe(1);
    expect(onAttempt.mock.calls[1]?.[0]).toBe(2);
  });

  it('passes the attempt number to the call', async () => {
    const { sleep } = fakeSleep();
    const seen: number[] = [];

    await withRetry(
      async (attempt) => {
        seen.push(attempt);
        if (attempt < 2) throw apiError(529, 'again');
        return 'ok';
      },
      DEFAULT_RETRY_CONFIG,
      { sleep },
    );

    expect(seen).toEqual([0, 1, 2]);
  });
});

describe('backoffMs', () => {
  const noHeader = (category: ErrorCategory) => ({ category, retryAfterMs: undefined });
  const atMax = () => 1;

  it('obeys a server-supplied retry-after over its own schedule', () => {
    expect(
      backoffMs(0, { category: 'rate_limit', retryAfterMs: 7_000 }, DEFAULT_RETRY_CONFIG, () => 0.5),
    ).toBe(7_000);
  });

  it('never exceeds maxDelayMs, even when the server asks for longer', () => {
    expect(backoffMs(0, { category: 'rate_limit', retryAfterMs: 999_000 })).toBe(
      DEFAULT_RETRY_CONFIG.maxDelayMs,
    );
  });

  it('grows the ceiling exponentially when the server said nothing', () => {
    expect(backoffMs(0, noHeader('rate_limit'), DEFAULT_RETRY_CONFIG, atMax)).toBe(2_000);
    expect(backoffMs(1, noHeader('rate_limit'), DEFAULT_RETRY_CONFIG, atMax)).toBe(4_000);
    expect(backoffMs(2, noHeader('rate_limit'), DEFAULT_RETRY_CONFIG, atMax)).toBe(8_000);
  });

  it('starts a dropped socket sooner than an overloaded service', () => {
    expect(backoffMs(0, noHeader('network'), DEFAULT_RETRY_CONFIG, atMax)).toBe(500);
    expect(backoffMs(0, noHeader('timeout'), DEFAULT_RETRY_CONFIG, atMax)).toBe(1_000);
    expect(backoffMs(0, noHeader('overloaded'), DEFAULT_RETRY_CONFIG, atMax)).toBe(4_000);
  });

  it('applies full jitter so parallel sub-agents do not wake together', () => {
    // Same attempt, different random draws must yield different delays.
    expect(backoffMs(1, noHeader('overloaded'), DEFAULT_RETRY_CONFIG, () => 0)).toBe(0);
    expect(backoffMs(1, noHeader('overloaded'), DEFAULT_RETRY_CONFIG, () => 1)).toBe(8_000);
  });

  it('caps the exponential ceiling at maxDelayMs', () => {
    expect(backoffMs(20, noHeader('network'), DEFAULT_RETRY_CONFIG, atMax)).toBe(
      DEFAULT_RETRY_CONFIG.maxDelayMs,
    );
  });
});

describe('QueryEngineError', () => {
  it('carries the category and retry decision to the caller', () => {
    const err = new QueryEngineError('nope', 'budget', false);

    expect(err).toBeInstanceOf(Error);
    expect(err.category).toBe('budget');
    expect(err.retryable).toBe(false);
  });
});
