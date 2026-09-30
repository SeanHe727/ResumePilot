> Here is my resume: bench/planted-defects/tests-final/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, the resume’s chronology and format. The two education entries have no bullets to review, and there was no job description to compare against. The PDF parses cleanly.

The main changes to address:
- **Correct the figures:** the Agent Runtime Suite latency change from 900 ms to 600 ms is about a 33% reduction, not 50%; 71% to 83% is a 12-percentage-point increase, not 12%.
- **Move Mobility Systems Company above Eastern Robotics Co.** so Experience is in newest-first order.
- **Clarify technical claims:** the review flagged the GRPO “single rollout per prompt” description and the “single-request” workload paired with dynamic batching as potentially inconsistent. It also noted that some impact claims need clearer attribution or supporting detail.

The full report is available with `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 78 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 12 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

**Problem**
[Important] The Experience entries are not listed newest-first. *(no words)*

**Why**
Eastern Robotics is listed above the more recent Mobility Systems role. Readers may encounter the older position first rather than seeing the most recent experience immediately.

**How to change it**
Move the Mobility Systems Company entry before the Eastern Robotics Co. entry.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboards and on-call ownership are described without a result. *(about 8 words to add)*

**Why**
Readers can see what you owned, but not why that ownership mattered to the robotics product or team. Without an outcome, they cannot judge the value of the work.

**How to change it**
Keep the ownership scope and add [what improved for diagnosis or incident response] plus [one measure comparing before and after].

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The dispatch result has no measure of the backlog or dispatch delay. *(about 5 words to add)*
2. [Important] The dispatch result appears only after a long list of methods and responsibilities. *(no words)*
3. [Important] The new-hire onboarding and weekend on-call details compete with the migration and its result. *(saves about 11 words)*

**Why**
1. Readers cannot tell how much the migration changed operations. A before-and-after measure would also help distinguish a sustained improvement from a one-time result.
2. Readers reach the operational result after several details, which makes the main achievement harder to scan. The delayed result can obscure why the migration mattered.
3. These responsibilities are separate from the migration’s operational outcome. Keeping them in the same long bullet makes the central achievement less clear.

**How to change it**
1. Add one before-and-after anchor, such as [backlog frequency or size before vs. after] or [dispatch delay before vs. after].
2. Move “removed the nightly backlogs that delayed morning dispatch” closer to the opening.
3. Cut “onboarding two new hires and taking over the weekend on-call rotation” from this bullet.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The stated method does not support attributing a 40% p95 latency reduction to dynamic batching for single-request inference. *(about 5 words to add)*

**Why**
Dynamic batching can improve throughput when requests arrive concurrently, but it does not inherently reduce the latency of an isolated request and can add queueing delay. Readers cannot tell what workload produced the reported reduction, so they may question whether the method and result align.

**How to change it**
If concurrent requests were batched and a benchmark showed the reduction, specify those conditions; otherwise remove dynamic batching as the stated cause or soften the claim.

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The result is buried after a long list of methods, and “Using … reduced” lacks a clear actor and direct action. *(saves about 10 words)*
2. [Important] The line gives no comparison setup for the 5% latency reduction. *(about 5 words to add)*

**Why**
1. A scanning reader encounters several training details before learning what changed. That delays the contribution’s main result and makes the sentence harder to follow quickly.
2. Without a comparison setup, readers cannot tell what the reduction is relative to. The figure therefore gives a change but not enough context to assess it.

**How to change it**
1. Move “reduced end-to-end latency 5%” to the beginning, use a direct action verb rather than “Using … reduced,” and retain the single method detail that best shows your contribution.
2. Add [latency baseline or evaluation setup].

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] Sampling a single rollout per prompt cannot provide the within-prompt comparison GRPO uses to calculate relative advantages. *(about 2 words if accurate; otherwise saves about 8 words)*
2. [Important] “Exactly one scored trajectory” repeats the information in “sampling a single rollout per prompt.” *(saves about 8 words)*
3. [Polish] The line names training stability as an outcome without showing how stability was observed. *(about 6 words to add)*

**Why**
1. With exactly one scored trajectory for a prompt, there are no other rollouts for that prompt to compare it against. That leaves GRPO without its usual group-relative reward signal, so the stated setup cannot support the claim that it stabilized GRPO training.
2. The first phrase already tells the reader how many rollouts were sampled for each prompt. Restating that count adds no new information and makes the bullet longer.
3. Readers cannot tell what became more stable or how the sampling change demonstrated that result. Without an indicator and comparison setup, they cannot assess the outcome.

**How to change it**
1. If multiple scored rollouts per prompt were used for the GRPO update, state that instead; otherwise remove the GRPO stabilization claim or describe the actual training method.
2. Cut “so each update used exactly one scored trajectory.”
3. Add [the training-stability indicator and comparison setup], such as a relevant measure of update variability or run completion, if accurate.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The line does not establish that adopting AI-first practices accelerated delivery or improved downstream outcomes. *(about 8 words to add)*
2. [Important] The line does not say how you drove adoption of AI-first engineering practices. *(about 6 words to add)*

**Why**
1. Adoption describes a change in practice, but does not by itself show faster delivery or better outcomes. Without a concrete result and a relevant baseline, readers cannot assess the claimed impact or how much it mattered to downstream teams.
2. Readers cannot see what you personally did to drive adoption or what skill that work demonstrates. Without the mechanism, the line describes the outcome of adoption but leaves your contribution unclear.

**How to change it**
1. Add [specific delivery or downstream outcome that changed] and [comparison or measure], if available; otherwise limit the claim to driving adoption.
2. Add [the main practice or mechanism you introduced to drive adoption], if it helps show your contribution.

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The reduction from 900 ms to 600 ms is 33.3%, not 50%. *(no words)*

**Why**
The decrease is 300 ms, which is one-third of the original 900 ms. A 50% reduction would bring latency to 450 ms, so the stated percentage conflicts with the figures and may make readers question the accuracy of the result.

**How to change it**
Replace “50% reduction” with “33.3% reduction.”

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The increase from 71% to 83% is 12 percentage points, not 12%. *(about 2 words to add)*

**Why**
The difference between the stated rates is 12 percentage points; relative to the starting rate, the increase is about 16.9%. Readers may interpret “12%” as a relative increase, which conflicts with the figures and makes the result ambiguous.

**How to change it**
Replace “by 12%” with “by 12 percentage points” if that describes the intended change.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] The relative clause delays the result that the metrics are included in the default release benchmark. *(saves about 4 words)*

**Why**
Readers reach the adoption result only after a long clause about where the metrics run. Stating their inclusion directly makes that result easier to find.

**How to change it**
Replace “where they now run in the default benchmark for every release” with “now included in the default release benchmark.”

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The line does not identify what the evaluator’s results were correlated with. *(about 6 words to add)*
2. [Polish] The trial setup is a long tail after the main result. *(no words)*

**Why**
1. Without the comparison variable, readers cannot tell what the correlation validates or how to interpret the result. That leaves the 0.89 figure without a clear evidentiary meaning.
2. Readers encounter the details of the degradation tests after the main result, which delays the evidence they are likely scanning for. A concise test description would let the result stand out sooner.

**How to change it**
1. Replace “a Kendall correlation of 0.89” with “a Kendall correlation of 0.89 against [the reference ranking or measure of injected degradation],” if accurate.
2. Move the result after a concise description of the degradation tests.

## Already working

- s2:e1:b1: Pairs an explicit accuracy change with the held-out evaluation set.
- s2:e1:b5: Shows the documentation was used by the intended audience, not merely produced.

## Set aside (10)

10 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-629866b6.md.

