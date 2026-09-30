## Highest-priority changes

1. Remove date of birth and nationality.
2. Delete the duplicated backlog bullet under the research-agent project.
3. Remove or consolidate the two overlapping loss-masking bullets in the internship.
4. Replace the vague “AI-first engineering practices” project bullet with concrete, verifiable information.
5. Correct the tense error in the CI-pipeline bullet.
6. Clarify technically questionable or ambiguous claims, especially the tool-output/loss-masking claim and “4x” memory reduction.
7. Expand and reorganize the skills section so it reflects the technologies demonstrated elsewhere.

## Header

### Name
- **Keep.** The presentation is straightforward.

### Phone, email, and portfolio/code link
- Make the code link’s destination immediately recognizable and ensure it is clickable in the PDF.
- If it is a GitHub profile, portfolio, or personal site, identify that clearly rather than displaying a generic-looking path.
- Confirm that the email address is professional and that the phone number includes the appropriate country code for international applications.

### Date of birth and nationality
- **Remove both for US and Canadian applications.**
- They are generally unnecessary, consume space, and can expose you to unconscious bias.
- If employers need to understand your eligibility to work in the target country, address work authorization instead—but only if it is accurate and strategically useful.

## Education

### Western State University line
- Keep the degree, institution, location, and expected graduation date.
- Standardize the date separator throughout the resume; use proper dashes rather than spaced hyphens.
- Make the “expected” status visually unambiguous and apply a consistent date format across all sections.
- Consider adding GPA only if it is strong and helps your candidacy.
- If your graduate focus is directly relevant to ML engineering, consider adding it only if the degree title does not already make that clear.

### Eastern Institute of Technology line
- Keep it, but use the same formatting and date conventions as the graduate degree.
- Make sure the country is named explicitly on the real resume if the institution may be unfamiliar to US recruiters.
- Do not add coursework unless you need to compensate for limited experience; your current experience is already stronger evidence.

## Experience

### Mobility Systems Company heading
- Keep the role, company, location, and dates.
- Because the internship ended, all bullets should use past tense consistently.
- If the company name is not well known, a brief industry descriptor may help, provided it does not make the heading cumbersome.
- Verify that the October-to-May timeline does not conflict with how the internship was formally classified.

### Diagnostic accuracy bullet
- Define what “diagnostic accuracy” means: case-level accuracy, top-1 classification, fault localization, or another metric.
- State the evaluation basis, such as the number of cases or the held-out test set, if disclosure is allowed.
- Clarify whether 35% is a relative increase or a percentage-point increase. The current wording can materially overstate the result.
- Explain your individual contribution if fine-tuning was part of a larger team effort.
- Consider whether “validated tool-use trajectories” will be understood by the target audience; retain the technical term only if it is central to the role.

### Routing-layer bullet
- Clarify what “in-scope signals” means operationally and how the routing layer enforced those boundaries.
- Explain why reduced reviewer disagreement represents better performance rather than merely greater agreement.
- Identify the evaluation size or time window behind the 14% and 6% figures.
- Make clear whether you designed and implemented the layer or only designed it.
- The bullet is technically strong, but it contains several concepts; trim secondary implementation detail if readability suffers.

### GRPO triage-agent bullet
- Define GRPO at least once if the jobs you are targeting may include general software or conventional ML recruiters.
- Clarify the number of grouped rollouts, cases, or evaluation runs if possible.
- State whether the 18% and 5% reductions are relative reductions.
- Support “equal accuracy” with the relevant test set or tolerance; otherwise it can sound asserted rather than measured.
- Use US spelling for US applications, including the spelling of “penalises.”
- Keep this bullet if reinforcement learning for agents is important to your target roles; otherwise, simplify the terminology and emphasize the operational result.

### Evaluation-harness bullet
- Clarify whether you built the harness from scratch or extended an existing system.
- Identify the scope of “citation quality,” since that can refer to correctness, completeness, entailment, or formatting.
- Add the number of evaluation cases if it strengthens the claim.
- Clarify how the regressions were caught and what release risk they prevented.
- Keep this bullet; it demonstrates infrastructure ownership and practical quality control.

### Second assistant-only loss-masking bullet
- **Remove or merge the underlying information into the first fine-tuning bullet.** It repeats the same technique without adding a separate outcome.
- More importantly, verify the technical accuracy of the claim. Assistant-only loss masking normally excludes non-assistant tokens from the loss; saying that it taught the model to reproduce tool outputs may be inconsistent if tool outputs were in a separate tool-role channel.
- If the model was actually learning to cite, summarize, or use tool outputs rather than reproduce them, describe the correct behavior in the final resume.
- Do not keep both loss-masking bullets unless each represents a clearly separate experiment and outcome.

### Diagnostics-triage/backlog bullet
- Keep the operational result, but establish whether the 68% backlog reduction was attributable to your branch rather than to simultaneous process changes.
- Include the baseline number of pending cases if available; a percentage alone can hide scale.
- Clarify whether “800+ sensor signals per case” refers to raw inputs, derived features, or signals screened after feature extraction.
- “In the eight weeks after launch” is useful; retain a defined measurement period.
- Consider moving this bullet higher because it combines scale, launch ownership, and business impact.

### Eastern Robotics Co. heading
- Keep it.
- All bullets should remain in past tense because the role ended.
- If this was your first full-time role after graduation, no additional explanation is needed.

### GPU-memory bullet
- Replace the ambiguous “by 4x” framing with an unambiguous reduction measurement.
- Clarify whether memory was measured per model, per GPU, or per training run.
- State what the reduction enabled, such as larger batches, larger models, lower hardware requirements, or faster experimentation.
- Verify that BF16 was truly mixed precision and not simply BF16 training; use the technically accurate description.
- Mention the hardware or model family only if it adds useful credibility and is not confidential.

