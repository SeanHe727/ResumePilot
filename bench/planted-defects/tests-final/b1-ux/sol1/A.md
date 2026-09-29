> Here is my resume: bench/planted-defects/tests-final/b1-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 entries with bullets for content and wording; the whole-resume narrative and file format were also checked. Education has no bullets to review, and job-description matching was not run because no posting was provided.

The most important changes are:

1. **Resolve a possible duplicated achievement.** The Pinegrove and clinic-project entries both describe testing three onboarding prototypes with 24 new customers. Keep the study under the correct entry, or distinguish the studies if they were separate.
2. **Correct the accessibility claim.** The Pinegrove line says the design system met WCAG 2.1 AA by setting body-text contrast to at least 3:1. The content reviewer found that this does not establish the claimed compliance.
3. **Make the evidence and your contribution clearer.** Specify what the Northwind survey work involved and what care teams did with it; separate the telehealth study from the unrelated administrative tasks. Clarify the comparison behind the transit project’s timed-task results.

The PDF parses cleanly. The full findings and change plan are in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 81 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 14 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Education appears before the UX research experience and projects.

**Why**
After several years of research work, the roles are the stronger introduction to your qualifications. Opening with the degree delays that evidence.

**How to change it**
Move the Education section below Experience and Projects.

> Sep 2015 - May 2019

**Problem**
[Polish] The listed timeline has a 10-month gap between graduation and the first role.

> Mar 2022 - Jun 2025

**Problem**
[Polish] No paid role is listed after June 2025.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
1. [Polish] The 40% completion increase has no stated baseline or clear type of increase.
2. [Polish] The repeated “by” makes the action harder to read.

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] A 3:1 body-text contrast ratio does not establish WCAG 2.1 AA compliance.

**Why**
WCAG 2.1 AA generally requires 4.5:1 for normal-size body text; 3:1 applies to large text. Contrast alone also does not verify every applicable AA criterion, so the compliance claim overstates what the stated work establishes.

**How to change it**
Replace “Brought the design system to WCAG 2.1 AA by setting” with a claim that you raised body-text contrast to at least 3:1. Claim WCAG 2.1 AA compliance only if [normal body text met 4.5:1 and the other applicable criteria were verified]; changing “to” to “into compliance” alone would not correct the error.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
[Polish] The repository line shows that product managers used the clips but not what their use changed.

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
1. [Important] The shipped fixes are buried behind the presentation context.
2. [Polish] The quarterly findings have no stated research method.

**Why**
1. The line’s clearest evidence of influence arrives only after the semicolon. A scanning reader may register a presentation rather than the fact that recommendations shipped.

**How to change it**
1. Move “three of the top five recommended fixes shipped” to the start of the line, then give the presentation context.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort cannot validate the findability of the redesigned app navigation.
2. [Polish] The navigation line does not say what the study led you to learn or decide.

**Why**
1. In an open card sort, participants create groups and labels; they do not navigate the proposed design. The sort can inform its structure, but it cannot show whether customers could find items in the shipped navigation.

**How to change it**
1. Replace the validation claim with a statement that the open card sort with 30 customers informed the navigation’s grouping and labels. If findability was tested separately, name [the tree test or task-based usability test and its result].

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The onboarding result is buried after the research setup.

**Why**
The change from 41% to 58% is the line’s most immediately legible achievement. Putting it first helps a reader see the outcome before the prototype and participant details.

**How to change it**
Move “raised completed sign-ups from 41% to 58%” to the start of this bullet and follow it with the prototype-testing context. Move this bullet to the start of the Pinegrove entry.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] “Owned” names a responsibility without identifying the work you performed.
2. [Polish] The care teams’ use of the dashboard does not identify a resulting decision or workflow change.

**Why**
1. A UX research reader cannot tell whether you designed the survey, analyzed responses, built the dashboard or maintained either one. The duty therefore gives them little evidence of your particular research or reporting skill.

**How to change it**
1. Replace “Owned” with the specific action you performed, such as “analyzed” or “built,” if accurate.

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The appointment-reminder result should open the entry.

**Why**
The fall in missed appointments gives a reader a concrete reason to care about the interviews. Leaving this bullet below a duty-led opening makes that result less likely to be noticed first.

**How to change it**
Move this bullet above the monthly-survey bullet.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
1. [Error] The line incorrectly credits testing and unrelated duties with cutting support calls.
2. [Important] The list of other duties interrupts the connection between testing and its proposed result.
3. [Important] The testing phrase does not identify the joining-screen change it informed.
4. [Important] The support-call result is stranded at the end, where “which” has an ambiguous referent.

