# Resume review

**Assumed target:** ML Engineer / Applied AI Engineer, particularly work involving LLM agents, evaluation, and production ML systems. That’s inferred from the resume—not a confirmed target. Without a job description or employer, I can’t assess actual keyword match, company fit, or interview odds reliably.

## Overall assessment

There is strong material here: measurable model and systems results, agentic-ML experience, and evidence of deployment. The main problems are **repetition, unclear attribution, and uneven evidence**. In particular, the adapter-training method appears twice, and the backlog result appears in both Experience and Projects. Those repetitions make the resume feel less substantial than its achievements may be.

## Highest-priority changes

1. **Remove or distinguish repeated achievements.** The diagnostic-triage backlog result appears under both Mobility Systems Company and Research-Agent Evaluation Framework. The assistant-only loss-masking work also appears twice under the internship. Keep each achievement in the place that best reflects where and how it happened; if the entries describe distinct work, make their distinct contributions clear.
2. **Replace the generic Agent Runtime Suite opening bullet with specific evidence—or remove it.** It makes broad claims about adoption and improved outcomes without showing what changed or how you know.
3. **Clarify what your largest metrics measure.** Add enough context for a reader to interpret the accuracy, disagreement, latency, backlog, and memory claims.
4. **Fix the tense error and clarify the release-cycle result** in the Eastern Robotics bullet.
5. **Reorder bullets so the strongest, most relevant evidence appears first**, especially in the internship section.

---

## Domain and reviewer lens

### Likely reviewer

For an ML/Applied AI Engineer role, a hiring manager would likely be an ML engineering lead or applied research/engineering manager. They would look for evidence that you can evaluate models rigorously, build dependable systems, and deliver results beyond experiments. They are likely to see many resumes with generic “AI-first” claims; specific evaluation methods and production outcomes are more differentiating.

### What can and can’t be assessed here

The employer names appear generic, and there’s no target company or job description. I can’t responsibly describe a company’s business, extract its vocabulary, or rank actual JD keyword gaps. Based on your resume alone, the strongest domain signals are **LLM/agent training, evaluation, model serving, and production software systems**.

### Competitive positioning

- **Likely advantage:** A combination of agent training/evaluation work and conventional production engineering, with several quantified outcomes.
- **Likely challenge:** Applicants may have clearer evidence of model quality measurement, deployment scale, or direct ownership of an LLM/agent product. Your resume should make your own scope and the evidence behind the results easy to verify.

---

## Feedback by section and line

### Header and education

- **Contact information:** The header is clear and compact. Check that the code link goes directly to a polished, relevant portfolio or repository; the resume itself gives no other way to inspect your work.
- **M.S. line:** The expected graduation date is clear. Because the degree is in progress, keep the expected status explicit, as you have.
- **Education generally:** This is concise. If you have coursework, a thesis, or research directly relevant to your target role, consider whether one item adds more value than the space it takes. Don’t add coursework just to fill space.

### Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”**  
  Keep the result, but make its basis clearer: what “accuracy” means, what it was measured against, and the evaluation scope. Also clarify whether 35% is a relative improvement or a percentage-point change. The technical method is specific; the outcome currently isn’t sufficiently interpretable.

- **“Designed a routing layer…”**  
  This is a strong systems-and-agent result. Clarify what the disagreement rate represents and whether the change is measured in percentage points or relative percent. The roles of the specialist agents and independent reviewer are understandable, but a reader may still wonder how disagreement was defined.

- **“Trained the triage agent with GRPO…”**  
  This is technically distinctive and has useful outcome metrics. Explain enough about the evaluation basis to make the “equal accuracy” comparison credible, especially the test volume or evaluation conditions. The latency reduction is modest, so the tool-call reduction and maintained accuracy may be the more persuasive parts; prioritize the result you can substantiate best.

- **“Wrote the evaluation harness…”**  
  Keep this: it demonstrates evaluation infrastructure and a concrete use by the team. Clarify whether the two regressions were caught before release and what kind of regression they were, if that detail is available. Consider moving it higher if evaluation engineering is central to the roles you’re targeting.

- **“Fine-tuned the adapter with assistant-only loss masking…”**  
  This overlaps substantially with the first internship bullet, which also describes adapter fine-tuning and assistant-only loss masking. Avoid presenting the same method as two separate achievements. Retain both only if they describe distinct work, and make that distinction apparent.

