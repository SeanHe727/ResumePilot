> Here is my resume: bench/planted-defects/tests-final/b2-emb/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording reviews covered all 4 entries with bullets; narrative and format reviews covered the full resume. No job-description match review ran because no posting was provided.

The main changes to address:

- **Resolve the Formula Student / Voltline overlap.** The same distinctive 300-robot firmware achievement and similar results appear in both entries, years apart. Confirm whether these were separate achievements; if not, correct the attribution and dates or remove the duplicate.
- **Clarify technical claims and figures.** The content review flagged the stated sampling rate as incompatible with the claim of avoiding aliasing, and noted that declaring a shared counter `volatile` does not fix a race condition. It also found that the jitter figures and the claimed 60% reduction do not align.
- **Make vague bullets more specific.** The Weather Station opening relies on promotional language rather than describing the project. Several work bullets could better explain what the tests measured, what the calibration procedure established, or what effect the test rig had.
- **Reorder and tighten the story.** The narrative review suggests moving Experience before Education and shortening or cutting the older project if its achievement duplicates Voltline. It also noted the unexplained May 2021–April 2022 gap.

The format review found a clean, one-page, ATS-parsable file with no layout warnings. The full report is available at **`/report --full`**.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 78 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Formula Student Electric Car

**Problem**
[Important] The current project does not lead the Projects section.

**Why**
The Low-Power Weather Station is current, but Formula Student Electric Car appears first. Leading with the current project would make the section's most recent work easier to find.

**How to change it**
Move Low-Power Weather Station ahead of Formula Student Electric Car in Projects.

> B.S. in Electrical Engineering

**Problem**
[Important] Experience appears after Education despite several years of work history.

**Why**
A reader sees the degree before the more recent work that is more relevant to your current direction. Putting Experience first makes that background easier to find.

**How to change it**
Move the Experience section ahead of Education.

> May 2021

**Problem**
[Polish] There is an unexplained 10-month gap between the degree and the first listed role.

## Voltline Robotics | Embedded Software Engineer | Metro City, USA | Mar 2023 - Jun 2025

> Improved update speed by 60% by compressing firmware images and resuming interrupted downloads.

**Problem**
[Important] The 60% update-speed improvement has no baseline or comparison.

**Why**
Without the starting point, a reader cannot judge the practical size of the improvement. A before-and-after time would make the percentage easier to interpret.

**How to change it**
Add [prior update time or comparison baseline] so the 60% has a clear reference.

> Wrote a hardware-in-the-loop test rig that ran 400 motor-control tests on every firmware build.

**Problem**
[Important] The test-rig line gives its activity and cadence but no effect.

**Why**
The reader can see the rig's coverage and that it ran on every build, but not whether it caught regressions, reduced manual effort, or otherwise improved releases. One concrete outcome would show why building the rig mattered.

**How to change it**
Add [a supported outcome, such as regressions caught or manual testing time saved].

> Added a crash logger that saved the last 2 seconds of sensor data to flash, which found the root cause of 5 field failures.

**Problem**
[Polish] The wording makes the logger sound as though it found the root cause by itself.

> Sampled the motor’s 5 kHz vibration signal at 8 kHz so the fault detector could capture it without aliasing.

**Problem**
[Error] Sampling a 5 kHz signal at 8 kHz cannot capture it without aliasing.

**Why**
At an 8 kHz sampling rate, the Nyquist frequency is 4 kHz, so a 5 kHz component aliases rather than being captured accurately. An anti-aliasing filter that removes the 5 kHz component would prevent aliasing but also prevent capturing that signal.

**How to change it**
If that is what was done, replace “8 kHz” with a sampling rate above 10 kHz and name suitable anti-alias filtering; otherwise remove the claim that the detector captured the 5 kHz signal without aliasing.

> Fixed a race condition on the counter shared by the interrupt handler and the main loop by declaring the counter volatile.

**Problem**
1. [Error] Declaring the shared counter volatile does not fix a race condition.
2. [Important] The claimed race-condition fix has no verification or observable result.
3. [Polish] The counter is named repeatedly in the description of the race.

**Why**
1. In embedded systems, volatile does not make accesses atomic or synchronize the interrupt handler with the main loop. The race requires an appropriate synchronization mechanism.
2. A reader sees the stated resolution and code change, but has no evidence that the problem stopped occurring. A concise verification result would make the outcome more credible.

**How to change it**
1. Name the atomic operation, critical section, or other synchronization method used; if volatile was the only change, say it made accesses observable but do not claim it fixed the race.
2. Add [how the fix was verified, such as a relevant test result] if you have a concrete result to report.

> Rewrote the motor-controller firmware for a warehouse robot fleet of 300 units, cutting control-loop jitter from 120 to 15 microseconds and field motor faults by 60%.

**Problem**
1. [Error] The jitter figures show an 87.5% reduction, not a 60% reduction.
2. [Important] The key results appear after the rewrite and fleet context, delaying the impact for a scanning reader.
3. [Polish] The fleet description can be shorter without losing its size.

