/**
 * B4 — what a section is.
 *
 * Every signal scores on its own and the highest total wins. Not a cascade of
 * rules, because a cascade cannot say who came second or by how much, and that
 * margin is the only honest measure of how sure the answer is.
 *
 * The input is the assembled section and nothing else. No rows, no font sizes,
 * no indents — so this cannot move a bullet or open an entry however wrong it
 * thinks the shape is. That is the guarantee, and it is a type rather than a
 * promise.
 *
 * Three kinds of evidence, weighted 3 / 2 / 1:
 *
 *   the heading     what the candidate called it
 *   the shape       what the section is made of
 *   the content     what the words in it look like
 *
 * **Shape outranks the heading.** A heading is one word somebody chose; the
 * shape is the whole section. A section called `Leadership` holding three
 * dated entries with bullets under them is experience whatever it says at the
 * top, and a section called `EXPERIENCE` holding one comma-separated line of
 * languages is not. The weights are what make that true: a heading match is
 * worth more than any single shape signal, and less than two of them.
 */
import type { ResumeSection, SectionClassification, SectionKind } from '../domain.js';
import { DATE_RANGE, SECTION_PATTERNS } from './vocabulary.js';

const HEADING = 3;
const SHAPE = 2;
const CONTENT = 1;

/** A line that names a group and then lists it: `Languages: TypeScript, Go`. */
const LABELLED = /^[^:：]{2,40}[:：]\s*\S/;
/** Enough separators that the line is a list rather than a sentence. */
const LIST_SEPARATORS = 2;

const DEGREE =
  /\b(?:b\.?s\.?c?|m\.?s\.?c?|m\.?eng|b\.?eng|b\.?a|m\.?b\.?a|ph\.?d|bachelor|master|doctor|undergraduate|postgraduate)\b|学士|硕士|博士|本科|研究生/i;
const EMPLOYER =
  /\b(?:inc|ltd|llc|l\.l\.c|corp|corporation|company|co|gmbh|plc|technologies|systems|labs|group|holdings)\b\.?|有限公司|科技|集团/i;
const ROLE =
  /\b(?:engineer|developer|intern|manager|analyst|scientist|designer|consultant|lead|architect|researcher|director)\b|工程师|实习生|经理|分析师/i;
const REPOSITORY = /(?:github|gitlab|bitbucket)\.com|\/(?:code|repo|repos|project)\//i;
const CONTACT_DETAIL = /@|\+?\d[\d\s()-]{7,}|(?:linkedin|twitter|x)\.com/i;

/** One signal: what was seen, which kind it speaks for, and what it is worth. */
interface Signal {
  kind: SectionKind;
  weight: number;
  saw: string;
}

export function classifySection(section: ResumeSection): {
  kind: SectionKind;
  classification: SectionClassification;
} {
  const heading = section.heading.trim().replace(/[:：]\s*$/, '');
  const named = heading ? SECTION_PATTERNS.find(({ pattern }) => pattern.test(heading)) : undefined;

  const signals = [
    ...headingSignals(heading, named),
    ...shapeSignals(section),
    ...contentSignals(section),
  ];

  const { kind, confidence, runnerUp } = tally(signals);

  return {
    kind,
    classification: {
      confidence,
      evidence: signals.filter((s) => s.kind === kind).map((s) => s.saw),
      ...(runnerUp ? { runnerUp } : {}),
      // A block with no heading of its own is not a heading nobody knows.
      headingUnknown: heading.length > 0 && named === undefined,
    },
  };
}

function headingSignals(
  heading: string,
  named: (typeof SECTION_PATTERNS)[number] | undefined,
): Signal[] {
  if (named) return [{ kind: named.kind, weight: HEADING, saw: `called "${heading}"` }];

  // No heading at all is itself the shape of a contact block: the name, the
  // links, whatever sits above the first thing the resume introduces.
  if (!heading) {
    return [{ kind: 'contact', weight: SHAPE, saw: 'stands above the first heading, unintroduced' }];
  }
  return [];
}

/**
 * What the section is made of.
 *
 * Entries with bullets under them describe work, and nothing in the shape says
 * whether that work was paid — experience and project both score, and the
 * content breaks the tie. Entries without bullets are the shape a list of
 * degrees takes. No entries at all means the section is talking rather than
 * listing, and whether it is prose or a list of skills is the one thing the
 * lines themselves can settle.
 */
