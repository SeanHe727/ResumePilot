> Here is my resume: bench/planted-defects/tests-v3/b2-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The resume was reviewed for content, wording, narrative, and ATS formatting. The full report is available in `/report --full`.

Prioritize these changes:

1. **Resolve duplicated work**
   - The adapter fine-tuning work appears in two Mobility Systems bullets.
   - The sensor-signal triage/backlog result appears in both Mobility Systems and the Research-Agent project.
   - Remove or distinguish the repeated material so each entry tells a separate story.

2. **Clarify or substantiate technical claims**
   - Define whether the “35%” diagnostic improvement is relative or percentage-point improvement, and provide the baseline if available.
   - Verify the claim that FP32-to-BF16 reduced GPU memory “by 4x”; state the before/after memory figures if possible.
   - Replace intended effects with measured results, especially the assistant-only loss-masking bullet.
   - Explain what the “100x” context comparison and “50-way fan-out” represent.

3. **Strengthen weaker outcome statements**
   - The Agent Runtime Suite’s “accelerating delivery and improving outcomes” claim needs a concrete result or should be removed.
   - The evaluation-framework integration should say what changed because the eight metrics were integrated.
   - Add the previous release-cycle duration before stating that cycles were reduced to three days.

4. **Fix wording and scanability**
   - Correct the singular agreement issue around “each … its.”
   - Add “by” in “cutting tool calls per case by 18%.”
   - Keep tense consistent in the CI and load-testing bullets.
   - Replace or explain team-specific terms such as “triage branch.”

5. **Improve ordering and chronology**
   - Consider leading with **Experience**, followed by **Projects** and **Education**, so the software-to-ML progression appears earlier.
   - Address the unexplained gap between June 2022 and May 2023 if there was relevant work, study, or another explanation.
   - The document parses cleanly as a one-page ATS-readable resume; the format specialist found no layout blockers.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 77 · wording 85 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

9 errors, 18 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Mar 1999

**Problem**
[Error] Personal details a reader is not meant to weigh should be left off the résumé. *(saves about 9 words)*

**Why**
Date of birth and nationality are not evidence of the candidate's qualifications and can introduce irrelevant screening considerations. Their absence is conventional and keeps attention on education, experience, and technical results.

**How to change it**
Delete “Date of birth: 14 Mar 1999 | Nationality: Canadian” from the résumé.

> pending-case backlog 68%

**Problem**
[Error] The same triage-branch achievement appears twice with inconsistent reduction figures. *(saves about 15 words)*

**Why**
The Mobility Systems Company bullet and the Research-Agent Evaluation Framework bullet both cite 800+ sensor signals and pending-case backlog reduction, but one says 68% and the other says two-thirds. The duplication makes the résumé look padded and the conflicting figures weaken trust in the result.

**How to change it**
Retain the achievement in one location only and use one consistent figure—68% or two-thirds—where it remains.

> Western State University

**Problem**
[Important] The résumé should place EXPERIENCE above EDUCATION and EDUCATION after PROJECTS. *(no words)*

**Why**
The software-to-ML progression is the strongest narrative evidence and should lead the page. The current M.S. supports that direction, but it is not as strong evidence of capability as the experience and project results.

**How to change it**
Move the EXPERIENCE section above EDUCATION, then place EDUCATION after PROJECTS; moving sections costs no words.

> Jun 2022

**Problem**
[Important] The résumé has an unexplained 10-month gap from Jun 2022 to May 2023. *(about 4 words)*

**Why**
A reader may ask what happened between the B.S. and the first listed software role. Leaving the interval unexplained can create uncertainty about the timeline even if there was a legitimate activity during it.

**How to change it**
Add [the activity covering the gap] if it is relevant, or leave the dates as they are only if the gap is intentionally unexplained.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The diagnostic-accuracy figure is incomplete because it does not state the baseline or whether 35% is relative improvement or percentage points. *(about 6 words)*

**Why**
A hiring reader cannot judge the size of the result precisely or compare it with the starting performance. Clarifying the comparison would make the outcome more defensible.

**How to change it**
Replace or supplement “by 35%” with [baseline accuracy and resulting accuracy, or the percentage-point change, compared with the untuned model].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.

**Problem**
1. [Error] The routing bullet has a number-agreement error: “each” takes the singular possessive “its,” not “their.” *(no words)*
2. [Error] The routing action is hard to scan because “limits each ... to their in-scope signals” is indirect. *(about 1 word)*

