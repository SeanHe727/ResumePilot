import { describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeDocument } from '../../src/domain.js';
import { DefaultResumeParser } from '../../src/document/index.js';
import type { ParsedResponse, QueryParams } from '../../src/query-engine/types.js';
import { createToolRegistry } from '../../src/tools/index.js';
import { render } from '../../src/skills/index.js';
import type { DiagnosisReport as Report } from '../../src/domain.js';
import {
  generateReportTool,
  reviewContentTool,
  reviewFormatTool,
  reviewWordingTool,
} from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';
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
 * A whole-resume review, driven the way the coordinator drives it.
 *
 * These cases ran against the deterministic pipeline, then against the batch
 * skill, and both are gone. What they check — the report's shape, and that no
 * contact detail reaches a model — are properties of the product rather than of
 * whatever was orchestrating it, so they follow the tools instead: format
 * first, then each entry, then the report over what those left on the session.
 */
async function runOn(fixture: string): Promise<{ out: Report; seen: QueryParams[] }> {
  const { engine, seen } = fakeEngine();
  const tools = createToolRegistry();
  const sessions = new SqliteSessionManager();
  const session = sessions.create({ sourcePath: `tests/fixtures/${fixture}` });
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
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;

  const resume = await new DefaultResumeParser().parse(`tests/fixtures/${fixture}`);
  session.state = { resume };

  await reviewFormatTool.execute({}, ctx);
  for (const entry of resume.sections.flatMap((section) => section.entries)) {
    if (entry.bullets.length === 0) continue;
    await reviewContentTool.execute({ entryId: entry.id }, ctx);
    await reviewWordingTool.execute({ entryId: entry.id }, ctx);
  }
  const report = await generateReportTool.execute({} as never, ctx);

  return { out: report.data as Report, seen };
}

describe('report rendering', () => {
  it('leads with the score and lists the plan by what it costs to act', async () => {
    const { out } = await runOn('sample-resume.md');
    const text = render(out);

    expect(text).toMatch(/^Overall \d+\/100/);
    expect(text).toContain('Fix now');
    expect(text).toContain('Needs a figure you have to find');
  });

  it('quotes the bullet alongside its score', async () => {
    const { out } = await runOn('sample-resume.md');
    const text = render(out);

    expect(text).toContain('Reduced P99 latency');
  });
});

describe('generate_report aggregation', () => {
  it('weights format heaviest, since every other axis assumes the text was read', async () => {
    const { out } = await runOn('sample-resume.md');
    const report = out;

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

    expect((out).summary.totalEntries).toBe(expected.length);
  });

  it('surfaces the weaknesses that recur across bullets', async () => {
    const { out } = await runOn('messy-resume.md');
    const report = out;

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
    const everything = JSON.stringify(diagnostic) + render(out);

    for (const detail of CONTACT_DETAILS) {
      expect(everything, `leaked: ${detail}`).not.toContain(detail);
    }
  });

  it('shows no contact detail in the report, but does name the employer', async () => {
    // The employer stays: `20  ByteDance — Backend Engineer Intern` is how the
    // reader knows which entry a score belongs to.
    const { out } = await runOn('sample-resume.md');
    const text = render(out);

    for (const detail of CONTACT_DETAILS) {
      expect(text, `printed: ${detail}`).not.toContain(detail);
    }
    expect(text).toContain('ByteDance');
  });
});
