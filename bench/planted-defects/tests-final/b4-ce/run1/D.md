# Résumé review

**Assumed target:** ML/AI engineering, especially agent systems or evaluation. The résumé also signals mechanical design, so the intended target is not completely clear. Without a job description, I can’t reliably assess keyword match or estimate interview odds for a specific role.

## Highest-priority changes

1. **Resolve the duplicate triage achievement.** The 68% backlog reduction appears under both the internship and the evaluation-framework project. Keep it in the section that best reflects where the work happened, or distinguish the contributions if both entries are accurate. As written, the duplication can look like double-counting.

2. **Remove or substantiate the vague Agent Runtime Suite bullet.** The claim about driving AI-first practices and improving outcomes has no measure, concrete deliverable, or defined adoption evidence. It is much weaker than the project’s technical bullets and dilutes them.

3. **Clarify your target role near the top.** There is no summary or other quick explanation connecting your ML/agent work, mechanical-design job, and current degree. A reader may not know whether you’re pursuing ML engineering, mechanical design, or both. Add a brief positioning statement that accurately establishes the target and your relevant strengths.

4. **Explain the current mechanical-design role’s place in the story.** It is your current position, but it appears alongside substantial ML experience and projects. If you’re applying to ML roles, make the transition or connection clear; if the role is relevant to your target, surface that relevance truthfully. The reviewer should not have to guess why it is there.

5. **Remove date of birth and, in most cases, nationality.** These personal details do not establish your qualifications and can introduce unnecessary bias. Include work-authorization information only if it is relevant to the application and accurate.

6. **Fix the tense inconsistency in the Eastern Robotics CI bullet.** The role is dated as past employment, but the bullet switches into present tense. Make the experience bullets consistent with the role dates.

## Section-by-section notes

### Header and education
- **Check the contact details before submitting.** The email and web address look like placeholders as written. If they are literal, replace them with your professional contact details and a direct portfolio or code-profile link.
- **Clarify the location and timing of the master’s program if needed.** The degree is in progress while the résumé lists a current job in another country. If the arrangement is unusual, make the location or work setup understandable; otherwise a reviewer may wonder how the dates fit together.
- **Make the school locations unambiguous.** If the generic city and country labels are anonymized only for this review, no action is needed. Use the actual, clear locations in the submitted version.

### Lakeside Auto Parts
- **Give the two bullets enough context to judge their scope.** The scrap-rate improvement is a useful result, but readers may want to know the relevant production volume or time period if you can substantiate it. The inspection bullet names the work but does not show its result or consequence; add one only if you can support it.
- **Consider its placement based on the target role.** For an ML application, it may be less relevant than your ML work, but it is current and should not be obscured in a way that makes the chronology misleading.

### Mobility Systems Company
- **Clarify what “diagnostic accuracy” measures.** The 35% improvement is compelling, but the resume does not define the metric, evaluation set, or comparison point. A technical reviewer may question whether it is a relative or absolute gain.
- **Define the reviewer-disagreement measure.** Explain, in the résumé or be ready to explain, what counted as disagreement and how it was measured. The reduction is useful evidence if its meaning is clear.
- **Make the GRPO comparison easy to interpret.** This is one of your strongest bullets. Ensure the baseline, “equal accuracy,” and latency comparison refer to a clearly defined evaluation. The specialized terminology is appropriate for technical roles but may not be immediately legible to a general recruiter.
- **Remove the repeated assistant-only-loss-masking point or consolidate the evidence.** That method appears in both the first and fifth bullets. The first bullet already ties it to an outcome; the fifth repeats the method without adding a separate result.
- **Strengthen the evaluation-harness bullet with impact, if available.** Comparing 14 checkpoints and catching two regressions shows useful work. The reader still cannot tell what those regressions would have affected or how the team used the harness in release decisions.
- **Clarify the 68% backlog result’s ownership and scope.** Besides the duplicate entry in Projects, “after launch” gives a time window but not the backlog’s starting scale. Add context only if you have reliable figures.

### Eastern Robotics Co.
- **Correct the tense mismatch** in the CI-pipeline bullet.
- **Specify the conditions behind the 4× GPU-memory reduction.** The result is strong, but its value depends on the model, workload, or training setup. Be prepared to explain whether quality or training behavior changed.
- **Explain the release-cycle metric.** “Shortened release cycles to 3 days” lacks a before-and-after comparison or a definition of the cycle. Clarify the basis if you have it.
- **Add a measurable consequence to the fleet-services migration if one is available.** Removing morning dispatch delays is meaningful, but the current bullet gives no frequency, scale, or operational impact.

### Projects
- **Strengthen the Agent Runtime Suite’s first bullet or remove it.** It is broad and unsupported compared with the two implementation-focused bullets below it.
- **Make the context-window stress-test result interpretable.** “Raw conversation grew 100x” is ambiguous. Specify what grew, what was measured, and whether task quality or success was maintained, if those details are available.
- **Clarify the concurrency-test conditions.** The deadlock and lost-result claim is technically strong. State the relevant test conditions or how you verified the fix, if space permits.
- **Resolve the project-versus-employment attribution of the triage system.** This is essential: the same result is credited in two places, and the project entry says “Contributor” while the internship entry says “Built.”
- **Explain what the Kendall correlation represents.** The 0.89 result is a good quantitative signal, but reviewers need to understand what two quantities were correlated and why that indicates the evaluator worked well.
- **Use project labels consistently and precisely.** “Owner” and “Contributor” help distinguish responsibility; make sure they accurately reflect your role and are applied in a way that helps the reader assess ownership.

### Skills
- **Expand the section selectively for your intended role.** It is short relative to the technical experience and projects. Include additional languages, frameworks, evaluation methods, or deployment tools only if you can discuss them credibly.
- **Make skill labels specific enough to be informative.** “Agent evaluation” is broad; a target-role reader will look for the concrete methods and tools you have actually used.
- **Check alignment between skills and evidence.** PyTorch, LoRA, and GRPO appear supported by the experience section. Keep the rest of the skills list similarly grounded.

## Reader-perspective assessment

- **Recruiter glance: Maybe.** The ML internship, technical projects, and graduate degree are relevant, but the current mechanical-design role and lack of a target-focused introduction make your direction less immediate.
- **HR screen: Borderline to positive.** There is substantial relevant ML experience, but the résumé does not state a target role or quickly explain the domain transition.
- **Hiring manager: Maybe, with potential to interview.** The GRPO, evaluation, latency, and agent-runtime work offers promising technical discussion. The duplicate achievement and unclear scope or measurement would likely come up.
- **Technical reviewer: Promising but needs clarification.** Several bullets have solid quantitative results. The main concerns are attribution, metric definitions, repeated claims, and whether some broad claims are supported.

## Interview topics to prepare

Be ready to explain:
- How you measured diagnostic accuracy and established the comparison baseline.
- What counted as reviewer disagreement and how the routing change affected it.
- The GRPO reward design, evaluation conditions, and what “equal accuracy” means.
- Your personal contribution to the triage system and why it appears in both Experience and Projects.
- How you tested context compaction, concurrency isolation, and cache-write gating.
- The CI release-cycle measurement and the effect of the fleet-service migration.

## Visual and ATS limits

I can review the text, but not page layout, typography, line breaks in the final document, or actual page count. I also can’t calculate a meaningful ATS match rate without a job description. For an ML/agent role, the résumé contains useful technical terms, but the right keyword coverage depends on the specific posting.

**Verdict:** Fix the duplicated triage claim, remove or substantiate the vague project bullet, clarify your target and career direction, and tighten the metric definitions. Those changes will make the existing technical evidence easier to trust and evaluate.