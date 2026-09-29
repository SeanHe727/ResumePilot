> Here is my resume: bench/planted-defects/tests-final/b1-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume: all four experience/project entries for content and wording, the document format, and the overall narrative. The education entry was not applicable for bullet review. No job description was provided.

The most important changes are:

1. **Reorder experience**
   - Move **Voltline Robotics** above **Clearwater Sensors** so experience is newest-first.
   - Address the unexplained **May 2021–April 2022** period if there was employment, study, or another relevant activity.

2. **Resolve the apparent duplicate achievement**
   - The Voltline bullet and Formula Student bullet both describe a motor-control rewrite for roughly **300 units/robots**, with similar jitter and motor-fault reductions.
   - Keep the achievement under the correct entry or distinguish the two efforts with accurate details.

3. **Rewrite the weather-station opening bullet**
   - The phrase **“next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing”** is promotional and does not explain what you built.
   - Replace it with the specific hardware, software, or engineering work performed.

4. **Strengthen outcome evidence**
   - The hardware-in-the-loop test-rig bullet describes the rig and its 400 tests but not what improved because of it.
   - The race-condition fix and signal-sampling bullet likewise need a resulting impact.
   - Where possible, add baselines to percentage claims such as the 60% update-speed improvement.

5. **Clarify or remove unsupported skills**
   - The narrative review found that **C++** and **oscilloscopes** appear in Skills without supporting evidence in the entries.

The file itself parses cleanly as a one-page, 417-word resume with no layout or ATS blockers. The detailed findings are available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 69 · wording 81 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 10 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] Experience is not listed in reverse chronological order.

**Why**
Clearwater Sensors, dated Apr 2022–Feb 2023, appears above Voltline Robotics, dated Mar 2023–Jun 2025. This makes the reader scan against the intended timeline and delays the more recent embedded-software role and direction.

**How to change it**
Move the entire Voltline Robotics entry above Clearwater Sensors.

> Formula Student Electric Car | Electronics Lead

**Problem**
[Important] The Formula Student project should be shortened to a compact supporting entry because it is older and overlaps with the later robotics experience.

**Why**
Its current length gives substantial space to claims that duplicate the professional motor-control story and contain contradictory robot-fleet details. A shorter project entry would preserve relevant student leadership while keeping the recent embedded role as the stronger evidence.

**How to change it**
Keep the title, team size, dates and one accurate Formula Student-specific bullet; remove the overlapping robot-fleet material.

> May 2021

**Problem**
[Polish] The résumé leaves a 10-month period between graduation and the first listed job unexplained.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Important] “Automated end-of-line tests” does not show how the automation was implemented or what technical capability it required.

**Why**
A hardware test reader can see the result but cannot tell whether you built test software, integrated instruments, controlled fixtures, or automated pass/fail decisions. One specific implementation detail would make the engineering contribution more credible.

**How to change it**
Keep the result and add one compact detail after the method, such as [test-control software, instrumentation, fixture, or pass/fail integration], only if accurate.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The strongest achievement should lead the entry rather than appear after the opening test-automation bullet.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Important] “Wrote the calibration procedure for the sensor line” identifies the deliverable but not the technical content of the procedure.

**Why**
A reader can tell that you documented a process, but not whether you established calibration limits, measurement steps, acceptance criteria, or controls that would explain the reduction in drift complaints. The bullet therefore understates the engineering judgment behind the result.

**How to change it**
Add one compact technical detail after "calibration procedure," such as [calibration standard, acceptance criterion, or control step], only if accurate.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Improved update speed by 60%” does not identify the measured update-time or transfer-rate baseline.

**Why**
A reader cannot judge whether the improvement refers to total installation time, download time, or throughput. Naming the metric and comparison would make the percentage independently meaningful and easier to trust.

**How to change it**
Replace "update speed" with the measured metric and, if available, add the baseline: [reduced firmware-update time from X to Y minutes, a 60% decrease].

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] “Wrote a hardware-in-the-loop test rig” states what was built but not what changed as a result.

**Why**
A hiring reader can see the automation effort but cannot tell whether it caught regressions, shortened validation, or improved release confidence. One resulting outcome would show why the rig mattered rather than leaving it as a responsibility.

**How to change it**
Keep the test-rig description and add its strongest result: [caught X regressions per release, reduced validation time by Y%, or prevented Z field defects].

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The phrase “which found the root cause” gives the crash logger agency and obscures that its captured data enabled the investigation.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] The 8 kHz sampling rate aliases a stated 5 kHz signal, so the line's claim that it captured the signal without aliasing is technically wrong.
2. [Important] “So the fault detector could capture it without aliasing” states the intended capability but not what improved afterward.

**Why**
1. An 8 kHz sample rate has a 4 kHz Nyquist frequency, below the stated 5 kHz signal, so that component aliases instead of being faithfully captured. The correct minimum is 10 kHz, with a practical design normally using a higher rate and suitable anti-aliasing filtering.
2. The reader can understand the design goal but cannot see whether fault detection became more accurate, more sensitive, or usable in a previously missed case. A resulting detector or field outcome would establish the value of the sampling change.