- **“Built a diagnostics triage branch…”**  
  This is a strong launch-and-impact result, but the same backlog reduction and sensor-signal count appear again under Projects. Keep the achievement in one place unless the project entry describes a clearly separate contribution. Also clarify how the backlog reduction was calculated and, if possible, the starting scale.

**Ordering:** The internship has six bullets, including two overlapping descriptions. After resolving that duplication, order the remaining bullets by relevance to the target role and strength of evidence—not simply by chronology or technical complexity.

### Eastern Robotics Co.

- **“Cut GPU memory…by 4x…”**  
  “By 4x” can be interpreted inconsistently. Make the size of the reduction unambiguous and state whether the comparison used the same model, batch size, and training setup. If the change affected model quality or throughput, that may also matter.

- **“Reduced p95 API latency…”**  
  This is one of the clearest bullets: it gives a before-and-after result and a reliability check. If space allows, indicate whether the latency figures came from a representative load test or production traffic. The build-failure threshold is useful evidence of engineering discipline.

- **“Maintained the CI pipeline… and adds…”**  
  The tense is inconsistent: the bullet starts in past tense and switches to present tense. Correct that. Also clarify what “release cycles to 3 days” means—whether this is a cycle duration, a reduction from a prior duration, or another measure. The current phrasing doesn’t establish the size of the improvement.

- **“Migrated 30 robot-fleet services…”**  
  The migration scope is strong, and the operational problem is clear. The result would be stronger with a measure of the backlog or dispatch delays removed, if you have one. As written, “removing the nightly backlogs” is meaningful but difficult to assess.

### Projects

- **Agent Runtime Suite — “Drove adoption of AI-first engineering practices…”**  
  This is the least substantiated bullet in the resume. It gives no specific practice, adoption measure, delivery change, or downstream outcome. Replace it with verifiable project evidence or remove it; broad impact claims weaken the concrete technical bullets that follow.

- **“Kept working context under 10K tokens…”**  
  This is distinctive, but the stress-test result needs a clearer baseline and definition. In particular, explain what “the raw conversation grew 100x” compares and what counted as successful context retention. Without that, the scale claim is hard to interpret.

- **“Separated concurrency pools…”**  
  This is technically specific and communicates reliability work. If available, give the test conditions or failure rate that demonstrate the fix. “50-way fan-out” helps, but readers may still ask whether that was a stress test or a production workload.

- **Research-Agent Evaluation Framework — “Integrated 8 citation and faithfulness metrics…”**  
  This is relevant to agent evaluation. Name the framework somewhere if it is public and identifiable, and clarify the extent of your contribution—especially whether the work was merged, released, or used by others. The current “contributor” label leaves ownership unclear.

- **“Showed the evaluator tracks injected degradation…”**  
  Kendall correlation is a useful technical detail, but explain what was correlated with what, and what the 400+ trials represent. This would make the result much easier for both a technical reviewer and a recruiter to understand.

- **“Cut the pending-case backlog…”**  
  This repeats the Mobility Systems Company achievement. Remove the duplicate or clarify that it describes distinct work with a different scope or outcome. As presented, a reader is likely to count it as the same result twice.

### Skills

- **Programming:** Python, TypeScript, and Git are credible choices given the resume. Consider whether the section should include other tools or languages that you actually used in the listed work and that appear in target job descriptions. Don’t add skills you can’t defend in an interview.
- **ML & Agents:** This group mixes modeling, agent evaluation, and Kubernetes. The skills are relevant, but the grouping makes it harder to scan. Organize the skills by function, and ensure every listed item is supported by meaningful experience or project evidence. Kubernetes currently has little supporting context in the bullets.
- **Specificity:** “Agent evaluation” is broad. If you have hands-on experience with particular evaluation methods or tooling beyond what the bullets already show, naming it may help; otherwise, the bullets should carry that evidence.

---

## Recruiter and hiring-manager read

