## Highest-priority issues

1. **Correct the two technically inaccurate firmware claims.**
   - Sampling a 5 kHz signal at 8 kHz does **not** prevent aliasing.
   - Declaring a shared variable `volatile` does **not** fix a race condition.

2. **Remove the duplicated/misplaced robot-fleet bullets from the Formula Student project.** They appear copied from Voltline and undermine credibility.

3. **Put Experience in reverse chronological order.** Voltline should appear before Clearwater Sensors.

4. **Replace the weather-station marketing statement with a concrete technical contribution.**

---

## Header

### `Morgan Kim`
- No change needed.

### Phone, email, portfolio link
- Make the portfolio URL clearly identifiable as GitHub, a code portfolio, or a personal site if the domain itself does not make that obvious.
- Confirm that the linked page immediately shows relevant embedded and hardware work.
- Consider adding your city/region if location matters for the roles you are targeting.
- Ensure the link is clickable in the PDF and written as actual text rather than embedded only in an icon, for ATS compatibility.

---

## Education

### `Clearwater Institute of Technology | B.S. in Electrical Engineering | Metro City, USA | Sep 2017 - May 2021`
- Use an en dash consistently for date ranges rather than a hyphen.
- Keep this as a single concise line.
- Add GPA only if it is strong and beneficial.
- Since you now have several years of professional experience, do not add coursework unless it directly fills an important qualification gap.

---

## Experience

### Section order
- Move Voltline Robotics above Clearwater Sensors because it is the more recent position.
- Within each role, order bullets by relevance and impact rather than by chronology. The motor-controller rewrite is probably your strongest Voltline bullet and should be near the top.

---

## Clearwater Sensors

### `Clearwater Sensors | Hardware Test Engineer | ...`
- No substantive change needed.
- Standardize the date separator with the rest of the resume.

### `Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.`
- Keep the metrics.
- Clarify whether 20,000 units was actual monthly production volume or the line’s capacity.
- Indicate the technical scope of the automation—software, instrumentation, fixture control, or manufacturing-system integration—if space permits. The current line shows impact but not enough of the engineering method.
- Avoid manually breaking “25 seconds” across lines in the source document.

### `Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.`
- Keep this; it demonstrates root-cause analysis and measurable business impact.
- Clarify your role in validating the reflow-profile change if you did more than identify the cause.
- Make sure the reduction in returns can reasonably be attributed to this intervention. If other changes contributed, soften the causal claim.

### `Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.`
- Specify whether the procedure included test limits, reference equipment, compensation, or operator steps. That will make the technical contribution clearer.
- Clarify whether “15 to 2” refers to customer complaints, internal incidents, or returned units.
- Verify that the before-and-after periods were comparable; otherwise the metric may look overstated.

### `Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.`
- Keep this strong bullet.
- Add the fixture’s relevant technical elements if they support the target job, such as switching, instrumentation, control software, or electrical protection.
- Be prepared to explain why eight-way parallelization produced a 3.75× rather than 8× throughput increase; this is not a problem, but interviewers may ask.

---

## Voltline Robotics

### `Voltline Robotics | Embedded Software Engineer | ...`
- Move this role above Clearwater Sensors.
- If June 2025 was a layoff, contract end, or planned departure and the gap is material, be ready to explain it, though the resume does not need to state the reason.
- Use the same date formatting as every other section.

### `Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.`
- Define what “update speed” means: transfer time, total installation time, or completion rate under unreliable connectivity.
- Add the baseline and final value if available; a percentage alone is less concrete.
- Clarify whether you designed the update protocol, implemented compression, added checkpointing, or integrated existing components.
- “Resuming interrupted downloads” may improve reliability more than raw speed, so separate the two effects if they were measured differently.

### `Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.`
- Add the engineering or quality outcome: reduced manual test time, caught regressions, increased coverage, or enabled release gating.
- Clarify whether you created the physical rig, the test software, CI integration, or all three.
- Indicate execution time or frequency if it demonstrates scale.
- “Wrote a rig” is imprecise because a rig usually includes hardware and software; make your scope unmistakable.

### `Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.`
- Correct the causal subject: the logger enabled diagnosis; it did not itself “find” causes.
- Specify what triggered capture and how data integrity was preserved during a crash or reset if technically relevant.
- Clarify whether the five failures shared one root cause or represented five separate issues.
- Mention flash-wear or storage constraints only if solving those constraints was part of the accomplishment.

### `Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.`
- **Correct or remove this line.** An 8 kHz sample rate cannot capture a 5 kHz component without aliasing because it is below the 10 kHz Nyquist minimum.
- Verify whether:
  - the vibration frequency was lower than 4 kHz,
  - the sample rate was actually higher,
  - you intentionally used undersampling,
  - or “5 kHz” referred to bandwidth, event rate, or another quantity.
- Include anti-alias filtering if that was part of the real design.
- This error is likely to be noticed immediately by an embedded, DSP, or electrical engineer.

