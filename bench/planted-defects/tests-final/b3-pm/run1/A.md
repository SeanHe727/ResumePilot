> Here is my resume: bench/planted-defects/tests-final/b3-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed content and wording for all 4 experience/project entries, plus the full resume narrative and format. **Partial:** no job-description match was run because no posting was loaded; the 2 education entries have no bullets to review.

The main changes to prioritize:
- **Correct the practicum entry:** its merchant-payment result appears to duplicate a Harbor Payments achievement and conflicts with the hospital-network project. The narrative review recommends removing it or replacing it with the practicum’s actual result.
- **Clarify what the metrics mean:** the Crestline late-delivery figure changes the calculation by excluding weather delays; the checkout-conversion and onboarding comparisons also need context so readers can interpret the results.
- **Reorder the resume:** put Experience above Education, and list Harbor Payments before Crestline.
- **Remove the personal details flagged by the format review** (date of birth and nationality), and remove the first-person pronoun from the Crestline bullet.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 77 · wording 76 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 16 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 7 words)*

**Why**
Date of birth and nationality do not help a reader assess the candidate’s qualifications for the roles shown. Including them directs attention away from the experience and skills relevant to the application.

**How to change it**
Remove “Date of birth: 2 Nov 1996” and “Nationality: American.”

> 2,300 merchants

**Problem**
[Error] The practicum repeats the Harbor Payments onboarding result, although the practicum is for a regional hospital network. *(saves about 19 words)*

**Why**
The two bullets describe the same achievement, and the practicum’s hospital focus makes the merchant result appear misplaced. A reader may see it as a duplicate or question whether the experience is accurately attributed.

**How to change it**
Remove the practicum duplicate or replace it with [the practicum’s actual result].

> Northfield School of Management | MBA

**Problem**
[Important] Experience appears after Education, delaying the work history and product transition. *(no words)*

**Why**
A reader reaches the candidate’s work history only after both degrees. Moving Experience first puts the practical evidence and product direction in view earlier.

**How to change it**
Move the Experience section above Education.

> Crestline Logistics | Operations Analyst

**Problem**
[Important] The Experience entries are not in newest-first order. *(no words)*

**Why**
Crestline Logistics, dated through August 2023, appears above the more recent Harbor Payments internship from summer 2024. The current order also delays the experience more directly aligned with the product direction.

**How to change it**
Move Harbor Payments above Crestline Logistics.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The bullet presents a change in the shipment calculation as a reduction in late deliveries. *(about 2 words to add)*

**Why**
Excluding weather-delayed shipments can lower the reported rate without making any shipments less late. A reader may conclude that the figures reflect a changed set of shipments rather than an operational improvement, which weakens the achievement.

**How to change it**
If the calculation changed, replace “Cut late deliveries” with wording that says the reported late-delivery rate fell after excluding weather-delayed shipments. Otherwise, recalculate the change using a consistent definition that includes those shipments.

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
1. [Error] The bullet uses a first-person pronoun. *(saves 1 word)*
2. [Important] The 30% reduction has no comparison period or starting rate. *(about 4 words to add)*
3. [Important] The passive wording obscures who rolled out the redesign and who received training. *(about 2 words to add)*

**Why**
1. “My” breaks the résumé’s phrase-style convention. It also makes the bullet sound like a sentence about ownership rather than a concise account of the work.
2. Without a comparison point, a reader cannot judge the scale or context of the change. A short baseline anchor would make the result easier to assess.
3. “Was rolled out with” does not make clear who implemented the redesign. “45 retrained pickers” also leaves unclear who was retrained, which makes your contribution and the rollout harder to assess.

**How to change it**
1. Delete “my” and keep the phrase-style construction.
2. After “30%,” add [the accurate comparison period or starting rate], such as [relative to the prior quarter] or [from X errors per Y picks].
3. Replace the passive clause with an active construction naming the floor supervisors as rollout partners and the 45 pickers as trainees, if accurate; otherwise, name [who implemented the rollout and who was retrained].

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
[Important] The forecast-error reduction is buried after the review scope and duration. *(no words)*

**Why**
A scanning reader reaches the key result only at the end of the bullet. That delays the clearest evidence of the review’s impact.

**How to change it**
Move “cut forecast error from 18% to 11%” to the opening; leave the review scope and 12-quarter duration after it.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The bullet attributes the 35% conversion increase to the flow change without stating how that effect was established. *(about 4 words to add)*
2. [Important] “By 35%” does not say whether the conversion change is relative or in percentage points. *(about 4 words to add)*

**Why**
1. A before-and-after change alone cannot show that the new flow caused the increase; other changes could explain it. The reader also cannot tell whether 35% is a relative increase or a percentage-point change.
2. A reader cannot tell what the figure measures, making the result difficult to interpret. The baseline or comparison period would also help the reader understand the size of the change.

