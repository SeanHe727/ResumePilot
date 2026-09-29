> Here is my resume: bench/planted-defects/tests-final/b2-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s overall story and file format. The degree entry has no bullets to review. No job-posting comparison was run because none was provided.

The three changes to make first:

1. **Correct the Formula Student entry.** It attributes robot-fleet work and results to a student electric-car project, duplicating achievements under Voltline. Keep those results under the role where they occurred, and describe only the car-project work in that entry.
2. **Check the technical claims in the Voltline bullets.** The specialists flagged the claim that an 8 kHz sampling rate captures a 5 kHz signal “without aliasing,” and the claim that declaring a shared counter `volatile` fixes a race condition. Correct these to reflect what actually happened.
3. **Replace the weather-station project’s promotional opening** with a concrete design or implementation detail. Its power-reduction and published-output bullets already describe the project more specifically.

The PDF parsed cleanly. The full findings and entry-by-entry plan are in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 79 · narrative 69

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 6 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Electrical Engineering

**Problem**
[Polish] Education leads the page instead of the embedded software experience.

> May 2021

**Problem**
[Polish] The listed dates leave about 10 months between graduation and the first job without study or work shown.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed” does not identify what improved by 60%.

**Why**
A reader cannot tell whether you measured download time, total update time or transfer rate. That makes an otherwise useful result hard to interpret.

**How to change it**
Replace “update speed” with [the measured update metric]. If accurate, add [what the 60% change was compared against].

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test count describes the rig’s workload but not what running it accomplished.

**Why**
Four hundred tests per build establishes scope, not whether the rig caught regressions or changed validation. A reader is left without a result by which to judge its value.

**How to change it**
Keep “on every firmware build” and, if available, add [the observed testing outcome] alongside or in place of the test count.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The wording attributes the diagnosis to the saved data rather than to its use.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture that component without aliasing.
2. [Polish] The fault-detector clause gives an intended benefit, not an observed result.

**Why**
1. An 8 kHz sampling rate has a 4 kHz Nyquist frequency, so a 5 kHz component aliases to 3 kHz. An embedded reader will recognize the contradiction and question the fault-detector claim.

**How to change it**
1. If you used a rate above 10 kHz with suitable anti-alias filtering, replace “8 kHz” with [the actual rate] and name the filtering. Otherwise, remove “without aliasing” and do not claim that the 8 kHz samples captured the 5 kHz component faithfully.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not, by itself, fix a race condition.
2. [Polish] The claimed race-condition fix has no observable symptom or verification attached.
3. [Polish] “The counter” is repeated unnecessarily in the description of the shared variable.

**Why**
1. Volatile constrains compiler optimizations; it does not make counter operations atomic. The interrupt handler and main loop can still interleave their accesses, so the stated fix is technically unsupported.

**How to change it**
1. If you protected the access, replace this phrase with [the atomic operation or synchronization used]. Otherwise, remove the claim that the race condition was fixed.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The motor-controller rewrite and its results are also credited to a project that ended before this job began.
2. [Important] The strongest Voltline result is buried at the end of the entry.
3. [Polish] “Rewrote” does not identify what changed in the motor controller.

**Why**
1. The Formula Student entry describes a roughly 300-robot fleet with equivalent jitter and fault reductions. Assigning what appears to be the same achievement to two different periods makes the otherwise strong result difficult to trust.
2. The fleet size, jitter reduction and fault reduction establish the scope and impact of this role immediately. Leaving them last makes a reader work through less consequential bullets before reaching that evidence.

**How to change it**
1. Keep the rewrite and results under [the role and dates where the work actually occurred]. Remove or correct the conflicting Formula Student claim.
2. Move this bullet to the first position under Voltline; resolve its conflicting Formula Student attribution before doing so.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not show what you built or changed.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] The solder-paste conclusion appears without the diagnostic step that established it.
2. [Polish] The sentence makes the findings, rather than a person, the actor that updated the reflow profile.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
1. [Polish] The calibration-procedure bullet does not say what in the procedure addressed drift.
2. [Polish] “15 to 2 a quarter” expresses the complaint rate awkwardly.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] The opening phrase is promotional jargon rather than an identifiable engineering contribution.
2. [Important] The claim about redefining sensing does not identify a change or benefit for users.

