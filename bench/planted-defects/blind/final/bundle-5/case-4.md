# case-4

## Résumé

```
Jordan Lee
+1 (555) 010-2468 | jordan.lee@example.com | example.com/code/jordan-lee
EDUCATION
Western State University | M.S. in Computer Engineering | Metro City, USA | Sep 2024 - Expected Jun 2026
Eastern Institute of Technology | B.S. in Electrical Engineering | Metro City, Country | Sep 2018 - Jun 2022
EXPERIENCE
Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025
- Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use
trajectories with assistant-only loss masking.
- Designed a routing layer that limits each of 3 specialist agents and an independent reviewer
to their in-scope signals, cutting reviewer disagreement with specialist findings from 14%
to 6%.
- Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises
redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT
baseline at equal accuracy.
- Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy,
citation quality and latency, catching 2 accuracy regressions before release.
- Fine-tuned the adapter with assistant-only loss masking so the model would learn to
reproduce the tool outputs more faithfully.
- Built a diagnostics triage branch for an industrial inspection system that screens 800+
sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in
the eight weeks after launch.
Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024
- Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16
mixed precision.
- Reduced p95 API latency from 420 ms to 180 ms by adding a request cache and batching sensor
reads, with load tests that fail the build if p95 exceeds 200 ms.
- Maintained the CI pipeline for the perception team’s model releases and adds automated
regression checks that shortened release cycles to 3 days.
- Migrated 30 robot-fleet services from cron jobs to an event queue with retries and dead-
letter handling, removing the nightly backlogs that delayed morning dispatch.
PROJECTS
Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present
- Drove adoption of AI-first engineering practices across the platform, accelerating delivery
and improving outcomes for downstream teams.
- Kept working context under 10K tokens across a 100-turn stress test while the raw
conversation grew 100x, using budgeted context layers and staged compaction.
- Separated concurrency pools and gated cache writes on stream completion, removing nested-
pool deadlocks and lost tool results under 50-way fan-out.
Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025
- Integrated 8 citation and faithfulness metrics into an open-source research-agent
framework’s evaluation module.
- Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across
400+ report-level trials that removed citations, sources and claims.
- Cut the pending-case backlog by two-thirds with a triage branch that screens 800+ sensor
signals per case using ML-extracted features.
SKILLS
Programming: Python, TypeScript, Git
ML & Agents: PyTorch, LoRA, GRPO, agent evaluation, Kubernetes
```

## Reviewer 1

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

## Reviewer 2

## Overall

The resume has strong quantified results and a clear ML/agent focus. The main problems are **duplicated accomplishments, unclear measurement details, and a few claims that are too vague to assess**. Fix those before adding more content. I’ve identified each entry by its opening words so I can tell you what to change without rewriting it.

## Header and education

- **Contact details:** If the phone number and website are placeholders for privacy, ignore this. Otherwise, replace them with working contact details. Use a professional profile or portfolio link that lets a reviewer verify your work.
- **Education entries:** These are clear. Keep the expected graduation date for the current degree; no other change is necessary.

## Experience

### Mobility Systems Company

- **“Improved diagnostic accuracy by 35%…”** Specify whether 35% is a relative increase or a percentage-point change, and give enough context to judge the evaluation (for example, what set or metric was used). “Validated tool-use trajectories” is specialized terminology; make sure the resume gives enough context for a general ML reviewer to understand what was validated.
- **“Designed a routing layer…”** Clarify what “reviewer disagreement” measures and whether the change from 14% to 6% is in percentage points or relative terms. Explain “in-scope signals” if that boundary is important to understanding your contribution.
- **“Trained the triage agent with GRPO…”** The comparison is useful, but state the evaluation conditions or scale so the latency and tool-call improvements are interpretable. Also confirm that “equal accuracy” is supported by a defined evaluation, rather than being an informal observation.
- **“Wrote the evaluation harness…”** This is a strong ownership-and-impact bullet. Clarify what counted as an accuracy regression and what release or decision the checks informed, if that context is not obvious to your target audience.
- **“Fine-tuned the adapter with assistant-only loss masking…”** This repeats the fine-tuning method in the first bullet and adds no measurable result, so remove it or consolidate its distinct information elsewhere. Also verify the technical claim: assistant-only loss masking typically excludes non-assistant tokens from the training loss, so be precise about how that enabled the model to reproduce tool outputs.
- **“Built a diagnostics triage branch…”** This is a substantial result, but the same backlog reduction appears again under the Research-Agent project. Keep the accomplishment in one place rather than counting it twice. In the retained entry, make the time window and backlog measurement clear enough to judge the 68% result.

