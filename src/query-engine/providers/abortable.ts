/**
 * An abort that is honoured whether or not the socket is.
 *
 * The SDK is handed the signal and is meant to end the stream when it fires.
 * Measured: a sub-agent with a 180-second deadline sat on one request for 897
 * seconds, because a stalled stream was waiting on a read that the abort never
 * reached. So the wait itself is raced against the signal: when it fires, the
 * iteration ends here, and the caller's own check turns that into a timeout.
 */
export async function* abortable<T>(source: AsyncIterable<T>, signal?: AbortSignal): AsyncIterable<T> {
  if (!signal) {
    yield* source;
    return;
  }
  const iterator = source[Symbol.asyncIterator]();
  const aborted = new Promise<'aborted'>((resolve) => {
    if (signal.aborted) resolve('aborted');
    else signal.addEventListener('abort', () => resolve('aborted'), { once: true });
  });
  try {
    while (true) {
      const next = await Promise.race([iterator.next(), aborted]);
      if (next === 'aborted' || next.done) return;
      yield next.value;
    }
  } finally {
    // Let go of the connection; a stalled read is not waited on.
    void iterator.return?.();
  }
}

/** The request itself, raced the same way: headers can stall as well as bodies. */
export async function beforeAbort<T>(request: Promise<T>, signal?: AbortSignal): Promise<T> {
  if (!signal) return request;
  if (signal.aborted) throw new DOMException('Request aborted', 'AbortError');
  return Promise.race([
    request,
    new Promise<never>((_, reject) =>
      signal.addEventListener('abort', () => reject(new DOMException('Request aborted', 'AbortError')), {
        once: true,
      }),
    ),
  ]);
}
