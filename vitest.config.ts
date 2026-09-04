import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    // E2E tests hit real provider APIs and are opted into explicitly via `pnpm test:e2e`.
    exclude: ['tests/e2e/**'],
    environment: 'node',
    // Layers land phase by phase; an empty suite is not a failure yet.
    passWithNoTests: true,
  },
});
