# Full review: resume.pdf

**82/100** — format 100 · content 73 · wording 77 · narrative 66

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 5 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] Experience is not ordered newest-first: Clearwater Sensors appears above the later Voltline Robotics role. *(no words)*

**Why**
A reader reaches the 2022–2023 hardware-test role before the 2023–2025 embedded-software role. That delays the stronger introduction to your more recent direction.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

*raised by file, narrative*

> B.S. in Electrical Engineering

**Problem**
[Important] Education appears before the more recent Experience and Projects entries. *(no words)*

**Why**
The degree is relevant, but the 2023–2025 embedded role offers a stronger first account of your work. Its current placement postpones that evidence.

**How to change it**
Move the Education entry below Experience and Projects.

*raised by narrative*

> Apr 2022 - Feb 2023

**Problem**
[Polish] No study or work is listed for the 10 months between the May 2021 degree and the April 2022 first role. *(about 8 words)*

**Why**
The dates leave a gap a reader may ask about. Relevant activity during that period could answer the question without requiring them to infer what happened.

**How to change it**
If there was relevant activity during that period, add [a brief, accurate description of it]; otherwise, do not invent an entry.

*raised by narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not identify the testing step you automated. *(about 4 words)*

**Why**
The reduction from 90 to 25 seconds is clear, but a hardware-test reader cannot tell what technical work produced it. Naming one step would make the gain more informative.

**How to change it**
If accurate, replace “end-of-line tests” with “[specific measurement or pass-fail step] in end-of-line testing.”

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] “Traced a batch of early field failures to a solder-paste change” gives the conclusion without showing the diagnostic work. *(about 5 words)*
2. [Polish] “the findings updated the reflow profile” incorrectly makes the findings appear to perform the update. *(no words)*

**Why**
1. The reader sees what you found but not how you distinguished the solder-paste change from other possible causes. One decisive check would show your failure-analysis skill.
2. The wording obscures the relationship between the investigation and the process change. A reader should not have to infer whether the findings prompted an update or whether you made it.

**How to change it**
1. If accurate, add “using [decisive diagnostic check]” after “solder-paste change.”
2. Replace that phrase with “the findings prompted a reflow-profile update.”

*raised by content, wording*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] “Wrote the calibration procedure” does not say what the procedure changed about calibration. *(about 7 words)*

**Why**
The drop in complaints is useful evidence, but the reader cannot see the technical contribution behind it. Without that detail, writing a new procedure can sound like documenting an existing process.

**How to change it**
If accurate, replace “the calibration procedure” with “a calibration procedure specifying [most important new check or adjustment].”

*raised by content*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
1. [Polish] “update speed by 60%” does not identify the metric that improved. *(about 3 words)*
2. [Polish] “by 60% by compressing” repeats “by” and slows the sentence. *(no words)*

**Why**
1. A reader cannot tell whether the figure refers to download time, total update time, or throughput. Those measures describe different benefits, so the result is difficult to assess.
2. The repeated construction interrupts an otherwise direct explanation of the result and method. It makes the line harder to scan without adding information.

**How to change it**
1. Replace “update speed” with [the measured update metric]. If the comparison was not the previous updater, name [the comparison] as well.
2. Replace the second “by” with “through.”

*raised by content, wording*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Polish] “ran 400 motor-control tests on every firmware build” reports activity but not its effect. *(about 7 words)*
2. [Polish] “Wrote a hardware-in-the-loop test rig” leaves unclear whether you built the rig or only wrote its software. *(no words)*

**Why**
1. The test count establishes scale, but a reader cannot tell whether the rig caught regressions, replaced manual checks, or affected releases. An observed benefit would explain why the recurring tests mattered.
2. Those are different contributions in an embedded-systems role. The reader has to pause before deciding what work to credit to you.

**How to change it**
1. After “every firmware build,” add [the most concrete observed testing or release benefit]. If none was measured, state [the manual or intermittent check it replaced], if accurate.
2. If you built the rig, replace “Wrote” with “Built”; otherwise, specify [the software you wrote].

*raised by content, wording*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “which found the root cause of 5 field failures” attributes the investigation to the logger rather than clarifying its role. *(about 1 word)*

**Why**
The logger supplied data; the wording makes it sound as though the tool itself conducted the analysis. That blurs what you accomplished with the captured data.

**How to change it**
Replace “which found the root cause of 5 field failures” with “helping identify the root causes of 5 field failures.”

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] An 8 kHz sampling rate cannot capture a 5 kHz vibration signal “without aliasing.” *(about 2 words)*
2. [Polish] “so the fault detector could capture it” describes a purpose, not an observed detection result. *(about 3 words)*

