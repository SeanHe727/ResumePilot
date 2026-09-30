> Here is my resume: bench/planted-defects/tests-final/b1-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Coverage: content and wording reviewed all 4 bullet-based entries; narrative and format reviews completed. Education had no bullets to assess; job-description matching was not run because no posting was provided.

Most important changes identified:

1. **Resolve the duplicated achievement.** Pinegrove bullet `s2:e0:b5` and Community Clinic bullet `s3:e1:b2` describe essentially the same onboarding test and sign-up result but attribute it to different work. Keep it only under the correct entry or clarify the accurate distinctions.
2. **Correct the accessibility claim.** The Pinegrove statement that 3:1 body-text contrast brought the entire design system to WCAG 2.1 AA is not supported as written. Verify the threshold, scope, and validation method.
3. **Strengthen weak or mixed bullets.** Replace generic claims in the Accessible Transit opening with concrete work and evidence; separate Northwind’s telehealth result from the unrelated list of administrative duties.
4. **Improve ordering.** Lead with Experience rather than Education, and put the strongest measured outcomes first within each entry.

The file is one page, consistent, and parses cleanly for ATS use. The full findings and bullet-level review are available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 86 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 18 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> B.A. in Cognitive Science

**Problem**
[Important] Education leads the résumé even though five years of professional UX research should receive first-page priority.

**Why**
The degree establishes relevant foundations, but the Pinegrove and Northwind roles now provide stronger evidence of current capability. Leading with education delays the experience most likely to determine whether a recruiter continues reading.

**How to change it**
Move EXPERIENCE to the top, followed by PROJECTS and then EDUCATION. Place SKILLS last.

> Sep 2015 - May 2019

**Problem**
[Polish] The chronology leaves 10 months between graduation and the first listed role unexplained.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
1. [Important] The line describes the design intervention but not the UX research contribution that led to it.
2. [Important] The reported 40% improvement lacks starting and ending rates and a comparison period.
3. [Polish] The repeated construction “by 40% by splitting” is clunky.

**Why**
1. For a Senior UX Researcher, a reader needs to see how evidence identified the problem or supported the intervention. Without that connection, the achievement reads more like product-design ownership than research impact.
2. A reader cannot tell whether 40% is relative growth or a percentage-point increase. Without a time frame or baseline, the scale and credibility of the result are difficult to assess.

**How to change it**
1. Before the intervention, add “after [research method] identified [key user barrier],” if accurate.
2. Replace “by 40%” with “from [baseline completion rate] to [post-change completion rate] over [comparison period].”

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
[Error] The claim of WCAG 2.1 AA conformance is technically wrong and is not supported by the stated contrast adjustment or a documented system-wide assessment.

**Why**
WCAG 2.1 AA generally requires a contrast ratio of at least 4.5:1 for normal-sized text; 3:1 applies to large text and certain interface elements. Contrast alone also cannot establish conformance for an entire design system, so an accessibility-aware reader may distrust both the standard and the claimed scope.

**How to change it**
State the actual body-text ratio as [actual ratio; 4.5:1 or higher if compliant]. Claim design-system conformance only if a broader assessment supported it, adding “across [number or type of components], verified through [audit method or tool]”; otherwise replace the conformance claim with a precise statement that text contrast was improved.

> Built a research repository of 250 tagged session clips that product managers searched before writing new requirements.

**Problem**
[Important] The repository’s size is quantified, but its adoption and decision-making value are not.

**Why**
The 250 clips show how much content was collected, while “product managers searched” gives no indication of how many managers used it or how often. A reader therefore cannot tell whether the repository materially changed requirements or research reuse.

**How to change it**
Replace “product managers searched” with “[number or proportion of product managers] used before [number or proportion of requirements],” or name one concrete decision affected by the repository.

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Important] The strongest result appears after the presentation details.

**Why**
A scanning reader encounters audience and cadence before learning that recommendations shipped. Leading with the shipped fixes would make the line’s influence visible immediately.

**How to change it**
Move “three of the top five recommended fixes shipped in the next release cycle” to the opening, followed by the presentation context.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort cannot validate the redesigned navigation’s findability.
2. [Error] The phrase incorrectly makes the customers sound like the items being sorted.
3. [Important] The claimed validation gives neither the observed result nor the resulting navigation decision.

