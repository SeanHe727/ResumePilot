> Here is my resume: bench/planted-defects/tests-final/b2-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed all 4 entries with bullets; narrative and format checks ran. Education has no bullets to review. Job-match review did not run because no posting was provided.

The changes to prioritize are:

1. **Correct or verify the figures and standards claims.** The specialists flagged the transit project’s “50% improvement” for a drop from 90 to 60 seconds, “20%” for a rise from 65% to 85%, the use of “Net Promoter Score” for an average 0–10 rating, and the claim that 3:1 body-text contrast meets WCAG 2.1 AA.
2. **Make the link between research and outcomes explicit.** In particular, the Pinegrove statement-support bullet names synthesis methods but not the customer-facing change that reduced calls. Several other bullets name a result without identifying the finding or design change behind it.
3. **Fix the page-level details.** Put Experience before Education, clarify your work situation since the role ending June 2025, remove the date of birth and nationality, and correct “interveiws” in Skills.

The PDF parsed cleanly. The full review is in `/report --full`.

> /report
# Review: resume.pdf

**90/100** — format 100 · content 86 · wording 86 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 13 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997 | Nationality: Canadian

**Problem**
[Error] The file includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally left off a résumé. Including them puts irrelevant personal information in front of a reader instead of evidence of your qualifications.

**How to change it**
Remove “Date of birth: 3 Mar 1997 | Nationality: Canadian.”

> B.A. in Cognitive Science

**Problem**
[Important] Education appears before the more relevant UX research experience.

**Why**
With nearly six years of listed UX research work, the degree is no longer the strongest introduction. Starting with it delays the professional evidence a recruiter is likely to look for first.

**How to change it**
Move the Experience section ahead of Education.

> Jun 2025

**Problem**
[Polish] The page does not clarify your work situation since the last listed employment ended.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] A body-text contrast threshold of 3:1 does not establish WCAG 2.1 AA compliance.

**Why**
WCAG 2.1 AA generally requires 4.5:1 contrast for ordinary-sized text; 3:1 applies to large text. Contrast alone also cannot establish compliance for an entire design system, so the claim overstates what the stated work proves.

**How to change it**
Replace “at least 3:1” with [the body-text contrast threshold actually achieved]. Claim WCAG 2.1 AA compliance only if [the other applicable requirements were also met]; otherwise, describe the contrast change without the compliance claim.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] The line wrongly credits research synthesis itself with reducing repeat support calls.
2. [Important] The 23% reduction is buried after the research counts and method list.
3. [Polish] “Synthesizing” breaks the past-tense pattern in this ended role.

**Why**
1. Affinity mapping, journey mapping and a tagged clip library organize findings; they do not change the customer experience or support workflow. Without the intervening change, a reader cannot see how the research produced the 23% reduction.
2. A scanning reader reaches the volume of evidence and three synthesis methods before seeing the outcome. That makes the most consequential result easier to miss.

**How to change it**
1. If a change was implemented, replace part of the method list with [the statement-related change prompted by the findings] between the research and the reduction. If not, describe the synthesis without claiming that it cut calls.
2. Move “cut repeat support calls about statements by 23%” to the opening and trim the method list to the detail needed to explain it.

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
1. [Polish] “Recommended fixes” does not identify what the shipped changes affected.
2. [Polish] The three-of-five shipping result comes after the presentation detail.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
[Polish] “The number of tests run each quarter” is unnecessarily wordy.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
1. [Important] The onboarding bullet opens with the assignment instead of the completed-sign-up increase.
2. [Important] The strongest Pinegrove result is not the entry’s opening bullet.

**Why**
1. “Led research” tells a reader what you were responsible for, but the increase from 41% to 58% shows what happened. Putting that result first makes the value of the prototype testing apparent on a quick scan.
2. A reader encounters the card-dispute study before the onboarding result, even though the latter is the stronger lead for this entry. Reordering lets that result establish the impact of your senior research work immediately.

**How to change it**
1. Move “the shipped design raised completed sign-ups from 41% to 58%” to the opening, followed by the prototype-testing detail.
2. Move the mobile-onboarding bullet ahead of the card-dispute bullet.

> Brought the design system

**Problem**
[Polish] The design-system work is not connected to the Senior UX Researcher role.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The line incorrectly calls an average recommendation rating a Net Promoter Score.
2. [Important] The rating increase does not show what you contributed to it.
3. [Polish] The calculation detail slows the rating bullet.

