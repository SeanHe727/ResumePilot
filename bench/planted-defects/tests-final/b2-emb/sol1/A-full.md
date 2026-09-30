# Full review: resume.pdf

**82/100** — format 100 · content 72 · wording 79 · narrative 69

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 6 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Electrical Engineering

**Problem**
[Polish] Education leads the page instead of the embedded software experience. *(no words)*

**Why**
The first thing a reader sees is the degree, although the later Voltline entry contains the most directly relevant professional work. That ordering delays the evidence of your embedded-software experience.

**How to change it**
Move Education below Experience and Projects.

*raised by narrative*

> May 2021

**Problem**
[Polish] The listed dates leave about 10 months between graduation and the first job without study or work shown. *(about 8 words)*

**Why**
The degree ends in May 2021, and the Clearwater Sensors role begins in April 2022. A reader may ask what you were doing during that interval; the dates alone do not answer.

**How to change it**
If relevant work or study belongs in that interval, add [the activity and its dates]. Otherwise, leave the dates accurate and be ready to explain the interval.

*raised by narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed” does not identify what improved by 60%. *(about 5 words)*

**Why**
A reader cannot tell whether you measured download time, total update time or transfer rate. That makes an otherwise useful result hard to interpret.

**How to change it**
Replace “update speed” with [the measured update metric]. If accurate, add [what the 60% change was compared against].

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test count describes the rig’s workload but not what running it accomplished. *(about 6 words)*

**Why**
Four hundred tests per build establishes scope, not whether the rig caught regressions or changed validation. A reader is left without a result by which to judge its value.

**How to change it**
Keep “on every firmware build” and, if available, add [the observed testing outcome] alongside or in place of the test count.

*raised by content*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The wording attributes the diagnosis to the saved data rather than to its use. *(saves about 4 words)*

**Why**
The logger preserved evidence; the sentence makes the data sound as though it independently found the causes. A more direct result keeps the five field failures prominent.

**How to change it**
Replace “which found the root cause of 5 field failures” with “enabling diagnosis of 5 field failures.”

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture that component without aliasing. *(saves about 2 words)*
2. [Polish] The fault-detector clause gives an intended benefit, not an observed result. *(saves about 9 words)*

**Why**
1. An 8 kHz sampling rate has a 4 kHz Nyquist frequency, so a 5 kHz component aliases to 3 kHz. An embedded reader will recognize the contradiction and question the fault-detector claim.
2. Even apart from the sampling error, the reader cannot tell whether detection improved in testing or use. That leaves the purpose of the work clearer than its outcome.

**How to change it**
1. If you used a rate above 10 kHz with suitable anti-alias filtering, replace “8 kHz” with [the actual rate] and name the filtering. Otherwise, remove “without aliasing” and do not claim that the 8 kHz samples captured the 5 kHz component faithfully.
2. If you have a result, replace this clause with [the observed detection or validation result], retaining only sampling details needed to explain it. If not, remove the unverified benefit claim.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not, by itself, fix a race condition. *(about 3 words)*
2. [Polish] The claimed race-condition fix has no observable symptom or verification attached. *(about 7 words)*
3. [Polish] “The counter” is repeated unnecessarily in the description of the shared variable. *(saves about 1 word)*

**Why**
1. Volatile constrains compiler optimizations; it does not make counter operations atomic. The interrupt handler and main loop can still interleave their accesses, so the stated fix is technically unsupported.
2. A reader cannot tell what malfunction the shared counter caused or how you established that it was resolved. Without that result, the bullet asks them to take the fix on trust.
3. The repetition makes an already technical sentence harder to follow. A pronoun would leave the interrupt-handler and main-loop relationship intact.

**How to change it**
1. If you protected the access, replace this phrase with [the atomic operation or synchronization used]. Otherwise, remove the claim that the race condition was fixed.
2. If the fix was verified, add [the malfunction eliminated or the test passed after the fix]. Keep the counter detail brief.
3. If the sentence remains after the technical correction, replace the second “the counter” with “it.”

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The motor-controller rewrite and its results are also credited to a project that ended before this job began. *(no words)*
2. [Important] The strongest Voltline result is buried at the end of the entry. *(no words)*
3. [Polish] “Rewrote” does not identify what changed in the motor controller. *(about 5 words)*

