import { describe, expect, it } from 'vitest';

import type { ToolCall } from '../../src/types.js';
import {
  DEFAULT_RULES,
  DefaultPermissionGate,
  DenyAllConfirm,
  SqliteAuditLogger,
  type ConfirmRequest,
  type ConfirmResult,
  type PermissionConfirm,
  type PermissionRule,
} from '../../src/permission/index.js';

function call(name: string, input: Record<string, unknown> = {}): ToolCall {
  return { id: `c-${name}`, name, input };
}

function scriptedConfirm(...answers: ConfirmResult[]) {
  const seen: ConfirmRequest[] = [];
  const confirm: PermissionConfirm = {
    async ask(request) {
      seen.push(request);
      return answers.shift() ?? 'denied';
    },
  };
  return { confirm, seen };
}

describe('DefaultPermissionGate', () => {
  it('refuses a tool no rule mentions', async () => {
    // Adding a tool without adding a rule has to fail closed, or the gate
    // protects only the operations someone remembered to think about.
    const gate = new DefaultPermissionGate();
    const decision = await gate.checkTool(call('delete_everything'), 's1');

    expect(decision.allowed).toBe(false);
    expect(decision.rule.id).toBe('default-deny');
  });

  it('allows the read-only and compute-only tools outright', async () => {
    const gate = new DefaultPermissionGate();

    for (const name of ['analyze_format', 'query_knowledge_base', 'generate_report']) {
      const decision = await gate.checkTool(call(name), 's1');
      expect(decision.allowed, name).toBe(true);
      expect(decision.confirmedBy).toBe('rule');
    }
  });

  it('never lets a critical rule reach a prompt', async () => {
    const { confirm, seen } = scriptedConfirm('approved');
    const gate = new DefaultPermissionGate({ confirm });
    const decision = await gate.checkOperation('network_unknown', 's1');

    expect(decision.allowed).toBe(false);
    expect(seen).toHaveLength(0);
  });

  it('fires operation rules, which no tool call can match', async () => {
    const { confirm, seen } = scriptedConfirm('approved');
    const gate = new DefaultPermissionGate({ confirm });

    expect((await gate.checkOperation('memory_write', 's1')).allowed).toBe(true);
    expect(seen[0]?.reason).toMatch(/survives this session/);
    // The same category as a tool name still matches nothing.
    expect((await gate.checkTool(call('memory_write'), 's1')).rule.id).toBe('default-deny');
  });

  it('asks again for a rule that declines to be remembered', async () => {
    const { confirm, seen } = scriptedConfirm('approved', 'approved');
    const gate = new DefaultPermissionGate({ confirm });

    await gate.checkOperation('memory_write', 's1');
    await gate.checkOperation('memory_write', 's1');

    expect(seen).toHaveLength(2);
  });

  it('remembers an approval when the rule allows it', async () => {
    const { confirm, seen } = scriptedConfirm('approved');
    const rule: PermissionRule = {
      id: 'confirm-thing',
      name: 'Thing',
      match: { type: 'tool_name', pattern: 'thing' },
      level: 'medium',
      action: 'confirm',
      reason: 'because',
      rememberApproval: true,
    };
    const gate = new DefaultPermissionGate({ rules: [rule], confirm });

    expect((await gate.checkTool(call('thing'), 's1')).confirmedBy).toBe('user');
    expect((await gate.checkTool(call('thing'), 's1')).confirmedBy).toBe('remembered');
    expect(seen).toHaveLength(1);

    gate.clearApprovalCache();
    await gate.checkTool(call('thing'), 's1');
    expect(seen).toHaveLength(2);
  });

  it('refuses rather than proceeds when there is nobody to ask', async () => {
    const gate = new DefaultPermissionGate();

    expect((await gate.checkOperation('memory_write', 's1')).allowed).toBe(false);
  });

  it('treats a refusal at the prompt as a refusal', async () => {
    const gate = new DefaultPermissionGate({ confirm: new DenyAllConfirm() });

    expect((await gate.checkOperation('memory_write', 's1')).allowed).toBe(false);
  });

  it('keeps a tool_arg rule from matching a different tool', async () => {
    // `name === tool && typeof pattern === 'string' ? ... : ...` binds as
    // `(A && B) ? C : D`, so a regex rule written for one tool falls into the
    // regex branch for every other tool and matches on the argument alone.
    const rule: PermissionRule = {
      id: 'allow-safe-path',
      name: 'Safe path',
      match: { type: 'tool_arg', tool: 'analyze_entry', arg: 'path', pattern: /^safe/ },
      level: 'low',
      action: 'allow',
      reason: 'known-good path',
    };
    const gate = new DefaultPermissionGate({ rules: [rule] });

    expect((await gate.checkTool(call('analyze_entry', { path: 'safe/x' }), 's1')).allowed).toBe(true);
    expect((await gate.checkTool(call('exfiltrate', { path: 'safe/x' }), 's1')).allowed).toBe(false);
  });

  it('puts an added rule first without touching the shared defaults', async () => {
    // `this.rules = rules ?? DEFAULT_RULES` aliases the module-level array, so
    // an unshift in one gate would rewrite the defaults for every other.
    const before = DEFAULT_RULES.length;
    const gate = new DefaultPermissionGate();
    gate.addRule({
      id: 'deny-format',
      name: 'No format analysis',
      match: { type: 'tool_name', pattern: 'analyze_format' },
      level: 'high',
      action: 'deny',
      reason: 'overridden for this session',
    });

    expect((await gate.checkTool(call('analyze_format'), 's1')).allowed).toBe(false);
    expect(DEFAULT_RULES).toHaveLength(before);
    expect((await new DefaultPermissionGate().checkTool(call('analyze_format'), 's1')).allowed).toBe(
      true,
    );
  });
});

