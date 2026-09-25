import { readFileSync } from 'node:fs';

/**
 * A scripted conversation: what a person would type, one message per line.
 *
 * `#` lines are notes to whoever reads the script, and `{resume}` is the file
 * under test. The résumé is named in the conversation rather than loaded up
 * front, so the upload and the parse are inside the trace — the first paid run
 * pre-loaded it, and so never tested the path a person actually takes.
 */
export function readScenario(file: string, resume: string): string[] {
  return readFileSync(file, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.replaceAll('{resume}', resume));
}

interface Conversation<S> {
  handle(input: string, session: S): Promise<S>;
}

/**
 * Every message in turn, carrying on past a turn that throws.
 *
 * The interactive loop does the same: one bad turn does not end a session, and
 * a script that stopped at the first error would never show what the next
 * message made of it.
 */
export async function playScenario<S>(
  app: Conversation<S>,
  session: S,
  messages: string[],
  print: (text: string) => void,
): Promise<S> {
  let current = session;
  for (const message of messages) {
    print(`\n> ${message}`);
    try {
      current = await app.handle(message, current);
    } catch (err) {
      print(`error: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return current;
}