### API-latency bullet
- Keep the before-and-after p95 values; they are strong and specific.
- Add the test load or request volume so the latency result has context.
- Clarify the cache’s correctness or invalidation strategy if caching could have affected data freshness.
- Explain whether batching and caching were independently measured or only evaluated together.
- Retain the build threshold because it shows that you prevented regression rather than making a one-time optimization.

### CI-pipeline bullet
- Fix the verb-tense inconsistency: “Maintained” and “adds” do not match.
- Clarify what release-cycle duration was before it became three days.
- Specify the types of automated regression checks if they were meaningful, such as model quality, latency, memory, or compatibility.
- “Maintained” can undersell ownership; accurately indicate whether you merely operated the pipeline or materially improved it.
- Make sure “three days” refers to a repeatable release cycle, not a single release.

### Service-migration bullet
- Keep the scale of 30 services.
- Clarify your role in architecture, implementation, migration planning, and rollout.
- Add evidence that retries and dead-letter handling improved reliability, if measured.
- “Removing” the backlog is an absolute claim; verify that there were truly no recurrences during a defined observation period.
- Resolve the awkward PDF line break in “dead-letter”; avoid forced hyphenation that looks like a typo.

## Projects

### Agent Runtime Suite heading
- Replace or clarify “Owner.” It does not reveal whether you created the project, led a team, maintain the repository, or own the production system.
- Add a repository link if the work is public.
- Consider naming the principal runtime/framework technologies in the technology list, not just the language and broad domain.
- Confirm that the August 2025 start date is accurate and not future-dated for the application date.

### AI-first engineering-practices bullet
- **Remove or substantially replace the content.**
- It is vague, uses broad organizational language, and provides no specific implementation, metric, scope, or verifiable result.
- “Accelerating delivery” and “improving outcomes” are unsupported claims.
- Focus this slot on a concrete capability you built, an adoption measure, or a measured delivery improvement.
- Avoid “AI-first” unless the term has a precise meaning in the project.

### Context-management bullet
- Define what “raw conversation grew 100x” is relative to; the current comparison lacks a baseline.
- Explain how token counts were measured and whether the 10K limit includes system instructions, tool results, and retrieved context.
- Clarify why 100 turns is representative or useful.
- Add the quality-retention result if you measured whether compaction preserved task performance.
- Keep the architectural concepts, but make the measurement methodology defensible.

### Concurrency/cache bullet
- Keep it; it demonstrates nontrivial systems engineering.
- Clarify how you verified that deadlocks and lost tool results were eliminated, including test duration or run count if available.
- Define “50-way fan-out” if the target audience may not understand whether that means agents, tool calls, tasks, or streams.
- State whether this was a production issue, stress-test issue, or both.
- Avoid absolute language unless the fix was validated over a meaningful period.

### Research-Agent Evaluation Framework heading
- Clarify the nature of your contribution: code contributor, research contributor, maintainer, or another role.
- Include a repository or publication link if public.
- Add the main implementation language or framework if it helps with keyword matching.
- Since the project ended, all bullets should remain in past tense.

### Eight-metric integration bullet
- Name a small number of the most important metrics if they are recognizable or technically meaningful.
- Explain whether your contribution was merged upstream, released, or used by other contributors.
- Clarify whether you implemented the metrics, integrated existing libraries, or designed the evaluation interface.
- Add test coverage or evaluation scale if available.
- Keep the number eight only if all eight metrics were meaningfully integrated and validated.

### Kendall-correlation bullet
- Specify which Kendall statistic was used and what two rankings or variables were correlated.
- Explain what “injected degradation” means at a high level; the current phrase is understandable to researchers but less clear to general recruiters.
- Clarify whether 0.89 was computed across all 400 trials, across degradation levels, or across report rankings.
- Indicate whether the correlation was statistically significant or had a confidence interval if this is intended as a research-grade result.
- This is a strong bullet once the evaluation design is made clear.

### Backlog bullet under the research-agent project
- **Delete it.**
- It duplicates the internship’s diagnostics-triage work and is unrelated to the research-agent evaluation framework.
- Its presence suggests copy-and-paste error, which can damage credibility.
- If the project genuinely reused that system, explain the relationship elsewhere rather than repeating the same result.

## Skills

### Programming line
- Move Git out of “Programming”; it is a version-control tool, not a programming language.
- Add other languages only if you can use them confidently in interviews and they are supported by your experience.
- Consider separating languages from tools and infrastructure.
- Your experience mentions APIs, event queues, CI, and caching, but the skills section currently does not reflect those areas.

### ML & Agents line
- Keep PyTorch, LoRA, and GRPO if they are relevant to the roles you are targeting and you can discuss implementation details.
- “Agent evaluation” is broad; make the category more specific to the evaluation work actually performed.
- Include the multi-agent and tool-use concepts demonstrated in the experience section if they are important target keywords.
- Consider adding model-evaluation, fine-tuning, and inference-related skills evidenced by the bullets.
- Do not overload this section with every term in the resume; prioritize searchable, defensible skills.

## Formatting and consistency

- Use one spelling convention throughout. For US applications, use US English.
- Use consistent past tense for completed roles and projects; reserve present tense for ongoing work.
- Standardize date formatting and replace spaced hyphens with proper date-range dashes.
- Prevent awkward wrapped compounds such as “tool-use” and “dead-letter.”
- Ensure all bullets fit cleanly in the final PDF and are not broken by manual line returns.
- Put the most impressive, outcome-driven bullet first within each role.
- Avoid duplicated claims across sections.
- Verify every percentage, absolute claim, and before/after metric so you can explain its baseline, dataset, and measurement method in an interview.