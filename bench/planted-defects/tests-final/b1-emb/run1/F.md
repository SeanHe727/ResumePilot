# Resume review

Your strongest material is the quantified engineering work: test-time reduction, throughput, failure-rate improvement, and control-loop jitter. The main issues to address are **technical accuracy**, **duplicated or conflicting claims**, and **clarity about what you personally built**.

## Contact and layout

- **Add a LinkedIn profile** if you use one, and make clear whether the code link is GitHub, a portfolio, or another platform. Recruiters should be able to identify what they’re opening.
- **Put experience before education.** With several years of relevant engineering experience, your work history is more important than your degree.
- Keep the section formatting consistent. The current bullets wrap mid-phrase in several places; in the final document, make sure line breaks are natural and the resume remains easy to scan.

## Experience

### Clearwater Sensors — Hardware Test Engineer

- **“90 to 25 seconds”**: Add the unit to both values. The reader can infer seconds from the sentence, but explicit units make the metric immediately clear.
- **The 20,000-units-a-month figure**: Clarify that this is the production volume covered by the test process, if accurate. It is a useful scale indicator, but its relationship to the time savings could be clearer.
- **The field-failure and returns bullet**: Clarify whether the reduced return rate applied to the affected batch, a later production run, or the overall product. That context helps readers interpret the improvement.
- **The calibration-procedure bullet**: “Complaints” is less precise than a measured engineering outcome. Clarify what counted as a drift complaint and over what period the before-and-after comparison was measured.
- **The test-fixture bullet**: Make sure the throughput figures use the same conditions and refer to the same unit of work. The increase is strong, so readers may want to know whether it reflects a measured production rate.

### Voltline Robotics — Embedded Software Engineer

- **Order this role before Clearwater Sensors.** Experience should be in reverse chronological order.
- **The firmware-update bullet**: Clarify what “update speed” measures—such as transfer time or time to complete an update—and under what conditions. Compression and resumable downloads may affect different parts of that process.
- **The HIL-test-rig bullet**: Add the result of running the tests, if you can support it: for example, whether it caught regressions, increased test coverage, or reduced manual testing. As written, it describes the activity but not its impact.
- **The crash-logger bullet**: Clarify whether the logger helped identify the root cause in each of the five failures or contributed to diagnosing them. That distinction makes the claim more exact.
- **The 5 kHz signal / 8 kHz sampling bullet needs correction.** Sampling a 5 kHz signal at 8 kHz does not capture it without aliasing; the sampling rate must exceed twice the highest frequency of interest, with practical margin and appropriate filtering. Verify the actual signal and sampling rates before keeping this claim.
- **The shared-counter bullet is technically inaccurate as written.** Declaring a variable `volatile` does not make access atomic or prevent a race between an interrupt handler and the main loop. Describe the actual synchronization or atomicity mechanism, if there was one, and verify the fix addressed the race.
- **The motor-controller rewrite bullet**: This is one of your strongest accomplishments, but it duplicates a nearly identical claim in the Formula Student project. Keep the claim in the section where it belongs, and make the scope and your role unambiguous. If both entries describe separate work, distinguish the projects and their results clearly.
- For the performance and fault-reduction metrics, clarify the comparison basis where possible—what “before” and “after” refer to—so the figures are credible and interpretable.

## Projects

### Low-Power Weather Station

- **Remove the “next-generation, innovation-driven…” bullet.** It is promotional rather than informative and doesn’t show what you built or what changed.
- **Keep the power-consumption result and explain the measurement basis.** The before-and-after figures are useful; make sure they were measured under comparable operating conditions.
- **Keep the school adoption detail.** It demonstrates real-world use. Clarify your contribution and the extent of the school’s use if that would help show the project’s reach.
- The project began while you were at Voltline. That overlap is not a problem, but be prepared to explain how you balanced it with your job.

### Formula Student Electric Car

- **Review the “robot fleet” firmware bullet carefully.** It repeats the Voltline claim about rewriting motor-control firmware for roughly 300 robots, including similar performance improvements. This is a major credibility risk unless these are genuinely distinct projects. Remove the inaccurate or duplicated claim, or make the separate scope clear.
- **Clarify what you personally contributed to the team’s firmware and testing.** “Worked on” is broad, while the next bullet is passive and doesn’t identify your role. Give the project space only for work you can substantiate.
- **Clarify the dashboard and motor-controller relationship.** The CAN-bus bullet mentions both, but leaves the system’s function and your contribution unclear.
- **Make the team-lead scope clear.** The title indicates leadership, but the bullets don’t yet show what leading the 12-person team involved. Add that dimension only if you can describe specific responsibilities or outcomes.

## Skills

- **Reorganize the categories.** The current “Tools” category mixes programming languages, a microcontroller platform, and lab equipment; “Methods” mixes technical practices with a protocol. Use categories that distinguish languages, embedded platforms, interfaces/protocols, test methods, and equipment.
- **Include relevant technologies only if you can discuss them confidently.** The experience suggests you may have used additional embedded tools, languages, or debugging and build systems; list any that are accurate and relevant to the roles you’re targeting.
- **Remove or narrow broad terms such as “firmware.”** It describes a field of work rather than a distinct skill, so it contributes little as a standalone keyword.

## Priorities before applying

1. Correct the sampling-rate and `volatile` claims.
2. Resolve the duplicated 300-robot motor-controller claim.
3. Put experience in reverse chronological order.
4. Add context to the update-speed and other before-and-after metrics.
5. Clarify your individual contributions in the projects.