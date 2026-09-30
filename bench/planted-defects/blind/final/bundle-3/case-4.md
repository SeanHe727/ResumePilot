# case-4

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

3 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Eastern Robotics Co. | Junior Software Engineer

**Problem**
[Important] Experience is not listed in reverse chronological order.

**Why**
The Eastern Robotics role dated Aug 2022–Jul 2024 appears above the more recent Mobility Systems role dated Oct 2024–May 2025. Readers therefore encounter older experience before newer experience.

**How to change it**
Move Mobility Systems Company above Eastern Robotics Co. in Experience.

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | Aug 2022 - Jul 2024

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Problem**
[Important] The dashboard responsibility does not state what improved or changed because of the work.

**Why**
Readers can see what you were responsible for, but not why that responsibility mattered. An operational outcome, measured against a baseline if available, would make the contribution more credible.

**How to change it**
Add [the specific operational outcome] and, if available, [a measure compared with the prior state], such as a change in time to detect or resolve incidents.

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Problem**
[Important] The latency result comes after the cache and batching details instead of leading the bullet.

**Why**
A scanning reader encounters the implementation before the performance change it produced. That delays the clearest evidence of the work’s impact.

**How to change it**
Move the latency result to the beginning, followed by the cache and batching methods and the load-test detail.

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Problem**
1. [Important] The backlog result is attributed to two changes without showing which one contributed to it or establishing that the changes eliminated the backlog.
2. [Important] The backlog result is unmeasured, so readers cannot judge its scale.
3. [Important] The nightly-backlog result appears only after a long list of methods and responsibilities.

**Why**
1. An event queue can buffer and smooth work, but it does not inherently clear a backlog; that depends on processing capacity and queue behavior. The logging rewrite also does not itself guarantee backlog removal, and “which removed” leaves the cause unclear.
2. The result matters because the backlogs delayed morning dispatch, but the résumé gives no before-and-after measure. Without one, readers cannot tell how much the backlog or dispatch delay changed.
3. The result is the clearest operational outcome in the bullet, but readers reach it only after the migration, logging rewrite, onboarding, and on-call details. Its placement makes the main achievement harder to scan.

**How to change it**
1. If post-migration monitoring confirmed the backlogs stopped, state that measured outcome and clarify which change contributed; otherwise remove the backlog claim. Trim or separate the logging rewrite, onboarding, and on-call details so the main achievement is clear.
2. Add [a measure of backlog or dispatch delay compared with the prior state], if available.
3. Move the backlog result near the beginning of the bullet; moving it costs no words.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Problem**
1. [Important] The stated reward does not establish that the setup reduced end-to-end latency by 5%.
2. [Important] The 5% latency reduction has no stated comparison point.

**Why**
1. The reward targets accuracy, citation validity, and call count, not elapsed time. Fewer calls might reduce latency, but they do not guarantee a 5% end-to-end reduction.
2. A reader cannot tell what the latency reduction is relative to, so the result is difficult to interpret. The long methods-first opening also makes the result easier to miss.

**How to change it**
1. If latency was measured in a before-and-after evaluation, state that evaluation; otherwise describe the measured change in call count or remove the latency claim.
2. Move the result to the beginning and add [compared with X configuration or baseline].

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Problem**
1. [Error] One scored trajectory per prompt cannot provide standard GRPO’s within-prompt relative-advantage comparison.
2. [Important] The claim of stabilizing GRPO training is not supported by the single-rollout setup detail.

**Why**
1. GRPO relies on comparing multiple rollouts for a prompt to calculate relative advantages. With exactly one scored trajectory, that comparison is unavailable, so the stated setup cannot provide the claimed GRPO training signal.
2. The bullet says training was stabilized, but then gives a setup detail rather than evidence of what improved. Readers cannot tell what instability was addressed or whether training improved in a meaningful way.

**How to change it**
1. If training used GRPO, specify the multiple rollouts per prompt used for each update; otherwise name the training method actually used.
2. Replace or follow this phrase with [the observed change in training stability, compared with the prior setup]; keep the single-rollout detail only if it helps explain that result.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Problem**
[Error] The decrease from 900 ms to 600 ms is a 33.3% reduction, not a 50% reduction.

**Why**
The latency fell by 300 ms, which is 300/900 = 33.3% of the starting value. A 50% reduction from 900 ms would be 450 ms.

