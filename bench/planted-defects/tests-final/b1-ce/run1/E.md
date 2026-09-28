## Overall assessment

This is a strong software/ML engineering resume: it has concrete systems work, measurable outcomes, and evidence of both implementation and operational impact. The most important fixes are to **correct a numerical inconsistency, clarify a few technically dense or ambiguous claims, and give each bullet a clearer focus**.

I’m inferring a target such as **ML engineering or agent-systems engineering**; there’s no job description to assess against. I’ve followed your request not to rewrite your lines or provide sample rewrites.

## Highest-priority changes

1. **Fix the Agent Runtime Suite latency math.** A reduction from 900 ms to 600 ms is 300 ms, or **33.3%**, not 50%. Verify which figures are correct and make them consistent.
2. **Clarify the GRPO claims.** The single-rollout bullet may be hard for a technical reader to reconcile with the grouped rollouts and group-relative training described in the preceding bullet. Explain what “one rollout per prompt” means in the actual training setup and what you observed as “stability.”
3. **Make the internship bullets stand alone and easier to evaluate.** One is a sentence fragment, and several rely on specialized terms without enough context about the comparison, workload, or measurement.
4. **Reorder experience by date.** Put the 2024–2025 internship above the 2022–2024 role so the most recent experience appears first.
5. **Cut or substantiate the broad Agent Runtime Suite claim.** Its first bullet asserts broad adoption and improved outcomes without saying what changed or how the outcome was established.

## Section-by-section changes

### Contact and education

- **Portfolio URL:** If `example.com/code/jordan-lee` is literal rather than anonymized, replace it with a working portfolio, code profile, or project link. A placeholder-style URL won’t give a reader a way to inspect your work.
- **Education order:** Keeping education first is reasonable while you’re pursuing the master’s degree. If you’re applying to roles where your engineering experience is the stronger evidence, consider putting experience first instead.
- **Expected graduation date:** Keep the expected date clearly identified as expected, as it is now, and update it if that status or date changes.

### Experience order

- **Move Mobility Systems Company above Eastern Robotics Co.** The internship is more recent, so this makes the section’s chronology easier to scan.

### Eastern Robotics Co.

- **“Owned the diagnostics service’s monitoring dashboards…”** Clarify what you owned: dashboard maintenance, design, operational monitoring, or some combination. The current wording also makes your relationship to the on-call rotation unclear. This matters because “owned the rotation” could imply a different level of responsibility than supporting the people who used the dashboards.
- **Latency reduction and build threshold:** Keep this; it is one of the clearest bullets. If space allows, specify the load-test conditions or comparison basis so readers can interpret the p95 change. The 200 ms build threshold and 180 ms result are consistent, but the testing context would make them more meaningful.
- **CI pipeline and release-cycle reduction:** Clarify the connection between the regression checks you added and the reduction from two weeks to three days. Also make sure the action verb reflects your actual contribution: maintaining a pipeline and introducing improvements are different claims.
- **Fleet migration / logging / onboarding / on-call bullet:** Separate or otherwise distinguish the migration, logging-library work, onboarding, and on-call responsibilities. As written, it packs several contributions into one bullet, and the final clause does not clearly show which work removed the nightly backlog. Preserve that outcome, but make its cause and your role clear.

### Mobility Systems Company

- **Triage branch and backlog reduction:** Explain what the triage branch did in terms a reader can understand without knowing your internal terminology. Clarify what the 68% backlog reduction compares, and whether it was measured over those eight weeks against a defined starting point. “800+ sensor signals per case” is useful scope; keep it if it is accurate and relevant.
- **Accuracy improvement:** Identify what “diagnostic accuracy” measures and what the 71% baseline represents. The held-out case count is helpful. The technical details about the domain adapter and loss masking are valuable for an ML audience, but make sure they don’t obscure the result and that you can explain them clearly in an interview.
- **Edge-inference latency:** Clarify the workload and comparison behind the 40% p95 reduction. “Single-request” and “dynamic batching” may prompt questions about whether requests were actually batched under the measured conditions.
- **GRPO bullet beginning “Using grouped tool-use rollouts…”:** This is a sentence fragment; make it a complete, self-contained bullet. Also clarify what “end-to-end latency” covers, what it was compared against, and how the reward components relate to the latency result.
- **Single-rollout GRPO bullet:** Explain what stability means in this context and what changed in the training setup. In particular, reconcile one scored trajectory per prompt with the grouped rollouts and GRPO loop mentioned in the preceding bullet. This is a request for technical clarity, not a conclusion that the method is incorrect.
- **Runbook bullet:** Keep this. It shows a useful operational outcome, not just documentation. If you can, make the adoption or use of the runbook more concrete; don’t add adoption claims beyond what you can support.

### Projects

#### Agent Runtime Suite

- **Project context:** Make clear what this project is—such as an independent project, a work project, or an open-source contribution—if that context is not obvious elsewhere. If your portfolio link includes the project, make the link easy to find.
- **“Drove adoption of AI-first engineering practices…”** This is the least specific bullet in the resume. It makes broad claims about platform-wide adoption, faster delivery, and downstream outcomes without naming the practice or giving evidence. Replace the underlying content with a concrete contribution and supportable outcome, or remove the bullet if you can’t substantiate it.
- **Tool-call latency:** Correct the percentage or the before-and-after values; they currently conflict. Also clarify the measurement conditions for p95 latency so the comparison is interpretable.
- **Task-completion rate:** “Raised … by 12% … from 71% to 83%” is ambiguous: those figures show a **12-percentage-point** increase, not a 12% relative increase. Verify the figures and describe the change accurately. Include enough about the benchmark to show what the result represents.

#### Research-Agent Evaluation Framework

- **Metrics contributed:** This is strong evidence of adoption. Name the framework or link to the repository/PRs if possible, so a reader can verify the contribution. Make sure “metrics” accurately describes what you contributed.
- **Kendall correlation:** Clarify what two quantities were correlated—for example, what evaluator result was compared with what measure of injected degradation—and which Kendall statistic you report, if known. “Tracks injected degradation” is promising but leaves the actual evaluation method unclear.
- **Three pipeline defects:** Make the connection between each defect category and the affected part of the pipeline clearer. “Each was fixed upstream” is a useful result; a link to the relevant changes would strengthen it if available.

### Skills

- **Kubernetes:** It appears in the skills list but isn’t demonstrated in the experience or projects shown. If it’s relevant to the roles you’re targeting, consider adding a concrete example elsewhere; otherwise, consider omitting it. A listed skill isn’t automatically suspect, but readers have less evidence for it here.
- **Skills coverage:** Consider whether important tools or methods used in the bullets should be listed for quick scanning—but only include skills you can substantiate and want to be evaluated on. Keep the list selective rather than adding every technology mentioned.

## What to preserve

- Your measured engineering outcomes, especially the latency, release-cycle, backlog, and benchmark results.
- The combination of ML work with production-facing concerns such as inference latency, on-call operations, CI, and runbooks.
- The evidence of upstream adoption and fixed defects in the evaluation-framework project.
- The concrete scope figures, such as the held-out cases, sensor signals, and fleet services, provided you can explain how each was counted.

This review is based on the pasted text. I haven’t assessed the original file’s layout, visual hierarchy, or document-parsing behavior. If any contact details or other content were anonymized for this review, ignore feedback that depends on those details.