**How to change it**
1. Change 8 kHz to at least 10 kHz, preferably a higher accurate rate with suitable anti-aliasing filtering; if 8 kHz is fixed, change the claim to a signal band below 4 kHz if that is what was measured.
2. After correcting the sampling claim, add the observed result: [increased detection accuracy by X%, reduced missed faults by Y%, or enabled detection of Z fault condition].

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not, by itself, fix the race condition.
2. [Important] “Fixed a race condition” gives no result beyond applying the code change.

**Why**
1. volatile ensures that accesses are emitted and visible to the compiler, but it does not make counter increments atomic or provide mutual exclusion. An interrupt can still occur between the read and write, causing lost updates or inconsistent values.
2. A reader cannot tell whether the race caused corrupted counts, missed events, crashes, or another user-visible failure. Naming the consequence that disappeared would show the value of the concurrency fix.

**How to change it**
1. Replace the claimed fix with the actual atomic operation, interrupt-safe critical section, or other synchronization method used; retain volatile only if compiler visibility was also required.
2. Retain the concurrency context and add the observed consequence: [eliminated intermittent counter corruption, prevented missed motor events, or reduced related crashes from X to zero].

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
[Error] The motor-controller rewrite claim duplicates the distinctive accomplishment assigned to the Formula Student project and creates a timeline and context contradiction.

**Why**
This entry is dated 2023–2025, while the other version is dated 2019–2021, and both cite roughly 300 units or robots with nearly identical jitter and motor-fault improvements. A reader may therefore doubt which role actually produced the work, weakening confidence in both entries.

**How to change it**
Move this bullet above the opening bullet if it is the strongest verified achievement, then remove the duplicate from the Formula Student entry; if these were separate efforts, replace the repeated claim with [a different fleet, period, baseline, and measurements].

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The opening bullet uses promotional, generic language instead of describing the weather station's engineering work or a concrete result.

**Why**
“Next-generation,” “redefines,” “IoT solution,” and “sustainable environmental sensing” do not tell a hiring reader what you built, what technical approach it used, or what changed because of it. Without a measurable comparison or project outcome, the line reads as marketing rather than evidence of embedded-systems capability.

**How to change it**
Replace the promotional phrases with the specific station function, implementation approach, and outcome: [what the station enables or improves], using a figure only if you can support it.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
1. [Polish] The strongest project result should lead the entry rather than follow the vague promotional description.
2. [Polish] “Average current” does not state the measurement conditions or duty cycle used to calculate the result.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
1. [Polish] The school-built-stations result shows adoption but does not explain what that adoption enabled or what the two stations demonstrate.
2. [Polish] “Published ... openly” is redundant and less precise than stating that the schematics and firmware were published publicly or open source.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Error] The bullet incorrectly assigns robot-fleet motor-controller work to a Formula Student Electric Car project and otherwise gives no specific contribution or outcome.

**Why**
A Formula Student Electric Car project concerns a race car, not a fleet of robots, and the same robot-motor-controller work appears under Voltline Robotics. “Worked on firmware and testing” also leaves unclear whether you developed, modified, or tested anything and gives no proof of value.

**How to change it**
Remove this bullet or replace it with the firmware and testing work actually performed on the Formula Student car, stating one concrete firmware action and [the resulting outcome].

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
[Polish] The dashboard CAN-bus bullet obscures your ownership and describes implementation and testing without stating what the work enabled or improved.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The bullet incorrectly claims that this Formula Student project rewrote firmware for a fleet of about 300 robots.
2. [Important] “Rewrote motor-control firmware” names the intervention but not the technical approach, and “cutting control-loop jitter eightfold” is ambiguous.
3. [Polish] The Formula Student entry is loosely ordered and opens with a broad task line before its more consequential firmware result.

**Why**
1. That claim fits the later robotics role rather than the Formula Student car and repeats the same distinctive motor-control result. Its relative figures also do not state whether the comparison came from controlled testing, race data, or another measurement period, making the claim harder to assess.
2. The reader cannot see whether the improvement came from scheduling, control-loop design, communication, or fault handling. “Eightfold” can mean reduced to one-eighth or reduced by eight times, so the strong result is less precise than it should be.

**How to change it**
1. Move this result to Voltline Robotics and replace it here with the actual Formula Student outcome [actual figure]; if a separate Formula Student rewrite truly occurred, replace the robot-fleet wording with the correct vehicle, baseline, and project-specific measurements.
2. If this is a distinct, accurate Formula Student result, state whether jitter was reduced to one-eighth and add [the specific control-loop, scheduling, communication, or fault-handling change]; otherwise remove the duplicate claim.

## Skills

> C++

**Problem**
[Polish] C++ is listed under Tools without evidence of C++ work elsewhere in the résumé.

> oscilloscopes

**Problem**
[Polish] Oscilloscopes is listed under Tools without evidence of oscilloscope use in the entries.

## Already working

- s2:e0:b3: Connects a concrete fixture design decision to a directly relevant production outcome.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-685f3a7e.md.

