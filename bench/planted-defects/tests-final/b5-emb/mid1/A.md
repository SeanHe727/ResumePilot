> Here is my resume: bench/planted-defects/tests-final/b5-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the resume’s overall chronology and formatting. Education has no bullets to assess. I did not compare it with a job posting.

The main changes to make:
- Correct the weather-station metrics: 4 mA to 1 mA is a **75% reduction**, and 80% to 95% is a **15-percentage-point increase**.
- Recheck the emergency-stop bullet: the review notes that a pull-up resistor alone does not debounce an input, and the bullet doesn’t state the outcome.
- Put experience in reverse chronological order—Voltline Robotics before Clearwater Sensors—and make the current bakery role’s verbs present tense. Also fix the garbled “cafØs” character.

The file parses cleanly and is one page. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 71 · wording 84 · narrative 69

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 7 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] Experience is not in reverse chronological order.

**Why**
Clearwater Sensors, dated July 2021 to February 2023, appears above the more recent Voltline Robotics role, dated March 2023 to June 2025. This disrupts the expected chronology and makes the reader work to follow the candidate’s work history.

**How to change it**
Move Voltline Robotics above Clearwater Sensors within Experience.

> B.S. in Electrical Engineering

**Problem**
[Important] Experience should appear before Education so relevant work history is seen first.

**Why**
The current ordering puts the degree ahead of the candidate’s work history. A reader scanning for relevant experience has to reach past Education before seeing it.

**How to change it**
Move the Experience section ahead of Education.

> Low-Power Weather Station

**Problem**
[Polish] The Low-Power Weather Station project should appear before the Formula Student project.

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
[Error] The delivery bullet gives no result that shows the deliveries were successful.

**Why**
The reader can see what the work involved and that the route covered about 20 cafés, but not whether deliveries were timely, accurate, or otherwise dependable. The count shows scope, not performance, so the candidate’s contribution remains hard to assess.

**How to change it**
Change “Delivered” and “collected” to present tense and correct “cafØs” to “cafés.” Keep the count as scope context and, if supportable, add [on-time delivery rate] or another single outcome measure.

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
1. [Important] The dispatch-check bullet gives no measured benefit or result.
2. [Polish] The stronger dispatch-check bullet should come before the delivery bullet.

**Why**
1. The reader can see the checking process, but cannot tell whether it improved accuracy or prevented delivery problems. Without a result or measure, the reliability of the process is unclear.

**How to change it**
1. Change “Loaded” and “checked” to present tense and remove “before leaving.” If available, add [order accuracy rate] or [misloads prevented].

> morning wholesale orders

**Problem**
[Important] The delivery entry does not connect its routine duties to the résumé’s embedded-systems direction.

**Why**
The two bullets show a basic delivery sequence, but a reader looking for embedded-systems experience gets no indication of why this entry matters to that direction. Keeping it to one concise line would give more space to relevant work.

**How to change it**
Shorten the entry to one line, keeping only the detail you consider most relevant; remove the other delivery-duty detail.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Made the sensor line’s UART link to the test PC more reliable by raising its baud rate from 115200 to 921600.

**Problem**
[Error] Raising the UART baud rate alone does not establish that the link became more reliable.

**Why**
A higher baud rate increases transmission speed; by itself, it does not improve signal quality or error tolerance and can make a link less reliable if the hardware or channel cannot support it. Without a reliability measure, a reader may question the claimed outcome.

**How to change it**
State that the baud rate increased from 115200 to 921600. Keep the reliability claim only if a separate test showed it; if so, name [the measured reliability result].

> Traced a batch of early field failures to a solder-paste change; my findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The phrase “my findings” uses a personal pronoun and makes the result read like narrative.

> Writes the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
1. [Error] “Writes” is the wrong tense for work in a role that ended in February 2023.
2. [Polish] The calibration procedure is named without a technical step or approach.

**Why**
1. The present-tense verb suggests that the procedure is still being written, which conflicts with the job dates. The reduction in complaints can remain an outcome of the past work, but the verb should not imply ongoing work.

**How to change it**
1. If the procedure was written during this role, replace “Writes” with “Wrote.”

> Designed a test fixture that checked 8 boards at once while also ordering lab parts, maintaining the ESD program, training line operators and running the monthly safety walk, which raised station throughput from 40 to 150 boards an hour.

**Problem**
[Important] The fixture’s throughput result is separated from the fixture, and the unrelated duties crowd the achievement.

