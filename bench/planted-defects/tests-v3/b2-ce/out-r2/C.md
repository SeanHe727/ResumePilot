## Highest-priority changes

1. **Remove date of birth and nationality** for U.S./Canadian applications. They are generally unnecessary, create privacy and bias concerns, and use valuable space.
2. **Delete the fifth Mobility Systems bullet.** It duplicates the first bullet and may inaccurately describe what assistant-only loss masking accomplishes.
3. **Remove the final Research-Agent Evaluation Framework bullet.** It duplicates your internship work and appears under an unrelated project.
4. **Replace or substantiate the “AI-first engineering practices” bullet.** It is vague and reads as promotional language rather than evidence.
5. **Clarify baselines and measurement conditions** for the strongest metrics, especially the 35% accuracy improvement, 68% backlog reduction, and 4x memory reduction.
6. **Fix tense, spelling, and formatting inconsistencies.**

---

## Header

### “Jordan Lee”
- **Keep.** Clear and appropriately prominent.

### Phone, email, portfolio/code URL
- Ensure the URL is clickable in the PDF and leads directly to strong, current work.
- If it is primarily GitHub, make that clear through the actual domain rather than a generic-looking path.
- Verify that the PDF’s text extraction preserves the URL correctly for applicant-tracking systems.
- Add LinkedIn only if it is complete and consistent with the resume.

### “Date of birth: 14 Mar 1999 | Nationality: Canadian”
- **Remove both** for most U.S. and Canadian applications.
- These details are not relevant to technical qualifications and may expose you to unnecessary bias or privacy risk.
- If work authorization matters, address it only when requested or with a concise authorization statement if strategically necessary.

---

## Education

### Western State University line
- Keep the degree, institution, location, and expected graduation date.
- Use consistent date punctuation throughout the document; an en dash is preferable to a hyphen.
- Make sure “Expected” cannot be mistaken for part of the degree title.
- Consider adding GPA only if it is strong and helps your candidacy.
- Relevant coursework is unnecessary unless you lack experience in the target area.

### Eastern Institute of Technology line
- Keep it.
- Replace generic country/location placeholders in the actual resume.
- Use the same date style and separators as the graduate degree line.
- If the institution is not well known in the target country, preserve the official English name and avoid unofficial translations.

---

## Mobility Systems Company

### Role and date line
- Keep the role.
- Confirm that October 2024–May 2025 is accurate and that the role is clearly completed rather than ongoing.
- If this was part-time during graduate school, mentioning that is optional; only do so if it resolves a likely timeline question.

### “Improved diagnostic accuracy by 35%...”
- Clarify whether 35% is a relative improvement or a percentage-point increase.
- Identify the baseline and evaluation set or case count.
- Define “diagnostic accuracy” precisely enough that a reader can judge the result.
- Clarify what “validated” means for the trajectories.
- Keep the assistant-only masking detail only if it was materially responsible for the outcome; otherwise it may be too implementation-specific for the first bullet.
- This is a strong lead bullet once the metric is made auditable.

### “Designed a routing layer that limits each of 3 specialist agents...”
- Clarify how reviewer disagreement was measured and over how many cases.
- Explain whether lower disagreement corresponded to greater adjudicated correctness. Agreement alone is not necessarily a quality improvement.
- Reduce ambiguity around “in-scope signals”; a technical reader should understand whether this means permissions, context filtering, routing, or feature access.
- Keep the before-and-after metric because it provides useful evidence.

### “Trained the triage agent with GRPO...”
- Add the missing grammatical preposition before both percentage reductions.
- Change “penalises” to U.S. spelling if targeting U.S. employers, and use that spelling convention consistently.
- State the scale of the evaluation and how redundant tool calls were defined.
- Preserve the “equal accuracy” qualification; it makes the efficiency claim credible.
- Clarify which SFT baseline was used, especially if it is the adapter referenced elsewhere.
- Consider whether “grouped tool-use rollouts” adds meaningful distinction or merely increases jargon density.

