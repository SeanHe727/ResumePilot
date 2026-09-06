import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { afterEach, describe, expect, it } from 'vitest';

import type { Message } from '../../src/types.js';
import {
  DefaultSessionRestorer,
  SqliteCheckpointManager,
  SqliteSessionManager,
  assertTransition,
  canTransition,
  isFinished,
} from '../../src/session/index.js';

const temps: string[] = [];
afterEach(() => {
  for (const dir of temps.splice(0)) rmSync(dir, { recursive: true, force: true });
});

function onDisk(): string {
  const dir = mkdtempSync(join(tmpdir(), 'rp-session-'));
  temps.push(dir);
  return join(dir, 'sessions.db');
}

function setup(path = ':memory:', interval = 2) {
  const sessions = new SqliteSessionManager(path);
  const checkpoints = new SqliteCheckpointManager(sessions.db, interval);
  return { sessions, checkpoints, restorer: new DefaultSessionRestorer(sessions, checkpoints) };
}

const said = (content: string): Message => ({ role: 'assistant', content });

describe('state machine', () => {
  it('allows the transitions the diagram draws', () => {
    expect(canTransition('created', 'processing')).toBe(true);
    expect(canTransition('processing', 'paused')).toBe(true);
    expect(canTransition('processing', 'completed')).toBe(true);
    expect(canTransition('paused', 'processing')).toBe(true);
    expect(canTransition('failed', 'created')).toBe(true);
  });

  it('refuses the ones it does not', () => {
    expect(canTransition('created', 'completed')).toBe(false);
    expect(canTransition('paused', 'completed')).toBe(false);
    expect(canTransition('completed', 'paused')).toBe(false);
    expect(() => assertTransition('created', 'completed')).toThrow(/illegal session transition/);
  });

  it('reopens a completed session, because that is what a rewind is', () => {
    // The reference project's diagram draws `completed` as terminal, and its
    // own `rewindTo` sets a finished session straight back to `processing`.
    expect(canTransition('completed', 'processing')).toBe(true);
  });

  it('lets a status be set to what it already is', () => {
    // The loop re-enters and sets `processing` again; refusing that would make
    // restarting harder than it needs to be.
    expect(canTransition('processing', 'processing')).toBe(true);
  });

  it('knows which states end a run', () => {
    expect(isFinished('completed')).toBe(true);
    expect(isFinished('failed')).toBe(true);
    expect(isFinished('paused')).toBe(false);
  });
});

