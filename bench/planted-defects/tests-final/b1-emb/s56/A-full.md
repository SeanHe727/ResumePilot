# Full review: resume.pdf

**83/100** — format 100 · content 72 · wording 85 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 9 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Apr 2022 - Feb 2023

**Problem**
[Important] The experience entries are not in reverse chronological order. *(no words)*

**Why**
Clearwater Sensors, ending in February 2023, appears above Voltline Robotics, which runs from March 2023 to June 2025. That ordering hides the progression from hardware test engineering to embedded software and makes the chronology look mistaken.

**How to change it**
Move Voltline Robotics above Clearwater Sensors.

*raised by file, narrative*

> B.S. in Electrical Engineering

**Problem**
[Important] The résumé leads with education instead of the more recent professional experience. *(no words)*

**Why**
With more than three years of relevant work, the embedded-software trajectory is now stronger evidence than the degree. Making readers pass through education first delays the most current and role-relevant qualifications.

**How to change it**
Move the entire EXPERIENCE section above EDUCATION.

*raised by narrative*

> Sep 2017 - May 2021

**Problem**
The résumé leaves an unexplained 10-month interval between degree completion and the first listed role. *(about 6 words)*

**Why**
The degree ends in May 2021, while the first professional role begins in April 2022. A reader may ask whether relevant employment, projects, training, or another activity is missing from the chronology.

**How to change it**
If applicable, add “[relevant role, project, training, or other activity]” covering that period; otherwise be prepared to explain the interval without inventing an entry.

*raised by narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] “Automated end-of-line tests” does not show how the automation was implemented. *(about 6 words)*

**Why**
For a hardware test engineer, the implementation is important evidence of hands-on test-system skill. Without it, an interviewer has no concrete platform, instrument, or measurement method to explore.

**How to change it**
After “tests,” add “using [test platform or instrumentation and the key control or measurement method],” naming only the most technically distinguishing detail.

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Important] “The findings updated the reflow profile” incorrectly assigns the update to the findings rather than to a person or process. *(saves about 1 word)*
2. [Polish] “Traced a batch of early field failures” states the diagnosis without showing how it was reached. *(about 6 words)*
3. [Polish] This strongest Clearwater Sensors bullet is not placed first. *(no words)*

**Why**
1. The wording makes the causal chain momentarily unclear: findings can prompt an update, but they cannot perform one. That distraction blunts the otherwise specific reduction in returns.
2. A hardware reader cannot tell whether this demonstrated electrical troubleshooting, physical failure analysis, process-data analysis, or another skill. That ambiguity weakens an otherwise strong result and leaves no diagnostic method for an interviewer to probe.
3. The diagnosis, process correction, and reduction in returns from 2.1% to 0.4% combine technical judgment with business impact. Opening with it would establish the value of the role faster than the current test-time bullet.

**How to change it**
1. Replace “the findings updated the reflow profile and cut” with “prompting a reflow-profile update that cut.”
2. After “failures,” add “using [most decisive failure-analysis method or evidence].” Keep the solder-paste finding and return-rate result unchanged.
3. Move this bullet above the current opening bullet.

*raised by wording, content, narrative*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] “Wrote the calibration procedure” describes a deliverable without showing its technically important content. *(about 6 words)*

**Why**
A reader cannot distinguish substantive calibration engineering from documenting an existing process. As written, the line gives limited evidence of the calibration technique, reference, or equipment behind the improvement.

**How to change it**
Replace “the calibration procedure” with “a calibration procedure using [key calibration technique, reference, or equipment]” if that detail reflects your contribution.

*raised by content*

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] “Designed a test fixture that checked 8 boards at once” gives capacity without identifying the mechanism that enabled it. *(about 6 words)*

**Why**
Eight-board capacity shows scale rather than fixture-design method. One distinguishing switching, multiplexing, interface, or parallel-test detail would provide stronger evidence of fixture-development and test-integration skill.

**How to change it**
After “at once,” add “using [key switching, multiplexing, interface, or parallel-test mechanism],” choosing only the mechanism that best represents your work.

*raised by content*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
1. [Important] “Improved update speed by 60%” does not identify the metric that improved. *(about 6 words)*
2. [Polish] “Improved update speed by 60% by” repeats “by” awkwardly. *(no words)*

