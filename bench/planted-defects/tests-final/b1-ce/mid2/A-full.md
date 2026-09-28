# Full review: resume.pdf

**85/100** — format 100 · content 78 · wording 79 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] The Experience entries are not in newest-first order. *(no words)*

**Why**
The 2024–2025 internship appears below the 2022–2024 role. Readers scanning the work history may miss the more recent experience.

**How to change it**
Reverse the Experience entries so Mobility Systems Company appears before Eastern Robotics Co.

*raised by file, narrative*

> Western State University | M.S. in Computer Engineering

**Problem**
[Important] Education appears before the candidate’s substantial, directly relevant work experience. *(no words)*

**Why**
Readers encounter the degree information before the work that most directly demonstrates relevant experience. That delays the evidence the review identifies as most valuable to lead with.

**How to change it**
Move the Experience section above Education.

*raised by narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
1. [Important] The dashboards and on-call work have no stated outcome. *(about 8 words to add)*
2. [Polish] “Owned” describes responsibility rather than naming an action, and “that used them” leaves the relationship between the dashboards and rotation vague. *(about 2 words)*

**Why**
1. A reader can see what you owned, but not why it mattered or what changed because of it. The two-release scope does not show the effect of the work.
2. Readers may not know what you actually did with the dashboards or how they related to the rotation. That makes your contribution harder to distinguish from general ownership.

**How to change it**
1. Replace “Owned” with the specific dashboard or on-call action [you took], and add [the most telling outcome and how it was measured].
2. Replace “Owned” with [the specific action you took] and replace “that used them” with a direct description of how the rotation used the dashboards.

*raised by content, wording*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The load-test detail makes the latency result and its methods dense. *(saves about 5 words)*

**Why**
The reader has to process the test setup after the result and the methods that achieved it. The threshold matters, but the longer explanation slows the scan.

**How to change it**
Replace that phrase with “with build-failing load tests at 200 ms.”

*raised by wording*

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Problem**
[Polish] The opening emphasizes maintaining the pipeline instead of the change that produced the result. *(no words)*

**Why**
A reader sees upkeep before the specific contribution. That makes the automated checks—and their connection to shorter release cycles—less prominent.

**How to change it**
Lead with “Added automated regression checks to the CI pipeline,” as suggested, then retain the release-cycle result.

*raised by wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The bullet combines four activities, making its main accomplishment difficult to scan. *(saves about 10 words)*
2. [Important] The nightly-backlog outcome has no measure of the backlog or dispatch delay. *(about 6 words to add)*
3. [Important] The migration accomplishment is not the first line in the entry. *(no words)*
4. [Polish] The dispatch outcome is buried after the migration and its other details. *(no words)*

**Why**
1. The migration, logging rewrite, onboarding, and on-call work compete for attention in one bullet. Readers may have trouble identifying which contribution to remember.
2. Readers can understand the operational benefit, but cannot gauge its scale from the wording. A before-and-after comparison would make the claim easier to assess.
3. A reader encounters other work before the migration of 30 services and its dispatch outcome. The entry therefore delays one of its strongest accomplishments.
4. Readers reach the operational benefit only after several methods and responsibilities. Moving the outcome next to the migration result makes the impact easier to spot.

**How to change it**
1. Trim or split the logging, onboarding, and on-call details so the migration remains the main accomplishment.
2. Add [the backlog or dispatch-delay measure before and after the migration], if you have a defensible comparison.
3. Move this bullet above the opening diagnostics bullet.
4. Move “removing nightly backlogs that delayed morning dispatch” directly after the migration result.

*raised by wording, content, narrative*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The latency reduction is ambiguous and buried after three methods. *(about 1 word to add)*

**Why**
A scanning reader may miss the result, and “5%” does not clearly say whether latency fell by 5% or to 5%. The methods arrive before the outcome they explain.

**How to change it**
Move the result to the start and, if accurate, change it to “reduced end-to-end latency by 5%.”

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] The single-rollout claim is inconsistent with standard GRPO’s group-relative update. *(about 2 words)*
2. [Important] The claimed training stability has no observable result or comparison. *(about 6 words to add)*
3. [Polish] The final clause repeats that the update used one trajectory. *(saves about 8 words)*

**Why**
1. GRPO uses relative rewards among multiple rollouts for a prompt to estimate advantages. One scored trajectory provides no within-group comparison, so this sampling choice removes that signal rather than establishing a general way to stabilize sparse-reward training.
2. The line describes the process but does not show what “stabilised” means. Readers cannot assess the claimed benefit without a result compared with the prior setup.
3. Sampling one rollout per prompt already conveys that each update used one scored trajectory. The extra clause adds no new information.

