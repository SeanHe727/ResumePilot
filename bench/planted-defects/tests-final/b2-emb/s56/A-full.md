# Full review: resume.pdf

**83/100** — format 100 · content 72 · wording 84 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 20 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.S. in Electrical Engineering

**Problem**
[Important] Education appears before the more persuasive Experience and Projects sections. *(no words)*

**Why**
The résumé now shows more than three years of relevant engineering work, which carries the professional story better than the degree. Leading with Education delays stronger evidence of recent embedded and test-engineering impact.

**How to change it**
Move the Education section below Experience and Projects.

*raised by narrative*

> May 2021

**Problem**
[Polish] The résumé leaves 10 months between graduation and the first listed role unexplained. *(about 7 words)*

**Why**
The timeline runs from graduation in May 2021 to the first role beginning in April 2022. A reader may wonder whether relevant work, study, projects, or another activity has been omitted.

**How to change it**
If accurate and relevant, add a dated entry for “[activity from Jun 2021 to Mar 2022].” Do not invent an explanation if there was no résumé-relevant activity.

*raised by narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Improved update speed by 60%” does not define the measured quantity or its comparison point. *(about 5 words)*

**Why**
A reader cannot tell whether the improvement concerns download duration, installation duration, transferred bytes, or the complete update cycle. That ambiguity makes the 60% result impossible to interpret operationally.

**How to change it**
Replace “update speed” with the measured quantity, such as “[firmware download duration]” if accurate, and identify the baseline as “[the previous update process or image format].”

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] “Ran 400 motor-control tests on every firmware build” reports coverage and frequency but not what the testing accomplished. *(about 6 words)*

**Why**
A hiring manager cannot tell whether the rig caught regressions, reduced manual validation, accelerated releases, or improved reliability. The line therefore shows activity at scale without establishing its engineering value.

**How to change it**
After “every firmware build,” add the strongest available outcome, such as “[regressions caught before release]” or “[manual test time reduced versus the prior process].”

*raised by content*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] “Which found the root cause” incorrectly makes the logger sound as though it performed the diagnosis itself. *(saves about 2 words)*

**Why**
The logger captured evidence, while an engineer used that evidence to identify the causes. The current construction blurs that distinction and overstates what the tool did.

**How to change it**
Replace “which found the root cause of 5 field failures” with “enabling root-cause identification for 5 field failures.”

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
1. [Error] An 8 kHz sampling rate cannot capture a 5 kHz vibration signal “without aliasing.” *(about 3 words)*
2. [Important] “Could capture it without aliasing” states an intended capability rather than an observed detector or validation result. *(about 4 words)*

**Why**
1. The Nyquist frequency at an 8 kHz sampling rate is 4 kHz, so a 5 kHz component will alias unless removed before sampling. The stated configuration therefore cannot produce the claimed result.
2. Even after the sampling configuration is corrected, a reader cannot tell whether fault detection improved, false results declined, or the design passed a defined test. That leaves the practical effect of the signal-processing work unproven.

**How to change it**
1. Use the actual configuration: replace “5 kHz” with “[frequency below 4 kHz],” or, if applicable, replace “8 kHz” with “[rate above 10 kHz]” and mention appropriate anti-alias filtering if it was used.
2. Replace this phrase with “[observed detector or validation result compared with the prior sampling setup]” if that evidence exists; otherwise soften or remove the outcome claim.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring a shared counter volatile does not fix a race condition between an interrupt handler and the main loop. *(about 4 words)*
2. [Important] The race-condition claim does not identify the faulty behavior that was prevented or corrected. *(about 6 words)*
3. [Polish] “On the counter shared by the interrupt handler and the main loop” is unnecessarily wordy. *(saves 2 words)*

**Why**
1. Volatile restricts compiler optimization but does not make access atomic or provide synchronization. The interrupt can still modify the counter during a non-atomic main-loop access.
2. A reader cannot tell whether the defect caused corrupted readings, intermittent failures, resets, or another material problem. Without that consequence, the importance of the fix remains unclear.
3. The extra articles and preposition slow an already technical sentence without adding precision. Tighter wording makes the relationship between the counter and its users easier to scan.

