import type { ResumeDocument, ResumeEntry } from '../domain.js';

/**
 * How a parsed resume reaches a model — one shape, everywhere.
 *
 * There were three: `id: text` for the per-entry readers, `- [id] text` for the
 * coordinator, and `- text` with no id at all for the whole-document ones. The
 * last of those is why the narrative reader could see every bullet and point at
 * none of them, and the first two are two formats for one thing.
 *
 * Ids are part of the document rather than part of any one prompt. They are
 * stable across re-parses, they are how a review says which line it means, and
 * an agent that never gets them cannot say "these two repeat each other".
 */

/**
 * One entry: its own id, its header, then every bullet with the id that
 * addresses it.
 *
 * The entry id is written out rather than left to be inferred from the bullet
 * ids beneath it. It is inferable — an entry id is a bullet id without its last
 * segment — but an entry with no bullets has nothing to infer from, and a
 * degree is exactly that. A reader asked which entry it means should not have
 * to do arithmetic on strings.
 */
export function renderEntry(entry: ResumeEntry): string {
  const bullets = entry.bullets.map((bullet) => `  - [${bullet.id}] ${bullet.text}`).join('\n');
  const header = `[${entry.id}] ${entry.headerLines.join(' | ')}`;
  return bullets ? `${header}\n${bullets}` : header;
}

/**
 * The whole document, minus the contact block.
 *
 * Nothing downstream judges a phone number or an email, and no career arc turns
 * on either — so they do not leave the machine.
 */
export function renderResume(resume: ResumeDocument): string {
  const body = resume.sections
    .filter((section) => section.kind !== 'contact' && section.entries.length > 0)
    .map((section) => {
      const heading = section.heading.trim() || section.kind.toUpperCase();
      return `# ${heading}\n\n${section.entries.map(renderEntry).join('\n\n')}`;
    })
    .join('\n\n');

  return `<resume_content>\n${body}\n</resume_content>`;
}
