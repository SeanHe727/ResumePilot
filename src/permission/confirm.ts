import { createInterface, type Interface } from 'node:readline';

import chalk from 'chalk';

import type { ConfirmRequest, ConfirmResult, PermissionConfirm, RiskLevel } from './types.js';

const BADGE: Record<RiskLevel, (text: string) => string> = {
  low: chalk.green,
  medium: chalk.yellow,
  high: chalk.red,
  critical: chalk.bgRed.white,
};

/**
 * The human in the loop.
 *
 * The prompt states the reason and the arguments, because a confirmation the
 * user cannot evaluate is not a safeguard — it trains them to type `y`.
 */
export class ReadlineConfirm implements PermissionConfirm {
  constructor(private readonly timeoutMs = 30_000) {}

  async ask(request: ConfirmRequest): Promise<ConfirmResult> {
    process.stdout.write(
      `\n${BADGE[request.level](`[${request.level.toUpperCase()}]`)} permission required\n` +
        `${chalk.dim(request.reason)}\n` +
        `${chalk.dim(request.details)}\n\n`,
    );

    const rl = createInterface({ input: process.stdin, output: process.stdout });

    try {
      return await this.race(rl);
    } finally {
      // Closed on every path. Leaving it open on timeout keeps stdin in raw
      // mode and the process never exits.
      rl.close();
    }
  }

  private race(rl: Interface): Promise<ConfirmResult> {
    return new Promise<ConfirmResult>((resolve) => {
      const timer = setTimeout(() => {
        process.stdout.write(chalk.dim('(timed out — refused)\n'));
        resolve('timeout');
      }, this.timeoutMs);

      rl.question(chalk.bold('Allow? (y/N) '), (answer) => {
        clearTimeout(timer);
        // Anything but an explicit yes is a refusal, including a bare Enter.
        resolve(answer.trim().toLowerCase().startsWith('y') ? 'approved' : 'denied');
      });
    });
  }
}

/** Refuses everything without prompting. The default for non-interactive runs. */
export class DenyAllConfirm implements PermissionConfirm {
  async ask(): Promise<ConfirmResult> {
    return 'denied';
  }
}
