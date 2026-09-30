## Overall priorities

1. **Fix the chronology.** Your sections and roles are not in reverse chronological order.
2. **Correct two percentage claims.** The latency and task-completion math currently undermine credibility.
3. **Reduce vague, buzzword-heavy statements.** Several bullets describe activity without measurable impact.
4. **Separate overloaded bullets.** Some bullets combine too many projects, responsibilities, and outcomes.
5. **Clarify technical context.** Your strongest work is buried under jargon or missing evaluation details.
6. **Make the resume’s positioning consistent.** It currently combines software engineering, ML engineering, and agent research without clearly prioritizing one.

## Header

**Jordan Lee**

- Keep the name prominent and visually distinct from the contact details.
- If “example.com/code/jordan-lee” is a portfolio, make sure the URL clearly indicates what it contains and is clickable.
- Consider adding a LinkedIn or GitHub profile only if it is polished and relevant.
- Verify that the phone number is formatted consistently with the country where you are applying.

## Education

**Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026**

- This is clear.
- If the master’s is relevant to your target roles, consider adding a specialization, thesis, or selected coursework only if it strengthens your candidacy.
- Because your internship overlaps with this degree, be prepared to clarify whether the degree is part-time, full-time, or structured around an internship. The overlap is not inherently a problem, but readers may wonder about the arrangement.

**Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022**

- This is clear.
- If you have limited professional experience, you could include academic honors or relevant coursework, but your current experience is strong enough that this probably does not need expansion.
- Keep the location format consistent across both education entries.

## Experience ordering

Your experience should generally be ordered by **most recent end date or current status**:

1. Mobility Systems Company — Oct 2024 to May 2025  
2. Eastern Robotics Co. — Aug 2022 to Jul 2024  

Your current project should also appear before the older project, which it already does.

The internship currently appears after the older full-time role, which makes the chronology look inconsistent.

## Eastern Robotics Co.

### “Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.”

Change:

- Replace the emphasis on “owned” with evidence of what ownership accomplished.
- Clarify what “two major releases” means: product releases, software versions, or platform migrations.
- Remove or tighten the clause about the on-call rotation “that used them.” It is awkward and does not demonstrate impact.
- Add measurable outcomes if available, such as reduced time to detect incidents, faster resolution, fewer recurring alerts, improved service availability, or the number of engineers using the dashboards.
- If the on-call responsibility is important, state its operational scope: team size, service criticality, incident volume, or coverage.

Why: The bullet currently communicates responsibility but not value. Recruiters will understand that you maintained dashboards; they need to know what improved because you did so.

### “Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.”

Change:

- Keep this bullet; it is one of your strongest.
- Add the approximate percentage reduction if space allows, but do not replace the absolute numbers.
- Clarify the traffic or test conditions under which the latency was measured.
- Make clear whether the build gate was part of the same change or a separate follow-up improvement.
- If the cache introduced invalidation or consistency considerations, mention them only if relevant to the target role.

Why: It has a clear intervention, strong before-and-after metrics, and an engineering-quality safeguard. The missing context is mainly scale and measurement validity.

### “Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.”

Change:

- Clarify what “maintained” involved; it is less compelling than the automation work.
- Specify what the regression checks tested, such as model accuracy, latency, data quality, or compatibility.
- Explain whether the release-cycle improvement was caused solely by the checks or also by other pipeline changes.
- Add the approximate number of models, releases, or engineers affected if available.

Why: The two-week-to-three-day improvement is strong, but the bullet does not show the scope or explain what you changed beyond “adding automated regression checks.”

### “Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.”

Change:

- Split this into separate bullets or remove secondary details.
- The migration, logging-library rewrite, onboarding, on-call work, and dispatch improvement are too many distinct contributions for one line.
- Prioritize the service migration and its operational outcome.
- Quantify the nightly backlog before and after the change if possible.
- Clarify whether the logging-library rewrite was necessary for the migration or a separate project.
- Move onboarding and weekend on-call details elsewhere unless the role specifically values leadership or operations.

Why: The bullet contains valuable work, but the density makes it difficult to identify your main contribution. It also risks sounding like several unrelated achievements compressed together.

## Mobility Systems Company

### “Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.”

Change:

- Clarify what “branch” means. It may refer to a workflow, product path, model pipeline, or software branch, and the current term is ambiguous.
- Explain your individual contribution: feature extraction, model development, service integration, deployment, or workflow design.
- State the initial and final backlog counts if available, not only the percentage.
- Clarify whether the 68% reduction was measured against a comparable period and whether case volume changed.
- Keep the 800+ signal figure if it demonstrates meaningful scale.

Why: This is a strong impact bullet, but “branch” and “ML-extracted features” are not sufficiently precise. The backlog result needs enough context to be credible.

### “Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.”

Change:

- Keep the before-and-after accuracy figures.
- Identify the relevant baseline more explicitly: previous model, unadapted model, or production system.
- Clarify what “accuracy” means if the task involves multiple labels, abstentions, or tool-use outcomes.
- Consider whether the details about validated trajectories and loss masking are useful for the role you are targeting. They are valuable for an ML or LLM-focused position but may be too specialized for a general software role.
- Add whether the result was statistically stable across repeated runs or evaluation slices if available.

Why: The measurable improvement is compelling. The main issue is that the technical method is more specific than the evaluation context, so readers may not know how meaningful the eight-point gain is.

### “Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.”

Change:

- Clarify the apparent tension between “single-request” inference and “dynamic batching.” Explain the workload or traffic pattern under which dynamic batching applied.
- Add the before-and-after latency values if available.
- Specify the hardware or serving stack if it is relevant to the role.
- Clarify whether accuracy or throughput changed as a tradeoff.

Why: The result is useful, but the wording may make technically informed readers question how batching benefited single-request latency.

### “Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.”

Change:

- Clarify the grammatical subject and the exact intervention that produced the reduction.
- Add the baseline and final latency, not only the percentage.
- Explain whether the 5% improvement was statistically meaningful or measured over a sufficiently large evaluation set.
- Decide whether all three training details are necessary. The current density makes the outcome difficult to find.
- If the main value was not latency but improved tool-use quality or cost, include that more important outcome instead.

Why: This bullet uses substantial jargon but reports a relatively small and unexplained gain. It needs clearer attribution and a stronger connection between the training method and the measured result.

### “Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.”

Change:

- Add a measurable result: fewer failed runs, lower reward variance, faster convergence, improved reproducibility, or reduced compute.
- Clarify whether using one rollout was your final approach or a diagnostic step.
- Explain why this was beneficial despite reducing sampling diversity.
- Consider combining it with the previous bullet only if both describe the same experiment and the combined bullet remains readable.

Why: The bullet describes a technical choice, not its consequence. Without an outcome, readers cannot judge whether the stabilization mattered.

### “Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.”

Change:

- Clarify how broadly the runbook was adopted and whether it changed operational behavior.
- Add an outcome such as reduced review ambiguity, faster escalation, fewer inappropriate automated decisions, or improved onboarding.
- Use the same terminology for the triage workflow throughout the resume; “branch” is currently ambiguous.

Why: This shows cross-functional and operational impact, which is valuable. It needs a more concrete result to match the technical bullets.

## Projects

### “Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present”

Change:

- “Owner” is acceptable for an independent project, but clarify whether this is a personal project, open-source project, research project, or internal work.
- If it is open source, include adoption or repository information. If it is personal, make that clear.
- The technology line should distinguish languages, frameworks, infrastructure, and concepts more consistently.
- Make sure “Present” is accurate and that the project is active enough to support the claims below.

### “Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.”

Change:

- Replace the vague concepts with measurable evidence.
- “AI-first engineering practices,” “accelerating delivery,” and “improving outcomes” are all broad claims without proof.
- Specify what was adopted, by how many people or teams, and what changed in delivery time, defect rate, throughput, or developer productivity.
- If you cannot quantify adoption or outcomes, remove this bullet.

Why: This is currently the weakest project bullet because it sounds like a general leadership claim rather than a demonstrated achievement.

### “Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.”

Change:

- Correct the percentage. A decrease from 900 ms to 600 ms is a **33.3% reduction**, not 50%.
- Decide whether to emphasize the absolute reduction, the percentage reduction, or both, but ensure they agree.
- Clarify the benchmark or production workload used for the p95 measurement.
- Explain whether caching affected freshness, correctness, or cache-hit rate if those were important considerations.
- Distinguish between cached tool results and reused sub-agent answers if they had separate effects.