**Why**
1. The phrase refers to each specialist agent individually, so the plural possessive is grammatically incorrect. The error can distract a reader from the otherwise specific routing and disagreement result.
2. The reader has to parse the object restriction before seeing what the router actually does. A direct formulation would make the relationship between agents and signals clearer without changing the technical claim.

**How to change it**
1. Replace “their in-scope signals” with “its in-scope signals.”
2. Replace the indirect restriction with a direct formulation such as routing each specialist agent only its in-scope signals, if accurate.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
1. [Important] The GRPO bullet is grammatically incomplete because it says “cutting tool calls per case 18%” instead of “cutting ... by 18%.” *(1 word)*
2. [Polish] The long method chain buries the two performance results and makes the baseline comparison difficult to scan. *(saves about 4 words)*

**Why**
1. The missing preposition makes the amount of reduction momentarily unclear and makes the quantified result look unpolished. The reader has to infer whether 18% is a level or a decrease.
2. GRPO, grouped rollouts, and the reward design all appear before the reader reaches tool-call and latency outcomes. The important evidence—18% fewer calls, 5% lower latency, and equal accuracy—therefore has less immediate impact.

**How to change it**
1. Insert “by” before “18%.”
2. Move the outcome and equal-accuracy comparison earlier, then retain the GRPO and reward details after it or shorten the method chain.

> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.

**Problem**
1. [Important] The harness bullet states the number of regressions caught but not how catching them benefited the release or users. *(about 8 words)*
2. [Polish] The harness bullet weakens ownership by saying “the team used to compare” instead of stating what the harness enabled. *(saves about 2 words)*

**Why**
1. The reader can see that the harness found problems, but not the practical consequence of doing so. A short release-safety or correction detail would make the value clearer.
2. The candidate clearly wrote the harness, but the indirect clause shifts attention to the team rather than the delivered capability. A direct result would make the contribution easier to attribute.

**How to change it**
1. Add [what changed before release because of the two regressions, such as a checkpoint being rejected or rolled back], if accurate.
2. Replace “the team used to compare” with a direct purpose such as “to compare,” preserving the checkpoint, metrics, and regression result.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] The claim that assistant-only loss masking makes the model reproduce tool outputs more faithfully overstates what the method does. *(saves about 9 words)*
2. The phrase describes an intended effect rather than a demonstrated outcome and does not identify which tool outputs were assessed. *(saves about 10 words)*

**Why**
1. Assistant-only masking changes which tokens contribute to the training loss; it does not by itself supervise or guarantee faithful reproduction of tool outputs, especially when those outputs are excluded from the loss. A reproduction claim requires appropriate tool-output supervision and an evaluation demonstrating the effect.
2. “Would learn” signals a goal, not a measured result, while “the tool outputs” gives no output type or evaluation basis. That leaves the reader unable to verify what improved or distinguish this bullet from the accuracy result elsewhere.

**How to change it**
1. Remove the faithful-reproduction claim unless tool-output reproduction was directly supervised and evaluated; otherwise retain only the fact that the adapter was fine-tuned with assistant-only loss masking.
2. Cut “so the model would learn to reproduce the tool outputs more faithfully”; if direct supervision and evaluation occurred, replace it with [the measured tool-output reproduction result and the assessed output type].

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
The triage bullet uses a dense modifier and an awkward compound that slow the operational result. *(about 1 word)*

**Why**
“With ML-extracted features” does not immediately show whether the features drive screening or merely accompany it, while “pending-case backlog” is harder to scan than a direct description of pending cases. The reader may spend attention decoding the phrasing instead of the 68% result.

**How to change it**
Replace “pending-case backlog” with a clearer phrase such as “backlog of pending cases,” and move “using ML-extracted features” closer to the screening action if that preserves the intended meaning.

> assistant-only loss masking

**Problem**
[Error] The same adapter fine-tuning work is repeated in two bullets, making the achievement appear duplicated. *(saves about 10 words)*

**Why**
Both bullets mention assistant-only loss masking, while the earlier bullet already gives the resulting accuracy improvement. Repetition consumes a bullet without adding a separate achievement, weakening the apparent breadth of the internship.

**How to change it**
Combine the method with the accuracy result in one bullet, or clarify that the two bullets describe separate experiments; if they are the same work, remove the repeated bullet.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching from FP32 to BF16 mixed precision does not by itself support a 4x reduction in total fine-tuning GPU memory. *(about 2 words)*
2. The 4x memory reduction is ambiguous because the bullet gives neither a baseline nor what the reduction enabled. *(about 5 words)*

