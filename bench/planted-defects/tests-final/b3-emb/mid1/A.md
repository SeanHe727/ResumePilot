> Here is my resume: bench/planted-defects/tests-final/b3-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets, the resume’s overall narrative, and its formatting. Education has no bullets to review; I didn’t compare against a job posting.

The main changes to address:
- **Resolve the repeated robot-firmware claims:** the Voltline job and Formula Student project both claim the work on a fleet of about 300 robots, with similar jitter and motor-fault reductions.
- **Clarify or remove mismatched project content:** the Formula Student entry includes robot-fleet claims that don’t fit the car project; its opening project description is also vague.
- **Make several results more specific:** clarify what “update speed” measures, what the test rig changed, and how the race-condition fix was validated. The reviewer also flagged the claim that sampling a 5 kHz signal at 8 kHz avoids aliasing.

The resume parses cleanly. The narrative review also noted a 10-month gap after graduation and suggested moving Experience above Education. Full report: `/report --full`.

> /report
# Review: resume.pdf

**79/100** — format 100 · content 67 · wording 75 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Electrical Engineering

**Problem**
[Polish] Education appears before Experience, so the reader sees the degree before the candidate’s current direction.

> May 2021

**Problem**
[Polish] The résumé leaves a 10-month gap between the degree and the first listed experience role unexplained.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed by 60%” does not identify the performance measure or comparison.

**Why**
A reader cannot tell whether updates took less time, transferred data faster, or improved another measure. Without the measure and baseline, the size of the gain is difficult to judge.

**How to change it**
Replace “update speed” with the actual measure and comparison, such as update duration from [baseline] to [result], if accurate.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test-rig bullet gives the test volume and cadence but not the rig’s effect.

**Why**
The count shows how much testing ran, not whether the rig caught regressions, improved coverage, or saved time. Without an outcome, the reader cannot tell why the rig mattered.

**How to change it**
Add one observed result, such as [regressions caught, coverage gained, or manual test time saved compared with before], if available.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The logger’s outcome is buried after a long explanation, and “which found” has an unclear referent.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.
2. [Polish] The sampling claim gives no validation that detection or signal capture improved.
3. [Polish] The purpose clause is longer than needed and “it” has an unclear referent.

**Why**
1. At an 8 kHz sampling rate, the Nyquist frequency is 4 kHz, below the 5 kHz signal. The 5 kHz component aliases to a lower apparent frequency, so the stated claim is technically wrong.

**How to change it**
1. If the signal was sampled above 10 kHz with suitable anti-alias filtering, state the actual rate; otherwise remove the claim that it was captured without aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring a shared counter “volatile” does not by itself fix a race condition.
2. [Important] The race-condition claim gives no evidence of how the fix was validated or what changed afterward.
3. [Polish] The interrupt-handler and main-loop explanation can be shortened to “shared counter.”

**Why**
1. Volatile affects how the compiler handles accesses, but it does not make counter updates atomic or prevent interrupt/main-loop interleaving. A race requires suitable synchronization, such as an atomic operation or a critical section.
2. A reader can see that a concurrency issue was addressed, but cannot judge whether observable errors stopped or how that was established. The result of the fix remains unclear.

**How to change it**
1. Name the atomic operation or critical section actually used; if volatile was the only change, say it made accesses visible to the compiler rather than claiming the race was fixed.
2. Add [the counter error observed before and after the fix, under a stated test or operating condition], if available.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The motor-controller rewrite and its results are also attributed to the Formula Student project and different dates.
2. [Important] The rewrite does not name the technical change that drove the results.
3. [Important] The 60% fault reduction lacks a fault measure, denominator, or comparison period.
4. [Polish] The fleet-size detail separates the rewrite from its results.

**Why**
1. The Formula Student entry describes a similar rewrite for about 300 robots and an eightfold jitter reduction, while this role dates the 300-unit warehouse-fleet result to 2023–2025. A reader may doubt which entry and period are correct, weakening confidence in both claims.
2. The jitter and fault outcomes are strong, but “rewrote” is too broad to show the embedded engineering involved. A reader has little basis for assessing the technical contribution.
3. Without that context, readers cannot judge the size or comparability of the reliability improvement. The percentage alone does not explain what was counted or over what period.

