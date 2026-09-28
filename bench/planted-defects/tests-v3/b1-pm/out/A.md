> Here is my resume: bench/planted-defects/tests-v3/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the 1-page resume: all four experience/project entries received content and wording reviews, plus narrative and format checks. No job-description match was run because no posting was provided. The file parses cleanly and has no layout or ATS blockers.

The most important changes are:

1. **Remove or relocate the merchant-onboarding bullet from the hospital practicum.** It duplicates the Harbor Payments achievement and conflicts with the hospital project’s subject matter. Keep that achievement under the correct role, with consistent figures: “9 days to 4 days” versus “halved.”
2. **Verify causal claims and comparison methods.** In particular:
   - The 35% checkout-conversion improvement needs a clear baseline and measurement period.
   - The onboarding comparison needs its actual result.
   - Excluding weather delays does not by itself establish that late deliveries fell from 11% to 7%.
3. **Add outcomes to activity-only bullets.** The dispute self-service work, S&OP review, and hospital scheduling sessions describe responsibilities or delivery but do not state what changed as a result.
4. **Improve structure and consistency.** Move **EXPERIENCE** above **EDUCATION**, use past tense throughout completed roles, and explain or replace “S&OP” for broader readers.
5. **Address narrative details.** The resume leaves an eight-month gap between June 2018 and March 2019 unexplained.
6. **Remove personal details conventionally omitted from resumes**, including date of birth and nationality.

The full combined review is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

9 errors, 20 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] Personal details such as date of birth and nationality should be removed from the résumé. *(saves about 8 words)*

**Why**
Readers are not meant to weigh these details when assessing your qualifications. Keeping them uses scarce space and can introduce irrelevant personal information into the hiring decision.

**How to change it**
Delete the date-of-birth and nationality line from the file.

> across 2,300 merchants

**Problem**
[Error] The résumé repeats the same onboarding achievement under Harbor Payments and the hospital practicum, with conflicting context and results. *(no words)*

**Why**
A reader would notice that a merchant-payment result is attributed to a regional hospital project and that “9 days to 4” conflicts with “halved.” This creates doubt about ownership, accuracy and which experience actually produced the result.

**How to change it**
Keep the onboarding achievement under Harbor Payments, remove it from the hospital practicum, and use one verified result consistently there.

> Northfield School of Management

**Problem**
[Important] Move EXPERIENCE above EDUCATION. *(no words)*

**Why**
The résumé currently makes the MBA and undergraduate degree establish the story before more than four years of full-time work. A recruiter may miss the operations and product direction that should frame the candidacy.

**How to change it**
Move the full experience section above the education section; moving text costs no words.

> Sep 2014 - Jun 2018

**Problem**
[Important] The résumé has an unexplained eight-month gap between the undergraduate degree and the first listed role. *(about 3–8 words to add, if applicable)*

**Why**
The dates show the degree ending in June 2018 and the first role beginning in March 2019. A recruiter may wonder whether a job, relocation, study period or other relevant activity is missing.

**How to change it**
Add the missing period only if you have relevant experience, study or another explanation to include; otherwise leave the dates unchanged rather than inventing a reason.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The checkout-conversion claim is not established for “all merchants” by merely replacing the flow. *(about 3–10 words added)*
2. [Important] The checkout-conversion bullet does not identify the baseline or comparison period behind the 35% figure. *(about 5–10 words added)*
3. [Important] The checkout-conversion bullet should present the measured population rather than claiming the result for all merchants. *(about 1–5 words)*

**Why**
1. A before-and-after result cannot separate the flow’s effect from seasonality, traffic mix, instrumentation changes or other factors without a controlled comparison. The universal scope also requires evidence that the result applies across all merchants.
2. A reader cannot tell whether 35% means a relative increase or a change from one conversion rate to another. Stating the comparison would make the result easier to interpret and trust.
3. The current universal scope is not supported by the bullet’s evidence. Narrowing the claim protects credibility while preserving the reported improvement.

**How to change it**
1. If a valid controlled test was run, name it; otherwise say the one-page flow was followed by an observed 35% increase among [the measured merchant population].
2. Replace or supplement “after” with “from [baseline conversion rate] to [new conversion rate] during [comparison period].”
3. Replace “for all merchants” with [the measured merchant population], unless the result was actually validated across all merchants.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The dispute self-service bullet gives a delivery milestone but no outcome from the product itself. *(about 3–8 words added)*

**Why**
Shipping two weeks early proves execution speed, not whether the feature solved a customer or business problem. A product reader needs one result showing why the shipped work mattered.

**How to change it**
Keep the delivery result and add one outcome such as [self-service adoption], [reduction in support contacts] or [reduction in dispute handling time], if accurate.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
[Polish] The chargeback-loss result is stated indirectly and the dollar figure is not in a scannable résumé format. *(saves about 2 words)*

**Why**
The roadmap impact comes after too much setup, so the reader must work to find the business consequence. “1.1 million dollars” is also slower to scan than the standard abbreviated format.

**How to change it**
Replace “1.1 million dollars” with “$1.1M” and move the roadmap-priority result closer to the chargeback-loss figure.

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Important] The triage bullet uses vague timing filler and gives the queue reduction without its starting or ending count. *(saves about 3 words; adds about 2–5 words)*

