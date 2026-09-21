import { DATE_RANGE } from '../document/vocabulary.js';
import type { Bullet, FormatDiagnosis, ResumeDocument, ScoredDimension } from '../domain.js';
import {
  bystanderOpener,
  dateFormat,
  estimateLines,
  hasMeasurement,
  hasPronoun,
  isPassive,
  mentionsReferences,
  personalDetail,
  selfRating,
  startsWithActionVerb,
  startsWithDate,
  weakVerb,
  type DateFormat,
} from './text-signals.js';

/**
 * Plain sentences rather than structured findings.
 *
 * An earlier version carried a catalogue of ~20 rules with stable ids, sources
 * and severities. The reference project reports `keyMissing: string[]` — a list
 * of sentences — and that is enough for a report to render and a reader to act
 * on, without a second vocabulary to keep in step with the corpus.
 */
const MESSAGES: Readonly<Record<string, string>> = {
  'harvard.no-pronouns': 'uses a personal pronoun; resume lines are phrases, not sentences',
  'harvard.passive-voice': 'passive voice hides who did the work',
  'harvard.no-references': 'references are requested separately; the line spends space to say nothing',
  'harvard.no-personal-details': 'age, gender and photos are excluded by convention',
  'harvard.date-first-line':
    'opens with a date, putting the reader on the timeline instead of the achievement',
  'harvard.missing-contact': 'no email or phone in the body — the application cannot be answered',
  'google.xyz.missing-measure': 'claims an outcome with nothing to verify it against',
  'faang.bystander-language':
    '"responsible for" / "worked on" describes an assigned slot, not an action taken',
  'faang.weak-verb': 'the opening verb does not name an action a reader could ask about',
  'faang.unquantified-majority':
    'fewer than half the bullets carry a figure, which reads as duties rather than results',
  'faang.overlong-bullet': 'runs past two lines, which means it is narrating process',
  'faang.self-rating': 'proficiency ratings are neither quantifiable nor checkable',
  'ats.multi-column':
    'multi-column layout — extractors read across the page and weave the columns into one garbled stream (~34% of ATS parsing failures)',
  'ats.margin-contact': 'contact details in a header or footer, which many parsers discard entirely',
  'ats.decorative-bullets': 'decorative bullet glyphs tokenize as unknown entities',
  'ats.unknown-heading': 'heading outside the vocabulary parsers match against',
  'ats.no-text-layer': 'no text layer — an applicant tracking system reads nothing from this file',
  'ats.tables': 'tables are commonly flattened row-wise, scrambling the fields',
  'ats.length': 'length is outside the one-page convention',
  'ats.inconsistent-dates': 'mixed date formats break the pattern a parser matches on',
};

function describe(rule: string, evidence: string): string {
  const message = MESSAGES[rule] ?? rule;
  return evidence ? `${message} — "${truncate(evidence)}"` : message;
}

/**
 * Cuts at a word, never through one.
 *
 * A quote severed mid-word — "that cut the pe" — reads as a bug in the tool
 * rather than as a shortened quote, and the reader cannot tell which of the two
 * it is looking at. The ellipsis is doing the work; the byte count is not.
 */
