/**
 * A record of what every agent was asked and what it answered.
 *
 * A development instrument, attached for a debug run and absent otherwise. It
 * exists to answer a question nothing else in the system can: whether an agent
 * behaved sensibly. The audit log cannot — it is built for the opposite
 * purpose, keeping enough of a call to recognise it and deliberately not
 * enough to reconstruct it, because a log that stores résumé text verbatim
 * becomes a second copy of everything the user gave us.
 *
 * This is that second copy. Every field in it was already sent to a model, but
 * collecting it in one place on disk is a new exposure, and the storage rules
 * in the writer are part of the feature rather than a detail of it.
 */
import type { TokenUsage } from '../types.js';

/** Who is acting, at which level of the fan-out. */
export interface TraceActor {
  kind: 'main' | 'specialist' | 'nested' | 'system';
  /** `content`, `deep-research`, `report-writer`, `history-summary`, … */
  id: string;
}

/**
 * What a span carries down to everything inside it.
 *
 * The reason there is a context at all: `QueryParams` names a task and nothing
 * else. A trace taken at the query engine sees every prompt in the system and
 * cannot say which run, which turn, or which agent any of them belongs to. The
 * span supplies what the parameters do not.
 */
export interface TraceSpan {
  traceId: string;
  /** The span this one opened inside. Absent on the root. */
  parentEventId?: string;
  /** Identifies this span, so events inside it name it as their parent. */
  eventId: string;
  sessionId: string;
  turn: number;
  actor: TraceActor;
  target?: TraceTarget;
}

export interface TraceTarget {
  sectionId?: string;
  entryId?: string;
  bulletId?: string;
}

export type TracePhase =
  | 'input'
  | 'decision'
  | 'dispatch'
  | 'tool'
  | 'result'
  | 'failure'
  | 'output';

export interface TraceEvent {
  traceId: string;
  eventId: string;
  parentEventId?: string;
  sessionId: string;
  turn: number;
  actor: TraceActor;
  phase: TracePhase;
  target?: TraceTarget;
  /** A short stated reason, never hidden working. */
  purpose?: string;
  promptVersion?: string;
  model?: string;
  provider?: string;
  tool?: string;
  /** Whole and untruncated — a trace that cannot reconstruct answers nothing. */
  input?: unknown;
  output?: unknown;
  success?: boolean;
  error?: string;
  durationMs?: number;
  usage?: TokenUsage;
  /** True where the answer was replayed rather than asked for. */
  cached?: boolean;
  /** How many attempts the call took, when more than one. */
  attempts?: number;
  /** Which specialist results a finding came from, and where it surfaced. */
  sourceFindingIds?: string[];
  reportPointIds?: string[];
  timestamp: string;
}

/**
 * Both halves of the contract, because one without the other is useless.
 *
 * `event` records; `span` says what the recording belongs to. Propagation is
 * named here rather than left to the caller because a JavaScript call stack
 * does not give asynchronous work a parent on its own: without `span`, every
 * instrumentation point would have to thread a context through its own
 * signature, and the one that forgot would emit orphans in silence.
 */
export interface Trace {
  event(e: Omit<TraceEvent, 'traceId' | 'eventId' | 'sessionId' | 'turn' | 'actor' | 'timestamp'> & Partial<TraceSpan>): void;
  /** Runs `body` inside a child span, and returns what it returns. */
  span<T>(within: Partial<TraceSpan> & { actor: TraceActor }, body: () => Promise<T>): Promise<T>;
  /** The span in force, for an instrumentation point that needs to read it. */
  current(): TraceSpan | undefined;
}