**Why**
1. The Formula Student entry describes a roughly 300-robot fleet with equivalent jitter and fault reductions. Assigning what appears to be the same achievement to two different periods makes the otherwise strong result difficult to trust.
2. The fleet size, jitter reduction and fault reduction establish the scope and impact of this role immediately. Leaving them last makes a reader work through less consequential bullets before reaching that evidence.
3. The jitter and fault figures are strong, but they do not show the engineering decision behind them. One accurate detail would let an embedded reader assess your contribution rather than just its reported effect.

**How to change it**
1. Keep the rewrite and results under [the role and dates where the work actually occurred]. Remove or correct the conflicting Formula Student claim.
2. Move this bullet to the first position under Voltline; resolve its conflicting Formula Student attribution before doing so.
3. If you can state it briefly, replace “Rewrote” with [the technical change most responsible for the improvement]; retain the existing results.

*raised by content, narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not show what you built or changed. *(about 5 words)*

**Why**
The reduction from 90 to 25 seconds shows a valuable result. A hardware-test reader still cannot identify the technical work that produced it.

**How to change it**
Add [the test step, control or measurement you automated] after “Automated end-of-line tests.”

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] The solder-paste conclusion appears without the diagnostic step that established it. *(about 6 words)*
2. [Polish] The sentence makes the findings, rather than a person, the actor that updated the reflow profile. *(about 2 words)*

**Why**
1. The return-rate change gives the investigation weight, but a reader cannot see how you distinguished this cause from others. One decisive detail would make your failure-analysis skill visible.
2. A reader may wonder whether you made the change or supplied evidence for someone else to act on. That ambiguity obscures your contribution to the reduction in returns.

**How to change it**
1. Add [the decisive inspection, test or batch comparison] after “solder-paste change”; keep the return-rate result.
2. Replace “the findings updated” with [who updated] if known. If your role was supplying the evidence, describe that role instead.

*raised by content, wording*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
1. [Polish] The calibration-procedure bullet does not say what in the procedure addressed drift. *(about 6 words)*
2. [Polish] “15 to 2 a quarter” expresses the complaint rate awkwardly. *(no words)*

**Why**
1. The drop in complaints is useful, but the reader cannot distinguish a new calibration check from documentation of an existing process. A calibration-specific detail would connect your work to the result.
2. The figures are easy to grasp, but the phrasing briefly makes the reader parse what period they cover. Stating the period directly makes the improvement easier to scan.

**How to change it**
1. If it was part of your work, add [the key calibration check or adjustment specified] after “calibration procedure.”
2. Replace “15 to 2 a quarter” with “15 to 2 per quarter.”

*raised by content, wording*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] The opening phrase is promotional jargon rather than an identifiable engineering contribution. *(saves about 3 words)*
2. [Important] The claim about redefining sensing does not identify a change or benefit for users. *(saves about 4 words)*

**Why**
1. It neither names the station plainly nor shows a design decision you made. The following current-reduction bullet gives a reader much better evidence of your engineering work.
2. A reader cannot judge the project's value from this broad claim. It is especially hard to credit beside the concrete power and adoption figures that follow.

**How to change it**
1. If you keep this bullet, replace the opening phrase with [one component or design decision you implemented]. Otherwise, remove the bullet and let the specific results lead.
2. Replace the phrase with [the specific station function or practical benefit], if you can identify one. Otherwise, remove this bullet.

*raised by content, wording*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The measured current reduction should lead the project instead of the broad opening claim. *(no words)*

**Why**
The change from 4.2 mA to 0.9 mA immediately shows both impact and the sleep-and-batching decisions behind it. Putting that evidence first lets a reader understand the project before encountering any description of its ambitions.

**How to change it**
Move this bullet to the first position under Low-Power Weather Station.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” adds little to the publication claim. *(saves 1 word)*

**Why**
Publishing the schematics and firmware already conveys that they were shared. The school's two builds are the more meaningful evidence of their use.

**How to change it**
Remove “openly.”

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] The robot-fleet work is incorrectly attributed to the Formula Student electric-car project. *(saves about 11 words)*
2. “Worked on firmware and testing” says neither what the work produced nor what changed. *(saves about 11 words)*
3. The bullet does not identify a firmware change or test you owned. *(saves about 11 words)*

