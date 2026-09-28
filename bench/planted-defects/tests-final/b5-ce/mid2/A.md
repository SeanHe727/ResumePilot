> Here is my resume: bench/planted-defects/tests-final/b5-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and ATS formatting. The education entries had no bullets to review. A job-specific match wasn’t run because no posting was provided.

The main changes to consider:
- Resolve repeated claims: two internship bullets describe the same fine-tuning work, and the backlog reduction appears in both the internship and project sections.
- Clarify the evidence behind key results, including the 35% diagnostic-accuracy gain, the 4× GPU-memory reduction, and the three-day release cycle.
- Rework the generic “AI-first engineering practices” project claim, and consider moving Experience ahead of Education. The narrative review also flagged an unexplained 10-month gap and the shift from a software-engineer title to an internship.

The format check found clean ATS parsing and no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 77 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 10 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2022

**Problem**
[Important] The résumé leaves a 10-month gap between the B.S. and the first listed work role unexplained.

**Why**
The B.S. ends in June 2022 and the Junior Software Engineer role begins in May 2023, with no listed study or work in between. A reader may wonder what occupied that period or whether relevant experience is missing.

**How to change it**
If relevant study or work took place during this period, add [the activity and dates]; otherwise, leave the dates as they are rather than implying an explanation.

> Western State University | M.S. in Computer Engineering

**Problem**
[Important] Education appears before the professional experience that is most relevant to the roles described.

**Why**
A reader sees the education entries before the engineering and machine-learning experience. This delays the relevant work history and may make the résumé’s strongest qualifications less visible at first glance.

**How to change it**
Move EXPERIENCE ahead of EDUCATION and keep the current degree visible in EDUCATION.

> Machine Learning Engineering Intern

**Problem**
[Polish] The later job title reads as a step back from Junior Software Engineer to Machine Learning Engineering Intern.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% diagnostic-accuracy improvement does not identify its measure or comparison point.

**Why**
A reader cannot tell what counted as a correct diagnosis or what result the 35% is measured against. Without the evaluation measure and baseline, the size and meaning of the gain are difficult to assess and defend.

**How to change it**
Clarify the measure and evaluation set as [accuracy measure and evaluation set], and, if available, identify [baseline accuracy] as the comparison for the 35% improvement.

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
[Polish] The routing constraints come before the quantified reduction in reviewer disagreement.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Polish] The GRPO method description comes before both quantified results.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
[Polish] The evaluation-harness description comes before the release-safety result.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not train the model to reproduce tool outputs faithfully.
2. [Important] The assistant-only loss-masking method is repeated in a method-only bullet with no distinct result.

**Why**
1. Assistant-only loss masking excludes tool-output tokens from the training loss, so those tokens receive no direct training signal to be reproduced. A reader familiar with the method may question the stated purpose; the model might learn tool-output patterns indirectly, but the masking itself does not establish faithful reproduction.
2. The first bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating that method in the next bullet can make the two bullets look like one achievement presented twice, taking space from distinct work.

**How to change it**
1. If the masking was used, describe it as training the model’s assistant responses on tool-use trajectories. Claim tool-output reproduction only if tool-output tokens were included in the loss; otherwise remove that claim.
2. Remove this bullet, as the quantified accuracy result and method already appear in the first bullet, or replace it with a distinct contribution if accurate.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Polish] The feature-extraction or modeling approach behind the triage system is unspecified.
2. [Polish] The backlog reduction is buried after the system and signal details.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The 4× total GPU-memory reduction is not established by switching from FP32 to BF16 alone, and the bullet gives no measured memory values or baseline.
2. [Polish] The repeated “by” makes the result and method phrase awkward to scan.

**Why**
1. BF16 stores each value using half the space of FP32, but total fine-tuning memory also includes activations, gradients, and optimizer state, so the precision change alone does not guarantee a fourfold reduction. A reader also cannot tell whether the figure is peak memory per run or another measure, making the claim harder to assess.

**How to change it**
1. Replace the 4× claim with the measured reduction, using [measured amount], and, if available, specify [peak GPU memory from X GB to Y GB per fine-tuning run].

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test description uses present tense for work described in a past role.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet shifts from past tense to present tense and opens with a duty rather than the specific work performed.
2. [Important] The three-day release-cycle duration has no before-and-after comparison.
3. [Polish] The automated regression checks are not identified.

