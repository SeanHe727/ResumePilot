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