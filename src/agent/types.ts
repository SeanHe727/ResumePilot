import type { TokenUsage } from '../types.js';
import type {
  EntryDiagnosis,
  ExtractionQuality,
  FormatDiagnosis,
  JdMatch,
  JobDescription,
  NarrativeAssessment,
  ResumeDocument,
  ResumeEntry,
  WordingDiagnosis,
} from '../domain.js';

/**
 * Sub-agents follow the Agent-as-Tool pattern: the orchestrator invokes one the
 * same way it would call a tool, but inside it runs its own miniature loop with
 * its own system prompt, tool subset and Context.
 */
export interface SubAgentConfig {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  /** Tool names this agent may call. Anything else is unavailable to it. */
  tools: string[];
  /** Guards against a sub-agent looping forever. */
  maxTurns: number;
  timeoutMs: number;
  /**
   * Allow-list of context keys the parent may pass down. A sub-agent inheriting
   * the full parent context costs 3x the tokens and diagnoses worse — the
   * narrower the input, the sharper the judgement.
   */
  contextBoundary: string[];
}

export interface SubAgentTask {
  agentConfig: SubAgentConfig;
  input: string;
  context?: Record<string, unknown>;
}

export interface SubAgentResult<T = unknown> {
  agentId: string;
  agentName: string;
  success: boolean;
  output?: T;
  usage: TokenUsage;
  turns: number;
  durationMs: number;
  error?: string;
}

export type FailureStrategy =
  /** Any sub-agent failing fails the whole batch. */
  | 'fail_fast'
  /** Failures are dropped; surviving results still compose. The default. */
  | 'continue'
  | 'retry';

export interface OrchestratorConfig {
  maxConcurrency: number;
  timeoutMs: number;
  failureStrategy: FailureStrategy;
}

export interface AgentRunStat {
  name: string;
  success: boolean;
  turns: number;
  durationMs: number;
  tokens: number;
}

/** One entry, seen from every angle the per-entry agents cover. */
export interface EntryVerdict {
  entryId: string;
  /** Entry Substance agent — XYZ scoring plus the cross-bullet read. */
  substance: EntryDiagnosis | null;
  /** Entry Wording agent — cheap model, no retrieval. */
  wording: WordingDiagnosis | null;
  overallScore: number;
  agentStats: AgentRunStat[];
}

/**
 * The fixed role catalogue.
 *
 * Roles are declared here rather than invented at runtime: the shape of a
 * resume is known ahead of time, so paying for model-decided topology buys
 * unpredictable cost and unreproducible runs with no matching gain. Variation
 * between resumes is absorbed by which roles run (below) and by what the
 * knowledge base retrieves — not by rewiring the graph.
 */
export type RoleId = 'entry-substance' | 'entry-wording' | 'jd-match' | 'narrative';

export interface RoleSelectionInput {
  entryCount: number;
  hasJd: boolean;
  /** Wording judgements are meaningless on text a parser could barely read. */
  quality: ExtractionQuality;
}

export interface RoleSelection {
  roles: RoleId[];
  /** Why each role was included or dropped — surfaced by `/status`. */
  reasons: Record<string, string>;
}

/** Dynamic *selection* from a static catalogue: adaptive, still bounded. */
export interface RoleSelector {
  select(input: RoleSelectionInput): RoleSelection;
}

export interface Orchestrator {
  /** Runs the per-entry roles over one entry, in parallel. */
  diagnoseEntry(entry: ResumeEntry, roles: RoleSelection): Promise<EntryVerdict>;
  /** Entries are independent, so the pool decides how many run at once. */
  diagnoseAll(
    entries: ResumeEntry[],
    roles: RoleSelection,
    onProgress?: (done: number, total: number) => void,
  ): Promise<EntryVerdict[]>;
  /** Whole-document roles, run once rather than per entry. */
  matchJd(resume: ResumeDocument, jd: JobDescription): Promise<JdMatch>;
  assessNarrative(
    entries: ResumeEntry[],
    verdicts: EntryVerdict[],
  ): Promise<NarrativeAssessment>;
  parallel(tasks: SubAgentTask[]): Promise<SubAgentResult[]>;
}

export interface ConcurrencyPool {
  run<T>(fn: () => Promise<T>): Promise<T>;
  runAll<T>(tasks: Array<() => Promise<T>>): Promise<T[]>;
  getStats(): { running: number; queued: number; max: number };
}

/** Format scoring is pure computation and needs no sub-agent at all. */
export type FormatScorer = (resume: ResumeDocument) => FormatDiagnosis;
