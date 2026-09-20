import { createAuditCommand } from '../../src/command/handlers/audit.js';
import { createRewindCommand } from '../../src/command/handlers/rewind.js';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import type { DiagnosisReport, ResumeSessionState } from '../../src/domain.js';
import { DefaultResumeParser } from '../../src/document/index.js';
import { createCommandParser, DefaultCommandParser } from '../../src/command/index.js';
import { DefaultHookPipeline, createProgressUpdateHook } from '../../src/hooks/index.js';
import type { QueryEngine } from '../../src/query-engine/types.js';
import {
  DefaultSessionRestorer,
  SqliteCheckpointManager,
  SqliteSessionManager,
} from '../../src/session/index.js';
import type { Session } from '../../src/session/types.js';

const temps: string[] = [];
afterEach(() => {
  for (const dir of temps.splice(0)) rmSync(dir, { recursive: true, force: true });
});
function temp(): string {
  const dir = mkdtempSync(join(tmpdir(), 'rp-cmd-'));
  temps.push(dir);
  return dir;
}

const engine = {
  getUsageSummary: () => '3 calls · 12.4k tokens · $0.08',
  checkBudget: () => ({ ok: true }),
  query: async () => ({ type: 'text' as const, content: '', usage: { inputTokens: 0, outputTokens: 0 }, stopReason: 'end_turn' as const }),
} as unknown as QueryEngine;

function setup() {
  const sessions = new SqliteSessionManager();
  const checkpoints = new SqliteCheckpointManager(sessions.db);
  const hooks = new DefaultHookPipeline();
  hooks.register(createProgressUpdateHook());
  const cleared: number[] = [];
  const parsed: string[] = [];

  const parser = createCommandParser({
    sessions,
    restorer: new DefaultSessionRestorer(sessions, checkpoints),
    hooks,
    engine,
    memory: { deleteAll: () => cleared.push(1) },
    parseFile: async (path) => {
      parsed.push(path);
      return { success: true };
    },
  });

  return {
    parser,
    sessions,
    checkpoints,
    hooks,
    cleared,
    parsed,
    session: sessions.create({ sourcePath: 'resume.md' }),
  };
}

const REPORT: DiagnosisReport = {
  summary: {
    totalEntries: 1, totalBullets: 1, overallScore: 41, substanceAvg: 20,
    wordingAvg: 40, formatScore: 80, topStrengths: [], topWeaknesses: ['no measurable outcome'],
  },
  perEntry: [
    {
      entryId: 'experience:0', label: 'ByteDance — Backend Engineer Intern', score: 20,
      topIssue: 'no measurable outcome',
      bullets: [{ bulletId: 'b0', text: 'Responsible for the order query service', score: 20, topIssue: 'no measurable outcome' }],
    },
  ],
  format: {} as DiagnosisReport['format'],
  improvementPlan: { immediate: ['delete the pronoun'], shortTerm: [], longTerm: [] },
};

function withReport(session: Session): void {
  const state: Partial<ResumeSessionState> = {
    latestReport: REPORT,
    entryDiagnoses: [
      {
        entryId: 'experience:0', overallScore: 20,
        bullets: [{
          bulletId: 'b0', overallScore: 20,
          dimensions: { impact: { score: 20, detail: '' }, measurement: { score: 0, detail: '' }, method: { score: 10, detail: '' } },
          issues: [{ what: 'no measurable outcome', costWords: 4 }], strengths: ['names the system'],
        }],
        narrative: { redundantPairs: [], weakLead: true, coherence: { score: 40, detail: '' } },
      },
    ],
  };
  Object.assign(session.state, state);
}

