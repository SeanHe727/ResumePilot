import type { Message } from '../types.js';
import type { ContextManager } from '../context/types.js';
import type { RedactionMap } from '../permission/types.js';

export type SessionStatus = 'created' | 'processing' | 'paused' | 'completed' | 'failed';

export interface SessionConfig {
  model: string;
  effort: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  maxCostUsd: number;
  /** Route matching input straight to a Skill instead of free-form planning. */
  preferSkills: boolean;
}

export interface SessionProgress {
  total: number;
  done: number;
  current: number;
  phase: string;
}

/**
 * Whatever the running Skill needs to survive an interruption.
 *
 * Deliberately opaque: the Session layer persists and restores this bag
 * without knowing what is in it. The resume-shaped view lives in
 * `domain.ts` as `ResumeSessionState`, and Skills narrow to it at use sites.
 */
export type SessionState = Record<string, unknown>;

export interface Session {
  id: string;
  status: SessionStatus;
  /** Set when this session revises an earlier one — the basis for `/diff`. */
  parentSessionId?: string;
  sourcePath: string;
  config: SessionConfig;
  progress: SessionProgress;
  state: SessionState;
  /** Session-scoped and never persisted: placeholders must not outlive the run. */
  redactionMap: RedactionMap;
  contextManager: ContextManager;
  abortController: AbortController;
  createdAt: string;
  updatedAt: string;
}

/**
 * The projection `/history` lists. Deliberately narrow: a full `Session`
 * carries the parsed resume, the JD and every message, and listing ten of them
 * should not drag all of that off disk to render seven columns.
 */
export interface SessionListEntry {
  id: string;
  status: SessionStatus;
  sourcePath: string;
  progress: SessionProgress;
  overallScore?: number;
  createdAt: string;
  updatedAt: string;
}

export interface SessionManager {
  create(input: { sourcePath: string }, config?: Partial<SessionConfig>): Session;
  get(id: string): Session | null;
  list(opts?: { status?: SessionStatus; limit?: number }): SessionListEntry[];
  updateStatus(id: string, status: SessionStatus): void;
  updateProgress(id: string, done: number, total: number, phase?: string): void;
  updateState(id: string, patch: Partial<SessionState>): void;
  save(session: Session): void;
  delete(id: string): void;
}

export interface SessionCheckpoint {
  id: string;
  sessionId: string;
  progress: SessionProgress;
  state: SessionState;
  messages: Message[];
  createdAt: string;
}

export interface CheckpointManager {
  shouldCheckpoint(session: Session): boolean;
  create(session: Session, messages: Message[]): string;
  list(sessionId: string): SessionCheckpoint[];
  getLatest(sessionId: string): SessionCheckpoint | null;
  /** Restores a checkpoint and discards everything recorded after it. */
  rewind(sessionId: string, checkpointId: string): SessionCheckpoint | null;
}

export interface SessionRestorer {
  resume(sessionId: string): Promise<Session>;
  rewindTo(sessionId: string, checkpointId: string): Promise<Session>;
}
