/**
 * The resume domain model.
 *
 * Kept separate from `types.ts` on purpose: everything in the Harness layers
 * (Query Engine, Context, Permission, Session, Hooks) is domain-agnostic and
 * must not import from this file. Only Tools, Skills, Sub-agents and the
 * knowledge base know what a resume is.
 */

// ---------------------------------------------------------------------------
// Parsed document
// ---------------------------------------------------------------------------

/**
 * What a resume was read from.
 *
 * Only `pdf` is produced now — every stage after extraction reads visual
 * evidence a marked-up format has none of. The rest are kept because a session
 * saved before those entry points were removed carries one of them, and
 * sessions are read back with a bare cast that would not survive the value
 * disappearing.
 */
export type SourceFormat = 'pdf' | /** legacy, no longer parsed */ 'docx' | 'markdown' | 'text';

export type SectionKind =
  | 'contact'
  | 'summary'
  | 'experience'
  | 'project'
  | 'education'
  | 'skills'
  | 'other';

/** Character offsets into `ResumeDocument.rawText`; `page` when the source paginates. */
export interface SourceSpan {
  start: number;
  end: number;
  page?: number;
}

export interface Bullet {
  /** Stable across re-parses of the same document: `${entryId}:${index}`. */
  id: string;
  entryId: string;
  index: number;
  text: string;
  span: SourceSpan;
}

/**
 * A bullet a section carries itself, under no entry.
 *
 * A summary or a skills section is free to be written as a list, and those
 * bullets belong to nobody in particular. Kept a type of its own rather than
 * making `Bullet.entryId` optional: every reader of a `Bullet` today may
 * assume there is an entry behind it, and an optional field would let a
 * section's bullet reach code that cannot place it.
 */
export interface SectionBullet {
  /** `${sectionId}:b${index}`. */
  id: string;
  sectionId: string;
  index: number;
  text: string;
  span: SourceSpan;
}

/**
 * One position, project or degree — the unit diagnosis works on.
 *
 * A section such as "Experience" holds several of these, which is why the
 * document is three levels deep rather than two: bullets are only judgeable
 * against the other bullets of the same entry (is the strongest one first? do
 * two of them restate each other?), and that comparison needs a level to live
 * at.
 */
export interface ResumeEntry {
  /** `${sectionId}:${index}`. */
  id: string;
  sectionId: string;
  index: number;
  organization?: string;
  /** Job title, project name or degree. */
  title?: string;
  dateRange?: string;
  location?: string;
  /** The header as it appeared, for when the fields above could not be parsed. */
  headerLines: string[];
  /**
   * What the entry says about itself that is not part of what it is called: a
   * repository link, a line of technologies, a sentence of description.
   *
   * Optional because a session written before this existed has no such field,
   * and sessions are read back with a bare cast.
   */
  infoLines?: string[];
  bullets: Bullet[];
  span: SourceSpan;
}

export interface ResumeSection {
  id: string;
  kind: SectionKind;
  heading: string;
  entries: ResumeEntry[];
  /**
   * Sections like `skills` or `contact` carry bare lines, not entries.
   *
   * Superseded by `infoLines`, and kept because a session saved before the
   * rename is read back with a bare cast and would otherwise lose its text.
   * Read `infoLines ?? looseLines`; write `infoLines`.
   */
  looseLines: string[];
  infoLines?: string[];
  /** Bullets the section carries itself, under no entry. */
  bullets?: SectionBullet[];
  span: SourceSpan;
}

/**
 * How well the source could be read — and, by proxy, how well an applicant
 * tracking system will read it.
 *
 * This is a diagnosis in itself. Multi-column layout alone accounts for roughly
 * a third of real ATS parsing failures, and a resume with no text layer scores
 * zero everywhere because the machine never sees a single word.
 */
