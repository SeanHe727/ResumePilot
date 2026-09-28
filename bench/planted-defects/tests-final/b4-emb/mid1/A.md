> Here is my resume: bench/planted-defects/tests-final/b4-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets, plus the resume’s narrative and format. Education has no bullets to assess; no job description was provided for a match review.

The main changes to make:
- Put the engineering roles in newest-first order, move the delivery role below them, and bring Skills ahead of Projects.
- Resolve the repeated claim about rewriting firmware for 300 robots: it appears under both Voltline and Formula Student with the same results.
- Recheck the 5 kHz signal sampled at 8 kHz and the claim that declaring a shared counter `volatile` fixed a race condition; the content review flagged both technical descriptions.
- Clarify outcomes for bullets that describe tasks without showing their results. Also fix the corrupted “cafØs” text and the misspelling “osciloscopes.”

The file parses cleanly for ATS. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 84 · narrative 58

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 7 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

**Problem**
[Important] Experience is not newest-first, and the bakery role interrupts the engineering career story.

**Why**
Clearwater Sensors is listed above the more recent Voltline role, which obscures the chronology. Northside Bakery also appears before the engineering roles and takes two bullets, drawing attention away from the technical experience.

**How to change it**
Put Voltline before Clearwater Sensors, move Northside Bakery below the engineering roles, and shorten it to one line.

> B.S. in Electrical Engineering

**Problem**
[Important] The résumé places Education ahead of Experience despite several years of professional work after the degree.

**Why**
A reader sees the degree before the professional record. That delays the section most likely to establish the candidate’s recent experience.

**How to change it**
Move Experience above Education.

> Low-Power Weather Station

**Problem**
[Important] The technical toolkit should appear before Projects.

**Why**
Putting Skills ahead of Projects lets a reader see the relevant technical toolkit sooner. The current ordering delays that information.

**How to change it**
Move Skills ahead of Projects.

## Northside Bakery | Delivery Driver | Metro City, USA | Aug 2025 - Present

> Delivered morning wholesale orders to about 20 cafØs and collected signed invoices.

**Problem**
[Error] The delivery bullet gives route size but not a delivery outcome or performance measure.

**Why**
A reader can see the responsibility and the route’s reach, but not whether orders arrived on time, complete, or to another useful standard. Without a result, the scale does not show how well the deliveries were completed.

**How to change it**
Add [the most telling delivery outcome or performance measure compared with a target or prior rate], if available; keep the route count only if scale matters. Correct “cafØs” to “cafés” or “cafes.”

> Loaded the van and checked each order against the dispatch list before leaving.

**Problem**
[Polish] The dispatch-check bullet describes preparation but does not show what the check achieved.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Jul 2021 - Feb 2023

> Owned the end-of-line test station for the humidity sensor and the yield reports the line leads used.

**Problem**
1. [Important] The station and reports bullet does not say what the testing involved or what the reports enabled.
2. [Polish] The phrase about the reports’ audience is wordy and does not add essential information.

**Why**
1. A reader can see that you had responsibility for the station and that line leads used its reports, but cannot assess the technical work or the reports’ impact. That leaves both the station ownership and the reporting value difficult to judge.

**How to change it**
1. Replace “Owned” with an action you performed, add [one key test or check the station performed], and state [the operational result the station or reports enabled], if accurate.

> Designed a test fixture that checked 8 boards at once, raising station throughput from 40 to 150 boards an hour.

**Problem**
[Polish] The fixture bullet should open the Clearwater Sensors entry.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] “Update speed” does not identify which update measure improved by 60%.

**Why**
A reader cannot tell whether the figure refers to download time, total update time, or throughput. That makes the result harder to interpret and compare.

**How to change it**
Replace “update speed” with the specific measure, such as “update time” or “download throughput,” if accurate.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
1. [Polish] The test-rig bullet gives a test count but no result from running the tests.
2. [Polish] The phrase “that ran” makes the rig sound like the actor instead of stating directly that the rig ran the tests.

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The sentence assigns the discovery of the failure causes to the saved data rather than to the logger or your analysis.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.

**Why**
An 8 kHz sampling rate has a Nyquist frequency of 4 kHz, below the stated 5 kHz signal. The signal will alias rather than be captured faithfully.

