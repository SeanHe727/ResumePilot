import type { ResumeDocument, SectionKind } from '../domain.js';
import { DATE_RANGE } from './vocabulary.js';

/**
 * The résumé's dates, worked out rather than read.
 *
 * The career reader was handed dates as the text on each header line and left
 * to compare them in its head. Measured on the first benchmark batch: it called
 * an experience section with the older role first "already in reverse
 * chronological order", and on another résumé found a gap in the middle while
 * missing the sixteen months straight after graduation. Order, gaps and
 * impossible ranges are arithmetic, and arithmetic is done here.
 */

/** Months since year 0, so two points subtract to a number of months. */
type Month = number;

export interface Span {
  kind: SectionKind;
  /** The line the dates were read from, as the page has it. */
  line: string;
  start: Month;
  end: Month;
  /** Still going: "Present", or an expected end that has not arrived. */
  ongoing: boolean;
  /** Where it sits in its section, top to bottom. */
  position: number;
}

export interface Timeline {
  spans: Span[];
  /** Ranges that end before they start. */
  impossible: Span[];
  /** Pairs in Experience where the older role is listed above the newer one. */
  outOfOrder: Array<{ above: Span; below: Span }>;
  /** Stretches of more than six months with no study or work listed. */
  gaps: Array<{ from: Month; to: Month; months: number; after: Span }>;
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const OPEN = /present|now|current|ongoing|至今|现在/i;

/** A point on the page, or null. A bare year is taken as its first or last month. */
function point(text: string, edge: 'start' | 'end'): Month | null {
  const year = /((?:19|20)\d{2})/.exec(text);
  if (!year) return null;
  const y = Number(year[1]);
  const named = /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i.exec(text);
  if (named) return y * 12 + MONTHS.indexOf(named[1]!.toLowerCase());
  const numeric = /(?:19|20)\d{2}\s*[.\-/年]\s*(\d{1,2})/.exec(text);
  if (numeric) return y * 12 + Number(numeric[1]) - 1;
  return y * 12 + (edge === 'start' ? 0 : 11);
}

export function label(m: Month): string {
  return `${MONTHS[m % 12]!.replace(/^./, (c) => c.toUpperCase())} ${Math.floor(m / 12)}`;
}

/** Every dated line in the sections that describe a career. */
export function readSpans(resume: ResumeDocument, now: Date = new Date()): Span[] {
  const today = now.getFullYear() * 12 + now.getMonth();
  const spans: Span[] = [];
  for (const section of resume.sections) {
    if (!['experience', 'education', 'project'].includes(section.kind)) continue;
    const lines = [
      ...section.entries.flatMap((e) => e.headerLines),
      ...(section.looseLines ?? []),
    ];
    let position = 0;
    for (const line of lines) {
      const m = DATE_RANGE.exec(line);
      if (!m) continue;
      const start = point(m[1]!, 'start');
      const endText = m[2]!;
      const open = OPEN.test(endText);
      const end = open ? today : point(endText, 'end');
      if (start === null || end === null) continue;
      spans.push({
        kind: section.kind,
        line: line.trim(),
        start,
        end,
        ongoing: open || end > today,
        position: position++,
      });
    }
  }
  return spans;
}

export function buildTimeline(resume: ResumeDocument, now: Date = new Date()): Timeline {
  const spans = readSpans(resume, now);
  const impossible = spans.filter((s) => s.end < s.start);
  const sane = spans.filter((s) => s.end >= s.start);

  // Experience reads newest first: by end date, the ongoing ones on top.
  const experience = sane.filter((s) => s.kind === 'experience').sort((a, b) => a.position - b.position);
  const outOfOrder: Timeline['outOfOrder'] = [];
  for (let i = 0; i < experience.length; i++) {
    for (let j = i + 1; j < experience.length; j++) {
      const above = experience[i]!;
      const below = experience[j]!;
      if (below.end > above.end || (below.end === above.end && below.start > above.start)) {
        outOfOrder.push({ above, below });
      }
    }
  }

  // Study and work cover time; projects are done alongside something else and
  // do not. From the first completed degree onward, anything longer than six
  // months that nothing covers is a gap a reader will ask about.
  const covering = sane.filter((s) => s.kind !== 'project').sort((a, b) => a.start - b.start);
  const firstDegreeEnd = Math.min(
    ...sane.filter((s) => s.kind === 'education' && !s.ongoing).map((s) => s.end),
  );
  const gaps: Timeline['gaps'] = [];
  if (Number.isFinite(firstDegreeEnd)) {
    let reach = firstDegreeEnd;
    let last = covering.find((s) => s.end === firstDegreeEnd)!;
    for (const s of covering) {
      if (s.end <= reach) continue;
      if (s.start > reach + 1 && s.start - reach - 1 > 6) {
        gaps.push({ from: reach, to: s.start, months: s.start - reach - 1, after: last });
      }
      if (s.end > reach) {
        reach = s.end;
        last = s;
      }
    }
  }

  return { spans, impossible, outOfOrder, gaps };
}

/** The timeline as a reader is handed it: facts, computed, to be taken as given. */
export function renderTimeline(t: Timeline): string {
  if (t.spans.length === 0) return '';
  const lines = [
    'Dates as a program computed them from the page. Take these as correct rather than re-deriving them:',
    ...t.spans.map(
      (s) => `- ${s.kind}: ${label(s.start)} to ${s.ongoing && s.end >= s.start ? 'now' : label(s.end)} — "${s.line}"`,
    ),
    t.outOfOrder.length > 0
      ? `- Experience is NOT newest-first: ${t.outOfOrder
          .map((p) => `"${p.above.line}" is listed above the more recent "${p.below.line}"`)
          .join('; ')}.`
      : '- Experience is listed newest-first.',
    ...t.gaps.map(
      (g) => `- ${g.months} months with no study or work listed, from ${label(g.from)} to ${label(g.to)} (after "${g.after.line}").`,
    ),
    ...t.impossible.map((s) => `- Impossible range, ends before it starts: "${s.line}".`),
  ];
  return lines.join('\n');
}

/** What is simply wrong, as findings: no judgement needed to say them. */
export function timelineIssues(t: Timeline): string[] {
  return [
    ...t.impossible.map((s) => `The dates on "${s.line}" end before they start.`),
    ...t.outOfOrder.map(
      (p) => `Experience is not newest-first: "${p.above.line}" is listed above the more recent "${p.below.line}".`,
    ),
  ];
}
