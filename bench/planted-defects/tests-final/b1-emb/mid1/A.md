> Here is my resume: bench/planted-defects/tests-final/b1-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s narrative and formatting. Education has no bullets to review; no job description was provided.

The main changes to address:
- **Resolve the 300-robot firmware achievement:** it appears in both Voltline and the Formula Student project, with similar results but different dates and contexts. Clarify where the work belongs—or distinguish the work and results.
- **Strengthen the weaker bullets:** specialists flagged unclear measures or missing outcomes in several Voltline bullets, and vague or promotional descriptions in the Weather Station and Formula Student projects. They also flagged the 8 kHz sampling claim for a 5 kHz signal as technically incorrect.
- **Reorder and clarify the story:** put experience newest-first, and explain the May 2021–April 2022 period if relevant. The narrative review also recommends prioritizing the more relevant project.

Formatting parsed cleanly as a one-page resume. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 71 · wording 76 · narrative 58

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 9 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors

**Problem**
[Important] The Experience entries are not in newest-first order.

**Why**
Clearwater Sensors (April 2022–February 2023) appears above the more recent Voltline Robotics role (March 2023–June 2025). This makes the work history harder to scan chronologically.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

> Clearwater Institute of Technology

**Problem**
[Important] Education appears before Experience, so the engineering work is not the first evidence of your current direction.

**Why**
Your recent engineering roles provide more direct evidence of your current professional focus than the degree entry. Placing them first helps a reader see that experience sooner.

**How to change it**
Move the Experience section ahead of Education.

> Formula Student Electric Car

**Problem**
[Important] The older Formula Student project takes space from the more current weather-station project and disrupts the résumé’s direction.

**Why**
The weather-station project is more current, while the Formula Student entry is older and includes robot-fleet claims that do not fit its stated project. Keeping the older entry at its current length can draw attention away from the more relevant material.

**How to change it**
Shorten or remove the Formula Student entry, retaining only the project-relevant material that you want to keep.

> Sep 2017 - May 2021

**Problem**
[Polish] The résumé shows no study or work between the degree and the Clearwater Sensors role.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The strongest result in this entry is not the first bullet.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The calibration bullet does not explain what calibration approach the procedure established.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
1. [Important] The 60% update-speed improvement does not identify the measure or its baseline.
2. [Polish] The repeated “by” makes the result-and-method phrasing clumsy.

**Why**
1. A reader cannot tell whether the change refers to download duration, throughput, or another measure. Without the before-and-after comparison, the percentage is difficult to interpret or assess.

**How to change it**
1. Replace “update speed” with [the measure, such as download duration or throughput] and add [the before-and-after comparison or baseline], if accurate.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test-rig bullet reports test volume and frequency but no result from the rig.

**Why**
The figure shows how much testing ran, not what the rig accomplished. A reader is left wondering whether it caught defects, prevented escapes, or shortened validation.

**How to change it**
After the test-volume detail, add [the most telling result, such as defects caught, field escapes prevented, or validation time saved], if you can support it.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The “which” clause leaves it unclear whether the logger or the saved data helped identify the failures.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz does not capture it without aliasing.
2. The phrase “so the fault detector could capture it” is wordy and leaves “it” vague.

**Why**
1. At an 8 kHz sampling rate, the Nyquist frequency is 4 kHz, below the signal’s 5 kHz frequency. The 5 kHz component aliases unless it is removed before sampling, so the current claim is technically incorrect.
2. The pronoun does not clearly name what the detector captures, and the phrase takes extra words to express the intended result. The wording should be tightened only in a way that remains technically accurate; the current sampling rate does not support an alias-free claim.

**How to change it**
1. If the signal was sampled above 10 kHz with appropriate anti-alias filtering, state the actual sampling rate and method. Otherwise, remove the claim that the detector captured the 5 kHz signal without aliasing.
2. Tighten the phrase only if the method supports it: use “to enable alias-free fault detection” if accurate; otherwise remove the alias-free claim.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition.
2. [Important] The claimed race-condition fix has no stated check or result showing that it was resolved.
3. Repeating “counter” makes the sentence unnecessarily redundant.

