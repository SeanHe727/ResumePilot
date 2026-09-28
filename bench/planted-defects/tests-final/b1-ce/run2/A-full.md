# Full review: resume.pdf

**84/100** — format 100 · content 76 · wording 79 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not listed in reverse chronological order. *(no words)*

**Why**
The Eastern Robotics role dated Aug 2022–Jul 2024 appears above the more recent Mobility Systems role dated Oct 2024–May 2025. Readers therefore encounter older experience before newer experience.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. in Experience.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboard responsibility does not state what improved or changed because of the work. *(about 8 words)*

**Why**
Readers can see what you were responsible for, but not why that responsibility mattered. An operational outcome, measured against a baseline if available, would make the contribution more credible.

**How to change it**
Add [the specific operational outcome] and, if available, [a measure compared with the prior state], such as a change in time to detect or resolve incidents.

*raised by content*

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The latency result comes after the cache and batching details instead of leading the bullet. *(no words)*

**Why**
A scanning reader encounters the implementation before the performance change it produced. That delays the clearest evidence of the work’s impact.

**How to change it**
Move the latency result to the beginning, followed by the cache and batching methods and the load-test detail.

*raised by wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog result is attributed to two changes without showing which one contributed to it or establishing that the changes eliminated the backlog. *(about 5 words)*
2. [Important] The backlog result is unmeasured, so readers cannot judge its scale. *(about 6 words)*
3. [Important] The nightly-backlog result appears only after a long list of methods and responsibilities. *(no words)*

**Why**
1. An event queue can buffer and smooth work, but it does not inherently clear a backlog; that depends on processing capacity and queue behavior. The logging rewrite also does not itself guarantee backlog removal, and “which removed” leaves the cause unclear.
2. The result matters because the backlogs delayed morning dispatch, but the résumé gives no before-and-after measure. Without one, readers cannot tell how much the backlog or dispatch delay changed.
3. The result is the clearest operational outcome in the bullet, but readers reach it only after the migration, logging rewrite, onboarding, and on-call details. Its placement makes the main achievement harder to scan.

**How to change it**
1. If post-migration monitoring confirmed the backlogs stopped, state that measured outcome and clarify which change contributed; otherwise remove the backlog claim. Trim or separate the logging rewrite, onboarding, and on-call details so the main achievement is clear.
2. Add [a measure of backlog or dispatch delay compared with the prior state], if available.
3. Move the backlog result near the beginning of the bullet; moving it costs no words.

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The stated reward does not establish that the setup reduced end-to-end latency by 5%. *(about 7 words)*
2. [Important] The 5% latency reduction has no stated comparison point. *(about 6 words)*

**Why**
1. The reward targets accuracy, citation validity, and call count, not elapsed time. Fewer calls might reduce latency, but they do not guarantee a 5% end-to-end reduction.
2. A reader cannot tell what the latency reduction is relative to, so the result is difficult to interpret. The long methods-first opening also makes the result easier to miss.

**How to change it**
1. If latency was measured in a before-and-after evaluation, state that evaluation; otherwise describe the measured change in call count or remove the latency claim.
2. Move the result to the beginning and add [compared with X configuration or baseline].

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One scored trajectory per prompt cannot provide standard GRPO’s within-prompt relative-advantage comparison. *(about 5 words)*
2. [Important] The claim of stabilizing GRPO training is not supported by the single-rollout setup detail. *(about 8 words)*

**Why**
1. GRPO relies on comparing multiple rollouts for a prompt to calculate relative advantages. With exactly one scored trajectory, that comparison is unavailable, so the stated setup cannot provide the claimed GRPO training signal.
2. The bullet says training was stabilized, but then gives a setup detail rather than evidence of what improved. Readers cannot tell what instability was addressed or whether training improved in a meaningful way.

**How to change it**
1. If training used GRPO, specify the multiple rollouts per prompt used for each update; otherwise name the training method actually used.
2. Replace or follow this phrase with [the observed change in training stability, compared with the prior setup]; keep the single-rollout detail only if it helps explain that result.

*raised by content*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The decrease from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction. *(no words)*

**Why**
The latency fell by 300 ms, which is 300/900 = 33.3% of the starting value. A 50% reduction from 900 ms would be 450 ms.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction.”

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(1 word)*

**Why**
The absolute difference is 83% − 71% = 12 percentage points. Relative to the starting rate, the increase is about 16.9%.

**How to change it**
Replace “by 12%” with “by 12 percentage points.”

*raised by content, wording*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The reported correlation alone does not establish that the evaluator tracks injected degradation. *(about 8 words)*
2. [Important] The 0.89 correlation does not identify the two quantities being compared. *(about 6 words)*
3. [Important] The trial context and list of removed elements come before the result. *(no words)*

**Why**
1. Kendall correlation shows rank association, but without a controlled validation design it does not show that the evaluator responds specifically to citation, source, and claim removals. Other differences among reports or trials could account for the correlation.
2. Without knowing what the evaluator’s scores were correlated with, a reader cannot interpret what 0.89 demonstrates. Naming the comparison would make the validation result assessable.
3. Readers encounter the setup before the Kendall correlation, delaying the main result. Leading with the correlation makes the finding easier to scan.

**How to change it**
1. If the trials controlled degradation levels and showed the expected evaluator response, describe that design; otherwise limit the claim to the observed Kendall correlation.
2. Name what the correlation compares, such as [what evaluator scores were correlated against], while keeping the trial count and degradation description.
3. Move the Kendall correlation to the beginning and follow it with the trial count and degradation context.

*raised by content, wording*

## Already working

- s2:e1:b0: Connects the triage system to a concrete reduction in pending cases.
- s2:e1:b1: Pairs a clear accuracy improvement with a held-out evaluation set.

## Set aside (15)

- s3:e1:b0: “8 citation and faithfulness metrics” names the metric areas but not what any metric evaluates.
- s3:e1:b2: “with layered instrumentation” names the approach without showing what instrumentation or diagnostic signal it involved.
- s3:e0:b0: “accelerating delivery and improving outcomes for downstream teams” does not specify the outcome or how much delivery changed. (and 1 more like it)
- s3:e0:b0: “AI-first engineering practices” does not name a specific practice.
- s3:e1:b0: “where they now run in the default benchmark for every release” is wordier than needed to state that the metrics are included in the release benchmark.
- s3:e1:b2: “Each was fixed upstream” uses passive voice and does not say who fixed the defects.
- s3:e1:b2: “Layered instrumentation” is specialized phrasing that may be unclear to readers outside the team.
- s2:e1:b4: “by sampling a single rollout per prompt” and “each update used exactly one scored trajectory” convey nearly the same point; keep the more useful phrasing and remove the repetition.
- s2:e1:b5: “who adopted them as the team’s runbook” is wordier than necessary; state directly that the on-call reviewers adopted the documented rules and paths as the runbook.
- s2:e0:b0: “Owned” frames the work as a responsibility and does not say what you did with the dashboards or on-call rotation.
- s2:e0:b0: “the on-call rotation that used them” is an awkward description of how the rotation related to the dashboards.
- s2:e0:b2: “Maintained the CI pipeline” opens with duty framing, while the concrete improvement is the shortened release cycle; lead with that result.
- s2:e0:b3: The logging rewrite, onboarding, and weekend on-call rotation are bundled with the migration in one line; separate or trim details so the main achievement scans clearly.
- s2:e0: The bullets share a robotics software and operations setting, but dashboards, API performance, model releases, and fleet services read as several separate workstreams.
- s3:e0: The measured runtime improvements form a clear project core, while the adoption statement broadens the entry beyond those specific outcomes.
