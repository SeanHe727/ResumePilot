import { describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeDocument } from '../../src/domain.js';
import { DefaultResumeParser } from '../../src/document/index.js';
import type { ParsedResponse, QueryParams } from '../../src/query-engine/types.js';
import { createToolRegistry } from '../../src/tools/index.js';
import { createSkillRegistry, render } from '../../src/skills/index.js';
import type { SkillContext, SkillOutput } from '../../src/skills/types.js';
import {
  DefaultOrchestrator,
  DefaultRoleSelector,
  SubAgentRuntime,
} from '../../src/agent/index.js';
import { SqliteSessionManager } from '../../src/session/index.js';

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

/**
 * The only diagnosis path there is.
 *
 * These cases ran against the deterministic pipeline until it was removed. The
 * report shape and the contact-detail guarantee are properties of the product
 * rather than of that pipeline, so they moved here rather than going with it —
 * and the guarantee in particular had to be proved again on this path, which
 * builds its messages somewhere else entirely.
 */
async function runOn(fixture: string): Promise<{ out: SkillOutput; seen: QueryParams[] }> {
  const { engine, seen } = fakeEngine();
  const tools = createToolRegistry();
  const session = new SqliteSessionManager().create({ sourcePath: `tests/fixtures/${fixture}` });
  const knowledge = { search: async () => [] } as never;
  const runtime = new SubAgentRuntime({
    queryEngine: engine as never,
    toolRegistry: tools,
    knowledge,
    session,
  });
  const ctx = {
    toolRegistry: tools,
    queryEngine: engine,
    knowledge,
    session,
    orchestrator: new DefaultOrchestrator(runtime),
    roleSelector: new DefaultRoleSelector(),
  } as unknown as SkillContext;

  const skill = createSkillRegistry().resolve('orchestrated-diagnose');
  const out = await skill.execute({ rawInput: `tests/fixtures/${fixture}` }, ctx);
  return { out, seen };
}

describe('skill registry', () => {
  it('routes a plain sentence to the diagnosis skill, without asking the model', () => {
    // Matched on triggers rather than by a model call, so the same sentence
    // routes the same way every run.
    const registry = createSkillRegistry();

    expect(registry.find('diagnose my resume')?.name).toBe('orchestrated-diagnose');
    expect(registry.find('please review my resume')?.name).toBe('orchestrated-diagnose');
  });

  it('reaches the skill by name as well as by trigger', () => {
    expect(createSkillRegistry().resolve('orchestrated-diagnose').name).toBe('orchestrated-diagnose');
  });

  it('returns null when nothing matches, leaving the loop to plan', () => {
    expect(createSkillRegistry().find('what is the weather')).toBeNull();
  });

  it('refuses to register the same name twice', () => {
    // Silent replacement would make the live implementation depend on import order.
    const registry = createSkillRegistry();
    const skill = registry.resolve('orchestrated-diagnose');

    expect(() => (registry as never as { register: (s: unknown) => void }).register(skill)).toThrow(
      /already registered/,
    );
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
