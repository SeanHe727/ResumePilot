> Here is my resume: bench/planted-defects/tests-final/b3-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full-resume narrative and ATS formatting. Education had no bullets to review; no job description was provided.

The main changes to address:
- **Resolve the Formula Student entry:** its bullets describe robot-fleet work, and one repeats a distinctive firmware achievement from your later Voltline role. Clarify whether the work and dates are accurate, or whether these were separate achievements.
- **Make technical claims precise:** define what “update speed” measures and its comparison, correct the sampling/aliasing claim, and revisit the claim that declaring a shared counter `volatile` fixed a race condition.
- **Add specifics to activity-focused bullets:** the test automation, calibration procedure, and test fixture need more detail about what you implemented or how it worked. Also clarify the 10-month gap between May 2021 and April 2022 if there is relevant study or work to include.

The format check found clean ATS parsing and no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 70 · wording 78 · narrative 64

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 15 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Institute of Technology

**Problem**
[Important] Education appears before Experience even though the work history is the stronger evidence of your direction.

**Why**
A reader encounters the degree before the more relevant work history. That ordering delays the strongest evidence of your professional direction.

**How to change it**
Move the Experience section ahead of Education.

> May 2021

**Problem**
[Polish] The résumé leaves the period from May 2021 to April 2022 unexplained.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed” does not identify the measure or comparison behind the 60% gain.

**Why**
A reader cannot tell whether updates took less time, transferred data faster, or improved on another measure. Without the comparison point, the size of the gain is hard to interpret.

**How to change it**
Replace “update speed” with [the specific metric] and add [the comparison point].

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The 400-test figure reports testing activity but not its effect.

**Why**
The number of tests shows how much the rig ran, not whether it caught regressions, reduced manual work, or improved release confidence. Without that result, a reader cannot judge what the rig achieved.

**How to change it**
Add [the most direct result, such as regressions caught or validation time saved], and include a comparison point if relevant.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The clause “which found the root cause” can refer to the flash or saved data rather than the logger or its use.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz does not capture it without aliasing.
2. [Polish] The sampling clause describes an intended capability but not its effect in use.

**Why**
1. At an 8 kHz sample rate, the Nyquist frequency is 4 kHz, below the signal’s 5 kHz frequency. That component aliases rather than being captured without aliasing.

**How to change it**
1. If the signal was sampled above 10 kHz with suitable anti-alias filtering, state that; otherwise remove the claim that the 5 kHz signal was captured without aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition.
2. [Important] The claim that the race condition was fixed gives no effect on the system.
3. [Polish] Repeating “the counter” makes the explanation unnecessarily repetitive.

**Why**
1. In C, volatile affects compiler optimizations but does not guarantee atomic access or synchronization between the interrupt handler and the main loop. The counter can still be accessed inconsistently.
2. A reader cannot tell whether the change resolved crashes, incorrect counts, or another operational problem. Without the consequence, the significance of the fix is unclear.

**How to change it**
1. If an atomic operation or appropriate synchronization fixed the race, name that; otherwise say volatile was added without claiming it fixed the race.
2. Add [the observed failure or behavior eliminated], with a concise measure if one exists.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Important] “Rewrote the motor-controller firmware” does not identify the technical change behind the improvements.
2. [Important] The 60% reduction in field motor faults has no baseline or comparison period.
3. [Important] The strongest bullet is placed after the other role bullets instead of opening the section.

**Why**
1. The reported outcomes are strong, but a reader cannot see the embedded engineering approach that drove them. That makes the technical contribution harder to assess.
2. Without a fault rate or count to compare against, and a time window, a reader cannot gauge the operational scale of the reduction. The percentage alone leaves the comparison unclear.
3. The firmware rewrite reports the clearest combination of scale and measured results. Leaving it last means a scanning reader encounters the stronger evidence later.

