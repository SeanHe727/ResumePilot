# Résumé critique

**Inferred target:** ML/AI engineering roles, especially LLM agents, evaluation, and production ML systems. There’s no job description, so this is a general review rather than a company-specific or JD-matched critique.

## Overall assessment

You have strong technical material: measurable results, hands-on agent and model work, and evidence of both experimentation and production engineering. The main problems are **repeated accomplishments, one vague project bullet, thin skills coverage, and a few claims that need clearer definitions or stronger evidence**. Those issues make the résumé feel less precise than the underlying work may be.

**Top priorities:**
1. Resolve the duplicated fine-tuning and backlog accomplishments.
2. Replace or remove the generic “AI-first engineering practices” project bullet.
3. Clarify how key metrics were measured and what the comparison baselines were.
4. Expand the skills section only with tools and methods you can substantiate.
5. Remove date of birth and nationality unless an application specifically requires them.

## Changes to make, section by section

### Header

- **Remove the date of birth.** It is not relevant to evaluating your engineering qualifications and can introduce unnecessary bias.
- **Remove nationality from the résumé unless it is specifically requested.** If work authorization is relevant, address that separately and accurately; nationality is not the same as work authorization.
- **Make sure the portfolio link is a direct, working URL.** A repository or project page is most useful when it quickly demonstrates relevant work rather than landing on a broad profile.
- **Consider adding a concise professional headline or summary.** The résumé currently makes the reader infer your target from the experience and skills. A short, factual orientation would help recruiters identify your fit sooner; it should not claim a specialization beyond what the experience supports.

### Education

- **Clarify the expected graduation date’s status.** “Expected Jun 2026” is understandable, but ensure it remains current and does not imply the degree is already completed.
- **Check the location labels for consistency and clarity.** The country names are somewhat generic as supplied; ensure the actual city and country are identifiable, especially if the institutions are not widely known to the reader.
- **Consider whether both locations need to be listed.** Keep them if they clarify where you studied or are relevant to the role; otherwise, they take space without adding much qualification evidence.

### Mobility Systems Company — Machine Learning Engineering Intern

- **“Improved diagnostic accuracy by 35%…”**  
  Clarify whether this is a relative improvement or a 35-percentage-point change, what evaluation set or baseline it uses, and what “diagnostic accuracy” means in this context. The result is potentially strong, but the reader cannot assess its size or reliability without those details.

- **“Designed a routing layer…”**  
  Explain how reviewer disagreement was measured and over what sample. Also make clear that lower disagreement corresponded to better outcomes—not merely greater agreement. Reducing disagreement can be a meaningful result, but only if it reflects improved review quality rather than suppressing valid differences.

- **“Trained the triage agent with GRPO…”**  
  The comparison is promising because it reports tool-call and latency changes while holding accuracy constant. Clarify how the accuracy comparison was established and whether the latency reduction is relative or absolute. If space allows, make the scope of the evaluation clear enough to judge how robust the result is.

- **“Wrote the evaluation harness…”**  
  This is useful evidence of evaluation infrastructure. Clarify whether the two regressions were found before deployment and how the harness influenced release decisions. That would make the impact more concrete than simply stating that it caught them.

- **“Fine-tuned the adapter with assistant-only loss masking…”**  
  This substantially overlaps with the first bullet, which already describes fine-tuning an adapter with assistant-only loss masking. Consolidate the repeated method rather than spending two bullets on it. Also clarify the distinction between assistant-generated outputs and tool outputs: as written, the stated learning objective may leave a technical reader unsure what tokens received training loss.

- **“Built a diagnostics triage branch…”**  
  This is one of the most compelling outcomes and could appear earlier in the experience section. Clarify the backlog baseline and measurement period, and explain what the 800+ signals figure represents. The same achievement appears again in the Research-Agent Evaluation Framework project; remove the duplication or clearly distinguish the separate work and its attribution.

### Eastern Robotics Co. — Junior Software Engineer

- **“Cut GPU memory…by 4x…”**  
  Specify what memory measurement the reduction refers to, if you can substantiate it—for example, the relevant peak measurement or workload. “GPU memory” can refer to several different measures, so a little precision would help technical readers interpret the result.

- **“Reduced p95 API latency…”**  
  This is a strong, concrete systems result. Clarify the workload or test conditions behind the latency figures. The build-failing threshold is useful, but make sure the résumé makes clear that the threshold was an automated regression guard, not the achieved latency itself.

