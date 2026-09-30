# Full review: resume.pdf

**80/100** — format 100 · content 69 · wording 77 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] The experience entries are not in newest-first order. *(no words)*

**Why**
Clearwater Sensors appears above the more recent Voltline Robotics role. That makes the experience chronology harder to scan and puts the older role first.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

*raised by file, narrative*

> B.S. in Electrical Engineering

**Problem**
[Important] Education appears before professional experience. *(no words)*

**Why**
The résumé now includes professional experience, but the reader encounters education first. Leading with experience would give the reader the most relevant work history sooner.

**How to change it**
Move the Experience section above Education.

*raised by narrative*

> May 2021

**Problem**
[Polish] The résumé shows a ten-month gap between graduation and the next listed role. *(about 4 words added)*

**Why**
The education entry ends in May 2021, and the next listed role begins in April 2022. A reader may wonder what accounts for that period, which leaves part of the timeline unexplained.

**How to change it**
If you studied or worked during this period, add [the activity and dates]; do not add an activity that did not happen.

*raised by narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] The automation method is unspecified. *(about 8 words added)*

**Why**
A hardware test reader can see that the end-of-line checks were automated, but not what technical skill the automation involved. That leaves the reader without a way to assess how you achieved the time reduction.

**How to change it**
Keep the result and add [the single test-control or instrument-interface detail that best shows how you automated the checks].

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] The sentence assigns the reflow-profile change to the findings, not to a person. *(no words)*
2. [Polish] The strongest result is not the opening bullet. *(no words)*

**Why**
1. The reader can see that the findings and profile change preceded lower returns, but cannot tell who acted on the findings. This obscures your role in the result.
2. The field-failure investigation and reduction in returns give the reader a concrete result immediately. Placing that bullet first would make the entry’s impact clearer from the start.

**How to change it**
1. If you made the change, replace “the findings updated the reflow profile” with “[I] updated the reflow profile.”
2. Move this bullet above the other Clearwater Sensors bullets without changing its wording.

*raised by wording, narrative*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The calibration reference or control approach is missing. *(about 5 words added)*

**Why**
The reduction in complaints is measurable, but the line does not show the technical judgment behind the procedure. A hardware test reader cannot assess its rigor without a calibration detail.

**How to change it**
Add [the calibration reference or control approach used], choosing the single detail that best demonstrates the procedure’s rigor.

*raised by content*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] The 60% improvement does not identify what was measured. *(about 2 words added)*

**Why**
A reader cannot tell whether the result is a shorter update duration, a higher download rate, or another measure. Without the measured quantity, the percentage is difficult to interpret or discuss.

**How to change it**
Replace “update speed” with “firmware update time” if accurate, or name the measured quantity; add [the comparison setup] only if needed to interpret the result.

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The rig’s test volume is given, but its effect is not. *(about 7 words added)*

**Why**
A reader can see that the rig ran 400 tests on each build, but not whether it caught defects earlier or saved verification time. The workload alone does not show the benefit of your contribution.

**How to change it**
Add [what the rig improved, such as pre-release defect detection or verification time saved], if you can support it.

*raised by content*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The logger’s role in finding the failures is buried in the trailing clause. *(no words)*

**Why**
The result appears only after “which,” so the reader may not immediately connect the logger to the root-cause analysis. Making that connection explicit would clarify the logger’s contribution to resolving the failures.

**How to change it**
Replace the trailing clause with wording that makes clear the logger enabled root-cause analysis of the five failures.

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] An 8 kHz sampling rate cannot capture a 5 kHz signal without aliasing, and the line states intended capability rather than an achieved outcome. *(about 4 words added, or about 8 words removed)*

**Why**
At 8 kHz, the Nyquist frequency is 4 kHz, below the stated 5 kHz signal frequency. The signal will alias, so the current figures do not support the claim that the detector can capture it without aliasing.

**How to change it**
If you sampled above 10 kHz with appropriate anti-alias filtering, state that actual setup and, if accurate, that it enabled capture without aliasing; otherwise remove the claim that this setup captures the signal without aliasing.

*raised by content, wording*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix the race condition. *(about 5 words added)*
2. [Important] The line names a race condition but not the observable problem or behavior its resolution changed. *(about 6 words added)*

**Why**
1. Volatile affects compiler handling of accesses, but it does not make counter operations atomic or synchronize the interrupt handler and main loop. The race can therefore remain even when the counter is volatile.
2. A reader can identify a concurrency issue, but cannot tell what it caused in the product or operation. Without a concrete symptom, the value of resolving it remains unclear.

**How to change it**
1. Replace this with [the atomic operation or critical-section protection actually used] if you used one; otherwise remove the claim that declaring the counter fixed the race.
2. Add [the observed failure or system behavior this prevented or resolved], using a concrete symptom or operational consequence if you have one.

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Important] The fleet description separates the rewrite from its two quantified results. *(no words)*
2. [Important] The strongest Voltline bullet is not first in the entry. *(no words)*
3. [Polish] The firmware change is described broadly, without identifying what drove the improvements. *(about 5 words added)*