describe('SqliteSessionManager', () => {
  it('creates a session in the created state', () => {
    const { sessions } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });

    expect(session.status).toBe('created');
    expect(session.progress).toEqual({ total: 0, done: 0, current: 0, phase: 'created' });
    expect(session.config.preferSkills).toBe(true);
  });

  it('hands the same object to every caller holding the id', () => {
    const { sessions } = setup();
    const created = sessions.create({ sourcePath: 'resume.md' });

    expect(sessions.get(created.id)).toBe(created);
    sessions.updateState(created.id, { mode: 'diagnose' });
    expect(sessions.get(created.id)?.state.mode).toBe('diagnose');
  });

  it('keeps holding one object after loading a session from disk', () => {
    // The interesting case is the second run, where `get` goes to the database.
    // Building a fresh object per call means every mutation lands on a copy the
    // caller is not holding, so a handle taken before the write reads stale.
    const path = onDisk();
    const first = setup(path);
    const id = first.sessions.create({ sourcePath: 'resume.md' }).id;
    first.sessions.close();

    const reopened = new SqliteSessionManager(path);
    const handle = reopened.get(id)!;
    reopened.updateState(id, { mode: 'diagnose' });
    reopened.updateProgress(id, 2, 4, 'diagnosing entries (2/4)');

    expect(handle.state.mode).toBe('diagnose');
    expect(handle.progress.done).toBe(2);
    expect(reopened.get(id)).toBe(handle);
    reopened.close();
  });

  it('survives the process that made it', () => {
    const path = onDisk();
    const first = setup(path);
    const id = first.sessions.create({ sourcePath: 'resume.md' }).id;
    first.sessions.updateProgress(id, 2, 5, 'diagnosing entries (2/5)');
    first.sessions.updateState(id, { mode: 'diagnose', entriesDone: 2 });
    first.sessions.close();

    const reopened = new SqliteSessionManager(path);
    const restored = reopened.get(id);

    expect(restored?.progress.done).toBe(2);
    expect(restored?.state.entriesDone).toBe(2);
    // Not persisted, and rebuilt empty — they hold nothing that survives a run.
    expect(restored?.abortController.signal.aborted).toBe(false);
    expect(restored?.contextManager.getRecentMessages()).toEqual([]);
    reopened.close();
  });

  it('enforces the state machine on updateStatus', () => {
    const { sessions } = setup();
    const id = sessions.create({ sourcePath: 'resume.md' }).id;

    expect(() => sessions.updateStatus(id, 'completed')).toThrow(/illegal/);
    sessions.updateStatus(id, 'processing');
    sessions.updateStatus(id, 'completed');
    // Reopening for a rewind is allowed; pausing something already finished is not.
    expect(() => sessions.updateStatus(id, 'paused')).toThrow(/illegal/);
    sessions.updateStatus(id, 'processing');
  });

  it('never lets current run past total', () => {
    const { sessions } = setup();
    const id = sessions.create({ sourcePath: 'resume.md' }).id;
    sessions.updateProgress(id, 5, 5);

    expect(sessions.get(id)?.progress.current).toBe(5);
  });

  it('lists newest first, and filters by status', () => {
    const { sessions } = setup();
    const a = sessions.create({ sourcePath: 'a.md' }).id;
    const b = sessions.create({ sourcePath: 'b.md' }).id;
    sessions.updateStatus(b, 'processing');

    expect(sessions.list()[0]?.id).toBe(b);
    expect(sessions.list({ status: 'created' }).map((s) => s.id)).toEqual([a]);
  });

  it('reads limit: 0 as none rather than as no limit', () => {
    const { sessions } = setup();
    sessions.create({ sourcePath: 'a.md' });

    expect(sessions.list({ limit: 0 })).toHaveLength(0);
    expect(sessions.list({ limit: 1 })).toHaveLength(1);
  });

  it('links a revision back to what it revises', () => {
    const { sessions } = setup();
    const first = sessions.create({ sourcePath: 'v1.md' });
    const second = sessions.create({ sourcePath: 'v2.md', parentSessionId: first.id });

    expect(second.parentSessionId).toBe(first.id);
  });

  it('takes the checkpoints with the session when it is deleted', () => {
    const { sessions, checkpoints } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateProgress(session.id, 2, 4);
    checkpoints.create(session, [said('entry 1 scored 30')]);

    sessions.delete(session.id);

    expect(sessions.get(session.id)).toBeNull();
    expect(checkpoints.list(session.id)).toHaveLength(0);
  });
});

describe('SqliteCheckpointManager', () => {
  it('fires on the interval and not between', () => {
    const { sessions, checkpoints } = setup(':memory:', 2);
    const session = sessions.create({ sourcePath: 'resume.md' });

    for (const [done, expected] of [[0, false], [1, false], [2, true], [3, false], [4, true]] as const) {
      sessions.updateProgress(session.id, done, 6);
      expect(checkpoints.shouldCheckpoint(session), `done=${done}`).toBe(expected);
    }
  });

  it('does not fire twice for the same entry', () => {
    // The loop can ask again after a retry; `done % interval === 0` alone
    // would answer yes every time and write a duplicate.
    const { sessions, checkpoints } = setup(':memory:', 2);
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateProgress(session.id, 2, 6);

    expect(checkpoints.shouldCheckpoint(session)).toBe(true);
    checkpoints.create(session, []);
    expect(checkpoints.shouldCheckpoint(session)).toBe(false);
  });

  it('orders and rewinds by sequence, not by timestamp', () => {
    // `created_at` has one-second resolution, so checkpoints written in the
    // same second compare equal and a `created_at >` delete cuts in the wrong
    // place — reliably, on any machine fast enough to write three in a second.
    const { sessions, checkpoints } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });

    const ids = [1, 2, 3].map((n) => {
      sessions.updateProgress(session.id, n * 2, 6);
      return checkpoints.create(session, [said(`after entry ${n * 2}`)]);
    });

    expect(checkpoints.list(session.id).map((c) => c.id)).toEqual(ids);
    expect(checkpoints.getLatest(session.id)?.progress.done).toBe(6);

    const rewound = checkpoints.rewind(session.id, ids[1]!);
    expect(rewound?.progress.done).toBe(4);
    expect(checkpoints.list(session.id).map((c) => c.id)).toEqual([ids[0], ids[1]]);
  });

  it('returns null for a checkpoint belonging to another session', () => {
    const { sessions, checkpoints } = setup();
    const mine = sessions.create({ sourcePath: 'a.md' });
    const theirs = sessions.create({ sourcePath: 'b.md' });
    const id = checkpoints.create(theirs, []);

    expect(checkpoints.rewind(mine.id, id)).toBeNull();
  });
});