**Why**
1. A reader cannot tell whether the figure refers to download duration, transfer throughput, or total installation time. Without the metric and comparison points, the 60% improvement cannot be interpreted or independently judged.
2. The repeated construction makes the opening less direct and distracts from the two concrete implementation choices. A stronger verb removes the stumble while preserving the result.

**How to change it**
1. Replace “update speed” with the exact metric and, if available, express it as “[firmware-update metric] from [previous value] to [new value].”
2. Replace “Improved update speed” with “Accelerated firmware updates,” while also applying the more precise metric requested above.

*raised by content, wording*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Polish] “Ran 400 motor-control tests on every firmware build” gives test volume but no resulting improvement. *(about 7 words)*

**Why**
The test count establishes the suite’s size, not whether it caught regressions, shortened validation, or improved release reliability. Without an outcome, the reader cannot assess the rig’s practical value.

**How to change it**
After “every firmware build,” add the strongest measured outcome, such as [regressions caught before release] or [validation-time change compared with the previous process].

*raised by content*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “Which found the root cause” ambiguously suggests that the logger or flash storage performed the analysis. *(saves about 2 words)*

**Why**
The logger supplied evidence, while a person or analysis process established the causes. The current wording obscures that distinction and understates your diagnostic contribution.

**How to change it**
Replace “which found the root cause of 5 field failures” with “enabling root-cause analysis of 5 field failures.”

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] Sampling a 5 kHz signal at 8 kHz cannot capture that component “without aliasing.” *(about 4 words)*
2. [Polish] “So the fault detector could capture it without aliasing” states an intended capability rather than a demonstrated detection result. *(about 2 words)*

**Why**
1. An 8 kHz sample rate has a 4 kHz Nyquist frequency, which is below the stated 5 kHz signal. The 5 kHz component therefore aliases unless it is removed before sampling, so the technical explanation is incorrect.
2. Even after correcting the sampling claim, the reader cannot tell whether the change improved detection, reduced false alarms, or resolved a specific fault condition. That leaves the operational value of the work unproven.

**How to change it**
1. Replace “8 kHz” with “[the actual sample rate above 10 kHz]” only if that rate was used. Otherwise, remove “without aliasing” and describe what the 8 kHz sampling actually captured.
2. Replace this capability statement with [change in detection performance compared with the prior configuration] or [fault condition newly detected], if measured.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter “volatile” does not fix a race condition. *(about 1 word)*
2. [Polish] “Fixed a race condition” does not identify the observable failure or the result of the fix. *(about 7 words)*

**Why**
1. Volatile controls compiler treatment of memory accesses but provides neither atomicity nor synchronization between the interrupt handler and main loop. A critical section, atomic operation, or another concurrency-safe mechanism is required.
2. The reader sees code maintenance but cannot assess its importance to motor behavior or system reliability. Naming the symptom and validation result would show what the defect cost and whether the correction worked.

**How to change it**
1. Replace “by declaring the counter volatile” with “using [the actual atomic or synchronization mechanism].” If no such mechanism was used, remove the claim that the race was fixed.
2. Replace “Fixed a race condition” with “Eliminated [observable malfunction caused by the race]” and, if available, add [test or failure result confirming the fix].

*raised by content*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The 300-unit firmware-rewrite accomplishment is assigned both to Voltline Robotics and to the earlier Formula Student project. *(saves about 21 words in the incorrect entry)*
2. [Important] The two strongest results are buried after the method and fleet scope. *(no words)*
3. [Polish] “Rewrote the motor-controller firmware” is too broad to identify the engineering decision that produced the results. *(about 5 words)*
4. [Polish] This strongest Voltline Robotics bullet is not placed first. *(no words)*

**Why**
1. The Formula Student entry repeats the same apparent work as roughly 300 robots, an eightfold jitter reduction, and motor faults reduced by more than half. Assigning the accomplishment to two different entries and periods creates a direct credibility problem even though the figures in this line are strong.
2. The reductions in jitter and field faults are the fastest evidence of impact. Leading with them would let a hiring manager understand the accomplishment before reaching the supporting context.
3. The figures establish substantial value, but a hiring manager still lacks a specific scheduling, concurrency, timing, or control-architecture change to examine. That makes the accomplishment harder to evaluate technically.
4. The line combines fleet scale with large improvements in both real-time performance and field reliability. Opening the entry with it would establish the scope and impact of your embedded work immediately.

