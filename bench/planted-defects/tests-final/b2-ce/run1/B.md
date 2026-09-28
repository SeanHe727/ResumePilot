Your resume has strong technical substance and unusually good quantified results. The main fixes are **removing duplicated claims, clarifying how several metrics were measured, and tightening a few vague or inconsistent bullets**. I’ll refer to bullets by their opening words rather than rewrite them.

## Highest-priority changes

1. **Remove the repeated assistant-only loss-masking claim** from the Mobility Systems internship. It appears in both the first and fifth bullets. Keep the detail in whichever bullet best supports the result, and use the freed space for distinct evidence.
2. **Remove the repeated backlog claim** from the Research-Agent Evaluation Framework project. It substantially repeats the triage-branch result in your internship. Keep the claim under the role where you did the work; if the project contribution was genuinely separate, make that distinction clear.
3. **Clarify the basis for important metrics.** Several results need a defined metric, baseline, or evaluation context to be persuasive and credible.
4. **Remove your date of birth.** Nationality is also generally unnecessary; if work authorization is relevant to a particular application, state that separately and accurately.
5. **Fix the tense mismatch** in the CI-pipeline bullet under Eastern Robotics.

## Header and education

- **Contact line:** Make sure the code-profile URL is a real, working link and points directly to relevant work. Consider adding a LinkedIn or GitHub profile if it strengthens your application.
- **Date of birth and nationality:** Remove these. They generally don’t help assess your qualifications and can invite irrelevant screening.
- **Education entries:** The dates and degree details are clear. Use the actual city and country names if the generic locations are placeholders. If relevant to the roles you’re targeting, consider adding strong academic distinctions or focused coursework; don’t add them just to fill space.

## Mobility Systems Company — Machine Learning Engineering Intern

- **“Improved diagnostic accuracy by 35%…”** Define “diagnostic accuracy,” the comparison baseline, and whether 35% is a relative improvement or a percentage-point increase. “Validated” trajectories would also be stronger if the validation method or scale were clear.
- **“Designed a routing layer…”** Clarify what “in-scope signals” means and how reviewer disagreement was measured. State whether the change from 14% to 6% represents percentage points or a relative reduction, and what cases or evaluation set it covers.
- **“Trained the triage agent with GRPO…”** This is a strong, specific result. Clarify the evaluation conditions behind “equal accuracy,” and ensure the 18% reduction and 5% latency reduction are measured against the same baseline and workload.
- **“Wrote the evaluation harness…”** Useful evidence of evaluation ownership. If possible, clarify what counted as an accuracy regression and whether the two regressions were caught before deployment or release. The three evaluation dimensions are helpful.
- **“Fine-tuned the adapter with assistant-only loss masking…”** Remove or consolidate this because the same technique is already included in the first bullet. As a standalone bullet, it also describes an implementation choice without showing a distinct result.
- **“Built a diagnostics triage branch…”** Keep this result under the job if that is where you built it. The 800+ signals and 68% backlog reduction are compelling; clarify how the backlog was measured and over what period. This claim is repeated in the project section.

## Eastern Robotics Co. — Junior Software Engineer

- **“Cut GPU memory… by 4x…”** Clarify the measurement context—such as the model or workload—so readers can judge the significance and reproduce the comparison. If the change affected training capacity or throughput, that may be worth showing if you have reliable data.
- **“Reduced p95 API latency…”** Strong quantified result. Add enough context to make the comparison meaningful, such as the test workload or environment. The 200 ms build threshold is useful, but distinguish the measured 180 ms result from the threshold if the current phrasing makes them seem like the same test.
- **“Maintained the CI pipeline… and adds…”** Fix the tense mismatch: the bullet shifts from past tense to present tense. Also clarify the basis for the three-day release-cycle figure—what changed, and what period or baseline it refers to.
- **“Migrated 30 robot-fleet services…”** This is a solid ownership and reliability bullet. If you can quantify the effect of removing the nightly backlogs, do so; otherwise, make sure the operational impact is clear and supportable.

## Projects

### Agent Runtime Suite

- **“Drove adoption of AI-first engineering practices…”** This is the vaguest bullet on the resume. “Accelerating delivery” and “improving outcomes” don’t tell the reader what you personally built or how the impact was measured. Replace it with concrete, attributable evidence, or remove it if you can’t substantiate the claim.
- **“Kept working context under 10K tokens…”** The technical approach is interesting, but “the raw conversation grew 100x” is difficult to interpret without a starting point or benchmark definition. Also show whether the system preserved task quality or success rate; token reduction alone could imply lost context.
- **“Separated concurrency pools…”** Strong technical detail. Clarify whether the 50-way fan-out was a test or production workload, and what evidence supports “removing” deadlocks and lost results.

### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”** Name the framework or provide a link if it is publicly available. Clarify whether your changes were merged and what your contribution covered; “Contributor” alone leaves your ownership unclear.
- **“Showed the evaluator tracks injected degradation…”** Define what the Kendall correlation was calculated against and what the 400+ trials represent. This is a strong evaluation result, but readers need to understand what the correlation demonstrates.
- **“Cut the pending-case backlog…”** Remove this from the project section if it is the same triage-branch result already attributed to your internship. Duplicating a result in two sections can look like double-counting.

## Skills

- Your skills section is short relative to the technical work described. Include the core languages, frameworks, and tools you have actually used that are relevant to your target roles, especially those demonstrated in the experience bullets.
- Consider separating programming languages from ML frameworks, methods, and infrastructure/tools so readers can scan it quickly.
- Keep the list evidence-based: don’t add technologies solely because they are common in ML job postings.

## Presentation and positioning

- Keep the strongest, most relevant evidence near the top of each role. The internship has several strong results, but consolidating its duplicated bullet will make the section tighter.
- Use consistent date formatting and past-tense verbs for completed roles and projects; use present tense only for work that is genuinely ongoing.
- The resume already shows a clear ML/agent-engineering focus. Make sure the skills section and project links reinforce that focus rather than introducing unsupported breadth.