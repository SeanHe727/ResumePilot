> Here is my resume: bench/planted-defects/tests-final/b2-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four experience/project entries for content and wording, plus the resume’s narrative and ATS formatting. No job description was provided, so there’s no role-specific match review.

The main changes to address:
- Correct the patient-app bullet’s Net Promoter Score definition; the review says it describes a different metric.
- Revisit the accessibility claim: the stated 3:1 body-text contrast does not support a claim of WCAG 2.1 AA compliance.
- Fix the transit-project figures: 90 to 60 seconds is a 33% reduction, not 50%; 65% to 85% is a 20-percentage-point increase, not 20%.
- Move Experience above Education, change “Writes” to past tense for the ended role, and correct “interveiws” to “interviews.”

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**89/100** — format 100 · content 85 · wording 84 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 14 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997

**Problem**
[Error] Personal details a reader is not meant to weigh are included in the file.

**Why**
Date of birth and nationality are not relevant to assessing the UX research experience presented here. Their inclusion asks the reader to weigh personal information that does not strengthen the application.

**How to change it**
Remove “Date of birth: 3 Mar 1997 | Nationality: Canadian” from the file.

> Lakeshore University

**Problem**
[Important] Education appears before Experience, so the UX research career does not lead the résumé.

**Why**
The work history is the clearest evidence of the candidate’s UX research experience. Placing it first helps recruiters see that evidence sooner.

**How to change it**
Move Experience above Education and place Education after the work history.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Cut the card-dispute form’s abandonment rate from 37% to 22% in a four-week A/B test by splitting it into three short steps with saved progress.

**Problem**
[Important] The A/B-test result does not identify whether the rates are from the control and variant or from before and after the change.

**Why**
Without that distinction, a reader cannot tell how the A/B test supports the reported reduction. Clarifying the comparison makes the result easier to interpret.

**How to change it**
Label the rates as control and variant, if accurate, or specify that they are pre- and post-change rates: [which rate was the control or variant, if applicable].

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
1. [Error] A 3:1 contrast ratio does not meet WCAG 2.1 AA for ordinary-size body text.
2. [Important] The claim of bringing the whole design system to AA is broader than the stated body-text change.

**Why**
1. WCAG 2.1 AA requires at least 4.5:1 for ordinary-size text; 3:1 applies only to qualifying large text. As written, the ratio does not substantiate the stated AA claim for body text.
2. A reader cannot tell whether the work covered the design system or only body-text contrast. That uncertainty makes it harder to judge the scope of the accessibility work.

**How to change it**
1. Change the minimum to 4.5:1 for ordinary-size body text; use 3:1 only for qualifying large text.
2. Replace “the design system” with [the components or criteria brought into conformance], if accurate, and limit the claim to that scope.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Important] The sentence delays its 23% result behind a dense list of research inputs and methods.
2. [Error] “Synthesizing” leaves the sentence without a clear subject for the past-tense result.

**Why**
1. The result is the clearest evidence of value, but a scanning reader has to get through the inputs and methods before reaching it. The outcome may be missed.
2. The role ended, but the opening verb is in the present participle while “cut” is in the past tense. The mismatch makes it unclear who performed the action.

**How to change it**
1. Move “cut repeat support calls about statements by 23%” to the start, then retain only the most telling input or synthesis method.
2. Change “Synthesizing” to “I synthesized” and connect it to “cut” with “and.”

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The sign-up result comes after the research methods instead of leading the bullet.

**Why**
The completed-sign-up change is the key outcome, but readers encounter it only after the prototype and participant details. Moving it forward makes the impact easier to spot.

**How to change it**
Move the outcome phrase directly after “mobile onboarding flow,” before the testing details.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The bullet calls an average recommendation rating Net Promoter Score, which is the wrong metric definition.
2. [Important] The result does not say what work drove the score change.
3. [Polish] The explanation of the rating measure is lengthy and slows scanning after the result.

**Why**
1. NPS is the percentage of promoters (ratings 9–10) minus the percentage of detractors (ratings 0–6), not the average rating. The figures 6.1 and 8.4 may be average ratings, but they are not NPS as described.
2. A UX research reader needs to see how your work contributed to the change, not only that the score moved. Without that link, the research skill behind the result is hard to assess.

