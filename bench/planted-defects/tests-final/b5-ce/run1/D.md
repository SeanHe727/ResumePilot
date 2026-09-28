# Résumé review

**Likely target:** applied ML / ML engineering, with a distinctive focus on agent systems, model evaluation, and production ML. I’m inferring this from the résumé; without a job description, I can’t reliably judge role-specific keyword match or fit for a particular employer.

## Overall assessment

You have strong material: measurable results, experience spanning model work and production systems, and several technically specific projects. The biggest issues are **duplicate or overlapping claims, one vague project bullet, and some results that need clearer context**. Those issues make the résumé less focused than the underlying experience seems to be.

I’d make the changes below before applying. I’m describing changes and reasons, not rewriting your lines.

## Changes to make, in priority order

### 1. Remove duplication and resolve overlapping ownership

- **Mobility Systems Company: assistant-only loss masking appears in two bullets.** Keep the bullet that best shows the outcome and remove or substantially differentiate the other. As written, the second mention adds no distinct evidence.
- **The sensor-triage/backlog result appears under both Mobility Systems and the Research-Agent project.** It reads like the same achievement was performed in two places. Keep the claim under the role or project where it belongs; if the project contributed a separate component, make that distinction clear.
- **The project’s backlog reduction claim also repeats the internship’s 68% figure in rounded form.** This makes the résumé look padded and raises questions about attribution.

### 2. Replace the vague Agent Runtime Suite bullet with evidence

- **“Drove adoption of AI-first engineering practices…” is the weakest bullet in the résumé.** It uses broad, promotional language and gives no concrete evidence of what you built, how adoption was demonstrated, or what improved.
- Either add specific, verifiable evidence that distinguishes this work from the other project bullets, or remove it. The project already has two more technical, concrete results that better demonstrate your contribution.

### 3. Clarify the basis for your strongest metrics

For the following bullets, add enough context that a reader can interpret and trust the number:

- **Diagnostic accuracy improved by 35%:** indicate what “accuracy” means in this evaluation, what it was compared against, and the evaluation scale or dataset, if those details can be shared.
- **Reviewer disagreement fell from 14% to 6%:** clarify how disagreement was measured and whether those percentages are rates, percentage points, or another measure.
- **Tool calls fell 18% at equal accuracy:** explain the evaluation scope or sample size if available. “Equal accuracy” is an important claim, so readers will want to know how it was established.
- **Pending-case backlog fell 68% after launch:** specify the comparison period or baseline if you have a defensible one. The “eight weeks after launch” helps, but the starting point remains unclear.
- **Memory fell 4×:** make clear what memory measure or workload the comparison used, if that is not obvious to your intended readers.

Don’t add detail you can’t substantiate. The goal is reproducibility and context, not more numbers for their own sake.

## Line-by-line review

### Header and education

- **Header:** Consider adding a short target-role descriptor so a recruiter can identify your focus immediately. The résumé’s strongest positioning is applied ML and ML systems, particularly agent evaluation and production deployment.
- **Western State University:** Keep the expected graduation date. Make sure the résumé’s ordering and date format are consistent throughout.
- **Eastern Institute of Technology:** No substantive change needed based on the information provided.

### Mobility Systems Company

- **Accuracy improvement / domain adapter:** Keep the result, but clarify the evaluation basis as noted above. The technical detail is useful; the measurement needs more context.
- **Routing layer / disagreement reduction:** Retain this because it shows system design and a measurable outcome. Clarify the metric, and make the roles of the specialist agents and reviewer easy to understand at a glance.
- **GRPO / tool-call reduction:** This is one of the more distinctive bullets. Keep the comparison with the SFT baseline and equal accuracy, but clarify the evaluation scope. Check that the penalized-call description is understandable to a general ML hiring reader.
- **Evaluation harness / 14 checkpoints:** Keep this. It demonstrates evaluation infrastructure and a release-related contribution. If possible, make the practical significance of catching two regressions clearer without overstating what happened.
- **Assistant-only loss masking:** Remove this or the earlier masking bullet. Repeating the same technique without a distinct result weakens the section.
- **Diagnostics triage branch / 800+ signals / backlog reduction:** Keep the achievement in the correct role, but resolve the duplicate project entry. Ensure the relationship between the system, the signals, and the backlog outcome is clear.

### Eastern Robotics Co.

