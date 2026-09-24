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
    // This passed for months while the default sanitiser was `JSON.stringify`,
    // which is the whole lesson: it proved the seam worked and said nothing
    // about what a caller who omitted the argument would get. The cases below
    // are about the default, because that is what production used.
    const audit = new SqliteAuditLogger(':memory:', () => '[redacted]');
    const gate = new DefaultPermissionGate({ audit });

    await gate.checkTool(call('analyze_format', { text: 'sean@example.com' }), 's1');

    expect(audit.getSessionLog('s1')[0]?.toolArgs).toBe('[redacted]');
  });

  describe('what the default keeps', () => {
    /** Constructed the way the App constructs it: one argument. */
    const logged = async (input: Record<string, unknown>): Promise<string> => {
      const audit = new SqliteAuditLogger();
      await new DefaultPermissionGate({ audit }).checkTool(call('analyze_format', input), 's1');
      return audit.getSessionLog('s1')[0]?.toolArgs ?? '';
    };

    it('keeps a contact detail out, without being asked to', async () => {
      // `App` built this logger with one argument, so every permission row from
      // every real run held whole arguments. Safety was the thing a caller had
      // to remember, and the class comment had been describing a sanitiser that
      // was not there.
      const stored = await logged({ bullet: 'Reach me at sean@example.com or +1 555 010 0100' });

      expect(stored).not.toContain('sean@example.com');
      expect(stored).not.toContain('555 010 0100');
      expect(stored).toContain('[email]');
    });

    it('replaces a résumé\u2019s own filename with a digest', async () => {
      // The one place a filename is personal data: it is routinely the
      // candidate's name, and the directory above it is their account.
      const stored = await logged({ path: '/Users/someone/Downloads/jane_doe_cv.pdf' });

      expect(stored).not.toContain('jane_doe');
      expect(stored).not.toContain('someone');
      expect(stored).toMatch(/\[path [0-9a-f]{8}\.pdf\]/);
    });

    it('gives the same file the same digest, so rows can still be compared', async () => {
      // Recognising that two rows are about one document is most of what this
      // log is for; a random placeholder would take that away.
      const one = await logged({ path: 'tests/fixtures/resume_example.pdf' });
      const two = await logged({ path: 'tests/fixtures/resume_example.pdf' });

      expect(one).toBe(two);
    });

    it('redacts a home path quoted inside prose', async () => {
      const stored = await logged({ note: 'I read /Users/someone/cv.pdf and ~/notes/draft.md' });

      expect(stored).not.toContain('someone');
      expect(stored).not.toContain('draft.md');
    });

    it('leaves a slash that is not a path alone', async () => {
      // `CI/CD`, `TensorRT/INT8`, `24%/27%`. The prose fields are what a reader
      // uses to tell two rows apart, so a loose path rule would cost more than
      // it protects.
      const stored = await logged({ goal: 'Review the CI/CD and TensorRT/INT8 claims, 24%/27%' });

      expect(stored).toContain('CI/CD');
      expect(stored).toContain('TensorRT/INT8');
      expect(stored).toContain('24%/27%');
    });

    it('keeps enough of a long field to recognise it and not enough to read it', async () => {
      const bullet = 'Reduced planted-defect localization error from 82% to 94% across four '
        + 'diagnostic agents by rebuilding the routing layer and the evaluation harness';
      const stored = await logged({ bullet });

      expect(stored).toContain('Reduced planted-defect localization');
      expect(stored).not.toContain('evaluation harness');
      expect(stored.length).toBeLessThanOrEqual(200);
    });

    it('caps the whole row, however many fields there are', async () => {
      const stored = await logged(
        Object.fromEntries(Array.from({ length: 20 }, (_, i) => [`f${i}`, 'x'.repeat(60)])),
      );

      expect(stored.length).toBeLessThanOrEqual(200);
    });
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

describe('every tool a coordinator can reach', () => {
  it('matches a rule of its own, never the fallback', async () => {
    // A rule keyed on a tool name goes quiet when that tool is renamed, and
    // says nothing about it. `review_entry` became five `review_*` tools and
    // the rule kept matching the name that no longer existed: every dispatch
    // fell through to the default deny, and a run reported "the specialists are
    // unavailable due to a tool-permission error" with nothing to point at.
    //
    // Same shape as a hook watching a tool nobody registers. Hooks declare what
    // they watch so a stale name is readable; rules cannot, so this checks the
    // other end — that nothing registered lands on the fallback.
    const { createToolRegistry } = await import('../../src/tools/index.js');
    const { DefaultPermissionGate } = await import('../../src/permission/index.js');

    const registry = createToolRegistry({ orchestrator: true } as never);
    const gate = new DefaultPermissionGate({
      audit: { log: () => {}, logExecution: () => {} } as never,
      confirm: { ask: async () => false } as never,
    });

    for (const schema of registry.getSchemas()) {
      const decision = await gate.checkTool({ id: 't', name: schema.name, input: {} }, 's');
      expect(decision.rule.id, `${schema.name} has no rule of its own`).not.toBe('default-deny');
    }
  });
});
