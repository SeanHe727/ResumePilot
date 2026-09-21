import type { Trace, TraceSpan } from './types.js';

/**
 * What a production build gets.
 *
 * Every instrumentation point calls this and nothing happens — no allocation,
 * no context, no file. Which is the other half of "detachable": the facility
 * can stay wired in permanently because wired in and switched off costs
 * nothing, and the alternative — adding the calls only when debugging — means
 * writing them again every time under pressure.
 */
export class NoTrace implements Trace {
  event(): void {}

  async span<T>(_within: unknown, body: () => Promise<T>): Promise<T> {
    return body();
  }

  current(): TraceSpan | undefined {
    return undefined;
  }
}