**How to change it**
1. Replace or supplement “Rewrote” with [the key firmware change that reduced jitter or faults], if accurate.
2. Add [the baseline fault rate or count and the comparison period], if available.
3. Move this bullet ahead of the other Voltline bullets.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not show what test step or automation element you implemented.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The return-rate reduction comes after the failure context and diagnosis, so a scanning reader reaches the result only at the end.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] “Wrote the calibration procedure” does not indicate what calibration approach or check it specified.

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] The fixture’s eight-board capacity does not show what design feature enabled simultaneous checks.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “IoT solution” does not say what you built or how you built it.
2. [Important] The claim that the project “redefines sustainable environmental sensing” gives no concrete outcome or evidence of impact.

**Why**
1. The project title gives a domain, but the bullet gives no concrete technical detail that shows your contribution or skill. A reader cannot picture the implementation from this description.
2. A reader cannot tell what the project changed or why it matters. Without a result or comparison, the impact claim is difficult to assess, and the promotional phrasing leaves the actual work unclear.

**How to change it**
1. Replace this phrase with [one concrete implementation choice or component], if it helps explain how the station works.
2. Replace this claim and “next-generation, innovation-driven” with [the specific sensing task or outcome] and [a result compared with a baseline or prior design, if available].

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The strongest bullet is not the opening one.

**Why**
The current estimate of reduced average current gives a direct, quantified project result and explains how it was achieved. Placing it first would put that evidence in front of a scanning reader.

**How to change it**
Move this bullet ahead of the other project bullets.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
1. [Polish] The school’s adoption shows how many stations were built but not what they enabled.
2. [Polish] “Openly” is vague and redundant with “published.”

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] “Robot fleet’s motor controllers” misdescribes the work under a Formula Student electric-car project.
2. [Important] “Worked on” and “firmware and testing” do not identify the specific task or test performed.
3. [Important] The bullet gives no outcome or evidence of what the work changed.

**Why**
1. Formula Student is a student race-car project; work on that car’s motor controller does not establish work for a robot fleet. The scope is therefore inaccurate as written.
2. Those broad terms do not give a reader a clear example of your technical skill. The wording also hides the specific work you performed.
3. A reader cannot tell what the contribution accomplished or how successful it was. The broad description also leaves the engineering work difficult to picture.

**How to change it**
1. Describe the actual vehicle or system worked on; retain “robot fleet” only if this project also involved one.
2. Replace “Worked on firmware and testing” with [the single most telling firmware task or test], if accurate.
3. Replace “Worked on” with the specific contribution and add [what changed or improved and how it was measured], if accurate.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The CAN-bus firmware bullet describes activity and timing but gives no result.
2. [Polish] The passive wording obscures your role in creating and testing the firmware.

**Why**
1. A reader can see that testing happened before each race, but not whether it found or prevented problems or otherwise improved race readiness. The outcome of the work is therefore unclear.

**How to change it**
1. Add [what the testing established or changed], if accurate.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The Formula Student bullet attributes a second version of the 300-robot firmware result to 2019–2021, while Voltline attributes it to 2023–2025.
2. [Important] The strongest bullet is not the opening one.
3. [Polish] “Rewrote motor-control firmware” names the work broadly without identifying what changed.

**Why**
1. A reader may notice the same distinctive fleet and motor-control achievement assigned to two different entries and periods. That inconsistency can make the attribution and dates of the result seem unreliable.
2. This bullet reports quantified gains in jitter and motor faults, making it the strongest evidence in the entry as written. Keeping it last means a scanning reader reaches that evidence later.

**How to change it**
1. Confirm which entry and dates are correct; if these were separate achievements, clarify the distinction and align the figures.
2. Move this bullet ahead of the other project bullets if the achievement belongs in this entry.

> Formula Student Electric Car

**Problem**
[Important] The entry title identifies a student electric-car project, but the entry-wide relationship between that project and the robot-fleet and dashboard work is unclear.

**Why**
A reader sees a Formula Student car project, while the bullets describe robot-fleet motor controllers and dashboard CAN-bus firmware. Without a clear connection, the reader may doubt whether the work belongs to this project.

**How to change it**
Clarify how the listed work relates to the car, or shorten the entry to the contribution that belongs here.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-d57615c7.md.

