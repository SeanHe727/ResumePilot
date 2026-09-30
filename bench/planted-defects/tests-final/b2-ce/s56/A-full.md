# Full review: resume.pdf

**87/100** — format 100 · content 78 · wording 88 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 11 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999 | Nationality: Canadian

**Problem**
[Error] The file includes personal details that readers are not meant to weigh in hiring. *(saves about 7 words)*

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to professional qualifications and can expose protected personal information. Including them consumes space and may introduce avoidable bias into the review.

**How to change it**
Remove the full date-of-birth and nationality line.

*raised by file*

> Jun 2022

**Problem**
[Polish] The chronology leaves a 10-month period between the B.S. and the first listed role unexplained. *(about 6 words)*

**Why**
The résumé moves from June 2022 to May 2023 with no study or work shown. A reader may ask whether relevant employment, training, service or another activity has been omitted, creating an unnecessary question about the timeline.

**How to change it**
Add a brief dated entry for [the activity from Jul 2022 through Apr 2023], using only the description needed to account for the period.

*raised by narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The accuracy improvement lacks a starting value and does not distinguish a relative increase from a percentage-point gain. *(about 7 words)*

**Why**
Without the baseline, a reader cannot determine the model’s final quality or interpret what the 35% represents. That ambiguity weakens an otherwise strong result and makes comparison with other models impossible.

**How to change it**
Replace "by 35%" with "from [baseline accuracy] to [final accuracy] on [evaluation set]." If only the relative change is available, use "by 35% relative to [baseline]."

*raised by content*

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
1. [Polish] The two percentage reductions are missing the word "by." *(about 2 words)*
2. [Polish] The abbreviations "GRPO" and "SFT" are not defined on first use. *(about 6 words)*
3. The latency reduction does not identify whether the measurement is mean, median or a tail percentile. *(about 1 word)*

**Why**
1. Without the preposition, both comparisons read as grammatically incomplete. The missing words interrupt an otherwise dense technical result and make the figures harder to scan.
2. Readers outside the immediate training specialty may not recognize both abbreviations. Requiring them to decode the terminology obscures the comparison between the reinforcement-learning method and its supervised baseline.
3. Different latency statistics can produce materially different impressions of system performance. A reader cannot tell whether the 5% result reflects typical behavior or improvement in the slowest cases.

**How to change it**
1. Insert "by" before "18%" and before "5%."
2. Expand the first uses to "Group Relative Policy Optimization (GRPO)" and "supervised fine-tuning (SFT)."
3. Add the measured statistic before "end-to-end latency," such as "[mean, median, p95, or p99]" if accurate.

*raised by wording, content*

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
The regression count does not show how severe the failures were or what acceptance threshold they violated. *(about 6 words)*

**Why**
Catching two regressions sounds useful, but a reader cannot tell whether they were marginal fluctuations or release-blocking quality failures. That missing context limits the evidence that the harness protected model quality.

**How to change it**
After "2 accuracy regressions," add either [the size of the accuracy drops] or [the release threshold they violated].

*raised by content*

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] Assistant-only loss masking does not directly train the model to reproduce separate tool-output messages more faithfully. *(saves about 3 words)*
2. [Important] The adapter fine-tuning method is repeated without adding a distinct contribution. *(saves about 19 words)*

**Why**
1. The mask excludes non-assistant tool or observation tokens from the training loss, so those outputs are not reproduction targets. The method instead trains assistant responses conditioned on tool outputs, and the résumé also provides no measurement showing that output fidelity improved.
2. The earlier bullet already says the adapter was fine-tuned with assistant-only loss masking. Repeating that method spends an entire bullet on information the reader has already seen and dilutes the entry’s stronger, measured achievements.

**How to change it**
1. If this bullet is retained, replace the purpose clause with "so training focused on assistant responses conditioned on tool outputs." Use a stronger outcome only if [a measured response-quality or fidelity result] supports it.
2. Cut this bullet; retain the method in the earlier accuracy bullet, where it is already tied to a measured result.

*raised by content, wording, narrative*

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
1. [Important] The strongest internship result is buried as both the final clause and the final bullet. *(no words)*
2. [Polish] The phrase "ML-extracted features" is too broad to identify the machine-learning approach behind the triage system. *(about 4 words)*
3. [Polish] The backlog reduction is missing the word "by." *(about 1 word)*
4. [Polish] The spelled-out quantity "eight weeks" is inconsistent with the entry’s use of numerals. *(no words)*

**Why**
1. The 68% backlog reduction is the entry’s clearest operational outcome, but readers encounter it only after the implementation details and all other bullets. Leading the sentence and the entry with that result would make the internship’s business impact visible immediately.
2. The line demonstrates operational value but does not expose the modeling decision or technical contribution that produced it. An ML hiring manager is left without a concrete method to evaluate or discuss.
3. The omission makes the quantified result grammatically incomplete. Because this is the bullet’s main outcome, even a small wording error distracts from its impact.
4. Nearby quantities appear as numerals, including "800+" and "68%." The inconsistent presentation makes the line slightly less uniform and scannable.

