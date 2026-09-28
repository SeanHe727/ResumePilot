Your strongest material is the measured engineering and evaluation work. The main fixes are **two incorrect percentage claims, a few technical claims that need checking, and bullets whose impact is hard to verify**. I’m commenting on each line without rewriting it.

### Header and education
- **Contact line:** Use a real, working code or portfolio link on the submitted version, and check that it leads directly to work you want reviewed. The current URL looks like a placeholder.
- **M.S. line:** Keep the expected graduation date, but verify that the degree name matches the university’s official wording.
- **B.S. line:** No substantive change needed. Use the same date and location formatting as the M.S. line.

### Experience
**Eastern Robotics Co.** — Move this role **below the 2024–25 internship** so experience is in reverse chronological order.

- **Dashboards/on-call:** Clarify whether you owned the dashboards, managed the rotation, or served in it. “Owned … the on-call rotation” is ambiguous; add an outcome if you have one.
- **API latency:** Strong bullet. Check that the 420 ms and 180 ms figures come from comparable tests, and keep the build-failing test detail only if it remains in place.
- **CI pipeline:** Strong bullet. Make clear whether the release-cycle improvement is measured across comparable releases and attributable to these checks.
- **Fleet migration:** Split or narrow this bullet. Migration, logging-library work, onboarding, and on-call compete for attention, making it difficult to see which work eliminated the backlog.

**Mobility Systems Company**
- **Triage branch:** Specify what the 68% backlog reduction measures and, if possible, distinguish your contribution from other launch changes.
- **Diagnostic accuracy:** State whether 71% to 79% is an **8-percentage-point** gain; it is not an 8% relative gain. Briefly clarify what “diagnostic accuracy” means for these cases.
- **Edge inference:** Verify the causal claim. Dynamic batching can increase latency for an isolated request, so distinguish the effect of INT8 from batching and define the load conditions behind the p95 comparison.
- **GRPO latency:** This is dense relative to its 5% result. Prioritize the mechanism that produced the measured end-to-end improvement, and identify the baseline.
- **GRPO stability:** Check this against the preceding bullet: one scored rollout per prompt per update appears at odds with *grouped* rollouts and group-relative optimization. Clarify the sampling scheme and give a measurable definition of “stabilised,” or remove the bullet if you cannot substantiate it.
- **Runbook:** Good evidence of operational handoff. If space is tight, this is less distinctive than your quantified work; otherwise, add evidence of use beyond adoption if available.

### Projects
**Agent Runtime Suite**
- **Adoption:** Replace or remove this bullet. It claims faster delivery and better outcomes without saying what you did or how either was measured.
- **Tool-call latency:** Correct the arithmetic: 900 ms to 600 ms is a **33% latency reduction**, not 50%. Verify that caching and answer reuse are both reflected in the measurement.
- **Task completion:** Correct the unit: 71% to 83% is **12 percentage points** (about 17% relative improvement), not a 12% relative increase. Specify the benchmark size or evaluation conditions if space permits.

**Research-Agent Evaluation Framework**
- **Eight metrics:** Strong bullet. Make sure “upstreamed” and “default benchmark for every release” accurately describe the merged code and current release process.
- **Correlation:** Identify what was correlated with injected degradation and, if relevant, whether trials are independent. That makes the 0.89 result easier to interpret.
- **Pipeline defects:** Clarify your role in the fixes. “Each was fixed upstream” does not say whether you submitted fixes or supplied diagnoses others used.

### Skills and presentation
- **Programming:** Move Git out of “Programming”; it is a tool, not a programming language.
- **ML & Agents:** Move Kubernetes to infrastructure/tooling. Keep GRPO and LoRA only if you can explain the specific implementation and results in an interview.
- **Line wrapping:** Check the final PDF for awkward breaks such as “on-” at the end of a line; formatting can make an otherwise strong bullet harder to scan.