**Why**
“Over the summer” adds little beyond the dated internship. A relative reduction without counts makes the scale harder to judge quickly.

**How to change it**
Delete “over the summer” and replace “by half” with the actual queue counts, such as “from [starting count] to [ending count],” if accurate.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] The onboarding comparison cannot establish that the redesign caused any improvement because merchants self-selected into the flows. *(about 2–6 words added)*
2. [Important] The onboarding-measurement bullet reports the comparison method but not its outcome. *(about 3–8 words added)*
3. [Polish] The phrase “merchants who opted into the new flow with those who stayed on the old one” is unnecessarily long. *(saves about 4 words)*

**Why**
1. Adopters and non-adopters may have differed in size, motivation, capability or onboarding difficulty before the redesign. The comparison supports an association, not a causal measurement, so presenting it as proof would overstate the analysis.
2. A reader can see how the redesign was evaluated but cannot tell whether onboarding improved or the change was justified. Without the result, the line reads as a measurement process rather than an accomplishment.
3. The comparison groups are difficult to scan, especially inside a bullet that already explains a measurement approach. The length competes with the result and makes the method less direct.

**How to change it**
1. Describe the result as an observational comparison, or replace it with results from random assignment or a credible controlled or pre/post analysis if one was run.
2. Add the measured change, such as [difference in time to first payment], [difference in completion rate] or [difference in activation rate], and remove this line if the result is already stated elsewhere.
3. Replace the phrase with a shorter accurate description such as “new-flow adopters and old-flow users,” if accurate.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
1. [Error] The 9-days-to-4-days result conflicts with the separate claim that the same redesign halved time to first payment. *(adds 1 word)*
2. [Polish] The unit is missing after the ending value in “from 9 days to 4.” *(adds 1 word)*

**Why**
1. Reducing 9 days to 4 days is a 5-day reduction, or about 55.6%, not an exact halving; half of 9 days is 4.5 days. If the metric, population and redesign are the same, both figures cannot be exact.
2. Without “days” after 4, the comparison is grammatically incomplete and the reader must infer the unit. Repeating the unit makes the before-and-after result immediately clear.

**How to change it**
1. Verify the result and use either “reduced median time from 9 days to 4 days” or “reduced the measure by half”; also write “4 days.”
2. Replace “from 9 days to 4” with “from 9 days to 4 days.”

> Ran weekly triage with engineering and support

**Problem**
[Important] The internship currently reads as separate tasks instead of a prioritized product story. *(no words)*

**Why**
The strongest outcomes are present, but routine triage and measurement dilute the product results when they appear as an undifferentiated list. A recruiter may not immediately see the redesign, roadmap and shipped-product ownership.

**How to change it**
Put the major product results first, group the onboarding measurement immediately with its redesign, and move routine triage to the end.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] Excluding weather-delayed shipments changed the reported late-delivery rate but did not cut the underlying number of late deliveries. *(adds about 6 words)*

**Why**
A practitioner would distinguish an actual performance improvement from a change in the metric’s denominator. As written, the bullet presents a reporting change as an operational result, which weakens confidence in the analysis.

**How to change it**
Say the reported late-delivery rate fell from 11% to 7% after weather-delayed shipments were excluded, or report the actual change using a consistent all-shipment calculation.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
1. [Error] “Cut warehouse pick errors 30%” is grammatically incomplete because the reduction needs “by.” *(adds 1 word)*
2. [Important] The pick-error result gives a percentage reduction without its starting and ending error rates. *(about 2–6 words added)*

**Why**
1. The missing preposition makes the result read awkwardly and can slow a recruiter’s scan. It also leaves the reduction less polished than the surrounding quantified bullets.
2. A percentage reduction without a baseline is harder to judge across warehouse operations. The comparison would make the result more credible and easier to understand quickly.

**How to change it**
1. Replace “errors 30%” with “errors by 30%”; add before-and-after rates if you have them.
2. Replace “30%” with the actual rates, in the form “from [pick-error rate before] to [pick-error rate after],” if accurate.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Prepares the forecast pack” incorrectly uses present tense for a role that ended in August 2023. *(no words)*
2. [Important] The S&OP review and forecast-pack bullet does not state what changed as a result. *(adds about 3–8 words)*
3. [Polish] “S&OP” is unexplained jargon for readers outside operations and supply-chain functions. *(adds about 3 words)*

**Why**
1. The entry describes a completed past role, but the wording claims the preparation is ongoing. That tense shift can make the employment timeline seem inaccurate.
2. A hiring manager can see the activity and cross-functional scope, but not whether it improved forecast accuracy, inventory decisions, service levels or another operating outcome. Without a result, the line reads mainly as meeting administration.
3. A recruiter unfamiliar with the abbreviation may not know that it refers to sales and operations planning. The unexplained acronym can obscure the cross-functional scope of the work.