- **Recruiter glance:** **Maybe to forward.** The engineering internship title, in-progress master’s degree, and quantified technical work are credible signals. There is no summary or target-role headline, so the reader has to infer the intended role from the experience.
- **Basic-qualification screen:** **Likely to pass for some ML/Applied AI roles.** The education and experience are relevant, but the resume does not establish years-of-experience requirements, production deployment scope, or several commonly requested tools without a specific job description.
- **Hiring manager:** **Possible interview, with concerns to resolve.** The best evidence is the combination of model evaluation, agent work, and systems improvements. The main concerns would be duplicated achievements, ambiguous metric definitions, and whether you owned the work or contributed to a larger team effort.
- **Likely first interview question:** How were the diagnostic-accuracy and backlog improvements measured, and what part of the work did you personally own?

## Provisional scoring

These are document-level estimates against the role inferred from the resume, **not a job-specific match score**.

| Dimension | Score | Notes |
|---|---:|---|
| ATS keyword match | Not assessable | No job description; role-specific match rate would be made up. |
| Summary | 5/10 | No summary or target-role framing. This may be fine for some applications, but the intended positioning is implicit. |
| Skills section | 6.5/10 | Relevant baseline, but grouping and support for listed skills could be clearer. |
| Bullet quality | 7/10 | Strong metrics and technical detail, weakened by duplication and underspecified measurements. |
| Publication selection | N/A | No publications listed; not necessarily a gap for industry ML engineering. |
| Narrative coherence | 6.5/10 | Strong ML/agent and systems thread, but duplicate project/work claims blur the story. |
| Page fill and visual | Not assessable | Plain text doesn’t show page layout, line wraps, or visual hierarchy. |
| Credibility signals | 7/10 | Quantified outcomes help; attribution and measurement details need to be clearer. |

---

## Prioritized changes

### High impact

1. **Resolve the two apparent duplicates**: the adapter-loss-masking work and the backlog-reduction/triage result.  
   **Why:** Repetition makes separate experience look inflated and takes space from distinct achievements.

2. **Remove or substantiate the “AI-first engineering practices” claim.**  
   **Why:** It is broad and unmeasured, unlike the rest of the resume.

3. **Clarify measurement and baselines for the major metrics**, especially diagnostic accuracy, reviewer disagreement, backlog reduction, and the context stress test.  
   **Why:** These are your strongest claims; readers need to understand what each number means and how it was measured.

4. **Fix the tense inconsistency and clarify the three-day release-cycle claim.**  
   **Why:** This is an easy-to-notice editing issue and an ambiguous result.

5. **Make individual scope clearer where the work was team-based.**  
   **Why:** The resume lists substantial accomplishments, but often doesn’t say what you personally designed, implemented, or evaluated.

### Medium impact

1. **Reorder internship bullets after removing duplicates.** Put the strongest evidence for your target role first.
2. **Clarify project ownership and status.** For the evaluation framework, identify the framework and indicate the extent or outcome of your contribution if you can verify it.
3. **Improve the skills grouping** and make sure each listed skill has defensible supporting evidence.
4. **Add a brief role-positioning summary or headline only if it helps a recruiter identify your target quickly.** It should add information rather than repeat the skills list.

### Cosmetic / lower priority

- Tighten any long bullets that wrap awkwardly in the final document.
- Check that the code link is current and points to work that supports the claims here.
- Don’t add a publication section just to fill space; it’s not required for every industry ML role.

**Verdict:** Fix the duplicates, generic project claim, metric clarity, and tense issue first. The rest is secondary.

## Interview bridge points

These are topics to prepare, not suggested resume wording.

| Resume topic | Interview connection to prepare |
|---|---|
| Agent routing and reviewer disagreement | How you controlled information flow, measured disagreement, and decided whether reduced disagreement meant better outcomes. |
| GRPO and tool-call reduction | Why you chose the training approach, how the reward was designed, and how you verified accuracy stayed comparable. |
| Evaluation harness | How you selected metrics, compared checkpoints, and acted on detected regressions. |
| API latency and build threshold | How you measured p95 latency, tested under load, and balanced performance against reliability. |
| Context management under stress testing | How you defined the context budget, designed the stress test, and checked that important information was retained. |
| Evaluation-framework contribution | Your specific contribution, how the metrics behaved under injected degradation, and what limitations you found. |
| Fleet-service migration | How you handled retries, dead letters, and failure recovery, and what operational evidence showed the migration worked. |

**Bottom line:** The underlying experience looks stronger than the current presentation. Removing repeated claims and making your measurements and personal contribution easier to verify should improve the resume more than adding extra keywords or more bullets.