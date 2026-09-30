# Full review: resume.pdf

**84/100** — format 100 · content 77 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 10 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2022

**Problem**
[Important] The résumé leaves a 10-month gap between the B.S. and the first listed work role unexplained. *(about 3–10 words to add, if applicable)*

**Why**
The B.S. ends in June 2022 and the Junior Software Engineer role begins in May 2023, with no listed study or work in between. A reader may wonder what occupied that period or whether relevant experience is missing.

**How to change it**
If relevant study or work took place during this period, add [the activity and dates]; otherwise, leave the dates as they are rather than implying an explanation.

*raised by narrative*

> Western State University | M.S. in Computer Engineering

**Problem**
[Important] Education appears before the professional experience that is most relevant to the roles described. *(no words)*

**Why**
A reader sees the education entries before the engineering and machine-learning experience. This delays the relevant work history and may make the résumé’s strongest qualifications less visible at first glance.

**How to change it**
Move EXPERIENCE ahead of EDUCATION and keep the current degree visible in EDUCATION.

*raised by narrative*

> Machine Learning Engineering Intern

**Problem**
[Polish] The later job title reads as a step back from Junior Software Engineer to Machine Learning Engineering Intern. *(about 3–8 words to add, if applicable)*

**Why**
The titles suggest a move from an engineering role to an internship, even though the intern role is later. A reader may question the change in seniority or misunderstand the scope of the later work.

**How to change it**
If accurate, add [a brief explanation of the role’s scope or context] to clarify the title change; do not replace the title with a different one unless that was the actual title.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement does not identify its measure or comparison point. *(about 5–10 words to add)*

**Why**
A reader cannot tell what counted as a correct diagnosis or what result the 35% is measured against. Without the evaluation measure and baseline, the size and meaning of the gain are difficult to assess and defend.

**How to change it**
Clarify the measure and evaluation set as [accuracy measure and evaluation set], and, if available, identify [baseline accuracy] as the comparison for the 35% improvement.

*raised by content*

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing constraints come before the quantified reduction in reviewer disagreement. *(no words)*

**Why**
A scanning reader encounters the detailed agent and signal constraints before the result. That ordering can bury the measurable outcome that shows why the routing layer mattered.

**How to change it**
Move the reduction from 14% to 6% to the opening of the bullet, before the routing constraints.

*raised by wording*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The GRPO method description comes before both quantified results. *(no words)*

**Why**
The reader has to work through the training setup before seeing the 18% call reduction and 5% latency improvement. This makes the strongest evidence of the work’s impact less visible on a quick scan.

**How to change it**
Move the call reduction and latency improvement to the opening, ahead of the GRPO and reward description.

*raised by wording*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The evaluation-harness description comes before the release-safety result. *(no words)*

**Why**
The 14-checkpoint comparison and its criteria take attention before the concrete result: catching two accuracy regressions before release. A reader scanning the bullet may miss that outcome.

**How to change it**
Move the result about catching two accuracy regressions before release to the opening, ahead of the harness details.

*raised by wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not train the model to reproduce tool outputs faithfully. *(about 2 words to replace)*
2. [Important] The assistant-only loss-masking method is repeated in a method-only bullet with no distinct result. *(saves about 18 words)*

**Why**
1. Assistant-only loss masking excludes tool-output tokens from the training loss, so those tokens receive no direct training signal to be reproduced. A reader familiar with the method may question the stated purpose; the model might learn tool-output patterns indirectly, but the masking itself does not establish faithful reproduction.
2. The first bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating that method in the next bullet can make the two bullets look like one achievement presented twice, taking space from distinct work.

**How to change it**
1. If the masking was used, describe it as training the model’s assistant responses on tool-use trajectories. Claim tool-output reproduction only if tool-output tokens were included in the loss; otherwise remove that claim.
2. Remove this bullet, as the quantified accuracy result and method already appear in the first bullet, or replace it with a distinct contribution if accurate.

*raised by content, narrative, wording*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The feature-extraction or modeling approach behind the triage system is unspecified. *(about 1–5 words to add)*
2. [Polish] The backlog reduction is buried after the system and signal details. *(no words)*

**Why**
1. “ML-extracted features” gives little indication of the technical approach behind a system screening more than 800 signals per case. A reader assessing machine-learning engineering experience cannot tell what was built or applied.
2. The industrial-inspection context and the 800-plus signals precede the 68% backlog result. A scanning reader may miss the strongest quantified outcome before reaching it.

