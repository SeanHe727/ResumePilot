## Overall priorities

1. **Fix technical inaccuracies.** The sampling claim and `volatile` claim could seriously damage credibility with embedded-systems reviewers.
2. **Remove duplication and resolve inconsistencies.** The Formula Student project repeats the Voltline work almost verbatim, including the “300” fleet figure.
3. **Replace vague marketing language with technical substance.** The first weather-station bullet is unsupported and does not help a hiring manager assess your work.
4. **Make results more defensible.** Several metrics need a clearer baseline, measurement method, or scope.
5. **Improve skills organization.** Your categories currently mix programming languages, tools, technologies, and practices.

## Header and education

### Contact information

- **Check the portfolio URL.** Make sure it is a real, accessible link and that it leads directly to relevant code or projects. If it is only a placeholder, remove it.
- **Consider adding LinkedIn or GitHub only if they are active and polished.** A weak or empty profile is worse than omitting it.
- **Keep the phone and email formatting consistent with the rest of the document.** This is minor, but consistency improves scanability.

### Education line

- **Keep it as written if you have no relevant coursework, honors, or senior design project to add.**
- **Consider adding a relevant concentration, honors distinction, or capstone only if it strengthens your fit for embedded, firmware, or hardware roles.** Do not add generic coursework; you have stronger professional experience.
- **Because you graduated in 2021, education should remain below experience.** Your current placement is appropriate.

## Experience

### Voltline Robotics — title and dates

- **Verify the end date.** If June 2025 is correct, leave it. If this is your current employer, use a present-tense/current-date convention instead.
- **Consider specifying the product or platform in the title or company description only if the company is not recognizable.** Recruiters should quickly understand that this was embedded robotics work.

### “Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.”

- **Define what “update speed” means.** It could mean download time, total deployment time, bandwidth usage, or device downtime.
- **Clarify whether the 60% result came from both changes together or from one specific change.** Combining two interventions makes attribution unclear.
- **Add scope or test conditions if available.** For example, whether this was measured across a fleet, a representative device, or a particular network condition.
- **Check the line break in “interrupted downloads.”** Ensure the final resume uses normal wrapping rather than manually inserted line breaks.

### “Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.”

- **State what the rig improved, not only what it ran.** Add a measurable effect such as test coverage, escaped defects, test duration, or failures detected, if you have that evidence.
- **Clarify whether 400 tests ran serially or in parallel and how long the suite took.** “400 tests” is useful, but its operational significance is unclear without context.
- **Use consistent terminology.** You call this “hardware-in-the-loop testing” in Skills; keep capitalization and phrasing consistent throughout.

### “Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.”

- **Be precise about causality.** The logger likely enabled diagnosis; it may not literally have “found” the root cause by itself.
- **Clarify whether the five failures were separate incidents and whether the logger was deployed to all units.**
- **Add the resulting action or business impact if you can support it.** For example, whether the finding led to a fix, reduced recurrence, or shortened diagnosis time.
- **Mention resource tradeoffs only if relevant.** Flash wear, memory consumption, and logging overhead would matter for an embedded reviewer, but do not add them unless they demonstrate a meaningful design decision.

### “Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.”

- **Correct this technical claim.** Sampling at 8 kHz does not safely capture a 5 kHz signal without aliasing; the sampling rate must exceed twice the highest frequency component, and practical systems also need an anti-aliasing filter.
- **Verify whether “5 kHz” is the signal’s fundamental frequency or its highest relevant frequency component.** The required sampling rate depends on the latter.
- **Explain the actual engineering decision instead.** You should identify the sampling rate, filtering, bandwidth, and detection requirement accurately. Do not retain the current explanation as written.
- **This is the most urgent technical correction in the resume.** An embedded interviewer is likely to notice it immediately.

### “Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.”

- **Correct this claim.** `volatile` prevents certain compiler optimizations; it does not make shared access atomic and does not by itself resolve a race condition.
- **Identify the actual synchronization mechanism used.** Depending on the MCU and access width, the solution may have involved atomic operations, interrupt masking, a critical section, a lock-free access pattern, or another design change.
- **If the counter was naturally atomic and the real bug involved compiler visibility, reassess the terminology.** It may have been a visibility or optimization issue rather than a race condition.
- **Do not claim a concurrency fix unless you can explain why the fix is safe under interrupt timing and data-width constraints.**

