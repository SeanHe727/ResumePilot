import type {
  EntryDiagnosis,
  JdMatch,
  JobDescription,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  WordingDiagnosis,
} from '../domain.js';
import { buildEntryMessage, normaliseEntryDiagnosis } from '../tools/analyze-entry.js';
import { buildWordingMessage } from '../tools/analyze-wording.js';
import { SemaphorePool } from './pool.js';
import { ROLES } from './roles.js';
import type { SubAgentRuntime } from './sub-agent.js';
import type {
  AgentRunStat,
  Briefing,
  ConcurrencyPool,
  EntryVerdict,
  OrchestratorConfig,
  RoleId,
  RoleSelection,
  SubAgentResult,
  SubAgentTask,
} from './types.js';

const DEFAULTS: OrchestratorConfig = {
  maxConcurrency: 3,
  timeoutMs: 300_000,
  // `retry` rather than `continue`, and it is still `continue`'s promise that
  // holds: a role that fails twice is dropped, not allowed to fail the batch.
  // The failures worth retrying here are transient — a thinking model that
  // reasoned its way past writing an answer lands it on the second attempt —
  // and the alternative is an entry that scores zero for the whole run.
  failureStrategy: 'retry',
};

/**
 * How many entries are in flight at once.
 *
 * Deliberately a second pool rather than the one the roles use. The reference
 * project shares one: `diagnoseBatch` takes a slot per question and then calls
 * `parallel`, which takes another from the same pool for each dimension. With
 * three questions and a limit of three, every slot is held by an outer task
 * waiting on an inner task that can never be admitted, and the run hangs.
 */
const DEFAULT_ENTRY_CONCURRENCY = 2;

/** Roles that run once per entry, as opposed to once per document. */
const PER_ENTRY: ReadonlySet<RoleId> = new Set(['entry-substance', 'entry-wording']);

/**
 * The single entry point from a Skill into the sub-agent layer.
 *
 * Two levels of parallelism are available and they trade against each other.
 * Running the roles for one entry together is free — they have no dependency on
 * one another. Running entries together as well is faster still, but the user
 * stops seeing results arrive one at a time, which on a minutes-long run is
 * most of what tells them it is working. `diagnoseEntry` in a loop gives the
 * first; `diagnoseAll` gives both.
 */
export class DefaultOrchestrator {
  private readonly config: OrchestratorConfig;
  /** Bounds the roles running inside one entry. */
  private readonly rolePool: ConcurrencyPool;
  /** Bounds how many entries are open at once. Never the same pool. */
  private readonly entryPool: ConcurrencyPool;

  /**
   * Why a whole-document role produced nothing.
   *
   * `assessNarrative` and `matchJd` return null on failure, which tells a
   * caller that the section is missing but not why — and "failed" with no
   * reason is the thing that makes a report useless to act on.
   */
  readonly failures = new Map<string, string>();

  constructor(
    private readonly runtime: SubAgentRuntime,
    config: Partial<OrchestratorConfig> & { entryConcurrency?: number } = {},
    pool?: ConcurrencyPool,
  ) {
    this.config = { ...DEFAULTS, ...config };
    this.rolePool = pool ?? new SemaphorePool(this.config.maxConcurrency);
    this.entryPool = new SemaphorePool(config.entryConcurrency ?? DEFAULT_ENTRY_CONCURRENCY);
  }

  async diagnoseEntry(
    entry: ResumeEntry,
    roles: RoleSelection,
    briefing?: Briefing,
  ): Promise<EntryVerdict> {
    // Both per-entry roles score bullets, and a degree is a header with none —
    // school, qualification, dates. Dispatching it buys two model calls that
    // can only come back empty, and an entry the report then shows at zero.
    if (entry.bullets.length === 0) {
      return {
        entryId: entry.id,
        substance: null,
        wording: null,
        overallScore: 0,
        agentStats: [],
      };
    }

    const chosen = roles.roles.filter((role) => PER_ENTRY.has(role));
    const results = await this.parallel(chosen.map((role) => taskFor(role, entry, briefing)));

    return aggregate(entry, results, this.failures);
  }

  /**
   * Entries in parallel too, bounded by the pool.
   *
   * Progress is reported as each finishes rather than in order, because with
   * three in flight the third can land before the first.
   */
  async diagnoseAll(
    entries: ResumeEntry[],
    roles: RoleSelection,
    onProgress?: (done: number, total: number) => void,
  ): Promise<EntryVerdict[]> {
    let done = 0;

    return this.entryPool.runAll(
      entries.map((entry) => async () => {
        const verdict = await this.diagnoseEntry(entry, roles);
        done += 1;
        onProgress?.(done, entries.length);
        return verdict;
      }),
    );
  }

