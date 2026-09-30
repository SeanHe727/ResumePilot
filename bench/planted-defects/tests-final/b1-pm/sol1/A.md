> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullets for content and wording, plus the full resume for career narrative and file format. The two education entries have no bullets to review. No job posting was provided, so job match was not assessed.

The three changes to prioritize are:

1. **Fix the misplaced achievement.** The hospital practicum includes a merchant-onboarding result that belongs to the Harbor Payments internship. Remove it from the practicum or replace it with hospital work.
2. **Check what the numbers actually show.** Excluding weather delays changes the late-delivery calculation; it does not by itself show fewer late deliveries. Likewise, comparing merchants who opted into a new flow with those who did not does not establish that the redesign caused the difference. The listed A/B-testing skill also needs evidence of a randomized test, or removal.
3. **Make the product story easier to scan.** The narrative specialist recommends putting Experience before Education and keeping the practicum focused on its healthcare work. The content specialist also flagged bullets that describe a method or meeting without saying what it found or changed.

The PDF parses cleanly. The format review recommends removing the date of birth and nationality from the contact details. The full findings and entry-by-entry notes are in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 82 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 12 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996 | Nationality: American

**Problem**
[Error] The file includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally left off a résumé. Including them directs attention to personal information rather than your qualifications.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American” from the file.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before the product internship that provides the most direct evidence of your product direction.

**Why**
A reader encounters the MBA before seeing product work. Reversing those sections would show the relevant experience first while leaving the MBA visible as the bridge from operations.

**How to change it**
Move the Experience section above Education; keep the MBA in Education.

> MBA Consulting Practicum

**Problem**
[Important] The hospital practicum takes space from experience more relevant to the product direction.

**Why**
Its healthcare work is distinct from the app venture’s product work. Keeping the practicum concise helps the more relevant venture remain prominent without misrepresenting what the hospital project covered.

**How to change it**
Shorten the practicum to its healthcare work, or cut the entry if space is tight.

> Jun 2025

**Problem**
[Polish] No post-MBA employment is listed after the June 2025 end date.

> Jun 2018

**Problem**
[Polish] The résumé leaves an eight-month interval between the degree and the first listed role.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% checkout-conversion improvement lacks a clear baseline and does not say whether it is relative or a percentage-point change.

**Why**
A reader cannot judge the size of the improvement without knowing what the 35% is measured against. The two ways of expressing a conversion change also mean different things.

**How to change it**
Specify whether “by 35%” is a relative increase or a percentage-point change, whichever is accurate, and name [the actual comparison].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
1. [Polish] The dispute self-service bullet reports shipping ahead of plan but not what the feature changed.
2. [Polish] The shipping result is buried after the alignment detail.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Polish] The roadmap consequence appears only at the end of the chargeback bullet.
2. [Polish] The written-out dollar amount uses unnecessary space.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The onboarding comparison describes the method but omits its finding or the decision it informed.

**Why**
A reader can see which merchants were compared but not what the analysis established. Without a finding or decision, the value of doing the comparison remains unclear.

**How to change it**
Add [the observed difference in an onboarding outcome between the groups] or, if no defensible difference is available, [the decision the comparison informed].

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The bullet wrongly attributes the difference in median time to first payment to the redesign.

**Why**
The stated measurement compares merchants who opted into the new flow with those who stayed on the old one. Differences between those merchants could affect payment timing, so the comparison alone cannot establish that the redesign caused the 9-to-4-day difference.

**How to change it**
If 4 and 9 days are the respective group medians, describe them as observed new- and old-flow outcomes. Use “cutting” only if [an evaluation that addresses opt-in selection supports a causal claim].

> merchants who opted into the new flow

**Problem**
[Important] Comparing merchants who opted in with those who stayed on the old flow is not an A/B test.

**Why**
An A/B test requires randomized assignment; merchants choosing a flow may differ before they use it. This line therefore cannot substantiate an A/B-testing claim.

**How to change it**
If A/B testing is claimed elsewhere, identify [a randomized test actually conducted]; otherwise remove that claim.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] “Cut late deliveries” wrongly presents a change in the calculation as an operational improvement.

**Why**
Excluding weather-delayed shipments changes which shipments count in the reported rate; it does not make shipments that arrived late arrive on time. The move from 11% to 7% therefore shows a reporting change, not fewer late deliveries.

**How to change it**
Replace “Cut late deliveries” with “Changed the reported late-delivery rate,” retaining “from 11% to 7%” and the explanation of the exclusion. If deliveries also improved, state [the separately measured delivery change] separately.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Error] The percentage is missing the required “by.”

