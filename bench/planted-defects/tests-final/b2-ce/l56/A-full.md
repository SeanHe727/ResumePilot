# Full review: resume.pdf

**85/100** — format 100 · content 77 · wording 84 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 14 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] The résumé includes personal details that are conventionally omitted and are not relevant to a hiring reader's evaluation. *(saves about 10 words)*

**Why**
Date of birth and nationality do not support the technical qualifications shown elsewhere in the document. Leaving them in can distract from the candidate's experience and expose information a reader is not meant to weigh.

**How to change it**
Remove "Date of birth: 14 Mar 1999 | Nationality: Canadian" from the résumé.

*raised by file*

> Jun 2022

**Problem**
[Important] The résumé leaves a 10-month period unaccounted for between the bachelor's degree and the Junior Software Engineer role. *(about 4 words to add)*

**Why**
The dates show no study or work listed after "Jun 2022" and before the next listed role begins in May 2023. A reader may wonder whether the gap reflects unemployment, another activity, or an omitted role, which interrupts an otherwise clear chronology.

**How to change it**
Add [study, work, or other relevant activity during this period] if there was one; otherwise leave the dates unchanged rather than inventing an explanation.

*raised by narrative*

> Mobility Systems Company

**Problem**
[Polish] Experience should appear above education because the engineering roles now carry the résumé's strongest career story. *(no words)*

**Why**
The machine learning internship and robotics software role show substantial applied engineering work that is more relevant to a recruiter than the degree history alone. Leading with education delays the evidence of current technical impact.

**How to change it**
Move the experience section above the education section.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy improvement is ambiguous because the line does not state the baseline, comparison, or whether the figure is a relative increase or a percentage-point gain. *(about 4 words to add)*

**Why**
A hiring reader cannot judge the size or credibility of the improvement without knowing what it was measured against. For model metrics, confusing percentages with percentage points can substantially overstate or obscure the result.

**How to change it**
Replace "by 35%" with "from [baseline accuracy] to [result accuracy] on [evaluation set or comparison]" if accurate, and keep the fine-tuning method after the measured result.

*raised by content*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
1. [Important] The evaluation-harness bullet does not show what changed because the two detected regressions were caught before release. *(about 6 words to add)*
2. [Polish] The phrase "the team used to compare" delays the stronger facts about the 14 checkpoints and two regressions. *(saves about 4 words)*

**Why**
1. A reader can see that the harness found problems, but not why that prevented a meaningful release risk or improved the shipped system. The statement implies release value without making the consequence legible.
2. It describes the harness through its users rather than foregrounding what you built and what it measured. The result is a low-information opening that reduces the bullet's impact.

**How to change it**
1. Keep the detection result and replace or extend "before release" with the concrete consequence, such as [prevented a regressed checkpoint from shipping] or [enabled the team to block a release candidate], if accurate.
2. Cut "the team used to" so the bullet leads directly with the harness comparing 14 adapter checkpoints.

*raised by content, wording*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
[Error] The phrase claiming that assistant-only loss masking made the model reproduce tool outputs more faithfully is technically incorrect. *(about 3 words to add)*

**Why**
Assistant-only masking excludes tool-result tokens from the loss, so those tokens provide context for later assistant responses but receive no direct training signal. Reproducing tool outputs would require those outputs to be included as loss-bearing assistant targets or trained with a separate objective.

**How to change it**
Change the claim to say the masking helped the model use tool outputs more faithfully in subsequent assistant responses; if the outputs were represented as loss-bearing assistant targets or trained with a separate objective, state that method explicitly.

*raised by content, wording*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
The backlog result is more grammatical and precise with "by 68%" rather than "68%." *(about 1 word to add)*

**Why**
The existing wording is understandable, but the missing preposition makes the reduction read less cleanly. A small grammatical correction makes the quantified outcome easier to scan.

**How to change it**
Replace "cutting the pending-case backlog 68%" with "cutting the pending-case backlog by 68%."

*raised by wording*

> assistant-only loss masking

**Problem**
[Important] The adapter fine-tuning result and the assistant-only loss-masking detail repeat the same accomplishment. *(saves about 12 words)*