**How to change it**
1. Clarify which role and dates the rewrite belongs to [correct role and period], then remove or distinguish the duplicate claim.
2. Replace or supplement this phrase with [one relevant control-loop or fault-handling change], if accurate.
3. Clarify the fault measure and comparison, such as [fault rate before and after over comparable operating periods], if available.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Important] The automation bullet does not show how the end-of-line tests were automated.

**Why**
A hardware-test reader can see the time saved and production volume, but not the engineering behind the automation. That leaves the technical contribution harder to assess.

**How to change it**
After “humidity sensor,” add [the single most telling test-control, instrumentation, or integration detail], if accurate.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Polish] The strongest result in this role is not presented first.
2. [Polish] “The findings updated” obscures who changed the reflow profile.
3. The failure-tracing bullet does not state what evidence connected the solder-paste change to the failures.

**Why**
3. The line names a suspected cause and a return-rate improvement, but not how the change was identified as the cause. A reader may question how firmly the evidence supports that link.

**How to change it**
3. After “solder-paste change,” add [the evidence that identified it as the cause], if available.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Important] The calibration-procedure bullet does not show the technical approach it captured.

**Why**
The complaint reduction establishes value, but the line does not reveal the calibration skill behind the procedure. A brief technical detail would help a reader judge the relevance of that work.

**How to change it**
After “sensor line,” add [the key calibration step or reference standard the procedure specified], if accurate.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The opening is promotional and does not identify the station’s work or technical approach.

**Why**
“Next-generation” and “innovation-driven” do not say what the station does, while “redefines sustainable environmental sensing” makes a broad claim without support. This opening does not fit the concrete power reduction and public release that follow.

**How to change it**
Remove the promotional opening. If an opening detail is needed, replace it with [what the station measures or the technical work it involved], if accurate.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The strongest project result does not appear first.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] The robot-fleet motor-controller claim does not fit the Formula Student Electric Car project.
2. “Worked on firmware and testing” does not name a specific action.
3. The robot-fleet bullet gives no result of the work.

**Why**
1. The entry identifies a race-car project, while the bullet assigns work to a robot fleet. As written, it attributes work to the car project that belongs to a different application unless the project also involved a separate fleet.
2. The phrase does not show what the candidate changed or what testing they performed. That makes their contribution difficult to distinguish from general team participation.
3. Even if the project attribution is accurate, the line does not say what the firmware or testing achieved. A reader cannot tell whether it improved the car or helped the team in a measurable way.

**How to change it**
1. If this was car work, describe the car’s motor controllers; if it was separate robot-fleet work, identify that project.
2. Replace “Worked on” with the specific action performed, such as writing or testing the firmware, if accurate.
3. Add [the main result of the work], if available and accurate to this project.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The CAN-bus testing bullet gives no result of the testing.
2. [Polish] The strongest car-related line does not appear first in this older project.
3. [Polish] The passive construction hides the candidate’s role.

**Why**
1. The timing and test target are clear, but a reader cannot tell whether the tests found or prevented a problem or helped race readiness. Without an outcome, the value of the work is difficult to judge.

**How to change it**
1. Add [the main test outcome or what the firmware enabled], if available.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The claim about rewriting firmware for 300 robots conflicts with the car-project context and echoes the later Voltline fleet claim.
2. The rewrite does not name the firmware change that produced the results.
3. The jitter and fault reductions lack a baseline or comparison period.

**Why**
1. This entry dates to 2019–2021 and is identified as an electric-car project, while the later job assigns a similar 300-robot result to 2023–2025. A reader may question whether this was separate robot-fleet work or an achievement attributed to the wrong project.
2. The line gives performance outcomes but leaves the technical contribution behind them unclear. A reader has little basis for judging the engineering involved.
3. “Eightfold” and “more than half” describe reductions without showing the starting measure or the period compared. Readers cannot judge the scale or comparability of the results.

**How to change it**
1. If this project independently produced those results, clarify the separate robot-fleet work; otherwise remove the claim or replace it with the project’s actual car-related result.
2. Replace or supplement this phrase with [the firmware change that produced the results], if accurate to this project.
3. Add [the baseline and comparison period for the jitter and fault measures], if available and accurate.

## Already working

- s2:e1:b3: The fixture's capacity helps readers picture the design contribution.
- s3:e0:b2: Shows outside use of the project through a local school's build of two stations.

## Set aside (9)

9 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-40607020.md.

