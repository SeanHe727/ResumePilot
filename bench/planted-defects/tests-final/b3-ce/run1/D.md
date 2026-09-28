# Resume review

**Assumed target:** Applied ML / LLM-agent engineering, inferred from your internship and projects. Without a job description or target company, I can’t reliably assess company-specific fit, extract actual JD keywords, or estimate interview odds. I also only have the text, so I can’t judge the visual layout or page balance.

**Overall:** You have strong, measurable engineering work and unusually relevant agent/LLM experience. The main fixes are to correct a metric inconsistency, improve chronology and clarity, and make the resume’s target role easier to recognize at a glance.

## Highest-priority changes

1. **Correct the Agent Runtime Suite latency claim.** The reduction from 900 ms to 600 ms is one-third, not 50%. This is the clearest credibility issue in the resume.
2. **Put experience in reverse chronological order.** The May 2023–July 2024 role currently appears above the October 2024–May 2025 internship.
3. **Add a concise summary or target-role headline.** There’s no quick explanation of how your robotics, ML, and agent work fit together. A recruiter has to infer your direction from the experience and projects.
4. **Fix the grammar and tense error in the CI bullet.** “Maintained” is paired with “adds”; the tense mismatch makes the bullet look insufficiently proofread.
5. **Clarify percentage claims and measurement context.** Several results need to distinguish percentage points from percent change and give enough context to be interpretable.
6. **Replace or substantiate the generic first project bullet.** It claims broad impact but gives no concrete outcome, measure, or specific contribution.

## Changes to make, section by section

### Header and education

- **Add a target-facing headline or brief summary near your contact details.** Your strongest current signal is applied ML/agent engineering, but the resume opens with education and never states the role you’re pursuing.
- **Check that the portfolio link leads to relevant, accessible work.** For project-heavy roles, a working link can substantiate the agent-runtime and evaluation claims. If the address is anonymized here, no change is needed.
- **Keep the expected graduation date, and make the degree status unambiguous.** You list the M.S. as expected in June 2026, which is useful; ensure it remains accurate when you submit.
- **Use consistent location conventions.** The education and job locations mix “USA” and “Country.” If “Country” is redaction, ignore this; otherwise use consistent, specific location formatting.

### Experience: Eastern Robotics Co.

- **Move this role below the later internship.** Reverse chronology helps readers find your most recent experience quickly.
- **Diagnostics dashboards:** Keep the quantified detection-time result, but clarify what the monitoring work covered and whether the reduction was measured after deployment. This helps readers understand the scope and credibility of the impact.
- **Latency reduction:** State the measurement context clearly—especially the workload or test conditions behind the p95 values. The cache, batching, and build-failing load tests are good evidence of engineering discipline; make sure the result and validation method are easy to distinguish.
- **CI pipeline:** Correct the tense mismatch and clarify your individual contribution to the pipeline and regression checks. As written, it is unclear whether you maintained an existing system, added checks, or both.
- **Fleet migration:** This bullet combines migration, library work, onboarding, on-call duties, and an operational result. Separate or prioritize these contributions so the most relevant technical change and its outcome aren’t buried. Also make clear whether the nightly backlog disappeared entirely or was reduced.

### Experience: Mobility Systems Company

- **Consider making this the first experience entry.** It is more recent and more directly aligned with the inferred ML/agent target.
- **Diagnostics triage:** Preserve the 68% backlog reduction, but specify what “pending-case backlog” measures and the comparison period or baseline. Also clarify your role in launching the system.
- **Diagnostic accuracy:** The change from 71% to 79% is an **8-percentage-point** increase. Avoid wording that could be read as an 8% relative gain. Keep the held-out-set detail; it supports the claim.
- **Edge inference:** A 40% latency reduction is useful, but include the before-and-after latency or otherwise define the baseline and workload. “Single-request” alongside “dynamic batching” may prompt questions about whether requests were concurrent, so explain the evaluation setup.
- **GRPO latency bullet:** The opening construction is grammatically awkward, and the sentence makes the method and result harder to parse. Clarify what you implemented, what the 5% measures, and how you established the comparison. The detailed method is valuable, but should not obscure the outcome.
- **Sparse-reward training bullet:** Explain what improved when you used one rollout per prompt—such as a measured stability or training outcome—or make the bullet’s purpose clearer. As written, it describes a procedural choice without showing its effect.
- **Runbook bullet:** Clarify the extent of your authorship and adoption. “They adopted them as the team’s runbook” is a useful operational result, but readers may want to know whether this was a formal team-wide adoption or a narrower use by on-call reviewers.

### Projects

