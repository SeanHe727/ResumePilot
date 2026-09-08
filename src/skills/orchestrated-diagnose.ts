import type {
  Bullet,
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  JdMatch,
  JobDescription,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  ResumeSessionState,
  RewriteSuggestion,
  WordingDiagnosis,
} from '../domain.js';
import type { EntryVerdict, RoleSelection } from '../agent/types.js';
import { DefaultResumeParser, ModelDocumentSegmenter } from '../document/index.js';
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
      ? await ctx.orchestrator.assessNarrative(resume)
      : null;
    const jdMatch = jd && roles.roles.includes('jd-match')
      ? await ctx.orchestrator.matchJd(resume, jd)
      : null;

    const report = await buildReport(resume, format, verdicts, narrative, jdMatch, ctx);
    if (!report) return { success: false, error: 'report generation failed' };

    const rewrites = await rewriteWeakBullets(entries, verdicts, ctx);
    if (rewrites.length > 0) report.rewrites = rewrites;

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
      report: `${render(report)}\n\n${renderAgents(roles, verdicts, wholeDocument, failures)}`,
    };
  },
};

/** Below this a bullet is worth replacing rather than adjusting. */
const REWRITE_BELOW = 75;

/**
 * A finding tells the candidate what is wrong; a rewrite shows them what right
 * looks like on their own line. The second is what they actually paste back
 * into the document, and without it a diagnosis is a list of homework.
 *
 * Only the weak ones, and through the pool: this is one model call per bullet,
 * and running it over a bullet already scoring in the eighties spends money to
 * suggest a change the candidate should not make.
 */
async function rewriteWeakBullets(
  entries: ResumeEntry[],
  verdicts: EntryVerdict[],
  ctx: SkillContext,
): Promise<Array<RewriteSuggestion & { bulletId: string }>> {
  const byEntry = new Map(verdicts.map((v) => [v.entryId, v]));
  const targets: Array<{ bullet: Bullet; entry: ResumeEntry; issues: string[] }> = [];

  for (const entry of entries) {
    const diagnosis = byEntry.get(entry.id)?.substance;
    if (!diagnosis) continue;

    for (const bullet of entry.bullets) {
      const scored = diagnosis.bullets.find((b) => b.bulletId === bullet.id);
      if (!scored || scored.overallScore >= REWRITE_BELOW) continue;
      targets.push({ bullet, entry, issues: scored.issues });
    }
  }

  const tool = ctx.toolRegistry.resolve('rewrite_bullet');
  const toolCtx = {
    session: ctx.session,
    queryEngine: ctx.queryEngine,
    knowledge: ctx.knowledge,
    abortSignal: ctx.session.abortController.signal,
  };

  const results = await Promise.all(
    targets.map(async ({ bullet, entry, issues }) => {
      const result = await tool.execute(
        {
          bullet: bullet.text,
          entryContext: entry.headerLines.join(' | '),
          issues,
        } as never,
        toolCtx,
      );

      return result.success
        ? { bulletId: bullet.id, ...(result.data as RewriteSuggestion) }
        : null;
    }),
  );

  return results.filter((r): r is RewriteSuggestion & { bulletId: string } => r !== null);
}

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
  failures: ReadonlyMap<string, string> = new Map(),
): string {
  const totals = new Map<
    string,
    { ok: number; failed: number; ms: number; tokens: number; peakMs: number; peakTurns: number }
  >();

  for (const stat of verdicts.flatMap((v) => v.agentStats)) {
    const row = totals.get(stat.name) ?? { ok: 0, failed: 0, ms: 0, tokens: 0, peakMs: 0, peakTurns: 0 };
    if (stat.success) row.ok += 1;
    else row.failed += 1;
    row.ms += stat.durationMs;
    row.tokens += stat.tokens;
    // The peaks are what a limit has to clear. Averages hide the one run that
    // hit the ceiling, and that run is the whole reason the limit matters.
    row.peakMs = Math.max(row.peakMs, stat.durationMs);
    row.peakTurns = Math.max(row.peakTurns, stat.turns);
    totals.set(stat.name, row);
  }

  const lines = ['Agents'];
  for (const [name, row] of totals) {
    lines.push(
      `  ${name.padEnd(18)}${row.ok} ok` +
        (row.failed ? `, ${row.failed} failed` : '') +
        `  ${Math.round(row.ms / 1000)}s total` +
        `  peak ${Math.round(row.peakMs / 1000)}s / ${row.peakTurns} turns` +
        `  ${row.tokens} tokens`,
    );
  }

  // An agent can return JSON the normaliser then rejects — no bullet scores,
  // or none whose ids match. It counts as `ok` above and lands in the report
  // as an entry scoring zero, which reads as a verdict rather than a gap.
  // Counted only where an agent actually ran: an entry with no bullets is
  // skipped upstream, and reporting it here as a failure would be a report on
  // our own routing rather than on the resume.
  const attempted = verdicts.filter((v) => v.agentStats.length > 0);
  for (const [role, label] of [
    ['entry-substance', 'no substance'],
    ['entry-wording', 'no wording'],
  ] as const) {
    const reasons = [...failures].filter(([key]) => key.startsWith(`${role}:`)).map(([, why]) => why);
    if (reasons.length === 0) continue;

    // The distinct reasons, not one per entry: five entries failing the same
    // way is one problem, and listing it five times buries the others.
    for (const reason of new Set(reasons)) {
      const count = reasons.filter((r) => r === reason).length;
      lines.push(`  ${label.padEnd(18)}${count} — ${reason}`);
    }
  }

  const skipped = verdicts.length - attempted.length;
  if (skipped > 0) {
    lines.push(`  ${'not scored'.padEnd(18)}${skipped} entries have no bullets to score`);
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
  // Injected for tests; a real session gets the default pipeline, with the
  // model available to label lines a Markdown file would have marked itself.
  return (
    (ctx.session.state.parser as ResumeParser | undefined) ??
    new DefaultResumeParser(
      undefined,
      undefined,
      undefined,
      new ModelDocumentSegmenter(ctx.queryEngine),
    )
  );
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
