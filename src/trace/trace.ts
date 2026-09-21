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

  private lost = 0;

  constructor(
    private readonly sink: TraceSink,
    private readonly root: Pick<TraceSpan, 'traceId' | 'sessionId' | 'turn'> & {
      actor?: TraceSpan['actor'];
    },
    /** Where a lost event is reported. Injected so a test can read it. */
    private readonly warn: (text: string) => void = (text) => process.stderr.write(text),
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

    // The span goes on the record before anything inside it does. Children
    // name it as their parent, and a parent id that resolves to nothing in the
    // file is a tree that cannot be rebuilt from the file — which is the only
    // place anyone will read it. Written here rather than on close, because a
    // span whose body never returns is exactly when the parent matters.
    const started = Date.now();
    this.record(parent, () => ({
      phase: 'span',
      eventId: span.eventId,
      actor: span.actor,
      ...(parent?.eventId !== undefined ? { parentEventId: parent.eventId } : {}),
    }));

    return this.spans.run(span, async () => {
      try {
        const value = await body();
        this.event(() => ({ phase: 'span-end', status: 'success', durationMs: Date.now() - started }));
        return value;
      } catch (err) {
        // The span is closed either way. A specialist that threw and one that
        // is still running look identical in a file that only records returns.
        this.event(() => ({
          phase: 'span-end',
          status: 'error',
          durationMs: Date.now() - started,
          error: { message: err instanceof Error ? err.message : String(err) },
        }));
        throw err;
      }
    });
  }

  event(make: () => TraceEventInput): void {
    this.record(this.spans.getStore(), make);
  }

  /** How many events were lost, for a caller that wants to say so. */
  get dropped(): number {
    return this.lost;
  }

  /**
   * Builds the event and hands it to the sink, and swallows anything either of
   * them throws.
   *
   * An observation failure must not become a finding about the thing being
   * observed. A full disk used to arrive inside `query()`, where it was
   * classified as a model failure, retried three times against the API, and
   * recorded as a provider that would not answer.
   *
   * Swallowed, not hidden: the first loss is reported on stderr and the rest
   * are counted, because a trace that is quietly missing events is worse than
   * no trace — a reader draws conclusions from gaps we created.
   */
  private record(span: TraceSpan | undefined, make: () => TraceEventInput): void {
    try {
      const partial = make();
      this.sink({
        ...partial,
        traceId: partial.traceId ?? span?.traceId ?? this.root.traceId,
        sessionId: partial.sessionId ?? span?.sessionId ?? this.root.sessionId,
        turn: partial.turn ?? span?.turn ?? this.root.turn,
        // A span writes its own opening record under the id its children will
        // name; everything else is given a fresh one.
        eventId: partial.eventId ?? randomUUID(),
        actor: partial.actor ?? span?.actor ?? this.root.actor ?? UNATTRIBUTED,
        // The span an event happens inside is that event's parent. An event with
        // no span at all is left parentless rather than given a made-up one:
        // an orphan is a finding about the instrumentation.
        ...(span?.eventId !== undefined ? { parentEventId: span.eventId } : {}),
        ...(partial.parentEventId !== undefined ? { parentEventId: partial.parentEventId } : {}),
        ...inherited(partial.target ?? span?.target),
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      this.lost += 1;
      if (this.lost === 1) {
        const why = err instanceof Error ? err.message : String(err);
        this.warn(`trace: recording failed (${why}); this trace is incomplete\n`);
      }
    }
  }
}

/** A target, or nothing at all — never the key with `undefined` behind it. */
function inherited(target: TraceSpan['target']): { target?: TraceTarget } {
  return target ? { target } : {};
}