### Eastern Robotics Co.

- **“Cut GPU memory…by 4x…”** Add context on how the reduction was measured and whether model quality or training behavior was maintained. Without that, a reviewer may wonder about the trade-off.
- **“Reduced p95 API latency…”** The baseline and target are helpful. Specify the load-test conditions or workload if they materially affect the result; otherwise, the latency numbers are hard to compare with other systems.
- **“Maintained the CI pipeline…and adds…”** Fix the tense inconsistency between “maintained” and “adds.” Also, explain what “shortened release cycles to 3 days” is measured against. “Maintained” alone understates your contribution if you also implemented the checks.
- **“Migrated 30 robot-fleet services…”** This communicates useful scale and technical work. Make the operational result more measurable if you can; “removing the nightly backlogs” does not show how often or how much dispatch was affected.

## Projects

### Agent Runtime Suite

- **“Drove adoption of AI-first engineering practices…”** This is broad and unsupported: “adoption,” “accelerating delivery,” and “improving outcomes” need concrete evidence. Add verifiable scope or impact, or remove the claim. As written, it is less persuasive than the technical bullets below it.
- **“Kept working context under 10K tokens…”** Explain what “working context” means and how the 100x growth was measured. Add the relevant comparison or quality constraint so the reader can tell whether the token reduction preserved useful performance.
- **“Separated concurrency pools…”** State the test conditions behind “50-way fan-out” and how you verified that deadlocks and lost results were eliminated. This will make the reliability improvement more credible.

### Research-Agent Evaluation Framework

- **“Integrated 8 citation and faithfulness metrics…”** Clarify your specific contribution and, if available, whether the metrics were used by others or adopted into the project. “Integrated” alone leaves the degree of ownership unclear.
- **“Showed the evaluator tracks injected degradation…”** This is a strong quantitative result. Clarify what the Kendall correlation was calculated against and how the 400+ trials were structured, so the statistic has a clear interpretation.
- **“Cut the pending-case backlog by two-thirds…”** This duplicates the diagnostics-branch achievement under your internship, including the same signals and result. Remove it from one section. If it was the same work, avoid presenting it as a separate project accomplishment.

## Skills

- **“Programming: Python, TypeScript, Git”** Git is a tool, not a programming language; categorize it accordingly.
- **“ML & Agents: PyTorch, LoRA, GRPO, agent evaluation, Kubernetes”** Kubernetes does not fit naturally in this category. Reorganize the skills into clearer groupings, and include other relevant technologies only if you can support them through your experience—for example, tools used for APIs, deployment, data handling, or testing.
- Check spelling consistency: **“penalises”** uses British spelling, while the resume otherwise appears oriented toward U.S. roles. Use one convention throughout.

## Highest-priority fixes

1. Remove the repeated fine-tuning bullet and the repeated backlog result.
2. Clarify what the percentage changes mean and how the results were measured.
3. Replace or substantiate the generic AI-first adoption claim.
4. Resolve the loss-masking/tool-output technical wording.
5. Correct the tense inconsistency and make the release-cycle comparison explicit.

## Reviewer 3

Your strongest material is the measured engineering work. The main changes are to remove two duplicate or misplaced bullets, replace one vague project bullet, and make several metrics easier to verify. I’m not rewriting the lines below—just identifying what to change and why.

