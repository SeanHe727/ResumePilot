import { describe, expect, it } from 'vitest';

import type { SubAgentResult, SubAgentTask } from '../../src/agent/types.js';
import type { ResumeDocument, ResumeEntry } from '../../src/domain.js';
import { examineDepthTool } from '../../src/tools/index.js';
import type { ToolContext } from '../../src/tools/types.js';

const ENTRY: ResumeEntry = {
  id: 'experience:0',
  sectionId: 'experience',
  index: 0,
  headerLines: ['A Company | Engineer | 2025'],
  bullets: [
    { id: 'experience:0:0', entryId: 'experience:0', index: 0, text: 'Cut latency 71%', span: { start: 0, end: 1 } },
    { id: 'experience:0:1', entryId: 'experience:0', index: 1, text: 'Shipped it', span: { start: 2, end: 3 } },
  ],
  span: { start: 0, end: 4 },
};

const RESUME = {
  sections: [{ id: 'experience', kind: 'experience', heading: '', entries: [ENTRY], looseLines: [], span: { start: 0, end: 4 } }],
} as unknown as ResumeDocument;

function ctxWith(run: (task: SubAgentTask) => Promise<SubAgentResult>, options: { nested?: boolean } = {}) {
  const ctx = {
    session: { state: { resume: RESUME } },
    ...(options.nested === false ? {} : { subAgents: { run } }),
    abortSignal: new AbortController().signal,
  } as unknown as ToolContext;
  return ctx;
}

const answered = (findings: unknown): SubAgentResult =>
  ({
    agentId: 'deep-research',
    agentName: 'Deep Research',
    success: true,
    output: { domain: 'inference optimisation', findings },
    usage: { inputTokens: 0, outputTokens: 0 },
    turns: 1,
    compactions: 0,
    durationMs: 1,
  }) as SubAgentResult;

const FINDING = { bulletId: 'experience:0:0', what: 'the batch size decides what 71% means', why: 'sizes it' };

describe('examine_technical_depth', () => {
  it('runs a second agent inside one of the reader\'s own turns', async () => {
    // Every other tool this reader holds is a lookup. This one is an agent with
    // its own prompt, turns and search budget — and it takes no pool slot, so it
    // costs latency rather than a place in the fan-out.
    let ran: SubAgentTask | null = null;
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: 'what does the latency figure depend on?' },
      ctxWith(async (task) => {
        ran = task;
        return answered([FINDING]);
      }),
    );

    expect(result.success).toBe(true);
    expect(ran?.agentConfig.id).toBe('deep-research');
    expect(ran?.input).toContain('what does the latency figure depend on?');
    // Every line addressable, or the findings come back attached to nothing.
    expect(ran?.input).toContain('[experience:0:0]');
  });

  it('takes an id with the brackets it is shown in', async () => {
    // Measured: told to use "the id shown in brackets", the reader passed
    // `[s2:e0:b0]` thirteen times in one run and was refused every time.
    const result = await examineDepthTool.execute(
      { about: '[experience:0:1]', question: 'q' },
      ctxWith(async () => answered([FINDING])),
    );

    expect(result.success).toBe(true);
  });

  it('drops a finding about a line the candidate never wrote', async () => {
    // An invented id would attach a finding to a line that does not exist, and
    // the reader would score it as theirs.
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: 'q' },
      ctxWith(async () => answered([{ ...FINDING, bulletId: 'experience:0:9' }])),
    );

    expect((result as { data: { findings: unknown[] } }).data.findings).toEqual([]);
  });

  it('strips the brackets the specialist answers with', async () => {
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: 'q' },
      ctxWith(async () => answered([{ ...FINDING, bulletId: '[experience:0:0]' }])),
    );

    const [first] = (result as { data: { findings: Array<{ bulletId: string }> } }).data.findings;
    expect(first?.bulletId).toBe('experience:0:0');
  });

  it('needs a question, not just an entry', async () => {
    // One question per call. A single call carrying four comes back with one
    // answer covering all of them badly, and half of it cannot be kept.
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: '  ' },
      ctxWith(async () => answered([])),
    );

    expect(result.success).toBe(false);
  });

  it('says so where no specialist can be created', async () => {
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: 'q' },
      ctxWith(async () => answered([]), { nested: false }),
    );

    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('service_error');
  });

  it('passes on what the specialist could not answer', async () => {
    const result = await examineDepthTool.execute(
      { entryId: 'experience:0', question: 'q' },
      ctxWith(async () => ({ success: false, error: 'timed out' }) as SubAgentResult),
    );

    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('timed out');
  });
});

describe('what the caller is allowed to name', () => {
  const ask = async (input: Record<string, unknown>) => {
    let ran: SubAgentTask | null = null;
    const result = await examineDepthTool.execute(input as never, ctxWith(async (task) => {
      ran = task;
      return answered([FINDING]);
    }));
    return { result, ran: ran as SubAgentTask | null };
  };

  it('takes a bullet id and finds the entry that holds it', async () => {
    // What the caller actually wants to ask about is usually one line. Making
    // it name the entry instead was a conversion it had to do in its head.
    const { result, ran } = await ask({ about: 'experience:0:1', question: 'does this hold?' });

    expect(result.success).toBe(true);
    expect(ran?.agentConfig.id).toBe('deep-research');
    // Named on its own, not merely present inside the rendered entry: the
    // researcher's findings come back keyed by bullet, and a question about one
    // line reads differently from a question about the entry holding it.
    expect(ran?.input).toContain('It is about this line:\n[experience:0:1] Shipped it');
  });

  it('accepts a bullet id in the old entry field rather than refusing it', async () => {
    // The exact failure from the first traced run, four times in a row: the id
    // was always enough to find the entry, and the refusal bought nothing but a
    // gap where the research should have been.
    const { result } = await ask({ entryId: 'experience:0:0', question: 'what does 71% mean?' });

    expect(result.success).toBe(true);
  });

  it('still takes an entry id, for a question about the whole entry', async () => {
    const { result, ran } = await ask({ about: 'experience:0', question: 'does the chain cohere?' });

    expect(result.success).toBe(true);
    // No single line is named, because none was meant.
    expect(ran?.input).not.toContain('It is about this line');
  });

  it('says what would have been legal when the id is neither', async () => {
    // A refusal that only says no is one the caller can answer only by guessing
    // again, which is what it did.
    const { result } = await ask({ about: 'Agent Runtime Suite', question: 'anything?' });

    expect(result.success).toBe(false);
    expect(result.error?.message).toContain('experience:0');
  });
});
