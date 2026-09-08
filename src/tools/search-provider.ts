/**
 * Web search, behind an interface for the same reason the LLM providers are.
 *
 * The search vendors differ in what they return — Tavily hands back an extract
 * already trimmed for a model, Brave and Serper hand back raw SERP rows that
 * need their own scraping pass. Which one is behind this decides cost and
 * quality but nothing about how a tool calls it, so it stops here.
 */
export interface SearchResult {
  title: string;
  url: string;
  /** An extract, not the page. Capped by the provider adapter, not the caller. */
  content: string;
  /** Only some providers date their results, and only for some pages. */
  publishedAt?: string;
  /** Provider's own relevance score, 0-1. Comparable within one response only. */
  score?: number;
}

export interface SearchOptions {
  limit: number;
  /** Drop anything older than this. Conventions and postings go stale; physics does not. */
  recencyDays?: number;
  /** Restrict to these hosts. */
  domains?: string[];
  signal?: AbortSignal;
}

export interface SearchProvider {
  readonly name: string;
  search(query: string, options: SearchOptions): Promise<SearchResult[]>;
}

/** Raised for anything the caller should classify rather than crash on. */
export class SearchError extends Error {
  constructor(
    message: string,
    readonly kind: 'timeout' | 'service_error',
  ) {
    super(message);
    this.name = 'SearchError';
  }
}

/**
 * How much of one result's extract survives.
 *
 * A search that answers "is this figure typical?" needs enough prose to carry a
 * claim and a condition, and nothing beyond that. Five results at this cap sit
 * near a thousand tokens, which a diagnosis agent can hold alongside the entry
 * it is judging.
 */
const CONTENT_CAP = 800;

const DEFAULT_TIMEOUT_MS = 15_000;

/**
 * Tavily.
 *
 * Chosen over the SERP APIs because its `content` field is an extract of the
 * page rather than the search-result blurb, so a caller gets something worth
 * reasoning about without a scraping pass of its own.
 */
export class TavilyProvider implements SearchProvider {
  readonly name = 'tavily';

  constructor(
    private readonly apiKey: string,
    private readonly timeoutMs = DEFAULT_TIMEOUT_MS,
  ) {}

  async search(query: string, options: SearchOptions): Promise<SearchResult[]> {
    // Two deadlines: the caller's, which cancels the whole diagnosis, and this
    // one, which only gives up on the search. Either aborts the request.
    const own = AbortSignal.timeout(this.timeoutMs);
    const signal = options.signal ? AbortSignal.any([options.signal, own]) : own;

    let response: Response;
    try {
      response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          query,
          max_results: options.limit,
          search_depth: 'basic',
          ...(options.recencyDays ? { days: options.recencyDays } : {}),
          ...(options.domains?.length ? { include_domains: options.domains } : {}),
        }),
        signal,
      });
    } catch (err) {
      // An abort surfaces here rather than as a non-OK response, and the two
      // deadlines are indistinguishable at this point — both mean "no answer
      // in time", which is what the caller acts on.
      if (err instanceof Error && (err.name === 'AbortError' || err.name === 'TimeoutError')) {
        throw new SearchError(`search timed out after ${this.timeoutMs}ms`, 'timeout');
      }
      throw new SearchError(
        `search request failed: ${err instanceof Error ? err.message : String(err)}`,
        'service_error',
      );
    }

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new SearchError(
        `tavily returned ${response.status}${body ? `: ${body.slice(0, 200)}` : ''}`,
        'service_error',
      );
    }

    const payload = (await response.json().catch(() => null)) as TavilyResponse | null;
    if (!payload || !Array.isArray(payload.results)) {
      throw new SearchError('tavily returned a body with no results array', 'service_error');
    }

    return payload.results.slice(0, options.limit).map(toResult);
  }
}

interface TavilyResponse {
  results?: Array<{
    title?: unknown;
    url?: unknown;
    content?: unknown;
    published_date?: unknown;
    score?: unknown;
  }>;
}

function toResult(raw: NonNullable<TavilyResponse['results']>[number]): SearchResult {
  return {
    title: text(raw.title, 200),
    url: text(raw.url, 500),
    content: sanitise(text(raw.content, CONTENT_CAP)),
    ...(typeof raw.published_date === 'string' ? { publishedAt: raw.published_date } : {}),
    ...(typeof raw.score === 'number' ? { score: Number(raw.score.toFixed(3)) } : {}),
  };
}

function text(value: unknown, cap: number): string {
  return typeof value === 'string' ? value.slice(0, cap).trim() : '';
}

/**
 * Blunts the delimiters the prompts use to mark untrusted regions.
 *
 * A page can say anything, including `</web_results>` followed by fresh
 * instructions. Stripping the angle brackets leaves the sentence readable and
 * takes the closing tag away, which is the half that matters.
 */
function sanitise(content: string): string {
  return content.replace(/<\/?(?:web_results|resume_content|system|instructions)\b[^>]*>/gi, ' ');
}
