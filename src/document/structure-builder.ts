import type {
  Bullet,
  ResumeDocument,
  ResumeEntry,
  ResumeSection,
  SectionKind,
} from '../domain.js';
import { DATE_RANGE, isBulletLine, stripBulletMarker } from './vocabulary.js';
import type {
  ExtractionResult,
  LabelledLine,
  SectionCandidate,
  StructureBuilder,
  TextBlock,
} from './types.js';

/** Sections whose bodies are lists of positions rather than free prose. */
const ENTRY_BEARING: ReadonlySet<SectionKind> = new Set(['experience', 'project', 'education']);

/**
 * Whether a section's body should be split into entries.
 *
 * Kind alone is not enough. A heading our vocabulary cannot place ("My
 * Journey", "Publications") becomes `other`, and treating `other` as prose
 * would drop its bullets into `looseLines` where every downstream check ignores
 * them — a resume with one unrecognised heading would silently receive almost
 * no content diagnosis. The shape of the body is the reliable signal: if it
 * contains bullets, it holds entries whatever the heading says.
 */
function isEntryBearing(kind: SectionKind, blocks: TextBlock[]): boolean {
  if (ENTRY_BEARING.has(kind)) return true;
  if (kind === 'contact' || kind === 'skills' || kind === 'summary') return false;
  return blocks.some((b) => isBulletLine(b.text));
}

/** Separators people use between company and title on one line. */
const HEADER_SEPARATOR = /\s*[|｜·•‧—–]\s*|\s+[-–—]\s+/;

export class HeuristicStructureBuilder implements StructureBuilder {
  build(
    result: ExtractionResult,
    sections: SectionCandidate[],
    sourcePath: string,
    labels?: LabelledLine[],
  ): ResumeDocument {
    if (labels && labels.length === result.blocks.length) {
      return buildFromLabels(result, labels, sourcePath);
    }

    const ordered = [...sections].sort((a, b) => a.span.start - b.span.start);
    const built: ResumeSection[] = [];

    // Taken across the document, not per section. A section can be half
    // headings and half body — education usually is — and its own median then
    // lands on the heading size, so nothing in it ever reads as emphasized.
    const bodySize = medianSize(result.blocks);

    for (const [index, candidate] of ordered.entries()) {
      const from = candidate.span.start;
      const to = ordered[index + 1]?.span.start ?? Number.MAX_SAFE_INTEGER;

      // The heading line itself is not part of the section body.
      const body = result.blocks.filter(
        (b) => b.span.start > from && b.span.start < to && b.span.start !== candidate.span.start,
      );
      const headingBlock = result.blocks.find((b) => b.span.start === from);
      const bodyBlocks = candidate.heading ? body : [...(headingBlock ? [headingBlock] : []), ...body];

      const sectionId = `s${index}`;
      built.push({
        id: sectionId,
        kind: candidate.kind,
        heading: candidate.heading,
        ...(isEntryBearing(candidate.kind, bodyBlocks)
          ? { entries: buildEntries(sectionId, bodyBlocks, bodySize), looseLines: [] }
          : { entries: [], looseLines: bodyBlocks.map((b) => b.text) }),
        span: {
          start: from,
          end: bodyBlocks.at(-1)?.span.end ?? candidate.span.end,
        },
      });
    }

    const wordCount = countWords(result.rawText);

    return {
      sourcePath,
      format: result.format,
      rawText: result.rawText,
      sections: built,
      meta: {
        ...(result.pageCount !== undefined ? { pageCount: result.pageCount } : {}),
        wordCount,
        quality: result.quality,
        layoutWarnings: result.layoutWarnings,
      },
    };
  }
}

/**
 * Assembly when every line already has a role.
 *
 * Nothing is inferred here — no font sizes, no date patterns, no guessing at
 * where a bullet ended. The heuristics below exist for the same document when
 * no model was available to label it, and the two agree on the output shape so
 * everything downstream is unaware of which one ran.
 */
