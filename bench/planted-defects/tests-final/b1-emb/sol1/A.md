> Here is my resume: bench/planted-defects/tests-final/b1-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s career narrative and file format. Education has no bullets to review; job-posting match was not run because no posting was provided. The full report is in `/report --full`.

The changes to make first are:

1. **Resolve the duplicated robot-fleet work.** The Formula Student entry (2019–2021) describes a roughly 300-robot firmware rewrite also credited to Voltline Robotics (2023–2025). Keep it under the correct role, or clarify if these were separate projects.
2. **Correct two technical claims in Voltline.** An 8 kHz sample rate cannot capture a 5 kHz signal without aliasing, and declaring a shared counter `volatile` does not by itself fix a race condition. Check what actually happened before revising those bullets.
3. **Tighten the presentation.** Put the newer Voltline role first. Replace the Weather Station’s promotional opening with a concrete contribution, and specify the outcome of the 400-test rig rather than only how many tests it ran.

The PDF parses cleanly; the specialists found no layout or ATS extraction blockers.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 77 · narrative 66

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 5 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] Experience is not ordered newest-first: Clearwater Sensors appears above the later Voltline Robotics role.

**Why**
A reader reaches the 2022–2023 hardware-test role before the 2023–2025 embedded-software role. That delays the stronger introduction to your more recent direction.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

> B.S. in Electrical Engineering

**Problem**
[Important] Education appears before the more recent Experience and Projects entries.

**Why**
The degree is relevant, but the 2023–2025 embedded role offers a stronger first account of your work. Its current placement postpones that evidence.

**How to change it**
Move the Education entry below Experience and Projects.

> Apr 2022 - Feb 2023

**Problem**
[Polish] No study or work is listed for the 10 months between the May 2021 degree and the April 2022 first role.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not identify the testing step you automated.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] “Traced a batch of early field failures to a solder-paste change” gives the conclusion without showing the diagnostic work.
2. [Polish] “the findings updated the reflow profile” incorrectly makes the findings appear to perform the update.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] “Wrote the calibration procedure” does not say what the procedure changed about calibration.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
1. [Polish] “update speed by 60%” does not identify the metric that improved.
2. [Polish] “by 60% by compressing” repeats “by” and slows the sentence.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Polish] “ran 400 motor-control tests on every firmware build” reports activity but not its effect.
2. [Polish] “Wrote a hardware-in-the-loop test rig” leaves unclear whether you built the rig or only wrote its software.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “which found the root cause of 5 field failures” attributes the investigation to the logger rather than clarifying its role.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] An 8 kHz sampling rate cannot capture a 5 kHz vibration signal “without aliasing.”
2. [Polish] “so the fault detector could capture it” describes a purpose, not an observed detection result.

**Why**
1. At 8 kHz, the Nyquist frequency is 4 kHz, so a 5 kHz component aliases to 3 kHz under ordinary sampling. An embedded-systems reader will spot the contradiction and question the technical claim.

**How to change it**
1. If the 5 kHz component was directly sampled without aliasing, replace “8 kHz” with [the actual sampling rate above 10 kHz]. Otherwise, remove “without aliasing” and state [what the detector measured].

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter “volatile” does not, by itself, fix a race condition.
2. [Polish] “Fixed a race condition” does not identify the failure or incorrect behavior the fix addressed.
3. The phrasing around the shared counter repeats “the counter” and stacks two “by” phrases.

**Why**
1. Volatile requires compiler accesses to the counter; it does not make accesses atomic or synchronize the interrupt handler with the main loop. It could address a stale read, but that is narrower than the race-condition fix claimed.
3. The repetition makes an already technical explanation more cumbersome. A shorter construction would let the reader follow the interrupt-handler and main-loop relationship more easily.

**How to change it**
1. If the issue was a stale read, replace “Fixed a race condition” with wording that says declaring the counter volatile fixed a stale read. If it was a shared-access race, name [the synchronization or atomic-access method used]; otherwise remove the claim that the race was fixed.
3. If the volatile claim is retained after correcting its technical meaning, replace “on the counter shared by the interrupt handler and the main loop by declaring the counter volatile” with “on a counter shared by the interrupt handler and main loop by declaring it volatile.”

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The 300-unit fleet rewrite and its results are also attributed to the earlier Formula Student electric-car project.
2. [Important] The fleet-rewrite result is buried at the end of the Voltline entry.
3. [Polish] “Rewrote the motor-controller firmware” does not identify the technical change behind the lower jitter.

