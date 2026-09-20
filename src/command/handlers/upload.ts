import { access } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { ResumeSessionState } from '../../domain.js';
import { grantPath } from '../../session/granted-paths.js';
import type { Session, SessionManager } from '../../session/types.js';

/** Runs `parse_resume` against the session, leaving the document on it. */
export type ParseFile = (
  path: string,
  session: Session,
) => Promise<{ success: boolean; error?: string }>;
import type { Command, CommandResult, ParsedArgs } from '../types.js';

const SUPPORTED = ['.pdf'];

/**
 * One of only two ways a file path enters the system, the other being the CLI
 * argument. There is no `read_file` tool, so the model never names a path and
 * never sees one — the parser is called from ordinary code with a path the
 * user typed.
 */
/**
 * Names the file. Reading it is `parse_resume`, which is a different job.
 *
 * They were one step for about an hour, and the hour ended when it became clear
 * that a path arriving mid-conversation — a newer draft, a different version —
 * needs the same reading, and could not have it while the reading lived inside
 * a command the coordinator cannot call.
 */
export function createUploadCommand(sessions: SessionManager, parse: ParseFile): Command {
  return {
    name: 'upload',
    aliases: ['load', 'open'],
    description: 'Load a resume file into the session',
    args: [{ name: 'path', description: 'Path to a .pdf', required: true, type: 'string' }],
    examples: ['/upload resume.pdf', '/upload ~/Documents/resume.pdf'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const path = resolve(args.positional.join(' '));

      try {
        await access(path);
      } catch {
        return { output: `Cannot read ${path}.` };
      }

      if (!SUPPORTED.some((ext) => path.toLowerCase().endsWith(ext))) {
        return { output: `Unsupported file type. Supported: ${SUPPORTED.join(', ')}` };
      }

      // A diagnosis belongs to the document it was run on, so loading a
      // different file starts a session rather than silently invalidating one.
      const state = (session.state ?? {}) as ResumeSessionState;
      if (state.latestReport) {
        const fresh = sessions.create({ sourcePath: path, parentSessionId: session.id });
        return {
          output: `Loaded ${path} into a new session ${fresh.id.slice(0, 8)}; the previous diagnosis is in /history.`,
          action: 'new_session',
          data: fresh,
        };
      }

      // Typed at the prompt: the candidate naming a file as plainly as it gets.
      grantPath(path, session);
      session.sourcePath = path;
      sessions.save(session);

      // Chained here rather than merged into this command: uploading is
      // choosing a file and parsing is reading one, and only the second is
      // worth doing again when a different path turns up in conversation.
      const read = await parse(path, session);
      if (!read.success) return { output: read.error ?? `Could not read ${path}.` };
      sessions.save(session);

      const entries = (session.state as ResumeSessionState).resume?.sections.flatMap(
        (section) => section.entries,
      );
      return {
        output:
          entries && entries.length > 0
            ? `Loaded ${path} — ${entries.length} entries. Say what you want looked at.`
            : `Loaded ${path}, but found no experience or project entries — check the section headings.`,
        data: { path },
      };
    },
  };
}

