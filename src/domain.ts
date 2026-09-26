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

/**
 * Why a section was given the kind it has, and how nearly it was given
 * another.
 *
 * Recorded rather than acted on. A section the evidence barely settled is the
 * one worth a second look, and a number that says so is how it gets asked for
 * — by a reader, or by the integrity pass, rather than by a rule here that
 * would be guessing twice.
 */
export interface SectionClassification {
  /** How far ahead the winner finished. Never below zero. */
  confidence: number;
  /**
   * The same distance, signed — and the reason there are two of these.
   *
   * A zero `confidence` used to mean either of two different things: that two
   * kinds fitted equally well, or that a heading was followed over evidence
   * that pointed somewhere else. The first is a coin toss and the second is a
   * decision, and a reader asked to look at the doubtful ones needs to know
   * which. Negative here means the evidence wanted the runner-up.
   */
  margin: number;
  /** Which of the two settled it: the word at the top, or the rest. */
  decisionSource: 'heading' | 'evidence';
  evidence: string[];
  runnerUp?: { kind: SectionKind; score: number };
  /**
   * The heading is not one the vocabulary knows.
   *
   * Kept apart from `kind`, which used to carry both facts at once: a section
   * whose heading nobody recognises still has a shape, and reading it as prose
   * because of its name dropped its bullets where nothing looks. What the name
   * does say is that a commercial parser will not place it either, which is a
   * finding in its own right.
   */
  headingUnknown: boolean;
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
  classification?: SectionClassification;
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

/**
 * Something about the shape of the parse worth a second look.
 *
 * Recorded, never corrected. Each of these is a place where the pipeline did
 * something defensible and might have been wrong, and the only honest response
 * at this distance is to say so where a reader can see it.
 */
export interface ParseAnomaly {
  kind:
    /** An entry whose header is a date range and nothing a reader would name. */
    | 'date-only-entry'
    /** An entry nothing opened — a row owned by one before one existed. */
    | 'entry-without-header'
    /** A continuation with nothing above it to carry on from. */
    | 'dangling-continuation'
    /** A section cut where no heading was recognised anywhere on the page. */
    | 'guessed-boundary'
    /** A section filed by its heading against what its shape argued for. */
    | 'heading-overruled-evidence'
    /**
     * Bullets in a section that expects entries, with no entry to own them.
     *
     * The text is not lost and nothing is miscounted, which is why every other
     * check passes: the rows were claimed and labelled, just by the section
     * rather than by an entry. What is lost is the relationship — and a review
     * addresses an entry, so bullets nothing owns are bullets nothing can
     * review.
     */
    | 'bullets-without-entry'
    /**
     * A model was asked to group the rows and its answer was not usable.
     *
     * Not a failed parse — the rules grouped it instead and a document came
     * out. But which of the two read it changes what a reader should trust
     * about the entry boundaries, and nothing in the result says so.
     */
    | 'model-grouping-declined';
  /** The id or row this is about. */
  at: string;
  detail?: string;
}

/**
 * What became of every row, and what did not add up.
 *
 * The parse checked against itself. Rows go in and a document comes out, and
 * between the two a row can be dropped, counted twice, or left in a section
 * that ends up empty — none of which raises an error, because each stage did
 * what it was asked. This is the reconciliation, and it is kept on the
 * document rather than logged, because it is also a finding: where our own
 * parser loses the thread is where a commercial one will too.
 */
export interface ParseIntegrity {
  totalRows: number;
  placedRows: number;
  /** Rows no section claimed. */
  droppedRows: number[];
  /** Rows more than one section claimed. */
  duplicatedRows: number[];
  /** Rows inside a section that nothing gave a role to. */
  unlabelledRows: number[];
  /** Sections with no entries, no prose and no bullets. */
  emptySections: string[];
  /** Entries with no header and nothing under them. */
  emptyEntries: string[];
  /** Bullets whose marker was the whole line. */
  emptyBullets: string[];
  /** Sections whose heading row resolved to nothing. */
  invalidHeadings: string[];
  duplicateIds: string[];
  /** Entries and bullets naming a parent that is not there. */
  danglingRefs: string[];
  /** Bullets whose offsets do not lead back to their own words. */
  unmappedSpans: string[];
  anomalies: ParseAnomaly[];
}

export interface ResumeMeta {
  pageCount?: number;
  wordCount: number;
  quality: ExtractionQuality;
  /** Layout features that commonly break ATS parsers. */
  layoutWarnings: string[];
  /** Optional: a document parsed before this existed has none. */
  integrity?: ParseIntegrity;
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
  /** Hash of the bullets this read, set when it is filed. See `tools/versions.ts`. */
  readHash?: string;
  readAt?: string;
  overallScore: number;
  bullets: BulletDiagnosis[];
}

/** Output of the Entry Wording agent — no knowledge base, cheap model. */
export interface WordingDiagnosis {
  entryId: string;
  /** Hash of the bullets this read, set when it is filed. See `tools/versions.ts`. */
  readHash?: string;
  readAt?: string;
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
  /** Entries with a reading of the text they have now. */
  contentReviewed: number;
  wordingReviewed: number;
  /**
   * Of those, how many were read since the previous report. The rest are
   * readings of unchanged text, reused. Absent on the first report, where
   * everything was read for it.
   */
  contentReadSincePrevious?: number;
  wordingReadSincePrevious?: number;
  /**
   * Entries whose only reading is of text they no longer have. Their findings
   * are left out of the report rather than presented as about the page.
   */
  contentStale?: string[];
  wordingStale?: string[];
  narrative: 'done' | 'not-run';
  /** `no-posting` is not a gap: there was nothing to compare against. */
  jdMatch: 'done' | 'not-run' | 'no-posting';
  format: 'done' | 'not-run';
  /**
   * Text the parse kept and no review can address.
   *
   * Every count above is of entries, so material that never became an entry is
   * invisible to all of them — and a run once reported two of two entries read
   * while six bullets under a projects heading had been scored by nobody. A
   * reader of these numbers has to be able to see that.
   */
  unaddressable?: Array<{ sectionId: string; heading: string; bullets: number }>;
  /**
   * Reviews asked for against something that does not exist.
   *
   * The refusal reaches the model and stops there. Without this the report
   * cannot tell "nothing was wrong with that entry" from "the review never
   * ran", and the first traced run made four of these and reported complete
   * coverage.
   */
  rejectedTargets?: Array<{ role: string; target: string }>;
  /** Reviews that ran and came back with nothing. */
  failedTargets?: Array<{ role: string; target: string; reason: string }>;
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
    /**
     * An entry's own header, or the fixed title for what spans the document.
     *
     * Built here rather than written by the report model. A heading it writes
     * is an employer, a title and a date re-derived from text it was shown,
     * and the parse already knows all three: one of them coming back subtly
     * wrong reads as a report about a résumé nobody sent.
     */
    heading: string;
    /** What it is about, as resolved — absent on reports written before this. */
    target?: { type: 'entry'; entryId: string } | { type: 'resume' };
    points: FullReportPoint[];
  }>;
}

