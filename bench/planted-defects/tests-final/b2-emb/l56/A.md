> Here is my resume: bench/planted-defects/tests-final/b2-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience/project entries, the narrative, and the file format. No job description was provided, so JD matching was not run. The resume parses cleanly as a one-page, ATS-readable document with no layout warnings.

The most important changes are:

1. **Resolve the major duplicated achievement.**  
   The Formula Student project claims the same 300-robot motor-control firmware work later attributed to Voltline Robotics, including the same jitter and motor-fault improvements. Verify which entry is correct, keep the achievement there, and replace the other bullet with project-specific work.

2. **Rework the opening weather-station bullet.**  
   “A next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing” is promotional but does not describe specific work or evidence. Replace it with the actual design contribution or remove it. Also clarify the measurement conditions for the 4.2 mA-to-0.9 mA reduction and explain how the school used the two stations.

3. **Add outcomes or validation to weaker technical bullets.**
   - For the firmware update work, identify what “update speed” measures and provide the baseline.
   - For the hardware-in-the-loop rig, state what it caught, prevented, or improved—not only that it ran 400 tests.
   - For the crash logger, make clear that the engineers—not the logger—found the root cause.
   - For the race-condition fix, verify the technical explanation; declaring a shared counter `volatile` does not by itself resolve a race condition.

4. **Improve the Formula Student bullets.**  
   “Worked on firmware and testing” is vague, and the project currently refers to a “robot fleet,” which conflicts with the stated electric-car project. Specify the actual firmware, testing, CAN-bus, or electronics work performed.

5. **Reorder the sections.**  
   The narrative review recommends:
   **Experience → Projects → Education → Skills**  
   This puts your professional embedded and hardware-test work before supporting academic material.

6. **Address the timeline and skills.**
   - Explain the 10-month gap between May 2021 and April 2022 if there was relevant work, study, or other activity.
   - C++ and FPGA appear in the skills section but are not supported elsewhere in the resume. Either remove them or add the relevant experience.

The full consolidated review is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 70 · wording 79 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 15 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> May 2021

**Problem**
[Important] The timeline leaves 10 months unexplained between the degree and the first listed professional role.

**Why**
The degree ends in May 2021, while the Hardware Test Engineer role begins in April 2022. A reader may wonder whether work, study, caregiving, job search, or another activity occupied that period.

**How to change it**
Add [the activity covering June 2021 through March 2022] if it is relevant and accurate, or leave the gap unexplained only if there is no useful résumé entry.

> B.S. in Electrical Engineering

**Problem**
[Important] The section order should lead with professional experience, then projects, education, and skills.

**Why**
The candidate has more than three years of relevant professional work, so the recent roles should establish the embedded and hardware-test direction first. Projects can reinforce that trajectory, while education now serves as supporting context and skills should remain last.

**How to change it**
Move EXPERIENCE above EDUCATION, place PROJECTS after EXPERIENCE, move EDUCATION after PROJECTS, and keep SKILLS last.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] The line does not identify what “update speed” measures or what baseline supports the 60% improvement.

**Why**
A hiring manager cannot tell whether the update duration fell or transfer throughput increased. Without the measure and comparison, the percentage is difficult to judge or defend.

**How to change it**
Replace “update speed” with the measured quantity and add [starting update time or throughput] as the comparison; keep the compression and resume details after the result.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test-rig line gives testing volume but not the result of running those tests.

**Why**
The reader can see the scale of the contribution, but not whether the rig caught regressions, shortened validation, or improved release confidence. Four hundred tests is context rather than proof of value by itself.

**How to change it**
After “every firmware build,” add [regressions or defects caught], [validation time reduced], or another result the candidate can substantiate.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Important] The crash logger did not itself find the root cause; the engineers used its data to find it.

**Why**
“Which found” assigns the investigative result to a tool rather than to the candidate’s debugging work. That weakens ownership of the five field-failure investigations.

**How to change it**
Replace “which found the root cause of 5 field failures” with wording that makes the engineers’ action explicit, such as “whose data helped us identify the root cause of 5 field failures,” if accurate.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.
2. [Important] The sampling line explains the intended capability but gives no resulting fault-detection outcome.

**Why**
1. The sampling rate must exceed twice the highest signal frequency, so a 5 kHz component requires a rate above 10 kHz, along with suitable anti-alias filtering. At 8 kHz, the component aliases into a lower apparent frequency, making the technical claim incorrect.
2. A reader can understand the signal-processing requirement but cannot tell whether detection became more accurate or whether a previously missed fault became detectable. The technical explanation therefore carries more weight than the demonstrated result.

**How to change it**
1. If accurate, replace “8 kHz” with a rate above 10 kHz and name the appropriate anti-alias filtering; if the system remained at 8 kHz, remove “without aliasing.”
2. Replace or follow “could capture it without aliasing” with [a specific fault detected or measured change in detection performance], if accurate.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile did not fix the race condition.
2. [Important] The race-condition line names an intervention but not what changed afterward.

**Why**
1. volatile affects compiler optimization but provides neither atomicity nor synchronization between the interrupt handler and main loop. A read-modify-write can still lose updates, and multi-byte accesses can still be inconsistent.
2. Without the symptom or result, the reader cannot tell whether the change prevented corrupted counts, crashes, missed events, or another failure. The implementation detail alone does not establish value.

