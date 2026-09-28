> Here is my resume: bench/planted-defects/tests-final/b3-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and ATS formatting. No job-description match was run because no posting was provided.

The main changes to address:
- Check the Pinegrove SUS score of **104**; the review flags that it exceeds the scale’s maximum.
- Correct the project metrics: the route-finding change from 90 to 60 seconds is not a 50% reduction, and task success from 65% to 85% is not a 20% increase.
- Rework bullets that describe research coverage or methods without stating what changed as a result. Also verify the 30% support-call reduction’s baseline or comparison period.

The review also flags personal details to remove, a typo in Skills, and Education placement and timeline questions. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 81 · wording 82 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 12 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997

**Problem**
[Error] The file includes personal details that are conventionally left off a résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate’s qualifications. Including them takes space from relevant information and draws attention to details unrelated to the role.

**How to change it**
Remove “Date of birth: 3 Mar 1997” and “Nationality: Canadian” from the file.

> B.A. in Cognitive Science

**Problem**
[Important] Education appears before the established UX research experience.

**Why**
The reader reaches the degree before the roles that demonstrate the candidate’s UX research experience. Moving Education below Experience would let that experience lead the document.

**How to change it**
Move the Education section below Experience.

> May 2019

**Problem**
[Polish] The timeline leaves 10 months unaccounted for between the degree and the first listed UX research role.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
1. [Important] The release-coverage clause gives no research finding or decision resulting from the sessions.
2. [Polish] The release-coverage clause is wordy and adds little beyond the sessions and customer panel.

**Why**
1. The cadence and recruiting panel show the scope of the research, but not how it informed a release or improved the product. Without a concrete decision, a hiring reader cannot assess the value of that work.

**How to change it**
1. Replace or follow the clause with [one release decision or design change informed by the sessions]. Keep the session count only if it supports that example.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
[Important] The result is buried after several research sources and methods.

**Why**
A scanning reader may move on before reaching the 23% reduction. That reduction is the line’s clearest evidence of value, but the extensive setup makes it less visible.

**How to change it**
Move “cut repeat support calls about statements by 23%” to the start. Cut “journey mapping” or the “tagged clip library,” keeping only the one or two research details that best explain how you found the issue.

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
1. [Error] The reported SUS score of 104 exceeds the standard scale’s 100-point maximum.
2. [Polish] The phrase “moderated testing” is redundant after the line has stated the testing context.

**Why**
1. Standard SUS scores range from 0 to 100, so 104 cannot be a standard SUS score. That also makes the reported increase from 68 impossible on that scale, which could lead a reader to question the measurement.

**How to change it**
1. Replace 104 with [the verified post-test score]. If the measure used a nonstandard transformation, name it instead of calling the result a standard SUS score.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort does not directly test findability in the redesigned navigation.
2. [Important] The card-sort claim gives no finding or design decision that resulted from the research.
3. [Polish] The phrase “before it shipped” adds timing detail that does not clarify the card-sort result.

**Why**
1. An open card sort shows how participants group and label content, which can inform information architecture. It does not establish that users can find items in a specific navigation design, so the claim overstates what this method validates.
2. The reader cannot tell what the 30 customers’ input established or why it mattered to the navigation. The participant count shows the study’s reach, but not what changed or what the research demonstrated.

**How to change it**
1. Replace the claim that the card sort validated findability with a statement that it informed [the navigation’s categories or labels], if accurate. If you tested findability in the redesigned navigation, name that test instead.
2. Add [the key card-sort finding or navigation decision it informed], such as a category pattern or a change made, if accurate.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The strongest result comes after the research setup instead of opening the bullet.

**Why**
A reader scanning the line encounters the research lead-in before the completed sign-up improvement. Putting the 41% to 58% result first would make the line’s clearest evidence of impact easier to notice.

**How to change it**
Move “the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch” to the beginning, leaving the prototype and participant details after it.

## Northwind Health | UX Research Associate | Metro City, USA | Apr 2020 - Feb 2022

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] The strongest result comes after the interview setup instead of opening the bullet.