function shapeSignals(section: ResumeSection): Signal[] {
  const lines = section.infoLines ?? section.looseLines;
  const bullets = section.bullets ?? [];

  if (section.entries.length > 0) {
    const withBullets = section.entries.filter((e) => e.bullets.length > 0).length;
    if (withBullets > 0) {
      const saw = `${section.entries.length} entr${section.entries.length === 1 ? 'y' : 'ies'}, ${withBullets} with bullets`;
      return [
        { kind: 'experience', weight: SHAPE, saw },
        { kind: 'project', weight: SHAPE, saw },
      ];
    }

    const dated = section.entries.filter((e) => DATE_RANGE.test(e.headerLines.join(' '))).length;
    if (dated > 0) {
      return [
        {
          kind: 'education',
          weight: SHAPE,
          saw: `${section.entries.length} entries with dates and no bullets`,
        },
      ];
    }
    return [];
  }

  if (lines.length === 0 && bullets.length === 0) return [];

  const text = [...lines, ...bullets.map((b) => b.text)];
  const listed = text.filter((l) => separators(l) >= LIST_SEPARATORS).length;
  const labelled = text.filter((l) => LABELLED.test(l)).length;

  const signals: Signal[] = [];
  if (listed > 0) {
    signals.push({ kind: 'skills', weight: SHAPE, saw: `${listed} line(s) read as a list` });
  }
  if (labelled > 0) {
    signals.push({ kind: 'skills', weight: SHAPE, saw: `${labelled} line(s) name a group and list it` });
  }
  if (signals.length === 0) {
    signals.push({ kind: 'summary', weight: SHAPE, saw: 'no entries, and prose rather than a list' });
  }
  return signals;
}

/** What the words look like, which is the weakest of the three and breaks ties. */
function contentSignals(section: ResumeSection): Signal[] {
  const headers = section.entries.flatMap((e) => e.headerLines).join(' ');
  const everything = [
    headers,
    ...section.entries.flatMap((e) => e.infoLines ?? []),
    ...(section.infoLines ?? section.looseLines),
    ...(section.bullets ?? []).map((b) => b.text),
  ].join(' ');

  const signals: Signal[] = [];
  if (DEGREE.test(headers)) signals.push({ kind: 'education', weight: CONTENT, saw: 'names a degree' });
  if (EMPLOYER.test(headers)) {
    signals.push({ kind: 'experience', weight: CONTENT, saw: 'names something that reads as a company' });
  }
  if (ROLE.test(headers)) signals.push({ kind: 'experience', weight: CONTENT, saw: 'names a job title' });
  if (REPOSITORY.test(everything)) {
    signals.push({ kind: 'project', weight: CONTENT, saw: 'links to somewhere code is kept' });
  }
  if (section.entries.length === 0 && CONTACT_DETAIL.test(everything)) {
    signals.push({ kind: 'contact', weight: CONTENT, saw: 'carries an address or a phone number' });
  }
  return signals;
}

/**
 * The highest total, and how far ahead of the next it finished.
 *
 * Ties go to the kind with more of its score from the shape, which is the
 * conflict rule written out: the heading is one word somebody chose and the
 * shape is the whole section. With nothing to weigh at all the answer is
 * `other` — a section with no heading, no entries and no lines, which the
 * integrity pass has its own name for.
 */
function tally(signals: Signal[]): {
  kind: SectionKind;
  confidence: number;
  runnerUp?: { kind: SectionKind; score: number };
} {
  const scores = new Map<SectionKind, { total: number; shape: number }>();
  for (const signal of signals) {
    const at = scores.get(signal.kind) ?? { total: 0, shape: 0 };
    at.total += signal.weight;
    if (signal.weight === SHAPE) at.shape += signal.weight;
    scores.set(signal.kind, at);
  }

  const ranked = [...scores.entries()].sort(
    ([, a], [, b]) => b.total - a.total || b.shape - a.shape,
  );
  const [first, second] = ranked;
  if (!first) return { kind: 'other', confidence: 0 };

  return {
    kind: first[0],
    confidence: first[1].total - (second?.[1].total ?? 0),
    ...(second ? { runnerUp: { kind: second[0], score: second[1].total } } : {}),
  };
}

function separators(line: string): number {
  return (line.match(/[,，、]/g) ?? []).length;
}
