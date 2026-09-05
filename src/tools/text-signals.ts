/**
 * Line-level signals every format check is built from.
 *
 * All pure functions over a single string: no model, no I/O, no state. That is
 * deliberate — this is the one diagnosis dimension that costs nothing to run,
 * so it can be applied to every bullet on every version of a resume without
 * thinking about budget.
 */

/**
 * Openers that describe an assigned slot rather than an action taken.
 * FAANG hiring conventions name these explicitly as phrases to strip.
 */
const BYSTANDER_OPENERS = [
  'responsible for',
  'worked on',
  'involved in',
  'participated in',
  'took part in',
  'tasked with',
  'in charge of',
  'duties included',
  'part of a team',
];

/** Verbs that name no reconstructable action. */
const WEAK_VERBS = ['helped', 'assisted', 'supported', 'contributed', 'aided', 'facilitated'];

/**
 * Action verbs drawn from Harvard's published lists, plus the engineering verbs
 * a technical resume actually uses.
 *
 * A list rather than part-of-speech tagging: "led", "engineered" and "shipped"
 * are unambiguous here, while a tagger would need a dependency and would still
 * mislabel nouns used as verbs ("architected" vs "architecture").
 */
const ACTION_VERBS = new Set([
  // Harvard's leadership / management set
  'led', 'directed', 'managed', 'coordinated', 'organised', 'organized', 'chaired', 'oversaw',
  'supervised', 'mentored', 'trained', 'drove', 'spearheaded', 'founded', 'established',
  // Building
  'built', 'created', 'designed', 'developed', 'engineered', 'implemented', 'architected',
  'prototyped', 'shipped', 'launched', 'delivered', 'deployed', 'automated', 'integrated',
  // Improving
  'improved', 'optimised', 'optimized', 'refactored', 'rebuilt', 'redesigned', 'migrated',
  'reduced', 'cut', 'increased', 'raised', 'accelerated', 'streamlined', 'scaled', 'upgraded',
  'consolidated', 'eliminated', 'simplified', 'hardened', 'stabilised', 'stabilized',
  // Investigating
  'analysed', 'analyzed', 'diagnosed', 'investigated', 'identified', 'traced', 'debugged',
  'profiled', 'benchmarked', 'measured', 'evaluated', 'researched', 'audited',
  // Delivering
  'wrote', 'authored', 'documented', 'presented', 'published', 'proposed', 'negotiated',
  'resolved', 'fixed', 'maintained', 'owned', 'ported', 'instrumented', 'validated',
]);

/** First-person pronouns, which resume lines omit entirely. */
const PRONOUN_PATTERN = /\b(?:I|me|my|mine|we|us|our|ours)\b/i;

/**
 * Irregular past participles common in engineering prose.
 *
 * A `-ed` suffix alone misses exactly the verbs a rebuild story uses — "was
 * rebuilt", "was written", "was built" would all read as active, which is the
 * opposite of useful for the one rule this check exists to enforce.
 */
const IRREGULAR_PARTICIPLES =
  'built|rebuilt|written|rewritten|made|done|redone|given|taken|shown|led|run|rerun|put|sent|kept|held|brought|found|chosen|driven|known|split|set|cut|read|left|lost|met|won|dealt|spent';

/**
 * Passive voice, approximated as a form of "to be" followed by a past
 * participle. Heuristic on purpose: a parser accurate enough to be certain
 * would cost more than the finding is worth, and a false positive here is a
 * suggestion the user can dismiss.
 */
const PASSIVE_PATTERN = new RegExp(
  `\\b(?:was|were|been|being|is|are)\\s+(?:\\w+ly\\s+)?(?:\\w+ed|${IRREGULAR_PARTICIPLES})\\b`,
  'i',
);

/** A leading date is both a readability and a parsing problem. */
const LEADING_DATE = /^\s*(?:(?:19|20)\d{2}|(?:0?[1-9]|1[0-2])[/-](?:19|20)\d{2}|[A-Z][a-z]{2,8}\s+(?:19|20)\d{2})\b/;

export function firstWord(text: string): string {
  return text.trim().split(/[\s,.:;—–-]+/)[0]?.toLowerCase() ?? '';
}

export function startsWithActionVerb(text: string): boolean {
  return ACTION_VERBS.has(firstWord(text));
}

