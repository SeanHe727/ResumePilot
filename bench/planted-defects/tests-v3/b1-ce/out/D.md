# Resume Review

## Overall assessment

This is a strong early-career resume for **ML systems, agent infrastructure, evaluation, or robotics software engineering**. The best evidence is unusually concrete: latency reductions, held-out evaluation results, production adoption, upstream open-source contributions, and measurable operational improvements.

The main problems are:

1. **A few quantitative claims are mathematically incorrect or imprecise.**
2. **Several bullets are vague about your direct contribution or business/engineering impact.**
3. **The resume does not clearly prioritize one target identity**: robotics software engineer, ML engineer, or LLM/agent infrastructure engineer.
4. **Some bullets are overloaded, while others omit the context needed to understand why the result matters.**
5. **The skills section claims tools that the experience does not substantiate.**

I would make the changes below without materially changing the underlying content.

---

# Section-level changes

## Header

### `example.com/code/jordan-lee`

**Change:** Make sure this links directly to the relevant code, GitHub, technical portfolio, or project page rather than a generic landing page.

**Why:** Your projects are a major differentiator, but the header currently gives no indication that the link contains substantial technical work. A recruiter will not investigate an ambiguous link deeply.

### Missing target identity

**Change:** Add a concise professional positioning line beneath your contact information, tailored to the role you want.

**Why:** The resume currently makes the reader infer whether you are targeting ML engineering, LLM/agent infrastructure, robotics software, or general backend engineering. Your evidence supports several directions, but the document needs one primary story.

Do not position yourself broadly as all of these at once. For example, the resume should make one of these the dominant identity:

- ML/AI systems engineer
- LLM and agent infrastructure engineer
- Robotics software and ML engineer
- ML platform/evaluation engineer

The choice affects which bullets should appear first and which skills deserve emphasis.

---

## Education

### Western State University M.S.

**Change:** Add the expected graduation status only if it is relevant to your target roles, and consider adding selected coursework or research only if it strengthens the chosen target.

**Why:** The degree is current and relevant, but the resume does not explain what technical direction the degree supports. For an ML/AI target, relevant coursework or research can help; for a software infrastructure target, it may add little.

### Date overlap with experience

The M.S. runs from **September 2024 to June 2026**, while the Mobility Systems internship runs from **October 2024 to May 2025**.

**Change:** Make the concurrent student/intern arrangement obvious through consistent location, enrollment, or internship formatting if needed.

**Why:** The overlap is plausible, but a reader may briefly wonder whether the dates are incorrect. This is not inherently a problem; it simply needs to look intentional.

### Eastern Institute of Technology B.S.

**Change:** Consider removing the location if space is needed and use the space for relevant academic distinction, coursework, research, or honors.

**Why:** The degree title and institution are more important than the location. This is a lower-priority change.

---

# Experience

## Eastern Robotics Co. — Junior Software Engineer

### 1. Diagnostics monitoring and on-call

> Owned the diagnostics service’s monitoring dashboards across two major releases and the on-call rotation that used them.

**Change:** Add a measurable operational outcome and clarify the scope of “owned.”

Useful details to add, if true:

- Number of dashboards, services, or engineers using them
- Number of incidents handled
- Reduction in detection or response time
- Reduction in recurring incidents
- Whether you designed, implemented, maintained, or operated the dashboards
- Whether you created alerting, runbooks, or escalation procedures

**Why:** “Owned” signals responsibility, but the bullet currently proves only that you maintained dashboards and participated in on-call. The reader cannot tell whether this improved reliability or merely represented routine maintenance.

Also, “the on-call rotation that used them” is awkward conceptually: the dashboards serve the rotation, but the rotation does not necessarily use them as an accomplishment. Make the operational relationship clearer.

---

### 2. API latency and sensor reads

> Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor reads, with load tests that fail the build if p95 exceeds 200 ms.

**Change:** Keep this bullet, but verify and clarify:

- Whether the measurements came from production, staging, or load tests
- The request volume or test conditions
- Whether the 200 ms threshold was a service-level objective or engineering threshold
- Whether the cache introduced invalidation or freshness constraints
- Whether the improvement applied to one endpoint or the diagnostics service broadly

