import type Database from 'better-sqlite3';

/**
 * Five concerns, deliberately split across separate SQLite files rather than
 * one database: the knowledge base is a rebuildable artefact, the cache is
 * disposable, and sessions/memory/audit carry user data that must survive a
 * `build-kb` or a cache wipe untouched.
 */
export type DatabaseName = 'knowledge' | 'sessions' | 'memory' | 'cache' | 'audit';

export interface DatabaseRegistry {
  open(name: DatabaseName): Database.Database;
  close(name: DatabaseName): void;
  closeAll(): void;
  /** Absolute path on disk, for `/status` and for tests using temp dirs. */
  pathFor(name: DatabaseName): string;
}