**Why**
A scanning reader encounters the interview count before the appointment improvement. Leading with the reduction in missed appointments would make the clearest evidence of impact easier to notice.

**How to change it**
Move “the findings led to a two-way text reminder that cut missed appointments from 14% to 9%” to the beginning, leaving the interview detail after it.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Important] The 30% reduction lacks a comparison period or baseline.

**Why**
Without that context, a reader cannot tell what the percentage is measured against or how to interpret the size of the change. The impact claim is therefore harder to assess.

**How to change it**
Add [the comparison period] and clarify whether the reduction is against a comparable pre-revision period, if accurate.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Championed an inclusive, human-centered design approach to transit wayfinding that delivered meaningful, user-first outcomes.

**Problem**
1. [Important] The approach is described broadly rather than through a specific design action.
2. [Important] The claim of meaningful outcomes does not say what changed for users or provide evidence of the result.

**Why**
1. The phrase does not let a reader picture a concrete design decision or skill. Naming an accessibility choice and the user need it addressed would make the work easier to assess.
2. A reader cannot tell what value the project created from a general claim of meaningful results. A specific user outcome, supported by a measure, would make the contribution easier to assess.

**How to change it**
1. Replace the broad phrase with [one specific design choice] and, if needed, [the user need it addressed].
2. Replace the phrase with [the specific user outcome] and, if available, [the measure and comparison that demonstrate it].

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The stated 50% improvement is wrong for the reduction from 90 to 60 seconds.
2. [Important] The line already opens with the route-finding result, so the suggested reordering does not apply.

**Why**
1. The time fell by 30 seconds from a 90-second baseline, which is a 33.3% reduction. A 50% figure describes the increase in speed, not the reduction in time claimed here.
2. The bullet begins with “Cut median route-finding time,” followed immediately by the before-and-after times. A reader sees the outcome first, so moving that result to the opening would not change the line’s order.

**How to change it**
1. Replace “a 50% improvement” with “a 33.3% reduction in median route-finding time.” If referring to speed instead, say “50% faster.”
2. Keep the result at the start; no reordering is needed.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The stated 20% increase misstates the change from 65% to 85%.
2. [Polish] The repeated method uses space without describing a distinct contribution.

**Why**
1. Those figures show an increase of 20 percentage points. Relative to the original 65%, the increase is about 30.8%, not 20%, so the current wording gives readers the wrong measure of change.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points,” keeping the stated figures from 65% to 85%.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The redesign claim does not say what design change you made.

**Why**
The line gives a booking-step reduction and a change in phone bookings, but a reader cannot picture the UX decision behind them. One concrete design choice would make the work and skill easier to assess.

**How to change it**
After “booking flow,” add [the key flow change you made], keeping it to one short detail.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Error] The claim that the issues stopped first-time users generally from completing bookings overstates what the described testing establishes.
2. [Important] The line identifies the issues fixed but gives no resulting change in booking completion.

**Why**
1. Two rounds of hallway testing with 10 patients can reveal issues observed among those participants. By itself, it does not establish that first-time users more broadly were prevented from completing bookings.
2. A reader cannot tell whether the fixes improved successful bookings or how much they helped. A post-fix completion result compared with the earlier test would anchor the impact.

**How to change it**
1. If testing showed the issues blocked participants, change the claim to “fixed six issues that prevented participants from completing a booking.” Otherwise, soften it to describe the issues observed in testing.
2. If measured, add [first-time booking completion after the fixes, compared with the earlier test]. Otherwise, keep the issue count as evidence of what testing uncovered.

## Skills

> interveiws

**Problem**
[Error] The Skills, Methods line misspells “interviews.”

**Why**
The typo is visible in a skills line and may distract a reader from the methods listed there. Correct spelling keeps the document polished and avoids making the candidate’s attention to detail a question.

**How to change it**
Replace “interveiws” with “interviews.”

## Already working

- s2:e0:b0: Connects a specific form change to a quantified outcome.
- s2:e1:b0: Gives a clear before-and-after turnaround time.
- s3:e1:b2: Connects documentation to a specific service addition: Spanish-language booking.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-05621e11.md.