**Why**
1. BF16 uses 16-bit values instead of FP32's 32-bit values, so it can roughly halve memory for eligible weights and activations. Fine-tuning commonly retains FP32 optimizer states, gradients, master weights, and other overhead, so mixed precision alone does not normally produce a 4x reduction in total GPU memory; the unsupported ratio can make the technical claim doubtful.
2. A reader cannot tell whether 4x means a reduction from one measured memory value to another, a percentage change, or a reduction for only certain tensors. Without the baseline or practical consequence, the size and value of the result are difficult to judge.

**How to change it**
1. State the measured reduction actually attributable to BF16 mixed precision; for eligible tensors alone, describe the effect as approximately 2x rather than claiming a 4x total-memory reduction.
2. Add [baseline and resulting GPU memory, or the percentage-point reduction] and, if available, state what the saved memory enabled.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test clause uses the present tense inside an otherwise past-tense bullet. *(no words)*

**Why**
The role ended in Jul 2024, so “fail” makes the timing of the test safeguard unclear and interrupts the bullet's grammatical consistency. A reader may briefly wonder whether the build rule is still active or whether the bullet was not edited for the completed role.

**How to change it**
Replace “fail” with “failed” so the load-test result matches the past tense of the completed role.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet mixes past and present tense in a role that has ended. *(no words)*
2. [Important] The release-cycle improvement is incomplete because the bullet gives the ending duration but not the starting duration. *(about 4 words)*
3. [Polish] “Maintained the CI pipeline” frames the work as a duty instead of leading with the action that produced the result. *(saves about 4 words)*

**Why**
1. “Maintained” is past tense but “adds” is present tense, so the sentence does not establish a consistent time frame. The mismatch makes an otherwise concrete release result look less polished.
2. Three days could represent a major improvement or a minor change; the comparison is what makes the result credible to a hiring reader. Without it, the reader cannot judge the scale of the CI work.
3. Maintenance is a responsibility, but it does not tell the reader what changed. The specific regression checks and release-cycle result are stronger evidence of engineering impact and should receive the opening position.

**How to change it**
1. Replace “adds” with “added.”
2. Replace the endpoint with [release cycle duration before] to 3 days, or add [percentage or number of days reduced] if that is the available measure.
3. Move the specific action—adding automated regression checks—to the opening position and cut or move “Maintained the CI pipeline” after it.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The operational result is unmeasured because removing nightly backlogs is not quantified. *(about 5 words)*

**Why**
The 30-service count shows contribution scale, not how much the dispatch problem improved. A reader still cannot tell whether the change eliminated a few delayed jobs or a recurring backlog affecting a substantial share of morning dispatch.

**How to change it**
Add [backlog reduction or morning-dispatch delay eliminated, compared with before] after the existing outcome.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “Accelerating delivery and improving outcomes for downstream teams” states generic benefits without identifying what changed. *(saves about 5 words)*
2. [Important] The bullet contains no figure or comparison for its delivery or downstream-team claims. *(about 7 words)*
3. [Important] “Drove adoption of AI-first engineering practices” does not identify the practices or the work used to drive adoption. *(about 2 words)*

**Why**
1. A hiring reader cannot tell whether delivery became faster, releases became more frequent, or downstream teams adopted a specific capability. The impact remains a general assertion rather than an observable result.
2. Without a baseline, delta, adoption count, or other checkable anchor, the reader cannot judge the size or credibility of the claimed result. The leadership claim therefore contributes little evidence beyond the title “Owner.”
3. The phrase could describe anything from tooling and workflow changes to training, so it gives a technical reader little basis for follow-up or assessment. The lack of a defined practice makes ownership difficult to evaluate.

**How to change it**
1. Replace the broad benefit language with the specific change, such as [reduced delivery time from X to Y], [increased release frequency from X to Y], or [enabled X downstream teams to do Y], if accurate.
2. Add one measurable anchor tied to the outcome, such as [delivery time reduced by X% versus before], [X teams adopted the practices], or [X fewer review or rework cycles], if accurate.
3. Replace the generic phrase with the one or two concrete practices introduced, such as [automated agent testing], [prompt/version evaluation], or [multi-agent code-review workflows], only if accurate.

> Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.

**Problem**
[Important] “Working context” and “the raw conversation grew 100x” are undefined, so the reader cannot tell what was bounded or what the comparison baseline was. *(about 4 words)*

**Why**
A technical reader may not know whether working context means prompt tokens, retained state, or another resource. The 100x comparison is also unclear without stating the original and resulting conversation scale.