**Why:** This is one of the strongest bullets on the resume. It combines a specific technical intervention, a strong quantitative result, and a durable regression-prevention mechanism. The only missing information is scope and measurement context.

This should remain near the top of the experience section.

---

### 3. CI pipeline for model releases

> Maintained the CI pipeline for the perception team’s model releases, adding automated regression checks that shortened release cycles from 2 weeks to 3 days.

**Change:** Specify what the regression checks tested and distinguish your direct contribution from general pipeline maintenance.

Potential dimensions to clarify:

- Model quality, latency, data validation, compatibility, or deployment checks
- Number of models or releases covered
- Whether the shortened cycle was caused primarily by your automation
- Whether the checks prevented regressions or reduced manual review

**Why:** The outcome is compelling, but “automated regression checks” is broad. For an ML infrastructure role, the reader will want to know whether this involved evaluation, deployment validation, reproducibility, data checks, or system integration.

This is a high-value bullet for ML platform roles and should be framed as engineering enablement rather than ordinary CI maintenance.

---

### 4. Fleet migration and on-call

> Migrated 30 robot-fleet services from cron jobs to an event queue while rewriting the shared logging library, onboarding two new hires and taking over the weekend on-call rotation, which removed the nightly backlogs that delayed morning dispatch.

**Change:** Split this into separate accomplishments or substantially reduce the number of claims in one bullet. Clarify which result came from which action.

The bullet currently combines:

- Migration of 30 services
- Event-driven architecture
- Logging-library rewrite
- Onboarding two hires
- Weekend on-call ownership
- Elimination of nightly dispatch backlogs

**Why:** These are all useful, but together they create causal ambiguity. It is not clear whether the event queue, logging rewrite, on-call work, or all three removed the backlog. It also makes your most technically significant work harder to scan.

Prioritize the architecture migration and its operational result. Keep onboarding only if leadership or team enablement is important for the target role. Keep the on-call detail only if it demonstrates meaningful reliability ownership.

Also verify that “removed” is literally accurate. If the backlog was reduced rather than eliminated, use the more precise level of improvement.

---

## Mobility Systems Company — Machine Learning Engineering Intern

This section contains your strongest direct evidence for an AI/ML role. It should probably appear before the robotics role if your target is LLMs, agent systems, or applied ML. It is currently listed after the older job but still chronologically correct by start date only if the internship is viewed separately. The most recent completed role should generally receive the strongest visual priority.

### 5. Diagnostics triage branch

> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Change:** Clarify your ownership and define the backlog metric.

Add or clarify:

- Whether you owned the model, feature extraction, service integration, or full branch
- What “triage branch” means operationally
- Number of cases processed
- Whether the 68% reduction was measured against a baseline period
- Whether the reduction improved turnaround time, reviewer workload, or customer response

**Why:** The bullet has excellent scale and impact, but “triage branch” is company-specific language that an external reader may not understand. The 68% result is strong, but the reader needs to know what was reduced and why it mattered.

This should be one of the first bullets for an applied ML or ML systems role.

---

### 6. Diagnostic accuracy and domain adapter

> Raised diagnostic accuracy on 1,200 held-out cases from 71% to 79% by fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Change:** Correct the interpretation of the result and define the evaluation setup.

You should clarify:

- Whether the improvement is 8 percentage points or an approximately 11% relative improvement
- What “accuracy” means for this diagnostic task
- What model or base system was adapted
- Whether the 1,200 cases were truly held out from training and tuning
- What “validated tool-use trajectories” means to a reader outside your team
- Why assistant-only loss masking was important

**Why:** This is technically impressive but highly specialized. A hiring manager in LLM systems may understand it; a general ML recruiter probably will not. The resume should preserve the technical specificity while making the experimental claim auditable.

Do not describe an 8-point increase as a 12% increase unless you explicitly mean relative improvement. The resume currently avoids that problem here, but the distinction should remain consistent throughout.

---

### 7. INT8 inference and dynamic batching

> Cut p95 latency of single-request edge inference by 40% by serving the INT8 engine with dynamic batching.

**Change:** Add the baseline and clarify the apparent tension between “single-request” inference and “dynamic batching.”