**Why**
1. “Maintained” describes past work, while “adds” reads as ongoing. Opening with the broad duty also delays the specific contribution, making the line less direct.
2. A reader can see the resulting duration but cannot tell how much the checks shortened the cycles. Without the prior duration, the size of the improvement is unclear.

**How to change it**
1. Change “adds” to past tense and lead with the specific work performed instead of “Maintained the CI pipeline.”
2. Add the prior duration as [from X days to 3 days], if known.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Polish] The service-migration result is not the opening point of the bullet.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The adoption claim names neither the practices adopted nor a specific delivery or downstream result, and it does not connect clearly to the entry’s concrete technical results.

**Why**
“AI-first engineering practices” does not tell a reader what you introduced, while the benefits do not say what changed for downstream teams. Because the other bullets describe runtime and context-management work, the broad claim also reads as disconnected from the evidence in this entry.

**How to change it**
Replace “AI-first engineering practices” with [the specific practice or tool you introduced], and replace the benefit phrase with [the specific delivery or downstream outcome] and, if available, [the change compared with a prior result or baseline].

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Polish] The 100× comparison does not say what grew.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Error] The concurrency changes do not by themselves establish that tool results were no longer lost.
2. [Important] The 50-way fan-out condition gives no measure or verification that deadlocks and lost results were eliminated.
3. [Polish] The concrete concurrency result is not the opening bullet.
4. [Polish] The failure condition is phrased ambiguously.

**Why**
1. Gating cache writes until stream completion can prevent a partial stream from being cached as complete, but it does not ensure that results reach or are collected by fan-in. Results could still be lost through delivery, aggregation, worker-failure, or shared-state issues, so the claim needs to match the failure path actually addressed.
2. The reader knows the concurrency scale but cannot gauge the reliability improvement or how it was confirmed. A concise failure measure or test result at that scale would anchor the outcome.

**How to change it**
1. If the observed loss was a partial-result cache race, narrow the claim to that race. Otherwise, name the result-delivery or aggregation mechanism actually used; if none was implemented, remove or soften the lost-results claim.
2. Add [the deadlock or lost-result rate before and after, or the verification result under the same fan-out], if available.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metric integration states what was added but not what the addition enabled or improved.

**Why**
A reader cannot judge the value of integrating eight metrics without a result showing how evaluation coverage or use changed. The contribution is concrete, but its impact is not yet apparent.

**How to change it**
Keep the integration detail and add [the resulting change in evaluation coverage or use, measured against before integration], if available.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the two quantities being correlated.
2. [Polish] The quantified evaluator result is not the opening bullet.
3. [Polish] The result bullet combines a past-tense action with a present-tense clause.

**Why**
1. A reader cannot tell what the coefficient measures, so the number does not clearly establish how well the evaluator tracked injected degradation. Naming the correlated quantities would make the validation result interpretable.

**How to change it**
1. Clarify what the correlation relates, such as evaluator scores against [known degradation severity or rank], if accurate, while keeping the trial count as the validation scope.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The backlog reduction and sensor-triage achievement appear in both this project and the Mobility Systems Company experience.
2. [Polish] The triage method is described with team-specific terms that may not explain how the backlog was reduced.

**Why**
1. This bullet reports a two-thirds backlog reduction while screening more than 800 sensor signals per case, and the experience bullet reports a 68% reduction with the same signal count. A reader may take these as the same achievement credited twice, which can undermine confidence in the résumé’s account of the work.

**How to change it**
1. Keep the achievement under one entry, or clarify [how the project, backlog, or outcome differed] if these were distinct efforts.

> triage branch

**Problem**
[Important] The evaluation-framework entry ends with a sensor-triage claim that appears unrelated to its first two bullets.

**Why**
The opening bullets form a coherent story about research-agent evaluation, while the sensor-triage result shifts to a different kind of work. Alongside the matching experience claim, the shift makes the project’s scope harder to understand.

**How to change it**
Remove this bullet from the project entry or clarify [how the sensor-triage work belongs to this project], if accurate.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-687cdd06.md.