### “Wrote the evaluation harness...”
- Keep this bullet.
- Clarify how citation quality was scored and how many evaluation cases were involved.
- If possible, distinguish between regressions detected during development and regressions actually prevented from reaching production.
- “The team used” is helpful adoption evidence, but the impact would be stronger if the frequency or release integration were clear.
- Use a serial comma consistently if that is your chosen style.

### “Fine-tuned the adapter with assistant-only loss masking...”
- **Delete this bullet.**
- It repeats the first bullet without adding a separate outcome.
- More importantly, assistant-only loss masking generally prevents training loss from being applied to non-assistant tokens; it does not directly mean the model learns to “reproduce tool outputs.” Verify the technical claim before retaining any version of it.
- If this work had a distinct measured effect, incorporate that evidence into the first bullet rather than using a separate line.

### “Built a diagnostics triage branch...”
- Keep it, but clarify the causal link between the branch and the 68% reduction.
- State the backlog baseline or approximate case volume if available.
- Explain whether “800+ sensor signals” means signals examined per case, available features, or raw channels.
- The eight-week time window is good; retain it.
- Clarify whether this was launched into production, a pilot, or an internal workflow.

### Ordering within this role
- Lead with the bullet most aligned with the target job.
- For ML engineering roles, prioritize measurable model quality, production deployment, evaluation infrastructure, and efficiency.
- Keep the narrative distinct: model quality, architecture, optimization, evaluation, and production impact. Avoid multiple bullets describing the same fine-tuning work.

---

## Eastern Robotics Co.

### Role and date line
- Keep it.
- Confirm the title matches the official title used in background checks.
- The progression from this role to graduate study and internship is understandable.

### “Cut GPU memory...by 4x...”
- Replace “by 4x” with an unambiguous reduction expression. It can be interpreted inconsistently.
- Provide the actual before-and-after memory figures if available.
- Clarify whether throughput, training time, convergence, or model quality changed.
- “The perception models” is broad; indicate scope if this applied to a particular model family or training pipeline.
- Verify that the work involved BF16 mixed precision rather than simply converting stored weights.

### “Reduced p95 API latency from 420 ms to 180 ms...”
- Keep this bullet; it is specific and credible.
- Clarify the tested request volume, concurrency, or production traffic conditions.
- Confirm that the cache and batching changes did not compromise data freshness or correctness.
- The build threshold is useful because it shows regression prevention, not just a one-time optimization.
- If the load test runs in CI, make that explicit through the surrounding context rather than adding more jargon.

### “Maintained the CI pipeline...and adds automated regression checks...”
- Fix the tense mismatch: “Maintained” and “adds” are inconsistent.
- Clarify whether release cycles were shortened **to** three days or **by** three days; the current wording says “to.”
- Add the previous release-cycle duration if available.
- “Maintained” undersells the work if you materially changed the pipeline. Ensure the verb reflects your actual ownership.
- Identify what the regression checks covered—model quality, performance, packaging, compatibility, or deployment—without creating a long list.

### “Migrated 30 robot-fleet services...”
- Keep this bullet.
- Clarify whether all 30 were independently scheduled services or jobs within fewer services; technical readers may question the architecture.
- Add a measurable reliability or operational result if one exists, such as delayed dispatches, failed jobs, or support incidents.
- Preserve retries and dead-letter handling because they demonstrate production reliability knowledge.
- Ensure “dead-letter” is not split across lines in the final PDF or extracted text.

---

## Agent Runtime Suite

### Project heading
- “Owner” is vague. Use a role designation that accurately communicates whether you created, maintain, or lead the project.
- Add a repository or project link if the work is public.
- Verify that the August 2025 start date is not future-dated when you submit the resume.
- “Multi-Agent Systems” is a domain, while TypeScript is a technology; the category formatting is slightly inconsistent.