- **BF16 / 4× memory reduction:** Keep the result. Add measurement context if available; otherwise, be prepared to explain the hardware, workload, and memory measure in an interview.
- **Latency reduction / cache and batching:** Strong production-engineering evidence. Keep the latency figures and build threshold; clarify the test conditions if they are not stated elsewhere.
- **CI pipeline:** Fix the tense/grammar inconsistency: the résumé describes a completed role, but this bullet uses a present-tense verb form. Also clarify how the three-day release-cycle figure relates to the pipeline work and what the previous cycle looked like.
- **Migration of 30 services:** Keep this. It shows scale and operational impact. If accurate, specify how you verified that the nightly backlogs were eliminated; otherwise, be ready to explain the evidence behind that outcome.

### Projects

- **Agent Runtime Suite, ownership and stack:** “Owner” is a useful signal, but make sure it reflects your actual level of ownership. The title and stack are informative.
- **AI-first engineering practices:** Replace with a concrete, verifiable contribution or remove it, as noted above.
- **Context under 10K tokens / 100-turn test:** Keep this. It is specific and technically differentiating. Clarify what the 100× comparison refers to if a reader could interpret it in more than one way.
- **Concurrency pools / cache writes / 50-way fan-out:** Keep this. It communicates systems debugging and a concrete reliability result. Be ready to define the test conditions behind “50-way fan-out.”
- **Research-Agent Evaluation Framework / 8 metrics:** Keep this. Since you identify yourself as a contributor, ensure the bullet accurately reflects your share of the work.
- **Kendall correlation / 400+ trials:** Keep the result, but briefly clarify what the correlation is between—for example, what the evaluator’s scores were compared against. Without that, the statistic is hard to interpret.
- **Repeated triage/backlog bullet:** Remove or distinguish it from the internship achievement. Do not present the same result as two separate accomplishments.

### Skills

- Your listed tools are relevant, but the section is short and mixes tools, methods, and broad capabilities. Organize it so readers can quickly distinguish programming languages, ML methods/frameworks, and deployment or infrastructure skills.
- Include only skills you can discuss confidently in an interview. Add other relevant tools only if they are genuinely supported by your experience; don’t expand the list just to increase keyword coverage.
- “Agent evaluation” is useful, but a reader may want to know what that means in practice. Your project bullets should substantiate it, as they largely do.

## How different readers may see it

- **Recruiter:** Likely to notice strong ML and measurable production results. The lack of a summary or target descriptor may make the intended role less immediate.
- **Hiring manager:** Likely to value the mix of model training, evaluation, agent systems, and deployment. They may question duplicate achievements and ask how accuracy, disagreement, and backlog reduction were measured.
- **Technical reviewer:** Likely to focus on the evaluation methodology, GRPO setup, latency and memory test conditions, and your exact contribution to the projects.

## Provisional score

This is a **résumé-only estimate**, not a match score against a specific job description.

| Dimension | Score | Main reason |
|---|---:|---|
| Role/keyword signaling | 7.5/10 | Strong ML and agent terminology, but no target role or JD to compare against |
| Summary and positioning | 6/10 | No summary or explicit target-role framing |
| Skills | 7/10 | Relevant, but limited and not fully organized by category |
| Experience bullets | 8/10 | Strong technical content and metrics; duplication and unclear measurement context detract |
| Projects | 6/10 | Good technical evidence, but one vague bullet and one duplicated achievement |
| Narrative and coherence | 7.5/10 | Credible progression across ML, software, and systems work; project/role attribution needs cleanup |
| Presentation | 7.5/10 | Readable structure from the supplied text; page layout cannot be assessed here |
| Credibility signals | 8/10 | Specific methods, systems work, and quantified results |

**Overall: approximately 73/100.** The main opportunity is improving clarity and attribution—not adding more technical claims.

## Interview preparation

Be ready to explain:

1. How the 35% diagnostic-accuracy gain was calculated and validated.
2. How reviewer disagreement was defined, and what changed when it fell from 14% to 6%.
3. The GRPO training setup, reward design, and evidence that tool-call reduction did not lower accuracy.
4. How you measured the 4× memory reduction and 420-to-180 ms latency improvement.
5. Which parts of the triage system belonged to the internship versus the research-agent project.
6. What the evaluator’s 0.89 Kendall correlation was correlated against.
7. Your individual contribution to the projects marked “Owner” and “Contributor.”

**Recommended order:** remove or distinguish the duplicates; replace or delete the vague project bullet; clarify the most important measurement methods; then add a concise role descriptor and fix the CI bullet’s tense.