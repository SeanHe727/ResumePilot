## Highest-priority fixes

1. **Put Experience in reverse chronological order.** The Mobility Systems internship (Oct 2024–May 2025) should appear before the Eastern Robotics role (Aug 2022–Jul 2024). Reverse chronology is the expected format and makes your most recent work easier to find.
2. **Correct the Agent Runtime Suite latency math.** A drop from 900 ms to 600 ms is a **33.3% reduction**, not 50%. The inconsistency could undermine confidence in the other metrics.
3. **Clarify the task-completion improvement.** Going from 71% to 83% is a **12-percentage-point increase**, not a 12% relative increase. Label the change precisely.
4. **Replace or substantiate the generic Agent Runtime Suite bullet.** “Accelerating delivery and improving outcomes” gives no evidence of impact. Quantify the adoption or outcome, or remove the bullet so it doesn’t dilute the stronger results.
5. **Separate the overloaded Eastern Robotics bullet.** It combines a migration, a logging-library rewrite, onboarding, on-call responsibilities, and a backlog outcome. The scope and causal link are hard to follow; prioritize the work that best supports your target roles and make the impact attributable.

## Section and presentation changes

- **Make the context of each project clear.** For the Agent Runtime Suite, clarify whether it was personal, academic, open-source, or part of a job. “Owner” can otherwise be difficult to interpret.
- **Check whether Education belongs above Experience.** Keeping it first is reasonable while you’re pursuing the M.S.; for roles emphasizing your professional experience, consider putting Experience first.
- **Ensure the contact link is real, clickable, and direct.** If the `example.com` address is literal rather than anonymized, replace it before sending the resume.
- **Check PDF text extraction.** The split “on-/call” may be harmless visual wrapping, but make sure it isn’t a manually inserted hyphen or a line break that produces malformed text in ATS parsing.
- **Keep punctuation and date formatting consistent.** Your bullets currently omit ending periods, which is fine if applied consistently. The date style is also consistent.
- **Expand or contextualize specialized abbreviations where your audience may not know them.** GRPO, SFT, INT8, and “assistant-only loss masking” are precise but may be opaque outside LLM-focused roles. Keep the technical detail where it’s relevant; make sure the key contribution remains understandable.

## Experience

### Eastern Robotics Co.

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify what “owned” involved and what changed because of your work—such as reliability, incident response, or alert quality—if you can support it with evidence. Also clarify whether this on-call rotation is the same one mentioned in the later migration bullet; the overlap is ambiguous.
- **Latency bullet:** This is one of your strongest bullets. If space allows, specify the workload or test conditions behind the p95 comparison so readers can judge how comparable the before-and-after figures are. The build-failing threshold is useful evidence of durable quality control.
- **CI pipeline bullet:** Clarify what “release cycles” measures and how the automated checks contributed to the change from two weeks to three days. This will make the impressive result easier to interpret and attribute.
- **Migration/logging/onboarding/on-call bullet:** Beyond splitting or prioritizing it, make the scale and result of the migration easier to see. “Removed the nightly backlogs” is a useful outcome, but it would be stronger with a measure of the backlog or dispatch impact if you have one. Also distinguish the weekend rotation from the earlier on-call reference if they are different.

### Mobility Systems Company

- **Diagnostics-triage bullet:** Clarify what the triage branch does and what the 68% backlog reduction is measured against. “800+ sensor signals per case” is strong scope, but make sure “case” and the system’s role in screening those signals are clear to a reader outside this domain.
- **Accuracy bullet:** State the metric precisely and, if possible, clarify how the held-out set was constructed and what “accuracy” means for this task. The 71% to 79% change is an eight-percentage-point gain; avoid implying it is an eight-percent relative gain. The technical method is valuable for ML roles, but “assistant-only loss masking” may need context for broader audiences.
- **Edge-inference bullet:** “Single-request” and “dynamic batching” can sound contradictory. Clarify the workload and concurrency conditions under which you measured latency, and include the comparison baseline if it isn’t obvious from the surrounding context.
- **GRPO optimization bullet:** Fix the sentence’s unclear grammatical subject: as written, the opening phrase does not clearly say what reduced latency. Also identify what “end-to-end latency” covers and what it was compared against. A 5% result may be worth retaining, but it should be clear and measurable.
- **GRPO stability bullet:** This describes a method, but not what improved or how you assessed stability. Add evidence of the effect if available; otherwise, consider whether the implementation detail earns its space. Sampling exactly one trajectory per prompt may surprise technical readers, so make the reason and result clear.
- **Runbook bullet:** This is a useful operational contribution, but clarify what “them” refers to if the bullet is read on its own. If you know the number of reviewers or cases covered, that could help convey the runbook’s reach.

## Projects

### Agent Runtime Suite

- **Adoption/practices bullet:** As written, it is generic and unsupported. Either provide evidence for the adoption and delivery claims or remove it; the other bullets demonstrate more concrete impact.
- **Latency bullet:** Correct the percentage as noted above, and ensure the before-and-after p95 figures use the same workload and measurement setup.
- **Task-completion bullet:** Label the change as percentage points, and clarify the benchmark’s scope or size if that information is available. Benchmark results are more persuasive when readers can judge how representative they are.

### Research-Agent Evaluation Framework

- **Metrics bullet:** Clarify whether you created, adapted, or contributed to the eight metrics, and what “upstreamed” means in terms of acceptance or release. The default-benchmark adoption is a strong result, so ensure its status is still accurate.
- **Correlation bullet:** Specify that 0.89 is a Kendall correlation measure, and clarify what “tracks injected degradation” means in the evaluation. This will help readers understand what the number demonstrates without overstating what correlation proves.
- **Defects bullet:** “Structural pipeline defects” and “layered instrumentation” are vague. Make the defects and your role in their resolution more concrete, or trim this bullet if the other two already cover the contribution sufficiently.

## Skills

- **Reorganize the categories.** Kubernetes does not fit naturally under “ML & Agents”; group it with infrastructure or deployment skills if you keep it.
- **Add relevant tools and technologies demonstrated in the experience bullets**, but only if you used them and can discuss them in an interview. The current list omits the specific systems behind several accomplishments, which makes the skills section less useful for matching roles.
- **Keep skill claims supported by the resume.** For example, Kubernetes appears only in Skills, while the work bullets don’t show how you used it. Add evidence elsewhere if it is important to the roles you’re targeting, or remove it if it isn’t.