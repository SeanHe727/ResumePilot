> Here is my resume: bench/planted-defects/tests-final/b5-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries, the résumé’s overall narrative, and its formatting. No job description was provided, so this isn’t a role-specific match review.

The main changes to make:
- **Resolve repeated claims:** The internship bullets repeat the assistant-only loss-masking work, and the internship and Research-Agent project both claim the sensor-triage backlog reduction. Clarify whether these are the same achievements; if so, present each once and use one consistent figure.
- **Verify and define metrics:** Add the diagnostic-accuracy baseline and measure. The reviewers also flagged the 4× GPU-memory reduction and the p95 latency change from 420 ms to 180 ms as not established by the explanations given; clarify what supports those figures. For the three-day release cycle, state what duration it replaced.
- **Make project claims more specific:** The “AI-first engineering practices” bullet doesn’t say what you did or what changed. The evaluation-framework bullet lists metrics but no resulting change.
- **Clarify the timeline if relevant:** The dates leave about 10 months between the B.S. and the first listed job with no activity shown.

The PDF parses cleanly and has no layout warnings. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 81 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 11 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.
> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Error] The résumé repeats the triage-backlog result in two projects and gives different reductions for what appears to be the same achievement. *(saves about 14 words if the duplicate is removed; otherwise about 8 words added)*

**Why**
The Mobility Systems bullet reports 68%, while the framework bullet reports two-thirds, which is about 66.7%. The framework entry also gives the result a different project attribution, leaving readers unsure whether this is one achievement or two and which figure is correct.

**How to change it**
Confirm [whether these are the same achievement] and [the measured reduction]; if they are the same, present the result once with one consistent figure, and otherwise clarify the project connection.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The accuracy claim gives a 35% change without identifying its baseline or measure. *(about 5 words added)*

**Why**
Without a comparison point or definition of accuracy, a reader cannot tell what the 35% represents. That makes the result difficult to assess or compare.

**How to change it**
After “35%,” add [the baseline and accuracy measure], if available.

> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.

**Problem**
[Important] The tool-call and latency results come after the training method, making the outcomes harder to scan. *(no words)*

**Why**
The reader reaches the method before the reductions in tool calls and latency. Moving the results forward would make the impact visible sooner without changing the claim.

**How to change it**
Move “cutting tool calls per case 18% and end-to-end latency 5%” to the start of the bullet; leave the method and equal-accuracy comparison after it.

> assistant-only loss masking

**Problem**
[Error] The two Mobility Systems bullets appear to describe the same adapter fine-tuning work as separate achievements. *(saves about 13 words if merged; otherwise about 6 words added)*

**Why**
Both bullets mention assistant-only loss masking, and the second adds no distinct result beyond the accuracy improvement in the first. Readers may see them as duplicated credit rather than two separate contributions.

**How to change it**
Merge the bullets if they describe the same work; if they describe separate efforts, clarify [how the fine-tuning efforts differed].

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
1. [Error] Switching values from FP32 to BF16 halves their storage, so it does not by itself explain a 4x reduction in total GPU memory. *(about 4 words added, or more if the additional changes are named)*
2. [Polish] The phrase “for fine-tuning the perception models” is wordier than needed to identify the memory-reduction context. *(saves about 2 words)*

**Why**
1. FP32 values use 4 bytes and BF16 values use 2, so the change halves memory for the values stored in BF16. Fine-tuning also uses gradients and optimizer state, some of which may remain FP32, so the total reduction depends on what the memory measure includes.
2. The phrase takes several words to supply context for the GPU-memory claim. A shorter reference would leave more room for the result.

**How to change it**
1. Replace the 4x claim with the halving of memory for values stored in BF16; if total GPU memory fell 4x, name [the additional changes] and [the memory measure that fell].
2. Replace it with “in perception-model fine-tuning.”

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
1. [Important] The 420 ms-to-180 ms p95 claim is not established by a test that only gates the build at 200 ms. *(about 5 words added if measurements are available; otherwise about 5 words saved)*
2. [Polish] The trailing load-test detail is longer than needed to state the 200 ms p95 build gate. *(saves about 5 words)*

**Why**
1. That gate can show a tested run stayed under 200 ms, but it does not establish either an exact 180 ms p95 or a comparable 420 ms baseline. It also does not isolate the effects of caching and batching, so readers may question how the improvement was measured.
2. The current wording explains the same threshold in a full clause after the latency result. A shorter description would preserve the check while making the bullet quicker to scan.

**How to change it**
1. If comparable before-and-after measurements support the claim, add [how they were compared]; otherwise replace the exact reduction with the 200 ms p95 build-gated threshold.
2. Replace that clause with “with a 200 ms p95 build gate.”

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet switches from past to present tense: “Maintained” is followed by “adds.” *(no words)*
2. [Important] The three-day release-cycle result lacks the previous cycle duration needed to judge the size of the change. *(about 4 words added)*
3. [Polish] The release-cycle result comes after the methods, making the outcome harder to find. *(no words)*
4. [Polish] “Maintained the CI pipeline” describes an ongoing responsibility rather than a specific action. *(about 2 words added)*

