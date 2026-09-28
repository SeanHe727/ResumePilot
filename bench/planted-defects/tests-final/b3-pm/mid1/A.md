> Here is my resume: bench/planted-defects/tests-final/b3-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the full-resume narrative and format. Education entries have no bullets to review; no job description was provided for a match review.

The main changes to address:
- Resolve the merchant-onboarding result that appears in both the Harbor Payments internship and the hospital practicum; confirm which entry it belongs to and correct or remove the duplicate.
- Put Harbor Payments above Crestline Logistics so Experience runs newest-first.
- Clarify what key figures mean and how they were measured, especially the “late deliveries” comparison and the conversion and forecast-error changes. Add the missing outcomes to bullets that currently describe analysis or meetings without saying what came of them.
- The format check found the file parses cleanly, but flagged personal details, a first-person pronoun, and several bullets that don’t open with an action verb.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The résumé includes personal details that should be left off.

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh when assessing this résumé. Including them gives space to information unrelated to the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American.”

> Crestline Logistics | Operations Analyst

**Problem**
[Important] Experience is not ordered newest-first.

**Why**
Crestline appears above the more recent Harbor Payments internship. A reader scanning the section may encounter older experience before the most recent role.

**How to change it**
Move the Harbor Payments entry above Crestline Logistics.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The bullet claims late deliveries fell when the stated change was to how the rate was calculated.

**Why**
Excluding weather-delayed shipments can lower the reported rate without changing when shipments arrived. A reader cannot tell whether 11% to 7% reflects an adjusted rate or an actual reduction, which affects how much operational impact the result demonstrates.

**How to change it**
Replace “Cut late deliveries” with “Reduced the reported late-delivery rate” and clarify that the rate fell from 11% to 7% after weather-delayed shipments were excluded. Claim an actual reduction only if it was measured using a consistent calculation.

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
1. [Important] The bullet does not say what changed in the slotting rules.
2. [Polish] The bullet uses a first-person pronoun and passive wording that obscures who implemented the redesign.

**Why**
1. The reader can see the type of work, but not the operational decision behind it. Without one concrete rule change, the method that produced the reduction in pick errors is hard to assess.

**How to change it**
1. Replace “redesign of the slotting rules” with [the most consequential slotting-rule change], if accurate and useful to explain the error reduction.

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
1. [Polish] The S&OP result is not the opening bullet, and its error figures do not identify the measure used.
2. [Polish] The abbreviation “S&OP” is not explained on first use.

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
[Important] The annual driver-hour savings do not state how they were established.

**Why**
A reader cannot tell whether 1,800 hours is a measured result or an estimate. Without a basis for the comparison, it is difficult to assess the size and reliability of the savings.

**How to change it**
Clarify whether the figure is measured or estimated and add [the prior-routing comparison or calculation basis].

> Cut late deliveries

**Problem**
[Polish] The bullets cover several distinct initiatives without building a single narrative.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% conversion lift does not identify its baseline or whether it means relative growth or percentage points.

**Why**
Those interpretations describe different sizes of change. Without the distinction, a reader cannot interpret the result or judge how it was measured.

**How to change it**
Clarify whether the lift is relative or in percentage points and add [the baseline conversion rate or comparison period/cohort].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
1. [Important] The bullet does not state what dispute self-service achieved after launch.
2. [Polish] The two-weeks-early delivery result is buried after the requirements and alignment details.

**Why**
1. Shipping ahead of plan demonstrates delivery, but not whether the feature created value for merchants or the business. A reader is left without the outcome of the work.

**How to change it**
1. After the delivery timing, add [the feature’s user or business outcome], if one was measured.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] The annual loss estimate does not explain how six months of data were extended to a year.
2. [Polish] The wording linking the loss estimate to the roadmap decision is cumbersome.
3. [Polish] The line spells out “six” while using numerals for other figures.