describe('DefaultCommandParser', () => {
  it('takes a leading slash as a command', () => {
    const { parser } = setup();

    expect(parser.isCommand('/history')).toBe(true);
    expect(parser.isCommand('  /history')).toBe(true);
    expect(parser.isCommand('diagnose my resume')).toBe(false);
  });

  it('does not mistake a file path for a command', () => {
    // The reference treated anything starting with `/` as a command, and its
    // inputs were transcripts. Ours are paths, so a pasted absolute path is
    // the first thing a user would hit.
    const { parser } = setup();

    expect(parser.isCommand('/Users/sean/Documents/resume.pdf')).toBe(false);
    expect(parser.isCommand('/')).toBe(false);
    expect(parser.isCommand('/home/sean/cv.docx and please review it')).toBe(false);
  });

  it('resolves aliases', () => {
    const { parser } = setup();

    expect(parser.parse('/load')?.command.name).toBe('upload');
    expect(parser.parse('/open')?.command.name).toBe('upload');
    expect(parser.parse('/RESET')?.command.name).toBe('new');
  });

  it('splits positional arguments from flags', () => {
    const { parser } = setup();
    const args = parser.parse('/export md ~/out.md --overwrite --title diagnosis')?.args;

    expect(args?.positional).toEqual(['md', '~/out.md']);
    expect(args?.flags).toEqual({ overwrite: true, title: 'diagnosis' });
  });

  it('gives a flag only the next token, not the rest of the line', () => {
    // A limitation worth knowing rather than a bug: `--title My CV` sets the
    // title to "My" and leaves "CV" as a positional. Quoting is not handled,
    // and no command currently takes a multi-word flag.
    const { parser } = setup();
    const args = parser.parse('/export md --title My CV')?.args;

    expect(args?.flags).toEqual({ title: 'My' });
    expect(args?.positional).toEqual(['md', 'CV']);
  });

  it('says so when a command does not exist', async () => {
    const { parser, session } = setup();

    expect((await parser.execute('/nope', session)).output).toMatch(/Unknown command \/nope/);
  });

  it('names the missing argument instead of failing', async () => {
    const { parser, session } = setup();
    const result = await parser.execute('/upload', session);

    expect(result.output).toMatch(/needs/);
    expect(result.output).toMatch(/\/upload /);
  });

  it('reports a handler that throws rather than taking the session down', async () => {
    // A user reaches for a command when something has already gone wrong.
    const parser = new DefaultCommandParser();
    parser.register({
      name: 'boom', aliases: [], description: '', args: [], examples: [],
      async execute() { throw new Error('disk full'); },
    });
    const { session } = setup();

    expect((await parser.execute('/boom', session)).output).toBe('/boom failed: disk full');
  });

  it('refuses a duplicate name or a shadowing alias', () => {
    const parser = new DefaultCommandParser();
    const make = (name: string, aliases: string[]) => ({
      name, aliases, description: '', args: [], examples: [],
      execute: async () => ({ output: '' }),
    });
    parser.register(make('status', ['s']));

    expect(() => parser.register(make('status', []))).toThrow(/already registered/);
    expect(() => parser.register(make('other', ['s']))).toThrow(/collides/);
    expect(() => parser.register(make('another', ['status']))).toThrow(/collides/);
  });
});

