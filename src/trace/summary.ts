/**
 * A trace, read back as the handful of facts a review of a run starts from.
 *
 * The first traced run was reviewed by hand: 462 events, read by two people,
 * who each counted spans, failures and dispatches their own way. The counts
 * that decide whether a run is worth reading further — did every span close,
 * which dispatches were refused, what did it cost, did a supplied fact reach
 * the reader who needed it, what did the report say it covered — are
 * mechanical, and this is where they are computed once.
 *
 * It judges nothing. Whether an agent chose sensibly is still a person reading
 * the prompts and answers; this only says where to look.
 */
import { estimateCostUsd } from '../config.js';
import type { TraceEvent } from './types.js';

export interface TraceSummary {
  events: number;
  /** The writer hit its byte cap and said so. A short trace is not a short run. */
  truncated: boolean;
  spans: { opened: number; closed: number; unclosed: number; orphans: number };
  model: ModelTotals;
  turns: TurnSummary[];
}

export interface ModelTotals {
  calls: number;
  cached: number;
  failed: number;
  /** Tries beyond the first, across every call. */
  retries: number;
  inputTokens: number;
  outputTokens: number;
  costUsd: number;
}

export interface TurnSummary {
  turn: number;
  /** What the person typed, as the loop recorded it. */
  said?: string;
  /** Tool calls the coordinator made, in order. */
  calls: ToolCallLine[];
  /** Sub-agents that ran, specialists and the ones nested inside them. */
  agents: AgentLine[];
  model: ModelTotals;
  /** From `generate_report`, when this turn produced one. */
  coverage?: unknown;
  /** From the report writer: where findings and report points fail to meet. */
  reportLinks?: { offered: number; unused: number; invented: string[]; unsourced: string[]; unknownTargets: string[] };
}

export interface ToolCallLine {
  tool: string;
  /** The id the call named, whichever field it used. */
  target?: string;
  status: 'success' | 'error' | 'unfinished';
  error?: string;
}

export interface AgentLine {
  role: string;
  kind: string;
  status: 'success' | 'error' | 'unfinished';
  durationMs?: number;
  /** Whether the briefing carried facts the candidate supplied in conversation. */
  withSuppliedFacts: boolean;
  target?: string;
  error?: string;
}

const TARGET_FIELDS = ['about', 'entryId', 'bulletId', 'sectionId', 'target', 'path'] as const;

export function summariseTrace(events: TraceEvent[]): TraceSummary {
  const opened = new Set<string>();
  const closed = new Set<string>();
  const known = new Set<string>();
  for (const e of events) {
    known.add(e.eventId);
    if (e.phase === 'span') opened.add(e.eventId);
    if (e.phase === 'span-end' && e.parentEventId) closed.add(e.parentEventId);
  }
  const orphans = events.filter((e) => e.parentEventId && !known.has(e.parentEventId)).length;

  const turns = new Map<number, TurnSummary>();
  const turnOf = (n: number): TurnSummary => {
    let t = turns.get(n);
    if (!t) {
      t = { turn: n, calls: [], agents: [], model: emptyTotals() };
      turns.set(n, t);
    }
    return t;
  };

  const total = emptyTotals();
  // Paired by call id: the request and its outcome are separate events.
  const pendingCalls = new Map<string, ToolCallLine>();
  // A sub-agent's dispatch and outcome share the span they were written in.
  const pendingAgents = new Map<string, AgentLine>();

  for (const e of events) {
    const turn = turnOf(e.turn);

    if (e.phase === 'input' && e.actor.kind === 'main' || e.phase === 'input' && e.actor.id === 'command') {
      const message = (e.input as { message?: unknown } | undefined)?.message;
      if (typeof message === 'string' && turn.said === undefined) turn.said = message;
    }

    // Model calls: the query engine writes `stage: 'request'` on its outcomes.
    if (e.stage === 'request' && (e.phase === 'result' || e.phase === 'failure')) {
      for (const totals of [total, turn.model]) countModel(totals, e);
    }

    if (e.actor.kind === 'main' && e.tool && e.phase === 'tool') {
      const line: ToolCallLine = { tool: e.tool, status: 'unfinished' };
      const target = targetOf(e.input);
      if (target) line.target = target;
      turn.calls.push(line);
      if (e.toolCallId) pendingCalls.set(e.toolCallId, line);
    }
    if (e.actor.kind === 'main' && e.tool && (e.phase === 'result' || e.phase === 'failure') && e.toolCallId) {
      const line = pendingCalls.get(e.toolCallId);
      if (line) {
        line.status = e.phase === 'result' ? 'success' : 'error';
        const message = errorOf(e);
        if (line.status === 'error' && message) line.error = message;
        pendingCalls.delete(e.toolCallId);
      }
      if (e.tool === 'generate_report' && e.phase === 'result') {
        const coverage = (e.output as { data?: { coverage?: unknown } } | undefined)?.data?.coverage;
        if (coverage !== undefined) turn.coverage = coverage;
      }
    }

    if (e.phase === 'dispatch' && e.parentEventId) {
      const input = (e.input ?? {}) as { role?: string; briefing?: string; task?: unknown };
      const line: AgentLine = {
        role: input.role ?? e.actor.id,
        kind: e.actor.kind,
        status: 'unfinished',
        withSuppliedFacts: typeof input.briefing === 'string' && input.briefing.includes('What the candidate has said'),
      };
      const target = e.target?.bulletId ?? e.target?.entryId ?? e.target?.sectionId ?? targetOf(input.task);
      if (target) line.target = target;
      turn.agents.push(line);
      pendingAgents.set(e.parentEventId, line);
    }
    if ((e.phase === 'result' || e.phase === 'failure') && !e.tool && !e.stage && e.parentEventId) {
      const line = pendingAgents.get(e.parentEventId);
      if (line) {
        line.status = e.phase === 'result' ? 'success' : 'error';
        if (e.durationMs !== undefined) line.durationMs = e.durationMs;
        const message = errorOf(e);
        if (line.status === 'error' && message) line.error = message;
        pendingAgents.delete(e.parentEventId);
      }
    }

    if (e.phase === 'decision' && e.purpose === 'report points accepted') {
      const out = (e.output ?? {}) as {
        offered?: string[];
        unused?: string[];
        invented?: string[];
        unsourced?: string[];
        unknownTargets?: string[];
      };
      turn.reportLinks = {
        offered: out.offered?.length ?? 0,
        unused: out.unused?.length ?? 0,
        invented: out.invented ?? [],
        unsourced: out.unsourced ?? [],
        unknownTargets: out.unknownTargets ?? [],
      };
    }
  }

  return {
    events: events.length,
    truncated: events.some((e) => e.error?.message.startsWith('trace stopped at')),
    spans: {
      opened: opened.size,
      closed: closed.size,
      unclosed: [...opened].filter((id) => !closed.has(id)).length,
      orphans,
    },
    model: total,
    turns: [...turns.values()].sort((a, b) => a.turn - b.turn),
  };
}

