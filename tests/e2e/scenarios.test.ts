import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { App } from '../../src/app.js';
import { loadConfig } from '../../src/config.js';
import type { ResumeSessionState } from '../../src/domain.js';
import type { ParsedResponse, QueryParams } from '../../src/query-engine/types.js';
import { playScenario, readScenario } from '../../src/scenario.js';
import { readTrace, resolveTracePath } from '../../src/trace/read.js';
import { summariseTrace } from '../../src/trace/summary.js';

/**
 * The scripts for the next paid runs, played against a scripted model first.
 *
 * A paid run that dies on the first turn because the script named a file the
 * guard refused, or a tool the coordinator does not hold, costs a run and
 * teaches nothing about the agents. That has happened once already: the path
 * guard refused `cv.pdf.` because of the full stop. So every script is played
 * here, through the real App and the real trace, before anyone pays for it.
 *
 * The coordinator here is scripted, so these assertions are about the scripts
 * and the plumbing they reach — the file read, the fact routed, the edit
 * applied, the trace whole — and say nothing about what a real model chooses.
 * That is what the paid run is for.
 */
const RESUME = 'tests/fixtures/resume_example.pdf';
const dirs: string[] = [];

afterEach(() => {
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function scriptedApp() {
  const traceDir = mkdtempSync(join(tmpdir(), 'scenario-trace-'));
  dirs.push(traceDir);
  const app = new App({
    config: loadConfig({ RESUMEPILOT_DATA_DIR: ':memory:' } as never),
    interactive: false,
    print: () => {},
    traceDir,
  });
  const engine = (app as unknown as { queryEngine: { query: unknown } }).queryEngine;
  vi.spyOn(engine as never, 'query').mockImplementation((async (params: QueryParams) =>
    params.systemPrompt?.includes('coordinator') ? coordinator(params) : specialist(params)) as never);
  return { app, traceDir };
}

function text(content: string): ParsedResponse {
  return { type: 'text', content, usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' };
}

function calls(...toolCalls: Array<{ name: string; input: unknown }>): ParsedResponse {
  return {
    type: 'tool_use',
    toolCalls: toolCalls.map((c, i) => ({ id: `c${Date.now()}${i}`, ...c })),
    usage: { inputTokens: 0, outputTokens: 0 },
    stopReason: 'tool_use',
  } as ParsedResponse;
}

const content = { name: 'review_content', input: { entryId: 's2:e0' } };

/** One plausible route per message, so the plumbing each script needs is exercised. */
function coordinator(params: QueryParams): ParsedResponse {
  const lastUser = params.messages.map((m) => m.role).lastIndexOf('user');
  const said = String(params.messages[lastUser]?.content ?? '');
  const round = params.messages.slice(lastUser + 1).filter((m) => m.role === 'assistant').length;

  if (said.includes('.pdf')) {
    if (round === 0) return calls({ name: 'parse_resume', input: { path: RESUME } });
    if (round === 1) return calls({ name: 'review_format', input: {} }, content, { name: 'generate_report', input: {} });
  } else if (said.includes('p99')) {
    if (round === 0) {
      return calls(
        { name: 'record_fact', input: { fact: 'p99 latency went from 800 ms to 90 ms', bulletId: 's2:e0:b0' } },
        content,
      );
    }
  } else if (said.includes('It now reads')) {
    const rewritten = /"([^"]+)"/.exec(said)?.[1] ?? '';
    if (round === 0) return calls({ name: 'apply_revision', input: { bulletId: 's2:e0:b0', text: rewritten } }, content);
  } else if (said.includes('update the report')) {
    if (round === 0) return calls({ name: 'generate_report', input: {} });
  }
  return text('Done.');
}

/** Enough of an answer for each specialist task that the pipeline carries on. */
function specialist(params: QueryParams): ParsedResponse {
  const ids = [...params.messages.map((m) => m.content).join('\n').matchAll(/\[([\w:]+:b\d+)\]/g)]
    .map((m) => m[1]!)
    .filter((id, i, all) => all.indexOf(id) === i);
  switch (params.task) {
    case 'diagnose_bullet':
      return text(
        JSON.stringify({
          bullets: ids.map((id) => ({
            bulletId: id,
            overallScore: 60,
            dimensions: {
              impact: { score: 60, detail: '' },
              measurement: { score: 60, detail: '' },
              method: { score: 60, detail: '' },
            },
            issues: [{ what: 'baseline unclear', costWords: 3 }],
            strengths: [],
          })),
        }),
      );
    case 'generate_report':
      return text(JSON.stringify({ immediate: [], shortTerm: [], longTerm: [], setAside: [] }));
    default:
      return text('{}');
  }
}

async function play(script: string) {
  const { app, traceDir } = scriptedApp();
  const messages = readScenario(script, RESUME);
  const session = await playScenario(app, await app.start(''), messages, () => {});
  app.close();
  const summary = summariseTrace(readTrace(resolveTracePath(traceDir)));
  const called = summary.turns.flatMap((t) => t.calls);
  return { session, summary, called, messages };
}

describe('the scripts for the next paid runs', () => {
  it('name the résumé in the conversation, not up front', () => {
    for (const script of ['scenarios/fact-only.txt', 'scenarios/real-edit.txt']) {
      const [first] = readScenario(script, RESUME);
      expect(first).toContain(RESUME);
    }
  });

  it('a fact only: the file is read, the fact is filed, and the next reader is told it', async () => {
    const { session, summary, called } = await play('scenarios/fact-only.txt');

    expect((session.state as ResumeSessionState).resume).toBeDefined();
    expect(called.find((c) => c.tool === 'parse_resume')?.status).toBe('success');
    expect(called.find((c) => c.tool === 'record_fact')?.status).toBe('success');

    // The re-review after the fact is the one that must carry it.
    const afterFact = summary.turns.find((t) => t.calls.some((c) => c.tool === 'record_fact'));
    expect(afterFact?.agents.some((a) => a.withSuppliedFacts)).toBe(true);

    expect(summary.spans.unclosed).toBe(0);
    expect(summary.spans.orphans).toBe(0);
  });

  it('a real edit: the rewrite lands in the document and the report is rebuilt', async () => {
    const { session, summary, called } = await play('scenarios/real-edit.txt');

    expect(called.find((c) => c.tool === 'apply_revision')?.status).toBe('success');
    const state = session.state as ResumeSessionState;
    const bullet = state.resume?.sections
      .flatMap((s) => s.entries)
      .flatMap((e) => e.bullets)
      .find((b) => b.id === 's2:e0:b0');
    expect(bullet?.text).toMatch(/^Cut the pending-case backlog 68%/);

    expect(called.filter((c) => c.tool === 'generate_report' && c.status === 'success')).toHaveLength(2);
    expect(summary.turns.filter((t) => t.coverage !== undefined)).toHaveLength(2);
    expect(summary.spans.unclosed).toBe(0);
  });
});
