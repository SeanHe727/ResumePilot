> Here is my resume: bench/planted-defects/tests-final/b2-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, the resume’s overall narrative, and its formatting. Content and wording reviews covered all four eligible entries; the education entry had no bullets to review. No job-description match was run because you didn’t provide a posting.

The main changes to address:

- **Check the measures and percentages.** The accessible map’s route-finding result is labeled a 50% improvement, but the reviewer says the change from 90 to 60 seconds is a 33.3% reduction. The task-success change from 65% to 85% is 20 percentage points, not a 20% increase. The reviewer also flags calling an average 0–10 recommendation rating “Net Promoter Score.”
- **Make sure claims are supported by the evidence stated.** The reviewer says the 3:1 body-text contrast figure doesn’t establish that the design system meets WCAG 2.1 AA. They also question whether testing three prototypes with 24 customers supports attributing the following quarter’s signup increase to the shipped design.
- **Add context to outcome comparisons.** Several results—including changes in missed appointments and support calls—need the comparison periods or baseline made clear. The 23% reduction in statement-related support calls also lacks a stated comparison period.
- **Fix smaller consistency and presentation issues.** The Northwind bullet uses present tense for a role that ended in 2022, and the Methods skills line has a misspelling. The format review says the PDF parses cleanly and is one page; it also flags date of birth and nationality as personal details to remove.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**90/100** — format 100 · content 86 · wording 84 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 9 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997

**Problem**
[Error] The résumé includes personal details that are conventionally left off and that readers are not meant to weigh.

**Why**
Date of birth and nationality do not help a reader assess the candidate’s work or qualifications. Including them can draw attention away from the relevant experience.

**How to change it**
Remove the date of birth and nationality.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] The 3:1 body-text contrast figure does not establish that the design system meets WCAG 2.1 AA, and the claim does not identify what was assessed or how compliance was verified.

**Why**
WCAG 2.1 AA generally requires 4.5:1 contrast for normal-sized text; 3:1 is sufficient only for large text. A reader therefore cannot infer AA compliance from the stated threshold, or tell what part of the design system was checked and how the result was confirmed.

**How to change it**
If normal-sized body text was brought to at least 4.5:1 and large text to at least 3:1, name those thresholds, [the part of the system assessed] and [how achievement was verified]. Otherwise, replace the AA claim with a description of the contrast change.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Important] The opening participial phrase does not agree grammatically with the past-tense main verb, and the result is buried after a long methods list.
2. [Polish] The 23% reduction has no stated comparison period or baseline.

**Why**
1. The opening makes it unclear who or what cut the calls, because “Synthesizing” leads into the past-tense “cut.” The long list of data sources and methods also delays the outcome, making the result harder to scan.

**How to change it**
1. Replace “Synthesizing” with “Used” and put the outcome before the list of sources and methods; keep the methods after the result.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
[Polish] The reader cannot tell whether the training or the shared script template doubled the number of tests.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
1. [Error] Prototype testing with 24 customers does not establish that the shipped design caused the increase in completed sign-ups.
2. [Important] The measurable sign-up outcome appears after the research details instead of leading the line.

**Why**
1. Prototype testing can assess usability, but it does not measure the effect of a shipped design on real-world sign-ups. Without production outcome evidence and a suitable comparison, the causal claim is unsupported.
2. A scanning reader reaches the outcome only after the prototype-testing details. Leading with the change in completed sign-ups would make the strongest result easier to notice.

**How to change it**
1. If a production A/B test or other suitable comparison measured the increase, name that evidence. Otherwise, replace the causal wording with “completed sign-ups rose from 41% to 58%” in the quarter after launch.
2. Move the completed sign-ups result to the start of the line, ahead of the research details.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The average 0–10 recommendation rating is mislabeled as Net Promoter Score.
2. [Important] The metric definition is longer than the bullet needs.

**Why**
1. Standard NPS is the percentage of promoters (ratings 9–10) minus the percentage of detractors (ratings 0–6), not the average rating. The stated 6.1 and 8.4 could be average ratings, but they are not standard NPS scores.
2. The explanation of the rating scale and monthly response count takes space without making the outcome easier to scan. The metric still needs to be named accurately, but the extended definition distracts from the result.

**How to change it**
1. If the measure was the average rating, call it the average recommendation rating; if it was NPS, calculate it as the percentage of promoters minus the percentage of detractors.
2. Remove the extended definition; retain only the accurate metric label chosen for this measure.

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] The reduction in missed appointments is buried after the interview and findings clauses.
2. [Polish] The two missed-appointment rates have no stated comparison periods.

**Why**
1. A reader reaches the outcome only after the research details. Putting the quantified reduction first would make the result easier to scan.

**How to change it**
1. Move the missed-appointment reduction to the start of the bullet, ahead of the interview and findings details.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Important] “Writes” uses present tense for a role that ended in February 2022.

**Why**
The present tense conflicts with the dates on the Northwind Health entry. A reader may wonder whether the responsibility is current or whether the bullet was not updated when the role ended.

**How to change it**
Change “Writes” to “Wrote,” unless the responsibility continues; if it does, clarify that it is ongoing.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Polish] The 30% reduction in support calls has no stated comparison periods.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Important] The redesign description does not say what specifically changed for screen-reader or low-vision riders.

**Why**
A reader can tell who the map was intended to serve, but not what the redesign delivered for them. That makes the accessibility work harder to picture.

**How to change it**
Replace the broad redesign description with [the specific map change that improved use for screen-reader or low-vision riders], if accurate.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The time reduction from 90 to 60 seconds is 33%, not a 50% improvement.
2. [Important] The transit-map outcome is not the opening line of the project entry.
3. [Polish] The method phrase repeats the method named in the next bullet.

**Why**
1. The time fell by 30 seconds out of 90, which is a 33.3% reduction. A 50% increase applies to the inverse-time rate, not to the reduction in time described by “cut.”
2. The route-finding result is the strongest line in the entry, but it follows the project description. A reader scanning the entry may miss the clearest outcome before reaching it.

**How to change it**
1. Replace “a 50% improvement” with “a 33% reduction.”
2. Move this outcome bullet ahead of the opening project-description bullet.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The increase from 65% to 85% is 20 percentage points, not 20%.
2. [Polish] The method phrase repeats the method named in the preceding bullet.

**Why**
1. The difference between the two rates is 20 percentage points. Relative to the original 65%, the increase is about 31%, so “20%” misstates the change.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points,” or say “by about 31% relative to baseline.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The redesign description does not say what the booking-flow change was.

**Why**
The results show value, but a reader cannot tell what design decision or skill contributed to them. Naming the key change would make the candidate’s role in the improvement easier to understand.

**How to change it**
Replace the broad description with [the key booking-flow change that reduced the steps], keeping the result figures.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Important] The line does not say whether users completed bookings more successfully after the six issues were fixed.

**Why**
The issue count shows what was addressed, but not whether the changes improved booking completion in practice. A measured outcome would make the effect of the fixes clearer.

**How to change it**
If measured, add [first-time booking completion after the fixes, compared with before]; otherwise, keep the six resolved blockers as the concrete result.

## Skills

> interveiws

**Problem**
[Error] “interveiws” is misspelled in the Methods skills line.

**Why**
The typo is visible in a skills section and can distract a reader from the candidate’s qualifications. Correcting it removes an avoidable error.

**How to change it**
Replace “interveiws” with “interviews.”

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b05838f9.md.

