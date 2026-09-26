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

describe('the page budget is held in code', () => {
  const priced = [
    { ...f('a', 'content', 's2:e0:b0', 'needs a baseline'), costWords: 30 },
    { ...f('b', 'content', 's2:e0:b1', 'needs a count'), costWords: 20 },
    f('c', 'wording', 's2:e0:b2, wording', 'cut the filler'),
  ];

  it('keeps chosen groups in order while they fit, and sets the rest aside', () => {
    // Measured: about 120 words of additions chosen for a page with 46 left.
    const { plan, reasons } = planFromMarks(
      {
        chosen: [
          { kind: 'shortTerm', findings: ['c1'] },
          { kind: 'shortTerm', findings: ['c2'] },
          { kind: 'immediate', findings: ['w1'] },
        ],
      },
      priced,
      40,
    );

    expect(plan.groups!.map((g) => g.findingIds)).toEqual([['a'], ['c']]);
    expect(plan.setAside).toEqual([{ what: 's2:e0:b1: needs a count' }]);
    expect(reasons).toContainEqual({ findingIds: ['b'], chosen: false, reason: 'over the page budget' });
  });

  it('always keeps what costs no words, even with no room at all', () => {
    const { plan } = planFromMarks({ chosen: [{ kind: 'immediate', findings: ['w1'] }] }, priced, 0);
    expect(plan.groups!.map((g) => g.findingIds)).toEqual([['c']]);
  });
});

describe('the report opens with where to start and what already works', () => {
  it('lists the start-here points and the strengths before the entries', async () => {
    const { renderBrief } = await import('../../src/skills/render-full.js');
    const point = (id: string, what: string) => ({ id, what, why: '', from: [], sourceFindingIds: [] });
    const report = {
      summary: { overallScore: 83, formatScore: 100, substanceAvg: 71 },
      perEntry: [],
      format: { overallScore: 100, issues: [] },
      improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
      full: {
        startHere: ['p2'],
        strengths: ['s2:e0:b2: three held-out metrics, each against the base model'],
        sections: [{ heading: 'A', points: [point('p1', 'second thing'), point('p2', 'first thing')] }],
      },
    } as never;

    const text = renderBrief(report, 'r.pdf');

    expect(text).toContain('## Start here\n\n1. first thing');
    expect(text).toContain('## Already working\n\n- s2:e0:b2: three held-out metrics');
    expect(text.indexOf('## Start here')).toBeLessThan(text.indexOf('## A'));
  });
});

describe('over the page, the selection is asked again before anything is cut', () => {
  it('tells it what its choice adds and uses the second answer', async () => {
    const { generateReportTool } = await import('../../src/tools/index.js');
    const asked: Array<{ messages: Array<{ role: string; content: string }> }> = [];
    const replies = [
      JSON.stringify({ chosen: [{ kind: 'shortTerm', findings: ['c1'] }] }),
      JSON.stringify({ chosen: [], setAside: [{ findings: ['c1'], because: 'no room' }] }),
      JSON.stringify({ sections: [] }),
    ];
    const ctx = {
      session: {
        state: {
          resume: {
            sourcePath: 'r.pdf', format: 'pdf', rawText: '',
            sections: [{ id: 's2', kind: 'experience', heading: 'X', looseLines: [], span: { start: 0, end: 1 },
              entries: [{ id: 's2:e0', sectionId: 's2', index: 0, headerLines: ['A'], span: { start: 0, end: 1 },
                bullets: [{ id: 's2:e0:b0', entryId: 's2:e0', index: 0, text: 'Did a thing', span: { start: 0, end: 1 } }] }] }],
            meta: { wordCount: 640, quality: 'clean', layoutWarnings: [] },
          },
          formatDiagnosis: { overallScore: 90, metrics: { length: { wordCount: 640, pageCount: 1 } }, issues: [] },
          entryDiagnoses: [{ entryId: 's2:e0', overallScore: 50, bullets: [{ bulletId: 's2:e0:b0', overallScore: 50,
            issues: [{ what: 'needs a baseline', costWords: 30 }], strengths: [] }] }],
        },
      },
      queryEngine: {
        async query(params: { messages: Array<{ role: string; content: string }> }) {
          asked.push(params);
          return { type: 'text', content: replies[asked.length - 1], usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' };
        },
        getUsageSummary: () => '',
        checkBudget: () => ({ ok: true }),
      },
      abortSignal: new AbortController().signal,
    } as never;

    const result = await generateReportTool.execute({} as never, ctx);

    expect(asked[1]!.messages.at(-1)!.content).toContain('adds about 30 words, and the page has about 10 left');
    expect((result as { data: { improvementPlan: { shortTerm: string[] } } }).data.improvementPlan.shortTerm).toEqual([]);
  });
});
