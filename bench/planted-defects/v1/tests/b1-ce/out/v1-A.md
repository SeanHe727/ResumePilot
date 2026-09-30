> Here is my resume: tmp/bench/tests/b1-ce/resume.pdf. Please review my resume and tell me what to change.
I reviewed the full resume.

**Coverage:** format and narrative were reviewed for the entire document. Content and wording were reviewed for all four entries with bullets; education entries have no bullets to review. No job-description match review was run because no posting was provided. The full report is available with `/report --full`.

## Highest-priority changes

### 1. Make the bullets evidence-based

The specialists repeatedly flagged claims that lack a defined metric, baseline, scope, or outcome.

- **Eastern Robotics Co.**
  - Add the scope and operational result for the diagnostics dashboards and weekly reports.
  - Replace the API latency bullet’s first-person, hedged language with the specific optimization performed and a before/after latency result.
  - Define what the “2 weeks to 3 days” release-cycle measurement includes and what manual process the regression checks replaced.
  - Correct the wording error **“dead- letter handling”** to **“dead-letter handling.”**

- **Mobility Systems Company**
  - For the 68% backlog reduction, identify the backlog definition and starting/ending counts, if available.
  - For the 35% model improvement, state the metric, comparison baseline, and evaluation setup. Clarify that the evaluation data was held out from training if that is accurate.
  - Explain how the ML-extracted features drove the triage decision.
  - Define the operational benefit of the traceability system, rather than only stating that findings were traceable.
  - Bound the “entire ML platform” and “every team” claims to the components and teams you actually owned or reached.
  - The remaining bullets are comparatively specific, but the GRPO bullet is dense and the “first quarter after launch” phrase can be shortened.

- **Agent Runtime Suite**
  - Replace the opening bullet’s broad phrases such as “AI synergies,” “next-generation agentic paradigms,” and “unlock value” with the actual system, implementation, and user or system result.
  - Define what “under 10K tokens” counts, what the 100-turn test measured, and whether task quality was preserved.
  - Clarify what NGX replaced, what the KRT migration involved, and the outcome of the cutover.
  - The context-management bullet and migration bullet currently do not clearly read as parts of the same project; make their relationship explicit or separate the work.

- **Research-Agent Evaluation Framework**
  - Replace the vague “was involved in helping to support” bullet with the specific evaluation work you owned, its criteria, and its result—or remove it if it duplicates the other bullets.
  - For the eight metrics, clarify how they were validated and what their recurring use enabled.
  - For the three traced defects, state what improved after the upstream fixes or how the fixes were verified.

### 2. Clarify the timeline

The narrative review identified three date issues to address:

- There is an unexplained gap between **June 2022** and **October 2023**.
- The transition from **Junior Software Engineer** to **Machine Learning Engineering Intern** looks like a title-level step backward unless the concurrent master’s program explains it.
- The master’s degree overlaps with the internship and research project, but the resume does not make that concurrency clear.

Add the relevant employment, study, research, or other activity for the gap if applicable, and make the graduate-study context of the later roles clear.

### 3. Reorder bullets within entries

The narrative specialist suggested leading with the most substantial work:

- **Eastern Robotics Co.:** migration/cutover → CI and release-cycle result → API performance → dashboards/on-call reporting.
- **Mobility Systems Company:** triage branch/backlog result → system architecture → model fine-tuning → GRPO → runbook → platform ownership.
- **Agent Runtime Suite:** context-management result → migration/cutover → replace or substantially revise the generic opening bullet.
- **Research-Agent Evaluation Framework:** eight metrics → traced defects → replace or remove the vague evaluation-process bullet.

## Formatting and presentation

The format review found:

- The document extracts cleanly for ATS processing.
- It is one page and has no layout warnings.
- Some bullets use first-person language; remove that framing.
- The resume appears to include personal details such as age, marital status, and hobbies. Remove those details unless a specific application requires them.

The main work is therefore not layout. It is clarifying ownership, defining measurements, explaining the timeline, and replacing broad claims with concrete technical actions and verified outcomes.

> /report
# Review: resume.pdf

**74/100** — format 100 · content 57 · wording 68 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove the age, marital status, and personal hobbies from the résumé.
2. Clarify that the M.S. explains the transition from Junior Software Engineer to Machine Learning Engineering Intern so it does not read as a title-level step backward.
3. Clarify the project narrative by replacing the generic opener and showing how the context-management and Falcon/NGX migration bullets relate.

## Already working

- s2:e1:b0: Connects the work to a clear operational outcome.
- s2:e1:b1: Names a concrete training intervention rather than saying only that the model was improved.
- s2:e0:b2: Connects a concrete engineering change to a clear release-process outcome.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Oct 2023 - Jul 2024

