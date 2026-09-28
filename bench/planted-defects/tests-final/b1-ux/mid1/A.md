> Here is my resume: bench/planted-defects/tests-final/b1-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s narrative and format; education has no bullets to review. I didn’t compare it with a job posting.

The main changes to address:
- **Fix the Accessible Transit Map entry’s focus:** one bullet appears to describe customer onboarding and sign-ups, not the transit-map project.
- **Check the accessibility claim:** the Pinegrove bullet says body-text contrast of “at least 3:1” meets WCAG 2.1 AA; the content review flagged that threshold.
- **Clarify results and actions:** several percentage changes lack a baseline or comparison, and some bullets describe responsibilities or general outcomes without saying what changed.

The narrative review also suggested moving Education below Experience and noted the 10-month gap between May 2019 and April 2020. The file parses cleanly as a one-page resume. See `/report --full` for the detailed findings.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 79 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

2 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Education appears before experience despite several years of relevant work.

**Why**
The degree leads the résumé before the roles that establish the candidate’s career direction. Readers may reach the experience section later than needed to understand the candidate’s professional background.

**How to change it**
Move the Education entry below the Experience entries.

> May 2019; Apr 2020

**Problem**
[Polish] The résumé leaves a 10-month gap between the degree and the first listed role unexplained.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Polish] The 40% increase has no starting rate or stated calculation basis.

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] A 3:1 contrast ratio does not meet WCAG 2.1 AA for normal body text.

**Why**
WCAG 2.1 AA requires at least 4.5:1 contrast for normal text; 3:1 applies to large text. As written, the claim that this brought the design system to AA is incorrect.

**How to change it**
Replace “3:1” with “4.5:1” for normal body text; retain 3:1 only for large text.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
1. [Important] The repository’s use is described, but not what that use changed.
2. [Polish] The long relative clause delays the repository’s practical value.

**Why**
1. Readers can see that product managers searched the clips before writing requirements, but cannot tell whether the repository informed a decision or improved the requirements. Without a concrete consequence, its practical value is difficult to judge.

**How to change it**
1. After this phrase, add [one observed decision or outcome the repository informed, if available].

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] The shipped fixes appear after the presentation details, so the result is easy to miss.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort does not validate whether users can find items in a proposed navigation.
2. [Important] The claimed findability validation gives no finding or resulting decision.
3. [Polish] “Findability” is jargon that may slow readers outside UX research.
4. [Polish] “Before it shipped” adds an unnecessary ending.

**Why**
1. An open card sort shows how participants group and label content; it does not test whether they can find items in the redesigned navigation. Calling it a validation credits the method with a result it cannot establish.
2. Readers can see that a study took place, but not whether customers found what they needed or how the research informed the navigation. That missing result makes the validation claim hard to assess.

**How to change it**
1. If you ran a task-based tree test or usability study, name that method; otherwise, describe the card sort as exploring how customers group or label the content.
2. After the study result, add [the key finding or navigation decision it informed, if available].

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The sign-up result is buried after the research details, and “The shipped design” makes the result less direct.

**Why**
The line opens with the research and puts the measurable change at the end, where a scanning reader may miss it. The phrase “The shipped design” also delays the result by referring back to the onboarding work instead of stating the outcome directly.

**How to change it**
Move “raised completed sign-ups from 41% to 58%” to the start of the bullet, and cut “The shipped design.”

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] The survey and dashboard are presented as responsibilities without showing a concrete action or approach.
2. [Important] The line names care-team users but not what the survey or dashboard helped them do.

**Why**
1. “Owned” signals assigned responsibility, but readers cannot tell what you did to run the work or how you carried it out. As a result, the line reads like a routine duty rather than evidence of research skill.
2. Readers can see that care teams used the work, but cannot tell whether it informed a decision or action. Without that consequence, the value to care teams or patients remains unclear.

**How to change it**
1. Replace “Owned” with [the action you took], and add [one survey or reporting approach that shows your contribution, if useful].
2. Replace “the care teams used” with [the decision or action the survey or dashboard informed].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The appointment-reminder outcome appears after the interview detail rather than leading the bullet.

**Why**
The missed-appointment reduction and the resulting two-way reminder are the line’s clearest impact, but readers encounter them only after the interview setup. Leading with the outcome would make the result easier to notice.

**How to change it**
Move the two-way reminder and missed-appointment result to the start of the bullet, before the interview detail.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
1. [Important] The duty list interrupts the testing-and-result story, and the 30% outcome is buried at the end.
2. [Polish] The testing detail does not say what patients were asked to do or what the test revealed.
3. [Polish] The 30% support-call reduction has no comparison period or baseline.

**Why**
1. The recruiting, style-guide, intern, and working-group duties break up the link between testing and the support-call result. Readers scanning the long line may miss the 30% reduction; this also makes the result feel disconnected from the patient-testing story.

**How to change it**
1. Move the 30% result next to the testing detail and move the unrelated duties to another bullet or remove them.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
[Important] The opening relies on broad claims instead of naming a design practice or a concrete outcome.

**Why**
“Inclusive” and “human-centered” do not show what you actually did, while “meaningful, user-first outcomes” does not say what changed for riders. Readers cannot judge the accessibility work or its user-facing value from these labels.

**How to change it**
Replace the general design labels with [one specific accessibility practice or design decision], and replace the outcome phrase with [the specific change for riders and what improved].

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
[Important] The strongest result is not at the start of the bullet.

**Why**
The timed-task results and reductions in both time and errors are the clearest evidence of impact. Starting with the measurement setup makes a scanning reader wait for that evidence.

**How to change it**
Move the timed-task results to the start of the bullet, before “Measured the redesign with timed tasks.”

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
[Polish] “Openly” repeats what publishing the files and protocol already conveys.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Polish] The booking-flow result lacks a specific design change and a comparison basis for the phone-booking drop.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
[Important] The six fixes are described without saying whether booking completion improved afterward.

**Why**
Readers can see what the testing uncovered, but cannot tell whether the fixes changed the user outcome. A completion result would show the value of the work beyond the issues addressed.

**How to change it**
If measured, add [whether first-time booking completion improved after the fixes, and by how much].

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
The sign-up increase lacks a baseline or comparison, and “new customers” conflicts with the clinic-patient group named above.

**Why**
Without a baseline or comparison, readers cannot tell how the 41% lift was calculated. The change from “clinic patients” to “new customers” also makes the project’s participant group sound inconsistent.

**How to change it**
Add [the baseline or comparison used for the 41% lift]. If these participants were clinic patients, replace “new customers” with “clinic patients.”

> onboarding prototypes

**Problem**
[Important] The onboarding and sign-up bullet breaks the entry’s focus on clinic booking.

**Why**
The other bullets describe a clinic booking redesign and testing with clinic patients, while this one describes customer onboarding and sign-ups. A reader may question whether it belongs to this project and lose the thread of the entry.

**How to change it**
Move this bullet to the project it describes; if it does not belong to this project, remove it.

## Already working

- s2:e1:b2: Names the concrete research materials you created.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ceaa3aa3.md.

