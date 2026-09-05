import { mkdir, rm } from 'node:fs/promises';
import { dirname } from 'node:path';

import { generateEmbeddings, OpenAIEmbeddingProvider } from './embed.js';
import { importAll } from './import.js';
import { SqliteKnowledgeStore } from './store.js';

export interface BuildOptions {
  corpusDir: string;
  dbPath: string;
  /** Absent means literal-only retrieval: the build still succeeds. */
  openaiApiKey?: string;
  embeddingModel?: string;
  log?: (message: string) => void;
}

export interface BuildReport {
  totalEntries: number;
  dimensions: number;
  withEmbedding: number;
  estimatedCostUsd: number;
}

/**
 * Rebuilds the knowledge base from the Markdown corpus.
 *
 * Destructive on purpose: `clear()` then reinsert, so a deleted or renamed
 * entry actually disappears. The database is a build artefact — the corpus
 * files are the source of truth, which is why `data/*.db` is not tracked.
 */
export async function buildKnowledgeBase(options: BuildOptions): Promise<BuildReport> {
  const log = options.log ?? (() => {});

  log('Step 1/3  parsing corpus…');
  const parsed = await importAll(options.corpusDir);
  log(`          ${parsed.length} entries`);

  let entries = parsed;
  let estimatedCostUsd = 0;

  if (options.openaiApiKey) {
    log('Step 2/3  generating embeddings…');
    const provider = new OpenAIEmbeddingProvider(options.openaiApiKey, options.embeddingModel);
    entries = await generateEmbeddings(parsed, provider, (done, total) =>
      log(`          ${done}/${total}`),
    );
    estimatedCostUsd = estimateEmbeddingCost(parsed);
  } else {
    log('Step 2/3  skipped — no OPENAI_API_KEY, retrieval will be literal-match only');
  }

  log('Step 3/3  writing database…');
  await mkdir(dirname(options.dbPath), { recursive: true });
  // Start from nothing rather than migrating in place. The store's version
  // check protects readers that open an old database, but a *build* has no
  // reason to inherit anything: the corpus is the source of truth, and a
  // half-migrated file — schema stamped current, tables still old — is a
  // failure mode that only exists if the build tries to be clever.
  await removeDatabase(options.dbPath);
  const store = new SqliteKnowledgeStore(options.dbPath);
  store.insertBatch(entries);

  const stats = store.getStats();
  store.close();

  return { ...stats, estimatedCostUsd };
}

/** WAL mode leaves two sidecar files; leaving them behind resurrects old pages. */
async function removeDatabase(dbPath: string): Promise<void> {
  for (const suffix of ['', '-wal', '-shm']) {
    await rm(`${dbPath}${suffix}`, { force: true });
  }
}

/** At $0.02 per 1M tokens the whole corpus costs a fraction of a cent. */
function estimateEmbeddingCost(entries: Array<{ question: string; strongAnswer: string }>): number {
  const chars = entries.reduce((sum, e) => sum + e.question.length + e.strongAnswer.length, 0);
  // Roughly one token per Chinese character, four per Latin character; the
  // corpus is mixed, so the conservative end is used.
  return (chars / 1_000_000) * 0.02;
}
