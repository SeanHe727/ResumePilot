# Résumé review

**Inferred target:** ML / AI systems engineering, with a strong emphasis on agent systems, evaluation, and production diagnostics. Without a job description, this is a general review—not a company-specific or true ATS-match assessment. I’ve focused on what to change and why; I haven’t rewritten your lines.

## Highest-priority changes

1. **Correct the latency arithmetic in the Agent Runtime Suite.** A drop from 900 ms to 600 ms is a **33% reduction**, not 50%. This is the clearest credibility issue in the résumé.
2. **Put experience in reverse chronological order.** The May 2025 internship should appear before the role that ended in July 2024.
3. **Replace or remove the first Agent Runtime Suite bullet.** It makes broad claims about adoption and improved outcomes without saying what changed or showing evidence.
4. **Make the target role immediately clear.** There’s no headline or summary, so a recruiter must infer your focus from the entries below.
5. **Clarify overlapping 71% figures.** The internship reports accuracy rising from 71% to 79%, while the project reports task completion rising from 71% to 83%. These may be unrelated metrics, but readers could mistake them for the same result.
6. **Resolve overloaded or unclear technical bullets.** A few combine multiple contributions or leave the measurement context unclear, making it harder to judge your individual impact.

## Section-by-section feedback

### Header and education

- **Header:** Add your target professional focus near the top; without it, your ML, agent, and systems work competes for attention. Whether to include location or work authorization depends on the roles you’re applying for and what is relevant to them.
- **Western State University:** Keep the expected graduation date clear and consistent with the rest of the date formatting. Relevant coursework is worth including only if it helps establish qualifications for a role.
- **Eastern Institute of Technology:** The entry is clear. If you’re applying for experienced roles rather than student or new-grad positions, consider whether education needs to precede experience; your work and project evidence may be more persuasive up front.

### Eastern Robotics Co.

- **Monitoring dashboards and on-call:** The ownership signal is useful, but this bullet doesn’t show the scale of the dashboards, what you changed, or what improved for the people using them. As written, the on-call responsibility takes up space without showing its operational impact.
- **Latency reduction:** This is one of your strongest bullets: it has a baseline, outcome, technical approach, and a build-time performance guardrail. Preserve those elements. Make sure the 200 ms threshold is clearly understood as a test limit, not the achieved latency.
- **CI and regression checks:** The release-cycle improvement is compelling. Clarify the relationship between the automated checks and the reduction from two weeks to three days, so the causal claim feels well-supported. “Maintained” may also understate your contribution if you made significant changes.
- **Fleet migration, logging library, onboarding, on-call, and backlog:** This packs several contributions into one bullet. Separate or prioritize them so the reader can identify the main result and your role in it. The final “which” clause has an unclear antecedent, and the backlog impact would be stronger with a measure if one is available. The on-call reference also overlaps with the first bullet.

### Mobility Systems Company

- **Triage branch and backlog:** Strong scale and impact. Explain what “branch” means to an outside reader, and make the connection between the system and the backlog reduction easy to follow. If you have a defensible baseline or measurement window beyond the eight weeks after launch, it could help establish the result.
- **Accuracy improvement:** Technically specific and quantified. Clarify how accuracy was measured and what the held-out cases represent; otherwise, readers may not know how comparable or meaningful the evaluation is. The loss-masking detail is relevant to an ML audience, but make sure the result remains understandable to a broader engineering reader.
- **Edge inference latency:** The 40% improvement is useful, but “single-request” and “dynamic batching” may seem at odds to readers unless the workload and measurement setup are clear. Specify the inference context and make the comparison basis unambiguous.
- **GRPO and latency:** The opening construction makes it unclear who or what produced the result. The bullet also lists several methodological details before getting to a relatively modest 5% latency change. Clarify the measurement scope and the specific contribution behind the improvement; otherwise, consider whether this much implementation detail earns its space.
- **Sparse-reward training:** The technical point is interesting, but the bullet says what you did without showing why it mattered. Explain the evidence that training became more stable, or the practical tradeoff of using one scored trajectory per update.
- **Runbook documentation:** Adoption by the on-call reviewers is a good operational outcome. The impact would be clearer if you can show what the runbook helped them do—for example, whether it improved consistency or changed escalation handling—without claiming an effect you haven’t measured.

### Projects

**Agent Runtime Suite**

- **AI-first practices:** This is the least informative bullet in the résumé. “Accelerating delivery” and “improving outcomes” are broad claims without an example or measure. Replace it with specific, verifiable work and its effect, or remove it.
- **Tool-call latency:** Fix the percentage calculation. Also clarify the measurement setup and whether this is a representative workload, since the absolute numbers alone do not show how broadly the improvement applies.
- **Task completion:** Distinguish the 12-point change from a 12% relative improvement, and state enough about the benchmark to make the result interpretable. Clarify whether this 71% baseline is unrelated to the internship’s 71% accuracy figure.

**Research-Agent Evaluation Framework**

- **Metrics upstreamed:** This is a strong contribution and adoption signal. Make your personal contribution clear, especially if “upstreamed” involved work shared with others.
- **Kendall correlation:** The statistic is impressive but needs a clear interpretation: readers need to know what was correlated and what the 0.89 value indicates about evaluator behavior.
- **Pipeline defects:** The investigation and upstream fixes are credible evidence of debugging skill. If available, add the practical effect of the fixes; otherwise, keep the scope of the claim precise. The phrasing currently makes the relationship between the three defects and the three named areas somewhat hard to parse.

### Skills