- **“Maintained the CI pipeline…and adds…”**  
  Correct the tense inconsistency: the bullet describes past work but switches to present tense. Also clarify what the three-day release-cycle figure measures and what it was compared with. The reader should be able to distinguish your contribution from the team’s overall process.

- **“Migrated 30 robot-fleet services…”**  
  This is a good reliability and operations bullet. The result is less quantified than the others: if you have a defensible measure of the backlog or dispatch delay eliminated, include it. Otherwise, keep the current outcome but ensure it describes the effect of the migration rather than implying more than you can demonstrate.

### Projects

#### Agent Runtime Suite

- **“Drove adoption of AI-first engineering practices…”**  
  This is the weakest bullet in the résumé. It uses broad claims about adoption, acceleration, and outcomes without identifying a specific system change or measurable result. Replace it with a concrete accomplishment you can substantiate, or remove it if the remaining bullets adequately represent the project.

- **“Kept working context under 10K tokens…”**  
  Clarify what the 100× comparison means and how the context limit was measured. The underlying result could be technically interesting, but the current phrasing leaves uncertainty about the starting point and what “raw conversation grew 100x” refers to.

- **“Separated concurrency pools…”**  
  This is a specific and credible engineering accomplishment. If available, add scope or test conditions for the 50-way fan-out and clarify how you verified that deadlocks and lost results were eliminated. “Removing” is a strong claim; make sure the evidence supports it.

#### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”**  
  Identify your contribution clearly as a contributor, as the project heading does. If you can, clarify whether you implemented the metrics, integrated existing implementations, or both; those represent different levels of ownership.

- **“Showed the evaluator tracks injected degradation…”**  
  Explain what the 0.89 Kendall correlation was calculated against and what the 400+ trials consisted of. This is a strong validation result, but its meaning is hard to judge without the comparison being explicit.

- **“Cut the pending-case backlog by two-thirds…”**  
  This repeats the triage backlog achievement from the internship and appears under an unrelated research-agent project. Resolve the attribution before submitting. If it is the same work, keep the accomplishment in one place; if it is separate work, make the distinction clear.

### Skills

- **Broaden the section to reflect skills already evidenced in the experience and project bullets.** The current list is unusually short relative to the résumé. Consider whether you can accurately include relevant areas such as evaluation, optimization, deployment, testing, or distributed/event-driven systems.
- **Use categories that make the skills easy to scan.** “ML & Agents” currently combines frameworks, methods, and a broad capability. Separate categories only where doing so improves clarity.
- **Avoid listing a skill solely because it appears in a project description.** Keep the section limited to tools and methods you can discuss confidently in an interview.
- **Check whether the skills section is missing tools you actually used.** For example, the résumé describes CI, API work, caching, batching, event queues, BF16, and GRPO, but not all of these are represented in the skills list.

## Five-perspective read-through

### ATS / keyword scan

Without a job description, an actual match rate cannot be calculated. Against the inferred AI/ML engineering target, the résumé visibly covers Python, TypeScript, PyTorch, LoRA, GRPO, multi-agent systems, fine-tuning, evaluation, latency optimization, and robotics/perception. It is less explicit about the broader engineering and deployment skills suggested by the experience.

**Priority:** Align terminology in the skills section with the work you actually describe. Do not add keywords that overstate your experience.

### Recruiter glance

**Verdict: Maybe.** Your education and current internship make the target direction discernible, but there is no headline or short summary to make your intended role and strongest fit immediate. The personal details in the header are unnecessary, and the repeated accomplishments may raise questions about document precision.

### HR screen

**Verdict: Likely phone screen, depending on the role’s requirements.** The résumé shows relevant education, ML experience, and measurable results. The strongest concern is not a missing basic qualification; it is whether the duplicated claims and unclear metrics accurately represent distinct accomplishments.

### Hiring manager

**Verdict: Maybe to interview.**

1. The combination of model training, agent evaluation, runtime engineering, and production systems is a useful breadth of experience.
2. The quantified impact is a strength, but several measurements lack enough context to evaluate them.
3. The duplicated adapter and backlog accomplishments could create doubts about attribution or editing care.

**Likely first question:** How were the diagnostic-accuracy, reviewer-disagreement, and backlog-reduction results measured, and which work was yours?

### Technical reviewer

**Truthfulness:** Cannot be independently verified from the résumé alone. The claims that most need supporting detail are the 35% accuracy improvement, 14% to 6% reviewer disagreement, 4× GPU-memory reduction, 0.89 Kendall correlation, and the two backlog-reduction claims.

