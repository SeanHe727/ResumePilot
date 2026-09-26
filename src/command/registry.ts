import type { AuditLogger, PermissionGate } from '../permission/types.js';
import { createAuditCommand } from './handlers/audit.js';
import { createRewindCommand } from './handlers/rewind.js';
import type { HookPipeline } from '../hooks/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { CheckpointManager, SessionManager, SessionRestorer } from '../session/types.js';
import { DefaultCommandParser } from './parser.js';
import { createExportCommand } from './handlers/export.js';
import { createHelpCommand } from './handlers/help.js';
import { createHistoryCommand } from './handlers/history.js';
import { createHooksCommand } from './handlers/hooks.js';
import { createJdCommand } from './handlers/jd.js';

import { createNewCommand } from './handlers/new.js';
import { createReportCommand } from './handlers/report.js';
import { createRevertCommand } from './handlers/revert.js';
import { createUploadCommand, type ParseFile } from './handlers/upload.js';

export interface CommandDeps {
  sessions: SessionManager;
  restorer: SessionRestorer;
  hooks: HookPipeline;
  engine: QueryEngine;
  /** Together they make `/audit` possible; absent, the command is not offered. */
  audit?: AuditLogger;
  gate?: PermissionGate;
  /** Makes `/rewind` possible: without it there is nothing to list or return to. */
  checkpoints?: CheckpointManager;
  /** Runs the parse tool, so uploading a file and reading one stay separate. */
  parseFile: ParseFile;
  /** Cleared by `/new`, which is the only thing that clears it. */
  memory: { deleteAll(): void };
  /** Absent in tests that exercise only the commands needing no skill. */
}

/**
 * Handlers take their collaborators as arguments.
 *
 * The reference project reached them through the session — `session.queryEngine`,
 * `session.commandParser` — which makes `Session` a service locator and every
 * handler untestable without building the whole application. Here a handler
 * receives exactly what it uses.
 *
 * `/diagnose` appears only when a skill runner is supplied — a parser built
 * without one is for the commands that need no skill, and a stub that failed
 * at call time would be worse than an absent command.
 *
 * `/grill`, `/compare` and `/diff` are still absent: their skills do not exist.
 */
export function createCommandParser(deps: CommandDeps): DefaultCommandParser {
  const parser = new DefaultCommandParser();

  for (const command of [
    createUploadCommand(deps.sessions, deps.parseFile),
    createJdCommand(deps.sessions),
    createExportCommand(),
    createHistoryCommand(deps.sessions),
    createNewCommand(deps.sessions, deps.memory),
    createReportCommand(),
    createRevertCommand(deps.sessions),
    createHooksCommand(deps.hooks),
    ...(deps.audit && deps.gate ? [createAuditCommand(deps.audit, deps.gate)] : []),
    ...(deps.checkpoints
      ? [createRewindCommand(deps.restorer, deps.checkpoints, deps.sessions)]
      : []),
  ]) {
    parser.register(command);
  }

  // Registered last: it lists the parser's own contents.
  parser.register(createHelpCommand(parser));

  return parser;
}