function truncate(text: string, max = 70): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut}...`;
}

/** One page holds roughly this many words at a readable density. */
const WORDS_PER_PAGE = 500;
/** Past two lines a bullet is narrating process rather than stating a result. */
const MAX_BULLET_LINES = 2;
/** Below this share of quantified bullets, the resume reads as duties. */
const QUANTIFIED_TARGET = 0.5;

/**
 * Whole-document format and ATS diagnosis — pure computation, no model call.
 *
 * This mirrors the reference project's speech analysis, which scored delivery
 * from timestamps alone: the signals here are countable, so paying a model to
 * count them would be slower, dearer and less reliable.
 *
 * It is also the closest thing the system has to an ATS simulator. Our own
 * parser runs the same five stages a commercial parser does, so where it
 * struggles is itself the finding.
 */
export function analyzeFormat(resume: ResumeDocument): FormatDiagnosis {
  const bullets = resume.sections.flatMap((s) => s.entries).flatMap((e) => e.bullets);
  const issues: string[] = [];

  const length = scoreLength(resume, issues);
  const quantifiedRatio = scoreQuantified(bullets, issues);
  const verbFirstRatio = scoreVerbFirst(bullets, issues);
  const consistency = scoreConsistency(resume, issues);
  const atsParsability = scoreAtsParsability(resume, issues);

  collectLineLevelIssues(bullets, issues);
  collectSkillsIssues(resume, issues);
  collectContactIssues(resume, issues);
  collectConventionIssues(resume, issues);

  // Only what a machine reading the file can decide.
  //
  // The quantified and verb-first ratios used to carry 45% of this score, and
  // both are judged better elsewhere: whether a line should have a figure is a
  // semantic question the content reader already asks, and whether its verb is
  // a strong one is the wording reader's. Counted here as well, one missing
  // figure was scored twice — once through substance and again through format —
  // and a regex was outvoting a model on its own subject.
  //
  // The ratios are still measured and still reported. They are statistics about
  // the document, not a verdict on it.
  const overallScore = Math.round(
    atsParsability.score * 0.6 + consistency.score * 0.2 + length.score * 0.2,
  );

  return {
    overallScore,
    metrics: { length, quantifiedRatio, verbFirstRatio, consistency, atsParsability },
    issues,
  };
}

function scoreLength(
  resume: ResumeDocument,
  issues: string[],
): FormatDiagnosis['metrics']['length'] {
  const { wordCount } = resume.meta;
  const pageCount = resume.meta.pageCount ?? Math.max(1, Math.ceil(wordCount / WORDS_PER_PAGE));

  if (pageCount <= 2 && wordCount >= 150) {
    return { score: 100, pageCount, wordCount, detail: `${pageCount} page(s), ${wordCount} words` };
  }

  if (wordCount < 150) {
    issues.push(describe('ats.length', `${wordCount} words`));
    return {
      score: 45,
      pageCount,
      wordCount,
      detail: `only ${wordCount} words — too thin to judge`,
    };
  }

  issues.push(describe('ats.length', `${pageCount} pages`));
  return {
    score: Math.max(30, 100 - (pageCount - 2) * 25),
    pageCount,
    wordCount,
    detail: `${pageCount} pages — one is the convention under ten years of experience`,
  };
}

function scoreQuantified(
  bullets: Bullet[],
  issues: string[],
): FormatDiagnosis['metrics']['quantifiedRatio'] {
  if (bullets.length === 0) {
    return { score: 0, ratio: 0, detail: 'no bullets found' };
  }

  const quantified = bullets.filter((b) => hasMeasurement(b.text));
  const ratio = quantified.length / bullets.length;

  return {
    // Meeting the target is a pass, not a perfect score; the ceiling is reached
    // when nearly every bullet carries a figure.
    score: Math.round(Math.min(1, ratio / 0.8) * 100),
    ratio,
    detail: `${quantified.length}/${bullets.length} bullets carry a figure`,
  };
}

function scoreVerbFirst(
  bullets: Bullet[],
  issues: string[],
): FormatDiagnosis['metrics']['verbFirstRatio'] {
  if (bullets.length === 0) return { score: 0, ratio: 0, detail: 'no bullets found' };

  const verbFirst = bullets.filter((b) => startsWithActionVerb(b.text));
  const ratio = verbFirst.length / bullets.length;

  return {
    score: Math.round(ratio * 100),
    ratio,
    detail: `${verbFirst.length}/${bullets.length} bullets open with an action verb`,
  };
}

function scoreConsistency(
  resume: ResumeDocument,
  issues: string[],
): FormatDiagnosis['metrics']['consistency'] {
  const inconsistencies: string[] = [];
  // Derived from the header where the parse did not split one out, and never
  // written back. `dateRange` is filled only by parses old enough to have
  // guessed at it; taking its absence for "no dates here" would leave this
  // check reporting every resume consistent, which is the shape a dead check
  // takes when nothing notices.
  const ranges = resume.sections
    .flatMap((s) => s.entries)
    .map((e) => e.dateRange ?? DATE_RANGE.exec(e.headerLines.join(' '))?.[0])
    .filter((r): r is string => Boolean(r));

  const formats = new Map<DateFormat, string>();
  for (const range of ranges) formats.set(dateFormat(range), range);

  if (formats.size > 1) {
    inconsistencies.push(`${formats.size} date formats: ${[...formats.values()].join(', ')}`);
    issues.push(describe('ats.inconsistent-dates', [...formats.values()].join(' / ')));
  }

  // Trailing punctuation applied to some bullets and not others.
  const bullets = resume.sections.flatMap((s) => s.entries).flatMap((e) => e.bullets);
  const withPeriod = bullets.filter((b) => /[.。]$/.test(b.text.trim())).length;
  if (bullets.length >= 3 && withPeriod > 0 && withPeriod < bullets.length) {
    inconsistencies.push(`${withPeriod}/${bullets.length} bullets end with a full stop`);
  }

  return {
    score: Math.max(0, 100 - inconsistencies.length * 30),
    inconsistencies,
    detail: inconsistencies.length === 0 ? 'consistent throughout' : inconsistencies.join('; '),
  };
}

/**
 * How well a parser will read the file — the single heaviest weight in the
 * overall score, because everything else assumes the text arrived intact.
 */
function scoreAtsParsability(
  resume: ResumeDocument,
  issues: string[],
): FormatDiagnosis['metrics']['atsParsability'] {
  const blockers: string[] = [];

  if (resume.meta.quality === 'unreadable') {
    issues.push(describe('ats.no-text-layer', resume.sourcePath));
    return {
      score: 0,
      blockers: ['no text layer — an ATS reads nothing from this file'],
      detail: 'unreadable',
    };
  }

  for (const warning of resume.meta.layoutWarnings) {
    blockers.push(warning);
    if (/multi-column/.test(warning)) issues.push(describe('ats.multi-column', warning));
    else if (/header or footer/.test(warning)) issues.push(describe('ats.margin-contact', warning));
    else if (/decorative/.test(warning)) issues.push(describe('ats.decorative-bullets', warning));
    else if (/table/.test(warning)) issues.push(describe('ats.tables', warning));
  }

  // A heading our own vocabulary could not place is a heading a commercial
  // parser will not place either — the same table-lookup failure.
  //
  // Read from the classification rather than from `kind`, which used to carry
  // both facts at once. A section nobody could name still has a shape, and it
  // is now given the kind that shape fits; asking `kind === 'other'` after
  // that would report no unrecognised heading on any resume, which is what a
  // check looks like once it has quietly stopped working.
  for (const section of resume.sections) {
    if (section.classification?.headingUnknown ?? (section.kind === 'other' && section.heading)) {
      blockers.push(`unrecognised section heading "${section.heading}"`);
      issues.push(describe('ats.unknown-heading', section.heading));
    }
  }

  return {
    score: Math.max(0, 100 - blockers.length * 25),
    blockers,
    detail: blockers.length === 0 ? 'parses cleanly' : `${blockers.length} parsing risk(s)`,
  };
}

function collectLineLevelIssues(bullets: Bullet[], issues: string[]): void {
  for (const bullet of bullets) {
    if (hasPronoun(bullet.text)) {
      issues.push(describe('harvard.no-pronouns', bullet.text));
    }
    if (startsWithDate(bullet.text)) {
      issues.push(describe('harvard.date-first-line', bullet.text));
    }
    // Neither length nor a missing figure is raised here any more. The wording
    // reader judges whether a line is carrying its words and the content reader
    // judges whether a figure was possible, and both of them read the line
    // rather than matching it. A pattern saying the same thing from here only
    // gave the report two entries for one fault.
  }
}

function collectSkillsIssues(resume: ResumeDocument, issues: string[]): void {
  const lines = resume.sections
    .filter((s) => s.kind === 'skills')
    .flatMap((s) => s.infoLines ?? s.looseLines);

  for (const line of lines) {
    const rating = selfRating(line);
    if (rating) issues.push(describe('faang.self-rating', line));
  }
}

function collectContactIssues(resume: ResumeDocument, issues: string[]): void {
  const contact = resume.sections.find((s) => s.kind === 'contact');
  const text = (contact?.infoLines ?? contact?.looseLines ?? []).join(' ');

  const hasEmail = /[\w.+-]+@[\w-]+\.[\w.]+/.test(text);
  const hasPhone = /\+?\d[\d\s()-]{7,}/.test(text);

  if (!hasEmail || !hasPhone) {
    const missing = [!hasEmail && 'email', !hasPhone && 'phone'].filter(Boolean).join(' and ');
    issues.push(describe('harvard.missing-contact', `missing ${missing} in the body`));
  }
}

/**
 * Conventions that apply to the document as a whole rather than to any one
 * bullet — checked over every line, since a references note or a date of birth
 * can appear in a section this analysis does not otherwise model.
 */
function collectConventionIssues(resume: ResumeDocument, issues: string[]): void {
  const lines = resume.sections.flatMap((s) => [
    ...(s.infoLines ?? s.looseLines),
    ...(s.bullets ?? []).map((b) => b.text),
    ...s.entries.flatMap((e) => [
      ...e.headerLines,
      ...(e.infoLines ?? []),
      ...e.bullets.map((b) => b.text),
    ]),
  ]);

  for (const line of lines) {
    if (mentionsReferences(line)) issues.push(describe('harvard.no-references', line));

    const detail = personalDetail(line);
    if (detail) issues.push(describe('harvard.no-personal-details', line));
  }
}

/** Convenience for the report layer: the same score, but explained. */
export function summariseFormat(diagnosis: FormatDiagnosis): string {
  const { metrics } = diagnosis;
  const parts: Array<[string, ScoredDimension]> = [
    ['ATS', metrics.atsParsability],
    ['quantified', metrics.quantifiedRatio],
    ['verb-first', metrics.verbFirstRatio],
    ['consistency', metrics.consistency],
    ['length', metrics.length],
  ];
  return parts.map(([name, m]) => `${name} ${m.score}`).join(' · ');
}