**How to change it**
1. Change “prepares” to “prepared.”
2. Expand “S&OP” to “sales and operations planning” and add [forecast accuracy improvement, inventory reduction, service-level improvement, or planning-cycle improvement] if accurate.
3. Replace “S&OP” with “sales and operations planning,” or write “sales and operations planning (S&OP)” on first use.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The app-launch bullet does not show what you personally did as product lead. *(about 4–10 words added)*
2. [Important] The app’s scope is unclear because “with two dining halls” does not say whether it served students, halls or both. *(saves about 2 words)*

**Why**
1. A reader can see the scale and outcome but cannot tell which product decision or ownership detail enabled the launch or adoption. Adding one compact action would make the achievement more credible and interviewable.
2. A recruiter may misread the relationship between the users and the dining halls. The passive phrase about discarded food also buries the result instead of showing what the app achieved.

**How to change it**
1. Add [the specific product-lead action that enabled the launch or adoption] after the launch clause, or replace a less essential scope phrase with that detail.
2. Clarify whether the app served 3,100 students across both dining halls or was created in partnership with them, and replace “that would have been thrown away” with a shorter active phrase such as “otherwise discarded,” if accurate.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Important] The pickup-reminder bullet should not imply that interviews proved the reminders caused user growth. *(about 3–8 words)*

**Why**
The growth could also reflect seasonality, promotion, changes in food supply or other operational changes during the following term. The interviews support the problem diagnosis, not the causal attribution.

**How to change it**
Say the reminders were launched after interviews identified missed pickup windows and that weekly active users increased over the following term; state controlled-comparison evidence instead if it was run.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
1. [Important] The volunteer-system bullet does not show what product or operational work you owned. *(about 4–10 words added)*
2. [Important] The volunteer-system bullet does not clearly show whether it operated across both dining halls, and it repeats the weekly time frame. *(saves about 2 words)*

**Why**
1. The results are persuasive, but a reader cannot distinguish designing the process from simply administering an existing arrangement. A compact ownership detail would show the skill behind the outcome.
2. The scope of the system is ambiguous, so the reader cannot tell whether both halls used it or merely helped create it. “Each week” followed by “a week” makes the ending awkward and adds redundant wording.

**How to change it**
1. Add [the specific coordination, scheduling or process-design action you owned] after “set up,” if accurate; do not add more figures unless they clarify that work.
2. Clarify the relationship with the halls and delete either “each week” or “a week,” retaining one accurate weekly reference.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
1. [Important] The outpatient-scheduling working-session bullet gives no resulting change or measurable outcome. *(about 4–10 words added)*
2. [Important] “Working sessions with clinic managers on outpatient scheduling” does not show what analytical or consulting work you led. *(about 3–8 words added)*

**Why**
1. A reader can see stakeholder engagement but cannot tell whether the sessions improved scheduling, informed a recommendation or led to implementation. Without an outcome, the practicum reads as recurring meetings rather than consulting work.
2. The collaboration is clear, but the reader cannot picture the skill behind it. The bullet therefore gives stakeholder access without demonstrating your contribution.

**How to change it**
1. Replace the activity-led opening with [the scheduling process or decision changed] and add [one scheduling outcome, measured against a baseline] if available.
2. Replace “on outpatient scheduling” with [the specific analysis, workshop output, or recommendation you led].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The patient-intake bullet does not show what the mapping analysis identified or what the shortened form improved. *(about 5–12 words added)*

**Why**
The reader cannot tell what was removed, how substantial the reduction was or what operational result followed. The passive construction also obscures your role and buries adoption at the end.

**How to change it**
Use an active subject, move “adopted by front-desk staff” nearer the result, and add [the key bottleneck, duplication or decision rule] plus [the number of fields or minutes reduced] if accurate.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding result does not belong in the regional hospital network practicum. *(saves about 17 words)*
2. [Error] The phrase “it takes” incorrectly shifts the merchant bullet into present tense. *(no words if removed)*

**Why**
1. Merchant onboarding and time to first payment are payments-industry processes, not hospital patient-intake or outpatient-scheduling metrics. The line also duplicates the Harbor Payments claim, creating a clear contradiction in the work history.
2. The practicum is a completed role, so present tense makes the timing inconsistent even before the bullet’s industry mismatch is considered. The awkward placement of “across 2,300 merchants” also separates the scope from the result.

**How to change it**
1. Remove this bullet from the practicum and retain it under Harbor Payments if it accurately describes that work, or replace it with [a verified result from the hospital-network engagement].
2. If this claim belonged in the correct entry, change “it takes” to “it took” and attach “across 2,300 merchants” directly to the time-to-first-payment result; otherwise remove the bullet from this entry.

> Halved the time it takes a new merchant

**Problem**
[Important] The hospital practicum should remove the merchant-payment bullet and lead with the adopted intake improvement. *(saves about 17 words; no words for the move)*

**Why**
The first two bullets form a coherent hospital-scheduling project, while the third changes industry and duplicates another entry. Keeping the unrelated result makes the practicum look copied or factually unreliable.

**How to change it**
Delete the merchant-payment bullet, then move the adopted intake-improvement bullet before the scheduling working-sessions bullet.

## Already working

- s2:e1:b3: Combines ownership, implementation scope, stakeholder training, and a quantified annual result.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-36d80098.md.