**Why**
1. The role ended in July 2024, so the present-tense verb can make this work sound ongoing. The tense shift also makes the sentence read as if it combines actions from different time periods.
2. Three days tells the reader the resulting duration but not how much shorter it is. Without the earlier duration, the scale of the improvement is unclear.
3. A scanning reader may see the pipeline and regression checks before the result. Leading with the three-day cycle duration would make the outcome easier to notice.
4. The opening does not show what you did to the pipeline. The following regression-check detail offers a specific action that can carry the bullet instead.

**How to change it**
1. Change “adds” to “added” to keep the completed role in past tense.
2. Keep “3 days” and add [the previous cycle duration] as the comparison, if accurate.
3. Move “shortened release cycles to 3 days” to the start of the bullet, ahead of the CI-pipeline and regression-check details.
4. Replace the responsibility-led opening with a specific past-tense action, such as “Added automated regression checks,” if accurate, and keep the pipeline context.

> Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The result of removing nightly backlogs gives no measure of the backlog or the dispatch delay. *(about 7 words added)*
2. [Polish] The nightly-backlog sentence adds an explanation of the dispatch impact after the outcome is already clear. *(saves about 5 words)*

**Why**
1. The reader can see that dispatch improved, but not the scale of the problem addressed. One before-and-after measure would make the operational impact easier to judge.
2. “Removing the nightly backlogs” already states the result. The trailing clause adds length without measuring the backlog or delay.

**How to change it**
1. If available, add [backlog volume or dispatch delay before and after]; keep the existing outcome if no defensible figure is available.
2. Cut “that delayed morning dispatch.”

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
1. [Important] The bullet gives the fan-out condition but does not show how the removal of failures was verified. *(about 7 words added)*
2. [Important] The result comes after both implementation details, making the impact harder to scan. *(no words)*

**Why**
1. The 50-way condition tells readers what load was involved, but not whether the fix was tested or how reliably it prevented deadlocks and lost tool results. Without evidence of verification, the result is harder to judge.
2. Readers encounter the concurrency-pool and cache-write details before learning that the changes removed deadlocks and lost tool results. Leading with the result would make the payoff clearer.

**How to change it**
1. Add [the regression-test result or observed failure change under 50-way fan-out], if available.
2. Move “removing nested-pool deadlocks and lost tool results” to the start of the bullet, ahead of the implementation details.

> accelerating delivery and improving outcomes

**Problem**
[Important] The claimed AI-practices impact is generic and does not show a specific contribution. *(saves about 13 words if cut; otherwise about 6 words added)*

**Why**
“Accelerating delivery” and “improving outcomes” do not say what changed, while the bullet also does not specify what you did to drive adoption. Readers may therefore discount the impact claim, and it distracts from the entry’s concrete runtime work.

**How to change it**
Cut the generic claim or replace it with [the specific adoption action and resulting change], if you can substantiate them.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
[Important] The integration bullet gives the number of metrics but no resulting change or evidence of use. *(about 7 words added)*

**Why**
The eight metrics establish the scope of the contribution, not whether they improved evaluation or were used. Readers cannot judge the value of the integration from the count alone.

**How to change it**
Keep the integration detail and add [the clearest evaluation result or evidence of use], with a baseline if available.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The 0.89 Kendall correlation does not identify the two quantities being correlated. *(about 5 words added)*
2. [Important] The correlation result comes after the trial details, making the outcome harder to spot. *(no words)*

**Why**
1. Without the comparison, readers cannot tell what the correlation demonstrates or how to interpret the result. Naming both quantities would let them assess what the evaluation validates.
2. A scanning reader reaches the trial conditions before the 0.89 result. Leading with the correlation would make the key outcome visible sooner.

**How to change it**
1. Replace that phrase with “Kendall correlation of 0.89 between [the evaluator measure and its reference],” if accurate.
2. Move “Kendall correlation of 0.89” to the start of the bullet, ahead of the trial details.

> Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.

**Problem**
[Error] The backlog result is attributed to this evaluation-framework project even though the same triage work is attributed to the Mobility Systems internship. *(saves about 14 words if removed; otherwise about 8 words added)*

**Why**
The framework entry describes research-agent evaluation, while the repeated result describes industrial sensor triage. The résumé does not establish that the triage work belonged to the framework, so the attribution may mislead readers about where the work was done.

**How to change it**
If this was internship work, remove the result from this entry; otherwise clarify [how the triage branch belonged to the research-agent evaluation project].

## Already working

- s2:e0:b1: Shows a concrete system-design contribution and a quantified result.
- s2:e0:b3: States what the harness evaluated and how it helped the team.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9ebae1a5.md.