- The section is short relative to the technical range in your experience. Add relevant tools or areas only if you can discuss them confidently; the current list doesn’t make several parts of your experience—such as CI, inference serving, or evaluation—easy to find in a quick scan.
- Consider whether **Kubernetes** belongs under the current “ML & Agents” heading. The group names should make technical areas easy to scan, rather than mixing infrastructure with methods and concepts.
- **Git** is a low-distinction item for many engineering roles. Use the space for skills that better differentiate you, if accurate.
- Keep skill entries consistent in specificity: tools, methods, and broad capabilities are currently mixed together.

## Domain and reader assessment

### Likely reviewer

For the inferred target, the first technical reader is likely an ML or software engineering manager looking for evidence that you can build, measure, and operate ML-enabled systems. They’ll likely value your latency, deployment, evaluation, and operational results—but may question metrics whose setup is unclear or claims that are difficult to verify.

### Transferable strengths and gaps

- **Your advantage:** You show a useful combination of production software experience, ML implementation, agent evaluation, and operational ownership. The latency and backlog results are stronger than a résumé consisting only of model experiments.
- **Likely gap versus a direct-fit applicant:** A candidate with a longer record of shipping ML systems into production may show more sustained ownership, broader deployment scope, and stronger evidence of model quality in live use. Your résumé has relevant signals, but some bullets need to make their scope and verification clearer.
- **Vocabulary to foreground, where accurate:** Production ML, inference performance, agent evaluation, observability, reliability, and deployment are already supported by your experience. Making these themes easier to notice would help connect the entries to ML systems roles.

### Top achievement transfer checks

| Achievement | What a target-domain reviewer should be able to see |
|---|---|
| API latency reduction and build guardrail | Performance work tied to a measurable service-level constraint |
| Triage system and backlog reduction | ML features connected to an operational workflow and outcome |
| Edge inference optimization | Deployment and serving work measured under a defined workload |
| Agent evaluation metrics and degradation trials | Evaluation methods that test whether a system’s outputs remain trustworthy |
| Fleet migration and backlog removal | Systems engineering that improves reliability and downstream operations |

## ATS and five-perspective read-through

A real ATS match rate can’t be calculated without a job description. As a general scan for the inferred role, your résumé already contains useful terms such as Python, TypeScript, PyTorch, GRPO, agent evaluation, latency, inference, CI, regression checks, monitoring, and Kubernetes. The more important issue is making your target focus and relevant skills easy to identify quickly.

- **Recruiter glance — Maybe:** The experience is relevant, but there’s no headline or summary to establish your target focus before the reader reaches the detail.
- **HR screen — Borderline to phone screen:** There’s strong evidence of relevant engineering work, but the current skills section and lack of an explicit professional focus make the match less immediate.
- **Hiring manager — Maybe, leaning positive:** The production metrics and evaluation work are promising. The incorrect percentage, vague project bullet, and unclear measurement contexts would prompt questions.
- **Technical reviewer — Concerns to resolve:** Most claims are plausible from the résumé, but they cannot be verified from this text alone. Correct the arithmetic and clarify how key metrics were measured.

## Provisional scoring

These scores are approximate and **not a job-specific fit score**; there is no JD, and visual layout cannot be assessed from plain text.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keywords | 7/10 | Relevant ML systems terms appear, but no JD match can be measured. |
| Summary | 3/10 | No summary or headline establishes the target role. |
| Skills | 6/10 | Relevant foundation, but the section undersells experience and mixes categories. |
| Bullet quality | 7/10 | Good quantified evidence, offset by a few vague, crowded, or unclear bullets. |
| Publication selection | 5/10 | No publications listed; not necessarily a concern for the inferred role. |
| Narrative coherence | 6.5/10 | Strong range, but ordering and the target-role story need work. |
| Page fill and visual | N/A | Plain text doesn’t show page count, spacing, or layout. |
| Credibility signals | 7/10 | Useful metrics and adoption evidence; the arithmetic error needs correction. |

## Changes ranked by impact

### High impact

1. **Correct the 900-to-600 ms percentage.** The current claim is mathematically inconsistent and can undermine confidence in other metrics.
2. **Reorder experience chronologically.** The later internship should come first in a reverse-chronological résumé.
3. **Remove or substantiate the “AI-first practices” bullet.** Its broad claims don’t show what you did or how the outcomes were measured.
4. **Clarify metric definitions and comparisons.** In particular, distinguish the two 71% baselines and explain the inference-latency and evaluation setups.
5. **Add a clear target-role signal near the top.** This reduces the effort required to understand the relevance of a varied background.
6. **Unpack the overloaded Eastern Robotics bullet.** Its separate contributions and operational outcome deserve a clearer hierarchy.

### Medium impact

1. Make the skills grouping more precise and surface relevant skills already demonstrated in the experience section.
2. Add the missing outcome or evidence to the dashboard, runbook, and sparse-reward bullets, if you can support it.
3. Clarify your individual contribution to the upstreamed evaluation metrics.
4. Standardize spelling and formatting. “Stabilised” differs from the US spelling used in the rest of the résumé; also keep dates and punctuation consistent.

### Cosmetic or lower priority

- Reduce details that are technically precise but don’t help readers understand the result, especially where the impact is small or its scope is unclear.
- Check the final PDF for awkward line breaks. The plain-text extraction splits “on-call” across lines, but this may only be a display artifact.

## Interview topics to prepare

Be ready to explain the measurement and attribution behind the p95 latency results; how you evaluated diagnostic accuracy and agent task completion; why the GRPO training change helped with sparse rewards; what you personally contributed to the open-source metrics; and how your fleet migration affected dispatch operations. These are natural follow-ups to the strongest claims in the résumé.

**Bottom line:** The underlying experience is relevant and has good quantitative evidence. Correct the percentage error, improve the ordering and role signal, and make the strongest technical results easier to interpret before polishing smaller wording issues.