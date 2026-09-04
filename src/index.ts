#!/usr/bin/env node
import { Command } from 'commander';

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
  .description('Build the knowledge base from knowledge/data/')
  .action(() => {
    throw new Error('Not implemented until Phase 3 — see README roadmap.');
  });

program.parse();
