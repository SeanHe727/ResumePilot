import { describe, expect, it } from 'vitest';

import { unquoted } from '../../src/tools/write-report.js';

describe('quotes checked against the page', () => {
  const page = 'Cut p99 latency from 120 ms to 80 ms, a 25% drop\nTrained a GRPO policy';
  const draft = (...evidence: string[]) => ({ sections: [{ points: evidence.map((e) => ({ evidence: e })) }] });

  it('accepts a quote the page has, whatever its case, spacing or quote marks', () => {
    expect(unquoted(draft('“cut p99  latency from 120 ms”', 'a 25% drop'), page)).toEqual([]);
  });

  it('accepts a quote elided with an ellipsis where every piece is on the page', () => {
    expect(unquoted(draft('Cut p99 latency … a 25% drop'), page)).toEqual([]);
  });

  it('names a quote the page does not have', () => {
    expect(unquoted(draft('a 33% drop', 'Trained a GRPO policy'), page)).toEqual(['a 33% drop']);
  });
});
