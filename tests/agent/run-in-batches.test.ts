import { describe, expect, it } from 'vitest';

import { runInBatches } from '../../src/agent/loop.js';
import type { ToolCall } from '../../src/types.js';

const call = (name: string, id: string): ToolCall => ({ id, name, input: {} }) as ToolCall;

/**
 * Reviews run side by side; anything else waits its turn.
 *
 * Measured: a first review issued ten review calls in one response and the loop
 * ran them one at a time for 15.5 minutes.
 */
describe('runInBatches', () => {
  it('runs a run of reviews at once and returns results in the order issued', async () => {
    let inFlight = 0;
    let peak = 0;
    const calls = ['review_content', 'review_wording', 'review_content'].map((n, i) => call(n, `c${i}`));

    const results = await runInBatches(calls, async (c) => {
      inFlight += 1;
      peak = Math.max(peak, inFlight);
      // The first finishes last, so an order taken from completion would be wrong.
      await new Promise((r) => setTimeout(r, c.id === 'c0' ? 20 : 5));
      inFlight -= 1;
      return c.id;
    });

    expect(results).toEqual(['c0', 'c1', 'c2']);
    expect(peak).toBe(3);
  });

  it('never runs a tool outside the set alongside anything', async () => {
    const log: string[] = [];
    const calls = [
      call('review_content', 'a'),
      call('apply_revision', 'b'),
      call('review_content', 'c'),
      call('generate_report', 'd'),
    ];

    await runInBatches(calls, async (c) => {
      log.push(`start ${c.id}`);
      await new Promise((r) => setTimeout(r, 1));
      log.push(`end ${c.id}`);
      return c.id;
    });

    expect(log).toEqual(['start a', 'end a', 'start b', 'end b', 'start c', 'end c', 'start d', 'end d']);
  });

  it('keeps at most four reviews in flight', async () => {
    let inFlight = 0;
    let peak = 0;
    const calls = Array.from({ length: 10 }, (_, i) => call('review_content', `c${i}`));

    await runInBatches(calls, async () => {
      inFlight += 1;
      peak = Math.max(peak, inFlight);
      await new Promise((r) => setTimeout(r, 2));
      inFlight -= 1;
      return null;
    });

    expect(peak).toBe(4);
  });
});
