#!/usr/bin/env node
import chalk from 'chalk';
import { Command } from 'commander';

import { loadConfig } from './config.js';

/**
 * Load `.env` if there is one. Node has done this natively since v20, so no
 * dotenv dependency is needed — and an absent file is normal, not an error:
 * credentials may just as well come from the shell or from `ant auth login`.
 */
try {
  process.loadEnvFile();
} catch {
  // No .env here; whatever the environment already holds stands.
}

const program = new Command();

program
  .name('resumepilot')
  .description('Diagnose a resume and get per-bullet rewrite suggestions')
  .version('0.1.0');

program
  .command('start')
  .description('Start an interactive diagnosis session')
  .option('-m, --model <model>', 'primary model')
  .action(() => {
    throw new Error('Not implemented until Phase 9 — see README roadmap.');
  });

program
  .command('diagnose <file>')
  .description('Diagnose a resume file non-interactively')
  .option('--jd <path>', 'job description to diagnose against')
  .option('-o, --output <path>', 'write the report here')
  .action(() => {
    throw new Error('Not implemented until Phase 9 — see README roadmap.');
  });

program
  .command('build-kb')
  .description('Build the knowledge base from the Markdown corpus')
  .option('-c, --corpus <dir>', 'corpus directory', './knowledge/data')
  .option('--db <path>', 'output database', './data/knowledge.db')
  .option('--no-embeddings', 'skip embeddings; retrieval falls back to literal match')
  .action(async (opts: { corpus: string; db: string; embeddings: boolean }) => {
    const { buildKnowledgeBase } = await import('./knowledge/build.js');
    const config = loadConfig();

    const report = await buildKnowledgeBase({
      corpusDir: opts.corpus,
      dbPath: opts.db,
      ...(opts.embeddings && config.apiKeys.openai
        ? { openaiApiKey: config.apiKeys.openai, embeddingModel: config.models.embedding }
        : {}),
      log: (message) => console.log(chalk.dim(message)),
    });

    console.log(
      chalk.green('\nKnowledge base ready'),
      `\n  entries        ${report.totalEntries}`,
      `\n  dimensions     ${report.dimensions}`,
      `\n  with embedding ${report.withEmbedding}`,
      `\n  embedding cost $${report.estimatedCostUsd.toFixed(4)}`,
      `\n  database       ${opts.db}`,
    );
  });

program.parse();
