import type { AuditLogger, PermissionGate, RiskLevel } from '../../permission/types.js';
import type { Command } from '../types.js';

/**
 * A way in to the things that were already being recorded.
 *
 * The gate had `getRules`, the audit logger had `getSessionLog` and
 * `getSessionExecutions`, and nothing anywhere called any of them: every tool
 * call in forty-two sessions was written to a table no command could read.
 * Capability that cannot be reached is indistinguishable from capability that
 * was never built — for the person using it, and for the person maintaining
 * it, who cannot tell whether it still works.
 */
export function createAuditCommand(audit: AuditLogger, gate: PermissionGate): Command {
  return {
    name: 'audit',
    aliases: ['permissions'],
    description: 'Show what ran this session, and the rules that let it',
    args: [
      {
        name: 'what',
        description: "'rules' to list the gate's rules instead of this session's calls",
        required: false,
        type: 'string',
        choices: ['rules'],
      },
    ],
    examples: ['/audit', '/audit rules'],

    async execute(args, session) {
      if (args.positional[0] === 'rules') return { output: renderRules(gate) };

      const decisions = audit.getSessionLog(session.id);
      const executions = audit.getSessionExecutions(session.id);
      if (decisions.length === 0 && executions.length === 0) {
        return { output: 'Nothing has run in this session yet.' };
      }

      const refused = decisions.filter((d) => d.decision === 'denied');
      const failed = executions.filter((e) => !e.success);

      const lines = [
        `${executions.length} tool call(s), ${refused.length} refused, ${failed.length} failed.`,
        '',
      ];

      // Newest first: the interesting call is nearly always the last one.
      for (const execution of executions.slice(-12).reverse()) {
        lines.push(
          `  ${execution.success ? '·' : '×'} ${execution.toolName.padEnd(22)} ` +
            execution.outputSummary.slice(0, 64),
        );
      }

      for (const decision of refused.slice(-5)) {
        lines.push(`  ! refused ${decision.toolName} by rule ${decision.ruleId}`);
      }

      return { output: lines.join('\n') };
    },
  };
}

function renderRules(gate: PermissionGate): string {
  const rules = gate.getRules();
  const order: Record<RiskLevel, number> = { critical: 0, high: 1, medium: 2, low: 3 };

  return [
    `${rules.length} rule(s), most restrictive first. Anything unmatched is refused.`,
    '',
    ...[...rules]
      .sort((a, b) => order[a.level] - order[b.level])
      .map((rule) => `  ${rule.level.padEnd(9)} ${rule.action.padEnd(8)} ${rule.name}`),
  ].join('\n');
}
