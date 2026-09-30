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