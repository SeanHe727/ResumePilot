import type { Session } from '../session/types.js';

export interface CommandArg {
  name: string;
  description: string;
  required: boolean;
  type: 'string' | 'number' | 'boolean';
  choices?: readonly string[];
}

export interface ParsedArgs {
  positional: string[];
  flags: Record<string, string | boolean>;
}

export interface CommandResult {
  output: string;
  action?: 'continue' | 'exit' | 'new_session';
  data?: unknown;
}

export interface Command {
  readonly name: string;
  readonly aliases: readonly string[];
  readonly description: string;
  readonly args: readonly CommandArg[];
  readonly examples: readonly string[];
  execute(args: ParsedArgs, session: Session): Promise<CommandResult>;
}

export interface CommandParser {
  register(command: Command): void;
  isCommand(input: string): boolean;
  parse(input: string): { command: Command; args: ParsedArgs } | null;
  execute(input: string, session: Session): Promise<CommandResult>;
  listCommands(): Array<{ name: string; aliases: readonly string[]; description: string }>;
}

/**
 * Planned command surface. Commands are intercepted before the Agent Loop, so
 * none of these ever reach the model — that is the whole point of having them.
 */
export const COMMAND_MANIFEST = [
  ['upload', 'Load a resume file into the session'],
  ['jd', 'Attach a job description to diagnose against'],
  ['diagnose', 'Run the full diagnosis on the loaded resume'],
  ['status', 'Show progress, context usage and spend'],
  ['detail', 'Show the full diagnosis for one bullet'],
  ['rewrite', 'Show or regenerate the rewrite for one bullet'],
  ['skip', 'Exclude a bullet from diagnosis'],
  ['compare', 'Compare one bullet against knowledge base exemplars'],
  ['report', 'Render the full report'],
  ['diff', 'Compare this resume version against an earlier session'],
  ['grill', 'Generate interviewer follow-up questions from the resume'],
  ['history', 'List past sessions'],
  ['resume', 'Continue an interrupted session'],
  ['export', 'Write the report to md or json'],
  ['budget', 'Show remaining token and cost budget'],
  ['config', 'Show or change session configuration'],
  ['hooks', 'List hooks and their enabled state'],
  ['reset', 'Clear the current session'],
  ['help', 'Show commands'],
] as const;