### `Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.`
- **Correct or remove this line.** `volatile` prevents certain compiler optimizations but does not provide atomicity, mutual exclusion, or synchronization.
- If the actual defect was stale or optimized-away reads rather than a race, change the description of the problem.
- If it was a genuine race, state the actual synchronization mechanism used, such as atomic access, interrupt masking, a critical section, or a safe data-transfer design.
- Verify whether the counter width could be accessed atomically on the target MCU.
- Leaving this line unchanged could seriously damage credibility for embedded roles.

### `Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.`
- Move this near the top of the role because it is your strongest and most relevant accomplishment.
- Clarify the scope of “rewrote”: architecture, scheduler, control loop, drivers, communications, or all of these.
- State how jitter was measured if the measurement method was rigorous.
- Define the period over which the 60% fault reduction was observed.
- Keep the fleet size and before-and-after jitter metrics.

---

## Projects

### `Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present`
- Keep this project because it reinforces your embedded and low-power experience.
- Add other central technologies only if they are genuinely important, such as the radio or power architecture.
- Ensure the portfolio link contains schematics, firmware, documentation, and reproducible build instructions.
- Use consistent date punctuation.

### `Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.`
- Remove this line or replace its function with a factual statement about what you built and what technical problem it solves.
- Eliminate phrases such as “next-generation,” “innovation-driven,” and “redefines”; they are unsupported marketing language.
- Use the space for system architecture, sensor accuracy, battery-life targets, environmental validation, or communications design.
- This is the weakest line on the resume because it contains no verifiable engineering information.

### `Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.`
- Keep the measured before-and-after values.
- Add the measurement conditions: supply voltage, sampling interval, reporting interval, and measurement method.
- Translate current reduction into expected battery life if you validated it, because that makes the system-level benefit easier to understand.
- Clarify whether 0.9 mA is a true long-term average over a representative duty cycle.

### `Published the schematics and firmware openly, and a local school built two stations from them.`
- Keep this because it demonstrates documentation quality and external adoption.
- Clarify whether the school built the stations without your direct assistance; that would better establish reproducibility.
- If available, include repository adoption evidence such as releases, contributors, or documented deployments, but avoid weak vanity metrics.

---

## Formula Student Electric Car

### `Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021`
- Clarify whether you led all 12 team members or were one lead within a 12-person team.
- Add the relevant hardware platform or bus technology if it strengthens the project.
- Consider whether this project still deserves three bullets now that you have professional experience. Keep it only if it adds leadership, automotive, CAN, or safety experience not shown elsewhere.

### `Worked on firmware and testing for the robot fleet’s motor controllers.`
- Remove or correct this line. A robot fleet does not match the Formula Student electric-car project.
- It also duplicates your Voltline work and is too vague.
- Replace its function with a genuine Formula Student responsibility that shows your leadership or vehicle-electronics contribution.
- Avoid “worked on,” because it does not establish ownership or outcome.

### `The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.`
- Change the passive voice so your personal contribution and level of ownership are clear.
- Specify what the firmware did and how interoperability was tested.
- Add a measurable result if available, such as reliability, latency, test coverage, or successful race operation.
- Use “CAN” consistently; “CAN bus” is sufficient, while “CAN-bus” is usually unnecessary.
- Clarify whether testing occurred before every race, every event, or every firmware release.

### `Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.`
- Remove this from the Formula Student project.
- It duplicates the Voltline bullet, conflicts with the electric-car context, and uses less precise versions of the same metrics.
- Keep the accomplishment only under Voltline, where the fleet of 300 warehouse robots belongs.
- Duplicate claims across unrelated sections can make the entire resume appear unreliable.

---

## Skills

### `Tools: C, C++, STM32, oscilloscopes`
- Reorganize this line because it mixes programming languages, a microcontroller family, and lab equipment under “Tools.”
- Separate languages, embedded platforms, development tools, and test equipment into accurate categories.
- Add only skills you can discuss technically in an interview.
- Consider including version control, debuggers, build systems, RTOS experience, logic analyzers, and communication interfaces if you genuinely used them; these are commonly screened for embedded roles.
- Be more specific about STM32 experience if it is substantial, especially peripherals, toolchains, or MCU families.

### `Methods: firmware, hardware-in-the-loop testing, CAN, low-power design`
- Rename or reorganize this category because “firmware” is a domain, CAN is a protocol, and the others are practices.
- Separate protocols/interfaces from engineering methods.
- Add unit testing, integration testing, CI, debugging, control systems, or signal processing only where supported by your experience.
- Avoid listing broad concepts that are already obvious from the bullets unless they are important ATS keywords.

---

## Formatting and structure

- Use reverse chronological order throughout.
- Keep date formatting consistent, preferably with abbreviated months and en dashes.
- Avoid manual line breaks inside bullets; let the document layout wrap naturally.
- Keep bullets to roughly one or two lines where possible.
- Put the strongest, most role-relevant bullets first.
- Ensure every bullet is either technically specific, quantitatively impactful, or both.
- Once the inaccurate and duplicated bullets are fixed, the resume should be much stronger for embedded firmware, hardware test, and validation roles.