**Why**
1. Volatile affects compiler treatment of reads and writes, but it does not make counter updates atomic or prevent the interrupt handler and main loop from interleaving. The race can therefore remain despite the change described.
2. Even a valid synchronization change does not tell a reader how you confirmed the race was gone. Without an observable verification result, the claimed resolution is harder to assess.
3. The noun appears twice in the short phrase describing the shared variable. Removing the repetition makes the line easier to read, but does not itself resolve the race condition.

**How to change it**
1. If you protected the counter with an atomic operation or a critical section, name that method. Otherwise, say that you declared it volatile without claiming that this fixed the race.
2. After describing the counter change, add [the clearest verification result or symptom that no longer occurred], if you can support it.
3. Replace the repeated phrase with “between the interrupt handler and main loop by declaring their shared counter volatile”; do not imply that volatile fixed the race.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Polish] The opening phrase does not name the firmware change that produced the reported results.
2. [Polish] The quantified results are buried at the end of the long bullet.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The promotional description does not identify what the station does or what technical work you performed.

**Why**
A reader cannot picture the station’s function or the value it delivered from “next-generation” and “innovation-driven.” “Engineered a” also does not name a design or implementation contribution, so the line gives little evidence of your technical work.

**How to change it**
Replace the promotional wording with [what the station measures or does] and [the concrete result or use]. Add [one specific design or firmware choice], if accurate, without repeating the power-saving details in the next bullet.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The methods appear before the measurable current reduction.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] The sharing bullet does not say what technical contribution made the stations usable or replicable.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
The bullet does not identify your specific firmware or testing contribution or its outcome.

**Why**
“Worked on” describes involvement without showing what you did, and “firmware and testing” does not say what work those terms cover. A reader also gets no result by which to judge the contribution.

**How to change it**
If this is Formula Student work, replace “Worked on firmware and testing” with [the specific firmware or testing work] and add [its outcome], if accurate.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The dashboard firmware bullet does not say what the firmware enabled or improved.
2. [Polish] The bullet does not say what the tests checked or whether they passed.
3. [Polish] The dashboard CAN-bus bullet is not the opening line of the entry.
4. [Polish] Passive phrasing obscures your role in writing and testing the firmware.

**Why**
1. The recurring writing and testing process does not show what changed for the dashboard, car, or team. Without an outcome, a reader cannot judge the value of the work.

**How to change it**
1. Add [what the dashboard or car could do as a result], if accurate.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
The robot-fleet bullet’s reduction sizes do not state what they are compared with.

**Why**
“Eightfold” and “more than half” give the size of the changes but not the reference values or comparison point. A reader cannot tell what baseline supports those claims.

**How to change it**
If this is a distinct, accurate project achievement, add [the baseline or comparison for the jitter and motor-fault reductions]; otherwise remove the claim from this entry.

> a fleet of about 300 robots

**Problem**
[Error] The robot-fleet firmware claim appears to duplicate the later Voltline achievement and conflicts with this project’s dates and context.

**Why**
The Formula Student bullet describes a fleet of about 300 robots and motor-control results, while the later Voltline entry also describes a robot fleet and motor-control results. A reader may question which project owns the achievement and whether it belongs in this 2019–2021 entry.

**How to change it**
Clarify which entry owns the achievement. If it is the same achievement as the Voltline work, remove it here; if the projects are distinct, add [the actual distinction and separate results], if accurate.

> robot fleet’s motor controllers

**Problem**
[Important] The robot-fleet motor-controller work pulls this entry away from the stated Formula Student project.

**Why**
The entry is about a Formula Student car, but this bullet describes a robot fleet. That mismatch disrupts the project’s focus and overlaps with the later employment narrative, making the project evidence less coherent.

**How to change it**
Remove this robot-fleet bullet from the Formula Student entry, or keep it only if it is genuinely Formula Student work and replace the fleet description with [the accurate project context].

## Already working

- s2:e0:b0: Shows a concrete per-unit time reduction and the scale of production affected.
- s2:e0:b3: Connects a specific fixture capability to a measurable throughput improvement.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-d93d253e.md.