- **Reconsider the order of sections for the target role.** The projects are highly relevant to agent engineering and include current work. Depending on the roles you target, placing projects before less directly relevant experience could bring your strongest evidence forward.
- **Agent Runtime Suite, first bullet:** Replace the broad claim about “AI-first engineering practices” with evidence of what you personally built or changed and a concrete outcome. In its current form, it sounds generic and is weaker than your other project bullets.
- **Agent Runtime Suite, latency bullet:** Correct the 900-to-600 ms reduction claim; the stated percentage is mathematically inconsistent. Also ensure the latency metric refers specifically to tool-call latency, not overall task latency.
- **Agent Runtime Suite, completion rate:** The move from 71% to 83% is a **12-percentage-point** increase. State the benchmark scope and test conditions clearly enough for someone to judge whether the result is robust.
- **Evaluation Framework, contribution bullet:** Keep the default-benchmark adoption; it is a strong open-source impact signal. Make sure “upstreamed” accurately reflects your role and that the default behavior is still current.
- **Evaluation Framework, correlation bullet:** Explain what the correlation indicates about evaluator behavior, not just the statistic. This is a technical result, but without context a reader may not know why 0.89 is meaningful.
- **Evaluation Framework, defect bullet:** Clarify whether you identified and traced the defects or also contributed to the fixes. The sentence currently says each was fixed upstream but leaves your part in that outcome implicit.

### Skills

- **Broaden the skills section to reflect tools and methods already demonstrated in your experience, if you can substantiate them.** The current list is sparse relative to the resume: it mentions Python, TypeScript, Git, PyTorch, LoRA, GRPO, and agent evaluation, but not several areas suggested by your bullets, such as model serving, inference optimization, CI, APIs, or event-driven systems.
- **Group skills by recognizable capability, not only by technology or topic.** This makes it easier for recruiters and screening systems to find relevant engineering and ML skills.
- **Don’t add tools merely because a project might typically use them.** The resume should only claim technologies you’ve actually used and could discuss in an interview.

## Reader-perspective assessment

- **ATS:** A genuine match rate can’t be calculated without a job description. The resume does contain useful terms for applied ML and agent roles—such as PyTorch, LoRA, GRPO, inference, and agent evaluation—but some relevant engineering capabilities appear only in bullets rather than in the skills section.
- **Recruiter glance:** **Maybe.** The education and experience are credible, but there is no headline or summary to immediately identify your target role. The reversed experience chronology also hides your most recent role.
- **HR screen:** **Borderline to positive.** The resume has measurable outcomes and relevant recent ML work. The incomplete summary and several unclear or inconsistent claims may create avoidable questions.
- **Hiring manager:** **Likely to consider, with follow-up questions.** The strongest evidence is your production-oriented robotics work, ML diagnostics work, and agent evaluation/runtime projects. They are likely to ask about metric baselines, your specific ownership, and how the GRPO work affected outcomes.
- **Technical reviewer:** **Promising, but verify the claims.** I can’t independently validate the metrics from the resume text. The latency arithmetic error needs correction; other claims should be ready to explain with dataset, workload, baseline, and attribution details.

## Provisional scorecard

These are **rough assessments against the inferred applied ML/agent-engineering direction**, not a JD-specific score. Page layout can’t be scored from pasted text.

| Dimension | Score | Main reason |
|---|---:|---|
| ATS keyword match | Not scorable | No job description to compare against |
| Summary | 4/10 | No summary or target-role statement |
| Skills section | 6/10 | Relevant core skills, but limited coverage and grouping |
| Bullet quality | 7/10 | Strong metrics and technical detail; some unclear, generic, or inconsistent claims |
| Publication selection | N/A | No publications listed; relevance depends on the target role |
| Narrative coherence | 6/10 | Strong individual experience, but the target identity is implicit and chronology needs fixing |
| Page fill and visual | Not scorable | Text only; no layout or page rendering |
| Credibility signals | 7/10 | Good quantified outcomes and open-source adoption, with one arithmetic error and several claims needing context |

## Interview bridges to prepare

No canned interview lines are included, per your request. Be ready to explain:

- How the robotics monitoring and fleet work transfers to reliability and observability for ML/agent systems.
- How the diagnostics triage work connects model performance to a real operational workflow.
- How you measured the accuracy and latency results, including baselines, test conditions, and your individual contribution.
- Why one rollout per prompt improved—or was intended to improve—sparse-reward training stability.
- How your evaluation metrics and defect tracing improved the reliability of a research-agent benchmark.
- What changed in the Agent Runtime Suite beyond the reported metrics, and how you know those changes caused the results.

**Verdict:** Fix the metric inconsistency, reverse the experience order, add a clear target-role signal, and tighten the bullets whose measurement or ownership is ambiguous. Those changes will make the existing evidence easier to trust and interpret without changing the substance of your experience.