function buildFromLabels(
  result: ExtractionResult,
  labels: LabelledLine[],
  sourcePath: string,
): ResumeDocument {
  const sections: ResumeSection[] = [];

  // Held in one object rather than in separate bindings: the flush and open
  // helpers are closures, and TypeScript's narrowing cannot see through them —
  // it concludes the bindings are always null by the end of the loop.
  const open: { section: OpenSection | null; entry: OpenEntry | null; lastEnd: number } = {
    section: null,
    entry: null,
    lastEnd: 0,
  };

  const flushEntry = (): void => {
    const { section, entry } = open;
    if (!section || !entry) return;

    open.entry = null;
    if (entry.headerLines.length === 0 && entry.bullets.length === 0) return;

    const sectionId = sectionIdOf(sections.length);
    const id = `${sectionId}:e${section.entries.length}`;
    section.entries.push({
      id,
      sectionId,
      index: section.entries.length,
      ...parseHeader(entry.headerLines),
      headerLines: entry.headerLines,
      bullets: entry.bullets.map<Bullet>((text, i) => ({
        id: `${id}:b${i}`,
        entryId: id,
        index: i,
        text,
        span: { start: 0, end: 0 },
      })),
      span: { start: entry.start, end: open.lastEnd },
    });
  };

  const flushSection = (): void => {
    flushEntry();
    const { section } = open;
    if (!section) return;

    sections.push({
      id: sectionIdOf(sections.length),
      kind: section.kind,
      heading: section.heading,
      entries: section.entries,
      looseLines: section.looseLines,
      span: { start: section.start, end: open.lastEnd },
    });
    open.section = null;
  };

  const openSection = (kind: SectionKind, heading: string, start: number): void => {
    flushSection();
    open.section = { kind, heading, entries: [], looseLines: [], start, end: start };
  };

  for (const label of labels) {
    const block = result.blocks[label.index];
    if (!block) continue;

    // Everything before the first heading is the contact block: a name, an
    // email, a row of links, never introduced by a heading of its own.
    if (!open.section && label.role !== 'section-heading') {
      openSection('contact', '', block.span.start);
    }

    switch (label.role) {
      case 'section-heading':
        openSection(label.kind ?? 'other', block.text.trim(), block.span.start);
        break;

      case 'entry-header':
        // `startsEntry` is what separates two degrees listed one after another
        // from one degree whose header wrapped — the lines look identical.
        if (open.entry && (label.startsEntry || open.entry.bullets.length > 0)) flushEntry();
        open.entry ??= { headerLines: [], bullets: [], start: block.span.start, end: block.span.end };
        open.entry.headerLines.push(block.text.trim());
        break;

      case 'bullet':
        open.entry ??= { headerLines: [], bullets: [], start: block.span.start, end: block.span.end };
        open.entry.bullets.push(stripBulletMarker(block.text));
        break;

      case 'continuation':
        appendContinuation(open.section, open.entry, block.text.trim());
        break;

      case 'loose':
        flushEntry();
        open.section?.looseLines.push(block.text.trim());
        break;
    }

    // Tracked rather than written back through the bindings: the flush and
    // open helpers are closures, so narrowing inside the loop cannot see that
    // either one is still set.
    open.lastEnd = block.span.end;
  }

  flushSection();

  return {
    sourcePath,
    format: result.format,
    rawText: result.rawText,
    sections: sections.map((s) => ({
      ...s,
      entries: s.entries,
    })),
    meta: {
      ...(result.pageCount !== undefined ? { pageCount: result.pageCount } : {}),
      wordCount: countWords(result.rawText),
      quality: result.quality,
      layoutWarnings: result.layoutWarnings,
    },
  };
}

interface OpenSection {
  kind: SectionKind;
  heading: string;
  entries: ResumeEntry[];
  looseLines: string[];
  start: number;
  end: number;
}

interface OpenEntry {
  headerLines: string[];
  bullets: string[];
  start: number;
  end: number;
}

function sectionIdOf(index: number): string {
  return `s${index}`;
}

/** Joins onto whatever the line above was — a bullet, a header, or a loose line. */
function appendContinuation(section: OpenSection | null, entry: OpenEntry | null, text: string): void {
  if (!text) return;

  if (entry && entry.bullets.length > 0) {
    entry.bullets[entry.bullets.length - 1] += ` ${text}`;
    return;
  }
  if (entry && entry.headerLines.length > 0) {
    entry.headerLines[entry.headerLines.length - 1] += ` ${text}`;
    return;
  }
  if (section && section.looseLines.length > 0) {
    section.looseLines[section.looseLines.length - 1] += ` ${text}`;
    return;
  }
  section?.looseLines.push(text);
}

/**
 * Splits a section body into positions.
 *
 * The rule is a state machine over two line kinds: bullets always attach to the
 * entry above them, and a non-bullet line either continues the current header
 * (still collecting company/title/dates) or — once bullets have started —
 * begins the next entry.
 */