**Why**
1. Open card sorting reveals how participants group and label content; it does not test whether they can find items in a proposed navigation structure. Findability requires evidence from a method such as tree testing or task-based usability testing, so the current wording overstates what the study established.
2. In a card sort, customers are participants rather than the objects being organized. The current construction creates a distracting literal misreading.
3. The sample size indicates how much research occurred, not what participants demonstrated. Without a success measure or design decision, a reader cannot judge whether the study affected the navigation before launch.

**How to change it**
1. Say that the open card sort informed the navigation’s categories and labels. If tree testing or task-based usability testing was also conducted, name that method as the findability validation.
2. Replace “of 30 customers” with “involving 30 customers.”
3. Replace “Validated” with the specific result measured against [success criterion or prior design], then add [navigation or launch decision resulting from the study].

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
1. [Error] The onboarding study is attributed inconsistently because the same prototypes, participants, and sign-up outcome also appear under the Community Clinic Booking Redesign.
2. [Important] The line opens with broad responsibility framing and buries its strongest result.

**Why**
1. Both entries claim three onboarding prototypes with 24 new customers and a first-quarter improvement of about 41%, including the rise from 41% to 58%. Assigning what appears to be one study to two engagements creates a contradiction that can undermine confidence in the résumé’s other metrics.
2. “Led research” says little about the specific contribution, while the increase from 41% to 58% is the detail most likely to catch a recruiter’s attention. If this line belongs to Pinegrove, moving that result forward would also make the strongest bullet lead the entry.

**How to change it**
1. Keep this achievement only under the [correct engagement], with its accurate context and metrics. Remove it from the other entry, or revise both only if they were genuinely separate studies with distinct [participants, figures, and outcomes].
2. After resolving the duplicated attribution, move “raised completed sign-ups from 41% to 58%” to the opening and follow it with the prototype-testing details. Move this bullet to the first position in the entry if it remains here.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] The line states ownership and adoption but not what the survey and dashboard enabled or improved.
2. [Polish] “Owned” frames the work as a duty instead of naming the action performed.
3. [Polish] The dashboard description is unnecessarily wordy.

**Why**
1. A hiring manager can see the responsibility but cannot judge its value to care delivery or decision-making. Usage alone does not show what changed because of the findings.

**How to change it**
1. Replace “the care teams used” with what the teams used the findings to decide or change and, if available, [measured change compared with the prior reporting process].

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The entry’s strongest quantified patient outcome is not the opening bullet.

**Why**
The reduction in missed appointments from 14% to 9% shows clear research-to-product-to-outcome impact. Leading with it would establish the value of the Northwind work before the less developed survey responsibility.

**How to change it**
Move this bullet to the first position in the Northwind entry.

> Tested the telehealth waiting-room screens with 16 older patients while also running the team’s recruiting calendar, updating the style guide, onboarding two interns and taking notes for the accessibility working group, which cut support calls about joining a video visit by 30%.

**Problem**
1. [Error] The line wrongly credits research and unrelated operational duties with directly cutting support calls.
2. [Important] “Tested” does not identify the research method used.
3. [Important] The unrelated duty list separates the telehealth study from its result and makes the entry end like a task list.

**Why**
1. Testing can identify usability problems, but recruiting coordination, style-guide maintenance, intern onboarding, and note-taking do not themselves change the patient experience. Support calls could fall only after an intervention, such as revised waiting-room screens, was implemented.
2. For a UX research role, the study design is central evidence of skill. The verb could refer to anything from informal feedback to moderated task-based usability testing, preventing a reader from assessing the rigor of the work.
3. A scanning reader may miss the 30% result, and the long list obscures which work produced it. The final “which” can appear to refer to any or all of the preceding duties, making the causal relationship ambiguous.

**How to change it**
1. If changes were implemented, connect the result to them: “findings informed [implemented changes], after which support calls about joining a video visit fell 30%.” Otherwise, remove the call-reduction claim.
2. Replace “Tested” with the specific method, such as “conducted moderated task-based usability tests,” if accurate. Add [the key joining task or behavior evaluated] only if needed.
3. Cut the operational-duty list from this bullet and place the support-call result directly after the testing activity or the resulting implemented changes. Include any removed duty elsewhere only if it supports a separate result.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
1. [Important] The abstract design language does not identify what changed in the map or which accessibility need guided the work.
2. [Important] The claimed “meaningful, user-first outcomes” are vague and unsupported.