/**
 * One thing a reader found, with an identity that survives being rewritten.
 *
 * The findings reach the report through two models that both restate them in
 * their own words, so nothing downstream can be matched back by text. Without
 * an id, "did the researcher's finding make it into the report" is a question
 * the record cannot answer — which is most of what the record is for.
 *
 * The id is scoped to one report: `c3` is the third thing the content readers
 * raised, in the order they were collected. Numbered per role rather than
 * globally so that one reader finding more than last time does not renumber
 * everybody else's.
 */
export interface SourceFinding {
  id: string;
  role: 'content' | 'wording' | 'narrative' | 'posting' | 'file';
  /** Which line, entry or part of the document it is about. */
  target: string;
  what: string;
  /** Roughly what answering it costs the page, where that is known. */
  costWords?: number;
}

export interface FullReportPoint {
  /**
   * This point, addressable and unique — `report_point_<uuid>`.
   *
   * Unique outright rather than numbered by position: a number only means
   * anything beside the list that produced it, and the lists are exactly what
   * this is meant to be read across.
   */
  id: string;
  /**
   * The findings it rests on, checked against the ones actually offered.
   *
   * A report writer may merge several into one point, and may not invent a
   * source: an id that was not on the list is dropped before the point is
   * accepted, and the drop is recorded rather than passed on.
   */
  sourceFindingIds: string[];
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

/**
 * Findings the selection put together, by id.
 *
 * The selection marks findings; it does not write advice of its own. It used to
 * return one sentence per item, and a sentence can name a range: "Tighten
 * s2:e0:b0-b3 by leading with the action and result" folded a line the wording
 * reader had called outcome-first into advice meant for two others, and the
 * writer then turned it into advice about that line alone. The lines a group is
 * about are now worked out here from its findings.
 */
export interface PlanGroup {
  kind: 'immediate' | 'shortTerm' | 'longTerm';
  findingIds: string[];
  /** The lines its findings are about, derived from them rather than written. */
  targets: string[];
  /** What the findings ask for together, in one line, naming no lines. */
  note: string;
}

export interface ImprovementPlan {
  /** What was chosen, as the selection marked it. Absent on reports written before. */
  groups?: PlanGroup[];
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
  /** Minted when the report is written. Absent on reports written before. */
  id?: string;
  createdAt?: string;
  /** The document version it was written against. */
  documentVersion?: number;
  /** How many supplied facts existed when it was written. */
  factsKnown?: number;
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
  /** Every report written for this document, oldest first. The last is `latestReport`. */
  reports?: DiagnosisReport[];
  /**
   * Starts at 1 when a document is parsed and goes up by one with each kept
   * revision. Readings are matched to text by hash, not by this; it is what a
   * report records so `/report` can say what changed after it was written.
   */
  documentVersion?: number;
  /** Each kept revision, in order, with the version it produced. */
  revisions?: Revision[];
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
  /**
   * What was attempted and did not produce a reading.
   *
   * On the session because the product reads the session and never the trace:
   * the trace is a development instrument that is absent in production, so a
   * failure that has to reach a report has to be written down here when it
   * happens. Cleared with the diagnoses when a new document replaces the old
   * one — a refusal is about the document it was asked against.
   */
  reviewAttempts?: Array<{ role: string; target: string; outcome: 'rejected' | 'failed'; reason: string }>;
  [key: string]: unknown;
}

/**
 * What Memory keeps about the candidate across sessions.
 *
 * Passed to `MemoryStore<CandidateProfile>` — the store itself is generic and
 * has no idea a candidate exists.
 */
/**
 * One change to the working copy.
 *
 * Append-only: undoing a revision is itself a revision, carrying the text back,
 * so the version number only ever moves forward and a report's version always
 * names one state of the page.
 */
export interface Revision {
  version: number;
  bulletId: string;
  before: string;
  after: string;
  at: string;
  /** Set when this revision undid an earlier one: that one's version. */
  reverts?: number;
}

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
