## Highest-priority changes

1. **Remove date of birth and nationality.**  
   They are not needed for most Canadian/U.S. technical applications and can introduce bias or create work-authorization questions. Include work authorization only if relevant to the application.

2. **Remove the duplicated fine-tuning claim.**  
   The first and fifth Mobility Systems bullets both describe assistant-only loss masking. Keep the stronger, quantified result and replace or remove the other. Repeating the same technical contribution makes the experience look padded.

3. **Investigate the duplicated backlog metric.**  
   The Mobility Systems role and Research-Agent Evaluation Framework both claim reducing a pending-case backlog involving 800+ sensor signals. This looks like an accidental copy, an attribution problem, or an implausible overlap. Keep the accomplishment under the correct entry and replace the other bullet with a distinct result.

4. **Correct the grammar error in the Eastern Robotics CI bullet.**  
   “Maintained” and “adds” are inconsistent in tense. Make the entire bullet past tense.

5. **Clarify the relationship between the projects and your employment.**  
   The projects contain work that appears closely related to the Mobility Systems role, especially the sensor-triage bullet. Identify whether each project was independent, open-source, academic, or part of your employment. This prevents recruiters from questioning ownership or double-counting.

6. **Add links where they strengthen credibility.**  
   The code URL should be a clickable, complete URL. For the open-source evaluation framework, include the repository, pull request, or contribution link if available. For the Agent Runtime Suite, add a link only if the work is public and safe to disclose.

---

## Header

### `Jordan Lee`
- Keep the name prominent.
- Use consistent formatting for the phone number, email address, and link.
- Verify that the code portfolio URL works without requiring unusual navigation.
- Consider adding a LinkedIn profile only if it is complete and consistent with the resume.

### `Date of birth: 14 Mar 1999`
- Remove it.
- It does not help qualify you for ML/software roles and may create unnecessary screening issues.

### `Nationality: Canadian`
- Remove it unless a specific application explicitly requests it.
- If you need to establish eligibility, use a separate work-authorization statement tailored to the country and job.

---

## Education

### `Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026`
- Keep the expected graduation date; it is useful for recruiting.
- Add a specialization, thesis, or selected coursework only if it directly supports the target roles and you have space.
- Make sure the degree format is consistent with the bachelor’s entry.
- If your current program is the most relevant credential, placing Education before Experience is reasonable; otherwise, put relevant Experience first.

### `Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022`
- Verify the location. The use of “USA” for one institution and “Country” for another looks unfinished or anonymized.
- Consider adding honors, GPA, or relevant coursework only if strong and relevant. Do not add them merely to fill space.
- If the degree included robotics, controls, embedded systems, signal processing, or ML coursework relevant to your target roles, surface that selectively.

---

## Mobility Systems Company

### Role and dates
`Machine Learning Engineering Intern | ... | Oct 2024 - May 2025`
- The title is clear.
- If this was a part-time, research, or co-op position, indicate that only if it helps explain the arrangement.
- Ensure the dates do not conflict with your master’s enrollment unless the work was part-time or during a scheduled break.

### `Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.`
- Keep the 35% result, but specify what “diagnostic accuracy” means elsewhere in the bullet or surrounding context: for example, the evaluation measure or baseline definition.
- Clarify whether this was a relative or percentage-point improvement. The distinction matters.
- Explain “domain adapter” and “validated tool-use trajectories” enough for a general ML recruiter to understand the contribution.
- Keep the loss-masking detail if the target roles are LLM/agent-focused; otherwise, it may be too implementation-heavy without additional context.
- This is currently one of the strongest bullets, but it needs a clearer evaluation context.

### `Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, keeping every finding traceable to its source data.`
- Clarify the practical result of the routing layer. The current bullet explains the design and intended benefit but not whether it improved accuracy, reduced unsupported findings, or improved auditability.
- Specify whether the “3 specialist agents” and reviewer were deployed, evaluated experimentally, or only prototyped.
- Replace vague wording such as “in-scope signals” with a term that is understandable to readers outside the project, or define it elsewhere.
- Keep the traceability claim only if you can explain how it was measured or enforced.