Why: The underlying result is strong, but the incorrect arithmetic is a serious credibility issue.

### “Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.”

Change:

- Call this a **12 percentage-point increase**, or use the correct relative percentage if you intend to describe relative growth. From 71% to 83% is about a 16.9% relative increase.
- State the benchmark size, task types, or number of evaluation runs.
- Clarify whether retries increased latency, tool calls, or cost.
- Explain why preserving partial context improved completion rather than simply retrying.
- Include uncertainty or repeatability information if the benchmark is small.

Why: The result is compelling, but the percentage terminology is incorrect and the evaluation context is missing.

## Research-Agent Evaluation Framework

### “Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.”

Change:

- Keep this; it demonstrates external contribution and adoption.
- Clarify whether you designed, implemented, tested, or maintained the metrics.
- Include the framework’s approximate user or contributor scale if it is publicly meaningful.
- Verify that “default benchmark for every release” remains accurate and is not overstated.

Why: This is one of your best bullets because it shows durable adoption beyond your own codebase.

### “Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.”

Change:

- Clarify what variable the correlation measures and whether the relationship is positive or negative.
- Explain what “injected degradation” means in the evaluation setup.
- Distinguish whether citations, sources, and claims were removed in separate trial groups.
- Add the evaluator or baseline being compared if that strengthens the result.
- Consider including a significance or confidence measure if available.

Why: The quantitative result is sophisticated, but readers may not understand what the 0.89 correlation demonstrates without the evaluation setup.

### “Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.”

Change:

- Clarify what “stability,” “sourcing,” and “parameter handling” refer to.
- Explain whether the defects affected evaluation accuracy, reproducibility, runtime failures, or user-visible behavior.
- If possible, quantify the benefit after the fixes.
- Be precise about your role in the upstream fixes: diagnosis, patch contribution, review, or issue reporting.

Why: This demonstrates debugging skill, but “structural pipeline defects” and the category labels are abstract. The reader needs to understand the practical consequence.

## Skills

### “Programming: Python, TypeScript, Git”

Change:

- Do not list Git as a programming language. Put it under tools or development practices.
- Consider adding languages, libraries, databases, cloud systems, CI systems, queues, or deployment technologies that are genuinely demonstrated in your experience.
- Avoid listing only broad tools if you have more specific technologies available.

Why: The category is technically inaccurate and undersells your engineering background.

### “ML & Agents: PyTorch, LoRA, GRPO, agent evaluation, Kubernetes”

Change:

- Separate frameworks and tools from methods and areas of expertise.
- “LoRA” and “GRPO” are techniques; PyTorch and Kubernetes are technologies; agent evaluation is a domain. A clearer skill taxonomy would make the section easier to scan.
- Include technologies that appear prominently in the experience section, if applicable, such as model serving, CI/CD, event queues, inference optimization, or observability.
- Only retain Kubernetes if you can discuss meaningful hands-on work with it. It does not appear elsewhere in the resume.
- Standardize capitalization and naming across the skills list.

Why: The current skills section is short but uneven. It omits some of your strongest demonstrated capabilities while listing a technology that the experience section does not support.

## Additional consistency issues

- Use consistent hyphenation and line wrapping. The copied text contains breaks such as “on- call,” “regression checks,” and “model” split across lines. Make sure the actual PDF does not display broken words.
- Use consistent terminology for “diagnostics triage branch,” “runtime,” “tool calls,” and “sub-agent.” Define specialized terms once if the target audience may not know them.
- Your experience bullets are strongest when they include before-and-after numbers. Apply that standard to the vague bullets.
- Consider tailoring the resume toward one primary target:
  - **ML/LLM engineering:** retain the GRPO, tool-use, evaluation, and inference details.
  - **Software/platform engineering:** emphasize latency, queues, CI, services, observability, and reliability; reduce specialized training terminology.
  - **Research engineering:** retain the evaluation methodology and training details, but add experimental rigor and reproducibility information.
- The resume already has strong evidence of impact. The main problem is not lack of achievement; it is that several achievements are either mathematically inconsistent, overloaded, or insufficiently contextualized.