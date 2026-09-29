> Here is my resume: bench/planted-defects/tests-final/b1-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 entries with bullets, plus the education entry, overall narrative, wording, content, and ATS formatting. The PDF parses cleanly as a one-page, 477-word resume with no layout warnings.

The most important changes are:

1. **Resolve duplicated or conflicting accomplishments**
   - Pinegrove and the Community Clinic project both describe testing three onboarding prototypes with 24 people and a sign-up increase.
   - Clarify whether these are separate projects. If not, remove one version. The reported outcomes—58% versus 41%—also need reconciliation.

2. **Correct the accessibility claim**
   - The claim that body-text contrast of **3:1** establishes **WCAG 2.1 AA** is technically inconsistent for ordinary body text. Verify the standard and threshold before retaining it.

3. **Add outcomes to task-only bullets**
   - The Northwind bullet about owning the survey and dashboard describes responsibility but not its effect.
   - The Pinegrove open-card-sort bullet gives the method and sample size but not the finding or resulting product decision.

4. **Separate overloaded bullets**
   - The Northwind telehealth bullet combines testing, recruiting operations, style-guide work, intern onboarding, accessibility work, and a 30% reduction in support calls. The research result is obscured and its causal connection is unclear.

5. **Reorder the resume**
   - Place **Experience** before **Education**.
   - Consider placing **Projects** before Education as well.
   - The resume currently leaves May 2019–April 2020 unexplained.

6. **Strengthen vague project language**
   - The Accessible Transit Map opening bullet describes an approach but not a concrete action or result.
   - Clarify what the transit agency did with or concluded about the project after inviting it to the accessibility review.

7. **Clarify figures**
   - Define whether the 40% dispute-form improvement is relative or percentage-point change.
   - Explain what the “11 to 3 errors” represent.
   - Add comparison periods or baselines where available.

The complete specialist report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 5 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeshore University

**Problem**
[Important] Education appears before the professional experience even though the résumé shows roughly five years of UX work.

**Why**
The current ordering makes the degree establish the candidate's identity before the more relevant Senior UX Researcher and UX Research Associate experience. A recruiter should see the professional direction and strongest evidence before the older education entry.

**How to change it**
Move the education section below Experience and likely below Projects as well.

> May 2019

**Problem**
[Important] The résumé has an unaccounted-for 10-month period from May 2019 to April 2020.

**Why**
A reader may notice that the education entry ends in May 2019 while the first role begins in April 2020. Without context, the gap can prompt questions about what happened during that period and distract from the otherwise clear career progression.

**How to change it**
Add [the study, work, caregiving, travel or other relevant activity] covering the gap, or leave it unaddressed only if there is no relevant context to include.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Polish] The 40% improvement lacks a baseline and does not say whether it is a relative increase or a percentage-point increase.

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] The stated 3:1 contrast ratio is incorrect for ordinary body text, and the line overstates what was established as WCAG 2.1 AA compliance.

**Why**
WCAG 2.1 AA generally requires at least a 4.5:1 contrast ratio for normal-sized text; 3:1 applies to large text or another applicable exception. The line also describes only body-text contrast, so “Brought the design system to WCAG 2.1 AA” can be read as full-standard compliance without evidence of the rest of the audit.

**How to change it**
If accurate, replace “at least 3:1” with “at least 4.5:1” for ordinary body text. Add [audit scope or criteria covered] if the full standard was audited; otherwise narrow the opening claim to the body-text contrast improvement and replace “Brought ... to” with wording that clearly states what met the standard.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
[Polish] The repository's 250 clips show its size but not how widely or regularly product managers used it.

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] The strongest evidence that three of the five recommended fixes shipped is buried after the audience and process clause.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
[Error] An open card sort cannot by itself validate navigation findability, and the bullet gives neither the card-sort result nor the navigation decision it produced.

**Why**
An open card sort evaluates how participants group and label content, whereas findability requires a tree test or task-based usability test of the proposed navigation. Without a finding or resulting change, the bullet shows that research happened but not whether it supported or improved the navigation before launch.

**How to change it**
If such a test was run, replace “open card sort” with “tree test” or “task-based usability test” and add [the key finding and navigation decision or change]. If only the card sort was run, change the claim to say it informed the navigation's information architecture and add [the most telling card-sort result]. Replace “before it shipped” with “before the redesigned navigation launched.”

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Error] The mobile-onboarding result is presented with the same prototype count, participant count and sign-up outcome as the Community Clinic project, making the two achievements appear duplicated and inconsistent.

