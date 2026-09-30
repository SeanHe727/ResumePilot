## Highest-priority changes

1. Remove date of birth and nationality; they are generally inappropriate for a U.S.-focused résumé and can introduce bias.
2. Remove the duplicated fine-tuning bullet in the internship.
3. Remove the duplicated backlog bullet from the research project.
4. Replace or substantiate the generic “AI-first engineering practices” project bullet.
5. Fix the tense error in “maintained … and adds.”
6. Clarify ambiguous metrics such as “35%,” “4x,” and claims that problems were completely “removed.”
7. Reduce dense internal jargon so a recruiter can understand the work without knowing your system.

## Header

### Name
- **No change needed.** It is prominent and professional.

### Phone, email, portfolio/code URL
- Label the code URL or use a recognizable GitHub/portfolio domain. An unlabeled generic URL gives recruiters little reason to click.
- Add LinkedIn only if it is complete and consistent with the résumé.
- Make sure all links are clickable in the PDF and remain readable when parsed by an ATS.

### Date of birth and nationality
- **Remove both.** For most U.S. applications, neither belongs on a résumé.
- If work authorization is important, address that separately only when it is accurate and strategically useful. Nationality does not clearly communicate work authorization.

## Education

### Western State University
- Keep the degree, institution, location, and expected graduation date.
- Use consistent date punctuation throughout the document; your current hyphens should be standardized.
- Consider adding GPA only if it is strong and helps your candidacy.
- Since this is your current degree, relevant research, thesis work, or advanced coursework may be worth adding only if it directly supports the jobs you are targeting.

### Eastern Institute of Technology
- Keep the entry, but use the actual country name rather than a generic country label.
- GPA, honors, or distinctions should be included only if they are notable.
- Ensure the location format matches the master’s entry.

## Mobility Systems Company

### Company/title/date line
- The structure is good.
- Confirm that the internship end date is clearly historical and that the official title matches employment records.
- If the company is not recognizable, a short company descriptor may help, but only if space permits.

### “Improved diagnostic accuracy by 35%…”
- Clarify whether 35% is an absolute percentage-point increase or a relative improvement. The current wording is ambiguous.
- Identify the baseline or evaluation set sufficiently to make the result credible.
- Reduce or explain specialized phrases such as “domain adapter,” “validated tool-use trajectories,” and “assistant-only loss masking” if the target reader may not be an LLM specialist.
- Keep this bullet only if it is the main fine-tuning result; it overlaps heavily with the fifth bullet.

### “Designed a routing layer…”
- Clarify the practical impact beyond traceability. The architecture is described, but the business or evaluation benefit is not quantified.
- Simplify the wording around signal scope so the sentence is easier to parse.
- Explain what “independent reviewer” means if that role is technically important.
- Avoid “every finding” unless you verified complete coverage; absolute claims invite scrutiny.

### “Applied GRPO… cutting end-to-end latency 5%…”
- State how latency was measured and under what workload if possible.
- Clarify whether “no loss” means statistically unchanged, within a tolerance, or exactly unchanged.
- Explain the relationship between GRPO and latency. Reviewers may question how a training method directly reduced runtime latency unless the reward changed tool use, reasoning length, or routing behavior.
- Consider whether a 5% improvement is strong enough to lead with; it is useful, but less compelling than the accuracy and backlog results.

### “Wrote the evaluation harness…”
- Keep the checkpoint count; it adds useful scope.
- Add the effect on release quality, review time, or defect detection if you can substantiate it.
- Clarify whether you created the harness from scratch or extended an existing system.
- Use the serial comma consistently in lists.

### “Fine-tuned the adapter with assistant-only loss masking…”
- **Delete or consolidate this bullet.** It repeats the method already stated in the first bullet and does not add a separate outcome.
- Reconsider “reproduce the tool outputs.” That wording can imply the model memorized or generated tool results rather than correctly invoking and using tools. Make the actual objective technically precise.
- If retained, it needs a distinct measurement that is not already covered by diagnostic accuracy.

### “Built a diagnostics triage branch…”
- Move this higher, potentially to the first or second position, because it has the clearest operational impact.
- Clarify your individual contribution if this was a team effort.
- Connect the 68% reduction to a defined baseline and case volume so the result is credible.
- Ensure the claim does not over-attribute the entire backlog reduction to your component if other operational changes contributed.
- Keep the first-quarter time frame; it strengthens the result.

## Eastern Robotics Co.

### Company/title/date line
- No major structural change is needed.
- If “Junior” undersells work that was performed independently, do not change the official title; instead, let the scope of the bullets demonstrate level.
- Keep location and date formatting consistent with the rest of the résumé.

### “Cut GPU memory… by 4x…”
- Change “by 4x” because it is mathematically ambiguous. State the reduction in an unambiguous way.
- Add peak memory figures, model scale, or hardware context if available.
- Verify the technical attribution. BF16 mixed precision alone often does not produce a fourfold reduction from FP32, so be prepared to explain whether optimizer state, gradients, checkpointing, or another change contributed.
- Use consistent terminology for the models rather than “the perception models” if only one system was involved.

### “Reduced p95 API latency from 420 ms to 180 ms…”
- This is a strong bullet and should remain near the top.
- Add traffic volume, concurrency, or test conditions if available.
- Replace the informal phrase “keep it there” with a precise description of what the load tests prevented or enforced.
- Clarify whether caching and batching contributed separately or were deployed together, especially if you may be asked to explain the measurement.