**How to change it**
If the actual sampling rate was above 10 kHz, state that rate; otherwise remove the claim that 8 kHz captured the signal without aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition.
2. [Polish] The race-condition bullet does not say what changed in the system after the fix.

**Why**
1. Volatile affects compiler access behavior, but does not make shared operations atomic or synchronize the interrupt handler and main loop. The race can therefore remain, despite the line presenting volatile as the complete fix.

**How to change it**
1. Name [the synchronization or atomic mechanism that actually fixed the race], if one was used. If volatile was the only change, describe it as a visibility measure rather than a race-condition fix, and compress the description of the shared counter.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The fleet-scale rewrite and its results are attributed here and to the Formula Student project entry for different periods.
2. [Polish] The fleet phrase interrupts the action and delays the bullet’s results.
3. [Polish] The rewrite-and-results bullet should open the Voltline Robotics entry.
4. The rewrite bullet does not identify what changed in the firmware implementation.

**Why**
1. This role is dated 2023–2025, while Formula Student is dated 2019–2021; both entries describe a roughly 300-robot fleet and matching jitter and fault reductions. As written, the résumé appears to assign the same achievement to two different contexts and periods.
4. A reader can see that the firmware was rewritten and that results followed, but cannot tell what technical change produced them. That makes the embedded-software contribution harder to assess.

**How to change it**
1. Clarify whether these were distinct rewrites and distinguish their outcomes, or keep the achievement only under the entry where it occurred.
4. Add [the specific implementation change], if accurate.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Polish] The current-reduction bullet should open the weather-station project.

> Published the schematics and firmware openly, and a local school built two stations from them.

**Problem**
[Polish] The publication and the school’s follow-on use have equal grammatical weight, obscuring the latter as evidence of reach.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] The opening bullet is too general to show what you contributed or achieved.

**Why**
A reader cannot tell whether the work improved the controllers, validated them, or had another result. “Firmware and testing” also hides the technical actions, making the contribution hard to assess.

**How to change it**
Replace the general description with [the specific firmware or testing action and its result], if accurate; do not reuse the fleet-scale accomplishment unless it belongs to this project.

> Wrote the CAN-bus firmware for the dashboard and tested it against the motor controller before each race.

**Problem**
1. [Important] The CAN-bus bullet says when testing happened but not what it established or changed.
2. [Polish] “Before each race” emphasizes timing that adds little to the accomplishment.

**Why**
1. A reader can see that the firmware was tested against the motor controller, but cannot tell whether it worked reliably, resolved an issue, or enabled a race function. The result would explain why the contribution mattered.

**How to change it**
1. Add [the key outcome of writing or testing the firmware], if accurate.

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] The project’s fleet-scale rewrite and matching results conflict with the later Voltline role’s claim to the same accomplishment.
2. The rewrite bullet does not identify the technical change that produced the stated results.
3. The jitter and fault reductions lack a stated measurement period or baseline.

**Why**
1. Formula Student ends in 2021, before the Voltline role began in 2023, yet both entries describe a roughly 300-robot fleet and matching jitter and fault reductions. As written, the résumé attributes the accomplishment to two different periods and contexts.
2. The claim names the firmware rewrite and its outcomes, but not the implementation change behind them. A reader cannot assess the technical contribution from the results alone.
3. A reader cannot tell what period or comparison the reductions describe. Without that context, it is harder to interpret how the results were measured.

**How to change it**
1. If these are the Voltline achievements, remove them from this project; otherwise replace them with [the distinct Formula Student achievement]. Keep the Formula Student section focused on its distinct leadership and CAN work.
2. Add [the specific technical change], if accurate.
3. Add [the measurement period or baseline for the reductions], if accurate.

## Skills

> osciloscopes

**Problem**
[Error] The Tools skills line misspells “oscilloscopes.”

**Why**
The misspelling can distract a reader in a technical skills list. Correcting it keeps the tool name clear and professional.

**How to change it**
Replace “osciloscopes” with “oscilloscopes.”

## Already working

- s2:e1:b1: Shows a clear chain from diagnosing early field failures to a process change and lower returns.
- s2:e1:b2: Pairs a concrete deliverable with a clear before-and-after result.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-4846611c.md.

