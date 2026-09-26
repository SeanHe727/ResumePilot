import { describe, expect, it } from 'vitest';

import type { SourceFinding } from '../../src/domain.js';
import { planFromMarks } from '../../src/tools/generate-report.js';

/**
 * The selection marks findings; the lines a group is about come from them.
 *
 * Measured on the item-14 runs: the selection wrote "Tighten s2:e0:b0-b3 by
 * leading with the action and result", a range it made up, which folded a line
 * the wording reader had called outcome-first into advice meant for two others.
 */
const f = (id: string, role: SourceFinding['role'], target: string, what: string): SourceFinding => ({ id, role, target, what });

const FINDINGS = [
  f('x1', 'content', 's2:e0:b0', 'no starting count'),
  f('x2', 'content', 's2:e0:b2', 'relative or points?'),
  f('x3', 'wording', 's2:e0:b3, wording', 'method before result'),
  f('x4', 'wording', 's2:e0:b2, wording', 'method before result'),
];

describe('planFromMarks', () => {
  it('works out the lines a group is about from its findings', () => {
    const { plan } = planFromMarks(
      { chosen: [{ kind: 'immediate', findings: ['w1', 'w2'], why: 'lead with the result' }] },
      FINDINGS,
    );

    expect(plan.groups).toEqual([{ kind: 'immediate', findingIds: ['x3', 'x4'], targets: ['s2:e0:b3', 's2:e0:b2'] }]);
    // Not b0: nothing in the group was about it. And in the reader's words.
    expect(plan.immediate).toEqual(['s2:e0:b3, s2:e0:b2: method before result (and 1 more like it)']);
    expect(JSON.stringify(plan)).not.toContain('lead with the result');
  });

  it('drops names that were not offered and places each finding once', () => {
    const { plan, unknown, reasons, unmarked } = planFromMarks(
      {
        chosen: [
          { kind: 'shortTerm', findings: ['c1', 'c9'], why: 'give the baseline' },
          { kind: 'immediate', findings: ['c1', 'c2'], why: 'say which it is' },
        ],
        setAside: [{ findings: ['w1'], because: 'no room' }],
      },
      FINDINGS,
    );

    expect(unknown).toEqual(['c9']);
    expect(plan.groups!.map((g) => g.findingIds)).toEqual([['x1'], ['x2']]);
    expect(plan.setAside).toEqual([
      { what: 's2:e0:b3: method before result' },
      // Marked by nobody, and kept.
      { what: 's2:e0:b2: method before result' },
    ]);
    // The reasons are for the trace.
    expect(reasons).toContainEqual({ findingIds: ['x3'], chosen: false, reason: 'no room' });
    expect(unmarked).toEqual(['x4']);
  });

  it('keeps no group without a kind or a finding', () => {
    const { plan } = planFromMarks(
      { chosen: [{ kind: 'soon', findings: ['c1'] }, { kind: 'immediate', findings: [] }] },
      FINDINGS,
    );
    expect(plan.groups).toEqual([]);
  });
});
