Your strongest material is the measured engineering work. The main changes are to correct two metric claims, resolve two technical contradictions, and make a few broad bullets more specific. I’ll go line by line without rewriting them.

### Header and education
- **Contact line:** Check that the code link leads directly to work you want reviewed and that all contact details are current. A reviewer may use the link before reading the projects.
- **Both education lines:** Keep them. Check that the expected graduation date is still accurate.

### Experience
**Eastern Robotics Co.**
- **Diagnostics dashboards:** Clarify what changed because you owned the dashboards or supported on-call. Ownership is useful, but the outcome is less clear than in your other bullets.
- **API latency:** Keep. The before-and-after figures, mechanism, and regression guard make this strong. Make sure the 200 ms build threshold uses the same p95 workload as the 420-to-180 ms comparison.
- **CI pipeline:** Keep. Clarify whether the two-week-to-three-day figure measures the full release cycle or just the portion affected by your checks; that makes the attribution credible.
- **Fleet migration:** Split or narrow this. It combines migration, logging-library work, onboarding, on-call, and backlog removal, so the reader cannot tell which action produced the result.

**Mobility Systems Company**
- **Diagnostics triage:** Keep. Specify how the 68% backlog reduction was measured and whether the branch was the principal cause; this is a substantial outcome worth making defensible.
- **Diagnostic accuracy:** Keep. Name the accuracy metric or decision task if it is not obvious from context. Retain the training details only if they matter to the roles you’re targeting.
- **Edge inference:** Recheck the explanation. Dynamic batching generally helps throughput but can add waiting time to a *single* request. Clarify the workload and which change produced the 40% p95 reduction.
- **GRPO latency:** Identify whether the 5% is inference, tool-use, or another end-to-end latency measure, and how the training change affected it. The long method description currently obscures a comparatively small outcome.
- **GRPO stability:** Verify and clarify the method. Standard group-relative optimization depends on comparisons among rollouts; “a single rollout per prompt” appears at odds with that description unless you used a different baseline or grouping scheme. Also state what evidence showed improved stability.
- **Runbook:** Keep. If you have evidence that adoption improved review consistency or response time, add it; otherwise it is still a clear ownership bullet.

### Projects
**Agent Runtime Suite**
- **AI-first practices:** Replace or remove this claim. “Accelerating delivery” and “improving outcomes” have no specific action or evidence, unlike your other bullets.
- **Tool-call latency:** Correct the arithmetic. Going from 900 ms to 600 ms is a **33% reduction**, not 50%. Also check whether cached results and reused answers are included in the same benchmark.
- **Task completion:** Change the way the gain is described: 71% to 83% is **12 percentage points**, not a 12% relative increase. State which measure you intend.

**Research-Agent Evaluation Framework**
- **Eight metrics:** Keep. Confirm that all eight run in the default benchmark *for every release*, since that is a precise and valuable adoption claim.
- **Evaluator correlation:** Keep, but identify what was ranked in the Kendall-correlation calculation. That helps readers understand what the 0.89 validates.
- **Pipeline defects:** Specify the practical effect of the fixes, if known. Finding and getting three defects fixed upstream is good; the current line does not say why those fixes mattered.

### Skills and ordering
- **Skills:** Move Git out of “Programming” and Kubernetes out of “ML & Agents”; neither fits its current label. Prioritize skills you used in the experience and projects above.
- **Experience order:** Put the 2024–2025 internship before the 2022–2024 role for consistent reverse chronology.