export type ExtractionQuality =
  /** Text read cleanly in an unambiguous order. */
  | 'clean'
  /** Read, but layout signals say a parser will mangle it — columns, tables. */
  | 'degraded'
  /** No text layer at all: a scanned image. Nothing downstream can run. */
  | 'unreadable'
  /**
   * Read, but in a layout this system does not claim to handle: multi-column.
   *
   * Distinct from `degraded`, which says a diagnosis is still worth having.
   * Here the extraction order itself is wrong, so every finding downstream
   * would be about a document nobody wrote. Parsing stops.
   */
  | 'unsupported';

export interface ResumeMeta {
  pageCount?: number;
  wordCount: number;
  quality: ExtractionQuality;
  /** Layout features that commonly break ATS parsers. */
  layoutWarnings: string[];
}

export interface ResumeDocument {
  sourcePath: string;
  format: SourceFormat;
  rawText: string;
  sections: ResumeSection[];
  meta: ResumeMeta;
}

export interface JobDescription {
  sourcePath?: string;
  title?: string;
  rawText: string;
  requiredKeywords: string[];
  preferredKeywords: string[];
}

// ---------------------------------------------------------------------------
// Diagnosis
// ---------------------------------------------------------------------------

/**
 * The twelve knowledge-base dimensions. Each maps to a directory under
 * `knowledge/data/` and to a rubric derived from public guidance
 * (Google XYZ formula, Harvard FAS resume rules, FAANG bullet conventions).
 */
export const DIAGNOSIS_DIMENSIONS = [
  'impact-quantification',
  'action-verbs',
  'xyz-structure',
  'scope-ownership',
  'tech-specificity',
  'project-narrative',
  'skills-section',
  'education-early-career',
  'conciseness-language',
  'format-ats',
  'jd-alignment',
  'red-flags',
] as const;

export type DiagnosisDimension = (typeof DIAGNOSIS_DIMENSIONS)[number];

export interface ScoredDimension {
  /** 0–100. */
  score: number;
  detail: string;
}

/**
 * A proposed replacement for one bullet.
 *
 * `needsInput` is load-bearing: the Agent must never invent a metric it was not
 * given. When a bullet lacks a number, the rewrite carries a placeholder and
 * names what the user has to supply, rather than fabricating plausible figures.
 *
 * Two suggestions rather than one, because forcing the XYZ shape onto every
 * bullet makes some of them worse. A line like "Chaired weekly design reviews
 * across 3 teams" has no missing metric to add — bolting "[X]% improvement"
 * onto it is padding. And a rewrite carrying four placeholders is a row of
 * holes the user has no idea how to fill.
 */
export interface RewriteSuggestion {
  before: string;
  /** The recommended rewrite. Carries at most two placeholders. */
  after: string;
  rationale: string;
  /** Questions the user can answer from memory, one per placeholder in `after`. */
  needsInput: string[];
  /**
   * A version that asks nothing of the user — stronger verb, concrete method,
   * explicit scope, no figures. Present only when `after` needs input, since
   * otherwise the two would be the same sentence.
   */
  noInputAlternative?: {
    after: string;
    rationale: string;
  };
}

/**
 * Per-bullet substance, structured around the XYZ formula.
 *
 * Wording is deliberately absent: judging verbs and concision needs neither the
 * knowledge base nor the surrounding bullets, so it runs as a separate, cheaper
 * pass (`WordingDiagnosis`) rather than diluting this one.
 */
/** Which axis a check was made on. Recorded so a run can be audited for breadth. */
export type CheckKind =
  /** Is the named technology recognised vocabulary, and is it current? */
  | 'technology'
  /** Is the size of this figure ordinary for what produced it? */
  | 'figure'
  /** Is this how the work is normally done, and does it produce what is claimed? */
  | 'method';

export interface ClaimCheck {
  kind: CheckKind;
  /** What was checked, quoted from the bullet where possible. */
  claim: string;
  /** The technology, figure source or approach the claim rests on. */
  basis: string;
  /** What the check showed, or that nothing established was found. */
  finding: string;
}

/**
 * One fault, with what fixing it would cost the line.
 *
 * The cost is here because nothing else in the reading has one. Asked what a
 * bullet is missing, a model answers for as long as there is anything missing —
 * and in a technical entry there always is: the resolution, the batch size, the
 * warm-up, the seed. Every one of those genuinely changes how a figure reads,
 * and all of them together do not fit on a page. A price beside each demand is
 * what makes "worth it" a question that can be asked at all.
 */