**How to change it**
1. If used, name the actual atomic operation, interrupt masking, or equivalent interrupt-safe mechanism; otherwise change the claim to say that the counter was declared volatile rather than that the race condition was fixed.
2. Add [the failure symptom or reliability result] after the correct fix, such as the incident it eliminated or behavior it restored.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Important] The firmware rewrite does not identify the embedded technique that produced the timing and fault improvements.
2. [Polish] The line does not clearly say whether the 60% reduction concerns field motor-fault counts or fault rates.
3. [Polish] This strongest achievement should open the Voltline entry.

**Why**
1. The outcomes are compelling, but a technical hiring manager still cannot see what kind of firmware expertise produced them. One representative change would make the achievement more interviewable without adding a list of implementation details.

**How to change it**
1. Add one specific technical change after “rewrote,” such as [scheduling, interrupt, timing, or control-loop change], only if it was central to the result.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] “A batch of early field failures” is awkward and delays the direct object of “traced.”

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
1. [Important] The calibration line does not show the technical calibration work behind the procedure.
2. [Polish] “15 to 2 a quarter” makes the measurement period less immediately readable.

**Why**
1. A hardware-test reader can see ownership but not what calibration skill the candidate applied. One concrete procedure element would make the contribution more specific without requiring a full explanation.

**How to change it**
1. Replace or expand “calibration procedure” with the single most telling element, such as [calibration standard, instrument, or control specified], if accurate.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The opening weather-station bullet is promotional filler and gives no concrete outcome or technical contribution.

**Why**
“Next-generation,” “innovation-driven,” and “redefines sustainable environmental sensing” do not tell a hiring reader what the station measured, enabled, or improved. The line also provides no measurement or checkable evidence for its claims and does not show how C or STM32 was applied.

**How to change it**
Replace the promotional wording with [the sensor, firmware, power-management, or communications work performed] and [what the station measured or enabled], adding [a comparison or adoption fact] if available.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
1. [Polish] This strongest project result should open the weather-station entry.
2. The current reduction does not state the measurement conditions or duty cycle.

**Why**
2. Average current depends on what the station was sensing, how often it woke, and how often it transmitted. Without those conditions, the 4.2 mA-to-0.9 mA comparison is harder to reproduce or evaluate.

**How to change it**
2. Add [the measurement conditions or duty cycle] after the current result, if known.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
1. [Important] The school-replication line does not say how the two stations were used or what they enabled.
2. [Polish] The wording about publication is indirect and makes “them” ambiguous.

**Why**
1. Building the stations proves reuse, but the reader cannot tell whether they supported teaching, monitoring, deployment, or another outcome. The impact therefore stops at replication rather than showing practical use.

**How to change it**
1. After “built two stations,” add [how the school used them or what they enabled], if known; otherwise retain the replication fact as the impact.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Error] The first bullet misattributes robot-fleet work and uses vague language for the candidate’s contribution.

**Why**
A Formula Student project normally concerns one electric race car, not a robot fleet, while the broad phrase “worked on firmware and testing” gives no deliverable, result, figure, or specific technical action. The wording makes the candidate sound like a bystander and obscures whether they developed, debugged, or validated the firmware.

**How to change it**
Replace the robot-fleet reference with the Formula Student car’s motor controller(s), then replace “Worked on firmware and testing” with one concrete action and [the resulting improvement or deliverable] and [a supporting test result], if accurate; remove the line if that work belonged to Voltline.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
[Important] The dashboard-firmware line is passive and does not identify what communication behavior was validated or what the work enabled.

**Why**
“Was written and tested” hides who performed the work, while testing before each race describes cadence rather than pass criteria or performance. The CAN bus detail still does not show whether telemetry, command handling, or fault reporting worked.

**How to change it**
Change the passive construction to an active one, write “CAN bus,” and specify [the CAN-bus function or interaction tested] plus [what the dashboard firmware enabled or improved] and [the test result or pass criterion], if accurate.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The final bullet misattributes the 300-robot achievement to the Formula Student project.
2. [Important] The relative improvements in this bullet do not define their underlying measures or comparisons.
3. [Important] The rewrite does not show the technical change that produced the reported improvements.
4. [Polish] This bullet should not be the entry’s opening line.

**Why**
1. A single electric-car project does not fit a 300-robot deployment, and the same fleet size and performance figures appear under Voltline Robotics. Reporting the achievement under both entries makes the project history and dates look unreliable.
2. The reader cannot tell whether jitter means timing variance, missed cycles, or another metric, nor what counted as a motor fault. That ambiguity further weakens a claim that is already assigned to the wrong project.
3. Even with credible results, the reader cannot see whether the work involved scheduling, timing, interrupts, control logic, or fault handling. One specific approach would demonstrate embedded-systems skill rather than only reporting an outcome.

**How to change it**
1. Remove this bullet from the Formula Student project and retain the achievement under Voltline Robotics, or replace it with [a Formula Student-specific firmware result].
2. If the bullet is retained for a different project, clarify [the jitter metric and before-and-after comparison] and [the motor-fault measure and comparison period].
3. If this becomes a Formula Student-specific bullet, add [one specific firmware or control-loop change] that was central to its result.

## Skills

> C++

**Problem**
[Important] The skills list claims C++ and FPGA experience that the entries do not support.

**Why**
C++ and FPGA appear in Tools, but the experience and project descriptions identify C and STM32 work without any C++ or FPGA task. A recruiter may question whether these are genuine working skills or unsupported keyword additions.

**How to change it**
Remove C++ and FPGA, or add entries showing where each was used and what the candidate did with it.

## Already working

- s2:e1:b0: Pairs a clear performance result with both baseline and workload context.
- s2:e1:b3: Connects a specific fixture design decision to a measurable production result.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-20b4ecb9.md.

