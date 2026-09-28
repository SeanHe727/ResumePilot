# Full review: resume.pdf

**82/100** — format 100 · content 73 · wording 84 · narrative 58

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 7 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

**Problem**
[Important] Experience is not newest-first, and the bakery role interrupts the engineering career story. *(saves about 10 words)*

**Why**
Clearwater Sensors is listed above the more recent Voltline role, which obscures the chronology. Northside Bakery also appears before the engineering roles and takes two bullets, drawing attention away from the technical experience.

**How to change it**
Put Voltline before Clearwater Sensors, move Northside Bakery below the engineering roles, and shorten it to one line.

*raised by file, narrative*

> B.S. in Electrical Engineering

**Problem**
[Important] The résumé places Education ahead of Experience despite several years of professional work after the degree. *(no words)*

**Why**
A reader sees the degree before the professional record. That delays the section most likely to establish the candidate’s recent experience.

**How to change it**
Move Experience above Education.

*raised by narrative*

> Low-Power Weather Station

**Problem**
[Important] The technical toolkit should appear before Projects. *(no words)*

**Why**
Putting Skills ahead of Projects lets a reader see the relevant technical toolkit sooner. The current ordering delays that information.

**How to change it**
Move Skills ahead of Projects.

*raised by narrative*

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
[Error] The delivery bullet gives route size but not a delivery outcome or performance measure. *(about 6 words)*

**Why**
A reader can see the responsibility and the route’s reach, but not whether orders arrived on time, complete, or to another useful standard. Without a result, the scale does not show how well the deliveries were completed.

**How to change it**
Add [the most telling delivery outcome or performance measure compared with a target or prior rate], if available; keep the route count only if scale matters. Correct “cafØs” to “cafés” or “cafes.”

*raised by content, wording*

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
[Polish] The dispatch-check bullet describes preparation but does not show what the check achieved. *(about 5 words)*

**Why**
The reader can understand the process, but cannot tell whether it prevented incorrect or incomplete deliveries. Without an outcome or comparison, the effectiveness of the check is hard to judge.

**How to change it**
Add [a check-related accuracy or error measure compared with a prior rate or target], if tracked. Move this bullet before the delivery bullet so the more concrete action opens the entry.

*raised by content, narrative*

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Owned the end-of-line test station for the humidity sensor and the yield reports the line leads used.

**Problem**
1. [Important] The station and reports bullet does not say what the testing involved or what the reports enabled. *(about 10 words)*
2. [Polish] The phrase about the reports’ audience is wordy and does not add essential information. *(saves about 5 words)*

**Why**
1. A reader can see that you had responsibility for the station and that line leads used its reports, but cannot assess the technical work or the reports’ impact. That leaves both the station ownership and the reporting value difficult to judge.
2. Naming the line leads shows who used the reports, but does not explain what they did with them. The phrase takes attention away from the work and its outcome, which are more useful to a reader.

**How to change it**
1. Replace “Owned” with an action you performed, add [one key test or check the station performed], and state [the operational result the station or reports enabled], if accurate.
2. Cut “the line leads used” and use the space for the station’s testing detail or an outcome, if accurate.

*raised by content, wording*

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] The fixture bullet should open the Clearwater Sensors entry. *(no words)*

**Why**
This bullet gives a specific design action and a clear throughput result. Leading with it would put the most immediately assessable accomplishment first.

**How to change it**
Move this bullet before the current opening bullet.

*raised by narrative*

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed” does not identify which update measure improved by 60%. *(no words)*

**Why**
A reader cannot tell whether the figure refers to download time, total update time, or throughput. That makes the result harder to interpret and compare.

**How to change it**
Replace “update speed” with the specific measure, such as “update time” or “download throughput,” if accurate.

*raised by content*

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Polish] The test-rig bullet gives a test count but no result from running the tests. *(about 6 words)*
2. [Polish] The phrase “that ran” makes the rig sound like the actor instead of stating directly that the rig ran the tests. *(no words)*

**Why**
1. The number shows the rig’s scale, not what it changed for firmware quality or releases. A reader cannot tell whether it caught defects or otherwise improved testing.
2. The sentence describes writing a rig, then attaches the test action to it in a relative clause. A more direct construction makes the testing contribution easier to scan.

**How to change it**
1. Add [the most telling outcome, such as regressions caught before release or a change in escaped defects], if accurate.
2. Replace “that ran” with a direct statement that the rig ran the tests.

*raised by content, wording*

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The sentence assigns the discovery of the failure causes to the saved data rather than to the logger or your analysis. *(no words)*

**Why**
The data could provide evidence, but it does not itself identify a root cause. A reader may wonder who used the saved data to diagnose the failures.

**How to change it**
Replace “which found” with the accurate actor, such as “helping me identify,” if you made the diagnosis, or name the logger’s role if accurate.

*raised by wording*

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing. *(no words)*

**Why**
An 8 kHz sampling rate has a Nyquist frequency of 4 kHz, below the stated 5 kHz signal. The signal will alias rather than be captured faithfully.

**How to change it**
If the actual sampling rate was above 10 kHz, state that rate; otherwise remove the claim that 8 kHz captured the signal without aliasing.

*raised by content*

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition. *(about 4 words)*
2. [Polish] The race-condition bullet does not say what changed in the system after the fix. *(about 5 words)*

**Why**
1. Volatile affects compiler access behavior, but does not make shared operations atomic or synchronize the interrupt handler and main loop. The race can therefore remain, despite the line presenting volatile as the complete fix.
2. A reader cannot judge why resolving the concurrency issue mattered without an observable consequence. Naming the behavior or failure that stopped would make the impact clearer.

