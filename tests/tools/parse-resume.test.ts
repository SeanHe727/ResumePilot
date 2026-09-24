import { describe, expect, it } from 'vitest';

import type { ResumeSessionState } from '../../src/domain.js';
import { SqliteSessionManager } from '../../src/session/index.js';
import { parseResumeTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';

/** No model: the fixtures are Markdown, which the structural parser reads alone. */
function ctx() {
  const session = new SqliteSessionManager().create({ sourcePath: '' });
  return {
    ctx: {
      session,
      queryEngine: {
        query: async () => {
          throw new Error('parsing reads the page; it asks no model anything');
        },
      },
      abortSignal: new AbortController().signal,
    } as unknown as ToolContext,
    session,
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

    // This fixture files six project bullets under the section instead of under
    // entries, so the parse is error-free and not clean: `anomalyCount` is how
    // the coordinator learns to look before dispatching a review at a target
    // that may not exist. It used to read `clean: true`, which is how a paid run
    // came to discover the same shape by failing four dispatches.
    expect((result.data as { integrity: unknown }).integrity).toEqual({
      clean: false,
      errorCount: 0,
      anomalyCount: 1,
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
    } as unknown as ResumeSessionState;

    await parseResumeTool.execute({ path: 'tests/fixtures/resume_example.pdf' }, c);

    expect(state(session).entryDiagnoses).toBeUndefined();
    expect(state(session).latestReport).toBeUndefined();
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