**How to change it**
1. Verify where the accomplishment occurred and retain it only in that entry. Keep it here only if the 300-unit fleet, 120-to-15-microsecond jitter reduction, and 60% fault reduction were achieved at Voltline.
2. Move “cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%” to the beginning, then follow it with the firmware change and 300-unit scope.
3. Replace “Rewrote” with “[the most consequential scheduling, concurrency, timing, or control-architecture change],” while retaining the existing outcomes.
4. Move this bullet to the top of the Voltline Robotics entry after resolving its duplication with the Formula Student entry.

*raised by content, narrative, wording*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “Next-generation, innovation-driven IoT solution” is promotional filler that does not identify the station’s function or technical approach. *(about 4 words)*
2. [Important] “Redefines sustainable environmental sensing” claims a change without identifying either the change or supporting evidence. *(about 4 words)*

**Why**
1. A technical reader cannot tell what engineering work the project involved or which embedded-system skill it demonstrates. The broad labels also consume the opening line without adding evidence.
2. The reader cannot distinguish a meaningful project result from promotional language. A measured sensing or power outcome would make the claim concrete and credible.

**How to change it**
1. Replace the phrase with “low-power IoT weather station using [specific STM32 peripheral, protocol, or power-control technique].”
2. Replace the phrase with “[specific sensing or power outcome] compared with [baseline or operating condition].”

*raised by content, wording*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
1. [Polish] The strongest weather-station bullet is not placed first. *(no words)*
2. “Average current from 4.2 mA to 0.9 mA” does not state the sampling and transmission conditions under which the averages were measured. *(about 7 words)*

**Why**
1. The reduction from 4.2 mA to 0.9 mA gives the project an immediate, quantified low-power result and names the methods used. It is a more compelling opening than the current promotional description.
2. Sleeping and batching make average current depend heavily on reading frequency, transmission frequency, and the measurement interval. Without those conditions, a technical reader cannot judge whether the before-and-after figures are comparable.

**How to change it**
1. Move this bullet to the top of the project.
2. After “0.9 mA,” add “at [sampling interval and transmission interval or other defining measurement conditions].”

*raised by narrative, content*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Published the schematics and firmware openly” does not identify where the materials are available. *(about 3 words)*

**Why**
Naming the repository or platform would make the open-source contribution easier to understand and inspect. Without it, the reader cannot readily verify or explore the work.

**How to change it**
Replace “openly” with “in [public repository or platform].” If available, also link that location in the project heading.

*raised by content*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] “The robot fleet’s motor controllers” is wrongly placed in a Formula Student electric-car project. *(about 4 words)*
2. “Worked on firmware and testing” does not identify your actions, the firmware changed, or the testing performed. *(about 5 words)*
3. “Worked on firmware and testing for the robot fleet’s motor controllers” gives no result. *(about 6 words)*

**Why**
1. Formula Student electronics work concerns the competition car and its test hardware, not a robot fleet. This incompatible context makes the entry read as if material from the later professional robotics role was mixed into it.
2. “Worked on” obscures personal ownership, while “firmware and testing” pairs two imprecise nouns. A reader therefore cannot tell what embedded engineering you actually performed.
3. Even after correcting the project context and actions, the line does not show what the work improved, verified, or enabled. That makes it difficult to assess the contribution’s significance.

**How to change it**
1. If the work came from Voltline, move or remove this bullet; otherwise replace “the robot fleet’s” with “the Formula Student car’s [actual controller or electronics subsystem].”
2. Replace the phrase with “[specific action] and tested [actual Formula Student firmware or subsystem],” naming the most important change and test.
3. Add “[measured result or verified operational outcome]” if one exists; otherwise describe the concrete deliverable or acceptance result without inventing a metric.