  /**
   * The career arc, read once over the whole document.
   *
   * Returns null rather than an empty assessment when the agent fails, so the
   * report can leave the section out instead of printing a confident zero.
   */
  async assessNarrative(
    resume: ResumeDocument,
    briefing?: Briefing,
  ): Promise<NarrativeAssessment | null> {
    if (resume.sections.every((section) => section.entries.length === 0)) return null;

    const [result] = await this.parallel([
      {
        agentConfig: ROLES['narrative']!,
        input: 'Read these entries in sequence and return the JSON described above.',
        context: { entries: renderSections(resume), ...briefingContext(briefing) },
      },
    ]);

    const raw = this.readWholeDocument('narrative', result);
    if (!raw) return null;

    return {
      overallScore: numeric(raw.overallScore),
      arc: typeof raw.arc === 'string' ? raw.arc : '',
      gaps: strings(raw.gaps),
      orderingNotes: strings(raw.orderingNotes),
    };
  }

  /** Keyword coverage against the posting the resume is being sent to. */
  async matchJd(
    resume: ResumeDocument,
    jd: JobDescription,
    briefing?: Briefing,
  ): Promise<JdMatch | null> {
    const [result] = await this.parallel([
      {
        agentConfig: ROLES['jd-match']!,
        input: 'Compare the resume against the job description and return the JSON described above.',
        context: {
          resume: renderSections(resume),
          jobDescription: jd.rawText,
          ...briefingContext(briefing),
        },
      },
    ]);

    const raw = this.readWholeDocument('jd-match', result);
    if (!raw) return null;

    return {
      overallScore: numeric(raw.overallScore),
      covered: Array.isArray(raw.covered) ? (raw.covered as JdMatch['covered']) : [],
      missing: Array.isArray(raw.missing) ? (raw.missing as JdMatch['missing']) : [],
      gaps: strings(raw.gaps),
    };
  }

  /**
   * Runs sub-agent tasks together, under the configured failure strategy.
   *
   * `continue` is the default and the reason the return type is a list of
   * results rather than a list of outputs: a wording pass that failed should
   * not cost the user the substance diagnosis that succeeded.
   */
  async parallel(tasks: SubAgentTask[]): Promise<SubAgentResult[]> {
    const runOne = async (task: SubAgentTask): Promise<SubAgentResult> => {
      const first = await this.attempt(task);
      if (first.success || this.config.failureStrategy !== 'retry') return first;

      // One retry, no backoff: the Query Engine already retried the transient
      // failures underneath. Reaching here means the agent produced nothing
      // usable, and a second reading of the same entry sometimes does.
      return this.attempt(task);
    };

    if (this.config.failureStrategy === 'fail_fast') {
      return this.rolePool.runAll(tasks.map((task) => () => this.runOrThrow(task)));
    }

    return this.rolePool.runAll(tasks.map((task) => () => runOne(task)));
  }

  /** Records why nothing came back, so the caller can say so rather than just "failed". */
  private readWholeDocument(
    role: string,
    result: SubAgentResult | undefined,
  ): Record<string, unknown> | null {
    if (!result) {
      this.failures.set(role, 'the agent did not run');
      return null;
    }
    if (!result.success) {
      this.failures.set(role, result.error ?? 'unknown failure');
      return null;
    }

    const raw = asObject(result.output);
    if (!raw) {
      this.failures.set(role, 'the agent replied in prose, not the JSON asked for');
      return null;
    }

    this.failures.delete(role);
    return raw;
  }

  private async runOrThrow(task: SubAgentTask): Promise<SubAgentResult> {
    const result = await this.attempt(task);
    if (!result.success) {
      throw new Error(`${task.agentConfig.name} failed: ${result.error ?? 'unknown'}`);
    }
    return result;
  }

