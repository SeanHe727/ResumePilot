# Full review: resume.pdf

**86/100** — format 100 · content 78 · wording 81 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The stated 50% reduction in p95 tool-call latency is arithmetically incorrect.**
   > Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.
   The reduction from 900 ms to 600 ms is 300 ms, or 33.3% of the starting value. A 50% reduction from 900 ms would produce 450 ms, so the inconsistency can make the surrounding performance claim look unreliable.
   **How to change it:** Replace "a 50% reduction" with "a 33.3% reduction."
2. **The task-completion increase is expressed as 12% when the stated values show a 12-percentage-point increase.**
   > Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.
   The change from 71% to 83% is 12 percentage points, not a 12% relative increase. If expressed relatively, the increase is approximately 16.9%; using the wrong form can make the benchmark claim appear mathematically careless.
   **How to change it:** Replace "by 12%" with "by 12 percentage points." If you intend to report relative growth instead, use approximately "16.9%" and retain the 71% and 83% figures.
3. **The claim that sampling a single rollout per prompt stabilised standard GRPO training is technically backwards.**
   > Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.
   Standard GRPO derives its advantage by comparing multiple rollouts for the same prompt. With exactly one rollout, that within-prompt relative-reward signal collapses and can increase variance; a frozen reference does not restore the missing comparison.
   **How to change it:** Use multiple rollouts per prompt for standard GRPO, or rewrite the claim to identify [the alternative baseline or single-rollout estimator that actually produced the reported stability]. Do not describe single-rollout sampling as standard GRPO stabilization unless that alternative method is named.

## Already working

- s2:e1:b1: Uses the strongest form of measurement by giving a baseline, outcome, and evaluation-set size.
- s2:e1:b2: Combines a precise performance metric with relevant deployment methods.
- s3:e1:b0: Connects the contribution to durable upstream adoption and a recurring release process.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

### The dashboard bullet states responsibility but does not show what changed because of that ownership.

> Owned the diagnostics service’s monitoring dashboards

A hiring reader cannot tell whether the dashboards improved incident detection, service reliability, response time, or another operational outcome. Without that result, the bullet proves that you were responsible for monitoring but not that your ownership made the service or on-call work better.

**How to change it:** Replace the responsibility-only wording with the most direct result of the dashboard and on-call work, such as [reduced incident-detection or response time], [increased alert coverage], or [improved service availability], if accurate. Keep the dashboard scope only if it supports the result.

*raised by content · costs about 6 words to add*

### The phrase "across two major releases" gives assignment scope but no measure of dashboard effectiveness.

> across two major releases

Release count tells the reader how long or broadly the work was assigned, not whether the monitoring process worked better. A proof point tied to the period before and after your ownership would make the operational improvement credible.

**How to change it:** Replace or supplement the release count with [the change in alert response time, incident rate, or service availability compared with before].

*raised by content · costs about 7 words to add*

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

### The claim that sampling a single rollout per prompt stabilised standard GRPO training is technically backwards.

> sampling a single rollout per prompt

Standard GRPO derives its advantage by comparing multiple rollouts for the same prompt. With exactly one rollout, that within-prompt relative-reward signal collapses and can increase variance; a frozen reference does not restore the missing comparison.

**How to change it:** Use multiple rollouts per prompt for standard GRPO, or rewrite the claim to identify [the alternative baseline or single-rollout estimator that actually produced the reported stability]. Do not describe single-rollout sampling as standard GRPO stabilization unless that alternative method is named.

*raised by content · costs no words*

### The phrase "Stabilised GRPO training" does not state what instability decreased or what measurable training result followed.

> Stabilised GRPO training

A reader cannot tell whether stabilization meant fewer failed runs, lower reward variance, faster convergence, or another observable change. The bullet currently gives the intervention but not evidence that the intervention produced the claimed effect.

**How to change it:** Replace or follow the phrase with [the observable training change and what it was measured against], such as [fewer failed runs], [lower reward variance], or [faster convergence], if accurate. Keep only the corrected rollout or estimator description as supporting method detail.

*raised by content · costs about 5 words to add*

### The 5% latency result is buried after three implementation details and is missing "by" before the percentage.

> Using grouped tool-use rollouts

