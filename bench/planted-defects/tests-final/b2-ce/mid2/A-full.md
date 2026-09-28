# Full review: resume.pdf

**84/100** — format 100 · content 76 · wording 81 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 8 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally left off. *(saves 8 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing your qualifications. Including them gives space to details that do not support your candidacy.

**How to change it**
Remove “Date of birth: 14 Mar 1999 | Nationality: Canadian.”

*raised by file*

> Western State University

**Problem**
[Important] Education appears before the experience that demonstrates your applied engineering and machine-learning work. *(no words)*

**Why**
A reader encounters the degrees before the roles and projects that show how you have applied your skills. That delays the evidence most relevant to your experience.

**How to change it**
Move the Experience section above Education; this changes the order without changing the text.

*raised by narrative*

> Sep 2018 - Jun 2022

**Problem**
[Polish] The 10-month gap between the B.S. and the next listed role is unexplained. *(about 6 words to add, if applicable)*

**Why**
The dates run from Jun 2022 to May 2023 with no study or work listed. A reader may wonder what happened during that period, leaving a gap in the timeline unresolved.

**How to change it**
If you were studying or working during that period, add the relevant entry and dates; otherwise, leave the timeline as it is.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy improvement has no stated baseline or definition. *(about 4 words to add)*

**Why**
A reader cannot tell what accuracy was measured against or whether 35% means a relative increase or a percentage-point change. Without that comparison, the size of the result is hard to assess.

**How to change it**
Clarify whether the increase was relative or in percentage points, and add [baseline accuracy before fine-tuning] or [benchmark used].

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing description uses dense, team-specific wording that makes the behavior hard to picture. *(about the same number of words)*

**Why**
A reader may not know what “in-scope signals” means or how the routing layer restricts what each agent can see. That makes the design contribution slower to understand.

**How to change it**
Replace “limits each of 3 specialist agents and an independent reviewer to their in-scope signals” with a clearer description of which signals each agent and the reviewer receive.

*raised by wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The reductions are buried after the GRPO method description. *(no words)*

**Why**
A scanning reader has to pass through the training details before reaching the 18% reduction in tool calls and 5% reduction in latency. The result is less visible than the method.

**How to change it**
Move “cutting tool calls per case 18% and end-to-end latency 5%” to the start of the bullet, before the GRPO and reward details.

*raised by wording*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The harness bullet includes unnecessary process wording. *(saves about 4 words)*

**Why**
“The team used to” describes who used the harness rather than what it evaluated. It delays the useful details about the 14 checkpoints and the measures compared.

**How to change it**
Cut “the team used to” so the sentence moves directly from “evaluation harness” to “compare 14 adapter checkpoints.”

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not generally teach the model to reproduce tool outputs. *(saves about 10 words, unless replacing with a supported description)*
2. [Error] The assistant-only loss-masking method is repeated without a distinct result. *(saves about 17 words if removed)*

**Why**
1. Assistant-only masking typically excludes tool-role output tokens from the training loss, so it does not directly train the model to generate those outputs. The bullet states an intended effect, not a demonstrated result, unless the outputs were included as assistant-targeted training tokens.
2. The previous bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating the method here uses space without adding a separate accomplishment.

**How to change it**
1. If the tool outputs were included as assistant-targeted training tokens, say the model was fine-tuned on those supervised outputs; otherwise, remove the claim that assistant-only loss masking taught it to reproduce them.
2. Remove this bullet, or replace the repeated method description with a distinct result if there was one.

*raised by content, wording, narrative*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] “ML-extracted features” does not identify the feature-extraction or model step. *(about 2 words to add if naming a step)*
2. [Polish] The strongest accomplishment in this entry is not the opening bullet. *(no words)*

**Why**
1. The phrase signals machine-learning involvement but gives a reader little evidence of the technical contribution behind the triage branch. Its compressed wording may also slow readers outside the immediate team.
2. The triage branch and its 68% backlog reduction give a reader a concrete system, scale, and outcome. Leading with that result would make the entry’s impact visible sooner.

**How to change it**
1. If accurate, replace “ML-extracted features” with [the specific feature-extraction or model step]; otherwise, use a clearer phrase that describes the features.
2. Move this bullet above the current opening bullet; the move does not require rewriting it.

*raised by content, wording, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision alone does not generally reduce total GPU memory by 4×. *(about 3 words to add if specifying a measure)*
2. [Polish] The article in “the perception models” is unnecessary. *(saves 1 word)*

**Why**
1. BF16 uses half the bits of FP32 for eligible tensors, but mixed-precision fine-tuning may retain FP32 master weights and optimizer states. The bullet also does not say whether the 4× refers to peak, average, or another GPU-memory measure, so the comparison is difficult to interpret.
2. It adds no useful information to the sentence. Removing it makes the wording more direct.

**How to change it**
1. If another memory-saving technique or a specific measured setup produced the 4× reduction, name it and specify the measure and comparison basis; otherwise, state the measured reduction from the FP32-to-BF16 change.
2. Change “the perception models” to “perception models.”

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test safeguard is a lengthy trailing detail. *(saves about 4 words)*

**Why**
The latency reduction is already clear before this clause. Its full wording draws attention away from the result, although the build-failing threshold is useful context.