**How to change it**
1. If a controlled test or another credible comparison established the effect, name it and clarify the 35% calculation; otherwise, report the observed conversion change without attributing it to the flow replacement.
2. Clarify whether the change was relative or in percentage points, and add [the conversion baseline or comparison period/cohort] if space allows.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
1. [Important] The self-service feature has a delivery-timing result but no post-launch outcome. *(about 5 words to add)*
2. [Important] The shipping result is delayed until the end of the bullet. *(no words)*

**Why**
1. Shipping two weeks ahead of plan shows execution, but not whether the feature improved dispute handling or another user or business result. A success metric would show what the shipped feature achieved.
2. A scanning reader may miss the two-weeks-ahead outcome while first taking in the requirements and stakeholder alignment. Leading with the result would make the execution achievement easier to spot.

**How to change it**
1. Keep the delivery timing if useful, and add [the post-launch result on a success metric] if you have one.
2. Move the two-weeks-ahead shipping result to the opening; keep the requirements and stakeholder alignment after it.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
[Important] The roadmap impact is buried after the research methods and estimate, and the dollar amount is wordy. *(saves about 2 words)*

**Why**
The business-case result is the clearest account of why the work mattered, but it appears only at the end. “1.1 million dollars” also takes more space than a compact numeric amount and currency symbol.

**How to change it**
Move the roadmap-priority result to the opening and replace “1.1 million dollars” with “$1.1M.”

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Error] The opt-in comparison does not, by itself, isolate the redesign’s effect. *(about 3 words to add)*

**Why**
Merchants who opt in may differ in ways that also affect onboarding outcomes. A reader may therefore see the comparison as reflecting group differences rather than the redesign.

**How to change it**
If you accounted for self-selection, name [the method]; otherwise, describe the comparison as observational and avoid presenting it as a measure of the redesign’s effect.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The bullet does not establish that the 9 tonnes of food would otherwise have been discarded. *(saves about 6 words)*
2. [Important] The bullet does not say what product or rollout work you personally did. *(about 6 words to add)*

**Why**
1. Redistributing food through the app does not show what would have happened to it without the app. The counterfactual needs evidence about the food’s likely alternative destination.
2. The outcome is clear, but a reader cannot tell what your Product Lead contribution involved. One concrete product or launch contribution would make your work easier to judge.

**How to change it**
1. If you verified that the food would otherwise have been discarded, state how; otherwise, cut that phrase and report that the app redistributed 9 tonnes of food.
2. After “app,” add [the feature, workflow, or launch decision you owned], if accurate.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Important] The 95% of pickup slots and the reduction in staff cover shifts are not clearly defined or comparable. *(about 6 words to add)*

**Why**
The bullet does not say what counts as a filled slot or a cover shift, or which periods the before-and-after figures cover. Without consistent definitions and periods, the figures do not substantiate the claimed performance and reduction.

**How to change it**
Specify how slots and cover shifts were counted and the comparison periods; if those details are unavailable, report only the figures you can verify without implying a measured reduction.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The working-sessions bullet gives no outcome from the scheduling work. *(about 7 words to add)*

**Why**
A reader can see the activity and who was involved, but not what changed in outpatient scheduling or why the work mattered. Without an outcome, the line shows participation rather than the value of the work.

**How to change it**
Add [the resulting scheduling change and its measured effect, compared with the prior process].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The bullet does not quantify how much the intake form was shortened or what effect that had. *(about 5 words to add)*
2. The bullet uses passive voice for the intake mapping and form changes, and delays the adoption result. *(no words)*

**Why**
1. Without a measure, a reader cannot judge the scale of the change. “4 clinics” shows reach, not the result of the work.
2. The passive phrasing obscures your role in both actions. A reader also reaches the adoption result only after the methods, making the outcome slower to find.

**How to change it**
1. Replace “was shortened” with [the number of fields or questions removed, or the change in completion time versus the prior form], if known.
2. Use active verbs to name your role in mapping intake and shortening the form, if accurate, and move “adopted by front-desk staff” to the opening.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The practicum bullet attributes a merchant-onboarding result to a hospital-network project. *(saves about 19 words)*

**Why**
The same first-payment result appears under the Harbor Payments internship, which is dated after the practicum ended. The practicum bullets describe hospital scheduling and patient intake, so this result does not fit the work claimed here.

**How to change it**
Remove this bullet or replace it with [a verified outcome from the hospital practicum].

> a new merchant to receive a first payment

**Problem**
[Important] The merchant-onboarding result does not fit the Regional Hospital Network practicum. *(saves about 19 words)*

**Why**
A reader may not understand how a hospital practicum produced a result about merchants receiving payments. The mismatch can make the practicum’s other work less credible.

**How to change it**
Remove the merchant-onboarding bullet from this entry.

## Already working

- s2:e0:b3: Quantifies the annual time saved.
- s2:e1:b3: Pairs the volume of tickets closed with a clear change in the queue.

## Set aside (14)

14 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-3caf5bb5.md.