**How to change it**
1. If training used standard GRPO, state the actual number of rollouts per prompt that supplied the group comparison. If it used one rollout per prompt, name the different update method, if applicable, or remove the GRPO stabilization claim.
2. Replace the general stability claim with [an observable training-stability result and its comparison with the prior setup], if available.
3. Cut the final clause.

*raised by content, wording*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The adoption clause is wordier than needed. *(saves about 3 words)*

**Why**
The reader can understand that the reviewers adopted the documented rules as the runbook without the longer relative clause. The extra wording slows a straightforward adoption result.

**How to change it**
Shorten the clause to “adopted as the team’s runbook.”

*raised by wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The claim about downstream outcomes does not identify what changed or provide a measure. *(about 10 words to add)*
2. [Important] The broad AI-first adoption claim does not say which practices were introduced. *(about 2 words)*

**Why**
1. Readers cannot tell what value the adoption created or which outcome improved. With no measure or comparison, they also have no anchor for judging the claimed acceleration or improvement.
2. Without a concrete practice, readers cannot see the engineering work behind the claim. Its broad scope also makes it less clearly connected to the runtime’s specific results.

**How to change it**
1. Replace the phrase with [the specific delivery or downstream outcome that changed] and [one measure compared with the period or baseline before adoption], if available.
2. Replace the broad phrase with [one specific AI-first practice you introduced or scaled], if accurate.

*raised by content, wording, narrative*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
1. [Error] The p95 latency change from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*
2. [Important] The latency accomplishment is not the first line in the entry. *(no words)*

**Why**
1. The decrease is 300 ms out of the original 900 ms, which is one-third. The stated percentage contradicts the line’s own figures.
2. The reader sees the broad adoption claim before the concrete latency result. That delays one of the entry’s clearest outcomes.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. Move this bullet above the AI-first adoption bullet.

*raised by content, wording, narrative*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The change from 71% to 83% is 12 percentage points, not 12%. *(about 1 word to add)*
2. [Polish] The benchmark suite is not identified. *(about 4 words to add)*

**Why**
1. A 12% relative increase from 71% would be about 79.5%; the stated endpoints show a relative increase of about 16.9%. The current wording misstates the relationship between the figures.
2. The before-and-after rates are useful, but readers have limited context for the tasks they represent. Naming the benchmark or evaluation set would make the result easier to interpret.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points.”
2. Replace the phrase with [the benchmark name or a brief description of the evaluation set], if appropriate to share.

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
1. [Important] The metrics’ development or validation is not described. *(about 6 words to add)*
2. [Polish] The adoption outcome is delayed after “where they now.” *(no words)*

**Why**
1. Readers can see the contribution and its adoption, but not the technical work that demonstrates evaluation skill. One concise design or validation detail would make that work more evident.
2. A scanning reader may miss that the metrics run in every release’s default benchmark. That makes the contribution’s adoption less prominent than it is.

**How to change it**
1. Add [one concise detail about how you developed or validated one metric].
2. Move the default-benchmark adoption outcome directly after “metrics,” before the other detail.

*raised by content, wording*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify the two quantities being compared. *(about 7 words to add)*
2. [Polish] The key correlation result appears after the evaluator, trials, and degradation details. *(no words)*

**Why**
1. Without knowing what the evaluator’s results were compared with, readers cannot interpret what the figure demonstrates. The correlation alone does not explain what the evaluator tracks.
2. Readers encounter several setup details before the main result. That ordering makes the 0.89 correlation harder to scan.

**How to change it**
1. Clarify the comparison after “Kendall correlation,” such as [evaluator scores compared with known degradation severity or ordering], if accurate.
2. Move the correlation result to the start of the bullet, ahead of the evaluator and trial details.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Polish] “Layered instrumentation” is vague and uses project-specific jargon. *(about 2 words)*
2. [Polish] “Each was fixed upstream” is passive and does not say who fixed the defects. *(about 2 words to add)*

**Why**
1. Readers cannot tell what the instrumentation involved, so they cannot assess the diagnostic work. The jargon may also slow readers unfamiliar with the project.
2. Readers can see that the defects were fixed, but not who acted on the findings. The passive wording obscures the handoff or your role in it.

**How to change it**
1. Replace “layered instrumentation” with [the most telling instrumentation or tracing technique you used], if accurate.
2. Use an active construction naming [who fixed the defects], if you know and can state it accurately.

*raised by content, wording*

## Already working

- s2:e1:b0: Connects a defined system contribution to a clear reduction in pending cases.
- s2:e1:b1: Gives a before-and-after result on a stated held-out sample.
- s2:e1:b2: Quantifies the performance gain and identifies the inference context.
