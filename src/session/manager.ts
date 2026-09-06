import { randomUUID } from 'node:crypto';

import Database from 'better-sqlite3';

import { LayeredContextManager } from '../context/manager.js';
import { assertTransition } from './state.js';
import type {
  Session,
  SessionConfig,
  SessionListEntry,
  SessionManager,
  SessionState,
  SessionStatus,
} from './types.js';

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS sessions (
    id                TEXT PRIMARY KEY,
    status            TEXT NOT NULL,
    parent_session_id TEXT,
    source_path       TEXT NOT NULL,
    config            TEXT NOT NULL,
    progress          TEXT NOT NULL,
    state             TEXT NOT NULL,
    created_at        TEXT NOT NULL,
    updated_at        TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS checkpoints (
    id         TEXT PRIMARY KEY,
    session_id TEXT NOT NULL REFERENCES sessions(id),
    sequence   INTEGER NOT NULL,
    progress   TEXT NOT NULL,
    state      TEXT NOT NULL,
    messages   TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_status      ON sessions(status);
  CREATE INDEX IF NOT EXISTS idx_sessions_updated     ON sessions(updated_at);
  CREATE INDEX IF NOT EXISTS idx_checkpoints_session  ON checkpoints(session_id, sequence);
`;

export const DEFAULT_SESSION_CONFIG: SessionConfig = {
  model: 'claude-sonnet-5',
  effort: 'medium',
  maxCostUsd: 1,
  preferSkills: true,
};

interface SessionRow {
  id: string;
  status: SessionStatus;
  parent_session_id: string | null;
  source_path: string;
  config: string;
  progress: string;
  state: string;
  created_at: string;
  updated_at: string;
}

/**
 * A diagnosis is minutes of work and a few dollars of tokens. Losing it to a
 * dropped connection or a closed terminal is the thing this layer exists to
 * prevent, so every mutation writes through to disk immediately.
 *
 * The live objects hold things that cannot be serialised — an AbortController,
 * the context window — so what is persisted is the resumable part: where the
 * run got to, and what the Skill accumulated.
 */
export class SqliteSessionManager implements SessionManager {
  readonly db: Database.Database;

  /**
   * Live sessions, so two callers holding the same id hold the same object.
   * Without this, `get` returns a fresh copy each time and a mutation made
   * through one handle is invisible through the other.
   */
  private readonly active = new Map<string, Session>();

  constructor(dbPath = ':memory:') {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    // Off by default in SQLite, which makes the checkpoints table's REFERENCES
    // clause decorative — an orphaned checkpoint would survive its session.
    this.db.pragma('foreign_keys = ON');
    this.db.exec(SCHEMA);
  }

  create(input: { sourcePath: string; parentSessionId?: string }, config: Partial<SessionConfig> = {}): Session {
    const now = new Date().toISOString();
    const session: Session = {
      id: randomUUID(),
      status: 'created',
      ...(input.parentSessionId ? { parentSessionId: input.parentSessionId } : {}),
      sourcePath: input.sourcePath,
      config: { ...DEFAULT_SESSION_CONFIG, ...config },
      progress: { total: 0, done: 0, current: 0, phase: 'created' },
      state: {},
      contextManager: new LayeredContextManager(),
      abortController: new AbortController(),
      createdAt: now,
      updatedAt: now,
    };

    this.persist(session);
    this.active.set(session.id, session);
    return session;
  }

  get(id: string): Session | null {
    const live = this.active.get(id);
    if (live) return live;

    const restored = this.load(id);
    // Cached on the way out, so the next `get` returns this same object rather
    // than a second one that shadows its mutations.
    if (restored) this.active.set(id, restored);
    return restored;
  }

  list(opts: { status?: SessionStatus; limit?: number } = {}): SessionListEntry[] {
    const params: unknown[] = [];
    let sql =
      'SELECT id, status, source_path, progress, created_at, updated_at FROM sessions';

    if (opts.status) {
      sql += ' WHERE status = ?';
      params.push(opts.status);
    }
    sql += ' ORDER BY updated_at DESC, created_at DESC';
    // `!== undefined`, so `limit: 0` means none rather than falling through to
    // no clause and returning everything.
    if (opts.limit !== undefined) {
      sql += ' LIMIT ?';
      params.push(opts.limit);
    }

    const rows = this.db.prepare(sql).all(...params) as Array<
      Pick<SessionRow, 'id' | 'status' | 'source_path' | 'progress' | 'created_at' | 'updated_at'>
    >;

    return rows.map((row) => ({
      id: row.id,
      status: row.status,
      sourcePath: row.source_path,
      progress: JSON.parse(row.progress) as Session['progress'],
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  }

  updateStatus(id: string, status: SessionStatus): void {
    const session = this.require(id);
    // Enforced rather than assigned. `state.ts` draws a state machine, and a
    // state machine nothing checks is a diagram.
    assertTransition(session.status, status);
    session.status = status;
    this.touch(session);
  }

  updateProgress(id: string, done: number, total: number, phase?: string): void {
    const session = this.get(id);
    if (!session) return;

    session.progress = {
      ...session.progress,
      done,
      total,
      current: Math.min(done + 1, total),
      ...(phase === undefined ? {} : { phase }),
    };
    this.touch(session);
  }

  updateState(id: string, patch: Partial<SessionState>): void {
    const session = this.get(id);
    if (!session) return;

    session.state = { ...session.state, ...patch };
    this.touch(session);
  }

  save(session: Session): void {
    this.active.set(session.id, session);
    this.touch(session);
  }

  delete(id: string): void {
    this.active.delete(id);
    this.db.prepare('DELETE FROM checkpoints WHERE session_id = ?').run(id);
    this.db.prepare('DELETE FROM sessions WHERE id = ?').run(id);
  }

  close(): void {
    this.db.close();
  }

  private require(id: string): Session {
    const session = this.get(id);
    if (!session) throw new Error(`session ${id} not found`);
    return session;
  }

  private touch(session: Session): void {
    session.updatedAt = new Date().toISOString();
    this.persist(session);
  }

  private persist(session: Session): void {
    this.db
      .prepare(
        `INSERT OR REPLACE INTO sessions
           (id, status, parent_session_id, source_path, config, progress, state, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        session.id,
        session.status,
        session.parentSessionId ?? null,
        session.sourcePath,
        JSON.stringify(session.config),
        JSON.stringify(session.progress),
        JSON.stringify(session.state),
        session.createdAt,
        session.updatedAt,
      );
  }

  /**
   * Messages are not stored here.
   *
   * They belong to a checkpoint, which records the window as it stood at a
   * known point. Persisting them on the session too would mean two copies
   * disagreeing about which is current.
   */
  private load(id: string): Session | null {
    const row = this.db.prepare('SELECT * FROM sessions WHERE id = ?').get(id) as
      | SessionRow
      | undefined;
    if (!row) return null;

    return {
      id: row.id,
      status: row.status,
      ...(row.parent_session_id === null ? {} : { parentSessionId: row.parent_session_id }),
      sourcePath: row.source_path,
      config: JSON.parse(row.config) as SessionConfig,
      progress: JSON.parse(row.progress) as Session['progress'],
      state: JSON.parse(row.state) as SessionState,
      contextManager: new LayeredContextManager(),
      abortController: new AbortController(),
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
