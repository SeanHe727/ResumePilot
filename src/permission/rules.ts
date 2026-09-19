import type { PermissionRule } from './types.js';

/**
 * Default deny.
 *
 * Nothing here grants a blanket allowance: a tool with no matching rule is
 * refused, so adding a tool without adding a rule fails closed rather than
 * silently inheriting permission from a wildcard.
 *
 * The gate governs *which operations run*. It does not govern *what data
 * leaves the machine* — that is the redactor's job, and it is why the analysis
 * tools sit at `low` despite sending résumé text to a provider.
 */
export const DEFAULT_RULES: readonly PermissionRule[] = [
  // --- low: local, reversible, no side effects outside the process ---
  {
    id: 'allow-analyze-format',
    name: 'Format analysis',
    match: { type: 'tool_name', pattern: 'analyze_format' },
    level: 'low',
    action: 'allow',
    reason: 'Pure local computation over the parsed document.',
  },
  {
    id: 'allow-query-knowledge-base',
    name: 'Knowledge base lookup',
    match: { type: 'tool_name', pattern: 'query_knowledge_base' },
    level: 'low',
    action: 'allow',
    reason: 'Read-only query against a local database.',
  },
  {
    id: 'allow-analyze-entry',
    name: 'Entry diagnosis',
    match: { type: 'tool_name', pattern: 'analyze_entry' },
    level: 'low',
    action: 'allow',
    reason: 'Model call that reads the entry and returns scores; writes nothing.',
  },
  {
    id: 'allow-analyze-wording',
    name: 'Wording diagnosis',
    match: { type: 'tool_name', pattern: 'analyze_wording' },
    level: 'low',
    action: 'allow',
    reason: 'Model call that reads the entry and returns scores; writes nothing.',
  },
  {
    id: 'allow-rewrite-bullet',
    name: 'Bullet rewrite',
    match: { type: 'tool_name', pattern: 'rewrite_bullet' },
    level: 'low',
    action: 'allow',
    reason: 'Proposes replacement text; the user decides whether to use it.',
  },
  {
    id: 'allow-web-search',
    name: 'Web search',
    match: { type: 'tool_name', pattern: 'web_search' },
    level: 'low',
    action: 'allow',
    reason:
      'Sends a query to the configured search provider. Low rather than confirm ' +
      'for the reason the analysis tools are: the gate decides which operations ' +
      'run, and consent to this destination is the API key the user supplied — ' +
      'without it the tool is not registered at all. A confirm here would also ' +
      'be a silent deny in a non-interactive run, where the confirmer refuses ' +
      'everything. What must not leave is handled where it is composed, in the ' +
      'tool itself.',
  },
  {
    id: 'allow-specialist-review',
    name: 'Specialist review',
    match: { type: 'tool_name', pattern: /^review_/ },
    level: 'low',
    action: 'allow',
    reason: 'Hands one entry or the document to a specialist and reads back what it found.',
  },
  {
    id: 'allow-parse-resume',
    name: 'Read a resume file',
    match: { type: 'tool_name', pattern: 'parse_resume' },
    level: 'low',
    action: 'allow',
    reason:
      'Reads a path the candidate gave and parses it onto the session. It opens a file, ' +
      'which is why it is named here rather than left to the fallback — but the path comes ' +
      'from the person whose resume it is, and nothing is written back to disk.',
  },
  {
    id: 'allow-examine-depth',
    name: 'Ask a field specialist',
    match: { type: 'tool_name', pattern: 'examine_technical_depth' },
    level: 'low',
    action: 'allow',
    reason:
      'Runs one nested agent over one entry and returns what it found. Costs a model call ' +
      'and writes nothing.',
  },
  {
    id: 'allow-record-fact',
    name: 'Record something the candidate said',
    match: { type: 'tool_name', pattern: 'record_fact' },
    level: 'low',
    action: 'allow',
    reason:
      'Writes to the working copy in this session only. Nothing reaches long-term ' +
      'memory from here — that stays behind the memory-write confirmation below.',
  },
  {
    id: 'allow-apply-revision',
    name: 'Keep a rewritten bullet',
    match: { type: 'tool_name', pattern: 'apply_revision' },
    level: 'low',
    action: 'allow',
    reason:
      'Replaces a line in the session working copy, never the file on disk, and only ' +
      'after the candidate has said which wording they are keeping. A conversation that ' +
      'went wrong is undone by not saving it.',
  },
  {
    id: 'allow-generate-report',
    name: 'Report generation',
    match: { type: 'tool_name', pattern: 'generate_report' },
    level: 'low',
    action: 'allow',
    reason: 'Aggregates diagnoses already produced; no new side effect.',
  },

  // --- high: confirmed every time, because approving once should not
  // authorise a class of writes the user never saw ---
  {
    id: 'confirm-memory-write',
    name: 'Write to long-term memory',
    match: { type: 'operation', category: 'memory_write' },
    level: 'high',
    action: 'confirm',
    reason: 'Stores a conclusion about you that survives this session.',
    rememberApproval: false,
  },
  {
    id: 'confirm-export',
    name: 'Export or share',
    match: { type: 'tool_name', pattern: /export|share/ },
    level: 'high',
    action: 'confirm',
    reason: 'Sends the diagnosis somewhere outside this process.',
    rememberApproval: false,
  },

  // --- critical: never, whatever the caller claims ---
  {
    id: 'deny-network-unknown',
    name: 'Unrecognised network call',
    match: { type: 'operation', category: 'network_unknown' },
    level: 'critical',
    action: 'deny',
    reason: 'Outbound call to a destination no rule accounts for.',
  },
];

/** Synthesised when nothing matches, so a refusal still carries a rule and a reason. */
export const DEFAULT_DENY_RULE: PermissionRule = {
  id: 'default-deny',
  name: 'No matching rule',
  match: { type: 'tool_name', pattern: '' },
  level: 'critical',
  action: 'deny',
  reason: 'No rule grants this operation, and the default is to refuse.',
};
