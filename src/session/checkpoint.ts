import { randomUUID } from 'node:crypto';

import type Database from 'better-sqlite3';

import type { Message } from '../types.js';
import type { CheckpointManager, Session, SessionCheckpoint, SessionState } from './types.js';

/**
 * How many entries between checkpoints.
 *
 * The reference project checkpointed every fifth question out of twenty. A
 * resume has four to six entries, so the same interval would fire once at
 * best — the constant scales with how much work is at risk between saves, not
 * with the number itself.
 */
const DEFAULT_INTERVAL = 2;


interface CheckpointRow {
  id: string;
  session_id: string;
  sequence: number;
  progress: string;
  state: string;
  messages: string;
  created_at: string;
}

export class SqliteCheckpointManager implements CheckpointManager {
  constructor(
    private readonly db: Database.Database,
    private readonly interval = DEFAULT_INTERVAL,
  ) {}

  /**
   * Asked once per completed entry, and the loop may well ask twice for the
   * same one. Comparing against the last checkpoint's progress rather than
   * just `done % interval` keeps a retry from writing a duplicate.
   */
  shouldCheckpoint(session: Session): boolean {
    const { done } = session.progress;
    if (done === 0 || done % this.interval !== 0) return false;

    return done > (this.getLatest(session.id)?.progress.done ?? -1);
  }

  create(session: Session, messages: Message[]): string {
    const id = randomUUID();
    const { next } = this.db
      .prepare('SELECT COALESCE(MAX(sequence), 0) + 1 AS next FROM checkpoints WHERE session_id = ?')
      .get(session.id) as { next: number };

    this.db
      .prepare(
        `INSERT INTO checkpoints (id, session_id, sequence, progress, state, messages, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        id,
        session.id,
        next,
        JSON.stringify(session.progress),
        JSON.stringify(session.state),
        JSON.stringify(messages),
        new Date().toISOString(),
      );

    return id;
  }

  list(sessionId: string): SessionCheckpoint[] {
    const rows = this.db
      .prepare('SELECT * FROM checkpoints WHERE session_id = ? ORDER BY sequence')
      .all(sessionId) as CheckpointRow[];

    return rows.map(toCheckpoint);
  }

  getLatest(sessionId: string): SessionCheckpoint | null {
    const row = this.db
      .prepare('SELECT * FROM checkpoints WHERE session_id = ? ORDER BY sequence DESC LIMIT 1')
      .get(sessionId) as CheckpointRow | undefined;

    return row ? toCheckpoint(row) : null;
  }

  /**
   * Ordered by `sequence`, not by timestamp.
   *
   * `created_at` has one-second resolution, and two checkpoints written inside
   * the same second compare equal — so a rewind keyed on `created_at >` would
   * either keep a checkpoint it should have discarded or discard one it should
   * have kept, depending on which way the comparison fell.
   */
  rewind(sessionId: string, checkpointId: string): SessionCheckpoint | null {
    const row = this.db
      .prepare('SELECT * FROM checkpoints WHERE id = ? AND session_id = ?')
      .get(checkpointId, sessionId) as CheckpointRow | undefined;
    if (!row) return null;

    this.db
      .prepare('DELETE FROM checkpoints WHERE session_id = ? AND sequence > ?')
      .run(sessionId, row.sequence);

    return toCheckpoint(row);
  }
}

function toCheckpoint(row: CheckpointRow): SessionCheckpoint {
  return {
    id: row.id,
    sessionId: row.session_id,
    progress: JSON.parse(row.progress) as Session['progress'],
    state: JSON.parse(row.state) as SessionState,
    messages: JSON.parse(row.messages) as Message[],
    createdAt: row.created_at,
  };
}