**How to change it**
1. If used, replace this method with the actual synchronization mechanism, such as “[atomic access]” or “[a critical section that temporarily disabled the interrupt].” If no synchronization was implemented, remove the claim that the race was fixed.
2. After the corrected synchronization method, add “[failure prevented or correct behavior restored]” and, if available, “[validation against the prior behavior].”
3. Replace it with “in a counter shared by the interrupt handler and main loop.”

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The same distinctive 300-robot firmware achievement is attributed to incompatible roles and date ranges. *(no words if retained)*
2. [Important] “Rewrote the motor-controller firmware” is too broad to show which technical decision produced the results. *(about 3 words)*
3. [Important] The strongest outcomes are buried after the implementation and fleet scope. *(no words)*
4. [Important] The strongest Voltline bullet is not the first bullet in the entry. *(no words)*

**Why**
1. The warehouse-fleet scope and matching jitter and fault improvements also appear in the Formula Student project. That contradictory attribution can make a reader question the ownership and credibility of one of the résumé’s strongest accomplishments.
2. The line has strong outcomes, but the generic implementation leaves an interviewer with little evidence of the embedded technique behind them. It also prevents the reader from connecting the lower jitter and fault rate to a specific engineering change.
3. The reductions from 120 to 15 microseconds and by 60% are the details most likely to attract attention. Delaying them makes the line initially read like a broad responsibility rather than a high-impact result.
4. The firmware rewrite has the entry’s clearest production scope and strongest before-and-after results. Placing it last reduces the chance that a scanning recruiter notices it.

**How to change it**
1. Keep the achievement only under “[the entry where it actually occurred].” If it belongs to Voltline, retain it here and remove the robot-fleet claims from Formula Student; otherwise remove it from this role.
2. Replace “Rewrote” with the most consequential accurate change, such as “Reworked [control-loop, scheduling, interrupt, or communications mechanism].” Include only the one method most directly tied to the results.
3. Move this outcome phrase to the beginning of the bullet, ahead of the implementation and fleet context.
4. Move this bullet to the first position under Voltline after correcting its attribution and technical-method wording.

*raised by content, narrative, wording*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Important] “Automated end-of-line tests” does not identify the software, instrumentation, or test sequence that was automated. *(about 5 words)*

**Why**
The timing improvement is strong, but a hardware-test hiring manager cannot see the specific automation skill that produced it. That omission also leaves little basis for a useful technical follow-up.

**How to change it**
Replace this phrase with wording that identifies “[the test-control software or instrumentation]” and, if needed, “[the key test sequence automated],” while retaining the timing result.

*raised by content*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
1. [Important] The failure diagnosis does not explain how the solder-paste change was isolated as the cause. *(about 7 words)*
2. [Important] “The findings updated the reflow profile” illogically makes the findings perform the update. *(saves about 2 words)*

**Why**
1. The missing diagnostic method is what would demonstrate hands-on failure-analysis skill. Without it, the conclusion may read as correlation rather than the result of a systematic investigation.
2. Findings can prompt or support a process change, but they cannot implement one. The current wording briefly obscures who acted on the investigation and how that action connects to the lower return rate.

**How to change it**
1. Replace “Traced” with “Isolated,” if accurate, and add “using [the most telling failure-analysis technique or diagnostic test].”
2. Replace the clause with “prompting a reflow-profile update that cut returns from 2.1% to 0.4%.”

*raised by content, wording*

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Important] “The calibration procedure” does not identify the calibration approach or technical change that addressed drift. *(about 3 words)*

**Why**
A reader cannot tell whether this involved substantive sensor-calibration engineering or documentation of an existing process. One concrete technical feature would connect the procedure to the reduction in complaints.

**How to change it**
Replace this phrase with “[reference standard or adjustment method] calibration procedure,” using the single detail that best explains how drift was controlled.

*raised by content*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
1. [Important] “Next-generation, innovation-driven” is generic promotional filler. *(saves 2 words)*
2. [Important] “IoT solution” is too vague to show how the station senses, processes, stores, or transmits data. *(about 6 words)*
3. [Important] “Redefines sustainable environmental sensing” is unsupported hype that does not specify what changed or who benefited. *(about 7 words)*

