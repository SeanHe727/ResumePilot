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
  return readJson(text).value as Record<string, unknown> | null;
}

/**
 * Parses a model's JSON, and says what went wrong when it cannot.
 *
 * The reason matters as much as the result. A silent fallback to "it replied
 * in prose" sends you looking at the prompt, when the actual fault is one raw
 * newline in the middle of a four-thousand-character object that was otherwise
 * exactly right.
 */
export function readJson(text: string): { value: unknown; error?: string } {
  // Only the first two are JSON-shaped. `text` is the last resort for a reply
  // that is bare JSON with no wrapper, and a failure on it says nothing — the
  // reply may simply be prose, which is a different fault from a malformed
  // object and points somewhere else entirely.
  const shaped = [
    /```(?:json)?\s*\n([\s\S]*?)\n```/.exec(text)?.[1],
    firstJsonObject(text),
  ].filter((c): c is string => c !== undefined && c !== null);

  let firstError: string | undefined;

  for (const candidate of [...shaped, text]) {
    const trimmed = candidate.trim();

    for (const attempt of [trimmed, repairJson(trimmed)]) {
      try {
        const parsed: unknown = JSON.parse(attempt);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          return { value: parsed };
        }
      } catch (err) {
        if (shaped.includes(candidate)) {
          firstError ??= err instanceof Error ? err.message : String(err);
        }
      }
    }
  }

  return { value: null, ...(firstError ? { error: firstError } : {}) };
}

/**
 * The first balanced `{...}`, ignoring braces inside strings.
 *
 * A greedy `/\{[\s\S]*\}/` runs from the first brace to the last one anywhere
 * in the reply, so a closing sentence like "let me know if you want {more}
 * detail" swallows the object and parses as nothing.
 */
export function firstJsonObject(text: string): string | null {
  const start = text.indexOf('{');
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i++) {
    const char = text[i]!;

    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }

    if (char === '"') inString = true;
    else if (char === '{') depth += 1;
    else if (char === '}' && --depth === 0) return text.slice(start, i + 1);
  }

  return null;
}

/**
 * Repairs the two things models get wrong about JSON.
 *
 * A raw newline inside a string — which is what a model writes when a `detail`
 * field runs long — and a comma before a closing brace. Both are rejected
 * outright by `JSON.parse`, and both leave four thousand characters of correct
 * diagnosis unreadable over one character.
 *
 * Deliberately narrow. This escapes control characters and drops trailing
 * commas; it does not try to close an unterminated object, because a truncated
 * answer is missing findings and inventing a closing brace would present a
 * partial diagnosis as a complete one.
 */
export function repairJson(text: string): string {
  let out = '';
  let inString = false;
  let escaped = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i]!;

    if (inString) {
      if (escaped) {
        escaped = false;
        out += char;
      } else if (char === '\\') {
        escaped = true;
        out += char;
      } else if (char === '"') {
        inString = false;
        out += char;
      } else if (char === '\n') out += '\\n';
      else if (char === '\r') out += '\\r';
      else if (char === '\t') out += '\\t';
      else if (char < ' ') out += `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
      else out += char;
      continue;
    }

    if (char === '"') {
      inString = true;
      out += char;
      continue;
    }

    // A comma with only whitespace between it and a closing bracket.
    if (char === ',' && /^\s*[}\]]/.test(text.slice(i + 1))) continue;

    out += char;
  }

  return out;
}
