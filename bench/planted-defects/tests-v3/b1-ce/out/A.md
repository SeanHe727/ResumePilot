> Here is my resume: bench/planted-defects/tests-v3/b1-ce/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 bullet-bearing entries for content and wording, plus the full resume’s narrative and format. Education entries were not applicable for bullet review, and no job-description match was run.

The main changes to make are:

1. **Reorder Experience**
   - Move Mobility Systems Company above Eastern Robotics Co. so experience is reverse chronological.

2. **Fix unsupported or unclear impact claims**
   - Add a concrete result to the diagnostics-dashboard/on-call bullet.
   - Clarify the scale or measurable result of removing nightly dispatch backlogs.
   - Explain the workflow affected by the 5% latency reduction.
   - Add evidence for the Agent Runtime Suite’s “accelerating delivery” and “improving outcomes” claims.

3. **Correct technical and numerical claims**
   - The change from 900 ms to 600 ms is a **33.3% reduction**, not 50%.
   - The change from 71% to 83% is **12 percentage points**, not a 12% increase.
   - Recheck the statement that GRPO used exactly one scored trajectory per prompt; the content review flagged it as potentially incompatible with standard GRPO.
   - Clarify what the Kendall correlation of 0.89 was correlated with and avoid implying causation without evidence.

Additional wording changes include replacing duty-focused openings such as “Owned” and “Maintained” with the specific engineering actions, reducing jargon in the evaluation-framework bullets, and moving results closer to the actions that produced them.

