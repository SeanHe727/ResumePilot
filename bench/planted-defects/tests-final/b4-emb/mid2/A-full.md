# Full review: resume.pdf

**82/100** — format 100 · content 71 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 5 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Jul 2021 - Feb 2023”

**Problem**
[Important] The engineering experience is not ordered newest first. *(no words)*

**Why**
Clearwater Sensors (Jul 2021–Feb 2023) appears above Voltline Robotics (Mar 2023–Jun 2025). A reader scanning the experience section must encounter the older role before the more recent one.

**How to change it**
Move the Voltline Robotics entry above Clearwater Sensors.

*raised by file, narrative*

> “Northside Bakery | Delivery Driver”

**Problem**
[Important] The Northside Bakery entry should be shortened to a single line. *(saves about 10 words)*

**Why**
The role explains the current position but is unrelated to the engineering direction. Its current two-bullet treatment takes space from engineering experience and projects.

**How to change it**
Condense the bakery entry to one line while retaining that it is your current role.

*raised by narrative*

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
1. [Error] “cafØs” is corrupted spelling. *(no words)*
2. [Polish] The delivery duties have no stated result or value. *(about 6 words)*

**Why**
1. A reader may take the character as a typo or encoding error rather than the word “cafés.” That can make an otherwise clear delivery bullet look unproofread.
2. A reader can see the route’s reach and that delivery was documented, but not whether the work improved reliability, accuracy, or another outcome. Without a result, the bullet shows what you did but not what it achieved.

**How to change it**
1. Replace “cafØs” with “cafés” or “cafes.”
2. Add one supported result, such as [on-time delivery rate, compared with the previous rate] or [delivery errors avoided, compared with the previous period], if accurate.

*raised by wording, content*

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
1. [Polish] The dispatch-list check has no stated result. *(about 6 words)*
2. [Polish] “Before leaving” repeats the pre-departure timing already conveyed by the check. *(saves about 2 words)*

**Why**
1. The check suggests care, but a reader cannot tell whether it improved order accuracy or prevented delivery problems. That leaves the value of the process unclear.
2. The dispatch-list check itself indicates a step taken before departure. Keeping the extra phrase adds words without giving the reader new information.

**How to change it**
1. Add one result of the check, such as [order errors caught before departure, compared with the previous period], if accurate.
2. Remove “before leaving.”

*raised by content, wording*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Owned the end-of-line test station for the humidity sensor and the yield reports the line leads used.

**Problem**
1. [Polish] The line says who used the yield reports but not what changed as a result. *(about 8 words)*
2. [Polish] “Owned” describes responsibility rather than the specific action taken. *(no words)*

**Why**
1. A reader can see the scope of your ownership, but cannot tell whether the station or reports improved a production outcome. One concrete result would show the value of the work.
2. A reader cannot tell what you actually did with the test station or reports from a statement of ownership alone. The action remains unclear even though the scope is apparent.

**How to change it**
1. Add [the production outcome the station or reports improved, with a comparison if available] after the description of the reports.
2. Replace “Owned” with the specific action you took, such as “maintained” or “developed,” if accurate.

*raised by content, wording*

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The quantified return reduction appears at the end instead of leading the line. *(no words)*

**Why**
A scanning reader may reach the end before noticing the key outcome. Moving the reduction forward would make the impact easier to spot.

**How to change it**
Move “cut returns from 2.1% to 0.4%” earlier in the line, before the explanation of how the findings updated the reflow profile.

*raised by wording*

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] The test-fixture line is a stronger opening line for the entry. *(no words)*

**Why**
It leads with a specific design action and quantifies the throughput increase. Opening with this line would put a clear production impact first.

**How to change it**
Move this bullet to the first position in the entry.

*raised by narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] The 60% update-speed improvement has no comparison baseline. *(about 4 words)*

**Why**
A reader cannot tell what update speed the percentage is measured against. Without the prior duration or another reference point, the size of the improvement is hard to judge.

**How to change it**
Add [prior update duration or comparison baseline] so the percentage has a clear reference point.

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Polish] The test count shows the rig’s scope but not its effect. *(about 5 words)*

**Why**
The count shows how much testing ran, but a reader cannot see whether the rig caught issues or improved validation. An outcome would explain the value of running those tests on every build.

**How to change it**
Add one supported outcome, such as [defects caught or validation time saved], if accurate.

*raised by content*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The five-failure diagnosis is buried after the logger’s implementation details. *(no words)*

**Why**
A scanning reader may miss the result because it follows the explanation of what the logger saved. Putting the diagnostic outcome first would make the impact clearer.

**How to change it**
Move the clause about finding the root cause of five field failures before the explanation of what the logger saved.

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing. *(about 4 words)*

**Why**
An 8 kHz sample rate has a 4 kHz Nyquist frequency, below the signal’s 5 kHz frequency. The 5 kHz component will alias unless it is filtered out before sampling.

**How to change it**
If the 5 kHz component needed to be captured, state a sample rate above 10 kHz with suitable anti-alias filtering, if that is what you used. Otherwise, remove the claim that it was captured without aliasing.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the counter volatile does not, by itself, fix a race condition. *(about 3 words)*
2. [Important] “on the counter shared by the interrupt handler and the main loop” repeats context already conveyed by “race condition.” *(saves about 11 words)*
3. [Polish] The line names a race condition but does not say what changed in the program’s behavior. *(about 5 words)*

