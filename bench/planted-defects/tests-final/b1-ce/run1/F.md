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