**How to change it**
1. Move this bullet to the first position, and move the backlog-reduction clause to its beginning before the explanation of how it was achieved.
2. Replace this phrase with "features extracted with [model or feature-extraction method]." If space permits, add the supported decision, such as [ranking, classification, or escalation].
3. Insert "by" before "68%."
4. Replace "eight" with "8."

*raised by wording, narrative, content*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] The claimed 4x reduction in total GPU memory from switching from FP32 to BF16 mixed precision is technically unsupported as written. *(about 3 words)*
2. [Polish] The memory reduction does not state what practical capability or constraint it changed. *(about 7 words)*

**Why**
1. BF16 uses half the storage of FP32 for tensors converted to BF16, implying at most a 2x reduction for those tensors alone. Total fine-tuning memory normally falls by less because some optimizer states or master weights remain FP32, while "by 4x" is also mathematically ambiguous; a 4x total result requires additional memory-saving changes.
2. Lower memory use is valuable, but a reader cannot tell whether it enabled a larger model, a larger batch, cheaper hardware or a previously infeasible workload. Without that consequence, the line reports an optimization without showing its engineering value.

**How to change it**
1. Replace "by 4x" with "by [measured percentage]" or "to [measured fraction]" based on the actual total-memory measurement. If other optimizations produced the 4x result, name them alongside BF16 mixed precision.
2. After "BF16 mixed precision," add [the larger batch or model size, reduced GPU requirement, or training workload enabled], if accurate.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The verb "fail" incorrectly shifts to present tense within an ended role. *(no words)*

**Why**
The rest of the bullet describes completed work in the past tense. The shift makes the line read as though the tests’ current status has been independently established beyond the stated employment period.

**How to change it**
Replace "fail" with "failed."

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The verbs "Maintained" and "adds" incorrectly mix past and present tense. *(no words)*
2. [Important] The release-cycle result gives the final duration without the prior duration. *(about 3 words)*
3. [Important] The line leads with routine pipeline maintenance and buries the stronger automation contribution. *(no words)*
4. [Polish] The phrase "automated regression checks" does not identify which model-release property the checks protected. *(about 1 word)*

**Why**
1. The role ended in July 2024, so the bullet should describe both actions consistently in the past tense. The mismatch is a visible grammatical error in a line about release discipline.
2. A three-day cycle cannot be judged as a meaningful improvement without knowing what it replaced. The missing baseline prevents the reader from quantifying the benefit of the automation.
3. Recruiters scanning the first words see upkeep rather than the change that shortened release cycles. Leading with the added checks would frame the bullet around ownership and improvement.
4. A reader cannot tell whether the work validated model accuracy, inference latency, artifacts or only basic pipeline behavior. That uncertainty prevents the line from demonstrating the specific quality-control skill involved.

**How to change it**
1. Replace "adds" with "added."
2. Replace this phrase with "shortened release cycles from [prior duration] to 3 days."
3. Move "added automated regression checks" to the beginning, then place the maintenance context after the result if it remains necessary.
4. Replace the phrase with "automated [most consequential regression type] checks," such as accuracy or inference-latency checks if accurate.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The entry’s strongest systems-migration bullet is not in the opening position. *(no words)*

**Why**
Migrating 30 services and eliminating dispatch-delaying backlogs shows greater scope and operational consequence than the current opening bullet. Putting it first would establish systems ownership before the narrower optimization work.

**How to change it**
Move this bullet to the first position in the entry.

*raised by narrative*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The phrase "AI-first engineering practices" is undefined jargon rather than a concrete implementation or technical decision. *(about 5 words)*
2. [Important] The claimed delivery and downstream benefits are generic and unsupported by a specific change or result. *(about 4 words)*

**Why**
1. A reader cannot see what workflow, tool or quality mechanism you personally introduced. The abstraction therefore conceals the engineering work behind the claimed adoption.
2. A reader cannot distinguish a measured platform improvement from a statement of positive intent. Without a named outcome, the line does not establish what improved or how the platform affected another team.

**How to change it**
1. Replace the phrase with [one or two specific AI-assisted workflows, tools, or quality-control mechanisms implemented], retaining only the practice most responsible for the result.
2. Replace this phrase with [delivery-time change compared with the prior process] or [a specific downstream capability or adoption outcome]. Remove it until a defensible result is available.

*raised by content, wording*

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
1. [Important] The entry’s strongest quantified context-management result is not the opening bullet. *(no words)*
2. [Polish] The bounded context result does not show whether useful agent performance survived compaction. *(about 6 words)*

**Why**
1. The 100-turn test, sub-10K-token bound and 100x raw-conversation growth give immediate scale and technical substance. Opening with that evidence would make the project more credible than the current generic adoption statement.
2. Keeping the context small matters only if the system still retained the information needed to complete tasks or maintain response quality. Without that evidence, a reader may interpret the result as resource control achieved by discarding important context.

