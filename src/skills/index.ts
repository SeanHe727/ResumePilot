import { MapSkillRegistry } from './registry.js';
import { diagnoseResumeSkill } from './diagnose-resume.js';
import type { SkillRegistry } from './types.js';

export { MapSkillRegistry } from './registry.js';
export { diagnoseResumeSkill, render } from './diagnose-resume.js';
export * from './types.js';

/** Registration order is trigger-matching priority. */
export function createSkillRegistry(): SkillRegistry {
  const registry = new MapSkillRegistry();
  registry.register(diagnoseResumeSkill);
  return registry;
}
