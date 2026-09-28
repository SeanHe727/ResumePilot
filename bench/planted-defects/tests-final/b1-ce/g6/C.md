Your strongest material is the measured engineering and ML work. The main fixes are **two incorrect or ambiguous metrics, one potentially inconsistent training claim, and several bullets that obscure your contribution**. I’ll go line by line without rewriting them.

## Header and education
- **Contact line:** Make sure the code link goes directly to relevant, accessible work. Add a LinkedIn link only if it strengthens the application.
- **Both education lines:** Keep the date and location format consistent with the rest of the résumé. The expected graduation date is useful; retain it.

## Experience
**Ordering:** Put the Mobility Systems internship above Eastern Robotics so experience reads in reverse chronological order.

### Eastern Robotics Co.
1. **Dashboards/on-call:** Clarify what you owned in the on-call rotation versus the dashboards, and state the operational result if you can. The current phrasing makes the scope of “owned” unclear.
2. **API latency:** Keep the before-and-after numbers and the build gate. Specify the load-test conditions if they matter to interpreting p95; otherwise this is strong.
3. **CI pipeline:** Clarify your contribution to the reduction in release time—especially whether the regression checks were the principal cause. That makes the impact more credible.
4. **Fleet migration:** Separate or prioritize the migration, logging-library work, onboarding, and on-call duties. There are too many distinct contributions in one bullet, so the backlog result is hard to attribute.

### Mobility Systems Company
1. **Triage branch:** Clarify what “triage branch” is and what the system did with the ML-extracted features. The backlog reduction is strong, but the mechanism is hard to understand.
2. **Diagnostic accuracy:** Identify the accuracy measure and, if useful, the baseline being compared. Also make clear that the held-out cases were separate from training and validation; that supports the result.
3. **Edge inference:** Reconcile “single-request” latency with “dynamic batching,” which usually benefits concurrent requests. Specify the workload under which p95 fell so the claim is interpretable.
4. **GRPO latency:** State what changed in the deployed system to reduce end-to-end latency. The training-method detail dominates the bullet, while its connection to the 5% result is unclear.
5. **Sparse-reward GRPO:** Check this claim carefully. Standard GRPO relies on comparing a *group* of rollouts; “a single rollout per prompt” and “exactly one scored trajectory” may sound incompatible with that method. Explain the grouping or update scheme accurately, or remove the GRPO label if it does not apply.
6. **Runbook:** Keep the adoption outcome, but clarify whether you defined the rules or documented existing ones. That distinction establishes your contribution.

## Projects
### Agent Runtime Suite
1. **AI-first practices:** Replace the broad claims with specific work and an observable outcome, or remove the bullet. It is much less concrete than the other project bullets.
2. **Tool-call latency:** Correct the math: 900 ms to 600 ms is a **33% reduction**, not 50%. Also clarify whether caching and answer reuse both affect the measured tool-call latency.
3. **Task completion:** Describe the gain as **12 percentage points**, not an unqualified 12%, since it rose from 71% to 83%. Define the benchmark briefly if it is not publicly recognizable.

### Research-Agent Evaluation Framework
1. **Upstreamed metrics:** Strong bullet. Verify that all eight metrics run in the default benchmark *for every release*; narrow that claim if the configuration varies.
2. **Evaluator correlation:** Specify what the Kendall correlation compares and, if space permits, why the injected-degradation trials are a meaningful validity test. The number alone is difficult to interpret.
3. **Pipeline defects:** Clarify whether you diagnosed the defects, contributed fixes, or both. “Fixed upstream” leaves your role in the resolution ambiguous.

## Skills
- Move **Git** out of “Programming” and **Kubernetes** out of “ML & Agents”; those category labels are inaccurate.
- Keep skills you can discuss confidently, and consider foregrounding the ones most relevant to the roles you’re targeting.