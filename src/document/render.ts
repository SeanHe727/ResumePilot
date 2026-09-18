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

/** One entry: its header, then every bullet with the id that addresses it. */
export function renderEntry(entry: ResumeEntry): string {
  const bullets = entry.bullets.map((bullet) => `  - [${bullet.id}] ${bullet.text}`).join('\n');
  return `${entry.headerLines.join(' | ')}\n${bullets}`;
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