**Why**
1. This project ended in 2021, while the warehouse-robot role that describes the fleet began in 2023. The mismatch makes a reader question which work actually belongs to the student project.
2. Even if this bullet described the correct project, the reader could not connect the activity to a result. That leaves your contribution less clear than the specific dashboard work elsewhere in the entry.
3. “Firmware and testing” spans multiple possible tasks, and “Worked on” conceals your action. A specific, accurate verb and task would make ownership assessable if this were car-project work.

**How to change it**
1. Remove this robot-fleet bullet. If you replace it, describe [firmware and testing actually performed on the Formula Student car]; retain the dashboard CAN-bus bullet as the identifiable student-car work.
2. If you replace the misplaced bullet with genuine car work, state [what that work produced or changed]; otherwise, cut it.
3. If you have separate Formula Student work to describe, replace this phrase with an accurate verb—if accurate, “Developed” or “Tested”—and [the firmware change or test you owned]. Otherwise, remove the bullet.

*raised by content, narrative, wording*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Polish] The dashboard CAN-bus work stops at the activity rather than its result. *(about 3 words)*
2. [Polish] The passive construction hides who wrote and tested the dashboard firmware. *(saves about 5 words)*
3. [Polish] “Tested against the motor controller” does not identify what CAN-bus behavior was checked. *(about 5 words)*
4. The identifiable student-car bullet is not first in this entry. *(no words)*

**Why**
1. Testing before each race establishes a cadence, but not what the test demonstrated. A reader cannot tell whether it established reliable dashboard operation or some narrower outcome.
2. The line describes relevant student-car work, yet its wording keeps your contribution out of view. An active opening would make the ownership clear if you performed both tasks.
3. The reader knows the components involved but cannot assess the validation you performed. One significant check would give the testing claim technical substance.
4. The dashboard CAN-bus work fits the electric-car heading, whereas the surrounding robot-fleet bullets conflict with the project dates. Leading with the dashboard work would let a reader see the relevant contribution immediately.

**How to change it**
1. If you can substantiate one, replace the closing “before each race” with [the test outcome or race-readiness result].
2. If you did both, replace that phrase with “Wrote and tested dashboard CAN-bus firmware.”
3. If it was a significant part of your work, add [the key CAN-bus behavior or test condition checked] in place of the general test description.
4. Move this bullet to the first position under Formula Student, and remove or correct the misplaced robot-fleet bullets.

*raised by content, wording, narrative*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The fleet size and improvements repeat results credited to the later Voltline role. *(saves about 23 words)*
2. The rewrite claim does not identify the change responsible for the reported improvements. *(saves about 23 words)*
3. The motor-fault reduction does not say what faults were counted over. *(saves about 23 words)*

**Why**
1. A fleet of about 300 robots, an eightfold jitter reduction and a fault reduction of more than half correspond to the Voltline figures. Because the student project ended before that role began, repeating them here undermines the attribution of both entries.
2. Even if this were separate student-car work, “Rewrote” would not show what engineering decision produced the result. The attribution conflict must be resolved before such a detail can usefully support this bullet.
3. “More than half” states a proportion without enough context to interpret the count or period behind it. That uncertainty compounds the bullet's conflict with the later role.

**How to change it**
1. Remove this bullet from Formula Student. Replace it only with [motor-control work and results actually achieved on the car], if any.
2. Remove this misplaced bullet. If you replace it with separate car work, name [the actual firmware change] rather than using “Rewrote” alone.
3. Remove this misplaced bullet. If a separate, substantiated car-project fault result exists, give [what faults were counted and over what period or population].

*raised by content*

## Already working

- s2:e1:b3: Compactly links a concrete fixture design to measured throughput.

## Set aside (6)

- s3:e1:b0: "Worked on firmware and testing" does not say what the work produced or changed.
- s3:e1:b0: "firmware and testing" does not identify the firmware change or test you owned.
- s3:e1:b2: "Rewrote motor-control firmware" does not identify the change responsible for the improvements.
- s3:e1:b2: "motor faults by more than half" does not say what faults were counted over.
- s3:e1:b0: “Worked on firmware and testing” obscures the action; replace it with a precise verb such as “Developed” or “Tested,” whichever accurately describes the work.
- s3:e1:b1: the strongest line is not the opening one: “The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.” would land harder first