**Why**
1. The phrase offers no technical evidence and delays the concrete description of the project. Its marketing tone also contrasts poorly with the quantified current reduction elsewhere in the entry.
2. The label does not demonstrate embedded-systems skill beyond what the project heading already implies. A reader needs one implementation detail to understand what was actually engineered.
3. A reader cannot judge the project’s practical value or distinguish it from a standard weather-station build. The broad claim also invites skepticism because it is not tied to an observed result or baseline.

**How to change it**
1. Remove “next-generation, innovation-driven.”
2. Replace “IoT solution” with “STM32-based weather station” and add “[the key sensor interface, radio, or communications protocol used]” if accurate.
3. Replace this phrase with “[the environmental variables or use case supported]” and “[one observed performance or deployment result measured against its baseline].”

*raised by wording, content*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The quantified current-reduction bullet should open the project. *(no words)*

**Why**
The reduction from 4.2 mA to 0.9 mA immediately establishes technical value and explains the mechanisms that produced it. Leading with that evidence is more persuasive than opening with promotional language.

**How to change it**
Move this bullet to the first position under the project.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” is redundant after “Published.” *(saves 1 word)*

**Why**
Publishing the schematics and firmware already conveys that they were made available. Removing the adverb tightens the sentence without losing meaning.

**How to change it**
Remove “openly.”

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
1. [Error] “Robot fleet’s motor controllers” is attributed to the wrong project and conflicts with the Formula Student electric-car context. *(saves about 10 words if removed)*
2. [Important] This broad motor-controller line substantially duplicates the more specific robot-fleet rewrite later in the entry. *(saves about 10 words)*
3. “Worked on firmware and testing” uses duty framing and does not identify the firmware behavior implemented or the test performed. *(about 5 words)*
4. The line describes the system but not what changed because of the work. *(about 5 words)*

**Why**
1. Formula Student concerns a race car, while the résumé separately places robot-fleet motor-controller work under Voltline Robotics. Leaving this line here undermines the credibility of both entries and leaves only the dashboard bullet clearly connected to the car.
2. Both lines describe firmware work on the same misplaced robot-fleet system, while this one adds no distinct accomplishment. Repetition consumes space that should establish Formula Student leadership, electronics, or testing experience.
3. The reader sees general participation rather than individual technical ownership. Without a concrete action and target, the line gives no basis for judging the depth of the work.
4. Even with a specific technical action, a reader would still not know whether the work corrected a defect, enabled a function, or improved race readiness. That missing consequence makes the contribution difficult to assess.

**How to change it**
1. Replace this line with firmware or testing actually performed on the Formula Student car’s “[specific electronic subsystem],” or remove it. Use car-specific leadership, electronics, or testing work in its place.
2. Remove this line if it refers to the same work as the later robot-fleet rewrite; replace it only with a distinct Formula Student contribution.
3. Replace “Worked on” with an accurate action such as “Developed,” “Tested,” or “Debugged,” and replace “firmware and testing” with “[firmware behavior implemented]” and “[test method used].”
4. If the line is replaced with genuine car work, add “[behavior enabled, defect corrected, or test result achieved]” after the method.

*raised by content, wording, narrative*

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Error] “CAN-bus” is incorrectly hyphenated. *(no words)*
2. [Important] The dashboard line does not identify the CAN function implemented or the integration test performed. *(about 4 words)*
3. [Important] “Before each race” states the testing cadence but not what the testing proved or improved. *(about 5 words)*
4. [Important] “Written and tested ... before each race” implies that both writing and testing were repeated before every race. *(about 3 words)*
5. [Polish] “Was written and tested” uses passive voice that hides the candidate’s ownership. *(saves 1 word)*
6. [Polish] The CAN dashboard bullet should be the first bullet in the Formula Student entry. *(no words)*

