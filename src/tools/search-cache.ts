import { createHash } from 'node:crypto';

import Database from 'better-sqlite3';

import type { SearchOptions, SearchProvider, SearchResult } from './search-provider.js';

export interface SearchCacheStats {
  entries: number;
  hits: number;
  misses: number;
}

export interface SearchCacheOptions {
  /** Injected so expiry can be tested without waiting. Milliseconds since epoch. */
  now?: () => number;
}

const HOUR = 60 * 60 * 1000;

/**
 * How long one answer stays good.
 *
 * Keyed off the recency window rather than a separate table because the window
 * already encodes how fast the question goes stale: a search that has to be
 * recent (postings, 30 days) is one whose answer moves, and a search with no
 * window (a metric norm, an employer) is one whose answer does not move within
 * a week of development.
 */
export function ttlFor(options: Pick<SearchOptions, 'recencyDays'>): number {
  if (options.recencyDays !== undefined && options.recencyDays <= 30) return 6 * HOUR;
  return 7 * 24 * HOUR;
}

/**
 * A search provider that remembers what it has already been asked.
 *
 * Two repeats spend the search quota for nothing. The orchestrator's retry
 * re-runs a whole agent, not one request, so every search the first attempt
 * made is made again. And the same resume under the same prompts asks the same
 * questions run after run. Within one run the queries mostly differ, so this is
 * a cache for retries and for re-runs, not for the diagnosis itself.
 *
 * Its own table rather than `QueryCache`: that one is keyed on `StreamParams`
 * and stores `ParsedResponse`, neither of which a search has. A separate file,
 * too, so clearing one cache cannot take the other with it.
 *
 * Only successes are stored. A timeout or a 429 is a statement about that
 * moment, and serving it back for a week would turn a blip into an outage.
 */
export class CachedSearchProvider implements SearchProvider {
  readonly name: string;
  private readonly db: Database.Database;
  private readonly now: () => number;
  private hits = 0;
  private misses = 0;

  constructor(
    private readonly inner: SearchProvider,
    dbPath: string,
    options: SearchCacheOptions = {},
  ) {
    this.name = inner.name;
    this.now = options.now ?? Date.now;
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS search_cache (
        key         TEXT PRIMARY KEY,
        provider    TEXT NOT NULL,
        query       TEXT NOT NULL,
        results     TEXT NOT NULL,
        created_at  INTEGER NOT NULL,
        expires_at  INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_search_expiry ON search_cache(expires_at);
    `);
  }

  async search(query: string, options: SearchOptions): Promise<SearchResult[]> {
    const key = this.keyFor(query, options);
    const now = this.now();

    const row = this.db
      .prepare('SELECT results FROM search_cache WHERE key = ? AND expires_at > ?')
      .get(key, now) as { results: string } | undefined;
    if (row) {
      this.hits += 1;
      return JSON.parse(row.results) as SearchResult[];
    }

    this.misses += 1;
    const results = await this.inner.search(query, options);

    this.db
      .prepare(
        `INSERT OR REPLACE INTO search_cache (key, provider, query, results, created_at, expires_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(key, this.inner.name, query, JSON.stringify(results), now, now + ttlFor(options));

    return results;
  }

  /**
   * Everything that can change the answer, and nothing that cannot. The signal
   * is left out: cancelling a diagnosis does not change what the web says.
   * Case and spacing are folded because a model retrying a search rarely
   * retypes it identically, and the search engine does not care either.
   */
  keyFor(query: string, options: SearchOptions): string {
    const payload = JSON.stringify({
      provider: this.inner.name,
      query: query.trim().replace(/\s+/g, ' ').toLowerCase(),
      limit: options.limit,
      recencyDays: options.recencyDays ?? null,
      domains: options.domains ? [...options.domains].sort() : null,
    });
    return createHash('sha256').update(payload).digest('hex').slice(0, 32);
  }

  evictExpired(): number {
    return this.db.prepare('DELETE FROM search_cache WHERE expires_at <= ?').run(this.now()).changes;
  }

  clear(): void {
    this.db.prepare('DELETE FROM search_cache').run();
  }

  getStats(): SearchCacheStats {
    const row = this.db.prepare('SELECT COUNT(*) AS entries FROM search_cache').get() as {
      entries: number;
    };
    return { entries: row.entries, hits: this.hits, misses: this.misses };
  }

  close(): void {
    this.db.close();
  }
}
