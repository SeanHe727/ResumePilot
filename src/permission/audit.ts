import { createHash } from 'node:crypto';

import Database from 'better-sqlite3';

// One implementation of what a phone number and an email look like. Two would
// be two things to keep in step, and this project has already had that fight.
import { withoutContactDetails } from '../document/vocabulary.js';
import type { ToolCall } from '../types.js';
import type { ToolResult } from '../tools/types.js';
import type {
  AuditEntry,
  AuditLogger,
  ExecutionRecord,
  PermissionDecision,
  RiskLevel,
} from './types.js';

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS permission_audit (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id   TEXT NOT NULL,
    tool_name    TEXT NOT NULL,
    tool_args    TEXT NOT NULL,
    rule_id      TEXT NOT NULL,
    risk_level   TEXT NOT NULL,
    decision     TEXT NOT NULL,
    confirmed_by TEXT,
    timestamp    TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS tool_executions (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id     TEXT NOT NULL,
    tool_name      TEXT NOT NULL,
    input_summary  TEXT NOT NULL,
    output_summary TEXT NOT NULL,
    success        INTEGER NOT NULL,
    timestamp      TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_audit_session ON permission_audit(session_id);
  CREATE INDEX IF NOT EXISTS idx_audit_time    ON permission_audit(timestamp);
  CREATE INDEX IF NOT EXISTS idx_exec_session  ON tool_executions(session_id);
`;

/** How much of an argument or a result is kept. Enough to recognise, not to reconstruct. */
const SUMMARY_CHARS = 200;

/** Turns a tool call's arguments into the text stored in the log. */
export type ArgumentSanitiser = (input: Record<string, unknown>) => string;

/** How much of any one field survives. A field is recognisable, not readable. */
const FIELD_CHARS = 80;

/**
 * What a filesystem path is reduced to.
 *
 * The one place a résumé's own filename is a piece of personal data: they are
 * routinely the candidate's name, and the directory above them is the account
 * name. The digest keeps rows about the same file correlatable — which is most
 * of what a reader wants from this log — without keeping the name.
 */
function withoutPaths(text: string): string {
  // Two narrow rules rather than one loose one. "contains a slash" would redact
  // `CI/CD`, `TensorRT/INT8` and `24%/27%` out of the prose fields, which are
  // the fields a reader uses to tell two rows apart.
  const digest = (path: string): string => {
    const hash = createHash('sha256').update(path).digest('hex').slice(0, 8);
    const ext = /\.([A-Za-z0-9]{1,5})$/.exec(path)?.[1];
    return `[path ${hash}${ext ? `.${ext}` : ''}]`;
  };

  // A value that is entirely a path to a file. This is how a path actually
  // arrives — `{ path: "…" }` — rather than embedded in a sentence.
  const whole = text.trim();
  if (/^[^\s"']*[/\\][^\s"']*\.[A-Za-z0-9]{1,5}$/.test(whole)) return digest(whole);

  // A home or system path quoted inside text. Anchored on the segments that
  // actually carry a person's account name.
  return text.replace(
    /(?:~|\.{1,2})?[/\\](?:Users|home|root|var|tmp|mnt|Documents|Desktop|Downloads)[/\\][^\s"']+|[A-Za-z]:\\[^\s"']+|~[/\\][^\s"']+/g,
    (path) => digest(path),
  );
}

/**
 * The default, and deliberately the safe one.
 *
 * This used to be `JSON.stringify`, on the reasoning that a caller who cared
 * would pass something stricter. Nobody did: `App` constructed the logger with
 * one argument for months and `permission_audit.tool_args` filled with whole
 * résumé bullets, supplied facts and file paths. An optional dependency with a
 * permissive default makes safety the thing you have to remember, and the
 * comment above this class had been describing a sanitiser that was never
 * there. A caller can still pass its own; it can no longer get raw arguments by
 * saying nothing.
 */
export function recogniseOnly(input: Record<string, unknown>): string {
  const shortened = JSON.stringify(input, (_key, value: unknown) => {
    if (typeof value !== 'string') return value;
    const cleaned = withoutPaths(withoutContactDetails(value));
    return cleaned.length > FIELD_CHARS ? `${cleaned.slice(0, FIELD_CHARS)}…` : cleaned;
  });

  return (shortened ?? '').slice(0, SUMMARY_CHARS);
}

/**
 * Every decision, allowed or refused.
 *
 * Refusals alone would not answer the question the log exists for — "what did
 * this run actually do to my résumé" — so approvals are recorded too.
 *
 * Arguments pass through `sanitise` on the way in. A résumé bullet is dense
 * with personal data, and a log that stores it verbatim turns the audit trail
 * into a second copy of everything the user gave us.
 */
export class SqliteAuditLogger implements AuditLogger {
  readonly db: Database.Database;
  private readonly sanitise: ArgumentSanitiser;

  constructor(dbPath = ':memory:', sanitise: ArgumentSanitiser = recogniseOnly) {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.exec(SCHEMA);
    this.sanitise = sanitise;
  }

  log(sessionId: string, toolCall: ToolCall, decision: PermissionDecision): void {
    this.db
      .prepare(
        `INSERT INTO permission_audit
           (session_id, tool_name, tool_args, rule_id, risk_level, decision, confirmed_by, timestamp)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        sessionId,
        toolCall.name,
        this.sanitise(toolCall.input),
        decision.rule.id,
        decision.rule.level,
        decision.allowed ? 'allowed' : 'denied',
        decision.confirmedBy ?? null,
        decision.timestamp,
      );
  }

  logExecution(sessionId: string, toolCall: ToolCall, result: ToolResult): void {
    this.db
      .prepare(
        `INSERT INTO tool_executions
           (session_id, tool_name, input_summary, output_summary, success, timestamp)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        sessionId,
        toolCall.name,
        this.sanitise(toolCall.input).slice(0, SUMMARY_CHARS),
        JSON.stringify(result.data ?? result.error ?? null).slice(0, SUMMARY_CHARS),
        result.success ? 1 : 0,
        new Date().toISOString(),
      );
  }

  getSessionExecutions(sessionId: string): ExecutionRecord[] {
    const rows = this.db
      .prepare('SELECT * FROM tool_executions WHERE session_id = ? ORDER BY id')
      .all(sessionId) as Array<{
      id: number;
      session_id: string;
      tool_name: string;
      input_summary: string;
      output_summary: string;
      success: number;
      timestamp: string;
    }>;

    return rows.map((row) => ({
      id: row.id,
      sessionId: row.session_id,
      toolName: row.tool_name,
      inputSummary: row.input_summary,
      outputSummary: row.output_summary,
      // SQLite has no boolean type; the column holds 0 or 1.
      success: row.success === 1,
      timestamp: row.timestamp,
    }));
  }

  getSessionLog(sessionId: string): AuditEntry[] {
    const rows = this.db
      .prepare('SELECT * FROM permission_audit WHERE session_id = ? ORDER BY id')
      .all(sessionId) as Array<{
      id: number;
      session_id: string;
      tool_name: string;
      tool_args: string;
      rule_id: string;
      risk_level: RiskLevel;
      decision: 'allowed' | 'denied';
      confirmed_by: string | null;
      timestamp: string;
    }>;

    return rows.map((row) => ({
      id: row.id,
      sessionId: row.session_id,
      toolName: row.tool_name,
      toolArgs: row.tool_args,
      ruleId: row.rule_id,
      riskLevel: row.risk_level,
      decision: row.decision,
      ...(row.confirmed_by === null ? {} : { confirmedBy: row.confirmed_by }),
      timestamp: row.timestamp,
    }));
  }

  getStats(): { total: number; allowed: number; denied: number; confirmed: number } {
    // `SUM` over no rows is NULL, not 0, so an empty log would otherwise report
    // `{ total: 0, allowed: null }` and any arithmetic on it yields NaN.
    const row = this.db
      .prepare(
        `SELECT COUNT(*)                                            AS total,
                COALESCE(SUM(decision = 'allowed'), 0)              AS allowed,
                COALESCE(SUM(decision = 'denied'), 0)               AS denied,
                COALESCE(SUM(confirmed_by = 'user'), 0)             AS confirmed
           FROM permission_audit`,
      )
      .get() as { total: number; allowed: number; denied: number; confirmed: number };

    return row;
  }

  close(): void {
    this.db.close();
  }
}