export interface BulletIssue {
  /** What is wrong, one plain sentence. */
  what: string;
  /** Roughly how many words answering it would add to the line. */
  costWords: number;
}

export interface BulletDiagnosis {
  bulletId: string;
  /** 0–100, weighted across the three dimensions below. */
  overallScore: number;
  dimensions: {
    /** X — is there an outcome, or only a duty that was assigned? */
    impact: ScoredDimension;
    /** Y — is the claim backed by a verifiable figure? */
    measurement: ScoredDimension;
    /** Z — is the method concrete enough to be credible? */
    method: ScoredDimension;
  };
  /** What is wrong with this bullet, dearest-to-answer last. */
  issues: BulletIssue[];
  strengths: string[];
  /**
   * Figures whose size depends on a named technique, and what checking that
   * technique showed.
   *
   * A required field rather than an invitation. Told only that it *may* look
   * something up, the loop reaches for the corpus, finds a rule about missing
   * baselines, and scores a figure as checkable without ever asking whether
   * the figure is ordinary — which is how a saving that the named technique
   * produces most of by definition passes as the strongest line in its entry.
   *
   * Empty is a legitimate answer, and so is a `finding` of "no published
   * norm": a technique nobody has benchmarked is a fact about the technique.
   *
   * `kind` exists so a run can be audited for breadth rather than only for
   * effort. The first version of this field had no axis and no per-axis
   * requirement, and a full run produced twelve checks of which twelve were
   * numeric — the loop reaches for figures unprompted and leaves terminology
   * and method alone unless told otherwise.
   */
  claimsToVerify: ClaimCheck[];
  rewrite?: RewriteSuggestion;
}

/** Judgements that only exist once the bullets of one entry are seen together. */
export interface EntryNarrative {
  /** Bullets that restate one another. */
  redundantPairs: Array<{ bulletA: string; bulletB: string; note: string }>;
  /** Set when the strongest achievement is not the opening bullet. */
  weakLead: boolean;
  /** Does the entry read as one story, or as an unordered task list? */
  coherence: ScoredDimension;
  /** Bullet ids in the order they would land harder. */
  suggestedOrder?: string[];
}

/** Output of the Entry Substance agent: one entry, judged whole. */
export interface EntryDiagnosis {
  entryId: string;
  overallScore: number;
  bullets: BulletDiagnosis[];
}

/** Output of the Entry Wording agent — no knowledge base, cheap model. */
export interface WordingDiagnosis {
  entryId: string;
  overallScore: number;
  perBullet: Array<{
    bulletId: string;
    /** Leading verb: is it an action, or "responsible for"? */
    verbStrength: ScoredDimension;
    /** Filler, hedging, repetition within the line. */
    concision: ScoredDimension;
    issues: string[];
  }>;
}

/** Output of the Narrative agent, read across every entry rather than within one. */
export interface NarrativeAssessment {
  overallScore: number;
  /** How the career story reads end to end. */
  arc: string;
  /** Unexplained time gaps, unexplained pivots, seniority that goes backwards. */
  gaps: string[];
  /** Entries that would land better reordered, shortened or cut. */
  orderingNotes: string[];
  /**
   * How each entry reads as a unit — the same judgement at a smaller scale.
   *
   * This lived on `EntryDiagnosis`, produced by the reader that scores bullets,
   * because that reader had the entry in front of it. That was convenience
   * rather than a reason: whether two lines repeat each other and what order
   * they would land in is the same question being asked across a whole resume
   * here, and asking it in two places meant two readers judging order.
   */
  withinEntries: EntryRead[];
}

