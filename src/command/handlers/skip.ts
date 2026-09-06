import type { ResumeSessionState } from '../../domain.js';
import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * Excludes one entry from the diagnosis.
 *
 * Numbered by position as the report prints them, because that is what the
 * user is looking at. The id is what gets stored, since a re-parse of a
 * revised resume can renumber but the ids are derived from section and index.
 */
export function createSkipCommand(sessions: SessionManager): Command {
  return {
    name: 'skip',
    aliases: [],
    description: 'Exclude an entry from the diagnosis',
    args: [{ name: 'n', description: 'Entry number as shown in the report', required: false, type: 'number' }],
    examples: ['/skip', '/skip 3'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const state = session.state as ResumeSessionState;
      const entries = state.resume?.sections.flatMap((s) => s.entries) ?? [];

      if (entries.length === 0) return { output: 'No resume loaded yet. Try /upload.' };

      const raw = args.positional[0];
      const index = raw === undefined ? session.progress.current - 1 : Number(raw) - 1;

      if (!Number.isInteger(index) || index < 0 || index >= entries.length) {
        return { output: `No entry ${raw ?? index + 1}. Range: 1-${entries.length}.` };
      }

      const entry = entries[index]!;
      const skipped = new Set(state.skipped ?? []);
      if (skipped.has(entry.id)) return { output: `Entry ${index + 1} is already skipped.` };

      skipped.add(entry.id);
      sessions.updateState(session.id, { skipped: [...skipped] });

      const label = [entry.organization, entry.title].filter(Boolean).join(' — ') || entry.id;
      return { output: `Skipped ${index + 1}: ${label}` };
    },
  };
}
