Your strongest material is the quantified engineering work. The main issues are **duplicated accomplishments, vague claims, and a few metrics that need context**. I’m referring to each bullet by its opening words; I’m not rewriting any lines.

## Overall changes

- **Remove or distinguish repeated accomplishments.** The fine-tuning/loss-masking work appears in two internship bullets, and the 800+ signals/backlog result appears in both Experience and Projects. Repeating the same result makes the resume feel padded. Keep the strongest version in the most relevant section, unless the project bullet describes genuinely separate work.
- **Add context to the metrics.** For percentage improvements, explain what was measured and compared—for example, the baseline, evaluation set, or measurement conditions. Without that, readers can’t judge the scale or reliability of the results.
- **Make project contributions and outcomes concrete.** Several project claims are broad or difficult to verify. Add scope, a measurable result, or a clear description of what you personally built; remove claims you can’t substantiate.
- **Standardize style.** Use consistent date formatting, number/measurement notation, and US or UK spelling. Since the resume uses US locations, use US spelling consistently.
- **Consider moving Experience above Education** if you’re applying for engineering roles and your work is more relevant than your degree history.

## Header and education

- **Name and contact details:** Make sure the code/portfolio link works and leads directly to relevant work. Consider adding a LinkedIn profile if it supports your applications.
- **Western State University:** The expected graduation date is clear. Make sure it remains accurate and update it once the degree is completed.
- **Eastern Institute of Technology:** This entry is clear. Check that the country and city format matches the other location entries.

## Experience

### Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”** Specify how accuracy was measured, the comparison baseline, and the evaluation data or scope. “Domain adapter” and “validated tool-use trajectories” may also be unclear to readers outside your team; add enough context to make the method understandable.
- **“Designed a routing layer…”** Clarify what “in-scope signals” means and how reviewer disagreement was measured. If the 14% and 6% figures come from a particular evaluation set or period, state that context.
- **“Trained the triage agent with GRPO…”** Expand GRPO on first use, or make sure the acronym is explained elsewhere. Clarify the evaluation conditions behind “equal accuracy,” and say how latency was measured. Use US spelling consistently with the rest of the resume.
- **“Wrote the evaluation harness…”** This is a strong, specific contribution. Clarify what counted as an accuracy regression, if that isn’t obvious to your target audience. Consider naming the evaluation scale or set if it helps readers assess the result.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This overlaps substantially with the first bullet, which also describes adapter fine-tuning and tool-use trajectories. Remove this bullet or make clear that it describes a distinct contribution; otherwise, it repeats the same work without adding a separate outcome.
- **“Built a diagnostics triage branch…”** This repeats the backlog and signal-screening result in the Research-Agent project section. Keep the claim in one place, or clarify how the project work differs. Also explain the backlog measurement period or starting point if the 68% reduction needs context.

### Eastern Robotics Co.

- **“Cut GPU memory…by 4x…”** Clarify whether this is peak memory, what models or workload were tested, and whether model quality was maintained. Use consistent multiplication-sign formatting throughout.
- **“Reduced p95 API latency…”** State whether the figures came from load tests or production and under what workload. The 200 ms build threshold is useful, but clarify how it relates to the reported 180 ms result.
- **“Maintained the CI pipeline…and adds…”** Fix the tense mismatch: the first verb is past tense and the second is present tense. Also clarify what “release cycles to 3 days” means and what the cycle time was before the change. “Maintained” is broad, so specify your contribution if you have room.
- **“Migrated 30 robot-fleet services…”** Clarify whether the services themselves were migrated or their scheduled jobs were moved to the event queue. “Removing the nightly backlogs” is a useful result, but add a measurable impact if you have one.

## Projects

### Agent Runtime Suite

- **“Owner” in the project heading:** Clarify whether this is a formal role or simply indicates that you led the project. Make sure the heading communicates your responsibility clearly.
- **“Drove adoption of AI-first engineering practices…”** This is the least specific project bullet. Add concrete evidence of adoption or impact, or remove it. As written, “accelerating delivery and improving outcomes” doesn’t tell the reader what changed or how you know.
- **“Kept working context under 10K tokens…”** Clarify what “raw conversation grew 100x” is measured against and what “working context” includes. If possible, provide evidence that the approach preserved useful information, not just that it stayed within a token limit.
- **“Separated concurrency pools…”** Explain what the 50-way fan-out represents—such as concurrent requests or tasks—and how you verified the deadlocks and lost results were resolved.

### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”** Name the most relevant metrics, if space allows, and clarify your contribution to the integration. A repository link would help substantiate the open-source work.
- **“Showed the evaluator tracks injected degradation…”** Clarify what the Kendall correlation was calculated between and what the degradation levels represented. “400+ report-level trials” is useful scale information, but the result will be more interpretable with that additional context.
- **“Cut the pending-case backlog by two-thirds…”** This duplicates the Mobility Systems Company bullet. Remove it here or clearly distinguish it as a separate result.

## Skills

- **Programming:** Git is a version-control tool, not a programming language; organize it accordingly. Add other languages or tools only if you can use them confidently and they’re relevant to the roles you’re targeting.
- **ML & Agents:** Kubernetes is a deployment/platform tool rather than an ML or agent method. Separate it from this category. Consider adding relevant technologies demonstrated in your experience, but don’t list skills you can’t discuss in an interview.
- **Across both skills lines:** The list is quite short compared with the technical detail in your experience. Include the tools and methods central to that work, while avoiding a long inventory of technologies you’ve only briefly encountered.