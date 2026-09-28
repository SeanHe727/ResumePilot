> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the 4 entries with bullets for content and wording, plus the full resume for narrative and format. Education entries have no bullets to review. I didn’t run a job-description match because no posting was provided.

The biggest changes to address:
- Resolve the repeated “2,300 merchants” onboarding result: it appears under both Harbor Payments and the hospital practicum, where it doesn’t fit the project context.
- Clarify the basis for key metrics—especially the 35% checkout lift, the late-delivery rate after excluding weather delays, and the annualized chargeback estimate. The 1,800 driver-hours figure also needs its comparison basis.
- Move Experience above Education, as the resume shows several years of work before the MBA. Also consider removing the date of birth and nationality listed in the contact section.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 76 · wording 81 · narrative 61

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 11 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] Date of birth and nationality are personal details conventionally left off a résumé. *(saves about 8 words)*

**Why**
These details are not relevant to assessing the candidate’s qualifications. Including them can distract from the information a reader should weigh.

**How to change it**
Remove the date of birth and nationality.

> Northfield School of Management | MBA

**Problem**
[Polish] Education appears before experience even though the résumé shows more than four years of work before the MBA. *(no words)*

**Why**
A reader sees the MBA before the longer work history and may take education as the résumé’s main emphasis. That gives less attention to the experience that better establishes the candidate’s background.

**How to change it**
Move the EXPERIENCE section above EDUCATION.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The checkout-conversion increase is attributed to the flow change without a stated comparison or measurement basis. *(about 5–12 words to add)*
2. [Important] The 35% conversion increase is unclear because the bullet does not say whether it is relative or in percentage points, or identify the comparison. *(about 4–8 words to add)*
3. [Polish] The broad phrase “for all merchants” adds no clarification to the conversion result. *(saves 3 words)*

**Why**
1. Replacing the flow across merchants does not establish what conversion would have been without the change. Other factors during the measurement period could also explain the increase, so a reader may not credit the redesign with the result.
2. A reader cannot tell what the figure represents or judge its scale. A brief comparison would make the result easier to interpret.
3. The phrase does not explain the 35% figure or its basis. It uses space without helping a reader assess the result.

**How to change it**
1. Add the conversion definition, measurement period, and comparison used [comparison and measurement details]. If there was no suitable basis for attribution, describe the observed change without crediting it to the redesign.
2. Clarify whether the increase was relative or in percentage points and add the comparison period or cohort [relative or percentage-point change and comparison].
3. Delete “for all merchants.”

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
1. [Important] The bullet gives a delivery-timing result but no post-launch outcome for dispute self-service. *(about 5–10 words to add)*
2. [Polish] The delivery result appears after the requirements and stakeholder list, making it easier to miss on a scan. *(no words)*

**Why**
1. A reader can see that the feature shipped early, but not whether it improved the dispute experience or reduced support work. A post-launch result would show the feature’s value beyond its delivery date.
2. A reader scanning the bullet encounters the work details before the outcome. Moving the result forward makes the evidence of delivery more visible.

**How to change it**
1. Keep the early-shipping result and add one post-launch outcome, if available [change in self-service use or support workload].
2. Move “the team shipped it two weeks ahead of plan” to the front of the bullet.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] The six-month data do not establish the stated annual loss estimate without an annualization basis and a definition of loss. *(about 4–10 words to add)*
2. [Polish] The estimate and its roadmap consequence appear only after a long list of methods. *(no words)*
3. [Polish] The phrase explaining the roadmap impact is bulky. *(saves about 6 words)*

**Why**
1. Six months of data do not by themselves show how the annual figure was calculated. The annualization method and what counted as a loss affect the estimate, so a reader may question how the $1.1 million figure was derived.
2. A reader has to get through the interviews and data analysis before reaching the result and why it mattered. Leading with the estimate and consequence makes the impact easier to find.
3. The wording takes several words to explain a straightforward consequence of the estimate. A shorter phrase would make the bullet easier to scan.

**How to change it**
1. State what counted as a loss and how the six-month data were annualized [loss definition and annualization basis]. If those cannot be substantiated, soften the figure to the estimate the data directly support.
2. Move the estimate and roadmap consequence to the front, before the interview and data-analysis details.
3. Replace that phrase with “informed the next-quarter roadmap.”

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Polish] “Over the summer” repeats the time period already shown in the entry dates. *(saves 3 words)*

**Why**
The entry dates already establish when the work took place. Repeating the period adds no useful information to the bullet.

**How to change it**
Delete “over the summer.”

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The comparison bullet reports no result from comparing merchants in the new and old flows. *(about 4–10 words to add, or no words if combined)*

**Why**
A reader sees how the redesign was evaluated but cannot tell what changed or whether the new flow performed better. Without the comparison’s finding, the bullet adds method without showing what it established.

**How to change it**
Add the outcome compared between the groups and the resulting difference [measured outcome and comparison result], or combine this bullet with the redesign outcome in the next bullet.

