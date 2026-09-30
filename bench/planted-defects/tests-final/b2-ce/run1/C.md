Your strongest material is the measured engineering work. The main fixes are to remove duplication, resolve a few technical inconsistencies, and make broad claims as specific as your best bullets. Below, I’ve identified each line by its opening words rather than rewriting it.

### Header and education

- **Name and contact line:** Keep them. Make sure the code link goes directly to a useful portfolio or repository, rather than a generic profile, and use a professional email address.
- **Date of birth / nationality:** Remove both for a U.S. résumé. They do not help assess your qualifications. If work authorization matters for an application, address it where the employer asks.
- **M.S. education line:** Keep it, but update “Expected Jun 2026” when you graduate. Use consistent date formatting throughout.
- **B.S. education line:** Keep it. Replace the placeholder location details before applying.

### Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”** Keep the result, but specify what accuracy measures and what the 35% is relative to. Otherwise, the headline metric is hard to interpret.
- **“Designed a routing layer…”** Keep. Clarify what “reviewer disagreement” measures and how it was evaluated; the drop from 14% to 6% is useful only if a reader understands the comparison.
- **“Trained the triage agent with GRPO…”** Keep. State the evaluation scope or sample size if you have room, particularly for “equal accuracy,” so the efficiency gains feel well supported.
- **“Wrote the evaluation harness…”** Keep. This explains how the checkpoint and regression claims were established. Consider whether “citation quality” needs a brief indication of what was checked.
- **“Fine-tuned the adapter with assistant-only loss masking…”** Remove or substantially correct this bullet. It repeats the first bullet, and its explanation is technically confusing: assistant-only loss masking does not, by itself, train a model to reproduce tool outputs. Describe the actual training objective only if it adds something distinct.
- **“Built a diagnostics triage branch…”** Keep this version of the backlog achievement. It gives the system, scale, outcome, and timeframe; remove its duplicate from Projects.

### Eastern Robotics Co.

- **“Cut GPU memory…by 4x…”** Verify the attribution. Moving from FP32 to BF16 alone would not typically explain a 4× reduction in total GPU memory. Identify any other changes that contributed, or adjust the claim.
- **“Reduced p95 API latency…”** Keep. The before-and-after numbers and build guardrail make this particularly strong.
- **“Maintained the CI pipeline…”** Fix the tense mismatch (“Maintained” versus “adds”). Clarify whether the regression checks caused the three-day release cycle, and provide the previous cycle length if known.
- **“Migrated 30 robot-fleet services…”** Keep. If the migration was shared work, distinguish your contribution from the team’s; otherwise, this is a clear operational achievement.

### Agent Runtime Suite

- **Project heading:** Replace “Owner” with a role that accurately conveys whether this is your independent project, a team project, or an open-source project. Add a link if it is public.
- **“Drove adoption of AI-first engineering practices…”** Remove unless you can name the practice, your contribution, and a measurable outcome. It is much vaguer than the bullets around it.
- **“Kept working context under 10K tokens…”** Keep, but make clear what “working context” includes and what grew 100×. That will make the stress-test result easier to assess.
- **“Separated concurrency pools…”** Keep. Briefly indicate how you verified the deadlocks and lost results were eliminated under 50-way fan-out.

### Research-Agent Evaluation Framework

- **Project heading:** Add a link if the contribution is public, and distinguish it from your internship work if a reader might assume they are the same project.
- **“Integrated 8 citation and faithfulness metrics…”** Keep. Say whether you implemented the metrics, integrated existing ones, or both; those imply different scopes of work.
- **“Showed the evaluator tracks injected degradation…”** Keep. Specify what was ranked for the Kendall correlation so the 0.89 result is interpretable.
- **“Cut the pending-case backlog…”** Remove. It duplicates the Mobility Systems achievement and does not fit this evaluation-framework project.

### Skills

- **Programming:** Git is a tool, not a programming language. Separate it or replace it with another language you can confidently use.
- **ML & Agents:** Keep skills you can defend in an interview. Consider adding the evaluation or deployment tools actually used in the experience above, rather than relying on broad labels such as “agent evaluation.”

**First pass:** delete the two duplicate bullets and the vague adoption bullet, correct the loss-masking and GPU-memory claims, then clarify the baselines behind your strongest metrics.