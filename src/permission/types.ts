import type { ToolCall } from '../types.js';

export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type PermissionAction = 'allow' | 'confirm' | 'deny';
export type ConfirmResult = 'approved' | 'denied' | 'timeout';

export type RuleMatcher =
  | { type: 'tool_name'; pattern: string | RegExp }
  | { type: 'tool_arg'; tool: string; arg: string; pattern: string | RegExp }
  | { type: 'operation'; category: string };

export interface PermissionRule {
  id: string;
  name: string;
  match: RuleMatcher;
  level: RiskLevel;
  action: PermissionAction;
  /** Shown to the user verbatim when asking for confirmation. */
  reason: string;
  /** Whether an approval carries over to later calls in the same session. */
  rememberApproval?: boolean;
}

export interface PermissionDecision {
  allowed: boolean;
  rule: PermissionRule;
  confirmedBy?: 'rule' | 'user' | 'remembered';
  timestamp: string;
}

export interface PermissionGate {
  /** No matching rule means deny — the default is closed, not open. */
  checkTool(toolCall: ToolCall, sessionId: string): Promise<PermissionDecision>;
  /**
   * For the rules that gate something other than a tool call — a memory write,
   * an outbound request. Without an entry point of its own, an `operation`
   * matcher can never fire.
   */
  checkOperation(category: string, sessionId: string): Promise<PermissionDecision>;
  addRule(rule: PermissionRule): void;
  getRules(): readonly PermissionRule[];
  clearApprovalCache(): void;
}

export interface ConfirmRequest {
  toolName: string;
  reason: string;
  level: RiskLevel;
  details: string;
}

export interface PermissionConfirm {
  ask(request: ConfirmRequest): Promise<ConfirmResult>;
}

// ---------------------------------------------------------------------------
// Audit
// ---------------------------------------------------------------------------

export interface AuditEntry {
  id: number;
  sessionId: string;
  toolName: string;
  /** Redacted before storage — the audit log is not an exfiltration path. */
  toolArgs: string;
  ruleId: string;
  riskLevel: RiskLevel;
  decision: 'allowed' | 'denied';
  confirmedBy?: string;
  timestamp: string;
}

export interface AuditLogger {
  log(sessionId: string, toolCall: ToolCall, decision: PermissionDecision): void;
  getSessionLog(sessionId: string): AuditEntry[];
  getStats(): { total: number; allowed: number; denied: number; confirmed: number };
}