**How to change it**
Replace “a 50% reduction” with “a 33.3% reduction.”

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Problem**
[Error] The change from 71% to 83% is 12 percentage points, not a 12% relative increase. *(1 word)*

**Why**
The absolute difference is 83% − 71% = 12 percentage points. Relative to the starting rate, the increase is about 16.9%.

**How to change it**
Replace “by 12%” with “by 12 percentage points.”

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The reported correlation alone does not establish that the evaluator tracks injected degradation.
2. [Important] The 0.89 correlation does not identify the two quantities being compared.
3. [Important] The trial context and list of removed elements come before the result.

**Why**
1. Kendall correlation shows rank association, but without a controlled validation design it does not show that the evaluator responds specifically to citation, source, and claim removals. Other differences among reports or trials could account for the correlation.
2. Without knowing what the evaluator’s scores were correlated with, a reader cannot interpret what 0.89 demonstrates. Naming the comparison would make the validation result assessable.
3. Readers encounter the setup before the Kendall correlation, delaying the main result. Leading with the correlation makes the finding easier to scan.

**How to change it**
1. If the trials controlled degradation levels and showed the expected evaluator response, describe that design; otherwise limit the claim to the observed Kendall correlation.
2. Name what the correlation compares, such as [what evaluator scores were correlated against], while keeping the trial count and degradation description.
3. Move the Kendall correlation to the beginning and follow it with the trial count and degradation context.

## What already works

- “Built a diagnostics triage branch for…”: Connects the triage system to a concrete reduction in pending cases.
- “Raised diagnostic accuracy on 1,200 held-out…”: Pairs a clear accuracy improvement with a held-out evaluation set.

## Reviewer 2

## Highest-priority fixes

1. **Put Experience in reverse chronological order.** The Mobility Systems internship (Oct 2024–May 2025) should appear before the Eastern Robotics role (Aug 2022–Jul 2024). Reverse chronology is the expected format and makes your most recent work easier to find.
2. **Correct the Agent Runtime Suite latency math.** A drop from 900 ms to 600 ms is a **33.3% reduction**, not 50%. The inconsistency could undermine confidence in the other metrics.
3. **Clarify the task-completion improvement.** Going from 71% to 83% is a **12-percentage-point increase**, not a 12% relative increase. Label the change precisely.
4. **Replace or substantiate the generic Agent Runtime Suite bullet.** “Accelerating delivery and improving outcomes” gives no evidence of impact. Quantify the adoption or outcome, or remove the bullet so it doesn’t dilute the stronger results.
5. **Separate the overloaded Eastern Robotics bullet.** It combines a migration, a logging-library rewrite, onboarding, on-call responsibilities, and a backlog outcome. The scope and causal link are hard to follow; prioritize the work that best supports your target roles and make the impact attributable.

## Section and presentation changes

- **Make the context of each project clear.** For the Agent Runtime Suite, clarify whether it was personal, academic, open-source, or part of a job. “Owner” can otherwise be difficult to interpret.
- **Check whether Education belongs above Experience.** Keeping it first is reasonable while you’re pursuing the M.S.; for roles emphasizing your professional experience, consider putting Experience first.
- **Ensure the contact link is real, clickable, and direct.** If the `example.com` address is literal rather than anonymized, replace it before sending the resume.
- **Check PDF text extraction.** The split “on-/call” may be harmless visual wrapping, but make sure it isn’t a manually inserted hyphen or a line break that produces malformed text in ATS parsing.
- **Keep punctuation and date formatting consistent.** Your bullets currently omit ending periods, which is fine if applied consistently. The date style is also consistent.
- **Expand or contextualize specialized abbreviations where your audience may not know them.** GRPO, SFT, INT8, and “assistant-only loss masking” are precise but may be opaque outside LLM-focused roles. Keep the technical detail where it’s relevant; make sure the key contribution remains understandable.

## Experience