export interface EntryRead {
  entryId: string;
  /** Bullets that restate one another. */
  redundantPairs: Array<{ bulletA: string; bulletB: string; note: string }>;
  /** Does the entry read as one story, or as an unordered task list? */
  coherence: ScoredDimension;
  /** Bullet ids in the order they would land harder. */
  suggestedOrder?: string[];
  /**
   * Set when the strongest bullet is not the opening one.
   *
   * Computed from the content reader's own scores rather than judged here.
   * Deciding which bullet is strongest is exactly what that reader just did,
   * and a second opinion on it is a second opinion, not a check.
   */
  weakLead?: boolean;
}

/**
 * Whole-document format check. Computed by pure algorithm — no LLM call, the
 * same way the reference project scored speech from timestamps alone.
 */
export interface FormatDiagnosis {
  overallScore: number;
  metrics: {
    /** Page and word count against the one-page-under-ten-years convention. */
    length: ScoredDimension & { pageCount: number; wordCount: number };
    /** Share of bullets carrying at least one figure. Below 0.5 is a red flag. */
    quantifiedRatio: ScoredDimension & { ratio: number };
    /** Share of bullets opening with an action verb. */
    verbFirstRatio: ScoredDimension & { ratio: number };
    /** Date formats, tense, punctuation, heading style. */
    consistency: ScoredDimension & { inconsistencies: string[] };
    /** Multi-column layout, tables, text in images, unusual glyphs. */
    atsParsability: ScoredDimension & { blockers: string[] };
  };
  issues: string[];
}

export interface KeywordHit {
  keyword: string;
  /** Bullets or header lines where it appears. */
  locations: string[];
}

export interface MissingKeyword {
  keyword: string;
  required: boolean;
  /** Where it could plausibly be added, if the user has the experience. */
  suggestedSection?: SectionKind;
}