**Why**
1. At 8 kHz, the Nyquist frequency is 4 kHz, so a 5 kHz component aliases to 3 kHz under ordinary sampling. An embedded-systems reader will spot the contradiction and question the technical claim.
2. The reader cannot tell whether the change improved fault detection or merely enabled a proposed capability. That distinction matters because the line currently presents the purpose as its payoff.

**How to change it**
1. If the 5 kHz component was directly sampled without aliasing, replace “8 kHz” with [the actual sampling rate above 10 kHz]. Otherwise, remove “without aliasing” and state [what the detector measured].
2. Replace the purpose clause with [the observed fault-detection or diagnostic result], if one exists. Otherwise, describe only [the capability enabled] without implying an observed result.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter “volatile” does not, by itself, fix a race condition. *(about 4 words)*
2. [Polish] “Fixed a race condition” does not identify the failure or incorrect behavior the fix addressed. *(about 6 words)*
3. The phrasing around the shared counter repeats “the counter” and stacks two “by” phrases. *(saves about 3 words)*

**Why**
1. Volatile requires compiler accesses to the counter; it does not make accesses atomic or synchronize the interrupt handler with the main loop. It could address a stale read, but that is narrower than the race-condition fix claimed.
2. Even with a correct account of the counter access, the reader would not know what malfunction it caused. A checkable symptom would show the importance of the correction to the motor controller.
3. The repetition makes an already technical explanation more cumbersome. A shorter construction would let the reader follow the interrupt-handler and main-loop relationship more easily.

**How to change it**
1. If the issue was a stale read, replace “Fixed a race condition” with wording that says declaring the counter volatile fixed a stale read. If it was a shared-access race, name [the synchronization or atomic-access method used]; otherwise remove the claim that the race was fixed.
2. Add [the observable failure or incorrect behavior it stopped] beside the corrected description of the counter issue.
3. If the volatile claim is retained after correcting its technical meaning, replace “on the counter shared by the interrupt handler and the main loop by declaring the counter volatile” with “on a counter shared by the interrupt handler and main loop by declaring it volatile.”

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The 300-unit fleet rewrite and its results are also attributed to the earlier Formula Student electric-car project. *(saves about 17 words)*
2. [Important] The fleet-rewrite result is buried at the end of the Voltline entry. *(no words)*
3. [Polish] “Rewrote the motor-controller firmware” does not identify the technical change behind the lower jitter. *(about 5 words)*

**Why**
1. The project claims a fleet of about 300 robots, an eightfold jitter reduction, and motor faults cut by more than half—matching this role’s figures and outcomes. A reader will question why the same achievement appears in two different settings years apart.
2. Its fleet scale, jitter reduction, and fault reduction make it the entry’s strongest result. Opening with it would show the scope of your embedded work before the reader reaches the supporting examples.
3. The 120-to-15-microsecond result is strong, but the reader cannot connect it to an implementation decision. One distinguishing control-loop or scheduling change would demonstrate the embedded-systems work behind the figure.

**How to change it**
1. Keep the rewrite and its results under [the correct role and dates]. Remove or correct the attribution in the other entry; if these were separate projects, add [the distinguishing context] rather than leaving matching claims unexplained.
2. Once its attribution is corrected, move this bullet to the first position under Voltline.
3. If accurate, replace “Rewrote” with a brief description of [the key control-loop or scheduling change], keeping the existing results under the correct entry.

*raised by content, narrative*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “next-generation, innovation-driven IoT solution” is promotional wording that does not identify what you built. *(about 2 words)*
2. [Polish] “redefines sustainable environmental sensing” asserts an effect without saying what changed. *(saves about 4 words)*

**Why**
1. A technical reader cannot tell which part of the weather station demonstrates your engineering skill. The broad labels take space that could name a subsystem or sensing function.
2. The reader has no concrete outcome or evidence by which to judge that claim. It is especially hard to credit beside the project’s specific current-reduction figure.

**How to change it**
1. Replace that phrase with [the specific station subsystem or sensing function you built].
2. Replace the phrase with [an observable result and the evidence for it], if available; otherwise remove it.

*raised by content, wording*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The measured current reduction is not the opening bullet of the project. *(no words)*

**Why**
The change from 4.2 mA to 0.9 mA immediately shows both a result and how you achieved it. Leading with that evidence would make the project clearer before the reader encounters any broader description.

**How to change it**
Move this bullet to the first position under the weather-station project.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “openly” adds little to “Published” without a specific licensing meaning. *(saves 1 word)*

