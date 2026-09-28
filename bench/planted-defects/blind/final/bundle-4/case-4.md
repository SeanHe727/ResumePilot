# case-4

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024
- Rebuilt the diagnostics service’s monitoring dashboards around per-sensor error budgets,
cutting mean time to detect incidents from 40 to 12 minutes.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, with load tests that fail the build if p95 exceeds 200 ms.
- Maintained the CI pipeline for the perception team’s model releases and adds automated
regression checks that shortened release cycles to 3 days.
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
ML & Agents: PyTorch, LoRA, GRPO, agent evaluation
```

## Reviewer 1

Your strongest material is the quantified engineering impact. The main fixes are **ordering, one incorrect calculation, a few unclear or overloaded bullets, and missing evidence for some claims**. I’ll describe changes rather than rewrite any lines.

## Highest-priority changes

1. **Correct the latency-reduction percentage in the Agent Runtime Suite.**  
   The change from 900 ms to 600 ms is a **33.3% reduction**, not 50%. Correct the percentage or check that one of the endpoint values is wrong. A numerical mismatch can undermine confidence in the rest of the metrics.

2. **Reorder the experience entries by date.**  
   Put Mobility Systems Company first: its role ended in May 2025, later than the Eastern Robotics role, which ended in July 2024.

3. **Fix the tense inconsistency in the Eastern Robotics CI bullet.**  
   The bullet mixes past tense (“Maintained”) with present tense (“adds”). Since the role has ended, keep the action consistently in past tense.

4. **Clarify the ambiguous or incomplete bullets.**  
   The GRPO latency bullet has no clear grammatical subject; the edge-inference bullet’s “single-request” wording may conflict with dynamic batching; and the CI bullet doesn’t say what the release-cycle baseline was. These need clarification before polishing.

5. **Cut or substantiate the first Agent Runtime Suite bullet.**  
   “AI-first engineering practices,” “accelerating delivery,” and “improving outcomes” are broad claims without concrete evidence. Add specific scope and results if you can support them; otherwise, remove the bullet.

## Header and education

- **Name and contact details:** Keep the contact line compact. Make sure the code URL is a real, accessible professional profile or portfolio link—not a placeholder or a link that requires extra navigation.
- **Western State University:** The expected graduation date is useful. Make sure “Expected” clearly applies to the degree date and that the dates are current.
- **Eastern Institute of Technology:** The entry is clear. The gap between graduation in June 2022 and your first listed role in May 2023 does not need an explanation unless there is relevant experience or activity to include.
- **Date consistency:** The résumé includes a project beginning in August 2025 and an internship ending in May 2025. Make sure all dates and “Present” labels reflect when you submit the résumé.

## Experience

### Eastern Robotics Co. — Junior Software Engineer

- **Diagnostics dashboards bullet:** This has a clear outcome and a useful before-and-after metric. Clarify what “around per-sensor error budgets” means to a reader outside your team, and make sure the MTtD improvement is supported by comparable measurement periods. The stated causal link between the dashboard change and detection time should be defensible.
- **API latency bullet:** Strong, specific impact. Clarify the test conditions behind the p95 figures if they are not obvious elsewhere, such as the workload or environment. The 200 ms build threshold is useful, but distinguish it from the observed 180 ms result.
- **CI pipeline bullet:** Fix the tense inconsistency. Also explain the release-cycle baseline and what “3 days” measures; without a comparison point, the improvement is hard to assess. Make sure the automated checks’ role in that improvement is clear.
- **Fleet-services bullet:** This combines several separate contributions—migration, logging-library work, onboarding, and on-call coverage—then ties them to one result. Separate or prioritize the most relevant work. Clarify what “removed the nightly backlogs” means and whether the result came from the migration, the logging rewrite, or both. The long chain of actions also makes your individual contribution harder to scan.

### Mobility Systems Company — Machine Learning Engineering Intern

- **Diagnostics triage bullet:** “Triage branch” could mean a software branch or a product/workflow path; clarify which. Explain what the ML-extracted features do in the system. The 68% backlog reduction is compelling, but add enough context to establish the baseline and how the eight-week result was measured.
- **Accuracy bullet:** The sample size and before-and-after result are strong. Name or define the accuracy measure if class imbalance could make plain accuracy misleading. Explain the relevance of “domain adapter” and “assistant-only loss masking” enough for your target audience to understand your contribution, while keeping the technical detail accurate.
- **Edge-inference bullet:** Clarify the benchmark setup and, if possible, provide the baseline latency as well as the percentage change. “Single-request” may sound inconsistent with dynamic batching, which usually batches requests; explain what that phrase means in your evaluation.
- **GRPO latency bullet:** The opening modifier leaves the sentence without a clear subject—what or who reduced latency? Clarify your role, the latency baseline and measurement, and how the stated training setup led to the 5% result. The listed reward components do not explicitly include latency, so explain the connection if latency was an indirect effect.
- **GRPO stability bullet:** “Stabilised” needs evidence. State what improved—such as run-to-run variance, training failures, or convergence—if you measured it. Also clarify why one rollout per prompt was the relevant change and what result it produced.
- **Runbook bullet:** Adoption by on-call reviewers is useful, but the impact stops at adoption. Add an operational result if you have one, such as fewer escalations or faster reviews; otherwise, consider whether this deserves space relative to your more technical, quantified bullets.

## Projects

### Agent Runtime Suite

- **“AI-first engineering practices” bullet:** Replace the broad claim with specific actions and evidence, or remove it. As written, it does not show what you built or how much delivery or downstream outcomes changed.
- **Tool-call latency bullet:** Correct the 50% calculation, or verify the endpoint values. Also clarify how latency was measured and under what workload; caching and answer reuse can affect latency differently depending on cache hits and task mix.
- **Task-completion bullet:** A rise from 71% to 83% is **12 percentage points**, not a 12% relative increase. Make the distinction clear. Include benchmark size or evaluation conditions if available so readers can judge how robust the result is.

### Research-Agent Evaluation Framework

- **Metrics bullet:** “Upstreamed” may be unfamiliar to some readers; make the contribution and acceptance clear. Clarify what the eight metrics cover and whether they were added, implemented, or both. The default-benchmark adoption is a strong result—retain it.
- **Kendall-correlation bullet:** State what two quantities the correlation compares and in what direction. Clarify whether the 400+ trials were unique reports or repeated perturbations, so the scale and evaluation design are understandable.
- **Pipeline-defects bullet:** “Structural pipeline defects in stability, sourcing and parameter handling” is broad. Identify the nature or effect of the defects more clearly, and explain the value of the fixes if you have an outcome beyond “fixed upstream.”

## Skills and presentation

- **Skills section:** It is short relative to the technical experience above. Add relevant tools, languages, platforms, or engineering methods you actually used and can discuss; don’t add technologies just to fill space. Consider making vague items such as “agent evaluation” more specific where appropriate.
- **Emphasize evidence over claims:** Your quantified bullets are generally more persuasive than broad claims. Where you cannot provide a metric, make the scope, deliverable, or adoption concrete.
- **Keep technical detail audience-aware:** Terms such as GRPO, assistant-only loss masking, and domain adapter may be valuable for ML roles, but ensure each bullet still makes the problem, your contribution, and the result immediately clear.

## Reviewer 2

# Résumé review

**Target role inferred from the résumé:** ML/AI Engineer, especially agent or ML systems work. Without a job description, I can’t assess company-specific fit or measure a meaningful ATS match rate.

## Overall assessment

There’s strong material here: measurable production improvements, deployed ML work, and concrete contributions to an open-source evaluation framework. The main changes I’d make are to **fix two misleading metrics, clarify a potentially confusing GRPO description, improve the order and focus of the experience section, and remove or substantiate the vague project bullet**.

## Changes to make, and why

### Header and education

- **Add a brief target-role identifier or summary.** The résumé currently starts with education, so a recruiter has to infer whether you’re pursuing software, ML, or agent-systems roles. A concise positioning statement would help; keep it specific to work you can substantiate.
- **Check the contact details before submitting.** If the example.com email and portfolio URL are placeholders rather than redactions for this review, replace them with working links.
- **Update the M.S. status when appropriate.** If you’ve graduated by the time you apply, change “Expected Jun 2026” to the completed degree and date. If not, the current status is clear.

### Experience ordering

- **Move Mobility Systems Company above Eastern Robotics Co.** Its May 2025 end date is more recent than the other role’s July 2024 end date. Reverse-chronological ordering makes the most recent and role-relevant experience easier to find.
- **Consider making the ML internship the lead experience for ML/agent roles.** Its diagnostics, model, inference, and GRPO work is more directly aligned with the role your résumé suggests. Eastern Robotics remains valuable evidence of production engineering.

### Eastern Robotics Co.

- **First bullet — clarify the scope of the monitoring improvement.** The 40-to-12-minute change is compelling; add context about what system or incident population it covers if that information is available. That helps a reader judge the scale and relevance of the result.
- **Second bullet — retain the latency metric, but make sure the comparison is apples-to-apples.** The test threshold adds useful engineering detail. Be ready to explain the workload and environment behind the p95 figures.
- **Third bullet — fix the tense mismatch and clarify the release-cycle baseline.** “Maintained” and “adds” don’t agree in tense, and “shortened release cycles to 3 days” doesn’t say what they were before. As written, the reader can’t tell the size of that improvement.
- **Fourth bullet — reduce the number of accomplishments competing in one bullet.** It combines a fleet migration, a shared-library rewrite, mentoring, on-call responsibility, and an operational result. Prioritize the engineering change and its impact; keep the other responsibilities only if they help the target role and can be stated clearly.

### Mobility Systems Company

- **First bullet — clarify what the 68% backlog reduction measures.** State the backlog’s relevant starting point or how the change was measured, if known. This helps distinguish a sustained operational improvement from a short-term fluctuation.
- **Second bullet — describe the 71% to 79% change precisely.** That is an 8-percentage-point increase. Also be prepared to explain the held-out split and what “validated tool-use trajectories” means; those details matter to a technical reviewer.
- **Third bullet — add deployment context if available.** The 40% latency reduction is useful, but the inference hardware, workload, or throughput trade-off would make it more informative for ML-systems roles.
- **Fourth and fifth bullets — reconcile the GRPO descriptions.** One describes grouped tool-use rollouts; the next says each update used exactly one scored trajectory per prompt. That may be consistent in your implementation, but the current wording can sound contradictory because GRPO is commonly associated with comparing multiple rollouts. Clarify what was grouped and what “one per prompt” refers to. Also identify what the 5% latency change measures and what it was compared against.
- **Fifth bullet — substantiate “stabilised.”** Explain what instability you observed and how you assessed the improvement, or make the claim narrower. The implementation detail alone doesn’t show the result.
- **Sixth bullet — keep this, but make adoption and ownership clear.** The runbook adoption is a good operational signal. Specify your role in creating or validating the rules if that is not already obvious from the surrounding description.

### Projects

- **Agent Runtime Suite, first bullet — replace the broad impact claim with evidence or remove it.** “Drove adoption” and “improving outcomes” are not supported by a concrete measure or example here. In its current form, it reads as generic promotion rather than demonstrated impact.
- **Agent Runtime Suite, latency bullet — correct the percentage.** A drop from 900 ms to 600 ms is a **33% reduction**, not 50%. This is the most important factual correction in the résumé; an alert technical reader may notice it immediately.
- **Agent Runtime Suite, task-completion bullet — label the change clearly.** Moving from 71% to 83% is a 12-percentage-point increase, not a 12% relative increase. Also give enough information about the benchmark and evaluation conditions for the reader to interpret the result.
- **Research-Agent Evaluation Framework, first bullet — clarify your contribution and the meaning of “default benchmark.”** This is a strong adoption signal. Make sure it’s clear whether you implemented the metrics, proposed them, or both, and what “every release” means in practice.
- **Second bullet — explain the statistic and evaluation design.** Identify that 0.89 is a Kendall correlation measure and briefly establish what was compared. “400+ report-level trials” is useful, but it doesn’t by itself explain the result.
- **Third bullet — distinguish diagnosis from implementation.** The bullet says you traced defects and that each was fixed upstream. Make clear what you personally changed versus what maintainers fixed; this will make the contribution easier to assess and defend.

### Skills and presentation

- **Broaden the skills section only with relevant, truthful skills.** It currently has three programming entries and four ML/agent entries, with “agent evaluation” as a broad capability rather than a named tool or method. For ML-systems roles, recruiters may look for evidence of deployment, testing, data, infrastructure, or model-serving experience. Include those only if you can support them from your work.
- **Make the skills section easier to scan by grouping related capabilities.** The current categories are understandable, but the short list doesn’t yet show the breadth of the systems work described in the experience section.
- **Check the final rendered layout.** From plain text I can’t assess page count, spacing, line breaks, or whether the skills and strongest project work are visually prominent. Make sure the experience ordering and corrected bullets don’t push key material onto a less-visible page.

## Reader-perspective assessment

- **Recruiter glance: Maybe.** The education and engineering titles establish a technical background, but the résumé lacks an immediate target-role signal. The experience and project metrics are promising once the reader reaches them.
- **HR screen: Likely phone screen for a relevant ML/AI-systems opening.** There is evidence of ML, production systems, and measurable results; the main concern is whether the résumé’s broad mix of robotics, ML, and agent work is intentional or unfocused.
- **Hiring manager: Maybe to interview.** The strongest evidence is the combination of production engineering and hands-on agent evaluation. The incorrect latency reduction and the unclear GRPO description could undermine confidence until corrected.
- **Technical reviewer: Interested, with questions.** Expect scrutiny of evaluation methodology, benchmark setup, workload conditions, and your individual contribution to upstreamed work.

## Provisional score

These scores are **not a job-match assessment**; there is no job description, and visual quality can’t be judged from plain text.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS keywords | 7/10 | Relevant ML/agent terminology is present, but there’s no JD for a real match check. |
| Summary / positioning | 5/10 | No summary or target-role identifier. |
| Skills | 7/10 | Relevant but brief and not yet representative of the systems work. |
| Bullet quality | 7/10 | Good quantified achievements, weakened by vague claims, missing context, and metric issues. |
| Publications | 6/10 | No publications listed; not necessarily a gap for the inferred role. |
| Narrative coherence | 7/10 | A credible engineering-to-ML-systems story, but the ordering and positioning could make it clearer. |
| Page and visual presentation | 6/10 | Not assessable from plain text. |
| Credibility signals | 8/10 | Strong metrics, production work, and upstream contributions—provided the numbers and methods are accurate. |

**Provisional overall: 69/100.** The score is constrained by the absence of a target job description and rendered layout; it should not be read as a prediction of interview success.

## Highest-priority changes

1. **Correct the 900-to-600 ms reduction from 50% to 33%.** This is an objective error and a credibility risk.
2. **Clarify the GRPO rollout descriptions and define the 5% latency result.** This prevents a technical reviewer from interpreting the methodology as inconsistent.
3. **Fix the task-completion increase’s units and add benchmark context.** This makes the result precise and assessable.
4. **Move the more recent internship above the earlier job.** This follows standard chronology and surfaces the most relevant experience.
5. **Remove or substantiate the “AI-first engineering practices” project bullet.** It currently asserts impact without demonstrating it.
6. **Add a clear role signal near the top.** That helps a recruiter understand the résumé’s intended direction before reading the details.

## Interview preparation

Be ready to explain:

- **Diagnostics triage:** how you measured the backlog reduction and how the system handled uncertain or difficult cases.
- **Model accuracy:** the held-out evaluation design, the baseline, and what the training setup contributed.
- **Edge inference:** the hardware and workload behind the latency result, and whether batching affected throughput.
- **GRPO:** how rollouts were grouped, what “one scored trajectory per prompt” means, and how you measured training stability.
- **Agent runtime:** the benchmark behind task completion and tool-call latency, including how caching affected correctness.
- **Evaluation framework:** your personal contribution, how the metrics were validated, and how the upstream changes reached the release benchmark.

**Verdict:** Fix the factual and methodology-clarity issues first, then strengthen the top-of-page positioning and trim or substantiate vague claims. The underlying experience is stronger than the current presentation suggests.

## Reviewer 3

Your strongest material is the measured engineering and ML work. The main changes are to fix two numerical errors, resolve a technical inconsistency, and make a few claims easier to verify. I’ll point to each line without rewriting it.

### Header and education
- **Contact line:** Check that the code link leads to work you want employers to evaluate. If the phone number, email, or URL are placeholders, replace them before applying.
- **M.S. line:** Keep “Expected” only while June 2026 is still a future graduation date; update it once your status changes.
- **B.S. line:** No substantive change needed. Use the same date and location formatting as the M.S. line.

### Experience
- **Section order:** Put the 2024–2025 internship above the 2023–2024 role. Reverse chronology makes your most recent work easier to find.

**Eastern Robotics Co.**
- **Diagnostics dashboards:** Keep the 40-to-12-minute result. Specify how incident detection time was measured if the number comes from only a subset of incidents.
- **API latency:** Strong bullet. Clarify the load-test conditions if the 420 ms and 180 ms figures could reflect different traffic or hardware.
- **CI pipeline:** Change “adds” to past tense. Add the release-cycle baseline: “shortened … to 3 days” does not show how much it improved.
- **Fleet migration:** Split or narrow this bullet. Migration, logging, onboarding, and on-call are separate contributions, and the backlog outcome is hard to attribute to all of them. Make clear which change removed the backlogs.

**Mobility Systems Company**
- **Triage branch:** Strong outcome. Clarify whether the 68% backlog reduction was measured against the backlog at launch or another baseline.
- **Diagnostic accuracy:** Keep the held-out sample size and 71%-to-79% result. State your specific contribution to the adapter and training data if others built the surrounding system.
- **Edge inference:** Explain how *dynamic batching* reduced latency for a **single-request** measurement; readers may see a contradiction unless the measurement involved concurrent traffic or another batching mechanism.
- **GRPO latency:** Identify the baseline for the 5% improvement and how training for accuracy, citations, and call count produced a latency gain. The current line lists methods more prominently than your contribution.
- **GRPO stability:** Recheck this claim before using it. Standard GRPO relies on relative rewards across multiple rollouts per prompt; one scored trajectory per prompt needs an explanation of how advantages were computed. Also say what measurable failure “stabilised” means.
- **Runbook:** Good evidence of adoption. Clarify whether you authored the rules, documented existing rules, or both.

### Projects
**Agent Runtime Suite**
- **AI-first practices:** Replace this broad claim with a specific change and observable result, or remove it. “Accelerating delivery” and “improving outcomes” are not substantiated here.
- **Tool-call latency:** Correct the math: 900 ms to 600 ms is a **33% latency reduction**, not 50%. Check that reused sub-agent answers are included in the measured tool-call path.
- **Task completion:** Distinguish **12 percentage points** (71% to 83%) from a 12% relative increase. Briefly establish what the benchmark covers so the result has context.

**Research-Agent Evaluation Framework**
- **Metrics upstreamed:** Strong bullet. Confirm that all eight metrics run by default on every release; otherwise narrow that claim.
- **Kendall correlation:** Identify the statistic as Kendall’s tau if that is what you calculated, and clarify what scores were correlated across the trials.
- **Pipeline defects:** Clarify your role in the fixes—diagnosis only or code contributions too. “Each was fixed upstream” otherwise leaves your contribution ambiguous.

### Skills
- **Programming:** Move Git out of “Programming”; it is a development tool. Keep Python and TypeScript prominent if they match your target roles.
- **ML & Agents:** Keep only methods you can explain in an interview. In particular, resolve the GRPO bullet above before presenting GRPO as a skill.

## Reviewer 4

4 errors, 10 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024; Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

**Problem**
[Important] Experience is not listed newest first: the October 2024–May 2025 internship appears below the May 2023–July 2024 role.

**Why**
Readers expect the most recent experience first, so the current order makes the timeline harder to scan. The entries’ dates show that Mobility Systems Company is the more recent role.

**How to change it**
Move the Mobility Systems Company entry above Eastern Robotics Co. so the Experience section runs newest first.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
[Error] “adds” is present tense in a role that ended in July 2024, and the line does not establish that the checks produced the three-day release cycle.

**Why**
The role is described in the past tense, so “adds” makes the timeline inconsistent. The line also gives no basis for attributing the three-day cycle to the checks, leaving a reader unsure whether the checks produced that result.

**How to change it**
Change “adds” to “added.” Keep the causal link only if release-cycle data supports it; otherwise remove or soften the claim that the checks shortened the cycle.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The operational result comes after a long sequence of activities, making the main impact easy to miss.
2. [Important] “Removed the nightly backlogs” gives no measure of the backlog or dispatch delay before and after.

**Why**
1. A scanning reader may not reach the outcome after the migration, library rewrite, onboarding, and on-call details. Moving it nearer to the migration makes the operational value of that work clearer.
2. The reader can see the kind of operational improvement, but cannot judge its scale. A before-and-after measure would make the impact more concrete.

**How to change it**
1. Move “which removed the nightly backlogs that delayed morning dispatch” directly after “Migrated 30 robot-fleet services from cron jobs to an event queue.”
2. Add [backlog volume or dispatch delay before and after] if you have a defensible comparison.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Problem**
[Important] “Single-request edge inference” does not establish how “dynamic batching” produced the latency reduction.

**Why**
Dynamic batching can help when multiple requests are grouped, but cannot provide that benefit for a single request and can add waiting time. INT8 may reduce single-request latency, so the line does not establish that batching produced the reported reduction.

**How to change it**
If requests were batched, specify that workload; otherwise attribute the measured single-request reduction to INT8 only, if that is what the measurement supports.

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
[Important] The 5% end-to-end latency reduction does not identify the workflow being measured.

**Why**
Without knowing what the measurement spans, a reader cannot tell which user or system path improved. Naming the evaluated workflow would make the result easier to interpret.

**How to change it**
Add [workflow measured] after the latency result.

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One scored rollout per prompt cannot provide the within-prompt comparisons GRPO uses to form its group-relative advantage.
2. [Important] The line claims GRPO training was stabilized without specifying what became more stable.

**Why**
1. GRPO uses relative comparisons among multiple rollouts for a prompt to form its group-relative advantage. With only one scored trajectory, there is no within-prompt comparison, so the stated setup cannot provide the claimed GRPO stabilization.
2. A reader cannot judge the value of the change without an observable outcome, such as fewer failed runs or lower training variation. The method is present, but the result it produced is not demonstrated.

**How to change it**
1. If training used multiple scored rollouts per prompt, state the actual number and method; otherwise remove the GRPO stabilization claim or describe the training method actually used.
2. Replace “Stabilised” with [measured stability outcome compared with the prior setup], if you have a defensible result.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
1. [Important] “AI-first engineering practices” does not identify the practices adopted or the specific action you took.
2. [Important] The line claims broad delivery and downstream benefits without evidence of what changed or how those effects were measured.

**Why**
1. A reader cannot tell what technical or process work you did, or what skill it demonstrates. The broad phrase “Drove adoption” does not make your individual contribution clear.
2. Adoption alone does not establish those effects or show that the practices caused them. Without a concrete result and a basis for comparison, a reader cannot judge the value or scale of the claim.

**How to change it**
1. Replace “AI-first engineering practices” with [the specific practice you introduced], if accurate; replace “Drove adoption” with the specific action you took.
2. Replace the benefit phrase with [one delivery or downstream outcome] and [its comparison or evidence], if available; otherwise remove it.

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The change from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.

**Why**
The decrease is 300 ms, which is 300/900 = 33.3% of the starting latency. A 50% reduction from 900 ms would end at 450 ms.

**How to change it**
Replace “50% reduction” with “33.3% reduction,” or report the correct endpoint if the reduction was 50%.

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The increase from 71% to 83% is 12 percentage points, not 12%. *(adds about 1 word)*

**Why**
Subtracting the rates gives 83% − 71% = 12 percentage points. The relative increase is about 16.9%.

**How to change it**
Replace “by 12%” with “by 12 percentage points.”

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Problem**
[Important] “Citation and faithfulness metrics” names the categories but not how you built or implemented them.

**Why**
A reader can see that the contribution was adopted, but cannot tell what evaluation skill or technical work it demonstrates. One distinctive example would make the contribution more legible without listing all eight metrics.

**How to change it**
After “metrics,” add [one representative metric’s computation or implementation detail], if accurate.

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
[Important] The Kendall correlation of 0.89 does not specify the two quantities being correlated.

**Why**
Without those quantities, a reader cannot tell what the correlation demonstrates about the evaluator. Naming the relationship makes the reported result interpretable.

**How to change it**
Clarify what evaluator output was correlated with what measure of injected degradation: [the two correlated quantities], if accurate.

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Problem**
[Polish] The result appears after the method, and “each was fixed upstream” does not say who fixed the defects.

**Why**
A reader encounters the instrumentation before learning that the defects were fixed, which buries the outcome. The passive phrasing also leaves the contributor responsible for the fixes unclear.

**How to change it**
Move “each was fixed upstream” before “with layered instrumentation,” and name [who fixed the defects] if you know.

## What already works

- “Built a diagnostics triage branch for…”: Connects a specific system contribution to a quantified operational result.
- “Raised diagnostic accuracy on 1,200 held-out…”: Pairs a before-and-after result with the size and type of evaluation set.
- “Reduced p95 API latency from 420…”: Pairs a measurable performance gain with specific implementation details and a regression safeguard.