### Contact and education
- **Contact line:** Make sure the code link goes directly to work you want an employer to see. The visible URL looks like a placeholder; use a live, professional link in the submitted version.
- **Both education entries:** The degree, institution, and dates are clear. Check that “Expected Jun 2026” is still accurate when you apply, and use one consistent location/date format throughout.

### Mobility Systems Company
- **“Improved diagnostic accuracy by 35%…”** Specify whether 35% is a relative improvement or a percentage-point increase, and name the baseline. This is a strong lead result, but “accuracy” needs enough context to be credible.
- **“Designed a routing layer…”** Clarify what “reviewer disagreement” measures and whether the 14% and 6% figures were measured on the same evaluation set. The improvement is compelling, but the reader needs to understand the comparison.
- **“Trained the triage agent with GRPO…”** Keep the baseline and equal-accuracy qualification. Consider identifying the evaluation size or workload if space allows; it would make the 18% and 5% gains more persuasive.
- **“Wrote the evaluation harness…”** This is useful evidence of release impact. Clarify what counted as an accuracy regression, if that is not obvious to the roles you’re targeting.
- **“Fine-tuned the adapter with assistant-only loss masking…”** Remove or substantially change this bullet. It repeats the first bullet’s method and could raise a technical question: assistant-only masking normally excludes tool outputs from the loss, so “learn to reproduce the tool outputs” may not describe what happened.
- **“Built a diagnostics triage branch…”** Keep this here. It gives the work scale and an operational outcome. If the backlog reduction could have had other causes, make sure you can substantiate the attribution in an interview.

### Eastern Robotics Co.
- **“Cut GPU memory…by 4x…”** Verify precisely what memory was measured and what else changed. A 4× reduction attributed solely to moving from FP32 to BF16 mixed precision may prompt scrutiny.
- **“Reduced p95 API latency…”** Strong bullet. Be ready to explain the load-test conditions and whether the 420 ms and 180 ms results used comparable traffic.
- **“Maintained the CI pipeline…”** Fix the tense inconsistency (“maintained” versus “adds”). Clarify whether the regression checks, rather than other changes, shortened the release cycle to three days.
- **“Migrated 30 robot-fleet services…”** Strong scope and outcome. If you have a measure of the backlog or dispatch delay before and after, it would make the impact more concrete.

### Projects
- **Agent Runtime Suite — “Drove adoption of AI-first engineering practices…”** Replace or remove this. It is broad and unmeasured, and it doesn’t tell the reader what you built or changed.
- **“Kept working context under 10K tokens…”** Define what was counted as working context and how the stress test was run. The “100x” claim is striking, so its measurement should be defensible.
- **“Separated concurrency pools…”** Strong technical bullet. Indicate how you verified the deadlocks and lost results were resolved, if you have a concise test or measurement.
- **Research-Agent Evaluation Framework — “Integrated 8…metrics…”** Specify your contribution’s boundary: whether you implemented metrics, integrated existing ones, or both. “Integrated” alone leaves that unclear.
- **“Showed the evaluator tracks injected degradation…”** Strong validation result. Clarify what was ranked for the Kendall correlation so readers can interpret the 0.89 figure.
- **“Cut the pending-case backlog…”** Remove this from this project. It duplicates the Mobility Systems result and appears unrelated to a research-agent evaluation framework; its placement could undermine trust in the rest of the resume.

### Skills
- **Programming:** Move Git out of the programming-languages grouping. Include only languages you would be comfortable using in an interview.
- **ML & Agents:** Group Kubernetes with infrastructure or tooling rather than ML methods. Check that the listed skills reflect hands-on work you can discuss, and prioritize those relevant to each application.

## Reviewer 4

4 errors, 9 important, 1 polish. Errors are marked [Error]; fix those first.

## Mobility Systems Company | Machine Learning Engineering Intern | Metro City, USA | Oct 2024 - May 2025

