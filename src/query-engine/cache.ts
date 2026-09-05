import { createHash } from 'node:crypto';

import Database from 'better-sqlite3';

import type { ParsedResponse, StreamParams } from './types.js';

export interface CacheStats {
  entries: number;
  hits: number;
  misses: number;
  tokensSaved: number;
}

/**
 * Deterministic response cache.
 *
 * Diagnosis repeats itself constantly: the same bullet re-diagnosed after an
 * edit elsewhere, the same knowledge-base question across entries, the same
 * resume run again against a second job description. Every one of those is a
 * paid round trip that returns the identical answer.
 */
export class QueryCache {
  private readonly db: Database.Database;
  private hits = 0;
  private misses = 0;

  /**
   * `namespace` scopes every key. It is a single local user today, but resume
   * text reaches this layer already redacted — two people's bullets can reduce
   * to the same `[COMPANY_1]` placeholder text and therefore the same hash. On
   * one machine that is a legitimate hit; behind a shared server it would be
   * one tenant reading another's cache, so the separator belongs here from the
   * start rather than being retrofitted later.
   */
  constructor(
    dbPath: string,
    private readonly namespace = 'local',
  ) {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS query_cache (
        key         TEXT PRIMARY KEY,
        namespace   TEXT NOT NULL,
        response    TEXT NOT NULL,
        tokens_saved INTEGER NOT NULL,
        created_at  TEXT NOT NULL DEFAULT (datetime('now')),
        expires_at  TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_cache_expiry ON query_cache(expires_at);
    `);
  }

  get(key: string): ParsedResponse | null {
    const row = this.db
      .prepare(
        `SELECT response FROM query_cache
         WHERE key = ? AND namespace = ? AND expires_at > datetime('now')`,
      )
      .get(key, this.namespace) as { response: string } | undefined;

    if (!row) {
      this.misses += 1;
      return null;
    }
    this.hits += 1;
    return JSON.parse(row.response) as ParsedResponse;
  }

  set(key: string, response: ParsedResponse, ttlSeconds: number): void {
    this.db
      .prepare(
        `INSERT OR REPLACE INTO query_cache (key, namespace, response, tokens_saved, expires_at)
         VALUES (?, ?, ?, ?, ?)`,
      )
      .run(
        key,
        this.namespace,
        JSON.stringify(response),
        response.usage.inputTokens + response.usage.outputTokens,
        expiryStamp(ttlSeconds),
      );
  }

  /**
   * The key covers everything that can change the answer. Anything omitted
   * would silently serve a response produced under different settings.
   */
  generateKey(params: StreamParams): string {
    const payload = JSON.stringify({
      namespace: this.namespace,
      model: params.model,
      system: params.systemPrompt ?? null,
      messages: params.messages,
      // Tool bodies do not vary within a build; the set that was offered does.
      tools: params.tools?.map((t) => t.name).sort() ?? null,
      maxTokens: params.maxTokens ?? null,
      effort: params.effort ?? null,
    });
    return createHash('sha256').update(payload).digest('hex').slice(0, 32);
  }

  evictExpired(): number {
    return this.db.prepare(`DELETE FROM query_cache WHERE expires_at <= datetime('now')`).run()
      .changes;
  }

  clear(): void {
    this.db.prepare('DELETE FROM query_cache WHERE namespace = ?').run(this.namespace);
  }

  getStats(): CacheStats {
    const row = this.db
      .prepare(
        `SELECT COUNT(*) AS entries, COALESCE(SUM(tokens_saved), 0) AS tokens
         FROM query_cache WHERE namespace = ?`,
      )
      .get(this.namespace) as { entries: number; tokens: number };

    return {
      entries: row.entries,
      hits: this.hits,
      misses: this.misses,
      tokensSaved: row.tokens,
    };
  }

  close(): void {
    this.db.close();
  }
}

/**
 * Expiry is computed here rather than by SQL string concatenation.
 *
 * `datetime('now', '+' || ? || ' seconds')` looks convenient but silently
 * yields NULL for any TTL SQLite cannot parse — a negative one, say — and the
 * write then fails on the NOT NULL constraint instead of simply storing an
 * already-expired row. Format matches SQLite's own `datetime()`: UTC,
 * `YYYY-MM-DD HH:MM:SS`, so string comparison against `datetime('now')` holds.
 */
function expiryStamp(ttlSeconds: number): string {
  const at = Number.isFinite(ttlSeconds) ? Date.now() + ttlSeconds * 1000 : Date.now();
  return new Date(at).toISOString().replace('T', ' ').slice(0, 19);
}
