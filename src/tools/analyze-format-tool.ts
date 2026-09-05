import type { FormatDiagnosis, ResumeDocument } from '../domain.js';
import { analyzeFormat } from './analyze-format.js';
import type { Tool, ToolResult } from './types.js';

interface AnalyzeFormatInput {
  resume: ResumeDocument;
}

/**
 * Wraps the pure scorer as a tool.
 *
 * It takes the parsed document rather than a path: the model never receives a
 * file path and never opens a file — see the trust-boundary note in
 * `src/tools/types.ts`.
 */
export const analyzeFormatTool: Tool<AnalyzeFormatInput, FormatDiagnosis> = {
  name: 'analyze_format',
  description:
    'Score a parsed resume for formatting and applicant-tracking-system parsability. Pure computation: layout risks, quantified-bullet ratio, action-verb ratio, date consistency and length. Costs nothing to call.',
  parameters: {
    type: 'object',
    properties: {
      resume: { type: 'object', description: 'The parsed resume document' },
    },
    required: ['resume'],
    additionalProperties: false,
  },

  async execute(input): Promise<ToolResult<FormatDiagnosis>> {
    if (!input?.resume?.sections) {
      return {
        success: false,
        error: { code: 'input_error', message: 'resume must be a parsed ResumeDocument' },
      };
    }
    return { success: true, data: analyzeFormat(input.resume) };
  },
};
