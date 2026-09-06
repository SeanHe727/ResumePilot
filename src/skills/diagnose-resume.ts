import type {
  DiagnosisReport,
  EntryDiagnosis,
  FormatDiagnosis,
  ResumeDocument,
  ResumeEntry,
  ResumeSessionState,
  WordingDiagnosis,
} from '../domain.js';
import { DefaultResumeParser } from '../document/index.js';
import type { ResumeParser } from '../document/types.js';
import { analyzeFormat } from '../tools/analyze-format.js';
import type { Skill, SkillContext, SkillInput, SkillOutput } from './types.js';

/**
 * The whole diagnosis, front to back.
 *
 * A Skill is not a new abstraction layer — it is a named, registered sequence
 * of tool calls. What it buys is determinism: this pipeline is the same every
 * run, so it can be tested, priced and resumed, and no tokens are spent on the
 * model deciding what to do next.
 *
 * The parser is called here in ordinary code, with a path the user supplied.
 * The model never sees a file path and holds no tool that opens one — see the
 * trust-boundary note in `src/tools/types.ts`.
 */
export const diagnoseResumeSkill: Skill = {
  name: 'diagnose-resume',
  description:
    'Parse a resume, score its format, diagnose every entry against the knowledge base, and ' +
    'produce a report.',
  triggers: ['diagnose', 'review my resume', 'check my resume', 'what is wrong with my resume'],
  requiredTools: ['analyze_format', 'query_knowledge_base', 'analyze_entry', 'generate_report'],

  async execute(input: SkillInput, ctx: SkillContext): Promise<SkillOutput> {
    const path = (input.parsedArgs?.path as string | undefined) ?? input.rawInput.trim();
    if (!path) {
      return { success: false, error: 'no resume file given' };
    }

    let resume: ResumeDocument;
    try {
      resume = await parserFrom(ctx).parse(path);
    } catch (err) {
      return { success: false, error: `could not read the resume: ${describe(err)}` };
    }

    // A scan has no text layer, so nothing downstream has anything to read.
    // Stopping here with that as the finding beats diagnosing an empty document.
    if (resume.meta.quality === 'unreadable') {
      return {
        success: false,
        error:
          `${resume.meta.layoutWarnings[0] ?? 'no readable text'} — export a text PDF or a .docx and try again`,
      };
    }

    const format = analyzeFormat(resume);
    const entries = resume.sections.flatMap((s) => s.entries);

    if (entries.length === 0) {
      return {
        success: false,
        error: 'no experience or project entries found — check the section headings',
      };
    }

    const substance: EntryDiagnosis[] = [];
    const wording: WordingDiagnosis[] = [];

    // Entries run one at a time here. Parallelism belongs to the orchestrator,
    // which owns the concurrency pool; a Skill that fanned out on its own would
    // bypass the rate limiter's pacing.
    for (const [index, entry] of entries.entries()) {
      const diagnosis = await diagnoseEntry(entry, ctx);
      if (diagnosis) substance.push(diagnosis);

      const worded = await judgeWording(entry, ctx);
      if (worded) wording.push(worded);

      ctx.session.progress = {
        ...ctx.session.progress,
        done: index + 1,
        total: entries.length,
        current: index + 2,
        phase: `diagnosing entries (${index + 1}/${entries.length})`,
      };
    }

    if (substance.length === 0) {
      return { success: false, error: 'every entry diagnosis failed — see the session log' };
    }

    const report = await buildReport(resume, format, substance, wording, ctx);
    if (!report) return { success: false, error: 'report generation failed' };

    const state: Partial<ResumeSessionState> = {
      mode: 'diagnose',
      resume,
      entryDiagnoses: substance,
      wordingDiagnoses: wording,
      formatDiagnosis: format,
      latestReport: report,
    };
    Object.assign(ctx.session.state, state);

    return { success: true, result: report, report: render(report) };
  },
};