**How to change it**
1. Name [the synchronization or atomic mechanism that actually fixed the race], if one was used. If volatile was the only change, describe it as a visibility measure rather than a race-condition fix, and compress the description of the shared counter.
2. Add [the incorrect behavior or failure that stopped occurring], if accurate.

*raised by content, wording*

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The fleet-scale rewrite and its results are attributed here and to the Formula Student project entry for different periods. *(no words)*
2. [Polish] The fleet phrase interrupts the action and delays the bullet’s results. *(no words)*
3. [Polish] The rewrite-and-results bullet should open the Voltline Robotics entry. *(no words)*
4. The rewrite bullet does not identify what changed in the firmware implementation. *(about 4 words)*

**Why**
1. This role is dated 2023–2025, while Formula Student is dated 2019–2021; both entries describe a roughly 300-robot fleet and matching jitter and fault reductions. As written, the résumé appears to assign the same achievement to two different contexts and periods.
2. The fleet detail appears between the rewrite and its measurable outcomes. That placement makes the most scannable information—the results—arrive later than necessary.
3. It combines a substantial action with quantified system and field results. Leading with it would make the entry’s strongest accomplishment visible sooner.
4. A reader can see that the firmware was rewritten and that results followed, but cannot tell what technical change produced them. That makes the embedded-software contribution harder to assess.

**How to change it**
1. Clarify whether these were distinct rewrites and distinguish their outcomes, or keep the achievement only under the entry where it occurred.
2. Move the fleet phrase after the results or cut it if the fleet scale is not essential.
3. Move this bullet before the current opening bullet.
4. Add [the specific implementation change], if accurate.

*raised by content, narrative, wording*

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The current-reduction bullet should open the weather-station project. *(no words)*

**Why**
It gives a concrete before-and-after result and the methods used to achieve it. Leading with that outcome would make the project’s strongest evidence easier to notice.

**How to change it**
Move this bullet before the current opening bullet.

*raised by narrative*

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] The publication and the school’s follow-on use have equal grammatical weight, obscuring the latter as evidence of reach. *(no words)*

**Why**
The school building two stations is a concrete sign that the project was used beyond your publication. The current construction makes that evidence read like a separate, equally weighted action.

**How to change it**
Keep the publication as the main action and make the school’s two builds a supporting result, using a clause or sentence that clearly connects them.

*raised by wording*

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] The opening bullet is too general to show what you contributed or achieved. *(about 6 words)*

**Why**
A reader cannot tell whether the work improved the controllers, validated them, or had another result. “Firmware and testing” also hides the technical actions, making the contribution hard to assess.

**How to change it**
Replace the general description with [the specific firmware or testing action and its result], if accurate; do not reuse the fleet-scale accomplishment unless it belongs to this project.

*raised by content, wording*

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
1. [Important] The CAN-bus bullet says when testing happened but not what it established or changed. *(about 5 words)*
2. [Polish] “Before each race” emphasizes timing that adds little to the accomplishment. *(saves about 3 words)*

**Why**
1. A reader can see that the firmware was tested against the motor controller, but cannot tell whether it worked reliably, resolved an issue, or enabled a race function. The result would explain why the contribution mattered.
2. The phrase tells the reader when the testing happened, but not what it accomplished. It takes space from the firmware and test contribution.

**How to change it**
1. Add [the key outcome of writing or testing the firmware], if accurate.
2. Cut “before each race.”

*raised by content, wording*

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The project’s fleet-scale rewrite and matching results conflict with the later Voltline role’s claim to the same accomplishment. *(saves about 15 words)*
2. The rewrite bullet does not identify the technical change that produced the stated results. *(about 4 words)*
3. The jitter and fault reductions lack a stated measurement period or baseline. *(about 5 words)*

**Why**
1. Formula Student ends in 2021, before the Voltline role began in 2023, yet both entries describe a roughly 300-robot fleet and matching jitter and fault reductions. As written, the résumé attributes the accomplishment to two different periods and contexts.
2. The claim names the firmware rewrite and its outcomes, but not the implementation change behind them. A reader cannot assess the technical contribution from the results alone.
3. A reader cannot tell what period or comparison the reductions describe. Without that context, it is harder to interpret how the results were measured.

**How to change it**
1. If these are the Voltline achievements, remove them from this project; otherwise replace them with [the distinct Formula Student achievement]. Keep the Formula Student section focused on its distinct leadership and CAN work.
2. Add [the specific technical change], if accurate.
3. Add [the measurement period or baseline for the reductions], if accurate.

*raised by content, narrative*

## Skills

> osciloscopes

**Problem**
[Error] The Tools skills line misspells “oscilloscopes.” *(no words)*

**Why**
The misspelling can distract a reader in a technical skills list. Correcting it keeps the tool name clear and professional.

**How to change it**
Replace “osciloscopes” with “oscilloscopes.”

*raised by narrative*

## Already working

- s2:e1:b1: Shows a clear chain from diagnosing early field failures to a process change and lower returns.
- s2:e1:b2: Pairs a concrete deliverable with a clear before-and-after result.

## Set aside (3)

- s3:e1:b2: “Rewrote motor-control firmware” does not show what technical change produced the stated results.
- s3:e1:b2: “cutting control-loop jitter eightfold and motor faults by more than half” does not state what period or baseline those reductions were measured against.
- s2:e2:b5: “Rewrote the motor-controller firmware” does not identify what changed in the implementation.
