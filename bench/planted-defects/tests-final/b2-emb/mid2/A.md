> Here is my resume: bench/planted-defects/tests-final/b2-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording reviews covered all 4 entries with bullets; the narrative and format reviews covered the full resume. No job posting was provided, so there’s no job-match review.

The main changes to make:

- **Resolve the duplicate achievement:** The Formula Student project repeats the Voltline robot-fleet firmware result, though the dates place it before that job. Clarify whether these were separate projects and align the claims, dates, and figures—or remove the duplicate.
- **Check technical claims and metrics:** The Voltline review flags that sampling a 5 kHz signal at 8 kHz cannot support the claim of capturing it “without aliasing,” and that declaring a shared counter `volatile` does not by itself fix a race condition. Verify these statements and describe the observed results accurately.
- **Make outcomes and measures specific:** Clarify what “update speed” means, add the outcome of the 400-test-per-build setup, and identify how the end-of-line tests were automated.
- **Strengthen and reorder project details:** Replace the Weather Station’s promotional opening with a description of what you built. For Formula Student, focus on a distinct contribution; its current bullets don’t clearly establish the project’s outcomes. The narrative review also notes the May 2021–April 2022 gap.

The format review found clean parsing, no layout warnings, and a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 68 · wording 79 · narrative 63

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2021

**Problem**
[Important] May 2021 to April 2022 is a 10-month period with no study or work listed.

**Why**
Readers may ask what you were doing during this gap. Without context, they cannot tell whether an activity or circumstance relevant to your timeline is missing.

**How to change it**
If there was relevant study, work, or other context during this period, add [the activity or context]; otherwise, leave the timeline as it is.

> B.S. in Electrical Engineering

**Problem**
[Polish] Education appears before Experience.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed by 60%” does not identify what was measured.

**Why**
Readers cannot tell whether the 60% refers to download time, end-to-end update time, or another measure. Without that definition, they cannot interpret the result or compare it with their own experience.

**How to change it**
Replace “update speed” with the specific measured outcome, such as [firmware download time or end-to-end update time], if accurate.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Important] The test-rig bullet gives the test volume but not what the tests achieved.
2. [Polish] “That ran” adds an unnecessary relative clause.

**Why**
1. Readers can see that the rig ran 400 tests on every build, but cannot tell whether the testing caught defects, prevented regressions, or improved firmware quality. The scale is clear; the value of the testing is not.

**How to change it**
1. Keep the test count if useful, and add one defensible outcome, such as [regressions caught per build or failures prevented before release].

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “Which found the root cause” makes the logger’s result indirect and wordy.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.
2. [Polish] The bullet describes an unvalidated capability rather than an observed detection result.

**Why**
1. An 8 kHz sampling rate has a Nyquist frequency of 4 kHz, below the signal’s 5 kHz frequency. The 5 kHz component will therefore alias in the sampled data, contrary to the claim.

**How to change it**
1. If the goal was to capture the 5 kHz signal without aliasing, use a sampling rate above 10 kHz and appropriate anti-alias filtering; otherwise, remove the claim that 8 kHz avoids aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring a shared counter volatile does not fix a race condition.
2. [Important] “Fixed a race condition” does not state the observable effect of the fix.

**Why**
1. In embedded C, `volatile` affects compiler access optimization; it does not ensure atomic access or coordinate the interrupt handler and main loop. A race requires an appropriate atomic operation or synchronization, such as a suitable critical section.
2. The technical context identifies the kind of issue, but readers cannot see what failure or user-visible problem the fix eliminated. That leaves the practical value of the work unclear.

**How to change it**
1. If the counter was protected with an atomic operation or critical section, name that method; otherwise, say that `volatile` made accesses visible to the compiler, not that it fixed the race.
2. Add one concrete consequence, such as [the counter error or missed event that the fix prevented], if you can substantiate it.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The jitter change from 120 to 15 microseconds is an 87.5% reduction, not a 60% reduction.
2. [Polish] “Rewrote the motor-controller firmware” names the scope of the work but not the technical change.
3. [Polish] The jitter and fault reductions are buried after the fleet scope.

