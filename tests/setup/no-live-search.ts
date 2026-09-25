/**
 * Tripwire: no test may reach the real search API.
 *
 * The Tavily free tier is a monthly quota shared with development runs, and a
 * test that spends it passes today and starves the next diagnosis. Tests that
 * exercise `TavilyProvider` swap `globalThis.fetch` for a stub of their own,
 * which replaces this wrapper for their duration; anything that falls through
 * to the real fetch with a Tavily URL fails loudly instead of spending a call.
 * An end-to-end run that means to spend it sets RESUMEPILOT_LIVE_SEARCH=1.
 */
const realFetch = globalThis.fetch;

globalThis.fetch = (async (input: Parameters<typeof fetch>[0], init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (process.env.RESUMEPILOT_LIVE_SEARCH !== '1' && /^https?:\/\/api\.tavily\.com\//i.test(url)) {
    throw new Error(`live search call in a test: ${url} — stub fetch or use a fake SearchProvider`);
  }
  return realFetch(input, init);
}) as typeof fetch;
