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