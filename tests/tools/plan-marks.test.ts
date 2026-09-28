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

    expect(plan.groups).toEqual([
      { kind: 'immediate', findingIds: ['x3', 'x4'], targets: ['s2:e0:b3', 's2:e0:b2'], score: 3, tag: 'polish' },
    ]);
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
      reportWith([point('p1', 'maths wrong', { tag: 'error', lines: ['e:b0'] }), point('p2', 'vague', { tag: 'polish', lines: ['e:b0'] })]),
      'r.pdf',
    );

    expect(text).toContain('> The line as written\n\n**Problem**\n1. [Error] maths wrong\n2. [Polish] vague');
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
    const marks = { chosen: [{ kind: 'shortTerm', findings: ['c1', 'c2'] }, { kind: 'immediate', findings: ['w1'] }] };

    // The same demand on two lines is answered on both.
    expect(pageEffect(marks, priced)).toEqual({ adds: 50, saves: 12, net: 38 });
    // Nothing is set aside for the room: that is the selection's call.
    expect(planFromMarks(marks, priced).plan.groups).toHaveLength(2);
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
    const report = { format: { overallScore: 90, issues: [] }, improvementPlan: { groups: [{ kind: 'immediate', findingIds: [], targets: [] }], immediate: ['x'], shortTerm: [], longTerm: [] } } as never;

    const full = await writeFullReport(report, { resume: { sections: [] } } as never, [], ctx, 25);

    expect(asked).toHaveLength(2);
    expect(asked[1]!.at(-1)!.content).toContain('adds about 80 words and the page has about 25');
    expect(full?.sections[0]?.points[0]?.what).toBe('b');
  });
});

describe('the write-up is fitted in points too', () => {
  it('asks for the groups the write-up left out, and never trims by count', async () => {
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
    expect(note).toContain('These groups have no point: group 2');
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

  it('splits a group holding errors on different lines into one group per line', () => {
    const { plan } = planFromMarks({ chosen: [{ kind: 'immediate', findings: ['c1', 'c2', 'c3'] }] }, ERRS);

    expect(plan.groups?.map((g) => g.findingIds)).toEqual([['a'], ['b', 'c']]);
  });

  it('puts groups with an error ahead of the rest, keeping their order otherwise', () => {
    const { plan } = planFromMarks(
      { chosen: [{ kind: 'immediate', findings: ['c4'] }, { kind: 'immediate', findings: ['c2'] }] },
      ERRS,
    );

    expect(plan.groups?.map((g) => g.findingIds)).toEqual([['b'], ['d']]);
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
      { chosen: [
        { kind: 'immediate', findings: ['c1'], score: 2 },
        { kind: 'immediate', findings: ['c2'], score: 9 },
        { kind: 'immediate', findings: ['c3'], score: 6 },
      ] },
      F,
    );

    expect(plan.groups?.map((g) => [g.findingIds[0], g.tag])).toEqual([['b', 'error'], ['c', 'important'], ['a', 'polish']]);
  });
});
