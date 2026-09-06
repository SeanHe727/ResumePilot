import Database from 'better-sqlite3';

import type { MemoryEntry, MemoryStore, MemoryType } from './types.js';

/**
 * One table, because a memory is one fact and the type column is enough to
 * separate the four kinds.
 *
 * `value` is JSON text rather than columns: the store is generic over the
 * profile shape and has no idea a candidate exists, so it cannot have columns
 * for `targetRole` or `techStack`. The domain casts on the way out.
 *
 * No schema version stamp, unlike the knowledge base. That database is a build
 * artefact and the right answer to a version mismatch is to delete and rebuild;
 * this one holds the only copy of what the user told us, so a future schema
 * change has to migrate rather than discard.
 */
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS memories (
    id           TEXT PRIMARY KEY,
    type         TEXT NOT NULL,
    key          TEXT NOT NULL,
    value        TEXT NOT NULL,
    confidence   REAL NOT NULL DEFAULT 0.5,
    created_at   TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
    expires_at   TEXT,
    access_count INTEGER NOT NULL DEFAULT 0
  );

  CREATE INDEX IF NOT EXISTS idx_memories_type     ON memories(type);
  CREATE INDEX IF NOT EXISTS idx_memories_key      ON memories(key);
  CREATE INDEX IF NOT EXISTS idx_memories_type_key ON memories(type, key);
`;

interface MemoryRow {
  id: string;
  type: MemoryType;
  key: string;
  value: string;
  confidence: number;
  created_at: string;
  updated_at: string;
  expires_at: string | null;
  access_count: number;
}

/** Confidence a memory is born with; two sightings are needed to clear recall. */
const INITIAL_CONFIDENCE = 0.5;

/** Added each time an observation repeats. */
const CONFIDENCE_STEP = 0.1;

export class SqliteMemoryStore<TProfile extends object = Record<string, unknown>>
  implements MemoryStore<TProfile>
{
  readonly db: Database.Database;

  /** Disambiguates ids created inside the same millisecond. */
  private sequence = 0;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.exec(SCHEMA);
  }

  create<T>(type: MemoryType, key: string, value: T): string {
    // `${type}:${key}:${Date.now()}` alone collides: diagnosing several entries
    // writes several weak points inside one millisecond, and the second insert
    // would fail on the primary key.
    this.sequence += 1;
    const id = `${type}:${key}:${Date.now()}-${this.sequence}`;

    this.db
      .prepare('INSERT INTO memories (id, type, key, value, confidence) VALUES (?, ?, ?, ?, ?)')
      .run(id, type, key, JSON.stringify(value), INITIAL_CONFIDENCE);

    return id;
  }

  retrieve(
    opts: { type?: MemoryType; key?: string; limit?: number; minConfidence?: number } = {},
  ): MemoryEntry[] {
    const clauses = ["(expires_at IS NULL OR expires_at > datetime('now'))"];
    const params: unknown[] = [];

    if (opts.type) {
      clauses.push('type = ?');
      params.push(opts.type);
    }
    if (opts.key) {
      // Substring rather than equality, so a dimension key also matches the
      // records filed under a more specific variant of it.
      clauses.push('key LIKE ?');
      params.push(`%${opts.key}%`);
    }
    // `!== undefined` throughout, not a truthiness test. It makes no odds here
    // (confidence is never negative, so a zero floor filters nothing either
    // way) but it does for `limit` below, where a truthy test turns a zero into
    // no clause at all and returns every row instead of none.
    if (opts.minConfidence !== undefined) {
      clauses.push('confidence >= ?');
      params.push(opts.minConfidence);
    }

    let sql =
      `SELECT * FROM memories WHERE ${clauses.join(' AND ')} ` +
      'ORDER BY confidence DESC, updated_at DESC';
    if (opts.limit !== undefined) {
      sql += ' LIMIT ?';
      params.push(opts.limit);
    }

    const rows = this.db.prepare(sql).all(...params) as MemoryRow[];
    this.recordAccess(rows.map((r) => r.id));

    return rows.map((r) => rowToEntry(r));
  }

  update<T>(id: string, value: T, boostConfidence = false): void {
    const sets = ["value = ?", "updated_at = datetime('now')"];
    if (boostConfidence) sets.push(`confidence = MIN(1.0, confidence + ${CONFIDENCE_STEP})`);

    this.db
      .prepare(`UPDATE memories SET ${sets.join(', ')} WHERE id = ?`)
      .run(JSON.stringify(value), id);
  }

  delete(id: string): void {
    this.db.prepare('DELETE FROM memories WHERE id = ?').run(id);
  }

  deleteAll(type?: MemoryType): void {
    if (type) this.db.prepare('DELETE FROM memories WHERE type = ?').run(type);
    else this.db.prepare('DELETE FROM memories').run();
  }

  /**
   * The profile is stored as ordinary memories and merged on read, so a partial
   * update never has to rewrite the whole object.
   */
  getProfile(): TProfile {
    const entries = this.retrieve({ type: 'user_profile' });
    const profile = {} as TProfile;

    // Folded back-to-front. `retrieve` orders by confidence descending, so
    // assigning in that order would let the least-trusted entry overwrite the
    // most-trusted one.
    for (const entry of [...entries].reverse()) {
      Object.assign(profile, entry.value);
    }

    return profile;
  }

  updateProfile(patch: Partial<TProfile>): void {
    const [existing] = this.retrieve({ type: 'user_profile', key: 'main' });

    if (existing) {
      this.update(existing.id, { ...(existing.value as TProfile), ...patch }, true);
    } else {
      this.create('user_profile', 'main', patch);
    }
  }

  /**
   * Nothing sets `expires_at` yet — `create` takes no lifetime, so every memory
   * written today is permanent. The column and this sweep are the schema half
   * of a policy whose other half does not exist.
   */
  evictExpired(): number {
    return this.db
      .prepare("DELETE FROM memories WHERE expires_at IS NOT NULL AND expires_at <= datetime('now')")
      .run().changes;
  }

  getStats(): { total: number; byType: Record<string, number> } {
    const { total } = this.db.prepare('SELECT COUNT(*) AS total FROM memories').get() as {
      total: number;
    };
    const rows = this.db
      .prepare('SELECT type, COUNT(*) AS count FROM memories GROUP BY type')
      .all() as Array<{ type: string; count: number }>;

    return {
      total,
      byType: Object.fromEntries(rows.map((r) => [r.type, r.count])),
    };
  }

  close(): void {
    this.db.close();
  }

  /** One statement rather than one per row: recall reads are on the hot path. */
  private recordAccess(ids: string[]): void {
    if (ids.length === 0) return;

    const placeholders = ids.map(() => '?').join(', ');
    this.db
      .prepare(`UPDATE memories SET access_count = access_count + 1 WHERE id IN (${placeholders})`)
      .run(...ids);
  }
}

function rowToEntry(row: MemoryRow): MemoryEntry {
  return {
    id: row.id,
    type: row.type,
    key: row.key,
    value: JSON.parse(row.value) as unknown,
    confidence: row.confidence,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    ...(row.expires_at === null ? {} : { expiresAt: row.expires_at }),
    accessCount: row.access_count,
  };
}
