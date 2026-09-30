# Full review: resume.pdf

**84/100** — format 100 · content 75 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 5 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer

**Problem**
[Important] Experience is not in reverse chronological order. *(no words)*

**Why**
Clearwater Sensors (July 2021–February 2023) appears above the more recent Voltline Robotics role (March 2023–June 2025). A reader expects the newest role first, so the current order obscures the recency of the embedded-software experience.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

*raised by narrative, file*

> Clearwater Institute of Technology | B.S. in Electrical Engineering

**Problem**
[Important] Education appears before the work history, although the work history is the stronger opening. *(no words)*

**Why**
The technical work history gives the reader more relevant experience to evaluate at the start of the résumé. Leading with the degree delays that evidence.

**How to change it**
Move the Education entry below Experience.

*raised by narrative*

> Northside Bakery | Delivery Driver

**Problem**
[Important] The full Northside Bakery entry interrupts the technical career arc. *(saves about 15 words if shortened)*

**Why**
The entry is a nontechnical role between the technical work history and projects, so its length draws attention away from the résumé’s technical experience. If it is relevant to the career story, that relevance is not clear from the entry as written.

**How to change it**
Shorten the entry to one line or add [why the role belongs in the career story].

*raised by narrative*

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
1. [Error] “cafØs” contains a corrupted character. *(no words)*
2. [Polish] The delivery bullet gives the route’s scale but not its outcome. *(about 6 words to add)*

**Why**
1. A reader may not recognize the intended word, which distracts from the delivery work and its scale. The text should use the standard spelling.
2. A reader can see that the route served about 20 cafés, but cannot tell whether the deliveries were reliable, accurate, or otherwise effective. Without an outcome, the scale does not show the value of the work.

**How to change it**
1. Replace “cafØs” with “cafés” or “cafes.”
2. Keep the customer count if useful and add [on-time delivery rate compared with target] or [order accuracy compared with prior rate], if accurate.

*raised by wording, content*

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
[Polish] The dispatch-check bullet explains the process but not its result. *(about 6 words to add; saves 2 words)*

**Why**
The check suggests a quality-control step, but a reader cannot tell whether it helped ensure complete orders or reduce dispatch errors. Without a result, the bullet shows what you did but not why it mattered.

**How to change it**
Keep the dispatch-list check, remove “before leaving,” and add [order accuracy or dispatch errors compared with a baseline], if you tracked it.

*raised by content, wording*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Made the sensor line’s UART link to the test PC more reliable by raising its baud rate from 115200 to 921600.

**Problem**
[Important] The UART reliability claim is broad, and the measurable change is buried after it. *(about 6 words to add)*

**Why**
A reader cannot tell what “more reliable” meant in practice or whether the change made a meaningful difference. A before-and-after measure of communication failures or timeouts would make the result assessable.

**How to change it**
Replace “more reliable” with [UART communication failures or timeouts before and after the change], if you have that comparison, and bring the baud-rate change forward.

*raised by content, wording*

> Traced a batch of early field failures to a solder-paste change; my findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The bullet uses a first-person possessive. *(saves 1 word)*

**Why**
“My findings” makes the bullet read like a sentence about the writer rather than a concise account of the work. The direct link from the findings to the reflow-profile update and reduced returns is clearer without the possessive.

**How to change it**
Remove “my” so the phrase reads “findings updated the reflow profile.”

*raised by wording, file*

> Writes the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] “Writes” uses present tense for a role that has ended. *(no words)*

**Why**
The role dates end in February 2023, so present tense makes the timing of this work unclear. Past tense matches the rest of the completed role.

**How to change it**
Replace “Writes” with “Wrote.”

*raised by wording*

> Designed a test fixture that checked 8 boards at once while also ordering lab parts, maintaining the ESD program, training line operators and running the monthly safety walk, which raised station throughput from 40 to 150 boards an hour.

