import { defineConfig } from 'vitest/config';

/**
 * `tests/e2e` was excluded here and was the only thing `pnpm test:e2e` ran, so
 * that command reported success over a directory it had been told to ignore —
 * and then over a directory that did not exist. A command that cannot fail is
 * worse than one that is missing: it is a green light nobody is holding.
 *
 * The vertical tests there script the model and touch no network, so they run
 * with everything else. `passWithNoTests` is off for the same reason: an empty
 * suite is a fact worth hearing, not a pass.
 */
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
});
