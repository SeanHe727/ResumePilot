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
  const keep = (finding: string, extra: Record<string, unknown> = {}) => ({ finding, keep: true, fix: 'immediate', ...extra });

  it('keeps each finding as its own group, about its own line, in the reader\'s words', () => {
    // The filter does not group: grouping across lines is what turned one
    // duplicate into several points once code split the groups again.
    const { plan } = planFromMarks({ decisions: [keep('w1', { why: 'lead with the result' }), keep('w2')] }, FINDINGS);

    expect(plan.groups).toEqual([
      { kind: 'immediate', findingIds: ['x3'], targets: ['s2:e0:b3'], score: 3, tag: 'polish' },
      { kind: 'immediate', findingIds: ['x4'], targets: ['s2:e0:b2'], score: 3, tag: 'polish' },
    ]);
    expect(plan.immediate).toEqual(['s2:e0:b3: method before result', 's2:e0:b2: method before result']);
    // The filter's own words stay in the trace.
    expect(JSON.stringify(plan)).not.toContain('lead with the result');
  });

  it('drops names that were not offered and decides each finding once', () => {
    const { plan, unknown, reasons, unmarked } = planFromMarks(
      {
        decisions: [
          keep('c1', { fix: 'shortTerm', why: 'give the baseline' }),
          keep('c9'),
          { finding: 'c1', keep: false, why: 'changed its mind' },
          keep('c2'),
          { finding: 'w1', keep: false, why: 'no room' },
        ],
      },
      FINDINGS,
    );

    expect(unknown).toEqual(['c9']);
    expect(plan.groups!.map((g) => g.findingIds)).toEqual([['x1'], ['x2']]);
    expect(plan.groups![0]!.kind).toBe('shortTerm');
    expect(plan.setAside).toEqual([
      { what: 's2:e0:b3: method before result' },
      // Decided by nobody, and kept on the record rather than dropped.
      { what: 's2:e0:b2: method before result' },
    ]);
    // The reasons are for the trace.
    expect(reasons).toContainEqual({ findingIds: ['x3'], chosen: false, reason: 'no room' });
    expect(unmarked).toEqual(['x4']);
  });

  it('keeps a finding kept without a fix type, labelled fix now', () => {
    // The type labels the point; it does not decide whether the candidate sees it.
    const { plan } = planFromMarks({ decisions: [{ finding: 'c1', keep: true, fix: 'soon' }] }, FINDINGS);
    expect(plan.groups!.map((g) => [g.findingIds, g.kind])).toEqual([[['x1'], 'immediate']]);
  });
});

describe('the report in the résumé order, with the key problems marked', () => {
  const point = (id: string, what: string, extra: Record<string, unknown> = {}) =>
    ({ id, what, why: `why ${id}`, fix: `fix ${id}`, from: [], sourceFindingIds: [], ...extra });
  const reportWith = (points: unknown[], strengths?: string[]) => ({
    summary: { overallScore: 83, formatScore: 100, substanceAvg: 71 },
    perEntry: [{ entryId: 'e', label: 'e', status: 'reviewed', topIssue: '', bullets: [{ bulletId: 'e:b0', text: 'The line as written', topIssue: '' }] }],
    format: { overallScore: 100, issues: [] },
    improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
    full: { ...(strengths ? { strengths } : {}), sections: [{ heading: 'A', points }] },
  }) as never;

  it('opens with a count of each kind and no list of top points', async () => {
    const { renderBrief } = await import('../../src/skills/render-full.js');
    const text = renderBrief(reportWith([point('p1', 'maths wrong', { tag: 'error' }), point('p2', 'vague', { tag: 'polish' })]), 'r.pdf');

    expect(text).toContain('1 error, 0 important, 1 polish.');
    expect(text).not.toContain('Start here');
  });

  it('puts the line first, then its problems, reasons and changes numbered alike', async () => {
    const { renderBrief } = await import('../../src/skills/render-full.js');
    const text = renderBrief(
      reportWith([point('p1', 'maths wrong', { tag: 'error', lines: ['e:b0'] }), point('p2', 'vague', { tag: 'important', lines: ['e:b0'] })]),
      'r.pdf',
    );

    expect(text).toContain('> The line as written\n\n**Problem**\n1. [Error] maths wrong\n2. [Important] vague');
    expect(text).toContain('**Why**\n1. why p1\n2. why p2');
    expect(text).toContain('**How to change it**\n1. fix p1\n2. fix p2');
    expect(text.match(/The line as written/g)).toHaveLength(1);
  });

  it('keeps what already works, after the problems', async () => {
    const { renderBrief } = await import('../../src/skills/render-full.js');
    const text = renderBrief(reportWith([point('p1', 'x')], ['e:b0: a clear result']), 'r.pdf');

    expect(text.indexOf('## Already working')).toBeGreaterThan(text.indexOf('## A'));
  });
});

