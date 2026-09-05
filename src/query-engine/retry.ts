import { classifyError, isPlainRetryable } from './errors.js';
import { QueryEngineError, type RetryConfig } from './types.js';

export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 3,
  baseDelayMs: 1_000,
  maxDelayMs: 30_000,
  backoffMultiplier: 2,
};

export interface RetryHooks {
  /** Fires before each attempt after the first, so a renderer can reset. */
  onAttempt?: (attempt: number, previous: QueryEngineError) => void;
  /** Injectable for tests; real code sleeps. */
  sleep?: (ms: number) => Promise<void>;
}

/**
 * Retries a call whose failure the error classifier says is worth repeating.
 *
 * Only `rate_limit`, `overloaded`, `timeout` and `network` qualify. Notably
 * `context_length` does not: it is recoverable, but by compacting the context
 * first, so replaying the identical request would just fail the same way until
 * the attempts run out.
 */
export async function withRetry<T>(
  fn: (attempt: number) => Promise<T>,
  config: RetryConfig = DEFAULT_RETRY_CONFIG,
  hooks: RetryHooks = {},
): Promise<T> {
  const sleep = hooks.sleep ?? defaultSleep;
  let lastError: QueryEngineError | undefined;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    if (attempt > 0 && lastError) hooks.onAttempt?.(attempt, lastError);

    try {
      return await fn(attempt);
    } catch (err) {
      const classified = classifyError(err);

      if (!isPlainRetryable(classified.category) || attempt === config.maxRetries) {
        throw classified;
      }

      lastError = classified;
      await sleep(backoffMs(attempt, classified, config));
    }
  }

  // Unreachable: the loop either returns or throws.
  throw lastError ?? new QueryEngineError('Retry loop exhausted', 'unknown', false);
}

/**
 * How long to wait before the next attempt.
 *
 * A server-supplied `retry-after` wins outright — it is the only party that
 * knows when the limit actually lifts. That value must come from the response
 * header and nowhere else: filling it in with a plausible-looking default would
 * take this branch every time and silently disable everything below it.
 *
 * With no such header: exponential growth from a per-category starting point,
 * multiplied by full jitter. The jitter is what keeps a fan-out from
 * synchronising — several sub-agents hit the same limit within milliseconds, and
 * a fixed delay would wake them all at the same instant to collide again.
 */
export function backoffMs(
  attempt: number,
  error: Pick<QueryEngineError, 'category' | 'retryAfterMs'>,
  config: RetryConfig = DEFAULT_RETRY_CONFIG,
  random: () => number = Math.random,
): number {
  if (error.retryAfterMs !== undefined) {
    return Math.min(error.retryAfterMs, config.maxDelayMs);
  }

  const base = CATEGORY_BASE_DELAY_MS[error.category] ?? config.baseDelayMs;
  const ceiling = Math.min(base * config.backoffMultiplier ** attempt, config.maxDelayMs);
  return Math.round(random() * ceiling);
}

/**
 * Where each category starts its exponential climb.
 *
 * A dropped socket is usually instant to recover from; a service reporting
 * itself overloaded needs real time. Starting them all at the same delay either
 * hammers an overloaded service or dawdles over a transient blip.
 */
const CATEGORY_BASE_DELAY_MS: Partial<Record<QueryEngineError['category'], number>> = {
  network: 500,
  timeout: 1_000,
  rate_limit: 2_000,
  overloaded: 4_000,
};

function defaultSleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