**Why**
1. Net Promoter Score is the percentage of promoters giving 9–10 minus the percentage of detractors giving 0–6. Averaging 0–10 ratings produces a different measure, regardless of the response count, so the label makes the result technically unreliable.
2. A hiring manager can see the outcome but cannot identify the research finding or recommendation you supplied. Without that link, “Raised” claims more individual contribution than the line explains.

**How to change it**
1. Replace “Net Promoter Score” with “average recommendation rating” and express the change as “from 6.1 to 8.4 out of 10.”
2. After correcting the metric, add [the research finding or recommendation you made that informed the app change].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] “The findings” does not name the insight behind the two-way reminder.
2. [Important] The drop in missed appointments is buried after the interview and reminder details.
3. [Important] The missed-appointments bullet should lead the Northwind entry.

**Why**
1. The line shows that interviews preceded the reminder, but not what patients said that pointed toward two-way texting. One concrete need or obstacle would make your research contribution easier to assess.
2. The line opens with the research activity, while its measurable outcome arrives at the end. Leading with the drop lets a scanning reader see why the interviews mattered.
3. It connects patient interviews, a resulting product change and a measured reduction. Placing it before the rating bullet would give readers that complete research story first.

**How to change it**
1. If space permits, replace “the findings” with [the patient need or obstacle that pointed to two-way texting].
2. Move “cut missed appointments from 14% to 9%” to the opening, followed by the interview and reminder details.
3. Move the appointment-reminders bullet to the first position in this entry.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Important] “Writes” uses present tense for a role that ended in February 2022.

**Why**
The date range and verb disagree. That small inconsistency can make a reader pause over whether this responsibility is current.

**How to change it**
Replace “Writes” with “Wrote.”

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
1. [Important] The 30% reduction in support calls comes after the testing method.
2. [Polish] “The revised layout” does not identify the change prompted by testing.

**Why**
1. A scanning reader sees the participant count before the outcome. Opening with the reduction makes the value of the waiting-room work clearer.

**How to change it**
1. Move “cut support calls about joining a video visit by 30%” to the opening, then give the testing detail.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Polish] The testing bullet says what was measured but not what the tests found.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
[Error] “A 50% improvement” incorrectly describes the drop from 90 to 60 seconds.

**Why**
The decrease is 30 seconds, or 33% of the original 90 seconds. Calling it 50% makes the reported route-finding improvement look overstated.

**How to change it**
Replace “a 50% improvement” with “a 33% reduction.”

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] “By 20%” incorrectly labels a 20-percentage-point increase.
2. [Polish] “Across 12 participants” repeats the participant count in the preceding bullet.
3. [Polish] The audio-landmarks and color phrase repeats the methods in the preceding bullet.

**Why**
1. Moving from 65% to 85% adds 20 percentage points; relative to 65%, the increase is approximately 31%. Confusing those measures makes the success result inaccurate.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
1. [Important] The booking-flow bullet does not say what changed to remove five steps.
2. [Important] The drop in phone bookings has no stated comparison period.

**Why**
1. A UX reader can see the before-and-after step counts but cannot picture your design decision. One concrete change would show your contribution without turning the bullet into a list.
2. “The next two months” identifies when the lower count occurred, not the baseline against which it fell. Without that baseline, a reader cannot interpret the quarter-sized drop confidently.

**How to change it**
1. If space permits, add [the single design change that removed the most steps] beside “cutting the steps to book from 9 to 4.”
2. After “a quarter,” add “versus [the comparison period]” if that reflects how the drop was measured.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Important] The six resolved issues are not accompanied by evidence of booking completion after the fixes.
2. [Polish] “Hallway testing” may be unclear to readers outside design teams.

**Why**
1. The issue count shows what the testing uncovered and what you addressed, but not whether first-time users could then finish booking. A reader cannot tell whether the observed barrier was removed.

**How to change it**
1. If measured, add [first-time booking completions after the fixes versus before] near “fixing the six issues.” If not, retain the issue count without implying a tested completion gain.

## Skills

> interveiws

**Problem**
[Error] The Methods skills line misspells “interviews.”

**Why**
A spelling error in a research method a UX researcher uses can distract a reader. It also makes an otherwise relevant skill look less carefully presented.

**How to change it**
Replace “interveiws” with “interviews.”

## Already working

- s2:e0:b0: Clear outcome, comparison, test period and design change in one line.
- s3:e1:b2: The line shows that the handbook was used after your volunteer work ended.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-52f67469.md.