**Why**
1. The data period and estimate period differ, so a reader may question how the annual figure was derived. A brief basis would make the $1.1 million estimate easier to assess.

**How to change it**
1. Add [the annualization basis or what losses were included] near the annual estimate.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The comparison bullet reports how the redesign was evaluated but not what the comparison found.

**Why**
A reader sees the comparison groups, but cannot tell whether onboarding improved or what the redesign was worth. Without a finding, the evaluation method does not demonstrate an outcome.

**How to change it**
Add [the measured result of the comparison], such as the change in the outcome you tracked.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Important] The strongest onboarding result is not the opening bullet in the entry.

**Why**
The redesign and the reduction in time to first payment give the reader a concrete result immediately. Starting with it would make the entry’s clearest product impact harder to miss.

**How to change it**
Move this onboarding result to the top of the entry.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch bullet does not show what product work or launch approach you owned.
2. [Important] The phrase “that would have been thrown away” repeats the surplus-food idea.
3. [Polish] “With two dining halls” does not make the dining halls’ role clear.

**Why**
1. The title identifies you as Product Lead, but the bullet gives the launch and its reach without showing how you delivered it. A reader cannot see which product decisions or launch actions were yours.
2. The bullet already identifies the food as surplus. The extra phrase adds length without clarifying the result.

**How to change it**
1. Add one concrete product decision or launch action you personally owned: [the product decision or launch action you owned].
2. Cut “that would have been thrown away.”

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Important] The volunteer shift system is named without explaining how it worked.

**Why**
The results are strong, but a reader cannot picture what you established to fill pickup slots and reduce staff cover. One coordination detail would make your contribution clearer.

**How to change it**
Add one key coordination mechanism after “volunteer shift system”: [how volunteers signed up or how shifts were assigned].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
1. [Important] The weekly sessions are described without stating what the practicum contributed or changed.
2. [Polish] “Held weekly working sessions” emphasizes meetings without explaining their purpose.

**Why**
1. A reader can see who met and what they discussed, but not what came out of the sessions. Without a recommendation, decision, or result, the bullet does not show the value of the work.

**How to change it**
1. Add the key scheduling recommendation or decision and its result: [recommendation or decision] and [result].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The shorter intake form is not linked to an outcome.
2. [Polish] The strongest clinic-work bullet is not the opening bullet.
3. [Polish] The intake and adoption clauses use passive wording that obscures your role and the staff’s action.

**Why**
1. Adoption shows the change was put into use, but it does not show whether intake improved. The four clinics establish scope, not impact, so a reader cannot assess the value of the change.

**How to change it**
1. Add one outcome of the shorter form, such as [change in intake time or errors compared with before the change].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding achievement is duplicated from the Harbor internship and does not fit the stated hospital-practicum work.
2. “Halved the time” gives a relative change without the actual time comparison.
3. “It takes” uses present tense for an outcome described in the past.

**Why**
1. The practicum is described as work on outpatient scheduling and patient intake, while this bullet concerns merchant onboarding and first-payment time. The same result and 2,300-merchant figure also appear under Harbor Payments, leaving a reader unsure which project owns the achievement and what it has to do with the hospital network.
2. A reader cannot tell how long first payment took before or after the redesign. The size of the operational change is therefore difficult to interpret.
3. The tense shifts within the description of a completed project. That makes the phrasing less consistent and may momentarily suggest the result is ongoing.

**How to change it**
1. Remove this result from the practicum; if it belongs to the Harbor internship, report it there. Otherwise replace it with [a verified hospital-related outcome].
2. If this achievement belongs here, replace “Halved the time” with [the actual time before and after], using the verified figures.
3. Replace “the time it takes a new merchant to receive a first payment” with “the time for a new merchant to receive its first payment.”

## Already working

- s2:e1:b3: Pairs a concrete operating result with the cross-functional process used to achieve it.
- s3:e0:b1: Shows a clear problem-to-intervention connection, with user interviews informing the reminder feature.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-85568176.md.

