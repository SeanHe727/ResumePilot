export interface RateLimiter {
  acquire(signal?: AbortSignal): Promise<void>;
  getStats(): { available: number; queued: number; capacity: number };
}

interface Waiter {
  resolve: () => void;
  reject: (err: Error) => void;
  cleanup: () => void;
}

/**
 * Token bucket: `capacity` requests may burst, then the rate settles to
 * `refillPerSecond`.
 *
 * This exists because sub-agents fan out — a dozen entries diagnosed in
 * parallel would otherwise fire every request at once, take a wall of 429s, and
 * turn into a retry storm that is slower than having paced them in the first
 * place.
 */
export class TokenBucketLimiter implements RateLimiter {
  private tokens: number;
  private lastRefill = Date.now();
  private readonly queue: Waiter[] = [];
  private timer: NodeJS.Timeout | null = null;

  constructor(
    private readonly capacity: number,
    private readonly refillPerSecond: number,
    private readonly now: () => number = Date.now,
  ) {
    if (capacity <= 0) throw new Error('Token bucket capacity must be positive');
    if (refillPerSecond <= 0) throw new Error('Token bucket refill rate must be positive');
    this.tokens = capacity;
    this.lastRefill = now();
  }

  async acquire(signal?: AbortSignal): Promise<void> {
    this.refill();

    if (this.tokens >= 1 && this.queue.length === 0) {
      this.tokens -= 1;
      return;
    }

    if (signal?.aborted) throw new Error('Aborted while waiting for rate limit');

    return new Promise<void>((resolve, reject) => {
      const waiter: Waiter = {
        resolve,
        reject,
        cleanup: () => signal?.removeEventListener('abort', onAbort),
      };

      const onAbort = (): void => {
        const index = this.queue.indexOf(waiter);
        if (index !== -1) this.queue.splice(index, 1);
        waiter.cleanup();
        reject(new Error('Aborted while waiting for rate limit'));
      };

      signal?.addEventListener('abort', onAbort, { once: true });
      this.queue.push(waiter);
      this.scheduleDrain();
    });
  }

  getStats(): { available: number; queued: number; capacity: number } {
    this.refill();
    return {
      available: Math.floor(this.tokens),
      queued: this.queue.length,
      capacity: this.capacity,
    };
  }

  /** Releases every waiter and stops the timer; for shutdown and tests. */
  dispose(): void {
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
    while (this.queue.length > 0) {
      const waiter = this.queue.shift()!;
      waiter.cleanup();
      waiter.reject(new Error('Rate limiter disposed'));
    }
  }

  private refill(): void {
    const now = this.now();
    const elapsedSeconds = (now - this.lastRefill) / 1000;
    if (elapsedSeconds <= 0) return;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSeconds * this.refillPerSecond);
    this.lastRefill = now;
  }

  /**
   * One timer at a time, rescheduled while anyone is still waiting.
   *
   * The obvious implementation — schedule a single timeout per waiter —
   * deadlocks: if the bucket is still empty when that one timer fires, nothing
   * schedules another and the waiter is stranded forever.
   */
  private scheduleDrain(): void {
    if (this.timer !== null || this.queue.length === 0) return;

    const waitMs = Math.max(1, Math.ceil((1 / this.refillPerSecond) * 1000));
    this.timer = setTimeout(() => {
      this.timer = null;
      this.drain();
      this.scheduleDrain();
    }, waitMs);

    // Deliberately NOT unref'd. The timer only exists while callers are waiting
    // for a token, and in that state it is the sole pending handle once the
    // in-flight requests finish — unref'ing it lets Node exit with work still
    // queued, silently dropping those requests. `dispose()` is the shutdown path.
  }

  private drain(): void {
    this.refill();
    while (this.tokens >= 1 && this.queue.length > 0) {
      this.tokens -= 1;
      const waiter = this.queue.shift()!;
      waiter.cleanup();
      waiter.resolve();
    }
  }
}