**How to change it**
1. Move this bullet to the first position in the entry.
2. After the stress-test evidence, add [task-success, retrieval, or response-quality result after compaction] if it was measured.

*raised by narrative, content*

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Polish] The preposition "under" makes the tested fan-out level ambiguous. *(no words)*
2. The fan-out test states a load condition but provides no before-to-after failure evidence. *(about 8 words)*

**Why**
1. It is unclear whether testing occurred exactly at 50-way fan-out or only below that level. This distinction affects how a technical reader interprets the demonstrated concurrency ceiling.
2. The line says deadlocks and lost results were removed, but it does not show their previous frequency or whether zero failures were observed across a defined test. That leaves the reliability improvement less verifiable than the concurrency figure suggests.

**How to change it**
1. Replace "under" with "at" if 50 was the tested concurrency level.
2. Add [the prior failure rate or count] and [the post-change failure rate or count over a stated test volume], if measured.

*raised by wording, content*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Polish] The metric description is too broad to show which evaluation methods were implemented or how they were integrated. *(about 5 words)*
2. [Polish] The integration bullet stops at implementation without stating what capability it enabled or gap it closed. *(about 7 words)*

**Why**
1. A technical reader cannot judge the sophistication of the evaluation work from category names alone. The omission also removes concrete methods that could anchor an interview discussion.
2. The reader sees the work performed but not how the framework became more useful as a result. That makes the contribution sound like feature wiring rather than an evaluation improvement.

**How to change it**
1. Replace the generic categories with [one or two representative metric names] and, if distinctive, [the integration mechanism].
2. After "evaluation module," add [the evaluation capability enabled, decision supported, or coverage gap closed].

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The correlation does not identify the two variables or rankings being compared. *(about 5 words)*
2. [Important] The entry’s strongest validation result is not the opening bullet. *(no words)*
3. [Polish] The phrase "injected degradation" is opaque jargon. *(about 1 word)*
4. [Polish] The verb "Showed" describes the validation action too generically. *(no words)*

**Why**
1. A Kendall value is interpretable only when the paired orderings are clear. Without them, a reader cannot determine exactly what the strong correlation proves about the evaluator.
2. The 0.89 correlation across more than 400 trials provides stronger evidence than the implementation count alone. Leading with it would establish that the evaluator was validated before explaining what was integrated.
3. The following examples reveal that citations, sources and claims were deliberately removed, but the abstract label makes readers decode the method before reaching those details. Plain wording would make the validation design immediately clear.
4. The line reports a structured experiment across more than 400 trials, not merely an observation. A more precise verb better reflects the strength of that validation work.

**How to change it**
1. Replace the phrase with "Kendall τ=0.89 between [degradation ordering or level] and [evaluator score or ranking]."
2. Move this bullet to the first position in the entry.
3. Replace "injected degradation" with "deliberate report degradation."
4. Replace "Showed" with "Demonstrated."

*raised by content, narrative, wording*

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
1. [Error] The triage bullet wrongly attributes the internship’s industrial-inspection achievement to the research-agent evaluation project. *(saves about 20 words)*
2. The phrase "pending-case backlog" is redundant. *(no words)*
3. The backlog reduction does not state the period over which it occurred. *(about 3 words)*
4. The screening description uses vague internal terminology without explaining the machine-learning method or decision. *(about 4 words)*

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

*raised by content, narrative, wording*

## Already working

- s2:e0:b1: Uses an especially clear 14%-to-6% comparison.

## Set aside (10)

- s2:e0:b2: "end-to-end latency 5%" does not say whether latency means an average, median, or tail measure.
- s2:e0:b3: "catching 2 accuracy regressions before release" counts the regressions but does not indicate how far the checkpoints fell or what threshold they violated.
- s2:e0:b4: "so the model would learn to reproduce the tool outputs more faithfully" states an objective but not evidence that fidelity actually improved.
- s3:e0:b2: "removing nested-pool deadlocks and lost tool results under 50-way fan-out" gives a load condition but no before-to-after failure evidence.
- s3:e1:b2: "Cut the pending-case backlog by two-thirds" does not state the period over which the reduction occurred.
- s3:e1:b2: "a triage branch that screens 800+ sensor signals per case using ML-extracted features" gives scale but not enough detail to show how cases were screened.
- s3:e1:b2: "pending-case backlog" is redundant because a backlog already consists of pending cases; use "case backlog."
- s3:e1:b2: "triage branch" is team-specific jargon whose function is not immediately clear to an outside reader; replace it with a plain term such as "triage workflow."
- s3:e1:b2: "ML-extracted" uses an abbreviation without expansion and reads awkwardly; use "machine-learning features" if that preserves the intended meaning.
- s2:e0:b4: “so the model would learn to reproduce the tool outputs more faithfully” is wordy and leaves “more faithfully” undefined; replace it with a direct, specific outcome if one is available.
