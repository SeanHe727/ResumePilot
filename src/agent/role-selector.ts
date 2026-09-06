import type { RoleSelection, RoleSelectionInput, RoleSelector } from './types.js';

/**
 * Which roles run, chosen from a fixed catalogue.
 *
 * The reference project did this with one line — `if (params.timestamps)` add
 * the speech agent — and that is the right shape: the roles themselves are
 * declared ahead of time, and only their inclusion varies. Letting a model
 * invent the topology would buy unpredictable cost and unreproducible runs for
 * variation the knowledge base already absorbs.
 */
export class DefaultRoleSelector implements RoleSelector {
  select(input: RoleSelectionInput): RoleSelection {
    const roles: RoleSelection['roles'] = [];
    const reasons: Record<string, string> = {};

    if (input.entryCount > 0) {
      roles.push('entry-substance');
      reasons['entry-substance'] = `${input.entryCount} entries to score`;
    } else {
      reasons['entry-substance'] = 'no entries found';
    }

    // Verb strength and concision are judgements about wording, and on text a
    // parser could barely read the wording on the page is not the wording that
    // reached us. Scoring it would report the extractor's mistakes as the
    // candidate's.
    if (input.entryCount > 0 && input.quality === 'clean') {
      roles.push('entry-wording');
      reasons['entry-wording'] = 'text extracted cleanly';
    } else if (input.entryCount > 0) {
      reasons['entry-wording'] = `skipped: extraction was ${input.quality}`;
    }

    if (input.hasJd) {
      roles.push('jd-match');
      reasons['jd-match'] = 'job description attached';
    } else {
      reasons['jd-match'] = 'skipped: no job description attached';
    }

    // One entry has no sequence to read, and the per-entry agent already
    // covers the narrative inside a single position.
    if (input.entryCount > 1) {
      roles.push('narrative');
      reasons['narrative'] = `${input.entryCount} entries to read in sequence`;
    } else {
      reasons['narrative'] = 'skipped: needs more than one entry';
    }

    return { roles, reasons };
  }
}
