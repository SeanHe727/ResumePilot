import type { Session } from '../session/types.js';
import type { Command, CommandParser, CommandResult, ParsedArgs } from './types.js';

/**
 * A command name: letters, digits and dashes.
 *
 * The check matters more here than it would elsewhere. The reference project
 * treated any input starting with `/` as a command, and its inputs were
 * interview transcripts. Ours are file paths — `/Users/sean/resume.pdf` starts
 * with a slash and is not a command, and answering "unknown command" to a
 * pasted path would be the first thing most users hit.
 */
const COMMAND_NAME = /^[a-z0-9][a-z0-9-]*$/i;

/**
 * The deterministic channel.
 *
 * Natural language is ambiguous in exactly the places that matter: "start
 * over" could mean reset this session or open a new one, "skip" could mean
 * this entry or this phase. A command has one meaning, costs no tokens, and
 * never reaches the model.
 *
 * Commands are not permission-gated. The gate exists to check what the model
 * decided to do; a command is what the user decided to do, and typing it is
 * the authorisation.
 */
export class DefaultCommandParser implements CommandParser {
  private readonly commands = new Map<string, Command>();
  private readonly aliases = new Map<string, string>();

  register(command: Command): void {
    if (this.commands.has(command.name)) {
      throw new Error(`command "${command.name}" is already registered`);
    }
    this.commands.set(command.name, command);

    for (const alias of command.aliases) {
      // Checked against both maps: an alias that shadows a real command name
      // would make that command unreachable, silently.
      if (this.commands.has(alias) || this.aliases.has(alias)) {
        throw new Error(`alias "${alias}" of "${command.name}" collides with an existing command`);
      }
      this.aliases.set(alias, command.name);
    }
  }

  isCommand(input: string): boolean {
    const trimmed = input.trimStart();
    if (!trimmed.startsWith('/')) return false;

    const name = trimmed.slice(1).split(/\s+/)[0] ?? '';
    return COMMAND_NAME.test(name);
  }

  parse(input: string): { command: Command; args: ParsedArgs } | null {
    if (!this.isCommand(input)) return null;

    const parts = input.trimStart().slice(1).split(/\s+/).filter(Boolean);
    const name = (parts[0] ?? '').toLowerCase();
    const command = this.commands.get(this.aliases.get(name) ?? name);
    if (!command) return null;

    return { command, args: parseArgs(parts.slice(1)) };
  }

  async execute(input: string, session: Session): Promise<CommandResult> {
    const parsed = this.parse(input);
    if (!parsed) {
      const name = input.trimStart().split(/\s+/)[0] ?? '';
      return { output: `Unknown command ${name}. Try /help.` };
    }

    const missing = parsed.command.args.find(
      (arg, index) => arg.required && parsed.args.positional[index] === undefined,
    );
    if (missing) {
      return {
        output:
          `/${parsed.command.name} needs ${missing.name}: ${missing.description}\n` +
          `  ${parsed.command.examples.join('\n  ')}`,
      };
    }

    try {
      return await parsed.command.execute(parsed.args, session);
    } catch (err) {
      // A failing command must not take the session down: the user is most
      // likely to reach for one when something has already gone wrong.
      return { output: `/${parsed.command.name} failed: ${describe(err)}` };
    }
  }

  listCommands(): Array<{ name: string; aliases: readonly string[]; description: string }> {
    return [...this.commands.values()].map((c) => ({
      name: c.name,
      aliases: c.aliases,
      description: c.description,
    }));
  }

  resolve(name: string): Command | null {
    return this.commands.get(this.aliases.get(name) ?? name) ?? null;
  }
}

/** `--flag value` takes the next token; `--flag` alone is a boolean. */
function parseArgs(parts: string[]): ParsedArgs {
  const positional: string[] = [];
  const flags: Record<string, string | boolean> = {};

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]!;
    if (!part.startsWith('--')) {
      positional.push(part);
      continue;
    }

    const key = part.slice(2);
    const next = parts[i + 1];
    if (next !== undefined && !next.startsWith('--')) {
      flags[key] = next;
      i += 1;
    } else {
      flags[key] = true;
    }
  }

  return { positional, flags };
}

function describe(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
}