export interface JdMatch {
  /** 0–100 coverage of the job description's stated requirements. */
  overallScore: number;
  covered: KeywordHit[];
  missing: MissingKeyword[];
  /** Requirements the resume contradicts or clearly cannot meet. */
  gaps: string[];
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

export interface ReportSummary {
  totalEntries: number;
  totalBullets: number;
  /** 0–100 across substance, wording, format and (when supplied) JD match. */
  overallScore: number;
  substanceAvg: number;
  wordingAvg: number;
  formatScore: number;
  narrativeScore?: number;
  jdScore?: number;
  topStrengths: string[];
  topWeaknesses: string[];
}

/**
 * Why an entry has no score.
 *
 * These were all zero, which made a degree — a header and dates, with nothing a
 * bullet reader could score — indistinguishable in the report from an entry
 * that was read and found to be worth nothing.
 */
export type ReviewStatus = 'reviewed' | 'not-run' | 'not-applicable';

export interface ReportCoverage {
  /** Entries a per-entry reader could score: the ones with bullets. */
  eligibleEntries: number;
  /** Entries with nothing to score. A degree is a header and dates. */
  notApplicableEntries: number;
  contentReviewed: number;
  wordingReviewed: number;
  narrative: 'done' | 'not-run';
  /** `no-posting` is not a gap: there was nothing to compare against. */
  jdMatch: 'done' | 'not-run' | 'no-posting';
  format: 'done' | 'not-run';
}

/**
 * The diagnosis written out, once, at the length a person can look things up in.
 *
 * Two documents come from this and only one is written: the brief is this with
 * every point's `what` kept and the rest dropped. Deriving it rather than
 * writing it twice is what makes them consistent — a brief written separately
 * can say something the full report does not, and nothing here could ever
 * notice.
 */
export interface FullReport {
  sections: Array<{
    /** An entry, or a heading for what runs across the whole resume. */
    heading: string;
    points: FullReportPoint[];
  }>;
}

export interface FullReportPoint {
  /** The finding in one sentence. This, alone, is the brief. */
  what: string;
  /** What a reader would do differently knowing it. */
  why: string;
  /** The words from the résumé it rests on, quoted. */
  evidence?: string;
  /** Which readings raised it — several, where they agreed. */
  from: string[];
  /** Roughly what answering it adds to the line, where it adds anything. */
  cost?: string;
}

export interface ImprovementPlan {
  /** Mechanical fixes the user can apply right now. */
  immediate: string[];
  /** Rewrites that need the user to dig up real numbers. */
  shortTerm: string[];
  /** Gaps only new experience can close. */
  longTerm: string[];
  /**
   * Findings that did not fit, and why.
   *
   * The page is finite and the readings are not: a resume can attract three
   * times more demands than it has room to answer. Something has to be left
   * out, and the choice is worth more than the omission — a candidate who can
   * see what was set aside can disagree with the ordering, where one who sees a
   * shorter list cannot tell it was ever longer.
   */
  setAside?: Array<{ what: string; because: string }>;
}

export interface VersionComparison {
  previousSessionId: string;
  scoreChange: number;
  resolvedViolations: string[];
  newViolations: string[];
}

export interface DiagnosisReport {
  summary: ReportSummary;
  perEntry: Array<{
    entryId: string;
    label: string;
    /** Absent where nothing scored it — a zero means a zero. */
    score?: number;
    status: ReviewStatus;
    topIssue: string;
    bullets: Array<{ bulletId: string; text: string; score?: number; topIssue: string }>;
  }>;
  /**
   * What was actually read, so a partial review cannot pass for a whole one.
   *
   * Arithmetic, not judgement: it counts what ran. Whether that is enough — and
   * whether to go back and cover the rest — is the coordinator's call, and it
   * can only make it if it is told.
   */
  coverage: ReportCoverage;
  /**
   * The long form, for looking things up in.
   *
   * Kept on the session rather than returned to the coordinator: it runs to
   * about twice the rest of the report, and the coordinator's window is twelve
   * thousand tokens. It reads the short form, which is this with every point's
   * first sentence kept.
   */
  full?: FullReport;
  format: FormatDiagnosis;
  narrative?: NarrativeAssessment;
  jdMatch?: JdMatch;
  improvementPlan: ImprovementPlan;
  /** One per bullet weak enough to be worth replacing, in report order. */
  rewrites?: Array<RewriteSuggestion & { bulletId: string }>;
  comparedToPrevious?: VersionComparison;
}

// ---------------------------------------------------------------------------
// Domain views onto the domain-agnostic Harness
// ---------------------------------------------------------------------------

/**
 * The resume-shaped view of `Session.state`.
 *
 * The Session layer stores state as an opaque bag so it stays reusable; this
 * is the narrowing Skills apply when they read it back. The index signature is
 * what makes the two assignable in both directions.
 */
export interface ResumeSessionState {
  mode?: 'diagnose' | 'tailor' | 'grill' | 'compare';
  resume?: ResumeDocument;
  jd?: JobDescription;
  entryDiagnoses?: EntryDiagnosis[];
  wordingDiagnoses?: WordingDiagnosis[];
  formatDiagnosis?: FormatDiagnosis;
  narrative?: NarrativeAssessment;
  jdMatch?: JdMatch;
  latestReport?: DiagnosisReport;
  /** Entry or bullet ids the user chose to exclude. */
  skipped?: string[];
  /**
   * What the candidate told the agent that the page does not say.
   *
   * Kept in state rather than left in the transcript because a conversation
   * outruns its own window: a figure given at message four is evicted by
   * message twenty, and asking for it twice is how a tool stops being worth
   * talking to. Rendered into the task layer, where compaction cannot reach it.
   */
  suppliedFacts?: SuppliedFact[];
  [key: string]: unknown;
}

/**
 * What Memory keeps about the candidate across sessions.
 *
 * Passed to `MemoryStore<CandidateProfile>` — the store itself is generic and
 * has no idea a candidate exists.
 */
export interface SuppliedFact {
  /** Their words, not a claim distilled out of them. */
  fact: string;
  bulletId?: string;
  entryId?: string;
}

export interface CandidateProfile {
  targetRole?: string;
  targetLevel?: string;
  techStack?: string[];
  yearsExperience?: number;
  /** Dimensions that keep scoring low across resume versions. */
  weakDimensions?: DiagnosisDimension[];
  strongDimensions?: DiagnosisDimension[];
  lastOverallScore?: number;
  totalDiagnoses?: number;
  scoreHistory?: Array<{ date: string; score: number }>;
}