**Why**
Without “by,” the result reads as an unfinished construction. The correction makes the size of the reduction immediately clear.

**How to change it**
Insert “by” before “30%.”

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Prepares” is the wrong tense for a role that ended.
2. [Important] The S&OP bullet says what was coordinated but not what the review changed.
3. [Polish] Preparing the forecast pack does not show the analytical contribution behind it.
4. [Polish] “For each meeting” repeats what the quarterly-review context already conveys.

**Why**
1. The rest of the bullet describes past work, and the role ended in August 2023. The tense switch makes the timing of this responsibility seem inconsistent.
2. A reader cannot tell whether the review informed a planning decision or improved a forecast. That leaves the consequence of the coordination unstated.

**How to change it**
1. Replace “prepares” with “prepared.”
2. If attributable to this work, add [the specific planning decision or forecast improvement that resulted].

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The driver-hours result is buried after the rollout and training details.
2. [Important] The strongest route-planning bullet is not the entry’s opening bullet.

**Why**
1. Saving 1,800 hours is the clearest consequence of the work, but a scanning reader encounters it last. Moving it forward makes the rollout’s value visible sooner.
2. The rollout combines scope, training and an annual time saving. Opening with the late-delivery calculation instead gives a weaker and misleading first impression of this role.

**How to change it**
1. Move “saving 1,800 driver hours a year” closer to “Led the rollout.”
2. Move the route-planning bullet above the late-deliveries bullet.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Polish] The wording blurs whether the dining halls were users or partners.
2. [Polish] The description of food otherwise discarded is longer than needed.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
1. [Polish] Weekly active-user growth does not show whether reminders reduced missed pickups.
2. [Polish] Opening consecutive bullets with “Launched” makes the actions less distinct.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
1. [Polish] “Volunteer shift system” does not identify what kind of system was introduced.
2. [Polish] “Staff cover shifts” does not say what staff had to cover.
3. [Polish] The bullet expresses the same weekly time unit two different ways.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
1. [Important] The scheduling bullet describes meetings but not a scheduling result.
2. [Important] The scheduling bullet leads with meeting activity rather than your contribution.

**Why**
1. A reader cannot tell whether the sessions produced a decision, recommendation or operational improvement. Meeting frequency alone does not establish what changed for the clinics.
2. “On outpatient scheduling” names the topic, but neither it nor the Team Lead title identifies the work you led. The reader cannot tell what skill you applied in the sessions.

**How to change it**
1. If one resulted, replace the session description with [the scheduling change or recommendation produced]; add [its observed effect] if known.
2. If accurate, lead with [the analysis or decision you led on outpatient scheduling] instead of “Held weekly working sessions.”

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The clinic-intake change is not the practicum’s opening bullet.
2. [Important] The passive voice hides your actions on patient intake.
3. [Polish] Staff adoption is stated, but the benefit of the shorter intake form is not.
4. [Polish] The adoption result is buried and “the changes” does not name what staff adopted.

**Why**
1. Mapping intake, shortening the form and gaining staff adoption give a reader more concrete evidence than the opening description of meetings. Leading with that healthcare work also keeps the entry focused on its actual setting.
2. The sentence says what happened to the process and form but not directly who did the work. That weakens the connection between your Team Lead role and the changes described.

**How to change it**
1. Move the clinic-intake bullet above the manager-sessions bullet.
2. If accurate, replace “was mapped” and “was shortened” with active verbs identifying [the work you personally led].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-payment result is wrongly placed under the hospital practicum and repeats the payments-internship achievement.
2. “By redesigning onboarding” does not identify the process change.
3. The phrase describing time to first payment is unnecessarily long.

**Why**
1. The other practicum bullets concern clinics, while merchant onboarding and the 2,300-merchant figure belong to the payments internship. Keeping the result here makes the project attribution and the résumé’s chronology doubtful.
2. Without the misplaced merchant result’s proper context, a reader cannot tell what was redesigned. Even in the correct entry, the phrase alone would give little evidence of the work behind the outcome.
3. Its length obscures a metric that can be named directly. This wording issue matters only if the merchant result is retained in the correct entry rather than removed.

**How to change it**
1. Remove this bullet from the practicum. If there is a separate hospital result, use [the actual practicum outcome] instead.
2. If this claim is retained in its proper entry, replace “redesigning onboarding” with [the specific onboarding change made].
3. If the result is retained in its proper entry, replace the quoted phrase with “time to first payment for new merchants.”

## Already working

- s2:e0:b3: Pairs a concrete operating method with a measured backlog reduction.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-204996f5.md.

