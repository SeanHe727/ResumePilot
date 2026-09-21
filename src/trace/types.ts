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
import type { TokenUsage, ToolSchema } from '../types.js';

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
  /**
   * A span opening, written under the id its children name as their parent.
   *
   * Without it the tree is rebuildable only from memory: the file holds
   * `parentEventId` values that resolve to nothing in the file.
   */
  | 'span'
  /** The same span closing, with how long it took and whether it threw. */
  | 'span-end'
  | 'input'
  | 'decision'
  | 'dispatch'
  | 'tool'
  /** One try at a request. Several of these can sit under one `input`. */
  | 'attempt'
  | 'result'
  | 'failure'
  | 'output';

/**
 * How far a call got before whatever happened to it happened.
 *
 * A call that never left the machine and a call the service refused are
 * different findings about an agent, and both arrive as an exception. Without
 * this they read the same in the record: a failure, no answer, no request.
 */
export type TraceStage = 'budget' | 'routing' | 'provider-init' | 'request';

/**
 * `success` is about the exchange, not about the answer.
 *
 * A model can return 200 and be wrong, which is most of what this facility is
 * for finding; naming this `ok` or `correct` would quietly claim otherwise.
 * `cancelled` is separate because a run the user stopped is neither a failure
 * of ours nor a completed call.
 */
export type TraceStatus = 'success' | 'error' | 'cancelled';

/** A failure with its parts kept apart, so a reader can count by category. */
export interface TraceError {
  category?: string;
  message: string;
  retryable?: boolean;
  retryAfterMs?: number;
}

/**
 * The request as the model saw it, in our own vocabulary rather than a
 * provider's.
 *
 * Enough to reconstruct the call: the tool definitions in full, not their
 * names, because a model choosing badly among tools it was given and a model
 * given badly-described tools are the same event in a trace that only kept
 * the names. The SDK's own request object is deliberately not what is stored —
 * it carries keys, callbacks and an abort signal.
 */
export interface TraceRequest {
  task?: string;
  model?: string;
  provider?: string;
  systemPrompt?: string;
  messages: unknown[];
  tools?: ToolSchema[];
  maxTokens?: number;
  jsonMode?: boolean;
  effort?: string;
  useCache?: boolean;
  cacheTtlSeconds?: number;
  cacheSystemPrompt?: boolean;
}

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
  /** How far the call got. Absent on events that are not about an outcome. */
  stage?: TraceStage;
  status?: TraceStatus;
  error?: TraceError;
  durationMs?: number;
  usage?: TokenUsage;
  /** True where the answer was replayed rather than asked for. */
  cached?: boolean;
  /** Which try this event is about, on a `phase: 'attempt'` event. */
  attempt?: number;
  /** How many tries the call took in the end. Zero for a cached answer. */
  attempts?: number;
  /**
   * What the tries before the last one failed with.
   *
   * On the summary event, so a call that succeeded on its third attempt still
   * says what the first two hit without a reader having to join the attempts
   * back up by hand.
   */
  priorErrors?: TraceError[];
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
  /**
   * Whether anything is recording.
   *
   * For work that cannot be deferred into the factory below — keeping a list
   * across a retry loop, say. Not for deciding whether to instrument: that
   * decision belongs at the composition root, and a call site that asks the
   * environment is a second switch to keep in step with the first.
   */
  readonly enabled: boolean;
  /**
   * Records an event, built only if anyone is listening.
   *
   * A factory rather than a value because the argument is the expensive part:
   * a copy of the messages, the tool schemas, a snapshot of the answer. Passed
   * as a value, every switched-off run would pay for all of it and throw it
   * away.
   */
  event(make: () => TraceEventInput): void;
  /**
   * Runs `body` inside a child span, and returns what it returns.
   *
   * The actor may be left out, in which case the span keeps the one it opened
   * inside: the query engine knows a call is being made and has no idea whose
   * it is, which is exactly the case this has to serve.
   */
  span<T>(within: Partial<TraceSpan>, body: () => Promise<T>): Promise<T>;
  /** The span in force, for an instrumentation point that needs to read it. */
  current(): TraceSpan | undefined;
}

/** An event with the parts a span already knows left out. */
export type TraceEventInput = Omit<
  TraceEvent,
  'traceId' | 'eventId' | 'sessionId' | 'turn' | 'actor' | 'timestamp'
> &
  Partial<TraceSpan>;
