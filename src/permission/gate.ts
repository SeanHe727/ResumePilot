import type { ToolCall } from '../types.js';
import { DEFAULT_DENY_RULE, DEFAULT_RULES } from './rules.js';
import type {
  AuditLogger,
  PermissionConfirm,
  PermissionDecision,
  PermissionGate,
  PermissionRule,
  RuleMatcher,
} from './types.js';

export interface GateOptions {
  rules?: readonly PermissionRule[];
  confirm?: PermissionConfirm;
  audit?: AuditLogger;
}

/**
 * The one place a tool call can be stopped.
 *
 * Rules are matched in order and the first hit wins, so `addRule` puts new
 * rules at the front: a session-scoped override has to beat the defaults.
 */
export class DefaultPermissionGate implements PermissionGate {
  private rules: PermissionRule[];
  private readonly confirm: PermissionConfirm | undefined;
  private readonly audit: AuditLogger | undefined;

  /** Approvals the user asked us to remember, keyed by rule and target. */
  private readonly approvals = new Map<string, boolean>();

  constructor(options: GateOptions = {}) {
    // Copied, not aliased. `addRule` mutates this array, and sharing it with
    // `DEFAULT_RULES` would let one gate's override leak into every other gate
    // in the process — including ones built later, in other tests.
    this.rules = [...(options.rules ?? DEFAULT_RULES)];
    this.confirm = options.confirm;
    this.audit = options.audit;
  }

  async checkTool(toolCall: ToolCall, sessionId: string): Promise<PermissionDecision> {
    const rule = this.rules.find((r) => matches(r.match, toolCall)) ?? DEFAULT_DENY_RULE;
    const decision = await this.decide(rule, toolCall.name, describe(toolCall));

    this.audit?.log(sessionId, toolCall, decision);
    return decision;
  }

  /**
   * The entry point for the rules that match on `operation` rather than a tool.
   *
   * Some things worth gating are not tool calls — writing to long-term memory
   * happens inside a trigger, and an outbound request can originate anywhere.
   * Without this, those rules match nothing and never fire.
   */
  async checkOperation(category: string, sessionId: string): Promise<PermissionDecision> {
    const rule =
      this.rules.find((r) => r.match.type === 'operation' && r.match.category === category) ??
      DEFAULT_DENY_RULE;
    const decision = await this.decide(rule, category, `Operation: ${category}`);

    this.audit?.log(sessionId, { id: category, name: category, input: {} }, decision);
    return decision;
  }

  addRule(rule: PermissionRule): void {
    this.rules.unshift(rule);
  }

  getRules(): readonly PermissionRule[] {
    return this.rules;
  }

  clearApprovalCache(): void {
    this.approvals.clear();
  }

  private async decide(
    rule: PermissionRule,
    target: string,
    details: string,
  ): Promise<PermissionDecision> {
    const timestamp = new Date().toISOString();

    if (rule.action === 'allow') return { allowed: true, rule, confirmedBy: 'rule', timestamp };
    if (rule.action === 'deny') return { allowed: false, rule, timestamp };

    const key = `${rule.id}:${target}`;
    if (rule.rememberApproval && this.approvals.has(key)) {
      return { allowed: this.approvals.get(key)!, rule, confirmedBy: 'remembered', timestamp };
    }

    // Nothing to ask with. Refusing beats proceeding: a gate that opens when
    // its prompt is unavailable is not a gate.
    if (!this.confirm) return { allowed: false, rule, timestamp };

    const result = await this.confirm.ask({
      toolName: target,
      reason: rule.reason,
      level: rule.level,
      details,
    });
    const allowed = result === 'approved';

    if (rule.rememberApproval) this.approvals.set(key, allowed);

    return { allowed, rule, confirmedBy: 'user', timestamp };
  }
}

function matches(matcher: RuleMatcher, toolCall: ToolCall): boolean {
  switch (matcher.type) {
    case 'tool_name':
      return test(matcher.pattern, toolCall.name);

    case 'tool_arg':
      // Both conditions, not `(name && isString) ? ... : ...`. Written that
      // way the ternary swallows the name check, and a rule written for one
      // tool starts matching every other tool's arguments.
      if (toolCall.name !== matcher.tool) return false;
      return test(matcher.pattern, String(toolCall.input[matcher.arg] ?? ''));

    case 'operation':
      // Reached only through `checkOperation`; a tool call never carries one.
      return false;
  }
}

function test(pattern: string | RegExp, value: string): boolean {
  // An empty string pattern matches nothing — it is the placeholder on the
  // synthesised deny rule, not a wildcard.
  if (typeof pattern === 'string') return pattern !== '' && value === pattern;
  return pattern.test(value);
}

function describe(toolCall: ToolCall): string {
  const args = Object.entries(toolCall.input)
    .map(([k, v]) => `  ${k}: ${String(v).slice(0, 100)}`)
    .join('\n');

  return `Tool: ${toolCall.name}\nArguments:\n${args || '  (none)'}`;
}