**Why**
The reader encounters the same method in both bullets, which uses space without adding a second achievement. That repetition weakens the stronger quantified accuracy result and makes the entry feel less focused.

**How to change it**
Retain the quantified accuracy result in this bullet and remove or fold the implementation detail from the separate masking bullet.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claim that switching from FP32 to BF16 mixed precision alone cut fine-tuning GPU memory by 4x is incorrect. *(no words)*
2. [Important] The phrase "by 4x" does not show the baseline or clearly state how the memory changed. *(about 5 words to add)*

**Why**
1. BF16 uses 16-bit values instead of FP32's 32-bit values, so the direct storage reduction is roughly 2x. Fine-tuning commonly retains FP32 optimizer states, gradients, or master weights, making a 4x reduction impossible to attribute to this switch alone.
2. A technical reader cannot immediately tell whether memory became one-quarter as large or four times smaller. Without the starting and ending values, the magnitude of the improvement is difficult to verify.

**How to change it**
1. State a reduction of roughly 2x for the BF16-stored tensors, or retain the 4x figure only if additional memory-saving changes were used and name them.
2. Replace "by 4x" with "from [baseline GPU memory] to [resulting GPU memory]" or an explicitly stated percentage reduction, if accurate.

*raised by content*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet mixes past and present tense and leads with ongoing maintenance instead of the specific improvement. *(no words)*
2. [Important] The release-cycle result gives the endpoint but not the prior duration. *(about 4 words to add)*
3. [Important] The phrase "automated regression checks" does not identify what the checks evaluated. *(about 2 words to add)*

**Why**
1. The ended role calls for consistent past tense, while "Maintained the CI pipeline" frames routine ownership rather than the change that produced the result. The reader may miss the stronger contribution—adding checks that shortened releases.
2. Without the starting point, a reader cannot judge the size of the improvement or distinguish a major acceleration from a minor change. The three-day endpoint alone does not establish the impact of the checks.
3. The reader can tell that testing was automated, but not which model-release risks the work addressed. Naming the checks would make the technical skill and release impact more concrete.

**How to change it**
1. Change "adds" to "added" and move "Added automated regression checks" before the maintenance clause.
2. Add the prior duration before "to 3 days": "from [previous release-cycle duration] to 3 days."
3. Replace the phrase with "automated [specific model-release regression checks]" if accurate.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The nightly-backlog result is qualitative and does not show how often or how long dispatch was delayed. *(about 5 words to add)*
2. [Polish] The strongest line should open the entry: the 30-service event-queue migration carries the clearest operational result. *(no words)*

**Why**
1. A reader can understand the operational problem, but cannot gauge the size of the improvement from the statement alone. The migration's technical scope is clear while its operational effect remains unanchored.
2. That bullet combines scale, a concrete architectural change, and an operational consequence, so it gives a recruiter the fastest evidence of engineering impact. Leading with a less distinctive memory-optimization result delays the entry's strongest story.

**How to change it**
1. Add one anchor such as [number of nightly backlog incidents eliminated] or [dispatch-delay duration before and after], if available.
2. Move the event-queue migration bullet to the top of the entry.

*raised by content, narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The line does not identify which AI-first practices were introduced. *(about 5 words to add)*
2. [Important] The phrases "accelerating delivery" and "improving outcomes" state unmeasured benefits instead of a checkable result. *(about 5 words to add)*

**Why**
1. A reader cannot see what technical or organizational work you performed, so the ownership claim remains abstract. Broad terminology does not demonstrate a concrete platform skill or explain how adoption was driven.
2. A hiring reader cannot distinguish a meaningful platform result from a general process claim. The lack of an adoption, delivery, or downstream outcome figure also makes the ownership claim difficult to assess.