The resume is one page, parses cleanly for ATS systems, and has consistent formatting. The complete report is available at `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 79 · wording 84 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 13 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not listed in reverse chronological order. *(no words)*

**Why**
Eastern Robotics Co. is shown above Mobility Systems Company even though the latter role ended more recently. A reader scanning the experience section may misread the sequence of the candidate's most recent work or miss the newer machine-learning role's prominence.

**How to change it**
Move the Mobility Systems Company entry above Eastern Robotics Co. within EXPERIENCE.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] "Owned the diagnostics service’s monitoring dashboards" states responsibility without showing what changed as a result. *(about 5 words)*

**Why**
A reader can see that the candidate was accountable for the dashboards and on-call rotation, but cannot tell whether the work improved incident detection, diagnosis, reliability, or response. The bullet therefore presents scope without demonstrating impact.

**How to change it**
Replace the duty framing with a specific action such as "Built and maintained," if accurate, and add [the most important outcome], such as reduced diagnosis time or alert volume.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Error] "robot-fleet services" should be written as "robot fleet services" unless "robot-fleet" is an established internal term. *(no words)*
2. [Important] "Removed the nightly backlogs that delayed morning dispatch" does not show how large or measurable the improvement was. *(about 5 words)*
3. [Polish] The result "removed the nightly backlogs that delayed morning dispatch" is buried after several separate responsibilities. *(no words)*
4. [Polish] The phrase beginning "while rewriting the shared logging library" overloads one sentence with unrelated work. *(saves about 10 words)*

**Why**
1. The hyphen makes the phrase look like an unstandardized compound rather than a recognized internal term. That small wording issue can distract from the scale of the migration.
2. The count of 30 services establishes infrastructure scope, but not the size of the dispatch improvement. Without a before-and-after operational measure, the outcome is difficult to verify and may sound absolute.
3. The migration and its operational effect are the primary story, but rewriting the logging library, onboarding hires, and taking on-call duties interrupt it. A scanning reader may miss the result before reaching the end of the bullet.
4. The logging rewrite, onboarding, and weekend on-call rotation compete with the migration for attention. This makes the primary infrastructure change harder to follow and weakens the bullet's emphasis.

**How to change it**
1. Replace "robot-fleet services" with "robot fleet services" unless the hyphenated form is an established internal term.
2. Keep "30 robot fleet services" for scope and replace or supplement the result with [the number or duration of backlogs before and after the migration], if available.
3. Move the backlog result immediately after the migration outcome.
4. Split the secondary responsibilities into separate bullets or remove them so the migration and dispatch result remain the focus.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The wording "cutting the pending-case backlog 68%" assigns the entire eight-week reduction to the triage branch without establishing that other factors did not contribute. *(about 2 words)*

**Why**
Backlog can change because of incoming workload, staffing, reviewer adoption, or other process changes. An uncontrolled before-and-after period supports an association rather than the stated causal reduction, which can make the result look overstated.

**How to change it**
If the effect was not isolated with a controlled comparison, replace the causal wording with an association between the branch and the 68% reduction; otherwise add [the comparison or control evidence].

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Error] The phrase "reduced end-to-end latency 5%" does not identify what end-to-end workflow or request path became faster, and it is grammatically incorrect. *(about 2 words)*

**Why**
A hiring reader cannot tell where the improvement occurred or why it mattered to the product. The outcome is also buried after a long method list, while a percentage change requires "by."

**How to change it**
Move the outcome to the opening, insert "by" after "latency," and replace the generic end-to-end description with [the workflow or request path] if accurate; retain only the most important method details afterward.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] The claim that each update used exactly one scored trajectory is incompatible with standard grouped GRPO. *(about 2 words)*
2. [Important] The line says "Stabilised GRPO training on sparse rewards" but gives no measure of stability or comparison with the prior setup. *(about 5 words)*

**Why**
1. Standard GRPO needs multiple scored trajectories for the same prompt to compute a within-group relative advantage. With one trajectory, the group variance is zero, so the normalized advantage is undefined or effectively zero and provides no standard group-relative learning signal.
2. A reader cannot tell whether stability meant fewer failed updates, lower variance, faster convergence, or another observable change. The method is reproducible, but its value is not demonstrated, so the claim may read as an unsupported training-process assertion.

**How to change it**
1. For standard GRPO, replace the claim with multiple scored trajectories per prompt. If exactly one trajectory was used, remove the GRPO claim or name the alternative baseline or advantage method actually used.
2. Add [the single most telling stability measure compared with the previous training setup] after "stabilised"; if no defensible measure exists, describe the concrete training behavior that changed instead.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] The claim that AI-first practices accelerated delivery and improved downstream outcomes is unsupported as written. *(about 5 words)*
2. [Important] "Accelerating delivery" and "improving outcomes for downstream teams" provide no supporting measurement or concrete consequence. *(about 4 words)*
3. [Important] "AI-first engineering practices" is too broad to show what was actually implemented or changed. *(about 3 words)*

**Why**
1. Adopting a practice does not by itself establish faster delivery or better outcomes. Without a measurable comparison, a reader may see this as a broad impact claim rather than evidence of what changed for downstream teams.
2. The reader cannot distinguish these phrases from a general responsibility statement because no affected teams, introduced practices, baseline, or delta is given. The bullet therefore consumes space without showing the value of the work.
3. The phrase signals an approach but does not reveal the technical or operational work behind the adoption effort. A hiring reader cannot assess the candidate's contribution from the label alone.

**How to change it**
1. Add [measured delivery improvement and downstream outcome] with [a baseline or comparison], or remove the impact claim.
2. Replace the vague result with [the teams affected, practices introduced, or measurable change in delivery performance].
3. Replace or qualify the phrase with [one concrete AI-enabled workflow, tool, or engineering practice], if accurate.

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] Calling the change from 900 ms to 600 ms "a 50% reduction" is mathematically incorrect. *(no words)*

**Why**
The decrease is 300 ms from a 900 ms baseline, which is 33.3%. A 50% reduction from 900 ms would produce 450 ms, so the error directly undermines confidence in the resume's quantitative claims.

**How to change it**
Replace "a 50% reduction" with "a 33.3% reduction."

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
1. [Error] The phrase "raised the runtime’s task-completion rate by 12%" misstates the change from 71% to 83%. *(about 1 word)*
2. [Important] Retrying failed sub-agent calls with partial context does not, by itself, establish that it caused the increase in task-completion rate. *(about 3 words)*

**Why**
1. The metric rose by 12 percentage points, or approximately 16.9% relative to the 71% baseline. Calling it simply a 12% increase makes the reported improvement technically inaccurate.
2. Other runtime changes could have contributed to the move from 71% to 83%, and the line gives no controlled comparison or ablation isolating retries. The causal wording therefore overstates what the described method demonstrates.

**How to change it**
1. Replace "by 12%" with "by 12 percentage points"; alternatively use approximately 16.9% if a relative increase is intended.
2. If controlled before-and-after or ablation evidence exists, add that comparison; otherwise replace the causal link with wording that says the rate rose after adding retries, or remove the causal link.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
1. [Important] The line says "Upstreamed 8 citation and faithfulness metrics" but gives no technical detail about the contribution beyond moving them into the framework. *(about 6 words)*
2. [Polish] "Where they now run" has an unclear antecedent. *(about 2 words)*

**Why**
1. The reader can see the size and adoption of the contribution but cannot tell what implementation or validation work made it substantive. One concrete detail would make the LLM-evaluation skill more credible.
2. The reader must infer that "they" refers to the eight metrics rather than another subject in the sentence. The ambiguity weakens an otherwise useful adoption result.

**How to change it**
1. After "metrics," add [the single integration, implementation, or validation detail that best proves the technical contribution], while retaining the adoption result.
2. Replace "where they now run" with "now included in the default benchmark for every release."

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The claim that the evaluator "tracks injected degradation" overstates what a Kendall correlation of 0.89 establishes. *(about 4 words)*
2. [Important] The phrase "a Kendall correlation of 0.89" does not say what the evaluator score was correlated with. *(about 4 words)*

**Why**
1. A strong rank correlation shows association, but it does not by itself show that the evaluator responds to the injected defects rather than correlated changes such as report length, task effects, or other artifacts. Because the trials removed citations, sources, and claims together, the current wording claims more validation than the result supports.
2. A reader cannot tell whether the statistic measures agreement with degradation severity, the ordering of trial conditions, or another reference. Naming the comparison makes the result interpretable rather than merely impressive-looking.

**How to change it**
1. Report the association more narrowly by naming the evaluator scores and the introduced changes; if controlled severity levels, clean or sham controls, repeated runs, and held-out-task validation were performed, name those before making the stronger tracking claim.
2. Replace or expand the statistic with [what the evaluator score was compared against], such as degradation severity or the known ordering of conditions, if accurate.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Important] "With layered instrumentation" does not identify what was instrumented or how the instrumentation traced defects to their modules. *(about 4 words)*

**Why**
A hiring reader can see that debugging occurred but cannot distinguish systematic root-cause analysis from routine issue reporting. The jargon therefore does little to demonstrate technical skill.

**How to change it**
Replace the phrase with [the one specific tracing or instrumentation detail that shows how module ownership was isolated], or remove it.

## Already working

- s2:e0:b1: Uses a strong from-and-to performance comparison.
- s2:e1:b1: Uses an explicit baseline and endpoint rather than an unsupported improvement claim.
- s2:e1:b2: Clearly distinguishes tail latency through the p95 metric.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0af131ac.md.

