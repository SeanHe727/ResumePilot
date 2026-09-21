/**
 * Every prompt in the project, one file per role.
 *
 * They were spread across seven files before this — beside the tool that sent
 * them, beside the role config that named them, inline in a loop — which meant
 * reading what an agent is told took seven files and finding out whether two of
 * them said the same thing took a search.
 */
export * from './fragments.js';
export * from './main-agent.js';
export * from './content.js';
export * from './deep-research.js';
export * from './wording.js';
export * from './narrative.js';
export * from './jd-match.js';
export * from './rewrite.js';
export * from './full-report.js';
export * from './generate-report.js';
export * from './internal.js';
