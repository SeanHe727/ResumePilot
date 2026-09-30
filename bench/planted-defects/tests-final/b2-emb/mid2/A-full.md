# Full review: resume.pdf

**80/100** — format 100 · content 68 · wording 79 · narrative 63

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2021

**Problem**
[Important] May 2021 to April 2022 is a 10-month period with no study or work listed. *(adds about 3–8 words if applicable)*

**Why**
Readers may ask what you were doing during this gap. Without context, they cannot tell whether an activity or circumstance relevant to your timeline is missing.

**How to change it**
If there was relevant study, work, or other context during this period, add [the activity or context]; otherwise, leave the timeline as it is.

*raised by narrative*

> B.S. in Electrical Engineering

**Problem**
[Polish] Education appears before Experience. *(no words)*

**Why**
Readers encounter education before the professional direction shown by the work history. Moving Experience first would bring that professional evidence forward.

**How to change it**
Move the Experience section above Education.

*raised by narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed by 60%” does not identify what was measured. *(adds about 1–3 words)*

**Why**
Readers cannot tell whether the 60% refers to download time, end-to-end update time, or another measure. Without that definition, they cannot interpret the result or compare it with their own experience.

**How to change it**
Replace “update speed” with the specific measured outcome, such as [firmware download time or end-to-end update time], if accurate.

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Important] The test-rig bullet gives the test volume but not what the tests achieved. *(adds about 4–8 words)*
2. [Polish] “That ran” adds an unnecessary relative clause. *(saves about 1 word)*

**Why**
1. Readers can see that the rig ran 400 tests on every build, but cannot tell whether the testing caught defects, prevented regressions, or improved firmware quality. The scale is clear; the value of the testing is not.
2. The clause delays the direct action and makes an already compact bullet wordier. A participle keeps the test-rig description more direct.

**How to change it**
1. Keep the test count if useful, and add one defensible outcome, such as [regressions caught per build or failures prevented before release].
2. Replace “that ran” with “running.”

*raised by content, wording*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “Which found the root cause” makes the logger’s result indirect and wordy. *(saves about 1–3 words)*

**Why**
The phrase obscures the direct link between the crash logger and identifying the failures’ cause. A more direct result will make the contribution easier to follow.

**How to change it**
Replace the clause with a direct statement that the logger helped identify the cause of five failures.

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing. *(adds about 2–5 words, or saves about 4 words if the claim is removed)*
2. [Polish] The bullet describes an unvalidated capability rather than an observed detection result. *(adds about 2–6 words, or saves about 3 words if the claim is removed)*

**Why**
1. An 8 kHz sampling rate has a Nyquist frequency of 4 kHz, below the signal’s 5 kHz frequency. The 5 kHz component will therefore alias in the sampled data, contrary to the claim.
2. Readers cannot tell whether the sampling change was validated or what it enabled the fault detector to detect. The phrase “could capture it” states a capability, not an outcome.

**How to change it**
1. If the goal was to capture the 5 kHz signal without aliasing, use a sampling rate above 10 kHz and appropriate anti-alias filtering; otherwise, remove the claim that 8 kHz avoids aliasing.
2. If validated, replace the capability wording with [a validated detection result or fault condition captured]; otherwise, remove the outcome claim.

*raised by content, wording*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring a shared counter volatile does not fix a race condition. *(adds about 2–6 words, or saves about 3 words if the claim is softened)*
2. [Important] “Fixed a race condition” does not state the observable effect of the fix. *(adds about 4–8 words)*

**Why**
1. In embedded C, `volatile` affects compiler access optimization; it does not ensure atomic access or coordinate the interrupt handler and main loop. A race requires an appropriate atomic operation or synchronization, such as a suitable critical section.
2. The technical context identifies the kind of issue, but readers cannot see what failure or user-visible problem the fix eliminated. That leaves the practical value of the work unclear.

**How to change it**
1. If the counter was protected with an atomic operation or critical section, name that method; otherwise, say that `volatile` made accesses visible to the compiler, not that it fixed the race.
2. Add one concrete consequence, such as [the counter error or missed event that the fix prevented], if you can substantiate it.

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The jitter change from 120 to 15 microseconds is an 87.5% reduction, not a 60% reduction. *(adds no words)*
2. [Polish] “Rewrote the motor-controller firmware” names the scope of the work but not the technical change. *(adds about 2–6 words)*
3. [Polish] The jitter and fault reductions are buried after the fleet scope. *(no words)*

**Why**
1. The decrease is 105 microseconds, which is 87.5% of the original 120 microseconds. Those figures also describe an eightfold reduction, so the stated 60% conflicts with the measurement.
2. The jitter and fault results show impact, but readers cannot tell which engineering approach or decision demonstrates your embedded-systems skill. The broad rewrite description leaves the work itself difficult to assess.
3. Readers encounter the 300-unit scope before the results that show the work’s impact. Leading with the reductions would make the strongest evidence easier to notice.

**How to change it**
1. Change the jitter reduction to 87.5% or eightfold, using the existing figures.
2. Replace the broad rewrite description with the single most telling firmware change, such as [the control-loop or scheduling change], if accurate.
3. Move the jitter and fault reductions before the fleet scope, as recommended by the finding, without changing the figures.

*raised by content, wording, narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not say how the tests were automated. *(adds about 3–6 words)*

**Why**
Readers can see the time reduction but cannot tell what technical work the automation involved. One specific implementation detail would make the hardware-test skill more credible.