- Replace the hedged latency claim with a controlled before-and-after result for a named API endpoint or workload. *(about 8 words to add)*
- Separate the testing work from the latency result and state the specific performance change without implying that writing tests caused it. *(about 6 words to add)*
- Define the start and end points or comparable release sample behind the change from two weeks to three days. *(about 8 words to add)*
- Add a before-and-after backlog or dispatch-delay measure to show the operational value of migrating the 30 services. *(about 6 words to add)*
- State what the weekly reports enabled, such as faster triage or fewer unresolved incidents. *(about 6 words to add)*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

- Specify the metric, comparison baseline, and evaluation protocol behind the claimed 35% model-performance improvement. *(about 8 words to add)*
- Report the latency statistic and confirm that the GRPO and SFT comparisons used the same tool budget and execution path. *(about 9 words to add)*
- Name the triage decision or intervention applied to the ML-extracted features that produced the backlog reduction. *(about 8 words to add)*
- Add starting and ending backlog counts or another concrete anchor for the reported 68% reduction. *(about 6 words to add)*
- State how the runbook's abstention and escalation rules were evaluated for leakage by identifying held-out cases or another protection against training overlap. *(about 7 words to add)*
- Replace the claim of building the entire platform single-handedly with the specific components personally owned and the relevant team boundary. *(about 6 words to add)*
- Explain what changed after the platform was adopted by teams across engineering, operations, and research. *(about 6 words to add)*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

- Clarify the project narrative by replacing the generic opener and showing how the context-management and Falcon/NGX migration bullets relate. *(about 8 words to add)*
- Replace the buzzword-heavy method description with the specific runtime capability or workflow delivered. *(about 5 words to add)*
- Replace the generic value claim with a named beneficiary or proof such as users served, hours saved, cost reduced, or revenue enabled. *(about 6 words to add)*
- Add task-success or required-fact-recall results against an uncompacted baseline to show that context compaction preserved quality. *(about 8 words to add)*
- Add the post-migration improvement and the key cutover action, such as validation, traffic switching, rollback, reliability, or deployment time. *(about 8 words to add)*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

- Replace the broad involvement statement with the specific evaluation work performed on the pipeline-generated reports, including its scale, criteria, and resulting finding. *(about 8 words to add; saves about 12 words)*
- Add evidence that the three upstream fixes removed or reduced the corresponding failures after remediation. *(about 6 words to add)*
- Add the operational benefit produced by correcting the three stability, sourcing, and parameter-handling defects. *(about 6 words to add)*
- State whether the benchmark metrics caught regressions or guided release decisions after being integrated into every release. *(about 8 words to add)*

## Across the whole résumé

- Clarify that the M.S. explains the transition from Junior Software Engineer to Machine Learning Engineering Intern so it does not read as a title-level step backward. *(about 5 words to add)*
- Label the ML internship and Research-Agent Evaluation Framework project as concurrent with the M.S. *(about 4 words to add)*
- Add the education, employment, or other activity covering the gap between the B.S. ending in Jun 2022 and the first role beginning in Oct 2023. *(about 10 words to add)*
- Remove the age, marital status, and personal hobbies from the résumé. *(saves about 10 words)*

## Set aside (29)

Worth knowing, and not worth the space on this page:

- format: uses a personal pronoun; resume lines are phrases, not sentences — "I worked on improving the latency of our API and I also wrote tests..."
- s2:e1:b2: "keeping every finding traceable to its source data" states a design property without showing the resulting review, auditability, or error-reduction benefit.
- s2:e1:b2: "every finding" is an unanchored absolute claim without a measured traceability rate or validation result.
- s2:e1:b3: "grouped tool-use rollouts and a composite reward" does not show whether latency was actually rewarded or how accuracy was protected during optimization.
- s2:e1:b5: "who adopted them as the team’s runbook" indicates acceptance but does not show how broadly or consistently the runbook was used or what it improved.
- s2:e0:b0: “monitoring dashboards of the diagnostics service” gives no coverage or scale, so add the number of dashboards, services, or users supported.
- s2:e0:b2: “automated regression checks” does not show what manual validation or failure mode they replaced, so add the single most relevant check or process automated.
- s2:e0:b3: “removing the nightly backlogs” claims completed work but does not show whether queue consumers completed events rather than deferring failures to retries or dead-letter handling.
- s3:e0:b1: The phrase "using budgeted context layers and staged compaction" names mechanisms but not what each layer retains or when compaction occurs; add [retained context layers and compaction trigger].
- s3:e0:b1: "Kept working context under 10K tokens" lacks a clear accounting boundary; add [whether the limit is per model call and what inputs it includes].
- …and 19 more, in `/report --full`.