**Consistency:** There are clear editing issues: repeated fine-tuning work, repeated backlog work across sections, and a past-tense bullet that switches to present tense. Resolve these before submission.

## Provisional scoring

These scores are directional, not JD-specific. The publication dimension is not particularly applicable to the inferred industry-oriented target, and page layout cannot be assessed from plain text.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword coverage | 6/10 | Relevant terms are present; no JD is available to assess match. |
| Summary / positioning | 5/10 | No summary or headline; target role must be inferred. |
| Skills | 5/10 | Skills section is much narrower than the experience suggests. |
| Bullet quality | 7/10 | Strong outcomes and methods, offset by vague and duplicated claims. |
| Publications | N/A | No publications listed; not a concern for the inferred target. |
| Narrative coherence | 6/10 | Good technical arc, but repetition and attribution blur the story. |
| Page fill / visual | N/A | Cannot judge from the text provided. |
| Credibility signals | 6/10 | Strong metrics, but several need definitions and context. |

## Interview likelihood

These are rough judgments from the résumé alone, not predictions for a specific employer.

| Reader | Estimated outcome | Main factor |
|---|---|---|
| ATS | Uncertain | No job description to compare against. |
| Recruiter | Moderate chance of forwarding | Relevant experience, but no immediate positioning statement. |
| HR screen | Moderate to good | Relevant education and experience; basic qualifications depend on the role. |
| Hiring manager | Moderate | Relevant technical work, with concerns about duplication and metric clarity. |
| Technical panel | Potentially good | The work is promising, but the claims invite detailed validation questions. |

**Ceiling:** The résumé appears to have a solid foundation. The main improvement is not adding more impressive-sounding claims; it is making the existing accomplishments distinct, attributable, and easy to evaluate.

## Prioritized changes

### High impact

1. **Resolve the repeated fine-tuning and backlog accomplishments.** The repetition consumes space and can undermine confidence in attribution.
2. **Remove or replace the generic AI-first practices bullet.** It makes a broad impact claim without evidence.
3. **Add measurement context to the strongest metrics.** Clarify baselines, evaluation scope, and what each percentage or correlation represents.
4. **Correct the tense inconsistency in the CI bullet.** It is a small error, but visible in a short résumé.
5. **Remove date of birth and nationality.** They do not strengthen the application and may create avoidable screening concerns.

### Medium impact

1. **Add a concise professional positioning statement.** This would help a recruiter understand your intended role before reading the experience.
2. **Strengthen the skills section using substantiated tools and capabilities already reflected in the résumé.**
3. **Clarify the ownership and scope of project contributions.** This matters especially for the contributor project and the evaluation harness.
4. **Improve the weaker outcome descriptions** where a baseline or operational measure is available.

### Cosmetic

1. Standardize punctuation, date formatting, and tense throughout.
2. Check that the portfolio link works and points to relevant work.
3. Make institution and location details consistently identifiable.

**Verdict:** Fix the high-impact issues before submitting. The medium-impact changes are worthwhile if you can make them accurately. The cosmetic changes come last.

## Interview preparation: bridge points to develop

These are topics to be ready to explain, not suggested résumé wording.

| Résumé topic | What to connect it to |
|---|---|
| Agent routing and specialist review | How you controlled tool or signal access, and how you checked that reduced disagreement reflected better decisions. |
| GRPO and tool-use rollouts | How you designed the reward, measured redundant calls, and checked that efficiency gains did not reduce answer quality. |
| Evaluation harness and degradation testing | How you designed tests that catch regressions and make model comparisons more reliable. |
| Context budgeting and compaction | How you handled long-running agent sessions under runtime or resource constraints. |
| CI, latency, and fleet-service changes | How model and software changes were made safer and more dependable in production. |
| Diagnostics triage | How signal processing and automated prioritization affected operational workload, and how that impact was measured. |

## Mechanical checks

- **ATS match rate:** Not assessable without a job description.
- **Truthfulness and provenance:** Not independently verifiable from the supplied text. Review the metrics and project attribution carefully.
- **Publication metadata:** Not applicable; no publications are listed.
- **Formatting and page count:** Not assessable from plain text.
- **AI-style wording:** The “AI-first engineering practices” bullet is generic and unsupported; the rest of the résumé is comparatively specific. No other major wording pattern stands out as a concern.