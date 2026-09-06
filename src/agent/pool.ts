import type { ConcurrencyPool } from './types.js';

/**
 * A ceiling on how many sub-agents run at once.
 *
 * Not the same job as the rate limiter. That one paces requests against the
 * provider's quota; this one bounds how much work is in flight, which is what
 * keeps a fan-out over twenty entries from queueing eighty requests deep and
 * making every one of them look slow.
 */
export class SemaphorePool implements ConcurrencyPool {
  private running = 0;
  private readonly waiting: Array<() => void> = [];

  constructor(private readonly maxConcurrency = 3) {
    if (maxConcurrency < 1) throw new Error('maxConcurrency must be at least 1');
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }

  /**
   * Every task is submitted at once and the pool decides how many proceed.
   *
   * `Promise.all` rejects on the first failure, so callers that must not lose
   * the other results resolve their own errors inside `fn` — which is what the
   * orchestrator's `continue` strategy does.
   */
  async runAll<T>(tasks: Array<() => Promise<T>>): Promise<T[]> {
    return Promise.all(tasks.map((task) => this.run(task)));
  }

  getStats(): { running: number; queued: number; max: number } {
    return { running: this.running, queued: this.waiting.length, max: this.maxConcurrency };
  }

  private async acquire(): Promise<void> {
    if (this.running < this.maxConcurrency) {
      this.running += 1;
      return;
    }
    return new Promise<void>((resolve) => this.waiting.push(resolve));
  }

  private release(): void {
    const next = this.waiting.shift();
    // The slot passes straight to whoever was waiting rather than being freed
    // and re-taken; decrementing first would let a newcomer jump the queue.
    if (next) next();
    else this.running -= 1;
  }
}
