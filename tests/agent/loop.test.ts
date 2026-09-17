import { describe, expect, it } from 'vitest';

import { handleInput, type LoopDeps } from '../../src/agent/loop.js';
import type { ResumeDocument } from '../../src/domain.js';
import type { ParsedResponse, QueryEngine, QueryParams } from '../../src/query-engine/types.js';
import { SqliteCheckpointManager, SqliteSessionManager } from '../../src/session/index.js';
import { createToolRegistry } from '../../src/tools/index.js';

const RESUME: ResumeDocument = {
  sourcePath: 'r.pdf',
  format: 'pdf',
  rawText: '',
  sections: [
    {
      id: 'contact',
      kind: 'contact',
      heading: '',
      entries: [],
      looseLines: ['Sean He', '+1 555 0100 | someone@example.com'],
      span: { start: 0, end: 1 },
    },
    {
      id: 'experience',
      kind: 'experience',
      heading: 'EXPERIENCE',
      entries: [
        {
          id: 'experience:0',
          sectionId: 'experience',
          index: 0,
          organization: 'NIO Inc.',
          headerLines: ['NIO Inc. | AI Research Intern | Oct 2024 - May 2025'],
          bullets: [
            {
              id: 'experience:0:0',
              entryId: 'experience:0',
              index: 0,
              text: 'Reduced context contamination across four diagnostic agents',
              span: { start: 0, end: 10 },
            },
          ],
          span: { start: 0, end: 20 },
        },
      ],
      looseLines: [],
      span: { start: 0, end: 20 },
    },
  ],
  meta: { wordCount: 20, quality: 'clean', layoutWarnings: [] },
};

/** Answers in one turn, and records the window it was handed. */
function loopDeps(): { deps: LoopDeps; seen: QueryParams[]; printed: string[] } {
  const seen: QueryParams[] = [];
  const printed: string[] = [];
  const engine: QueryEngine = {
    async query(params) {
      seen.push(params);
      return {
        type: 'text',
        content: 'Looks reasonable.',
        usage: { inputTokens: 0, outputTokens: 0 },
        stopReason: 'end_turn',
      } satisfies ParsedResponse;
    },
    getUsageSummary: () => '',
    checkBudget: () => ({ ok: true }),
  };

  const sessions = new SqliteSessionManager();
  return {
    seen,
    printed,
    deps: {
      queryEngine: engine,
      tools: createToolRegistry(),
      sessions,
      print: (text: string) => printed.push(text),
      commands: { isCommand: () => false, execute: async () => ({ output: '' }) },
      skills: { find: () => null },
    } as unknown as LoopDeps,
  };
}

describe('the conversational loop', () => {
  it('keeps the resume where eviction cannot reach it', async () => {
    // Nothing put the document in the task layer, so it lived only in whatever
    // messages were still in `recent`. Past that window the agent was
    // discussing a resume it could no longer see, answering from a running
    // summary of its own earlier remarks about it.
    const { deps, seen } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('how is the NIO bullet?', session, deps);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).toContain('Reduced context contamination');
    // And with ids, so "the second one" is answerable by both sides.
    expect(sent).toContain('experience:0:0');
  });

  it('leaves the contact block out of the window', async () => {
    // The one section carrying a phone number and an email, and nothing a
    // conversation about wording turns on either.
    const { deps, seen } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('anything to fix?', session, deps);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).not.toContain('someone@example.com');
    expect(sent).not.toContain('555 0100');
  });

  it('runs a session with no resume yet', async () => {
    // `/upload` has not happened, and the loop still has to answer.
    const { deps, seen } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });

    await handleInput('what can you do?', session, deps);

    expect(seen).toHaveLength(1);
  });
});

describe('what the coordinator can and cannot reach', () => {
  it('is offered no tool that forms a judgement', async () => {
    // The prohibition is written into the system prompt as well, but a prompt
    // alone does not hold: told it must not judge while holding a tool that
    // judges, a model reaches for the tool. The specialists are better at this
    // than a general loop is, and a loop that can answer will answer, because
    // answering is cheaper than dispatching.
    const { deps, seen } = loopDeps();
    (deps as { tools: unknown }).tools = createToolRegistry({ orchestrator: true } as never);
    const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('is the NIO bullet any good?', session, deps);

    const offered = seen[0]?.tools?.map((t) => t.name) ?? [];
    // `generate_report` is not on this list: aggregating what the specialists
    // returned is arithmetic, and the one judgement inside it — what to fix
    // first — is a call that tool makes rather than one the coordinator makes.
    for (const judging of [
      'analyze_entry',
      'analyze_wording',
      'analyze_format',
      'rewrite_bullet',
      'query_knowledge_base',
    ]) {
      expect(offered, `offered ${judging}`).not.toContain(judging);
    }
  });

  it('keeps the tools that dispatch and record', async () => {
    const { deps, seen } = loopDeps();
    (deps as { tools: unknown }).tools = createToolRegistry({ orchestrator: true } as never);
    const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('have a look at the NIO entry', session, deps);

    expect(seen[0]?.tools?.map((t) => t.name).sort()).toEqual([
      'apply_revision',
      'generate_report',
      'parse_resume',
      'record_fact',
      'review_content',
      'review_format',
      'review_jd_match',
      'review_narrative',
      'review_wording',
    ]);
  });

  it('says in the prompt what it must not do, not only what it is for', async () => {
    const { deps, seen } = loopDeps();
    const session = new SqliteSessionManager().create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('anything wrong with it?', session, deps);

    const prompt = seen[0]?.systemPrompt ?? '';
    expect(prompt).toContain('You do not do the work');
    expect(prompt).toContain('What you must not do');
  });
});

