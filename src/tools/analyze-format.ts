import type {
  Bullet,
  FormatDiagnosis,
  ResumeDocument,
  RuleViolation,
  ScoredDimension,
} from '../domain.js';
import { violation } from './rules.js';
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
  const issues: RuleViolation[] = [];

  const length = scoreLength(resume, issues);
  const quantifiedRatio = scoreQuantified(bullets, issues);
  const verbFirstRatio = scoreVerbFirst(bullets, issues);
  const consistency = scoreConsistency(resume, issues);
  const atsParsability = scoreAtsParsability(resume, issues);

  collectLineLevelIssues(bullets, issues);
  collectSkillsIssues(resume, issues);
  collectContactIssues(resume, issues);
  collectConventionIssues(resume, issues);

  // Parsability dominates: a resume the machine cannot read scores nothing on
  // the axes that assume it could.
  const overallScore = Math.round(
    atsParsability.score * 0.35 +
      quantifiedRatio.score * 0.25 +
      verbFirstRatio.score * 0.2 +
      consistency.score * 0.1 +
      length.score * 0.1,
  );

  return {
    overallScore,
    metrics: { length, quantifiedRatio, verbFirstRatio, consistency, atsParsability },
    issues,
  };
}

function scoreLength(
  resume: ResumeDocument,
  issues: RuleViolation[],
): FormatDiagnosis['metrics']['length'] {
  const { wordCount } = resume.meta;
  const pageCount = resume.meta.pageCount ?? Math.max(1, Math.ceil(wordCount / WORDS_PER_PAGE));

  if (pageCount <= 2 && wordCount >= 150) {
    return { score: 100, pageCount, wordCount, detail: `${pageCount} page(s), ${wordCount} words` };
  }

  if (wordCount < 150) {
    issues.push(violation('ats.length', `${wordCount} words`, { severity: 'medium' }));
    return {
      score: 45,
      pageCount,
      wordCount,
      detail: `only ${wordCount} words — too thin to judge`,
    };
  }

  issues.push(violation('ats.length', `${pageCount} pages`));
  return {
    score: Math.max(30, 100 - (pageCount - 2) * 25),
    pageCount,
    wordCount,
    detail: `${pageCount} pages — one is the convention under ten years of experience`,
  };
}

function scoreQuantified(
  bullets: Bullet[],
  issues: RuleViolation[],
): FormatDiagnosis['metrics']['quantifiedRatio'] {
  if (bullets.length === 0) {
    return { score: 0, ratio: 0, detail: 'no bullets found' };
  }

  const quantified = bullets.filter((b) => hasMeasurement(b.text));
  const ratio = quantified.length / bullets.length;

  if (ratio < QUANTIFIED_TARGET) {
    // Cite the worst offender rather than the rule in the abstract.
    const example = bullets.find((b) => !hasMeasurement(b.text));
    issues.push(violation('faang.unquantified-majority', example?.text ?? ''));
  }

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
  issues: RuleViolation[],
): FormatDiagnosis['metrics']['verbFirstRatio'] {
  if (bullets.length === 0) return { score: 0, ratio: 0, detail: 'no bullets found' };

  const verbFirst = bullets.filter((b) => startsWithActionVerb(b.text));
  const ratio = verbFirst.length / bullets.length;

  for (const bullet of bullets) {
    const opener = bystanderOpener(bullet.text);
    if (opener) {
      issues.push(violation('faang.bystander-language', bullet.text.slice(0, opener.length)));
      continue;
    }
    const weak = weakVerb(bullet.text);
    if (weak) issues.push(violation('faang.weak-verb', weak));
  }

  return {
    score: Math.round(ratio * 100),
    ratio,
    detail: `${verbFirst.length}/${bullets.length} bullets open with an action verb`,
  };
}

