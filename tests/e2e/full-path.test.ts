import { describe, expect, it, vi } from 'vitest';

import { App } from '../../src/app.js';
import { loadConfig } from '../../src/config.js';
import type { ResumeSessionState } from '../../src/domain.js';
import type { ParsedResponse, QueryParams } from '../../src/query-engine/types.js';

/**
 * From the composition root to something a person can read.
 *
 * Every other test here builds its collaborators by hand, which proves each
 * part works and proves nothing about whether the parts are connected. While
 * 609 of those passed, `pnpm diagnose` printed "Unknown command /diagnose",
 * made no model call, and exited zero; starting with a file said `Loaded` over
 * a session holding no document; and `/new` opened a session the loop then
 * ignored. None of it was reachable from a test that started at `App`.
 *
 * The model is scripted. What is real is everything between the entry point and
 * the answer: commands, the coordinator, dispatch, the hook pipeline, the
 * specialists, the report and the session.
 */
function scriptedApp() {
  const seen: QueryParams[] = [];
  const printed: string[] = [];

  const app = new App({
    config: loadConfig({ RESUMEPILOT_DATA_DIR: ':memory:' } as never),
    interactive: false,
    print: (text) => printed.push(text),
  });

  // Swapped after construction: the App builds its own engine from config, and
  // a test that reached for the real one would need a key and would cost money.
  const engine = (app as unknown as { queryEngine: { query: unknown } }).queryEngine;
  vi.spyOn(engine as never, 'query').mockImplementation((async (params: QueryParams) => {
    seen.push(params);
    return {
      type: 'text',
      content: reply(params),
      usage: { inputTokens: 0, outputTokens: 0 },
      stopReason: 'end_turn',
    } satisfies ParsedResponse;
  }) as never);

  return { app, seen, printed };
}

/** Enough of an answer for each task that the pipeline can carry on. */
function reply(params: QueryParams): string {
  const ids = [...(params.messages.map((m) => m.content).join('\n').matchAll(/\[([\w:]+:b\d+)\]/g))]
    .map((m) => m[1]!)
    .filter((id, i, all) => all.indexOf(id) === i);

  switch (params.task) {
    case 'diagnose_bullet':
      return JSON.stringify({
        bullets: ids.map((id) => ({
          bulletId: id,
          overallScore: 40,
          dimensions: {
            impact: { score: 40, detail: 'a duty' },
            measurement: { score: 20, detail: 'no figure' },
            method: { score: 60, detail: '' },
          },
          issues: [{ what: 'no measurable outcome', costWords: 5 }],
          strengths: [],
        })),
      });

    case 'judge_wording':
      return JSON.stringify({
        perBullet: ids.map((id) => ({
          bulletId: id,
          verbStrength: { score: 40, detail: '' },
          concision: { score: 60, detail: '' },
          issues: ['opens with a duty'],
        })),
      });

    case 'assess_narrative':
      return JSON.stringify({
        overallScore: 70,
        arc: 'one career',
        gaps: [],
        orderingNotes: [],
        withinEntries: [],
      });

    case 'generate_report':
      return JSON.stringify({
        immediate: ['drop the pronoun'],
        shortTerm: [],
        longTerm: [],
        setAside: [],
      });

    // The coordinator's own turns. It dispatches once, then answers.
    default:
      return params.messages.some((m) => m.role === 'tool')
        ? 'Here is what the specialists found.'
        : JSON.stringify({ tool: 'none' });
  }
}

