# Full review: resume.pdf

**87/100** — format 100 · content 82 · wording 82 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 8 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] The Experience entries are not in newest-first order. *(no words)*

**Why**
The May 2023–July 2024 role appears above the October 2024–May 2025 role. Readers expect the more recent experience first, so the current order makes the chronology harder to scan.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry.

*raised by file, narrative*

> Sep 2018 - Jun 2022

**Problem**
[Polish] The dates leave a 10-month period between graduation and the first listed role unexplained. *(about 4 words to add)*

**Why**
The résumé shows graduation in June 2022 and the next listed role starting in May 2023. A reader may wonder what you were doing during those months, leaving a gap in the timeline.

**How to change it**
If there was relevant study or work during this period, add [the activity and dates]; otherwise clarify the dates if the timeline is incomplete.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The latency result is followed by a long methods-and-safeguard explanation that makes the bullet harder to scan. *(no words)*

**Why**
A reader sees the result first, then has to work through the cache, batching, and build-failure safeguard. That can make the rest of the sentence scan like a list rather than a concise account of how you achieved the improvement.

**How to change it**
Keep the latency result and core methods together, and move the load-test safeguard to the end of the bullet or cut it if it is not essential.

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Error] The bullet uses inconsistent tense and leads with a general duty rather than the specific automated-checks action. *(no words)*
2. [Important] The release-cycle result gives the new duration but not the prior duration. *(about 4 words to add)*

**Why**
1. “Maintained” is past tense, but “adds” switches to present tense even though this role has ended. Opening with the general pipeline duty also delays the more specific action that shortened release cycles.
2. Readers cannot tell how much faster releases became from “3 days” alone. Without the starting point, the scale of the improvement is hard to judge.

**How to change it**
1. Lead with the automated regression checks and change “adds” to “added”; keep “Maintained the CI pipeline” only if the duty is worth retaining.
2. Add the prior duration as a comparison: “from [prior release-cycle duration] to 3 days,” if accurate.

*raised by wording, content*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The dispatch result is buried after several contributions, and the bullet crowds those contributions together. *(saves about 11 words)*

**Why**
The outcome appears after the migration, library rewrite, onboarding, and on-call details, making it easy to miss and harder to connect to the service migration. The additional duties also compete with the migration for attention.

**How to change it**
Move the outcome directly after the cron-to-event-queue migration. Keep the most relevant supporting detail and cut or relocate “onboarding two new hires and taking over the weekend on-call rotation.”

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The opening “Using” phrase leaves the subject of “reduced” unclear, and the latency result does not identify the measured workflow. *(no words)*

**Why**
A reader has to reach the end of several method details to find the result, without knowing who or what reduced latency. The unspecified end-to-end path also makes it hard to interpret the 5% reduction or compare it with the single-request inference result.

**How to change it**
Lead with the reduction and replace “end-to-end” with [the measured request path or workflow], if accurate; place the methods after the result.

*raised by wording, content*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One rollout per prompt does not provide the within-prompt reward comparison used by standard GRPO. *(no words)*
2. [Important] The line describes a sampling procedure but gives no observed result showing that training became more stable. *(about 5 words to add)*
3. [Polish] The final clause repeats the single-rollout detail without adding a result. *(saves about 8 words)*

**Why**
1. With one scored trajectory, group-relative centering yields no useful reward-based advantage signal, so this sampling choice cannot stabilize sparse-reward training through the standard GRPO update. It also conflicts with the grouped rollouts in the preceding bullet if both describe the same training run.
2. The procedure says what changed, not whether training improved. Without a measured outcome, readers cannot judge whether the claimed stabilization occurred.
3. Readers have already been told that the method samples one rollout per prompt. The closing explanation uses space without showing an additional effect or outcome.

