import { afterEach, describe, expect, it } from 'vitest';

import { TokenBucketLimiter } from '../../src/query-engine/rate-limiter.js';

const limiters: TokenBucketLimiter[] = [];

function makeLimiter(capacity: number, refillPerSecond: number, now?: () => number) {
  const limiter = new TokenBucketLimiter(capacity, refillPerSecond, now);
  limiters.push(limiter);
  return limiter;
}

afterEach(() => {
  while (limiters.length) limiters.pop()!.dispose();
});

describe('TokenBucketLimiter', () => {
  it('lets a burst through up to capacity without waiting', async () => {
    const limiter = makeLimiter(3, 1);

    await limiter.acquire();
    await limiter.acquire();
    await limiter.acquire();

    expect(limiter.getStats().available).toBe(0);
  });

  it('queues the request that exceeds capacity', async () => {
    let clock = 0;
    const limiter = makeLimiter(1, 1, () => clock);

    await limiter.acquire();
    const queued = limiter.acquire();

    expect(limiter.getStats().queued).toBe(1);

    // A second passes, so one token is back.
    clock += 1_000;
    await expect(queued).resolves.toBeUndefined();
  });

  it('drains a backlog larger than one refill tick', async () => {
    // The naive implementation — one timer per waiter — strands everyone still
    // queued when that timer fires with an empty bucket. Three waiters on a
    // one-token bucket is exactly that case.
    let clock = 0;
    const limiter = makeLimiter(1, 50, () => clock);
    await limiter.acquire();

    const waiting = [limiter.acquire(), limiter.acquire(), limiter.acquire()];
    const advance = setInterval(() => (clock += 20), 5);

    await expect(Promise.all(waiting)).resolves.toHaveLength(3);
    clearInterval(advance);
  });

  it('serves waiters in arrival order', async () => {
    let clock = 0;
    const limiter = makeLimiter(1, 100, () => clock);
    await limiter.acquire();

    const order: number[] = [];
    const waiting = [
      limiter.acquire().then(() => order.push(1)),
      limiter.acquire().then(() => order.push(2)),
      limiter.acquire().then(() => order.push(3)),
    ];
    const advance = setInterval(() => (clock += 20), 5);

    await Promise.all(waiting);
    clearInterval(advance);
    expect(order).toEqual([1, 2, 3]);
  });

  it('never refills beyond capacity however long it idles', () => {
    let clock = 0;
    const limiter = makeLimiter(2, 10, () => clock);

    clock += 60_000;
    expect(limiter.getStats().available).toBe(2);
  });

  it('rejects a queued waiter when its request is aborted', async () => {
    let clock = 0;
    const limiter = makeLimiter(1, 0.001, () => clock);
    await limiter.acquire();

    const controller = new AbortController();
    const queued = limiter.acquire(controller.signal);
    controller.abort();

    await expect(queued).rejects.toThrow(/Aborted/);
    // The abandoned waiter must not linger and consume a future token.
    expect(limiter.getStats().queued).toBe(0);
  });

  it('refuses immediately when the signal is already aborted', async () => {
    const limiter = makeLimiter(1, 1);
    await limiter.acquire();

    await expect(limiter.acquire(AbortSignal.abort())).rejects.toThrow(/Aborted/);
  });

  it('keeps its drain timer referenced so queued work is not dropped on exit', async () => {
    // An unref'd drain timer lets Node exit while requests are still queued —
    // the non-interactive `diagnose` path would then stop halfway with no error.
    // Real timers here on purpose: the point is that the event loop stays alive.
    const limiter = makeLimiter(1, 200);
    await limiter.acquire();

    const queued = Promise.all([limiter.acquire(), limiter.acquire()]);

    await expect(queued).resolves.toHaveLength(2);
  });

  it('rejects nonsensical configuration rather than misbehaving later', () => {
    expect(() => new TokenBucketLimiter(0, 1)).toThrow(/capacity/);
    expect(() => new TokenBucketLimiter(1, 0)).toThrow(/refill/);
  });
});