*raised by content, narrative, wording*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Error] “CAN-bus” is not the standard spelling of the technology name. *(no words)*
2. [Important] “The CAN-bus firmware for the dashboard was written and tested” uses passive voice that hides your actions. *(saves about 2 words)*
3. [Polish] “Before each race” states when testing occurred but not what the firmware or testing achieved. *(about 6 words)*
4. [Polish] The CAN-dashboard bullet is not placed first even though it is the strongest line that clearly belongs to the Formula Student project. *(no words)*
5. [Polish] “Tested against the motor controller” does not explain which behavior or interface was validated. *(about 3 words)*

**Why**
1. The standard term is “CAN bus,” without a hyphen. Using the established spelling avoids an unnecessary technical-language error in an embedded-systems résumé.
2. The passive construction delays ownership of the work and makes the line less direct. An active opening would immediately show that you both wrote and tested the firmware.
3. The reader cannot tell whether the work established race readiness, resolved integration failures, or produced another operational result. Timing alone does not show the value of the validation.
4. Unlike the robot-fleet bullets, it names car-specific dashboard firmware and integration testing. Leading with it would establish a coherent Formula Student contribution before the reader encounters the lines that need correction or removal.
5. The named components provide useful context, but they do not show whether the testing covered CAN messages, timing, fault handling, or another integration behavior. One concrete target would better demonstrate embedded-system validation skill.

**How to change it**
1. Replace “CAN-bus” with “CAN bus.”
2. Replace the opening with “Wrote and tested dashboard CAN bus firmware.”
3. After the testing description, add “[verified test outcome or operational result],” including [acceptance criterion] if one existed.
4. Move this bullet to the top of the entry after converting it to active voice.
5. Replace the phrase with “[specific CAN message, timing, fault-handling, or integration behavior tested].”

*raised by wording, content, narrative*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The claim about “a fleet of about 300 robots” is wrongly attributed to the Formula Student project. *(saves about 19 words if removed)*
2. “Rewrote motor-control firmware” does not identify the technical mechanism behind the reported improvements. *(about 6 words)*

**Why**
1. A Formula Student project develops a competition vehicle, not a deployed fleet of roughly 300 robots. The line also mirrors the Voltline accomplishment, so its placement makes the reader question both where the work occurred and whether the achievement has been duplicated.
2. The claimed jitter and fault reductions are substantial, but the reader cannot see which timing, scheduling, concurrency, or control change produced them. That prevents technical evaluation even apart from the line’s incorrect project context.

**How to change it**
1. Move the bullet to Voltline only if it describes that role and is not already represented there. Otherwise replace it with the Formula Student work and results actually achieved, using “[car subsystem]” and “[measured car-specific result],” or remove the unsupported fleet claims.
2. If this accomplishment belongs in another entry, replace “Rewrote” there with “[specific technical change that produced the improvements].” If it does not belong to your work, remove the claim.

*raised by content*

> Worked on firmware and testing

**Problem**
[Important] This broad motor-controller bullet repeats the more specific robot-fleet accomplishment later in the same entry. *(saves about 10 words)*

**Why**
Both lines describe firmware work on a robot fleet’s motor controllers, but the later line includes the scale and outcomes. Keeping the vague version adds repetition rather than evidence.

**How to change it**
Remove this bullet if both lines describe the same work. If it covers distinct Formula Student work, replace it with that car-specific contribution and result.

*raised by narrative*

## Set aside (7)

- s3:e0:b1: “average current from 4.2 mA to 0.9 mA” does not identify the sampling and transmission conditions under which the averages were measured.
- s3:e1:b0: "Worked on firmware and testing" does not identify what firmware was changed or what kind of testing was performed.
- s3:e1:b0: "Worked on firmware and testing for the robot fleet’s motor controllers" gives no result of the work.
- s3:e1:b2: "Rewrote motor-control firmware" does not identify the technical mechanism behind the reported improvements.
- s3:e1:b0: "Worked on" obscures what the candidate personally did; replace it with specific actions such as "Developed and tested."
- s3:e1:b0: "firmware and testing" uses an imprecise noun pairing; "developed and tested motor-controller firmware" states the actions directly.
- whole resume, dates: May 2021 to April 2022: 10 months between completing the degree and starting the first listed role.