**Why**
1. Testing can uncover a joining problem, but does not itself change the screens patients encounter. Recruiting, style-guide, intern and note-taking duties do not explain that reduction either, so the claimed cause is unsupported.
2. A reader must pass through four separate tasks before reaching the support-call claim. The detour makes it harder to tell which work belongs to the waiting-room project.
3. The participant count shows the scale of testing, but not how its findings affected the experience of joining a visit. That missing link makes the research contribution harder to assess.
4. After the intervening duties, a scanning reader may miss the 30% figure or attach it to the wrong activity. Even if the result is substantiated, its position obscures what contributed to it.

**How to change it**
1. If [changes identified in the tests were shipped and support calls then fell], name those changes and retain the measured reduction. Otherwise, remove the claim that this work cut support calls.
2. Cut this list from the testing line; put any duties worth retaining in a separate bullet.
3. If accurate, add [specific joining-screen change informed by the tests] beside the testing phrase.
4. If the reduction is substantiated, move “cut support calls about joining a video visit by 30%” to the start of the bullet and then name the shipped change that contributed to it; remove “which.”

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
1. [Important] The stated design approach does not identify the map work you performed.
2. [Important] The claimed outcomes do not say what improved.
3. [Important] The abstract opening delays the entry’s clearest outcome.

**Why**
1. “Inclusive” and “human-centered” describe an intention rather than an accessibility decision. A reader cannot tell which map-design skill produced the work.
2. A reader cannot connect this summary to a benefit for someone finding a route. The measured route-finding result elsewhere in the entry makes the generic wording unnecessary.
3. A reader encounters a broad claim before the evidence that route-finding improved. Leading with the measured bullet would make the project’s contribution visible sooner.

**How to change it**
1. If accurate, replace that phrase with [one specific accessibility-oriented map change you made].
2. Cut those words; if the measured route-finding improvement resulted from this work, use that result instead.
3. Move the timed-tasks bullet above this bullet.

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
1. [Important] The route-finding figures do not identify the conditions being compared.
2. [Important] The measurement setup delays the route-finding result.
3. [Polish] The article before the session count is unnecessary.

**Why**
1. The reductions are clear, but a reader cannot tell whether they compare the original map with the redesign or some other test condition. Without that label, the result is harder to interpret.
2. The time and error reductions are stronger than the introductory statement that tasks were timed. Presenting them first lets the reader understand the outcome before the method.

**How to change it**
1. Add [what the 95-second and 11-error results represent] before the figures; use “original map” only if accurate.
2. Lead this bullet with the time and error reductions, then put “measured with timed tasks” afterward. Move the bullet to the start of the entry.

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
[Polish] The conjunction slows the transition to the agency invitation.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
1. [Important] The booking-flow line does not show which design change removed steps.
2. [Polish] The decline in phone bookings has no stated comparison period.

**Why**
1. The reduction from 9 steps to 4 establishes an outcome, but not the design decision behind it. One concrete change would help a reader see the UX work rather than only its result.

**How to change it**
1. If accurate, add [specific change that removed steps] after “booking flow,” keeping the step reduction prominent.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Polish] The six repaired issues have no stated post-fix booking outcome.
2. [Polish] “Hallway testing” may not convey the method clearly outside UX.

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
1. [Error] The onboarding study appears incorrectly attributed to the clinic project.
2. The 41% sign-up increase has no stated baseline.

**Why**
1. The Pinegrove entry also describes three prototypes, 24 new customers and a shipped sign-up improvement. Those matching details make one achievement appear under two different projects; the customer-onboarding terms also do not connect clearly to this clinic-booking entry.
2. If this is a separate clinic result, a reader cannot tell what completed sign-ups rose against. That makes the size of the claimed improvement difficult to assess.

**How to change it**
1. If this is the financial-app study, cut this bullet from the clinic entry. If the clinic ran a separate study, replace it with [clinic-specific participants, test, and result] and use booking terms consistently.
2. Only if this is a separate clinic study that belongs here, replace “by 41%” with “from [prior completion rate] to [new completion rate],” if those rates are available; otherwise clarify that the increase is relative and identify [comparison period].

## Already working

- s2:e1:b2: States a specific contribution and a well-anchored time saving compactly.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-357449b8.md.

