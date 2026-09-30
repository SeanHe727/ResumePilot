Your strongest material is the measured ML and systems work. The main changes are to remove duplication, fix two technical claims that may raise questions, and make a few metrics easier to interpret. I’m referring to your existing lines rather than rewriting them.

### Header and education
- **Date of birth and nationality:** Remove both for applications in the US. They generally aren’t needed on a resume and take space from job-relevant information. If work authorization is relevant, handle that separately.
- **Contact link:** Make sure it leads directly to current work you want employers to inspect, rather than a general or outdated page.
- **Education entries:** Confirm that “Expected Jun 2026” is still accurate. The entries otherwise give the necessary degree, institution, and dates; keep location details only if they help.

### Mobility Systems Company
- **“Improved diagnostic accuracy by 35%…”:** Specify whether 35% is a relative increase or a percentage-point change, and identify the comparison. That makes the headline result credible and interpretable.
- **“Designed a routing layer…”:** Clarify what “reviewer disagreement” measures and how it was assessed. The drop from 14% to 6% is useful, but the reader needs to know why disagreement is the right outcome.
- **“Trained the triage agent with GRPO…”:** Keep the equal-accuracy comparison—it strengthens the claim. Check that the 18% and 5% reductions come from the same evaluation conditions, and simplify any method detail that isn’t important to the roles you’re targeting.
- **“Wrote the evaluation harness…”:** Keep this. If space is tight, prioritize the regressions caught over the checkpoint count; that is the clearer consequence of the work.
- **“Fine-tuned the adapter with assistant-only loss masking…”:** Remove or substantially correct this bullet. It duplicates the first bullet, and assistant-only loss masking does not, by itself, explain learning to reproduce tool outputs more faithfully. State only the effect your evaluation actually demonstrated.
- **“Built a diagnostics triage branch…”:** Keep the backlog result, but make clear how the branch contributed to the reduction if other changes happened during those eight weeks. Remove the duplicate version under Projects.

### Eastern Robotics Co.
- **“Cut GPU memory…by 4x…”:** Verify what memory you measured. Changing FP32 values to BF16 alone suggests a 2× reduction for those values, not necessarily a 4× reduction in total fine-tuning memory. Keep 4× only if a measured before/after comparison supports it, and account for any other changes.
- **“Reduced p95 API latency…”:** Strong bullet. Make sure the load-test threshold describes a check you implemented, rather than implying all production traffic stays below 200 ms.
- **“Maintained the CI pipeline…”:** Fix the tense inconsistency (“Maintained” versus “adds”). Also clarify whether the regression checks, rather than CI maintenance generally, caused the three-day release cycle.
- **“Migrated 30 robot-fleet services…”:** Strong, concrete result. If the nightly backlogs were eliminated consistently, keep that wording; otherwise qualify the outcome to match your evidence.

### Projects
- **Agent Runtime Suite — “Drove adoption of AI-first engineering practices…”:** Remove this unless you can substantiate adoption and outcomes. It is much less specific than the two technical bullets beneath it.
- **“Kept working context under 10K tokens…”:** Define what the “100x” compares against and what the stress test represents. Otherwise the numbers are difficult to interpret.
- **“Separated concurrency pools…”:** Keep it, but confirm that the deadlocks and lost results were observed before the changes and absent in the 50-way test afterward. That distinction supports the causal claim.
- **Research-Agent Evaluation Framework — “Integrated 8…metrics…”:** Keep it; consider identifying your contribution boundary if this was a shared module.
- **“Showed the evaluator tracks injected degradation…”:** State what the Kendall correlation ranks and, if important, how trials were constructed. That lets a reader judge what 0.89 demonstrates.
- **“Cut the pending-case backlog…”:** Remove. It duplicates the internship result and appears under an unrelated project, which could create doubt about where the work happened.

### Skills
- **Programming:** Git is a tool rather than a programming language; categorize it accordingly or use the space for a stronger role-relevant skill.
- **ML & Agents:** Keep only skills you can discuss in depth. Consider whether this section adds useful technologies not already obvious from the experience bullets.