**Why**
The long list leaves “which” with an unclear referent, so a reader may not know whether the fixture or one of the other duties raised throughput. The result is valuable, but its connection to the fixture is easy to miss.

**How to change it**
Move the throughput result directly after “checked 8 boards at once.” Cut or relocate the lab-parts, ESD, training, and safety-walk duties if they are not part of that result.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Polish] “Rewrote the motor-controller firmware” does not identify the technical change.
2. [Polish] The fleet description is wordier than needed.

> Debounced the robot’s emergency-stop input with a single 10 kOhm pull-up resistor.

**Problem**
1. [Error] A single 10 kOhm pull-up resistor does not debounce the emergency-stop input.
2. [Polish] “With a single” is filler before the component detail.
3. [Polish] The emergency-stop change has no stated outcome.

**Why**
1. A pull-up sets the input’s default logic level; by itself, it does not provide a reliable debounce interval. Any filtering from incidental capacitance is uncontrolled, so the stated component does not support the debounce claim.

**How to change it**
1. If additional hardware or software debounce was used, name it; otherwise replace “Debounced” with a description that says the resistor pulled up the input.

> Profiling the interrupt load, moving sensor reads to DMA, splitting the control loop into fixed-priority tasks and pinning the scheduler tick, raised the controller’s spare CPU from 8% to 35%.

**Problem**
1. [Error] “Profiling ... raised” mismatches a participle with the finite verb “raised.”
2. [Important] The CPU result comes after a four-part method list and is easy to miss.

**Why**
1. The opening participle does not form a parallel grammatical construction with the sentence’s main verb. That mismatch can make the action and result harder to follow.
2. A scanning reader encounters several implementation details before reaching the change from 8% to 35% spare CPU. The result is the clearest measure of impact, but its late position weakens its visibility.

**How to change it**
1. Change “Profiling” to “Profiled” to give the bullet a finite, past-tense opening.
2. Move the spare-CPU result near the beginning of the bullet, before the four-part method list.

> Presented the firmware roadmap to the hardware and product teams each quarter, and two board revisions followed its recommendations.

**Problem**
1. [Important] The board-revision result is appended rather than foregrounded.
2. [Polish] The two board revisions do not show what recommendation was adopted or what changed.

**Why**
1. The result appears after the roadmap presentation, making the evidence of follow-through slower to find. Moving it forward would let readers see the outcome before the meeting cadence.

**How to change it**
1. Move the board-revision result earlier in the bullet, before the quarterly presentation detail.

> Documented the bootloader and flashing process, so new engineers could flash a board on their first day.

**Problem**
[Polish] “So” makes the onboarding result conversational.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Built a solar-powered weather station on an STM32 that reports every 5 minutes over LoRa and runs 9 days without sun.

**Problem**
[Polish] The weather station’s reported measurements are not identified.

> Cut average current from 4 mA to 1 mA, a 300% reduction, by sleeping between readings and batching radio transmissions.

**Problem**
[Error] The drop from 4 mA to 1 mA is a 75% reduction, not a 300% reduction.

**Why**
The decrease is 3 mA out of the original 4 mA, which is 75%. The 3 mA drop is 300% of the final 1 mA value, not of the original value, so the current claim misstates the reduction.

**How to change it**
Replace “300% reduction” with “75% reduction.”

> Raised packet delivery by 15% over LoRa, from 80% to 95% of readings, by retrying failed transmissions.

**Problem**
[Error] The change from 80% to 95% is 15 percentage points, not a 15% increase.

**Why**
The rate rises by 15 points; relative to the original 80% rate, that is an 18.75% increase. Calling it a 15% increase confuses the percentage-point change with the relative increase.

**How to change it**
Replace “by 15%” with “by 15 percentage points,” keeping the stated 80% and 95% figures.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Designed the battery-monitoring board for the team’s electric car, which passed technical inspection on the first attempt.

**Problem**
[Polish] The battery-monitoring board is named without a specific design decision or technical challenge.

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
[Polish] The motor-controller testing is described without its outcome.

> Mentored 4 first-year members on soldering and board bring-up.

**Problem**
1. [Polish] “Board bring-up” is team-specific jargon that may obscure the mentoring topic.
2. [Polish] The mentoring bullet does not say what the members could do as a result.

## Already working

- s2:e2:b1: Pairs a concrete improvement with a direct before-and-after measure.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-75ebca49.md.