**Why**
The important evidence is that the schematics and firmware were available and a school used them to build two stations. The adverb does not make that result clearer.

**How to change it**
Remove “openly” unless it stands for [a specific licensing detail] you want to name.

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] The Formula Student car entry incorrectly attributes robot-fleet motor-controller work to the student project. *(saves about 11 words)*
2. “Worked on firmware and testing” names activities without saying what you changed or tested. *(saves about 11 words)*

**Why**
1. The entry concerns an electric race car ending in 2021, while the résumé places robot-fleet motor-controller work in the later Voltline role. “Robot fleet’s” also has no clear referent under the car-project heading, making the misplaced claim conspicuous.
2. Even if this were placed under the right project, a reader could not tell what contribution or outcome to credit to you. The generic phrasing adds little beside a specific account of the work.

**How to change it**
1. Cut this bullet from the Formula Student entry. Keep the dashboard CAN work as the short student-project entry; if you add car firmware work, describe [the car system worked on] instead.
2. Cut this bullet as recommended. If you replace it with genuine Formula Student work, name [what you changed in the car firmware], [what you tested], and [what changed as a result].

*raised by content, wording, narrative*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Polish] “tested against the motor controller” does not identify what the dashboard test verified. *(about 3 words)*
2. [Polish] “before each race” gives the test schedule but not its outcome. *(about 6 words)*
3. [Polish] “was written and tested” hides whether you personally did the dashboard CAN work. *(saves about 2 words)*
4. The dashboard CAN bullet, the entry’s relevant car-project work, is not the opening bullet. *(no words)*

**Why**
1. The reader knows the components involved but not the pass condition. Naming the behavior would show what the pre-race testing established.
2. Frequency alone does not tell the reader whether testing improved race readiness or caught a problem. An observed result would make the recurring check meaningful.
3. The passive construction leaves ownership unclear in an entry that names you Electronics Lead. A direct opening would make your contribution easier to assess.
4. It gives the reader a task that belongs under the electric-car heading. Moving it first would establish the project’s subject before any other detail.

**How to change it**
1. Replace that phrase with wording that names [the specific dashboard/controller behavior verified].
2. If accurate, add [the race-readiness result or issue the testing caught] after the test description.
3. If the work was yours, replace the passive opening with “Wrote and tested.”
4. Move this bullet to the first position; after cutting the robot-fleet bullets, it can stand as the short project entry.

*raised by content, wording, narrative*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The rewrite for “a fleet of about 300 robots” is incorrectly presented as Formula Student work. *(saves about 23 words)*
2. “Rewrote motor-control firmware” does not explain what changed in the control implementation. *(saves about 23 words)*

**Why**
1. The résumé assigns a 300-unit fleet rewrite and matching jitter and fault improvements to the later Voltline role. An electric-car project heading does not account for that robot fleet, so repeating the achievement here undermines both entries.
2. The line reports large improvements without connecting them to a technical decision. If this were a distinct project, that missing connection would prevent the reader from assessing the work behind the result.

**How to change it**
1. Cut this line from Formula Student and keep the fleet rewrite under [the correct role and dates]. Replace it with [an actual Formula Student contribution] only if one is available.
2. Cut the misplaced fleet bullet. If there was a separate Formula Student motor-control contribution, describe [the specific implementation change] and [its observed result] instead.

*raised by content*

## Already working

- s2:e0:b3: Explains the fixture’s parallel-testing approach without excess detail.

## Set aside (9)

- s3:e1:b0: “Worked on firmware and testing” does not say what you changed or tested.
- s3:e1:b0: “robot fleet’s motor controllers” is hard to place under a Formula Student electric-car entry.
- s3:e1:b0: “Worked on firmware and testing” stops at the activity, without saying what changed.
- s3:e1:b2: “Rewrote motor-control firmware” does not say what changed in the control implementation.
- s3:e1:b2: “a fleet of about 300 robots” is difficult to connect to the Formula Student electric-car heading.
- s3:e1:b0: “Worked on firmware and testing” obscures the action; name what you did to the firmware and what you tested.
- s3:e1:b0: “robot fleet’s” has no clear referent under an electric-car entry; identify the fleet or use the same project term throughout.
- s2:e1:b4: “on the counter shared by the interrupt handler and the main loop by declaring the counter volatile” repeats “the counter” and stacks two “by” phrases; tighten to “on a counter shared by the interrupt handler and main loop by declaring it volatile.”
- s3:e1:b1: the strongest line is not the opening one: “The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.” would land harder first