### `Applied GRPO with grouped tool-use rollouts and a composite reward, cutting end-to-end latency 5% versus the SFT baseline with no loss in diagnostic accuracy.`
- This is technically distinctive and should remain for LLM/agent roles.
- Clarify whether GRPO itself caused the latency reduction or whether the rollout/training configuration did. The causal relationship is not obvious.
- Define the evaluation conditions behind the latency comparison: same hardware, workload, and model size if relevant.
- “No loss” is weaker than a quantified accuracy comparison. Add the numerical comparison if available.
- Avoid overloading the bullet with unexplained acronyms if applying to general software roles.

### `Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency before each release.`
- Keep this bullet.
- Add the scale or operational consequence if available: runtime, number of test cases, release frequency, or defects caught.
- Use consistent punctuation in the metric list; the current list should be grammatically parallel.
- Clarify whether the harness was automated in CI or run manually. That distinction materially affects its engineering value.
- “Before each release” is useful, but specify whether it became a required release gate.

### `Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.`
- Remove this bullet because it duplicates the first bullet.
- If it represents a separate contribution, distinguish it by adding a different result, dataset, or evaluation finding rather than repeating the method.
- The phrase “more faithfully” is qualitative and weaker than the quantified accuracy result already present.

### `Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the first quarter after launch.`
- Keep this if it belongs to the internship.
- Clarify what “triage branch” means to a reader unfamiliar with the system.
- Explain whether the 68% reduction was measured against a pre-launch baseline and whether other process changes contributed.
- The combination of 800+ signals and a 68% operational result is compelling; preserve both if accurate.
- Make sure the same accomplishment is not repeated in the Research-Agent project.

---

## Eastern Robotics Co.

### `Junior Software Engineer | ... | May 2023 - Jul 2024`
- The title is clear.
- Consider whether “Junior” helps or unnecessarily undersells you now. Retain the official title if accuracy is important, but you can emphasize the technical scope through the bullets.

### `Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.`
- Keep the quantified improvement.
- Clarify whether “4x” means 75% lower memory usage or a fourfold reduction in consumption. Recruiters may interpret the wording differently.
- Add the practical impact if available: larger batch size, larger model, longer sequence, or ability to run on a particular GPU class.
- “Perception models” is broad; identify the relevant model type or workload if space permits.

### `Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, and added load tests to keep it there.`
- Keep this; it is one of the clearest engineering bullets.
- Consider separating the performance change and the testing/maintenance result only if the line becomes too dense.
- Clarify the traffic or test scale so the latency improvement has context.
- “Keep it there” is informal and should be replaced with more precise wording about regression prevention or performance monitoring.
- State whether the 420 ms and 180 ms values were measured under comparable load.

### `Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.`
- Correct the tense inconsistency: the bullet begins in past tense but switches to present tense.
- Clarify whether you maintained an existing pipeline, redesigned it, or added the checks yourself.
- Explain what “3 days” measures: total release time, time between releases, or time from code merge to deployment.
- Identify the regression checks if relevant, such as accuracy, latency, memory, or model compatibility.
- This bullet may be stronger if the ownership and measurable result are more clearly connected.

### `Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-letter handling, removing the nightly backlogs that delayed morning dispatch.`
- Keep this; it demonstrates system design and operational impact.
- Clarify whether you led the migration or contributed as part of a team.
- Add the queue technology only if it is relevant and not already obvious from the skills section.
- Quantify the operational improvement if available: failed jobs, dispatch delay, processing time, or incident reduction.
- Define “dead-letter handling” only if applying to a non-infrastructure audience; otherwise, it is a useful technical detail.

---

## Projects

### `Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present`
- “Owner” is ambiguous. Clarify whether this means sole developer, project lead, maintainer, or product owner.
- The start date is in the future relative to some possible resume timelines, so verify that it is accurate and consistent with the current date.
- Include a repository or demo link if public.
- The technology field should include only tools you actually used in the listed bullets. Consider adding concurrency, caching, or orchestration technologies if they are central and truthful.

### `Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.`
- Remove or substantially replace this bullet.
- It is vague, promotional, and unsupported by metrics. “AI-first,” “accelerating delivery,” and “improving outcomes” do not tell the reader what you built or what changed.
- If you retain the accomplishment, quantify adoption, delivery time, usage, or downstream impact. Otherwise, use the space for a concrete technical contribution.