**How to change it**
1. Replace or follow the phrase with one or two specific practices, such as [practice introduced] and [practice introduced], using only practices you actually introduced.
2. Replace the broad benefits with the specific change and one anchor such as [number of teams or engineers adopting the practices], [delivery-time change], or [specific downstream outcome].

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Important] The line describes a context constraint without stating what capability, reliability, cost, or user experience it enabled. *(about 6 words to add)*
2. [Polish] The phrase "working context" is jargon and does not make clear what was kept below 10K tokens. *(about 1 word to add)*
3. [Polish] "Grew 100x" lacks a starting point, so the scale of the raw conversation is difficult to interpret. *(about 5 words to add)*
4. [Polish] The method phrase does not explain which change produced the measured context constraint. *(no words)*

**Why**
1. The reader can see that the stress test met a technical limit, but not why that mattered to the product or its users. Without a consequence, the bullet reads as a successful test condition rather than an outcome.
2. A general reader may not know whether the phrase refers to the model prompt, retained conversation, or another runtime state. That ambiguity makes the technical achievement harder to understand quickly.
3. The multiplier sounds substantial, but a reader cannot tell whether the conversation grew from 100 tokens, 1,000 tokens, or another amount. A baseline would make the stress-test scale checkable.
4. The line lists budgeted layers and staged compaction after the result, but does not connect either method to the under-10K outcome. The reader must infer the mechanism instead of seeing the engineering decision clearly.

**How to change it**
1. Keep the existing measurements and add [capability or downstream benefit enabled by staying under 10K tokens], using only a consequence you can substantiate.
2. Replace "working context" with the specific context object measured, if accurate.
3. Replace it with "from [starting token count] to [ending token count]" if accurate.
4. Move the method closer to the context result and specify which method produced the measured constraint, if accurate.

*raised by content, wording*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Error] The claim that the changes removed nested-pool deadlocks and lost tool results is too broad. *(about 4 words to add)*
2. [Important] The 50-way fan-out figure shows test scale but does not measure how much the deadlocks and lost results fell. *(about 5 words to add)*
3. [Polish] "Under 50-way fan-out" is technically dense and does not clearly indicate the concurrency condition in which the failures were observed. *(about 2 words to add)*
4. [Polish] The concurrency and cache-write bullet should open the entry because it presents the clearest concrete reliability problem and fix. *(no words)*

**Why**
1. Separate pools address a specific pool-starvation pattern, while post-completion cache writes prevent some incomplete results from being cached; neither guarantees that all deadlocks or lost results disappear. Other shared resources, cancellation paths, retries, delivery failures, and cache or process failures can still cause these problems.
2. A reader cannot tell whether failures went from frequent to zero or whether the result was observed in another way. The concurrency figure provides context but not evidence of the outcome's size.
3. A reader may not know whether the deadlocks and lost results occurred at exactly 50-way fan-out, below that level, or across tests up to that level. The phrasing makes the test condition harder to parse.
4. It names specific failure modes and a defined fan-out condition, making the platform work more immediately credible than the broader adoption claim. Moving it first lets the reader see the strongest technical contribution before the less measurable material.

**How to change it**
1. State that the changes prevented the specific failure modes reproduced in [the tested 50-way fan-out scenarios], or soften the claim to "reduced nested-pool deadlocks and lost tool results."
2. Keep the fan-out figure as context and add [before-and-after failure count or rate], measured across [test runs or requests], if that evidence exists.
3. Replace it with a clearer condition such as "in tests with up to 50 concurrent branches," if accurate.
4. Move the concurrency-pool and cache-write bullet to the top of the entry.

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The metric-integration bullet does not state what changed because the eight metrics were added. *(about 6 words to add)*

**Why**
A reader can see the deliverable but cannot tell whether it expanded evaluation coverage, enabled comparison across agents, or improved the framework's usefulness. The work therefore reads as implementation without a visible result.

**How to change it**
Add the resulting benefit after the integration, such as [expanded evaluation coverage to X metric categories] or [enabled evaluation of X additional failure modes], using the one outcome you can substantiate.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The line does not say what the Kendall correlation of 0.89 was calculated between. *(about 5 words to add)*
2. [Polish] The trial description names the removed content but not how the evaluator detected or scored the resulting degradation. *(about 3 words to add)*
3. [Polish] "Showed the evaluator tracks" is awkward and makes the relationship between the action and evaluator unclear. *(about 1 word to add)*
4. [Polish] The evaluator bullet should open the project because it provides the strongest measured evidence of evaluation quality. *(no words)*