**Why**
1. It neither names the station plainly nor shows a design decision you made. The following current-reduction bullet gives a reader much better evidence of your engineering work.
2. A reader cannot judge the project's value from this broad claim. It is especially hard to credit beside the concrete power and adoption figures that follow.

**How to change it**
1. If you keep this bullet, replace the opening phrase with [one component or design decision you implemented]. Otherwise, remove the bullet and let the specific results lead.
2. Replace the phrase with [the specific station function or practical benefit], if you can identify one. Otherwise, remove this bullet.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The measured current reduction should lead the project instead of the broad opening claim.

**Why**
The change from 4.2 mA to 0.9 mA immediately shows both impact and the sleep-and-batching decisions behind it. Putting that evidence first lets a reader understand the project before encountering any description of its ambitions.

**How to change it**
Move this bullet to the first position under Low-Power Weather Station.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” adds little to the publication claim.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] The robot-fleet work is incorrectly attributed to the Formula Student electric-car project.
2. “Worked on firmware and testing” says neither what the work produced nor what changed.
3. The bullet does not identify a firmware change or test you owned.

**Why**
1. This project ended in 2021, while the warehouse-robot role that describes the fleet began in 2023. The mismatch makes a reader question which work actually belongs to the student project.
2. Even if this bullet described the correct project, the reader could not connect the activity to a result. That leaves your contribution less clear than the specific dashboard work elsewhere in the entry.
3. “Firmware and testing” spans multiple possible tasks, and “Worked on” conceals your action. A specific, accurate verb and task would make ownership assessable if this were car-project work.

**How to change it**
1. Remove this robot-fleet bullet. If you replace it, describe [firmware and testing actually performed on the Formula Student car]; retain the dashboard CAN-bus bullet as the identifiable student-car work.
2. If you replace the misplaced bullet with genuine car work, state [what that work produced or changed]; otherwise, cut it.
3. If you have separate Formula Student work to describe, replace this phrase with an accurate verb—if accurate, “Developed” or “Tested”—and [the firmware change or test you owned]. Otherwise, remove the bullet.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Polish] The dashboard CAN-bus work stops at the activity rather than its result.
2. [Polish] The passive construction hides who wrote and tested the dashboard firmware.
3. [Polish] “Tested against the motor controller” does not identify what CAN-bus behavior was checked.
4. The identifiable student-car bullet is not first in this entry.

**Why**
4. The dashboard CAN-bus work fits the electric-car heading, whereas the surrounding robot-fleet bullets conflict with the project dates. Leading with the dashboard work would let a reader see the relevant contribution immediately.

**How to change it**
4. Move this bullet to the first position under Formula Student, and remove or correct the misplaced robot-fleet bullets.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The fleet size and improvements repeat results credited to the later Voltline role.
2. The rewrite claim does not identify the change responsible for the reported improvements.
3. The motor-fault reduction does not say what faults were counted over.

**Why**
1. A fleet of about 300 robots, an eightfold jitter reduction and a fault reduction of more than half correspond to the Voltline figures. Because the student project ended before that role began, repeating them here undermines the attribution of both entries.
2. Even if this were separate student-car work, “Rewrote” would not show what engineering decision produced the result. The attribution conflict must be resolved before such a detail can usefully support this bullet.
3. “More than half” states a proportion without enough context to interpret the count or period behind it. That uncertainty compounds the bullet's conflict with the later role.

**How to change it**
1. Remove this bullet from Formula Student. Replace it only with [motor-control work and results actually achieved on the car], if any.
2. Remove this misplaced bullet. If you replace it with separate car work, name [the actual firmware change] rather than using “Rewrote” alone.
3. Remove this misplaced bullet. If a separate, substantiated car-project fault result exists, give [what faults were counted and over what period or population].

## Already working

- s2:e1:b3: Compactly links a concrete fixture design to measured throughput.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-41a26c89.md.

