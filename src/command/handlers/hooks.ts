import type { HookPipeline } from '../../hooks/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * Governance is invisible when it works, which makes it hard to tell a hook
 * that decided nothing from one that never ran.
 */
export function createHooksCommand(pipeline: HookPipeline): Command {
  return {
    name: 'hooks',
    aliases: [],
    description: 'List hooks, or switch one on or off',
    args: [
      { name: 'action', description: 'enable or disable', required: false, type: 'string', choices: ['enable', 'disable'] },
      { name: 'name', description: 'Hook to switch', required: false, type: 'string' },
    ],
    examples: ['/hooks', '/hooks disable result-compress'],

    async execute(args: ParsedArgs): Promise<CommandResult> {
      const [action, name] = args.positional;

      if (action && name) {
        if (action !== 'enable' && action !== 'disable') {
          return { output: `Unknown action ${action}. Use enable or disable.` };
        }
        if (!pipeline.list().some((h) => h.name === name)) {
          return { output: `No hook called ${name}.` };
        }
        // permission-check is switchable like the rest. Disabling it is a
        // deliberate act the audit log records, which beats a hidden override.
        if (action === 'enable') pipeline.enable(name);
        else pipeline.disable(name);

        return { output: `${name} ${action}d.` };
      }

      return {
        output: pipeline
          .list()
          .map(
            (h) =>
              `  ${h.enabled ? 'on ' : 'off'}  ${String(h.priority).padStart(3)}  ` +
              `${h.timing.padEnd(10)}${h.name}`,
          )
          .join('\n'),
      };
    },
  };
}
