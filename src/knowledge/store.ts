import Database from 'better-sqlite3';

import type { DiagnosisDimension } from '../domain.js';
import type { KnowledgeEntry, KnowledgeStore } from './types.js';

/**
 * `trigram` rather than the usual `unicode61`.
 *
 * The corpus is bilingual, and `unicode61` splits only on non-alphanumeric
 * characters — a whole Chinese sentence becomes one token, so no Chinese query
 * can ever match. Trigram indexes three-character windows instead, which works
 * for both scripts. The cost is no stemming ("quantify" will not match
 * "quantified"), and that is exactly the gap the embedding channel fills.
 */
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS knowledge (
    id              TEXT PRIMARY KEY,
    dimension       TEXT NOT NULL,
    dimension_label TEXT NOT NULL,
    question        TEXT NOT NULL,
    source          TEXT,
    weak_answer     TEXT NOT NULL,
    strong_answer   TEXT NOT NULL,
    gap_analysis    TEXT NOT NULL,
    keywords        TEXT NOT NULL,
    embedding       BLOB,
    created_at      TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_knowledge_dimension ON knowledge(dimension);

  -- weak_answer is indexed alongside the rest because it is the closest thing
  -- in the corpus to what a user actually submits: the symptom text. A bad
  -- bullet resembles the weak example far more than it resembles the rule
  -- explaining why it is bad.
  CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
    id UNINDEXED,
    question,
    weak_answer,
    strong_answer,
    gap_analysis,
    keywords,
    tokenize = 'trigram'
  );
`;

/**
 * Bump whenever the schema above changes shape.
 *
 * `CREATE TABLE IF NOT EXISTS` silently leaves an existing table alone, so a
 * database written by an older build keeps its old columns and the first insert
 * fails with a bare `SQLITE_ERROR`. Since the database is a build artefact and
 * the Markdown corpus is the source of truth, the right response to a version
 * mismatch is to throw the file away and rebuild — not to migrate it.
 */
const SCHEMA_VERSION = 2;

export class SqliteKnowledgeStore implements KnowledgeStore {
  readonly db: Database.Database;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');

    const [{ user_version: found } = { user_version: 0 }] = this.db.pragma(
      'user_version',
    ) as Array<{ user_version: number }>;

    // Any version but the current one is stale, zero included: a database
    // written before versioning existed also reports 0, and treating that as
    // "brand new" is exactly how the old schema survives to fail on insert.
    // Dropping is a no-op on a genuinely empty file.
    if (found !== SCHEMA_VERSION) {
      this.db.exec('DROP TABLE IF EXISTS knowledge_fts; DROP TABLE IF EXISTS knowledge;');
    }

    this.db.exec(SCHEMA);
    this.db.pragma(`user_version = ${SCHEMA_VERSION}`);
  }

  insertBatch(entries: KnowledgeEntry[]): void {
    const insert = this.db.prepare(`
      INSERT OR REPLACE INTO knowledge
        (id, dimension, dimension_label, question, source,
         weak_answer, strong_answer, gap_analysis, keywords, embedding)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    // The FTS table is kept in step by hand rather than by trigger: an
    // external-content table would tie the index to rowids that `INSERT OR
    // REPLACE` reassigns, silently orphaning rows on every rebuild.
    const dropFts = this.db.prepare('DELETE FROM knowledge_fts WHERE id = ?');
    const insertFts = this.db.prepare(`
      INSERT INTO knowledge_fts (id, question, weak_answer, strong_answer, gap_analysis, keywords)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const tx = this.db.transaction((items: KnowledgeEntry[]) => {
      for (const e of items) {
        insert.run(
          e.id,
          e.dimension,
          e.dimensionLabel,
          e.question,
          e.source ?? null,
          e.weakAnswer,
          e.strongAnswer,
          e.gapAnalysis,
          JSON.stringify(e.keywords),
          e.embedding ? Buffer.from(e.embedding.buffer) : null,
        );
        dropFts.run(e.id);
        insertFts.run(
          e.id,
          e.question,
          e.weakAnswer,
          e.strongAnswer,
          e.gapAnalysis,
          e.keywords.join(' '),
        );
      }
    });

    tx(entries);
  }

  getEntry(id: string): KnowledgeEntry | null {
    const row = this.db.prepare('SELECT * FROM knowledge WHERE id = ?').get(id);
    return row ? rowToEntry(row) : null;
  }

  getDimensions(): Array<{ id: string; label: string; count: number }> {
    return this.db
      .prepare(
        `SELECT dimension AS id, dimension_label AS label, COUNT(*) AS count
         FROM knowledge GROUP BY dimension ORDER BY dimension`,
      )
      .all() as Array<{ id: string; label: string; count: number }>;
  }

  getStats(): { totalEntries: number; dimensions: number; withEmbedding: number } {
    const row = this.db
      .prepare(
        `SELECT COUNT(*) AS total,
                COUNT(DISTINCT dimension) AS dims,
                SUM(CASE WHEN embedding IS NOT NULL THEN 1 ELSE 0 END) AS embedded
         FROM knowledge`,
      )
      .get() as { total: number; dims: number; embedded: number | null };

    return {
      totalEntries: row.total,
      dimensions: row.dims,
      withEmbedding: row.embedded ?? 0,
    };
  }

  sampleEntries(opts: { dimension?: DiagnosisDimension; count: number }): KnowledgeEntry[] {
    const params: unknown[] = [];
    let sql = 'SELECT * FROM knowledge';
    if (opts.dimension) {
      sql += ' WHERE dimension = ?';
      params.push(opts.dimension);
    }
    sql += ' ORDER BY RANDOM() LIMIT ?';
    params.push(opts.count);

    return (this.db.prepare(sql).all(...params) as unknown[]).map(rowToEntry);
  }

  /** Every entry, for the embedding pass and for brute-force similarity search. */
  allEntries(dimension?: DiagnosisDimension): KnowledgeEntry[] {
    const rows = dimension
      ? this.db.prepare('SELECT * FROM knowledge WHERE dimension = ?').all(dimension)
      : this.db.prepare('SELECT * FROM knowledge').all();
    return (rows as unknown[]).map(rowToEntry);
  }

  clear(): void {
    this.db.exec('DELETE FROM knowledge; DELETE FROM knowledge_fts;');
  }

  close(): void {
    this.db.close();
  }
}

interface KnowledgeRow {
  id: string;
  dimension: string;
  dimension_label: string;
  question: string;
  source: string | null;
  weak_answer: string;
  strong_answer: string;
  gap_analysis: string;
  keywords: string;
  embedding: Buffer | null;
}

export function rowToEntry(raw: unknown): KnowledgeEntry {
  const row = raw as KnowledgeRow;
  return {
    id: row.id,
    dimension: row.dimension as DiagnosisDimension,
    dimensionLabel: row.dimension_label,
    question: row.question,
    ...(row.source ? { source: row.source } : {}),
    weakAnswer: row.weak_answer,
    strongAnswer: row.strong_answer,
    gapAnalysis: row.gap_analysis,
    keywords: JSON.parse(row.keywords) as string[],
    ...(row.embedding
      ? {
          // The Buffer is a view into a larger pool, so the byte range must be
          // sliced out before it is reinterpreted as floats.
          embedding: new Float32Array(
            row.embedding.buffer.slice(
              row.embedding.byteOffset,
              row.embedding.byteOffset + row.embedding.byteLength,
            ),
          ),
        }
      : {}),
  };
}
