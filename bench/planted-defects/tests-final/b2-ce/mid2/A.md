> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 experience and project entries for content and wording, plus the full resume’s narrative and formatting. No job-posting match was run because no posting was provided.

The main changes to address:
- Remove or distinguish the diagnostics-backlog achievement repeated in the internship and project sections; the reduction figures differ.
- Resolve the repeated adapter fine-tuning claim within the internship entry.
- Clarify the comparison behind the 35% accuracy and 4× memory figures, and move Experience above Education.

The format check found the PDF parses cleanly for ATS. The full report is available with `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 81 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 8 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing your qualifications. Including them gives space to details that do not support your candidacy.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

> Western State University

**Problem**
[Important] Education appears before the experience that demonstrates your applied engineering and machine-learning work.

**Why**
A reader encounters the degrees before the roles and projects that show how you have applied your skills. That delays the evidence most relevant to your experience.

**How to change it**
Move the Experience section above Education; this changes the order without changing the text.

> Sep 2018 - Jun 2022

**Problem**
[Polish] The 10-month gap between the B.S. and the next listed role is unexplained.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy improvement has no stated baseline or definition.

**Why**
A reader cannot tell what accuracy was measured against or whether 35% means a relative increase or a percentage-point change. Without that comparison, the size of the result is hard to assess.

**How to change it**
Clarify whether the increase was relative or in percentage points, and add [baseline accuracy before fine-tuning] or [benchmark used].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing description uses dense, team-specific wording that makes the behavior hard to picture.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The reductions are buried after the GRPO method description.

**Why**
A scanning reader has to pass through the training details before reaching the 18% reduction in tool calls and 5% reduction in latency. The result is less visible than the method.

**How to change it**
Move “cutting tool calls per case 18% and end-to-end latency 5%” to the start of the bullet, before the GRPO and reward details.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The harness bullet includes unnecessary process wording.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not generally teach the model to reproduce tool outputs.
2. [Error] The assistant-only loss-masking method is repeated without a distinct result.

**Why**
1. Assistant-only masking typically excludes tool-role output tokens from the training loss, so it does not directly train the model to generate those outputs. The bullet states an intended effect, not a demonstrated result, unless the outputs were included as assistant-targeted training tokens.
2. The previous bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating the method here uses space without adding a separate accomplishment.

**How to change it**
1. If the tool outputs were included as assistant-targeted training tokens, say the model was fine-tuned on those supervised outputs; otherwise, remove the claim that assistant-only loss masking taught it to reproduce them.
2. Remove this bullet, or replace the repeated method description with a distinct result if there was one.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] “ML-extracted features” does not identify the feature-extraction or model step.
2. [Polish] The strongest accomplishment in this entry is not the opening bullet.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision alone does not generally reduce total GPU memory by 4×.
2. [Polish] The article in “the perception models” is unnecessary.

**Why**
1. BF16 uses half the bits of FP32 for eligible tensors, but mixed-precision fine-tuning may retain FP32 master weights and optimizer states. The bullet also does not say whether the 4× refers to peak, average, or another GPU-memory measure, so the comparison is difficult to interpret.

**How to change it**
1. If another memory-saving technique or a specific measured setup produced the 4× reduction, name it and specify the measure and comparison basis; otherwise, state the measured reduction from the FP32-to-BF16 change.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test safeguard is a lengthy trailing detail.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The release-cycle bullet mixes past and present tense.
2. [Important] The three-day release-cycle duration has no comparison with the previous process.

**Why**
1. The role ended in July 2024, but “Maintained” is past tense while “adds” is present tense. That makes it unclear whether the automated checks were part of the completed role or are still being added.
2. A reader can see the resulting duration but cannot judge how much the cycle improved. The duration alone does not establish the amount of time saved.

**How to change it**
1. Change “adds” to “added” to keep the completed role in past tense.
2. Add [previous release-cycle duration] or [time saved], if known.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The backlog and dispatch outcome has no before-and-after measure.

**Why**
The bullet says the nightly backlogs were removed but does not show how often they occurred or how much they delayed dispatch. A reader therefore cannot gauge the operational scale of the improvement.

**How to change it**
If available, add [backlog frequency or morning dispatch delay before and after].

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Polish] The opening bullet does not name the AI-first practices introduced.
2. [Polish] The claimed downstream improvement is unspecified.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Polish] The strongest line in this entry is not the opening one.
2. [Polish] “Grew 100x” leaves the comparison implicit.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The reported removal of deadlocks and lost results is not confirmed by a before-and-after measure or test result.
2. [Polish] The concurrency bullet uses team-specific shorthand that may be hard to scan.

**Why**
1. The 50-way condition shows the scale of the test, but not how the change was validated or how much it reduced the failures. A reader may question whether the problems were eliminated or only addressed in that test condition.

**How to change it**
1. Add [before-and-after failure rate or the specific test result confirming the failures no longer occur], if available.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics integration bullet states what was added but not what it enabled.

**Why**
The count establishes scope, but a reader cannot tell why the integration mattered to the framework or its users. The contribution's value is left unstated.

**How to change it**
Keep the integration and metric count, then add [what new evaluation coverage or user capability the metrics enabled].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The evaluator's 0.89 Kendall correlation has no stated reference for comparison.
2. [Polish] The test setup pushes the correlation result later in the bullet.

**Why**
1. A reader cannot tell what ranking or target the evaluator's results were correlated against. The trial count shows the volume of testing but does not explain what the correlation demonstrates.

**How to change it**
1. Keep the correlation and trial count, and specify [the expected degradation ranking or other reference used].

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] This project is assigned the diagnostics-triage achievement that belongs under the internship, repeating it with a slightly different reduction figure.
2. The backlog reduction has no starting point or timeframe.
3. The triage bullet does not explain how screening the signals informs triage.
4. The long method description comes after the result and makes the bullet harder to scan.

**Why**
1. The 800+ sensor-signal triage and backlog reduction match the industrial-inspection result listed under Mobility Systems Company, where the reduction is 68%. Placing the same achievement under a research-agent evaluation project makes the attribution inconsistent and the differing figures noticeable.
2. “By two-thirds” gives a relative change but not the starting backlog or when the reduction occurred. Even if the achievement is correctly attributed, a reader cannot gauge its scale or duration.
3. The reader sees that 800+ signals are screened but not how that screening affects which cases are triaged. The technical connection between the method and the backlog result is therefore unclear.
4. The triage-branch description includes the signal count and feature wording after the backlog result. That much detail in the trailing clause competes with the outcome rather than quickly explaining the core method.

**How to change it**
1. If this is the same work, remove this bullet from this project and keep the achievement under the industrial inspection role, using the stated figure there; if it is separate work, clarify what distinguishes this triage branch and its result.
2. If this is separate work, add [starting backlog] or [timeframe]; if it is the same work as the internship achievement, remove this bullet instead.
3. If this is separate work, replace the long method clause with a concise explanation of how the screening informs triage; otherwise, remove the repeated bullet.
4. Shorten the method clause to the core screening method and keep it after the result only if this is distinct work; otherwise, remove the repeated bullet.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8cfdc555.md.