**Why**
1. Volatile affects compiler treatment of accesses, but does not make them atomic or synchronize the interrupt handler and main loop. The counter can still be read or modified inconsistently.
2. The phrase restates the shared-context detail after the line has already named a race condition. It makes the sentence longer without clarifying the issue.
3. A reader can see the concurrency issue and the change made, but not why resolving it mattered in practice. A concrete consequence would make the value of the fix clearer.

**How to change it**
1. If you fixed the race, name the platform-appropriate atomic operation or synchronization method used. Otherwise, remove the claim that declaring the counter volatile fixed it.
2. Remove “on the counter shared by the interrupt handler and the main loop.”
3. Add [what incorrect counter behavior stopped], if accurate.

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
[Polish] The quantified outcomes are delayed by the fleet scope, and this is the stronger opening line for the entry. *(no words)*

**Why**
The fleet description comes before the reductions in jitter and motor faults, so a scanning reader has to reach the end to see the impact. This line has the clearest quantified results in the entry and would land harder first.

**How to change it**
Move the control-loop and fault reductions earlier in the line, and move this bullet to the first position in the entry.

*raised by wording, narrative*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Built a solar-powered weather station on an STM32 that reports every 5 minutes over LoRa and runs 9 days without sun.

**Problem**
[Important] The nine-day runtime has no battery capacity or test setup to show what it demonstrates. *(about 5 words)*

**Why**
Runtime depends on the stored energy and operating conditions, so readers cannot judge what the nine days demonstrate. The reporting interval provides context but does not establish the conditions behind the runtime.

**How to change it**
Add [battery capacity or key runtime test condition], if available, and keep the reporting interval as context.

*raised by content*

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The current reduction is the strongest line in the project entry and should lead it. *(no words)*

**Why**
The line quantifies a reduction from 4.2 mA to 0.9 mA and names the changes that produced it. Putting it first would make the project’s clearest measured impact easier to find.

**How to change it**
Move this bullet to the first position in the entry.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] “Openly” is vague and may repeat what “Published” already conveys. *(no words)*

**Why**
A reader cannot tell what permissions apply to the schematics and firmware from “openly.” The word adds little unless it identifies the materials’ license.

**How to change it**
Replace “openly” with the materials’ license, if accurate, or omit the word.

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Error] This bullet attributes robot-fleet motor-controller work to a Formula Student electric-car project. *(no words)*

**Why**
The entry identifies a student electric-car project, while the later Voltline role describes a warehouse robot fleet and its motor-controller firmware. As written, the project context and the robot-fleet claim conflict, leaving a reader unsure which work this bullet describes.

**How to change it**
If this refers to the student project, replace “robot fleet” with the correct vehicle or controller. If it refers to the Voltline work, remove the bullet from this entry.

*raised by content*

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
1. [Polish] The CAN-dashboard line does not say what the testing established or changed. *(about 5 words)*
2. [Polish] The CAN-dashboard line is the stronger opening line for this entry. *(no words)*
3. [Polish] “Before each race” emphasizes timing rather than the value of the testing. *(saves about 3 words)*

**Why**
1. The testing cadence shows that validation took place, but a reader cannot tell whether the firmware passed, fixed a problem, or improved reliability. A concise test outcome would make the work’s value clearer.
2. It describes work that fits the student electronics project, while the fleet motor-control claims repeat the later Voltline achievement. Leading with the dashboard work would keep the entry focused on its own story.
3. The phrase tells the reader when testing happened, not what it verified. Keeping it without a result leaves the testing’s purpose unclear.

**How to change it**
1. Add [the key test outcome or pass criterion] after the testing clause; if there was no notable outcome, focus the line on what the firmware enabled.
2. Move this bullet to the first position in the entry.
3. Remove “before each race” or replace it with what the testing verified, if accurate.

*raised by content, narrative, wording*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
[Error] The fleet and motor-control results duplicate the later Voltline achievement and are attributed to the earlier Formula Student entry. *(saves about 10 words)*

**Why**
The Formula Student project ended in May 2021, before the Voltline role began in March 2023, and the later role states the matching fleet and outcomes. Readers may doubt which period and project produced the achievement, while the repeated claim distracts from this entry’s own work.

**How to change it**
Keep the fleet and outcome figures under the role where they belong. For this project, use [the actual vehicle and results], if different; remove the repeated claim if it describes the same achievement.

*raised by content, narrative*

## Skills

> “osciloscopes”

**Problem**
[Error] “osciloscopes” is misspelled in the Tools skills line. *(no words)*

**Why**
The misspelling is conspicuous in a technical skills list and can make the line look unproofread. It also obscures the intended tool name.

**How to change it**
Replace “osciloscopes” with “oscilloscopes.”

*raised by narrative*

## Set aside (6)

- s2:e1:b2: “Wrote the calibration procedure for the sensor line” does not identify the technical step or control that addressed drift.
- s3:e1:b0: “Worked on firmware and testing for the robot fleet’s motor controllers” gives no outcome from that work.
- s3:e1:b0: “firmware and testing” does not specify what you did in either area.
- s3:e1:b2: “Rewrote motor-control firmware” does not say what changed in the firmware.
- s3:e1:b2: “cutting control-loop jitter eightfold and motor faults by more than half” gives relative improvements without a baseline or comparison period.
- s3:e1:b0: “Worked on” obscures your specific contribution; replace it with the action you took, such as developing or testing.