/** The summary as something to read, not to parse. */
export function renderTraceSummary(s: TraceSummary): string {
  const out: string[] = [];
  out.push(
    `events ${s.events} · spans ${s.spans.opened} opened, ${s.spans.unclosed} unclosed, ${s.spans.orphans} orphans` +
      (s.truncated ? ' · TRUNCATED' : ''),
  );
  out.push(`model ${modelLine(s.model)}`);

  for (const t of s.turns) {
    // The startup parse writes turn 0 and nothing the coordinator did.
    if (!t.said && t.calls.length === 0 && t.agents.length === 0 && t.model.calls === 0) continue;
    out.push('', `## turn ${t.turn}${t.said ? `: ${oneLine(t.said, 100)}` : ''}`);
    if (t.model.calls > 0) out.push(`model ${modelLine(t.model)}`);
    for (const c of t.calls) {
      out.push(
        `- ${c.status === 'success' ? 'ok  ' : c.status === 'error' ? 'FAIL' : '....'} ${c.tool}` +
          (c.target ? ` → ${c.target}` : '') +
          (c.error ? ` — ${oneLine(c.error, 120)}` : ''),
      );
    }
    for (const a of t.agents) {
      out.push(
        `  ${a.kind === 'nested' ? '    ' : ''}· ${a.status === 'success' ? 'ok  ' : a.status === 'error' ? 'FAIL' : '....'} ` +
          `${a.role}${a.target ? ` @ ${a.target}` : ''}` +
          (a.durationMs !== undefined ? ` ${Math.round(a.durationMs / 1000)}s` : '') +
          (a.withSuppliedFacts ? ' [supplied facts]' : '') +
          (a.error ? ` — ${oneLine(a.error, 120)}` : ''),
      );
    }
    if (t.coverage !== undefined) out.push(`coverage ${JSON.stringify(t.coverage)}`);
    if (t.reportLinks) {
      const r = t.reportLinks;
      out.push(
        `report links: ${r.offered} findings offered, ${r.unused} unused, ` +
          `${r.invented.length} invented ids, ${r.unsourced.length} unsourced points, ` +
          `${r.unknownTargets.length} unknown targets`,
      );
    }
  }
  return out.join('\n');
}

function emptyTotals(): ModelTotals {
  return { calls: 0, cached: 0, failed: 0, retries: 0, inputTokens: 0, outputTokens: 0, costUsd: 0 };
}

function countModel(totals: ModelTotals, e: TraceEvent): void {
  totals.calls += 1;
  if (e.cached) totals.cached += 1;
  if (e.phase === 'failure') totals.failed += 1;
  if (e.attempts !== undefined && e.attempts > 1) totals.retries += e.attempts - 1;
  if (e.usage && !e.cached) {
    totals.inputTokens += e.usage.inputTokens;
    totals.outputTokens += e.usage.outputTokens;
    if (e.model) {
      try {
        totals.costUsd += estimateCostUsd(e.model, e.usage);
      } catch {
        // A model the price table does not know. Tokens are still counted.
      }
    }
  }
}

function targetOf(input: unknown): string | undefined {
  if (!input || typeof input !== 'object') return undefined;
  for (const field of TARGET_FIELDS) {
    const value = (input as Record<string, unknown>)[field];
    if (typeof value === 'string' && value) return value;
  }
  return undefined;
}

function errorOf(e: TraceEvent): string | undefined {
  if (e.error?.message) return e.error.message;
  const message = (e.output as { error?: { message?: unknown } } | undefined)?.error?.message;
  return typeof message === 'string' ? message : undefined;
}

function modelLine(m: ModelTotals): string {
  return (
    `${m.calls} calls (${m.cached} cached, ${m.failed} failed, ${m.retries} retries) · ` +
    `${m.inputTokens.toLocaleString('en-US')} in / ${m.outputTokens.toLocaleString('en-US')} out · ` +
    `$${m.costUsd.toFixed(4)}`
  );
}

function oneLine(text: string, max: number): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat;
}