### `Kept working context under 10K tokens across a 100-turn stress test while the raw conversation grew 100x, using budgeted context layers and staged compaction.`
- Keep this if the project targets agent-runtime or LLM infrastructure roles.
- Clarify what “working context” includes and how it was measured.
- Explain the baseline or comparison point for the 100x growth. As written, the claim is technically interesting but difficult to interpret.
- State the quality or task-completion effect of compaction. Keeping the context small is less persuasive if it degraded agent performance.
- Avoid mixing “tokens,” “turns,” and “100x” without defining the test conditions.

### `Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under fan-out load.`
- Keep this; it shows debugging and systems design.
- Quantify the frequency or severity of the deadlocks/lost results before and after the change if possible.
- Clarify what “fan-out load” means in terms of concurrent tasks, agents, or requests.
- Explain whether the fix was validated through stress tests, production use, or both.
- This bullet is strongest when paired with a measurable reliability or throughput result.

---

## Research-Agent Evaluation Framework

### `Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025`
- “Contributor” is acceptable for open-source work, but specify your ownership if you authored a module, led a pull request, or maintained a feature.
- Add the repository or merged pull-request link.
- Clarify whether the dates represent your contribution period or the project’s overall duration.
- Make sure the dates and contribution do not misleadingly imply employment if this was an independent project.

### `Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.`
- Keep this.
- Specify whether you implemented, adapted, or merely configured the metrics.
- Add the effect on the project if available: evaluation coverage, runtime, accepted pull requests, or number of users.
- Clarify “citation and faithfulness metrics” enough to distinguish citation correctness, source attribution, claim support, and general answer quality.

### `Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.`
- Keep the 0.89 and 400+ figures.
- Explain what the correlation was between: injected degradation level and evaluator score, for example. The current wording requires the reader to infer the comparison.
- Clarify whether 0.89 is statistically significant or whether confidence intervals were calculated, if relevant.
- Make the degradation categories parallel and precise. “Removed citations, sources and claims” may refer to different experimental manipulations.
- State why the result matters: it demonstrates sensitivity, ranking quality, or robustness of the evaluator.

### `Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor signals per case using ML-extracted features.`
- Remove this unless it is genuinely part of this project.
- It appears to duplicate the Mobility Systems internship bullet and does not fit naturally with a research-agent evaluation framework.
- If this belongs to the internship, move it there and use this project space for an evaluation-specific result.
- If the two projects used the same system, explicitly distinguish your contribution and the project context so it does not look like duplicated credit.

---

## Skills

### `Programming: Python, TypeScript, SQL, Bash, Git`
- Separate Git from programming languages; it is a version-control tool.
- Add proficiency levels only if the format is consistent and defensible; otherwise, omit levels.
- Include languages or tools demonstrated in the bullets, such as C/C++, Java, Docker, Linux, or cloud platforms, only if you genuinely use them and want those roles.
- The current list is credible but may undersell your systems and deployment experience.

### `ML & Agents: PyTorch, LoRA, GRPO, LangGraph, RAG, agent evaluation`
- Keep the specialized items because they align with the experience.
- Organize the skills into clearer categories, such as ML frameworks, fine-tuning, agent frameworks, and evaluation, so recruiters can scan them more easily.
- Add technologies that are directly demonstrated in the bullets, such as mixed precision, model serving, distributed inference, queues, caching, or CI/CD, if accurate.
- Avoid listing concepts such as RAG or agent evaluation without indicating the tools or implementation depth elsewhere in the resume.
- Ensure every prominent skill is supported by either a bullet, project, coursework item, or portfolio evidence.

---

## Formatting and positioning

- Use a consistent date format throughout.
- Keep bullets to roughly one or two lines where possible; several currently wrap because they contain too many clauses.
- Lead each bullet with the contribution, then the method, then the measurable result. Your strongest bullets already follow this pattern.
- Use past tense for completed roles and projects; use present tense only for the current project.
- Put the most relevant experience before Education if applying for engineering roles, unless the master’s program is central to the target position.
- Consider removing the generic “Projects” entry for a project that does not show measurable technical work, especially the AI-first practices bullet.
- Prioritize demonstrated impact over tool names. The resume is strongest when it shows accuracy, latency, memory, release, reliability, or backlog results.
- Be careful with confidential industrial details. Confirm that the company names, system descriptions, metrics, and model-training methods are permitted for external use.