### “Maintained the CI pipeline… and adds…”
- Fix the tense mismatch: “maintained” is past tense, while “adds” is present tense.
- Clarify whether the regression checks, rather than general pipeline maintenance, caused the release-cycle reduction.
- State the prior release-cycle duration if available; “shortened to 3 days” lacks a baseline.
- Consider separating maintenance from the higher-impact automation work conceptually, since routine maintenance is less compelling.

### “Migrated 30 robot-fleet services…”
- Keep the service count and reliability mechanisms; they demonstrate scale and engineering depth.
- Clarify whether these were actual services or scheduled jobs. Calling cron jobs “services” may be challenged if they were scripts or tasks.
- Quantify the eliminated backlog or dispatch delay if possible.
- Avoid “removing” as an absolute unless monitoring showed no recurrence over a meaningful period.
- Ensure “dead-letter” is not split across lines in the final PDF; line-break hyphenation can hurt ATS parsing.

## Projects

### Agent Runtime Suite title/role/technology/date line
- Replace “Owner” with a role label that communicates what you actually did and is understandable to recruiters.
- Add a repository or demo link if the project is public.
- Clarify whether this is personal, open-source, academic, or company work. “Across the platform” makes it sound organizational, which may be confusing under Projects.
- Confirm that “Multi-Agent Systems” is serving a useful technology-label function rather than acting as a broad keyword.

### “Drove adoption of AI-first engineering practices…”
- **Delete or substantially change this bullet.** It is generic, leadership-heavy, and unsupported.
- Specify the concrete practices, the people or teams affected, and measurable delivery or quality changes.
- Remove phrases such as “AI-first,” “accelerating delivery,” and “improving outcomes” unless they are backed by evidence.
- Ensure the scope matches a project you list as “Owner”; otherwise, it can sound inflated.

### “Kept working context under 10K tokens…”
- This is technically interesting, but define what “working context” and “raw conversation grew 100x” mean.
- Explain how the 100-turn stress test was constructed or evaluated.
- Clarify whether the 10K-token threshold was a requirement, a benchmark target, or an observed maximum.
- Add the effect on quality, cost, or latency if measured. Context compression is more compelling when paired with retained task performance.
- Use consistent capitalization and number formatting for token counts.

### “Separated concurrency pools…”
- Keep the concrete technical mechanisms.
- Add the load level or test scale under which the failures occurred.
- Avoid absolute claims such as “removing” unless validated by sustained production data or comprehensive stress tests.
- Explain the consequence of the deadlocks and lost results if it was operationally significant.
- Reduce the density of terms such as “nested-pool,” “stream completion,” and “fan-out load” if applying to broader software-engineering roles.

### Research-Agent Evaluation Framework title/role/technology/date line
- Add a repository, publication, or pull-request link if public.
- “Contributor” is appropriate, but make sure the bullets clearly distinguish your work from the broader framework.
- Consider naming the actual framework if disclosure is allowed; a generic name is less verifiable.

### “Integrated 8 citation and faithfulness metrics…”
- Specify whether the metrics were implemented, adapted, or connected from existing libraries.
- Add evidence that the contribution was accepted, tested, or used.
- Consider naming only the most important metric categories if all eight names would create clutter.
- Clarify the scope of the evaluation module affected.

### “Showed the evaluator tracks injected degradation…”
- This is a strong research-oriented bullet.
- Specify the Kendall statistic correctly and consistently, including the variant if relevant.
- Clarify what was ranked and how degradation levels were constructed.
- Note whether the correlation was statistically reliable if you have that analysis.
- Tighten the relationship among removed citations, sources, and claims; these may represent different degradation types and should not appear interchangeable.
- Keep the 400+ trial count because it adds credibility.

### “Cut the pending-case backlog…”
- **Remove this bullet from the project.** It duplicates the internship bullet and appears unrelated to the research-agent framework.
- Keep the achievement only under the role where the work occurred.
- Duplication wastes space and can make reviewers question whether the project and employment work are being conflated.

## Skills

### Programming: Python, TypeScript, SQL, Bash, Git
- Move Git out of “Programming”; it is a version-control tool, not a programming language.
- Consider separating languages from tools.
- Order items by relevance and proficiency for the target role, not alphabetically.
- Include only skills you can discuss confidently in an interview.
- If you have substantial experience with testing, APIs, CI/CD, distributed systems, queues, or cloud services, consider representing those areas because they are visible in your experience but absent here.

### ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation
- Separate frameworks, methods, and areas of expertise; the current list mixes categories.
- Be cautious with GRPO if your experience is limited to one project. Specialized methods invite detailed questioning.
- Keep “agent evaluation” only if you can discuss benchmark design, metric validity, degradation testing, and statistical interpretation.
- Add core ML skills only if supported by your work; the section currently appears narrowly optimized around recent LLM terminology.
- Avoid excessive keyword density. Your experience bullets already demonstrate many of these concepts.

## Document-wide changes

- Keep the résumé to one page if possible at your experience level.
- Use consistent punctuation: either end all bullets with periods or omit them consistently.
- Use consistent date separators and dash characters.
- Prevent forced line breaks inside phrases such as “tool-use” and “dead-letter.”
- Reorder bullets so each role begins with the strongest measurable outcome.
- Distinguish relative percentages from percentage-point changes.
- Add baselines to metrics whenever feasible.
- Limit absolute wording such as “every,” “no loss,” “removing,” and “eliminated” unless rigorously supported.
- Reduce repetition of “fine-tuned,” “tool-use,” “signals,” and “backlog.”
- Make sure a general technical recruiter can understand each bullet before an LLM specialist evaluates the details.