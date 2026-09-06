import { LayeredContextManager } from '../context/manager.js';
import type {
  CheckpointManager,
  Session,
  SessionCheckpoint,
  SessionManager,
  SessionRestorer,
} from './types.js';

/**
 * Picking a run back up.
 *
 * What is restored is progress, accumulated state and the message window. What
 * is not is the parsed resume — the session keeps `sourcePath`, and re-reading
 * a local file is cheaper than storing a second copy of it that can fall out of
 * step with the one on disk.
 */
export class DefaultSessionRestorer implements SessionRestorer {
  constructor(
    private readonly sessions: SessionManager,
    private readonly checkpoints: CheckpointManager,
  ) {}

  async resume(sessionId: string): Promise<Session> {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error(`session ${sessionId} not found`);
    if (session.status === 'completed') throw new Error(`session ${sessionId} already completed`);

    const checkpoint = this.checkpoints.getLatest(sessionId);
    if (checkpoint) {
      this.applyCheckpoint(session, checkpoint);
    }
    // Without one, the session's own persisted state still stands: whatever
    // the Skill wrote before the interruption is on disk, so resuming loses
    // at most the entries diagnosed since the last save.

    this.sessions.updateStatus(sessionId, 'processing');
    return session;
  }

  async rewindTo(sessionId: string, checkpointId: string): Promise<Session> {
    const session = this.sessions.get(sessionId);
    if (!session) throw new Error(`session ${sessionId} not found`);

    const checkpoint = this.checkpoints.rewind(sessionId, checkpointId);
    if (!checkpoint) throw new Error(`checkpoint ${checkpointId} not found`);

    this.applyCheckpoint(session, checkpoint);
    this.sessions.updateStatus(sessionId, 'processing');

    return session;
  }

  private applyCheckpoint(session: Session, checkpoint: SessionCheckpoint): void {
    session.progress = checkpoint.progress;
    session.state = checkpoint.state;

    // Rebuilt rather than mutated: the live window may hold turns from after
    // the checkpoint, and those are exactly what a rewind is discarding.
    session.contextManager = new LayeredContextManager();
    for (const message of checkpoint.messages) session.contextManager.addMessage(message);

    this.sessions.save(session);
  }
}
