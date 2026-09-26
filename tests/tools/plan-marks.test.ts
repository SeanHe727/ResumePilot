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

describe('each point once', () => {
  it('does not repeat a start-here point under its entry', async () => {
    const { renderBrief } = await import('../../src/skills/render-full.js');
    const point = (id: string, what: string, why: string) => ({ id, what, why, from: [], sourceFindingIds: [] });
    const report = {
      summary: { overallScore: 80, formatScore: 100, substanceAvg: 70 },
      perEntry: [], format: { overallScore: 100, issues: [] },
      improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
      full: {
        startHere: ['p1'],
        sections: [{ heading: 'A', points: [point('p1', 'fix the maths', 'a reader checks it'), point('p2', 'name the tool', 'it is vague')] }],
      },
    } as never;

    const text = renderBrief(report, 'r.pdf');

    expect(text.match(/fix the maths/g)).toHaveLength(1);
    expect(text).toContain('1. fix the maths\n   a reader checks it');
    expect(text).toContain('- name the tool\n  it is vague');
  });
});

describe('the write-up is fitted in points too', () => {
  it('asks to merge when there are far more points than a report should hold', async () => {
    const { writeFullReport } = await import('../../src/tools/write-report.js');
    const many = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: Array.from({ length: 25 }, (_, i) => ({ what: `p${i}`, why: '', from: [], cost: 'saves about 2 words' })) }] });
    const merged = JSON.stringify({ sections: [{ about: { type: 'resume' }, points: [{ what: 'merged', why: '', from: [], cost: 'no words' }] }] });
    const asked: Array<Array<{ role: string; content: string }>> = [];
    const replies = [many, merged];
    const ctx = {
      queryEngine: { async query(p: { messages: Array<{ role: string; content: string }> }) {
        asked.push(p.messages);
        return { type: 'text', content: replies[asked.length - 1], usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' };
      } },
      abortSignal: new AbortController().signal,
    } as never;
    const report = { format: { overallScore: 90, issues: [] }, improvementPlan: { groups: [{ kind: 'immediate', findingIds: [], targets: [] }], immediate: ['x'], shortTerm: [], longTerm: [] } } as never;

    await writeFullReport(report, { resume: { sections: [] } } as never, [], ctx, 100);

    expect(asked).toHaveLength(2);
    expect(asked[1]!.at(-1)!.content).toContain('has 25 points. Bring it to about fifteen');
  });
});