> Improved diagnostic accuracy by 35% after fine-tuning a domain adapter on validated tool-use trajectories with assistant-only loss masking.

**Problem**
[Important] The 35% accuracy gain is not interpretable without its comparison basis and evaluation set.

**Why**
A reader cannot tell whether 35% is a relative gain or a percentage-point increase. Without knowing the evaluation set, they also cannot judge what the result was measured on.

**How to change it**
Clarify whether the gain is relative or in percentage points, and add [evaluation set].

> Designed a routing layer that limits each of 3 specialist agents and an independent reviewer to their in-scope signals, cutting reviewer disagreement with specialist findings from 14% to 6%.
> Trained the triage agent with GRPO on grouped tool-use rollouts and a reward that penalises redundant calls, cutting tool calls per case 18% and end-to-end latency 5% versus the SFT baseline at equal accuracy.
> Wrote the evaluation harness the team used to compare 14 adapter checkpoints on accuracy, citation quality and latency, catching 2 accuracy regressions before release.
> Built a diagnostics triage branch for an industrial inspection system that screens 800+ sensor signals per case with ML-extracted features, cutting the pending-case backlog 68% in the eight weeks after launch.

**Problem**
[Important] The results in four bullets come after lengthy setup instead of leading.

**Why**
In each bullet, readers reach the measurable outcome only after the routing constraints, training details, checkpoint and metric list, or system description. Leading with the results would let readers assess the impact before parsing how the work was done.

**How to change it**
Move each quoted result to the opening of its bullet, then briefly describe the existing method or system details.

> Fine-tuned the adapter with assistant-only loss masking so the model would learn to reproduce the tool outputs more faithfully.

**Problem**
1. [Error] The two bullets report the same fine-tuning work as separate achievements.
2. [Error] Assistant-only loss masking does not directly train the model to reproduce tool outputs.

**Why**
1. Both describe fine-tuning the adapter with assistant-only loss masking, and the first bullet already reports an accuracy result. A reader may ask whether the second bullet describes a distinct training effort; without that distinction, it reads as duplicate space rather than additional evidence.
2. The masking excludes tool-output tokens from the loss, so the model receives no direct supervision to reproduce those outputs. It may learn from assistant responses that refer to tool outputs, but that is not the same as learning to reproduce the outputs themselves.

**How to change it**
1. Merge any genuinely distinct detail from the second bullet into the first, or remove the duplicate. Keep the second bullet separately only if you can clarify how the two efforts differed [how they differed].
2. Remove the claim about reproducing tool outputs, or name the separate training signal or evaluation that supports it [separate signal or evaluation].

## Eastern Robotics Co. | Junior Software Engineer | Metro City, Country | May 2023 - Jul 2024

> Cut GPU memory for fine-tuning the perception models by 4x by switching from FP32 to BF16 mixed precision.

**Problem**
[Error] The 4x GPU-memory reduction overstates what switching from FP32 to BF16 mixed precision alone establishes.

**Why**
BF16 values use half the memory of FP32 values, not one quarter. Mixed-precision fine-tuning may also retain some data in FP32, so total GPU-memory use does not generally fall by 4x from the precision change alone.

**How to change it**
Replace “by 4x” with [measured reduction] based on a before-and-after measurement for the same workload; otherwise say that switching to BF16 reduced memory use without specifying a factor.

> Maintained the CI pipeline for the perception team’s model releases and adds automated regression checks that shortened release cycles to 3 days.

**Problem**
1. [Important] The three-day release-cycle duration has no prior duration to show the size of the change.
2. [Polish] The past-tense role description shifts from “Maintained” to “adds,” leaving the timing of the regression checks unclear.

**Why**
1. Readers can see the new duration but cannot tell how much shorter it is than the old cycle. Without that baseline, they cannot judge the scale of the improvement.
2. The role ended in July 2024, but the present-tense verb makes the checks sound current. A reader may not know whether they were added during the role or afterward.

