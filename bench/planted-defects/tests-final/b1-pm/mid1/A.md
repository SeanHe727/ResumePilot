> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 experience/project entries for content and wording, plus the full resume for narrative and formatting. Education has no bullets to review. No job description was provided, so I didn’t assess role match.

The main changes to address:
- Resolve the **merchant-onboarding achievement listed under both Harbor Payments and the hospital practicum**. The practicum is described as hospital scheduling work, so that bullet appears out of place.
- Clarify the **11% to 7% late-delivery figure**: the bullet attributes the reduction to excluding weather-delayed shipments from the calculation, which doesn’t establish that deliveries improved.
- Clarify whether the **35% checkout-conversion increase** is relative or percentage-point change, and what it was compared with.
- Strengthen the hospital practicum bullets with outcomes where you have them; one describes sessions without saying what resulted. Consider moving Experience ahead of Education, and address the unexplained eight-month gap after your B.A. if there’s relevant context.

The file parses cleanly for ATS. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 78 · wording 79 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The file includes date of birth and nationality, personal details a reader is not meant to weigh.

**Why**
Those details are not relevant to assessing the candidate’s work or qualifications. Keeping them in the file directs attention to personal information rather than the résumé’s professional evidence.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American” from the file.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, delaying the product internship and operations background that establish the candidate’s direction.

**Why**
A reader encounters the degrees before the work history. Moving Experience ahead of Education would put the product and operations background first.

**How to change it**
Move the Experience section ahead of Education.

> Sep 2014 - Jun 2018

**Problem**
[Polish] The résumé leaves an eight-month gap between the B.A. ending in June 2018 and the Operations Analyst role beginning in March 2019 unexplained.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% checkout-conversion increase is unclear without saying whether it is relative or percentage-point growth and what it is compared with.

**Why**
Without that anchor, a reader cannot judge the size of the improvement. Clarifying the comparison makes the result easier to interpret and defend.

**How to change it**
Specify whether “35%” is a relative lift or a percentage-point gain; if measured against a particular baseline or period, add [baseline conversion rate or comparison period].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The shipping result is buried after the requirements and stakeholder list.

**Why**
A reader reaches the outcome only after the work description and the people involved. Leading with the two-weeks-ahead result makes the accomplishment clear sooner.

**How to change it**
Move “the team shipped it two weeks ahead of plan” to the beginning of the bullet, then retain the requirements and stakeholder details.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
[Important] The roadmap-priority outcome is buried after the research methods and estimated losses, and “the business case that set” is an awkward link.

**Why**
The reader sees the methods and loss estimate before learning why the work mattered to the business. The wording also makes the connection between the estimate and the roadmap decision less direct.

**How to change it**
Move the roadmap-priority outcome to the beginning of the bullet and replace “the business case that set” with a shorter link such as “which informed.”

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] Comparing merchants who chose different flows does not isolate the redesign’s effect.
2. [Important] The bullet gives a comparison method but no result or insight from it.

**Why**
1. Those groups selected their own flow and may differ in ways that also affect onboarding outcomes. Without random assignment or adequate adjustment for those differences, the comparison cannot establish the redesign’s effect.
2. A reader cannot tell whether onboarding improved or what changed. The comparison setup alone does not show the value of the work.

**How to change it**
1. If merchants were randomly assigned or the comparison adjusted for selection differences, state how; otherwise describe this as a comparison between the groups, not a measurement of the redesign’s effect.
2. Replace “Measured the onboarding redesign” with the finding: [change in a named onboarding outcome for merchants using the new flow versus the old flow].

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The onboarding result is attributed to both Harbor Payments and an earlier practicum, so the role and timing of the work conflict.

**Why**
The practicum entry places the same 2,300-merchant result in Jan–May 2024, before this Harbor internship began in June 2024. A reader may doubt which role produced the result.