function buildEntries(sectionId: string, blocks: TextBlock[], bodySize: number): ResumeEntry[] {
  const entries: ResumeEntry[] = [];
  let current: { headerLines: string[]; bullets: string[]; start: number; end: number } | null =
    null;

  const flush = (): void => {
    if (!current) return;
    if (current.headerLines.length === 0 && current.bullets.length === 0) {
      current = null;
      return;
    }
    const id = `${sectionId}:e${entries.length}`;
    entries.push({
      id,
      sectionId,
      index: entries.length,
      ...parseHeader(current.headerLines),
      headerLines: current.headerLines,
      bullets: current.bullets.map<Bullet>((text, i) => ({
        id: `${id}:b${i}`,
        entryId: id,
        index: i,
        text,
        // Bullet-level spans are filled by the caller when the source carries
        // them; text-derived formats resolve them below.
        span: { start: 0, end: 0 },
      })),
      span: { start: current.start, end: current.end },
    });
    current = null;
  };

  for (const block of blocks) {
    if (isBulletLine(block.text)) {
      if (!current) current = { headerLines: [], bullets: [], start: block.span.start, end: 0 };
      current.bullets.push(stripBulletMarker(block.text));
      current.end = block.span.end;
      continue;
    }

    // A non-bullet line after bullets usually means the previous position is
    // finished — unless the bullet above it was cut off mid-sentence, in which
    // case this is the rest of it. PDF extraction gives one block per visual
    // line, so a bullet long enough to wrap arrives as two or three blocks and
    // only the first carries the marker. Read as new entries, a nine-bullet
    // position becomes fourteen entries whose "employer" is half a sentence.
    // A section with no bullets at all — education is the usual one — never
    // reaches the flush below, so two degrees accumulate into one entry with
    // one school's name and the other's dates. An emphasized line is where the
    // next position starts, bullets or not.
    if (current && current.headerLines.length > 0 && isEmphasized(block, bodySize)) {
      flush();
    }

    const continues = current !== null && continuesPrevious(current.bullets.at(-1));
    if (continues) {
      current!.bullets[current!.bullets.length - 1] += ` ${block.text.trim()}`;
      current!.end = block.span.end;
      continue;
    }

    if (current && current.bullets.length > 0) flush();
    if (!current) current = { headerLines: [], bullets: [], start: block.span.start, end: 0 };
    current.headerLines.push(block.text);
    current.end = block.span.end;
  }

  flush();
  return attachBulletSpans(entries, blocks);
}

/** Drawn larger or bolder than the body around it. */
function isEmphasized(block: TextBlock, bodySize: number): boolean {
  return block.bold === true || (block.fontSize ?? bodySize) > bodySize;
}

/** The size most of the document's lines are set at. */
function medianSize(blocks: TextBlock[]): number {
  const sizes = blocks
    .map((b) => b.fontSize)
    .filter((size): size is number => size !== undefined)
    .sort((a, b) => a - b);

  return sizes.length === 0 ? 0 : (sizes[Math.floor(sizes.length / 2)] ?? 0);
}

/**
 * Whether the line above was cut off rather than finished.
 *
 * Terminal punctuation is the signal: a wrapped line ends wherever the column
 * ran out — "…role responsibilities, forming a" — while a finished bullet ends
 * on a full stop. Crude, and it is the same judgement a reader makes at a
 * glance.
 */
function continuesPrevious(previousBullet: string | undefined): boolean {
  if (previousBullet === undefined) return false;
  return !/[.。!?！？:：]\s*$/.test(previousBullet);
}

/** Re-links each bullet to its source offsets so diagnoses can cite the original. */
function attachBulletSpans(entries: ResumeEntry[], blocks: TextBlock[]): ResumeEntry[] {
  const bulletBlocks = blocks.filter((b) => isBulletLine(b.text));
  let cursor = 0;

  for (const entry of entries) {
    for (const bullet of entry.bullets) {
      const block = bulletBlocks[cursor++];
      if (block) bullet.span = block.span;
    }
  }
  return entries;
}

/**
 * Pulls company, title, dates and location out of the header lines.
 *
 * Everything here is optional on purpose: header layouts vary wildly, and a
 * missed field is recoverable — `headerLines` always keeps the text verbatim,
 * so nothing is lost, and a later model-assisted pass can fill the gaps.
 */
function parseHeader(lines: string[]): Pick<
  ResumeEntry,
  'organization' | 'title' | 'dateRange' | 'location'
> {
  const out: Pick<ResumeEntry, 'organization' | 'title' | 'dateRange' | 'location'> = {};

  for (const line of lines) {
    const dates = DATE_RANGE.exec(line);
    if (dates && !out.dateRange) out.dateRange = dates[0].trim();

    // Strip the date range before splitting, so it does not land in a field.
    const withoutDates = dates ? line.replace(dates[0], '') : line;
    const parts = withoutDates
      .split(HEADER_SEPARATOR)
      .map((p) => p.trim())
      .filter(Boolean);

    // `noUncheckedIndexedAccess` makes every index access possibly undefined,
    // so each field is guarded rather than assumed present.
    const [org, title, location] = parts;
    if (org && !out.organization) out.organization = org;
    if (title && !out.title) out.title = title;
    if (location && !out.location) out.location = location;
  }

  return out;
}

/** CJK has no spaces, so words and characters are counted separately. */
export function countWords(text: string): number {
  const cjk = text.match(/[一-鿿぀-ヿ가-힯]/g)?.length ?? 0;
  const latin = text
    .replace(/[一-鿿぀-ヿ가-힯]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latin;
}
