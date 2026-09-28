Your strongest material is the measured engineering work. The main changes are to remove two duplicated accomplishments, fix one potentially misleading technical claim, and give the metrics enough context to be credible. I’ll refer to each bullet by its opening words rather than rewrite it.

### Header and education
- **Name and contact line:** Make sure the code URL resolves to work you want a recruiter to inspect. If it is a placeholder, replace or remove it; a broken link is worse than no link.
- **M.S. line:** Update “Expected Jun 2026” when the degree is conferred. Until then, keep the expected date unambiguous.
- **B.S. line:** Check that the location and degree names match your official records. Otherwise, no substantive change needed.

### Mobility Systems Company
- **“Improved diagnostic accuracy by 35%…”** Specify whether 35% is a relative increase or percentage-point gain, and identify the evaluation set or baseline. Those details determine how impressive—and believable—the result is.
- **“Designed a routing layer…”** Clarify what “reviewer disagreement” measures and whether 14% to 6% is a change in disagreement *rate*. Also explain the reviewer’s independence if the routing layer restricts what it can see.
- **“Trained the triage agent with GRPO…”** State the comparison conditions for “equal accuracy” if space permits. That makes the tool-call and latency reductions easier to trust.
- **“Wrote the evaluation harness…”** Clarify the release decision the harness supported. The two caught regressions are a strong result, but readers should understand how checkpoint testing prevented them from shipping.
- **“Fine-tuned the adapter with assistant-only loss masking…”** Remove this bullet. It repeats the first bullet, and the claim about learning to reproduce *tool outputs* appears at odds with assistant-only loss masking. If that distinction is important, verify the technical description before retaining it anywhere.
- **“Built a diagnostics triage branch…”** Keep this accomplishment here and delete its duplicate from Projects. Clarify how the 68% backlog reduction was attributed to the branch, rather than simply occurring in the eight weeks after launch.

### Eastern Robotics Co.
- **“Cut GPU memory…by 4x…”** Verify the cause. Moving from FP32 to BF16 alone does not generally explain a 4× reduction; name any other changes involved, or narrow the attribution.
- **“Reduced p95 API latency…”** Keep the before/after figures. Specify the load-test conditions if they matter to the comparison, and distinguish the measured improvement from the 200 ms CI threshold.
- **“Maintained the CI pipeline…”** Fix the tense mismatch (“Maintained” versus “adds”). Clarify whether the regression checks caused the three-day release cycle or were one contributing change.
- **“Migrated 30 robot-fleet services…”** Strong bullet. If you have it, quantify the backlog or dispatch improvement; otherwise, the operational outcome is clear.

### Projects
**Agent Runtime Suite**
- **Project heading:** Make the repository accessible from the header or project entry, if public. “Owner” is less informative than a link to the work.
- **“Drove adoption of AI-first engineering practices…”** Remove unless you can name concrete practices, your role, and a measured result. It is much vaguer than the two technical bullets beneath it.
- **“Kept working context under 10K tokens…”** Define what the 100× comparison measures and what the stress test demonstrates. Otherwise, it may read as an impressive-sounding synthetic benchmark without a practical outcome.
- **“Separated concurrency pools…”** Keep it. If space allows, say how you verified the deadlocks and lost results were resolved under 50-way fan-out.

**Research-Agent Evaluation Framework**
- **Project heading:** Link the contribution if it is public; that helps substantiate an open-source role.
- **“Integrated 8 citation and faithfulness metrics…”** Identify what you contributed beyond wiring existing metrics into the module, if applicable.
- **“Showed the evaluator tracks injected degradation…”** Specify what the Kendall correlation compares and how the 400+ trials were constructed. The result is compelling once its meaning is clear.
- **“Cut the pending-case backlog…”** Delete it. It duplicates the Mobility Systems accomplishment and does not belong under this evaluation project.

### Skills and final pass
- **Programming line:** Put Git with tooling rather than programming languages, or remove it if space is tight.
- **ML & Agents line:** Group Kubernetes separately from ML methods. Keep only skills you could discuss in depth; the experience bullets already support several of them.
- **Consistency:** Use one spelling convention throughout (for example, “penalises” currently differs from the otherwise US-oriented presentation), one date style, and consistent past tense for completed roles.