describe('from the entry point to a report', () => {
  it('reads the file when one is named at startup', async () => {
    // `App.start` recorded the path and stopped, so the banner said `Loaded`
    // over a session with no document and every review tool refused.
    const { app } = scriptedApp();

    const session = await app.start('tests/fixtures/resume_example.pdf');

    expect((session.state as ResumeSessionState).resume).toBeDefined();
    expect((session.state as ResumeSessionState).resume?.sections.length).toBeGreaterThan(0);
    app.close();
  });

  it('says so rather than claiming a file it could not read', async () => {
    const { app, printed } = scriptedApp();

    const session = await app.start('tests/fixtures/does-not-exist.md');

    expect((session.state as ResumeSessionState).resume).toBeUndefined();
    expect(printed.join('\n')).toMatch(/Could not read/);
    app.close();
  });

  it('carries on with the session a command opened', async () => {
    // `/new` clears the memory store and opens a fresh session. The transition
    // was reported in `CommandResult.action` and read by nobody, so the next
    // turn went to the old session — one whose memory had just been emptied.
    const { app } = scriptedApp();
    const first = await app.start('tests/fixtures/resume_example.pdf');

    const next = await app.handle('/new', first);

    expect(next.id).not.toBe(first.id);
    app.close();
  });

  it('stays on the same session for an ordinary turn', async () => {
    const { app } = scriptedApp();
    const session = await app.start('tests/fixtures/resume_example.pdf');

    const next = await app.handle('/help', session);

    expect(next.id).toBe(session.id);
    app.close();
  });

  it('opens the file the person named mid-conversation', async () => {
    // The other half, and the one the tool exists for: a path pasted into the
    // conversation is read without starting over. Left untested, a guard that
    // refuses everything looks exactly like a guard that works.
    const { app } = scriptedApp();
    const session = await app.start('');

    const engine = (app as unknown as { queryEngine: { query: unknown } }).queryEngine;
    let asked = false;
    vi.spyOn(engine as never, 'query').mockImplementation((async () => {
      if (asked) {
        return {
          type: 'text',
          content: 'Loaded.',
          usage: { inputTokens: 0, outputTokens: 0 },
          stopReason: 'end_turn',
        };
      }
      asked = true;
      return {
        type: 'tool_use',
        toolCalls: [
          { id: 't1', name: 'parse_resume', input: { path: 'tests/fixtures/resume_example.pdf' } },
        ],
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'tool_use',
      };
    }) as never);

    await app.handle('here is my resume: tests/fixtures/resume_example.pdf', session);

    expect((session.state as ResumeSessionState).resume).toBeDefined();
    app.close();
  });

  it('will not open a file the person never named', async () => {
    // The coordinator holds `parse_resume` so a path pasted mid-conversation can
    // be read without starting over, and the same tool in the same hands will
    // read any path a model writes down. The permission rule said the path came
    // from the candidate; nothing checked.
    const { app, seen } = scriptedApp();
    const session = await app.start('');

    // The scripted model answers this turn by reaching for a file nobody
    // mentioned.
    seen.length = 0;
    const engine = (app as unknown as { queryEngine: { query: unknown } }).queryEngine;
    vi.spyOn(engine as never, 'query').mockImplementation((async () => ({
      type: 'tool_use',
      toolCalls: [{ id: 't1', name: 'parse_resume', input: { path: '/etc/passwd' } }],
      usage: { inputTokens: 0, outputTokens: 0 },
      stopReason: 'tool_use',
    })) as never);

    await app.handle('what do you think of my resume?', session);

    expect((session.state as ResumeSessionState).resume).toBeUndefined();
    app.close();
  });

  it('puts the resume in front of the coordinator, with ids the tools take', async () => {
    const { app, seen } = scriptedApp();
    const session = await app.start('tests/fixtures/resume_example.pdf');

    await app.handle('what does this resume say?', session);

    // Not `seen[0]`: parsing labels the document's lines with the model first.
    const turn = seen.find((p) => p.systemPrompt?.includes('coordinator'));
    const window = turn?.messages.map((m) => m.content).join('\n') ?? '';

    expect(turn, 'the coordinator never got a turn').toBeDefined();
    expect(window).toContain('<resume_content>');
    expect(window).toMatch(/\[\w+:e\d+\]/);
    expect(turn?.tools?.map((t) => t.name)).toContain('review_content');
    app.close();
  });
});
