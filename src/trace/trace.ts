import { AsyncLocalStorage } from 'node:async_hooks';
import { randomUUID } from 'node:crypto';

import type { Trace, TraceEvent, TraceEventInput, TraceSpan, TraceTarget } from './types.js';

/** Where an event goes once it has been assembled. */
export type TraceSink = (event: TraceEvent) => void;

/** Said out loud, so an event nobody claimed reads as the gap it is. */
const UNATTRIBUTED = { kind: 'system', id: 'unknown' } as const;

/**
 * The recording trace, for a debug run.
 *
 * Spans propagate through `AsyncLocalStorage` rather than through parameters.
 * A JavaScript call stack gives asynchronous work no parent on its own, and
 * the alternative — threading a context through nine `query` call sites, the
 * tool context and the sub-agent's dependencies — is invasive, easy to miss
 * one of, and silent where it is missed. It also costs the facility what makes
 * it detachable: three call sites to delete would become a signature change
 * across the system.
 *
 * Concurrency is the reason this was checked rather than assumed. Specialists
 * fan out through a semaphore pool, and each asynchronous chain gets its own
 * store, so two entries reviewed at once land in two branches of one trace
 * rather than interleaving into nonsense.
 */
export class RecordingTrace implements Trace {
  readonly enabled = true;

  private readonly spans = new AsyncLocalStorage<TraceSpan>();

  constructor(
    private readonly sink: TraceSink,
    private readonly root: Pick<TraceSpan, 'traceId' | 'sessionId' | 'turn'> & {
      actor?: TraceSpan['actor'];
    },
  ) {}

  current(): TraceSpan | undefined {
    return this.spans.getStore();
  }

  async span<T>(within: Partial<TraceSpan>, body: () => Promise<T>): Promise<T> {
    const parent = this.spans.getStore();
    const span: TraceSpan = {
      traceId: within.traceId ?? parent?.traceId ?? this.root.traceId,
      sessionId: within.sessionId ?? parent?.sessionId ?? this.root.sessionId,
      turn: within.turn ?? parent?.turn ?? this.root.turn,
      eventId: within.eventId ?? randomUUID(),
      // Inherited when not given. A span opened by the query engine belongs to
      // whichever agent was already running: it is a subdivision of that work,
      // not a new actor, and naming it `system` would detach every model call
      // from the agent that made it.
      actor: within.actor ?? parent?.actor ?? this.root.actor ?? UNATTRIBUTED,
      ...(parent?.eventId !== undefined ? { parentEventId: parent.eventId } : {}),
      ...(within.parentEventId !== undefined ? { parentEventId: within.parentEventId } : {}),
      ...inherited(within.target ?? parent?.target),
    };

    return this.spans.run(span, body);
  }

  event(make: () => TraceEventInput): void {
    const span = this.spans.getStore();
    const partial = make();

    this.sink({
      ...partial,
      traceId: partial.traceId ?? span?.traceId ?? this.root.traceId,
      sessionId: partial.sessionId ?? span?.sessionId ?? this.root.sessionId,
      turn: partial.turn ?? span?.turn ?? this.root.turn,
      eventId: randomUUID(),
      actor: partial.actor ?? span?.actor ?? this.root.actor ?? UNATTRIBUTED,
      // The span an event happens inside is that event's parent. An event with
      // no span at all is left parentless rather than given a made-up one:
      // an orphan is a finding about the instrumentation.
      ...(span?.eventId !== undefined ? { parentEventId: span.eventId } : {}),
      ...(partial.parentEventId !== undefined ? { parentEventId: partial.parentEventId } : {}),
      ...inherited(partial.target ?? span?.target),
      timestamp: new Date().toISOString(),
    });
  }
}

/** A target, or nothing at all — never the key with `undefined` behind it. */
function inherited(target: TraceSpan['target']): { target?: TraceTarget } {
  return target ? { target } : {};
}