describe('DefaultSessionRestorer', () => {
  it('picks a run back up from the last checkpoint', async () => {
    const { sessions, checkpoints, restorer } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateStatus(session.id, 'processing');
    sessions.updateProgress(session.id, 2, 5, 'diagnosing entries (2/5)');
    sessions.updateState(session.id, { mode: 'diagnose', entriesDone: 2 });
    checkpoints.create(session, [said('entry 1 scored 30'), said('entry 2 scored 45')]);

    // The run then gets further, and dies before saving again.
    sessions.updateProgress(session.id, 3, 5);
    sessions.updateStatus(session.id, 'paused');

    const resumed = await restorer.resume(session.id);

    expect(resumed.status).toBe('processing');
    expect(resumed.progress.done).toBe(2);
    expect(resumed.state.mode).toBe('diagnose');
    expect(resumed.contextManager.getRecentMessages()).toHaveLength(2);
  });

  it('keeps the session state when there is no checkpoint yet', async () => {
    const { sessions, restorer } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateStatus(session.id, 'processing');
    sessions.updateState(session.id, { mode: 'diagnose' });
    sessions.updateStatus(session.id, 'paused');

    const resumed = await restorer.resume(session.id);

    expect(resumed.state.mode).toBe('diagnose');
    expect(resumed.status).toBe('processing');
  });

  it('refuses to resume a finished diagnosis', async () => {
    const { sessions, restorer } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateStatus(session.id, 'processing');
    sessions.updateStatus(session.id, 'completed');

    await expect(restorer.resume(session.id)).rejects.toThrow(/already completed/);
  });

  it('rewinds a completed session and throws away the window after it', async () => {
    const { sessions, checkpoints, restorer } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });
    sessions.updateStatus(session.id, 'processing');

    sessions.updateProgress(session.id, 2, 4);
    const early = checkpoints.create(session, [said('entry 1 scored 30')]);
    sessions.updateProgress(session.id, 4, 4);
    checkpoints.create(session, [said('entry 1 scored 30'), said('entry 4 scored 70')]);
    sessions.updateStatus(session.id, 'completed');

    const rewound = await restorer.rewindTo(session.id, early);

    expect(rewound.status).toBe('processing');
    expect(rewound.progress.done).toBe(2);
    expect(rewound.contextManager.getRecentMessages()).toHaveLength(1);
    expect(checkpoints.list(session.id)).toHaveLength(1);
  });

  it('reports a checkpoint that is not there', async () => {
    const { sessions, restorer } = setup();
    const session = sessions.create({ sourcePath: 'resume.md' });

    await expect(restorer.rewindTo(session.id, 'nope')).rejects.toThrow(/not found/);
  });
});

describe('an interrupted diagnosis', () => {
  it('resumes across a restart without redoing what it already did', async () => {
    const path = onDisk();
    const first = setup(path);
    const session = first.sessions.create({ sourcePath: 'resume.md' });
    first.sessions.updateStatus(session.id, 'processing');

    // Four entries, dies after the fourth is scored but before the report.
    for (let entry = 1; entry <= 4; entry++) {
      first.sessions.updateProgress(session.id, entry, 4, `diagnosing entries (${entry}/4)`);
      first.sessions.updateState(session.id, { scores: Array.from({ length: entry }, (_, i) => 30 + i) });
      if (first.checkpoints.shouldCheckpoint(session)) {
        first.checkpoints.create(session, [said(`scored through entry ${entry}`)]);
      }
    }
    first.sessions.updateStatus(session.id, 'paused');
    first.sessions.close();

    const second = setup(path);
    const resumed = await second.restorer.resume(session.id);

    expect(resumed.progress.done).toBe(4);
    expect(resumed.state.scores).toHaveLength(4);
    expect(resumed.contextManager.getRecentMessages()[0]?.content).toBe('scored through entry 4');
    second.sessions.close();
  });
});