**Why**
1. A design hiring manager needs a concrete intervention to assess the candidate’s accessibility and wayfinding skill. Repeating broad ideas such as “inclusive,” “human-centered,” and “user-first” consumes space without revealing the work.
2. A reader cannot tell what became easier or better for users or what evidence supports the claim. The wording adds no useful information beyond the project description despite the next line containing measurable test results.

**How to change it**
1. Replace the abstract opening with “[map element redesigned] for [specific accessibility need],” if accurate. Retain only the most precise accessibility description.
2. Delete these words or replace them with [specific user behavior improved] compared with [prior design or baseline]. Use the existing timed-task result if it represents this work.

> Measured the redesign with timed tasks: median route-finding time fell from 95 to 62 seconds and errors from 11 to 3 across the 12 sessions.

**Problem**
1. [Important] The result does not label the compared conditions or define whether the error counts are totals or per-session values.
2. [Important] “The redesign” does not identify the map change evaluated by the timed tasks.
3. [Important] The project’s strongest measured result is not the opening bullet.
4. [Polish] The article before the session count is unnecessary.

**Why**
1. The figures are strong, but a reader cannot confidently determine what 95 versus 62 seconds represents or how 11 versus 3 errors was calculated. Missing labels slow interpretation and weaken an otherwise credible comparison.
2. The result demonstrates validation skill but does not reveal the design decision that produced it. One concrete intervention would connect the research evidence to the candidate’s accessibility or wayfinding work.
3. The timed-task comparison provides immediate evidence of user improvement, while the current first bullet is abstract. Moving this result first would establish credibility before describing the intervention and external recognition.

**How to change it**
1. Label 95 seconds and 11 errors as the [baseline condition] and 62 seconds and 3 errors as the [redesigned condition]. Specify whether the errors are totals or [errors per session].
2. Replace “the redesign” with [key accessibility or wayfinding change tested].
3. Move this bullet to the first position in the project.

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
1. [Polish] The external recognition omits the agency’s name and the review’s year.
2. [Polish] The invitation wording makes the project sound like an attendee.
3. [Polish] “Published” and “openly” redundantly express the same idea.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The line does not identify the design change that reduced the booking flow from nine steps to four.

**Why**
The result is clear, but the work that produced it remains hidden. One concrete decision would demonstrate UX problem-solving rather than presenting only the before-and-after count.

**How to change it**
After “booking flow,” add [the most important design change that eliminated steps], retaining only the intervention most responsible for the reduction.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Important] The claim that six blocking issues were fixed lacks a post-fix completion result.
2. [Polish] “Hallway testing” is jargon that may not be immediately understood.

**Why**
1. The participant and issue counts describe research activity, not whether first-time users could complete the revised flow. Without validation, “fixing” overstates what the testing demonstrated.

**How to change it**
1. Add [post-fix booking-completion result and comparison] after “six issues.” If no post-fix validation was performed, replace “fixing” with a more limited description such as “identifying” or “addressing,” if accurate.

> Tested three onboarding prototypes with 24 new customers and shipped the design that lifted completed sign-ups by 41% in its first quarter.

**Problem**
1. [Error] The onboarding bullet is attributed to the wrong entry or duplicates the same work claimed under Pinegrove Financial.
2. “Completed sign-ups” does not specify what users signed up for.
3. The 41% lift lacks a baseline and does not distinguish relative growth from percentage points.

**Why**
1. The first two bullets consistently describe clinic patients and booking, while this line abruptly switches to customers, onboarding, and sign-ups. Its three prototypes, 24 participants, and roughly 41% improvement also match the Pinegrove claim, so leaving it here makes the project internally inconsistent and the achievement unreliable.
2. Within a clinic-booking project, the phrase could refer to account creation, onboarding, or appointment booking. That ambiguity prevents a reader from understanding what behavior improved.
3. A reader cannot determine the starting and ending rates or accurately compare the result with other outcomes. The ambiguity is especially conspicuous because the Pinegrove version supplies rates that produce approximately the same relative increase.

**How to change it**
1. Remove this bullet if the study belongs to Pinegrove. If it was separate clinic work, replace it with the clinic project’s accurate [test, participant group, sample size, and measured outcome] and use booking terminology consistently.
2. If this line remains after its attribution is resolved, replace “completed sign-ups” with the accurate outcome, such as [account registrations, onboarding completions, or completed bookings].
3. If this line remains, replace “by 41%” with “from [baseline rate] to [post-change rate] over [comparison period].”

## Already working

- s2:e1:b2: Names the exact research artifacts created.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-406b1034.md.

