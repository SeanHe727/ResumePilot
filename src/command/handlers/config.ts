import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

const NUMERIC = new Set(['maxCostUsd']);
const SETTABLE = new Set(['model', 'effort', 'maxCostUsd', 'preferSkills']);

export function createConfigCommand(sessions: SessionManager): Command {
  return {
    name: 'config',
    aliases: [],
    description: 'Show session configuration, or change one setting',
    args: [
      { name: 'key', description: 'Setting to change', required: false, type: 'string' },
      { name: 'value', description: 'New value', required: false, type: 'string' },
    ],
    examples: ['/config', '/config maxCostUsd 5'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const [key, value] = args.positional;

      if (key === undefined) {
        return {
          output: Object.entries(session.config)
            .map(([k, v]) => `  ${k.padEnd(14)}${String(v)}`)
            .join('\n'),
        };
      }

      if (!SETTABLE.has(key)) {
        return { output: `Cannot set ${key}. Settable: ${[...SETTABLE].join(', ')}` };
      }
      if (value === undefined) return { output: `/config ${key} needs a value.` };

      let parsed: string | number | boolean = value;
      if (NUMERIC.has(key)) {
        const asNumber = Number(value);
        // Rejected rather than coerced: `Number('cheap')` is NaN, and a NaN
        // budget compares false against every limit, so nothing would stop.
        if (!Number.isFinite(asNumber)) return { output: `${key} must be a number, got "${value}".` };
        parsed = asNumber;
      } else if (key === 'preferSkills') {
        parsed = value === 'true';
      }

      session.config = { ...session.config, [key]: parsed };
      sessions.save(session);

      return { output: `${key} = ${String(parsed)}` };
    },
  };
}