**How to change it**
Keep the time reduction and add [the main test-control or measurement mechanism] after “Automated end-of-line tests.”

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] “The findings updated the reflow profile” makes the findings, rather than a person or team, the actor. *(adds about 1–3 words)*

**Why**
Readers cannot tell who acted on the failure analysis. That obscures your role in turning the findings into a process change.

**How to change it**
Name the actor, such as “[you/the team] updated the reflow profile,” if accurate.

*raised by wording*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The calibration-procedure bullet gives no technical detail about the procedure. *(adds about 2–5 words)*

**Why**
Readers can see that you owned the procedure and that complaints fell, but cannot tell what calibration expertise the work required. A telling detail would distinguish a technical procedure from documentation alone.

**How to change it**
Keep the complaint reduction and add [the reference standard used] after “calibration procedure.”

*raised by content*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “IoT solution” does not say what you built or how it works. *(adds about 2–6 words)*
2. [Important] “Redefines sustainable environmental sensing” gives no specific result or evidence. *(saves about 3–7 words, depending on the replacement)*

**Why**
1. Readers cannot tell what technical work the project involved. Without a concrete design or implementation detail, they cannot assess your contribution.
2. Readers cannot tell what changed because of the project or why the claim is credible. The promotional wording uses space without establishing an outcome.

**How to change it**
1. Replace “IoT solution” with [the specific sensor, firmware, or power-design contribution].
2. Replace the phrase with [a specific project outcome] and, if available, [evidence that demonstrates it]; remove “next-generation, innovation-driven.”

*raised by content, wording*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The strongest project result is not the opening bullet. *(no words)*

**Why**
The current opening is vague, while the current second bullet gives a measured current reduction and explains how you achieved it. Leading with that concrete result would make the project’s value apparent sooner.

**How to change it**
Move the current-reduction bullet before the opening project-description bullet.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” adds no useful information to the publication claim. *(saves 1 word)*

**Why**
Publishing the schematics and firmware already conveys that they are available. The extra word does not add a distinct detail.

**How to change it**
Cut “openly.”

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] “Worked on firmware and testing” gives neither a result nor the specific work you performed. *(adds about 4–10 words)*

**Why**
Readers can see the area you contributed to, but cannot tell what changed or what technical skill the work required. The broad phrasing does not show your individual role.

**How to change it**
Replace the phrase with [the result of your contribution] and, if available, [a measure against a baseline]; name [the specific firmware change or test approach] and use an active action such as writing firmware or running tests only if accurate.

*raised by content, wording*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The dashboard-firmware bullet does not say what the firmware did or what the testing established. *(adds about 3–8 words)*
2. [Polish] “Was written and tested” is passive and hides who performed the work. *(no words)*
3. [Polish] The dashboard-firmware bullet is not the opening bullet, although the finding identifies it as the strongest line. *(no words)*

**Why**
1. Readers see when the firmware was tested, but not what function it enabled, what behavior was checked, or why the work mattered to the dashboard or car. The technical contribution and its value therefore remain unclear.
2. The sentence names the activities but not your role in them. An active verb will make your contribution clear if you personally did the work.
3. The opening bullet describes work on robot-fleet motor controllers, which is separate from the dashboard firmware. Leading with the dashboard bullet would foreground the contribution identified as strongest, provided it is accurate and distinct.

**How to change it**
1. Replace “for the dashboard” or “tested against the motor controller” with [the key dashboard function or the specific behavior the test verified]; add [the test result against a relevant criterion] if available.
2. If you performed the work, replace “was written and tested” with “Wrote and tested.”
3. Move the dashboard-firmware bullet before the opening bullet if it is the strongest distinct Formula Student contribution.

*raised by content, wording, narrative*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The robot-fleet rewrite and its results are attributed to both this 2019–2021 project and the later Voltline role. *(saves about 15–25 words if removed; a clarification adds about 5–10 words)*
2. “Rewrote motor-control firmware” is broad, and the improvement figures have no stated comparison point. *(adds about 3–8 words)*

**Why**
1. The matching fleet size, firmware rewrite, and outcomes make the two claims appear to describe the same achievement, but the dates place them in different periods. Readers may doubt which entry and dates are correct, undermining confidence in both claims.
2. Readers cannot tell which firmware change produced the results, and “eightfold” and “more than half” do not identify the baseline used. This makes both the engineering approach and the scale of the improvements harder to evaluate.

**How to change it**
1. If this was Voltline work, remove it from this project and replace it with [your actual Formula Student contribution]. If it was a separate achievement, clarify what distinguishes the fleet and align the figures; also keep the jitter and fault results ahead of the scope only where accurate.
2. Replace “Rewrote motor-control firmware” with [the specific firmware change], if accurate, and state the comparison point for the jitter and motor-fault improvements if you can substantiate it.

*raised by content, narrative*

> CAN-bus firmware for the dashboard

**Problem**
[Important] The bullets do not present one clear Formula Student contribution. *(saves about 10–20 words if one or more bullets are removed)*

**Why**
The dashboard firmware and the robot-fleet claims concern different systems, so the entry does not read as one coherent team contribution. Readers may have difficulty identifying what work belongs to the Formula Student project.

**How to change it**
Focus the entry on [the distinct Formula Student contribution] and remove material that belongs to a different project, if accurate.

*raised by narrative*

## Already working

- s2:e1:b3: The fixture’s parallel testing capability and the station’s throughput gain are both stated clearly.

## Set aside (2)

- s3:e1:b2: “Rewrote motor-control firmware” names a broad intervention without specifying the firmware change.
- s3:e1:b2: “cutting control-loop jitter eightfold and motor faults by more than half” gives improvement sizes but no comparison point.