### Eastern Robotics Co.

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify what “owned” involved and what changed because of your work—such as reliability, incident response, or alert quality—if you can support it with evidence. Also clarify whether this on-call rotation is the same one mentioned in the later migration bullet; the overlap is ambiguous.
- **Latency bullet:** This is one of your strongest bullets. If space allows, specify the workload or test conditions behind the p95 comparison so readers can judge how comparable the before-and-after figures are. The build-failing threshold is useful evidence of durable quality control.
- **CI pipeline bullet:** Clarify what “release cycles” measures and how the automated checks contributed to the change from two weeks to three days. This will make the impressive result easier to interpret and attribute.
- **Migration/logging/onboarding/on-call bullet:** Beyond splitting or prioritizing it, make the scale and result of the migration easier to see. “Removed the nightly backlogs” is a useful outcome, but it would be stronger with a measure of the backlog or dispatch impact if you have one. Also distinguish the weekend rotation from the earlier on-call reference if they are different.

### Mobility Systems Company

- **Diagnostics-triage bullet:** Clarify what the triage branch does and what the 68% backlog reduction is measured against. “800+ sensor signals per case” is strong scope, but make sure “case” and the system’s role in screening those signals are clear to a reader outside this domain.
- **Accuracy bullet:** State the metric precisely and, if possible, clarify how the held-out set was constructed and what “accuracy” means for this task. The 71% to 79% change is an eight-percentage-point gain; avoid implying it is an eight-percent relative gain. The technical method is valuable for ML roles, but “assistant-only loss masking” may need context for broader audiences.
- **Edge-inference bullet:** “Single-request” and “dynamic batching” can sound contradictory. Clarify the workload and concurrency conditions under which you measured latency, and include the comparison baseline if it isn’t obvious from the surrounding context.
- **GRPO optimization bullet:** Fix the sentence’s unclear grammatical subject: as written, the opening phrase does not clearly say what reduced latency. Also identify what “end-to-end latency” covers and what it was compared against. A 5% result may be worth retaining, but it should be clear and measurable.
- **GRPO stability bullet:** This describes a method, but not what improved or how you assessed stability. Add evidence of the effect if available; otherwise, consider whether the implementation detail earns its space. Sampling exactly one trajectory per prompt may surprise technical readers, so make the reason and result clear.
- **Runbook bullet:** This is a useful operational contribution, but clarify what “them” refers to if the bullet is read on its own. If you know the number of reviewers or cases covered, that could help convey the runbook’s reach.

## Projects

### Agent Runtime Suite

- **Adoption/practices bullet:** As written, it is generic and unsupported. Either provide evidence for the adoption and delivery claims or remove it; the other bullets demonstrate more concrete impact.
- **Latency bullet:** Correct the percentage as noted above, and ensure the before-and-after p95 figures use the same workload and measurement setup.
- **Task-completion bullet:** Label the change as percentage points, and clarify the benchmark’s scope or size if that information is available. Benchmark results are more persuasive when readers can judge how representative they are.

### Research-Agent Evaluation Framework

- **Metrics bullet:** Clarify whether you created, adapted, or contributed to the eight metrics, and what “upstreamed” means in terms of acceptance or release. The default-benchmark adoption is a strong result, so ensure its status is still accurate.
- **Correlation bullet:** Specify that 0.89 is a Kendall correlation measure, and clarify what “tracks injected degradation” means in the evaluation. This will help readers understand what the number demonstrates without overstating what correlation proves.
- **Defects bullet:** “Structural pipeline defects” and “layered instrumentation” are vague. Make the defects and your role in their resolution more concrete, or trim this bullet if the other two already cover the contribution sufficiently.

## Skills

- **Reorganize the categories.** Kubernetes does not fit naturally under “ML & Agents”; group it with infrastructure or deployment skills if you keep it.
- **Add relevant tools and technologies demonstrated in the experience bullets**, but only if you used them and can discuss them in an interview. The current list omits the specific systems behind several accomplishments, which makes the skills section less useful for matching roles.
- **Keep skill claims supported by the resume.** For example, Kubernetes appears only in Skills, while the work bullets don’t show how you used it. Add evidence elsewhere if it is important to the roles you’re targeting, or remove it if it isn’t.

## Reviewer 3

Your strongest material is the measured engineering work. The main changes are to correct two metric claims, resolve two technical contradictions, and make a few broad bullets more specific. I’ll go line by line without rewriting them.

### Header and education
- **Contact line:** Check that the code link leads directly to work you want reviewed and that all contact details are current. A reviewer may use the link before reading the projects.
- **Both education lines:** Keep them. Check that the expected graduation date is still accurate.

