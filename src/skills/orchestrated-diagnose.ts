import type {
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  JdMatch,
  JobDescription,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  ResumeSessionState,
  WordingDiagnosis,
} from '../domain.js';
import type { EntryVerdict, RoleSelection } from '../agent/types.js';
import { DefaultResumeParser } from '../document/index.js';
import type { ResumeParser } from '../document/types.js';
import { analyzeFormat } from '../tools/analyze-format.js';
import { render } from './diagnose-resume.js';
import type { Skill, SkillContext, SkillInput, SkillOutput } from './types.js';

/**
 * The same diagnosis, run by sub-agents instead of a fixed pipeline.
 *
 * `diagnose-resume` decides what to retrieve before it has read anything: two
 * fixed rule families, every entry, always. This one hands each entry to an
 * agent that reads it, chooses which families to consult, and looks again if
 * the first answer did not fit. On bullets with one planted defect each that
 * found the right family 73% of the time against 27% for the fixed pair.
 *
 * What it costs is reproducibility. Two runs over the same resume can consult
 * different rules and land on different scores, and the token bill moves with
 * them. Both skills exist because that trade goes the other way in CI, in a
 * budget-capped run, and any time a result has to be explainable afterwards.
 */
export const orchestratedDiagnoseSkill: Skill = {
  name: 'orchestrated-diagnose',
  description:
    'Diagnose a resume with a team of sub-agents: substance and wording per entry, then the ' +
    'career narrative, and the job description when one is attached.',
  triggers: ['diagnose', 'review my resume', 'check my resume', 'what is wrong with my resume'],
  requiredTools: ['analyze_format', 'query_knowledge_base', 'generate_report'],

  async execute(input: SkillInput, ctx: SkillContext): Promise<SkillOutput> {
    if (!ctx.orchestrator || !ctx.roleSelector) {
      return { success: false, error: 'no orchestrator available — use diagnose-resume instead' };
    }

    const path = (input.parsedArgs?.path as string | undefined) ?? input.rawInput.trim();
    if (!path) return { success: false, error: 'no resume file given' };

    let resume: ResumeDocument;
    try {
      resume = await parserFrom(ctx).parse(path);
    } catch (err) {
      return { success: false, error: `could not read the resume: ${describe(err)}` };
    }

    if (resume.meta.quality === 'unreadable') {
      return {
        success: false,
        error: `${resume.meta.layoutWarnings[0] ?? 'no readable text'} — export a text PDF or a .docx and try again`,
      };
    }

    const entries = resume.sections.flatMap((s) => s.entries);
    if (entries.length === 0) {
      return {
        success: false,
        error: 'no experience or project entries found — check the section headings',
      };
    }

    const jd = (ctx.session.state as ResumeSessionState).jd;
    const roles = ctx.roleSelector.select({
      entryCount: entries.length,
      hasJd: jd !== undefined,
      quality: resume.meta.quality,
    });

    // Pure computation, and the heaviest weight in the final score: every
    // other axis assumes the text was read intact.
    const format = analyzeFormat(resume);

    ctx.session.progress = {
      ...ctx.session.progress,
      total: entries.length,
      done: 0,
      current: 1,
      phase: `diagnosing ${entries.length} entries with ${roles.roles.length} agents`,
    };

    const verdicts = await ctx.orchestrator.diagnoseAll(entries, roles, (done, total) => {
      ctx.session.progress = {
        ...ctx.session.progress,
        done,
        current: Math.min(done + 1, total),
        phase: `diagnosing entries (${done}/${total})`,
      };
    });

    if (verdicts.every((v) => v.substance === null)) {
      return { success: false, error: 'every entry agent failed — see /status' };
    }

    // Whole-document roles run after the per-entry ones, because the narrative
    // agent reads the entries and the JD agent reads the resume: neither needs
    // the per-entry scores, but both are cheaper to wait for than to interleave.
    const narrative = roles.roles.includes('narrative')
      ? await ctx.orchestrator.assessNarrative(entries)
      : null;
    const jdMatch = jd && roles.roles.includes('jd-match')
      ? await ctx.orchestrator.matchJd(resume, jd)
      : null;

    const report = await buildReport(resume, format, verdicts, narrative, jdMatch, ctx);
    if (!report) return { success: false, error: 'report generation failed' };

    const state: Partial<ResumeSessionState> = {
      mode: 'diagnose',
      resume,
      entryDiagnoses: verdicts.map((v) => v.substance).filter((d): d is EntryDiagnosis => d !== null),
      wordingDiagnoses: verdicts.map((v) => v.wording).filter((d): d is WordingDiagnosis => d !== null),
      formatDiagnosis: format,
      ...(narrative ? { narrative } : {}),
      ...(jdMatch ? { jdMatch } : {}),
      latestReport: report,
    };
    Object.assign(ctx.session.state, state);

    const failures = ctx.orchestrator.failures;
    const wholeDocument: Array<[string, string]> = [];
    if (roles.roles.includes('narrative')) {
      wholeDocument.push(['Career Narrative', narrative ? '1 ok' : `failed: ${failures.get('narrative') ?? 'unknown'}`]);
    }
    if (roles.roles.includes('jd-match')) {
      wholeDocument.push(['JD Match', jdMatch ? '1 ok' : `failed: ${failures.get('jd-match') ?? 'unknown'}`]);
    }

    return {
      success: true,
      result: report,
      report: `${render(report)}\n\n${renderAgents(roles, verdicts, wholeDocument)}`,
    };
  },
};