### “Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.”

- **Keep this as your strongest Voltline bullet, but add the main technical scope if it is not obvious elsewhere.** For example, the relevant controller, architecture, real-time constraints, or major subsystems.
- **Explain how “field motor faults” were measured.** Specify the comparison period or baseline if available.
- **Check whether the fault reduction was directly attributable to the rewrite.** If other changes occurred simultaneously, avoid overstating causation.
- **Avoid repeating this accomplishment in the Formula Student project unless it truly happened in both places.** As currently presented, the duplication looks like an accidental copy or an inflated claim.

## Clearwater Sensors

### “Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.”

- **This is a strong bullet.** Retain the production volume and before/after timing.
- **Add what you automated if space allows.** The reader should understand whether you wrote test software, controlled instruments, designed fixtures, or integrated manufacturing systems.
- **Clarify whether the time reduction was measured on the complete station cycle or only one test step.** This affects how impressive and comparable the result is.
- **Use the same unit style throughout the resume.** Decide whether to use “per month” or “a month,” then apply it consistently.

### “Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.”

- **Retain this; it demonstrates failure analysis and manufacturing impact.**
- **Clarify the time period and denominator for the return rates.** Readers need to know whether these are monthly, quarterly, or cohort-level figures.
- **Separate the investigation from the corrective action conceptually if needed.** The current line is understandable, but make sure it is clear that your analysis led to the reflow-profile change rather than merely coincided with it.
- **Specify your role in the reflow-profile update if you did not personally implement it.** This prevents overstating ownership.

### “Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.”

- **Clarify whether these were customer complaints, internal quality reports, or service tickets.**
- **Define the comparison period.** State whether the reduction was before versus after implementation and over how many quarters.
- **Mention the procedure’s scope if relevant.** For example, whether it covered operator instructions, equipment settings, acceptance criteria, or software.
- **Check grammar and unit consistency around “a quarter.”** The metric should clearly refer to a quarterly count.

### “Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.”

- **Retain this; it shows both hardware design and measurable manufacturing improvement.**
- **Explain the limiting factor if useful.** The increase is substantial, so a reviewer may want to know whether it came from parallel testing, reduced setup time, or another fixture change.
- **Clarify whether throughput was theoretical, observed, or sustained in production.**
- **Consider connecting this to the end-of-line automation bullet only if they were part of the same project.** If they were separate accomplishments, keeping both is appropriate.

## Projects

### Low-Power Weather Station — title and technologies

- **The project is relevant and worth keeping because it demonstrates low-power embedded design.**
- **Clarify whether “C, STM32” describes languages/platforms or tools.** The project heading should use a consistent technology format across projects.
- **Because the project is ongoing, make sure the dates and bullets distinguish completed results from planned work.** The quantified power reduction is completed; the open-source publication and school deployment should also be accurate as of the resume date.

### “Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.”

- **Delete this bullet.** It is marketing language, contains no concrete technical information, and makes the project sound less credible.
- **Replace it with a substantive project detail only if you have one that demonstrates architecture, constraints, ownership, or impact.** Do not replace it with another broad claim.
- **Avoid phrases such as “next-generation,” “innovation-driven,” and “redefines.”** They are unsupported unless backed by a specific technical result.

### “Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.”

- **Keep this; it is the strongest project bullet.**
- **Define the measurement conditions if possible.** Include the sampling interval, radio behavior, or measurement methodology so the result is reproducible and meaningful.
- **Clarify whether the metric is average system current or only MCU current.** For a low-power project, this distinction matters.
- **Mention the resulting battery-life or operating-time improvement if you calculated it.** Only do so if based on realistic duty-cycle assumptions.

### “Published the schematics and firmware openly, and a local school built two stations from them.”

- **Retain this if the repository is public and complete.** Link directly to it if the portfolio URL does not already do so.
- **Clarify your role in supporting the school deployment if you provided documentation, troubleshooting, or assembly guidance.**
- **Avoid implying broad adoption from only two builds.** Present it as a concrete use of the published material, not as large-scale impact.
- **Check whether licensing information is present in the repository.** Open-source claims are stronger when the code and hardware files are organized and licensed.

## Formula Student Electric Car

This section needs the most attention.

