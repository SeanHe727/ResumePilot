> Here is my resume: bench/planted-defects/tests-final/b3-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s narrative and formatting. Education has no bullets to review. No job-description match was run because no posting was provided.

The main changes to consider:
- **Correct or clarify measurements:** Pinegrove’s SUS score of 104 is outside the standard scale, and the open card sort alone doesn’t establish that navigation findability was validated. In the transit-map project, 90 to 60 seconds is a 33% reduction, not 50%; 65% to 85% is a 20-percentage-point increase, not 20%.
- **Make outcomes easier to assess:** Specify what kind of telehealth test was run and the period used to measure the 30% reduction in support calls. For the transit map, name the task and context behind the results; the opening bullet’s “meaningful, user-first outcomes” is vague.
- **Improve scan order and cleanup:** The narrative review suggests moving Education below Experience and Projects. It also flags a 10-month gap after graduation, a misspelling of “interviews” in Skills, and the order of several bullets. The format review flags date of birth and nationality as personal details conventionally omitted.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 82 · wording 82 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 8 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997 | Nationality: Canadian

**Problem**
[Error] The résumé includes a date of birth and nationality that readers are not meant to weigh.

**Why**
These personal details do not help a reader assess your qualifications. Their presence can distract from the experience and skills the résumé is meant to foreground.

**How to change it**
Remove the date-of-birth and nationality details.

> B.A. in Cognitive Science

**Problem**
[Important] Education appears before experience and projects despite several years of relevant professional experience.

**Why**
A reader encounters the degree before the professional work that is more directly relevant to the role. That ordering delays the strongest evidence of your experience.

**How to change it**
Move the Education entry below Experience and Projects.

> May 2019

**Problem**
[Polish] The résumé shows a 10-month period with no study or work listed between May 2019 and April 2020.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
[Polish] The final clause is a lengthy, broad rationale that distracts from the session and panel details.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] “Synthesizing” is the wrong tense for this ended role and does not match the past-tense verb “cut.”
2. [Important] The long list of inputs and methods delays the 23% result.

**Why**
1. The role ended in June 2025, but the bullet starts with a present-tense participle. That tense mismatch makes the action sound ongoing and interrupts the otherwise clear past-tense result.
2. The reduction in repeat support calls is the clearest evidence of the work’s value, but it comes after a dense list. A scanning reader may miss the outcome before deciding whether to keep reading.

**How to change it**
1. Replace “Synthesizing” with “Synthesized” so the action is in the past tense and agrees with “cut.”
2. Move the result to the start of the line, then retain only the most telling research inputs or method that explains how you found the opportunity.

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
[Error] The reported SUS score of 104 is invalid: standard SUS scores run from 0 to 100.

**Why**
A reader familiar with the System Usability Scale will see that 104 falls outside its possible range. The stated increase from 68 to 104 therefore cannot be supported as a standard SUS result.

**How to change it**
Check the scoring and report the correct SUS score within 0–100; if 104 is from a different measure, name that measure instead.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort cannot by itself validate navigation findability.
2. [Important] The line claims findability validation without giving a card-sort finding or other evidence for it.

**Why**
1. An open card sort shows how participants group and label content; it does not test whether they can find items in a navigation structure. A reader may question the method-to-claim link unless a findability test was also conducted.
2. The reader can see that 30 customers took part, but not what they did or what result showed that the navigation was findable. Without that evidence, the validation claim is difficult to assess.

**How to change it**
1. If conducted, name a tree test or navigation usability test as the findability validation; otherwise say the open card sort informed the navigation’s content grouping or labels.
2. Add [the key card-sort finding or decision that demonstrated findability], replacing the general validation claim if that makes the evidence clearer.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The sign-up result is delayed behind the prototype-testing detail.

**Why**
The increase in completed sign-ups is the most direct evidence of impact, but a reader encounters the testing detail first. Leading with the result would make the line’s value easier to spot on a scan.

**How to change it**
Move the shipped-design result to the start of the line and place the prototype-testing detail after it.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The missed-appointment result is delayed behind the interview and reminder details.

**Why**
The fall from 14% to 9% is the clearest evidence of impact, but it appears at the end of the line. A reader scanning the experience may not reach the result before moving on.

**How to change it**
Move the missed-appointment result to the start of the line, then retain the interview and reminder details after it.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Polish] The line does not name the kind of test conducted or the period used to measure the call reduction.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
1. [Important] The broad design-language claim does not identify the work or a checkable user outcome.
2. [Polish] The line names a design philosophy rather than the design work performed.

**Why**
1. “Inclusive” and “human-centered” name an approach, but do not show what accessibility decisions or design actions shaped the map. “Meaningful, user-first outcomes” does not say what became easier or better, and has no evidence to support it.

**How to change it**
1. Replace the broad approach and outcome phrases with one specific design choice or action, such as [how an accessibility need shaped the map], and a concrete user-facing change or evidence, if available.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The reduction from 90 to 60 seconds is a 33.3% decrease, not a 50% improvement.
2. [Important] The strongest project result is not the opening bullet.
3. [Polish] The line does not say whose performance the median represents or what test produced the times.

**Why**
1. The time fell by 30 seconds from a starting point of 90 seconds, which is a 33.3% reduction. Calling it a 50% improvement misstates what happened to route-finding time.
2. The route-finding result is more concrete and compelling than the broad opening claim about design approach and outcomes. Leading with it would make the project’s impact easier for a scanning reader to notice.

**How to change it**
1. Replace “a 50% improvement” with “a 33.3% reduction in median route-finding time.”
2. Move this route-finding result ahead of the current opening bullet.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The change from 65% to 85% is 20 percentage points, not a 20% relative increase.
2. [Important] The line does not specify the task participants completed or what counted as success.
3. [Polish] The audio landmarks and high-contrast colors repeat the method stated in the preceding bullet.

**Why**
1. The increase is 20 percentage points; relative to the starting 65%, it is about 30.8%. The current wording misstates the measurement shown by the figures.
2. The figures show a change, but do not define what participants were trying to do or how task success was judged. Without that context, a reader cannot tell what the result demonstrates.

**How to change it**
1. Change “by 20%” to “by 20 percentage points,” retaining the 65% and 85% figures.
2. Clarify the task or success criterion with [the task participants completed or what counted as success], if accurate.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
1. [Polish] The phone-booking decline has no stated comparison period.
2. [Polish] “The steps to book” is redundant with “booking flow.”

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Polish] The clause about six issues makes the outcome harder to scan than a compact statement of what was fixed.

> Wrote the clinic’s volunteer handbook for maintaining the booking pages, which two later volunteer teams used to add Spanish-language booking.

**Problem**
[Polish] The handbook’s later use is buried in a lengthy trailing clause.

## Skills

> interveiws

**Problem**
[Error] “interveiws” is misspelled in the Skills, Methods line.

**Why**
The typo is immediately visible to a reader scanning the skills section. It can distract from the methods listed and gives the résumé a preventable polish issue.

**How to change it**
Correct “interveiws” to “interviews.”

## Already working

- s2:e1:b0: Clearly connects survey and dashboard work to a concrete reduction in time to publish findings.
- s2:e1:b2: Shows reusable research infrastructure work and quantifies its effect on study setup.
- s2:e0:b0: Pairs a concrete design intervention with a quantified outcome and test context.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-74cfebcc.md.

