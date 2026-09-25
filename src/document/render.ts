import type { ResumeDocument, ResumeEntry, ResumeSection } from '../domain.js';
import { withoutContactDetails } from './vocabulary.js';

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
 *
 * It is also the boundary where a phone number and an email stop. Dropping the
 * section a classifier called `contact` was the whole guard before, and a
 * guard that a classification can switch off is not one: an address under a
 * heading that says `Profile` is filed as a summary and reads out with
 * everything else. Nothing downstream judges either, so neither leaves.
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
  return withoutContactDetails(entryBody(entry));
}

function entryBody(entry: ResumeEntry): string {
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
        ...section.entries.map(entryBody),
        ...(sectionBody(section, resume.rawText).length > 0
          ? [sectionBody(section, resume.rawText).join('\n')]
          : []),
      ].join('\n\n');
      return `# ${heading}\n\n${body}`;
    })
    .join('\n\n');

  return `<resume_content>\n${withoutContactDetails(body)}\n</resume_content>`;
}

/**
 * A section's own lines, in the order the page had them, each addressable.
 *
 * They were rendered as two blocks — every prose line, then every bullet — so a
 * projects section whose titles and bullets alternate came out as two titles
 * followed by six bullets, and nothing could say which bullets belonged to
 * which project. That is the relationship a reader needs most when the parse
 * failed to build entries, which is the only time these lines exist at all.
 *
 * The order is recoverable because the bullets carry spans, which came from the
 * visual rows: `indexOf` places the prose lines among them. A duplicate line
 * resolves to its first occurrence, which changes nothing about the ordering.
 *
 * Ids go on the bullets for the same reason they go on an entry's: a reader
 * that cannot name a line cannot say two of them repeat each other.
 */
function sectionBody(section: ResumeSection, rawText: string): string[] {
  const placed = [
    ...(section.bullets ?? []).map((bullet) => ({
      at: bullet.span.start,
      text: `- [${bullet.id}] ${bullet.text}`,
    })),
    ...lines(section).map((line) => ({
      at: rawText.indexOf(line, section.span.start),
      text: line,
    })),
  ];

  return placed.sort((a, b) => a.at - b.at).map((line) => line.text);
}

/**
 * Every word a section holds, at whatever depth it holds it.
 *
 * One place that knows the shape of a section, so a check asking whether a
 * resume contains something cannot miss a field. The contact check reached
 * headers and prose and section bullets and not an entry's bullets, which is
 * the kind of gap that opens whenever a new field is added and the walks are
 * written out by hand in four places.
 */
export function sectionText(section: ResumeSection): string[] {
  return [
    ...(section.infoLines ?? section.looseLines),
    ...(section.bullets ?? []).map((bullet) => bullet.text),
    ...section.entries.flatMap((entry) => [
      ...entry.headerLines,
      ...(entry.infoLines ?? []),
      ...entry.bullets.map((bullet) => bullet.text),
    ]),
  ];
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