A scanning reader may stop at the method list and read this as an implementation description rather than an achievement. The technical details are useful, but they should explain a visible result rather than delay it.

**How to change it:** Move "reduced end-to-end latency by 5%" to the opening of the bullet. Retain the one or two most important method details after it and cut the least important detail if needed.

*raised by content, wording · costs saves about 5 words*

### The phrase "ML-extracted features" is too broad and compressed to show the technical method behind the triage branch.

> ML-extracted features

A hiring manager can see that machine learning was involved but cannot tell what you built or selected. That leaves the contribution less credible as evidence of modeling or feature-engineering skill, despite the strong backlog result.

**How to change it:** Replace "ML-extracted features" with [the specific feature-extraction or modeling approach used], if accurate. Keep the 68% backlog result and its first-quarter comparison immediately visible.

*raised by content, wording · costs about 4 words to add*

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

### The stated 50% reduction in p95 tool-call latency is arithmetically incorrect.

> a 50% reduction

The reduction from 900 ms to 600 ms is 300 ms, or 33.3% of the starting value. A 50% reduction from 900 ms would produce 450 ms, so the inconsistency can make the surrounding performance claim look unreliable.

**How to change it:** Replace "a 50% reduction" with "a 33.3% reduction."

*raised by content, wording · costs no words*

### The task-completion increase is expressed as 12% when the stated values show a 12-percentage-point increase.

> by 12%

The change from 71% to 83% is 12 percentage points, not a 12% relative increase. If expressed relatively, the increase is approximately 16.9%; using the wrong form can make the benchmark claim appear mathematically careless.

**How to change it:** Replace "by 12%" with "by 12 percentage points." If you intend to report relative growth instead, use approximately "16.9%" and retain the 71% and 83% figures.

*raised by content, wording · costs adds about 1 word*

### The phrase "accelerating delivery and improving outcomes for downstream teams" does not identify the specific result those teams gained.

> improving outcomes for downstream teams

A reader cannot tell whether delivery became faster, more reliable, or more autonomous, or what changed for the downstream teams. The broad phrase reads as a general assessment rather than evidence of the platform initiative's effect.

**How to change it:** Replace the broad outcome phrase with [the single most important delivery or downstream-team change], and name the affected platform capability if accurate. For example, specify whether the result was [faster delivery], [more reliable releases], or [greater team autonomy] only if that is the demonstrated outcome.

*raised by content · costs about 5 words to add*

### The claims about accelerating delivery and improving outcomes have no measurement or comparison.

> accelerating delivery

Without a baseline, delta, adoption count, or other anchor, the reader cannot judge the size or credibility of the improvement. Even a concise comparison would distinguish a measured result from a broad claim about impact.

**How to change it:** Add one measure tied to the stated outcome, such as [delivery time compared with the prior process], [number or share of downstream teams adopting the practices], or [the change in release reliability], if accurate.

*raised by content · costs about 6 words to add*

### The phrase "Drove adoption of AI-first engineering practices" does not say which practices you introduced or how you drove adoption.

> AI-first engineering practices

The phrase signals platform-wide ownership but not a reconstructable technical contribution. A reader cannot see whether you introduced an AI-assisted workflow, an agent integration, an evaluation process, or developer tooling, so the ownership claim does not demonstrate the underlying skill.

**How to change it:** Replace the broad phrase with [the specific AI-assisted workflow, agent integration, evaluation process, or developer tooling] that you introduced. If adoption was part of the result, add [how many or what share of teams adopted it], if accurate.

*raised by content · costs about 6 words to add*

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

### The phrase "Upstreamed 8 citation and faithfulness metrics" does not show what you technically did to implement or integrate them.

> Upstreamed 8 citation and faithfulness metrics

The adoption result demonstrates contribution, but a technical reader cannot tell whether you designed, implemented, validated, or integrated the metrics. One concrete implementation detail would better demonstrate your skill without weakening the durable upstream-adoption result.

**How to change it:** Keep the fact that the metrics now run in the default benchmark, but replace or supplement "Upstreamed" with [the most telling implementation or integration detail], if accurate. Move "now run" directly after the benchmark clause to make the adoption outcome explicit.

*raised by content · costs about 5 words to add*

### The Kendall correlation of 0.89 is not tied to the reference point against which it was measured.