**Why**
1. The change from 120 to 15 microseconds is a reduction of (120 − 15) / 120 = 87.5%. The final value is one-eighth of the starting value.
2. A reader has to reach the end of the line to see the jitter and fault improvements. Leading with the outcome would make the achievement easier to notice.

**How to change it**
1. Change the jitter reduction to 87.5% (an eightfold reduction), or verify and correct the figures if 60% is the intended result.
2. Move the results to the start of the bullet, before the rewrite and fleet context.

## Clearwater Sensors | Hardware Test Engineer | Metro City, USA | Apr 2022 - Feb 2023

> Automated end-of-line tests for a humidity sensor, cutting test time per unit from 90 to 25 seconds across 20,000 units a month.

**Problem**
[Polish] The automated-test line does not show how the tests ran or what they measured.

> Traced a batch of early field failures to a solder-paste change; the findings updated the reflow profile and cut returns from 2.1% to 0.4%.

**Problem**
[Polish] The wording gives the findings, rather than you, agency for changing the reflow profile.

> Wrote the calibration procedure for the sensor line, cutting calibration drift complaints from 15 to 2 a quarter.

**Problem**
[Polish] The line does not reveal what technical practice the calibration procedure established.

## Low-Power Weather Station | Independent Project | C, STM32 | Jan 2025 - Present

> Engineered a next-generation, innovation-driven IoT solution that redefines sustainable environmental sensing.

**Problem**
[Important] The opening project line uses broad promotional claims without specifying the work or a checkable outcome.

**Why**
A reader cannot tell what the project achieved, how it was implemented, or who benefited from the claim that it redefines environmental sensing. Without a measure or comparison, the claimed impact is also difficult to judge.

**How to change it**
Replace the promotional description with [one key implementation choice or technical contribution] and, if available, [a specific outcome or measured comparison]; otherwise cut the line if it adds no distinct result.

> Cut average current from 4.2 mA to 0.9 mA by sleeping between readings and batching radio transmissions.

**Problem**
[Important] The strongest project result is not the opening line.

**Why**
The current line leads with a general description, while the next line gives a concrete current reduction and the methods behind it. A reader scanning the project should see that measurable result first.

**How to change it**
Move the current-reduction line to the opening position in this project.

## Formula Student Electric Car | Electronics Lead, Team of 12 | C | Sep 2019 - May 2021

> Worked on firmware and testing for the robot fleet’s motor controllers.

**Problem**
[Important] The opening bullet describes participation without saying what you changed or achieved.

**Why**
A reader cannot tell what value your contribution added to the motor controllers, and “firmware and testing” gives no concrete evidence of your technical work. This makes the entry read as a collection of team tasks rather than a clear account of your contribution.

**How to change it**
Replace “Worked on firmware and testing” with [the specific firmware change or test approach] and [the resulting change or measurable outcome], if accurate.

> The CAN-bus firmware for the dashboard was written and tested against the motor controller before each race.

**Problem**
1. [Important] The dashboard-firmware bullet does not state what the firmware enabled or what testing established.
2. [Polish] Passive wording hides your role in writing and testing the dashboard firmware.
3. [Polish] The race-timing detail adds length without clarifying the result.

**Why**
1. A reader can see that implementation and testing occurred, but cannot tell whether the work improved dashboard operation or resolved a specific problem. A stated result would make the contribution's value clear.

**How to change it**
1. Add [the behavior enabled or issue resolved] and, if useful, [the key test result that supports it].

> Rewrote motor-control firmware for a fleet of about 300 robots, cutting control-loop jitter eightfold and motor faults by more than half.

**Problem**
1. [Error] This project duplicates the later Voltline claim of a 300-unit firmware rewrite and the same motor-control improvements.
2. “Rewrote motor-control firmware” does not identify the technical change made.
3. The strongest claim is not the opening bullet in this project.

**Why**
1. The project dates to 2019–2021, before the 2023–2025 Voltline role, yet both entries claim the same distinctive fleet-scale work and outcomes. A reader may question which role and dates are correct, weakening confidence in both claims.
2. A reader can see the scale and claimed results but not what the rewrite changed technically. Naming the specific change would make the work easier to assess, if this was a separate project.
3. The motor-control line contains the largest stated result in the entry, but appears last. A reader scanning the project may not reach it.

**How to change it**
1. Keep the accomplishment under the role where it occurred. If this was a separate rewrite, distinguish it using [the separate project details] and align the figures.
2. If this was a separate project, replace “Rewrote motor-control firmware” with [the specific technical change]; otherwise remove the duplicated claim.
3. If this achievement belongs to this project, move its bullet to the opening position; otherwise remove it as a duplicate.

## Already working

- s2:e1:b3: Shows what the fixture enabled and quantifies the throughput increase.
- s3:e0:b2: Shows concrete reuse of the project materials beyond your own work.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-089e1578.md.