**Why:** Dynamic batching usually groups multiple requests, while “single-request edge inference” may imply one request at a time. The claim may be correct, but a technical reviewer could ask whether batching was applied across concurrent single-request arrivals or whether the wording is imprecise.

Also add, if available:

- Baseline and final latency
- Hardware or edge environment
- Throughput impact
- Accuracy impact, if quantization required validation

This is a strong systems bullet, but it needs enough context to be credible to an inference-engineering reviewer.

---

### 8. GRPO latency result

> Using grouped tool-use rollouts, a composite reward over accuracy, citation validity and call count, and a GRPO loop with a frozen SFT reference, reduced end-to-end latency 5%.

**Change:** Fix the sentence structure and clarify what specifically produced the improvement.

This is currently a grammatical fragment beginning with “Using.” More importantly, it lists several mechanisms without establishing:

- What system was trained
- What changed in the model or agent behavior
- Whether the 5% reduction was statistically or operationally meaningful
- Whether latency reduction came from fewer tool calls, shorter trajectories, faster inference, or another effect
- What the baseline comparison was

**Why:** The bullet contains valuable technical keywords but reads like an experiment note rather than a finished resume accomplishment. It also risks appearing keyword-dense because it names grouped rollouts, composite rewards, GRPO, and a frozen reference without enough causal explanation.

If the 5% effect is small relative to the other results, consider giving it less prominence unless it demonstrates an important research or optimization contribution.

---

### 9. Sparse-reward GRPO stabilization

> Stabilised GRPO training on sparse rewards by sampling a single rollout per prompt, so each update used exactly one scored trajectory.

**Change:** Add evidence that this change improved training in a meaningful way.

You need at least one of:

- Training stability measure
- Reduction in variance or failure rate
- Faster convergence
- Improved final evaluation
- Reduced compute or memory cost
- Explanation of why one rollout was preferable in this setting

**Why:** As written, this describes an implementation choice but not its value. A reviewer may ask whether using one rollout per prompt was a deliberate algorithmic improvement, a resource constraint, or simply a debugging workaround.

If it was mainly a practical stabilization technique, explain the observed effect. Otherwise, this bullet may be weaker than your quantified production and evaluation results.

---

### 10. Abstention rules and runbook

> Documented the triage branch’s abstention rules and escalation paths for the on-call reviewers, who adopted them as the team’s runbook.

**Change:** Add evidence of adoption or operational effect.

Possible details include:

- Number of reviewers or teams using the runbook
- Reduction in ambiguous cases
- Faster escalation or resolution
- Fewer incorrect automated decisions
- Whether the rules were incorporated into production tooling or only documentation

**Why:** This is a good reliability and deployment-safety signal, especially for AI systems. The phrase “adopted them” is useful, but the impact is not yet measurable.

Keep this bullet if you are targeting production AI, responsible deployment, or ML operations. It is less important for a purely modeling-focused role.

---

# Projects

## Agent Runtime Suite

### 11. AI-first engineering practices

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Change:** Replace this bullet with a concrete technical or adoption result from the project.

**Why:** This is the weakest bullet on the resume. It contains broad claims but no defined practice, measurable outcome, scope, or evidence of adoption. “AI-first” is also vague and increasingly generic; it does not tell a technical reviewer what you built.

If the project has meaningful users, contributors, usage, pull requests, deployment data, or productivity measurements, the bullet should focus on those facts. Otherwise, remove it and give the project more space for the two quantified engineering results below.

---

### 12. Tool-call latency

> Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction, by caching tool results and reusing completed sub-agent answers.

**Change:** Correct the arithmetic.

A reduction from 900 ms to 600 ms is approximately **33%**, not 50%. This must be fixed.

Also clarify:

- Whether the 900 ms and 600 ms values are measured under the same workload
- Whether cache hits, tool-call volume, or accuracy changed
- Whether reused sub-agent answers were validated for freshness or correctness

**Why:** The underlying result is strong, but the arithmetic error is a serious credibility problem. A technical reviewer may question the rest of the metrics after spotting it.

---

### 13. Task-completion benchmark

