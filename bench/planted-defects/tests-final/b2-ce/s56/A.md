> Here is my resume: bench/planted-defects/tests-final/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed: content and wording specialists read all 4 bullet-bearing entries; narrative and format specialists reviewed the full resume; education entries had no bullets to assess; job-description matching did not run because no posting was provided.

Most important changes identified:

1. **Remove the duplicated triage achievement.** The 800+ sensor-signal result appears under both the internship and evaluation project, with slightly different figures and attribution. Keep it only under the correct entry and use one consistent figure.
2. **Fix unsupported or ambiguous metrics.** Clarify the baseline behind the 35% accuracy gain, the latency statistic used, and the variables behind the 0.89 Kendall correlation. Recheck the claimed 4× GPU-memory reduction from FP32 to BF16.
3. **Cut or substantiate weak bullets.** The internship repeats the same fine-tuning work twice. The Agent Runtime Suite’s “AI-first engineering practices” bullet is generic, while several implementation bullets state intended benefits without demonstrated outcomes.
4. **Clean up chronology and wording.** Briefly account for the June 2022–May 2023 gap, correct tense inconsistencies, define GRPO/SFT on first use, and add missing “by” before percentage reductions.

The file is one page, parses cleanly in an ATS, and has no layout blockers. The complete findings are available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 78 · wording 88 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 11 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] The file includes personal details that readers are not meant to weigh in hiring.

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to professional qualifications and can expose protected personal information. Including them consumes space and may introduce avoidable bias into the review.

**How to change it**
Remove the full date-of-birth and nationality line.

> Jun 2022

**Problem**
[Polish] The chronology leaves a 10-month period between the B.S. and the first listed role unexplained.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The accuracy improvement lacks a starting value and does not distinguish a relative increase from a percentage-point gain.

**Why**
Without the baseline, a reader cannot determine the model’s final quality or interpret what the 35% represents. That ambiguity weakens an otherwise strong result and makes comparison with other models impossible.

**How to change it**
Replace "by 35%" with "from [baseline accuracy] to [final accuracy] on [evaluation set]." If only the relative change is available, use "by 35% relative to [baseline]."

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
1. [Polish] The two percentage reductions are missing the word "by."
2. [Polish] The abbreviations "GRPO" and "SFT" are not defined on first use.
3. The latency reduction does not identify whether the measurement is mean, median or a tail percentile.

**Why**
3. Different latency statistics can produce materially different impressions of system performance. A reader cannot tell whether the 5% result reflects typical behavior or improvement in the slowest cases.

**How to change it**
3. Add the measured statistic before "end-to-end latency," such as "[mean, median, p95, or p99]" if accurate.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
The regression count does not show how severe the failures were or what acceptance threshold they violated.

**Why**
Catching two regressions sounds useful, but a reader cannot tell whether they were marginal fluctuations or release-blocking quality failures. That missing context limits the evidence that the harness protected model quality.

**How to change it**
After "2 accuracy regressions," add either [the size of the accuracy drops] or [the release threshold they violated].

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not directly train the model to reproduce separate tool-output messages more faithfully.
2. [Important] The adapter fine-tuning method is repeated without adding a distinct contribution.

**Why**
1. The mask excludes non-assistant tool or observation tokens from the training loss, so those outputs are not reproduction targets. The method instead trains assistant responses conditioned on tool outputs, and the résumé also provides no measurement showing that output fidelity improved.
2. The earlier bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating that method spends an entire bullet on information the reader has already seen and dilutes the entry’s stronger, measured achievements.

**How to change it**
1. If this bullet is retained, replace the purpose clause with "so training focused on assistant responses conditioned on tool outputs." Use a stronger outcome only if [a measured response-quality or fidelity result] supports it.
2. Cut this bullet; retain the method in the earlier accuracy bullet, where it is already tied to a measured result.

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The strongest internship result is buried as both the final clause and the final bullet.
2. [Polish] The phrase "ML-extracted features" is too broad to identify the machine-learning approach behind the triage system.
3. [Polish] The backlog reduction is missing the word "by."
4. [Polish] The spelled-out quantity "eight weeks" is inconsistent with the entry’s use of numerals.

**Why**
1. The 68% backlog reduction is the entry’s clearest operational outcome, but readers encounter it only after the implementation details and all other bullets. Leading the sentence and the entry with that result would make the internship’s business impact visible immediately.

**How to change it**
1. Move this bullet to the first position, and move the backlog-reduction clause to its beginning before the explanation of how it was achieved.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claimed 4x reduction in total GPU memory from switching from FP32 to BF16 mixed precision is technically unsupported as written.
2. [Polish] The memory reduction does not state what practical capability or constraint it changed.

**Why**
1. BF16 uses half the storage of FP32 for tensors converted to BF16, implying at most a 2x reduction for those tensors alone. Total fine-tuning memory normally falls by less because some optimizer states or master weights remain FP32, while "by 4x" is also mathematically ambiguous; a 4x total result requires additional memory-saving changes.

**How to change it**
1. Replace "by 4x" with "by [measured percentage]" or "to [measured fraction]" based on the actual total-memory measurement. If other optimizations produced the 4x result, name them alongside BF16 mixed precision.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The verb "fail" incorrectly shifts to present tense within an ended role.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The verbs "Maintained" and "adds" incorrectly mix past and present tense.
2. [Important] The release-cycle result gives the final duration without the prior duration.
3. [Important] The line leads with routine pipeline maintenance and buries the stronger automation contribution.
4. [Polish] The phrase "automated regression checks" does not identify which model-release property the checks protected.

