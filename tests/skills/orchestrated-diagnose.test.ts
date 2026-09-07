import { describe, expect, it } from 'vitest';

import { DefaultOrchestrator, DefaultRoleSelector, SubAgentRuntime } from '../../src/agent/index.js';
import type { DiagnosisReport, ResumeSessionState } from '../../src/domain.js';
import { DefaultHookPipeline } from '../../src/hooks/index.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { createSkillRegistry } from '../../src/skills/index.js';
import type { SkillContext } from '../../src/skills/types.js';
import { createToolRegistry } from '../../src/tools/index.js';

/**
 * Bullet ids are read back out of the request rather than hard-coded.
 *
 * The report matches diagnoses to bullets by id, so a fake that invents its
 * own would exercise a path where nothing lines up — and pass, while proving
 * that a scored bullet reaches the report only when the ids agree.
 */
function bulletIds(params: QueryParams): string[] {
  const text = params.messages.map((m) => m.content).join('\n');
  return [...text.matchAll(/^ {2}(\S+):[ ]/gm)].map((m) => m[1]!);
}

function reply(params: QueryParams): string {
  const ids = bulletIds(params);

  switch (params.task) {
    case 'diagnose_bullet':
      return JSON.stringify({
        bullets: ids.map((id) => ({
          bulletId: id,
          overallScore: 20,
          dimensions: {
            impact: { score: 20, detail: 'a duty' },
            measurement: { score: 0, detail: 'no figure' },
            method: { score: 10, detail: '' },
          },
          issues: ['no measurable outcome'],
          strengths: [],
        })),
        narrative: { redundantPairs: [], weakLead: true, coherence: { score: 40, detail: '' } },
      });

    case 'judge_wording':
      return JSON.stringify({
        perBullet: ids.map((id) => ({
          bulletId: id,
          verbStrength: { score: 20, detail: '' },
          concision: { score: 60, detail: '' },
          issues: [],
        })),
      });

    case 'rewrite_bullet':
      return JSON.stringify({
        // No literal digits: the tool refuses a rewrite carrying a figure the
        // original never stated, and "p99" reads as one.
        after: 'Cut order-query latency from [X ms] to [Y ms] by adding a second-level cache',
        rationale: 'leads with the outcome',
        needsInput: ['what the latency was before and after'],
      });

    case 'generate_report':
      return JSON.stringify({ immediate: ['delete the pronoun'], shortTerm: [], longTerm: [] });

    // `split_sections` lands here: the labeller finds nothing usable and the
    // heuristics take over, which is the fallback under test.
    default:
      return '{}';
  }
}

function harness() {
  const seen: QueryParams[] = [];
  const engine: QueryEngine = {
    async query(params): Promise<ParsedResponse> {
      seen.push(params);
      return {
        type: 'text',
        content: reply(params),
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      };
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };

  const tools = createToolRegistry();
  const session = new SqliteSessionManager().create({ sourcePath: 'tests/fixtures/sample-resume.md' });
  const runtime = new SubAgentRuntime({
    queryEngine: engine,
    toolRegistry: tools,
    knowledge: { search: async () => [] } as never,
    session,
  });

  const ctx: SkillContext = {
    session,
    toolRegistry: tools,
    queryEngine: engine,
    knowledge: { search: async () => [] } as never,
    hooks: new DefaultHookPipeline(),
    orchestrator: new DefaultOrchestrator(runtime),
    roleSelector: new DefaultRoleSelector(),
  };

  return { ctx, seen, session };
}

async function run(fixture = 'sample-resume.md') {
  const { ctx, seen, session } = harness();
  const out = await createSkillRegistry()
    .resolve('orchestrated-diagnose')
    .execute({ rawInput: `tests/fixtures/${fixture}` }, ctx);

  return { out, seen, session };
}

describe('orchestrated-diagnose', () => {
  it('labels the document before diagnosing it', async () => {
    // The wiring is easy to lose: `parserFrom` falls back to a parser with no
    // segmenter, and everything downstream still works — the heuristics answer,
    // the report renders, and nothing says the model was never asked.
    const { seen } = await run();

    expect(seen.some((s) => s.task === 'split_sections')).toBe(true);
  });

  it('runs the per-entry agents and produces a report', async () => {
    const { out } = await run();
    const report = out.result as DiagnosisReport;

    expect(out.success).toBe(true);
    expect(report.summary.totalEntries).toBeGreaterThan(0);
    expect(report.perEntry.length).toBe(report.summary.totalEntries);
  });

  it('suggests a rewrite for the bullets that scored badly', async () => {
    // A finding says what is wrong; a rewrite is what the candidate pastes
    // back into the document.
    const { out } = await run();
    const report = out.result as DiagnosisReport;

    expect(report.rewrites?.length).toBeGreaterThan(0);
    expect(report.rewrites?.[0]?.after).toContain('[X ms]');
    // Every placeholder is accounted for, whether or not the model declared
    // it: a "[Y ms]" with nothing said about it leaves the candidate staring
    // at a blank with no idea what to look up.
    expect(report.rewrites?.[0]?.needsInput).toContain('what the latency was before and after');
    expect(report.rewrites?.[0]?.needsInput.join(' ')).toContain('Y ms');
  });

  it('reports which agents ran, and why the others did not', async () => {
    const { out } = await run();

    expect(out.report).toContain('Entry Substance');
    expect(out.report).toMatch(/jd-match\s+skipped: no job description/);
  });

  it('leaves the diagnosis on the session for the commands that follow', async () => {
    const { out, session } = await run();
    const state = session.state as ResumeSessionState;

    expect(out.success).toBe(true);
    expect(state.mode).toBe('diagnose');
    expect(state.latestReport).toBeDefined();
    expect(state.entryDiagnoses?.length).toBeGreaterThan(0);
  });

  it('stops on a scanned file rather than diagnosing an empty document', async () => {
    const { out } = await run('scanned.pdf');

    expect(out.success).toBe(false);
    expect(out.error).toMatch(/no text layer/);
  });

  it('refuses to run without an orchestrator', async () => {
    const { ctx } = harness();
    const out = await createSkillRegistry()
      .resolve('orchestrated-diagnose')
      .execute({ rawInput: 'tests/fixtures/sample-resume.md' }, {
        ...ctx,
        orchestrator: undefined,
      } as SkillContext);

    expect(out.success).toBe(false);
    expect(out.error).toMatch(/diagnose-resume instead/);
  });
});
