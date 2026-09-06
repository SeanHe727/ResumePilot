import type { HookPipeline } from '../hooks/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { SessionManager, SessionRestorer } from '../session/types.js';
import { DefaultCommandParser } from './parser.js';
import { createBudgetCommand } from './handlers/budget.js';
import { createConfigCommand } from './handlers/config.js';
import { createContinueCommand } from './handlers/continue.js';
import { createDetailCommand } from './handlers/detail.js';
import { createExportCommand } from './handlers/export.js';
import { createHelpCommand } from './handlers/help.js';
import { createHistoryCommand } from './handlers/history.js';
import { createHooksCommand } from './handlers/hooks.js';
import { createReportCommand } from './handlers/report.js';
import { createResetCommand } from './handlers/reset.js';
import { createSkipCommand } from './handlers/skip.js';
import { createStatusCommand } from './handlers/status.js';
import { createUploadCommand } from './handlers/upload.js';

export interface CommandDeps {
  sessions: SessionManager;
  restorer: SessionRestorer;
  hooks: HookPipeline;
  engine: QueryEngine;
}

/**
 * Handlers take their collaborators as arguments.
 *
 * The reference project reached them through the session — `session.queryEngine`,
 * `session.commandParser` — which makes `Session` a service locator and every
 * handler untestable without building the whole application. Here a handler
 * receives exactly what it uses.
 *
 * Commands whose backing skill does not exist yet are absent rather than
 * stubbed: `/diagnose`, `/grill`, `/compare`, `/jd` and `/diff` arrive with the
 * Agent Loop and the skills they run.
 */
export function createCommandParser(deps: CommandDeps): DefaultCommandParser {
  const parser = new DefaultCommandParser();

  for (const command of [
    createUploadCommand(deps.sessions),
    createStatusCommand(deps.engine),
    createReportCommand(),
    createDetailCommand(),
    createSkipCommand(deps.sessions),
    createExportCommand(),
    createHistoryCommand(deps.sessions),
    createContinueCommand(deps.restorer),
    createResetCommand(deps.sessions),
    createBudgetCommand(deps.engine),
    createConfigCommand(deps.sessions),
    createHooksCommand(deps.hooks),
  ]) {
    parser.register(command);
  }

  // Registered last: it lists the parser's own contents.
  parser.register(createHelpCommand(parser));

  return parser;
}