describe('handlers', () => {
  it('/help lists every command, and explains one', async () => {
    const { parser, session } = setup();

    const all = await parser.execute('/help', session);
    expect(all.output).toContain('/upload');
    expect(all.output).toContain('/new');

    const one = await parser.execute('/help export', session);
    expect(one.output).toContain('aliases: /save');
    expect(one.output).toContain('md or json');
  });

  it('/history lists newest first and honours a limit', async () => {
    const { parser, sessions, session } = setup();
    sessions.create({ sourcePath: 'other.md' });

    expect((await parser.execute('/history', session)).data).toHaveLength(2);
    expect((await parser.execute('/history 1', session)).data).toHaveLength(1);
  });

  it('/new keeps the old diagnosis reachable, and forgets what it learned', async () => {
    // Everything else here accumulates — the session, the transcript, what the
    // memory store learned across resumes — because someone refining one resume
    // is doing that until they say otherwise. This is how they say otherwise.
    const { parser, sessions, session, cleared } = setup();
    const result = await parser.execute('/new', session);

    expect(result.action).toBe('new_session');
    expect((result.data as Session).parentSessionId).toBe(session.id);
    // On disk, so `/history` can still reach it.
    expect(sessions.list()).toHaveLength(2);
    expect(cleared).toHaveLength(1);
  });

  it('reads the file it was given, without knowing how', async () => {
    // Uploading is choosing a file; parsing is reading one. Only the second is
    // worth doing again when a path turns up mid-conversation, which is why the
    // command calls the same tool the coordinator does rather than parsing here.
    const { parser, session, parsed } = setup();

    await parser.execute('/upload tests/fixtures/resume_example.pdf', session);

    expect(parsed).toHaveLength(1);
    expect(parsed[0]).toContain('resume_example.pdf');
  });

  it('/hooks lists them and switches one off', async () => {
    const { parser, hooks, session } = setup();

    expect((await parser.execute('/hooks', session)).output).toContain('progress-update');
    await parser.execute('/hooks disable progress-update', session);
    expect(hooks.list()[0]?.enabled).toBe(false);

    expect((await parser.execute('/hooks disable nope', session)).output).toMatch(/No hook/);
  });

  it('/upload checks the file is there and is a kind we read', async () => {
    const { parser, session } = setup();
    const image = join(temp(), 'x.png');
    writeFileSync(image, 'not a resume');

    expect((await parser.execute('/upload /nope/missing.pdf', session)).output).toMatch(/Cannot read/);
    expect((await parser.execute(`/upload ${image}`, session)).output).toMatch(
      /Unsupported file type/,
    );
  });

  it('/upload after a diagnosis starts a new session rather than invalidating one', async () => {
    const { parser, session } = setup();
    withReport(session);

    const result = await parser.execute('/upload tests/fixtures/resume_example.pdf', session);

    expect(result.action).toBe('new_session');
    expect((result.data as Session).sourcePath).toMatch(/resume_example\.pdf$/);
  });

  it('/report prints the report the coordinator only narrated', async () => {
    // The coordinator picks what to say and how much, which is what makes a
    // conversation bearable and what makes it partial. This is the other
    // document: every score, the plan, and what the plan set aside.
    const { parser, session } = setup();
    withReport(session);

    const result = await parser.execute('/report', session);

    expect(result.output).toContain('Overall');
    expect(result.output).toContain('ByteDance');
  });

  it('/report says so before anything has been reported', async () => {
    const { parser, session } = setup();

    expect((await parser.execute('/report', session)).output).toMatch(/Nothing has been reported/);
  });

  it('/export writes markdown by default and json on request', async () => {
    const { parser, session } = setup();
    withReport(session);
    const dir = temp();

    const md = await parser.execute(`/export md ${join(dir, 'out.md')}`, session);
    expect(readFileSync((md.data as { path: string }).path, 'utf8')).toContain('# Resume diagnosis');

    const json = await parser.execute(`/export json ${join(dir, 'out.json')}`, session);
    expect(JSON.parse(readFileSync((json.data as { path: string }).path, 'utf8'))).toMatchObject({
      summary: { overallScore: 41 },
    });

    expect((await parser.execute('/export pdf', session)).output).toMatch(/Unknown format/);
  });

});