describe('what the candidate has already said', () => {
  it('stays in view rather than being asked for twice', async () => {
    // A conversation outruns its own window: a number given at message four is
    // evicted from the transcript by message twenty. It sits in the task layer
    // beside the resume, where compaction cannot reach it.
    const { deps, seen } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = {
      resume: RESUME,
      suppliedFacts: [
        { fact: 'contamination went from 12% to 3% on the same cases', bulletId: 'experience:0:0' },
        { fact: 'the reviewer was a separate model, not a second pass' },
      ],
    };

    await handleInput('so how should that line read?', session, deps);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).toContain('12% to 3%');
    expect(sent).toContain('a separate model');
    // Marked as theirs, not as something the agent worked out.
    expect(sent).toContain('supplied_by_candidate');
  });

  it('shows the revision once it has been applied', async () => {
    // The loop renders the working copy every turn, so a kept rewrite is what
    // the next question is about.
    const { deps, seen } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    const revised = structuredClone(RESUME);
    revised.sections[1]!.entries[0]!.bullets[0]!.text = 'Cut cross-role context leakage from 12% to 3%';
    session.state = { resume: revised };

    await handleInput('better?', session, deps);

    const sent = seen[0]?.messages.map((m) => m.content).join('\n') ?? '';
    expect(sent).toContain('Cut cross-role context leakage');
    expect(sent).not.toContain('Reduced context contamination');
  });
});

describe('what survives leaving', () => {
  it('writes a checkpoint after every exchange', async () => {
    // The table sat empty across forty-two sessions while the code that reads
    // it was finished and waiting: `rewind` restores messages into the context
    // manager, and nothing ever put any there to restore.
    const { deps, seen } = loopDeps();
    const saved: Array<{ id: string; messages: unknown[] }> = [];
    (deps as { checkpoints?: unknown }).checkpoints = {
      shouldCheckpoint: () => true,
      create: (session: { id: string }, messages: unknown[]) => {
        saved.push({ id: session.id, messages });
        return 'cp';
      },
    };
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };

    await handleInput('how is the NIO bullet?', session, deps);

    expect(seen).toHaveLength(1);
    expect(saved).toHaveLength(1);
    // The transcript, which is the half that `Session.state` does not carry.
    expect(saved[0]?.messages.length).toBeGreaterThan(0);
  });

  it('still answers when nothing is there to checkpoint into', async () => {
    const { deps, printed } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });

    await handleInput('what can you do?', session, deps);

    expect(printed).toHaveLength(1);
  });
});

describe('what a used session looks like', () => {
  async function talk(turns: number) {
    const { deps } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };
    for (let i = 0; i < turns; i++) await handleInput(`turn ${i}`, session, deps);
    return session;
  }

  it('stops looking brand new after somebody has used it', async () => {
    // Seven exchanges in, `/history` still showed `created` and `0/0` — the
    // conversational path never touched either, and only the batch diagnosis
    // did, so a worked-in session and an untouched one printed the same.
    const session = await talk(3);

    expect(session.status).toBe('processing');
    expect(session.progress.phase).toBe('in conversation (3 exchanges)');
  });

  it('leaves the entry counters alone', async () => {
    // They mean "entries scored out of entries found". Writing an exchange
    // count there would leave `shouldCheckpoint` comparing a later diagnosis's
    // 2 against a conversation's 7 — and refusing to checkpoint the diagnosis.
    const session = await talk(4);
    const checkpoints = new SqliteCheckpointManager(new SqliteSessionManager().db);

    expect(session.progress.done).toBe(0);
    expect(session.progress.total).toBe(0);
    // A diagnosis starting fresh in this session still checkpoints.
    session.progress = { ...session.progress, done: 2, total: 6 };
    expect(checkpoints.shouldCheckpoint(session)).toBe(true);
  });

  it('keeps counting where a resumed session left off', async () => {
    const { deps } = loopDeps();
    const sessions = new SqliteSessionManager();
    const session = sessions.create({ sourcePath: 'r.pdf' });
    session.state = { resume: RESUME };
    session.progress = { ...session.progress, phase: 'in conversation (6 exchanges)' };

    await handleInput('and one more', session, deps);

    expect(session.progress.phase).toBe('in conversation (7 exchanges)');
  });
});
