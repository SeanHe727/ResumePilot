## Overall assessment

You have strong, credible engineering experience with unusually good quantitative results. The main issues are:

1. **A serious technical-accuracy problem** with the sampling bullet.
2. **A false or misplaced duplicate achievement** in the Formula Student project.
3. **A technically incorrect statement** about fixing a race condition with `volatile`.
4. A few vague, inflated, or low-value bullets.
5. Skills that are too narrow for the experience shown.

Your resume is strongest when it shows a specific engineering action, a measurable result, and the scale of the work.

---

## Header

### `Morgan Kim`

**Keep.** It is clear and appropriately prominent.

### Phone, email, code URL

**Change the code URL formatting if possible.** Make sure it is a complete, clickable URL and that the repository or profile is polished, relevant, and publicly accessible.

**Why:** Recruiters often check links quickly. A bare or incomplete-looking URL creates unnecessary friction.

**Consider adding a LinkedIn URL only if it is complete and current.** Do not add it just to fill space.

---

## Education

### `Clearwater Institute of Technology | B.S. in Electrical Engineering | Metro City, USA | Sep 2017 - May 2021`

**Keep the content, but consider changing the presentation.**

- Use a consistent location/date structure throughout the resume.
- Consider moving the degree before the school if that better supports quick scanning.
- You do not need to add graduation honors, GPA, or coursework unless they are especially strong or relevant.

**Why:** With several years of experience, education should remain concise and should not compete with your professional work.

---

# Experience

## Clearwater Sensors | Hardware Test Engineer | Apr 2022 - Feb 2023

### “Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.”

**Keep, but clarify what changed operationally.**

- Make clear whether the result was a reduction in test duration, operator time, cycle time, or total production time.
- Check whether “20,000 units a month” is the volume directly affected by the automation or merely the line’s general output.
- Keep the before-and-after figures.

**Why:** This is one of your strongest bullets, but “test time per unit” and “across 20,000 units” could be interpreted several ways. Precision will make the result more credible.

### “Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.”

**Keep.**

- If you personally performed the analysis, preserve the ownership.
- If the reflow-profile change was made by another team, make sure the wording does not imply you alone implemented it.
- If available, add the time period or number of units behind the return-rate comparison.

**Why:** This demonstrates root-cause analysis, manufacturing knowledge, and a strong quality improvement. The only potential issue is attribution and statistical context.

### “Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.”

**Keep, but clarify the measurement.**

- Specify whether these were customer complaints, internal quality reports, or service tickets.
- Confirm that “a quarter” means per quarter and that both numbers were measured over comparable periods.
- Consider whether “wrote” understates broader ownership if you also validated or implemented the process.

**Why:** The result is compelling, but the source and definition of “complaints” matter for credibility.

### “Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.”

**Keep.**

- Clarify whether the throughput improvement was measured at the station level and whether staffing or other process changes were involved.
- Consider naming the fixture’s relevant technical features if space allows elsewhere, such as electrical test, programming, contact design, or safety interlocks.

**Why:** This is a strong hardware-test bullet with clear scale and business impact. The only missing element is enough technical detail to distinguish the engineering work from a simple process change.

---

## Voltline Robotics | Embedded Software Engineer | Mar 2023 - Jun 2025

### “Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.”

**Keep, but clarify the metric.**

- State whether “update speed” means elapsed update time, download throughput, deployment time, or fleet rollout time.
- Identify the relevant update mechanism or communication path if it is important to the role.
- Ensure the 60% figure is based on comparable conditions.

**Why:** The result is useful, but “update speed” is broad. Embedded hiring managers will want to know what part of the update process improved.

### “Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.”

**Keep, but add the outcome if you have one.**

- Include whether it reduced regression time, caught failures before release, increased coverage, or replaced manual testing.
- Clarify whether the rig ran automatically in CI or only locally.

**Why:** The technical work is relevant, but the bullet currently emphasizes activity and test count rather than the value produced.

### “Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.”

**Keep.**

- Clarify whether the logger captured a rolling buffer and whether the data survived resets or power loss, if technically relevant.
- Confirm that five failures were directly resolved through the logger rather than merely investigated with it.

**Why:** This is an excellent embedded-debugging bullet. It shows useful system design and a clear field impact.

### “Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.”

**Change substantially; as written, this is technically incorrect.**

- A 5 kHz signal requires a sampling rate above 10 kHz to satisfy the basic Nyquist criterion.
- If 5 kHz was the sampling rate rather than the signal frequency, correct the terminology.
- If the signal was band-limited, filtered, or the relevant content was below 4 kHz, state that accurately.
- Verify whether the intended result was avoiding aliasing, detecting a lower-frequency envelope, or measuring a particular harmonic.

**Why:** An embedded or signal-processing interviewer is likely to notice this immediately. This bullet could undermine confidence in the rest of the technical content.

### “Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.”

**Change substantially; `volatile` alone does not fix a race condition.**

- Verify what actually made the access safe: atomic access, interrupt masking, a critical section, a lock-free protocol, disabling interrupts around a read, or another synchronization mechanism.
- Do not describe `volatile` as the fix unless it was only one part of the solution.
- Confirm whether the counter could be interrupted during a multi-instruction read or write.

**Why:** `volatile` tells the compiler that the value can change externally; it does not provide atomicity or mutual exclusion. This is another statement that knowledgeable embedded interviewers may challenge.

### “Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.”