**How to change it**
Compress the clause to “with a build-failing 200 ms p95 load-test threshold.”

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The release-cycle bullet mixes past and present tense. *(no words)*
2. [Important] The three-day release-cycle duration has no comparison with the previous process. *(about 4 words to add)*

**Why**
1. The role ended in July 2024, but “Maintained” is past tense while “adds” is present tense. That makes it unclear whether the automated checks were part of the completed role or are still being added.
2. A reader can see the resulting duration but cannot judge how much the cycle improved. The duration alone does not establish the amount of time saved.

**How to change it**
1. Change “adds” to “added” to keep the completed role in past tense.
2. Add [previous release-cycle duration] or [time saved], if known.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The backlog and dispatch outcome has no before-and-after measure. *(about 5 words to add)*

**Why**
The bullet says the nightly backlogs were removed but does not show how often they occurred or how much they delayed dispatch. A reader therefore cannot gauge the operational scale of the improvement.

**How to change it**
If available, add [backlog frequency or morning dispatch delay before and after].

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Polish] The opening bullet does not name the AI-first practices introduced. *(about 3 words to add)*
2. [Polish] The claimed downstream improvement is unspecified. *(about 5 words to add)*

**Why**
1. “AI-first engineering practices” is broad enough that a reader cannot picture what changed or assess the relevant technical skill. The claim is also less connected to the specific context-management and concurrency problems described in the other bullets.
2. “Improving outcomes” does not say what changed or by how much. A reader cannot judge the value of the claim for the downstream teams.

**How to change it**
1. Replace the phrase with [one specific AI-first workflow or practice you introduced], if accurate.
2. Replace the phrase with [specific downstream outcome and its change versus the prior process], if you can support it.

*raised by content, wording, narrative*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Polish] The strongest line in this entry is not the opening one. *(no words)*
2. [Polish] “Grew 100x” leaves the comparison implicit. *(about 4 words to add)*

**Why**
1. The context-management result gives a clear stress-test condition and a measurable working-context limit. Opening with it would make the technical evidence visible before the broader adoption claim.
2. A reader cannot tell what the raw conversation grew 100 times relative to. Without that reference, the scale of the stress test is unclear.

**How to change it**
1. Move this bullet to the top of the entry; the move does not require rewriting it.
2. Specify what the raw conversation grew 100 times relative to, using [the comparison baseline].

*raised by narrative, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The reported removal of deadlocks and lost results is not confirmed by a before-and-after measure or test result. *(about 5 words to add)*
2. [Polish] The concurrency bullet uses team-specific shorthand that may be hard to scan. *(about the same number of words)*

**Why**
1. The 50-way condition shows the scale of the test, but not how the change was validated or how much it reduced the failures. A reader may question whether the problems were eliminated or only addressed in that test condition.
2. Readers outside the team may not immediately understand “nested-pool deadlocks” or “50-way fan-out.” That can obscure the concurrency problem and the scale at which it was tested.

**How to change it**
1. Add [before-and-after failure rate or the specific test result confirming the failures no longer occur], if available.
2. Replace “nested-pool deadlocks” and “50-way fan-out” with clearer descriptions of the deadlock condition and the 50-way test, if accurate.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metrics integration bullet states what was added but not what it enabled. *(about 6 words to add)*

**Why**
The count establishes scope, but a reader cannot tell why the integration mattered to the framework or its users. The contribution's value is left unstated.

**How to change it**
Keep the integration and metric count, then add [what new evaluation coverage or user capability the metrics enabled].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The evaluator's 0.89 Kendall correlation has no stated reference for comparison. *(about 4 words to add)*
2. [Polish] The test setup pushes the correlation result later in the bullet. *(saves about 5 words)*

**Why**
1. A reader cannot tell what ranking or target the evaluator's results were correlated against. The trial count shows the volume of testing but does not explain what the correlation demonstrates.
2. The long clause about removing citations, sources, and claims delays the main validation result. A scanning reader may not reach the correlation figure quickly.

**How to change it**
1. Keep the correlation and trial count, and specify [the expected degradation ranking or other reference used].
2. Move the correlation result to the front of the bullet and compress the setup to a short description of the injected degradations.

*raised by content, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] This project is assigned the diagnostics-triage achievement that belongs under the internship, repeating it with a slightly different reduction figure. *(saves about 19 words if removed)*
2. The backlog reduction has no starting point or timeframe. *(about 3 words to add)*
3. The triage bullet does not explain how screening the signals informs triage. *(about the same number of words)*
4. The long method description comes after the result and makes the bullet harder to scan. *(saves about 5 words)*

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

*raised by content, narrative, wording*

## Set aside (6)

- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” states an aim, not what changed.
- s3:e1:b2: “Cut the pending-case backlog by two-thirds” gives a reduction without its starting point or timeframe.
- s3:e1:b2: “screens 800+ sensor signals per case using ML-extracted features” does not explain how screening informs triage.
- s3:e1:b2: “with a triage branch that screens 800+ sensor signals per case using ML-extracted features” puts a long method description after the result; shorten it to keep the outcome and core method easy to scan.
- s2:e0:b4: “Fine-tuned the adapter with assistant-only loss masking” duplicates the method in the first bullet, so this line adds no distinct accomplishment.
- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” explains an intended purpose rather than stating a distinct outcome.
