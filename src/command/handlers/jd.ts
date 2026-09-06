import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { JobDescription } from '../../domain.js';
import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

/**
 * Attaches the posting the resume is being sent to.
 *
 * Keywords are left empty here. Splitting a posting into requirements is a
 * judgement — "Go" and "Golang" are one requirement, "nice to have" is not the
 * same as "required" — and the JD agent makes it with the whole text in front
 * of it. A regex would make it worse and hide that it had.
 */
export function createJdCommand(sessions: SessionManager): Command {
  return {
    name: 'jd',
    aliases: ['job'],
    description: 'Attach a job description to diagnose against',
    args: [
      { name: 'path', description: 'Path to the job description text', required: false, type: 'string' },
    ],
    examples: ['/jd posting.txt', '/jd'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const raw = args.positional.join(' ').trim();

      if (!raw) {
        const current = session.state.jd as JobDescription | undefined;
        return {
          output: current
            ? `Attached: ${current.sourcePath ?? 'pasted text'} (${current.rawText.length} chars)`
            : 'No job description attached. /jd <file> to add one.',
        };
      }

      const path = resolve(raw);
      let text: string;
      try {
        text = await readFile(path, 'utf8');
      } catch {
        return { output: `Cannot read ${path}.` };
      }

      if (text.trim().length < 50) {
        return { output: `${path} looks too short to be a job description.` };
      }

      const jd: JobDescription = {
        sourcePath: path,
        rawText: text.trim(),
        requiredKeywords: [],
        preferredKeywords: [],
      };
      sessions.updateState(session.id, { jd });

      return {
        output: `Attached ${path}. The next /diagnose will score coverage against it.`,
        data: jd,
      };
    },
  };
}