> tracks injected degradation

A reader cannot tell whether the correlation compares evaluator scores with the known severity or the ordering of the injected degradation. Naming that reference makes the statistic interpretable rather than merely impressive.

**How to change it:** Replace the vague comparison with [tracked the known degradation severity] or [matched the ordering of the injected degradation], whichever is accurate. Also change "Showed the evaluator tracks" to "Demonstrated that the evaluator tracked."

*raised by content, wording · costs about 4 words to add*

## Across the whole résumé

### Experience is not listed newest-first because the 2024–2025 Mobility Systems Company internship appears below the 2022–2024 Eastern Robotics Co. role.

> Eastern Robotics Co. | Junior Software Engineer

A recruiter scanning dates expects the most recent work to appear first. The current order makes the experience section harder to follow and hides the more recent ML engineering work below an older role.

**How to change it:** Move the Mobility Systems Company entry above Eastern Robotics Co. within EXPERIENCE, keeping the entries in reverse chronological order by their end dates.

*raised by file, narrative · costs no words*

### EDUCATION appears before EXPERIENCE and PROJECTS even though the résumé contains substantial technical work.

> Western State University | M.S. in Computer Engineering

Leading with the M.S. makes the candidate appear primarily academic rather than an engineer transitioning into ML systems. Putting the work first lets the recruiter see the strongest engineering evidence before the degree details.

**How to change it:** Move EXPERIENCE and PROJECTS above EDUCATION so the page opens with the current technical ownership and engineering work rather than the degree in progress.

*raised by narrative · costs no words*

## Set aside (19)

- format: Experience is not newest-first: "Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024" is listed above the more recent "Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025".
- s2:e0:b1: "added load tests to keep it there" does not state what condition or duration demonstrated that latency stayed at 180 ms.
- s2:e0:b2: "automated regression checks" names the mechanism but not what they tested in the perception model releases.
- s2:e0:b3: "removed the nightly backlogs that delayed morning dispatch" describes an operational result without showing how large the backlog or delay was.
- s3:e1:b2: The phrase "with layered instrumentation" names a technique without showing what kind of instrumentation exposed the defects.
- s3:e1:b0: “Where they now run” uses an ambiguous pronoun and slightly weakens the direct connection between the metrics and the benchmark; use “now run” after the benchmark clause instead.
- s3:e1:b1: “Showed the evaluator tracks” is grammatically awkward and can read as a missing “that”; correct it to “Demonstrated that the evaluator tracked.”
- s3:e1:b2: “Defects in stability, sourcing and parameter handling” makes stability sound like a defect category rather than a pipeline area; use “defects affecting stability, sourcing and parameter handling.”
- s3:e1:b2: “With layered instrumentation” is specialized process language that interrupts the result; move it after the module-tracing clause or omit it if space is tight.
- s2:e0:b0: "Owned" frames the work as a duty, while "the on-call rotation that used them" makes the relationship between the rotation and dashboards awkward and unclear.
- s2:e0:b1: "Keep it there" uses a vague pronoun and does not specify whether the load tests prevented latency from rising.
- s2:e0:b2: "Maintained" frames the opening as pipeline ownership rather than leading with the concrete improvement made to the release process.
- s2:e0:b3: The migration, logging rewrite, onboarding, and on-call work are packed into one sentence, so the reader cannot quickly identify the primary achievement.
- s2:e0:b3: "Which removed the nightly backlogs" appears to refer to the entire preceding chain rather than clearly identifying which change produced the result.
- s2:e1:b1: "assistant-only loss masking" is specialized terminology whose function is not apparent from the wording.
- s2:e1:b4: "by sampling a single rollout per prompt, so each update used exactly one scored trajectory" repeats the same fact and makes the causal explanation unnecessarily long.
- s2:e1:b5: "who adopted them as the team’s runbook" makes the antecedent of "them" slightly unclear because it could refer to either the rules or the rules and paths together.
- whole resume, order: Move the Mobility Systems Company internship above Eastern Robotics Co. within EXPERIENCE so the entries are reverse chronological.
- whole resume, order: Move EXPERIENCE and PROJECTS above EDUCATION. The page now has substantial technical work, and leading with the M.S. makes the candidate appear primarily academic rather than an engineer transitioning into ML systems.