**How to change it**
1. Replace “ML-extracted features” with [the key feature-extraction or modeling approach], if accurate.
2. Move the 68% backlog reduction to the beginning of the bullet, before the system and signal details.

*raised by content, narrative, wording*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The 4× total GPU-memory reduction is not established by switching from FP32 to BF16 alone, and the bullet gives no measured memory values or baseline. *(about 3–10 words to add)*
2. [Polish] The repeated “by” makes the result and method phrase awkward to scan. *(no words)*

**Why**
1. BF16 stores each value using half the space of FP32, but total fine-tuning memory also includes activations, gradients, and optimizer state, so the precision change alone does not guarantee a fourfold reduction. A reader also cannot tell whether the figure is peak memory per run or another measure, making the claim harder to assess.
2. The two nearby uses of “by” make it less clear at a glance which phrase states the result and which states the method. That weakens the readability of an otherwise direct technical claim.

**How to change it**
1. Replace the 4× claim with the measured reduction, using [measured amount], and, if available, specify [peak GPU memory from X GB to Y GB per fine-tuning run].
2. Remove or reposition one “by” when revising the memory-reduction claim.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test description uses present tense for work described in a past role. *(no words)*

**Why**
The bullet describes a completed role and uses past tense for the latency reduction, but “fail” shifts to present tense. A reader may wonder whether the checks are current or were part of the completed work.

**How to change it**
Change “fail” to “failed” if the checks were part of that past work.

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense and opens with a duty rather than the specific work performed. *(no words)*
2. [Important] The three-day release-cycle duration has no before-and-after comparison. *(about 3–5 words to add)*
3. [Polish] The automated regression checks are not identified. *(about 2–6 words to add)*

**Why**
1. “Maintained” describes past work, while “adds” reads as ongoing. Opening with the broad duty also delays the specific contribution, making the line less direct.
2. A reader can see the resulting duration but cannot tell how much the checks shortened the cycles. Without the prior duration, the size of the improvement is unclear.
3. The bullet does not say what the checks tested in the perception-model release pipeline. Without an example of their coverage, a reader cannot assess the technical contribution.

**How to change it**
1. Change “adds” to past tense and lead with the specific work performed instead of “Maintained the CI pipeline.”
2. Add the prior duration as [from X days to 3 days], if known.
3. Specify [the model behavior or metric the checks tested], if accurate.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Polish] The service-migration result is not the opening point of the bullet. *(no words)*

**Why**
The line first explains the migration and its reliability mechanisms, then gives the operational result. A reader scanning the bullet may not immediately see that the change removed the nightly backlogs delaying dispatch.

**How to change it**
Move the result about removing the nightly backlogs to the opening of the bullet, before the migration details.

*raised by narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The adoption claim names neither the practices adopted nor a specific delivery or downstream result, and it does not connect clearly to the entry’s concrete technical results. *(about 5–15 words to add)*

**Why**
“AI-first engineering practices” does not tell a reader what you introduced, while the benefits do not say what changed for downstream teams. Because the other bullets describe runtime and context-management work, the broad claim also reads as disconnected from the evidence in this entry.

**How to change it**
Replace “AI-first engineering practices” with [the specific practice or tool you introduced], and replace the benefit phrase with [the specific delivery or downstream outcome] and, if available, [the change compared with a prior result or baseline].

*raised by content, wording, narrative*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The 100× comparison does not say what grew. *(no words)*

**Why**
“The raw conversation grew 100x” leaves the measured quantity unclear. A reader has to infer what was compared, which makes the stress-test result harder to scan and interpret.

**How to change it**
Replace “raw conversation” with [the specific quantity that grew], if accurate.

*raised by wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Error] The concurrency changes do not by themselves establish that tool results were no longer lost. *(about 2–8 words to replace)*
2. [Important] The 50-way fan-out condition gives no measure or verification that deadlocks and lost results were eliminated. *(about 4–10 words to add)*
3. [Polish] The concrete concurrency result is not the opening bullet. *(no words)*
4. [Polish] The failure condition is phrased ambiguously. *(no words)*