**How to change it**
1. If you used standard GRPO, state the actual number of scored rollouts per prompt. If you used one rollout per prompt, name the different baseline or advantage estimator; otherwise remove the claim that this stabilized GRPO.
2. Add [the stability outcome and how it changed versus the prior approach], if measured; otherwise avoid presenting the procedure as proof of stabilization.
3. Cut the final clause.

*raised by content, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The broad adoption claim is vague and disconnected from the two specific runtime results in the entry. *(saves about 17 words if cut)*
2. [Important] The line gives no evidence for the claimed delivery and downstream improvements. *(about 6 words to add)*

**Why**
1. Readers cannot tell which practices you introduced or what specifically changed for downstream teams. Because the entry’s measured results are concrete but this opening claim is not tied to them, the claim’s value is hard to picture and assess.
2. A reader cannot judge the scale or substance of the benefit from the claim alone. Without an anchor, such as a before-and-after measure or a checkable adoption outcome, the claimed impact is difficult to verify.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice you introduced], if accurate, and connect the claim to a measured result below only if that relationship is accurate; otherwise cut the broad claim.
2. Add [one substantiated measure of the outcome, compared with a baseline or stated scope], if available; otherwise remove the unsupported benefit claim.

*raised by content, wording, narrative*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
1. [Error] The stated reduction is 33.3%, not 50%. *(no words)*
2. [Polish] The percentage phrase repeats the change already shown by the before-and-after values. *(saves about 3 words)*

**Why**
1. The latency falls by 300 ms from an original 900 ms, which is a 33.3% reduction. A 50% reduction would bring latency to 450 ms, so the stated percentage conflicts with the before-and-after values.
2. The values 900 ms and 600 ms already show the size of the change. Repeating it adds words without giving the reader new information.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. After correcting the percentage if you retain it, remove the percentage phrase because the before-and-after values already state the change.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The increase is 12 percentage points, not 12%. *(about 2 words to add)*
2. [Important] The task-completion result is a stronger opening than the current broad adoption claim. *(no words)*
3. [Polish] The increase phrase repeats the change already evident from the benchmark values. *(saves about 2 words)*

**Why**
1. The rates rise from 71% to 83%, a difference of 12 percentage points. Relative to the original 71%, the increase is about 16.9%, so “12%” misstates the comparison.
2. The benchmark result is the entry’s clearest quantified outcome and connects directly to the runtime. Leading with the broad adoption claim instead delays the specific result most likely to catch a reader’s attention.
3. The change from 71% to 83% is visible in the figures themselves. The extra phrase is redundant once the values are stated.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points.”
2. Move this bullet before the broad adoption claim, if that claim remains.
3. Remove “by 12%” and retain the before-and-after values.

*raised by content, wording, narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Polish] The line names the metrics but not the distinctive approach used to develop or validate them. *(about 5 words to add)*

**Why**
Readers can see what you contributed and where it is used, but not what evaluation or technical skill the contribution required. One specific approach would make the work easier to assess.

**How to change it**
After “metrics,” add [the key scoring or validation approach used to develop them], if accurate.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Polish] The correlation result does not identify the two variables being correlated. *(about 5 words to add)*

**Why**
Without knowing what the evaluator’s scores were compared against, a reader cannot interpret what the correlation demonstrates. Naming the comparison would make the result easier to assess.

**How to change it**
Specify what was correlated, such as evaluator scores against [the measure of injected degradation used], if accurate.

*raised by content*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] “Layered instrumentation” is specialized and does not show what diagnostic technique enabled the tracing. *(no words)*

**Why**
A reader outside the team may not understand the phrase, and it does little to show how you located the defects. One concrete diagnostic detail would make the method more informative.

**How to change it**
Replace “layered instrumentation” with [the specific instrumentation or diagnostic signal you used], if accurate.

*raised by content, wording*

## Already working

- s2:e1:b0: Connects a shipped system change to a clear operational outcome.
- s2:e1:b1: Pairs an accuracy change with a named held-out evaluation set and sample size.
- s2:e1:b2: Identifies the latency percentile and edge-inference context.
