## Highest-priority changes

1. **Remove your date of birth and nationality.** They’re generally unnecessary on a résumé and can expose personal information or invite bias. If work authorization is relevant to the roles you’re applying for, address that separately and only as needed.
2. **Remove duplicated accomplishments.** The assistant-only loss-masking work appears twice in your internship bullets, and the backlog reduction appears in both Experience and Projects. Keep each accomplishment once, in the section that best demonstrates your role and impact.
3. **Replace the generic Agent Runtime Suite bullet.** It makes broad claims about adoption and outcomes without showing what changed or how you know it worked.
4. **Clarify several metrics and claims.** In particular, define the accuracy improvement, the disagreement rate, what “equal accuracy” means, and the evaluation behind the reported correlations.
5. **Fix the tense inconsistency** in the Eastern Robotics CI bullet.

## Header and education

- **Contact details:** Make sure the code/portfolio link is live, clickable, and relevant to the jobs you want. Keep the phone number in a format usable by your target employers.
- **Education dates and locations:** Use consistent formatting for dates and locations. Make sure “Expected Jun 2026” is still accurate when you submit the résumé. Include GPA or relevant coursework only if it strengthens your application.
- **Degree and institution names:** Use the official names. If the company or school names here are anonymized for sharing, no change is needed; on the submitted résumé, avoid placeholder-like names.

## Experience — Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”** Specify whether 35% is a relative increase or a percentage-point increase, and what data or benchmark the comparison uses. “Diagnostic accuracy” is broad; make sure the reader can understand what was measured.
- **“Designed a routing layer…”** Clarify how the 14% and 6% disagreement rates were calculated, including the evaluation set or denominator. Also make clear what the routing layer restricts and how you determined the signals were in scope.
- **“Trained the triage agent with GRPO…”** Explain what “equal accuracy” means and how it was established. The tool-call and latency improvements are useful, but readers need enough context to judge whether the comparison was controlled and meaningful.
- **“Wrote the evaluation harness…”** Say what the harness evaluated or enabled beyond the checkpoint count, if that’s important to your target role. Be precise about what “catching 2 accuracy regressions” means; avoid implying the harness prevented releases unless it actually did.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This repeats the method in your first bullet. Remove the duplicate or consolidate the information into one bullet. Also check the technical wording: assistant-only masking does not necessarily train the model on tool-generated outputs, depending on which messages are included in the loss.
- **“Built a diagnostics triage branch…”** This overlaps with the backlog-reduction bullet in Projects. Keep the accomplishment in one place, preferably where you can explain your direct contribution and the launch context. If you keep it here, clarify how the backlog reduction was measured and what “pending-case backlog” refers to.

## Experience — Eastern Robotics Co.

- **“Cut GPU memory… by 4x…”** Verify and explain the memory measurement. Switching from FP32 to BF16 alone would not usually explain a fourfold reduction in all memory use, so specify what memory was measured and what else contributed, if applicable. Mention model-quality impact only if you measured it.
- **“Reduced p95 API latency…”** This is a strong, specific result. Clarify the conditions for the before-and-after measurements if they aren’t otherwise obvious. The build-failing load test is a separate contribution; retain it if there’s room and it reflects work you personally did.
- **“Maintained the CI pipeline… and adds…”** Correct the tense mismatch: the role is dated in the past, but “adds” is present tense. Also explain what “release cycles to 3 days” measures and what the prior cycle time was, if you can substantiate a comparison.
- **“Migrated 30 robot-fleet services…”** The scope is clear, but the benefit is qualitative. Add a measurable effect if you have one—such as fewer delayed dispatches or reduced backlog—or make sure the operational impact is otherwise clear.

## Projects — Agent Runtime Suite

- **Project details:** Clarify whether this is an independent, open-source, or work-related project, and what “Owner” means. Add a repository or demo link if available. Verify that “Aug 2025 – Present” is accurate for the date you submit the résumé.
- **“Drove adoption of AI-first engineering practices…”** This is too broad to assess: it gives no concrete evidence of adoption, delivery speed, or downstream outcomes. Replace it with a specific, verifiable contribution or result rather than keeping a general impact claim.
- **“Kept working context under 10K tokens…”** Define what counted as “working context” and how you measured the 100-turn test. Explain “raw conversation grew 100x” in a way that makes the comparison interpretable. If you measured task quality or completion, include that context so the efficiency claim doesn’t stand alone.
- **“Separated concurrency pools…”** The technical detail is useful. Clarify how you tested the 50-way fan-out and how you established that deadlocks and lost tool results were removed, rather than merely not observed in a limited test.

## Projects — Research-Agent Evaluation Framework

- **Project details:** If it’s open source, link the framework or your contribution. Clarify your contribution enough to distinguish your work from the overall project.
- **“Integrated 8 citation and faithfulness metrics…”** Name or categorize the kinds of metrics only if that helps show relevance to your target roles; otherwise, the count alone is not very informative.
- **“Showed the evaluator tracks injected degradation…”** Clarify what the Kendall correlation compares, what direction of degradation the evaluator tracked, and how the 400+ trials were constructed. This will help readers interpret the result and judge the evaluation’s rigor.
- **“Cut the pending-case backlog…”** This duplicates the Mobility Systems Company accomplishment. Remove it here if you retain the fuller, more directly attributable version under Experience.

## Skills

- **Expand selectively:** The list is short relative to the work described. Add relevant tools, frameworks, infrastructure, or evaluation methods that you have actually used and can discuss in an interview. Don’t add technologies just to increase the list.
- **Make skill labels specific:** “Agent evaluation” is broad. Use categories or terms that make your actual capabilities and tools easier to scan, while keeping the section concise.

## Final pass

- Put the most relevant, strongest evidence first within each role or project.
- Use consistent date, location, punctuation, and spelling conventions.
- Tailor which bullets and skills you emphasize to each job description; the résumé currently spans ML systems, agents, robotics, and evaluation, so relevance will depend on the role.