> Redesigned merchant onboarding

**Problem**
[Polish] The Harbor Payments bullets cover several product efforts and operational work without building one clear story. *(no words)*

**Why**
A reader moving between checkout, disputes, chargebacks, triage, and onboarding may not see a clear thread through the internship. Leading with the onboarding result gives the entry a stronger starting point.

**How to change it**
Move the onboarding result bullet to the front of the Harbor Payments bullets and group the supporting bullets after it.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The bullet credits a reduction in late deliveries to excluding weather-delayed shipments from the calculation. *(about 3–8 words to add)*

**Why**
Excluding weather-delayed shipments can improve the reported rate without making any delivery less late. As written, the figures show a change in the metric, not necessarily a reduction in late deliveries.

**How to change it**
If only the calculation changed, describe the reported rate change and disclose the exclusion. Claim an actual reduction only if a like-for-like comparison supports it.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Important] The quarterly review and forecast-pack responsibilities have no stated business outcome. *(about 5–10 words to add)*
2. [Polish] The bullet uses present tense for a role that ended in August 2023. *(no words)*

**Why**
1. A reader can see the recurring work but not what it enabled or changed. One outcome would show why the review or pack mattered to the business.
2. The present-tense verb makes a completed responsibility sound ongoing. That inconsistency can distract a reader from the work described.

**How to change it**
1. Add a decision or operational outcome enabled by the reviews, or a change in forecast accuracy or planning performance attributable to the pack [verified outcome].
2. Change “prepares” to “prepared.”

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The 1,800-hour saving is not tied to a comparison baseline. *(about 3–7 words to add)*
2. [Polish] The annual hours saved appear after the rollout and training details, making the result easy to miss. *(no words)*

**Why**
1. A reader cannot tell whether the figure is measured against the previous routing process or another baseline. Without that reference point, the scale of the saving is difficult to judge.
2. A reader scanning the bullet reaches the outcome only after the implementation details. Moving the saving forward makes the result more prominent.

**How to change it**
1. Add the prior routing approach or other baseline used to calculate the annual hours saved [baseline].
2. Move the annual hours saved to the front of the bullet, before the rollout and training details.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Important] The amount redistributed does not establish that the food would otherwise have been thrown away. *(saves 6 words)*

**Why**
Pickup records can show how much food was redistributed, but not what would have happened to it without the app. A reader may question the counterfactual unless it is supported by separate evidence.

**How to change it**
If separate evidence supports that claim, name it; otherwise delete “that would have been thrown away” and report that the app redistributed 9 tonnes of food in its first year.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Important] The bullet links the volunteer shift system to the slot-fill rate and reduction in staff cover shifts without establishing that it caused either result. *(about 4–10 words to add)*

**Why**
Those outcomes could also reflect changes in demand, scheduling, or staffing. Without evidence for the causal link, a reader may doubt that the shift system produced the results.

**How to change it**
If a causal comparison supports the claim, name it; otherwise describe the shift system and report the slot-fill rate and staff cover shifts as observed outcomes.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The weekly sessions describe activity but do not state what the scheduling work changed. *(about 5–10 words to add)*

**Why**
A reader can see who met and what they discussed, but cannot tell whether the sessions improved access, reduced delays, or led to another useful change. Without an outcome, the bullet does not show the value of the work.

**How to change it**
Keep the clinic-manager context and add the scheduling outcome and its change compared with the prior state [verified outcome and comparison].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The bullet does not show how much the intake form was shortened or what practical effect the change had. *(about 3–6 words to add)*
2. [Polish] The passive wording obscures your role in mapping intake and shortening the form. *(about 1–5 words to add)*

**Why**
1. Adoption shows that staff used the revision, but not whether it made intake faster or easier. A measure would help a reader judge the significance of the change.
2. The sentence names the actions but does not say who performed them. A reader may not be able to tell what you personally contributed to the practicum.

**How to change it**
1. After “shortened,” add one measure, such as fewer fields or less intake time compared with before [measure, if known].
2. Replace the passive clauses with active verbs that state your role [what you did].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The merchant-onboarding result is duplicated under the Harbor Payments internship and the hospital-network practicum, so the résumé credits it to two different entries. *(saves about 19 words if removed; a replacement adds words)*

**Why**
The practicum is for a regional hospital network, but this result is explicitly about merchants and onboarding. A reader may doubt that the result belongs to the practicum and question the accuracy of both entries.

**How to change it**
Confirm which entry owns the result. If it was Harbor Payments work, keep it there and remove this practicum bullet, replacing it with a verified hospital outcome [result]; if the practicum did produce it, clarify the connection to the hospital network and distinguish it from the internship claim.

## Already working

- s2:e0:b5: Shows the change with a clear before-and-after measure.
- s3:e0:b1: Links a specific user problem to a feature and a measured change in engagement.

## Set aside (6)

6 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-a09b327a.md.

