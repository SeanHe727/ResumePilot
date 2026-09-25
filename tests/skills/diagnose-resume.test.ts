import { describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeDocument } from '../../src/domain.js';
import { DefaultResumeParser } from '../../src/document/index.js';
import type { ParsedResponse, QueryParams } from '../../src/query-engine/types.js';
import { createToolRegistry } from '../../src/tools/index.js';
import { createSkillRegistry, render } from '../../src/skills/index.js';
import type { SkillContext, SkillOutput } from '../../src/skills/types.js';

/**
 * Answers each prompt with a canned reply chosen by which task was asked for,
 * so one fake covers a pipeline that makes several different calls.
 */
function fakeEngine() {
  const seen: QueryParams[] = [];
  return {
    seen,
    engine: {
      async query(params: QueryParams): Promise<ParsedResponse> {
        seen.push(params);
        return {
          type: 'text',
          content: REPLIES[params.task ?? ''] ?? '{}',
          usage: { inputTokens: 0, outputTokens: 0 },
          stopReason: 'end_turn',
        };
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    },
  };
}

const REPLIES: Record<string, string> = {
  diagnose_bullet: JSON.stringify({
    bullets: [
      {
        bulletId: 'x',
        overallScore: 20,
        dimensions: {
          impact: { score: 20, detail: 'a duty' },
          measurement: { score: 0, detail: 'no figure' },
          method: { score: 10, detail: 'no approach' },
        },
        issues: ['no measurable outcome'],
        strengths: [],
      },
    ],
    narrative: { redundantPairs: [], weakLead: true, coherence: { score: 40, detail: '' } },
  }),
  judge_wording: JSON.stringify({
    perBullet: [
      {
        bulletId: 'x',
        verbStrength: { score: 20, detail: 'bystander opener' },
        concision: { score: 60, detail: '' },
        issues: ['opens with "Responsible for"'],
      },
    ],
  }),
  generate_report: JSON.stringify({
    immediate: ['delete the pronoun'],
    shortTerm: ['find the latency number'],
    longTerm: [],
  }),
};

async function runOn(fixture: string): Promise<{ out: SkillOutput; seen: QueryParams[] }> {
  const { engine, seen } = fakeEngine();
  const session = {
    id: 'test',
    state: {},
    progress: { total: 0, done: 0, current: 0, phase: '' },
    abortController: new AbortController(),
  };
  const ctx = {
    toolRegistry: createToolRegistry(),
    queryEngine: engine,
    knowledge: { search: async () => [] },
    session,
  } as unknown as SkillContext;

  const skill = createSkillRegistry().resolve('diagnose-resume');
  const out = await skill.execute({ rawInput: `tests/fixtures/${fixture}` }, ctx);
  return { out, seen };
}

describe('skill registry', () => {
  it('routes a plain sentence to the sub-agent skill, without asking the model', () => {
    // Both skills diagnose a resume; only one carries triggers, so which runs
    // does not depend on registration order.
    const registry = createSkillRegistry();

    expect(registry.find('diagnose my resume')?.name).toBe('orchestrated-diagnose');
    expect(registry.find('please review my resume')?.name).toBe('orchestrated-diagnose');
  });

  it('reaches the deterministic pipeline by name', () => {
    expect(createSkillRegistry().resolve('diagnose-resume').name).toBe('diagnose-resume');
  });

  it('returns null when nothing matches, leaving the loop to plan', () => {
    expect(createSkillRegistry().find('what is the weather')).toBeNull();
  });

  it('refuses to register the same name twice', () => {
    // Silent replacement would make the live implementation depend on import order.
    const registry = createSkillRegistry();
    const skill = registry.resolve('diagnose-resume');

    expect(() => (registry as never as { register: (s: unknown) => void }).register(skill)).toThrow(
      /already registered/,
    );
  });
});

describe('diagnose-resume', () => {
  it('runs parse, format, per-entry diagnosis and report', async () => {
    const { out, seen } = await runOn('sample-resume.md');

    expect(out.success).toBe(true);
    const tasks = new Set(seen.map((s) => s.task));
    // `split_sections` is the line labeller, which runs before anything can be
    // diagnosed and falls back to the rules when its reply is unusable.
    expect(tasks).toEqual(
      new Set(['split_sections', 'diagnose_bullet', 'judge_wording', 'generate_report']),
    );
  });

  it('scopes every knowledge lookup to a dimension', async () => {
    // Measured on the real corpus: unscoped lookups pick the wrong rule family
    // for about a third of bullets, because similarity tracks topic overlap.
    const scopes: Array<string | undefined> = [];
    const { engine } = fakeEngine();
    const ctx = {
      toolRegistry: createToolRegistry(),
      queryEngine: engine,
      knowledge: {
        search: async (_q: string, opts?: { dimension?: string }) => {
          scopes.push(opts?.dimension);
          return [];
        },
      },
      session: {
        id: 't',
        state: {},
        progress: { total: 0, done: 0, current: 0, phase: '' },
        abortController: new AbortController(),
      },
    } as unknown as SkillContext;

    await createSkillRegistry()
      .resolve('diagnose-resume')
      .execute({ rawInput: 'tests/fixtures/sample-resume.md' }, ctx);

    expect(scopes.length).toBeGreaterThan(0);
    expect(scopes.every((s) => s !== undefined)).toBe(true);
  });

  it('stops on a scanned file rather than diagnosing an empty document', async () => {
    const { out } = await runOn('scanned.pdf');

    expect(out.success).toBe(false);
    expect(out.error).toMatch(/no text layer/);
    expect(out.error).toMatch(/text PDF or a \.docx/);
  });

  it('reports a missing file as a normal error', async () => {
    const { out } = await runOn('does-not-exist.md');

    expect(out.success).toBe(false);
    expect(out.error).toMatch(/could not read the resume/);
  });

  it('leaves the diagnosis on the session for later commands', async () => {
    const { engine } = fakeEngine();
    const session = {
      id: 't',
      state: {} as Record<string, unknown>,
      progress: { total: 0, done: 0, current: 0, phase: '' },
      abortController: new AbortController(),
    };
    const ctx = {
      toolRegistry: createToolRegistry(),
      queryEngine: engine,
      knowledge: { search: async () => [] },
      session,
    } as unknown as SkillContext;

    await createSkillRegistry()
      .resolve('diagnose-resume')
      .execute({ rawInput: 'tests/fixtures/sample-resume.md' }, ctx);

    expect(session.state.mode).toBe('diagnose');
    expect(session.state.latestReport).toBeDefined();
    expect((session.state.resume as ResumeDocument).sections.length).toBeGreaterThan(0);
  });

  it('tracks progress so a long run is not silent', async () => {
    const { engine } = fakeEngine();
    const session = {
      id: 't',
      state: {},
      progress: { total: 0, done: 0, current: 0, phase: '' },
      abortController: new AbortController(),
    };
    const ctx = {
      toolRegistry: createToolRegistry(),
      queryEngine: engine,
      knowledge: { search: async () => [] },
      session,
    } as unknown as SkillContext;

    await createSkillRegistry()
      .resolve('diagnose-resume')
      .execute({ rawInput: 'tests/fixtures/sample-resume.md' }, ctx);

    expect(session.progress.done).toBe(session.progress.total);
    expect(session.progress.phase).toMatch(/diagnosing entries/);
  });
});

describe('report rendering', () => {
  it('leads with the score and lists the plan by what it costs to act', async () => {
    const { out } = await runOn('sample-resume.md');
    const text = render(out.result as DiagnosisReport);

    expect(text).toMatch(/^Overall \d+\/100/);
    expect(text).toContain('Fix now');
    expect(text).toContain('Needs a figure you have to find');
  });

  it('quotes the bullet alongside its score', async () => {
    const { out } = await runOn('sample-resume.md');
    const text = render(out.result as DiagnosisReport);

    expect(text).toContain('Reduced P99 latency');
  });
});

describe('generate_report aggregation', () => {
  it('weights format heaviest, since every other axis assumes the text was read', async () => {
    const { out } = await runOn('sample-resume.md');
    const report = out.result as DiagnosisReport;

    expect(report.summary.formatScore).toBeGreaterThan(report.summary.substanceAvg);
    // Format 30% of a much higher score pulls the overall above pure substance.
    expect(report.summary.overallScore).toBeGreaterThan(report.summary.substanceAvg);
  });

  it('counts entries and bullets from the resume, not from the diagnoses', async () => {
    // The model may return fewer rows than there are bullets; the document is
    // the source of truth for what exists.
    const doc = await new DefaultResumeParser().parse('tests/fixtures/sample-resume.md');
    const expected = doc.sections.flatMap((s) => s.entries);
    const { out } = await runOn('sample-resume.md');

    expect((out.result as DiagnosisReport).summary.totalEntries).toBe(expected.length);
  });

  it('surfaces the weaknesses that recur across bullets', async () => {
    const { out } = await runOn('messy-resume.md');
    const report = out.result as DiagnosisReport;

    expect(report.summary.topWeaknesses.length).toBeGreaterThan(0);
  });
});


describe('what leaves the machine', () => {
  /** Everything in the fixtures that identifies a person rather than a job. */
  const CONTACT_DETAILS = ['Sean Chen', 'sean@example.com', '138 0000 0000', 'github.com/seanchen'];

  it('sends no contact detail to the agents that diagnose', async () => {
    // Not because anything strips them: the diagnosis loop walks `entries`,
    // and `isEntryBearing` keeps contact, skills and summary out of entries
    // whatever their body looks like. That line was written for a different
    // reason, so this pins the consequence rather than the cause.
    //
    // The line labeller is excluded, and has to be: deciding that a line is
    // the contact block means reading it. It returns roles by line number and
    // never returns text, so nothing it sees can reach a diagnosis.
    const { seen } = await runOn('sample-resume.md');
    const diagnostic = seen.filter((s) => s.task !== 'split_sections');
    const sent = JSON.stringify(diagnostic);

    expect(diagnostic.length).toBeGreaterThan(0);
    for (const detail of CONTACT_DETAILS) {
      expect(sent, `sent to the model: ${detail}`).not.toContain(detail);
    }
  });

  it('keeps them out even when the contact block is written as bullets', async () => {
    // The shape-based fallback in `isEntryBearing` treats a bulleted body as
    // entries — which is right for an unrecognised heading and wrong here.
    const { out, seen } = await runOn('bulleted-contact.md');
    const diagnostic = seen.filter((s) => s.task !== 'split_sections');
    const everything = JSON.stringify(diagnostic) + render(out.result as DiagnosisReport);

    for (const detail of CONTACT_DETAILS) {
      expect(everything, `leaked: ${detail}`).not.toContain(detail);
    }
  });

  it('shows no contact detail in the report, but does name the employer', async () => {
    // The employer stays: `20  ByteDance — Backend Engineer Intern` is how the
    // reader knows which entry a score belongs to.
    const { out } = await runOn('sample-resume.md');
    const text = render(out.result as DiagnosisReport);

    for (const detail of CONTACT_DETAILS) {
      expect(text, `printed: ${detail}`).not.toContain(detail);
    }
    expect(text).toContain('ByteDance');
  });
});

describe('entry narrative in the report', () => {
  const base: DiagnosisReport = {
    summary: {
      totalEntries: 1,
      totalBullets: 3,
      overallScore: 50,
      substanceAvg: 50,
      wordingAvg: 50,
      formatScore: 50,
      topStrengths: [],
      topWeaknesses: [],
    },
    perEntry: [
      {
        entryId: 'e1',
        label: 'Acme — Engineer',
        score: 50,
        topIssue: '',
        bullets: [
          { bulletId: 'b0', text: 'Built the thing', score: 40, topIssue: '' },
          { bulletId: 'b1', text: 'Shipped the thing', score: 50, topIssue: '' },
          { bulletId: 'b2', text: 'Cut latency 40%', score: 80, topIssue: '' },
        ],
      },
    ],
    format: { overallScore: 50 } as DiagnosisReport['format'],
    improvementPlan: { immediate: [], shortTerm: [], longTerm: [] },
  };

  it('prints coherence, weak lead, overlaps and a reorder by bullet position', () => {
    const report: DiagnosisReport = {
      ...base,
      perEntry: [
        {
          ...base.perEntry[0]!,
          narrative: {
            redundantPairs: [{ bulletA: 'b0', bulletB: 'b1', note: 'same project twice' }],
            weakLead: true,
            coherence: { score: 45, detail: 'reads as a task list' },
            suggestedOrder: ['b2', 'b0', 'b1'],
          },
        },
      ],
    };
    const text = render(report);

    expect(text).toContain('story 45/100  reads as a task list');
    expect(text).toContain('strongest bullet is not the first one');
    expect(text).toContain('#1 and #2 overlap: same project twice');
    expect(text).toContain('reorder: #3, #1, #2');
  });

  it('omits the reorder line when the suggested order is the current one', () => {
    const report: DiagnosisReport = {
      ...base,
      perEntry: [
        {
          ...base.perEntry[0]!,
          narrative: {
            redundantPairs: [],
            weakLead: false,
            coherence: { score: 80, detail: '' },
            suggestedOrder: ['b0', 'b1', 'b2'],
          },
        },
      ],
    };
    const text = render(report);

    expect(text).toContain('story 80/100');
    expect(text).not.toContain('reorder');
    expect(text).not.toContain('strongest bullet');
  });

  it('prints nothing for a narrative the agent never returned', () => {
    // The normaliser turns a missing narrative into a zero score with no
    // detail; "story 0/100" would read as a verdict nobody gave.
    const report: DiagnosisReport = {
      ...base,
      perEntry: [
        {
          ...base.perEntry[0]!,
          narrative: {
            redundantPairs: [{ bulletA: '', bulletB: '', note: '' }],
            weakLead: false,
            coherence: { score: 0, detail: '' },
          },
        },
      ],
    };
    const text = render(report);

    expect(text).not.toContain('story');
    expect(text).not.toContain('overlap');
  });

  it('carries the substance agent narrative through generate_report', async () => {
    const { out } = await runOn('sample-resume.md');
    const report = out.result as DiagnosisReport;

    expect(report.perEntry.some((e) => e.narrative?.weakLead === true)).toBe(true);
    expect(render(report)).toContain('strongest bullet is not the first one');
  });
});
