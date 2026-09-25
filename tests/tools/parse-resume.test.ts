import { describe, expect, it } from 'vitest';

import type { ResumeSessionState } from '../../src/domain.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { parseResumeTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';

/**
 * No engine, which is the offline mode rather than a degraded one.
 *
 * With one, a model groups the rows; without, the rules do. These cases are
 * about what the tool makes of the result either way, so they take the path that
 * needs nothing. The cases that are about the grouping give it an engine.
 */
function ctx(queryEngine?: unknown) {
  const session = new SqliteSessionManager().create({ sourcePath: '' });
  return {
    ctx: {
      session,
      ...(queryEngine ? { queryEngine } : {}),
      abortSignal: new AbortController().signal,
    } as unknown as ToolContext,
    session,
  };
}

/** Answers the grouping request with whatever the case wants it to claim. */
function grouping(reply: unknown, seen: string[] = []) {
  return {
    async query(params: { messages: Array<{ content: string }> }) {
      seen.push(params.messages[0]!.content);
      return {
        type: 'text',
        content: typeof reply === 'string' ? reply : JSON.stringify(reply),
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      };
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };
}

const state = (s: { state: unknown }) => s.state as ResumeSessionState;

describe('parse_resume', () => {
  it('turns a path into the document this session is about', async () => {
    // Uploading is choosing a file; this is reading one. They were one command
    // until a path to a newer draft turned up mid-conversation, at which point
    // the reading was locked inside something the coordinator cannot call.
    const { ctx: c, session } = ctx();

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      c,
    );

    expect(result.success).toBe(true);
    expect(state(session).resume?.sections.length).toBeGreaterThan(0);
    expect(session.sourcePath).toContain('resume_example.pdf');
  });

  it('reports the entries by id, which is how a review asks for one', async () => {
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, c);
    const data = result.data as { entryCount: number; sections: Array<{ entries: Array<{ id: string }> }> };

    expect(data.entryCount).toBeGreaterThan(0);
    expect(data.sections.flatMap((s) => s.entries)[0]?.id).toMatch(/:/);
  });

  it('does not hand the resume text back through the tool result', async () => {
    // The document goes on the session, where the context renders it into the
    // layer built for it. A tool result carrying the whole resume would put a
    // second copy in the transcript, to be evicted or compacted separately.
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, c);

    expect(JSON.stringify(result.data)).not.toContain('Responsible for');
  });

  it('says how well the parse reconciled, in numbers rather than in lists', async () => {
    // A model told which rows and which ids cannot do anything about either,
    // and the lists are long enough to crowd out the resume. What it can do is
    // decide whether to trust the structure it is about to read.
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      c,
    );

    // Clean again, and it was not for one commit: this fixture's project titles
    // are body text with a masked date, which left six bullets owned by the
    // section. `anomalyCount` reported that, and the labeller now reads the
    // titles instead — a row with bullets beneath it titles them. The count is
    // what a coordinator reads before it dispatches, so it has to mean
    // something: clean here is a claim, not a default.
    expect((result.data as { integrity: unknown }).integrity).toEqual({
      clean: true,
      errorCount: 0,
      anomalyCount: 0,
    });
  });

  it('keeps the reconciliation itself on the session, not in the transcript', async () => {
    const { ctx: c, session } = ctx();

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      c,
    );

    expect(JSON.stringify(result.data)).not.toContain('droppedRows');
    const state = session.state as ResumeSessionState;
    expect(state.resume?.meta.integrity?.totalRows).toBeGreaterThan(0);
  });

  it('keeps an address out of the headers it does hand back', async () => {
    // The summary is a tool result, which reaches the model like any prompt.
    // The headers go in it, and a header is somewhere an address ends up when
    // a contact block was cut in with the entries above it.
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/bulleted-contact.pdf' },
      c,
    );

    const summary = JSON.stringify(result.data);
    expect(summary).not.toMatch(/[\w.+-]+@[\w-]+\.[\w.]+/);
    expect(summary).not.toMatch(/\+?\d(?:[\s()-]{0,2}\d){7,}/);
  });

  it('drops what was found about the document it replaced', async () => {
    // Findings about lines that are no longer there would otherwise reach a
    // report as findings about the lines that are.
    const { ctx: c, session } = ctx();
    session.state = {
      entryDiagnoses: [{ entryId: 'old:0' }],
      latestReport: { summary: {} },
      reviewAttempts: [
        { role: 'content', target: 'old:0', outcome: 'rejected', reason: 'no entry old:0' },
      ],
    } as unknown as ResumeSessionState;

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, c);

    expect(state(session).entryDiagnoses).toBeUndefined();
    expect(state(session).latestReport).toBeUndefined();
    // A refusal is about the document it was asked against. Carried over, it
    // would appear in the next report as a gap in a résumé that never had it.
    expect(state(session).reviewAttempts).toBeUndefined();
  });

  it('says a scanned file has nothing to read rather than scoring it at zero', async () => {
    const { ctx: c, session } = ctx();

    const result = await parseResumeTool.execute({ path: 'tests/fixtures/scanned.pdf' }, c);

    expect(result.success).toBe(false);
    expect(result.error?.message).toMatch(/scanned image|no readable text/i);
    // And the session keeps whatever it had, rather than being left holding
    // a document nothing can be said about.
    expect(state(session).resume).toBeUndefined();
  });

  it('reports a path that is not there as an ordinary failure', async () => {
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute({ path: 'tests/fixtures/nope.md' }, c);

    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('input_error');
  });

  it('refuses an empty path instead of parsing the working directory', async () => {
    const { ctx: c } = ctx();

    const result = await parseResumeTool.execute({ path: '   ' }, c);

    expect(result.success).toBe(false);
  });
});

describe('parse_resume, when a model does the grouping', () => {
  it('asks the model, showing it every row with what the page says about it', async () => {
    const seen: string[] = [];
    const { ctx: c } = ctx(grouping({ sections: [] }, seen));

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, c);

    expect(seen).toHaveLength(2); // one call, one retry after the empty answer
    expect(seen[0]).toContain('size=1.00');
    expect(seen[0]).toMatch(/\[0\] /);
    expect(seen[0]).toContain('Return numbers only');
  });

  it('falls back to the rules when the answer does not account for every row', async () => {
    // A document still comes out — the résumé is on disk and the rules can read
    // it. What must not happen is a document nobody can tell was assembled the
    // other way.
    const { ctx: c } = ctx(grouping({ sections: [{ entries: [{ headerRowIds: [0] }] }] }));

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      c,
    );

    expect(result.success).toBe(true);
    expect((result.data as { integrity: { anomalyCount: number } }).integrity.anomalyCount).toBe(1);
  });

  it('falls back when the call itself fails, rather than refusing the file', async () => {
    const { ctx: c } = ctx({
      async query() {
        throw new Error('no key configured');
      },
      getUsageSummary: () => '',
      checkBudget: () => ({ ok: true }),
    });

    const result = await parseResumeTool.execute(
      { path: 'tests/fixtures/resume_example.pdf' },
      c,
    );

    expect(result.success).toBe(true);
    expect((result.data as { entryCount: number }).entryCount).toBeGreaterThan(0);
  });
});