  /** Turns a thrown error into a failed result, so one role cannot abort the rest. */
  private async attempt(task: SubAgentTask): Promise<SubAgentResult> {
    try {
      return await this.runtime.run(task);
    } catch (err) {
      return {
        agentId: task.agentConfig.id,
        agentName: task.agentConfig.name,
        success: false,
        usage: { inputTokens: 0, outputTokens: 0 },
        turns: 0,
        compactions: 0,
        durationMs: 0,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }
}

/** Whole entries, in document order, wrapped as untrusted data. */
/**
 * The document as the model sees it, section headings included.
 *
 * The headings are the point. Flattened to a bare list of entries — which is
 * what this did — the one role whose whole job is document-level structure was
 * the only role that could not see any, and both models spent an ordering note
 * asking for a Projects section the resume already had.
 *
 * `contact` is skipped. It is the one section that carries a phone number and
 * an email, and no career arc is decided by either.
 */
function renderSections(resume: ResumeDocument): string {
  const body = resume.sections
    .filter((section) => section.kind !== 'contact' && section.entries.length > 0)
    .map((section) => {
      const entries = section.entries
        .map((entry) => {
          const header = entry.headerLines.join(' | ');
          const bullets = entry.bullets.map((b) => `  - ${b.text}`).join('\n');
          return `${header}\n${bullets}`;
        })
        .join('\n\n');

      return `# ${section.heading.trim() || section.kind.toUpperCase()}\n\n${entries}`;
    })
    .join('\n\n');

  return `<resume_content>\n${body}\n</resume_content>`;
}

function asObject(output: unknown): Record<string, unknown> | null {
  return output && typeof output === 'object' ? (output as Record<string, unknown>) : null;
}

function numeric(raw: unknown): number {
  return typeof raw === 'number' && Number.isFinite(raw) ? Math.round(raw) : 0;
}

function strings(raw: unknown): string[] {
  return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
}

function taskFor(role: RoleId, entry: ResumeEntry, briefing?: Briefing): SubAgentTask {
  const agentConfig = ROLES[role]!;

  // The same user message the matching tool builds, so the sub-agent and the
  // deterministic path ask for the same JSON and agree on bullet ids.
  const input =
    role === 'entry-substance' ? buildEntryMessage({ entry }) : buildWordingMessage(entry);

  return {
    agentConfig,
    input,
    context: { entry: entry.headerLines.join(' | '), ...briefingContext(briefing) },
  };
}

/**
 * The briefing as one task-layer field, or nothing at all.
 *
 * Rendered rather than passed as an object so the specialist reads a labelled
 * paragraph instead of JSON, and omitted entirely when empty — an empty heading
 * reads as a coordinator who had nothing to say, which is not the same as one
 * that was never asked.
 */
function briefingContext(briefing?: Briefing): { briefing?: string } {
  if (!briefing) return {};
  const parts = [
    briefing.understanding && `What this appears to be: ${briefing.understanding}`,
    briefing.supplied && `What the candidate has said, which the page does not: ${briefing.supplied}`,
    briefing.goal && `What they asked for: ${briefing.goal}`,
  ].filter((line): line is string => Boolean(line && line.trim()));

  return parts.length > 0 ? { briefing: parts.join('\n') } : {};
}

function aggregate(
  entry: ResumeEntry,
  results: SubAgentResult[],
  failures: Map<string, string>,
): EntryVerdict {
  const substance = readSubstance(entry, results, (r) => failures.set(`entry-substance:${entry.id}`, r));
  const wording = readWording(entry, results, (r) => failures.set(`entry-wording:${entry.id}`, r));

  const scores = [substance?.overallScore, wording?.overallScore].filter(
    (s): s is number => typeof s === 'number',
  );

  return {
    entryId: entry.id,
    substance,
    wording,
    // Zero when every role failed, which the caller can tell apart from a
    // genuine zero by the empty `agentStats` successes.
    overallScore: scores.length
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0,
    agentStats: results.map(
      (r): AgentRunStat => ({
        name: r.agentName,
        success: r.success,
        turns: r.turns,
        compactions: r.compactions,
        durationMs: r.durationMs,
        tokens: r.usage.inputTokens + r.usage.outputTokens,
      }),
    ),
  };
}

function readSubstance(
  entry: ResumeEntry,
  results: SubAgentResult[],
  note: (reason: string) => void,
): EntryDiagnosis | null {
  const raw = successOutput(results, 'entry-substance', note);
  if (!raw) return null;

  const normalised = normaliseEntryDiagnosis(raw, entry);
  if (!normalised.success) {
    note(`replied with keys [${Object.keys(raw).join(', ')}] — ${normalised.error?.message ?? 'no bullets'}`);
    return null;
  }

  return normalised.data ?? null;
}

function readWording(
  entry: ResumeEntry,
  results: SubAgentResult[],
  note: (reason: string) => void,
): WordingDiagnosis | null {
  const raw = successOutput(results, 'entry-wording', note);
  if (!raw) return null;

  const perBullet = Array.isArray(raw.perBullet) ? raw.perBullet : null;
  if (!perBullet) {
    note(`replied with keys [${Object.keys(raw).join(', ')}] — no perBullet array`);
    return null;
  }

  const rows = perBullet as WordingDiagnosis['perBullet'];
  const scores = rows.flatMap((b) => [b.verbStrength?.score ?? 0, b.concision?.score ?? 0]);

  return {
    entryId: entry.id,
    overallScore: scores.length
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0,
    perBullet: rows,
  };
}

function successOutput(
  results: SubAgentResult[],
  agentId: RoleId,
  note: (reason: string) => void,
): Record<string, unknown> | null {
  const result = results.find((r) => r.agentId === agentId);
  if (!result) return null;

  if (!result.success) {
    note(result.error ?? 'the agent failed');
    return null;
  }

  // A sub-agent that answered in prose rather than JSON returns a string here,
  // and reading fields off it would silently produce a diagnosis of nothing.
  if (!result.output || typeof result.output !== 'object') {
    note('replied in prose, not the JSON asked for');
    return null;
  }

  return result.output as Record<string, unknown>;
}