function scoreConsistency(
  resume: ResumeDocument,
  issues: RuleViolation[],
): FormatDiagnosis['metrics']['consistency'] {
  const inconsistencies: string[] = [];
  const ranges = resume.sections
    .flatMap((s) => s.entries)
    .map((e) => e.dateRange)
    .filter((r): r is string => Boolean(r));

  const formats = new Map<DateFormat, string>();
  for (const range of ranges) formats.set(dateFormat(range), range);

  if (formats.size > 1) {
    inconsistencies.push(`${formats.size} date formats: ${[...formats.values()].join(', ')}`);
    issues.push(violation('ats.inconsistent-dates', [...formats.values()].join(' / ')));
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
  issues: RuleViolation[],
): FormatDiagnosis['metrics']['atsParsability'] {
  const blockers: string[] = [];

  if (resume.meta.quality === 'unreadable') {
    issues.push(violation('ats.no-text-layer', resume.sourcePath));
    return {
      score: 0,
      blockers: ['no text layer — an ATS reads nothing from this file'],
      detail: 'unreadable',
    };
  }

  for (const warning of resume.meta.layoutWarnings) {
    blockers.push(warning);
    if (/multi-column/.test(warning)) issues.push(violation('ats.multi-column', warning));
    else if (/header or footer/.test(warning)) issues.push(violation('ats.margin-contact', warning));
    else if (/decorative/.test(warning)) issues.push(violation('ats.decorative-bullets', warning));
    else if (/table/.test(warning)) issues.push(violation('ats.tables', warning));
  }

  // A heading our own vocabulary could not place is a heading a commercial
  // parser will not place either — the same table-lookup failure.
  for (const section of resume.sections) {
    if (section.kind === 'other' && section.heading) {
      blockers.push(`unrecognised section heading "${section.heading}"`);
      issues.push(violation('ats.unknown-heading', section.heading));
    }
  }

  return {
    score: Math.max(0, 100 - blockers.length * 25),
    blockers,
    detail: blockers.length === 0 ? 'parses cleanly' : `${blockers.length} parsing risk(s)`,
  };
}

function collectLineLevelIssues(bullets: Bullet[], issues: RuleViolation[]): void {
  for (const bullet of bullets) {
    if (hasPronoun(bullet.text)) {
      issues.push(violation('harvard.no-pronouns', bullet.text));
    }
    if (isPassive(bullet.text)) {
      issues.push(violation('harvard.passive-voice', bullet.text));
    }
    if (startsWithDate(bullet.text)) {
      issues.push(violation('harvard.date-first-line', bullet.text.slice(0, 20)));
    }
    if (estimateLines(bullet.text) > MAX_BULLET_LINES) {
      issues.push(violation('faang.overlong-bullet', bullet.text.slice(0, 60)));
    }
    if (!hasMeasurement(bullet.text)) {
      issues.push(violation('google.xyz.missing-measure', bullet.text, { severity: 'medium' }));
    }
  }
}

function collectSkillsIssues(resume: ResumeDocument, issues: RuleViolation[]): void {
  const lines = resume.sections
    .filter((s) => s.kind === 'skills')
    .flatMap((s) => s.looseLines);

  for (const line of lines) {
    const rating = selfRating(line);
    if (rating) issues.push(violation('faang.self-rating', line));
  }
}

function collectContactIssues(resume: ResumeDocument, issues: RuleViolation[]): void {
  const contact = resume.sections.find((s) => s.kind === 'contact');
  const text = contact?.looseLines.join(' ') ?? '';

  const hasEmail = /[\w.+-]+@[\w-]+\.[\w.]+/.test(text);
  const hasPhone = /\+?\d[\d\s()-]{7,}/.test(text);

  if (!hasEmail || !hasPhone) {
    const missing = [!hasEmail && 'email', !hasPhone && 'phone'].filter(Boolean).join(' and ');
    issues.push(violation('harvard.missing-contact', `missing ${missing} in the body`));
  }
}

/**
 * Conventions that apply to the document as a whole rather than to any one
 * bullet — checked over every line, since a references note or a date of birth
 * can appear in a section this analysis does not otherwise model.
 */
function collectConventionIssues(resume: ResumeDocument, issues: RuleViolation[]): void {
  const lines = resume.sections.flatMap((s) => [
    ...s.looseLines,
    ...s.entries.flatMap((e) => [...e.headerLines, ...e.bullets.map((b) => b.text)]),
  ]);

  for (const line of lines) {
    if (mentionsReferences(line)) issues.push(violation('harvard.no-references', line));

    const detail = personalDetail(line);
    if (detail) issues.push(violation('harvard.no-personal-details', line));
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