### Project identity

- **Check whether the project belongs on the resume at all.** Since it overlaps with your degree dates and contains material almost identical to Voltline, it currently creates confusion.
- **Use the project to show student-team leadership and race-vehicle constraints, not professional fleet work.**
- **Verify the team size and your actual leadership scope.** “Electronics Lead, Team of 12” is useful if accurate; specify whether the 12 people were direct reports, electronics members, or the whole team.

### “Worked on firmware and testing for the robot fleet’s motor controllers.”

- **Correct “robot fleet” if this was a Formula Student car.** That terminology is inconsistent with the project title and makes the project look copied from Voltline.
- **Add the specific subsystem or responsibility you owned.** As written, the bullet is too generic to demonstrate leadership or technical depth.
- **Clarify the testing context.** Race validation, bench testing, simulation, and pre-race integration convey different levels of responsibility.

### “The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.”

- **Fix the grammar and ambiguity around what was written and tested.** The current structure makes it unclear whether you wrote the dashboard firmware, tested the bus interface, or both.
- **Use “CAN bus” consistently rather than switching between “CAN-bus” and “CAN” unless you have a deliberate style preference.**
- **Specify the outcome or responsibility.** For example, reliability during race events, validation coverage, or diagnostics—only if you can substantiate it.
- **Avoid saying it happened “before each race” unless that was genuinely repeated and meaningful.** If it was a standard pre-race procedure, explain your ownership of that process rather than using the frequency as the primary accomplishment.

### “Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.”

- **Remove or replace this bullet from the project section unless it is a separate, genuine student-team accomplishment.**
- **It directly duplicates the Voltline bullet in both wording and metrics.** The identical fleet size and outcomes strongly suggest an error.
- **Correct “robots” if the project was a single Formula Student car.** This mismatch is particularly damaging because it conflicts with the project title.
- **Do not use both “from 120 to 15 microseconds” and “eightfold” for the same accomplishment in different sections unless the two statements refer to different work.** Choose one accurate account and place it in the correct section.

## Skills

### “Tools: C, C++, STM32, oscilloscopes, FPGA”

- **Separate languages, platforms, instruments, and hardware technologies.** They are currently mixed under “Tools.”
- **Do not list C and C++ as tools.** They are programming languages.
- **Do not list “oscilloscopes” as though it were a software tool.** It is test equipment; include it only if it is relevant to the target roles and you can use it confidently.
- **Clarify what “FPGA” means in your experience.** If you used a specific HDL, development environment, or FPGA family, include those only if accurate. Otherwise, “FPGA” alone may invite questions about depth.
- **Add proficiency distinctions only if they are honest and useful.** For example, separate strong production experience from academic familiarity; avoid generic beginner/intermediate labels.

### “Methods: firmware, hardware-in-the-loop testing, CAN, low-power design”

- **Move “firmware” out of Methods or make the category more precise.** Firmware is a domain or type of development, not a method.
- **Treat CAN as a protocol/technology rather than a method.**
- **Keep hardware-in-the-loop testing and low-power design if you can discuss them in depth.** Both are supported by your experience.
- **Consider adding only skills demonstrated in the bullets.** Your resume supports embedded C, real-time/concurrent programming, firmware testing, manufacturing test, failure analysis, calibration, and low-power design—but include these only if they accurately reflect your hands-on level.
- **Do not add a long keyword list.** A shorter, evidence-backed skills section will be more credible.

## Formatting and consistency checks

- **Use one date format throughout.** Your current month-year format is good; apply it consistently.
- **Keep all bullets to one visual style and avoid manual line breaks.**
- **Use consistent capitalization for terms such as CAN, STM32, hardware-in-the-loop, and firmware.**
- **Keep tense consistent.** Past tense is appropriate for completed roles and completed accomplishments; use present tense only for ongoing projects or current employment.
- **Remove any bullet that merely repeats a stronger bullet elsewhere.** Your resume will be more convincing with fewer distinct, well-supported accomplishments.
- **Ensure every percentage has a defined comparison.** “60% reduction” is strongest when the reader knows the baseline, time period, and population.
- **Prioritize professional experience over projects.** After removing duplication, the resume should emphasize Voltline and Clearwater, with projects serving as supporting evidence rather than repeating work history.