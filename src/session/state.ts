import type { SessionStatus } from './types.js';

/**
 * The transitions the state diagram allows, and no others.
 *
 * Two are worth reading twice.
 *
 * A refused permission or an exhausted retry budget leaves a session `paused`,
 * not `failed` — the user may simply not want to authorise something right
 * now, and the work already done should still be resumable.
 *
 * And `completed` is not terminal, though the reference project's diagram
 * draws it that way. Its own `rewindTo` sets a finished session straight back
 * to `processing`, which is the whole point of a rewind: going back to before
 * an entry was diagnosed and doing it again. The code is right and the diagram
 * is incomplete, so the edge is here. Resuming a completed session is still
 * refused — that is a different request, and `SessionRestorer.resume` rejects
 * it before the state machine is consulted.
 */
const TRANSITIONS: Record<SessionStatus, readonly SessionStatus[]> = {
  created: ['processing'],
  processing: ['paused', 'completed', 'failed'],
  paused: ['processing'],
  completed: ['processing'],
  failed: ['created'],
};

export function canTransition(from: SessionStatus, to: SessionStatus): boolean {
  // A status set to what it already is happens whenever the loop re-enters,
  // and refusing it would make restart harder than it is.
  return from === to || TRANSITIONS[from].includes(to);
}

export function assertTransition(from: SessionStatus, to: SessionStatus): void {
  if (!canTransition(from, to)) {
    throw new Error(
      `illegal session transition ${from} -> ${to}; allowed: ${TRANSITIONS[from].join(', ') || '(none)'}`,
    );
  }
}

/** Terminal in the sense that the run is over, whether or not it succeeded. */
export function isFinished(status: SessionStatus): boolean {
  return status === 'completed' || status === 'failed';
}
