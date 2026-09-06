import Database from 'better-sqlite3';

import type { ToolCall } from '../types.js';
import type { AuditEntry, AuditLogger, PermissionDecision, RiskLevel } from './types.js';

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

  CREATE INDEX IF NOT EXISTS idx_audit_session ON permission_audit(session_id);
  CREATE INDEX IF NOT EXISTS idx_audit_time    ON permission_audit(timestamp);
`;

/** Turns a tool call's arguments into the text stored in the log. */
export type ArgumentSanitiser = (input: Record<string, unknown>) => string;

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

  constructor(dbPath = ':memory:', sanitise?: ArgumentSanitiser) {
    this.db = new Database(dbPath);
    this.db.pragma('journal_mode = WAL');
    this.db.exec(SCHEMA);
    this.sanitise = sanitise ?? ((input) => JSON.stringify(input));
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