**How to change it**
Replace “working context” with the measured resource and clarify what grew 100x by naming [the original and resulting conversation measure].

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The concurrency and cache controls are not sufficient on their own to claim that nested-pool deadlocks and lost tool results were removed. *(about 5 words)*
2. [Important] “Under 50-way fan-out” gives test scale but not the measured change in deadlocks or lost tool results. *(about 8 words)*
3. [Important] “Under 50-way fan-out” is awkward and does not clearly say whether the system was tested at or supported up to 50 concurrent branches. *(about 1 word)*

**Why**
1. Separate pools do not by themselves prevent deadlock if parent tasks exhaust capacity while waiting for nested work; bounded nesting, admission control, cancellation, and resource-ordering rules are also required. Completion-gated writes likewise do not guarantee result durability through cancellation, disconnects, retries, or a failure between stream completion and the cache write.
2. A reader cannot tell whether the system previously failed at this load, how frequently it failed, or what evidence shows the fix worked. The count describes the test condition rather than the improvement.
3. The reader must infer whether 50-way fan-out is a test condition, a capacity limit, or a supported operating point. That ambiguity weakens the technical description of the concurrency result.

**How to change it**
1. If testing demonstrated this only under a defined workload, say that the changes eliminated the observed deadlocks and lost results in [the tested 50-way fan-out workload]; otherwise describe them as preventing premature cache writes and reducing the observed failures.
2. Add the most telling before-and-after measure, such as [deadlock rate reduced from X to 0 across Y runs] or [lost-result rate reduced from X% to 0% under 50-way fan-out], if accurate.
3. Replace it with the accurate condition, such as “in tests with 50 concurrent branches” or “up to 50 concurrent branches.”

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Important] “Integrated 8 citation and faithfulness metrics” does not state what changed because of the integration. *(about 7 words)*
2. [Polish] The destination is named, but the bullet does not show how the metric integration was implemented. *(about 5 words)*

**Why**
1. A reader can see the size of the contribution, but cannot tell whether it expanded evaluation coverage, improved consistency, enabled comparisons, or reduced manual work. The bullet therefore reports implementation volume without its effect.
2. Without one implementation detail, the contribution reads more like a count than evidence of technical ownership. A reader cannot tell whether the work involved adapters, tests, interfaces, or another integration mechanism.

**How to change it**
1. Keep the 8-metric integration as the work, then append the resulting outcome in [brackets], such as [expanded evaluation coverage by X compared with the prior module].
2. Append one verified implementation detail in [brackets], such as [built metric adapters and validation tests], if those were part of the contribution.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] “Showed the evaluator tracks” is grammatically incorrect because it needs “that,” and “showed” does not specify the validation action. *(no words)*
2. [Important] The evaluator's scores showed a Kendall correlation with the injected degradation levels; the statistic alone does not establish that it broadly “tracks” degradation. *(about 3 words)*
3. [Important] The Kendall correlation is underspecified because the bullet does not say what it was measured against. *(about 3 words)*

**Why**
1. The missing “that” makes the opening ungrammatical, while “showed” weakens the result by leaving unclear whether the candidate validated, measured, or demonstrated evaluator performance. A precise verb would make the evidence more authoritative.
2. A Kendall correlation of 0.89 supports a strong rank association between evaluator scores and the imposed degradation levels, but it does not by itself show sensitivity, validity, calibration, or causal response. The correlation could also reflect artifacts of removing citations, sources, and claims, or inflated independence if the 400+ trials reused reports or systems.
3. A reader can recognize 0.89 as meaningful evidence but cannot tell whether it compares evaluator scores with degradation severity, a ranking, or another reference. Naming the comparison makes the statistic interpretable.

**How to change it**
1. Add “that” after “showed” and replace “showed” with the accurate action, such as “validated,” “measured,” or “demonstrated,” if accurate.
2. Replace “tracks injected degradation” with a statement that the evaluator’s scores correlated with the injected degradation levels, or add controlled-perturbation and cluster-aware evidence if claiming it tracked degradation.
3. Replace that phrase with “with Kendall τ=0.89 against [the tested degradation ranking or reference],” using the comparison actually measured.

> Cut the pending-case backlog by two-thirds

**Problem**
[Important] The evaluation-framework project is broken by an unrelated triage achievement that duplicates the Mobility Systems Company entry. *(saves about 15 words)*

**Why**
The first two bullets establish a focused evaluation contribution, but the third switches to sensor triage and backlog reduction. This makes the project look copied from work experience rather than a coherent research-agent contribution.

**How to change it**
Remove the triage bullet from this project, or replace it with work that belongs to the research-agent evaluation framework.

## Set aside (3)

3 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f9ab1c5f.md.