### Experience
**Eastern Robotics Co.**
- **Diagnostics dashboards:** Clarify what changed because you owned the dashboards or supported on-call. Ownership is useful, but the outcome is less clear than in your other bullets.
- **API latency:** Keep. The before-and-after figures, mechanism, and regression guard make this strong. Make sure the 200 ms build threshold uses the same p95 workload as the 420-to-180 ms comparison.
- **CI pipeline:** Keep. Clarify whether the two-week-to-three-day figure measures the full release cycle or just the portion affected by your checks; that makes the attribution credible.
- **Fleet migration:** Split or narrow this. It combines migration, logging-library work, onboarding, on-call, and backlog removal, so the reader cannot tell which action produced the result.

**Mobility Systems Company**
- **Diagnostics triage:** Keep. Specify how the 68% backlog reduction was measured and whether the branch was the principal cause; this is a substantial outcome worth making defensible.
- **Diagnostic accuracy:** Keep. Name the accuracy metric or decision task if it is not obvious from context. Retain the training details only if they matter to the roles you’re targeting.
- **Edge inference:** Recheck the explanation. Dynamic batching generally helps throughput but can add waiting time to a *single* request. Clarify the workload and which change produced the 40% p95 reduction.
- **GRPO latency:** Identify whether the 5% is inference, tool-use, or another end-to-end latency measure, and how the training change affected it. The long method description currently obscures a comparatively small outcome.
- **GRPO stability:** Verify and clarify the method. Standard group-relative optimization depends on comparisons among rollouts; “a single rollout per prompt” appears at odds with that description unless you used a different baseline or grouping scheme. Also state what evidence showed improved stability.
- **Runbook:** Keep. If you have evidence that adoption improved review consistency or response time, add it; otherwise it is still a clear ownership bullet.

### Projects
**Agent Runtime Suite**
- **AI-first practices:** Replace or remove this claim. “Accelerating delivery” and “improving outcomes” have no specific action or evidence, unlike your other bullets.
- **Tool-call latency:** Correct the arithmetic. Going from 900 ms to 600 ms is a **33% reduction**, not 50%. Also check whether cached results and reused answers are included in the same benchmark.
- **Task completion:** Change the way the gain is described: 71% to 83% is **12 percentage points**, not a 12% relative increase. State which measure you intend.

**Research-Agent Evaluation Framework**
- **Eight metrics:** Keep. Confirm that all eight run in the default benchmark *for every release*, since that is a precise and valuable adoption claim.
- **Evaluator correlation:** Keep, but identify what was ranked in the Kendall-correlation calculation. That helps readers understand what the 0.89 validates.
- **Pipeline defects:** Specify the practical effect of the fixes, if known. Finding and getting three defects fixed upstream is good; the current line does not say why those fixes mattered.

### Skills and ordering
- **Skills:** Move Git out of “Programming” and Kubernetes out of “ML & Agents”; neither fits its current label. Prioritize skills you used in the experience and projects above.
- **Experience order:** Put the 2024–2025 internship before the 2022–2024 role for consistent reverse chronology.

## Reviewer 4

# Résumé critique

**Target role inferred from the résumé:** Applied ML/AI engineer focused on agent systems, evaluation, or ML infrastructure. Your recent internship and projects point in that direction, while your earlier robotics role adds a useful systems background. Without a job description, I can’t reliably assess ATS keyword match or role-specific fit.

## Overall assessment

You have strong raw material: measurable improvements, production-facing work, and a distinctive mix of robotics, ML deployment, and agent evaluation. The main problems are **one incorrect metric, an unclear target-role signal, and several bullets that are either vague or overloaded**. Fix those before polishing wording.

## Highest-priority changes

1. **Correct the Agent Runtime latency claim.** A reduction from 900 ms to 600 ms is about **33%**, not 50%. This is the clearest credibility issue in the résumé.
2. **Put Experience in reverse chronological order.** The May 2025 internship should appear before the role that ended in July 2024.
3. **Add a target-role signal near your name.** There is no summary or tagline, so a quick reader has to infer what role you want from the rest of the page.
4. **Remove or substantiate the generic Agent Runtime bullet.** It claims broad adoption and improved outcomes without saying what changed or how you know.
5. **Rework the Skills section for the roles you’re targeting.** It is short, mixes categories, and omits some capabilities demonstrated in your experience.
6. **Tighten the densest and most technical bullets.** Several combine multiple accomplishments or use methods without making the result or significance clear.

