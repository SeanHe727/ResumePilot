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
  .argument('[file]', 'resume to load')
  .option('-m, --model <model>', 'primary model')
  .action(async (file: string | undefined, opts: { model?: string }) => {
    const { App } = await import('./app.js');
    const config = loadConfig();
    if (opts.model) config.models.primary = opts.model;

    const app = new App({ config, interactive: true });
    const session = app.start(file ?? '');

    console.log(chalk.bold('ResumePilot'), chalk.dim(`· session ${session.id.slice(0, 8)}`));
    console.log(chalk.dim(file ? `Loaded ${file}. /diagnose to start, /help for commands.` : '/upload <file> to begin, /help for commands.'));

    const { createInterface } = await import('node:readline/promises');
    const rl = createInterface({ input: process.stdin, output: process.stdout });

    try {
      for (;;) {
        const line = (await rl.question(chalk.cyan('\n> '))).trim();
        if (line === '/exit' || line === '/quit') break;
        try {
          await app.handle(line, session);
        } catch (err) {
          // One bad turn must not end the session: the work so far is on disk
          // and the user can /continue or ask something else.
          console.error(chalk.red(describe(err)));
        }
      }
    } finally {
      rl.close();
      app.close();
    }
  });

program
  .command('diagnose <file>')
  .description('Diagnose a resume file non-interactively')
  .option('--jd <path>', 'job description to diagnose against')
  .option('-o, --output <path>', 'write the report here')
  .option('--fast', 'use the deterministic pipeline instead of sub-agents')
  .action(async (file: string, opts: { jd?: string; output?: string; fast?: boolean }) => {
    const { App } = await import('./app.js');
    // Nothing can answer a confirmation prompt here, and a gate that opens
    // when no one is watching is not a gate — so confirmations refuse.
    const app = new App({ config: loadConfig(), interactive: false });
    const session = app.start(file);

    try {
      if (opts.jd) await app.handle(`/jd ${opts.jd}`, session);
      await app.handle(`/diagnose ${file}${opts.fast ? ' --fast' : ''}`, session);
      if (opts.output) await app.handle(`/export md ${opts.output}`, session);

      console.log(chalk.dim(`\n${app.queryEngine.getUsageSummary()}`));
      const metrics = app.metrics.getSummary();
      if (metrics.totalCalls > 0) {
        console.log(
          chalk.dim(
            `${metrics.totalCalls} tool calls · ${metrics.avgDurationMs}ms avg · ` +
              `${Math.round(metrics.successRate * 100)}% ok`,
          ),
        );
      }
    } finally {
      app.close();
    }
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

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

program.parseAsync().catch((err: unknown) => {
  console.error(chalk.red(describe(err)));
  process.exitCode = 1;
});
