/**
 * The one check kept between the model and the user.
 *
 * Everything else this file used to do — verifying quotes, gating on coverage,
 * range-checking scores — went beyond what the reference project does, which is
 * `JSON.parse` and return. Those checks discarded results, and a diagnosis that
 * quietly loses half its findings is worse than one that is occasionally sloppy.
 *
 * These two stay because this product does something the reference project does
 * not: it produces text the user will paste into a real resume. An invented
 * metric there is a question they cannot answer in an interview.
 */

/**
 * Every figure in a piece of text, normalised for comparison.
 *
 * Formatting is stripped so "1,200" and "1200" compare equal, and units stay
 * out of the token so "800ms" matches a source that said "800 ms".
 */
export function extractNumbers(text: string): string[] {
  const matches = text.match(/\d[\d,._]*\d|\d/g) ?? [];
  return matches.map((n) => n.replace(/[,_\s]/g, '').replace(/\.$/, ''));
}

export interface NumberCheck {
  ok: boolean;
  /** The figures at fault — invented ones, or erased ones. */
  figures: string[];
}

/**
 * Rejects a rewrite that states a figure the original does not contain.
 *
 * A bullet saying "improved performance" has no measurement, the XYZ shape
 * wants one, and a model completing that pattern will produce "reduced latency
 * by 40%". The 40% is invented; the candidate pastes it into a real resume and
 * cannot defend it. The prompt asks the model not to do this, but asking is a
 * request — this is the constraint.
 *
 * Bracketed placeholders are how a rewrite shows the shape of a missing figure
 * without asserting one, so they are exempt.
 */
export function checkNoFabricatedNumbers(before: string, after: string): NumberCheck {
  const original = new Set(extractNumbers(before));
  const withoutPlaceholders = after.replace(/[[{<][^\]}>]*[\]}>]/g, ' ');

  const invented = extractNumbers(withoutPlaceholders).filter((n) => !original.has(n));
  return { ok: invented.length === 0, figures: invented };
}

/**
 * Rejects a rewrite that replaced the candidate's own figures with blanks.
 *
 * The mirror of fabrication, and worse in practice. Reaching for the XYZ
 * template, a model returns "cut P99 from [X ms] to [Y ms]" for a bullet that
 * already said 800ms and 90ms. Nothing was invented, so the check above passes,
 * and the candidate is handed a form to re-enter numbers they had written down.
 *
 * A majority must survive rather than merely one, because metric names carry
 * digits: the 99 in "P99" would otherwise satisfy the check on its own.
 */
export function checkNoErasedNumbers(before: string, after: string): NumberCheck {
  const original = extractNumbers(before);
  if (original.length === 0) return { ok: true, figures: [] };

  const kept = new Set(extractNumbers(after));
  const lost = original.filter((n) => !kept.has(n));

  return { ok: lost.length <= original.length / 2, figures: lost };
}

/** Bracketed spans the rewrite left for the user to fill in. */
export function extractPlaceholders(text: string): string[] {
  return [...text.matchAll(/\[([^\]]+)\]/g)].map((m) => m[1]!.trim());
}

/**
 * Pulls a JSON object out of a model response.
 *
 * The reference project calls `JSON.parse` on the whole reply, which fails
 * whenever the model wraps its JSON in a fence or a sentence — as it usually
 * does. Same intent, three shapes tried instead of one.
 */
export function parseJsonObject(text: string): Record<string, unknown> | null {
  const candidates = [
    /```(?:json)?\s*\n([\s\S]*?)\n```/.exec(text)?.[1],
    // Greedy on purpose: the outermost braces are the whole object.
    /\{[\s\S]*\}/.exec(text)?.[0],
    text,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const parsed: unknown = JSON.parse(candidate.trim());
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      // Try the next shape.
    }
  }
  return null;
}