describe('/audit', () => {
  const ENTRY = {
    id: 1, sessionId: 's1', toolName: 'web_search', toolArgs: '{}',
    ruleId: 'allow-web-search', riskLevel: 'low' as const,
    decision: 'allowed' as const, timestamp: '2026-09-08T00:00:00Z',
  };
  const REFUSED = { ...ENTRY, id: 2, toolName: 'fetch_url', ruleId: 'default-deny', decision: 'denied' as const };
  const RUN = {
    id: 1, sessionId: 's1', toolName: 'web_search',
    inputSummary: '{"query":"int8"}', outputSummary: '3 results',
    success: true, timestamp: '2026-09-08T00:00:00Z',
  };

  function auditWith(entries = [ENTRY, REFUSED], runs = [RUN]) {
    return {
      getSessionLog: () => entries,
      getSessionExecutions: () => runs,
    } as never;
  }

  const gate = {
    getRules: () => [
      { id: 'deny-network-unknown', name: 'Unrecognised network call', match: { type: 'tool_name' as const, pattern: '' }, level: 'critical' as const, action: 'deny' as const, reason: '' },
      { id: 'allow-web-search', name: 'Web search', match: { type: 'tool_name' as const, pattern: '' }, level: 'low' as const, action: 'allow' as const, reason: '' },
    ],
  } as never;

  it('reads back what was already being written', async () => {
    // Every tool call in forty-two sessions went into a table no command could
    // read: `getSessionLog` and `getSessionExecutions` existed and nothing
    // called either. Capability that cannot be reached cannot be told apart
    // from capability that was never built.
    const cmd = createAuditCommand(auditWith(), gate);

    const result = await cmd.execute({ positional: [], flags: {} } as never, { id: 's1' } as never);

    expect(result.output).toContain('1 tool call(s), 1 refused, 0 failed');
    expect(result.output).toContain('web_search');
    expect(result.output).toContain('refused fetch_url by rule default-deny');
  });

  it('lists the rules, most restrictive first', async () => {
    const cmd = createAuditCommand(auditWith(), gate);

    const result = await cmd.execute({ positional: ['rules'], flags: {} } as never, { id: 's1' } as never);

    expect(result.output.indexOf('critical')).toBeLessThan(result.output.indexOf('low'));
    expect(result.output).toContain('Anything unmatched is refused');
  });

  it('says so plainly before anything has run', async () => {
    const cmd = createAuditCommand(auditWith([], []), gate);

    const result = await cmd.execute({ positional: [], flags: {} } as never, { id: 's1' } as never);

    expect(result.output).toMatch(/Nothing has run/);
  });
});

describe('/rewind', () => {
  const CP = (id: string, done: number, messages: number) => ({
    id, sessionId: 's1', progress: { done, total: 6, current: done, phase: '' },
    state: {}, messages: Array.from({ length: messages }, () => ({ role: 'user' as const, content: 'x' })),
    createdAt: '2026-09-08T11:20:30Z',
  });

  function harness(saved = [CP('a', 2, 4), CP('b', 4, 8)]) {
    const rewound: string[] = [];
    const restorer = {
      resume: async () => ({}) as never,
      rewindTo: async (_s: string, id: string) => {
        rewound.push(id);
        return { id: 's1', progress: { done: 2, total: 6, current: 2, phase: '' } } as never;
      },
    };
    const checkpoints = { list: () => saved, shouldCheckpoint: () => false, create: () => '', getLatest: () => null, rewind: () => null };
    const sessions = { save: () => {} } as never;
    return { cmd: createRewindCommand(restorer as never, checkpoints as never, sessions), rewound };
  }

  it('lists what there is to go back to', async () => {
    // `rewindTo` was written, tested and unreachable — defensible while nothing
    // wrote a checkpoint, and not once every exchange leaves one.
    const { cmd } = harness();

    const result = await cmd.execute({ positional: [], flags: {} } as never, { id: 's1' } as never);

    expect(result.output).toContain('2 checkpoint(s)');
    expect(result.output).toContain('4 message(s)');
  });

  it('returns to one by the number it was listed under', async () => {
    // The ids are UUIDs; the person reading the list has an ordinal.
    const { cmd, rewound } = harness();

    const result = await cmd.execute({ positional: ['1'], flags: {} } as never, { id: 's1' } as never);

    expect(rewound).toEqual(['a']);
    expect(result.output).toContain('1 later checkpoint(s) discarded');
  });

  it('refuses a number that is not on the list', async () => {
    const { cmd, rewound } = harness();

    const result = await cmd.execute({ positional: ['9'], flags: {} } as never, { id: 's1' } as never);

    expect(result.output).toContain('There are 2');
    expect(rewound).toEqual([]);
  });

  it('says so before the session has written any', async () => {
    const { cmd } = harness([]);

    const result = await cmd.execute({ positional: [], flags: {} } as never, { id: 's1' } as never);

    expect(result.output).toMatch(/No checkpoints yet/);
  });
});