**Problem**
[Important] The fixture result is buried behind unrelated duties, and the fixture accomplishment is not the opening line of the entry. *(saves about 18 words if the duties are cut)*

**Why**
A reader has to work through several separate responsibilities before reaching the station-throughput result, making it harder to see which work drove the improvement. The fixture’s eight-board capacity and the increase from 40 to 150 boards an hour are the clearest technical contribution in the bullet and should be easy to find.

**How to change it**
Move this fixture bullet to the top of the entry, and move “which raised station throughput from 40 to 150 boards an hour” directly after the fixture description. Cut the unrelated duties from this bullet or give them space only if they have a distinct result.

*raised by content, wording, narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
[Polish] “Rewrote the motor-controller firmware” does not say what changed in the firmware. *(about 5 words to add)*

**Why**
A reader can see the improvements in jitter and field motor faults, but cannot tell what embedded engineering work produced them. Naming one specific change would make the skill behind the results more evident.

**How to change it**
Replace the broad rewrite description with [the specific firmware change or control strategy], if accurate.

*raised by content*

> Debounced the robot’s emergency-stop input with a single 10 kOhm pull-up resistor.

**Problem**
1. [Error] The pull-up resistor cannot by itself debounce the emergency-stop input. *(about 3 words to add if a method is named)*
2. [Polish] The emergency-stop bullet gives no result for the implementation. *(about 6 words to add)*
3. [Polish] “Single” is redundant in the resistor description. *(saves 1 word)*

**Why**
1. A pull-up establishes a defined input level; it does not suppress mechanical contact bounce. Debouncing requires a designed hardware filter or firmware logic that rejects brief transitions, and an emergency-stop input’s filtering and safety behavior need to be appropriate and validated.
2. A reader cannot tell whether the change improved stop-input reliability or addressed a specific problem. A result would show why this work mattered.
3. The singular resistor and its value already make the component count clear. Keeping “single” adds no useful information.

**How to change it**
1. If you used an additional hardware or firmware debounce method, name it and keep the resistor as a separate detail. Otherwise, say the resistor established a defined input level and remove the debounce claim.
2. Add [the resulting change in emergency-stop behavior, measured against the prior behavior], if available.
3. Remove “single.”

*raised by content, wording*

> Profiling the interrupt load, moving sensor reads to DMA, splitting the control loop into fixed-priority tasks and pinning the scheduler tick, raised the controller’s spare CPU from 8% to 35%.

**Problem**
1. [Error] The plural series of actions takes the singular verb “raised.” *(no words)*
2. [Polish] The spare-CPU result comes after a four-part methods list and is easy to miss. *(no words)*

**Why**
1. The subject is the series of actions—profiling, moving, splitting, and pinning—so the plural subject does not agree with the singular verb. This grammatical mismatch can interrupt a reader’s understanding of how the actions relate to the CPU result.
2. A reader scanning the bullet has to pass through four actions before reaching the quantified result. Moving the result closer to the start makes the outcome more visible.

**How to change it**
1. Change “raised” to “raised” only if the subject is made singular; otherwise, revise the clause so the plural series has a matching verb, such as “raised” to “raised” is not sufficient. For example, use “Together, profiling ... and pinning ... raised” only if you make the actions the subject of a grammatically complete plural clause.
2. Move the quantified result before the list of profiling, DMA, task-splitting, and scheduler-tick changes.

*raised by wording*

> Presented the firmware roadmap to the hardware and product teams each quarter, and two board revisions followed its recommendations.

**Problem**
1. [Polish] The roadmap bullet shows adoption but not what the board revisions changed or achieved. *(about 5 words to add)*
2. [Polish] “Each quarter” is wordier than necessary for the stated cadence. *(saves 1 word)*

**Why**
1. A reader can see that the roadmap influenced decisions, but cannot judge the value of that influence. One resulting design change or product outcome would clarify its impact.
2. The phrase adds words without changing the recurring nature of the presentations. A shorter cadence phrase keeps the focus on the roadmap and its adoption.

