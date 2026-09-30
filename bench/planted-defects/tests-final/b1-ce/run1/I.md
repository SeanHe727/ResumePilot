## Highest-priority fixes

1. **Correct the two numerical claims in Agent Runtime Suite.**
   - 900 ms to 600 ms is a **33% reduction**, not 50%.
   - 71% to 83% is **12 percentage points**, not an unqualified 12%. Numerical errors undermine trust in every other metric.

2. **Move Mobility Systems Company above Eastern Robotics Co.**
   - Experience should be in reverse chronological order. The internship is more recent and more relevant to the ML-focused content of the resume.

3. **Reconcile the GRPO claims.**
   - Standard GRPO relies on multiple outputs in a comparison group. “A single rollout per prompt” appears inconsistent with that method unless groups were constructed another way. An ML interviewer is likely to challenge this.

4. **Clarify the latency claims at Mobility Systems.**
   - Dynamic batching normally helps throughput and latency under concurrent load, not isolated single-request latency. The 40% and 5% reductions also appear to describe different layers but currently sound duplicative.

5. **Remove or substantiate the generic “AI-first engineering practices” bullet.**
   - It is the only project bullet with no concrete action, scope, or measurable evidence.

---

## Header

### Jordan Lee
- **No change needed.** The name is presented clearly.

### Phone, email, portfolio/code link
- Ensure the link is a live, recognizable professional profile or repository rather than a generic landing page.
- Add a professional networking profile only if it is complete and current.
- Confirm that the phone number and email are real in the submitted version; placeholders are fine only for this review.
- Keep all links clickable in the PDF. This improves recruiter usability.

---

## Education

### Western State University
- **Mostly keep.**
- Confirm that the expected graduation date reflects your official program timeline.
- Consider adding a specialization, thesis area, GPA, or selected coursework only if it is strong and directly supports the roles you want. The degree alone does not yet explain your ML/agent focus.
- Keep date formatting consistent with every other entry.

### Eastern Institute of Technology
- **No substantive change required.**
- If “Country” is outside the country where you are applying, retain it for clarity.
- Add academic details only if they materially strengthen your candidacy; otherwise, the older degree should remain concise.

---

## Experience

### Eastern Robotics Co. — Junior Software Engineer
- Move this entire entry below Mobility Systems because it is older.
- Preserve the role because it provides strong production engineering and operational experience.

#### “Owned the diagnostics service’s monitoring dashboards…”
- Replace the vague ownership claim with clearer information about what you actually changed or maintained.
- Add scope such as the number of dashboards, services, alerts, incidents, or users if available.
- Add an operational result if possible. “Across two major releases” describes duration but not impact.
- Fix the forced line break in “on-call.” A compound word should not split awkwardly in the final PDF.

#### “Reduced p95 API latency from 420 ms to 180 ms…”
- **Keep this as one of your strongest bullets.**
- Clarify the load-test conditions if space allows, particularly request volume or concurrency. Latency numbers are more credible when the test environment is defined.
- Make sure both caching and sensor-read batching materially contributed; otherwise, avoid implying equal causality.
- Retain the regression threshold because it shows the improvement was protected, not merely measured once.

#### “Maintained the CI pipeline…”
- Reduce emphasis on “maintained,” which understates the automated regression work.
- Specify what the regression checks validated, especially if they covered accuracy, performance, safety, packaging, or deployment behavior.
- Clarify whether “2 weeks to 3 days” means release cadence, engineering lead time, or validation duration. “Release cycle” is ambiguous.
- Keep the before-and-after metric; it is strong.

#### “Migrated 30 robot-fleet services…”
- Split this into two bullets. It currently combines service migration, queue architecture, logging-library work, onboarding, on-call ownership, backlog removal, and dispatch impact.
- Keep the service migration and backlog result together because they have a clear causal relationship.
- Separate the logging, onboarding, and operational leadership material if those points are important.
- Quantify the backlog or dispatch improvement if possible. “Removed” is absolute and may invite questions unless the backlog truly reached zero.
- Explain the scale of the event queue or fleet if available; migrating 30 services is impressive but lacks operating context.