**How to change it**
1. If these figures are average ratings, call them average recommendation ratings. To claim an NPS increase, calculate NPS from the promoter and detractor percentages for each period.
2. Add the main research activity or resulting product change that drove the increase: [research or change that drove the increase].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] The missed-appointment rates lack the period or population used for comparison.
2. [Important] This is the strongest line in the entry but it does not open it.

**Why**
1. A reader cannot tell whether the rates compare similar groups over comparable periods. That context is needed to interpret the size of the reported change.
2. The line connects patient interviews to a product change and a measurable outcome. Leading with it would put that evidence of impact in front of the reader sooner.

**How to change it**
1. Add the comparable measurement periods or groups: [period or population used for the comparison].
2. Move this bullet before the opening Northwind bullet.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Important] “Writes” uses present tense for a role that ended in February 2022.

**Why**
The dated entry says the role ended, while the present-tense verb suggests the responsibility is current. That inconsistency may leave a reader unsure whether the work continued.

**How to change it**
Change “Writes” to “Wrote,” unless the responsibility continues; if it does, clarify that it continues.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Important] The support-call reduction lacks a comparison period or basis.

**Why**
Without a comparison window, a reader cannot judge whether the reduction reflects comparable periods before and after the layout change. That limits how confidently the result can be interpreted.

**How to change it**
Add the comparable period before and after the revision: [period before and after the revision].

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
1. [Important] The redesign line gives its audience and testing method but not what the redesign achieved.
2. [Polish] The sample size is repeated in the task-success bullet.

**Why**
1. A reader can see who the map was for but cannot tell what became easier or more accessible. The testing detail shows it was evaluated, but not what the evaluation showed.

**How to change it**
1. Add the single most useful outcome from the timed tasks: [observed change in route-finding or task completion].

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The time reduction is 33.3%, not 50%.
2. [Important] This result is not placed before the other project bullets.
3. [Polish] The audio-landmark and color method is repeated in the next result bullet.

**Why**
1. The decrease from 90 to 60 seconds is 30 seconds, calculated against the original 90 seconds. That is a one-third reduction, not a half reduction.
2. The route-finding time change is a concrete outcome that can lead the project section. Putting it first would make that impact easier to notice.

**How to change it**
1. Replace “a 50% improvement” with “a 33.3% reduction” or “a 30-second reduction.”
2. Move this bullet before the opening transit-map bullet.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The change is 20 percentage points, not 20%.
2. [Polish] The participant count and method repeat details from the preceding bullet.

**Why**
1. The endpoints differ by 20 percentage points. A 20% relative increase from 65% would produce 78%, not 85%.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
1. [Important] The booking-flow result does not say what design change you made or how you arrived at it.
2. [Important] The phone-booking reduction does not name the period it is compared with.

**Why**
1. A reader can see the outcome, but not the UX skill behind the redesign. One concrete flow change would make your contribution easier to picture.
2. The line gives a time window for the reduction but not the baseline period. A reader cannot tell what the 25% figure measures.

**How to change it**
1. After “online booking flow,” add [one key flow change and the user need it addressed], if accurate.
2. Add the comparison period, such as [the two months before launch], if that is the basis for the figure.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Polish] “Hallway testing” is UX jargon that may not be clear to readers outside the field.

> Wrote the clinic’s volunteer handbook for maintaining the booking pages, which two later volunteer teams used to add Spanish-language booking.

**Problem**
[Polish] “For maintaining the booking pages” is wordier than needed to describe the handbook’s purpose.

## Skills

> interveiws

**Problem**
[Error] “interveiws” is misspelled in the Methods skills line.

**Why**
The typo is visible in a skills section and can distract from the methods being listed. Correcting it keeps the résumé’s presentation clear.

**How to change it**
Replace “interveiws” with “interviews.”

## Already working

- s2:e0:b3: Provides a concrete signal that recommendations influenced what shipped.
- s2:e0:b4: Shows a reusable approach to building research capability beyond the candidate's own testing.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0989e082.md.

