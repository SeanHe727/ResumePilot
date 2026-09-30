> Here is my resume: bench/planted-defects/tests-final/b4-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets, plus the resume’s narrative and ATS formatting. The degree has no bullets to review. No job description was provided, so I did not assess job match.

The biggest changes to make:

- **Resolve the repeated robot-firmware achievement.** The Formula Student entry and Voltline entry both describe work on about 300 robots and report the same jitter and motor-fault reductions, despite different project contexts and dates. Clarify which entry the work belongs to, or distinguish the projects and outcomes.
- **Check the signal-sampling claim in Voltline.** The review flagged the claim that an 8 kHz sample rate captures a 5 kHz signal “without aliasing.” Verify the technical claim and revise it if needed.
- **Put experience in newest-first order.** Move Voltline above Clearwater Sensors. The narrative review also suggests keeping the current bakery role brief so the engineering progression stays clear.
- **Add outcomes or specifics where bullets mainly describe duties.** This applies especially to the bakery bullets and the Clearwater test-station/reporting bullet. For the sensor calibration bullet, the review also found the result clear but the technical method unspecified.

The file is one page and parses cleanly for ATS. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 71 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 5 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Jul 2021 - Feb 2023”

**Problem**
[Important] The engineering experience is not ordered newest first.

**Why**
Clearwater Sensors (Jul 2021–Feb 2023) appears above Voltline Robotics (Mar 2023–Jun 2025). A reader scanning the experience section must encounter the older role before the more recent one.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

> “Northside Bakery | Delivery Driver”

**Problem**
[Important] The Northside Bakery entry should be shortened to a single line.

**Why**
The role explains the current position but is unrelated to the engineering direction. Its current two-bullet treatment takes space from engineering experience and projects.

**How to change it**
Condense the bakery entry to one line while retaining that it is your current role.

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
1. [Error] “cafØs” is corrupted spelling.
2. [Polish] The delivery duties have no stated result or value.

**Why**
1. A reader may take the character as a typo or encoding error rather than the word “cafés.” That can make an otherwise clear delivery bullet look unproofread.

**How to change it**
1. Replace “cafØs” with “cafés” or “cafes.”

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
1. [Polish] The dispatch-list check has no stated result.
2. [Polish] “Before leaving” repeats the pre-departure timing already conveyed by the check.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Owned the end-of-line test station for the humidity sensor and the yield reports the line leads used.

**Problem**
1. [Polish] The line says who used the yield reports but not what changed as a result.
2. [Polish] “Owned” describes responsibility rather than the specific action taken.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The quantified return reduction appears at the end instead of leading the line.

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] The test-fixture line is a stronger opening line for the entry.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] The 60% update-speed improvement has no comparison baseline.

**Why**
A reader cannot tell what update speed the percentage is measured against. Without the prior duration or another reference point, the size of the improvement is hard to judge.

**How to change it**
Add [prior update duration or comparison baseline] so the percentage has a clear reference point.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Polish] The test count shows the rig’s scope but not its effect.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The five-failure diagnosis is buried after the logger’s implementation details.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.

**Why**
An 8 kHz sample rate has a 4 kHz Nyquist frequency, below the signal’s 5 kHz frequency. The 5 kHz component will alias unless it is filtered out before sampling.

**How to change it**
If the 5 kHz component needed to be captured, state a sample rate above 10 kHz with suitable anti-alias filtering, if that is what you used. Otherwise, remove the claim that it was captured without aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the counter volatile does not, by itself, fix a race condition.
2. [Important] “on the counter shared by the interrupt handler and the main loop” repeats context already conveyed by “race condition.”
3. [Polish] The line names a race condition but does not say what changed in the program’s behavior.

**Why**
1. Volatile affects compiler treatment of accesses, but does not make them atomic or synchronize the interrupt handler and main loop. The counter can still be read or modified inconsistently.
2. The phrase restates the shared-context detail after the line has already named a race condition. It makes the sentence longer without clarifying the issue.

**How to change it**
1. If you fixed the race, name the platform-appropriate atomic operation or synchronization method used. Otherwise, remove the claim that declaring the counter volatile fixed it.
2. Remove “on the counter shared by the interrupt handler and the main loop.”

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
[Polish] The quantified outcomes are delayed by the fleet scope, and this is the stronger opening line for the entry.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Built a solar-powered weather station on an STM32 that reports every 5 minutes over LoRa and runs 9 days without sun.

**Problem**
[Important] The nine-day runtime has no battery capacity or test setup to show what it demonstrates.

**Why**
Runtime depends on the stored energy and operating conditions, so readers cannot judge what the nine days demonstrate. The reporting interval provides context but does not establish the conditions behind the runtime.

**How to change it**
Add [battery capacity or key runtime test condition], if available, and keep the reporting interval as context.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The current reduction is the strongest line in the project entry and should lead it.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” is vague and may repeat what “Published” already conveys.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Error] This bullet attributes robot-fleet motor-controller work to a Formula Student electric-car project.

**Why**
The entry identifies a student electric-car project, while the later Voltline role describes a warehouse robot fleet and its motor-controller firmware. As written, the project context and the robot-fleet claim conflict, leaving a reader unsure which work this bullet describes.

**How to change it**
If this refers to the student project, replace “robot fleet” with the correct vehicle or controller. If it refers to the Voltline work, remove the bullet from this entry.

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
1. [Polish] The CAN-dashboard line does not say what the testing established or changed.
2. [Polish] The CAN-dashboard line is the stronger opening line for this entry.
3. [Polish] “Before each race” emphasizes timing rather than the value of the testing.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
[Error] The fleet and motor-control results duplicate the later Voltline achievement and are attributed to the earlier Formula Student entry.

**Why**
The Formula Student project ended in May 2021, before the Voltline role began in March 2023, and the later role states the matching fleet and outcomes. Readers may doubt which period and project produced the achievement, while the repeated claim distracts from this entry’s own work.

**How to change it**
Keep the fleet and outcome figures under the role where they belong. For this project, use [the actual vehicle and results], if different; remove the repeated claim if it describes the same achievement.

## Skills

> “osciloscopes”

**Problem**
[Error] “osciloscopes” is misspelled in the Tools skills line.

**Why**
The misspelling is conspicuous in a technical skills list and can make the line look unproofread. It also obscures the intended tool name.

**How to change it**
Replace “osciloscopes” with “oscilloscopes.”

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-00af4dda.md.