**Why**
1. The reader encounters the fleet size before reaching the jitter and fault reductions, which makes the connection between the action and outcomes less immediate. Putting the results next to the action would clarify that connection.
2. The firmware rewrite and its quantified improvements make a strong opening to the experience entry. Leading with that result would let a reader see its impact sooner.
3. The results show that the work mattered, but a reader cannot see what embedded-software skill or technical decision produced them. One relevant implementation detail would make the contribution more distinctive.

**How to change it**
1. Move “for a warehouse robot fleet of 300 units” after both quantified outcomes.
2. Move this bullet above the other Voltline Robotics bullets without changing its wording.
3. Replace the broad description with [the specific control-loop, scheduling, or other firmware change that drove the jitter reduction], if accurate.

*raised by wording, narrative, content*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The project description is promotional and does not identify the station’s technical work or a concrete result. *(saves about 5 words before any added detail)*

**Why**
A reader cannot tell what the station senses, what you built, or why the project is valuable from these claims. Without a specific capability or evidence, the description is difficult to assess.

**How to change it**
Cut the promotional wording and replace it with a concrete description, such as “Built a low-power weather station with C and STM32”; add [the specific sensing capability or result] and, if available, [evidence that demonstrates it].

*raised by content, wording*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The strongest project result is not the opening bullet. *(no words)*

**Why**
The current and power reduction is a concrete, quantified result that quickly shows the project’s value. Moving it first would give the entry a more compelling opening.

**How to change it**
Move this bullet above the other weather-station bullets without changing its wording.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” is vague and may repeat the meaning of “Published.” *(saves 1 word)*

**Why**
A reader may not know what “openly” adds to the claim that the schematics and firmware were published. If it means they were publicly available, the word does not clarify that point.

**How to change it**
Remove “openly” if you mean that the schematics and firmware were publicly available.

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] The first bullet names neither a specific contribution nor an outcome. *(about 6 words added)*

**Why**
“Worked on firmware and testing” does not show what you did or what changed for the car or team. A reader is left unable to distinguish your contribution from general participation.

**How to change it**
Replace this general wording with [the specific firmware change or test approach you personally used] and [the result], if accurate.

*raised by content, wording*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
[Important] The passive wording hides who wrote and tested the CAN-bus firmware, and the line gives no outcome. *(about 6 words added)*

**Why**
A reader can see that the firmware was tested before each race, but cannot tell that you performed the work or what the work accomplished. The timing of the tests does not establish their value to the dashboard or vehicle.

**How to change it**
If you did the work, replace “was written and tested” with an active description of your role; add [the result of the firmware work or testing], if accurate.

*raised by content, wording*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The fleet-level rewrite and results duplicate the later Voltline claim and conflict with this entry’s dates. *(about 5 words added, depending on the replacement)*
2. [Important] The strongest bullet is not first in the entry. *(no words)*
3. [Polish] The line does not identify the technical change behind the reported improvements. *(about 5 words added)*
4. The reduction amounts lack a baseline and measurement context. *(about 6 words added)*

**Why**
1. This entry dates the work to Sep 2019–May 2021, while the later Voltline role places the same fleet-level achievement in Mar 2023–Jun 2025. As written, the reader cannot tell which period and project the achievement belongs to.
2. Once the achievement’s project and dates are accurate, its quantified results would give the entry a stronger opening. Leading with it would let the reader see the contribution sooner.
3. The outcomes are compelling, but “Rewrote motor-control firmware” does not show what technical skill or decision produced them. One specific implementation detail would help a reader assess your contribution.
4. A reader cannot tell what the eightfold jitter reduction or the motor-fault reduction is being compared with. That makes the size and basis of the reported improvements difficult to assess.

**How to change it**
1. Keep the fleet-level rewrite and results under the role where they occurred; replace this bullet with [the actual Formula Student work and result].
2. After correcting the attribution, move this bullet above the other Formula Student bullets if it accurately describes this project.
3. Add [the specific firmware change that produced the improvements], if accurate.
4. Add [the baseline and measurement context for these reductions], if accurate.

*raised by content, narrative*

> dashboard

**Problem**
[Important] The entry’s dashboard and CAN-bus work sits awkwardly beside bullets about a robot fleet. *(about 6 words added, depending on the replacement)*

**Why**
The dashboard work and the robot-fleet motor-controller work read as contributions to different projects. That makes it difficult for a reader to understand what belongs to the Formula Student entry.

**How to change it**
Keep the verified Formula Student work in this entry and replace any unrelated fleet description with [the actual Formula Student work and result].

*raised by narrative*

## Already working

- s2:e0:b3: Explains the fixture's parallel-testing capability.

## Set aside (2)

- s3:e1:b2: “cutting control-loop jitter eightfold and motor faults by more than half” gives reduction amounts without stating the baseline or measurement context.
- s2:e1:b3: “So the fault detector could capture it” describes intended capability rather than stating the outcome; if accurate, say the sampling enabled the detector to capture the signal without aliasing.
