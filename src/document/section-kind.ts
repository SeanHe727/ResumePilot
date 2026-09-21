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
 * **A heading the vocabulary knows settles it.** People are more consistent
 * about what they call a section than about how they set one, and only one
 * kind decides anything downstream: `contact` is dropped before a resume
 * reaches a model, so a section wrongly called that disappears. Everything
 * else — experience against project, education against summary — gates no
 * behaviour at all, and picking between them from a shape rather than from
 * the word above it buys nothing to be wrong about.
 *
 * `contact` is not settled by the vocabulary anyway. It is the block with no
 * heading of its own, which is a fact about the cut rather than a word, so the
 * one kind that matters is out of this argument entirely.
 *
 * The evidence is still weighed, and still recorded. Where the shape disagrees
 * with the heading the confidence falls to zero and the runner-up names what
 * the shape wanted — a section called `EXPERIENCE` holding one labelled line
 * of languages is filed as the candidate asked and reported as a disagreement.
 * Where the vocabulary knows nothing, the shape decides alone: `Leadership`
 * with three dated bulleted entries is experience.
 */
import type { ResumeSection, SectionClassification, SectionKind } from '../domain.js';
import { DATE_RANGE, EMAIL, PHONE, SECTION_PATTERNS } from './vocabulary.js';

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
const PROFILE = /(?:linkedin|twitter)\.com/i;

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

  const { kind, confidence, runnerUp } = tally(signals, named?.kind);

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
  const reachable = EMAIL.test(everything) || PHONE.test(everything) || PROFILE.test(everything);
  if (section.entries.length === 0 && reachable) {
    signals.push({ kind: 'contact', weight: CONTENT, saw: 'carries an address or a phone number' });
  }
  return signals;
}

/**
 * Which kind the evidence lands on, and how far ahead it finished.
 *
 * A heading the vocabulary knows takes it regardless of the totals; what the
 * totals then say is how much the rest of the section agreed. A shape that
 * wanted something else leaves the confidence at zero and its choice in the
 * runner-up, which is the whole disagreement, recorded rather than resolved.
 *
 * With nothing to weigh at all the answer is `other` — a heading with no
 * entries and no lines under it, which the integrity pass has a name for.
 */
function tally(
  signals: Signal[],
  named: SectionKind | undefined,
): {
  kind: SectionKind;
  confidence: number;
  runnerUp?: { kind: SectionKind; score: number };
} {
  const scores = new Map<SectionKind, number>();
  for (const signal of signals) {
    scores.set(signal.kind, (scores.get(signal.kind) ?? 0) + signal.weight);
  }

  // Stable, so a dead heat between two kinds the evidence cannot separate
  // falls to the order the signals were gathered in — the heading, then the
  // shape, then the content. Which of experience and project wins such a tie
  // is arbitrary and harmless: neither gates anything a reader would notice.
  const ranked = [...scores.entries()].sort(([, a], [, b]) => b - a);
  const chosen = named !== undefined ? ranked.find(([kind]) => kind === named) : ranked[0];
  if (!chosen) return { kind: named ?? 'other', confidence: 0 };

  const next = ranked.find(([kind]) => kind !== chosen[0]);

  return {
    kind: chosen[0],
    // Never below zero: a heading that overruled the shape did not finish
    // ahead of it, and saying by how much it lost would read as a margin.
    confidence: Math.max(0, chosen[1] - (next?.[1] ?? 0)),
    ...(next ? { runnerUp: { kind: next[0], score: next[1] } } : {}),
  };
}

function separators(line: string): number {
  return (line.match(/[,，、]/g) ?? []).length;
}
