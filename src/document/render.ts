import type { ResumeDocument, ResumeEntry, ResumeSection } from '../domain.js';

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
  // What the entry says about itself, between what it is called and what it
  // claims. A repository link, a line of technologies, a sentence describing
  // the work: the parse keeps these apart from the header on purpose, and
  // leaving them out here is the one place that separation loses a reader
  // something instead of gaining them clarity.
  const info = (entry.infoLines ?? []).map((line) => `  ${line}`).join('\n');
  // The parsed dates, in front, because the parser already found them. Left in
  // the raw header they sit at the end of a long string of employer, title,
  // team and location, and a reader asked whether two entries are in order has
  // to extract them again before it can compare — which it did correctly once
  // and wrongly the next time, on the same document.
  const dates = entry.dateRange ? `(${entry.dateRange}) ` : '';
  const header = `[${entry.id}] ${dates}${entry.headerLines.join(' | ')}`;
  // Said rather than left to be inferred from the absence of lines below. A
  // coordinator reading a whole résumé dispatched a review for every entry and
  // got four refusals back, having had the answer in front of it the whole
  // time. Only where there is nothing else either: an entry carrying a
  // description and no bullets has plenty for a reader to go on, and telling
  // them otherwise while printing it above is a contradiction in one message.
  const body = [info, bullets].filter(Boolean).join('\n');
  return body ? `${header}\n${body}` : `${header}\n  (no bullets — nothing for a line reader to score)`;
}

/**
 * The whole document, minus the contact block.
 *
 * Nothing downstream judges a phone number or an email, and no career arc turns
 * on either — so they do not leave the machine.
 */
export function renderResume(resume: ResumeDocument): string {
  const body = resume.sections
    .filter((section) => section.kind !== 'contact')
    .filter((section) => section.entries.length > 0 || lines(section).length > 0 || (section.bullets ?? []).length > 0)
    .map((section) => {
      const heading = section.heading.trim() || section.kind.toUpperCase();
      // Sections like Skills and Summary hold bare lines rather than entries.
      // Dropping them — which this did, while the coordinator's own copy of
      // this function kept them — meant the reader comparing a resume against
      // a posting could not see the skills list it was matching against.
      const body = [
        ...section.entries.map(renderEntry),
        ...(lines(section).length > 0 ? [lines(section).join('\n')] : []),
        ...(section.bullets ?? []).map((bullet) => `- ${bullet.text}`),
      ].join('\n\n');
      return `# ${heading}\n\n${body}`;
    })
    .join('\n\n');

  return `<resume_content>\n${body}\n</resume_content>`;
}

/**
 * A section's own prose.
 *
 * `infoLines` is what a new parse writes; `looseLines` is the same thing under
 * the name a session saved before the rename would have used, and reading only
 * the new one would render those sessions with their prose missing.
 */
function lines(section: ResumeSection): string[] {
  return section.infoLines ?? section.looseLines;
}
