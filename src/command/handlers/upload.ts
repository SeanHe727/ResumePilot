import { access } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { ResumeSessionState } from '../../domain.js';
import type { SessionManager } from '../../session/types.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

const SUPPORTED = ['.md', '.markdown', '.txt', '.pdf', '.docx'];

/**
 * One of only two ways a file path enters the system, the other being the CLI
 * argument. There is no `read_file` tool, so the model never names a path and
 * never sees one — the parser is called from ordinary code with a path the
 * user typed.
 */
export function createUploadCommand(sessions: SessionManager): Command {
  return {
    name: 'upload',
    aliases: ['load', 'open'],
    description: 'Load a resume file into the session',
    args: [{ name: 'path', description: 'Path to a .md, .txt, .pdf or .docx', required: true, type: 'string' }],
    examples: ['/upload resume.pdf', '/upload ~/Documents/resume.docx'],

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
      const state = session.state as ResumeSessionState;
      if (state.latestReport) {
        const fresh = sessions.create({ sourcePath: path, parentSessionId: session.id });
        return {
          output: `Loaded ${path} into a new session ${fresh.id.slice(0, 8)}; the previous diagnosis is in /history.`,
          action: 'new_session',
          data: fresh,
        };
      }

      session.sourcePath = path;
      sessions.save(session);

      return { output: `Loaded ${path}. Run /diagnose to start.`, data: { path } };
    },
  };
}
