import { isAbsolute, resolve } from 'node:path';

import type { Session } from './types.js';

/**
 * Files the candidate has named, and therefore allowed to be opened.
 *
 * The coordinator holds a tool that reads a path, so a résumé pasted
 * mid-conversation can be read without starting over — and the same tool, in
 * the same hands, will read whatever path a model writes down. A model that has
 * just been handed a document full of third-party text is not the place to
 * decide which files get opened.
 *
 * Paths are resolved once, here, as they are granted. Both sides of the later
 * comparison go through the same resolution, so `~/Desktop/cv.pdf` and the
 * absolute form it expands to are one entry, and the check itself can be exact.
 * Guessing belongs on the trusted side of this: a loose match against the
 * candidate's own words, then nothing loose afterwards.
 */

/**
 * Words that could be the path of a resume.
 *
 * Generous about the directories in front — this reads what a person typed —
 * and exact about the end. Only a PDF is read now, and a grant is a standing
 * permission to open a file: handing one out for a `.docx` the parser will
 * refuse buys nothing and widens what a sentence can unlock. The suffix used
 * to be checked only on a bare filename, so `~/Documents/cv.docx` was granted
 * and `cv.docx` was not.
 *
 * A path can also end a sentence. "Here is my résumé: ~/Documents/cv.pdf." was
 * not granted, because the character after `.pdf` was a full stop rather than a
 * space — and the run that found this got a permission denial on the file the
 * user had just handed over. Clause-ending punctuation is allowed after the
 * suffix, and only where the punctuation itself ends the word: `cv.pdf.docx`
 * still matches nothing, which is the property this lookahead exists for.
 *
 * Western punctuation has to be followed by a space or the end of the text;
 * CJK punctuation does not, because a language that does not space its words
 * uses the mark itself as the boundary — `简历在 /Users/x/cv.pdf。请看` has no
 * space anywhere after the path.
 */
const PATH_LIKE =
  /(?:^|\s)((?:(?:~|\.{1,2})?\/|[\w.-]+\/)?[^\s"'`]*\.pdf)(?=$|[\s"'`]|[.,;:!?)\]}]($|\s)|[）。，、；：！？」』])/gi;

export function grantPathsIn(text: string, session: Session): void {
  const found = [...text.matchAll(PATH_LIKE)].map((m) => normalise(m[1]!));
  if (found.length === 0) return;

  const state = (session.state ?? {}) as { grantedPaths?: string[] };
  const kept = new Set([...(state.grantedPaths ?? []), ...found]);
  session.state = { ...state, grantedPaths: [...kept] };
}

/** Granted explicitly — a command is the candidate speaking directly. */
export function grantPath(path: string, session: Session): void {
  const state = (session.state ?? {}) as { grantedPaths?: string[] };
  const kept = new Set([...(state.grantedPaths ?? []), normalise(path)]);
  session.state = { ...state, grantedPaths: [...kept] };
}

export function isGranted(path: string, session: Session): boolean {
  const state = (session.state ?? {}) as { grantedPaths?: string[] };
  return (state.grantedPaths ?? []).includes(normalise(path));
}

export function grantedPaths(session: Session): string[] {
  return ((session.state ?? {}) as { grantedPaths?: string[] }).grantedPaths ?? [];
}

/**
 * One spelling per file.
 *
 * `~` expands, a relative path is taken against the working directory, and `..`
 * folds away — so the form a person types and the form a model sends land on
 * the same string. Symlinks are left alone: resolving them needs the file to
 * exist, and a path is granted before anyone has tried to open it.
 */
function normalise(path: string): string {
  const trimmed = path.trim().replace(/[.,;:)\]}]+$/, '');
  const home = process.env.HOME ?? '';
  const expanded = trimmed.startsWith('~/') && home ? `${home}/${trimmed.slice(2)}` : trimmed;
  return isAbsolute(expanded) ? resolve(expanded) : resolve(process.cwd(), expanded);
}