---

### Mobility Systems Company — Machine Learning Engineering Intern
- Move this above Eastern Robotics.
- If the internship was part-time during your master’s program, consider indicating that only if the overlap could otherwise confuse recruiters.
- The content is technically strong, but several bullets need clearer metric definitions and less algorithmic ambiguity.

#### “Built a diagnostics triage branch…”
- Clarify what “branch” means. It may be interpreted as a source-control branch rather than a deployed workflow or system component.
- Define what a “case” is and provide the approximate starting backlog if permitted. A 68% reduction is stronger when the underlying scale is visible.
- Replace or explain “ML-extracted features,” which is too broad to communicate your technical contribution.
- Confirm that the eight-week result can reasonably be attributed to this system rather than staffing or demand changes.
- Keep the 800+ signal scope and launch outcome.

#### “Raised diagnostic accuracy…”
- Name the exact evaluation metric if it was not simple multiclass accuracy. Diagnostic systems often require recall, precision, sensitivity, or class-specific performance.
- Clarify whether the 1,200 cases were a fixed, untouched test set rather than data used during tuning.
- Make “domain adapter” more specific if confidentiality permits; the current phrase does not indicate whether this was LoRA or another method.
- Retain assistant-only loss masking only if it was an important technical decision and you can explain why it mattered in an interview.
- Consider reporting statistical uncertainty or repeated-run consistency if the eight-point gain was evaluated only once.

#### “Cut p95 latency of single-request edge inference…”
- Reconcile “single-request” with “dynamic batching.” Batching usually requires concurrent or queued requests, so the mechanism currently sounds contradictory.
- State the benchmark conditions: hardware, concurrency, batch behavior, sequence size, or request volume.
- Distinguish the effects of INT8 quantization and batching if both were introduced. Otherwise, the claimed cause is difficult to assess.
- Clarify whether the 40% refers to model inference time, service latency, or end-to-end latency.

#### “Using grouped tool-use rollouts… reduced end-to-end latency 5%.”
- Put less procedural detail into the setup unless all of it is necessary to demonstrate your contribution. The sentence is dense and delays the result.
- Explain why a reward containing accuracy, citation validity, and call count reduced latency. The connection is plausible but not explicit.
- Provide the latency baseline or absolute change. A 5% improvement alone is comparatively weak.
- Distinguish this end-to-end latency metric from the earlier 40% edge-inference result.
- Add the relevant quality constraint if latency improved without reducing diagnostic accuracy or citation quality.
- Use consistent comma style in the list of reward components.

#### “Stabilised GRPO training… single rollout per prompt…”
- Verify the technical description. Standard GRPO generally estimates relative advantages from multiple completions in a group, so a single rollout per prompt appears incompatible unless grouping occurred across prompts or through another mechanism.
- Replace “stabilised” with a measurable definition of stability: variance, convergence rate, failed runs, reward collapse frequency, or another concrete indicator.
- Explain why using one scored trajectory improved sparse-reward training. As written, the causal claim is not intuitive.
- If the method was not actually standard GRPO, correct the algorithm name.
- Use American spelling throughout the resume if applying in the United States; “stabilised” is currently inconsistent with the rest of the document.

#### “Documented the triage branch’s abstention rules…”
- Keep this because it demonstrates production responsibility and communication.
- Add the number or type of reviewers if meaningful.
- Add evidence of operational impact if available, such as fewer incorrect escalations, faster reviews, or improved incident handling.
- Again, clarify “branch” if it refers to a deployed triage path rather than source control.

---

## Projects

### Agent Runtime Suite — Owner
- Clarify whether this is a personal project, open-source project, research project, or internal platform. “Owner” alone does not establish context.
- Include a repository or demonstration link if it is publicly available.
- If other people use it, provide adoption scale.

