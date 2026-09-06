import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import type { DiagnosisReport, ResumeSessionState } from '../../domain.js';
import { render } from '../../skills/diagnose-resume.js';
import type { Command, CommandResult, ParsedArgs } from '../types.js';

const FORMATS = ['md', 'json'] as const;
type Format = (typeof FORMATS)[number];

export function createExportCommand(): Command {
  return {
    name: 'export',
    aliases: ['save'],
    description: 'Write the report to a file as md or json',
    args: [
      { name: 'format', description: 'md or json', required: false, type: 'string', choices: FORMATS },
      { name: 'path', description: 'Where to write it', required: false, type: 'string' },
    ],
    examples: ['/export', '/export json', '/export md ~/Desktop/diagnosis.md'],

    async execute(args: ParsedArgs, session): Promise<CommandResult> {
      const report = (session.state as ResumeSessionState).latestReport;
      if (!report) return { output: 'Nothing diagnosed yet. Try /diagnose.' };

      const format = (args.positional[0] ?? 'md') as Format;
      if (!FORMATS.includes(format)) {
        return { output: `Unknown format ${format}. Use ${FORMATS.join(' or ')}.` };
      }

      const path = resolve(
        args.positional[1] ?? `resume-diagnosis-${session.id.slice(0, 8)}.${format}`,
      );
      const body =
        format === 'json'
          ? JSON.stringify(report, null, 2)
          : toMarkdown(report as DiagnosisReport, session.sourcePath);

      await writeFile(path, body, 'utf8');

      return { output: `Wrote ${path}`, data: { path, format } };
    },
  };
}

function toMarkdown(report: DiagnosisReport, sourcePath: string): string {
  return [
    '# Resume diagnosis',
    '',
    `Source: \`${sourcePath}\``,
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    '```',
    render(report),
    '```',
  ].join('\n');
}