### “Drove adoption of AI-first engineering practices...”
- **Replace or remove this bullet.**
- It lacks a concrete action, scope, user count, baseline, and measurable result.
- “AI-first,” “accelerating delivery,” and “improving outcomes” are broad claims that recruiters cannot verify.
- Focus this bullet on a specific capability, adoption measure, or operational result from the project.
- Do not let this generic line precede the two technically strong bullets.

### “Kept working context under 10K tokens...”
- Keep it.
- Explain how the 100-turn stress test was constructed and whether it was deterministic or repeatable.
- Clarify what “raw conversation grew 100x” is relative to.
- State whether important information retention was measured; token reduction alone does not prove context quality.
- Define “budgeted context layers” and “staged compaction” enough to distinguish the approach from simple truncation.
- Preserve the hard token and turn counts.

### “Separated concurrency pools and gated cache writes...”
- Keep it.
- Clarify whether the deadlocks and lost results were observed in production, integration testing, or stress testing.
- State the number of trials or failure rate before and after if available.
- “50-way fan-out” is useful, but readers need to know whether that means concurrent agents, tool calls, or tasks.
- Consider reducing internal architectural jargon if the target role is broader than infrastructure or agent-runtime engineering.

---

## Research-Agent Evaluation Framework

### Project heading
- Keep the contributor designation if it accurately reflects your role.
- Add a link to the repository, merged pull request, release, or documentation if public.
- If the project has recognizable adoption, include that evidence.
- “LLM Evaluation” is broad; make sure the bullets establish the specific evaluation focus.

### “Integrated 8 citation and faithfulness metrics...”
- Keep it.
- Clarify whether the contribution was merged upstream and released.
- State whether you implemented the metrics, connected existing implementations, or built the evaluation interface around them.
- Mention test coverage or reproducibility if it was a meaningful part of the contribution.
- You do not need to list all eight metrics, but the reader should understand their scope.

### “Showed the evaluator tracks injected degradation...”
- Keep this bullet; it is one of the strongest project claims.
- Specify which Kendall statistic was used.
- Clarify how degradation levels were generated and how many systems, reports, or conditions were included.
- Explain whether 0.89 was aggregated across all degradation types or calculated separately and then combined.
- Ensure “removed citations, sources and claims” describes controlled perturbations rather than arbitrary deletion.
- Keep the 400+ trial count.

### “Cut the pending-case backlog by two-thirds...”
- **Remove it from this project.**
- It duplicates the Mobility Systems internship bullet.
- It has no apparent connection to research-agent evaluation.
- The discrepancy between “two-thirds” here and “68%” in the internship section can also look careless, even though the values are approximately equivalent.

---

## Skills

### “Programming: Python, TypeScript, Git”
- Move Git out of the programming-language category; it is a version-control tool.
- Add only languages you can use confidently in interviews.
- Consider whether the resume demonstrates the claimed TypeScript and Python depth clearly enough; it currently does.
- Include SQL only if you genuinely have working proficiency and can defend it.

### “ML & Agents: PyTorch, LoRA, GRPO, agent evaluation”
- Separate frameworks, training methods, and areas of expertise more cleanly.
- “Agent evaluation” is broad; use a more specific skill category if your experience supports it.
- Include SFT if it is a genuine skill, since it appears repeatedly in the experience section.
- Add infrastructure tools only if you actually used them—your bullets suggest CI, queues, APIs, and GPU training, but the skills section does not expose those capabilities.
- Avoid turning the section into a keyword dump; every listed skill should be supported by a bullet or project.

---

## Consistency and presentation

- Use one spelling convention throughout. The resume currently mixes U.S. context with British spelling.
- Use past tense for completed roles and projects; use present tense only for ongoing work.
- Standardize hyphens, en dashes, date formats, commas, and capitalization.
- Prevent manual line breaks from splitting compounds such as “dead-letter.”
- Check PDF text extraction so bullets do not merge or break incorrectly in applicant-tracking systems.
- Avoid repeating the same achievement in multiple sections.
- Keep the strongest quantified, verifiable bullets and remove generic claims. Your technical content is already strong; the main improvement is making the evidence precise and nonduplicative.