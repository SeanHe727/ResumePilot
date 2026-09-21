import { appendFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

import type { TraceEvent } from './types.js';

/** Owner read/write only. A trace is a second copy of somebody's résumé. */
const FILE_MODE = 0o600;
const DIR_MODE = 0o700;

/**
 * Past this, a run stops recording rather than filling the disk.
 *
 * A stuck agent can loop, and a trace of a loop is both useless and unbounded.
 * Stopping is reported in the file, so a short trace is never mistaken for a
 * short run.
 */
const DEFAULT_MAX_BYTES = 64 * 1024 * 1024;

/** Traces older than this are removed when a new run starts. */
const DEFAULT_KEEP_DAYS = 7;

export interface TraceWriterOptions {
  /** Where traces go. One directory per run, named for the trace. */
  dir: string;
  traceId: string;
  maxBytes?: number;
  keepDays?: number;
}

/**
 * Events to a JSONL file, with the rules a second copy of a résumé needs.
 *
 * The contents were all sent to a model already, which is what makes writing
 * them defensible and not what makes them safe: gathered in one file they are
 * a fuller record than anything else on the machine, and `.gitignore` is a
 * convention about version control rather than a permission. So: owner-only
 * everything, one directory per run so deleting one run is a deletion, a size
 * cap, and old runs cleared on the way in.
 *
 * Reasoning never arrives here — it is dropped at the instrumentation point,
 * where the shape that carries it is still typed.
 */
export class JsonlTraceWriter {
  private readonly file: string;
  private readonly maxBytes: number;
  private written = 0;
  private stopped = false;

  constructor(private readonly options: TraceWriterOptions) {
    this.maxBytes = options.maxBytes ?? DEFAULT_MAX_BYTES;

    const run = join(options.dir, options.traceId);
    mkdirSync(run, { recursive: true, mode: DIR_MODE });
    this.file = join(run, 'trace.jsonl');
    // A run resumed under an id that already has a file starts from what is
    // there. Starting the count at zero would let a reused directory grow to a
    // multiple of the cap, which is the one number this promises.
    if (existsSync(this.file)) this.written = statSync(this.file).size;

    sweep(options.dir, options.keepDays ?? DEFAULT_KEEP_DAYS, options.traceId);
  }

  get path(): string {
    return this.file;
  }

  write = (event: TraceEvent): void => {
    if (this.stopped) return;

    const line = `${JSON.stringify(event, replacer)}\n`;
    // Bytes, not characters. A résumé in Chinese is three bytes a character and
    // an emoji four, so a cap counted in `length` is a cap that lets a file
    // reach several times the size it declares.
    const size = Buffer.byteLength(line, 'utf8');
    if (this.written + size > this.maxBytes) {
      this.stopped = true;
      const note = `${JSON.stringify({
        traceId: event.traceId,
        phase: 'failure',
        stage: 'request',
        status: 'error',
        error: { message: `trace stopped at ${this.maxBytes} bytes; the run continued` },
        timestamp: new Date().toISOString(),
      })}\n`;
      appendFileSync(this.file, note, { mode: FILE_MODE });
      this.written += Buffer.byteLength(note, 'utf8');
      return;
    }

    appendFileSync(this.file, line, { mode: FILE_MODE });
    this.written += size;
  };
}

/**
 * Anything that should not be on disk, and anything that cannot be.
 *
 * Credentials because a header or a config can carry one and a trace is read
 * by eye. Functions and signals because they are runtime plumbing that
 * serialises to nothing useful and can hold a reference to the whole app.
 */
const SECRET = /^(?:api[-_]?key|authorization|token|secret|password|cookie)$/i;

/**
 * A model's own working, under every name a provider gives it.
 *
 * Dropped at the instrumentation point already, where the type that carries it
 * is still in view. Repeated here because this is the last place before disk:
 * the next four instrumentation points are written by someone reading the
 * plan, not this file, and one of them recording a raw provider payload is how
 * an opaque reasoning blob ends up in a file we promised would not hold one.
 */
const REASONING = /^(?:reasoning(?:[-_]?content|[-_]?items)?|thinking|redacted[-_]?thinking|encrypted[-_]?content|responses[-_]?items)$/i;

function replacer(key: string, value: unknown): unknown {
  if (SECRET.test(key)) return '[redacted]';
  // Marked rather than deleted. A key that vanishes silently is indistinguishable
  // from a field the model never returned, and this facility exists to stop a
  // reader drawing conclusions from something that was quietly removed.
  if (REASONING.test(key)) return '[reasoning omitted]';
  if (typeof value === 'function') return undefined;
  if (value instanceof AbortSignal) return undefined;
  return value;
}

/** Clears runs older than the retention window, leaving the current one. */
function sweep(dir: string, keepDays: number, keep: string): void {
  const cutoff = Date.now() - keepDays * 24 * 60 * 60 * 1000;

  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (!name.isDirectory() || name.name === keep) continue;
    const path = join(dir, name.name);
    try {
      if (statSync(path).mtimeMs < cutoff) rmSync(path, { recursive: true, force: true });
    } catch {
      // A directory that vanished between reading and stating is already gone.
    }
  }
}
