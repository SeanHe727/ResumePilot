Your resume has strong, specific results. The biggest improvements are to fix two numerical or technical inconsistencies, split an overloaded bullet, and make a few claims easier to verify. I’ll refer to bullets by position rather than rewrite them.

### Header and education
- **Contact line:** Make sure the code link goes directly to your strongest relevant work, rather than a general profile. Add LinkedIn only if it strengthens the application.
- **M.S. line:** Keep the expected graduation date clearly marked. If you’re applying for internships, consider adding relevant coursework only if it fills a gap the experience section doesn’t cover.
- **B.S. line:** No essential change. Use consistent date punctuation and location formatting across both entries.

### Experience
**Eastern Robotics Co.**
- **Placement:** Move this role below the later Mobility Systems internship so experience reads in reverse chronological order.
- **Bullet 1 (dashboards):** Clarify how detection time was measured and, if accurate, whether the dashboard change alone produced the reduction. This makes the causal claim more credible.
- **Bullet 2 (API latency):** Strong bullet. Specify the load-test conditions if space permits; p95 figures are more persuasive with a clear workload.
- **Bullet 3 (CI):** Fix the tense shift from past to present. Clarify what the release cycle was *before* it became three days.
- **Bullet 4 (migration):** Split or narrow this bullet. The migration, logging rewrite, onboarding, and on-call work compete for attention, and the reader cannot tell which change eliminated the backlogs.

**Mobility Systems Company**
- **Bullet 1 (triage):** Strong outcome. Clarify what counted as a pending case and whether the 68% drop was measured against the backlog at launch; that will make the comparison unambiguous.
- **Bullet 2 (accuracy):** Identify the accuracy measure and what the 1,200 held-out cases represented. Keep the training details only if the target roles value them.
- **Bullet 3 (edge inference):** Explain the test conditions behind “single-request” latency and dynamic batching. Batching generally depends on concurrent requests, so the current mechanism and measurement appear at odds.
- **Bullet 4 (GRPO):** Make clear whether the 5% figure is *deployed inference* latency or another end-to-end measure, and how training produced that change. The methods take more space than the result currently justifies.
- **Bullet 5 (GRPO stability):** Recheck this technically before submitting. Standard GRPO relies on comparing multiple rollouts within a prompt group; one scored rollout per prompt appears inconsistent with that mechanism. State the actual grouping and update procedure, and give a measurable indication of “stabilised.”
- **Bullet 6 (runbook):** Clarify your contribution beyond documentation—for example, whether you defined the rules or documented agreed rules. That distinction helps establish ownership.

### Projects
**Agent Runtime Suite**
- **Heading:** “Owner” is broad; specify your scope if you owned a component rather than the entire suite.
- **Bullet 1 (adoption):** Replace or remove this unless you can substantiate adoption, delivery speed, and downstream outcomes. It is much less concrete than the other project bullets.
- **Bullet 2 (latency):** Correct the arithmetic: 900 ms to 600 ms is a **33% latency reduction**, not 50%.
- **Bullet 3 (completion rate):** Call 71% to 83% a **12-percentage-point increase**, not an unqualified 12% increase. Briefly identify the benchmark if it is not publicly recognizable.

**Research-Agent Evaluation Framework**
- **Heading:** Link to the upstream project or contributions if public; “Contributor” becomes more convincing when verifiable.
- **Bullet 1 (metrics):** Specify whether you designed the metrics, implemented existing definitions, or both. Those imply different levels of contribution.
- **Bullet 2 (correlation):** Name the correlation target—what evaluator scores were ranked against—so 0.89 has a clear interpretation.
- **Bullet 3 (defects):** Clarify whether you fixed the defects or diagnosed them for others to fix. “Fixed upstream” leaves your role uncertain.

### Skills
- **Programming:** Move Git out of “Programming”; it is a development tool, not a language.
- **ML & Agents:** Prioritize skills you can discuss in depth and tailor this line to each role. In particular, resolve the GRPO bullet before listing GRPO as a skill.

**Prioritize before applying:** correct the two project numbers, resolve the GRPO and batching explanations, then reorder the roles and tighten the overloaded migration bullet.