async function buildReport(
  resume: ResumeDocument,
  format: FormatDiagnosis,
  verdicts: EntryVerdict[],
  narrative: NarrativeAssessment | null,
  jdMatch: JdMatch | null,
  ctx: SkillContext,
): Promise<DiagnosisReport | null> {
  const result = await ctx.toolRegistry.resolve('generate_report').execute(
    {
      resume,
      format,
      entries: verdicts.map((v) => v.substance).filter(Boolean),
      wording: verdicts.map((v) => v.wording).filter(Boolean),
      ...(narrative ? { narrative } : {}),
      ...(jdMatch ? { jdMatch } : {}),
    } as never,
    {
      session: ctx.session,
      queryEngine: ctx.queryEngine,
      knowledge: ctx.knowledge,
      abortSignal: ctx.session.abortController.signal,
    },
  );

  return result.success ? (result.data as DiagnosisReport) : null;
}

/**
 * What ran, what it cost, and what did not run.
 *
 * A fan-out is otherwise invisible: the report looks the same whether four
 * agents agreed or three of them failed and one carried it.
 */
function renderAgents(
  roles: RoleSelection,
  verdicts: EntryVerdict[],
  wholeDocument: Array<[string, string]> = [],
): string {
  const totals = new Map<string, { ok: number; failed: number; ms: number; tokens: number }>();

  for (const stat of verdicts.flatMap((v) => v.agentStats)) {
    const row = totals.get(stat.name) ?? { ok: 0, failed: 0, ms: 0, tokens: 0 };
    if (stat.success) row.ok += 1;
    else row.failed += 1;
    row.ms += stat.durationMs;
    row.tokens += stat.tokens;
    totals.set(stat.name, row);
  }

  const lines = ['Agents'];
  for (const [name, row] of totals) {
    lines.push(
      `  ${name.padEnd(18)}${row.ok} ok` +
        (row.failed ? `, ${row.failed} failed` : '') +
        `  ${Math.round(row.ms / 1000)}s  ${row.tokens} tokens`,
    );
  }

  // An agent can return JSON the normaliser then rejects — no bullet scores,
  // or none whose ids match. It counts as `ok` above and lands in the report
  // as an entry scoring zero, which reads as a verdict rather than a gap.
  const unusable = verdicts.filter((v) => v.substance === null).length;
  if (unusable > 0) {
    lines.push(`  ${'unusable'.padEnd(18)}${unusable} entries scored nothing — the agent replied, the reply did not parse`);
  }
  for (const [name, status] of wholeDocument) {
    lines.push(`  ${name.padEnd(18)}${status}`);
  }
  for (const [role, reason] of Object.entries(roles.reasons)) {
    if (!roles.roles.includes(role as never)) lines.push(`  ${role.padEnd(18)}${reason}`);
  }

  return lines.join('\n');
}

function parserFrom(ctx: SkillContext): ResumeParser {
  return (ctx.session.state.parser as ResumeParser | undefined) ?? new DefaultResumeParser();
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
