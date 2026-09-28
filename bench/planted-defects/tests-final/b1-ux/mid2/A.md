> Here is my resume: bench/planted-defects/tests-final/b1-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording reviews covered all 4 entries with bullets; narrative and format reviews are complete. JD matching was not run because no job posting was provided.

The main changes to address:
- Clarify the basis for percentage claims, including whether changes are relative or percentage-point changes, and add before-and-after figures where available.
- Check the WCAG claim: the stated 3:1 body-text contrast does not establish that the design system meets WCAG 2.1 AA.
- Resolve the possible overlap between the clinic project’s sign-up claim and the Pinegrove onboarding result; explain the connection or remove the claim. Also tighten the Northwind bullet that combines several duties with a result.
- Reorder the resume so Experience and Projects appear before Education.

The file parses cleanly for ATS, with no layout warnings. The full report is in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 80 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 7 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeshore University

**Problem**
[Polish] Education appears before Experience and Projects, so the résumé does not lead with the candidate’s current work and relevant projects.

> May 2015 - May 2019; Apr 2020 - Feb 2022

**Problem**
[Polish] The résumé leaves a 10-month gap between the degree’s end in May 2019 and the first listed role in April 2020.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
1. [Important] The 40% completion improvement lacks a baseline and does not say whether it is a relative change or a percentage-point change.
2. [Polish] “Short steps” is subjective and adds little beyond saying the form was split into three steps.

**Why**
1. A reader cannot tell how the 40% was calculated or judge the size of the improvement. That makes the strongest part of this outcome harder to evaluate.

**How to change it**
1. Replace “by 40%” with [the starting and ending completion rates, or the percentage-point change, and the measurement period].

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
1. [Error] The bullet claims WCAG 2.1 AA conformance without establishing it, and 3:1 contrast is below the 4.5:1 requirement for ordinary-sized text.
2. [Polish] The concrete contrast change comes after the broad result claim.

**Why**
1. A 3:1 contrast ratio meets the text-contrast threshold only for large text; ordinary-sized text requires at least 4.5:1. Contrast alone also cannot establish that a design system meets WCAG 2.1 AA overall, so the current claim overstates what the stated change demonstrates.

**How to change it**
1. If only contrast was assessed, replace the conformance claim with the specific contrast change, and say the text qualifies as large only if accurate. Claim WCAG 2.1 AA conformance only if the applicable criteria were assessed and met, including 4.5:1 contrast for ordinary-sized text.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
[Polish] The repository’s use is stated, but its value to product managers’ work is not.

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] The adoption result comes after the audience detail, delaying the line’s clearest outcome.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort does not validate navigation findability, and the bullet does not say what the sort showed.
2. [Polish] The timing phrase is longer than necessary.

**Why**
1. An open card sort can inform how users group and label content, but it does not test whether users can find specific items in a redesigned navigation. The participant count shows the study’s scale, not what it established or how it informed the design.

**How to change it**
1. If the card sort informed the navigation structure, describe that and add [what customers grouped or found, and how it informed the navigation]. Claim findability validation only if users completed task-based findability testing in the redesigned navigation; if so, name that test.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Polish] The quantified sign-up result is buried after the research details instead of opening the strongest line.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
[Important] The survey and dashboard are presented as responsibilities, without a specific action or evidence of impact.

**Why**
A reader can see what was maintained and who used it, but not why it mattered to care teams or patients. Without a concrete outcome, the value of this work is hard to assess.

**How to change it**
Replace “Owned” with [the specific action you took with the survey and dashboard], and add [the clearest result or checkable example of how they changed care-team decisions or workflow], if available.

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Polish] The strongest line in the entry—the patient interviews and their link to fewer missed appointments—does not open it.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
[Important] The support-call reduction is buried after a long list of duties, leaving its connection to the screen testing unclear.

**Why**
A reader may miss the 30% result or be unsure which work produced it. The recruiting, style-guide, intern, and working-group duties interrupt the connection between the screen testing and the outcome, making the main accomplishment harder to understand.

**How to change it**
Move the support-call result directly after the screen-testing work, and add [how the testing informed a change to the screens] only if accurate. Cut or shorten the intervening duties if they do not explain that result.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
1. [Important] The line uses broad language about the design approach without saying what you did.
2. [Important] The line claims meaningful outcomes without identifying an outcome.

**Why**
1. A design reader gets little evidence of a specific skill or decision from “championed” an approach. The phrase does not show how the work put that approach into practice.
2. A reader cannot tell what improved for people using the map, so the claim does not show the project’s value. The measured route-finding and error reductions in the next bullet may be the clearest outcome to foreground.

**How to change it**
1. Replace the broad phrase with [one specific accessibility design decision or user-research technique], if accurate.
2. Replace those words with [a specific change users experienced], or cut them and foreground the measured result in the next bullet.

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
[Polish] The measured result follows the method instead of leading the strongest project line.

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
[Polish] “Openly” adds little, and the conjunction makes the agency invitation feel tacked on rather than a clear result.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The project outcome is given without the period it is compared with, and the flow redesign does not show what design change produced the result.

**Why**
A reader cannot tell what baseline the decline in phone bookings uses, which makes its size harder to interpret. The booking results are compelling, but without a concrete design decision, the UX skill behind them is difficult to picture.

**How to change it**
If accurate, add [the comparison period, such as the prior two months]. Add [the most consequential flow or interface change] if there is room and it is accurate.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Important] The line says six booking blockers were fixed but does not say whether completion improved afterward.

**Why**
A reader can see that issues were found and addressed, but not whether the fixes changed booking success. A measured post-fix result would provide the clearest evidence of their effect.

**How to change it**
If measured, add [the change in first-time booking completion after the fixes, compared with before].

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
1. [Error] The prototype and sign-up claim duplicates the Pinegrove onboarding claim, with no stated connection to this clinic project.
2. The stated 41% sign-up lift does not identify its comparison or whether it is relative or in percentage points.
3. The line does not say how the prototypes were tested or whether “new customers” means clinic patients.

**Why**
1. The same prototype count and sample size appear in the Pinegrove claim, which reports sign-ups rising from 41% to 58%. The 41% increase is consistent with those figures as a relative increase, so attributing it to a separate clinic project makes the result’s source inconsistent.
2. A reader cannot interpret the size of the lift from the percentage alone. That ambiguity remains even apart from the duplicate attribution, if this was a separate result.
3. The preceding bullet names clinic patients, while this one uses a different audience term; a reader cannot tell whether they describe the same people. The prototype count and sample size also do not establish the test approach or participant selection basis.

**How to change it**
1. Remove this claim unless the clinic project had a separate study and production result; if it did, replace it with that project’s verified details.
2. If this was a separate, verified clinic result, replace “by 41%” with [the comparison period and whether the change was relative or in percentage points].
3. If this was a separate clinic study, use “clinic patients” only if accurate and add [the test approach and participant selection basis].

## Already working

- s2:e1:b2: Connects specific research materials to a useful process improvement.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8bc26165.md.