**Why**
1. The role ended in July 2024, so the bullet should describe both actions consistently in the past tense. The mismatch is a visible grammatical error in a line about release discipline.
2. A three-day cycle cannot be judged as a meaningful improvement without knowing what it replaced. The missing baseline prevents the reader from quantifying the benefit of the automation.
3. Recruiters scanning the first words see upkeep rather than the change that shortened release cycles. Leading with the added checks would frame the bullet around ownership and improvement.

**How to change it**
1. Replace "adds" with "added."
2. Replace this phrase with "shortened release cycles from [prior duration] to 3 days."
3. Move "added automated regression checks" to the beginning, then place the maintenance context after the result if it remains necessary.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The entry’s strongest systems-migration bullet is not in the opening position.

**Why**
Migrating 30 services and eliminating dispatch-delaying backlogs shows greater scope and operational consequence than the current opening bullet. Putting it first would establish systems ownership before the narrower optimization work.

**How to change it**
Move this bullet to the first position in the entry.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The phrase "AI-first engineering practices" is undefined jargon rather than a concrete implementation or technical decision.
2. [Important] The claimed delivery and downstream benefits are generic and unsupported by a specific change or result.

**Why**
1. A reader cannot see what workflow, tool or quality mechanism you personally introduced. The abstraction therefore conceals the engineering work behind the claimed adoption.
2. A reader cannot distinguish a measured platform improvement from a statement of positive intent. Without a named outcome, the line does not establish what improved or how the platform affected another team.

**How to change it**
1. Replace the phrase with [one or two specific AI-assisted workflows, tools, or quality-control mechanisms implemented], retaining only the practice most responsible for the result.
2. Replace this phrase with [delivery-time change compared with the prior process] or [a specific downstream capability or adoption outcome]. Remove it until a defensible result is available.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Important] The entry’s strongest quantified context-management result is not the opening bullet.
2. [Polish] The bounded context result does not show whether useful agent performance survived compaction.

**Why**
1. The 100-turn test, sub-10K-token bound and 100x raw-conversation growth give immediate scale and technical substance. Opening with that evidence would make the project more credible than the current generic adoption statement.

**How to change it**
1. Move this bullet to the first position in the entry.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Polish] The preposition "under" makes the tested fan-out level ambiguous.
2. The fan-out test states a load condition but provides no before-to-after failure evidence.

**Why**
2. The line says deadlocks and lost results were removed, but it does not show their previous frequency or whether zero failures were observed across a defined test. That leaves the reliability improvement less verifiable than the concurrency figure suggests.

**How to change it**
2. Add [the prior failure rate or count] and [the post-change failure rate or count over a stated test volume], if measured.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Polish] The metric description is too broad to show which evaluation methods were implemented or how they were integrated.
2. [Polish] The integration bullet stops at implementation without stating what capability it enabled or gap it closed.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation does not identify the two variables or rankings being compared.
2. [Important] The entry’s strongest validation result is not the opening bullet.
3. [Polish] The phrase "injected degradation" is opaque jargon.
4. [Polish] The verb "Showed" describes the validation action too generically.

**Why**
1. A Kendall value is interpretable only when the paired orderings are clear. Without them, a reader cannot determine exactly what the strong correlation proves about the evaluator.
2. The 0.89 correlation across more than 400 trials provides stronger evidence than the implementation count alone. Leading with it would establish that the evaluator was validated before explaining what was integrated.

**How to change it**
1. Replace the phrase with "Kendall τ=0.89 between [degradation ordering or level] and [evaluator score or ranking]."
2. Move this bullet to the first position in the entry.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The triage bullet wrongly attributes the internship’s industrial-inspection achievement to the research-agent evaluation project.
2. The phrase "pending-case backlog" is redundant.
3. The backlog reduction does not state the period over which it occurred.
4. The screening description uses vague internal terminology without explaining the machine-learning method or decision.

**Why**
1. The same 800+ signal triage work appears under the internship with a 68% reduction, while this entry reports two-thirds and provides no adaptation connecting it to the research framework. Readers will recognize the duplicate, question the accomplishment’s provenance and doubt the accuracy of both entries.
2. A backlog already consists of pending work, so the modifier adds no meaning. The redundancy makes the duplicated result more cumbersome without improving precision.
3. A two-thirds reduction over days, weeks or months would imply very different operational performance. Without the period, the result cannot be evaluated or compared with the internship’s eight-week figure.
4. "Triage branch" does not tell an outside reader whether this was a ranking, classification or escalation workflow, while "ML-extracted" does not identify how the features were produced. The scale is visible, but the technical contribution remains unclear.

**How to change it**
1. Remove this bullet from the project entry and retain one consistent backlog figure under the correct internship entry. Alternatively, replace it with [a contribution actually made to the Research-Agent Evaluation Framework]; if the work was genuinely adapted, describe that adaptation rather than repeating the original impact.
2. Replace "pending-case backlog" with "case backlog."
3. If this result belongs in the entry, add "over [measured period]" after "two-thirds."
4. If the bullet is retained, replace this phrase with a plain description such as "a [ranking, classification, or escalation] workflow using features extracted with [model or method]."

## Already working

- s2:e0:b1: Uses an especially clear 14%-to-6% comparison.

## Set aside (10)

10 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-4ab550e1.md.