**Keep, but reconcile it with the project section.**

- Confirm that you personally led or substantially performed the rewrite.
- Clarify whether “field motor faults” means fault rate, number of incidents, or service events.
- Make sure the 300-unit figure and the measured improvements are accurate and attributable to this work.

**Why:** This is probably your strongest experience bullet: substantial ownership, scale, technical metric, and field outcome. However, the same achievement appears in the Formula Student project, which creates a major credibility problem.

---

# Projects

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

### “Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.”

**Remove this bullet.**

**Why:** It is promotional, vague, and unsupported by technical detail. The rest of the project already demonstrates value more convincingly through power numbers and adoption.

### “Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.”

**Keep.**

- Clarify the measurement conditions if they materially affect the result: sampling interval, radio technology, operating mode, or measurement duration.
- Verify that both figures use the same workload and measurement method.

**Why:** This is a strong low-power embedded bullet. The technical actions and quantitative improvement are clear.

### “Published the schematics and firmware openly, and a local school built two stations from them.”

**Keep, but make the contribution and validation clear.**

- Confirm that the school actually built functioning stations from the published materials.
- If the stations were deployed or used for instruction, mention that context only if it adds meaningful evidence.
- Make sure “openly” is supported by a visible repository.

**Why:** This demonstrates documentation, reproducibility, and real-world use—valuable differentiators for an independent project.

---

## Formula Student Electric Car | Electronics Lead, Team of 12 | Sep 2019 - May 2021

### “Worked on firmware and testing for the robot fleet’s motor controllers.”

**Change or remove.**

- “Worked on” is too vague.
- “Robot fleet” appears inconsistent with a Formula Student electric car.
- Specify your actual responsibility: firmware, testing, motor control, vehicle electronics, or race support.
- If this bullet overlaps with the Voltline job, replace it with a genuinely project-specific contribution.

**Why:** This currently sounds copied from the professional experience section and may cause a reviewer to question the project’s accuracy.

### “The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.”

**Keep only after clarifying ownership and technical scope.**

- State whether you wrote the firmware, tested it, or both.
- Clarify what “tested against the motor controller” involved: message validation, integration testing, fault handling, timing, or race-day verification.
- Use consistent capitalization and terminology for CAN throughout the resume.

**Why:** The work is relevant, but the passive construction makes your role unclear. The pre-race testing detail could be valuable if the responsibility was substantial.

### “Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.”

**Remove from this project or replace with a project-specific accomplishment.**

- It duplicates the Voltline accomplishment almost exactly.
- A Formula Student car is not a fleet of 300 warehouse robots.
- The dates also place this project before the Voltline role, making the duplication especially problematic.

**Why:** This is the most serious resume issue. Even if the result is true for Voltline, placing it under Formula Student makes the document appear inaccurate or careless. Keep the achievement under the professional role only.

---

# Skills

### `Tools: C, C++, STM32, oscilloscopes`

**Change the category and broaden it based on your actual experience.**

- C and C++ are languages, not tools.
- STM32 is a platform or microcontroller family.
- An oscilloscope is test equipment.
- Add only technologies you can discuss in an interview, but consider including relevant items visible in the experience section, such as firmware-update systems, flash logging, automated testing, CI, version control, debuggers, logic analyzers, RTOS experience, Python, or specific communication protocols.

**Why:** The current list undersells you and mixes unrelated categories. It also omits technologies implied by your bullets.

### `Methods: firmware, hardware-in-the-loop testing, CAN, low-power design`

**Change the category and organization.**

- “Firmware” is a domain or discipline, not a method.
- CAN is a protocol.
- Hardware-in-the-loop testing is a testing approach.
- Low-power design is an engineering specialty.
- Separate languages, platforms, protocols, tools, and methods if you have enough skills to justify separate categories.

**Why:** Better categorization makes the section easier to scan and helps automated resume systems match job requirements more accurately.

---

## Formatting and structure changes

### Use consistent bullet and line formatting

Your bullets wrap naturally in the provided text, but make sure the final document does not contain awkward manual line breaks.

**Why:** Manual breaks can create uneven spacing and make editing or parsing difficult.

### Keep the reverse-chronological order

Your professional experience is correctly ordered. The project order is also reasonable, with the current project first.

### Consider reducing the project section

Because you have more than three years of relevant professional experience, projects should support your candidacy rather than compete with your work history.

- Keep the weather-station project because it is current and technically relevant.
- Keep Formula Student only if you replace the vague and duplicated bullets with accurate, project-specific responsibilities and outcomes.
- If you cannot do that, remove the Formula Student project.

### Resolve date and timeline clarity

Your independent project overlaps with your professional employment. That is fine, but be prepared to explain that it was a side project.

**Why:** Overlapping dates are normal for personal projects, but the “Present” label should be accurate and consistent with the date the resume is submitted.

---

## Highest-priority changes

1. **Correct or remove the 5 kHz/8 kHz aliasing bullet.**
2. **Correct the `volatile` race-condition claim.**
3. **Remove the duplicated 300-robot achievement from Formula Student.**
4. **Remove the promotional weather-station bullet.**
5. **Replace vague project wording with accurate ownership and technical scope.**
6. **Reorganize and expand the skills section using technologies you can defend technically.**
7. **Add outcomes to the hardware-in-the-loop bullet if available.**

Once those are fixed, the resume will present a strong profile for embedded software, firmware, hardware test, robotics, and embedded systems roles.