**How to change it**
1. Add [one resulting board change or product outcome], if accurate.
2. Replace “each quarter” with “quarterly.”

*raised by content, wording*

> Documented the bootloader and flashing process, so new engineers could flash a board on their first day.

**Problem**
[Polish] “So new engineers could” is an indirect way to express the onboarding outcome. *(saves about 3 words)*

**Why**
The phrase describes the outcome in a wordy, conditional way rather than stating what the documentation enabled. That makes the bullet less direct.

**How to change it**
Replace “so new engineers could flash a board on their first day” with a direct outcome phrase such as “enabling first-day board flashing.”

*raised by wording*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Built a solar-powered weather station on an STM32 that reports every 5 minutes over LoRa and runs 9 days without sun.

**Problem**
[Polish] The project description does not say which weather variables the station measures. *(about 3 words to add)*

**Why**
A reader cannot tell what the system senses, leaving its core functionality and technical scope unclear. Naming the variables would make the project’s purpose easier to assess.

**How to change it**
Add [weather variables measured] after “weather station.”

*raised by content*

> Cut average current from 4 mA to 1 mA, a 300% reduction, by sleeping between readings and batching radio transmissions.

**Problem**
[Error] A decrease from 4 mA to 1 mA is a 75% reduction, not a 300% reduction. *(no words)*

**Why**
The current dropped by 3 mA, which is 75% of the original 4 mA. Calling that a 300% reduction is mathematically incorrect and can undermine confidence in the project’s measurements.

**How to change it**
Replace “300% reduction” with “75% reduction.”

*raised by content, wording*

> Raised packet delivery by 15% over LoRa, from 80% to 95% of readings, by retrying failed transmissions.

**Problem**
1. [Error] The change from 80% to 95% is 15 percentage points, not a 15% relative increase. *(adds 1 word)*
2. [Polish] The packet-delivery rates omit how many readings were assessed. *(about 4 words to add)*

**Why**
1. The absolute increase is 15 percentage points; relative to the original 80% delivery rate, the increase is 18.75%. Saying “15%” can therefore misstate what the figures show.
2. Without the sample size, a reader cannot judge how much evidence supports the comparison. Adding the number of readings would show the scale of the measurement.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points.”
2. Add [number of readings assessed] after the rates.

*raised by content, wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Designed the battery-monitoring board for the team’s electric car, which passed technical inspection on the first attempt.

**Problem**
[Polish] The battery-monitoring-board bullet names the work but not the technical contribution within it. *(about 5 words to add)*

**Why**
A reader can see that the board passed inspection, but cannot tell what electronics skill or design judgment you brought to it. Naming one key function or design choice would make your contribution more specific.

**How to change it**
Keep the inspection result and add [the main sensing or protection feature you designed].

*raised by content*

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
[Polish] The CAN-bus bullet describes testing activity but gives no result of the work. *(about 5 words to add)*

**Why**
A reader cannot tell whether the firmware worked reliably or what it enabled for the team. Testing before each race shows cadence, not the outcome of the firmware or testing.

**How to change it**
Replace the race cadence with [which dashboard function worked or what test outcome you achieved].

*raised by content*

> Mentored 4 first-year members on soldering and board bring-up.

**Problem**
[Polish] The mentoring bullet gives the audience and topics but not what the mentees achieved, and “board bring-up” is specialist jargon. *(about 7 words to add)*

**Why**
A reader can see whom you mentored and what you covered, but not what the members could do afterward. Readers outside electronics may also not understand “board bring-up,” so the topic is less clear than it could be.

**How to change it**
Replace “board bring-up” with “initial board testing,” and add [a board task the mentees could complete independently afterward].

*raised by content, wording*

## Already working

- s2:e2:b1: Clearly connects a measurable improvement to two specific OTA changes.
