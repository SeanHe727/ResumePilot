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