/**
 * Retrieval is scoped to a dimension, always.
 *
 * Measured on the real corpus: scoped lookups return the right entry every
 * time, while the same queries unscoped pick the wrong rule family for about a
 * third of them — the corpus explains rules and a bullet is an instance, so
 * similarity tracks topic overlap more than applicability.
 */
const RETRIEVAL_DIMENSIONS = ['impact-quantification', 'xyz-structure'] as const;

async function diagnoseEntry(
  entry: ResumeEntry,
  ctx: SkillContext,
): Promise<EntryDiagnosis | null> {
  const query = entry.bullets.map((b) => b.text).join(' ');
  const references: Array<{
    question: string;
    weakExample: string;
    strongExample: string;
    gap: string;
  }> = [];

  for (const dimension of RETRIEVAL_DIMENSIONS) {
    const hits = await ctx.knowledge.search(query, { dimension, limit: 1 });
    references.push(
      ...hits.map((h) => ({
        question: h.question,
        weakExample: h.weakAnswer,
        strongExample: h.strongAnswer,
        gap: h.gapAnalysis,
      })),
    );
  }

  const result = await ctx.toolRegistry
    .resolve('analyze_entry')
    .execute({ entry, references } as never, toolCtx(ctx));

  return result.success ? (result.data as EntryDiagnosis) : null;
}

async function judgeWording(
  entry: ResumeEntry,
  ctx: SkillContext,
): Promise<WordingDiagnosis | null> {
  const result = await ctx.toolRegistry
    .resolve('analyze_wording')
    .execute({ entry } as never, toolCtx(ctx));

  return result.success ? (result.data as WordingDiagnosis) : null;
}

async function buildReport(
  resume: ResumeDocument,
  format: FormatDiagnosis,
  entries: EntryDiagnosis[],
  wording: WordingDiagnosis[],
  ctx: SkillContext,
): Promise<DiagnosisReport | null> {
  const result = await ctx.toolRegistry
    .resolve('generate_report')
    .execute({ resume, format, entries, wording } as never, toolCtx(ctx));

  return result.success ? (result.data as DiagnosisReport) : null;
}

function toolCtx(ctx: SkillContext): never {
  return {
    session: ctx.session,
    queryEngine: ctx.queryEngine,
    knowledge: ctx.knowledge,
    abortSignal: ctx.session.abortController.signal,
  } as never;
}

function parserFrom(ctx: SkillContext): ResumeParser {
  // Injected for tests; a real session gets the default pipeline.
  return (ctx.session.state.parser as ResumeParser | undefined) ?? new DefaultResumeParser();
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

/** Plain text, because the CLI prints it directly. */
export function render(report: DiagnosisReport): string {
  const { summary } = report;
  const lines: string[] = [
    `Overall ${summary.overallScore}/100`,
    `  format ${summary.formatScore}  substance ${summary.substanceAvg}  wording ${summary.wordingAvg}`,
    `  ${summary.totalEntries} entries, ${summary.totalBullets} bullets`,
    '',
  ];

  for (const entry of report.perEntry) {
    lines.push(`${String(entry.score).padStart(3)}  ${entry.label}`);
    for (const bullet of entry.bullets) {
      lines.push(`     ${String(bullet.score).padStart(3)}  ${truncate(bullet.text, 64)}`);
      if (bullet.topIssue) lines.push(`          ${truncate(bullet.topIssue, 70)}`);
    }
    lines.push('');
  }

  if (summary.topWeaknesses.length > 0) {
    lines.push('Recurring weaknesses');
    for (const w of summary.topWeaknesses) lines.push(`  - ${w}`);
    lines.push('');
  }

  const plan: Array<[string, string[]]> = [
    ['Fix now', report.improvementPlan.immediate],
    ['Needs a figure you have to find', report.improvementPlan.shortTerm],
    ['Needs new experience', report.improvementPlan.longTerm],
  ];
  for (const [heading, items] of plan) {
    if (items.length === 0) continue;
    lines.push(heading);
    for (const item of items) lines.push(`  - ${item}`);
    lines.push('');
  }

  return lines.join('\n').trimEnd();
}

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max)}...` : clean;
}
