## Overall priorities

1. **Remove your date of birth and nationality.** They are generally unnecessary in North American resumes and can create bias or screening concerns. Include them only if a specific application requires them.
2. **Remove or consolidate duplicated content.**
   - The assistant-only loss-masking work appears in two internship bullets.
   - The diagnostics triage/backlog result appears in both the internship and Research-Agent project.
3. **Clarify chronology and project status.** “Aug 2025–Present” may overlap with your internship, and the M.S. is still in progress. That is fine, but make the relationship clear if the project was academic, personal, or part of your work.
4. **Replace vague claims with measurable outcomes or concrete scope.** Several bullets use phrases such as “improving outcomes” without evidence.
5. **Fix grammatical consistency and tighten technical explanations.** Some bullets are highly specific, while others omit the actual contribution or evaluation setup.

---

## Header

### `+1 (555)... | ... | example.com/code/jordan-lee`

- Replace the placeholder phone number, email domain, and code URL with real, professional contact information.
- Make the code link point directly to a GitHub, GitLab, portfolio, or relevant project page. A generic code path may not immediately establish what it contains.
- Consider adding your LinkedIn profile if it is current and useful.
- Keep the header compact; your contact details should not compete visually with your experience.

### `Date of birth: 14 Mar 1999`

- Remove it. Age and date of birth are not normally relevant to hiring in the U.S. or Canada.

### `Nationality: Canadian`

- Remove it unless you are applying somewhere that specifically requests nationality or citizenship information.
- If work authorization is relevant, state only the applicable work authorization or visa status, and only if accurate and useful for the role.

---

## Education

### `Western State University | M.S. in Computer Engineering...`

- Keep the expected graduation date.
- Consider adding a specialization, concentration, thesis topic, or particularly relevant coursework only if it supports the target role.
- If you have already completed substantial graduate work, you could include a relevant research area or project, but avoid adding coursework that is not useful for the position.
- Make sure the location format is consistent with the other education entry.

### `Eastern Institute of Technology | B.S. in Electrical Engineering...`

- This is clear.
- If your academic record is strong and you are early in your career, consider adding GPA, honors, or a relevant senior project. Do not add them if they are unremarkable or would crowd out stronger experience.
- Check whether the location should use a real country name rather than the placeholder “Country.”

---

## Mobility Systems Company

### `Improved diagnostic accuracy by 35% after fine-tuning...`

- Define what “diagnostic accuracy” means: exact-match accuracy, F1, top-k accuracy, or another metric.
- State the comparison point more clearly: before fine-tuning, versus a baseline model, or versus a prior checkpoint.
- Clarify what “validated tool-use trajectories” means and how validation was performed. The phrase may be meaningful to specialists but is opaque to general ML recruiters.
- Explain “assistant-only loss masking” elsewhere if you retain it, but do not repeat it in another bullet.
- Make sure the 35% figure is not ambiguous between a 35-percentage-point increase and a 35% relative improvement.

### `Designed a routing layer that limits each of 3 specialist agents...`

- Clarify what “in-scope signals” means and how the routing decision was made.
- Explain how reviewer disagreement was measured. For example, disagreement could mean label mismatch, recommendation conflict, or unsupported conclusions.
- Add the evaluation sample size or test-set scope if available. A change from 14% to 6% is more credible when readers know how many cases were assessed.
- Consider whether “independent reviewer” is genuinely independent. If it shares prompts, tools, or model components with the specialists, describe it more precisely.

### `Trained the triage agent with GRPO...`

- This is technically strong, but define GRPO at first use if the resume may be read by general software or ML recruiters.
- Clarify the comparison conditions behind “at equal accuracy.” State whether accuracy was statistically equivalent, exactly matched, or simply not materially lower.
- Explain what “grouped tool-use rollouts” means if the role is not specifically focused on reinforcement learning.
- Include the evaluation volume or workload used to measure the 18% tool-call reduction and 5% latency reduction.
- Confirm that the reward design did not trade away answer quality, citation quality, or failure recovery.

### `Wrote the evaluation harness...`

- Specify your role in the harness: test design, data pipeline, metrics implementation, dashboarding, CI integration, or release gating.
- Clarify what “citation quality” measured.
- Explain how the harness caught the two regressions—whether it blocked releases, flagged them for review, or identified them retrospectively.
- Add the test-set size or evaluation frequency if available. “14 adapter checkpoints” shows breadth, but not the scale of each evaluation.

### `Fine-tuned the adapter with assistant-only loss masking...`

- Remove this bullet because it duplicates the first bullet.
- If the technique is important, keep it in the bullet describing the measurable accuracy result and use the freed space for a different contribution.
- The phrase “so the model would learn to reproduce the tool outputs more faithfully” describes intent, not demonstrated impact. Do not retain it as a standalone result unless you have a supporting metric.

### `Built a diagnostics triage branch...`

- This appears to overlap heavily with the Research-Agent project bullet about the same 800+ signals and two-thirds/68% backlog reduction. Determine which position actually owns the work.
- If it was an internship deliverable, keep it under the internship and remove the project version.
- Clarify what “branch” means: workflow branch, model route, product feature, or deployment path.
- Explain how the 68% backlog reduction was measured and whether other operational changes contributed.
- Include the time period only if it strengthens credibility; if you retain “eight weeks,” make sure the comparison window is clear.

---

## Eastern Robotics Co.

### `Cut GPU memory for fine-tuning...`

- Clarify whether the 4x reduction refers to peak allocated memory, reserved memory, or total job memory.
- State whether training quality, throughput, batch size, or convergence remained comparable. A precision change can affect those areas.
- “Perception models” is broad; identify the relevant model type or workload if space allows.

