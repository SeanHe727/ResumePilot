import type { Command, CommandResult, ParsedArgs } from '../types.js';
import type { DefaultCommandParser } from '../parser.js';

export function createHelpCommand(parser: DefaultCommandParser): Command {
  return {
    name: 'help',
    aliases: ['?', 'commands'],
    description: 'Show commands, or the detail of one',
    args: [{ name: 'command', description: 'Command to explain', required: false, type: 'string' }],
    examples: ['/help', '/help export'],

    async execute(args: ParsedArgs): Promise<CommandResult> {
      const wanted = args.positional[0]?.replace(/^\//, '');

      if (wanted) {
        const command = parser.resolve(wanted);
        if (!command) return { output: `No command called ${wanted}. Try /help.` };

        const lines = [`/${command.name}  ${command.description}`];
        if (command.aliases.length) lines.push(`  aliases: ${command.aliases.map((a) => `/${a}`).join(', ')}`);
        for (const arg of command.args) {
          lines.push(`  ${arg.name}${arg.required ? '' : ' (optional)'}: ${arg.description}`);
        }
        lines.push('', ...command.examples.map((e) => `  ${e}`));
        return { output: lines.join('\n') };
      }

      const commands = parser.listCommands();
      const width = Math.max(...commands.map((c) => c.name.length)) + 2;
      return {
        output: commands
          .map((c) => `  /${c.name.padEnd(width)}${c.description}`)
          .join('\n'),
      };
    },
  };
}
