import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

import type { TraceEvent } from './types.js';

const TRACE_FILE = 'trace.jsonl';

/**
 * A trace file from whatever a person points at.
 *
 * The file itself, the run folder holding it, or the folder of runs — in which
 * case the newest, because "the run I just did" is what is almost always meant.
 */
export function resolveTracePath(path: string): string {
  if (!existsSync(path)) throw new Error(`no trace at ${path}`);
  if (statSync(path).isFile()) return path;
  if (existsSync(join(path, TRACE_FILE))) return join(path, TRACE_FILE);

  const runs = readdirSync(path)
    .map((name) => join(path, name, TRACE_FILE))
    .filter((file) => existsSync(file))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  if (runs.length === 0) throw new Error(`no ${TRACE_FILE} under ${path}`);
  return runs[0]!;
}

/** Every event, skipping a torn last line rather than failing on it. */
export function readTrace(file: string): TraceEvent[] {
  const events: TraceEvent[] = [];
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      events.push(JSON.parse(line) as TraceEvent);
    } catch {
      // A run killed mid-write leaves half a line. The rest is still a trace.
    }
  }
  return events;
}
