import type { Skill, SkillRegistry } from './types.js';

/**
 * Skill lookup by name, and by keyword.
 *
 * `find` is what lets a plain sentence reach a deterministic pipeline without
 * the model planning anything: "diagnose my resume" matches a trigger, the
 * skill runs its fixed sequence, and no tokens are spent deciding what to do.
 */
export class MapSkillRegistry implements SkillRegistry {
  private readonly skills = new Map<string, Skill>();

  register(skill: Skill): void {
    if (this.skills.has(skill.name)) {
      throw new Error(`Skill "${skill.name}" is already registered`);
    }
    this.skills.set(skill.name, skill);
  }

  resolve(name: string): Skill {
    const skill = this.skills.get(name);
    if (!skill) {
      throw new Error(
        `Skill "${name}" is not registered. Available: ${[...this.skills.keys()].join(', ')}`,
      );
    }
    return skill;
  }

  find(query: string): Skill | null {
    const lower = query.toLowerCase();
    // First registered wins, so registration order is the priority order.
    for (const skill of this.skills.values()) {
      if (skill.triggers.some((t) => lower.includes(t.toLowerCase()))) return skill;
    }
    return null;
  }

  list(): Array<{ name: string; description: string; triggers: string[] }> {
    return [...this.skills.values()].map((s) => ({
      name: s.name,
      description: s.description,
      triggers: [...s.triggers],
    }));
  }
}
