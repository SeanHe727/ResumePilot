# Full review: resume.pdf

**87/100** — format 100 · content 81 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Aug 2022 - Jul 2024

**Problem**
[Important] Experience is not in reverse chronological order. *(no words)*

**Why**
Eastern Robotics Co. from Aug 2022–Jul 2024 appears above Mobility Systems Company from Oct 2024–May 2025. The current order makes the career appear to move backward and forces the reader to reconstruct the timeline.

**How to change it**
Move [s2:e1] Mobility Systems Company above [s2:e0] Eastern Robotics Co. so Experience is newest-first.

*raised by file, narrative*

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboards and on-call work are described as responsibilities without a measurable operational result, and the opening wording is ambiguous. *(about 5 words to add, plus the candidate's measure)*

**Why**
The line shows ownership across two releases but does not show whether monitoring improved incident detection, response time, coverage, or availability. "The on-call rotation that used them" can also make the rotation sound like the object of the ownership, so the reader may miss what you actually changed.

**How to change it**
Lead with the dashboard action rather than "Owned," separate the on-call responsibility, and add [a measured detection, response, availability, incident, or coverage result] after the dashboard work.

*raised by content, wording*

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
[Important] The claim that the combined changes removed nightly backlogs is causally ambiguous and has no before-and-after measure. *(saves about 4 words if the extra responsibilities are cut, plus the candidate's measure)*

**Why**
The long list combines the event-queue migration, logging rewrite, onboarding, and on-call work, so "which removed" has no clear referent and does not establish which change affected dispatch. Without the number or frequency of backlogs before and after, a reader cannot judge the size or consistency of the operational improvement.

**How to change it**
Move the dispatch result immediately after the change that produced it, cut or separate the onboarding and weekend on-call details, and add [the backlog or dispatch-delay measure before and after]. If no direct measure supports causation, remove the outcome or soften it to "helping eliminate nightly backlogs that delayed morning dispatch."

*raised by content, wording*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The 68% backlog reduction is presented as caused by the triage branch without isolating that intervention. *(about 3 words to add, plus the candidate's mechanism)*

**Why**
The eight-week before-and-after result establishes temporal association, but backlog can also change because of incoming volume, staffing, process changes, or other releases. A reader may therefore discount the attribution unless the line identifies a controlled comparison or more cautiously reports what followed launch.

**How to change it**
If a controlled comparison supports causation, retain the claim and state the baseline; otherwise replace "cutting" with wording that says the branch was followed by a 68% reduction over eight weeks. Replace "with ML-extracted features" with [the model or triage mechanism used to route or prioritise cases], if accurate.

*raised by content*

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The increase from 71% to 79% is reported as caused by fine-tuning without a baseline or ablation that isolates the intervention. *(saves about 4 words if the causal phrase is cut)*

**Why**
The arithmetic is correct as an 8-percentage-point increase, but held-out-case results alone do not show that the domain-adapter fine-tuning produced it. A technically careful reader may ask what comparator or evaluation conditions support the attribution.

**How to change it**
Say accuracy increased from 71% to 79% on 1,200 held-out cases; retain the fine-tuning causal wording only if a controlled comparison or ablation showed that it produced the improvement.

*raised by content*

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] The claimed 40% reduction is ambiguous because dynamic batching does not inherently reduce isolated single-request latency. *(about 4 words to add, plus the candidate's latency figures)*

**Why**
Batching can improve per-request latency under sufficient concurrent traffic, but queueing usually hurts a truly isolated request. Without the before-and-after latency values and workload, the reader cannot tell whether this was per-request latency under concurrency or genuinely single-request inference.

**How to change it**
Specify that the 40% reduction was measured per request under concurrent traffic against an unbatched baseline, and add [baseline and post-optimization p95 latency] if available. If requests were truly isolated, remove dynamic batching as the explanation or soften the claim.

*raised by content*

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The 5% latency reduction is buried after method details and is not tied to a defined measured path or baseline. *(about 5 words to add, plus the candidate's baseline and workflow)*

**Why**
The reward, rollout, and reference-model details do not by themselves establish a deployed end-to-end latency improvement, because latency is not part of the stated reward and training does not directly change serving latency. Without the workflow, baseline, workload, and unchanged quality conditions, the reader cannot tell what the 5% compares or whether the training caused it.

**How to change it**
Move the latency result to the beginning, specify [the measured end-to-end workflow] and its baseline, and retain the causal claim only if a controlled deployed evaluation established it. Otherwise describe the GRPO setup as optimising tool-use behaviour and remove or soften the latency result.

*raised by content, wording*

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
[Error] The single-rollout claim conflicts with standard grouped-relative GRPO, so "stabilised GRPO training" is not supported as written. *(saves about 7 words if the restatement is cut)*

**Why**
With one rollout per prompt, there are no same-prompt alternatives from which to compute the usual relative advantage; the group variance is zero or undefined. A one-rollout update could work only with a different baseline or modified objective, which the bullet does not identify, so a technical reader may reject the training description.

**How to change it**
If standard GRPO was used, describe multiple rollouts per prompt. Otherwise name the nonstandard baseline or modified objective and remove the claim that single-rollout sampling itself stabilised GRPO; also cut "so each update used exactly one scored trajectory."

*raised by content, wording*

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Important] The runbook adoption is stated without indicating how broadly or how long the reviewers used it. *(about 4 words to add, plus the candidate's scope or duration)*

**Why**
The adoption shows that the documentation mattered, but the reader cannot distinguish team-wide operational use from a limited one-time reference. A small scope or duration measure would make the result more credible.

**How to change it**
Replace the relative clause with a direct adoption result and add [the number or role range of reviewers using the runbook] or [the period over which it remained the team's runbook], if available.

*raised by content, wording*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] "AI-first engineering practices" is vague, and the claims of faster delivery and better downstream outcomes have no measured evidence. *(about 6 words to add, plus the candidate's metric)*

**Why**
The reader cannot tell which practices you introduced, how widely they were adopted, or what specifically changed for downstream teams. Without a baseline, delta, or defined outcome, the bullet reads as a broad responsibility claim rather than demonstrated impact.

**How to change it**
Replace the broad label with [one or two specific AI engineering practices you introduced], and replace "accelerating delivery and improving outcomes for downstream teams" with [a measured delivery or downstream result and its comparison]. If no defensible measure exists, state the adoption activity alone.

*raised by content, wording*

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] "a 50% reduction" is arithmetically incorrect: reducing latency from 900 ms to 600 ms is a 33.3% reduction. *(no words)*

**Why**
The decrease is 300 ms, which is 300/900 = 33.3% of the original latency. A reader who checks the arithmetic may doubt the accuracy of the rest of the performance claims, even though the latency improvement itself is substantial.

**How to change it**
Replace "a 50% reduction" with "a 33.3% reduction" or remove the percentage.

*raised by content, wording*

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] "by 12%" misstates the change from 71% to 83%; it is a 12-percentage-point increase. *(saves about 4 words if one expression is removed)*

**Why**
The absolute change is 83% − 71% = 12 percentage points, while the relative increase would be about 16.9%. Using the wrong unit can make a technically careful reader question whether the benchmark result has been reported precisely.

**How to change it**
Replace "by 12%" with "by 12 percentage points." If space is needed, remove either that phrase or "from 71% to 83%" because they express the same change.

*raised by content, wording*

> Drove adoption

**Problem**
[Important] The concrete runtime-performance work should lead the entry; the broad adoption statement interrupts that story. *(no words)*

**Why**
The latency and task-completion bullets immediately show technical outcomes, while the opening statement gives a general claim before explaining what changed. Leading with the vague claim delays the evidence a recruiter is most likely to notice.

**How to change it**
Move the adoption bullet below the latency and task-completion bullets, or cut it if it cannot be made specific and measurable.

*raised by narrative*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The eight upstreamed metrics are not accompanied by an implementation or integration detail. *(about 5 words to add, plus the candidate's detail)*

**Why**
The result shows reach and contribution scope, but a reader cannot tell whether you implemented scoring logic, added tests, or only submitted existing metrics. One technical detail would make your personal contribution easier to assess.

**How to change it**
Keep the upstreaming result and add [the scoring logic, test coverage, or benchmark integration you implemented], if accurate.

*raised by content*

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Error] The Kendall correlation does not by itself show that the evaluator tracks genuine injected degradation, and the line does not state what the result enabled. *(about 5 words to add, plus the candidate's enabled use)*
2. [Error] The evaluator result is overstated and grammatically unclear about what the trials removed. *(about 3 words to add)*

**Why**
1. A Kendall correlation of 0.89 establishes ordinal association with the tested removal conditions, not necessarily sensitivity to validated quality degradation. Without controls, ground-truth labels, or uncertainty, and without an enabled evaluation use, the claim overstates both the evidence and its practical consequence.
2. A Kendall correlation of 0.89 shows ordinal association with the tested conditions, not by itself that the evaluator measured genuine degradation. The phrase "that removed" also leaves unclear whether the trials or the evaluator removed the citations, sources, and claims, which weakens the interpretation of the experiment.

**How to change it**
1. Replace the claim with a measured association between evaluator scores and the tested citation, source, and claim-removal conditions across 400+ trials unless controlled validation supports the stronger wording. Add [the enabled benchmark, regression-detection, or degradation-sensitivity use], if accurate, and make clear that the trials removed those items.
2. Replace "Showed the evaluator tracks injected degradation" with a statement that the evaluator scores correlated with the tested citation, source, and claim-removal conditions, making the trials—not the evaluator—the subject that removed those items.

*raised by content, wording*

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
1. [Important] The line reports three defects and upstream fixes but does not show their post-fix effect, while "structural pipeline defects" and "layered instrumentation" obscure the diagnostic contribution. *(about 5 words to add, plus the candidate's confirmation)*
2. [Important] The three defects and their upstream fixes are not linked to a measured post-fix improvement, and the diagnostic wording is unclear. *(about 5 words to add, plus the candidate's confirmation)*

**Why**
1. The defect count shows discovery scope, not whether stability, sourcing, or parameter handling improved. A reader also cannot see what the instrumentation actually did, and unexplained passive wording makes the actor and outcome less clear.
2. The count establishes how many issues you found, but not whether stability, sourcing, or parameter handling improved after resolution. "Layered instrumentation" does not reveal the method, while "fixed upstream" leaves the actor and outcome in unexplained project jargon.

**How to change it**
1. Replace "structural pipeline defects in stability, sourcing and parameter handling" with [the specific pipeline failures], and replace "with layered instrumentation" with [the most revealing tracing technique]. Replace "each was fixed upstream" with a direct statement of who fixed the modules and add [the strongest post-fix test, benchmark, or reproduced-failure result], if available.
2. Name [the specific tracing technique] and replace the awkward defect categories with [the concrete pipeline failures]. Replace "each was fixed upstream" with a direct result and add [the strongest post-fix test, benchmark, or reproduced-failure confirmation], if available.

*raised by content, wording*

## Already working

- s2:e0:b1: Uses a strong from-to performance comparison: 420 ms to 180 ms.

## Set aside (2)

- s2:e0:b2: "Maintained the CI pipeline" leads with an ongoing duty instead of the more distinctive action of adding automated regression checks.
- s3:e0:b1: "reusing completed sub-agent answers" is slightly awkward and may obscure the action; use "reusing completed sub-agent results" if that is what was cached.