**How to change it**
Verify which role the work belongs to and retain the result under that role; if these were separate projects, distinguish them and use their respective figures.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] Excluding weather-delayed shipments from the calculation does not support claiming that overall late deliveries fell from 11% to 7%.

**Why**
Excluding those shipments changes the population being measured, so the lower rate could reflect the exclusion rather than fewer late deliveries overall. As written, the bullet presents that adjusted rate as an overall reduction.

**How to change it**
If the figures cover only shipments not delayed by weather, say so and report weather-delayed shipments separately; otherwise recalculate the rates including all shipments.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The pick-error result should lead the entry rather than appear after the opening bullet.

**Why**
The quantified reduction, two-site reach, and work with supervisors and pickers give this line a clear result and scope. Leading the entry with it would make that accomplishment land sooner.

**How to change it**
Move this bullet to the top of the Crestline Logistics entry.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Prepares” uses present tense in a role that ended in August 2023.
2. [Important] The bullet describes the review and forecast pack but gives no outcome they enabled.

**Why**
1. The present tense conflicts with “Coordinated” and makes it unclear whether the forecast-pack work is ongoing. The role dates establish that this experience is past.
2. A reader can see what the role involved, but not what the review or pack accomplished. Without a decision, planning result, or other consequence, the contribution’s value is difficult to judge.

**How to change it**
1. Replace “prepares” with “prepared.”
2. Add the most direct outcome the review or pack enabled, with [the decision or planning outcome and how it was measured] if available.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch bullet names the app and its results but not your specific product or rollout contribution.
2. [Polish] The phrase “that would have been thrown away” repeats the meaning of “surplus food” and slows the result.

**Why**
1. A reader can see the outcome, but not what your work as product lead involved. One concise example of what you owned would make the skill behind the launch clearer.

**How to change it**
1. Add one specific launch contribution after “app,” such as [the key product decision or rollout step you owned]. Keep it to one detail so the result stays prominent.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] “Launched” repeats the opening verb of the preceding bullet.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Polish] “Each week” and “a week” repeat the weekly cadence.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The weekly sessions are described without saying what they produced.

**Why**
A reader can see the activity and its participants, but cannot tell what value the work delivered. The cadence alone does not establish an outcome.

**How to change it**
Add [the scheduling decision or change the sessions produced and its effect]; that outcome is more useful than adding detail about the meeting routine.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The intake-form result should lead the entry rather than appear after the opening bullet.
2. [Polish] The intake-form bullet uses passive voice, obscuring who did the work, and does not quantify how much the form was shortened.

**Why**
1. This line names work across four clinics and says the changes were adopted by front-desk staff. Leading with it would make the clearest practicum result visible sooner.

**How to change it**
1. Move this bullet to the top of the practicum entry.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding bullet does not fit the hospital practicum and duplicates the Harbor Payments result.
2. “By redesigning onboarding” does not identify what changed in the process.
3. “Takes” uses present tense for a practicum that ended in May 2024.

**Why**
1. The entry describes outpatient-scheduling work, while this bullet describes changing merchant onboarding and payment timelines. The same result is also listed under Harbor Payments, so a reader may doubt which project it belongs to.
2. Even apart from the mismatch with the hospital project, the phrase names a broad activity rather than the change made. A reader cannot tell what the claimed redesign involved.
3. The present tense makes the sentence sound ongoing even though the role dates show it is past. The wording is also inconsistent with describing the completed result.

**How to change it**
1. Remove this bullet or replace it with [the verified result of the hospital scheduling work]. If this was separate onboarding work, verify its role and distinguish the project and result from the Harbor bullet.
2. If this is a separate, accurate project, replace “redesigning onboarding” with [the specific onboarding change]; otherwise remove the bullet with the mismatched claim.
3. Replace “takes” with “took.”

## Already working

- s2:e1:b3: Pairs a quantified annual outcome with the rollout's reach and training effort.
- s2:e0:b3: Combines a concrete workload with a clear reduction in the open queue.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-85079587.md.