**Why**
1. Gating cache writes until stream completion can prevent a partial stream from being cached as complete, but it does not ensure that results reach or are collected by fan-in. Results could still be lost through delivery, aggregation, worker-failure, or shared-state issues, so the claim needs to match the failure path actually addressed.
2. The reader knows the concurrency scale but cannot gauge the reliability improvement or how it was confirmed. A concise failure measure or test result at that scale would anchor the outcome.
3. The entry opens with a broad adoption claim, while this bullet gives a specific runtime change and result. Leading with the concrete work would make the technical evidence easier to find.
4. “Under 50-way fan-out” can read as a general condition rather than the specific test level. A reader may not know whether the failures were observed at that concurrency level.

**How to change it**
1. If the observed loss was a partial-result cache race, narrow the claim to that race. Otherwise, name the result-delivery or aggregation mechanism actually used; if none was implemented, remove or soften the lost-results claim.
2. Add [the deadlock or lost-result rate before and after, or the verification result under the same fan-out], if available.
3. Move this bullet ahead of the broad adoption claim, without changing its wording.
4. Change “under 50-way fan-out” to “at 50-way fan-out.”

*raised by content, narrative, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metric integration states what was added but not what the addition enabled or improved. *(about 4–10 words to add)*

**Why**
A reader cannot judge the value of integrating eight metrics without a result showing how evaluation coverage or use changed. The contribution is concrete, but its impact is not yet apparent.

**How to change it**
Keep the integration detail and add [the resulting change in evaluation coverage or use, measured against before integration], if available.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the two quantities being correlated. *(about 3–8 words to add)*
2. [Polish] The quantified evaluator result is not the opening bullet. *(no words)*
3. [Polish] The result bullet combines a past-tense action with a present-tense clause. *(no words)*

**Why**
1. A reader cannot tell what the coefficient measures, so the number does not clearly establish how well the evaluator tracked injected degradation. Naming the correlated quantities would make the validation result interpretable.
2. The first bullet describes the integration, while this one gives the validation result and its scope. Leading with the result would make the strongest evidence of the framework’s performance more visible.
3. “Showed” is past tense, while “tracks” shifts to present tense within the same claim. That mismatch interrupts the sentence and makes the description less polished.

**How to change it**
1. Clarify what the correlation relates, such as evaluator scores against [known degradation severity or rank], if accurate, while keeping the trial count as the validation scope.
2. Move this validation bullet ahead of the integration bullet, without changing its wording.
3. Change this to “Showed that the evaluator tracked” or “Validated that the evaluator tracks.”

*raised by content, narrative, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The backlog reduction and sensor-triage achievement appear in both this project and the Mobility Systems Company experience. *(saves about 10–20 words if removed)*
2. [Polish] The triage method is described with team-specific terms that may not explain how the backlog was reduced. *(about 2–8 words to replace)*

**Why**
1. This bullet reports a two-thirds backlog reduction while screening more than 800 sensor signals per case, and the experience bullet reports a 68% reduction with the same signal count. A reader may take these as the same achievement credited twice, which can undermine confidence in the résumé’s account of the work.
2. A reader unfamiliar with “triage branch” or “ML-extracted features” may not understand what the system did. The line also does not identify the feature-extraction or modeling approach behind the signal screening.

**How to change it**
1. Keep the achievement under one entry, or clarify [how the project, backlog, or outcome differed] if these were distinct efforts.
2. If keeping this bullet, replace “triage branch” and “ML-extracted features” with plain-language descriptions, including [the key feature-extraction or modeling approach], if accurate.

*raised by content, narrative, wording*

> triage branch

**Problem**
[Important] The evaluation-framework entry ends with a sensor-triage claim that appears unrelated to its first two bullets. *(saves about 19 words if removed)*

**Why**
The opening bullets form a coherent story about research-agent evaluation, while the sensor-triage result shifts to a different kind of work. Alongside the matching experience claim, the shift makes the project’s scope harder to understand.

**How to change it**
Remove this bullet from the project entry or clarify [how the sensor-triage work belongs to this project], if accurate.

*raised by narrative*

## Set aside (4)

- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” states the goal, not a demonstrated outcome.
- s3:e1:b2: “Cut the pending-case backlog by two-thirds”
- s3:e1:b2: “a triage branch that screens 800+ sensor signals per case using ML-extracted features”
- s2:e0:b5: The industrial-system and signal details delay the backlog reduction, so move the quantified result to the beginning of the bullet.