**Why**
1. The project claims a fleet of about 300 robots, an eightfold jitter reduction, and motor faults cut by more than half—matching this role’s figures and outcomes. A reader will question why the same achievement appears in two different settings years apart.
2. Its fleet scale, jitter reduction, and fault reduction make it the entry’s strongest result. Opening with it would show the scope of your embedded work before the reader reaches the supporting examples.

**How to change it**
1. Keep the rewrite and its results under [the correct role and dates]. Remove or correct the attribution in the other entry; if these were separate projects, add [the distinguishing context] rather than leaving matching claims unexplained.
2. Once its attribution is corrected, move this bullet to the first position under Voltline.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “next-generation, innovation-driven IoT solution” is promotional wording that does not identify what you built.
2. [Polish] “redefines sustainable environmental sensing” asserts an effect without saying what changed.

**Why**
1. A technical reader cannot tell which part of the weather station demonstrates your engineering skill. The broad labels take space that could name a subsystem or sensing function.

**How to change it**
1. Replace that phrase with [the specific station subsystem or sensing function you built].

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The measured current reduction is not the opening bullet of the project.

**Why**
The change from 4.2 mA to 0.9 mA immediately shows both a result and how you achieved it. Leading with that evidence would make the project clearer before the reader encounters any broader description.

**How to change it**
Move this bullet to the first position under the weather-station project.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “openly” adds little to “Published” without a specific licensing meaning.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] The Formula Student car entry incorrectly attributes robot-fleet motor-controller work to the student project.
2. “Worked on firmware and testing” names activities without saying what you changed or tested.

**Why**
1. The entry concerns an electric race car ending in 2021, while the résumé places robot-fleet motor-controller work in the later Voltline role. “Robot fleet’s” also has no clear referent under the car-project heading, making the misplaced claim conspicuous.
2. Even if this were placed under the right project, a reader could not tell what contribution or outcome to credit to you. The generic phrasing adds little beside a specific account of the work.

**How to change it**
1. Cut this bullet from the Formula Student entry. Keep the dashboard CAN work as the short student-project entry; if you add car firmware work, describe [the car system worked on] instead.
2. Cut this bullet as recommended. If you replace it with genuine Formula Student work, name [what you changed in the car firmware], [what you tested], and [what changed as a result].

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Polish] “tested against the motor controller” does not identify what the dashboard test verified.
2. [Polish] “before each race” gives the test schedule but not its outcome.
3. [Polish] “was written and tested” hides whether you personally did the dashboard CAN work.
4. The dashboard CAN bullet, the entry’s relevant car-project work, is not the opening bullet.

**Why**
4. It gives the reader a task that belongs under the electric-car heading. Moving it first would establish the project’s subject before any other detail.

**How to change it**
4. Move this bullet to the first position; after cutting the robot-fleet bullets, it can stand as the short project entry.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The rewrite for “a fleet of about 300 robots” is incorrectly presented as Formula Student work.
2. “Rewrote motor-control firmware” does not explain what changed in the control implementation.

**Why**
1. The résumé assigns a 300-unit fleet rewrite and matching jitter and fault improvements to the later Voltline role. An electric-car project heading does not account for that robot fleet, so repeating the achievement here undermines both entries.
2. The line reports large improvements without connecting them to a technical decision. If this were a distinct project, that missing connection would prevent the reader from assessing the work behind the result.

**How to change it**
1. Cut this line from Formula Student and keep the fleet rewrite under [the correct role and dates]. Replace it with [an actual Formula Student contribution] only if one is available.
2. Cut the misplaced fleet bullet. If there was a separate Formula Student motor-control contribution, describe [the specific implementation change] and [its observed result] instead.

## Already working

- s2:e0:b3: Explains the fixture’s parallel-testing approach without excess detail.

## Set aside (9)

9 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f554031a.md.