**Why**
1. Without the two variables, a reader cannot tell whether the figure measures agreement with injected degradation, ranking quality, or another relationship. The statistic is therefore difficult to interpret or evaluate.
2. The experiment design is visible, but the technical evaluation skill is harder to assess because the measured evaluator output is not named. A reader cannot tell what the 0.89 relationship actually represents.
3. The reader has to parse whether the evaluator tracked the degradation or whether the candidate demonstrated something else about the evaluator. That weakens the opening action in an otherwise quantitative bullet.
4. Its 0.89 correlation and 400+ trials give the project an immediate, checkable result. Leading with the metric-integration deliverable delays the evidence that most clearly demonstrates the candidate's evaluation work.

**How to change it**
1. Expand the phrase to [Kendall correlation between the evaluator score and injected degradation level], if accurate, while retaining the existing 0.89 and 400+ figures.
2. Add the single most telling evaluator output or scoring mechanism, such as [citation-recall score], [faithfulness score], or [the specific metric used], if accurate.
3. Replace the opening with a direct verb such as "Validated that the evaluator tracks" or "Found that the evaluator tracks," if accurate.
4. Move the evaluator-validation bullet to the top of the project entry.

*raised by content, wording, narrative*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The sensor-signal triage achievement is duplicated across entries and conflicts in both ownership and reduction figure. *(saves about 18 words)*
2. The two-thirds backlog reduction lacks a comparison period or baseline. *(about 4 words to add)*
3. "Triage branch" is an implementation term that may not tell a general reader what work was performed. *(about 1 word to add)*
4. "Pending-case backlog" redundantly describes cases in a backlog as pending. *(saves about 1 word)*

**Why**
1. The repeated 800+ sensor-signal method identifies the two bullets as the same accomplishment, while 68% and two-thirds present different results. This makes the reader doubt which employer or project delivered the work and which figure is verified.
2. A percentage reduction without the measured period or starting backlog does not show how the result was calculated. This ambiguity compounds the conflicting 68% figure elsewhere and makes the accomplishment harder to verify.
3. A reader may understand that some software branch was added but not what operational function it served. The wording hides the practical nature of screening and routing cases.
4. The phrase is longer than necessary and makes the result less direct. Removing the redundant modifier preserves the operational meaning while improving scanability.

**How to change it**
1. If this is the internship result, remove the bullet from this project and retain the 68% figure under Mobility Systems Company; otherwise replace it with the project-specific verified result [and its measured percentage].
2. If this bullet is retained, add the comparison period or baseline, such as [backlog before and after] or [measurement period], and use the verified percentage.
3. Replace "triage branch" with a clearer description of the component's function, such as [case-screening path], if accurate.
4. Replace "pending-case backlog" with "case backlog."

*raised by content, narrative, wording*

## Already working

- s2:e0:b1: Connects an architectural decision directly to a measured quality improvement.
- s2:e0:b2: Combines method, efficiency outcomes, baseline, and the accuracy constraint in one line.

## Set aside (8)

- s2:e0:b4: "so the model would learn to reproduce the tool outputs more faithfully" gives no measurement of faithful reproduction.
- s3:e1:b2: The phrase "Cut the pending-case backlog by two-thirds" gives a percentage reduction without identifying the comparison period or baseline.
- s3:e1:b2: The method is summarized as "a triage branch that screens 800+ sensor signals per case using ML-extracted features."
- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” explains intent rather than showing what changed, and duplicates the fine-tuning method in bullet b0.
- s2:e0:b5: “cutting the pending-case backlog 68%” is understandable but less grammatical and precise than “cutting the pending-case backlog by 68%.”
- s3:e1:b2: "triage branch" uses an implementation term that may not tell a general reader what work was performed.
- s3:e1:b2: "pending-case backlog" repeats the idea that cases in a backlog are pending.
- s2:e0:b5: the strongest line is not the opening one: “Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.” would land harder first
