# case-1

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024
- Owned the diagnostics service’s monitoring dashboards across two major releases and the on-
call rotation that used them.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, with load tests that fail the build if p95 exceeds 200 ms.
- Maintained the CI pipeline for the perception team’s model releases, adding automated
regression checks that shortened release cycles from 2 weeks to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared
logging library, onboarding two new hires and taking over the weekend on-call rotation,
which removed the nightly backlogs that delayed morning dispatch.
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Built a diagnostics triage branch for an industrial inspection system that screens 800+
sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in
the eight weeks after launch.
- Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain
adapter on validated tool-use trajectories with assistant-only loss masking.
- Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with
dynamic batching.
- Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and
call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.
- Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each
update used exactly one scored trajectory.
- Documented the triage branch’s abstention rules and escalation paths for the on-call
reviewers, who adopted them as the team’s runbook.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery
and improving outcomes for downstream teams.
- Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results
and reusing completed sub-agent answers.
- Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by
retrying failed sub-agent calls with their partial context.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework,
where they now run in the default benchmark for every release.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across
400+ report-level trials that removed citations, sources and claims.
- Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their
modules with layered instrumentation; each was fixed upstream.
SKILLS
Programming: Python, TypeScript, Git
ML & Agents: PyTorch, LoRA, GRPO, agent evaluation, Kubernetes
```

## Reviewer 1

4 errors, 10 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Western State University

**Problem**
[Important] Move the experience entries before the education entries so relevant work history leads the résumé.

**Why**
The education entries currently appear before the work history. As a result, readers encounter the degrees before the candidate’s relevant professional experience.

**How to change it**
Move the experience entries above the education entries.

> Aug 2022 - Jul 2024

**Problem**
[Important] Within experience, the older Eastern Robotics role appears before the more recent Mobility Systems role.

**Why**
The Eastern Robotics role ends in July 2024, while the Mobility Systems internship runs from October 2024 to May 2025. Listing the older role first breaks newest-first chronology and makes the experience sequence harder to scan.

**How to change it**
Move the Mobility Systems Company entry above the Eastern Robotics Co. entry.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboards and on-call responsibility are described without saying what changed or what you did.

**Why**
A reader can see the scope of responsibility, but not the result or your specific contribution to the dashboards or rotation. The two-release count shows scale, not why the work mattered, so the technical value is difficult to assess.

**How to change it**
Replace “Owned” and the generic dashboard and rotation phrasing with the specific dashboard capability or on-call work you performed. Add [the clearest result, measured against the prior process] if available.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Polish] The lengthy load-test clause weakens the scan-friendly latency result.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog outcome is buried after secondary activities, and the sentence does not clearly identify what removed the backlogs.
2. [Polish] The backlog outcome lacks a measure of its magnitude.

**Why**
1. The migration of 30 services is the central change, but the logging rewrite, onboarding, and on-call work come before the outcome. After that long list, “which” could refer to several actions, leaving the cause of the improvement unclear.

**How to change it**
1. Move the migration and backlog result ahead of the secondary activities, and replace “which” with a direct link between the migration and the result if accurate. Keep the secondary activities after the outcome.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Polish] “ML-extracted features” does not identify the feature-extraction or triage approach.

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Error] The 40% single-request p95 latency reduction is incorrectly attributed to dynamic batching.

**Why**
Dynamic batching primarily improves throughput under concurrent load; an isolated request does not provide that concurrent workload, and waiting to form a batch can add latency. INT8 may reduce computation time, but the line does not separate its effect from batching.

**How to change it**
If the measurement used concurrent requests, specify that workload. Otherwise, report the measured INT8 effect separately and remove dynamic batching as the explanation for the single-request latency reduction.

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The 5% end-to-end latency result lacks a statistic and comparison setup, and its opening phrase has no subject.

**Why**
Without knowing what end-to-end latency covers or what configuration it was compared with, a reader cannot interpret the 5% change. The opening “Using” phrase also leaves unclear who performed the work, while the long list of methods pushes the result out of view.

**How to change it**
Put the 5% result first, replace “Using” with a subject and action, and add [the latency statistic and comparison setup] if accurate.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] A single rollout per prompt cannot provide the within-group relative advantage required for standard GRPO learning.
2. [Important] The claim that GRPO training stabilized has no evidence of the stability change.
3. [Polish] The final clause repeats the single-rollout detail.

**Why**
1. Standard GRPO compares rewards within a prompt’s rollout group, and one scored trajectory provides no such comparison. The stated method therefore does not support the claim that it stabilized standard GRPO on sparse rewards.
2. The line describes the procedure but does not show whether training became more stable or how that was assessed. A reader cannot distinguish a measured improvement from a method description.

**How to change it**
1. Use multiple scored rollouts per prompt, or name the different baseline or learning signal actually used. If neither applies, remove the claim that single-rollout sampling stabilized GRPO.
2. Keep the method only if accurate and add [the clearest training-stability measure, compared with the prior setup].

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Problem**
[Polish] The reviewers’ adoption of the guidance should lead the bullet.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] “AI-first engineering practices” does not identify a practice, and the claimed benefits do not say what changed.

**Why**
A reader cannot tell what practice was adopted or what delivery or downstream outcome followed. Those broad claims are hard to assess, leaving the value of the work unclear.

**How to change it**
Replace the practice phrase with [one specific practice introduced] and replace the benefits phrase with [a specific delivery or downstream outcome, measured against a baseline or comparison], if accurate.

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
1. [Error] The 50% reduction is incorrect: the change from 900 ms to 600 ms is a 33.3% reduction.
2. [Important] The latency result should lead the entry’s technical results.

**Why**
1. The reduction is 300 ms from a 900 ms baseline, which is 33.3%. A 50% reduction would bring p95 latency to 450 ms, so the current percentage conflicts with the stated endpoints.
2. The latency and task-completion results establish the runtime project, while this line opens with a broad adoption claim. Leading with the concrete latency result would make the strongest technical impact easier to find.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction,” or verify and report the correct endpoint if the reduction was 50%.
2. Move this result ahead of the AI-first adoption claim.

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase.

**Why**
The absolute change is 12 percentage points. Relative to the 71% baseline, the increase is about 16.9%, so “by 12%” does not match the stated figures.

**How to change it**
Say “raised the task-completion rate by 12 percentage points, from 71% to 83%,” or “raised it by 16.9% relative to baseline.”

> Drove adoption of AI-first engineering practices

**Problem**
[Polish] The adoption claim reads as a separate broad outcome rather than part of the runtime’s technical results.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] The line does not show how the eight metrics were implemented or validated.

**Why**
The fact that the metrics run in the default benchmark for every release establishes adoption, but not what technical work made them yours. One implementation or validation detail would make your contribution easier to assess.

**How to change it**
Add [one concise, distinctive implementation or validation detail].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation does not identify the two variables being compared.

**Why**
Without knowing what the evaluator’s results were compared with, a reader cannot interpret what the 0.89 demonstrates. “Injected degradation” is also abstract, so the deliberate change may not be immediately clear.

**How to change it**
Name what the evaluator’s scores or rankings were correlated with, such as [injected degradation severity] if accurate, and replace “injected degradation” with a plain description of what was deliberately worsened.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] “Layered instrumentation” does not identify the diagnostic method and may be opaque outside the team.

## What already works

- “Maintained the CI pipeline for the…”: Clearly connects a specific engineering change to a quantified improvement in release cadence.
- “Raised diagnostic accuracy on 1,200 held-out…”: Reports a clear accuracy change on a named held-out evaluation set.

## Reviewer 2

Your strongest material is the quantified engineering work. The main fixes are **chronology, a couple of metric inconsistencies, and bullets that are either vague or overloaded**. I’ll refer to each line rather than rewrite it.

## Header and education

- **Contact line:** Check that the code link goes directly to a polished, relevant portfolio or code profile. Add a professional profile link only if it strengthens your application; avoid links that are inactive or sparse.
- **M.S. line:** Keep the expected graduation date, and make sure the date format is consistent with the rest of the resume. If you have relevant coursework or a strong GPA, consider including it; otherwise, the line is sufficient.
- **B.S. line:** Consider adding GPA only if it is a selling point, especially for early-career roles. Otherwise, keep this concise.

## Experience

- **Section order:** Put the Mobility Systems internship before the Eastern Robotics job because it is more recent. Reverse-chronological ordering makes your current experience easier to find.
- **Eastern Robotics title and date line:** The role and dates are clear. Confirm that the title reflects your official title and that location formatting matches the internship entry.

### Eastern Robotics bullets

- **Diagnostics dashboards and on-call bullet:** Clarify what you owned: the dashboards, the rotation, or both. As written, the relationship between the dashboards and the rotation is hard to parse, and the accomplishment is not especially concrete.
- **Latency and caching bullet:** This is one of your strongest bullets. Clarify whether the before-and-after latency figures came from production or load testing, and state the measurement conditions if they matter. The build threshold is useful, but distinguish it from the achieved p95 result.
- **CI and release-cycle bullet:** Explain how the release-cycle duration was measured and how directly the regression checks caused the reduction. This helps the reader judge the size of your contribution.
- **Fleet migration bullet:** This combines migration, library work, onboarding, on-call responsibility, and backlog impact. Split or prioritize the accomplishments so the technical change and its outcome do not get buried. Also quantify the backlog improvement if you have a reliable figure.

### Mobility Systems internship bullets

- **Triage branch and backlog bullet:** Clarify what “diagnostics triage branch” means to an outside reader, and define the backlog comparison behind the 68% reduction—especially its starting point and measurement period. “ML-extracted features” may also need a little more context.
- **Accuracy bullet:** Specify whether the change from 71% to 79% is an eight-percentage-point gain, and retain the held-out evaluation detail. The methods are technically dense; make sure the key contribution and result remain understandable to a reader who does not know your training setup.
- **Edge-inference latency bullet:** Reconcile “single-request” inference with dynamic batching. Readers may wonder how batching affected the latency of a single request. State the workload and measurement conditions, and make clear whether the 40% change is latency, throughput, or another measure.
- **GRPO and end-to-end latency bullet:** This is grammatically incomplete because it starts with a method description but has no clear subject. It also overlaps with the previous latency bullet. Clarify how the two latency results differ, identify the measured baseline, and make the result—not the list of techniques—the focus. Expand specialized acronyms if your target audience may not know them.
- **Sparse-reward training bullet:** Explain what improved when training stabilized, ideally with a measurable result or a clear practical consequence. A single rollout per prompt may invite questions from technical reviewers, so state the reason for that choice and its effect accurately. Also standardize spelling: “Stabilised” is British English while the resume otherwise reads as US English.
- **Runbook bullet:** The adoption outcome is useful. Clarify your specific role in creating the rules and whether the runbook changed reviewer practice or operations in a meaningful way. If you have no further evidence of impact, keep the claim modest and precise.

## Projects

- **Agent Runtime Suite heading:** “Owner” is vague as a project role. Make your responsibility clear, and check that the dates accurately reflect when you began and whether the project is still active.
- **AI-first practices bullet:** This is currently the weakest bullet: “accelerating delivery and improving outcomes” is broad and unsupported. Replace the general claim with a specific practice and demonstrable result, or remove the bullet if you cannot substantiate it.
- **Tool-call latency bullet:** The math does not match: a change from 900 ms to 600 ms is a **33.3% reduction**, not 50%. Correct either the percentage or the figures. Also make clear how latency was measured and under what workload.
- **Task-completion bullet:** A change from 71% to 83% is a **12-percentage-point increase**, not a 12% relative increase. Label the metric accurately and include enough benchmark context for the result to be interpretable.
- **Evaluation framework contribution bullet:** Strong evidence of adoption. Clarify your authorship or contribution to the eight metrics and ensure “default benchmark for every release” is precise and still true.
- **Degradation-evaluation bullet:** Explain what the evaluator’s correlation was compared against and how the degradation trials were set up. “Tracks injected degradation” is broad; make clear what the correlation demonstrates. Confirm that the 400+ trials are counted and described consistently.
- **Pipeline-defects bullet:** “Structural pipeline defects” and “layered instrumentation” are vague to readers outside the project. Identify the nature of your contribution more clearly, and distinguish between defects you found, changes you made, and fixes made by others. Add downstream impact if you can support it.

## Skills

- **Programming line:** Git is a tool, not a programming language, so it does not fit cleanly under this heading. Separate languages from tools, and keep the list focused on skills relevant to the roles you are targeting.
- **ML & Agents line:** Kubernetes is infrastructure rather than an ML or agent technique; group it accordingly. Consider making broad entries such as “agent evaluation” more specific, and include other tools or frameworks only if you have used them enough to discuss confidently in an interview.

## Final checks

- Use consistent date, location, punctuation, and spelling conventions throughout.
- Check the final PDF for awkward line breaks, especially the split “on-call” text.
- Verify that every metric has a clear baseline, measurement context, and unit. The conflicting latency percentage is especially important to fix before sending the resume.

## Reviewer 3

## Overall assessment

The resume has strong, relevant evidence for AI systems and agent-engineering roles: measurable latency and accuracy changes, tool-use training, evaluation work, and upstream contributions. The main problems are **credibility and precision**, not lack of accomplishments. Fix the metric inconsistency, clarify the GRPO method, and make evaluation conditions and ownership easier to verify before polishing wording.

**Provisional fit: risky fit for LLM algorithm or research internships; stronger for AI systems / agent infrastructure.** There’s no target job description, so this is a general assessment. Your resume shows relevant work, but several high-impact claims invite technical follow-up that the current descriptions don’t yet answer.

## Changes to make, by section

### Experience

**Eastern Robotics — first bullet: diagnostics dashboards and on-call**
- Clarify what “owned” means: what you built, maintained, or were accountable for. The current description establishes responsibility but not your technical contribution or its impact.
- Consider adding a concrete result if you can substantiate one. Without it, this is less compelling than your other bullets.

**Second bullet: p95 API latency**
- Keep the before-and-after numbers, but be ready to explain the load-test setup: traffic level, environment, measurement period, and whether the comparison used the same conditions.
- State what the 200 ms build threshold applies to and how it relates to the reported 180 ms result. That will make the test safeguard easier to interpret.

**Third bullet: CI and regression checks**
- Clarify how the checks contributed to the release-cycle reduction. As written, the causal link is plausible but not demonstrated.
- Be prepared to define “release cycle” and how the two-week and three-day figures were measured.

**Fourth bullet: fleet migration, logging library, onboarding, and on-call**
- Split or narrow this bullet. It combines several substantial responsibilities, making your individual contribution and the reason for the backlog improvement hard to assess.
- Clarify the event-queue migration’s scope and outcome, and distinguish your work from the onboarding and on-call responsibilities.
- Explain what “removed the nightly backlogs” means operationally and how you verified it.

**Mobility Systems — first bullet: triage branch and backlog**
- Clarify whether “branch” means a code branch, product capability, or workflow. The term is ambiguous here.
- Define how the 68% backlog reduction was calculated, including the baseline and whether other process changes could have contributed.
- Specify what “after launch” means in this context. The result is much stronger if the deployment setting and your role in it are clear.

**Second bullet: diagnostic accuracy and domain-adapter tuning**
- Add enough evaluation context to defend the result: model or baseline, data split procedure, and whether the 1,200 held-out cases were independent of training and tuning.
- Be ready to explain the accuracy metric’s suitability for the task, especially if classes are imbalanced.
- Clarify what the domain adapter and assistant-only loss masking did technically. These are strong, specialized claims and likely interview targets.

**Third bullet: INT8 edge inference and dynamic batching**
- Resolve the apparent tension between “single-request” inference and dynamic batching. Explain the workload and measurement conditions so readers can understand how batching affected p95 latency.
- Identify the baseline and relevant device or deployment environment. Without those, the 40% improvement is difficult to compare or reproduce.

**Fourth bullet: grouped tool-use rollouts and GRPO**
- This bullet is a sentence fragment; make sure the final document has a complete, clear description of your contribution.
- Add the evaluation context for the 5% latency reduction and explain how the reward components were combined.
- Clarify whether reducing latency affected accuracy or citation validity. A composite reward makes that trade-off especially relevant.
- Distinguish your own implementation or experiments from the overall training setup.

**Fifth bullet: one rollout per prompt**
- Resolve a significant technical ambiguity before keeping this claim. GRPO ordinarily uses multiple sampled responses per prompt to calculate group-relative advantages; one scored trajectory per prompt appears inconsistent with that description.
- Explain what “grouped” means in the preceding bullet, how the advantage or baseline was computed, and what evidence supports calling this GRPO. If the method differs from standard GRPO, describe the distinction accurately.
- “Stabilised” also needs a measurable indication of stability, such as a defined training failure or variance measure.

**Sixth bullet: abstention rules and runbook**
- Clarify your role in defining the rules versus documenting them, and what reviewer adoption means in practice.
- If you have evidence of an operational benefit, such as more consistent escalation or fewer avoidable reviews, include it. Otherwise, retain this as a process and documentation contribution rather than implying an unmeasured outcome.

### Projects

**Agent Runtime Suite — first bullet: AI-first engineering practices**
- This is the least specific project bullet. “Accelerating delivery” and “improving outcomes” are broad claims without a metric, example, or defined scope.
- Either support the impact with evidence or remove this bullet to make room for concrete technical work. Clarify what “drove adoption” means and who adopted the practices.

**Second bullet: tool-call latency**
- Correct the arithmetic or the stated percentage: going from 900 ms to 600 ms is a **33.3% reduction**, not 50%.
- Specify the benchmark conditions and whether the result reflects the same task mix and cache behavior before and after.

**Third bullet: task-completion rate**
- Clarify whether the increase is **12 percentage points** or a 12% relative increase; the stated endpoints indicate the former.
- Describe the benchmark size and evaluation procedure, and make clear whether the change was measured across repeated runs or a single result.
- Address any latency, cost, or reliability trade-off introduced by retries with partial context.

**Research-Agent Evaluation Framework — first bullet: upstream metrics**
- This is a strong contribution. Make sure “upstreamed” and “default benchmark for every release” are verifiable through public contributions or release documentation.
- Clarify what you implemented versus what others reviewed or merged, particularly if you are applying to roles where open-source ownership matters.

**Second bullet: Kendall correlation**
- Explain what the correlation was calculated between—for example, the evaluator’s scores and an ordered degradation level—and how the 400+ trials were constructed.
- Clarify what “removed citations, sources and claims” means for the test design. The result supports a stronger claim when the degradation levels and evaluation procedure are reproducible.

**Third bullet: structural defects**
- Identify the nature of your contribution more precisely: the current description says you traced defects and they were fixed, but not how your work enabled the fixes.
- Be ready to substantiate the three fixes with issue or pull-request references and to distinguish defects you diagnosed from fixes you authored.

### Skills

- The list is short relative to the experience described. Add only tools and technologies you can discuss in depth, especially those directly relevant to the roles you’re targeting.
- Consider separating programming languages, ML/training methods, and infrastructure tools. Kubernetes currently sits among ML and agent topics, which makes the categories less clear.
- Avoid listing a method such as GRPO unless you can explain its implementation and reconcile the one-rollout claim above.
- If the linked code profile contains the relevant projects or contributions, make sure it is accessible and that the resume’s project claims match what is visible there.

### Structure and presentation

- Put the more recent Mobility Systems internship before the 2022–2024 role; the current Experience order is chronological in the wrong direction.
- Check whether the 2025 internship and project dates represent concurrent work, and be ready to explain the arrangement if asked.
- Ensure line wrapping does not split terms awkwardly, as happens with “on-call” in the pasted text.
- Consider adding relevant graduate coursework or academic work only if it helps match a target role and you can substantiate it; don’t add detail just to fill space.

## Highest-priority fixes

1. Correct the **900 ms to 600 ms** percentage and clarify the **71% to 83%** change.
2. Resolve the **GRPO / single-rollout** inconsistency and prepare a precise explanation of the training procedure.
3. Add evaluation conditions and baselines for the accuracy, latency, backlog, and benchmark claims.
4. Replace or support the vague Agent Runtime Suite adoption bullet.
5. Reorder Experience and tighten the overloaded fleet-migration bullet.

## Reviewer 4

Your strongest material is the measured engineering and evaluation work. The main fixes are **two incorrect percentage claims, a few technical claims that need checking, and bullets whose impact is hard to verify**. I’m commenting on each line without rewriting it.

### Header and education
- **Contact line:** Use a real, working code or portfolio link on the submitted version, and check that it leads directly to work you want reviewed. The current URL looks like a placeholder.
- **M.S. line:** Keep the expected graduation date, but verify that the degree name matches the university’s official wording.
- **B.S. line:** No substantive change needed. Use the same date and location formatting as the M.S. line.

### Experience
**Eastern Robotics Co.** — Move this role **below the 2024–25 internship** so experience is in reverse chronological order.

- **Dashboards/on-call:** Clarify whether you owned the dashboards, managed the rotation, or served in it. “Owned … the on-call rotation” is ambiguous; add an outcome if you have one.
- **API latency:** Strong bullet. Check that the 420 ms and 180 ms figures come from comparable tests, and keep the build-failing test detail only if it remains in place.
- **CI pipeline:** Strong bullet. Make clear whether the release-cycle improvement is measured across comparable releases and attributable to these checks.
- **Fleet migration:** Split or narrow this bullet. Migration, logging-library work, onboarding, and on-call compete for attention, making it difficult to see which work eliminated the backlog.

**Mobility Systems Company**
- **Triage branch:** Specify what the 68% backlog reduction measures and, if possible, distinguish your contribution from other launch changes.
- **Diagnostic accuracy:** State whether 71% to 79% is an **8-percentage-point** gain; it is not an 8% relative gain. Briefly clarify what “diagnostic accuracy” means for these cases.
- **Edge inference:** Verify the causal claim. Dynamic batching can increase latency for an isolated request, so distinguish the effect of INT8 from batching and define the load conditions behind the p95 comparison.
- **GRPO latency:** This is dense relative to its 5% result. Prioritize the mechanism that produced the measured end-to-end improvement, and identify the baseline.
- **GRPO stability:** Check this against the preceding bullet: one scored rollout per prompt per update appears at odds with *grouped* rollouts and group-relative optimization. Clarify the sampling scheme and give a measurable definition of “stabilised,” or remove the bullet if you cannot substantiate it.
- **Runbook:** Good evidence of operational handoff. If space is tight, this is less distinctive than your quantified work; otherwise, add evidence of use beyond adoption if available.

### Projects
**Agent Runtime Suite**
- **Adoption:** Replace or remove this bullet. It claims faster delivery and better outcomes without saying what you did or how either was measured.
- **Tool-call latency:** Correct the arithmetic: 900 ms to 600 ms is a **33% latency reduction**, not 50%. Verify that caching and answer reuse are both reflected in the measurement.
- **Task completion:** Correct the unit: 71% to 83% is **12 percentage points** (about 17% relative improvement), not a 12% relative increase. Specify the benchmark size or evaluation conditions if space permits.

**Research-Agent Evaluation Framework**
- **Eight metrics:** Strong bullet. Make sure “upstreamed” and “default benchmark for every release” accurately describe the merged code and current release process.
- **Correlation:** Identify what was correlated with injected degradation and, if relevant, whether trials are independent. That makes the 0.89 result easier to interpret.
- **Pipeline defects:** Clarify your role in the fixes. “Each was fixed upstream” does not say whether you submitted fixes or supplied diagnoses others used.

### Skills and presentation
- **Programming:** Move Git out of “Programming”; it is a tool, not a programming language.
- **ML & Agents:** Move Kubernetes to infrastructure/tooling. Keep GRPO and LoRA only if you can explain the specific implementation and results in an interview.
- **Line wrapping:** Check the final PDF for awkward breaks such as “on-” at the end of a line; formatting can make an otherwise strong bullet harder to scan.

## Reviewer 5

# Resume review

You have strong technical material: quantified performance gains, ML/agent work, and evidence of production responsibility. The main improvements are to make the resume easier to scan, clarify a few claims, and fix one metric inconsistency. I’ll focus on what to change and why, without rewriting your lines.

## Highest-priority changes

1. **Move Technical Skills near the top.** For software and ML engineering applications, recruiters and ATS systems should see your relevant skills quickly. Keep the section focused on tools you can discuss in depth.
2. **Put Experience in reverse chronological order.** The internship is more recent than the junior engineer role, so list it first.
3. **Correct the Agent Runtime latency math.** A drop from 900 ms to 600 ms is a 33% reduction, not 50%. Recheck the numbers or the stated percentage.
4. **Replace vague claims with specific scope or evidence.** The first Agent Runtime bullet is the clearest example; it describes a goal, but not what you built or how you know it improved outcomes.
5. **Tighten overloaded bullets.** The robotics migration bullet and the GRPO bullets contain several ideas at once, making the main contribution harder to identify.

## Experience

### Mobility Systems Company — Machine Learning Engineering Intern

This should appear before your earlier full-time role.

- **“Built a diagnostics triage branch…”** Clarify what “branch” means here; it could sound like a code branch rather than a product feature or system component. The 68% backlog reduction is compelling, but specify the comparison period or baseline if you can substantiate it.
- **“Raised diagnostic accuracy…”** Keep the held-out-set size and accuracy figures, but make clear that the change was an **8 percentage-point** improvement. The terminology about domain adapters, tool-use trajectories, and loss masking is useful for ML roles, but may be dense for a general SWE audience; prioritize whichever details best match the role.
- **“Cut p95 latency of single-request edge inference…”** Explain how dynamic batching applies to the “single-request” measurement, since those details may seem at odds to a reader. Include the hardware or serving context if it helps make the result interpretable.
- **“Using grouped tool-use rollouts…”** The sentence structure is difficult to follow, and the list of training details obscures the result. Clarify what changed, what was measured, and how the 5% end-to-end latency result relates to the separate inference-latency result above.
- **“Stabilised GRPO training…”** Add evidence for “stabilised,” such as a measurable change in training variance, failure rate, or consistency, if available. Otherwise, readers may not know what improved. Also use consistent US or UK spelling throughout; the rest of the resume reads more like US English.
- **“Documented the triage branch’s abstention rules…”** This demonstrates operational maturity, but the impact is currently adoption of a runbook. If there was a concrete effect on reviewer consistency, escalation time, or incident handling, include it; otherwise consider whether this is as valuable as your stronger technical bullets.

### Eastern Robotics Co. — Junior Software Engineer

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify your ownership and scope. The wording links dashboard ownership with the on-call rotation, but doesn’t make clear whether you maintained the dashboards, participated in the rotation, or were responsible for both.
- **Latency bullet:** This is one of your strongest bullets: it has a baseline, result, implementation details, and a quality guardrail. Keep it. If space allows, make sure the load-test conditions are representative enough that the 200 ms threshold has meaning.
- **CI pipeline bullet:** The two-week-to-three-day release-cycle result is strong. Clarify whether the automated regression checks were the primary cause of the shorter cycle or one part of a broader change, so the attribution is credible.
- **“Migrated 30 robot-fleet services…”** This combines migration, logging-library work, onboarding, on-call ownership, and a dispatch outcome. Separate or prioritize these contributions so the migration and its impact don’t get buried. Also clarify whether the onboarding and on-call work were part of the same initiative or separate responsibilities.

## Projects

- **Agent Runtime Suite — “Drove adoption of AI-first engineering practices…”** This is broad and difficult to verify. Replace the emphasis on “AI-first” with concrete practices, systems, or adoption evidence; explain what “improving outcomes” means.
- **Agent Runtime latency bullet:** Fix the mismatch between the stated before-and-after values and the percentage. Also specify what the latency measurement covers if “tool-call latency” could be interpreted in more than one way.
- **Task-completion bullet:** The benchmark result is useful. State enough about the benchmark or evaluation conditions for readers to understand what the 12% refers to, and ensure the retry strategy is clearly tied to the measured improvement.
- **Research-Agent Evaluation Framework — metrics bullet:** “Upstreamed 8” is a strong contribution. If you have room, identify the kinds of metrics or the significance of their inclusion in every release; the current claim describes adoption but not what the metrics assess.
- **Correlation bullet:** Include what the correlation is between—for example, which evaluator score and which measure of injected degradation—so the 0.89 result is interpretable. Keep the trial count.
- **Structural-defects bullet:** “Stability, sourcing and parameter handling” is broad. Identify the nature or consequence of the defects at a level you can support, and clarify what changed after they were fixed.

## Education and contact

- **Education placement:** Since you have substantial experience and relevant projects, put Education after Experience and Projects. Keep it earlier only if you are targeting roles where being a current graduate student is a key qualification.
- **M.S. entry:** Keep the expected graduation date. Add GPA or relevant coursework only if it strengthens your application and is relevant to the target role.
- **Contact details:** The contact section is concise. Make sure the code link goes directly to a polished GitHub profile or portfolio, rather than a generic or indirect page. Add LinkedIn if you use it professionally.

## Skills

- **Reorganize by category.** Kubernetes belongs under cloud/infrastructure rather than “ML & Agents.” Separate languages, frameworks/libraries, ML/agent methods, and infrastructure/tools so recruiters can scan them.
- **Add technologies demonstrated in your experience only if you can confidently discuss them.** The resume mentions several technical methods and systems, while the skills section lists only a few items. A more complete, accurate skills inventory can improve ATS matching.
- **Avoid putting methods and tools in the same category.** For instance, distinguish programming languages and frameworks from techniques such as LoRA or GRPO.

## Formatting and consistency

- The line breaks split words such as “on-call” across lines. Remove manual line breaks within bullets and let the document wrap naturally; this prevents awkward rendering in ATS systems and PDFs.
- Keep verb tense consistent: past roles and completed projects should use past tense; ongoing work should use present tense.
- Standardize spelling (for example, “Stabilised” versus US spelling) and punctuation across all bullets.
- Keep the resume tailored to a target: for an ML/agent role, foreground the internship and evaluation work; for a general SWE role, emphasize service ownership, latency, CI, and fleet migration.

## Reviewer 6

## Overall assessment

This is a strong software/ML engineering resume: it has concrete systems work, measurable outcomes, and evidence of both implementation and operational impact. The most important fixes are to **correct a numerical inconsistency, clarify a few technically dense or ambiguous claims, and give each bullet a clearer focus**.

I’m inferring a target such as **ML engineering or agent-systems engineering**; there’s no job description to assess against. I’ve followed your request not to rewrite your lines or provide sample rewrites.

## Highest-priority changes

1. **Fix the Agent Runtime Suite latency math.** A reduction from 900 ms to 600 ms is 300 ms, or **33.3%**, not 50%. Verify which figures are correct and make them consistent.
2. **Clarify the GRPO claims.** The single-rollout bullet may be hard for a technical reader to reconcile with the grouped rollouts and group-relative training described in the preceding bullet. Explain what “one rollout per prompt” means in the actual training setup and what you observed as “stability.”
3. **Make the internship bullets stand alone and easier to evaluate.** One is a sentence fragment, and several rely on specialized terms without enough context about the comparison, workload, or measurement.
4. **Reorder experience by date.** Put the 2024–2025 internship above the 2022–2024 role so the most recent experience appears first.
5. **Cut or substantiate the broad Agent Runtime Suite claim.** Its first bullet asserts broad adoption and improved outcomes without saying what changed or how the outcome was established.

## Section-by-section changes

### Contact and education

- **Portfolio URL:** If `example.com/code/jordan-lee` is literal rather than anonymized, replace it with a working portfolio, code profile, or project link. A placeholder-style URL won’t give a reader a way to inspect your work.
- **Education order:** Keeping education first is reasonable while you’re pursuing the master’s degree. If you’re applying to roles where your engineering experience is the stronger evidence, consider putting experience first instead.
- **Expected graduation date:** Keep the expected date clearly identified as expected, as it is now, and update it if that status or date changes.

### Experience order

- **Move Mobility Systems Company above Eastern Robotics Co.** The internship is more recent, so this makes the section’s chronology easier to scan.

### Eastern Robotics Co.

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify what you owned: dashboard maintenance, design, operational monitoring, or some combination. The current wording also makes your relationship to the on-call rotation unclear. This matters because “owned the rotation” could imply a different level of responsibility than supporting the people who used the dashboards.
- **Latency reduction and build threshold:** Keep this; it is one of the clearest bullets. If space allows, specify the load-test conditions or comparison basis so readers can interpret the p95 change. The 200 ms build threshold and 180 ms result are consistent, but the testing context would make them more meaningful.
- **CI pipeline and release-cycle reduction:** Clarify the connection between the regression checks you added and the reduction from two weeks to three days. Also make sure the action verb reflects your actual contribution: maintaining a pipeline and introducing improvements are different claims.
- **Fleet migration / logging / onboarding / on-call bullet:** Separate or otherwise distinguish the migration, logging-library work, onboarding, and on-call responsibilities. As written, it packs several contributions into one bullet, and the final clause does not clearly show which work removed the nightly backlog. Preserve that outcome, but make its cause and your role clear.

### Mobility Systems Company

- **Triage branch and backlog reduction:** Explain what the triage branch did in terms a reader can understand without knowing your internal terminology. Clarify what the 68% backlog reduction compares, and whether it was measured over those eight weeks against a defined starting point. “800+ sensor signals per case” is useful scope; keep it if it is accurate and relevant.
- **Accuracy improvement:** Identify what “diagnostic accuracy” measures and what the 71% baseline represents. The held-out case count is helpful. The technical details about the domain adapter and loss masking are valuable for an ML audience, but make sure they don’t obscure the result and that you can explain them clearly in an interview.
- **Edge-inference latency:** Clarify the workload and comparison behind the 40% p95 reduction. “Single-request” and “dynamic batching” may prompt questions about whether requests were actually batched under the measured conditions.
- **GRPO bullet beginning “Using grouped tool-use rollouts…”:** This is a sentence fragment; make it a complete, self-contained bullet. Also clarify what “end-to-end latency” covers, what it was compared against, and how the reward components relate to the latency result.
- **Single-rollout GRPO bullet:** Explain what stability means in this context and what changed in the training setup. In particular, reconcile one scored trajectory per prompt with the grouped rollouts and GRPO loop mentioned in the preceding bullet. This is a request for technical clarity, not a conclusion that the method is incorrect.
- **Runbook bullet:** Keep this. It shows a useful operational outcome, not just documentation. If you can, make the adoption or use of the runbook more concrete; don’t add adoption claims beyond what you can support.

### Projects

#### Agent Runtime Suite

- **Project context:** Make clear what this project is—such as an independent project, a work project, or an open-source contribution—if that context is not obvious elsewhere. If your portfolio link includes the project, make the link easy to find.
- **“Drove adoption of AI-first engineering practices…”** This is the least specific bullet in the resume. It makes broad claims about platform-wide adoption, faster delivery, and downstream outcomes without naming the practice or giving evidence. Replace the underlying content with a concrete contribution and supportable outcome, or remove the bullet if you can’t substantiate it.
- **Tool-call latency:** Correct the percentage or the before-and-after values; they currently conflict. Also clarify the measurement conditions for p95 latency so the comparison is interpretable.
- **Task-completion rate:** “Raised … by 12% … from 71% to 83%” is ambiguous: those figures show a **12-percentage-point** increase, not a 12% relative increase. Verify the figures and describe the change accurately. Include enough about the benchmark to show what the result represents.

#### Research-Agent Evaluation Framework

- **Metrics contributed:** This is strong evidence of adoption. Name the framework or link to the repository/PRs if possible, so a reader can verify the contribution. Make sure “metrics” accurately describes what you contributed.
- **Kendall correlation:** Clarify what two quantities were correlated—for example, what evaluator result was compared with what measure of injected degradation—and which Kendall statistic you report, if known. “Tracks injected degradation” is promising but leaves the actual evaluation method unclear.
- **Three pipeline defects:** Make the connection between each defect category and the affected part of the pipeline clearer. “Each was fixed upstream” is a useful result; a link to the relevant changes would strengthen it if available.

### Skills

- **Kubernetes:** It appears in the skills list but isn’t demonstrated in the experience or projects shown. If it’s relevant to the roles you’re targeting, consider adding a concrete example elsewhere; otherwise, consider omitting it. A listed skill isn’t automatically suspect, but readers have less evidence for it here.
- **Skills coverage:** Consider whether important tools or methods used in the bullets should be listed for quick scanning—but only include skills you can substantiate and want to be evaluated on. Keep the list selective rather than adding every technology mentioned.

## What to preserve

- Your measured engineering outcomes, especially the latency, release-cycle, backlog, and benchmark results.
- The combination of ML work with production-facing concerns such as inference latency, on-call operations, CI, and runbooks.
- The evidence of upstream adoption and fixed defects in the evaluation-framework project.
- The concrete scope figures, such as the held-out cases, sensor signals, and fleet services, provided you can explain how each was counted.

This review is based on the pasted text. I haven’t assessed the original file’s layout, visual hierarchy, or document-parsing behavior. If any contact details or other content were anonymized for this review, ignore feedback that depends on those details.


---

# case-2

## Résumé

```
Riley Chen
+1 (555) 010-7731 | riley.chen@example.com | example.com/in/riley-chen
Date of birth: 2 Nov 1996 | Nationality: American
EDUCATION
Northfield School of Management | MBA | Metro City, USA | Sep 2023 - Jun 2025
Lakeview University | B.A. in Economics | Lake City, USA | Sep 2014 - Jun 2018
EXPERIENCE
Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024
- Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow
for all merchants.
- Wrote the requirements and success metrics for dispute self-service, aligning engineering,
risk and support; the team shipped it two weeks ahead of plan.
- Interviewed 25 merchants and analysed six months of chargeback data to size annual
chargeback losses at 1.1 million dollars, the business case that set the next quarter’s
roadmap priority.
- Ran weekly triage with engineering and support, closing 140 onboarding tickets over the
summer and cutting the open-ticket queue by half.
- Measured the onboarding redesign by comparing merchants who opted into the new flow with
those who stayed on the old one.
- Redesigned merchant onboarding around a single verification step, cutting median time to
first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023
- Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time
calculation.
- Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor
supervisors and retraining 45 pickers on the new layout.
- Coordinated the quarterly S&OP review across sales, finance and operations and prepares the
forecast pack for each meeting.
- Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers
and saving 1,800 driver hours a year.
PROJECTS
Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present
- Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9
tonnes of food that would have been thrown away in its first year.
- Launched pickup reminders after 60 user interviews showed students missed pickup windows;
weekly active users grew from 400 to 1,150 over the following term.
- Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week
and cutting staff cover shifts from 10 to 2 a week.
MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024
- Held weekly working sessions with clinic managers on outpatient scheduling across the
network.
- Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes
adopted by front-desk staff.
- Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants,
by redesigning onboarding.
SKILLS
Product: roadmapping, A/B testing, user interviews, requirements writing
Tools: Jira, Amplitude, Excel
```

## Reviewer 1

6 errors, 10 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The file includes date of birth and nationality, personal details a reader is not meant to weigh.

**Why**
Those details are not relevant to assessing the candidate’s work or qualifications. Keeping them in the file directs attention to personal information rather than the résumé’s professional evidence.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American” from the file.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, delaying the product internship and operations background that establish the candidate’s direction.

**Why**
A reader encounters the degrees before the work history. Moving Experience ahead of Education would put the product and operations background first.

**How to change it**
Move the Experience section ahead of Education.

> Sep 2014 - Jun 2018

**Problem**
[Polish] The résumé leaves an eight-month gap between the B.A. ending in June 2018 and the Operations Analyst role beginning in March 2019 unexplained.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% checkout-conversion increase is unclear without saying whether it is relative or percentage-point growth and what it is compared with.

**Why**
Without that anchor, a reader cannot judge the size of the improvement. Clarifying the comparison makes the result easier to interpret and defend.

**How to change it**
Specify whether “35%” is a relative lift or a percentage-point gain; if measured against a particular baseline or period, add [baseline conversion rate or comparison period].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The shipping result is buried after the requirements and stakeholder list.

**Why**
A reader reaches the outcome only after the work description and the people involved. Leading with the two-weeks-ahead result makes the accomplishment clear sooner.

**How to change it**
Move “the team shipped it two weeks ahead of plan” to the beginning of the bullet, then retain the requirements and stakeholder details.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
[Important] The roadmap-priority outcome is buried after the research methods and estimated losses, and “the business case that set” is an awkward link.

**Why**
The reader sees the methods and loss estimate before learning why the work mattered to the business. The wording also makes the connection between the estimate and the roadmap decision less direct.

**How to change it**
Move the roadmap-priority outcome to the beginning of the bullet and replace “the business case that set” with a shorter link such as “which informed.”

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] Comparing merchants who chose different flows does not isolate the redesign’s effect.
2. [Important] The bullet gives a comparison method but no result or insight from it.

**Why**
1. Those groups selected their own flow and may differ in ways that also affect onboarding outcomes. Without random assignment or adequate adjustment for those differences, the comparison cannot establish the redesign’s effect.
2. A reader cannot tell whether onboarding improved or what changed. The comparison setup alone does not show the value of the work.

**How to change it**
1. If merchants were randomly assigned or the comparison adjusted for selection differences, state how; otherwise describe this as a comparison between the groups, not a measurement of the redesign’s effect.
2. Replace “Measured the onboarding redesign” with the finding: [change in a named onboarding outcome for merchants using the new flow versus the old flow].

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The onboarding result is attributed to both Harbor Payments and an earlier practicum, so the role and timing of the work conflict.

**Why**
The practicum entry places the same 2,300-merchant result in Jan–May 2024, before this Harbor internship began in June 2024. A reader may doubt which role produced the result.

**How to change it**
Verify which role the work belongs to and retain the result under that role; if these were separate projects, distinguish them and use their respective figures.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] Excluding weather-delayed shipments from the calculation does not support claiming that overall late deliveries fell from 11% to 7%.

**Why**
Excluding those shipments changes the population being measured, so the lower rate could reflect the exclusion rather than fewer late deliveries overall. As written, the bullet presents that adjusted rate as an overall reduction.

**How to change it**
If the figures cover only shipments not delayed by weather, say so and report weather-delayed shipments separately; otherwise recalculate the rates including all shipments.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The pick-error result should lead the entry rather than appear after the opening bullet.

**Why**
The quantified reduction, two-site reach, and work with supervisors and pickers give this line a clear result and scope. Leading the entry with it would make that accomplishment land sooner.

**How to change it**
Move this bullet to the top of the Crestline Logistics entry.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Prepares” uses present tense in a role that ended in August 2023.
2. [Important] The bullet describes the review and forecast pack but gives no outcome they enabled.

**Why**
1. The present tense conflicts with “Coordinated” and makes it unclear whether the forecast-pack work is ongoing. The role dates establish that this experience is past.
2. A reader can see what the role involved, but not what the review or pack accomplished. Without a decision, planning result, or other consequence, the contribution’s value is difficult to judge.

**How to change it**
1. Replace “prepares” with “prepared.”
2. Add the most direct outcome the review or pack enabled, with [the decision or planning outcome and how it was measured] if available.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch bullet names the app and its results but not your specific product or rollout contribution.
2. [Polish] The phrase “that would have been thrown away” repeats the meaning of “surplus food” and slows the result.

**Why**
1. A reader can see the outcome, but not what your work as product lead involved. One concise example of what you owned would make the skill behind the launch clearer.

**How to change it**
1. Add one specific launch contribution after “app,” such as [the key product decision or rollout step you owned]. Keep it to one detail so the result stays prominent.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] “Launched” repeats the opening verb of the preceding bullet.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Polish] “Each week” and “a week” repeat the weekly cadence.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The weekly sessions are described without saying what they produced.

**Why**
A reader can see the activity and its participants, but cannot tell what value the work delivered. The cadence alone does not establish an outcome.

**How to change it**
Add [the scheduling decision or change the sessions produced and its effect]; that outcome is more useful than adding detail about the meeting routine.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The intake-form result should lead the entry rather than appear after the opening bullet.
2. [Polish] The intake-form bullet uses passive voice, obscuring who did the work, and does not quantify how much the form was shortened.

**Why**
1. This line names work across four clinics and says the changes were adopted by front-desk staff. Leading with it would make the clearest practicum result visible sooner.

**How to change it**
1. Move this bullet to the top of the practicum entry.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding bullet does not fit the hospital practicum and duplicates the Harbor Payments result.
2. “By redesigning onboarding” does not identify what changed in the process.
3. “Takes” uses present tense for a practicum that ended in May 2024.

**Why**
1. The entry describes outpatient-scheduling work, while this bullet describes changing merchant onboarding and payment timelines. The same result is also listed under Harbor Payments, so a reader may doubt which project it belongs to.
2. Even apart from the mismatch with the hospital project, the phrase names a broad activity rather than the change made. A reader cannot tell what the claimed redesign involved.
3. The present tense makes the sentence sound ongoing even though the role dates show it is past. The wording is also inconsistent with describing the completed result.

**How to change it**
1. Remove this bullet or replace it with [the verified result of the hospital scheduling work]. If this was separate onboarding work, verify its role and distinguish the project and result from the Harbor bullet.
2. If this is a separate, accurate project, replace “redesigning onboarding” with [the specific onboarding change]; otherwise remove the bullet with the mismatched claim.
3. Replace “takes” with “took.”

## What already works

- “Led the rollout of a route-planning…”: Pairs a quantified annual outcome with the rollout's reach and training effort.
- “Ran weekly triage with engineering and…”: Combines a concrete workload with a clear reduction in the open queue.

## Reviewer 2

# Resume review

Your strongest material is the quantified product work at Harbor Payments and the food-rescue project. The main issues are **a potentially misleading delivery metric, missing context around results, an incomplete measurement bullet, and an apparent copy/paste error in the practicum**. Fix those before polishing wording.

## Header

- **Date of birth and nationality:** Remove both. They aren’t needed for most U.S. applications and disclose personal information without strengthening your candidacy.
- **Contact details:** Keep your phone, email, and LinkedIn. Add a location if you want to indicate where you’re based; a city or region is enough. A portfolio is optional for a PM role, but can help if it contains substantive product work.
- **Link formatting:** Make sure the LinkedIn URL is clickable and that the portfolio link, if included, goes to a relevant, complete page.

## Education

- **MBA entry:** The dates indicate the degree ended in June 2025. If that’s correct, keep it as completed; if not, make the expected completion status clear. This matters because recruiters may otherwise misread your current status.
- **B.A. entry:** The dates and degree are clear. Add GPA or relevant coursework only if it strengthens your case—for example, a strong GPA or coursework relevant to the roles you’re targeting.

## Experience

### Harbor Payments — Associate Product Manager Intern

- **Checkout conversion bullet:** Clarify whether 35% means a relative increase or a percentage-point increase, and provide the measurement period or comparison basis. Also make clear whether “all merchants” describes the rollout or the population used to calculate conversion; those are different claims. The current wording attributes the full change to the redesign, so be sure your evidence supports that causal link.
- **Dispute self-service bullet:** This is a good example of cross-functional product work, but it stops at shipping. Include the result of the shipped feature if you have one, such as adoption or a change in support volume. If you don’t have post-launch results, make your specific contribution and the basis for the “two weeks ahead” timing clear.
- **Merchant interviews and chargeback data bullet:** Specify the currency and clarify what the $1.1 million figure represents—for example, the period and whether it’s an estimate or observed loss. The connection to the roadmap is useful; make sure the resume makes clear how your analysis informed that decision.
- **Triage and onboarding tickets bullet:** Clarify whether you personally closed the 140 tickets or coordinated a team that closed them. Add the period or starting point behind the queue reduction if available. This is useful operational evidence, but should not overstate your individual ownership.
- **Measurement bullet:** This is currently unfinished as a result: it says what you compared, but not what the comparison showed. Add the finding if it is reliable. Because merchants chose whether to opt in, the groups may differ in ways that affect the result; don’t present this comparison as proof that the redesign caused an outcome unless your analysis supports that.
- **Onboarding redesign bullet:** This is a strong, specific result. Clarify the pilot period and how “median time to first payment” was measured if space allows. Also check whether this is distinct from the onboarding work described in the practicum; the same result appears again there.

### Crestline Logistics — Operations Analyst

- **Late-delivery bullet:** This is the most important issue in the resume. Excluding weather-delayed shipments from the on-time calculation changes the metric; it does not necessarily improve delivery performance. As written, “cut late deliveries” implies an operational improvement and could mislead a recruiter. Reframe the accomplishment to accurately describe a measurement-policy change, or replace it with evidence of an actual improvement in delivery performance.
- **Pick-error bullet:** Keep this result, but add the measurement period and the basis for the 30% reduction if you can. The collaboration and training details help show how the change was implemented.
- **S&OP bullet:** Correct the tense mismatch (“coordinated” versus “prepares”) and add the outcome or purpose of the forecast pack if there was a concrete one. As written, this describes recurring responsibilities but gives little evidence of their impact.
- **Route-planning tool bullet:** Strong implementation and efficiency metrics. Clarify whether the 1,800 hours are annualized or measured over a full year, and how the savings were estimated. If you know the tool’s name and it is relevant to your target roles, consider including it.

## Projects

### Campus Food Rescue App — Product Lead

- **Launch and food-rescue bullet:** Clarify whether 3,100 refers to students reached, registered, or active, and whether the two dining halls were the full launch scope. If available, show how the nine tonnes were tracked. These details help readers assess the scale and credibility of the result.
- **Pickup-reminders bullet:** The user research and adoption result are compelling. Add the time period for the change from 400 to 1,150 weekly active users and be cautious about attributing the entire increase to reminders unless you have evidence that supports that conclusion.
- **Volunteer-shift bullet:** Keep the operational result, but clarify the measurement period and how staff cover shifts were counted. This demonstrates execution beyond the app itself.

### MBA Consulting Practicum — Team Lead

- **Working-sessions bullet:** This describes an activity, not its outcome. Add what the sessions enabled or what changed as a result. Also clarify the scope of the work if “across the network” is broader than the clinics involved.
- **Patient-intake bullet:** The passive construction obscures your role, and “shortened” doesn’t say how much or what improved. Make your contribution, the scale of the change, and the adoption or outcome clearer.
- **First-payment bullet:** This appears to duplicate the Harbor Payments onboarding result, including the 2,300-merchants figure, and it does not fit the hospital practicum context. Verify it carefully. If it is a mistaken repeat, remove it and use a genuine practicum result; if it belongs to another project, place it there and avoid duplicating the same achievement.

## Skills

- **Product skills:** The list is relevant but broad. Keep skills you can discuss in an interview, and add other role-relevant product or analytical skills only if you genuinely have them.
- **Tools:** Jira, Amplitude, and Excel are useful, but the list is short. Include additional tools only if they are relevant to your target roles and you can explain how you used them. Avoid proficiency ratings or adding tools just for keyword coverage.
- **Presentation:** Use consistent capitalization and category formatting. This improves readability and helps recruiters scan the section quickly.

## Overall presentation and priorities

1. Fix the **late-delivery claim** so a changed calculation is not presented as improved performance.
2. Correct or remove the **practicum bullet that repeats the merchant-onboarding result**.
3. Complete the **measurement bullet** with a reliable finding—or remove it if you have no meaningful result to report.
4. Add context to the strongest metrics: **time period, denominator, comparison basis, and whether the result is measured or estimated**.
5. Keep the resume focused on product roles. The operational experience is valuable when it demonstrates measurable execution, analysis, or cross-functional leadership; less outcome-focused responsibility bullets should be strengthened or shortened.

## Reviewer 3

The biggest fixes are **the delivery metric that changes the definition of “late,” the onboarding comparison that may be biased, and the merchant-onboarding bullet under the hospital project**. Those could undermine confidence in otherwise strong experience.

## Header and education

- **Name:** No change needed.
- **Phone, email, LinkedIn:** Make sure the LinkedIn URL works and the contact details are the ones you want recruiters to use.
- **Date of birth and nationality:** Remove unless an application specifically requires them. They generally do not help a U.S. resume and take space from relevant qualifications.
- **MBA:** If you graduated in June 2025, make that status clear rather than leaving the reader to infer it from the dates.
- **B.A. in Economics:** No substantive change needed; check that its date and location formatting matches the MBA entry.

## Harbor Payments

- **Role heading:** No substantive change needed.
- **Checkout conversion:** Specify what the 35% measures—relative increase or percentage-point change—and the comparison period or test. Check whether the result truly applied to *all* merchants; otherwise that scope overstates the evidence.
- **Dispute self-service:** Clarify your ownership versus the team’s work, and retain “two weeks ahead” only if there was an established delivery plan. The bullet would be stronger if you can add an adoption or business outcome after launch.
- **Chargeback analysis:** Say what the $1.1 million represents (an estimate of annual losses, for example) and how it informed the decision. “Set the next quarter’s roadmap priority” is a strong causal claim; make sure it reflects what decision-makers actually did.
- **Ticket triage:** Clarify whether you personally resolved tickets or coordinated their resolution. Give the queue’s starting and ending size if available so “by half” is verifiable.
- **Onboarding measurement:** An opt-in group is likely different from merchants who stayed on the old flow. Don’t present that comparison as proof the redesign caused an improvement unless you controlled for that selection bias; describe the measurement approach and its limitation accurately.
- **Onboarding redesign:** This is a strong result. Explain whether the 2,300 merchants were all exposed to the new flow and whether 9-to-4 days comes from a valid baseline or comparison group. Keep its scope consistent with the measurement bullet.

## Crestline Logistics

- **Role heading:** No substantive change needed.
- **Late deliveries:** Change or remove this claim. Excluding weather-delayed shipments changes the calculation; it does not, by itself, reduce late deliveries. Report an actual operational improvement if you have one, or characterize this accurately as a reporting-definition change.
- **Pick errors:** Strong bullet. Specify the measurement period or baseline if space permits, and make sure the 30% reduction can reasonably be linked to the changes described.
- **S&OP review:** Fix the tense: “prepares” conflicts with the past-tense role. Add the scale or consequence of the forecast work if you can; currently it reads more like a duty than an accomplishment.
- **Route-planning rollout:** Strong bullet. Confirm whether 1,800 hours is measured or estimated and identify the time period clearly.

## Projects

- **Campus Food Rescue App heading:** Verify that “Present” is still accurate, especially since the MBA ended in 2025. Clarify whether this is an ongoing venture rather than an ongoing student activity if that distinction matters.
- **App launch and food redistributed:** Distinguish students who had access from students who actually used the app. Check that “first year” aligns with the project dates and that the 9-tonne figure is tracked rather than projected.
- **Pickup reminders:** The interviews establish the problem, but growth in weekly active users does not necessarily show the reminders caused it. Keep the outcome, but qualify the attribution unless you tested it.
- **Volunteer shifts:** Good operational result. Clarify whether 95% is an average over a defined period and whether the reduction in staff cover shifts is attributable to the system.
- **Consulting practicum heading:** No substantive change needed.
- **Weekly working sessions:** Add what you delivered or decided through those sessions; meeting cadence alone says little about your contribution.
- **Patient intake:** Identify your role in mapping and changing the process, rather than using passive voice. If available, include a patient, staff, or processing-time outcome; adoption alone is less compelling.
- **Merchant first payment:** Remove this from the hospital project. It duplicates the Harbor onboarding work and is unrelated to outpatient scheduling; placed here, it looks like an editing error.

## Skills

- **Product:** Keep skills you can substantiate in an interview. In particular, “A/B testing” may invite questions given the opt-in comparison described above; include it only if you have actually designed or analyzed appropriate tests.
- **Tools:** Keep these if you used them hands-on. Add relevant tools only if they strengthen your target product roles, rather than expanding the list for its own sake.

Across the resume, standardize tense, date style, and whether metrics are **measured, estimated, or inferred**. That distinction matters more than making every bullet sound maximally impressive.

## Reviewer 4

I’ll keep this to review notes only—no rewritten lines or example wording. The resume has useful quantified results, but several claims need clearer definitions or evidence, and one project bullet looks like it was copied from your work experience.

## Highest-priority changes

1. **Remove the merchant-onboarding bullet from the hospital practicum, or verify and relocate it.** It repeats the same “2,300 merchants / first payment” result as your Harbor Payments experience, but it appears under a regional hospital project. That mismatch will look like a copy-paste error and raise questions about accuracy.
2. **Revisit the late-delivery claim.** Excluding weather-delayed shipments from an on-time calculation changes the measurement; it doesn’t necessarily mean deliveries got more reliable. As written, the bullet suggests an operational improvement that the stated action may not support.
3. **Resolve the two Harbor flow claims.** The checkout bullet says the new flow applied to all merchants, while the onboarding bullet describes a pilot region with 2,300 merchants. Clarify whether these were distinct initiatives, different rollout stages, or overlapping descriptions.
4. **Connect the measurement-method bullet to a result.** The opt-in comparison describes how you evaluated the onboarding redesign, but not what the comparison found. On its own, it reads as an incomplete bullet—and the opt-in groups may differ in ways that affect the comparison.

## Header and education

- **Date of birth and nationality:** Remove these for most US applications. They usually don’t help assess your qualifications and disclose personal information unnecessarily.
- **LinkedIn/contact line:** Make sure the LinkedIn text links to your actual profile URL. If the example-domain address is anonymized for this review, use your real link in the submitted version.
- **MBA dates:** Since the listed end date is June 2025, make sure the degree status is accurate for the version you send. If completed, show that clearly; if not, use the correct expected date.
- **Education section:** Consider whether the MBA needs a concentration, relevant coursework, or other distinguishing detail for your target roles—but include only information that adds value and is accurate.

## Harbor Payments

- **Checkout conversion, 35%:** Define whether this is a relative increase or a percentage-point change. Add the baseline, measurement period, and scope if you can substantiate them. “After replacing” implies causation, so be ready to explain how you isolated the flow change from other factors.
- **Dispute self-service requirements and early launch:** Clarify what you personally produced or coordinated and what “two weeks ahead of plan” refers to. The current bullet gives useful cross-functional context, but the shipped result and schedule claim need to be easy to verify.
- **Merchant interviews and $1.1 million estimate:** Explain the basis for the annual-loss estimate: the relevant data, assumptions, and whether the amount is in USD. Also make your role in the roadmap decision clear without overstating your influence.
- **Triage and 140 tickets:** Specify what counted as a ticket and how the queue reduction was measured. Consider whether this operational volume is among your strongest product outcomes; it may be less compelling than the measured product changes unless you can show the effect on users or the business.
- **Opt-in measurement bullet:** Pair this method with its finding or remove it as a standalone bullet. If you retain the comparison, be prepared to address self-selection bias: merchants who opted in may differ from those who did not.
- **Onboarding redesign, 9 to 4 days:** Define “time to first payment,” the comparison period, and what the pilot-region figure represents. Also clarify how this initiative differs from the checkout-flow work and whether the 2,300 merchants were exposed to the redesign.

## Crestline Logistics

- **Late deliveries, 11% to 7%:** Don’t present a changed calculation as a reduction in late deliveries unless the underlying delivery performance also improved. Explain the metric definition and what operational change produced the result; otherwise this claim risks sounding like metric manipulation.
- **Pick errors, 30%:** This is one of the clearer bullets. Add the time period and how errors were counted if those details are available. Be prepared to explain how the slotting changes and picker retraining contributed to the outcome.
- **S&OP review:** Fix the tense mismatch: the role ended in 2023, but this bullet uses present tense. It also describes recurring responsibilities rather than an outcome; consider whether you can substantiate a concrete result or whether this is worth the space.
- **Route-planning tool:** Clarify how the annual figure of 1,800 hours was calculated and whether it was measured or projected. Distinguish your contribution to rollout and training from the team’s overall result.

## Projects

### Campus Food Rescue App

- **Launch and 9 tonnes:** Clarify what “launched to 3,100 students” means—availability, registrations, or actual reach. Define the first-year period and how the amount of food redistributed was tracked.
- **Reminders and weekly active users:** Give the measurement window and make sure the growth from 400 to 1,150 is attributable enough to support the connection to reminders. The 60 interviews are useful evidence, but be ready to explain who was interviewed and what you learned.
- **Volunteer shifts:** State the period behind the 95% figure and how staff cover shifts were counted. Clarify your role in setting up the system versus the dining halls’ role in operating it.
- **Project status and team scope:** Because this project is ongoing, make the current status clear. “Product Lead” and the scale of the results invite questions about team size, what you personally owned, and whether the app is still active.

### MBA Consulting Practicum

- **Weekly working sessions:** This communicates activity but not what changed as a result. Add a concrete deliverable, decision, or outcome if one exists; otherwise, it may be lower-value than the more specific bullets.
- **Patient intake:** The passive construction obscures your contribution. Clarify what you personally did, what was changed, how the four clinics were selected, and what “adopted” means in practice. If you have a measurable result, such as a change in intake time or completion, it would make the impact easier to assess.
- **Merchant-onboarding result:** This appears misplaced and duplicative, as noted above. Verify it before keeping it anywhere.

## Skills and presentation

- **Product skills:** These are relevant but broad. Keep them only if you can discuss specific examples and methods—especially for A/B testing, where interviewers may ask about experiment design and statistical interpretation.
- **Tools:** Add other tools only if you have real working proficiency and they matter for the roles you’re applying to. Don’t imply expertise from limited exposure.
- **Formatting and consistency:** Keep dates, locations, punctuation, tense, and bullet formatting consistent. The manual line breaks in this text should not become awkward wraps in the final document.
- **Targeting:** No job description was provided, so I can’t assess role-specific fit. The best edits depend on whether you’re targeting product management, operations, or another function; prioritize the results and skills most relevant to the target role.

## Reviewer 5

## Overall assessment

The resume has strong, relevant evidence for product or product-operations roles: user research, roadmap influence, cross-functional work, launches, and quantified operational results. The main weakness is **credibility and clarity**, not a lack of accomplishments. Several bullets may describe the same onboarding work with different scopes or metrics, and one consulting-practicum bullet appears to be copied from the payments internship.

I’m treating product roles as the likely target based on the resume; without a job description, this is a general review rather than a tailored fit assessment. Since you provided pasted text, I can’t assess the visual layout or how the original file parses.

## Highest-priority changes

1. **Resolve the onboarding claims and scopes.** The 35% checkout-conversion result, the comparison of merchants who opted in versus those who did not, and the reduction in time to first payment may be separate initiatives—or overlapping descriptions of one. Make that distinction clear, and avoid presenting a before-and-after association as a proven causal result unless your analysis supports it.
2. **Remove or correct the unrelated practicum bullet.** The “new merchant” onboarding result does not fit a hospital consulting project and repeats the payments-internship result. As written, it is the clearest credibility problem.
3. **Reconsider the late-delivery bullet.** Excluding weather-delayed shipments from the calculation changes the metric; it does not necessarily improve delivery performance. Present the measure transparently alongside actual delivery results, or remove the claim if there was no operational improvement.
4. **Tighten the bullets that describe activity without an outcome.** The practicum’s weekly working sessions and the onboarding measurement bullet need a clear result or a reason to keep them.
5. **Remove personal details that are not needed.** A date of birth is generally unnecessary on a resume. Nationality is also usually unnecessary unless a specific application asks for it.

## What to change, line by line

### Header and education

- **Date of birth:** Remove it. It is not needed to assess your qualifications and adds personal information without helping your application.
- **Nationality:** Remove it unless an application specifically requests it or it is necessary to clarify eligibility. Don’t use it as a substitute for stating work authorization if an employer asks about that.
- **Education entries:** Keep the degrees, institutions, locations, and dates. Make sure the MBA’s completion status is accurate when you submit the resume; the listed end date alone may not make clear whether it is completed or in progress.
- **Education before experience:** This is reasonable for an MBA candidate and keeps your current studies visible. Reconsider only if you want to emphasize your longer work history over education for a particular role.

### Harbor Payments

- **Checkout-conversion result:** Clarify the baseline, measurement period, and population behind the 35% figure. “For all merchants” needs to be reconciled with the later reference to a pilot region and merchants opting into a new flow.
- **Dispute self-service requirements:** Keep the cross-functional scope and delivery timing. Make clear what you personally owned versus what the team delivered, so “the team shipped it” does not leave your contribution unclear.
- **Merchant interviews and chargeback analysis:** Keep this: it shows research and business judgment. Clarify the currency and that the annual loss figure is an estimate, if that is how it was calculated. Make sure the claim that the analysis set the roadmap priority is accurate and supportable.
- **Weekly triage and 140 tickets:** Clarify what the tickets covered and whether you personally closed them or coordinated the team that did. Keep the queue reduction only if its starting point, endpoint, and time period are clear.
- **Opt-in versus old-flow measurement:** This currently describes an evaluation method but gives no finding. Add the result if there is a meaningful one; otherwise, combine it with the related redesign bullet or remove it. Also be careful about implying the redesign caused a difference if merchants chose their own flow.
- **Onboarding redesign and time to first payment:** This is a strong result. Clarify the pilot period and how the median was measured. Distinguish it from the checkout-conversion claim if it was a separate change; if not, avoid presenting overlapping descriptions as separate accomplishments.

### Crestline Logistics

- **Late deliveries and weather exclusions:** Change how this is presented or remove it. As written, the reduction comes from excluding a category from the calculation, which may look like a reporting change rather than fewer late deliveries. If you retain it, distinguish the adjusted metric from actual delivery performance.
- **Pick errors:** Keep this concrete accomplishment. Clarify the measurement period or baseline behind the 30% reduction if that information is available. The work with supervisors and retraining makes your contribution easier to understand.
- **S&OP review and forecast pack:** Correct the tense so it matches a role that ended in 2023. This bullet currently has no outcome; add the consequence or scope of the work if you can substantiate it, or shorten/remove it if it adds little beyond routine responsibility.
- **Route-planning rollout:** Keep the rollout, three-depot scope, and training figures. Clarify whether the 1,800 annual driver hours were measured savings or an estimate, and whether they were achieved after rollout.

### Campus Food Rescue App

- **App launch and food redistributed:** Keep the scale and impact, but distinguish the number of students the app was available to from the number who actually used it, if those differ. Clarify how the nine-tonne figure was tracked or estimated.
- **Pickup reminders and weekly active users:** Keep the research and adoption result. Define the measurement periods for the before-and-after figures, and avoid implying the reminders alone caused the increase unless you can support that attribution.
- **Volunteer shift system:** Keep the filled-slot and staff-cover results. Clarify the time period for both figures and what “staff cover shifts” means in this context, so readers can interpret the operational effect.

### MBA Consulting Practicum

- **Weekly sessions with clinic managers:** This describes an activity, not what changed because of your work. Add a substantiated outcome or deliverable, or remove it if the next bullet already covers the project’s useful result.
- **Intake form and adoption:** Explain your role in mapping or shortening the form, and clarify how many clinics adopted the changes. The passive construction currently obscures who did the work and what the adoption changed.
- **Merchant onboarding bullet:** Remove it from this project unless it genuinely belongs here and you can explain why. It conflicts with the hospital context and duplicates the Harbor Payments result; leaving it as written could make the resume appear unreliable.

### Skills

- **Product skills:** Keep skills that are relevant to your target roles, but make sure the experience section supports them. Roadmapping, testing, interviews, and requirements writing have some supporting evidence here; prioritize the ones most relevant to a specific job description.
- **Tools:** Jira, Amplitude, and Excel are useful to list. Keep them if you can discuss how you used them in an interview; don’t add proficiency labels unless you can support them.

## What is already working

Your strongest evidence is the combination of user research, cross-functional product work, operational execution, and specific outcomes. Preserve those details, but make the scope and attribution of each result easy to verify. The most valuable repair is to resolve the overlapping payments metrics and remove the unrelated practicum bullet before making smaller wording or formatting changes.

## Reviewer 6

## Highest-priority changes

1. **Remove your date of birth and nationality.** They aren’t normally needed on a U.S. résumé and can expose personal information or invite irrelevant bias. If work authorization matters for a particular application, address that separately and only when appropriate.
2. **Delete the final bullet under the hospital practicum.** It describes merchant onboarding and first payments, repeats a Harbor Payments result, and doesn’t fit the hospital project. It looks like an accidental copy-paste and could undermine confidence in the rest of the résumé.
3. **Rework the late-delivery bullet at Crestline.** Excluding weather-delayed shipments from the calculation changes the measurement, not necessarily the delivery performance. As written, it may look like you improved the metric by redefining it.
4. **Clarify outcomes and measurement.** Several bullets have impressive numbers but don’t say what they’re compared with, over what period, or whether a percentage is relative or percentage-point change.
5. **Fix the tense inconsistency** in the Crestline S&OP bullet and standardize U.S. spelling and date formatting.

## Header and education

- **Name and contact details:** Keep these. Make sure the LinkedIn link goes to your actual profile and that the phone number and email are current.
- **Date of birth and nationality:** Remove both, for the reasons above.
- **MBA line:** Clarify whether the degree is completed or expected, depending on your status. Keep the date format consistent with the rest of the résumé.
- **Economics degree:** This is clear as written. Consider whether the location and dates use the same formatting as the MBA entry.

## Harbor Payments

You have six bullets for a summer internship. That can be reasonable if each adds distinct evidence, but the measurement-only bullet is weaker than the others. Prioritize the most relevant, substantiated outcomes.

- **Checkout conversion:** Clarify whether the 35% is a relative increase or a percentage-point increase, and include the measurement period or comparison basis. “After replacing” suggests causation; make sure the data supports that attribution.
- **Dispute self-service requirements:** This shows cross-functional work and delivery. Make your own contribution distinct from the team’s, and clarify what “two weeks ahead of plan” is measured against if that isn’t obvious to a reader.
- **Merchant interviews and chargeback analysis:** Strong evidence of research and business judgment. Specify the currency for the loss estimate and make clear that it is annualized. Keep the link between the analysis and the roadmap decision, but ensure the wording doesn’t overstate your individual influence.
- **Onboarding-ticket triage:** The ticket count and queue reduction are useful, but “closing 140 tickets” may sound like support execution rather than product work. Clarify your role in resolving them and what the queue reduction means in practical terms, if you have that information.
- **Opt-in comparison:** This bullet reports a method but no result, so it doesn’t tell the reader what the redesign achieved. Also, merchants who opted in may differ from those who didn’t, making the comparison vulnerable to selection bias. Add a defensible finding or remove the bullet; don’t present the comparison as causal without support.
- **Onboarding redesign:** This is one of your strongest product-impact bullets. Keep it, but clarify the comparison period or baseline and whether the 2,300 merchants are the pilot population. Check for overlap with the duplicated practicum bullet noted below.

## Crestline Logistics

- **Late deliveries:** Change this bullet’s substance. Excluding weather-delayed shipments from the on-time calculation does not show that fewer shipments arrived late, and it could look like metric manipulation. Report an operational change and its effect on actual delivery performance, or clearly separate a change in reporting methodology from a real performance improvement.
- **Pick errors:** Strong operational result with clear collaboration and scale. Clarify the measurement period and whether “30%” is a relative reduction or a percentage-point change.
- **S&OP review:** The verb tense is inconsistent with the rest of this past role: “coordinated” is past tense, while “prepares” is present tense. Also, the bullet describes recurring responsibilities but not their result. Add scope or impact if you can substantiate it, and consider spelling out “S&OP” for readers outside operations.
- **Route-planning tool:** Good evidence of rollout, training, and quantified impact. Clarify whether the 1,800 annual hours are measured or projected savings, and how the figure was calculated.

## Projects

### Campus Food Rescue App

- **Launch and food redistribution:** Strong scale and impact. Clarify the time period represented by “in its first year” and ensure the 9-tonne figure means food actually redistributed, not merely made available. Use consistent U.S. spelling throughout the résumé.
- **Pickup reminders:** The interview research and user growth make this a strong product bullet. State or clarify the exact comparison period, and be careful not to imply reminders alone caused the increase unless your evidence supports that.
- **Volunteer shifts:** The result is useful, but specify the period for the 95% fill rate and confirm that the staff-cover reduction is clearly stated as a weekly figure. This also starts with “Launched,” as another bullet does; reduce repeated lead verbs across the résumé.

### MBA Consulting Practicum

- **Weekly working sessions:** This currently describes an activity, not an outcome. Clarify what you contributed or produced and the scope of the scheduling work. If you led the sessions, make that role clear.
- **Patient intake mapping:** The passive construction obscures who did the work, and “the changes were adopted” doesn’t indicate how broadly or what improved. Clarify your contribution, the adoption scope, and any measurable result you can support.
- **Merchant first-payment bullet:** Delete it. It is unrelated to a hospital-network practicum, duplicates the Harbor onboarding result, and uses a different description of the merchant population. If it reflects genuine work, it belongs under the relevant role and should not repeat an existing result.

## Skills and consistency

- **Product skills:** These are relevant but broad. Keep only skills you can discuss credibly in an interview. In particular, make sure your experience supports the A/B-testing claim; the opt-in comparison described above is not, by itself, evidence of a controlled A/B test.
- **Tools:** Keep tools you can use confidently. Add other relevant tools only if you genuinely have proficiency; don’t add them just to fill the section.
- **Spelling:** Use U.S. English consistently for a U.S.-based résumé; for example, the résumé currently mixes U.S. context with British spellings.
- **Formatting:** Standardize date ranges, punctuation, capitalization, and number formatting across entries. Keep the résumé focused on verifiable outcomes, with enough context for readers to understand the scale and basis of each metric.


---

# case-3

## Résumé

```
Morgan Patel
+1 (555) 010-4410 | morgan.patel@example.com | example.com/code/mpatel
EDUCATION
Ridgeway University | Ph.D. candidate in Statistics | Metro City, USA | Sep 2021 - Expected May 2026
Ridgeway University | B.S. in Mathematics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present
- Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly
labour budget.
- Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.
Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025
- Built a short-horizon order-book imbalance signal for liquid index futures that raised the desk
book’s Sharpe ratio from 1.1 to 1.5 over 18 months of out-of-sample backtest after costs.
- Cut the signal’s daily turnover from 34% to 21% with a cost-aware position smoother, keeping 90%
of gross returns and lowering estimated slippage by a third.
- Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests
across the 30 indices.
- Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and
versioning each schema, built a feature store the team reused in two later projects.
- Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the
desk.
- Documented the backtest assumptions, transaction-cost model and known failure regimes in the
desk’s research wiki, which the next intern cohort used to onboard in their first week.
Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021
- Built the lab’s simulation pipeline on the shared cluster, cutting a 2,000-run Monte Carlo study
from 3 days to 5 hours, with every run reproducible from its seed and configuration file.
- Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound
by a log factor and is now Section 3 of a paper under review at JASA.
- Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and
earning a 4.8/5 teaching rating.
- Released an open-source R package for high-dimensional covariance estimation while maintaining the
lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was
downloaded 3,000 times in its first year.
PROJECTS
Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present
- Beat a HAR-RV baseline’s out-of-sample QLIKE loss by 7% on 30 equity indices with a temporal
convolutional model trained on realized-volatility features.
- Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features
and an asymmetric loss.
- Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a
temporal convolutional model.
Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023
- Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing
in the top 2% of the private leaderboard.
- Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local
validation and leaderboard scores.
- Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate
features to 300 without losing validation score.
SKILLS
Programming: Python, R, PyTorch, Kafka
Methods: time-series econometircs, high-dimensional statistics, gradient boosting
```

## Reviewer 1

## Overall assessment

The resume has a strong quantitative-research profile: a Statistics Ph.D., a quant internship, research experience, and results-heavy projects. Its main weakness is **credibility risk**: one Sharpe-ratio calculation is wrong, several results need clearer definitions, and the forecasting project repeats overlapping claims with inconsistent arithmetic.

**Fit verdict: risky fit for quantitative research roles as written.** The background looks relevant, but the Sharpe annualization error could undermine confidence in the other metrics. There’s no target job description here, so I can’t assess role-specific fit.

## Highest-priority changes

1. **Correct or remove the Sharpe annualization claim.** A daily Sharpe ratio is generally annualized using the square root of the number of trading days, not by multiplying by 252. The current claim is mathematically incorrect.
2. **Reconcile the forecasting metrics.** A change from 0.20 to 0.15 is a 25% reduction, not 33%. Also clarify whether QLIKE loss and “forecast error” are separate measures.
3. **Clarify what was actually backtested versus used by the desk.** Some wording could be read as describing real trading performance, while the stated evidence is an out-of-sample backtest.
4. **Reduce duplication in the volatility project.** Three bullets describe similar results from the same model and dataset; distinguish their contributions or remove redundant claims.
5. **Make each metric auditable.** Define the evaluation period, comparison, metric, and relevant implementation details where they’re not already clear.

## Section-by-section review

### Header

- **Phone, email, and portfolio link:** If these are placeholders used to anonymize the resume, no change is needed. If they are literal, replace them with working contact details and a portfolio link that resolves.
- **Portfolio link:** Make sure it points to work relevant to the roles you’re targeting and that any linked code or results are accessible.

### Education

- **Ph.D. candidate in Statistics:** Add a research area or dissertation topic if it directly supports the roles you’re applying for. The expected graduation date is useful; keep it current.
- **B.S. in Mathematics:** This is clear. Consider adding honors, GPA, or notable coursework only if it strengthens your candidacy and is accurate.

### Sunrise Bakery — Assistant Store Manager

- **Managed opening shifts and a team of 6…:** Clarify whether this is full-time, part-time, or otherwise concurrent with your Ph.D. role. That will prevent readers from having to guess how the dates fit together. The labor-budget result is less specific than your other metrics, so include a measurable outcome only if you can substantiate one.
- **Ran daily stock counts…:** The reduction from 12% to 7% is concrete. Clarify how “unsold bread” is calculated and over what period, if you can do so briefly. For quant-focused applications, consider whether this role needs both bullets; it may take space from more relevant research.

### Northpeak Capital — Quantitative Research Intern

- **Order-book imbalance signal / Sharpe ratio:** Clarify whether the Sharpe ratios are annualized, what “desk book” refers to, and whether this was a simulated strategy or part of a live portfolio. Define the comparison period and enough of the backtest setup to make the result interpretable.
- **Turnover / gross returns / slippage:** Specify how turnover and slippage were measured or estimated, and what the 90% refers to. Make clear whether the slippage change is a modeled estimate or an observed trading result.
- **Diebold–Mariano tests:** State what forecast loss or error the tests compare and how you handled testing across 30 indices. Without that context, “standard” does not tell a reader how robust the result is; multiple comparisons may also matter.
- **120 microstructure features / feature store:** The opening construction makes this bullet difficult to parse. Clarify the feature-joining work, the point-in-time safeguards, and what “reused in two later projects” means. Keep the reuse claim only if you can explain who used it and what they reused.
- **Daily Sharpe multiplied by 252:** Correct the annualization method or remove this claim. As written, it is mathematically wrong and is the most serious credibility issue in the resume.
- **Research wiki / onboarding:** This is a useful documentation and handoff contribution, but clarify your specific contribution and the basis for the “first week” onboarding claim. If space is tight, prioritize research results and technical contributions over this bullet.

### Ridgeway University — Research Assistant

- **Simulation pipeline:** The runtime reduction and reproducibility detail are strong. If possible, add enough context to show what changed technically or what the 2,000-run study involved; otherwise the scale of the result is hard to assess.
- **Variance bound / paper under review:** Clarify your contribution to the proof and your authorship or coauthorship role. Also identify the paper’s current status precisely; “under review” can become outdated and should be updated as needed.
- **Teaching recitations:** This is clear and quantified. For research-focused applications, consider whether the problem-set count and teaching rating are worth the space relative to research details; include the rating only if you can explain its source and sample size.
- **R package / cluster / reading group / grading:** This combines several distinct responsibilities, making your contribution to the package and its adoption unclear. Separate or prioritize the accomplishments, and be ready to substantiate the download count and explain what the download metric measures.

### Projects

#### Volatility Forecasting Study

- **QLIKE result:** Define the evaluation setup and comparison precisely enough that a reader can distinguish this result from the other forecast metrics below.
- **0.20 to 0.15 / 33% improvement:** Resolve the arithmetic: those values imply a 25% reduction. Also state what “forecast error” measures and ensure it is distinct from QLIKE if both results are accurate.
- **Directional hit rate:** This overlaps with the preceding model-performance bullets. Keep it only if it adds a distinct, relevant result, and clarify how the directional target and test period were defined.
- **Across the project:** These bullets repeatedly mention a temporal convolutional model, realized-volatility features, and 30 indices. Avoid repeating the same setup; make sure each retained result represents a distinct contribution. Clarify whether the project overlaps with the Northpeak internship work.

#### Kaggle Market Prediction Competition

- **41st of 2,900 / top 2%:** These claims appear consistent, but specify whether the rank is from the official final private leaderboard. Keep team attribution clear.
- **“Cut validation leakage” / 0.02 gap:** A smaller gap between local validation and leaderboard scores does not by itself establish that leakage was reduced. Use that claim only if you can explain what leakage existed and how the validation change addressed it.
- **Permutation importance / 900 to 300 features:** Clarify whether feature selection was performed without using the final test set or leaking validation information. This is especially important because feature selection based on validation performance can itself bias results.

### Skills

- **“time-series econometircs”:** Correct the spelling.
- **Programming list:** Keep Kafka only if you have enough hands-on experience to discuss it; it currently has no supporting example elsewhere in the resume.
- **Methods list:** The methods are relevant but broad. Add specific methods or tools only if they are accurate and useful for your target roles; avoid listing skills you would not be comfortable defending in an interview.

## Reviewer 2

Your strongest material is the Northpeak research and the quantified research results. Before polishing, fix the **three claims that could undermine credibility**: the Sharpe annualization, the Diebold–Mariano test, and the forecast-error percentage. I’m assuming you’re targeting quant-research roles; if not, the ordering advice may differ.

### Header and education
- **Contact line:** Check that the code URL resolves to work you want employers to see. Otherwise, remove it.
- **Ph.D.:** Keep the expected completion date, but ensure it still reflects your current plan. The education entries otherwise need no substantive change.

### Experience
**Sunrise Bakery**
- **Opening shifts/team:** Keep the leadership evidence. If applying to quant roles, shorten this entry before cutting technical detail elsewhere; its relevance is management, not research.
- **Unsold bread:** Keep the before-and-after measure. Specify the period over which it fell if that makes the result more credible.
- **Placement:** Put Northpeak ahead of Sunrise for quant applications, or otherwise make the technical experience easier to find first.

**Northpeak Capital**
- **Sharpe 1.1 to 1.5:** Clarify whether this is the *desk book’s* Sharpe or the tested strategy’s, and how a backtested signal was incorporated into the book. That distinction matters more than the size of the result.
- **Turnover/slippage:** Keep the trade-off between lower costs and retained returns. Check that turnover, returns, and slippage all use clearly defined, consistent measurement periods.
- **Diebold–Mariano tests:** Recheck the statistical claim. Standard DM testing may not be appropriate if the models are nested; say only what the test design supports.
- **Feature store:** Change the opening construction: “Joining … built” currently makes the action, rather than you, the subject. Keep the point-in-time handling and later reuse; they show research and engineering value.
- **Sharpe annualization:** Correct this and verify what was reported to the desk. Under the usual assumptions, daily Sharpe is annualized by multiplying by **√252**, not 252. Because this says the incorrect figure was reported, treat it as a factual issue, not a wording fix.
- **Documentation:** Keep it if space allows. The onboarding use makes otherwise routine documentation meaningful.

**Statistical Learning Lab**
- **Simulation pipeline:** Keep the runtime reduction and reproducibility detail.
- **Variance bound:** Keep the contribution, but verify the paper’s current review status and make your individual contribution unmistakable.
- **Teaching:** Keep if teaching or communication is relevant; it is a candidate to shorten for a research-focused one-page resume.
- **R package/other duties:** Separate or cut the cluster, reading-group, and grading duties. They bury the package and its 3,000-download result in an overfull bullet.

### Projects
**Volatility Forecasting Study**
- **QLIKE:** Keep the baseline comparison, and identify the out-of-sample evaluation period or split if space permits.
- **Error 0.20 to 0.15:** Correct the arithmetic: that is a **25% reduction** relative to 0.20, not 33%. Identify the error metric, and distinguish this result from the QLIKE result.
- **Hit rate 52% to 58%:** Call this a **6-percentage-point** increase, not an unqualified 6% increase. Consider cutting this bullet if it repeats the same model setup without adding an independently important outcome.

**Kaggle competition**
- **Placement:** Keep; the private-leaderboard rank is clear evidence of performance.
- **Leakage:** Keep, but be precise about what was leaking and whether the time-grouped folds addressed it. “Closed a gap” alone does not establish that leakage was eliminated.
- **Feature selection:** Keep if you have room; it shows your own contribution within the team.

### Skills
- **Methods:** Fix the typo in “economit rcs.” Retain only methods you could discuss confidently in an interview.
- **Programming:** Reconsider whether Kafka belongs under “Programming”; categorize it accurately, and keep it only if you have meaningful hands-on experience.

## Reviewer 3

## Overall

The strongest material is the quant research, statistical work, and concrete outcomes. The main things to address are **one important calculation error, several ambiguous or overstated metrics, redundant project bullets, and a few overloaded or awkward bullets**. For quant roles, make sure readers can tell which results are from backtests, which are forecast evaluations, and which were used in live trading.

## Header and education

- **Contact line:** Check that the code link goes directly to a relevant, polished portfolio or repository. If you have a LinkedIn profile that supports your candidacy, include it; don’t add one just to fill space.
- **Ph.D. entry:** The expected completion date is useful. Consider adding a concise research focus if it directly supports the roles you’re targeting; it would help connect the degree to the experience below.
- **Education dates:** The dates are clear and consistent. The research assistant role begins shortly after the B.S.; that is not a problem, but be prepared to explain the transition if asked.

## Experience

### Sunrise Bakery

- **Opening-shifts/team/budget bullet:** “Managed” and “keeping the store within its weekly labour budget” leave the scope and result somewhat unclear. Clarify your responsibility for the team and budget, and use the spelling convention consistent with the jobs you’re targeting.
- **Stock-counts/supplier-orders bullet:** The reduction from 12% to 7% is strong, but clarify what “unsold bread” measures and over what period. That helps readers judge the size and reliability of the result.
- **Role relevance:** This is your current role, so keeping it may make sense. If you’re applying to quant research positions, consider whether it should take less space than the directly relevant research experience.

### Northpeak Capital

- **Sharpe improvement bullet:** Clarify whether both Sharpe ratios are annualized, what “the desk book” refers to, and whether the result is solely attributable to your signal. Also make clear that this is a backtest result rather than a live-trading result.
- **Turnover/slippage bullet:** Define the turnover measure and the comparison used for “keeping 90% of gross returns.” The relationship among gross returns, costs, and estimated slippage is currently hard to interpret.
- **Diebold–Mariano test bullet:** State what forecast loss or measure was tested and how you handled the fact that you tested across 30 indices. Because HAR-RV is described as a nested baseline, verify that the test procedure is appropriate for nested models; simply calling the tests “standard” may invite methodological questions.
- **Feature-store bullet:** The opening construction is grammatically awkward: the “Joining…” phrase does not attach cleanly to the subject that follows. Also clarify what the feature store enabled or improved, if you can support that with a specific result.
- **Annualized-Sharpe bullet:** **Correct or remove this.** Annualizing a daily Sharpe ratio generally uses the square root of 252, not 252, subject to the assumptions behind that annualization. As written, the calculation is wrong and could undermine confidence in the other quantitative claims. It also reads as a calculation step rather than an achievement.
- **Research-wiki bullet:** The documentation and handoff are useful, but the final clause is awkward and unclear about how the next cohort used it. Make the adoption or onboarding benefit more concrete if possible.

### Ridgeway University research assistant role

- **Simulation-pipeline bullet:** Strong, measurable impact. If space permits, add context that helps readers assess the comparison, such as the computing setup or what changed to produce the speedup. Keep the reproducibility detail.
- **Variance-bound bullet:** “My proof” is more personal than the rest of the resume, and “tightens the previous bound by a log factor” may be too vague for a technical reader. Clarify the comparison and describe the paper’s status precisely; under review is not the same as accepted or published.
- **Teaching bullet:** This is clear and quantified. If the rating is based on a small number of responses, give enough context to avoid making the score seem more definitive than it is.
- **Open-source package/other duties bullet:** This combines the package release, cluster maintenance, reading-group organization, grading, and download count. Separate the package result from unrelated duties or remove lower-priority details. Make clear that the downloads refer to the package, and include its name or a link if useful.

## Projects

### Volatility Forecasting Study

- **QLIKE bullet:** Useful result, but clarify the evaluation setup enough to distinguish it from the Northpeak HAR-RV comparison. The same baseline and 30-index scope appear elsewhere, so readers may wonder whether these are separate studies or repeated results.
- **Forecast-error bullet:** The arithmetic does not match the stated percentage: a reduction from 0.20 to 0.15 is a **25% reduction** using 0.20 as the starting value, not 33%. Also identify the error measure and confirm the comparison isolates the effect of the added features and loss function.
- **Directional-hit-rate bullet:** A change from 52% to 58% is **six percentage points**, not a 6% increase. This also repeats the same model and index set from the first bullet. Keep it only if it adds a distinct evaluation result, and make the relationship among the three bullets clear.

### Kaggle competition

- **Placement bullet:** The rank and top-2% claim are consistent. Make sure the placement refers to the final/private leaderboard if that is what you mean.
- **Validation-leakage bullet:** Explain what caused the leakage or score gap. Switching to time-grouped folds may have made validation more representative rather than directly “cutting” leakage; distinguish those claims.
- **Feature-selection bullet:** This is a useful technical contribution. “Without losing validation score” could be more informative if you can state the measure or show that the result held on a genuinely separate evaluation set.

## Skills

- **Methods line:** Correct the typo in “econometircs.”
- **Skills content:** The listed tools and methods are relevant, but consider whether each is supported by the experience shown. Add other role-relevant tools only if you can substantiate them; avoid adding skills simply to make the list longer.

## Reviewer 4

# Resume review

Your strongest evidence is the quantitative research internship: it has relevant methods, out-of-sample results, and financial-impact metrics. The biggest priorities are to **remove or correct one mathematically incorrect claim, resolve a grammatical error, clarify how several results were measured, and trim repeated or overloaded bullets**. I’ll describe changes rather than rewrite your lines.

## Contact and structure

- **Make the code link’s destination and purpose clear.** The current URL doesn’t indicate whether it leads to GitHub, a portfolio, or something else. For quant research roles, a directly accessible repository or research portfolio can help substantiate your technical work.
- **Consider adding LinkedIn if you use it professionally.** It’s optional, but makes it easier for recruiters to verify your background.
- **Move Skills higher, likely after Education.** Your current list is short, but Python, R, and quantitative methods are important screening terms. Earlier placement makes them easier to find.
- **Consider removing the repeated work locations.** All roles list the same city, so those entries use space without adding much information. Keep location details if they clarify remote, international, or otherwise relevant experience.
- **A summary is optional.** If you add one, use it to establish your target—such as quantitative research—rather than repeat experience already shown below. You don’t need one if space is tight.

## Education

- **Keep the Ph.D. candidate entry prominent.** It is directly relevant to quantitative research and helps explain the statistical depth of your experience.
- **Add a dissertation or research focus only if it is relevant and concise.** This can help connect your doctoral work to market forecasting, statistical learning, or the particular roles you’re targeting.
- **Include GPA or selected coursework only if they strengthen your application.** They’re not necessary given your research and internship experience.

## Experience

### Sunrise Bakery — Assistant Store Manager

- **Keep the role, but make its relevance to your target clear through the results already present.** Team leadership, budgeting, and inventory control are transferable, but the role is less relevant than your quant work; avoid letting it take disproportionate space.
- **For the opening-shift and team bullet, clarify the result of staying within budget.** The current wording shows responsibility but not whether you met a target, avoided overspend, or improved on a prior result. Add a measurable outcome only if you can support it.
- **For the unsold-bread bullet, define the comparison period or measurement basis if it isn’t obvious elsewhere.** The reduction is useful, but readers may wonder whether the percentages are of units produced, sales, or another measure.

### Northpeak Capital — Quantitative Research Intern

- **For the Sharpe-ratio bullet, specify the basis of comparison and the result’s scope.** Clarify what “desk book” refers to in this context, whether the reported ratios are annualized, and how the signal’s contribution was isolated from the rest of the book. This makes a strong result easier to assess.
- **For the turnover and slippage bullet, make the metrics unambiguous.** Define how turnover was calculated and what “keeping 90% of gross returns” compares against. Also clarify whether the slippage reduction is an estimate from the same cost model used in the backtest.
- **For the Diebold–Mariano test bullet, report enough detail to support the inference.** Consider including the relevant significance result and clarifying the forecast target and horizon. Since you describe the baseline as nested, verify that the chosen test is appropriate for the nested comparison; standard Diebold–Mariano testing may not be the right procedure in that setting. Also consider whether testing across 30 indices requires addressing multiple comparisons.
- **Fix the feature-store bullet’s grammatical construction.** As written, it starts with a participle that doesn’t connect cleanly to the main clause, making it unclear who built the store. The bullet also combines data integration, data-quality work, schema versioning, and later reuse; prioritize the core contribution and make the reuse claim concrete if you can.
- **Remove or correct the Sharpe annualization bullet before applying.** Multiplying a daily Sharpe ratio by 252 is not the standard annualization method; under the usual independent-return assumption, the factor is the square root of 252. More importantly, this bullet describes a reporting calculation rather than a research achievement. As written, it could undermine confidence in the financial math elsewhere on the resume.
- **For the documentation bullet, keep the onboarding result only if you can substantiate it.** The documentation itself is useful evidence of research communication and handoff, but the claim about the next cohort’s onboarding would be stronger with a specific, verifiable effect. Otherwise, prioritize more technical work.

### Ridgeway University — Research Assistant

- **For the simulation-pipeline bullet, retain the before-and-after runtime and reproducibility detail.** This is one of your clearest engineering-impact bullets. If space allows, name the tools or cluster environment you used, but only if they’re relevant and accurate.
- **For the variance-bound bullet, clarify your individual contribution and the paper’s status.** The technical result is valuable, but readers may not know what “tightens the previous bound by a log factor” means. Keep the result precise and make sure the manuscript status remains current.
- **For the teaching bullet, keep the audience and rating only if the rating has context.** A 4.8/5 rating is useful, but readers may wonder how many responses it reflects or what it measures. The problem-set count is secondary if you need space.
- **Split or substantially narrow the final lab bullet.** It currently bundles a package release, cluster maintenance, reading-group organization, grading, and download counts. The download figure appears to describe the package, but the sentence structure makes that unclear. Keep the strongest, most relevant achievements together only when their relationship is clear; otherwise prioritize the package and its adoption, and shorten or remove routine duties.

## Projects

### Volatility Forecasting Study

- **Reduce the overlap among the three bullets.** They all describe results from a temporal convolutional volatility model on 30 equity indices. Keep the distinct outcomes that matter most, and make clear whether they come from the same experiment.
- **Clarify that the 7% QLIKE result and the 33% forecast-error result use different evaluation metrics.** Without that distinction, the bullets can look inconsistent or repetitive. State the relevant metric, evaluation setup, and comparison for each result.
- **Reconsider the directional-hit-rate result or explain why it matters.** Directional accuracy is not an obvious primary metric for volatility forecasting. If it reflects a defined prediction task with practical relevance, make that clear; otherwise, prioritize metrics more directly tied to volatility forecast quality.
- **Avoid repeating technical details without adding information.** The model type and dataset recur across the bullets; use the limited space to distinguish the experiments or results instead.

### Kaggle Market Prediction Competition

- **Keep the placement and private-leaderboard result.** They provide a clear, externally verifiable outcome.
- **For the leakage bullet, explain the evaluation context and what the 0.02 gap represents.** The point is important, but the score scale and the effect of the change are not defined.
- **For the feature-selection bullet, clarify what “without losing validation score” means.** Specify whether the score was unchanged within a tolerance or merely similar, and ensure the validation method is consistent with your leakage-prevention bullet.

## Skills

- **Correct the spelling error in “econometircs.”** A misspelling in a skills list can hurt both credibility and keyword matching.
- **Reorganize the categories.** PyTorch is a framework/library and Kafka is a data-streaming technology, not programming languages. Group tools and technologies under accurate, searchable headings.
- **Add relevant tools or methods only if you can discuss them in an interview.** Your experience suggests there may be useful skills to list—such as SQL, data-processing libraries, version control, or backtesting tools—but don’t add any unless you’ve actually used them and can describe that work.
- **Be precise with broad method labels.** “Time-series econometrics” and “high-dimensional statistics” are relevant, but consider listing more specific methods only where they accurately reflect your work and match the roles you’re pursuing.

## Highest-priority fixes

1. Correct or remove the daily Sharpe annualization bullet.
2. Fix the grammar and clarify the contribution in the feature-store bullet.
3. Clarify the testing approach and statistical evidence behind the internship’s forecast comparison.
4. Reduce repetition in the volatility project and clarify how its metrics differ.
5. Correct and reorganize the Skills section.

## Reviewer 5

5 errors, 14 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sunrise Bakery | Assistant Store Manager

**Problem**
[Important] The first, current experience frames the page around retail rather than quantitative research.

**Why**
Sunrise Bakery appears before the quantitative research experience and projects, so it can shape a reader’s first impression of the resume. Keeping it to one line limits that emphasis while retaining the current role; if space is tight, the finding allows cutting it.

**How to change it**
Shorten the entry to one line by retaining its stock-count result; if space is tight, cut the entry.

## Sunrise Bakery | Assistant Store Manager | Metro City, USA | Sep 2025 - Present

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.

**Problem**
[Important] The labour-budget result does not say how performance compared with the budget.

**Why**
A reader cannot tell whether the store barely met its target or stayed comfortably under it. One actual budget variance would make the outcome more concrete.

**How to change it**
Replace “within its weekly labour budget” with [weekly labour cost or variance compared with the budget], if you have a meaningful figure to share.

> Managed opening shifts and a team of 6 bakers and cashiers, keeping the store within its weekly labour budget.
> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Polish] The current role uses past tense in both bullets.

> Ran daily stock counts and supplier orders, cutting unsold bread from 12% to 7% of production.

**Problem**
[Important] The stronger stock-count result should open the entry.

**Why**
The reduction in unsold bread from 12% to 7% is the most concrete outcome in this entry. Leading with it would give a reader the result before the less specific labour-budget claim.

**How to change it**
Move the stock-count bullet above the opening-shifts bullet.

## Northpeak Capital | Quantitative Research Intern | Metro City, USA | Jun 2025 - Aug 2025

> Confirmed the forecast gain over the nested HAR-RV baseline with standard Diebold-Mariano tests across the 30 indices.

**Problem**
[Important] “Forecast gain” does not identify what improved or by how much.

**Why**
A reader can see that the result was tested against a baseline, but cannot tell what forecast metric improved or the size of the improvement. That makes the tested result hard to assess on a quick scan.

**How to change it**
Replace “forecast gain” with [forecast metric and improvement versus HAR-RV], if accurate.

> Joining 120 microstructure features point-in-time across six venues, deduplicating late prints and versioning each schema, built a feature store the team reused in two later projects.

**Problem**
1. [Error] “Joining” is the wrong form for the completed action and leaves the sentence without a grammatical main verb before “built.”
2. [Important] The long methods list delays the feature-store result.

**Why**
1. The opening participle does not connect grammatically to the sentence’s main action. A reader has to work through the methods list before reaching “built” to understand what you did.
2. The reader encounters several implementation details before learning that you built a feature store reused in two later projects. That delays the clearest outcome in the bullet.

**How to change it**
1. Replace “Joining” with “Joined” and restructure the opening so “built” is the main verb.
2. Move the feature-store result to the beginning of the bullet, then place the methods after it.

> Annualized the signal’s daily Sharpe ratio by multiplying it by 252 before reporting it to the desk.

**Problem**
1. [Error] The Sharpe annualization calculation is incorrect under the standard convention.
2. [Important] The annualization clause is redundant and does not give a meaningful result.
3. [Polish] The reporting destination is given without saying what the annualized figure enabled or changed.

**Why**
1. A daily Sharpe ratio is annualized by multiplying by the square root of 252, not by 252. Multiplying by 252 substantially overstates the annualized ratio.
2. “Annualized” already tells the reader that the measure was converted to an annual basis, so the multiplication clause adds no useful meaning. The bullet then ends with the reporting destination rather than the value of the work.

**How to change it**
1. If using the standard convention, replace “multiplying it by 252” with “multiplying it by √252”; otherwise report the method actually used.
2. If the convention is not needed here, cut “by multiplying it by 252”; otherwise state the correct convention as noted above.

> Documented the backtest assumptions, transaction-cost model and known failure regimes in the desk’s research wiki, which the next intern cohort used to onboard in their first week.

**Problem**
[Important] The onboarding result comes after a long description instead of leading the bullet.

**Why**
The reader must first process the documentation list before seeing that the next intern cohort used it to onboard in their first week. Bringing that result forward makes the bullet’s impact easier to scan.

**How to change it**
Move the onboarding result to the beginning of the bullet and follow it with the documentation details.

## Ridgeway University | Research Assistant, Statistical Learning Lab | Metro City, USA | Jun 2020 - Aug 2021

> Derived a variance bound for a sparse regression estimator; my proof tightens the previous bound by a log factor and is now Section 3 of a paper under review at JASA.

**Problem**
1. [Important] The variance-bound contribution should open the entry.
2. [Important] “The previous bound” does not identify the result used for comparison.
3. [Polish] The bullet uses a first-person pronoun.

**Why**
1. The bound, its improvement over prior work, and its place in a paper under review at JASA make this the strongest research result in the entry. Opening with it gives that contribution priority over the teaching and lab-operations material.
2. The log-factor improvement is key evidence for the contribution, but a reader cannot judge its context without knowing which prior bound it improves. An identifier for that result would make the comparison more interpretable.

**How to change it**
1. Move this bullet above the simulation-pipeline bullet.
2. Replace “the previous bound” with [a concise identifier for the relevant prior bound or result], if accurate.

> Taught weekly recitations for 60 students in graduate probability, writing 12 problem sets and earning a 4.8/5 teaching rating.

**Problem**
[Polish] The teaching rating lacks a response count.

> Released an open-source R package for high-dimensional covariance estimation while maintaining the lab’s shared cluster, organizing the weekly reading group and grading for two courses, which was downloaded 3,000 times in its first year.

**Problem**
1. [Important] The package result is buried in a long sentence, and “which” has an unclear referent.
2. [Polish] The download count does not show what users gained from the package.
3. The package description names its domain but not how it performs covariance estimation.

**Why**
1. The package release and download result are separated by several service tasks. The closing “which” can also appear to refer to those tasks rather than to the package.
3. “High-dimensional covariance estimation” tells a reader the field the package addresses, but not what it does to carry out the estimation. A specific capability or method would make the package’s technical contribution clearer.

**How to change it**
1. Move the package and download result together before the service tasks, and remove “which” by attaching the count directly to the package.
3. Replace the domain-only description with [the specific estimation method or capability], if accurate.

> while maintaining the lab’s shared cluster

**Problem**
[Polish] The entry’s final bullet bundles the package release with several unrelated service tasks.

## Volatility Forecasting Study | Independent Research | Python, PyTorch | Jan 2024 - Present

> Cut forecast error from 0.20 to 0.15, a 33% improvement, by adding realized-volatility features and an asymmetric loss.

**Problem**
1. [Error] The reduction from 0.20 to 0.15 is a 25% reduction, not a 33% improvement.
2. [Important] The line does not name the forecast-error metric.

**Why**
1. The decrease is 0.05, which is 25% of the original 0.20 error. The stated 33% figure is arithmetically inconsistent with the before-and-after values.
2. Without the metric, a reader cannot interpret what the values measure or compare them with other forecasting results. Naming it would make the reported change more useful.

**How to change it**
1. Replace “a 33% improvement” with “a 25% reduction in forecast error.”
2. Replace “forecast error” with [name of error metric].

> Improved the model’s directional hit rate by 6% on 30 equity indices, from 52% to 58%, with a temporal convolutional model.

**Problem**
[Error] The hit-rate change is 6 percentage points, not 6%.

**Why**
The listed rates rise from 52% to 58%, an absolute difference of six percentage points. Calling that a 6% increase can be read as a relative increase and misstates the result.

**How to change it**
Replace “by 6%” with “by 6 percentage points.”

## Kaggle Market Prediction Competition | Team of 3 | Python | Mar 2023 - Jun 2023

> Placed 41st of 2,900 teams with a gradient-boosting ensemble on 300 engineered features, finishing in the top 2% of the private leaderboard.

**Problem**
[Important] The bullet states the same ranking twice.

**Why**
“41st of 2,900 teams” and “top 2%” communicate the same placement. Repeating the result takes space that could be used for other information.

**How to change it**
Keep either the exact placement or the top-2% description, and remove the other.

> Cut validation leakage by switching to time-grouped folds, which closed a 0.02 gap between local validation and leaderboard scores.

**Problem**
1. [Important] The 0.02 score gap lacks its metric and whether it is absolute or relative.
2. [Important] The outcome is delayed until after the method and a “which” clause.

**Why**
1. Without that context, a reader cannot interpret the size of the change or compare it with other results. Naming the metric and scale would make the measurement more useful.
2. A reader must pass through the method before reaching the result of closing the score gap. Leading with the outcome would make the impact quicker to scan.

**How to change it**
1. Add [score metric] and clarify whether 0.02 is an absolute or relative difference, if accurate.
2. Move the outcome before the time-grouped-fold method.

> Wrote the team’s feature-selection script using permutation importance, trimming 900 candidate features to 300 without losing validation score.

**Problem**
[Polish] “The team’s” does not clarify your individual contribution and is unnecessary.

## Skills

> econometircs

**Problem**
[Error] “Econometircs” is misspelled in the Methods skills line.

**Why**
A spelling error in the skills section can distract a reader and weaken the impression of care in the application. The intended term is clear from the finding.

**How to change it**
Correct “econometircs” to “econometrics.”

## What already works

- “Built a short-horizon order-book imbalance signal…”: Pairs a concrete performance result with a clear baseline.
- “Built the lab’s simulation pipeline on…”: Pairs a concrete runtime improvement with the study size and a clear reproducibility practice.

## Reviewer 6

## Overall assessment

The resume has strong evidence for quantitative research: a research internship with backtesting and transaction-cost work, statistical research, reproducible computing, and competitive project results. The main things to fix are **technical accuracy, overlapping claims, and clarity about what you personally did**—not a lack of accomplishments.

I’m treating this as a general review. The content points most strongly toward quantitative research roles, but the best ordering depends on your target. Since you provided pasted text, I can assess content and reading order only—not the original document’s layout or how it extracts from a file.

## Fix these first

1. **Correct the Sharpe-ratio annualization claim.** Multiplying a daily Sharpe ratio by 252 is not the usual annualization; under common assumptions, the factor is the square root of 252. Recheck the calculation and any reported Sharpe figures that depend on it before keeping this claim.
2. **Resolve the forecast-error arithmetic.** A reduction from 0.20 to 0.15 is 25% relative to 0.20, not 33%. Check whether the stated values, percentage, or definition of “improvement” is wrong.
3. **Remove or distinguish repeated project claims.** The forecasting project repeats the same model and 30-index evaluation across three bullets, and it overlaps with the internship’s HAR-RV comparison. Make clear which work is independent and keep only results that add distinct evidence.
4. **Clarify how strong the statistical and performance claims are.** Specify the comparison, evaluation period, metric, and test design where needed. A backtest result or significance test should not imply more certainty or live performance than it supports.
5. **Fix the typo in Skills** and tighten bullets that bundle unrelated responsibilities or make the action and result hard to connect.

## Line-by-line feedback

### Header

- **Phone, email, and code link:** Check that each is current, accessible, and appropriate to share publicly. The link should lead directly to work that supports the technical profile you want to present.

### Education

- **Ph.D. candidate in Statistics:** Keep the expected completion date accurate and update the status once the degree is awarded. If the degree is still in progress, retain wording that makes that clear.
- **B.S. in Mathematics:** This is clear as written. No material content change is needed.

### Experience

**Sunrise Bakery — Assistant Store Manager**

- **Opening shifts, team of six, and labour budget:** Clarify the scope of your responsibility and what “keeping the store within” the budget means. This is useful evidence of operational responsibility, but the outcome is currently broad and difficult to assess. If you are targeting quantitative research, consider giving this role less space than the directly relevant work while retaining it as current employment.
- **Stock counts, supplier orders, and unsold bread falling from 12% to 7%:** Define how unsold bread was measured and over what period. Make sure the comparison supports attributing the change to the work described, rather than implying causation from a before-and-after figure alone.

**Northpeak Capital — Quantitative Research Intern**

- **Order-book imbalance signal and Sharpe increase:** Clarify what the Sharpe ratio refers to (the signal or the desk book), the comparison behind the increase, and whether it is annualized. “Over 18 months of out-of-sample backtest” is important evidence; make sure the evaluation period and after-costs result are stated precisely and are consistent with how the Sharpe was calculated.
- **Turnover reduction and returns retained:** Specify the comparison used for “keeping 90% of gross returns” and how the one-third slippage reduction was estimated. Readers need to know which results are gross, which account for costs, and whether these are backtest estimates.
- **Forecast gain over nested HAR-RV baseline and Diebold–Mariano tests:** Clarify the forecast metric, horizon, and how results across 30 indices were assessed. Because the baseline is described as nested, verify that the test used is appropriate for that comparison. If many index-level tests were run, explain or account for multiple testing before describing the gain as confirmed.
- **“Joining 120 microstructure features…”:** The opening verb is grammatically inconsistent with the past-tense bullets around it. Also clarify your personal contribution, what “late prints” means to the intended audience, and what made the feature store reusable in the later projects.
- **Daily Sharpe annualized by multiplying by 252:** Recheck this calculation before including it. As written, it describes an incorrect standard annualization method and could undermine confidence in the surrounding quantitative work.
- **Backtest documentation and onboarding:** This is useful evidence of communication and research handoff. Clarify what the next cohort used and how you know it helped; otherwise, the claimed onboarding outcome may sound stronger than the evidence provided.

**Ridgeway University — Research Assistant**

- **Simulation pipeline and runtime reduction:** This is a strong, concrete result. If space permits, clarify what the 2,000 runs involved and whether the before-and-after runtimes were measured under comparable conditions.
- **Variance bound and paper under review:** Keep the paper’s status current and make your contribution and the significance of the “log factor” understandable to readers outside the specialty. Avoid letting “under review” read like a publication.
- **Teaching and rating:** The scope is clear. Add context for the 4.8/5 rating—such as the source or response count—if available, so readers can interpret it.
- **Package, cluster, reading group, and grading:** This bullet combines a software release, infrastructure work, and several academic duties, making the package’s result hard to follow. Separate or prioritize the distinct contributions. Clarify the basis for the 3,000-download figure and avoid implying that the download count measures use or impact beyond what it actually does.

### Projects

**Volatility Forecasting Study**

- **QLIKE result:** State enough about the evaluation to make the comparison interpretable, especially the test period and whether the model and baseline used the same data and evaluation setup. Make sure this project is clearly distinct from the internship work if the datasets, baseline, or analyses overlap.
- **Forecast error from 0.20 to 0.15, described as 33%:** Reconcile the numbers and percentage. Also define what “forecast error” measures; as presented, the percentage does not match the stated values under the usual relative-reduction calculation.
- **Directional hit rate from 52% to 58%:** Distinguish a six-percentage-point increase from a relative percentage increase. This also appears to repeat the same model and evaluation population as the QLIKE bullet. Keep it only if it contributes a distinct result, and clarify the metric and test setup.

**Kaggle Market Prediction Competition**

- **41st of 2,900 teams:** This is a clear, specific result; the top-2% description is consistent with the rank. Keep the competition outcome, and make sure the team contribution is represented accurately.
- **Time-grouped folds and “cut validation leakage”:** A smaller validation-to-leaderboard gap does not, by itself, prove leakage was reduced. Clarify what the 0.02 gap measures and what evidence supports calling the original problem leakage.
- **Permutation-importance script and reduction from 900 to 300 features:** This is a useful technical contribution. Clarify how the feature selection was kept separate from validation data; that matters especially given the preceding leakage claim.

### Skills

- **Programming:** Python, R, and PyTorch have supporting examples elsewhere in the resume. Kafka does not. Either add truthful evidence of how you used Kafka or consider whether it belongs in the list; an unsupported skill is not automatically false, but readers cannot assess its depth from this document.
- **Methods:** Correct the misspelling in “time-series econometircs.” The other methods are supported by the experience and projects, though the list alone does not communicate depth; keep it focused on methods you can discuss and substantiate.

## Presentation and targeting

The Experience section is already in reverse chronological order, and Education is prominent—reasonable choices for a quantitative research profile. Before applying, choose a target role and adjust the emphasis accordingly. For a quant-research target, the internship, statistical research, and forecasting evidence should carry more weight than general store operations. Also check all dates and “Present” wording against the version’s actual submission date.


---

# case-4

## Résumé

```
Casey Morgan
+1 (555) 010-7731 | casey.morgan@example.com | example.com/portfolio/cmorgan
EDUCATION
Lakeshore University | B.A. in Cognitive Science | Metro City, USA | Sep 2015 - May 2019
EXPERIENCE
Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025
- Improved dispute-form completion by 40% by splitting the form into three short steps with
saved progress.
- Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1
against every background.
- Built a research repository of 250 tagged session clips that product managers searched
before writing new requirements.
- Presented quarterly findings to the head of product and two design teams; three of the top
five recommended fixes shipped in the next release cycle.
- Validated the redesigned app navigation’s findability with an open card sort of 30 customers
before it shipped.
- Led research on the mobile onboarding flow, testing three prototypes with 24 new customers;
the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.
Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022
- Owned the monthly patient survey and the reporting dashboard the care teams used.
- Interviewed 40 patients about appointment reminders; the findings led to a two-way text
reminder that cut missed appointments from 14% to 9%.
- Wrote the screener and consent templates for all patient studies, cutting study setup time
from two weeks to three days.
- Tested the telehealth waiting-room screens with 16 older patients while also running the
team’s recruiting calendar, updating the style guide, onboarding two interns and taking
notes for the accessibility working group, which cut support calls about joining a video
visit by 30%.
PROJECTS
Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present
- Championed an inclusive, human-centered design approach to transit wayfinding that delivered
meaningful, user-first outcomes.
- Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds
and errors from 11 to 3 across the 12 sessions.
- Published the design files and test protocol openly, and the city’s transit agency invited
the project to its spring accessibility review.
Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023
- Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone
bookings fell by a quarter in the next two months.
- Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues
that stopped first-time users from finishing a booking.
- Tested three onboarding prototypes with 24 new customers and shipped the design that lifted
completed sign-ups by 41% in its first quarter.
SKILLS
Tools: Figma, screen-reader testing (VoiceOver, NVDA), Tableau
Methods: moderated and unmoderated usability testing, interviews, surveys, A/B testing
```

## Reviewer 1

## Highest-priority changes

1. **Correct the accessibility contrast claim.** The stated 3:1 threshold is not sufficient for ordinary body text under WCAG 2.1 AA. It applies to large text; normal text generally requires 4.5:1. Also make clear what parts of the design system were assessed and what “brought … to WCAG 2.1 AA” means.
2. **Investigate the duplicated onboarding bullet in the clinic project.** It closely repeats the Pinegrove bullet’s prototype count, participant count, and sign-up outcome, but places them in a different project and describes a different percentage result. If it is the same work, it should not appear twice; if it is separate, make the distinction clear and verify the figures.
3. **Fix ambiguous metrics and causal claims.** Several results need a clear baseline, denominator, timeframe, or explanation of whether the change is a percentage or percentage-point change.
4. **Replace vague claims with evidence and untangle the overloaded Northwind bullet.** The first transit-project bullet is especially generic, and the final Northwind bullet combines too many responsibilities to show what produced the result.

## Education and experience

### Education
- **Education entry:** This is clear and complete as written. No change is necessary unless you have relevant coursework, honors, or research that strengthens your fit for the roles you’re targeting.

### Pinegrove Financial
- **Dispute-form completion bullet:** Clarify whether “40%” means a relative increase or a 40-percentage-point increase, and give the comparison period or baseline. The redesign is clear, but the metric is currently open to different interpretations.
- **Design-system accessibility bullet:** Correct the contrast threshold: 3:1 is not the AA minimum for ordinary body text. Specify the scope of what you brought into conformance and how you verified it; the current wording makes a broad compliance claim without saying what was tested.
- **Research repository bullet:** Add evidence of the repository’s use or effect, if available. “250 tagged session clips” gives useful scale, but it does not show whether the repository changed research reuse, requirement quality, or team efficiency. Also ensure the description is consistent with participant-consent and access practices for session clips.
- **Quarterly findings bullet:** This is a strong influence-and-shipping result. Clarify what “top five” refers to—the five recommendations, presumably—and whether the three shipped in the next release cycle were among them. That will make the connection easier to follow.
- **Open card sort bullet:** Check that the method matches the claim. An open card sort can reveal how participants group and label content; by itself, it is not a direct test of whether people can find items in a finished navigation. Add the outcome or explain how the findings informed the navigation before launch.
- **Mobile onboarding bullet:** This is one of your strongest experience bullets and should appear nearer the top of this role’s list. Clarify whether the change from 41% to 58% is a 17-percentage-point increase, and give the metric’s denominator and comparison period. Since the result is from after launch, avoid implying the research alone caused it unless you can support that attribution.

### Northwind Health
- **Survey and dashboard bullet:** Add scope or impact if you have it—such as who used the dashboard, how many people it served, or what decisions it supported. As written, it establishes ownership but not why that work mattered.
- **Appointment-reminder bullet:** Clarify whether the decrease from 14% to 9% is in percentage points, and identify the timeframe or comparison basis. The result is compelling; the extra context will make it more credible and interpretable.
- **Screener and consent-template bullet:** This is a useful operational result. Clarify what “study setup time” measures and whether the two-week-to-three-day comparison is typical or based on a specific period. The broad claim that these templates covered all patient studies should be accurate and supportable.
- **Telehealth and multiple-responsibilities bullet:** This is too crowded: it combines testing, recruiting, style-guide maintenance, intern onboarding, and working-group notes, then attaches a support-call reduction to the whole list. Separate the most relevant contributions or trim the less relevant duties, and make clear which change is connected to the 30% reduction. Include the comparison period if available.

## Projects

### Accessible Transit Map
- **Inclusive-design approach bullet:** This is generic and does not say what you did or what changed. Replace the claim with specific research, design, or accessibility work and evidence of its outcome; otherwise, remove it.
- **Timed-task results bullet:** Clarify what “errors” counts and whether the figures are totals, rates, or per-participant measures. Also say enough about how the two measurements were collected to show they are comparable; the 12-session sample is helpful context.
- **Published-files and agency-invitation bullet:** This could be a strong external-validation point. State whether the invitation has already happened or is upcoming, and give the year or status so the timing is clear. Confirm that the openly published materials do not expose participant-identifying information.

### Community Clinic Booking Redesign
- **Booking-flow and phone-booking bullet:** Explain the timeframe and basis for the quarter reduction in phone bookings. Fewer phone bookings could mean more people successfully booked online, but could also reflect reduced access or demand; connect the change to the project’s intended outcome and, if possible, include an overall booking or completion measure.
- **Patient-testing bullet:** This is specific and credible. If available, clarify how the 10 patients were divided between the two rounds and whether fixing the six issues improved task completion or another usability measure.
- **Onboarding-prototype bullet:** Verify this carefully. It appears to duplicate the Pinegrove onboarding work, including the three prototypes and 24 participants, but gives a different sign-up result and places it in the clinic project. If it is duplicated work, remove it here; if it is a separate study, make the project, participants, and metric clearly distinct. “New customers” also seems inconsistent with a clinic-booking project, so check that description.

## Skills and presentation

- **Tools line:** Screen-reader testing is a capability or testing activity, not a tool in the same sense as Figma and Tableau. Organize the items so tools are separated from accessibility-testing skills.
- **Methods line:** Keep only methods you can discuss in detail in an interview. Consider whether the resume demonstrates the listed A/B-testing experience; if not, remove it or make sure there is concrete experience elsewhere to support it.
- **Bullet order:** Within Pinegrove, put the strongest, clearest outcomes closer to the top. The onboarding result currently appears last, while the accessibility claim near the top needs correction.
- **Project prioritization:** The clinic project’s relevant booking outcome and the transit project’s measured usability results are stronger than the generic transit bullet. Lead with the most concrete evidence in each project.
- **Overall:** Your resume has useful quantified outcomes and a clear UX-research focus. The main improvement is not adding more claims; it is tightening the measurement details, correcting the accessibility standard, and ensuring every result is both attributable and attached to the right project.

## Reviewer 2

2 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Education appears before experience despite several years of relevant work.

**Why**
The degree leads the résumé before the roles that establish the candidate’s career direction. Readers may reach the experience section later than needed to understand the candidate’s professional background.

**How to change it**
Move the Education entry below the Experience entries.

> May 2019; Apr 2020

**Problem**
[Polish] The résumé leaves a 10-month gap between the degree and the first listed role unexplained.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Polish] The 40% increase has no starting rate or stated calculation basis.

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] A 3:1 contrast ratio does not meet WCAG 2.1 AA for normal body text.

**Why**
WCAG 2.1 AA requires at least 4.5:1 contrast for normal text; 3:1 applies to large text. As written, the claim that this brought the design system to AA is incorrect.

**How to change it**
Replace “3:1” with “4.5:1” for normal body text; retain 3:1 only for large text.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
1. [Important] The repository’s use is described, but not what that use changed.
2. [Polish] The long relative clause delays the repository’s practical value.

**Why**
1. Readers can see that product managers searched the clips before writing requirements, but cannot tell whether the repository informed a decision or improved the requirements. Without a concrete consequence, its practical value is difficult to judge.

**How to change it**
1. After this phrase, add [one observed decision or outcome the repository informed, if available].

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] The shipped fixes appear after the presentation details, so the result is easy to miss.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort does not validate whether users can find items in a proposed navigation.
2. [Important] The claimed findability validation gives no finding or resulting decision.
3. [Polish] “Findability” is jargon that may slow readers outside UX research.
4. [Polish] “Before it shipped” adds an unnecessary ending.

**Why**
1. An open card sort shows how participants group and label content; it does not test whether they can find items in the redesigned navigation. Calling it a validation credits the method with a result it cannot establish.
2. Readers can see that a study took place, but not whether customers found what they needed or how the research informed the navigation. That missing result makes the validation claim hard to assess.

**How to change it**
1. If you ran a task-based tree test or usability study, name that method; otherwise, describe the card sort as exploring how customers group or label the content.
2. After the study result, add [the key finding or navigation decision it informed, if available].

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The sign-up result is buried after the research details, and “The shipped design” makes the result less direct.

**Why**
The line opens with the research and puts the measurable change at the end, where a scanning reader may miss it. The phrase “The shipped design” also delays the result by referring back to the onboarding work instead of stating the outcome directly.

**How to change it**
Move “raised completed sign-ups from 41% to 58%” to the start of the bullet, and cut “The shipped design.”

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] The survey and dashboard are presented as responsibilities without showing a concrete action or approach.
2. [Important] The line names care-team users but not what the survey or dashboard helped them do.

**Why**
1. “Owned” signals assigned responsibility, but readers cannot tell what you did to run the work or how you carried it out. As a result, the line reads like a routine duty rather than evidence of research skill.
2. Readers can see that care teams used the work, but cannot tell whether it informed a decision or action. Without that consequence, the value to care teams or patients remains unclear.

**How to change it**
1. Replace “Owned” with [the action you took], and add [one survey or reporting approach that shows your contribution, if useful].
2. Replace “the care teams used” with [the decision or action the survey or dashboard informed].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The appointment-reminder outcome appears after the interview detail rather than leading the bullet.

**Why**
The missed-appointment reduction and the resulting two-way reminder are the line’s clearest impact, but readers encounter them only after the interview setup. Leading with the outcome would make the result easier to notice.

**How to change it**
Move the two-way reminder and missed-appointment result to the start of the bullet, before the interview detail.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
1. [Important] The duty list interrupts the testing-and-result story, and the 30% outcome is buried at the end.
2. [Polish] The testing detail does not say what patients were asked to do or what the test revealed.
3. [Polish] The 30% support-call reduction has no comparison period or baseline.

**Why**
1. The recruiting, style-guide, intern, and working-group duties break up the link between testing and the support-call result. Readers scanning the long line may miss the 30% reduction; this also makes the result feel disconnected from the patient-testing story.

**How to change it**
1. Move the 30% result next to the testing detail and move the unrelated duties to another bullet or remove them.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
[Important] The opening relies on broad claims instead of naming a design practice or a concrete outcome.

**Why**
“Inclusive” and “human-centered” do not show what you actually did, while “meaningful, user-first outcomes” does not say what changed for riders. Readers cannot judge the accessibility work or its user-facing value from these labels.

**How to change it**
Replace the general design labels with [one specific accessibility practice or design decision], and replace the outcome phrase with [the specific change for riders and what improved].

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
[Important] The strongest result is not at the start of the bullet.

**Why**
The timed-task results and reductions in both time and errors are the clearest evidence of impact. Starting with the measurement setup makes a scanning reader wait for that evidence.

**How to change it**
Move the timed-task results to the start of the bullet, before “Measured the redesign with timed tasks.”

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
[Polish] “Openly” repeats what publishing the files and protocol already conveys.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Polish] The booking-flow result lacks a specific design change and a comparison basis for the phone-booking drop.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Important] The six fixes are described without saying whether booking completion improved afterward.

**Why**
Readers can see what the testing uncovered, but cannot tell whether the fixes changed the user outcome. A completion result would show the value of the work beyond the issues addressed.

**How to change it**
If measured, add [whether first-time booking completion improved after the fixes, and by how much].

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
The sign-up increase lacks a baseline or comparison, and “new customers” conflicts with the clinic-patient group named above.

**Why**
Without a baseline or comparison, readers cannot tell how the 41% lift was calculated. The change from “clinic patients” to “new customers” also makes the project’s participant group sound inconsistent.

**How to change it**
Add [the baseline or comparison used for the 41% lift]. If these participants were clinic patients, replace “new customers” with “clinic patients.”

> onboarding prototypes

**Problem**
[Important] The onboarding and sign-up bullet breaks the entry’s focus on clinic booking.

**Why**
The other bullets describe a clinic booking redesign and testing with clinic patients, while this one describes customer onboarding and sign-ups. A reader may question whether it belongs to this project and lose the thread of the entry.

**How to change it**
Move this bullet to the project it describes; if it does not belong to this project, remove it.

## What already works

- “Wrote the screener and consent templates…”: Names the concrete research materials you created.

## Reviewer 3

Your strongest material is the measured product and patient outcomes. I’d keep those, but correct two credibility issues before sending this resume out: the WCAG claim and the duplicated onboarding result.

### Experience

**Pinegrove Financial**
- **Dispute-form bullet:** Clarify your research contribution versus the design change. As written, it sounds as though you personally designed and implemented the three-step form; the reader should be able to tell what you did and how the 40% improvement was measured.
- **WCAG bullet:** Correct the standard and narrow the claim. **3:1 is not sufficient for ordinary body text under WCAG 2.1 AA**; that generally requires **4.5:1**. Improving contrast alone also does not establish that an entire design system meets AA.
- **Research-repository bullet:** Add evidence of its effect if you have it. The number of clips shows scale, but “PMs searched” does not yet show whether the repository changed decisions or saved work.
- **Quarterly-findings bullet:** Make your contribution to the shipped fixes clearer. This is a useful influence metric, but the link between your findings, recommendations, and what shipped is somewhat indirect.
- **Card-sort bullet:** Change the claim of what the method established. An open card sort can inform how people group and name information; by itself, it does **not validate that users can find things in the redesigned navigation**. Include a findability test only if you actually ran one.
- **Onboarding bullet:** Keep this strong result and consider moving it nearer the top. State the measurement basis clearly enough that readers can distinguish the change from **41% to 58%** (17 percentage points) from a relative percentage increase.

**Northwind Health**
- **Survey/dashboard bullet:** Add the scope or an outcome, if available. “Owned” tells readers your responsibility but little about the value of the work.
- **Appointment-reminder bullet:** Keep it; it connects research to a specific change and outcome. Be prepared to substantiate whether the missed-appointment rates are comparable periods or populations.
- **Templates bullet:** Keep it; the time saved makes the operational impact clear.
- **Telehealth bullet:** Separate the telehealth study and support-call result from the list of unrelated duties. The current sentence makes it hard to see what caused the 30% reduction, and the other responsibilities bury a strong result. Retain those responsibilities only if they matter for the roles you’re targeting.

### Projects

**Accessible Transit Map**
- **“Championed” bullet:** Remove or replace this vague claim with specific work you performed. It adds little beside the measurable testing result below it.
- **Timed-tasks bullet:** Specify what the error counts represent—totals across sessions, for example—and whether the before/after tasks were comparable. That makes a small, 12-session result easier to interpret.
- **Agency-review bullet:** Keep it, but don’t imply adoption by the agency unless that happened; an invitation to review is the outcome stated here.

**Community Clinic Booking Redesign**
- **Booking-flow bullet:** Clarify whether the drop in phone bookings reflects more successful online bookings, if you have that data. Fewer calls alone does not prove patients had an easier time booking.
- **Hallway-testing bullet:** Keep it; it shows your methods and what changed as a result.
- **Final bullet:** Remove it. It appears to duplicate Pinegrove’s onboarding study—same three prototypes and 24 customers—and places that work at a different organization. It also describes the 41%-to-58% change as a **41% lift**, which needs a clearly stated basis if used.

### Skills and presentation

- **Skills:** Check that each listed method is supported by work you can discuss, particularly **A/B testing**; no bullet currently shows it. If screen-reader testing was part of your accessibility work, make that connection clear without overstating WCAG compliance.
- **Contact details:** If the phone number, email, and portfolio URL are placeholders for this review, replace them before applying. Make sure the portfolio contains the projects you want a reviewer to inspect.
- **Timeline:** Your most recent listed employment ends in June 2025. If you have relevant work since then, include it; don’t try to conceal the gap if you haven’t.

## Reviewer 4

## Overall

You have strong evidence of impact—especially the sign-up, missed-appointment, and task-completion results. The main issues to fix are:

1. **Correct the WCAG contrast claim.** As written, it is technically inaccurate.
2. **Resolve the repeated onboarding result.** The Pinegrove and clinic-project bullets describe very similar testing and sign-up outcomes.
3. **Make your role and the evidence clearer.** Several bullets imply that you personally designed or caused an outcome, but don’t say what you did as the researcher.
4. **Trim the overloaded Northwind bullet.** It combines too many unrelated responsibilities and makes the measured result hard to attribute.

## Header and education

- **Contact information:** Add LinkedIn if it supports your job search, and make sure the portfolio address is clickable in the submitted PDF. A GitHub link is not necessary unless it contains relevant work.
- **Education line:** This is clear. Use one consistent date style throughout the resume; the month-year format is fine.
- **Education placement:** Since you have several years of relevant experience, consider placing education after experience and projects. Your work is currently the more persuasive evidence.

## Pinegrove Financial — Senior UX Researcher

- **Dispute-form completion result:** Clarify your research contribution versus the design or implementation work. Also specify whether the 40% is a relative increase or a percentage-point change, and give the measurement period or user volume if available.
- **WCAG bullet:** Change the technical claim. Under WCAG 2.1 AA, normal-sized text generally needs a contrast ratio of **at least 4.5:1**; **3:1** applies to large text. Also, meeting a contrast threshold alone does not establish that an entire design system meets WCAG AA. State the scope of what you assessed or changed.
- **Research repository:** The size is useful, but the bullet doesn’t show whether people used it or what it enabled. Add evidence of adoption or impact if you have it. Since it contains session clips, be ready to explain how access and participant privacy were handled.
- **Quarterly findings:** Clarify what “the top five” refers to and how the three shipped fixes relate to your recommendations. If possible, identify the effect of the shipped fixes; otherwise, make the scope of the result more explicit.
- **Navigation card sort:** An open card sort is usually used to explore how people group and label information, rather than to validate findability of a finished navigation. Check that the method and claim match what you actually tested. The bullet would also benefit from the finding or decision it produced.
- **Mobile onboarding:** This is one of your strongest bullets and should appear near the top of the role. Specify whether the rise from 41% to 58% is in percentage points or a relative increase, and make the measurement period and your contribution clear. Compare it carefully with the clinic-project bullet below: both mention three prototypes, 24 people, and a sign-up result.

## Northwind Health — UX Research Associate

- **Survey and dashboard:** “Owned” shows responsibility, but the bullet gives no scale or outcome. Add useful detail such as survey volume, who used the dashboard, or what decisions it supported, if you can substantiate it.
- **Patient interviews and reminders:** This is a strong research-to-outcome story. Clarify the timeframe and, if available, the number of appointments or patients behind the 14% and 9% figures. Describe the change as a percentage-point difference or relative reduction accurately.
- **Screener and consent templates:** Keep this—it shows research operations impact. Make clear what “study setup time” covers and how broadly the templates were adopted.
- **Telehealth testing and other responsibilities:** This bullet is overloaded: testing, recruiting, style-guide maintenance, intern onboarding, and accessibility-group notes are all competing for attention. Separate the work if space allows, or prioritize the testing and the support-call result. As written, it’s unclear which activity contributed to the 30% reduction. “Older patients” could also be made more precise if the participants’ age range is relevant.

## Accessible Transit Map — Independent Project

- **First bullet:** It relies on broad claims such as “inclusive,” “human-centered,” and “meaningful” without showing what you actually made or tested. Replace that general positioning with specific project scope or evidence, or remove it if the other bullets already cover the work.
- **Timed-task results:** The numbers are compelling. Clarify that the 12 sessions represent 12 participants, if that is accurate, and whether the before-and-after tasks were comparable. Briefly define what counted as an error if that isn’t obvious from the project materials.
- **Publication and agency invitation:** This is a distinctive credibility signal. Make the project link easy to find, and clarify the nature of the invitation or review if you can do so without overstating it.
- **Dates:** Keep “Present” only if the project is still active.

## Community Clinic Booking Redesign — Volunteer project

- **Booking-flow result:** Cutting steps is clear, but a reduction in phone bookings could mean either greater online self-service or lower demand. Add context that makes the outcome’s significance clear—such as online booking use or total booking volume—if you have it.
- **Hallway testing:** Give more context about the participants and what the six issues represented. If you have a measured completion or usability outcome after fixing them, that would make the result easier to assess.
- **Onboarding result:** This closely resembles the Pinegrove onboarding bullet: both cite 24 people, three prototypes, and sign-up improvement. Verify whether these are genuinely separate studies. If they are, make the project, population, and metric clearly distinct; if they are the same work, don’t present it as two independent achievements. Also reconcile “41%” here with the Pinegrove result of 41% to 58%.

## Skills

- **Categories:** Separate design/research tools from accessibility testing tools so the section is easy to scan. Figma and Tableau are tools; VoiceOver and NVDA are screen-reader technologies you use for testing.
- **Methods:** Keep only methods you can discuss in detail, especially A/B testing. If you have used it, be prepared to explain your role in its design, analysis, and interpretation.
- **Specificity:** “Moderated and unmoderated usability testing” is clear. Consider whether the section could also reflect relevant research practices you actually use, such as research planning or synthesis; don’t add methods just for keyword coverage.

## Final checks

- Put the strongest, clearest impact bullets first within each role.
- Check that every result is accurately attributed to your work and that each percentage has a clear meaning and timeframe.
- Keep the resume in a simple, text-readable layout, and verify that links work in the PDF.

## Reviewer 5

I’ll keep this to what to change and why, without rewriting your lines or giving replacement wording.

## Highest-priority issues

1. **Check the last Community Clinic bullet before submitting.** It repeats the same three-prototype, 24-person, completed-sign-up result described in your Pinegrove onboarding bullet, but describes “new customers” in a clinic project. If it is not a separate, verified study, remove it. As written, it looks duplicated or misattributed and could undermine trust in the rest of the resume.
2. **Correct the WCAG contrast claim.** A 3:1 ratio is generally not sufficient for normal-sized body text under WCAG 2.1 AA; normal text typically needs 4.5:1. The current claim could make a knowledgeable reviewer question your accessibility expertise.
3. **Separate the crowded Northwind bullet.** It bundles usability testing, recruiting, style-guide work, intern onboarding, accessibility-group note-taking, and a support-call reduction. The result is hard to attribute to your work and obscures your strongest contribution.
4. **Clarify what the percentages mean.** Several metrics lack a baseline, denominator, timeframe, or indication of whether the change is percentage points or a relative percentage. These are likely interview follow-ups.

## Header

- **Portfolio link:** Make sure it is clickable and leads directly to relevant work. If it requires a login or does not show the projects you reference here, fix that before sending the resume.
- **Contact details:** These are clear. Consider whether you need the full street-level location anywhere; the city and region are usually enough.

## Education

- **Degree and dates:** Clear as presented. If the degree is complete, there is no obvious issue.
- **Relevance:** Since the degree is in Cognitive Science, consider whether the resume gives enough evidence of research methods, analysis, or human-factors knowledge elsewhere. Don’t add coursework unless it strengthens the role you’re applying for.

## Pinegrove Financial

- **“Improved dispute-form completion by 40%…”** Clarify the baseline, measurement period, and whether 40% is a relative increase or a percentage-point increase. Also be ready to explain how you know the design change—not another change—drove the result.
- **“Brought the design system to WCAG 2.1 AA…”** Correct or substantiate the contrast threshold. Also, a design system meeting one contrast criterion does not by itself establish that the whole system meets WCAG AA; the breadth of the claim should match what you actually audited.
- **“Built a research repository of 250 tagged session clips…”** Add evidence of how it was used or what it improved if you have it. “Product managers searched” is useful context, but doesn’t show adoption or impact. Be prepared to explain consent, privacy, access controls, and how the clips were tagged.
- **“Presented quarterly findings…”** The shipping statistic is concrete, but clarify what counts as a “recommended fix” and whether the shipped fixes were among the findings you presented. Avoid implying that your presentation alone caused the releases.
- **“Validated…findability with an open card sort…”** Check that the method matches the claim. Open card sorts usually assess how people group and label information; they don’t directly establish whether people can find items in a finished navigation. If findability was the outcome, make sure you can describe the task and evaluation method that measured it.
- **“Led research on the mobile onboarding flow…”** This is one of your strongest bullets because it gives scope, method, sample, and an outcome. Add or be ready to supply the comparison period and whether 41% to 58% means percentage points. Keep this result clearly distinct from the Community Clinic bullet that appears to duplicate it.

## Northwind Health

- **“Owned the monthly patient survey and the reporting dashboard…”** Specify your actual responsibility and the dashboard’s use or value if you can substantiate it. “Owned” can mean anything from maintaining the tool to setting the measurement strategy, so expect questions about scope.
- **“Interviewed 40 patients…”** Clarify how missed appointments were measured, over what period, and whether the reduction from 14% to 9% is percentage points. Explain the link between the research findings and the reminder change without overstating causal attribution.
- **“Wrote the screener and consent templates…”** The setup-time improvement is useful, but clarify what “study setup” includes and how the two-week and three-day figures were measured. “All patient studies” is a broad claim; make sure it is accurate.
- **“Tested the telehealth waiting-room screens…”** Split or substantially simplify this item. The list of unrelated responsibilities dilutes the testing work, and the 30% support-call reduction is not clearly connected to those responsibilities. State the evidence you have for that outcome and what part of the work you contributed to.

## Projects

### Accessible Transit Map

- **“Championed an inclusive, human-centered design approach…”** This is generic and doesn’t establish what you did or what changed. Replace the space it occupies with verifiable project work or remove it.
- **Timed-task results:** Keep the metric, but state the scope accurately: 12 sessions is a small sample. Be prepared to explain the task definition, participant characteristics, and how you calculated medians and errors. Don’t imply the result generalizes beyond the tested participants.
- **“Published… and the city’s transit agency invited…”** This is a potentially valuable signal. Make clear that an invitation is not an endorsement, adoption, or implementation. Be ready to explain who invited you, what the review involved, and whether it resulted in any next steps.

### Community Clinic Booking Redesign

- **“Redesigned… cutting the steps…; phone bookings fell by a quarter…”** Clarify whether fewer phone bookings indicate successful self-service or simply fewer bookings overall. Give the data source and comparison period, and distinguish your individual contribution from the work of the three-person team.
- **“Recruited 10 clinic patients…”** This gives useful evidence of direct research. Clarify what the two rounds tested and how you determined which six issues prevented completion. Be precise about whether all six were fixed and how you verified the fixes.
- **“Tested three onboarding prototypes…”** Resolve the apparent duplication with the Pinegrove onboarding result. If this is separate work, you need to be able to establish that clearly; otherwise, remove it. The “new customers” wording is particularly incongruous in a clinic project.

## Skills

- **Tools:** The list is short and credible, but include only tools you can use well enough to discuss in detail. If you used other research, analytics, survey, or prototyping tools relevant to the roles you’re targeting, assess whether they belong here.
- **Screen-reader testing:** Be ready to describe what you tested with VoiceOver and NVDA, on which platforms, and what you did with the findings. A tools list alone doesn’t show the depth of accessibility testing.
- **Methods:** Make sure you can explain your personal experience with A/B testing, since the experience bullets shown don’t provide an example of it. If your experience was limited or observational, don’t imply that you independently designed or analyzed experiments.

## Overall

Your strongest evidence is the measured onboarding result, the patient-reminder work, and the timed-task findings. Improve the resume by resolving the duplicated project result, correcting the accessibility claim, making metrics interpretable, and removing or clarifying claims whose outcomes are hard to attribute. Without a target job description, I can’t assess role fit; the changes above are about credibility, clarity, and evidence.

## Reviewer 6

## Overall assessment

This is a strong evidence-led UX research resume: it includes concrete research methods, product outcomes, and several useful metrics. The highest-priority changes are to **correct or verify the WCAG claim**, **resolve the duplicated onboarding bullet**, and **untangle the overloaded Northwind bullet**. A few other bullets would benefit from clearer attribution or a closer match between the research method and the result claimed.

You haven’t named a target role, so this is a general UX research review rather than a role-specific fit assessment. Since you provided pasted text, I can’t assess the original document’s visual layout or how it would parse from a file.

## Changes to make, in priority order

| Section / line | What to change | Why |
|---|---|---|
| **Pinegrove: “Brought the design system to WCAG 2.1 AA…”** | Verify the contrast requirement and the scope of the claim. For normal-sized body text, WCAG 2.1 AA generally requires a contrast ratio of **4.5:1**; **3:1** applies to large text. Confirm whether your 3:1 figure applied only to large text, or whether the claim needs correction. Also confirm that you assessed all relevant design-system combinations before saying the system met AA. | As written, the stated threshold does not support the claim that ordinary body text met AA. This is the most important technical accuracy issue in the resume. |
| **Community Clinic: “Tested three onboarding prototypes…”** | Verify whether this belongs to the clinic project at all. It closely repeats the Pinegrove onboarding bullet, but gives a different result: a 41% lift rather than sign-ups increasing from 41% to 58%. Remove it from this project if it was copied from the Pinegrove work; if it is a separate project, make sure its context and result are independently accurate and clearly distinguishable. | The duplication and differing figures could make a reader question whether the work or metric has been attributed correctly. |
| **Northwind: the bullet beginning “Tested the telehealth waiting-room screens…”** | Break this up or sharply reduce its scope. Separate the testing and its outcome from the recruiting calendar, style-guide updates, intern onboarding, and accessibility-group notes. Confirm which work actually contributed to the 30% reduction in support calls. | It combines several different responsibilities and a major result in one bullet, making both the research contribution and the outcome hard to evaluate. |
| **Pinegrove: “setting body-text contrast to at least 3:1…”** | In addition to checking the threshold above, clarify what text sizes and backgrounds were assessed, if that detail is available and material. | “Every background” is a broad claim; readers may wonder whether it means every approved design-system combination or every possible use of the components. |
| **Pinegrove: “Validated the redesigned app navigation’s findability with an open card sort…”** | Check that “findability” accurately describes what the study measured. An open card sort is typically evidence about how people group and label information; it does not by itself demonstrate that people can find items in a finished navigation. If you tested findability directly, make the relationship between that test and the card sort clear. | The method and the claim may not align as currently described. |
| **Pinegrove: “Improved dispute-form completion by 40%…”** | Add enough context to interpret the 40%: the comparison baseline, measurement period, and whether it is a relative increase or a percentage-point change. Make sure the wording doesn’t imply you alone caused the outcome if other changes contributed. | The metric is compelling, but its meaning and attribution are not yet clear. |
| **Pinegrove: “Built a research repository of 250 tagged session clips…”** | Clarify the repository’s practical value if you can support it—for example, how it was used or what work it improved. Also check that describing the clips as searchable is consistent with participant consent and your organization’s privacy practices. | The size and use are useful details, but the bullet stops short of showing the repository’s impact. Research recordings can also raise confidentiality questions. |
| **Pinegrove: “Presented quarterly findings…”** | Clarify who identified the “top five” fixes, if that distinction matters, and whether all three shipped in the same next release cycle. | This is solid evidence of influence; a little more precision would make the relationship between your recommendations and the shipped work clearer. |
| **Pinegrove: “Led research on the mobile onboarding flow…”** | Keep the baseline and post-launch figures, but make sure the result is clearly tied to the named flow and quarter. Also distinguish this bullet’s metric from the similar Community Clinic claim. | The result is strong, but the repeated project claim elsewhere makes accuracy and attribution especially important. |
| **Northwind: “Owned the monthly patient survey and the reporting dashboard…”** | Add a concrete indication of the survey or dashboard’s scope or use, if you have one—such as who used it or what decisions it informed. | “Owned” signals responsibility, but the bullet does not yet show what that responsibility enabled. |
| **Northwind: “Interviewed 40 patients…”** | Clarify the measurement period and denominator behind the missed-appointment figures, if available. Be precise about whether the change was five percentage points or a relative reduction, and avoid implying the interviews alone caused it if other factors were involved. | The finding-to-outcome story is persuasive, but the metric and causal link need context. |
| **Northwind: “Wrote the screener and consent templates…”** | Keep the setup-time result, but specify what “study setup time” covers and whether the two-week-to-three-day comparison is typical, if you can substantiate that. | This is a clear operational improvement; defining the measure will make it easier to understand and trust. |
| **Accessible Transit Map: “Championed an inclusive, human-centered design approach…”** | Replace or remove this general claim in favor of concrete project details already present elsewhere in the section. | “Inclusive,” “human-centered,” and “meaningful” are broad assertions here, while the next two bullets provide specific evidence. |
| **Accessible Transit Map: timed-task results** | Clarify what the 12 sessions represent—such as the number of participants or test sessions—and whether the before-and-after tasks were comparable. | The measured improvement is useful; readers need enough context to interpret how it was measured. |
| **Accessible Transit Map: “Published the design files and test protocol openly…”** | Keep the agency invitation, but make sure the timing and status are clear: an invitation to a review is different from adoption or implementation. | This is meaningful external interest, and precise wording prevents readers from inferring a stronger outcome than occurred. |
| **Community Clinic: “Redesigned a free clinic’s online booking flow…”** | Clarify the period and comparison behind the reduction in phone bookings, and whether “by a quarter” means a relative reduction. Consider whether other changes could have contributed. | The result is concrete, but its measurement and attribution are currently ambiguous. |
| **Community Clinic: “Recruited 10 clinic patients…”** | If available, identify what the two rounds tested and how the six issues were determined to block completion. | This shows useful hands-on research, but the connection between the testing and the stated issues could be more explicit. |
| **Skills: “A/B testing” and screen-reader testing** | Keep these only if they reflect work you can discuss in detail. The experience bullets currently don’t provide much evidence for A/B testing or for using VoiceOver/NVDA. Add corroborating detail elsewhere if you have it; otherwise, consider whether these belong in the skills list. | A skills list is a claim of capability. An example in the experience section helps readers understand the depth and context of that capability. |

## Lines that are generally working

- The **education entry** is clear and needs no obvious content change.
- The Pinegrove and Northwind role headings clearly identify employer, title, location, and dates.
- The **timed-task results** and the **clinic booking-step reduction** are useful specific evidence; they mainly need clearer measurement context.
- The **screener and consent-template** result is a good example of operational impact, subject to clarifying the time comparison.
- The project and volunteer labels help preserve the distinction between independent, volunteer, and employer work. Keep those distinctions clear as you revise.

One final check: confirm the portfolio link is current and accessible to the audiences you intend to send it to.


---

# case-5

## Résumé

```
Jamie Alvarez
+1 (555) 010-5820 | jamie.alvarez@example.com | example.com/in/jalvarez
EDUCATION
Riverbend Polytechnic | B.S. in Industrial Engineering | Metro City, USA | Sep 2014 - May 2018
EXPERIENCE
Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present
- Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the
door.
- Prepared weekend wedding orders with the head florist and kept the cooler stocked and
labeled.
Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021
- Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only
SKUs that sold every week.
- Ran a time study of the returns desk; my findings led to a triage station that cut returns
processing time from 3 days to 1.
- Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock
from 95 to 40 minutes.
- Set up cycle counting for the 2,000 highest-value locations, raising inventory record
accuracy from 91% to 98.5% within a year.
Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025
- Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal
forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.
- Cut inbound freight cost per pallet from $48 to $41 over two quarters by consolidating
supplier pickups into four regional milk runs.
- Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data,
reviewed monthly with the category managers.
- Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice
accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-
time inbound deliveries from 81% to 93%.
- Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by
cutting changeover time and micro-stops.
- Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide,
which the team still uses for promotions.
PROJECTS
Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present
- Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting
planned route miles 18% against the grocer’s current routes.
- Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing
problem with customer time windows.
- Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time
windows to the routing model.
Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022
- Analyzed warehouse operations and made recommendations to the food bank’s leadership.
- The donation intake process was mapped and two duplicate data-entry steps were removed, so
donations reached the shelves a day sooner.
- Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again
after its spring expansion.
SKILLS
Tools: Excel, Python
Methods: demand forecasting, inventory planning, time studies, vehicle routing
```

## Reviewer 1

# Resume review

Your strongest story is **supply chain planning and operational improvement**: you have quantified results across forecasting, inventory, freight, and warehouse operations. The main priorities are to fix the chronology, resolve several credibility or measurement issues, and make each bullet’s impact easier to assess. I’m giving change instructions only, not rewritten lines.

## Header and structure

- **Contact information:** Add your city and state near your name, and make the LinkedIn address a complete, clickable URL. Add a phone label only if you think it improves clarity. For supply-chain roles, a GitHub link is optional; it would be useful if you’re presenting the Python project as a significant technical sample.
- **Section order:** Move **Crestway Foods above Lakeview Distribution**. The experience section should be in reverse chronological order: current role, then most recent previous role, and so on.
- **Skills placement:** Move Skills closer to the top—typically after the header and a brief summary, if you use one. This helps recruiters quickly see your planning and analytical capabilities.
- **Targeting:** The resume currently reads most strongly for supply-chain planning, operations analysis, or continuous improvement roles. If you’re targeting software-engineering jobs, this resume does not yet show enough software-development experience to support that target.

## Education

- **Riverbend Polytechnic entry:** Keep the degree, school, location, and dates. Since the degree was completed in 2018, coursework is unlikely to add much. Include GPA only if it is strong and relevant to the roles you’re pursuing.

## Experience

### Greenleaf Florist — Delivery Driver and Shop Assistant

- **“Delivered 30 to 40 arrangements…”** Keep the delivery volume if it is representative. Consider whether taking payments adds enough value for your target roles; if you retain it, clarify the relevance, such as transaction volume or responsibility for accurate payment handling, if you can support that. The current bullet combines delivery volume with a routine task.
- **“Prepared weekend wedding orders…”** This is relevant operational work but lacks scale or outcome. Add the number or size of orders, or a measurable quality or timeliness result if available. Otherwise, keep it concise; this role is useful for showing your current employment, but these tasks are less relevant than your prior planning achievements.

### Lakeview Distribution — Operations Analyst

- **“Raised forecast accuracy from 70% to 85%…”** Revisit this claim before using it. Excluding SKUs that do not sell every week changes which items are included in the metric; it may make the score look better without improving forecasts. Use a consistent, defensible comparison, or clearly define the SKU cohort and how accuracy was measured. Be prepared to explain the choice of MAPE, particularly for items with intermittent or zero demand.
- **“Ran a time study of the returns desk…”** Keep the time reduction, but clarify what the three days and one day measure—for example, whether these are average processing times or another measure. Add the volume or scope of returns if you have it. This would make the operational impact easier to judge.
- **“Wrote the dock scheduling rules for 12 carriers…”** Strong, quantified result. Add the period over which the wait-time reduction occurred or the scale of dock activity, if known. This helps show how broadly the change mattered.
- **“Set up cycle counting for the 2,000 highest-value locations…”** Keep the scope and accuracy improvement. Clarify how inventory accuracy was measured and over what period the change occurred, if the current wording doesn’t make that clear to a reader.

### Crestway Foods — Supply Chain Planner

- **“Rebuilt weekly demand planning for 1,400 SKUs…”** This is one of your strongest bullets. Clarify the period over which stockouts fell and inventory decreased, and what the $1.9 million figure represents—such as inventory value or working capital. If you can, also define how you measured stockouts.
- **“Cut inbound freight cost per pallet…”** Keep the before-and-after cost and time period. Add the volume or total savings represented by the change, if you can verify it. That would help readers understand the size of the impact, not just the unit-cost improvement.
- **“Set reorder points for every SKU…”** This describes work performed but not its outcome. Add a measured result—such as a change in service level, stockouts, or inventory—if you have one. If you don’t, consider whether the bullet adds enough beyond your other forecasting and inventory accomplishments.
- **“Scoring 40 vendors weekly…”** Fix the tense and sentence structure: it currently starts with a present-participial form while describing a past role, and the outcome is hard to follow. Preserve the vendor count and the improvement from 81% to 93%, but clarify the time period and what qualified as an on-time delivery. Also make sure the wording doesn’t imply the scorecards alone caused the improvement unless you can support that connection.
- **“Raised the packaging line’s OEE from 71% to 112%…”** Resolve this before submitting. Standard OEE is bounded at 100%, so a result of 112% will prompt questions. Check the underlying measure and definition. If 112% is a different measure, identify it accurately; if it is OEE, verify the calculation. Also note the period and whether quality or downtime changed alongside the improvement.
- **“Trained 6 planners on the new forecasting workflow…”** Keep the team size and the guide’s continued use if you can substantiate it. Add a measurable adoption or planning-process outcome if available; otherwise, this is a useful supporting bullet but less compelling than your quantified results.

## Projects

### Last-Mile Routing Study

- **Project heading:** Add a link to the code, notebook, or project write-up if available. State whether the grocer’s data was real, anonymized, or simulated, and make sure you have permission to describe any nonpublic data.
- **“Modeled a regional grocer’s 85 daily delivery stops…”** Keep the stop count and comparison, but clarify what the 18% refers to: total fleet miles, miles per route, or another measure. That distinction matters for interpreting the result.
- **“Cut average route length from 120 to 90 miles, a 40% reduction…”** Correct the arithmetic or the figures: a reduction from 120 to 90 is **25%**, not 40%. Also check whether this measures the same thing as the 18% reduction in the previous bullet. If both bullets describe the same outcome, remove the duplication or make the distinct measures explicit.
- **“Raised on-time deliveries by 9% in simulation, from 84% to 93%…”** Describe this as a nine-percentage-point change, not a 9% relative increase. Keep “in simulation” prominent so the result isn’t mistaken for a live operational outcome. Clarify how on-time delivery was defined and how the model was evaluated.

### Regional Food Bank Warehouse

- **“Analyzed warehouse operations and made recommendations…”** This is too general and overlaps with the more specific bullets that follow. Remove it unless it adds a distinct contribution not captured elsewhere.
- **“The donation intake process was mapped…”** Keep the process change, but clarify whether the data-entry steps were actually removed and how the “a day sooner” result was measured. Add the volume or scope affected, if available.
- **“Wrote a slotting guide…”** Keep this if the guide was adopted. Add the scale of the warehouse or the scope of the re-slotting, if you know it. As written, it shows a useful deliverable but not how much work it covered or what it improved.

## Skills

- **“Tools: Excel, Python”** This is likely too sparse for supply-chain planning roles. Add other tools you have used professionally—such as planning, ERP, warehouse, transportation, reporting, or database systems—but only if you can discuss your actual experience with them. If your Excel or Python work involved specific techniques or libraries, identify the relevant ones.
- **“Methods: demand forecasting, inventory planning, time studies, vehicle routing”** Keep these, since they align with your experience. Consider adding other methods you can substantiate, such as vendor-performance analysis or continuous improvement. Use terminology that matches the job postings you’re targeting.
- **Skills specificity:** Don’t list broad skills you’ve only encountered briefly. Recruiters may ask how you applied each tool or method, so the section should reflect practical experience rather than exposure alone.

## Highest-priority fixes

1. Put Crestway before Lakeview.
2. Resolve the route-reduction arithmetic and clarify whether the project bullets report distinct results.
3. Verify or relabel the 112% OEE figure.
4. Rework the forecast-accuracy claim so the change in SKU inclusion is transparent and defensible.
5. Add outcomes or scope where bullets currently describe tasks without showing their effect.

## Reviewer 2

Your strongest material is the supply-chain work, but several metrics need correction or qualification before you send this out. I’d fix those first.

## Fix before applying

- **Lakeview — forecast accuracy:** Changing MAPE to include only SKUs that sold every week changes what was measured; it does not, by itself, show that forecasts improved. Use a consistent before-and-after measure, or describe this as a change to the reporting method rather than an accuracy gain.
- **Crestway — packaging-line OEE:** Standard OEE cannot exceed 100%. Verify the 112% figure and the metric’s definition. If it was performance against a target rather than OEE, label it accordingly.
- **Routing study — route length:** Going from 120 to 90 miles is a **25%** reduction, not 40%. Recalculate it, and explain whether this result and the separate 18% reduction use different baselines.

## Experience

Put **Crestway before Lakeview** so the jobs run in reverse chronological order. Keep Greenleaf first if it is your current role.

**Greenleaf Florist**
- **Deliveries:** Keep the daily volume, but clarify the scope if useful—such as whether you planned routes or handled delivery issues. The payment detail is less relevant if you’re applying for supply-chain or analyst roles.
- **Wedding orders:** Specify your contribution and its scale or outcome if you can support one. “Helped prepare” and “kept stocked” otherwise convey routine duties.

**Crestway Foods**
- **Demand planning:** Strong bullet. Be ready to substantiate how stockouts and inventory were measured and how much of each change resulted from the planning work.
- **Inbound freight:** Strong result. Clarify whether the $48 and $41 figures are comparable across the two periods; otherwise, mix or volume changes could explain part of the difference.
- **Reorder points:** Add the effect of the work if you have one. As written, it describes a method and review cadence but not what improved.
- **Vendor scorecards:** Separate what you did from the delivery improvement more carefully unless you can support a direct causal link. Also make the tense consistent with this past role.
- **Packaging-line OEE:** Correct the metric as noted above, then make your own role in reducing changeovers and micro-stops clear.
- **Planner training:** Good evidence of adoption. If “still uses” is not something you can verify now, avoid making that ongoing claim.

**Lakeview Distribution**
- **Forecast accuracy:** Correct the measurement issue noted above.
- **Returns desk:** Strong bullet. Clarify whether “3 days to 1” means average processing time and whether the triage station was implemented based on your study.
- **Dock scheduling:** Strong, specific result. Clarify the period or basis for the average wait-time comparison if needed.
- **Cycle counting:** Strong result. Check that “2,000 highest-value locations” accurately describes what was selected—locations versus SKUs—and that the accuracy figures use the same measure.

## Projects

**Last-Mile Routing Study**
- **First bullet:** Specify what “planned route miles” covers and whether the grocer’s routes were actual routes you had access to or a modeled baseline.
- **Second bullet:** Correct the percentage and reconcile its baseline with the first bullet. If both bullets describe the same optimization, combine their substance rather than presenting it as two separate gains.
- **Third bullet:** Keep “in simulation” prominent. Time windows are constraints, so explain what changed in the model to improve on-time performance rather than implying that adding constraints alone produced the gain.
- **Project dates:** If it is ongoing, identify what remains in progress. Otherwise, give it an end date.

**Regional Food Bank Warehouse**
- **Analysis bullet:** Remove it if the following bullets cover all the work; it adds little specific information.
- **Donation intake:** Make your role in mapping and changing the process direct and verify the “a day sooner” measure.
- **Slotting guide:** Useful evidence that the work was adopted. Add scale or an operational result if available.

## Education, skills, and presentation

- **Education:** The degree information is clear. You can shorten or remove graduation dates if space is needed; the experience now carries more weight.
- **Skills:** Add tools you actually used and can discuss, especially the systems or Excel/Python techniques behind these results. The current list is sparse relative to the work described.
- **Contact details:** Check that the LinkedIn URL works and that the phone number and email are the ones you intend to use.
- **Overall:** Tailor which bullets get the most space to the job. For supply-chain planning roles, lead with demand, inventory, vendors, and freight; for operations analyst roles, give more prominence to the time study, dock scheduling, and routing work.

## Reviewer 3

## Overall assessment

This is a strong **operations and supply-chain** resume: it shows relevant education, specific methods, and several measurable results. The main issues are not a lack of evidence; they’re **credibility and clarity problems in a few claims**, plus a chronology error and repeated or conflicting project results.

### Fix these first

1. **Put the experience in reverse chronological order.** Crestway (2021–2025) should appear before Lakeview (2018–2021).
2. **Verify the OEE result of 112%.** Standard OEE is capped at 100%, so this will raise questions unless you’re using a clearly explained, nonstandard calculation. Confirm the metric and baseline before keeping the claim.
3. **Reconcile the routing-project figures.** The stated route reductions conflict: 120 to 90 miles is a 25% reduction, not 40%, and another bullet says 18%. Establish what each figure measures and use only consistent, comparable results.
4. **Clarify the forecasting-accuracy calculation.** Excluding SKUs that did not sell every week changes the population being measured. Make sure the improvement is comparable on a like-for-like basis and that the narrower coverage is clear.
5. **Make your role and the evidence clearer in a few bullets.** In particular, clarify which outcomes you personally drove, which were team results, and how the food-bank and routing results were measured.

## Section-by-section changes

### Header and education

- **Contact information:** The essentials are present. Check that the portfolio/profile link is live and points to the intended profile.
- **Education:** This is clear as written. If you have relevant coursework, projects, or honors that strengthen your fit for a specific target role, consider including them; otherwise, there’s no need to add detail just to fill space.

### Experience

**Greenleaf Florist — Delivery Driver and Shop Assistant**

- **“Delivered 30 to 40 arrangements a day…”** Keep the daily volume; it gives a useful sense of workload. Clarify whether that figure is typical or a peak if it varies, and consider whether payment handling is important to your target roles.
- **“Prepared weekend wedding orders…”** This adds useful operational context, but it’s less specific than the delivery bullet. If you have a meaningful detail about order volume, coordination, accuracy, or another outcome, include it only if you can substantiate it. Otherwise, keep the bullet concise.

**Lakeview Distribution — Operations Analyst**

- **“Raised forecast accuracy from 70% to 85%…”** Explain the limitation created by calculating MAPE only for SKUs that sold every week. Verify that the before-and-after figures use the same SKU population; otherwise, the apparent improvement may reflect a changed calculation rather than better forecasts.
- **“Ran a time study of the returns desk…”** This is one of your strongest bullets: it connects analysis to an operational change and a clear result. Make your role in getting the triage station adopted explicit if you can, and clarify what the three-day-to-one-day measure represents if it isn’t obvious.
- **“Wrote the dock scheduling rules for 12 carriers…”** Strong scope and result. If available, clarify the measurement period or how average wait was tracked, so the reduction is easy to assess.
- **“Set up cycle counting for the 2,000 highest-value locations…”** Strong, specific result. Clarify whether the accuracy figures refer to those locations or the broader inventory, and keep the measurement scope consistent.

**Crestway Foods — Supply Chain Planner**

- **“Rebuilt weekly demand planning…”** This is a strong lead bullet with useful scope and business outcomes. Clarify how the $1.9M inventory reduction was measured, and avoid implying that the forecasting model alone caused both results if other changes contributed.
- **“Cut inbound freight cost per pallet…”** The result, timeframe, and operational change are clear. If you can, make the comparison basis clear—for example, whether the figures cover the same lanes or shipment mix.
- **“Set reorder points for every SKU…”** This communicates sound analytical work, but it lacks an outcome. Add a result if you tracked one, or retain it as a description of scope and process rather than implying an unreported impact.
- **“Scoring 40 vendors weekly…”** The sentence structure makes it hard to tell who performed the work and what specifically led to the delivery improvement. Clarify your ownership, the role of the scorecards in the change, and whether the 81%–93% result is attributable to this work or to broader team efforts.
- **“Raised the packaging line’s OEE from 71% to 112%…”** Verify this before using it. Under the standard definition, OEE cannot exceed 100%. Check whether the metric was actually OEE, whether the calculation or denominator changed, and whether the starting and ending figures are comparable.
- **“Trained 6 planners…”** This is useful evidence of training and adoption. Clarify your level of ownership if the training or guide was a team effort, and make sure the statement that the team still uses the guide is current.

### Projects

**Last-Mile Routing Study**

- **“Modeled a regional grocer’s 85 daily delivery stops…”** Clarify whether the data came from an actual organization, a public source, or a simulated dataset, and whether the project was independent of that grocer. Also distinguish modeled results from real operating results.
- **“Cut average route length from 120 to 90 miles, a 40% reduction…”** Correct or remove the percentage: those distances imply a 25% reduction. Reconcile this with the separate 18% reduction claim, and state what each comparison measures.
- **“Raised on-time deliveries by 9% in simulation…”** Keep the simulation context prominent. Clarify whether this is a nine-percentage-point increase or a relative increase, and ensure it uses the same scenario and baseline as the other project results.
- **Across the three bullets:** Time windows and route-distance improvements recur, so the project currently feels repetitive. Keep distinct outcomes only after reconciling the figures and explaining what each demonstrates. The “Present” date should also reflect whether the project is genuinely ongoing.

**Regional Food Bank Warehouse**

- **“Analyzed warehouse operations and made recommendations…”** This is broad and overlaps with the next two bullets. Add a distinct scope or contribution if you have one; otherwise, it may not earn space as a separate bullet.
- **“The donation intake process was mapped…”** Clarify your contribution versus the team’s, and how the “a day sooner” result was established. The passive construction obscures who removed the steps and what changed.
- **“Wrote a slotting guide…”** This is the clearest of the three because it identifies a deliverable and its use. Preserve the team-of-four context, and clarify your individual contribution if the work was shared.

### Skills

- **Tools: Excel, Python / Methods: …** The list is concise, but it doesn’t show the depth or context of your Excel and Python use. For a specific target, include additional tools or methods only if you’ve actually used them and can discuss that use. Your experience and projects already provide some evidence for the methods listed.

## Targeting and presentation

The resume currently supports **supply-chain planning, operations analysis, and process-improvement roles** more clearly than a general IT or cybersecurity role. If you’re targeting something else, the priorities will change. The florist role is recent and should remain, but its placement and level of detail should support the direction you want the reader to see.

This review is based on the pasted text. I can’t assess the original page layout, visual hierarchy, or how the source file parses.

## Reviewer 4

Your strongest material is the operations work with quantified results. The main fixes are credibility and consistency: correct the routing math, verify the OEE figure, and make sure the forecast-accuracy comparison is valid. I’ll identify what to change and why, without rewriting your lines.

## Header and layout

- **Contact information:** Check that the phone number, email, and profile URL are your real, working details. Make the profile link clickable and use its full destination if the resume will be viewed digitally.
- **Line wrapping:** A few bullets break across lines in awkward places. Use consistent indentation and hanging indents so each bullet is easy to scan.
- **Section order:** Consider putting **Experience** before **Education**. With several years of relevant work experience, your professional record is likely more important to a reader than your degree.
- **Experience order:** Move Crestway Foods above Lakeview Distribution. Your jobs should be in reverse chronological order; the current order is inconsistent with that convention.

## Education

- **Degree line:** This is clear as written. Keep the institution, degree, location, and dates consistent with the formatting you use for employers.

## Experience

### Greenleaf Florist

- **Delivery and payments bullet:** The daily delivery volume is useful. If accurate, add context that establishes the scale or quality of the work, such as the period over which that volume applies or a relevant service outcome. Keep the payment detail only if it supports the roles you’re targeting.
- **Wedding orders and cooler bullet:** The contribution to wedding orders is relevant, but the cooler-stocking detail is less compelling without scale or responsibility. Add a concrete indication of volume or operational impact if you have one; otherwise, prioritize the more substantial part of the work.
- **Role relevance:** Because this job differs from your supply-chain roles, make sure the entry emphasizes transferable operations responsibilities. If the position is temporary, seasonal, or part-time, label it accurately if that context helps explain the transition.

### Lakeview Distribution

- **Forecast-accuracy bullet:** This is a major credibility risk. Changing which SKUs are included in a MAPE calculation can make the result look better without improving forecasts on a like-for-like basis. Verify that the 70% and 85% figures use a fair, comparable scope and clearly identify what changed. If they don’t, don’t present them as a direct improvement.
- **Returns time-study bullet:** The before-and-after result is strong. Clarify what the three-day and one-day measures represent—such as average or median processing time—and, if possible, the scale of returns involved. Make your role in implementing the triage station clear.
- **Dock-scheduling bullet:** This has a clear operational result. Add the measurement period or clarify the basis of the average if you can, so the comparison is easier to assess.
- **Cycle-counting bullet:** The accuracy improvement is valuable. Clarify what “locations” means in this context and how the 2,000 locations were selected or counted. That will help readers understand the scope of the result.

### Crestway Foods

- **Demand-planning bullet:** This is one of your strongest bullets, but it combines a stockout reduction with an inventory-dollar reduction. Clarify what the $1.9M represents—such as a reduction in average inventory—and make sure the time period and attribution are clear.
- **Freight-cost bullet:** The cost comparison is clear. Add the shipment volume or total savings if available, and clarify the period over which the per-pallet figures were compared.
- **Reorder-points bullet:** This describes responsibility but not impact. Add a measured outcome if you have one, such as a change in stockouts, service levels, or inventory. Also make sure the scope is consistent with the 1,400 SKUs mentioned above.
- **Vendor-scoring bullet:** Fix the verb-form inconsistency at the start of the bullet. Also clarify the timing: vendors are scored weekly, while scorecards are shared before quarterly reviews. The 81% to 93% result is strong, but specify the comparison period and how the scoring contributed to it.
- **OEE bullet:** Verify this metric before keeping it. Standard overall equipment effectiveness cannot exceed 100%, so 112% will raise questions about the calculation or whether the measure is actually OEE. Use the figure only if you can explain and substantiate the definition.
- **Training and guide bullet:** “The team still uses” is a vague outcome. If you can, show the guide’s adoption or a result from the workflow. Otherwise, this bullet may be less valuable than one with a measurable operational impact.

## Projects

### Last-Mile Routing Study

- **Date range:** Since the project is marked as ongoing, make sure that is accurate and that the results reflect the current state of the work.
- **First and second bullets:** The route-mile results conflict. A decrease from 120 to 90 miles is a 25% reduction, not 40%, and it also differs from the 18% reduction in the first bullet. Recheck the calculations and clarify whether these are different measures or baselines.
- **Second and third bullets:** The time-window method appears in both bullets. Reduce the overlap so each bullet contributes distinct information.
- **On-time result:** Moving from 84% to 93% is a nine-percentage-point increase, not a nine-percent increase. Also make clear that this is a simulation result, not a deployed operational result.
- **Project context:** Clarify whether the grocer supplied real operating data or whether the scenario/data are simulated or anonymized. That distinction matters because the bullets currently could be read as real-world business results.

### Regional Food Bank Warehouse

- **First bullet:** This is broad and largely repeats the more specific work in the next two bullets. Replace it with a distinct contribution or remove it if it adds no information.
- **Donation-intake bullet:** Clarify whether the one-day improvement was measured or estimated, and how the process changes produced it. The current phrasing makes the outcome sound definite but doesn’t show how it was verified.
- **Slotting-guide bullet:** “Used to re-slot the warehouse again” is unclear. Explain the guide’s practical result or extent of use, if you can. Also clarify what changed after the spring expansion.

## Skills

- **Tools:** Excel and Python are relevant, but the list may be too narrow for your experience. Add other tools you have actually used—such as SQL, ERP, WMS, or planning systems—if applicable. Don’t add tools solely because they’re common in the field.
- **Methods:** These are relevant but broad. Add more specific methods or areas of expertise only if you can discuss them confidently in an interview.
- **Ordering:** Put the skills most relevant to your target roles first. Avoid proficiency ratings unless you have a clear, consistent way to substantiate them.

## Reviewer 5

5 errors, 6 important, 24 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Industrial Engineering

**Problem**
[Important] Experience should appear above Education because the relevant work now carries more weight than the degree.

**Why**
Several years of relevant experience give a recruiter more current evidence of your qualifications than the degree alone. Putting Experience first makes that evidence visible sooner.

**How to change it**
Move the Experience section above Education.

> Jul 2018 - Jan 2021

**Problem**
[Important] Experience is not in reverse chronological order.

**Why**
Lakeview (2018–2021) appears above Crestway (2021–2025), even though Crestway is the more recent role. This can make the work history harder to scan in the expected order.

**How to change it**
Move the Crestway Foods entry above Lakeview Distribution.

> Delivery Driver and Shop Assistant

**Problem**
[Polish] The current florist role takes space without explaining how it fits the career direction.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
1. [Polish] The delivery bullet gives volume but no outcome showing the effect of the deliveries.
2. [Polish] The verbs use past tense for a role listed as current.

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
1. [Polish] The wedding and cooler duties have no stated outcome.
2. [Polish] The verbs use past tense for a role listed as current.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Error] The stated accuracy increase is not supported by changing the SKU population used in the MAPE calculation.

**Why**
Restricting the calculation to SKUs that sold every week changes the population being measured, so the increase from 70% to 85% could reflect the narrower SKU set rather than improved forecasting. A like-for-like comparison requires the same SKU population and MAPE method for both figures.

**How to change it**
Compare both figures using the same SKU population and MAPE method; if the figures apply only to weekly-selling SKUs, label them that way instead of claiming overall forecast accuracy rose.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Important] The processing-time result is buried after the study setup.
2. [Polish] The phrase uses a personal pronoun and leaves your role in establishing the triage station unclear.

**Why**
1. A reader scanning the bullet may notice the time study before noticing the reduction from 3 days to 1. Leading with the result makes the operational impact easier to see.

**How to change it**
1. Move the quantified processing-time result to the start of the bullet, before the time-study setup.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
1. [Polish] The scheduling-rules detail does not show what operational change the rules introduced.
2. [Polish] The bullet repeats “dock” in “at the dock.”
3. [Polish] The dock-scheduling bullet should appear before the other Lakeview bullets.

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
[Important] The inventory-accuracy figures do not identify the population measured.

**Why**
A reader cannot tell whether the comparison covers the 2,000 high-value locations or the wider inventory. Naming the measured population makes the improvement easier to interpret.

**How to change it**
Clarify whether both figures cover the 2,000 locations; if they do, say so alongside “inventory record accuracy,” or specify [population included in the accuracy measure].

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] The seasonal-model description does not identify its distinguishing technique or input.

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
[Polish] The reorder-point bullet describes work and review cadence but gives no result.

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
1. [Error] The opening gerund does not fit grammatically with the past-tense main verb.
2. [Important] The inbound-delivery result comes after a long method description.

**Why**
1. “Scoring” starts a phrase that does not connect grammatically to “raised.” The mismatch makes the sentence harder to follow.
2. The 81% to 93% improvement is the main impact, but readers may have to work through the scoring and scorecard details before they find it. Leading with the result makes the accomplishment easier to scan.

**How to change it**
1. Change the opening to a past-tense construction, such as “Scored,” to match “raised.”
2. Move the quantified result to the start of the bullet, before the vendor-scoring and scorecard details.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The reported OEE of 112% is invalid under the standard definition.
2. [Polish] The bullet names the losses reduced but not the intervention used to reduce them.

**Why**
1. Standard overall equipment effectiveness is availability multiplied by performance and quality, each expressed as a proportion capped at 100%. The resulting OEE cannot exceed 100%, so 112% indicates a calculation or measurement problem, or that the result is a different metric.

**How to change it**
1. Recalculate OEE from availability, performance, and quality data and report the valid result; if 112% is a different metric, name that metric instead of OEE.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
1. [Polish] The sentence does not say what the workflow or guide improved.
2. [Polish] “Its” could refer to either the forecasting workflow or the exception-handling guide.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
[Error] The route-length change is a 25% reduction, not a 40% reduction.

**Why**
The decrease from 120 to 90 miles is 30 miles. Relative to the original 120 miles, that is a 25% reduction, so the stated percentage is arithmetically incorrect.

**How to change it**
Replace “a 40% reduction” with “a 25% reduction.”

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.
> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
[Polish] The customer-time-window method is repeated across the route-length and on-time-delivery bullets.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
The route-length bullet should be presented before the other project bullets if it is retained.

**Why**
The finding identifies this as the strongest line, but it is not the first project bullet. Moving it earlier would give its quantified result more prominence; first resolve the repeated route-distance claim so the entry does not present the same result twice.

**How to change it**
If you retain this claim after resolving the duplicate, move it to the top of the project bullets.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
[Polish] The on-time-delivery change is 9 percentage points, not an unqualified 9%.

> planned route miles 18%

**Problem**
[Error] The two route-distance figures are presented as if they describe the same improvement, but their reductions differ.

**Why**
The first project bullet reports an 18% reduction in planned route miles, while the next describes the route-length reduction as 40%. A reader cannot tell whether these are different measures or inconsistent figures, which weakens confidence in the project results.

**How to change it**
Clarify whether planned route miles and average route length are distinct measures; if not, make the figures consistent using the correct underlying result.

> cutting planned route miles 18%

**Problem**
[Important] The route-distance result is repeated across two bullets.

**Why**
One bullet reports planned route miles cut by 18%, while another reports average route length falling from 120 to 90 miles. Presenting both as separate results of the routing model can make the project seem repetitive and leave a reader unsure whether they describe distinct measures.

**How to change it**
Keep one route-distance claim rather than presenting the same result twice; if the measures are different, distinguish them clearly using only accurate details.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Polish] The summary does not say whether the recommendations were adopted or what changed.
2. [Polish] The analysis description does not identify what you examined or how.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Polish] The donation-intake result uses passive voice and does not identify who mapped the process.
2. [Polish] “A day sooner” does not identify the comparison behind the time improvement.
3. [Polish] The donation-intake result should be moved ahead of the general analysis bullet.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] The slotting-guide bullet shows adoption but not what the re-slotting achieved.
2. [Polish] The bullet does not say what informed the slotting recommendations.
3. [Polish] “Again” repeats the idea that the warehouse was re-slotted.

## What already works

- “Modeled a regional grocer’s 85 daily…”: Connects the work to a concrete outcome and names what it was compared against.
- “Cut inbound freight cost per pallet…”: Pairs a specific cost improvement with a time period and a clear logistics change.

## Reviewer 6

## Overall assessment

This is a solid supply-chain and operations resume: it shows progression, relevant scope, and several measurable outcomes. The biggest issues are **metric credibility and consistency**, not lack of experience. Resolve those before polishing wording.

**Fit verdict:** Strong fit for supply-chain planning and operations roles based on the experience shown. I can’t assess fit for a specific opening without its job description.

## Highest-priority changes

1. **Resolve the routing-project math and overlapping claims.** A reduction from 120 to 90 miles is 25%, not 40%. The separate 18% figure may use a different measure or baseline; make the distinction clear or remove the conflicting result. The time-window and on-time-delivery claims also overlap, so ensure each bullet communicates a distinct result.
2. **Verify the 112% OEE figure.** Under the conventional definition, OEE is capped at 100%. Confirm the calculation and what the figure represents before including it.
3. **Revisit the forecast-accuracy claim.** Changing the MAPE calculation to exclude SKUs that don’t sell every week changes the measurement population. That can make the reported accuracy look better without improving forecasts. Use comparable calculations across the before-and-after periods, or avoid presenting this as an improvement.
4. **Distinguish measured outcomes from simulated or recommended ones.** The routing results are explicitly simulated; keep that distinction clear. For the food-bank project, establish what was actually implemented and how the claimed time savings were measured.
5. **Add context to the strongest business metrics.** Clarify measurement periods, definitions, and comparison bases where they aren’t obvious—especially for stockouts, inventory reduction, freight cost, and delivery performance.

## Section-by-section review

### Header and education

- **Contact information:** Check that the profile link works and leads to a professional profile. A city in the header is optional if location is already evident from the roles.
- **Education:** The degree and dates are clear. Since you graduated in 2018, GPA and coursework are usually unnecessary unless they are strong or specifically requested by a target role.

### Greenleaf Florist

- **Delivery volume and payments:** The daily delivery volume gives a sense of workload. Cash and card handling is less relevant to supply-chain roles, so consider whether it deserves space compared with more relevant experience. Keep it if you are targeting customer-facing or retail roles.
- **Wedding preparation and cooler stocking:** These are credible duties, but relatively routine. Keep them only if you have room or are targeting retail, food, or perishables operations. Otherwise, this section can be brief.
- **Role context:** This is your current job and differs from your prior planning roles. Be ready to explain the transition in an interview; you don’t need to add a personal explanation to the resume unless it helps clarify your career story.

### Lakeview Distribution

- **Forecast accuracy:** The change in the MAPE calculation is the main concern. Because the set of SKUs changed, the 70% and 85% figures may not be comparable. Verify the calculation and avoid implying a like-for-like improvement unless you can substantiate one.
- **Returns processing:** The before-and-after result is strong. Clarify whether the “days” are calendar or business days and how the time was measured. Make sure the description accurately reflects your contribution versus the team’s.
- **Dock scheduling:** The carrier count and wait-time reduction are useful. Confirm what “average wait” covers, how it was measured, and over what period.
- **Cycle counting:** The scope and accuracy change are compelling. Clarify how record accuracy was defined and measured, and ensure the timeframe and the 2,000-location scope are precise.

### Crestway Foods

- **Demand planning:** This is one of your strongest accomplishments. Clarify the period used for comparison, how stockouts were defined, and whether the inventory reduction means average inventory, inventory value, or another measure. Be prepared to explain the forecast approach and how the results were validated.
- **Inbound freight:** The cost reduction is clear. Check that the comparison accounts for changes in fuel prices, shipment mix, volume, and service levels, so the improvement is attributable to the consolidation rather than other factors.
- **Reorder points:** This describes meaningful scope but not an outcome. Clarify the method and what changed as a result, if you can support that with evidence. Also confirm that “every SKU” is accurate.
- **Vendor scorecards:** The bullet begins with “Scoring,” which makes it read inconsistently with the past-tense bullets around it. Fix the grammar and tense. Also verify that the scorecards were a material cause of the on-time delivery increase, rather than one factor among several, and clarify the period for the 81% to 93% comparison.
- **OEE:** Verify the 112% figure and its definition before keeping it. If it is not conventional OEE, make the measure unambiguous; otherwise, the number may undermine trust in the rest of the metrics.
- **Training and guide:** The number of planners trained is useful. “The team still uses” is a durability claim; retain it only if you can confirm it. Clarify the guide’s practical contribution if there is a measurable result.

### Projects

- **Last-Mile Routing Study:** The 18%, 40%, and 120-to-90-mile claims need reconciliation. State only results that use clearly defined, comparable baselines. Clarify whether the grocer provided real data or whether the problem was modeled from assumptions, and keep the simulated on-time result distinct from real-world performance. The project began while you were at Crestway and is listed as ongoing; be ready to explain its scope, current status, and how you handled the data.
- **Food Bank Warehouse:** The first bullet is broad and adds little beyond the project title. The intake-process result needs a clear basis for the “a day sooner” claim and confirmation that the changes were implemented. For the slotting guide, clarify whether it was used by coordinators and what your role was in the later re-slotting.

### Skills

- **Tools:** Excel and Python are relevant, but the section doesn’t show what you can do with them. Add detail only for tools, libraries, or techniques you have actually used and can discuss.
- **Methods:** The methods fit the experience. Make sure you can explain the forecasting, inventory, time-study, and routing work in enough detail to support the claims above.

## Recommended order of work

1. Correct or remove the routing percentages and verify the OEE figure.
2. Rework the forecast-accuracy claim so its before-and-after comparison is defensible.
3. Add definitions, time periods, and comparison bases to the major metrics.
4. Trim routine duties and vague project statements to give more room to your strongest, verifiable impact.
5. Tailor the resulting resume to a specific job description; the best emphasis will differ between planning, logistics, warehouse operations, and retail roles.


---

# case-6

## Résumé

```
Avery Brooks
+1 (555) 010-3319 | avery.brooks@example.com | example.com/in/abrooks
Date of birth: 9 Jan 1998 | Nationality: Brazilian
EDUCATION
Eastmoor University | B.S. in Statistics | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022
- Owned the claims backlog report and the weekly numbers the claims managers used.
- Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and
cut average hold time from 9 to 5 minutes.
- Wrote the team’s SQL style guide and review checklist, which cut query errors found in
review by half.
- Automated the monthly fraud-flag extract while also maintaining the team calendar, answering
ad hoc questions from sales, updating onboarding documents and covering the help desk on
Fridays, which saved the fraud team 10 hours a month.
Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025
- Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL
queries.
- Found customers with no orders by left-joining the orders table to the customers table and
counting rows with a null customer name.
- Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they
reached a dashboard.
- Presented the quarterly customer review to the leadership team, and two of its three
recommendations were funded in the next budget.
- Reported the national conversion rate as the simple average of 14 regional conversion rates,
without weighting by regional traffic.
- Built the weekly retention dashboard for 2.4M customers that marketing used to retarget
lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.
PROJECTS
City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present
- Modeled hourly bike-share demand for 120 stations from 2 years of public trip data,
forecasting next-day demand within 12% mean absolute error.
- Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell
from 310 to 205 a week in a replay of last summer.
- Published the notebooks and a short write-up, which the city’s open-data team linked from
its bike-share page.
Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023
- Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift
and cut the Saturday line from 50 to 20 minutes.
- Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving
the pantry its first count of unique households.
- Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by
nearly a quarter.
SKILLS
Tools: SQL, Python, Excel
Methods: dashboards, forecasting, metric design, data-quality checks
```

## Reviewer 1

4 errors, 9 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are not relevant to judging the candidate’s analyst experience. Keeping them in the file uses space on personal information rather than qualifications.

**How to change it**
Remove the date of birth and nationality details.

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] The experience entries are not ordered newest first.

**Why**
Pinecrest appears before the more recent Brightcart role, which interrupts the expected reverse-chronological scan. A reader has to work out the sequence from the dates.

**How to change it**
Move Brightcart Retail (Aug 2022–Jun 2025) above Pinecrest Insurance (Jul 2020–Jul 2022).

> B.S. in Statistics

**Problem**
[Polish] The work history should appear before education for a candidate with several years of analyst experience.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
[Important] The bullet states responsibility for the report but does not show the reporting work or what the weekly numbers helped managers accomplish.

**Why**
A reader can see that managers used the numbers, but not what they did with them or what changed as a result. The responsibility framing also leaves the analytical or reporting skill behind the work unclear.

**How to change it**
Replace “Owned” with a concrete action such as “built,” “analyzed” or “maintained,” if accurate, and replace “the weekly numbers” with [the specific metrics or report output]. Add [the decision or process the report improved], if known.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Polish] The staffing-change analysis is described only in general terms, and the bullet uses a first-person pronoun.
2. [Polish] The strongest call-center result is not the opening line of the entry.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The fraud-automation result is buried in a list of unrelated support duties.

**Why**
The sentence places the time saving after several other tasks, so a reader may not know which work produced it. The long list also makes the analyst accomplishment read like a task list.

**How to change it**
Move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.” Cut the unrelated duty list or retain only a duty relevant to the analyst role.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
1. [Important] The 90% improvement is not tied to a defined measure.
2. [Polish] The two uses of “by” make the result-and-method relationship awkward to scan.

**Why**
1. A reader cannot tell whether “reporting efficiency” means preparation time, manual effort or something else. Without naming the measure, the percentage is hard to interpret or assess.

**How to change it**
1. Replace “reporting efficiency” with [the actual measure] and, if accurate, add [its before-and-after values].

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] A null customer name does not reliably identify customers with no orders.
2. [Important] The finding about customers with no orders lacks a scale or a stated consequence.

**Why**
1. A customer may have a null name even when an order matched in the join, so this condition cannot distinguish an unmatched customer from a matched one. The correct check is whether a non-null order identifier from the joined orders table is null.
2. The reader can see what the analysis found, but not how large the group was or what the finding informed. Without one of those anchors, its practical value is difficult to judge.

**How to change it**
1. Replace the null-name condition with a count of customers whose joined order identifier is null.
2. Add [the number or share of customers identified] or [the decision or action the finding informed], if known.

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] The bullet does not identify what kind of data-quality check was used.

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The simple average of regional conversion rates is not the national conversion rate when regional traffic volumes differ.
2. [Important] The conversion-rate report has no stated consequence or concrete reported result.

**Why**
1. An unweighted average gives each region equal influence even when their traffic differs. A national rate must reflect conversions and traffic across all regions; the line also does not say whether the limitation was corrected or flagged.
2. The reader can see how the rate was calculated, but not what the reporting mattered for. A decision it informed, or the rate and a relevant comparison, would give the work a clearer value.

**How to change it**
1. Replace the simple average with total conversions divided by total traffic, or a traffic-weighted average of the 14 regional rates. State that you corrected or flagged the earlier calculation only if you did so.
2. Add [the decision or action the report informed], if there was one; otherwise add [the reported rate or its change against a relevant comparison].

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The strongest result is at the end of the entry rather than leading it, and the entry’s topics lack a clear progression.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Important] The bullet does not name the forecasting approach or establish what the 12% error is relative to.
2. [Polish] The forecast-accuracy result appears after the station count and data period.

**Why**
1. A reader cannot see the technical method behind the forecast, and the percentage error has no stated basis or comparison. That makes both the work and its predictive performance difficult to assess.

**How to change it**
1. Replace “Modeled” with [the forecasting approach used] and replace the error phrase with [the exact error metric and unit] and, if available, [baseline error for comparison].

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
[Polish] The strongest project outcome is not the first project bullet.

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] “Which” does not make clear whether the notebooks or the write-up were linked.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Important] The pantry outcome comes after a long explanation rather than leading the project entry.

**Why**
A scanning reader reaches the shift change and shorter Saturday line only after the “so the pantry” clause. Leading with that outcome would make the project’s impact clearer, while removing the unrelated shopper-retention claim would keep the entry focused on pantry work.

**How to change it**
Move the shift change and line-time reduction to the start of the entry. Remove the shopper-retention bullet, which does not describe a pantry outcome.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The unique-household result is wordy and does not give the count.

**Why**
The 9,000 logs describe the amount of data processed, not the result of matching repeat visitors. Without the household count, the new result remains difficult to judge.

**How to change it**
Replace this phrase with “identified [number of unique households],” using a count only if you can confirm it.

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The shopper-retention claim duplicates the Brightcart achievement and does not describe a pantry outcome.
2. The “nearly a quarter” increase has no stated comparison.
3. The bullet names a dashboard but does not explain what it did to inform the reported increase.

**Why**
1. The résumé attributes a 2.4-million-customer retention dashboard and repeat-purchase lift to the Brightcart role as well. Repeating nearly the same achievement here makes its attribution inconsistent and the pantry entry less credible.
2. A reader cannot tell what the repeat-purchase increase is measured against. That leaves the size and meaning of the claimed change unclear.
3. A reader cannot tell how building the dashboard relates to the repeat-purchase result. That weakens the connection between the deliverable and the claimed outcome.

**How to change it**
1. Replace the bullet with [the actual pantry-specific result], if one exists, or remove it.
2. If this is an accurate pantry-specific result, replace the relative increase with [the measured before-and-after values]; otherwise remove the claim.
3. If this is an accurate pantry-specific achievement, add [how the dashboard informed the reported increase]; otherwise remove the claim.

## What already works

- “Wrote the team’s SQL style guide…”: Connects a specific team resource to a measurable reduction in review-found errors.
- “Presented the quarterly customer review to…”: The funding outcome makes the work’s influence clear.

## Reviewer 2

## Overall

You have several strong, quantified outcomes, but a few accuracy and consistency issues could undermine trust. Fix those first, then tighten vague metrics and add links to your work. I’m describing what to change and why, not rewriting any bullets.

## Contact information

- **Remove your date of birth and nationality.** They aren’t needed for most U.S. applications and can expose you to irrelevant bias. If work authorization or sponsorship is relevant, state that directly instead.
- **Add a GitHub or portfolio link if it contains relevant work.** The bike-share project would benefit from a direct link to its notebooks and write-up. Keep LinkedIn; a GitHub link is useful when it shows clean, documented analysis.

## Structure and ordering

- **Move Experience ahead of Education.** With several years of relevant work, your professional experience is likely the strongest evidence for a data analyst role.
- **Consider placing Skills near the top.** This makes relevant keywords easier for recruiters and applicant-tracking systems to find. Keep the section concise and limited to skills you can discuss confidently.

## Pinecrest Insurance

- **Claims backlog report bullet:** Specify what you owned beyond producing the report—for example, its scope, audience, or how managers used it. “The weekly numbers” is vague, so a reader can’t tell what you analyzed or why it mattered.
- **Call-center analysis bullet:** Keep the quantified result. Clarify the measurement period or volume behind the hold-time comparison if you have it, and make sure the staffing change and improvement are accurately attributed to your analysis.
- **SQL style-guide bullet:** Keep the result, but give context for “cut query errors … by half,” such as the timeframe or number of reviews compared. That makes the improvement easier to assess.
- **Fraud-extract bullet:** Separate the automation impact from the unrelated calendar, sales, onboarding, and help-desk duties—or remove those details if they aren’t relevant to your target role. As written, the long list distracts from the useful result. Clarify how the 10 hours saved was measured.

## Brightcart Retail

- **Reporting-efficiency bullet:** Define what “efficiency” means. If you measured preparation time, manual effort, or turnaround time, identify the measure and comparison period. “90%” is impressive but hard to interpret without that context.
- **Customers-with-no-orders bullet:** Verify the SQL logic before including this. If you left-joined customers to orders, testing for a null **customer name** is not a reliable way to identify unmatched orders; the customer record is on the preserved side of that join. Check a field from the orders table that should be present for a match. Also say what the finding was used for and, if available, how many customers it affected.
- **Data-quality-checks bullet:** This is a solid technical accomplishment. Add the period over which the checks caught the 15 broken loads and, if known, what the checks prevented or enabled.
- **Quarterly-review bullet:** Keep the funding outcome. Clarify the connection between your recommendations and the funded decisions, and include the resulting business outcome if you can support it.
- **National-conversion-rate bullet:** **Do not present this as an accomplishment.** A simple average of regional conversion rates can misstate the national rate when regions have different traffic. Recalculate from total conversions divided by total eligible traffic (or use an appropriate traffic-weighted calculation). If this flawed figure was shared at work, correct the underlying reporting before using any related result on your resume.
- **Retention-dashboard bullet:** Check the causal claim that the dashboard lifted repeat purchase from 22% to 27%. A dashboard used for retargeting does not, by itself, establish that it caused the increase; use evidence such as a controlled test if you have it, or avoid claiming causation. Also clarify the measurement period and population behind the rates, and what “for 2.4M customers” means.

## Projects

### City Bike-Share Demand Study

- **Forecasting bullet:** Clarify the forecast target and evaluation setup. “12% mean absolute error” is ambiguous because ordinary mean absolute error is expressed in the target’s units, while a percentage error needs a defined percentage metric. State the evaluation period or holdout approach in the resume if space allows.
- **Rebalancing bullet:** Make clear that the decrease came from a retrospective replay, not a live operational change. Briefly clarify how the replay compared the forecast-driven approach with the operator’s schedule so readers can interpret the result fairly.
- **Publication bullet:** Keep this—being linked by the city’s open-data team is useful validation. Add a direct link to the notebooks or write-up.

### Food Pantry Visit Analysis

- **Visit and wait-time bullet:** Keep the outcome. Clarify the period over which the Saturday line was measured and how wait time was recorded, if you have those details.
- **Data-cleaning and household-count bullet:** Keep the scale and result. If possible, indicate how repeat visitors were matched or validated, since the reliability of the unique-household count depends on that method.
- **2.4-million-shoppers bullet:** **Remove this from the pantry project.** It appears to duplicate the Brightcart retention-dashboard claim and is inconsistent with a food-pantry analysis. As it stands, it looks like a copy-paste error and raises questions about the accuracy of the rest of the resume.

## Skills and Education

- **Skills:** The current list is credible but sparse for a data analyst resume. Add relevant tools, platforms, or specific analytical methods you have actually used—such as a BI tool, database platform, or version control—only if you can discuss them in an interview. “Dashboards” and “metric design” are broad; be prepared to describe the methods behind them.
- **Education:** The degree and dates are clear. Relevant coursework or GPA is optional; include it only if it adds value for the roles you’re targeting.

## Fix first

1. Recheck the left-join logic and the national conversion calculation.
2. Remove the mismatched pantry bullet and verify the Brightcart retention claim.
3. Clarify the metrics that currently lack a defined measure or evaluation method.
4. Add direct links to your project work and remove personal details that aren’t needed.

## Reviewer 3

## Overall assessment

This has solid evidence for **data analyst, BI analyst, or product/operations analytics** roles: operational reporting, SQL, data-quality work, dashboards, and projects with measurable outcomes. The main concern is not lack of experience—it’s **credibility and accuracy**. One bullet describes a statistically invalid national conversion calculation, another describes SQL logic that may not find customers without orders, and a pantry-project bullet appears copied from your retail role. Fix those before applying.

I reviewed the pasted text only. I couldn’t assess the original document’s visual layout or how it extracts from a resume file. I have not rewritten any lines or supplied replacement wording.

## Changes to make, section by section

### Contact and personal details

- **Remove your date of birth and nationality** unless an application specifically requires them. They aren’t needed to assess your analytics qualifications, and nationality is not the same as work authorization.
- **Check the profile link in the version you submit.** The supplied address appears anonymized; make sure your actual resume has a working, complete link.

### Education

- **B.S. in Statistics:** Keep this. It supports your analytical work.
- **Dates and location:** These are clear as written. No change is necessary unless you want to shorten the education entry to make room for more relevant experience.

### Pinecrest Insurance

- **Claims backlog report and weekly numbers:** Clarify what you were responsible for and how the managers used the reporting. “Owned” signals responsibility, but “the weekly numbers” is vague and doesn’t show the report’s purpose or scope.
- **Call-center analysis and hold-time reduction:** Keep the result, but verify the connection between your analysis, moving two agents, and the reduction from 9 to 5 minutes. Make clear whether you recommended the change or implemented it, and how the before-and-after periods were measured. The outcome is strong; the attribution needs to be defensible.
- **SQL style guide and review checklist:** Keep this, but be ready to support “cut query errors by half” with a timeframe and a clear basis for the comparison. Without that context, the size of the improvement is hard to interpret.
- **Fraud-flag automation and other duties:** Separate the automation achievement from the calendar, sales questions, onboarding documents, and Friday help-desk coverage—or remove the less relevant duties. The current bullet bundles unrelated work, obscures the technical contribution, and makes the 10-hours-a-month saving harder to connect to the automation. Verify how that time saving was estimated.

### Brightcart Retail

- **90% reporting-efficiency improvement:** Define what “efficiency” measures and how it was calculated. As written, 90% is a large but ambiguous claim. If you can’t substantiate the metric, don’t rely on it.
- **Customers with no orders:** Recheck this bullet’s SQL logic before keeping it. To find customers with no matching orders, the query needs to preserve the customer records and test for a missing value on the **orders** side of the join—typically an order identifier that cannot be null for a matched order. Checking for a null customer name can instead identify records with missing names. As written, the method does not reliably support the stated finding.
- **Data-quality checks across 40 tables:** Keep this. It gives useful scale and a concrete result. Add context if available about the period covered and what counted as a broken load; that would make the “15” more meaningful.
- **Quarterly review and funded recommendations:** Keep this. Clarify your role in developing the recommendations, and don’t imply that presenting them caused the funding unless you can support that connection. Funding also does not necessarily mean the recommendations were implemented.
- **National conversion rate:** Correct or remove this before submitting. A simple average of 14 regional rates does not generally produce the national conversion rate when regions have different traffic volumes. Calculate the overall rate from the combined totals if the underlying counts support it; if you intentionally mean the average regional rate, label and interpret it as such. This issue is particularly important because it conflicts with the statistical judgment the rest of the resume is asking readers to trust.
- **Retention dashboard and 22% to 27% repeat purchase:** Keep the dashboard and result if you can substantiate them. Clarify the measurement period, cohort definition, and your contribution. Be careful with the claim that the dashboard “lifted” the rate: the bullet says marketing used it for retargeting, but that alone does not establish that the dashboard or campaign caused the increase. Also distinguish a five-percentage-point change from a relative percentage increase when discussing the result.

### Projects

**City Bike-Share Demand Study**

- **Forecasting 120 stations with 12% mean absolute error:** Keep the scale and evaluation, but make sure “12%” has a defined basis. Mean absolute error is ordinarily expressed in the same units as the demand being predicted; a percentage form needs a clear normalization. Be prepared to explain how you split training and test data and avoided using future information.
- **Rebalancing replay and empty-station hours:** Keep the result only with the simulation context prominent. You describe a replay, not a live operational deployment. Clarify what was replayed, what assumptions the comparison used, and whether the reduction came from your forecast-driven approach rather than a different schedule or other assumptions.
- **Published notebooks and city link:** This is useful evidence of a public project. Keep the distinction clear: the open-data team linking to your work shows it was linked from their page; don’t imply endorsement or adoption unless that happened. Include a working link in the actual resume if appropriate.

**Food Pantry Visit Analysis**

- **Shift change and shorter Saturday line:** Keep the outcome, but clarify your role in a team of three and how the line-time comparison was measured. The bullet currently moves quickly from analysis to an operational result without showing who made the change or how the result was attributed.
- **9,000 handwritten logs and unique-household count:** This demonstrates substantial data cleanup. Clarify your role and how repeat visitors were matched, since matching handwritten records can be uncertain. Because these are sensitive visit records, ensure the work was authorized and that no identifiable or confidential information is exposed in any public materials.
- **Retention dashboard for 2.4 million shoppers:** Remove this from the pantry project. It appears copied from the Brightcart role and is unrelated to a food pantry. Leaving it here creates a serious credibility problem and makes the reader question the surrounding project claims.

### Skills

- **Tools:** SQL, Python, and Excel are relevant. Add other tools only if you have actually used them and can discuss that use; the resume currently gives no detail about the environment behind the dashboards or analysis.
- **Methods:** “Dashboards,” “forecasting,” and “data-quality checks” are supported elsewhere in the resume. “Metric design” needs particular care given the incorrect national conversion-rate calculation; keep it only if you can demonstrate sound metric definitions and aggregation choices. Use the space for methods that are both relevant to your target and supported by your experience.

## Fix these first

1. Remove the copied 2.4-million-shopper bullet from the pantry project.
2. Correct or remove the national conversion-rate bullet, and verify the SQL logic in the no-orders bullet.
3. Substantiate the large impact claims—especially the 90% efficiency improvement, hold-time reduction, and retention lift.

If you share a target job description, I can assess which of the remaining material to emphasize for that role.

## Reviewer 4

Your strongest material is the work with clear scale and outcomes. The biggest fixes are a duplicated bullet, two descriptions that raise technical accuracy questions, and a few impact claims that need clearer evidence.

### Header and education
- **Contact line:** Make sure the LinkedIn URL and any other link lead to current, relevant profiles or work. Keep the phone number and email professional.
- **Date of birth and nationality:** Remove these for a typical U.S. application; they are generally unnecessary and can invite bias. Check local conventions if applying elsewhere.
- **Education:** The degree and dates are sufficient. Consider whether the location adds anything, since it appears throughout the résumé.

### Experience
- **Ordering:** Put Brightcart before Pinecrest so your most recent role appears first.
- **Pinecrest — claims backlog report:** Specify what you owned beyond producing “weekly numbers” and what decision the report supported. As written, its value is vague.
- **Pinecrest — call-center analysis:** Keep the before-and-after hold times. Clarify whether the staffing change followed your recommendation, so the connection between your analysis and the result is precise.
- **Pinecrest — SQL guide:** Keep this; the reduction in review errors makes the contribution clear. Be ready to explain how the reduction was measured.
- **Pinecrest — fraud extract and other duties:** Separate or remove the unrelated administrative duties. They bury the automation achievement and make it unclear which work saved 10 hours a month.
- **Brightcart — revenue report:** Define what became 90% more efficient—preparation time, runtime, or something else—and provide the baseline if you have it.
- **Brightcart — customers with no orders:** Correct the SQL description before using this bullet. The stated join direction and null check do not reliably identify customers without orders. Then explain why finding them mattered; the current bullet describes a technique, not a result.
- **Brightcart — data-quality checks:** Keep this strong bullet. If known, indicate the consequence of catching the broken loads before dashboard publication.
- **Brightcart — quarterly review:** Clarify your analytical contribution to the recommendations, not just that you presented them.
- **Brightcart — conversion rate:** Remove this bullet or replace it with an accurate account of how you corrected the metric. An unweighted average of regional rates can misstate the national rate when traffic differs across regions.
- **Brightcart — retention dashboard:** Keep the scale and measured change, but distinguish the dashboard’s contribution from the marketing campaign’s effect. “Lifting” purchases implies a causal result you may not be able to establish.

### Projects
- **Bike-share — forecast:** Check the error metric. Mean absolute error has demand units; if 12% is a normalized or percentage-based metric, name the metric you actually calculated.
- **Bike-share — rebalancing replay:** Make unmistakable that the reduction was **simulated**, not observed in live operations. Briefly establish the comparison used in the replay.
- **Bike-share — publication:** Keep this if the city’s link is verifiable; link to the work so a reviewer can inspect it.
- **Food pantry — shift change:** Keep the operational outcome. Confirm that the 50-to-20-minute comparison uses comparable Saturdays and that the shift change was the main reason for the improvement.
- **Food pantry — visit logs:** Keep this useful scale and outcome; clarify your role in matching repeat visitors, especially since this was a team project.
- **Food pantry — retention dashboard:** Delete it. It repeats the Brightcart achievement, conflicts with the pantry project’s scope, and undermines credibility.

### Skills and final check
- **Skills:** Keep only tools and methods you can demonstrate in the bullets or discuss confidently. Add relevant specifics only if they match the roles you’re targeting.
- **Dates and consistency:** Verify that the independent project is still active before retaining “Present.” Use consistent date formatting and check that every metric, attribution, and link can be substantiated.

## Reviewer 5

## Overall assessment

You have relevant analyst experience and several quantified outcomes, but the resume currently has **serious credibility and data-quality problems**. Two bullets describe the same 2.4-million-customer retention result in unrelated contexts, and one bullet openly reports an incorrectly calculated metric. Those issues could outweigh the otherwise strong results.

**Fit verdict: risky fit for general data analyst roles, based on this resume alone.** There’s no target job description, so I can’t assess role-specific fit.

I’ll stick to what to change and why—no rewritten lines or example wording.

## Header and education

- **Remove your date of birth and nationality** unless an application specifically requires them. They take up space and disclose personal information that generally isn’t needed to assess your qualifications.
- **Check that your email and profile URL are real, working professional contact details.** The example-domain email and short profile URL look like placeholders; placeholders can make the resume appear unfinished.
- **Keep the education entry as is unless you have relevant details to add.** Coursework, GPA, or honors are worth including only if they strengthen your case for the roles you’re targeting.

## Pinecrest Insurance

- **Claims backlog report / weekly numbers:** Clarify the scope of what you owned and how the managers used it, or remove it if you can’t make its impact more concrete. As written, “owned” and “used” are broad and don’t convey scale or outcome.
- **Call-center analysis and hold-time reduction:** Support the implied connection between your findings and the change in staffing. Be ready to explain the before-and-after measurement, how long it was observed, and whether other changes could have affected hold time. Otherwise, the result may sound more causal than your evidence supports.
- **SQL style guide and review checklist:** Define what counted as a query error and how the “half” reduction was measured—for example, the comparison period and volume of reviews. Without a baseline, the percentage is hard to evaluate.
- **Fraud extract and miscellaneous duties:** Reduce the list of calendar, sales, onboarding, and help-desk tasks; it dilutes the more relevant automation work. Clarify how the 10 hours per month was estimated and whether the automation itself accounts for that saving.

## Brightcart Retail

- **Revenue-report efficiency improvement:** Specify what “efficiency” measures and what the comparison was. A 90% improvement is striking, but without a defined before-and-after measure, it is difficult to interpret or verify.
- **Customers with no orders:** Revisit the method. Counting null customer names can misclassify records if a customer’s name is missing; the analysis should rely on a reliably populated customer identifier and account for duplicate records. As written, this bullet raises questions about the correctness of the result.
- **Data-quality checks:** Explain the time period and what “caught” means: detected an issue, prevented a bad dashboard, or something else. Also be prepared to substantiate the claim about the 40 tables and 15 broken loads.
- **Quarterly review recommendations:** Clarify your contribution to the presentation and distinguish recommendations being funded from recommendations causing the funding decision. Funding is a useful outcome, but the current wording leaves your role and the connection unclear.
- **National conversion-rate calculation:** Remove this bullet. A simple average of regional conversion rates generally gives regions equal weight regardless of traffic, so it can misstate the national rate. Including this admission as a resume accomplishment signals a serious metric-design problem. Recalculate the metric correctly before using it anywhere.
- **Retention dashboard and repeat-purchase increase:** Define the population, measurement period, and how the 22% and 27% rates were calculated. Also distinguish dashboard use from the cause of the increase: a dashboard used for retargeting does not by itself establish that it lifted repeat purchases. Be ready to explain whether you used a control or comparison group and what “90-day” refers to.

## Projects

### City Bike-Share Demand Study

- **Forecast accuracy:** Explain what “within 12% mean absolute error” means in measurable terms. MAE is usually expressed in the units being forecast, so a percentage needs a defined denominator or normalization. Be prepared to explain your time-based train/test split and the baseline you compared against.
- **Empty-station reduction in a replay:** Make clear that this was a simulation or backtest, not a real-world reduction, if that is what you did. Define “empty-station hours” and explain the replay assumptions; comparing a forecast with a schedule alone doesn’t prove the schedule change would produce that outcome.
- **Publication and city link:** Add a working project link if you want reviewers to verify the work. Ensure the city’s link is accurately described and does not imply formal endorsement or adoption unless that occurred. Since the project is ongoing, make clear which results are complete and when they were produced.

### Food Pantry Visit Analysis

- **Shift change and shorter wait:** Clarify how wait times were measured and how the shift change relates to the reported reduction. The resume currently attributes a meaningful operational result to the analysis without showing how that connection was established.
- **Cleaning handwritten logs and matching repeat visitors:** State your own contribution within the three-person team and be ready to explain how you handled ambiguous records and repeat-visitor matching. Because these are pantry visitors’ records, ensure the work was appropriately authorized and privacy-conscious.
- **Retention dashboard for 2.4 million shoppers:** Remove this bullet unless there really was a separate pantry-related dashboard and the stated shopper-scale result belongs to it. As written, it duplicates the Brightcart result almost exactly and is implausible in this project context. It looks like a copy-paste error and is the most urgent credibility issue to fix.

## Skills

- **Make the skills section more specific and verifiable.** “SQL, Python, Excel” and broad methods don’t show which tools or techniques you can actually use. Add detail only for skills you can substantiate in an interview or portfolio.
- **Check that “metric design” is consistent with the work shown.** The national conversion-rate bullet undermines that claim until the calculation issue is resolved.

## Highest-priority changes

1. Remove or resolve the duplicated retention bullet and the incorrect conversion-rate bullet.
2. Verify every number, baseline, time period, and claimed causal effect.
3. Clarify the simulation versus real-world outcomes in the bike-share project.
4. Cut lower-value task lists and vague claims to make room for specific, defensible evidence.
5. Remove personal details that are not needed and replace any placeholder contact information.

The fastest useful next step is to audit each percentage and impact claim against the underlying data or documentation before polishing the wording.

## Reviewer 6

## Highest-priority changes

1. **Remove the date of birth.** It is not needed for a typical U.S. resume and can invite irrelevant bias.
2. **Remove or reconsider nationality.** Include work-authorization information only if it is relevant to the roles you’re applying for; nationality itself usually isn’t.
3. **Fix the customer-with-no-orders bullet.** The join direction and null check described there would not reliably identify customers without orders.
4. **Remove the pantry dashboard bullet.** Its claim about 2.4 million shoppers and retail purchases is inconsistent with the pantry project and closely duplicates the Brightcart result. It will undermine trust in the rest of the resume.
5. **Resolve the conversion-rate bullet.** It currently describes a flawed calculation as a work accomplishment. Don’t present the unweighted national rate as valid. If you corrected the metric, describe your correction and its result; otherwise, remove the bullet.
6. **Reorder Experience.** Put Brightcart before Pinecrest so the roles are in reverse chronological order.

## Header and Education

- **Phone, email, and profile link:** Check that the profile URL works and that the displayed link is recognizable and professional. Keep the contact information easy to scan.
- **Education entry:** This is clear. Verify the degree name and institution details match your official records. Since you have several years of experience, consider placing Experience before Education.

## Experience

### Pinecrest Insurance

- **“Owned the claims backlog report…”** — The scope and result are vague, especially “the weekly numbers.” Specify what you were responsible for and why the report mattered, ideally with a measure of its scale or use.
- **Call-center analysis and hold-time reduction** — This is one of your strongest bullets. Make clear whether your analysis led to the staffing change or whether you contributed to a broader decision. Add the relevant timeframe or data volume if it helps establish scale.
- **SQL style guide and review checklist** — Clarify the period and basis for the “half” reduction so the result is measurable and credible. If you know how many errors or queries were involved, that could provide useful context.
- **Fraud extract plus calendar, ad hoc questions, onboarding, and help-desk work** — This combines a strong automation result with several unrelated duties, which obscures the impact. Prioritize the automation result and quantify what the 10 monthly hours represent. Keep the other duties only if they’re important to the roles you’re targeting.

### Brightcart Retail

- **Reporting efficiency improved by 90%** — “Efficiency” is not defined. State what changed in practical terms—such as time spent, turnaround time, or manual steps—and make sure the percentage has a defensible baseline.
- **Customers with no orders** — As described, the query logic is wrong: starting from orders can exclude customers who have no matching order, and a null customer name is not a reliable test for an unmatched order. Recheck the query and the result before including this claim.
- **Data-quality checks on 40 tables** — This is concrete and relevant. Add the period over which the checks caught 15 broken loads, if available, so readers can judge the scale.
- **Quarterly review and funded recommendations** — The outcome is useful. Clarify your own contribution to the review and, if possible, what the recommendations addressed; “two of three were funded” alone doesn’t show their significance.
- **National conversion-rate calculation** — This admits to a flawed metric and may raise questions about analytical judgment. Remove it unless you can accurately describe a subsequent correction and its impact. Do not leave the incorrect calculation presented as a result.
- **Retention dashboard and repeat-purchase lift** — Clarify the measurement period, cohort definition, and how the lift was assessed. Because the result is phrased causally, be sure the dashboard or related work can reasonably be credited with the change. Also distinguish a percentage-point change from a percentage change.

## Projects

### City Bike-Share Demand Study

- **Demand forecast** — “Within 12% mean absolute error” is ambiguous because MAE is usually expressed in the same units as the forecast, while a percentage suggests a normalized or relative error measure. Make the metric and validation approach clear. Including how you tested the forecast would help readers assess it.
- **Rebalancing replay and empty-station hours** — Make explicit that this was a replay or simulation, not a measured real-world reduction. Explain the comparison period or assumptions so the result isn’t mistaken for an operational outcome.
- **Published notebooks and city link** — This is a useful credibility signal. Ensure the notebooks and write-up are accessible and that the city’s link is still live.
- **Project dates** — Keep “Present” only if the project is still active. Because it overlaps with Brightcart employment, make sure the dates accurately reflect a side project rather than implying a gap or a conflicting job.

### Food Pantry Visit Analysis

- **Volunteer shift and shorter Saturday line** — This is a clear practical result. Clarify your role in the recommendation or evaluation, and give enough context to show how the line-time change was measured.
- **Cleaning 9,000 logs and identifying households** — This demonstrates useful data work. Explain the practical use or outcome of producing the unique-household count, if there was one. Be prepared to explain how you handled ambiguous handwritten records and repeat-visitor matching.
- **Dashboard for 2.4 million shoppers** — Delete this bullet. The scale and retail context do not fit a pantry project, and the claim duplicates the Brightcart result. Check the rest of the project for any other copied or inaccurate details.

## Skills and presentation

- **Tools:** SQL, Python, and Excel are relevant, but the list may be too limited for the roles you want. Add other tools or platforms only if you have actually used them and can discuss your experience.
- **Methods:** “Dashboards,” “forecasting,” and “data-quality checks” are broad. Tailor this section to the job descriptions you’re targeting and include methods you can substantiate. “Metric design” is especially worth being prepared to explain given the conversion-rate issue.
- **Formatting:** Keep dates, locations, punctuation, and bullet formatting consistent throughout. Ensure the resume is easy to scan and that the linked portfolio or profile is accessible.

Overall, the resume has good quantitative outcomes, but the incorrect query description, flawed conversion-rate calculation, and misplaced pantry claim are serious credibility risks. Resolve those before polishing the wording.


---

# case-7

## Résumé

```
Taylor Nguyen
+1 (555) 010-6642 | taylor.nguyen@example.com | example.com/code/tnguyen
EDUCATION
Westfield State University | M.S. in Computer Science | Metro City, USA | Sep 2024 - Expected Jun 2026
Westfield State University | B.S. in Computer Science | Metro City, USA | Sep 2019 - Jun 2023
EXPERIENCE
Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025
- Rebuilt the hotel search results page in React with server-side rendering, cutting median
load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.
- Cut the booking flow’s JavaScript from 410 KB to 260 KB by code-splitting the calendar and
map widgets.
- Added keyboard navigation and screen-reader labels to the date picker, fixing all 14
accessibility issues flagged in the audit.
- Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and
deferring the analytics script, raised the checkout page’s Lighthouse performance score from
52 to 91.
- Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy"
to the hero image.
- Documented the design-system tokens in Storybook so designers could check spacing and color
values without asking engineers.
Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024
- Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.
- Interviewed 8 department editors about publishing; the findings led to a preview mode that
cut broken pages reported by students from 30 to 6 a month.
- Writes the accessibility checklist for all university web pages, reducing failed audits from
12 to 2 a semester.
- Rebuilt the course-catalog search with client-side filtering, cutting search time from 4
seconds to under 1.
PROJECTS
Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present
- Built a progressive web app showing live bus arrivals for 400 stops, used by about 900
riders a week.
- Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop
list offline.
- Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved
stops.
Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024
- Worked on the frontend of the booking flow using React and TypeScript.
- Wrote the booking calendar component and its tests, handling overlapping bookings and time-
zone changes.
- Presented the demo to the library staff and handed over the code with setup notes.
SKILLS
Tools: TypeScript, React, Vue, Storybok, Angular
Methods: server-side rendering, accessibility, component testing
```

## Reviewer 1

Your resume has strong, quantified work. The most important changes are to fix a few technical and numerical inconsistencies; those could make a reviewer doubt otherwise credible results. I’ll go in order and suggest changes without rewriting your lines.

### Header and education
- **Contact line:** Make sure the code URL leads directly to a public profile or portfolio and that all contact details are the ones you intend to use. If the address and phone number here are placeholders, replace them before applying.
- **M.S. and B.S. lines:** Keep both. Confirm that the M.S. expected graduation date is still accurate when you submit the resume.

### Lumen Travel
- **Hotel search results:** Keep the metrics. Specify what “load time” measures if it could be confused with another performance metric, and make sure the A/B test supports attributing the booking increase to this change.
- **Booking-flow JavaScript:** Keep. Clarify whether 410 KB and 260 KB are transferred, compressed, or uncompressed sizes so the comparison is unambiguous.
- **Date-picker accessibility:** Keep. Scope “all 14” clearly to the issues identified in that audit, rather than implying the date picker has no remaining accessibility issues.
- **Checkout Lighthouse score:** Change the opening construction so it reads as a completed action, consistent with your other bullets. Consider whether you can identify which changes you made yourself; listing four changes makes your contribution harder to distinguish.
- **Landing-page LCP:** Verify the explanation before keeping this bullet. Lazy-loading a hero image generally *delays* an above-the-fold LCP image, so the stated cause and improvement appear inconsistent. Correct the technique or remove the causal claim if you cannot substantiate it.
- **Storybook tokens:** Keep, but add evidence of adoption or time saved if you have it. The current benefit is plausible but less concrete than your other bullets.

### Westfield State University experience
- **JavaScript bundle / WebP:** Correct this claim. Converting PNGs to WebP can reduce image bytes or page weight, but would not ordinarily reduce a **JavaScript bundle** by 60%. Identify the metric that actually fell.
- **Editor interviews / preview mode:** Keep. Make sure the before-and-after broken-page counts cover comparable periods and that you can support the connection to preview mode.
- **Accessibility checklist:** Change “Writes” to past tense for a role that ended in August 2024. Clarify whether you authored the checklist, maintained it, or both.
- **Course-catalog search:** Keep if the measurement is sound. Define what the four-to-under-one-second figure measures, particularly because client-side filtering does not necessarily make initial page loading faster.

### Transit Arrival Web App
- **App and weekly riders:** Keep. Be ready to explain how you measure approximately 900 weekly riders.
- **Cold-start time:** Fix the math: 3.0s to 1.5s is a **50% reduction in time**, not 75%. Also check whether caching an offline stop list affects the “cold-start” condition you measured; those terms may conflict.
- **Returning riders:** Distinguish a **10-percentage-point** increase (30% to 40%) from a 10% relative increase. Keep the first-month timeframe if that is the period measured.

### Library Room Booking
- **Project heading and frontend bullet:** Resolve the framework contradiction: the heading says **Vue**, while the bullet says **React and TypeScript**. List the technologies actually used and align both places.
- **Calendar and tests:** Keep. This is a useful description of your specific contribution; confirm that the overlap and time-zone cases were covered by the component or its tests, as implied.
- **Demo and handoff:** Keep if space allows. If you need room, this is less compelling than the calendar bullet because it says less about the software or its outcome.

### Skills
- **Tools:** Correct **“Storybok”** to **“Storybook.”** Include Angular only if you can discuss work you’ve done with it. Consider separating languages, frameworks, and tools so the list is easier to scan.
- **Methods:** Keep only methods you can substantiate through your experience or projects. “Component testing,” for instance, is supported by the booking-calendar bullet.

## Reviewer 2

# Resume review

Your strongest material is the measured frontend work: performance improvements, an A/B test, accessibility fixes, and evidence of user adoption. Before polishing wording, fix the accuracy and consistency issues below. I’m describing what to change and why, not rewriting your bullets.

## Highest-priority fixes

1. **Correct the percentage calculations in the Transit project.**
   - The change from 3.0 seconds to 1.5 seconds is a **50% reduction**, not a 75% improvement.
   - Returning riders increasing from 30% to 40% is a **10-percentage-point increase**, not a 10% relative increase.
   - These are easy-to-check inconsistencies that can undermine confidence in the rest of your metrics.

2. **Resolve the Library Room Booking technology mismatch.**
   - The project heading lists Vue, but its first bullet says React and TypeScript. Confirm which framework the project actually used and make the heading and bullets consistent.
   - If you used more than one framework, make clear which one was used for this project.

3. **Check the technical claim about the university JavaScript bundle.**
   - Converting PNG images to WebP ordinarily reduces image-file or page weight, not JavaScript bundle size. Verify what you measured. If the assets were included in a bundle, make that measurement precise; otherwise, correct the metric or describe the impact in the appropriate terms.

4. **Revisit the hero-image lazy-loading claim.**
   - A hero image is usually immediately visible and can be the page’s largest contentful paint element. Lazy-loading it can delay that paint rather than improve it. Verify the change and the measurement; if other changes contributed, don’t attribute the full LCP reduction to lazy-loading alone.

5. **Fix the tense in the two current/past-role bullets.**
   - “Moving image resizing…” is grammatically inconsistent with the past-tense bullets around it.
   - “Writes the accessibility checklist…” is present tense in a role that ended in August 2024. Use a tense that accurately reflects whether this was completed work or an ongoing responsibility.

## Line-by-line feedback

### Lumen Travel — Frontend Engineering Intern

- **Hotel search page / SSR / bookings bullet:** Keep the A/B-test result, but clarify whether the 9% is a relative lift or a percentage-point change, and ensure the test supports attributing the booking change to your work. The before-and-after load-time figures are strong.
- **JavaScript size reduction bullet:** This is clear and quantified. If available, specify how the reduction was measured—such as compressed transfer size or another bundle-size measure—so the metric is interpretable.
- **Accessibility bullet:** The specific audit count is useful. Make sure “all 14” refers to issues you personally resolved, and that the fixes were verified rather than simply implemented.
- **Lighthouse performance bullet:** Fix the tense. Also distinguish the contribution of the listed optimizations if they were implemented at different times; as written, it can sound as though each contributed equally to the score change.
- **LCP / hero-image bullet:** Verify the lazy-loading detail and the causal claim, as noted above. This overlaps with the Lighthouse bullet by presenting another performance result; keep both only if they demonstrate distinct work and measurements.
- **Storybook documentation bullet:** Correct the spelling in your skills list (“Storybok”). This bullet could also make your contribution or the design-team benefit more concrete if you have evidence, since the current impact is qualitative.

### Westfield State University — Web Developer, IT Services

- **PNG-to-WebP / bundle-size bullet:** Resolve the bundle-versus-image-weight measurement issue. The 60% reduction is compelling only if the metric accurately describes what changed.
- **Editor interviews / preview mode bullet:** This is one of your strongest bullets because it connects user research to a product change and a measurable outcome. Clarify whether the reduction from 30 to 6 is monthly and over what period, if that context is available.
- **Accessibility checklist bullet:** Fix the tense. Also clarify whether the audit-failure reduction followed directly from the checklist or was influenced by other changes; otherwise the causal claim may be too strong.
- **Course-catalog search bullet:** Explain what “search time” measures—technical response time or the time for a user to find a result. The distinction matters when assessing the impact of client-side filtering.

### Transit Arrival Web App

- **Live-arrivals / usage bullet:** Useful evidence of real usage. Make sure “900 riders a week” is based on a defined measurement period and represents riders rather than visits or sessions, if that distinction matters.
- **Cold-start / caching bullet:** Correct the percentage, and check that “cold-start” is the right term for the app’s measured delay. Caching an offline stop list may improve startup or data availability, but be precise about what the timing includes.
- **Returning-riders bullet:** Correct the percentage terminology. State the measurement window consistently with “first month,” and be prepared to explain how you measured returning riders and whether the increase can be attributed to saved stops.

### Library Room Booking

- **Frontend-work bullet:** “Worked on” does not show your specific contribution. Add detail about what you owned or delivered, without claiming work beyond your role.
- **Calendar component / tests bullet:** This is more specific and technically useful. Resolve the Vue-versus-React discrepancy, and include the testing approach or scope if it is relevant and accurate.
- **Demo / handoff bullet:** Clarify what the handoff enabled or who used it, if you can support that. Otherwise, prioritize technical work or outcomes over the presentation and setup notes.

## Sections and organization

- **Skills:** “Tools” is not an accurate category for a list containing programming languages and frameworks. Group skills by type so recruiters and ATS systems can quickly find languages, frameworks, testing tools, and relevant practices.
- **Skills coverage:** The list is very short compared with the work shown. Add relevant skills such as JavaScript, HTML/CSS, testing tools, version control, or web performance only if you have used them and can discuss them in an interview. Keep the list focused rather than adding technologies you have only briefly encountered.
- **Storybook:** Correct the spelling wherever it appears.
- **Education placement:** Education first is reasonable for a current graduate student. Since you also have a relevant internship, consider whether leading with experience would better foreground your practical work for the roles you’re targeting.
- **Education details:** Keep the expected graduation date clear. Add GPA only if it is a strength, and coursework only if it directly supports your target roles.
- **Contact information:** Use a real, working GitHub or portfolio URL and consider adding LinkedIn if you maintain a professional profile. Keep your location at city/region level; a full address is not needed.
- **Overall presentation:** Use standard section headings and a simple, single-column layout for ATS compatibility. Your dates and section headings are already easy to scan.

## Before submitting

Verify every performance metric and its measurement method, correct the tense and technology inconsistencies, and make sure you can explain the implementation and evidence behind each quantified result. Those changes will improve credibility without requiring a wholesale rewrite.

## Reviewer 3

Your resume has a good foundation: it shows frontend work, accessibility, performance improvements, and several quantified outcomes. The biggest concern is not wording—it’s a few claims that appear inconsistent or technically implausible. Fix those before polishing anything else. I’ll describe what to change and why, without rewriting your lines.

## Highest-priority fixes

1. **Correct or substantiate the performance claims.** The WebP bullet attributes a JavaScript-bundle reduction to image conversion, and the hero-image bullet attributes a large LCP improvement to lazy-loading. Both need review: image conversion generally affects image payload, not JavaScript size, and lazy-loading an above-the-fold hero image can delay LCP.
2. **Fix the arithmetic in the transit project.** A reduction from 3.0 seconds to 1.5 seconds is a 50% reduction, not a 75% improvement.
3. **Resolve the project’s framework mismatch.** The Library Room Booking entry lists Vue, but its first bullet says React and TypeScript.
4. **Make dates and verbs consistent.** A completed role currently has a present-tense bullet, while another bullet’s opening construction makes its timing and ownership less clear.
5. **Check that every metric is defensible.** Be ready to explain how each one was measured, over what period, and whether the change can reasonably be attributed to your work.

## Line-by-line review

### Header and education

- **Contact details:** If these are anonymized for sharing, no action is needed. For applications, replace any placeholders with working contact details and a portfolio link that loads and shows relevant work.
- **M.S. and B.S. entries:** Keep the expected graduation date accurate and clear. If you are applying before the M.S. program begins or before the stated project dates, make sure the dates reflect the actual timeline.

### Lumen Travel

- **Search-page rebuild, load time, and bookings:** Explain what “load time” measures and how it was collected. For the 9% booking result, be prepared to describe the A/B-test duration, sample size, and whether the result was statistically reliable. Otherwise, readers may interpret the figure as stronger evidence than it is.
- **JavaScript bundle reduction:** State consistently what the KB figures represent—such as compressed or uncompressed size—and how you measured them. This is a clear, relevant result if the comparison is like-for-like.
- **Accessibility audit:** Clarify the scope of the audit and your contribution to the 14 fixes. “All” is a strong claim; make sure the audit findings and completed work support it.
- **Checkout performance bullet:** Make the timing and ownership clearer, and keep the verb tense consistent with the other bullets. Also be prepared to explain the test conditions behind the Lighthouse scores; scores can vary with the environment.
- **LCP and hero-image bullet:** Recheck both the cause and the measurement. Lazy-loading a hero image that is visible immediately can delay its loading, so the claimed improvement may have another cause or the loading change may be described incorrectly.
- **Storybook documentation:** Correct the spelling of “Storybook.” If you have room, make the scope of the documentation more concrete; the current benefit is understandable but difficult to assess.

### Westfield State University

- **PNG-to-WebP and JavaScript bundle:** Recheck this claim first. Converting image formats would normally reduce image bytes, not JavaScript bundle size. Confirm which asset or performance measure actually changed and use the correct one.
- **Editor interviews and preview mode:** This is a strong user-research-to-outcome story. Clarify the period and source for the monthly broken-page counts, and how the preview mode relates to the reduction.
- **Accessibility checklist:** Change the tense to match a completed role. Also verify that the checklist applied to all university pages and that the audit-failure figures use comparable criteria and periods.
- **Course-catalog search:** Define “search time”—for example, whether it means time to results, interaction latency, or a measured user task. The current numbers are useful but ambiguous.

### Projects

**Transit Arrival Web App**

- **400 stops and 900 weekly riders:** Keep these figures only if you can substantiate them, and clarify whether the app was publicly deployed and how usage was counted. For an independent project, real usage is a standout claim and will likely draw follow-up questions.
- **Cold-start improvement:** Correct the percentage: 3.0 seconds to 1.5 seconds is a 50% reduction. Also clarify what “cold-start” means and how the slow-3G measurement was run. Offline caching may improve later or offline visits rather than a truly uncached first load.
- **Returning riders:** Explain the denominator and measurement period. The change from 30% to 40% is a 10-percentage-point increase; avoid presenting it in a way that could be mistaken for a 10% relative increase. Be ready to support the claim that saved stops caused the change.

**Library Room Booking**

- **Framework mismatch:** Resolve the conflict between Vue in the project heading and React/TypeScript in the first bullet. A reviewer may read this as a factual inconsistency.
- **Calendar and tests:** Clarify what you personally implemented versus what the team built, and make sure the listed edge cases were actually tested. “Wrote the tests” is stronger when you can explain their scope.
- **Demo and handoff:** This communicates completion, but it is less informative than the other project bullets. If space is tight, prioritize evidence of your contribution or the project’s result over the handoff details.

### Skills

- **Typo:** Correct “Storybok” to “Storybook.”
- **Tools list:** Keep Angular only if you can discuss your experience with it; otherwise, it may invite questions without strengthening the resume. Consider whether the list leaves out tools you actually used and can support.
- **Methods list:** These items are relevant, but some are broad. If you have used specific testing or performance tools, naming them may make your skills easier to evaluate. Don’t add tools or proficiency claims you can’t substantiate.

## Recommended order of work

1. Recheck the WebP, hero-image, transit-percentage, and framework claims.
2. Verify the source and meaning of each metric, especially the A/B-test, Lighthouse, rider, and retention figures.
3. Fix tense, spelling, and date consistency.
4. Tailor the skills and strongest evidence to the specific role. Without a target job description, it’s not possible to judge which experience should receive the most emphasis.

## Reviewer 4

6 errors, 10 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2023 … Apr 2024

**Problem**
[Polish] The timeline has a nine-month gap between the B.S. and the Web Developer role.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The 9% booking increase does not say whether it is a relative lift or a percentage-point change.

**Why**
Those interpretations describe different-sized effects, so a reader cannot assess the A/B test result precisely. Clarifying the measure would make the outcome easier to evaluate.

**How to change it**
Specify whether the 9% is a relative lift or a percentage-point change, if accurate.

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma after “analytics script” incorrectly separates the compound subject from its verb.
2. [Important] The list of methods comes before the Lighthouse score improvement, making the result harder to spot while scanning.

**Why**
1. The subject is the list of performance changes beginning with “Moving image resizing,” and “raised” is its verb. The comma interrupts that grammatical connection.
2. A reader has to pass through four implementation details before reaching the measured outcome. Putting the score change first would make the impact more immediate.

**How to change it**
1. Remove the comma after “analytics script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” before the list of methods.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Lazy-loading the hero image does not support the claimed LCP reduction.

**Why**
A hero image is often the page’s LCP element, and lazy loading can postpone its fetch. As written, the technique does not support the claim that LCP fell from 4.1s to 1.2s.

**How to change it**
If the hero image was instead loaded eagerly or preloaded, describe that change; otherwise remove or soften the causal claim.

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
1. [Important] The line describes what the design-system documentation enabled, not what changed in practice.
2. [Polish] “Without asking engineers” is conversational and less direct than saying designers could find the values themselves.

**Why**
1. A reader cannot tell whether designers used the reference or whether it changed the design handoff. Evidence of actual use or an effect on engineer requests would make the value of the work clearer.

**How to change it**
1. Replace “could check” with the actual outcome and add [number of designers using the reference or another measure of reduced engineer requests], if accurate.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP does not ordinarily reduce a JavaScript bundle, so the 60% bundle-reduction claim is unsupported as written.

**Why**
Image files are typically served as separate assets, and changing their format reduces image payload rather than JavaScript. The bundle claim would require the images to have been embedded or inlined in it.

**How to change it**
If the images were embedded or inlined, say so and verify the bundle measurement; otherwise describe the change as a reduction in image payload and use its measured figure.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The strongest result is not the opening part of this line.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Polish] “Accessibility checklist” does not say what criteria or checks the checklist covered.
2. [Polish] “Writes” is in present tense even though this role ended in August 2024.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not specify what the 4 seconds and under 1 second measure.

**Why**
A reader cannot tell whether these figures measure the time for a user to find a course or the system’s response time. Those describe different outcomes and change how the improvement should be understood.

**How to change it**
Replace “search time” with [what was timed], such as time to find a course or search response time, if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] The line does not say how the app gets or updates live arrival data.
2. [Polish] The usage figure is hedged, making it sound less precise.

**Why**
1. For a transit-arrival app, the data source or update mechanism is the clearest evidence here of technical execution beyond the app’s format. Without it, a technical reader cannot picture that part of the implementation.

**How to change it**
1. Add [the transit data source or how arrival updates are fetched], if it reflects your implementation.

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
[Error] The change from 3.0s to 1.5s is a 50% reduction, not a 75% improvement.

**Why**
The time fell by 1.5 seconds out of an original 3.0 seconds, which is a 50% reduction. The stated 75% figure is mathematically inconsistent with those measurements.

**How to change it**
Replace “a 75% improvement” with “a 50% reduction.”

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
[Error] The rise from 30% to 40% is 10 percentage points, not a 10% relative increase.

**Why**
The difference between the two rates is 10 percentage points; relative to the original 30%, the increase is about 33%. Stating both “by 10%” and the endpoints also repeats the change.

**How to change it**
Replace “by 10%” with “by 10 percentage points” and remove “from 30% to 40%”; or retain the endpoints and say “by about 33%.”

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The project heading says Vue, but the frontend bullet says React, so the framework is inconsistent.
2. [Important] “Worked on the frontend” does not say what you built or what your contribution delivered.
3. [Polish] “Using React and TypeScript” names tools but does not show how you applied them.

**Why**
1. These descriptions give different technology stacks for the same project. A reader may question which framework you used, making the project’s technical details less credible.
2. A reader cannot tell what users could do because of your work or why it mattered. The general phrase also obscures the specific action you took.

**How to change it**
1. Make the heading and bullet name the same framework; if React is accurate, replace “Vue” in the heading, and if Vue is accurate, correct the framework named in the bullet.
2. Replace “Worked on the frontend of the booking flow” with [the specific screen or interaction you built], and add [what it enabled or improved, with a comparison if available].

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar line does not say what the component changed or enabled.
2. [Polish] “Its tests” does not show what the tests verified.
3. [Polish] This is the strongest project line, but it does not open the project entry.

**Why**
1. The edge cases show the technical challenge but not the value of solving it. A result tied to the booking flow would help a reader understand the significance of the work.

**How to change it**
1. Keep the component and edge-case details, and add [what the calendar enabled or improved, with a result or comparison if available].

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Important] The demo and code handoff are described without an outcome or evidence of the library staff’s response.

**Why**
A reader can see that the project was presented and transferred, but cannot tell whether staff used it, found the notes sufficient, or gave useful feedback. That leaves the value of the handoff uncertain.

**How to change it**
Keep the demo or handoff detail and add [what the staff did with the project or what the handoff enabled], or [one verifiable outcome such as staff feedback or whether they could set up the code using the notes], if accurate.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
A misspelling in a tools list can make the document look less carefully checked. Correcting it keeps the named skill easy to recognize.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular is listed under Tools, but no entry shows or plausibly requires its use.

**Why**
A reader cannot find evidence for the listed framework in the experience or projects. That can make the skill claim harder to assess.

**How to change it**
Add an entry demonstrating Angular if accurate; otherwise remove it from the skills list.

## What already works

- “Cut the booking flow’s JavaScript from…”: Connects a concrete implementation change to a clearly measured reduction.
- “Added keyboard navigation and screen-reader labels…”: Pairs specific accessibility improvements with a count of issues resolved.

## Reviewer 5

## Overall

Your resume has strong, measurable frontend work, but a few credibility and consistency issues should be fixed first: a percentage calculation is wrong, one performance claim may describe a harmful optimization, and the project’s listed framework conflicts with its bullets. After that, clarify how you measured several results and make the skills section more accurate.

## Header and education

- **Portfolio link:** Make sure it is a working, clickable URL and points directly to relevant code or projects. The current address looks like a placeholder.
- **Date formatting:** Keep date formatting consistent throughout the resume. Your education dates are clear, but the experience and project dates should follow the same style.
- **Master’s degree:** Keep the expected graduation date clearly marked as expected, as it is now. Ensure the dates remain accurate when you submit the resume.

## Experience

### Lumen Travel

- **Search-results rebuild:** Clarify whether the 9% booking increase is a relative increase or a percentage-point increase, and include test context if available, such as the test duration or sample size. This makes the business result easier to interpret and assess.
- **JavaScript reduction:** Specify how the bundle size was measured—for example, whether the figures are compressed or uncompressed. Otherwise, readers may not be able to compare the before-and-after numbers.
- **Accessibility fixes:** If you can, name the audit standard or type of audit and indicate that the fixes were verified. “All 14” is a strong claim, so it should be clear what the 14 issues refer to.
- **Lighthouse improvement:** Fix the sentence’s verb construction so the action and result read grammatically and consistently with your other past-tense bullets. Also clarify the test conditions if available; Lighthouse scores can vary with device and test setup.
- **Largest contentful paint:** Recheck the claim that lazy-loading the hero image produced the improvement. Hero images are usually visible immediately and lazy-loading them can delay LCP, so this optimization may be technically counterproductive or may not be the actual cause. Verify both the implementation and the before-and-after measurement.
- **Storybook documentation:** This is less outcome-focused than your other bullets. If you keep it, make the benefit or scope clearer; otherwise, consider using the space for a more substantial result.

### Westfield State University, IT Services

- **Image conversion and JavaScript bundle:** Converting PNGs to WebP generally reduces image or page payload, not the JavaScript bundle. Check that the metric is named correctly; otherwise, the claim may look technically inaccurate.
- **Editor interviews and preview mode:** Clarify your own contribution to the preview mode and, if available, the period over which broken-page reports fell from 30 to 6 per month. That will make the connection between your work and the outcome more credible.
- **Accessibility checklist:** The role ended in August 2024, but this bullet uses present tense. Make the tense consistent with the rest of the completed role. Also clarify what “failed audits” counts and over what period, if possible.
- **Course-catalog search:** Explain what “search time” measures—such as time to find a result or response time—and how it was tested. This will distinguish user-facing improvement from a technical timing metric.

## Projects

### Transit Arrival Web App

- **Usage claim:** Clarify how the weekly rider count was measured, and add a project or live-app link if one is available. The scale is compelling, but readers should be able to assess or verify it.
- **Cold-start improvement:** The stated change from 3.0 seconds to 1.5 seconds is a **50% reduction**, not a 75% improvement. Correct the percentage or recheck the underlying times. Also make sure “cold-start” accurately describes what you measured and that caching the stop list explains the improvement.
- **Returning riders:** The change from 30% to 40% is a 10-percentage-point increase, not a 10% relative increase. Correct the description of the change and clarify the measurement period and user sample if available.
- **Tense and status:** Since the project is ongoing, make sure the distinction between completed work and current usage is clear and consistent.

### Library Room Booking

- **Framework mismatch:** The project heading lists Vue, while the first bullet says the frontend used React and TypeScript. Resolve this discrepancy and ensure the technologies listed in the heading match the work described.
- **Personal contribution:** The first bullet is broad and overlaps with the calendar-component bullet. Make your individual ownership clearer, or remove the broader statement if it does not add distinct information.
- **Calendar and tests:** If possible, specify the type or scope of testing. The edge cases are useful, but readers cannot tell how thoroughly they were covered.
- **Demo and handoff:** This is a weaker result than your implementation bullets. Keep it if the handoff was important or had a concrete outcome; otherwise, use the space for a more informative technical or user impact.

## Skills

- **Correct the spelling:** “Storybok” is misspelled.
- **Organize skills more precisely:** The “Tools” list mixes a programming language, frameworks, and a documentation tool. Group skills in a way that accurately reflects what each item is.
- **Substantiate the list:** Vue and React both appear in the resume, but Angular does not appear elsewhere. Keep it only if you can comfortably discuss your experience with it.
- **Add relevant essentials if you use them:** The list does not include JavaScript, HTML, CSS, or a specific testing tool. Include only skills you can support with experience and discuss in an interview; specificity is more useful than a long, generic list.

## Reviewer 6

## Overall assessment

This is a strong frontend/web-development resume: it shows relevant hands-on work and several measurable outcomes. The highest-priority changes are to fix a few technical or mathematical inconsistencies that could undermine otherwise good evidence, then clarify how some results were measured and what you personally owned.

I’m assessing the pasted text only; the original document’s layout and parsing are **not assessed**. With no job description, I’m treating frontend or web-development roles as the likely target.

## Changes to make, in priority order

### Lumen Travel

- **“Rebuilt the hotel search results page…”** — Keep this result, but clarify whether the 9% booking increase is a relative lift or a percentage-point change, and add the test context if you have it. The performance result is specific; the conversion result will be easier to interpret with those details.
- **“Cut the booking flow’s JavaScript…”** — Clarify what the 410 KB and 260 KB figures measure: for example, whether they are initial or total transferred JavaScript, and whether they use the same compression and measurement conditions. Code-splitting can reduce what loads initially without necessarily reducing the total JavaScript for the flow.
- **“Added keyboard navigation and screen-reader labels…”** — Specify the scope of the audit, if known, and what “all 14 accessibility issues” refers to. This helps distinguish resolving a defined list of findings from claiming broad accessibility compliance.
- **“Moving image resizing to the CDN…”** — Fix the verb tense, since this internship is dated in the past. Also identify the Lighthouse test conditions if available, such as mobile or desktop and whether the scores were measured under comparable settings. The bullet combines several changes, so make clear that the score change reflects the overall set of optimizations rather than implying each had a separately measured effect.
- **“Cut the landing page’s largest contentful paint…”** — Check this claim carefully before keeping the causal link to lazy-loading the hero image. A hero is often the largest, above-the-fold image, and lazy-loading it can delay its loading rather than improve LCP. Verify the actual implementation and before/after measurement; if lazy-loading was not the cause of the improvement, don’t attribute the result to it.
- **“Documented the design-system tokens in Storybook…”** — Keep the qualitative outcome, but add scope or evidence of use if you know it—for example, how many tokens or teams/pages were covered, or whether designers actually used the documentation. The current benefit is plausible but not quantified.

### Westfield State University — Web Developer, IT Services

- **“Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.”** — Verify and correct the metric or the stated cause. Converting PNG images to WebP reduces image-file size, not JavaScript bundle size. If the 60% refers to image or total page payload, label the measured resource accurately; if it truly refers to JavaScript, identify the change that reduced JavaScript.
- **“Interviewed 8 department editors…”** — Clarify your contribution to the preview-mode work, since the current wording says the findings led to it but doesn’t establish whether you designed or implemented the feature. If you know how broken-page reports were counted, include that context; it would make the reduction from 30 to 6 per month more interpretable.
- **“Writes the accessibility checklist…”** — Change the tense to match the completed role. Also clarify what the audit counts represent, if known, and whether you authored or maintained the checklist. The reduction is useful evidence, but the scope of “failed audits” is unclear.
- **“Rebuilt the course-catalog search…”** — Define what “search time” measures: user-perceived time, filtering response time, or another measure. That matters because client-side filtering most directly affects the interaction after the data is available.

### Projects

**Transit Arrival Web App**

- **“Built a progressive web app…”** — Clarify how the 900 weekly riders figure was measured and whether it means unique riders, users, or visits. If the app is live, make that context clear; don’t imply a particular deployment status unless accurate.
- **“Cut cold-start time…from 3.0s to 1.5s, a 75% improvement…”** — Correct the arithmetic: a drop from 3.0 seconds to 1.5 seconds is a **50% reduction** in time, not 75%. Also state what “cold-start time” measures and how the slow-3G comparison was made, if available.
- **“Raised weekly returning riders by 10%…from 30% to 40%…”** — These figures describe a **10-percentage-point** increase; the relative increase is different. Make the percentage change unambiguous. Also be careful about attributing the change to saved stops unless you measured that causal effect; a before-and-after increase alone may not establish cause.

**Library Room Booking**

- **Project technology line and first bullet** — Resolve the Vue versus React/TypeScript discrepancy. Confirm which technologies were actually used for this project and make the project heading and experience bullets consistent.
- **“Worked on the frontend of the booking flow…”** — Make your individual contribution more specific. As written, this doesn’t show what you did, especially alongside the more detailed calendar-component bullet.
- **“Wrote the booking calendar component and its tests…”** — Keep the technical detail. If accurate, clarify whether the tests covered both overlapping bookings and time-zone changes, or whether those were component behaviors you implemented. That distinction makes your contribution easier to assess.
- **“Presented the demo… and handed over the code…”** — This is useful evidence of communication and handoff. Add the recipient or how the handoff was used only if you know and can support that detail.

### Skills

- **“Storybok”** — Correct the spelling to **Storybook**.
- **“Tools” list** — Check that each listed technology reflects experience you can discuss. The resume currently gives no supporting example for Angular; that doesn’t make the skill invalid, but it is less evidenced here than React, TypeScript, and Vue.
- **“Methods” list** — Consider whether this category accurately groups the entries. “Server-side rendering,” accessibility, and component testing are different kinds of capabilities; organize them consistently if the layout allows. Keep the list focused on skills relevant to the roles you’re targeting.

### Education and contact details

- **Education entries** — The school, degree, location, and dates are clear. Keep the expected graduation date current as your status changes.
- **Contact line** — The information is clear in the pasted text. Confirm that the portfolio link is clickable and that the portfolio demonstrates the work most relevant to the roles you’re targeting.

## Before submitting

Prioritize correcting the JavaScript-bundle claim, the cold-start percentage, the Vue/React discrepancy, and the hero-image/LCP attribution. Then fix the tense and spelling issues. Those are more important than adding more metrics: the resume already has plenty of numbers, and unclear or inaccurate ones can weaken the evidence.


---

# case-8

## Résumé

```
Jordan Rivera
+1 (555) 010-2287 | jordan.rivera@example.com | example.com/in/jrivera
EDUCATION
Northgate University | M.P.H. in Biostatistics | Metro City, USA | Sep 2019 - May 2021
EXPERIENCE
Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present
- Checked in about 150 climbers a shift and sold day passes and memberships.
- Ran the weekend rental desk and logged gear inspections for the manager.
Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025
- Reduced data-entry errors by 70% by adding range checks and double entry for the primary
outcome.
- Estimated median survival in each arm by averaging the follow-up time of patients who died,
excluding censored patients.
- Built the enrollment tracker the three sites reviewed each week, flagging sites more than
10% behind target.
- Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed
without a protocol change.
- Established that the program was equivalent to usual care because the superiority test on
readmission was not significant (p = 0.41).
- Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure
patients, finishing enrollment 4 months early with 94% of follow-up visits completed.
Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022
- Screened 2,300 medical records for a diabetes cohort study, confirming eligibility for 410
patients against the protocol criteria.
- Interviewed 25 patients about missed clinic visits; the findings added text reminders that
cut no-shows from 18% to 11%.
- Wrote the study’s data dictionary for 180 variables, which the next two cohort studies
reused.
- Cleaned and merged lab data from two hospital systems while also scheduling participant
visits, ordering study supplies, taking minutes at lab meetings and covering the front desk,
which resolved 1,200 mismatched patient identifiers.
PROJECTS
Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present
- Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into
respiratory health outcomes.
- Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9%
without it, after adjusting for age and insurance.
- Presented the analysis at the state public-health conference poster session.
Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020
- Designed a 30-question community health survey and collected 1,100 responses, giving the
clinic its first estimate of uninsured residents by neighborhood.
- The survey was translated into Spanish and piloted with 20 residents before launch.
- Ran a randomized discharge study of more than 600 heart-failure patients that completed
enrollment months ahead of schedule.
SKILLS
Tools: R, REDCap, SAS
Methods: randomized trials, regression, mixed-effects models, survey design
```

## Reviewer 1

## Overall assessment

This has strong, relevant clinical-research experience and several useful numbers. The main issues are **two serious statistical claims**, a **duplicated project bullet that conflicts with the dates**, and several impact claims that need supporting details. Fix those before polishing style.

No target job description was provided, so I can’t assess fit for a specific role. As written, the resume is most naturally positioned for clinical research coordination or applied biostatistics roles.

## Changes to make, in priority order

### Meridian Heart Institute

- **“Reduced data-entry errors by 70%…”** — Keep this only if you can substantiate the comparison. Add context elsewhere in the bullet or be prepared to provide the baseline, time period, number of records, and how errors were measured. Clarify whether 70% is a relative reduction or a percentage-point change.
- **“Estimated median survival…by averaging the follow-up time of patients who died…”** — Correct or remove this. Averaging observed times among patients who died is not a valid way to estimate median survival when censoring is present. If you performed a survival analysis, report the method and result you actually used; otherwise, don’t claim a median survival estimate.
- **“Built the enrollment tracker…”** — Clarify what you personally built and how the 10% threshold was defined or used. This is a concrete operational contribution, but its value is hard to judge without knowing what the tracker enabled.
- **“Presented monthly safety reports…all 4 reviews passed…”** — Verify that “passed” accurately describes the committee’s decision. It may overstate what a safety review establishes, and “without a protocol change” is not necessarily evidence of a successful outcome. State the review outcome precisely and avoid implying committee endorsement of the program.
- **“Established that the program was equivalent…”** — Remove this conclusion unless the study was designed and analyzed as an equivalence study with a prespecified equivalence margin and appropriate confidence-interval analysis. A non-significant superiority test, including p = 0.41, does **not** establish equivalence.
- **“Coordinated a 3-site randomized trial…”** — This is one of your strongest bullets. Clarify your specific responsibilities so “coordinated” does not leave the reader guessing about your role. Be ready to substantiate the enrollment timeline and follow-up completion figure, including how follow-up completion was defined.

### Northgate University Hospital

- **“Screened 2,300 medical records…”** — This is clear and quantified. Keep it, and be prepared to explain how eligibility was assessed and whether the 410 figure represents eligible patients or enrolled participants.
- **“Interviewed 25 patients…”** — Support the claimed reduction in no-shows with the time period, number of appointments or patients measured, and the comparison method. Unless the study design supports a causal conclusion, avoid implying the interviews or reminders alone caused the decrease. Also clarify whether 18% to 11% is a change in percentage points or a relative reduction.
- **“Wrote the study’s data dictionary…”** — Keep the reuse claim only if the later studies actually adopted it. Be ready to explain what you authored and what “reused” means in practice.
- **“Cleaned and merged lab data…while also scheduling…ordering…taking minutes…and covering…”** — This combines data work with several administrative duties, making the main contribution difficult to find. Prioritize the most relevant work and separate unrelated responsibilities. Clarify how you identified and resolved the 1,200 mismatched identifiers, and whether those were confirmed corrections rather than flagged records.

### Projects

**Asthma Readmission Analysis**

- **“Harnessed cutting-edge analytics…”** — Remove this. It is promotional but gives no method, result, or evidence of your contribution.
- **“Found that follow-up within 7 days…”** — Add enough analytical context to make the finding assessable: data source and sample, outcome definition, model or adjustment approach, and uncertainty (such as confidence intervals), if available. Clarify whether the percentages are raw or adjusted estimates. Also establish the timing of follow-up relative to readmission; otherwise, the association may be difficult to interpret and could be affected by time-related bias.
- **“Presented the analysis…”** — Specify the conference and year if appropriate, and distinguish a poster presentation from a talk. This helps readers understand the venue and nature of the presentation.

**Community Health Survey**

- **“Designed a 30-question…collected 1,100 responses…”** — Add or be ready to explain how residents were recruited, which neighborhoods were represented, and how the estimate of uninsured residents was calculated. Without sampling context, readers cannot tell how representative the estimate is.
- **“Translated into Spanish and piloted with 20 residents…”** — Clarify your role in the translation and what the pilot changed or tested. Keep the detail if it demonstrates meaningful survey-development work; otherwise, it may be less valuable than describing the survey’s sampling or analysis.
- **“Ran a randomized discharge study…”** — This appears to duplicate the Meridian trial and conflicts with the Community Health Survey’s 2020 dates and its volunteer-project description. Remove it from this project unless it refers to a distinct study; if it is distinct, clarify the project, dates, and your role. As written, it creates a credibility concern.

### Summit Climbing Gym

- **“Checked in about 150 climbers a shift…”** — The volume is useful, but clarify whether “150” is typical and what a shift means if that could be ambiguous. Keep this concise; its relevance to research roles is limited.
- **“Ran the weekend rental desk…”** — Clarify the scope of your responsibility and whether you maintained, inspected, or simply logged gear checks. This role is recent, so retaining it can account for current employment, but avoid giving it more space than your research experience.

### Education and skills

- **Education** — Add your undergraduate degree if you have one; its absence may prompt questions about your academic background. Include a thesis, relevant coursework, or other training only if it strengthens the roles you’re applying for.
- **Tools: R, REDCap, SAS** — Make sure you can defend each tool with specific work. The resume currently gives evidence for R and REDCap, but not clearly for SAS. Don’t imply equal proficiency if your experience differs.
- **Methods: randomized trials, regression, mixed-effects models, survey design** — Mixed-effects models are not demonstrated in the experience or project bullets. Add evidence of their use or remove them. Keep methods you can explain in detail, including assumptions and how you applied them.

## Final checks

- Verify every percentage, sample size, and outcome against your records; be especially careful with the survival and equivalence statements.
- Make the dates and project ownership consistent, particularly around the 2020 survey and the later heart-failure trial.
- If the contact link is anonymized only for this review, no change is needed; otherwise, make sure it points to your actual professional profile.
- Tailor the order and emphasis to the job description once you have one. Your trial coordination and applied analysis are likely to matter more than general front-desk duties for research or biostatistics roles.

## Reviewer 2

## Highest-priority changes

1. **Correct the survival-analysis bullet.** Averaging the observed follow-up times of patients who died, while excluding censored patients, does not estimate median survival. It can give a biased result because it ignores censored follow-up. Recheck what you actually calculated and describe the valid method and result; if you did not estimate survival with an appropriate time-to-event analysis, remove the claim.
2. **Correct the equivalence claim.** A nonsignificant superiority test (p = 0.41) does **not** establish equivalence. Equivalence requires a prespecified equivalence margin and an appropriate analysis showing the confidence interval falls within that margin. Unless you performed that analysis, remove the conclusion and report only what your analysis supports.
3. **Remove or resolve the final Community Health Survey bullet.** It describes a randomized heart-failure discharge study, which appears to duplicate the Meridian trial rather than the survey project. It also conflicts with the Meridian claim that enrollment finished four months early. Keep it only if it is a separate study, and make the project, your role, and the timing clear.
4. **Replace the Asthma project’s hype with specific analytical work.** “Cutting-edge,” “transformative,” and “patient-centered insights” are unsupported promotional language. The other bullets already offer concrete results; use this one to show what you actually did analytically.
5. **Clarify causal claims and metrics.** Several bullets attribute outcomes to your work or present adjusted findings without enough information to judge the basis. Make the distinction between association and causation clear, and identify what each percentage or count measures.

## Section-by-section review

### Header
- **Phone, email, and profile link:** Ensure the profile link is your real, working professional profile rather than a placeholder. Use a professional, current profile destination.
- **Optional:** Add a location only if useful for the roles you’re seeking; the city is already listed under each position.

### Education
- **Northgate University, M.P.H.:** Consider adding relevant coursework, a thesis, or a substantial analytical capstone if it strengthens your fit for biostatistics roles. If you have a relevant undergraduate degree, include it too; as written, the education section shows only the MPH.
- **Dates and location:** These are clear. Keep date and location formatting consistent across the resume.

### Summit Climbing Gym
- **“Checked in about 150 climbers…”** Clarify the time period meant by “a shift” if the workload is important, and distinguish check-ins from sales if you have figures for both. The current bullet combines two duties but only quantifies one.
- **“Ran the weekend rental desk…”** “Ran” and “logged” describe duties, but the bullet does not show scale, responsibility, or outcome. Add a meaningful measure or result if you have one; otherwise, keep it concise. Clarify what the inspection log enabled if that matters to the role.

### Meridian Heart Institute
- **“Reduced data-entry errors by 70%…”** Keep the result only if you can substantiate it. Clarify how errors were defined and measured, and over what period or sample. Also make clear whether range checks and double entry were both your interventions.
- **Survival estimate bullet:** Correct or remove this claim, as noted above. The described calculation is not a valid estimate of median survival.
- **Enrollment tracker bullet:** This is specific and shows a useful contribution. Clarify whether you built the tracker yourself and, if available, add the enrollment target or the number of sites it helped keep on track.
- **Safety-report bullet:** “All 4 reviews passed without a protocol change” is difficult to interpret as an accomplishment: a review passing and no protocol change do not necessarily indicate the reports were effective. Focus on your contribution to preparing or presenting the reports, and include a concrete result only if it reflects a meaningful outcome.
- **Equivalence bullet:** Remove or correct the conclusion unless you conducted a valid equivalence analysis. The p-value alone does not support the claim.
- **Trial-coordination bullet:** This is one of your strongest and most relevant accomplishments, but it appears last. Move it nearer the top of this role. Make your specific responsibilities clear enough to distinguish your contribution from the team’s, and ensure “94% of follow-up visits completed” has a clear denominator or interpretation.

### Northgate University Hospital
- **Records-screening bullet:** Strong, quantified evidence of study work. Consider whether the eligibility count is enough context or whether the scale and your role would be clearer with a little more detail about the screening process.
- **Patient-interview bullet:** The sequence implies the interviews caused the change in no-shows. Keep that causal wording only if the effect was evaluated in a way that supports it. Otherwise, distinguish the interview findings from the later reminder intervention and its measured result.
- **Data-dictionary bullet:** Useful evidence of a lasting contribution. Specify your ownership if you created it, and make sure “reused” accurately describes its use in the later studies.
- **Long data-cleaning and duties bullet:** Split the data-cleaning result from the list of scheduling, ordering, meeting, and front-desk duties. As written, the many responsibilities obscure the important result, and it’s unclear how those duties relate to resolving 1,200 mismatched identifiers. Clarify what you did to resolve the mismatches and what the number represents.

### Projects
- **Asthma Readmission Analysis, project title and details:** The title and tools are clear. “Independent Project” is useful context, but indicate whether it is an ongoing analysis and what portion is complete if that would help a reader assess it.
- **“Cutting-edge analytics…” bullet:** Remove the promotional wording and replace it with a factual description of the analytical work or deliverable. Avoid unsupported claims about impact.
- **Follow-up/readmission bullet:** This is potentially strong, but clarify whether the 8.2% and 11.9% figures are crude or adjusted rates. Also make clear that the result is an association, not evidence that follow-up caused lower readmission, unless the study design supports a causal conclusion. If available, include the sample size and confidence interval.
- **Conference-presentation bullet:** Keep it, but name the conference if doing so is appropriate and accurate. A poster presentation is a useful communication credential.
- **Community Health Survey, first bullet:** Clarify your individual contribution within the five-person team. “Giving the clinic its first estimate” may overstate what a survey of 1,100 responses can establish unless the sampling and analysis support a representative neighborhood estimate. Note the survey’s reach or method if that is important to interpreting the estimate.
- **Translation and pilot bullet:** This adds useful detail, but identify your role in the translation and pilot if you were responsible for them. Explain what the pilot checked or changed only if that information is available and relevant.
- **Final randomized-trial bullet:** Remove it from this project unless it genuinely belongs here. If it is a separate study, give it a separate project entry and reconcile its timing and enrollment result with the Meridian role.

### Skills
- **Tools:** R, REDCap, and SAS are clear. Add specific capabilities or relevant packages only if you have used them and can discuss them in an interview. For biostatistics roles, the current list gives little indication of your level or the kinds of analyses you can perform.
- **Methods:** The list is relevant, but it should accurately reflect your proficiency. Add methods only if you have practical experience with them; given the survival-analysis and equivalence claims above, be especially careful not to imply expertise you cannot substantiate.

## Overall positioning and presentation

- **Tailor the resume to the role.** For a biostatistics position, foreground analytical work, study design, statistical methods, and programming contributions. For clinical research coordination roles, foreground trial operations, enrollment, follow-up, data quality, and committee reporting.
- **Lead each role with its strongest relevant result.** Your Meridian trial-coordination and data-quality bullets currently compete with less informative bullets because of their placement.
- **Keep claims defensible.** Be ready to explain the source, denominator, method, and your personal contribution behind every number. The survival, equivalence, readmission, no-show, and enrollment claims especially warrant a careful check.
- **Check chronology and project ownership.** The asthma project overlaps with your Meridian role, which is plausible, but make sure the dates and “Independent Project” label accurately reflect how and when you did the work.

## Reviewer 3

4 errors, 14 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Mar 2020 - Aug 2020

**Problem**
[Error] The Community Health Survey dates conflict with the later coordinator-role dates if the two trial bullets describe the same study.

**Why**
The survey entry is dated March–August 2020, while the coordinator role is dated 2022–2025 and describes a 640-patient trial that finished enrollment four months early. If these are the same achievement, the conflicting dates and study details may make a reader question the accuracy of the résumé.

**How to change it**
Clarify whether these are separate studies; if they are the same, correct the project dates and make the study details consistent.

> Summit Climbing Gym

**Problem**
[Important] Shorten the Summit Climbing Gym entry to one line so it does not outweigh the research experience.

**Why**
The current entry gives two duty bullets for a current non-research role. That amount of space can draw attention away from the research experience that establishes the candidate’s direction.

**How to change it**
Condense the current-employment entry to one line, keeping only the most relevant detail.

> M.P.H. in Biostatistics

**Problem**
[Important] Move EXPERIENCE ahead of EDUCATION.

**Why**
Several years of post-degree work now establish the candidate’s direction more clearly than the degree. Leading with experience lets a reader encounter that trajectory first.

**How to change it**
Move the EXPERIENCE section before EDUCATION.

## Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present

> Checked in about 150 climbers a shift and sold day passes and memberships.

**Problem**
[Polish] The check-in and sales duties give neither an outcome nor context for the 150-climber count.

> Ran the weekend rental desk and logged gear inspections for the manager.

**Problem**
[Polish] The rental desk and inspection-log duties do not state what the work accomplished.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Reduced data-entry errors by 70% by adding range checks and double entry for the primary outcome.

**Problem**
[Important] The 70% reduction has no baseline or comparison period.

**Why**
Without a baseline or comparison period, a reader cannot judge the size of the change. The percentage is difficult to interpret on its own.

**How to change it**
Add [the error rate before and after over the same audit period], and retain the method clause.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] The survival calculation does not estimate median survival.
2. [Important] The survival line names an output but gives no estimates.

**Why**
1. Averaging follow-up times among patients who died gives a mean among observed deaths, not the median survival for each arm. Excluding censored patients also discards their survival information and can bias the estimate.
2. A reader can see that a survival analysis was attempted, but not what it found. Without the estimates, the line gives no result to assess.

**How to change it**
1. If you performed a Kaplan–Meier analysis, report the median survival it estimated. Otherwise, replace the claim with the mean observed time to death among patients who died.
2. Add [the estimates in each arm, in months, and the between-arm difference], if reportable; keep the method only if space permits.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Important] The “passed” reviews are unexplained, and the outcome is delayed behind the reporting details.

**Why**
A reader cannot tell what the reviews assessed or what “passed” means. Because the outcome comes after the reporting details, a scanning reader may miss it.

**How to change it**
Lead with the review outcome and replace “passed” with [the committee’s specific conclusion or decision], if concise and relevant; otherwise cut “passed” and retain the protocol-change outcome.

> Established that the program was equivalent to usual care because the superiority test on readmission was not significant (p = 0.41).

**Problem**
1. [Error] The equivalence claim is wrong: a nonsignificant superiority test does not establish equivalence.
2. [Important] The readmission result gives a p-value but no rates or effect magnitude.

**Why**
1. A p-value of 0.41 means the test did not detect a statistically significant difference; it does not show that the difference is small enough to meet an equivalence standard. Equivalence requires an appropriate analysis against a prespecified equivalence margin.
2. A reader cannot tell how different the observed outcomes were from the p-value alone. That makes it harder to judge the practical size of the result.

**How to change it**
1. Replace the equivalence claim with “The superiority test did not detect a statistically significant difference in readmission (p = 0.41).” Claim equivalence only if a prespecified equivalence analysis supports it.
2. Add [readmission rates by arm and the absolute difference over the study follow-up period], if available.

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
1. [Important] The trial line does not specify the coordination work you personally owned.
2. [Important] The trial line leads with the coordination role instead of the measurable outcomes.

**Why**
1. The early enrollment and follow-up completion show what the study achieved, but not what you did to support those outcomes. Without a specific action, the reader cannot assess your individual contribution.
2. Finishing enrollment early and completing 94% of follow-up visits are the line’s strongest results. Putting them later makes the evidence harder to scan.

**How to change it**
1. Add [one coordination action you owned that supported enrollment or follow-up], rather than listing several duties.
2. Move the enrollment and follow-up outcomes to the opening of the bullet; retain the trial description and your specific coordination action after them.

## Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The patient-interview result is stronger than the line that currently opens this experience.

**Why**
The interview bullet connects patient input to a change in practice and a measured reduction in no-shows. Moving it first would make that result easier for a reader to notice.

**How to change it**
Move this bullet ahead of the current opening bullet in the experience.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The data-cleaning result is buried after unrelated duties, which dilute the main contribution.
2. [Polish] The line does not explain how the patient identifiers were matched.

**Why**
1. A scanning reader may miss the resolution of 1,200 mismatched identifiers before reaching the end of the long duty list. The scheduling, ordering, minute-taking, and front-desk work also distract from the data-cleaning contribution.

**How to change it**
1. Move “resolved 1,200 mismatched patient identifiers” near the opening, and cut or shorten the unrelated duty list.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening bullet makes broad claims without naming an analysis, finding, or supporting measure.

**Why**
“Cutting-edge analytics” does not show what approach you used, and “transformative, patient-centered insights” does not say what the insight was or what it supported. The adjusted readmission finding and conference presentation provide a more evidence-led project story, so this opening claim does not connect to the evidence that follows.

**How to change it**
Replace the broad claims with [the specific analytical method used] and [the finding or decision it supported], if accurate; otherwise cut this bullet.

> Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9% without it, after adjusting for age and insurance.

**Problem**
1. [Important] The adjusted readmission finding is stronger than the current opening bullet.
2. [Polish] The readmission comparison gives no cohort size or adjustment method.

**Why**
1. The comparison and adjustment factors give a reader concrete evidence of the project’s result. Leading with this finding makes the project’s contribution easier to see.

**How to change it**
1. Move this finding ahead of the current opening bullet.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The survey bullet gives no key finding from the neighborhood estimates.

**Why**
A reader can see that the survey produced a new estimate, but not what the estimate showed. That leaves the clinic’s outcome less concrete and harder to judge.

**How to change it**
Lead with the estimate, then explain how the survey produced it; add [the estimate’s key finding], if shareable.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Important] The translation and pilot details give no result, and the passive wording hides who did the work.

**Why**
A reader can see how the survey was prepared, but not whether the pilot led to a useful change or what the preparation enabled. The passive construction also leaves unclear whether you performed these tasks.

**How to change it**
If you performed these tasks, name yourself as the actor and add [one material change from pilot feedback or a clear launch outcome].

> Ran a randomized discharge study of more than 600 heart-failure patients that completed enrollment months ahead of schedule.

**Problem**
[Error] The discharge-trial bullet is unrelated to this survey entry and appears to duplicate the later coordinator-role achievement.

**Why**
This entry is dated March–August 2020 and describes a community survey, while the same heart-failure trial is described under the later coordinator role. If these refer to the same study, the bullet misattributes the work; if they are separate studies, the line does not identify the discharge approaches or groups compared.

**How to change it**
Remove this bullet from the survey entry if it is the later trial; keep the claim under the coordinator role if accurate. If it is a separate study, clarify [the approaches or groups compared] and [how many months ahead of the planned date enrollment finished], and make clear that the study—not the patients—completed enrollment.

## What already works

- “Screened 2,300 medical records for a…”: Shows the scale of the screening and its concrete result in one line.
- “Built the enrollment tracker the three…”: Shows a tangible tool adopted in a regular, multi-site review process.
- “Presented the analysis at the state…”: Names a specific dissemination outcome: presentation at a state public-health conference poster session.

## Reviewer 4

# Resume review

Your strongest material is the clinical-trial coordination, data-quality work, and measurable research outcomes. Before polishing wording, fix two statistical claims that could undermine your credibility: the survival estimate and the claim of equivalence. I’ll describe changes to make and why, without rewriting your lines.

## Header and education

- **Contact information:** Add your city and state (you already use them in the experience section) and consider adding a GitHub or portfolio link if it contains relevant code or analyses. A professional profile link is useful; a technical portfolio can help reviewers assess your R work.
- **M.P.H. entry:** Add your undergraduate degree if you have one. It is currently absent, and employers may expect to see your full education history. Include GPA or relevant coursework only if it strengthens your application and is reasonably recent.

## Experience

### Summit Climbing Gym

- **Checked-in climbers and sales bullet:** Keep the approximate shift volume, but clarify what “sold” covers only if you have meaningful numbers or responsibilities to report. As written, this is useful evidence of customer-facing work, but has limited connection to your research background.
- **Rental desk and gear-inspection bullet:** Clarify your specific responsibility for inspections and whether you followed a checklist or escalated issues, if applicable. The current version doesn’t show the scale or outcome. Keep this role concise so it doesn’t crowd out your research experience.

### Meridian Heart Institute

- **Data-entry errors bullet:** Specify the baseline and comparison period behind the 70% reduction, and briefly clarify how errors were measured. “Adding range checks and double entry” may prompt questions about which fields were double-entered and how discrepancies were resolved.
- **Median-survival bullet:** **Correct or remove this claim before applying.** Averaging observed follow-up times among patients who died and excluding censored patients does not estimate median survival; it mishandles censoring. Verify the analysis and, if appropriate, report the method actually used—typically a survival-analysis approach that accounts for censored observations. Do not retain the result unless you can support it.
- **Enrollment-tracker bullet:** Explain the tracker’s purpose and what happened after it flagged sites, if you can substantiate that. The 10% threshold is specific, but the bullet doesn’t say whether the tracker improved enrollment or enabled an intervention.
- **Safety-reporting bullet:** “All 4 reviews passed without a protocol change” is ambiguous: it could suggest the reports were accepted, but it doesn’t establish the quality or impact of your work. Clarify your role in preparing or presenting the reports and what “passed” means; otherwise, drop the outcome.
- **Equivalence bullet:** **Remove or substantially correct this claim.** A nonsignificant superiority test does not establish equivalence. Equivalence requires an appropriate design, a prespecified equivalence margin, and a confidence interval assessed against that margin. Verify the protocol and analysis before making any equivalence claim.
- **Trial-coordination bullet:** Move this higher in the role because it gives the clearest picture of your scope. Clarify your own coordination responsibilities and, if available, the enrollment target or the reason enrollment finished early. Keep the 94% follow-up figure only if you can define its denominator and follow-up period.

### Northgate University Hospital

- **Medical-record screening bullet:** This is a clear, quantified bullet. Make sure the 410 eligible patients and the 2,300 screened records are described consistently with the study’s eligibility process. Otherwise, this needs little change.
- **Patient-interview bullet:** The outcome is compelling, but clarify the time period and basis for the no-show comparison if you have them. Be careful not to imply the interviews alone caused the reduction unless the evaluation supports that attribution.
- **Data-dictionary bullet:** Keep the reuse detail; it shows your work had lasting value. Clarify whether you authored the full dictionary or contributed to it, and what “reused” means if a reviewer might interpret that as verbatim reuse.
- **Data-cleaning and duties bullet:** Separate the data-cleaning result from the list of scheduling, supply, meeting, and front-desk duties. The long list obscures the technical achievement of resolving 1,200 mismatched identifiers. Keep secondary duties only if they are relevant to the role you’re targeting.

## Projects

### Asthma Readmission Analysis

- **First bullet:** Remove it or replace it with concrete information about the project. “Cutting-edge,” “transformative,” and “patient-centered insights” are broad promotional claims and don’t tell a reader what you analyzed or did.
- **Adjusted readmission finding:** Keep the result, but add the sample size and identify the analysis method. Include uncertainty—such as a confidence interval—if available. Describe this as an association, not an effect, unless the study design supports a causal conclusion. Be prepared to explain how you handled confounding and missing data.
- **Conference-presentation bullet:** Keep this if the poster was accepted or presented. Specify the conference year and your role in preparing or presenting it, if that is not already clear.

### Community Health Survey

- **Survey-design bullet:** Keep the response count and neighborhood-level output. Clarify the clinic’s use of the estimate if you know it, and avoid implying the responses represent all residents unless the sampling design supports that.
- **Translation and pilot bullet:** Keep this; it demonstrates attention to accessibility and survey testing. Clarify whether you translated the survey yourself or coordinated translation, if relevant.
- **Randomized-discharge-study bullet:** **Remove this from this project.** It duplicates the heart-failure trial in your Meridian experience and appears unrelated to the community survey. It could confuse readers about which project the study belongs to. Keep the trial details under the relevant role instead.

## Skills and organization

- **Tools:** R, REDCap, and SAS are relevant. Add specific R packages or other tools only if you have used them enough to discuss them confidently. Consider naming software you used for data management or visualization if it is relevant to the roles you’re targeting.
- **Methods:** Your methods are relevant, but make sure each is supported by your experience or projects. Consider adding methods that are central to your actual work—such as survival analysis only if you have valid experience with it—and avoid listing methods you cannot discuss in an interview.
- **Section order:** For biostatistics or clinical-research roles, put **Skills** near the top, then **Experience**, **Projects**, and **Education**. If applying to research-coordination positions, prioritize the trial-coordination experience and operational responsibilities.
- **Overall focus:** The resume presents both research skills and a current customer-service role. Keep the gym role brief, but retain it if you want to show current employment or transferable service skills. Tailor its emphasis to the job rather than giving it the same space as your research work.

## Reviewer 5

Your strongest material is the three-site trial coordination, data-quality improvement, and cohort work. **Before polishing anything else, correct two statistical claims**: the survival estimate and the assertion of equivalence.

### Header and education
- **Contact line:** Use your actual LinkedIn URL and, if relevant, a portfolio or project link. The displayed domain looks like a placeholder.
- **M.P.H. entry:** Keep it. If you’re applying for biostatistics roles, consider adding a thesis or substantial analytic work if it demonstrates skills not evident elsewhere.

### Summit Climbing Gym
- **Check-ins and sales:** Keep this concise. It shows current employment and customer-facing work, but should not take space from research accomplishments.
- **Rental desk and inspections:** Keep only if you have room or are targeting operations-heavy research roles; otherwise, this is the easier bullet to cut.

### Meridian Heart Institute
- **70% fewer data-entry errors:** Strong bullet. Clarify how errors were measured and over what period, so the reduction is credible.
- **Median survival:** **Remove or correct this claim after checking the analysis.** Averaging follow-up time only among patients who died does not estimate median survival; excluding censored patients is particularly problematic. Describe the method and result only if you can verify an appropriate survival analysis.
- **Enrollment tracker:** Keep. Specify the action taken when sites were flagged, if that led to a measurable improvement.
- **Safety reports:** Keep the reporting responsibility, but reconsider “all 4 reviews passed.” A review without a protocol change is not necessarily a performance measure, and you should avoid implying you determined the committee’s decision.
- **Equivalence from p = 0.41:** **Remove or correct.** A nonsignificant superiority test does not establish equivalence. Only claim equivalence if a prespecified equivalence analysis supports it; otherwise, report the finding with its uncertainty accurately.
- **Three-site trial coordination:** Move this near the top of the position. It gives the reader the scope needed to understand the other bullets. Verify that “finished enrollment 4 months early” and “94% of follow-up visits completed” refer to the same reporting point or make the distinction clear.

### Northgate University Hospital
- **Record screening:** Keep; the volume and eligibility outcome are useful.
- **Interviews and no-shows:** Clarify your role in developing the reminders and the basis for attributing the drop from 18% to 11% to them. A before-and-after change alone may not establish causation.
- **Data dictionary:** Keep; reuse by later studies is persuasive evidence of value.
- **Lab-data and administrative tasks:** Split the data-merging achievement from the list of routine duties, or cut the routine duties. As written, it is hard to tell which work resolved the 1,200 identifiers.

### Projects
- **Asthma project, “cutting-edge analytics”:** Remove this bullet. It offers no method, result, or verifiable contribution.
- **Asthma follow-up finding:** Keep the figures, but identify the model or adjustment approach and avoid implying that follow-up *caused* fewer readmissions. Check whether “after adjusting” applies to the percentages shown or to a separate effect estimate.
- **Conference poster:** Keep; add the conference name if it is recognizable and you have space.
- **Community survey design and responses:** Keep. If the neighborhood estimates are presented as representative of residents, be ready to explain sampling and nonresponse.
- **Translation and pilot:** Specify your own contribution if translation or piloting was done by the broader team.
- **Randomized discharge-study bullet:** Delete it from this project. It appears to duplicate your Meridian trial and does not belong under a 2020 community survey.

### Skills and overall presentation
- **Methods:** Keep only methods you can discuss confidently and connect to work shown on the page. In particular, make sure any claimed survival-analysis expertise matches a corrected survival bullet.
- **Ordering:** Within each role, lead with scope and strongest verified outcomes, then supporting responsibilities.
- **Final check:** Audit every percentage, comparison, and causal or statistical conclusion against the underlying study results. That will improve this resume more than stylistic changes will.

## Reviewer 6

## Overall assessment

Your strongest evidence is the clinical research work: a three-site randomized trial, measurable data-quality and follow-up results, and experience handling substantial datasets. The main issue is not presentation—it’s **technical accuracy**. Two claims about survival analysis and equivalence are not supported by the methods described and should be corrected before you submit this resume. There is also a likely misplaced or duplicated trial bullet under the Community Health Survey project.

I’ll give change guidance only, without rewriting your lines. Since I’m reviewing pasted text, I can’t assess the original document’s layout or parsing.

## Changes to prioritize

1. **Correct the survival-analysis claim.** Averaging follow-up times among patients who died and excluding censored patients does not estimate median survival appropriately. Censoring must be accounted for. Verify what analysis you actually performed and describe only that.
2. **Correct the equivalence claim.** A nonsignificant superiority test (p = 0.41) does not establish equivalence. An equivalence conclusion requires a prespecified equivalence margin and an appropriate equivalence analysis. Check the protocol and analysis before retaining any equivalence claim.
3. **Resolve the Community Health Survey trial bullet.** It appears to repeat the heart-failure trial described under Meridian, but it sits under a different project dated 2020. Confirm whether it belongs there, represents a distinct study, or was included by mistake. Don’t present the same work as a separate project.
4. **Replace or remove the generic asthma-project bullet.** It makes broad promotional claims but gives no specific method, result, or contribution.
5. **Clarify the evidence behind key metrics.** For the 70% error reduction and the change in no-shows, add enough context—such as the comparison period or basis—to make the results interpretable, if you can substantiate it.

## Section-by-section review

### Header and education

- **Contact information:** Keep it, but check that the LinkedIn address is a real, working profile URL. If the example-style address is deliberate redaction, there’s nothing to change in this review copy.
- **M.P.H. in Biostatistics:** Keep. The degree is directly relevant to the research and analysis experience below.
- **Dates and location:** Keep if accurate. No change is clearly needed from the text alone.

### Summit Climbing Gym

- **Checking in about 150 climbers and selling passes and memberships:** Keep if you want to show current employment and customer-facing responsibility. The volume is useful context; make sure “about 150” reflects a typical shift, not an unusual peak.
- **Running the weekend rental desk and logging gear inspections:** This is clear, but reads mainly as a duty. Keep it if space permits or if it helps explain your current role; it is less relevant than your research evidence for research-focused applications.

### Meridian Heart Institute

- **Reducing data-entry errors by 70%:** Keep the result if you can support it. Clarify the basis for the reduction—such as how errors were counted and over what period—so the percentage is credible and interpretable. Make sure the resume doesn’t imply the checks alone caused the reduction unless that is established.
- **Estimating median survival by averaging follow-up time among patients who died:** Change this before using the resume. As described, the method does not properly handle censored observations and does not establish median survival. Verify the analysis performed and report it accurately.
- **Building the enrollment tracker for three sites:** Keep; this shows a concrete tool and a recurring operational use. Clarify what “more than 10% behind target” means if the enrollment pace or target period is otherwise unclear.
- **Presenting monthly safety reports, with all four reviews passing without a protocol change:** Clarify what the four reviews actually concluded and what your role was. “Passed” is imprecise for a safety review and could overstate what a committee’s decision means. Retain the no-change detail only if it accurately reflects the review outcomes.
- **Claiming the program was equivalent because the superiority test was nonsignificant:** Remove or correct the conclusion after checking the protocol and analysis. The stated p-value does not establish equivalence.
- **Coordinating the three-site, 640-patient trial and completing enrollment early:** Keep; this is strong evidence of scale, coordination, and a result. Make sure “coordinated” accurately reflects your responsibility, and that the early-enrollment and follow-up figures are documented and consistently defined.

### Northgate University Hospital

- **Screening 2,300 records and confirming 410 eligible patients:** Keep. The scope and outcome are clear.
- **Interviewing 25 patients and linking findings to text reminders and lower no-shows:** Keep if the sequence and attribution are accurate. Clarify the period or comparison behind the drop from 18% to 11%, if available. Avoid implying the interviews alone caused the decrease unless the intervention evaluation supports that conclusion.
- **Writing a 180-variable data dictionary reused by two later studies:** Keep. This is a specific, durable contribution. Make sure “reused” means the subsequent studies actually adopted it.
- **Cleaning and merging lab data while handling multiple operational duties, ending with 1,200 mismatched identifiers resolved:** Simplify this entry’s scope. It combines data work, scheduling, supply ordering, meeting minutes, and front-desk coverage, which makes the data result harder to see. Clarify what “resolved” means and what part you personally handled; retain the other duties only if they matter to your target roles.

### Projects

- **Asthma analysis: “Harnessed cutting-edge analytics…”:** Remove this bullet. It is generic promotional language and does not give a verifiable account of your work.
- **Finding about follow-up within seven days and readmission:** Keep the result, but give enough context to interpret it: for example, the sample or data source and whether the percentages are adjusted or unadjusted. Since this is an observational association, preserve that distinction and avoid implying that follow-up caused the difference. Include uncertainty measures if available and appropriate.
- **Presenting at the state public-health conference poster session:** Keep if presented as stated. If the distinction between an accepted poster and a presented poster matters, make sure the wording reflects what happened.
- **Community Health Survey: designing the survey and collecting 1,100 responses:** Keep. Add sampling or recruitment context if needed to show what the responses can support, especially since the bullet refers to neighborhood-level estimates.
- **Survey translated into Spanish and piloted with 20 residents:** Keep if space allows. Clarify your own role in the translation and pilot if it isn’t already clear elsewhere; don’t imply you personally translated it unless you did.
- **Randomized discharge study bullet under the survey:** Verify its ownership and placement before keeping it. It resembles the separate Meridian trial and does not appear to describe the Community Health Survey. Remove it from this project if it is duplicated or misplaced.

### Skills

- **Tools: R, REDCap, SAS:** Keep the tools you can substantiate. The projects and work history support R and REDCap to some extent; SAS is listed without an example here. Consider whether to retain it based on your actual experience, and make sure the resume provides supporting evidence if it is important for the roles you’re targeting.
- **Methods: randomized trials, regression, mixed-effects models, survey design:** Keep methods you can discuss and have used. Several are not clearly demonstrated in the bullets as written, so add evidence elsewhere if it exists or narrow the list to methods you can substantiate from this resume. Don’t add survival analysis until the underlying method and claim have been verified.

## Targeting note

You haven’t included a target role or job description, so I can’t judge fit against specific requirements. The resume currently supports a research-focused direction, such as clinical research coordination or public-health/biostatistics analysis, but the emphasis would differ by role. A target title or job description would help determine which operational details to prioritize and which methods or tools need stronger evidence.


---

# case-9

## Résumé

```
Riley Chen
+1 (555) 010-9054 | riley.chen@example.com | example.com/in/rchen
Date of birth: 5 Feb 1998 | Nationality: Singaporean
EDUCATION
Harbor State University | B.B.A. in Finance | Metro City, USA | Sep 2016 - May 2020
EXPERIENCE
Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022
- Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-
rate bonds of the same duration.
- Reviewed 3 years of declined applications; my findings changed two ratio thresholds and
raised approvals from 41% to 48% with no rise in early defaults.
- Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests
from 7 to 1 a year.
- Built a spreading template for borrower financials that cut each credit memo from 6 hours to
3.
Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025
- Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly
forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.
- Cut the monthly close from 8 working days to 5 by automating 30 reconciliations and
intercompany eliminations.
- Modeled the capital plan for 12 plant projects in a shared NPV template, so every request
used the same discount rate and payback rules.
- Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation
rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a
month.
- Valued the acquisition target by discounting its free cash flow to equity at the company’s
weighted average cost of capital.
- Trained 5 plant controllers on the new budgeting template and wrote its user guide.
PROJECTS
Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present
- Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing
within 6% of the market price.
- Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose
by 1 point.
- Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding
rate-case timing.
Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019
- Supported the FP&A team with financial reporting and analysis.
- Rebuilt the fund’s performance report to show returns against its benchmark, which the
committee used at every meeting.
- Wrote onboarding notes on the fund’s models for new analysts.
SKILLS
Tools: Excel
Methods: financial modeling, DCF valuation, forecasting, credit analysis
```

## Reviewer 1

## Overall assessment

The resume has useful, quantified finance experience, especially in forecasting, close automation, credit analysis, and valuation. But several claims need correction or substantiation before you send it: one interest-rate hedging claim appears technically wrong, one valuation method is mismatched, and one percentage calculation is incorrect.

There’s no target job description, so I can’t judge role fit precisely. For finance analyst, FP&A, or credit roles, I’d call it a **risky fit as written** until you fix those issues and clarify a few metrics.

## Header and education

- **Date of birth:** Remove it. It is not generally needed on a US resume and shares personal information that could invite bias.
- **Nationality:** Keep it only if relevant to the application. If work authorization is the concern, provide that information directly and accurately rather than relying on nationality.
- **Education entry:** The degree, school, location, and dates are clear. Consider adding GPA, honors, or relevant coursework only if they strengthen your candidacy and are accurate—particularly if you’re applying to roles that screen for them.
- **Contact details:** They’re easy to find. Make sure the LinkedIn or portfolio link points to a complete, current profile.

## Crescent Bank

- **Interest-rate hedging bullet:** Recheck this before using it. Buying more fixed-rate bonds of the same duration generally adds fixed-rate exposure; matching duration alone does not establish that the position hedged the bank’s risk. Explain the actual exposure being offset and the mechanics of the hedge, or remove the claim if you can’t support it.
- **Declined applications and approval rate:** Define the sample and comparison behind the change from 41% to 48%, including how many applications were reviewed and what “early defaults” covers. Make clear whether the increase is seven percentage points, and avoid implying your analysis caused the outcome unless you can substantiate that link.
- **Covenant-monitoring checklist:** The present-tense verb clashes with the past-tense role dates and surrounding bullets. Make the tense consistent. Also clarify the period and scope behind the reduction from seven missed tests to one per year.
- **Spreading template:** The time saved is compelling, but add context about how often the template was used or how many memos it affected, if you can verify it. That helps show the scale of the improvement.

## Stonebridge Manufacturing

- **Cash-flow forecast:** Explain what “forecast error under 4%” measures, over what period, and whether it is a monthly or aggregate result. Clarify what the USD 600M represents and how the forecast informed the USD 40M debt paydown; otherwise, the scale and attribution are hard to assess.
- **Monthly close:** Specify what the eight-to-five-day measure refers to and, if accurate, what tools or systems enabled the automation. This will help employers judge whether the work is relevant to their environment.
- **Capital plan for 12 projects:** Clarify whether the common discount rate and payback rules were an approved policy or a modeling convention. A single rate may not be suitable for projects with different risk profiles, so be prepared to explain how risk was handled. The bullet currently describes standardization but not its effect on decisions or workflow.
- **Chart-of-accounts mapping:** The opening verb is in the present progressive, unlike the rest of the completed experience. Make the tense consistent. Also clarify when the mapping and reduction happened, what “manual journal entries” counts, and whether the reduction was sustained.
- **Acquisition valuation:** This has a technical method issue: free cash flow to equity is normally discounted using the cost of equity, whereas WACC is normally used with free cash flow to the firm. Verify which cash flow and discount rate you actually used, then correct the underlying claim. As written, this could undermine confidence in your valuation skills.
- **Training and user guide:** This is credible supporting evidence, but it has less impact than the quantified accomplishments above. Keep it if training or documentation is relevant to your target role; otherwise, use the space for more detail on a higher-impact result.

## Projects

### Regional Utility Valuation

- **Valuation within 6% of market price:** State the valuation date and clarify how the comparison was made. A model being close to market price is not, by itself, evidence of forecast quality; be ready to explain the assumptions and the comparable-company check.
- **Sensitivity result:** The arithmetic is incorrect: a decline from USD 50 to USD 40 is a **20%** decline, not 25%. Correct the calculation or verify that one of the values is wrong.
- **Forecast accuracy improvement:** Define “forecast accuracy,” the baseline, and whether the change is 12 percentage points or a 12% relative improvement. “Across 10 years” also needs explanation: readers may interpret this as testing a long-term forecast against actual results. Describe the evaluation period and method accurately, and don’t claim accuracy improvement unless you have a defensible backtest or comparable evidence.

### Student Investment Fund

- **FP&A-team bullet:** This appears inconsistent with the Student Investment Fund role. Clarify whether you actually supported an FP&A team or whether the work was fund analysis/reporting; as written, it raises questions about the role and ownership.
- **Performance report:** Explain what changed in the report and what benchmark or period it covered. “The committee used it at every meeting” is potentially useful, but identify the committee’s role and make sure you can substantiate the frequency.
- **Onboarding notes:** This is a reasonable supporting contribution. Keep it if space allows and if the notes were actually used by later analysts; otherwise, prioritize evidence of your analytical work.

## Skills and presentation

- **Tools:** “Excel” alone is too broad for finance roles. Specify your actual level and relevant capabilities, but include only functions, modeling methods, or systems you can demonstrate in an interview. Add other tools only if you have genuinely used them.
- **Methods:** These are relevant but general. Keep the list aligned with the roles you’re targeting, and be prepared to explain your use of each method with a concrete example.
- **Tense and dates:** Standardize tense across each role. The resume shows an employment end date of June 2025; update your current status or activities if needed so the timeline is current.
- **Bullet order:** Put the most relevant and strongest results first within each role. That will help readers see your fit before they reach process details.
- **Consistency:** Use consistent date formatting, punctuation, and units throughout. Keep currency labels where they help clarify scale.

## Highest-priority changes

1. Verify or remove the interest-rate hedging claim.
2. Correct the utility valuation percentage.
3. Correct the FCFE/WACC mismatch based on the method you actually used.
4. Define the forecast, approval, default, and journal-entry metrics well enough to defend them.
5. Make tense consistent and resolve the FP&A wording in the student fund section.
6. Tailor the skills and bullet order to a specific job description.

## Reviewer 2

# Resume review

Your strongest material is the quantified work: forecast accuracy, close-time reduction, approval rates, and debt reduction. The main fixes are to correct two technical issues, make a few claims more precise, and remove personal details that don’t help your candidacy. I’m commenting on what to change and why, without rewriting your lines.

## Header

- **Date of birth:** Remove it. It is not relevant to your qualifications and can invite bias.
- **Nationality:** Remove it unless an application specifically asks for it. If work authorization is relevant, address that directly and accurately instead.
- **LinkedIn:** Replace the example URL with your actual LinkedIn profile, or omit it if you don’t have one. Check that the profile is current and consistent with the resume.
- **Contact details and location:** Keep your phone, email, and city. You don’t need a full street address.

## Education

- **Harbor State University entry:** This is clear and appropriately concise for someone with several years of experience. Add GPA only if it is strong and useful; otherwise, it’s not necessary. Coursework is unlikely to add much at this career stage.

## Experience

### Crescent Bank | Credit Analyst

- **Interest-rate hedging bullet:** Recheck this carefully before keeping it. Buying more fixed-rate bonds of the same duration would generally add similar interest-rate exposure, rather than hedge the risk of existing fixed-rate bonds. Specify the exposure being hedged and the instrument or strategy used, and ensure the description is technically accurate.
- **Declined-applications bullet:** Keep the quantified result, but clarify whether the approval increase is **7 percentage points** or a 7% relative increase. If possible, give the number of applications reviewed and the period over which early defaults were assessed. That helps readers judge the strength of the finding.
- **Covenant-monitoring bullet:** Change “Writes” to past tense to match the role dates and the other bullets. The reduction from seven missed tests to one is useful; clarify the period over which those figures were measured if it isn’t obvious.
- **Spreading-template bullet:** Keep the time-saving metric. If you can substantiate how often the template was used or how many analysts benefited, that would show its broader value; don’t add a number you can’t verify.

### Stonebridge Manufacturing | Financial Analyst

- **Cash-flow forecast bullet:** This is strong because it connects a large-scale forecast to a specific treasury outcome. Clarify how forecast error was measured and over what period. Make sure the resume doesn’t imply the forecast alone caused the debt paydown if other factors contributed.
- **Monthly-close bullet:** Keep the before-and-after close timeline and the number of reconciliations automated. If you know the broader effect—such as hours saved or fewer errors—consider including it, but only if you can support it.
- **Capital-plan bullet:** The work is relevant, but the result is currently about standardizing the process rather than its impact. Add a concrete outcome if available, such as how the template affected review time or investment decisions.
- **General-ledger mapping bullet:** Change “Mapping” to a past-tense action so the bullet is grammatically consistent and clearly describes completed work. The reduction in manual entries is compelling; preserve it. The sentence is long, so make sure the final version reads clearly and the link between the mapping work and the reduction is easy to follow.
- **Acquisition-valuation bullet:** There is a technical mismatch: free cash flow to equity (FCFE) is generally discounted at the cost of equity, while WACC is generally used with free cash flow to the firm (FCFF). Verify which cash flow and discount rate you actually used. Also clarify your contribution and what the valuation informed; as written, the bullet describes a method but not its outcome.
- **Training and user-guide bullet:** This demonstrates collaboration and knowledge-sharing. Add a resulting benefit if you can substantiate one, such as adoption, reduced support needs, or improved consistency. Otherwise, consider whether it adds more value than your stronger quantified bullets.

## Projects

### Regional Utility Valuation

- **First bullet:** “Within 6% of the market price” needs context: when was the market price measured, and what does the comparison demonstrate? Be careful not to present closeness to a market price as proof of forecast quality, especially if the valuation used information from the same date.
- **Second bullet:** Check the arithmetic. A change from $50 to $40 is a **20% decrease** from $50, not 25%. Also make clear whether “1 point” means one percentage point.
- **Third bullet:** The “forecast accuracy” claim needs a clear, defensible basis. Accuracy across future forecast years cannot be established without actual results to compare against; explain whether this was back-tested and how accuracy was calculated. If you can’t validate the metric, remove it rather than risk undermining the project’s credibility.
- **Project as a whole:** It overlaps somewhat with your professional valuation work. Keep it if it demonstrates independent analysis or a distinct modeling skill; otherwise, prioritize experience bullets with clearer business impact.

### Student Investment Fund

- **“Supported the FP&A team” bullet:** This is too broad to show what you personally did or what changed as a result. Add specific responsibilities or outcomes if there are meaningful ones; otherwise, remove it.
- **Performance-report bullet:** Keep the committee use—it shows the work was adopted. If available, specify what the report made easier to assess or what decisions it supported.
- **Onboarding-notes bullet:** This is useful supporting evidence of documentation and teamwork, but it is less compelling than your quantified experience. Keep it only if you have room and it adds something not already shown elsewhere.

## Skills

- **Tools: Excel:** This is likely too sparse for the roles you’re targeting, especially since your experience includes forecasting, reconciliations, and financial modeling. Add other tools or systems only if you have real working proficiency in them. You could also name relevant Excel capabilities if they are important to the jobs you’re applying for.
- **Methods:** These are relevant, but the list is brief compared with the work history. Tailor it to each target role and include additional methods only where your experience supports them—for example, budgeting, cash-flow forecasting, or financial-statement analysis if applicable.
- Keep the section easy to scan and include job-description keywords that accurately reflect your experience.

## Final consistency checks

- Use past tense for completed roles and keep tense consistent across bullets.
- Use consistent number, currency, and date formatting throughout.
- Tailor bullet order to the job: lead with credit-analysis work for credit roles, and forecasting, budgeting, and close improvements for FP&A roles.
- Check every metric and technical claim carefully. The FCFE/WACC mismatch and the project’s percentage calculation are the most important issues to resolve before submitting.

## Reviewer 3

Your strongest material is the quantified work in the analyst roles. Before polishing it, fix the technical and arithmetic issues below; a finance reviewer is likely to notice them.

### Header and education
- **Contact line:** Check that the LinkedIn URL works and that the email and phone number are appropriate for applications. Otherwise, no change needed.
- **Date of birth and nationality:** Remove both unless an application specifically requires them. They generally do not help assess your qualifications.
- **Education line:** Keep it, but check whether the university and degree names match your official records. The date range is optional at this career stage.

### Experience
- **Order of roles:** Put Stonebridge before Crescent Bank so your most recent experience appears first.
- **Crescent — interest-rate hedge:** Correct or remove this claim. Buying more fixed-rate bonds of the same duration would generally *increase*, not hedge, exposure to interest-rate changes. Establish what transaction actually occurred before describing its purpose.
- **Crescent — declined applications:** Keep the result, but be ready to substantiate how you measured “no rise in early defaults,” including the comparison period and whether approved loans had enough time to season.
- **Crescent — covenant checklist:** Change “Writes” to past tense to match the completed role. Clarify whether the reduction from seven to one is a measured annual result, rather than a projection.
- **Crescent — spreading template:** Keep the time savings; specify whether six to three hours was the time for a full credit memo or just its spreading step.
- **Stonebridge — cash-flow forecast:** Strong bullet. Check that “under 4%” identifies a consistently measured forecast-error metric, and that the forecast materially supported the early debt repayment rather than merely coinciding with it.
- **Stonebridge — close automation:** Strong bullet. Ensure the 30 items were actually automated and that the five-day close is a sustained result.
- **Stonebridge — capital plan:** Add the decision or operational outcome if one exists. Standardizing assumptions is useful, but this bullet does not yet show what happened as a result.
- **Stonebridge — chart of accounts:** Fix the mixed “Mapping … cut” construction so the action and result are grammatically connected. Verify that the reduction in journal entries is attributable to this work.
- **Stonebridge — acquisition valuation:** Fix the methodology before using this bullet: discounting *free cash flow to equity* at *weighted average cost of capital* mixes an equity cash flow with an enterprise discount rate. Describe the method you actually used, subject to confidentiality.
- **Stonebridge — training:** Keep if space allows; add an adoption or efficiency result if you measured one.

### Projects
- **Regional Utility — DCF:** Being within 6% of the market price is a comparison, not proof that the valuation was accurate. Avoid implying it validates the model.
- **Regional Utility — sensitivity:** Correct the arithmetic: a fall from USD 50 to USD 40 is **20%**, not 25%. Also confirm that “1 point” means one *percentage point* in the discount rate.
- **Regional Utility — forecast accuracy:** Clarify what was forecast, what “accuracy” means, and how you tested it without using information unavailable at the forecast date. Moving from 70% to 82% is **12 percentage points**, not a 12% relative increase.
- **Student Investment Fund — FP&A:** Check the setting. “FP&A team” sounds inconsistent with a student investment fund unless the fund actually had one; identify the group you supported accurately. The bullet is also less specific than your other work.
- **Student Investment Fund — performance report:** Keep; identify the benchmark if it helps establish the rigor of the comparison.
- **Student Investment Fund — onboarding notes:** Lower priority if you need space, because it shows less finance impact than the performance-report bullet.

### Skills and final checks
- **Tools:** List other tools only if you can use them confidently; “Excel” alone undersells the work suggested by your experience if you used additional systems.
- **Methods:** Keep only methods you can defend in an interview, particularly DCF valuation after correcting the valuation bullets.
- **Dates:** Verify that “Nov 2024 – Present” still reflects active project work. Check all dates and results for consistency before submitting.

## Reviewer 4

8 errors, 5 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Date of birth: 5 Feb 1998 | Nationality: Singaporean”

**Problem**
[Error] The personal details “Date of birth” and “Nationality” should be removed.

**Why**
These details are not relevant to evaluating the candidate’s work and are not expected in this résumé. Including them asks a reader to weigh personal information that does not strengthen the candidacy.

**How to change it**
Delete the date of birth and nationality from the file.

> “Jul 2020 - Dec 2022”

**Problem**
[Important] Crescent Bank appears above the more recent Stonebridge Manufacturing experience.

**Why**
The current order is not newest-first, so a reader encounters older experience before the more recent role. That makes the career timeline harder to scan.

**How to change it**
Move the Stonebridge Manufacturing entry above Crescent Bank.

> “Harbor State University”

**Problem**
[Important] Education appears before the work history despite several years of professional experience.

**Why**
The current order makes the degree lead instead of the more recent and relevant employment. A reader may have to look past education to reach the candidate’s professional experience.

**How to change it**
Move the Education entry below Experience.

> “Student Investment Fund”

**Problem**
[Important] The older Student Investment Fund entry is longer than needed for a résumé whose professional experience carries the finance story more directly.

**Why**
The entry dates from 2018–2019, before the professional roles, and its several bullets take space from more recent work. Keeping it to one line or removing it would give the professional experience greater emphasis.

**How to change it**
Shorten the Student Investment Fund entry to one line or remove it.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
[Error] Buying more fixed-rate bonds of the same duration does not hedge the interest-rate risk on the existing bond holdings.

**Why**
The additional bonds generally add to the portfolio’s exposure to interest-rate changes rather than offsetting it. A reader would need to know what rate-sensitive position actually offset that exposure; without one, the hedge claim undermines the credibility of the bullet.

**How to change it**
Name the offsetting position used [actual hedge], or remove the hedge claim if the action was only buying more bonds. If you have a defensible measure, add [measured change in interest-rate exposure versus pre-hedge exposure] after the method.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
[Polish] The pronoun “my” does not belong in this résumé bullet.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
[Error] “Writes” conflicts with the role dates ending in December 2022.

**Why**
The present tense says the checklist-writing is ongoing, but the listed employment has ended. A reader may question when the work took place and whether the entry’s dates are accurate.

**How to change it**
Change “Writes” to “Wrote” if the work happened during this role; otherwise clarify when the ongoing work takes place.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
[Polish] “Letting treasury pay down” states the debt-reduction result indirectly.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Error] “So every request used the same” overstates what a shared template ensures and buries the outcome in a conversational clause.

**Why**
A common template can standardize calculations and present intended assumptions, but users can change inputs or depart from the rules. The claim that every request followed them goes beyond what the template alone establishes.

**How to change it**
Say the template standardized the NPV calculations and documented the discount-rate and payback rules. Claim that every request used them only if that was verified.

> Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a month.

**Problem**
1. [Error] “Mapping” conflicts with the past-tense verbs in this ended role and leaves the bullet without a clear past-tense opening action.
2. [Polish] The reduction in manual entries appears only after lengthy account-mapping and testing details, making the result easy to miss.

**Why**
1. The role dates end in June 2025, while “Mapping” does not match the past-tense account of the work. That inconsistency can make the timing of the accomplishment unclear.

**How to change it**
1. Change “Mapping” to “Mapped.”

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] “Free cash flow to equity” discounted at WACC combines an equity cash-flow measure with the wrong discount rate.
2. [Polish] The valuation bullet gives no outcome from the analysis.

**Why**
1. Free cash flow to equity is cash available to equity holders and should be discounted at the cost of equity. WACC is generally used to discount free cash flow to the firm, which is available to both debt and equity holders; the current wording makes the valuation method internally inconsistent.

**How to change it**
1. Use the cost of equity to discount free cash flow to equity, or, if the model used WACC, describe it as discounting free cash flow to the firm.

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Polish] “Trained 5 plant controllers” and “wrote its user guide” give no result of that support.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
1. [Important] The comparison with the market price gives no date for that price.
2. [Polish] The 6% result comes after the methods, delaying the most scannable outcome.

**Why**
1. A utility’s share price changes over time, so a reader cannot tell which market price anchors the comparison. Without a reference date, the 6% result is harder to interpret.

**How to change it**
1. Add the relevant reference date after “market price,” such as [as-of date], if accurate.

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
1. [Error] A fall from USD 50 to USD 40 is a 20% drop, not a 25% drop.
2. [Polish] “1 point” does not specify whether the discount rate rose by one percentage point.

**Why**
1. The USD 10 decrease is 20% of the starting value of USD 50. A 25% drop would bring the share value to USD 37.50, so the stated percentage conflicts with the figures.

**How to change it**
1. Change “a 25% drop” to “a 20% drop.”

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
1. [Error] The increase from 70% to 82% is 12 percentage points, not 12%.
2. [Important] The bullet does not explain what “forecast accuracy” measures or how the 70% and 82% figures were evaluated.

**Why**
1. The stated figures differ by 12 percentage points, or about a 17.1% relative increase from 70%. Calling it a 12% increase misstates the size of the change.
2. Without the metric definition and comparison basis, a reader cannot interpret what improved or judge what the percentages represent. That leaves the claimed improvement difficult to assess.

**How to change it**
1. Change “by 12%” to “by 12 percentage points.”
2. Clarify [accuracy metric and validation basis], using the basis on which the 70% and 82% figures were evaluated.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Polish] “Supported the FP&A team with” frames the work as assistance rather than naming what you did.
2. [Polish] The opening bullet gives no outcome or evidence of value.
3. [Polish] “FP&A” may be unfamiliar to readers outside finance.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Polish] The bullet does not state what the performance report enabled the committee to do.
2. [Polish] “Which the committee used at every meeting” places the result after the action and makes “which” ambiguous.

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
[Polish] The onboarding-notes bullet gives no result or evidence of how many people used the notes.

> “financial reporting and analysis”

**Problem**
[Polish] The bullets read as separate reporting and onboarding contributions rather than one focused piece of work.

## What already works

- “Built a spreading template for borrower…”: The before-and-after figures make the productivity gain easy to understand.
- “Cut the monthly close from 8…”: Quantifies the close improvement with a clear baseline and result.

## Reviewer 5

The biggest fixes are the **interest-rate hedge claim**, the **FCFE/WACC mismatch**, the **sensitivity calculation**, and the **chronological order of your jobs**. I’m identifying what to change and why, without rewriting any lines.

## Header and layout

- **Date of birth and nationality:** Remove both. They are generally unnecessary on a U.S.-style résumé and disclose personal information that employers don’t need at this stage. If work authorization is relevant, address that separately and only when appropriate.
- **Contact link:** Make sure the LinkedIn or portfolio URL is your real, working profile rather than a placeholder. A broken or generic link can undermine the application.
- **Experience order:** Put Stonebridge before Crescent. Your experience should normally run in reverse chronological order, with the most recent role first.
- **Currency and number formatting:** Standardize how you present currency and amounts throughout. Consistent formatting makes the figures easier to scan.

## Education

- **Degree and dates:** These are clear. Consider adding GPA, honors, or relevant coursework only if they are strong and useful for the roles you’re targeting. Given your experience, none is necessary just to fill space.

## Crescent Bank

- **“Hedged the bank’s interest-rate risk…”**: Verify and clarify the financial logic. Buying more fixed-rate bonds of the same duration would ordinarily add fixed-rate exposure rather than hedge existing holdings. If the transaction hedged a liability or another exposure, make that relationship clear; otherwise, correct the claim.
- **“Reviewed 3 years of declined applications…”**: Add the size of the application sample and the period over which you observed early defaults, if you can support those details. That will make the approval-rate change and “no rise” claim more credible.
- **“Writes the covenant-monitoring checklist…”**: Change the verb tense to match a role that ended in 2022. Also clarify the period covered by the missed-test reduction, if it isn’t already clear.
- **“Built a spreading template…”**: Clarify whether the time reduction refers to analyst hours, elapsed time, or another measure. That makes the productivity claim easier to interpret.

## Stonebridge Manufacturing

- **“Built the rolling 18-month cash-flow forecast…”**: Specify the forecast-error measure and the period over which it stayed below 4%, if you have that information. Also make clear what the USD 600M describes, since the company’s scale is otherwise ambiguous. The early debt repayment is a strong result; retain it only if you can substantiate the link to your forecast.
- **“Cut the monthly close…”**: This is clear and quantified. If available, add evidence that the faster close maintained accuracy or controls; automation alone can raise that question.
- **“Modeled the capital plan…”**: The standardization result is useful, but “every request” is broad. Confirm that it accurately describes the scope, and add evidence of how the template was adopted or used if you have it.
- **“Mapping 600 general-ledger accounts…”**: Fix the tense: the bullet describes completed work but starts with a gerund. Also check the sentence structure, which currently makes the action and result difficult to follow. If possible, clarify the period covered by the journal-entry reduction and how the before-and-after figures were measured.
- **“Valued the acquisition target…”**: Check the valuation method. Free cash flow to equity is normally discounted at the cost of equity; WACC is normally used with free cash flow to the firm. The cash-flow measure and discount rate need to be consistent. As written, they are not.
- **“Trained 5 plant controllers…”**: Clear and relevant. If you know whether the controllers adopted the template or how widely it was used, that could make the outcome more tangible.

## Projects

### Regional Utility Valuation

- **“Valued a listed regional utility…”**: Clarify which valuation result was within 6% of the market price and the date used for that market-price comparison. A market-price match by itself doesn’t establish model quality, so explain the purpose of the comparison through the surrounding project details.
- **“Showed the share value fell from USD 50 to USD 40, a 25% drop…”**: Correct the arithmetic: a move from 50 to 40 is a **20%** decline. Also clarify that “1 point” means a one-percentage-point change in the discount rate, if that is what you mean.
- **“Raised the model’s forecast accuracy by 12% across 10 years…”**: Define how you measured forecast accuracy and what the 10-year period represents. Moving from 70% to 82% is a **12-percentage-point** increase, not a 12% relative increase. Also explain how you validated the accuracy change; a long-range forecast cannot be assessed without a stated comparison or backtest.

### Student Investment Fund

- **“Supported the FP&A team…”**: Check whether this accurately describes the team and your work. In a student investment fund, “FP&A” may sound unrelated or imprecise; the current bullet is also generic and doesn’t indicate what analysis or reporting you performed.
- **“Rebuilt the fund’s performance report…”**: This has a clear deliverable and user. If possible, specify the timeframe or decision the report supported, rather than relying only on committee use.
- **“Wrote onboarding notes…”**: Clear, but the impact is not shown. If you can substantiate how the notes were used or whom they helped, add that context.

## Skills

- **Tools: Excel:** This is very limited for a finance résumé. Add other relevant software, systems, or analytical tools you can genuinely use. Be specific about Excel capabilities if they are important to your target roles.
- **Methods:** These are relevant but broad. Make sure each is supported by your experience or project bullets, and add any other job-relevant methods only if you can discuss them confidently in an interview.

## Reviewer 6

## Overall assessment

There’s useful evidence here: quantified outcomes, process improvements, and experience across credit analysis and corporate finance. The main risk is **credibility**, not a lack of accomplishments. A few statements appear technically inconsistent or mathematically wrong, and those could undermine stronger, well-supported results elsewhere.

I’m assuming you’re targeting financial analyst or FP&A roles, with credit analysis as another possible direction. Without a job description, I can’t assess fit for a particular opening. I reviewed only the pasted text; layout and original-file parsing aren’t assessed.

## Highest-priority changes

1. **Correct the valuation and sensitivity claims.** The FCFE/WACC pairing is inconsistent, and the stated percentage drop from $50 to $40 is incorrect.
2. **Clarify the bond “hedge.”** As written, buying more fixed-rate bonds of the same duration does not establish how you reduced interest-rate risk and may suggest the opposite.
3. **Fix verb tense in past roles.** “Writes” and “Mapping” conflict with the dated experience entries.
4. **Substantiate or remove the project’s “forecast accuracy” claim.** The metric and comparison are unclear, especially for a 10-year forecast.
5. **Remove personal details that don’t belong on most private-sector resumes.** Date of birth and nationality are generally unnecessary unless an application specifically requires them.

## Changes by section and line

### Contact details

- **Date of birth:** Remove it in most private-sector applications. It is not relevant to your qualifications and unnecessarily shares personal information.
- **Nationality:** Remove it unless the application specifically requests it. If work authorization is relevant, provide accurate work-authorization information separately rather than relying on nationality to imply it.
- **Phone, email, and profile URL:** If these are literal rather than redacted examples, replace the placeholder-looking details with your professional contact information or remove the profile link if it is not active.

### Education

- **Harbor State University, B.B.A. in Finance:** This is clear and appropriately placed after your work history. No material change is needed based on the text provided.

### Crescent Bank — Credit Analyst

- **Interest-rate-risk hedge:** Recheck this claim with care. Buying more fixed-rate bonds of the same duration does not, by itself, explain how you hedged the bank’s risk; depending on the balance sheet and exposure, it could increase exposure. Clarify what risk or position was being offset and what action you actually took. Keep the claim only if the described transaction genuinely reduced that exposure.
- **Declined-application review:** Preserve the approval-rate and early-default results, but clarify the comparison basis if you can: what periods or application groups were compared, and how you know early defaults did not rise. Also make clear whether you recommended the threshold changes, implemented them, or contributed to a broader review; the current wording implies a direct link between your findings and the results.
- **Covenant-monitoring checklist:** Change the tense to match a completed role. The reduction in missed tests is useful evidence; make sure the annual comparison period is clear and that the wording accurately reflects your ownership of the checklist.
- **Spreading template:** Keep the time-saving result. Clarify, if material, whether the reduction was per memo and whether you built the template yourself or contributed to it. The current bullet does not specify the scope of your ownership.

### Stonebridge Manufacturing — Financial Analyst

- **Rolling cash-flow forecast:** This is one of the stronger bullets. Clarify what the USD 600M figure represents (for example, the company’s scale measure) and what “forecast error under 4%” measures and over what period. Preserve the connection to the treasury decision only if your forecast genuinely informed it.
- **Monthly close:** Keep the reduction from eight to five working days. Clarify whether the 30 reconciliations are the full set automated or a subset, and what you personally did. The current wording combines reconciliations and intercompany eliminations, so make sure the scope is accurate.
- **Capital plan for 12 plant projects:** Clarify your part in the modeling and whether the shared assumptions were company-approved standards. “Every request used the same discount rate” could raise questions if different project risks called for different rates; be precise about what was standardized and why.
- **Chart-of-accounts mapping:** Change “Mapping” to a tense consistent with a completed role. This bullet has strong scope and impact, but clarify your ownership of the mapping and allocation-rule changes. Make sure the reduction in manual entries is tied to the same process and period as the prior-close testing.
- **Acquisition valuation:** This needs a technical correction or explanation. Free cash flow to equity is ordinarily discounted using the cost of equity, while WACC is ordinarily used with free cash flow to the firm. Confirm what cash flow you actually modeled and what discount rate you used, then make the terminology consistent. As written, finance readers may see it as a fundamental valuation mismatch.
- **Controller training and user guide:** Keep this if training and documentation are relevant to your target roles. The number trained is clear; if you have a substantiated operational outcome, you could include it, but don’t invent one.

### Projects

**Regional Utility Valuation**

- **Ten-year DCF and comparable-company check:** Clarify the valuation date and what the “within 6% of the market price” comparison means. A model landing close to market price is not, on its own, evidence that the valuation was accurate; it may help to explain the purpose of the comparison and the assumptions behind it.
- **$50 to $40 sensitivity:** Correct the arithmetic or the stated percentage. A fall from $50 to $40 is a **20%** decrease from the $50 starting value, not 25%. Also specify what “discount rate rose by 1 point” means and ensure the model output is being described accurately.
- **“Forecast accuracy” from 70% to 82%:** Do not present this as a measured accuracy improvement unless you can explain what was forecast, how accuracy was calculated, and how the model was checked against actual outcomes. A ten-year forecast does not establish accuracy just because the model includes ten years of projections. If this is a backtest or another defined measure, identify that basis; otherwise, remove the accuracy claim and describe only what the added rate-case timing changed in the model.

**Student Investment Fund**

- **“Supported the FP&A team…”:** Check the context. In a student investment fund, “FP&A team” may be confusing or may describe a separate activity. Make the organization and your role clear. Also replace the generic description with the actual type of reporting and analysis you performed—or remove this bullet if it does not accurately describe the fund work.
- **Performance report:** Keep the benchmark comparison and committee use; these make the work and its audience clearer. If useful and accurate, clarify what performance the report covered.
- **Onboarding notes:** This is credible supporting work. Keep it if documentation or knowledge transfer matters for the roles you’re targeting.

### Skills

- **Tools: Excel:** This is a very short list. Add other tools only if you have genuinely used them and can discuss your experience. If Excel is your only relevant tool, specify the capabilities you can substantiate rather than implying broader proficiency.
- **Methods:** The listed methods fit your experience, but are broad. Keep the ones supported by the bullets, and make sure the skills section reflects the role you want—FP&A, corporate finance, or credit analysis. Don’t add keywords solely because they appear in a job posting.

## Final checks

- Standardize tense throughout: completed work in past roles should read as completed work.
- Check all figures, percentage changes, and finance terminology before submitting.
- If targeting FP&A, make the manufacturing forecasting, close, budgeting, and planning work most prominent. If targeting credit analysis, give the bank experience more emphasis.
- If the contact details are redacted, disregard my note about placeholders.

I haven’t rewritten your lines or supplied replacement wording, as requested. In this chat I can review the pasted text, but I can’t generate a PDF; visual layout and PDF parsing therefore remain unassessed.


---

# case-10

## Résumé

```
Morgan Kim
+1 (555) 010-8173 | morgan.kim@example.com | example.com/code/mkim
EDUCATION
Clearwater Institute of Technology | B.S. in Electrical Engineering | Metro City, USA | Sep 2017 - May 2021
EXPERIENCE
Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023
- Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25
seconds across 20,000 units a month.
- Traced a batch of early field failures to a solder-paste change; the findings updated the
reflow profile and cut returns from 2.1% to 0.4%.
- Wrote the calibration procedure for the sensor line, cutting calibration drift complaints
from 15 to 2 a quarter.
- Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to
150 boards an hour.
Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025
- Improved update speed by 60% by compressing firmware images and resuming interrupted
downloads.
- Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware
build.
- Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the
root cause of 5 field failures.
- Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it
without aliasing.
- Fixed a race condition on the counter shared by the interrupt handler and the main loop by
declaring the counter volatile.
- Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting
control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.
PROJECTS
Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present
- Engineered a next-generation, innovation-driven IoT solution that redefines sustainable
environmental sensing.
- Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio
transmissions.
- Published the schematics and firmware openly, and a local school built two stations from
them.
Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021
- Worked on firmware and testing for the robot fleet’s motor controllers.
- The CAN-bus firmware for the dashboard was written and tested against the motor controller
before each race.
- Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter
eightfold and motor faults by more than half.
SKILLS
Tools: C, C++, STM32, oscilloscopes
Methods: firmware, hardware-in-the-loop testing, CAN, low-power design
```

## Reviewer 1

## Highest-priority changes

1. **Put Voltline Robotics before Clearwater Sensors.** Experience is usually listed newest first, and Voltline is your most recent role.
2. **Fix the Formula Student section.** Its motor-controller bullets appear to repeat work attributed to Voltline’s 300-robot fleet. That mismatch could seriously undermine credibility.
3. **Revisit the `volatile` bullet.** In C, declaring a shared counter `volatile` does not by itself make concurrent access safe or fix a race condition.
4. **Verify the sampling claim.** Sampling a 5 kHz signal at 8 kHz does not, by itself, support the claim that the signal is captured without aliasing. Check the signal’s actual bandwidth and any filtering or sampling approach involved.

## Header and structure

- **Contact details:** Make the code portfolio address a complete, clickable URL. If the portfolio contains relevant work, make sure the link goes directly to it.
- **Section order:** Keep Education below Experience, as you have it, unless you are applying for a role where your degree or academic projects are more relevant than your work history.
- **Dates:** Use one consistent date style throughout. Your date ranges are understandable, but the resume would look more polished if their formatting were uniform.
- **Current project dates:** The weather-station project overlaps with your Voltline role. That is plausible, but be prepared to explain whether it was a personal project outside work.

## Education

- **Clearwater Institute of Technology line:** Consider adding a relevant concentration, honors, or coursework only if it strengthens your fit for the jobs you’re targeting. The degree and dates are otherwise clear.
- **Gap after graduation:** There is a gap between graduation and your first listed role. You do not need to explain it on the resume unless you have relevant work, projects, or other experience from that period to include.

## Experience

### Clearwater Sensors — Hardware Test Engineer

- **Automated-test bullet:** Keep the before-and-after time and monthly volume, but make sure the time unit is unambiguous and the volume clearly describes the production scale affected. This is a strong quantified result.
- **Field-failure bullet:** Clarify what the percentages measure—such as return rate—and the period or batch used for comparison. That makes the reduction easier to assess.
- **Calibration-procedure bullet:** Specify what “calibration drift complaints” refers to and the time period for the comparison. As written, the improvement is useful but the measure is not fully defined.
- **Test-fixture bullet:** The throughput figures are compelling. Make clear that both figures use the same measurement basis and refer to the same station or process.

### Voltline Robotics — Embedded Software Engineer

- **Update-speed bullet:** Define what “update speed” measures, such as elapsed update time or download throughput, and identify the comparison baseline. Otherwise, a 60% improvement is hard to interpret.
- **Hardware-in-the-loop bullet:** Add a useful result if you have one, such as test duration, coverage, or a defect caught. The test count shows scale, but not the rig’s impact.
- **Crash-logger bullet:** Distinguish between the logger capturing data and your subsequent analysis finding the root causes. Also clarify whether the five failures were separate incidents or failure types.
- **Sampling bullet:** Recheck the technical claim. An 8 kHz sampling rate cannot generally capture a 5 kHz component without aliasing under the usual Nyquist condition. If filtering, a different signal definition, or another technique made this valid, make that clear; otherwise correct or remove the claim.
- **Race-condition bullet:** Do not claim that `volatile` fixed a race unless there was also a proper synchronization or atomicity mechanism. `volatile` alone does not make shared access safe. Describe the actual fix accurately, or remove the bullet if that was the only change.
- **Motor-controller-firmware bullet:** This is your strongest quantified embedded-systems accomplishment, so consider placing it first under Voltline. Clarify what the firmware rewrite covered and, if available, the period or basis for measuring the field-fault reduction.

## Projects

### Low-Power Weather Station

- **“Next-generation…” bullet:** Remove it or replace the space with concrete technical work or a verifiable outcome. The current language is promotional but does not tell a hiring manager what you built.
- **Current-reduction bullet:** Keep the before-and-after current figures. Add measurement conditions or operating assumptions if they materially affect the comparison.
- **Open-source/school bullet:** This is distinctive and worth keeping. Make sure the public schematics and firmware are easy to find from your portfolio link, and clarify your role in the school’s builds if it was more than publishing the materials.

### Formula Student Electric Car

- **Project title and leadership role:** The title and “Electronics Lead, Team of 12” suggest a student race-car project, but the bullets refer to a robot fleet. Resolve that mismatch before submitting the resume.
- **Firmware-and-testing bullet:** “Worked on” is vague and does not show your contribution. Specify the work you personally owned, or remove the bullet if the later bullets cover the same work.
- **Dashboard CAN-bus bullet:** The passive construction obscures your role. Clarify what you personally implemented or tested and what the testing verified. Also check that the dashboard work is relevant to the positions you’re targeting.
- **Motor-controller-firmware bullet:** This closely duplicates the Voltline accomplishment, including the robot-fleet scale and performance results. Verify that it genuinely belongs to this project. If it does not, remove it; if it does, explain the distinct scope so it cannot be mistaken for copied or double-counted work.

## Skills

- **Tools line:** C and C++ are languages, and STM32 is a platform rather than a tool. Organize the skills by type so hiring teams and screening systems can identify languages, platforms, and equipment easily.
- **Methods line:** “Firmware” is broad, and CAN is a protocol rather than a method. Use this section for specific methods or technical areas you can substantiate, and add relevant tools or platforms you have actually used. Avoid adding skills you cannot discuss in an interview.

Finally, check that the final PDF preserves consistent bullet indentation, spacing, and date alignment. Several entries wrap across lines in the supplied text; make sure those wraps look intentional in the document.

## Reviewer 2

## Overall assessment

The resume has strong embedded-systems material: measurable manufacturing improvements, firmware work, test automation, and a real-world project. The main issue is credibility, not a lack of accomplishments. Several details conflict or may be technically incorrect, and those will draw more attention than the strong metrics.

I have **not rewritten your lines or provided replacement wording**. These are changes to make and why.

## Header and structure

- **Check the portfolio link.** It appears to use a placeholder domain. A dead or generic link undermines the resume; use a working link to relevant code or project documentation.
- **Put experience in reverse chronological order.** Voltline is the more recent role, so listing Clearwater first makes the timeline harder to scan.
- **Make date and location formatting consistent.** Apply one format throughout, and keep the project dates clearly distinct from employment dates.
- **Clarify the gap between graduation and your first listed role if relevant.** The dates show a gap from May 2021 to April 2022. You do not need to account for it on the resume unless there is relevant work or activity, but be prepared to explain it.

## Education

- **This is clear as written.** Check that the degree title, institution name, and dates match your official records.
- **Consider whether additional education details would help your target role.** Relevant coursework or academic projects may be useful for an early-career application, but only if they add evidence not already shown elsewhere.

## Clearwater Sensors

- **Automated end-of-line tests:** Keep the before-and-after result, but clarify what “test time per unit” measures and confirm the comparison covers the same test scope. Also make the monthly volume easy to interpret as volume processed, not a performance result.
- **Field-failure investigation:** Clarify the basis for attributing the failures to the solder-paste change and define the return-rate measurement period or denominator. Otherwise, the large reduction may sound more conclusive than the evidence supports.
- **Calibration procedure:** Explain what counts as a “drift complaint” and over what time period the before-and-after counts were compared. Complaint counts can be affected by production volume or reporting practices.
- **Test fixture:** Clarify whether the throughput figures are measured production results or station capacity, and whether they refer to boards or finished units. Readers may also wonder whether quality or retest rates changed.

## Voltline Robotics

- **Firmware-update speed:** “Speed” is ambiguous: it could mean elapsed time, transfer rate, or completion rate. Specify what was measured and under what conditions, including the baseline and typical image size if you can substantiate them.
- **Hardware-in-the-loop rig:** Give enough detail to show what the 400 tests cover and what “ran on every firmware build” means in practice. Test count alone does not indicate coverage, reliability, or how much of the process you owned.
- **Crash logger:** Clarify what sensor data was captured and how the logger helped isolate the five failures. Be ready to explain how the data was buffered and written to flash without affecting the system.
- **Sampling line:** **Verify or correct this before sending the resume.** Sampling a signal with a 5 kHz component at 8 kHz does not satisfy the Nyquist criterion. Check whether the signal frequency, sampling rate, or description is inaccurate, and account for any anti-alias filtering.
- **Race-condition line:** **This is a high-priority technical correction.** Declaring a shared counter `volatile` does not, by itself, make access atomic or resolve a race condition. Verify what actually fixed the issue and describe that accurately; an embedded interviewer is likely to challenge this claim.
- **Firmware rewrite:** Keep this accomplishment only if you can clearly substantiate your role, the scope of the rewrite, and how the jitter and fault reductions were measured. It is one of your strongest results, but it later appears again in the Formula Student section, creating a serious credibility problem.

## Projects

### Low-Power Weather Station

- **Remove the promotional claim.** The “next-generation” and “redefines” phrasing makes an otherwise concrete engineering project sound like marketing and does not establish what you built.
- **Low-power result:** Keep the current measurements, but document the measurement conditions and what changed between the two readings. Battery, radio activity, sampling frequency, and measurement method can all affect average current.
- **Open-source claim:** Make sure the repository or documentation is accessible from your header link. Clarify the extent of the school’s use only if you can verify it; otherwise, avoid implying broader adoption than two builds support.
- **Add technical specifics only where you can defend them.** The project would be more informative if readers could assess the hardware, firmware, and power-measurement work, rather than just the headline result.

### Formula Student Electric Car

- **Resolve the “robot fleet” references.** A Formula Student car project does not naturally match the robot-fleet wording in the first bullet. Check that the description belongs to this project and is not carried over from your Voltline role.
- **Remove or substantiate the 300-robot firmware claim here.** It closely duplicates the Voltline accomplishment, but the project dates are earlier and the project is described as a Formula Student car. As written, this is the biggest credibility risk on the resume.
- **Clarify your individual contribution to the dashboard CAN work.** The current passive phrasing does not make clear what you personally implemented, tested, or owned.
- **Check the project name, team role, and scope together.** “Electronics Lead” for a team of 12 could be a strong qualification, but the bullets should support that role and fit the Formula Student context.

## Skills

- **Expand the skills section selectively.** It is currently sparse compared with the experience claimed. Add relevant languages, embedded platforms, protocols, debugging tools, and test methods only if you have actually used them and can answer detailed questions about them.
- **Avoid broad categories that repeat the experience section.** “Firmware” and “low-power design” describe areas of work more than concrete skills; use the section to make your specific technical toolkit easy to scan.
- **Be consistent about proficiency.** Do not list tools or technologies you have only briefly encountered as if they were established strengths.

## Highest-priority fixes

1. Resolve the duplicated and inconsistent Formula Student / robot-fleet claims.
2. Correct or substantiate the 5 kHz-at-8 kHz sampling statement.
3. Replace the `volatile` explanation with an accurate account of the race-condition fix.
4. Reverse the experience order and verify the portfolio link.
5. Add measurement context to the strongest metrics so they remain credible under questioning.

Without a target job description, I can’t assess role fit precisely. Based on the resume as written, your clearest positioning is embedded firmware, hardware test, or firmware validation—not LLM-focused roles.

## Reviewer 3

# Resume review

Your strongest material is the quantified engineering work: test-time reduction, throughput, failure-rate improvement, and control-loop jitter. The main issues to address are **technical accuracy**, **duplicated or conflicting claims**, and **clarity about what you personally built**.

## Contact and layout

- **Add a LinkedIn profile** if you use one, and make clear whether the code link is GitHub, a portfolio, or another platform. Recruiters should be able to identify what they’re opening.
- **Put experience before education.** With several years of relevant engineering experience, your work history is more important than your degree.
- Keep the section formatting consistent. The current bullets wrap mid-phrase in several places; in the final document, make sure line breaks are natural and the resume remains easy to scan.

## Experience

### Clearwater Sensors — Hardware Test Engineer

- **“90 to 25 seconds”**: Add the unit to both values. The reader can infer seconds from the sentence, but explicit units make the metric immediately clear.
- **The 20,000-units-a-month figure**: Clarify that this is the production volume covered by the test process, if accurate. It is a useful scale indicator, but its relationship to the time savings could be clearer.
- **The field-failure and returns bullet**: Clarify whether the reduced return rate applied to the affected batch, a later production run, or the overall product. That context helps readers interpret the improvement.
- **The calibration-procedure bullet**: “Complaints” is less precise than a measured engineering outcome. Clarify what counted as a drift complaint and over what period the before-and-after comparison was measured.
- **The test-fixture bullet**: Make sure the throughput figures use the same conditions and refer to the same unit of work. The increase is strong, so readers may want to know whether it reflects a measured production rate.

### Voltline Robotics — Embedded Software Engineer

- **Order this role before Clearwater Sensors.** Experience should be in reverse chronological order.
- **The firmware-update bullet**: Clarify what “update speed” measures—such as transfer time or time to complete an update—and under what conditions. Compression and resumable downloads may affect different parts of that process.
- **The HIL-test-rig bullet**: Add the result of running the tests, if you can support it: for example, whether it caught regressions, increased test coverage, or reduced manual testing. As written, it describes the activity but not its impact.
- **The crash-logger bullet**: Clarify whether the logger helped identify the root cause in each of the five failures or contributed to diagnosing them. That distinction makes the claim more exact.
- **The 5 kHz signal / 8 kHz sampling bullet needs correction.** Sampling a 5 kHz signal at 8 kHz does not capture it without aliasing; the sampling rate must exceed twice the highest frequency of interest, with practical margin and appropriate filtering. Verify the actual signal and sampling rates before keeping this claim.
- **The shared-counter bullet is technically inaccurate as written.** Declaring a variable `volatile` does not make access atomic or prevent a race between an interrupt handler and the main loop. Describe the actual synchronization or atomicity mechanism, if there was one, and verify the fix addressed the race.
- **The motor-controller rewrite bullet**: This is one of your strongest accomplishments, but it duplicates a nearly identical claim in the Formula Student project. Keep the claim in the section where it belongs, and make the scope and your role unambiguous. If both entries describe separate work, distinguish the projects and their results clearly.
- For the performance and fault-reduction metrics, clarify the comparison basis where possible—what “before” and “after” refer to—so the figures are credible and interpretable.

## Projects

### Low-Power Weather Station

- **Remove the “next-generation, innovation-driven…” bullet.** It is promotional rather than informative and doesn’t show what you built or what changed.
- **Keep the power-consumption result and explain the measurement basis.** The before-and-after figures are useful; make sure they were measured under comparable operating conditions.
- **Keep the school adoption detail.** It demonstrates real-world use. Clarify your contribution and the extent of the school’s use if that would help show the project’s reach.
- The project began while you were at Voltline. That overlap is not a problem, but be prepared to explain how you balanced it with your job.

### Formula Student Electric Car

- **Review the “robot fleet” firmware bullet carefully.** It repeats the Voltline claim about rewriting motor-control firmware for roughly 300 robots, including similar performance improvements. This is a major credibility risk unless these are genuinely distinct projects. Remove the inaccurate or duplicated claim, or make the separate scope clear.
- **Clarify what you personally contributed to the team’s firmware and testing.** “Worked on” is broad, while the next bullet is passive and doesn’t identify your role. Give the project space only for work you can substantiate.
- **Clarify the dashboard and motor-controller relationship.** The CAN-bus bullet mentions both, but leaves the system’s function and your contribution unclear.
- **Make the team-lead scope clear.** The title indicates leadership, but the bullets don’t yet show what leading the 12-person team involved. Add that dimension only if you can describe specific responsibilities or outcomes.

## Skills

- **Reorganize the categories.** The current “Tools” category mixes programming languages, a microcontroller platform, and lab equipment; “Methods” mixes technical practices with a protocol. Use categories that distinguish languages, embedded platforms, interfaces/protocols, test methods, and equipment.
- **Include relevant technologies only if you can discuss them confidently.** The experience suggests you may have used additional embedded tools, languages, or debugging and build systems; list any that are accurate and relevant to the roles you’re targeting.
- **Remove or narrow broad terms such as “firmware.”** It describes a field of work rather than a distinct skill, so it contributes little as a standalone keyword.

## Priorities before applying

1. Correct the sampling-rate and `volatile` claims.
2. Resolve the duplicated 300-robot motor-controller claim.
3. Put experience in reverse chronological order.
4. Add context to the update-speed and other before-and-after metrics.
5. Clarify your individual contributions in the projects.

## Reviewer 4

Your strongest material is the measured engineering impact in your experience section. Before polishing wording, fix three credibility issues: the sampling claim, the `volatile` claim, and the robot-fleet bullets under the student-car project.

### Header and education
- **Code link:** Make sure it opens directly to relevant, working code or project documentation. A general profile is less useful if a reviewer has to hunt for your work.
- **Education:** Keep it, but move the more recent Voltline role above Clearwater Sensors. Experience should run newest to oldest so your current level of work is visible first.

### Clearwater Sensors
- **End-of-line testing:** Keep the before-and-after time and monthly volume. Clarify what part of the process you automated if that is not obvious to your target audience; it helps establish your technical contribution.
- **Field failures:** Strong bullet. Retain the link between your diagnosis, the process change, and the return-rate reduction.
- **Calibration procedure:** Keep the outcome, but clarify whether the drop in complaints can reasonably be attributed to the procedure. That makes the causal claim more credible.
- **Eight-board fixture:** Strong, concrete result. Keep it.

### Voltline Robotics
- **Firmware updates:** Specify whether the 60% improvement refers to download time, total update time, or transfer rate. Compression and interrupted-download recovery solve different problems, so the current metric is ambiguous.
- **Hardware-in-the-loop rig:** Keep the 400-tests-per-build detail. Add the relevant hardware or test scope if it would demonstrate a skill required by the jobs you want.
- **Crash logger:** Keep the two-second window and five diagnosed failures. Make clear that the recorded data *enabled diagnosis*, rather than suggesting the logger itself found root causes.
- **Vibration sampling:** Correct or remove this claim. Sampling a 5 kHz signal at 8 kHz does **not** capture it without aliasing; that would require a sampling rate above 10 kHz, or a different explanation of what signal was being measured.
- **Shared counter:** Correct or remove this claim. Declaring a counter `volatile` does not, by itself, fix a race condition or make access atomic. Describe the actual synchronization or access change you made, if there was one.
- **Motor-controller rewrite:** Keep this prominent: the fleet size and measured jitter and fault reductions make it one of your best bullets. Be ready to explain how the field-fault reduction was measured.

### Projects
- **Weather station, first bullet:** Remove the promotional language. It does not tell a reviewer what you built or how.
- **Weather station, power reduction:** Keep it; the mechanism and measurement are clear. If relevant, specify the operating conditions used for the current measurements so they are comparable.
- **Weather station, open publication:** Keep the school adoption detail. It is good evidence that someone else could use your documentation.
- **Formula Student, electronics lead:** State the responsibilities you actually held as lead; the current bullets do not show how you led the team of 12.
- **Formula Student, first and third bullets:** Remove or correct them. Both discuss a robot fleet rather than the electric car, and the third substantially duplicates your Voltline achievement. As written, they undermine confidence in the rest of the resume.
- **Formula Student, CAN-bus bullet:** Keep the technical work, but make your own role in writing and testing it explicit. The passive construction obscures your contribution.

### Skills
- **Tools and methods:** Separate languages, hardware/platforms, lab tools, and methods more consistently. Add specific tools or protocols only where you can substantiate them through the experience or projects above; that makes the list more useful than broad terms such as “firmware.”

## Reviewer 5

## Overall assessment

This has strong evidence for embedded firmware and hardware-test roles: several bullets show concrete technical work and measurable results. The main issue is **credibility and technical accuracy**, not a lack of accomplishments. In particular, the Formula Student section appears to reuse or conflict with claims from your Voltline role, and two technical statements need correction or verification.

With no job description, I’m treating this as a general review for embedded firmware, controls, or hardware test/validation roles. I reviewed the pasted text only; the original document’s layout and file parsing are **not assessed**.

## Highest-priority changes

1. **Resolve the Formula Student claims before submitting.** The project describes a Formula Student electric car, but its bullets refer to a robot fleet of about 300 and repeat the motor-controller results attributed to Voltline. Verify the project context and your contribution; remove or correct any claim that belongs to the job rather than the student project.
2. **Correct the sampling claim.** Sampling a 5 kHz signal at 8 kHz does not, by itself, prevent aliasing. The Nyquist rate for a 5 kHz signal is greater than 10 kHz, and practical acquisition also depends on filtering.
3. **Revisit the `volatile` race-condition claim.** Declaring a shared counter `volatile` does not generally make access atomic or eliminate a race between an interrupt handler and the main loop. Describe only the fix that actually made the access safe.
4. **Make outcome metrics easier to interpret.** Where possible, clarify how “update speed,” “returns,” “complaints,” “throughput,” and “field faults” were measured and over what period or population.

## Line-by-line changes

### Header
- **Contact details:** Check that the phone number and portfolio link are real, current, and appropriate to share. If the code link contains relevant embedded work, make sure the projects are easy to find.

### Education
- **Degree and dates:** This is clear as written. Add GPA, honors, or relevant coursework only if it materially supports your target role; don’t add them just to fill space.

### Clearwater Sensors — Hardware Test Engineer

- **Automated end-of-line tests:** Keep the before-and-after time and monthly volume. Clarify whether the time is per unit and whether it is an average or another measure, if you know. Mention the relevant implementation or test platform only if it helps establish the technical scope.
- **Failure investigation and returns:** The result is compelling. Clarify what the return percentages refer to—such as the affected product or time period—and whether the solder-paste change was confirmed as the cause. Preserve the distinction between identifying a likely cause and validating it.
- **Calibration procedure:** Explain, if accurate, whether you authored, validated, or rolled out the procedure. Make clear that the figures are complaint counts per quarter, rather than implying they are direct measurements of calibration drift.
- **Test fixture and throughput:** Keep the before-and-after rate, but clarify whether both rates were measured at the same station and under comparable conditions. If relevant, indicate whether the fixture was built and deployed, not just designed.

### Voltline Robotics — Embedded Software Engineer

- **Firmware update improvement:** “Update speed” is ambiguous. Specify what improved—such as elapsed update time or transfer rate—and how the 60% change was measured. Include the deployment scope if it is known.
- **Hardware-in-the-loop test rig:** This is useful evidence. Add the relevant test area or what the rig verified if that helps convey the work; don’t add an impact claim unless you can support it.
- **Crash logger:** Keep the concrete detail about saved sensor data and the five failures. Clarify whether these were field failures and how the logger contributed to finding their causes, rather than implying it alone identified every root cause.
- **5 kHz signal sampled at 8 kHz:** Recheck and correct this technical claim. As stated, the sampling rate is insufficient to capture a 5 kHz signal without aliasing. Verify the actual signal frequency, sampling rate, and any filtering before retaining the claim.
- **Race condition and `volatile`:** Recheck the technical description. `volatile` can affect compiler optimization but does not, by itself, make shared access safe between an interrupt handler and the main loop. Ensure the bullet reflects the actual synchronization or atomicity fix.
- **Motor-controller firmware and 300-unit fleet:** This is one of your strongest outcome bullets. Clarify, if accurate, the time period and basis for the jitter and fault comparisons. Also resolve its overlap with the Formula Student bullets below; the same work and results should not appear as separate accomplishments unless they genuinely happened in both contexts.

### Projects

#### Low-Power Weather Station

- **“Next-generation” solution bullet:** This is promotional but doesn’t tell the reader what you built or what you did. Replace its function with concrete project scope or technical detail; avoid unsupported claims about innovation or sustainability.
- **Current reduction:** Keep the measured figures and the changes you made. Clarify, if useful, how average current was measured and under what operating conditions.
- **Open publication and school use:** This is valuable evidence of real-world use. Keep it, and specify the relevant materials or license only if those details are accurate and useful.

#### Formula Student Electric Car

- **Role and team size:** The title and team size establish context. Keep them if they accurately describe your role and the team.
- **Robot-fleet motor-controller work:** This does not fit naturally with the Formula Student project as presented and resembles the Voltline work. Verify the employer, project, and dates this work belongs to. Do not leave it in this project unless it is genuinely Formula Student work.
- **Dashboard CAN-bus firmware:** The passive construction obscures your specific contribution. Clarify your own role and what the testing established, while keeping the project context accurate.
- **Fleet of about 300 and motor-control results:** This duplicates the Voltline fleet and outcomes. Remove it unless you can verify that it was a separate project with independently accurate results; if so, make the distinction and your contribution clear. As written, it is a significant credibility risk.

### Skills

- **Tools:** C, C++, STM32, and oscilloscopes are relevant, but the category mixes languages, a platform, and an instrument. Organize them so the reader can scan the types of skills. Keep only tools you can discuss confidently.
- **Methods:** Firmware and CAN are not methods in the same sense as hardware-in-the-loop testing or low-power design. Reorganize these entries by type. If you add other technologies or methods, include only those you have actually used.
- **Evidence:** C++ appears in Skills but is not supported elsewhere in the resume. That does not make it incorrect, but consider adding relevant evidence elsewhere if it is important to your target roles.

## What to preserve

- The quantified test-time, return-rate, calibration-complaint, throughput, current, and control-jitter results.
- The specific embedded work: firmware updates, HIL testing, crash logging, calibration, and fixture design.
- Evidence that the weather-station project was built and used by others.
- The clear role titles, employers, dates, and education details.

The most important next step is to verify the Formula Student material and the two technical claims before making stylistic edits.

## Reviewer 6

3 errors, 9 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors

**Problem**
[Important] The Experience entries are not in newest-first order.

**Why**
Clearwater Sensors (April 2022–February 2023) appears above the more recent Voltline Robotics role (March 2023–June 2025). This makes the work history harder to scan chronologically.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

> Clearwater Institute of Technology

**Problem**
[Important] Education appears before Experience, so the engineering work is not the first evidence of your current direction.

**Why**
Your recent engineering roles provide more direct evidence of your current professional focus than the degree entry. Placing them first helps a reader see that experience sooner.

**How to change it**
Move the Experience section ahead of Education.

> Formula Student Electric Car

**Problem**
[Important] The older Formula Student project takes space from the more current weather-station project and disrupts the résumé’s direction.

**Why**
The weather-station project is more current, while the Formula Student entry is older and includes robot-fleet claims that do not fit its stated project. Keeping the older entry at its current length can draw attention away from the more relevant material.

**How to change it**
Shorten or remove the Formula Student entry, retaining only the project-relevant material that you want to keep.

> Sep 2017 - May 2021

**Problem**
[Polish] The résumé shows no study or work between the degree and the Clearwater Sensors role.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The strongest result in this entry is not the first bullet.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The calibration bullet does not explain what calibration approach the procedure established.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
1. [Important] The 60% update-speed improvement does not identify the measure or its baseline.
2. [Polish] The repeated “by” makes the result-and-method phrasing clumsy.

**Why**
1. A reader cannot tell whether the change refers to download duration, throughput, or another measure. Without the before-and-after comparison, the percentage is difficult to interpret or assess.

**How to change it**
1. Replace “update speed” with [the measure, such as download duration or throughput] and add [the before-and-after comparison or baseline], if accurate.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test-rig bullet reports test volume and frequency but no result from the rig.

**Why**
The figure shows how much testing ran, not what the rig accomplished. A reader is left wondering whether it caught defects, prevented escapes, or shortened validation.

**How to change it**
After the test-volume detail, add [the most telling result, such as defects caught, field escapes prevented, or validation time saved], if you can support it.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The “which” clause leaves it unclear whether the logger or the saved data helped identify the failures.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz does not capture it without aliasing.
2. The phrase “so the fault detector could capture it” is wordy and leaves “it” vague.

**Why**
1. At an 8 kHz sampling rate, the Nyquist frequency is 4 kHz, below the signal’s 5 kHz frequency. The 5 kHz component aliases unless it is removed before sampling, so the current claim is technically incorrect.
2. The pronoun does not clearly name what the detector captures, and the phrase takes extra words to express the intended result. The wording should be tightened only in a way that remains technically accurate; the current sampling rate does not support an alias-free claim.

**How to change it**
1. If the signal was sampled above 10 kHz with appropriate anti-alias filtering, state the actual sampling rate and method. Otherwise, remove the claim that the detector captured the 5 kHz signal without aliasing.
2. Tighten the phrase only if the method supports it: use “to enable alias-free fault detection” if accurate; otherwise remove the alias-free claim.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition.
2. [Important] The claimed race-condition fix has no stated check or result showing that it was resolved.
3. Repeating “counter” makes the sentence unnecessarily redundant.

**Why**
1. Volatile affects compiler treatment of reads and writes, but it does not make counter updates atomic or prevent the interrupt handler and main loop from interleaving. The race can therefore remain despite the change described.
2. Even a valid synchronization change does not tell a reader how you confirmed the race was gone. Without an observable verification result, the claimed resolution is harder to assess.
3. The noun appears twice in the short phrase describing the shared variable. Removing the repetition makes the line easier to read, but does not itself resolve the race condition.

**How to change it**
1. If you protected the counter with an atomic operation or a critical section, name that method. Otherwise, say that you declared it volatile without claiming that this fixed the race.
2. After describing the counter change, add [the clearest verification result or symptom that no longer occurred], if you can support it.
3. Replace the repeated phrase with “between the interrupt handler and main loop by declaring their shared counter volatile”; do not imply that volatile fixed the race.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Polish] The opening phrase does not name the firmware change that produced the reported results.
2. [Polish] The quantified results are buried at the end of the long bullet.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The promotional description does not identify what the station does or what technical work you performed.

**Why**
A reader cannot picture the station’s function or the value it delivered from “next-generation” and “innovation-driven.” “Engineered a” also does not name a design or implementation contribution, so the line gives little evidence of your technical work.

**How to change it**
Replace the promotional wording with [what the station measures or does] and [the concrete result or use]. Add [one specific design or firmware choice], if accurate, without repeating the power-saving details in the next bullet.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The methods appear before the measurable current reduction.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] The sharing bullet does not say what technical contribution made the stations usable or replicable.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
The bullet does not identify your specific firmware or testing contribution or its outcome.

**Why**
“Worked on” describes involvement without showing what you did, and “firmware and testing” does not say what work those terms cover. A reader also gets no result by which to judge the contribution.

**How to change it**
If this is Formula Student work, replace “Worked on firmware and testing” with [the specific firmware or testing work] and add [its outcome], if accurate.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The dashboard firmware bullet does not say what the firmware enabled or improved.
2. [Polish] The bullet does not say what the tests checked or whether they passed.
3. [Polish] The dashboard CAN-bus bullet is not the opening line of the entry.
4. [Polish] Passive phrasing obscures your role in writing and testing the firmware.

**Why**
1. The recurring writing and testing process does not show what changed for the dashboard, car, or team. Without an outcome, a reader cannot judge the value of the work.

**How to change it**
1. Add [what the dashboard or car could do as a result], if accurate.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
The robot-fleet bullet’s reduction sizes do not state what they are compared with.

**Why**
“Eightfold” and “more than half” give the size of the changes but not the reference values or comparison point. A reader cannot tell what baseline supports those claims.

**How to change it**
If this is a distinct, accurate project achievement, add [the baseline or comparison for the jitter and motor-fault reductions]; otherwise remove the claim from this entry.

> a fleet of about 300 robots

**Problem**
[Error] The robot-fleet firmware claim appears to duplicate the later Voltline achievement and conflicts with this project’s dates and context.

**Why**
The Formula Student bullet describes a fleet of about 300 robots and motor-control results, while the later Voltline entry also describes a robot fleet and motor-control results. A reader may question which project owns the achievement and whether it belongs in this 2019–2021 entry.

**How to change it**
Clarify which entry owns the achievement. If it is the same achievement as the Voltline work, remove it here; if the projects are distinct, add [the actual distinction and separate results], if accurate.

> robot fleet’s motor controllers

**Problem**
[Important] The robot-fleet motor-controller work pulls this entry away from the stated Formula Student project.

**Why**
The entry is about a Formula Student car, but this bullet describes a robot fleet. That mismatch disrupts the project’s focus and overlaps with the later employment narrative, making the project evidence less coherent.

**How to change it**
Remove this robot-fleet bullet from the Formula Student entry, or keep it only if it is genuinely Formula Student work and replace the fleet description with [the accurate project context].

## What already works

- “Automated end-of-line tests for a humidity…”: Shows a concrete per-unit time reduction and the scale of production affected.
- “Designed a test fixture that checked…”: Connects a specific fixture capability to a measurable throughput improvement.