## Line-by-line feedback

### Header and Education

- **Name and contact details:** Clear and compact. If the code link is important to your candidacy, make sure it leads directly to relevant work rather than a general landing page.
- **No target title or summary:** Add a concise role signal so a recruiter can identify your intended direction quickly. Keep it consistent with the evidence in the résumé; don’t imply a specialty you can’t support.
- **M.S. entry:** The expected completion date is useful. Make sure the date/status is unambiguous and remains current as you update the résumé.
- **Education placement:** Education first is reasonable while you’re pursuing the M.S. If you’re targeting roles where your work experience matters more, consider whether Experience should lead instead.

### Eastern Robotics Co.

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify the scope of your ownership. As written, it’s not fully clear whether you owned the dashboards, the on-call rotation, or both. The bullet also lacks an outcome, so it may be less valuable than your more measurable work.
- **Latency reduction bullet:** This is one of your strongest bullets: it gives a baseline, result, methods, and a regression safeguard. Preserve that level of specificity. If space is tight, keep this ahead of less measurable bullets.
- **CI pipeline bullet:** Good evidence of engineering impact. Make the relationship between the regression checks and the shorter release cycle easy to follow; the current sentence attributes the entire improvement to the checks without showing what else changed.
- **Fleet migration bullet:** This is overloaded. It combines the migration, logging-library rewrite, onboarding, on-call responsibility, and dispatch outcome. Separate the central technical accomplishment from secondary responsibilities, or remove details that don’t strengthen your target-role case. Also clarify your individual contribution and avoid making the final result sound attributable to every item in the list.

### Mobility Systems Company

- **Diagnostics triage bullet:** Strong, relevant, and quantified. Clarify what “800+ sensor signals per case” means in the workflow, and ensure the backlog reduction is attributable to the launched system rather than other changes during those eight weeks.
- **Accuracy improvement bullet:** The result is clear, but “domain adapter” and “assistant-only loss masking” may be opaque to some readers. Keep specialized terminology if it matters for the roles you want, but make sure the evaluation setup and comparison are sufficiently clear to a technical reviewer.
- **Edge inference latency bullet:** “Single-request” and “dynamic batching” may appear contradictory: batching typically depends on requests being available together. Clarify the workload and measurement setup so a reviewer can understand how batching produced the reported gain.
- **GRPO latency bullet:** The sentence is method-heavy and the 5% result is modest relative to the detail devoted to the procedure. Clarify the comparison baseline and whether the latency gain came with any change in accuracy or other quality measures. Also make the grammatical subject and the source of the result unmistakable.
- **Single-rollout GRPO bullet:** This is a specific technical choice, but the résumé does not state how you know it stabilized training or what improved. Add evidence of the effect or deprioritize it in favor of a more outcome-oriented bullet.
- **Runbook bullet:** Useful evidence of operational maturity and adoption. If you have a concrete indication of use or effect, include it; otherwise, keep the claim limited to what the reviewers actually adopted.

**Selection note:** Six bullets for an internship is a lot, especially when several describe related training experiments. Consider prioritizing the strongest three or four for your target role and using the remaining space for more directly relevant impact elsewhere.

### Projects

- **Agent Runtime Suite — “Drove adoption…”** This is the weakest bullet in the résumé. “AI-first engineering practices,” “accelerating delivery,” and “improving outcomes” are broad claims without a concrete action, measure, or example. Substantiate it or remove it.
- **Agent Runtime latency bullet:** Correct the 50% figure; the stated numbers imply roughly 33%. Also check that the baseline and measured result are comparable.
- **Task-completion bullet:** From 71% to 83% is a **12-percentage-point** increase, not a 12% relative increase. Make the distinction clear, and briefly identify the benchmark conditions if needed to make the result credible.
- **Project title, role, and technologies:** “Owner” is less informative than a clear description of your role and scope. The project is marked ongoing; make sure the résumé distinguishes current work from completed results.

### Research-Agent Evaluation Framework