**Why**
1. The decrease is 105 microseconds, which is 87.5% of the original 120 microseconds. Those figures also describe an eightfold reduction, so the stated 60% conflicts with the measurement.

**How to change it**
1. Change the jitter reduction to 87.5% or eightfold, using the existing figures.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not say how the tests were automated.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] “The findings updated the reflow profile” makes the findings, rather than a person or team, the actor.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The calibration-procedure bullet gives no technical detail about the procedure.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “IoT solution” does not say what you built or how it works.
2. [Important] “Redefines sustainable environmental sensing” gives no specific result or evidence.

**Why**
1. Readers cannot tell what technical work the project involved. Without a concrete design or implementation detail, they cannot assess your contribution.
2. Readers cannot tell what changed because of the project or why the claim is credible. The promotional wording uses space without establishing an outcome.

**How to change it**
1. Replace “IoT solution” with [the specific sensor, firmware, or power-design contribution].
2. Replace the phrase with [a specific project outcome] and, if available, [evidence that demonstrates it]; remove “next-generation, innovation-driven.”

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The strongest project result is not the opening bullet.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” adds no useful information to the publication claim.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] “Worked on firmware and testing” gives neither a result nor the specific work you performed.

**Why**
Readers can see the area you contributed to, but cannot tell what changed or what technical skill the work required. The broad phrasing does not show your individual role.

**How to change it**
Replace the phrase with [the result of your contribution] and, if available, [a measure against a baseline]; name [the specific firmware change or test approach] and use an active action such as writing firmware or running tests only if accurate.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The dashboard-firmware bullet does not say what the firmware did or what the testing established.
2. [Polish] “Was written and tested” is passive and hides who performed the work.
3. [Polish] The dashboard-firmware bullet is not the opening bullet, although the finding identifies it as the strongest line.

**Why**
1. Readers see when the firmware was tested, but not what function it enabled, what behavior was checked, or why the work mattered to the dashboard or car. The technical contribution and its value therefore remain unclear.

**How to change it**
1. Replace “for the dashboard” or “tested against the motor controller” with [the key dashboard function or the specific behavior the test verified]; add [the test result against a relevant criterion] if available.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The robot-fleet rewrite and its results are attributed to both this 2019–2021 project and the later Voltline role.
2. “Rewrote motor-control firmware” is broad, and the improvement figures have no stated comparison point.

**Why**
1. The matching fleet size, firmware rewrite, and outcomes make the two claims appear to describe the same achievement, but the dates place them in different periods. Readers may doubt which entry and dates are correct, undermining confidence in both claims.
2. Readers cannot tell which firmware change produced the results, and “eightfold” and “more than half” do not identify the baseline used. This makes both the engineering approach and the scale of the improvements harder to evaluate.

**How to change it**
1. If this was Voltline work, remove it from this project and replace it with [your actual Formula Student contribution]. If it was a separate achievement, clarify what distinguishes the fleet and align the figures; also keep the jitter and fault results ahead of the scope only where accurate.
2. Replace “Rewrote motor-control firmware” with [the specific firmware change], if accurate, and state the comparison point for the jitter and motor-fault improvements if you can substantiate it.

> CAN-bus firmware for the dashboard

**Problem**
[Important] The bullets do not present one clear Formula Student contribution.

**Why**
The dashboard firmware and the robot-fleet claims concern different systems, so the entry does not read as one coherent team contribution. Readers may have difficulty identifying what work belongs to the Formula Student project.

**How to change it**
Focus the entry on [the distinct Formula Student contribution] and remove material that belongs to a different project, if accurate.

## Already working

- s2:e1:b3: The fixture’s parallel testing capability and the station’s throughput gain are both stated clearly.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9dcdc5c5.md.