> Raised the runtime’s task-completion rate by 12% on the benchmark suite, from 71% to 83%, by retrying failed sub-agent calls with their partial context.

**Change:** Describe this as an 12-percentage-point increase unless you also provide the relative improvement, which is approximately 17%.

Also clarify:

- Number of benchmark tasks
- Whether the benchmark was deterministic or repeated
- Whether retries increased latency, tool calls, or cost
- Whether the result held on unseen tasks
- Whether partial-context retries introduced duplicated or inconsistent actions

**Why:** The current phrase is ambiguous because 71% to 83% is an 8? Actually, it is a **12 percentage-point increase**, and approximately a **16.9% relative increase**. This is an important distinction.

The technical intervention is clear, but the tradeoff matters. A hiring manager will want to know whether completion improved at an acceptable cost.

---

## Research-Agent Evaluation Framework

### 14. Open-source metrics contribution

> Upstreamed 8 citation and faithfulness metrics to an open-source research-agent framework, where they now run in the default benchmark for every release.

**Change:** Keep this bullet, but add your role in designing, implementing, validating, or maintaining the metrics.

Also clarify:

- Whether you were the primary contributor or one of several contributors
- The project’s approximate user or contributor scale, if meaningful
- How the metrics are used in release decisions
- Whether “default benchmark for every release” is literal and current

**Why:** This is an excellent credibility signal because it shows external adoption, not merely local experimentation. The word “upstreamed” is technically appropriate, but some recruiters may not understand its importance. The bullet should make your contribution and the adoption significance unmistakable.

Do not overstate ownership if you contributed to a larger effort.

---

### 15. Kendall correlation

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Change:** Explain what was degraded, what the evaluator score represented, and why Kendall correlation was the appropriate measure.

Clarify:

- Whether 0.89 is Kendall’s tau
- Whether the correlation was statistically significant
- Whether the trials were independent
- Whether degradation levels were ordered
- Whether the evaluator was compared with human judgments or only synthetic perturbations

**Why:** The metric is strong, but without experimental context it can look like a disconnected number. This bullet will be especially valuable for evaluation roles if it shows that the evaluator tracks controlled degradation and not just a benchmark score.

---

### 16. Pipeline defects

> Traced 3 structural pipeline defects in stability, sourcing and parameter handling to their modules with layered instrumentation; each was fixed upstream.

**Change:** Quantify or specify the consequence of the defects and clarify what “fixed upstream” means.

Useful details include:

- Whether the defects affected benchmark validity, reproducibility, or production behavior
- How many modules or code paths were involved
- Whether your fixes were merged into the main project
- Whether the instrumentation remains in use
- Whether the defects would otherwise have produced false evaluation results

**Why:** This demonstrates debugging and systems thinking, but the impact is currently implicit. The reader needs to understand why identifying the defects mattered.

This is a strong bullet for evaluation infrastructure and should remain if that is a target area.

---

# Skills

## Programming

> Python, TypeScript, Git

**Change:** Keep Python and TypeScript. Move Git into a tools/version-control category or omit it if space is limited.

**Why:** Git is expected and is not a differentiating skill. The current grouping makes the section look less deliberate.

If you have used relevant tools that are directly evidenced in the bullets—such as Linux, Docker, CI systems, cloud services, message queues, or profiling tools—consider including only those that are genuinely important to the target role.

## ML & Agents

> PyTorch, LoRA, GRPO, agent evaluation, Kubernetes

**Change:** Reorganize the skills into technically meaningful groups and ensure every emphasized skill is supported by the resume.

Specific points:

- **PyTorch:** Keep if you used it directly in the modeling or training work.
- **LoRA:** Keep if the domain adapter used LoRA or an equivalent parameter-efficient method.
- **GRPO:** Keep; it is supported by multiple bullets and is a strong differentiator.
- **Agent evaluation:** Keep, but the projects should make this capability visibly central.
- **Kubernetes:** Either add supporting experience or remove it. It currently appears only in skills and nowhere in the accomplishments.

**Why:** A skills section should reinforce evidence, not introduce unsupported keywords. Kubernetes is especially likely to be tested in an interview if listed, so the resume should show what you did with it.

You may also be missing skills that are more strongly supported by the experience, such as:

- Event-driven systems
- CI/CD and release automation
- Inference optimization
- Quantization
- Caching and batching
- Observability
- Evaluation methodology
- Open-source contribution

Only add these if you have enough technical depth to discuss them.

---

# Narrative and ordering

## Choose the primary story

The resume currently contains three compelling stories:

1. **Production robotics and distributed systems**
2. **Applied ML and inference optimization**
3. **LLM agents, reinforcement learning, and evaluation**

They are related, but the document does not yet tell the reader which one is the central direction.

**Change:** Choose the target role first, then prioritize the resume accordingly.

### If targeting LLM/agent infrastructure

- Put the Mobility Systems internship and Agent Runtime project at the center.
- Keep the robotics role as evidence of production reliability and distributed systems.
- Emphasize evaluation, tool use, latency, inference, and deployment.
- Reduce less relevant robotics operational detail if space is limited.

### If targeting robotics ML or autonomous systems

- Lead with the robotics role.
- Explain how the Mobility Systems work applies to diagnostics, sensor systems, and edge inference.
- Make the connection between perception pipelines, sensor data, model releases, and production operations clearer.
- The agent-specific terminology should not dominate the document.

### If targeting ML platform or evaluation engineering

- Lead with CI/model release automation, the evaluation framework, production diagnostics, and runtime systems.
- Make reproducibility, regression detection, benchmark validity, and deployment reliability prominent.
- Treat GRPO details as supporting evidence rather than the main identity.

---

# Quantitative and credibility audit

These items must be corrected or verified:

| Claim | Issue | What to change |
|---|---|---|
| 420 ms to 180 ms | Correct reduction is approximately 57%; no issue if no percentage is stated | Add measurement context if available |
| 2 weeks to 3 days | Plausible, but causal scope is unclear | Clarify what the automation changed |
| 68% backlog reduction | Strong but undefined | Define the backlog and baseline |
| 71% to 79% accuracy | 8 percentage points; relative improvement is about 11% | Define accuracy and evaluation setup |
| 40% latency reduction | Plausible | Add baseline, hardware, and workload |
| 5% end-to-end latency reduction | Small and causally unclear | Explain the mechanism and significance |
| 900 ms to 600 ms | **Not a 50% reduction; approximately 33%** | Correct the percentage |
| 71% to 83% task completion | 12 percentage points; relative improvement about 17% | Use precise terminology and state tradeoffs |
| Kendall correlation 0.89 | Strong but context-light | Identify the score, perturbation design, and validation |
| 3 defects fixed upstream | Good contribution signal | Explain the impact on benchmark or pipeline reliability |

---

# Reader-by-reader assessment

## ATS

There is no job description, so an exact keyword match rate cannot be calculated.

For likely ML/agent infrastructure roles, the resume already contains strong terms including:

- Python
- TypeScript
- PyTorch
- LoRA
- GRPO
- model releases
- CI
- inference
- quantization
- dynamic batching
- tool use
- agent evaluation
- Kubernetes
- event queues
- latency optimization

**Main ATS risk:** The resume may be interpreted as either robotics software or LLM research depending on the job, because the target identity is not explicit.

**Change:** Align the title/summary, skills order, project order, and first bullets with one target role.

## Recruiter glance

**Verdict: Maybe to Forward**, depending on the target role.

**Strengths:**

- Relevant current M.S.
- Recent ML engineering internship
- Several impressive quantitative results
- Strong project evidence
- Production engineering background

**Concern:** A nontechnical recruiter may not know whether you are a software engineer, ML engineer, research engineer, or agent systems engineer.

**Change:** Make the intended role obvious before the reader reaches the detailed bullets.

## HR screen

**Verdict: Likely phone screen for ML engineering or AI infrastructure roles.**

The basic qualifications are credible, but the resume would be stronger if:

- The most relevant internship/project appeared more prominently
- The vague project bullet were removed or replaced with evidence
- The mathematical error were corrected
- Your skills matched your demonstrated experience more closely

## Hiring manager

**Verdict: Interview for an ML systems, agent infrastructure, or evaluation role; more uncertain for a pure research role.**

The hiring manager will likely notice:

1. You have shipped measurable production systems.
2. You can work across model quality, inference latency, evaluation, and infrastructure.
3. You have unusual exposure to GRPO and tool-using agents.
4. Some bullets need more experimental context.
5. The resume may be trying to cover too many role types.

**Likely first interview question:** They will probably ask you to explain one of the GRPO or tool-use experiments in detail, including the baseline, evaluation design, failure modes, and why the chosen intervention worked.

## Technical reviewer

**Verdict: Strong potential, with credibility concerns caused mainly by metric precision and underspecified experiments.**

The technical reviewer will likely probe:

- The 50% latency claim
- The task-completion percentage terminology
- The relationship between dynamic batching and single-request latency
- The causal basis of the 5% GRPO latency improvement
- The evaluation methodology behind the Kendall correlation
- Whether the open-source contributions were individual or collaborative

Fixing these issues before submission will materially improve trust.

---

# Highest-priority changes

## Tier 1: Do these first

1. **Correct the 900 ms to 600 ms claim.**  
   The reduction is approximately 33%, not 50%. This is the most urgent credibility fix.

2. **Clarify your target role and reorder the resume around it.**  
   The current document supports several paths but does not select one.

3. **Remove or replace the vague “AI-first engineering practices” bullet.**  
   It is generic, unsupported, and weaker than your other evidence.

4. **Clarify the evaluation context for the 71% to 79% accuracy result.**  
   This is one of your best ML accomplishments, but it needs a clear definition of the metric and experimental setup.

5. **Resolve the overloaded fleet-migration bullet.**  
   Separate architecture migration, logging-library work, onboarding, and on-call ownership so the reader can understand the causal story.

6. **Add measurable outcomes to the monitoring-dashboard and runbook bullets.**  
   Both currently describe responsibility more than impact.

7. **Explain the GRPO experiment results rather than listing methods.**  
   The technical terms are strong, but the contribution and outcome are not yet sufficiently clear.

## Tier 2: Important improvements

1. Define “triage branch,” “pending-case backlog,” and “diagnostic accuracy.”
2. Add baseline and workload details to the inference-latency result.
3. Explain the cost or latency tradeoff of partial-context retries.
4. Add the impact of the three upstream defects.
5. Make open-source ownership and adoption more precise.
6. Move or substantiate Kubernetes.
7. Group skills by actual technical areas rather than placing Git with programming languages.
8. Make the concurrent M.S. and internship dates clearly intentional.

## Tier 3: Lower priority

1. Remove redundant locations if space is tight.
2. Reduce generic tools such as Git from the skills section.
3. Standardize terminology around percentage points versus relative percentage improvement.
4. Check line wrapping in the rendered document, particularly the broken “on-call” line.
5. Use consistent punctuation and capitalization across bullets.

---

# Interview bridge points

Prepare to connect the different parts of the resume verbally:

| Resume topic | What it demonstrates | What to be ready to explain |
|---|---|---|
| Robotics diagnostics monitoring | Production observability and operational ownership | How the dashboards changed detection, response, or reliability |
| API latency reduction | Backend performance engineering | Cache design, invalidation, batching behavior, and measurement methodology |
| Model-release CI | ML platform and deployment reliability | What regressions were tested and how release time improved |
| Sensor-signal triage | Applied ML in a production workflow | Feature extraction, error modes, backlog definition, and deployment impact |
| GRPO and tool-use training | Modern agent optimization | Reward design, rollout strategy, training stability, and evaluation |
| Agent runtime | Distributed agent systems and performance | Cache correctness, sub-agent answer reuse, retries, and benchmark tradeoffs |
| Evaluation framework | Benchmark design and open-source engineering | Why the metrics are valid, how degradation was injected, and how upstream adoption occurred |

---

## Bottom line

Do not rewrite the resume wholesale. The underlying experience is strong. Focus on:

- Correcting the quantitative inconsistencies
- Choosing one primary target role
- Replacing generic claims with evidence
- Clarifying experimental and production context
- Separating overloaded bullets
- Making each accomplishment show both **what you did** and **why the result mattered**

After those changes, the resume should be competitive for ML systems, agent infrastructure, evaluation engineering, and related applied AI roles.