- **Metrics contribution bullet:** Strong evidence of open-source impact. “Upstreamed” is understood by some technical audiences but may not be by recruiters; ensure the contribution and its adoption are clear regardless of that term.
- **Kendall correlation bullet:** A useful quantitative result, but clarify what was correlated—for example, degradation severity and evaluator score—and what the 400+ trials represent. This will help prevent the statistic from sounding detached from its meaning.
- **Defect-tracing bullet:** Good evidence of debugging and instrumentation. Clarify your contribution to identifying the defects and, if available, the practical effect of the upstream fixes.

### Skills

- **Programming:** Python and TypeScript align with the experience shown. Git is useful but may be less valuable here than a capability or tool relevant to your target jobs.
- **ML & Agents:** The category mixes methods, concepts, and infrastructure tools; Kubernetes does not naturally fit under that heading. Reorganize by skill type, and include other relevant tools or capabilities only if you can support them with experience. In particular, consider whether your demonstrated work in model serving, evaluation, CI, monitoring, or deployment should be visible here.
- **Coverage:** The section is notably brief compared with the technical detail elsewhere. Make it easier for a recruiter or ATS to find the skills most relevant to the roles you’re applying for, without adding tools you have not used.

## Five-reader read-through

- **ATS:** No job description is available, so a keyword match rate would be misleading. The résumé does contain technical terms such as PyTorch, LoRA, GRPO, Kubernetes, agent evaluation, and TypeScript.
- **Recruiter glance:** **Maybe.** The education and employers provide context, but there’s no target-role label or summary to make your intended fit immediate.
- **HR screen:** **Likely borderline-to-positive.** The résumé has relevant education and measurable results, but the unusual chronology and dense technical bullets may make your fit harder to assess quickly.
- **Hiring manager:** **Potential interview.** They are likely to notice the latency and evaluation work, then ask about the incorrect 50% claim, the GRPO results, and your actual ownership of the project work.
- **Technical reviewer:** **Promising, with a credibility check needed.** The main concern is the inconsistent latency math. They may also probe the measurement setups and the evidence behind the training and benchmark claims.

## Provisional scoring

These are **content-only estimates for the role inferred from your résumé**, not a score against a specific job posting. Page layout, visual quality, and ATS compatibility can’t be assessed from pasted text.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS / role keywords | Not scorable | No job description to compare against |
| Summary / target signal | 4/10 | No summary or target-role label |
| Skills section | 5/10 | Relevant tools listed, but sparse and mixed by category |
| Bullet quality | 6.5/10 | Strong metrics overall; one incorrect metric and several vague or overloaded bullets |
| Publication selection | N/A | No publications listed; not necessarily a problem for the inferred industry target |
| Narrative coherence | 6/10 | Distinctive experience, but the intended role and chronology could be clearer |
| Page fill and visual quality | Not scorable | No rendered document provided |
| Credibility signals | 7/10 | Good measurable results and open-source contributions; metric discrepancy needs correction |

## Interview likelihood

Without a specific job description, I wouldn’t put meaningful probabilities on the screening stages. Your strongest case is for applied ML or AI systems roles that value evaluation, inference, and production engineering. Your main risk is appearing unfocused between robotics software and agent/LLM work; your target-role signal and bullet prioritization should resolve that.

## Ranked action list

### High impact

1. **Fix the 900 ms to 600 ms percentage claim** and verify every other percentage against its stated numbers.
2. **Reorder Experience by date, newest first.**
3. **Add a clear target-role signal** near the top.
4. **Substantiate or remove the generic “AI-first practices” bullet.**
5. **Reduce the internship section to its strongest, most distinct contributions.**

### Medium impact

6. Clarify the workload and measurement setup behind the dynamic-batching result.
7. Explain what the Kendall correlation measures and what the trials represent.
8. Separate the overloaded robotics migration bullet into its central impact and secondary responsibilities, or trim it.
9. Reorganize the Skills section into clearer categories and surface relevant demonstrated capabilities.

### Cosmetic

10. Check the final document for awkward line breaks and split words—for example, “on-call” breaking across lines. This may just be an artifact of the pasted text, but confirm it in the rendered résumé.
11. Keep terminology consistent and ensure specialized methods are understandable to both technical readers and generalist recruiters.

**Bottom line:** The experience is stronger than the presentation currently makes it look. Correct the numerical inconsistency, clarify the target role, and trim or substantiate the weaker bullets before making smaller wording or formatting edits.