### `Reduced p95 API latency...`

- This is one of the strongest bullets because it includes before-and-after numbers and a validation mechanism.
- Clarify whether the 420 ms and 180 ms measurements were from production traffic, load testing, or a staging environment.
- Explain whether the 200 ms build threshold is a hard release gate and whether the cache introduced freshness or correctness constraints.
- If the request cache and batching were separate improvements, distinguish their contributions if you have those measurements.

### `Maintained the CI pipeline... and adds automated regression checks...`

- Fix the tense inconsistency: “maintained” is past tense while “adds” is present tense.
- Clarify whether you maintained the pipeline and added the regression checks, or only maintained checks created by someone else.
- Define “release cycles to 3 days.” It could mean deployment frequency, time from code freeze to release, or time to complete validation.
- State what the regression checks covered—accuracy, latency, memory, model compatibility, or other conditions.

### `Migrated 30 robot-fleet services...`

- Clarify whether you owned the migration, designed the event schema, implemented consumers, or coordinated the rollout.
- Quantify the former nightly backlog if possible. “Removing the nightly backlogs” is useful operationally but would be stronger with volume or delay figures.
- Mention any reliability result, such as successful retry recovery, reduced failed jobs, or improved dispatch availability.
- “Dead-letter handling” is understandable to infrastructure readers, but you may want to specify what happened to failed events if the audience is broader.

---

## Projects

### `Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present`

- “Owner” is vague. Clarify whether this means sole developer, technical lead, maintainer, or project owner.
- Explain whether this is a personal, academic, open-source, or employer-related project.
- Resolve the date overlap with your internship and the other project. Overlap is acceptable, but readers should not have to infer how the projects fit together.
- Verify that “Present” is accurate at the time of submission.

### `Drove adoption of AI-first engineering practices...`

- Replace or remove this bullet unless you can provide evidence. It is broad, promotional, and does not tell the reader what you built or changed.
- Identify the practices, the teams affected, and the measurable result if you keep the idea.
- “Accelerating delivery” and “improving outcomes” need specific metrics; otherwise they read as unsupported claims.

### `Kept working context under 10K tokens...`

- Clarify what “working context” includes and how it was measured.
- Explain the meaning of “raw conversation grew 100x.” The baseline and final sizes should be understandable and technically consistent.
- State the quality or reliability tradeoff: did staged compaction preserve task success, tool-call correctness, or evaluation performance?
- Include the stress-test success criteria and number of runs if available.

### `Separated concurrency pools...`

- Explain what the separate pools represented and why that design prevented deadlocks.
- Define “50-way fan-out” in terms of concurrent agents, tool calls, or tasks.
- Quantify the observed failure rate before and after, if you have it. “Removing” deadlocks and lost results may overstate the evidence unless the system was tested extensively.
- Clarify whether this was a production issue, a reproducible stress-test issue, or a design risk discovered during development.

---

## Research-Agent Evaluation Framework

### `Integrated 8 citation and faithfulness metrics...`

- Specify whether you implemented the metrics, integrated existing libraries, or built adapters and reporting around them.
- Identify the open-source framework or link to your contribution if publicly available.
- Clarify whether “8 metrics” refers to eight distinct evaluators, metric variants, or evaluation dimensions.
- Include test coverage, runtime impact, or adoption if those are meaningful.

### `Showed the evaluator tracks injected degradation...`

- Define “injected degradation” and explain how the reports were altered.
- Clarify what the Kendall correlation measured and whether 0.89 was statistically significant.
- Explain the unit of “400+ report-level trials”: distinct reports, repeated perturbations, or model-generated reports.
- This is a strong research-style result; preserve it, but make the experimental design easier to understand.

### `Cut the pending-case backlog by two-thirds...`

- Remove this bullet if it is the same work as the Mobility Systems internship triage branch.
- If it is genuinely a separate implementation, distinguish the dataset, product, timeframe, and result from the internship version.
- Avoid presenting the same accomplishment in two sections; repetition can look like padding or duplicate credit.

---

## Skills

### `Programming: Python, TypeScript, Git`

- Consider separating programming languages from tools. Git is not a programming language.
- Add only technologies you can discuss in an interview and have used meaningfully.
- Based on the experience section, you may be omitting relevant tools such as model-training frameworks, serving infrastructure, testing tools, CI systems, queues, or cloud platforms. Add them only if they are genuinely part of your work.
- Include proficiency levels only if the application specifically requests them; they are often subjective.

### `ML & Agents: PyTorch, LoRA, GRPO, agent evaluation`

- Standardize capitalization and terminology.
- Consider including the libraries or platforms actually used to implement these techniques, if relevant and truthful.
- “Agent evaluation” is a capability area rather than a specific technology; support it with the project and experience bullets, or list the concrete evaluation frameworks and methods you used.
- Your bullets mention mixed precision, caching, event queues, CI, and concurrency, but the skills section does not reflect those areas. Align the skills section with the roles you are targeting.

---

## Formatting and consistency

- Use consistent date formatting throughout, such as `Sep 2024 – Jun 2026`; use an en dash rather than a hyphen if your template supports it.
- Keep bullet punctuation consistent. Either use periods throughout or omit them throughout.
- Ensure wrapped lines are caused by document layout rather than manually inserted line breaks. The split in “dead-letter” should not create a visible awkward break.
- Keep the resume to one page if you are targeting early-career roles, unless the additional project detail is essential.
- Prioritize the strongest evidence: measurable latency, memory, accuracy, evaluation, reliability, and scale results.
- Avoid excessive jargon in bullets, but retain technical specificity where it demonstrates differentiated expertise.
- For every metric, aim to make clear: **what changed, compared with what, how it was measured, and your specific contribution.**