describe('what the selection does to the page is measured, not cut', () => {
  it('counts additions and savings per line, and the net', async () => {
    const { pageEffect } = await import('../../src/tools/generate-report.js');
    const priced = [
      { ...f('a', 'content', 's2:e0:b0', 'needs a baseline'), costWords: 30 },
      { ...f('b', 'content', 's2:e0:b1', 'needs a baseline'), costWords: 20 },
      { ...f('c', 'wording', 's2:e0:b2, wording', 'cut the filler'), costWords: -12 },
    ];
    const marks = {
      decisions: [
        { finding: 'c1', keep: true, fix: 'shortTerm' },
        { finding: 'c2', keep: true, fix: 'shortTerm' },
        { finding: 'w1', keep: true, fix: 'immediate' },
      ],
    };

    // The same demand on two lines is answered on both.
    expect(pageEffect(marks, priced)).toEqual({ adds: 50, saves: 12, net: 38 });
    // Nothing is set aside for the room: that is the selection's call.
    expect(planFromMarks(marks, priced).plan.groups).toHaveLength(3);
  });
});

describe('a cut says what it saves', () => {
  it('reads savings from the wording reply, in either shape', async () => {
    const { wordingIssues } = await import('../../src/tools/analyze-wording.js');
    expect(wordingIssues([{ what: 'three mechanisms in one clause', savesWords: 12 }, 'weak verb'])).toEqual({
      issues: ['three mechanisms in one clause', 'weak verb'],
      issueSavings: [12, 0],
    });
    expect(wordingIssues(['weak verb'])).toEqual({ issues: ['weak verb'] });
  });
});

describe('a wording finding carries its saving as a negative cost', () => {
  it('maps issueSavings onto the findings it belongs to', async () => {
    const { everyFinding } = await import('../../src/tools/generate-report.js');
    const found = everyFinding({
      resume: { sections: [] },
      format: { overallScore: 100, issues: [] },
      entries: [],
      wording: [{ entryId: 's2:e0', overallScore: 60, perBullet: [{
        bulletId: 's2:e0:b0', verbStrength: { score: 60, detail: '' }, concision: { score: 40, detail: '' },
        issues: ['three mechanisms in one clause', 'weak verb'], issueSavings: [12, 0],
      }] }],
    } as never);

    expect(found.map((f) => f.costWords)).toEqual([-12, undefined]);
  });
});

describe('the skills list has a reader', () => {
  it('turns unsupported skills from the narrative reading into findings', async () => {
    const { everyFinding } = await import('../../src/tools/generate-report.js');
    const found = everyFinding({
      resume: { sections: [] },
      format: { overallScore: 100, issues: [] },
      entries: [],
      narrative: { overallScore: 70, arc: '', gaps: [], orderingNotes: [], withinEntries: [],
        unsupportedSkills: ['Kubernetes: no entry shows it'] },
    } as never);

    expect(found).toContainEqual(expect.objectContaining({ role: 'narrative', target: 'skills', what: 'Kubernetes: no entry shows it' }));
  });
});

describe('the write-up is fitted to the page', () => {
  it('reads what a write-up does to the page from its own costs', async () => {
    const { pageWords } = await import('../../src/tools/write-report.js');
    const w = pageWords({
      sections: [{ points: [{ cost: 'about 6 words' }, { cost: 'saves about 10 words' }, { cost: 'no words' }, { cost: 'about 30 words' }] }],
    });
    expect(w).toBe(26);
  });

  it('asks once more when the first write-up runs well past the room', async () => {
    const { writeFullReport } = await import('../../src/tools/write-report.js');
    const long = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: [{ what: 'a', why: '', from: [], cost: 'about 80 words' }] }] });
    const fitted = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: [{ what: 'b', why: '', from: [], cost: 'about 20 words' }] }] });
    const asked: Array<Array<{ role: string; content: string }>> = [];
    const replies = [long, fitted];
    const ctx = {
      queryEngine: {
        async query(p: { messages: Array<{ role: string; content: string }> }) {
          asked.push(p.messages);
          return { type: 'text', content: replies[asked.length - 1], usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' };
        },
      },
      abortSignal: new AbortController().signal,
    } as never;
    const report = { format: { overallScore: 90, issues: [] }, improvementPlan: { groups: [{ kind: 'immediate', findingIds: ['a'], targets: [] }], immediate: ['x'], shortTerm: [], longTerm: [] } } as never;

    const full = await writeFullReport(report, { resume: { sections: [] } } as never, [f('a', 'format', 'format', 'x')], ctx, 25);

    expect(asked).toHaveLength(2);
    expect(asked[1]!.at(-1)!.content).toContain('adds about 80 words and the page has about 25');
    expect(full?.sections[0]?.points[0]?.what).toBe('b');
  });
});