**How to change it**
1. Add the prior duration as [from X days/weeks] alongside “to 3 days,” if you can substantiate it.
2. Change “adds” to “added” so both verbs use past tense.

## Agent Runtime Suite | Owner | TypeScript, Multi-Agent Systems | Aug 2025 - Present

> Drove adoption of AI-first engineering practices across the platform, accelerating delivery and improving outcomes for downstream teams.

**Problem**
[Important] The claimed downstream impact does not identify what improved.

**Why**
Readers cannot tell what downstream teams gained or how the platform work changed their results. Without a specific outcome, they cannot judge the claimed impact.

**How to change it**
Replace the vague impact phrase with [what improved for downstream teams]; add [a delivery or outcome measure compared with its baseline] if available.

> Separated concurrency pools and gated cache writes on stream completion, removing nested-pool deadlocks and lost tool results under 50-way fan-out.

**Problem**
[Important] The claim that the changes removed deadlocks and lost tool results overstates what the described safeguards establish.

**Why**
Separate pools address particular starvation dependencies, not every deadlock pattern. Completion-gated cache writes can prevent partial output from being cached, but do not by themselves ensure results survive failures, cancellation, or retries.

**How to change it**
If tests verified the outcome, scope it to the tested workload and failure conditions; otherwise say the changes mitigated nested-pool deadlocks and partial-result caching.

## Research-Agent Evaluation Framework | Contributor | LLM Evaluation | Feb 2025 - Jul 2025

> Integrated 8 citation and faithfulness metrics into an open-source research-agent framework’s evaluation module.

**Problem**
1. [Important] The eight metrics are not identified, so the technical substance of the integration is unclear.
2. [Important] The integration is described without saying what it changed for the framework or its users.

**Why**
1. Readers can see how many metrics were added, but not what kinds of evaluation they support. One representative metric would make the implementation more concrete than the count alone.
2. Readers can see what you added, but not why it mattered. The metric count shows the size of the contribution, not its effect on the framework or its users.

**How to change it**
1. Replace the count or supplement it with the name of the most representative metric [metric name], if accurate.
2. Add the clearest outcome after the integration [evaluation result or user-facing improvement, compared with the prior module].

> Showed the evaluator tracks injected degradation with a Kendall correlation of 0.89 across 400+ report-level trials that removed citations, sources and claims.

**Problem**
1. [Important] The Kendall correlation does not identify what the evaluator’s scores are being compared against.
2. [Important] “Tracks injected degradation” does not say clearly what was measured.

**Why**
1. The correlation is useful evidence, but readers cannot tell what the evaluator’s agreement represents without a reference ranking or measure. The trial count shows test volume, not what the statistic is anchored to.
2. Readers may not know whether the evaluator tracked the injected degradation itself or the change in evaluator scores. That ambiguity makes it harder to understand what the correlation validates.

**How to change it**
1. Name the reference used for the correlation [reference ranking or measure].
2. Replace that phrase with “evaluator scores tracked deliberately introduced degradation.”

> “cutting the pending-case backlog 68% in the eight weeks after launch” / “Cut the pending-case backlog by two-thirds”

**Problem**
[Error] The evaluation-framework entry repeats a triage achievement already reported in the internship, with a different backlog-reduction figure.

**Why**
The evaluator implementation and validation results form a coherent project story, but the triage bullet shifts to an unrelated achievement. Readers may wonder whether it is the same work as the internship bullet and whether 68% and two-thirds describe the same result; that repetition and mismatch weaken the credibility of both entries.

**How to change it**
Remove the triage bullet from the evaluation-framework entry. If it is the same achievement, keep it only once and use one consistent figure [68% or two-thirds, whichever is accurate].

## What already works

- “Reduced p95 API latency from 420…”: Combines a measured performance gain with the implementation and a concrete regression safeguard.
- “Kept working context under 10K tokens…”: Pairs a clear technical result with specific stress-test conditions.