**Why**
A reader sees “three prototypes,” “24 new customers” and a shipped sign-up result in both entries, but the outcomes are expressed differently: 41% to 58% here and a 41% lift in the clinic project. That makes the résumé look as if one achievement was assigned to two projects rather than demonstrating separate work.

**How to change it**
Keep this result only in the correct entry, or distinguish the products, participants, prototypes and outcomes with [the accurate project-specific details]. If this is the same study as the clinic result, use one consistent sign-up figure. Lead with the result by moving “the shipped design raised completed sign-ups from 41% to 58%” before the research scope.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
[Important] The survey and dashboard bullet does not show what improved, how widely the dashboard was used, or what “Owned” specifically involved.

**Why**
A hiring reader can see responsibility for the survey and dashboard but cannot tell whether the work changed decisions, workflows or patient outcomes. “Owned” could mean designed, administered, analyzed or maintained, while “the care teams used” does not distinguish a routinely relied-on tool from a report that was merely available.

**How to change it**
Replace “Owned” with the accurate responsibility—such as [designed, administered, analyzed or maintained]—and name the dashboard's purpose instead of “the care teams used.” Add [number of teams, users, reporting cycles, decisions supported, or direct result].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Polish] The appointment-reminder result is stronger than the opening activity and should lead the bullet.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
[Error] The bullet does not establish that the listed research and responsibilities caused the 30% reduction in support calls, and it combines too many unrelated duties before the result.

**Why**
Testing screens with 16 older patients can reveal usability problems but cannot by itself prove a reduction in support calls, especially when recruiting, style-guide, onboarding and accessibility duties are also listed. The long sequence makes the main research contribution and its outcome difficult to identify.

**How to change it**
If pre/post or controlled support-call data were collected, state that measurement and comparison; otherwise remove the causal reduction claim and report the usability findings separately. Keep the screen-testing method and its result together, and move or cut the secondary responsibilities; remove “while also” and “the team’s.”

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
[Polish] The opening bullet describes a design philosophy and vague value rather than a concrete action, project change or measurable outcome.

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
[Polish] The bullet does not identify the timed task or what the error counts represent, and its strongest results are buried after the method.

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
[Polish] The transit-agency invitation does not say what concrete engagement occurred, and “published ... openly” is redundant.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The booking-flow bullet does not say how the flow was redesigned, and the quarter reduction in phone bookings lacks a comparison period or group.

**Why**
The step reduction shows an outcome but not the UX work that produced it, so the reader cannot see the skill behind the redesign. The phone-booking result is also difficult to interpret without knowing whether it is compared with the preceding two months, a pre-redesign average or another baseline.

**How to change it**
Add the single most telling design action, such as [mapped the existing flow], [prototyped the booking flow] or [simplified the form], if accurate. Add the accurate comparison reference after “quarter,” such as [versus the prior two-month period] or [versus the pre-redesign average].

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Important] The six fixes establish the scope of the testing but do not show whether first-time booking completion improved.

**Why**
A hiring reader can see that obstacles were identified and corrected but cannot tell whether users subsequently completed bookings more successfully. Without a completion result, the bullet demonstrates activity rather than the effect of the fixes.

**How to change it**
Replace or extend the fix result with [the change in first-time booking completion] compared with [the relevant baseline or test round], if that evidence exists.

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
[Error] This bullet duplicates the Pinegrove onboarding result, gives an incompatible sign-up figure, and calls the participants “customers” despite the preceding clinic-patient description.

**Why**
The same three-prototype test with 24 participants appears in both entries, but this line reports a 41% lift while Pinegrove reports a change from 41% to 58%. A reader is likely to see duplicated work presented under two projects, and “customers” makes the target population appear inconsistent with the clinic context.

**How to change it**
Retain the result only in the correct entry, or replace it with [the clinic project's verified prototype, participant and outcome figures]. If these are separate studies, distinguish the products, participants, prototypes and outcomes; if they are the same study, use one consistent sign-up figure. If these were clinic participants, replace “customers” with “patients.”

## Skills

> A/B testing

**Problem**
[Polish] A/B testing is listed under Methods without any experience or project entry showing that the candidate ran an A/B experiment.

## Already working

- s2:e1:b2: Shows direct ownership of a reusable research infrastructure improvement.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-4d8174cb.md.

