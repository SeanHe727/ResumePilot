import type { Orchestrator, RoleSelector } from '../agent/types.js';
import type { HookPipeline } from '../hooks/types.js';
import type { KnowledgeSearch } from '../knowledge/types.js';
import type { QueryEngine } from '../query-engine/types.js';
import type { Session } from '../session/types.js';
import type { ToolRegistry } from '../tools/types.js';

/**
 * A Skill is not a new abstraction layer — it is a named, registered sequence
 * of tool calls. The point is that the sequence is discoverable and
 * deterministic, so common requests skip the model's planning step entirely.
 */
export interface Skill {
  readonly name: string;
  readonly description: string;
  /** Keywords that route a raw user message straight to this skill. */
  readonly triggers: string[];
  readonly requiredTools: string[];
  execute(input: SkillInput, ctx: SkillContext): Promise<SkillOutput>;
}

export interface SkillInput {
  rawInput: string;
  parsedArgs?: Record<string, unknown>;
}

export interface SkillContext {
  toolRegistry: ToolRegistry;
  queryEngine: QueryEngine;
  knowledge: KnowledgeSearch;
  session: Session;
  hooks: HookPipeline;
  /**
   * Present only for skills that fan out to sub-agents. A skill that runs a
   * fixed pipeline has no use for one, and asking for it would make the
   * deterministic path depend on the adaptive one.
   */
  orchestrator?: Orchestrator;
  roleSelector?: RoleSelector;
}

export interface SkillOutput {
  success: boolean;
  result?: unknown;
  /** Ready to print. Skills own their own presentation. */
  report?: string;
  error?: string;
}

export interface SkillRegistry {
  register(skill: Skill): void;
  resolve(name: string): Skill;
  find(query: string): Skill | null;
  list(): Array<{ name: string; description: string; triggers: string[] }>;
}