#### “Drove adoption of AI-first engineering practices…”
- Remove this bullet unless you can attach specific actions and measurable outcomes.
- “AI-first,” “accelerating delivery,” and “improving outcomes” are broad claims without evidence.
- Avoid claiming platform-wide influence unless you can show the number of teams, users, workflows, or releases affected.
- This bullet is much weaker than the two technical bullets beneath it.

#### “Cut p95 tool-call latency from 900 ms to 600 ms, a 50% reduction…”
- Correct the arithmetic: the reduction is approximately **33%**.
- Define the benchmark conditions and cache hit rate if available.
- Clarify whether reused sub-agent answers were semantically validated or invalidated when context changed. Interviewers may ask about correctness risks.
- State whether the latency figure covers all calls or only cache-eligible calls.

#### “Raised the runtime’s task-completion rate by 12%… from 71% to 83%…”
- Change “12%” to **12 percentage points**. The relative improvement is approximately 16.9%.
- Define the benchmark suite and number of tasks.
- State whether results were measured on a fixed test set and whether retries increased latency or cost.
- Clarify the maximum retry policy to show that the gain was controlled rather than obtained through unlimited attempts.
- Keep the before-and-after values because they make the claim easy to evaluate.

---

### Research-Agent Evaluation Framework — Contributor
- Clarify the project’s status and include a repository or contribution link if public.
- The bullets are strong overall and demonstrate open-source impact, evaluation design, and debugging.

#### “Upstreamed 8 citation and faithfulness metrics…”
- Keep this bullet.
- Verify that all eight were accepted upstream and remain in the default benchmark. Do not imply continued default use unless you have confirmed it.
- Clarify whether you designed the metrics, implemented existing definitions, or both.
- Add project adoption or release scale only if readily available.

#### “Showed the evaluator tracks injected degradation…”
- Specify the Kendall correlation variant if technically relevant.
- Clarify what was ranked or correlated; currently, readers know the degradation types but not the exact comparison.
- State whether 0.89 was statistically stable across repeated trials or degradation categories if that evidence exists.
- Keep the 400+ trial count and the controlled-degradation design.

#### “Traced 3 structural pipeline defects…”
- Explain the impact of the defects rather than describing them only as “stability, sourcing and parameter handling.”
- Clarify what “sourcing” means in this system.
- Replace “to their modules” with a more precise description of the localization or debugging result.
- If all three fixes were accepted upstream, retain that outcome and link to the relevant issues or pull requests when possible.
- This bullet can be valuable, but it is currently more abstract than the two preceding bullets.

---

## Skills

### Programming: Python, TypeScript, Git
- Move Git out of “Programming”; it is a development tool, not a programming language.
- Add other languages only if you can use them in an interview. Your computer and electrical engineering background may lead recruiters to expect C or C++, but do not add them without current proficiency.
- Consider including SQL if you genuinely used it; many ML engineering roles screen for it.
- Order skills by relevance and strength.

### ML & Agents: PyTorch, LoRA, GRPO, agent evaluation, Kubernetes
- Move Kubernetes into a tooling, infrastructure, or cloud category. It is not an ML or agent method.
- Separate frameworks, training methods, evaluation methods, and infrastructure so recruiters can scan the section quickly.
- Keep GRPO only after resolving the potentially inconsistent experience bullet and only if you can explain its objective, reference policy, grouping behavior, and advantage estimation.
- Add technologies directly evidenced by the bullets—such as quantization, model serving, CI, or event queues—only when they reflect genuine hands-on proficiency.
- Use consistent capitalization for named technologies and methods.

---

## Formatting and consistency

- Use reverse chronological order within every section.
- Remove manual line breaks that split phrases such as “on-call.”
- Use one spelling convention throughout; for U.S. applications, use American spelling.
- Ensure date separators and dash characters are consistent.
- Keep bullets to roughly two lines where possible; the migration and GRPO bullets are currently too dense.
- Distinguish **percent change** from **percentage-point change** everywhere.
- Make sure every metric has a clear denominator, benchmark, or operating condition.
- Preserve a one-column, ATS-friendly layout with selectable text and clickable links.