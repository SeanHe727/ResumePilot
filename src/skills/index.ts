import { MapSkillRegistry } from './registry.js';
import { diagnoseResumeSkill } from './diagnose-resume.js';
import { orchestratedDiagnoseSkill } from './orchestrated-diagnose.js';
import type { SkillRegistry } from './types.js';

export { MapSkillRegistry } from './registry.js';
export { diagnoseResumeSkill, render } from './diagnose-resume.js';
export { orchestratedDiagnoseSkill } from './orchestrated-diagnose.js';
export * from './types.js';

/**
 * Registration order is trigger-matching priority, and only one of these
 * carries triggers: the sub-agent skill is what a plain sentence routes to.
 * The deterministic pipeline is reached by name.
 */
export function createSkillRegistry(): SkillRegistry {
  const registry = new MapSkillRegistry();
  registry.register(orchestratedDiagnoseSkill);
  registry.register(diagnoseResumeSkill);
  return registry;
}