describe('SqliteAuditLogger', () => {
  it('records approvals as well as refusals', async () => {
    const audit = new SqliteAuditLogger();
    const gate = new DefaultPermissionGate({ audit });

    await gate.checkTool(call('analyze_format'), 's1');
    await gate.checkTool(call('delete_everything'), 's1');

    const log = audit.getSessionLog('s1');
    expect(log.map((e) => e.decision)).toEqual(['allowed', 'denied']);
    expect(log[1]?.ruleId).toBe('default-deny');
  });

  it('reports zeros for an empty log, not nulls', () => {
    // `SUM` over no rows is NULL, and any arithmetic on it downstream is NaN.
    expect(new SqliteAuditLogger().getStats()).toEqual({
      total: 0,
      allowed: 0,
      denied: 0,
      confirmed: 0,
    });
  });

  it('counts what happened', async () => {
    const { confirm } = scriptedConfirm('approved');
    const audit = new SqliteAuditLogger();
    const gate = new DefaultPermissionGate({ audit, confirm });

    await gate.checkTool(call('analyze_format'), 's1');
    await gate.checkTool(call('unknown'), 's1');
    await gate.checkOperation('memory_write', 's1');

    expect(audit.getStats()).toEqual({ total: 3, allowed: 2, denied: 1, confirmed: 1 });
  });

  it('puts arguments through the sanitiser before they reach disk', async () => {
    const audit = new SqliteAuditLogger(':memory:', () => '[redacted]');
    const gate = new DefaultPermissionGate({ audit });

    await gate.checkTool(call('analyze_format', { text: 'sean@example.com' }), 's1');

    expect(audit.getSessionLog('s1')[0]?.toolArgs).toBe('[redacted]');
  });

  it('keeps sessions apart', async () => {
    const audit = new SqliteAuditLogger();
    const gate = new DefaultPermissionGate({ audit });

    await gate.checkTool(call('analyze_format'), 's1');
    await gate.checkTool(call('analyze_format'), 's2');

    expect(audit.getSessionLog('s1')).toHaveLength(1);
  });
});

describe('web search at the gate', () => {
  it('runs without a prompt, so a non-interactive diagnosis can use it', async () => {
    // A `confirm` rule here would be a silent deny in `pnpm diagnose`, where
    // the confirmer refuses everything — the tool would look broken rather
    // than gated. Consent to this destination is the API key: without it the
    // tool is never registered.
    const gate = new DefaultPermissionGate({ confirm: new DenyAllConfirm() });

    const decision = await gate.checkTool(call('web_search', { query: 'int8 vram' }), 's1');

    expect(decision.allowed).toBe(true);
    expect(decision.rule.id).toBe('allow-web-search');
  });

  it('still refuses a tool no rule accounts for', async () => {
    const gate = new DefaultPermissionGate({ confirm: new DenyAllConfirm() });

    const decision = await gate.checkTool(call('fetch_url', { url: 'https://example.com' }), 's1');

    expect(decision.allowed).toBe(false);
    expect(decision.rule.id).toBe('default-deny');
  });
});