**Why**
1. The standard term is “CAN bus,” with CAN modifying bus and no hyphen. Correct terminology matters in a line intended to demonstrate embedded communications experience.
2. The reader can see CAN exposure but cannot judge the depth of the firmware work or reconstruct the integration approach. Naming the behavior and test would turn a component list into evidence of embedded-systems skill.
3. Repeated testing does not establish that the firmware met requirements, caught faults, or operated reliably in competition. The line needs a result that demonstrates why the test mattered.
4. The intended sequence is unclear: the firmware may have been written once while only validation recurred. That ambiguity can make the development process sound implausible.
5. The construction focuses on the firmware rather than the Electronics Lead who did the work. An active verb would make responsibility immediately clear.
6. It is the only current bullet clearly tied to the electric-car project. Leading with it gives the entry a coherent starting point while the misplaced robot-fleet claims are removed or replaced.

**How to change it**
1. Replace “CAN-bus” with “CAN bus.”
2. Replace “was written and tested against” with “[messages or dashboard behavior implemented]” and “[integration test method].”
3. Replace this phrase with “[test outcome against a defined requirement or prior state]” or “[concrete race-readiness result]” if no numerical measure exists.
4. Separate the one-time development from the repeated activity, using “Wrote” for development and “tested [before each race or at the actual cadence]” only if accurate.
5. Replace “was written and tested” with “Wrote and tested.”
6. Move this bullet to the first position after correcting its terminology, specificity, and outcome.

*raised by wording, content, narrative*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The 300-robot firmware claim is attributed to the wrong project. *(saves about 20 words if removed)*
2. “Rewrote motor-control firmware” does not identify the technical change that produced the result. *(about 4 words)*
3. The jitter and motor-fault improvements do not define how either result was measured. *(about 8 words)*

**Why**
1. A Formula Student electric-car project is not a fleet of approximately 300 robots. The same accomplishment appears under Voltline Robotics, so retaining it here creates an obvious contextual contradiction.
2. The phrase omits whether the work involved control logic, scheduling, communications, interrupts, or timing. That prevents an interviewer from seeing the embedded technique behind the claimed improvement.
3. “Eightfold” and “more than half” sound substantial, but readers cannot tell what jitter statistic, observation period, or fault definition produced them. Missing measurement definitions weaken confidence in otherwise strong outcomes.

**How to change it**
1. Remove this bullet from Formula Student and retain the accomplishment only under “[the entry where it actually occurred].” Replace it here only with a distinct, factual result from the Formula Student car.
2. If this achievement is kept under its correct entry, replace “Rewrote” with the accurate change to “[control, scheduling, communication, interrupt, or timing mechanism].”
3. Under the correct entry, add “[how control-loop jitter was measured]” and “[how motor faults and the comparison period were defined].”

*raised by content, wording*

## Skills

> FPGA

**Problem**
[Important] “FPGA” is listed as a skill without supporting experience, project, or education evidence. *(saves 1 word if removed)*

**Why**
A recruiter cannot tell where or how the tool was used, and an interviewer may treat the unsupported listing as keyword padding. The skill should either connect to concrete work or be removed.

**How to change it**
Add the relevant FPGA work to “[the entry where it occurred]” if it can be described factually; otherwise remove “FPGA” from Skills.

*raised by narrative*

## Already working

- s2:e1:b3: Combines technical ownership, mechanism, and production impact in one line.

## Set aside (8)

- s3:e1:b0: "Worked on firmware and testing" does not show what firmware behavior you implemented or how you tested it.
- s3:e1:b0: "for the robot fleet’s motor controllers" describes the system but not what changed because of the work.
- s3:e1:b2: "Rewrote motor-control firmware" does not identify the control, scheduling, communication, or timing change that produced the result.
- s3:e1:b2: "cutting control-loop jitter eightfold and motor faults by more than half" does not define how jitter or motor faults were measured.
- s3:e1:b0: "Worked on" is duty framing that should be replaced with a specific action such as developed, tested, or debugged.
- s3:e1:b0: "firmware and testing" does not state what firmware work was performed or what was tested.
- s3:e1:b0: "the robot fleet’s motor controllers" conflicts with the entry’s Formula Student electric-car context and needs consistent project terminology.
- s3:e1:b2: "a fleet of about 300 robots" conflicts with the Formula Student electric-car context and should be reconciled with the project description.
