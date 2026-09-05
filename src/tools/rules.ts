import type { DiagnosisDimension, RuleViolation, Severity } from '../domain.js';

/**
 * The rule catalogue.
 *
 * Every finding the system reports cites one of these ids. They are stable
 * strings rather than free text for three reasons: a diagnosis can be counted
 * and compared across resume versions ("did `harvard.no-pronouns` go away?"),
 * a report can show where the rule comes from, and the knowledge base can be
 * queried by rule name.
 *
 * Ids are namespaced by origin — `harvard.*`, `google.*`, `faang.*`, `ats.*` —
 * so the provenance is visible at a glance and two sources can disagree without
 * a name collision.
 */
export interface RuleDefinition {
  id: string;
  dimension: DiagnosisDimension;
  severity: Severity;
  /** Shown to the user. States the rule, not the fix. */
  explanation: string;
  /** Where the rule comes from, rendered next to the finding. */
  source: string;
}

export const RULES = {
  // --- Harvard FAS Mignone Center -----------------------------------------
  'harvard.no-pronouns': {
    id: 'harvard.no-pronouns',
    dimension: 'conciseness-language',
    severity: 'medium',
    explanation:
      'Resume lines are phrases, not sentences. Personal pronouns add length without information.',
    source: 'Harvard FAS — "Use personal pronouns (such as I or We)" is on the do-not list',
  },
  'harvard.passive-voice': {
    id: 'harvard.passive-voice',
    dimension: 'action-verbs',
    severity: 'medium',
    explanation: 'Passive constructions hide who did the work.',
    source: 'Harvard FAS — language should be "active rather than passive"',
  },
  'harvard.no-references': {
    id: 'harvard.no-references',
    dimension: 'red-flags',
    severity: 'low',
    explanation: 'References are requested separately; listing them spends lines for nothing.',
    source: 'Harvard FAS — "List references" is on the do-not list',
  },
  'harvard.no-personal-details': {
    id: 'harvard.no-personal-details',
    dimension: 'red-flags',
    severity: 'high',
    explanation: 'Age, gender and photos invite bias and are excluded by convention.',
    source: 'Harvard FAS — "Include a picture", "Include age or gender" are on the do-not list',
  },
  'harvard.date-first-line': {
    id: 'harvard.date-first-line',
    dimension: 'format-ats',
    severity: 'medium',
    explanation:
      'A line opening with a date puts the reader on the timeline instead of the achievement, and parsers may read the whole line as a date field.',
    source: 'Harvard FAS — "Start each line with a date" is on the do-not list',
  },
  'harvard.missing-contact': {
    id: 'harvard.missing-contact',
    dimension: 'red-flags',
    severity: 'high',
    explanation:
      'No email or phone in the body means the application cannot be answered, however good the rest is.',
    source: 'Harvard FAS — "Missing email and phone information" is a top mistake',
  },

  // --- Google XYZ ----------------------------------------------------------
  'google.xyz.missing-measure': {
    id: 'google.xyz.missing-measure',
    dimension: 'impact-quantification',
    severity: 'high',
    explanation: 'The bullet claims an outcome with nothing to verify it against.',
    source: 'Google XYZ Formula — "as measured by [Y]"',
  },

  // --- FAANG conventions ---------------------------------------------------
  'faang.bystander-language': {
    id: 'faang.bystander-language',
    dimension: 'action-verbs',
    severity: 'high',
    explanation:
      '"Responsible for" and "worked on" describe the slot you were assigned, not the action you took.',
    source: 'FAANG resume conventions — strip bystander language',
  },
  'faang.weak-verb': {
    id: 'faang.weak-verb',
    dimension: 'action-verbs',
    severity: 'medium',
    explanation:
      'Verbs like "helped" and "assisted" do not reconstruct a concrete action a reader can ask about.',
    source: 'FAANG bar-raiser patterns',
  },
  'faang.unquantified-majority': {
    id: 'faang.unquantified-majority',
    dimension: 'impact-quantification',
    severity: 'high',
    explanation:
      'Fewer than half the bullets carry a number, which reads as a resume of duties rather than results.',
    source: 'FAANG bar — at Senior and above this is a red flag',
  },
  'faang.overlong-bullet': {
    id: 'faang.overlong-bullet',
    dimension: 'conciseness-language',
    severity: 'low',
    explanation:
      'Past two lines a bullet is narrating process; process belongs in the interview, not the page.',
    source: 'FAANG bar — one to two lines per bullet',
  },
  'faang.self-rating': {
    id: 'faang.self-rating',
    dimension: 'skills-section',
    severity: 'medium',
    explanation:
      'Proficiency ratings are neither quantifiable nor checkable, and invite unlimited questioning.',
    source: 'Harvard FAS "fact-based (quantify and qualify)" applied to skills',
  },

  // --- ATS parsing ---------------------------------------------------------
  'ats.multi-column': {
    id: 'ats.multi-column',
    dimension: 'format-ats',
    severity: 'high',
    explanation:
      'Extractors read straight across the page, weaving two columns into one garbled stream. It fails silently — the resume is accepted and stored as nonsense.',
    source: 'ATS parsing error distribution — multi-column is roughly 34% of failures',
  },
  'ats.margin-contact': {
    id: 'ats.margin-contact',
    dimension: 'format-ats',
    severity: 'high',
    explanation:
      'Many parsers discard header and footer nodes entirely, or file them into ghost fields that never reach the application.',
    source: 'ATS parsing error distribution — headers and footers roughly 22%',
  },
  'ats.decorative-bullets': {
    id: 'ats.decorative-bullets',
    dimension: 'format-ats',
    severity: 'medium',
    explanation: 'Decorative glyphs tokenize as unknown entities and disturb every later stage.',
    source: 'ATS parsing error distribution — decorative glyphs roughly 12%',
  },
  'ats.unknown-heading': {
    id: 'ats.unknown-heading',
    dimension: 'format-ats',
    severity: 'medium',
    explanation:
      'Parsers map sections by matching a table of known heading variants; a miss leaves the whole block unclassified.',
    source: 'ATS parsing error distribution — non-standard headings roughly 17%',
  },
  'ats.no-text-layer': {
    id: 'ats.no-text-layer',
    dimension: 'format-ats',
    severity: 'high',
    explanation: 'A scanned PDF has no text layer, so an applicant tracking system reads nothing.',
    source: 'ATS text-extraction stage',
  },
  'ats.tables': {
    id: 'ats.tables',
    dimension: 'format-ats',
    severity: 'medium',
    explanation: 'Tables are commonly flattened row-wise, scrambling the fields they organised.',
    source: 'ATS text-extraction stage',
  },
  'ats.length': {
    id: 'ats.length',
    dimension: 'format-ats',
    severity: 'low',
    explanation:
      'One page under ten years of experience is the convention; beyond it, the reader stops before the end.',
    source: 'FAANG resume conventions',
  },
  'ats.inconsistent-dates': {
    id: 'ats.inconsistent-dates',
    dimension: 'format-ats',
    severity: 'medium',
    explanation:
      'Mixed date formats break the pattern a parser matches on; Taleo in particular expects MM/YYYY.',
    source: 'ATS field mapping — Taleo date handling',
  },
} as const satisfies Record<string, RuleDefinition>;

export type RuleId = keyof typeof RULES;

/**
 * Builds a violation from the catalogue.
 *
 * `evidence` must be a verbatim substring of the source, never a paraphrase —
 * the report quotes it back, and a reader who cannot find the quoted text in
 * their own resume stops trusting the whole diagnosis.
 */
export function violation(
  ruleId: RuleId,
  evidence: string,
  overrides: { severity?: Severity } = {},
): RuleViolation {
  const rule = RULES[ruleId];
  return {
    rule: rule.id,
    dimension: rule.dimension,
    evidence,
    severity: overrides.severity ?? rule.severity,
    explanation: rule.explanation,
  };
}

export function ruleSource(ruleId: string): string | undefined {
  return (RULES as Record<string, RuleDefinition>)[ruleId]?.source;
}
