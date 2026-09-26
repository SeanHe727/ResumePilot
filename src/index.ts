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
    // Reassigned by `/new` and by loading a different file, which open a
    // session of their own. Carrying on with the old one would mean talking
    // to a session whose memory was just cleared out from under it.
    let session = await app.start(file ?? '');

    console.log(chalk.bold('ResumePilot'), chalk.dim(`· session ${session.id.slice(0, 8)}`));
    const loaded = (session.state as { resume?: unknown }).resume !== undefined;
    console.log(
      chalk.dim(
        loaded
          ? `Loaded ${file}. Say what you want looked at, or /help for commands.`
          : '/upload <file> to begin, /help for commands.',
      ),
    );

    const { createInterface } = await import('node:readline');
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: chalk.cyan('\n> '),
    });

    // Lines are queued as they arrive rather than pulled one at a time.
    // `question()` never settles once stdin ends, so Ctrl-D hangs; and the
    // async iterator throws mid-loop when stdin closes while a command is
    // still running, losing everything typed behind it. A diagnosis takes
    // minutes, so that is the normal case, not an edge one.
    const pending: string[] = [];
    let ended = false;
    let wake: (() => void) | null = null;

    rl.on('line', (line) => {
      pending.push(line);
      wake?.();
    });
    rl.on('close', () => {
      ended = true;
      wake?.();
    });

    try {
      rl.prompt();
      for (;;) {
        while (pending.length === 0 && !ended) {
          await new Promise<void>((resolve) => {
            wake = resolve;
          });
          wake = null;
        }

        const line = pending.shift();
        // Drained and closed: everything typed has been handled.
        if (line === undefined) break;

        const trimmed = line.trim();
        if (trimmed === '/exit' || trimmed === '/quit') break;

        try {
          session = await app.handle(trimmed, session);
        } catch (err) {
          // One bad turn must not end the session: the work so far is on disk
          // and the user can /continue or ask something else.
          console.error(chalk.red(describe(err)));
        }
        if (!ended) rl.prompt();
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
  .action(async (file: string, opts: { jd?: string; output?: string }) => {
    const { App } = await import('./app.js');
    // Nothing can answer a confirmation prompt here, and a gate that opens
    // when no one is watching is not a gate — so confirmations refuse.
    const app = new App({ config: loadConfig(), interactive: false });
    let session = await app.start(file);

    try {
      if ((session.state as { resume?: unknown }).resume === undefined) {
        // `start` already printed why. This is the part a script can act on.
        process.exitCode = 1;
        return;
      }

      if (opts.jd) session = await app.handle(`/jd ${opts.jd}`, session);

      // The same path a person takes: ask the coordinator, and let it decide
      // which specialists this resume needs. There was a `/diagnose` command
      // that ran a fixed batch, and this sent to it for a while after it was
      // deleted — printing "Unknown command", making no model call, and
      // exiting zero.
      session = await app.handle(
        'Review this whole resume and give me a report on it.',
        session,
      );

      if (opts.output) session = await app.handle(`/export md ${opts.output}`, session);

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

program
  .command('scenario <file>')
  .description('Play a scripted conversation, one message per line, with the trace on')
  .option('--resume <path>', 'file substituted for {resume} in the script', 'tests/fixtures/resume_example.pdf')
  .option('--trace-dir <dir>', 'where the trace goes', process.env.RESUMEPILOT_TRACE_DIR ?? 'tmp/trace')
  .action(async (file: string, opts: { resume: string; traceDir: string }) => {
    const { App } = await import('./app.js');
    const { playScenario, readScenario } = await import('./scenario.js');
    const messages = readScenario(file, opts.resume);

    // A memory of its own, empty, so a run is not shaped by the runs before it
    // and leaves nothing in the memory of the app as it is really used.
    const { mkdtempSync } = await import('node:fs');
    const { tmpdir } = await import('node:os');
    const { join } = await import('node:path');
    const memoryPath = join(mkdtempSync(join(tmpdir(), 'resumepilot-scenario-')), 'memory.db');

    // Non-interactive: nobody is there to answer a confirmation, so it refuses.
    const app = new App({ config: loadConfig(), interactive: false, traceDir: opts.traceDir, memoryPath });
    try {
      const session = await app.start('');
      await playScenario(app, session, messages, (text) =>
        console.log(text.startsWith('\n> ') ? chalk.cyan(text) : text),
      );
      console.log(chalk.dim(`\n${app.queryEngine.getUsageSummary()}`));
      if (app.tracePath) console.log(chalk.dim(`trace: ${app.tracePath}`));
    } finally {
      app.close();
    }
  });

program
  .command('trace-summary [path]')
  .description('Summarise a trace: a trace.jsonl, its run folder, or the trace root (newest run)')
  .option('--json', 'print the summary as JSON')
  .action(async (path: string | undefined, opts: { json?: boolean }) => {
    const { readTrace, resolveTracePath } = await import('./trace/read.js');
    const { renderTraceSummary, summariseTrace } = await import('./trace/summary.js');
    const file = resolveTracePath(path ?? process.env.RESUMEPILOT_TRACE_DIR ?? 'tmp/trace');
    const summary = summariseTrace(readTrace(file));
    console.log(chalk.dim(file));
    console.log(opts.json ? JSON.stringify(summary, null, 2) : renderTraceSummary(summary));
  });

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}

program.parseAsync().catch((err: unknown) => {
  console.error(chalk.red(describe(err)));
  process.exitCode = 1;
});
