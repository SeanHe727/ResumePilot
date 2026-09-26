import { describe, expect, it } from 'vitest';

import { abortable, beforeAbort } from '../../src/query-engine/providers/abortable.js';

/**
 * Measured: a sub-agent with a 180-second deadline sat on one request for 897
 * seconds, because a stalled stream never saw the abort.
 */
describe('abortable', () => {
  it('ends a stream that has stalled once the signal fires', async () => {
    const stalled: AsyncIterable<number> = {
      [Symbol.asyncIterator]: () => ({ next: () => new Promise<IteratorResult<number>>(() => {}) }),
    };
    const seen: number[] = [];
    const started = Date.now();
    for await (const n of abortable(stalled, AbortSignal.timeout(50))) seen.push(n);

    expect(seen).toEqual([]);
    expect(Date.now() - started).toBeLessThan(1000);
  });

  it('passes a healthy stream through untouched', async () => {
    async function* three() { yield 1; yield 2; yield 3; }
    const seen: number[] = [];
    for await (const n of abortable(three(), new AbortController().signal)) seen.push(n);
    expect(seen).toEqual([1, 2, 3]);
  });

  it('rejects a request whose headers never arrive', async () => {
    await expect(beforeAbort(new Promise(() => {}), AbortSignal.timeout(50))).rejects.toThrow('Request aborted');
  });
});

describe('what loses the race', () => {
  it('leaves no unhandled rejection behind when the request fails after the abort', async () => {
    const seen: unknown[] = [];
    const onUnhandled = (e: unknown) => seen.push(e);
    process.on('unhandledRejection', onUnhandled);
    const late = new Promise((_, reject) => setTimeout(() => reject(new Error('aborted by the SDK')), 30));
    await expect(beforeAbort(late, AbortSignal.timeout(5))).rejects.toThrow('Request aborted');
    await new Promise((r) => setTimeout(r, 60));
    process.off('unhandledRejection', onUnhandled);
    expect(seen).toEqual([]);
  });
});