describe('the write-up is fitted in points too', () => {
  it('asks for the findings the write-up left out, and never trims by count', async () => {
    const { writeFullReport } = await import('../../src/tools/write-report.js');
    const F = [f('a', 'content', 's1:e0:b0', 'first'), f('b', 'content', 's1:e0:b1', 'second')];
    const onlyFirst = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: Array.from({ length: 25 }, () => ({ what: 'p', why: '', from: ['c1'], cost: 'no words' })) }] });
    const both = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: [{ what: 'a', why: '', from: ['c1'], cost: 'no words' }, { what: 'b', why: '', from: ['c2'], cost: 'no words' }] }] });
    const asked: Array<Array<{ role: string; content: string }>> = [];
    const replies = [onlyFirst, both];
    const ctx = {
      queryEngine: { async query(p: { messages: Array<{ role: string; content: string }> }) {
        asked.push(p.messages);
        return { type: 'text', content: replies[asked.length - 1], usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' };
      } },
      abortSignal: new AbortController().signal,
    } as never;
    const report = { format: { overallScore: 90, issues: [] }, improvementPlan: {
      groups: [{ kind: 'immediate', findingIds: ['a'], targets: [] }, { kind: 'immediate', findingIds: ['b'], targets: [] }],
      immediate: ['x'], shortTerm: [], longTerm: [] } } as never;

    await writeFullReport(report, { resume: { sections: [] } } as never, F, ctx, 100);

    expect(asked).toHaveLength(2);
    const note = asked[1]!.at(-1)!.content;
    expect(note).toContain('These findings are cited by no point: c2');
    // Twenty-five points is no reason on its own to cut any.
    expect(note).not.toMatch(/Bring it down/);
  });
});

describe('a note that the order is already right is not a finding', () => {
  it('drops confirmations and keeps changes', async () => {
    const { confirmsOrder } = await import('../../src/agent/orchestrator.js');
    expect(confirmsOrder('Keep Education before Experience.')).toBe(true);
    expect(confirmsOrder('The projects are already in chronological order.')).toBe(true);
    expect(confirmsOrder('Move Mobility Systems above Eastern Robotics.')).toBe(false);
  });
});

describe('errors in the plan', () => {
  const e = (id: string, target: string, kind?: SourceFinding['kind']): SourceFinding => ({
    id, role: 'content', target, what: `about ${target}`, ...(kind ? { kind } : {}),
  });
  const ERRS = [e('a', 's1:e0:b0', 'wrong'), e('b', 's1:e1:b2', 'wrong'), e('c', 's1:e1:b2'), e('d', 's2:e0:b1', 'unclear')];

  it('tags an error as one, and ranks an unscored error ahead of an unscored refinement', () => {
    const { plan } = planFromMarks(
      { decisions: [{ finding: 'c4', keep: true, fix: 'immediate' }, { finding: 'c2', keep: true, fix: 'immediate' }] },
      ERRS,
    );

    expect(plan.groups?.map((g) => [g.findingIds[0], g.tag])).toEqual([['b', 'error'], ['d', 'polish']]);
  });
});

describe('the selection scores, the code orders', () => {
  it('orders groups by score, highest first, keeping the selection order for ties', async () => {
    const F = [
      { id: 'a', role: 'content', target: 's1:e0:b0', what: 'polish' },
      { id: 'b', role: 'content', target: 's1:e0:b1', what: 'error', kind: 'wrong' },
      { id: 'c', role: 'content', target: 's1:e0:b2', what: 'important' },
    ] as SourceFinding[];
    const { plan } = planFromMarks(
      { decisions: [
        { finding: 'c1', keep: true, fix: 'immediate', score: 2 },
        { finding: 'c2', keep: true, fix: 'immediate', score: 9 },
        { finding: 'c3', keep: true, fix: 'immediate', score: 6 },
      ] },
      F,
    );

    expect(plan.groups?.map((g) => [g.findingIds[0], g.tag])).toEqual([['b', 'error'], ['c', 'important'], ['a', 'polish']]);
  });
});
