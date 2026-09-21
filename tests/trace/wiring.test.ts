import { mkdtempSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { App } from '../../src/app.js';
import { loadConfig } from '../../src/config.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { NoTrace } from '../../src/trace/index.js';
import type { Trace } from '../../src/trace/index.js';

/**
 * A trace is switched on for a debug run and absent otherwise, which is only
 * true if the default really is inert and the switch really reaches the engine.
 */
function app(traceDir?: string): App {
  return new App({
    config: loadConfig({ RESUMEPILOT_DATA_DIR: ':memory:' } as never),
    interactive: false,
    print: () => {},
    ...(traceDir ? { traceDir } : {}),
  });
}

const engineTrace = (a: App): Trace =>
  (a as unknown as { queryEngine: { trace: Trace } }).queryEngine.trace;

describe('attaching the trace to a run', () => {
  it('runs without one by default, and says it has no path', () => {
    const a = app();

    expect(a.trace).toBeInstanceOf(NoTrace);
    expect(a.tracePath).toBeUndefined();
    expect(engineTrace(a)).toBeInstanceOf(NoTrace);
    a.close();
  });

  it('gives the engine the same trace it reports the path of', () => {
    // Two traces — one the app names, one the engine writes to — would report
    // a file that stays empty.
    const dir = mkdtempSync(join(tmpdir(), 'trace-wiring-'));
    const a = app(dir);

    expect(a.tracePath).toContain(dir);
    expect(engineTrace(a)).toBe(a.trace);
    expect(a.trace).not.toBeInstanceOf(NoTrace);
    a.close();
  });

  it('takes the switch from the environment, which is how a debug run turns it on', () => {
    const dir = mkdtempSync(join(tmpdir(), 'trace-wiring-'));
    const previous = process.env.RESUMEPILOT_TRACE_DIR;
    process.env.RESUMEPILOT_TRACE_DIR = dir;
    try {
      const a = app();

      expect(a.tracePath).toContain(dir);
      a.close();
    } finally {
      if (previous === undefined) delete process.env.RESUMEPILOT_TRACE_DIR;
      else process.env.RESUMEPILOT_TRACE_DIR = previous;
    }
  });

  it('gives the specialists the same trace as the engine', () => {
    // A run where the model calls are recorded and the agents making them are
    // not is a file full of prompts nobody can attribute.
    const dir = mkdtempSync(join(tmpdir(), 'trace-wiring-'));
    const a = app(dir);
    const session = new SqliteSessionManager().create({ sourcePath: 'resume.md' });

    const orchestrator = (
      a as unknown as { orchestratorFor: (s: unknown) => { runtime: { trace: Trace } } }
    ).orchestratorFor(session);

    expect(orchestrator.runtime.trace).toBe(a.trace);
    a.close();
  });

  it('opens the run directory when the trace is on, before anything is asked', () => {
    const dir = mkdtempSync(join(tmpdir(), 'trace-wiring-'));
    const a = app(dir);

    expect(existsSync(join(dir))).toBe(true);
    expect(a.tracePath).toMatch(/trace\.jsonl$/);
    a.close();
  });
});
