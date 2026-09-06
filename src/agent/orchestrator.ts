import type { EntryDiagnosis, ResumeEntry, WordingDiagnosis } from '../domain.js';
import { buildEntryMessage, normaliseEntryDiagnosis } from '../tools/analyze-entry.js';
import { buildWordingMessage } from '../tools/analyze-wording.js';
import { SemaphorePool } from './pool.js';
import { ROLES } from './roles.js';
import type { SubAgentRuntime } from './sub-agent.js';
import type {
  AgentRunStat,
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
  timeoutMs: 120_000,
  failureStrategy: 'continue',
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

  constructor(
    private readonly runtime: SubAgentRuntime,
    config: Partial<OrchestratorConfig> & { entryConcurrency?: number } = {},
    pool?: ConcurrencyPool,
  ) {
    this.config = { ...DEFAULTS, ...config };
    this.rolePool = pool ?? new SemaphorePool(this.config.maxConcurrency);
    this.entryPool = new SemaphorePool(config.entryConcurrency ?? DEFAULT_ENTRY_CONCURRENCY);
  }

  async diagnoseEntry(entry: ResumeEntry, roles: RoleSelection): Promise<EntryVerdict> {
    const chosen = roles.roles.filter((role) => PER_ENTRY.has(role));
    const results = await this.parallel(chosen.map((role) => taskFor(role, entry)));

    return aggregate(entry, results);
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
        durationMs: 0,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  }
}

function taskFor(role: RoleId, entry: ResumeEntry): SubAgentTask {
  const agentConfig = ROLES[role]!;

  // The same user message the matching tool builds, so the sub-agent and the
  // deterministic path ask for the same JSON and agree on bullet ids.
  const input =
    role === 'entry-substance' ? buildEntryMessage({ entry }) : buildWordingMessage(entry);

  return { agentConfig, input, context: { entry: entry.headerLines.join(' | ') } };
}

function aggregate(entry: ResumeEntry, results: SubAgentResult[]): EntryVerdict {
  const substance = readSubstance(entry, results);
  const wording = readWording(entry, results);

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
        durationMs: r.durationMs,
        tokens: r.usage.inputTokens + r.usage.outputTokens,
      }),
    ),
  };
}

function readSubstance(entry: ResumeEntry, results: SubAgentResult[]): EntryDiagnosis | null {
  const raw = successOutput(results, 'entry-substance');
  if (!raw) return null;

  const normalised = normaliseEntryDiagnosis(raw, entry);
  return normalised.success ? (normalised.data ?? null) : null;
}

function readWording(entry: ResumeEntry, results: SubAgentResult[]): WordingDiagnosis | null {
  const raw = successOutput(results, 'entry-wording');
  const perBullet = Array.isArray(raw?.perBullet) ? raw.perBullet : null;
  if (!perBullet) return null;

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
): Record<string, unknown> | null {
  const result = results.find((r) => r.agentId === agentId && r.success);
  const output = result?.output;

  // A sub-agent that answered in prose rather than JSON returns a string here,
  // and reading fields off it would silently produce a diagnosis of nothing.
  return output && typeof output === 'object' ? (output as Record<string, unknown>) : null;
}