export function bystanderOpener(text: string): string | null {
  const lower = text.trim().toLowerCase();
  return BYSTANDER_OPENERS.find((opener) => lower.startsWith(opener)) ?? null;
}

export function weakVerb(text: string): string | null {
  const first = firstWord(text);
  return WEAK_VERBS.includes(first) ? first : null;
}

export function hasPronoun(text: string): boolean {
  return PRONOUN_PATTERN.test(text);
}

export function isPassive(text: string): boolean {
  return PASSIVE_PATTERN.test(text);
}

export function startsWithDate(text: string): boolean {
  return LEADING_DATE.test(text);
}

/**
 * Whether the line carries a figure a reader could verify.
 *
 * A bare four-digit year does not count: "Joined the team in 2023" is a date,
 * not a measurement, and counting it would let a resume of pure duties score
 * as quantified.
 */
export function hasMeasurement(text: string): boolean {
  const withoutYears = text.replace(/\b(?:19|20)\d{2}\b/g, ' ');
  return /\d/.test(withoutYears);
}

/** Self-assessed proficiency, in any of the shapes people use for it. */
export function selfRating(text: string): string | null {
  const patterns: Array<[RegExp, string]> = [
    [/[★☆✦✧]{2,}/, 'star rating'],
    [/[█▓▒░]{2,}/, 'progress bar'],
    [/\b(?:expert|proficient|advanced|intermediate|beginner|fluent)\s+(?:in|at|with)\b/i, 'proficiency wording'],
    [/\b\d{1,3}\s*%\s*(?:proficien|master|skill)/i, 'percentage proficiency'],
  ];
  for (const [pattern, label] of patterns) {
    if (pattern.test(text)) return label;
  }
  return null;
}

export type DateFormat = 'iso-dot' | 'iso-slash' | 'month-name' | 'year-only' | 'other';

/**
 * Classifies a date range so mixed formats within one resume can be spotted.
 * Taleo in particular expects a single consistent shape.
 */
export function dateFormat(range: string): DateFormat {
  if (/[A-Za-z]{3}/.test(range)) return 'month-name';
  if (/(?:19|20)\d{2}\s*[.．]\s*\d{1,2}/.test(range)) return 'iso-dot';
  if (/(?:19|20)\d{2}\s*[/-]\s*\d{1,2}/.test(range)) return 'iso-slash';
  if (/^\D*(?:19|20)\d{2}\D+(?:19|20)\d{2}\D*$/.test(range)) return 'year-only';
  return 'other';
}

/**
 * A references line, in the shapes people write it.
 *
 * Harvard's do-not list rules these out: references are requested separately,
 * so the line spends space to say nothing.
 */
const REFERENCES_PATTERN =
  /\breferences?\b\s*(?:available|furnished|provided|upon|on)\b|^\s*references?\s*[:：]?\s*$/i;

export function mentionsReferences(text: string): boolean {
  return REFERENCES_PATTERN.test(text.trim());
}

/**
 * Personal details conventionally excluded from a resume.
 *
 * Only the textual ones are detectable — an embedded photo is invisible to a
 * text pipeline, and the layout warnings from extraction are what catch that.
 */
const PERSONAL_DETAIL_PATTERNS: ReadonlyArray<[RegExp, string]> = [
  [/\b(?:age|年龄)\s*[:：]?\s*\d{1,2}\b/i, 'age'],
  [/\b\d{1,2}\s*years?\s+old\b/i, 'age'],
  [/\b(?:gender|sex|性别)\s*[:：]\s*\w+/i, 'gender'],
  [/\b(?:marital status|婚姻状况)\b/i, 'marital status'],
  [/\b(?:date of birth|d\.?o\.?b\.?|出生日期)\b/i, 'date of birth'],
  [/\b(?:nationality|国籍)\s*[:：]/i, 'nationality'],
];

export function personalDetail(text: string): string | null {
  for (const [pattern, label] of PERSONAL_DETAIL_PATTERNS) {
    if (pattern.test(text)) return label;
  }
  return null;
}

/** Rough line count for a bullet, at the ~95 characters a resume line holds. */
export function estimateLines(text: string, charsPerLine = 95): number {
  return Math.max(1, Math.ceil(text.length / charsPerLine));
}
