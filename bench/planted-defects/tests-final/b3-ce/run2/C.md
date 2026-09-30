Your strongest material is the measured engineering and ML work. The main changes are to fix two numerical errors, resolve a technical inconsistency, and make a few claims easier to verify. I’ll point to each line without rewriting it.

### Header and education
- **Contact line:** Check that the code link leads to work you want employers to evaluate. If the phone number, email, or URL are placeholders, replace them before applying.
- **M.S. line:** Keep “Expected” only while June 2026 is still a future graduation date; update it once your status changes.
- **B.S. line:** No substantive change needed. Use the same date and location formatting as the M.S. line.

### Experience
- **Section order:** Put the 2024–2025 internship above the 2023–2024 role. Reverse chronology makes your most recent work easier to find.

**Eastern Robotics Co.**
- **Diagnostics dashboards:** Keep the 40-to-12-minute result. Specify how incident detection time was measured if the number comes from only a subset of incidents.
- **API latency:** Strong bullet. Clarify the load-test conditions if the 420 ms and 180 ms figures could reflect different traffic or hardware.
- **CI pipeline:** Change “adds” to past tense. Add the release-cycle baseline: “shortened … to 3 days” does not show how much it improved.
- **Fleet migration:** Split or narrow this bullet. Migration, logging, onboarding, and on-call are separate contributions, and the backlog outcome is hard to attribute to all of them. Make clear which change removed the backlogs.

**Mobility Systems Company**
- **Triage branch:** Strong outcome. Clarify whether the 68% backlog reduction was measured against the backlog at launch or another baseline.
- **Diagnostic accuracy:** Keep the held-out sample size and 71%-to-79% result. State your specific contribution to the adapter and training data if others built the surrounding system.
- **Edge inference:** Explain how *dynamic batching* reduced latency for a **single-request** measurement; readers may see a contradiction unless the measurement involved concurrent traffic or another batching mechanism.
- **GRPO latency:** Identify the baseline for the 5% improvement and how training for accuracy, citations, and call count produced a latency gain. The current line lists methods more prominently than your contribution.
- **GRPO stability:** Recheck this claim before using it. Standard GRPO relies on relative rewards across multiple rollouts per prompt; one scored trajectory per prompt needs an explanation of how advantages were computed. Also say what measurable failure “stabilised” means.
- **Runbook:** Good evidence of adoption. Clarify whether you authored the rules, documented existing rules, or both.

### Projects
**Agent Runtime Suite**
- **AI-first practices:** Replace this broad claim with a specific change and observable result, or remove it. “Accelerating delivery” and “improving outcomes” are not substantiated here.
- **Tool-call latency:** Correct the math: 900 ms to 600 ms is a **33% latency reduction**, not 50%. Check that reused sub-agent answers are included in the measured tool-call path.
- **Task completion:** Distinguish **12 percentage points** (71% to 83%) from a 12% relative increase. Briefly establish what the benchmark covers so the result has context.

**Research-Agent Evaluation Framework**
- **Metrics upstreamed:** Strong bullet. Confirm that all eight metrics run by default on every release; otherwise narrow that claim.
- **Kendall correlation:** Identify the statistic as Kendall’s tau if that is what you calculated, and clarify what scores were correlated across the trials.
- **Pipeline defects:** Clarify your role in the fixes—diagnosis only or code contributions too. “Each was fixed upstream” otherwise leaves your contribution ambiguous.

### Skills
- **Programming:** Move Git out of “Programming”; it is a development tool. Keep Python and TypeScript prominent if they match your target roles.
- **ML & Agents:** Keep only methods you can explain in an interview. In particular, resolve the GRPO bullet above before presenting GRPO as a skill.