> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and format. There was no job posting to compare against.

The main changes to address:
- **Resolve the duplicated onboarding result:** it appears under both Harbor Payments and the hospital practicum, with conflicting attribution and figures. Confirm where it belongs and correct or replace the other claim.
- **Clarify the evidence behind a few results:** the Harbor checkout-conversion increase needs context for the comparison and attribution; the logistics late-delivery reduction is tied to excluding weather delays from the calculation. The hospital practicum bullets also need clearer outcomes from the scheduling and intake work.
- **Tighten the overall presentation:** consider moving Experience before Education, explain the June 2018–March 2019 timeline gap if relevant, and remove the date of birth and nationality flagged in the format review. The PDF parses cleanly.

The full report, including entry-by-entry findings, is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 80 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Halved the time it takes a new merchant to receive a first payment

**Problem**
[Error] The same 2,300-merchant onboarding result is attributed to both Harbor Payments and the hospital practicum, with different reductions. *(saves about 19 words if the practicum bullet is removed; replacement length varies)*

**Why**
The Harbor Payments bullet says time to first payment fell from 9 days to 4, while the practicum bullet claims it was halved. A reader may doubt which entry owns the achievement and which figures are accurate.

**How to change it**
Keep the verified onboarding result under the correct entry and replace or clarify the other bullet so its attribution and figures agree [verified hospital-project result, if applicable].

> Date of birth: 2 Nov 1996

**Problem**
[Error] The résumé includes a date of birth and nationality, personal details conventionally left off. *(saves about 8 words)*

**Why**
These details are not relevant to assessing the candidate’s qualifications and are not meant to be weighed by a reader. Including them uses space without helping the application.

**How to change it**
Remove the date of birth and nationality.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, so the page does not open with the work history and product internship. *(no words)*

**Why**
The established work history and product internship make a stronger opening for the résumé’s product direction than the education section. Leading with education delays that evidence.

**How to change it**
Move Experience before Education.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The line attributes the 35% conversion increase to the flow change and extends the result to all merchants without giving evidence for either claim. *(about 3 words, depending on the comparison and population)*
2. [Important] The 35% figure has no comparison point and does not say whether it is a relative increase or a percentage-point change. *(about 4 words, depending on the accurate comparison)*

**Why**
1. A before-and-after increase could reflect other changes during the period, and results for some merchants would not establish the result for all merchants. Without the comparison and population, a reader may doubt whether the redesign produced the increase or how broadly it applied.
2. Without that anchor, a reader cannot tell how conversion was measured or judge the size of the improvement. The number is difficult to interpret even if it is accurate.

**How to change it**
1. If a suitable comparison isolated the flow change and covered all merchants, name that method; otherwise describe the observed conversion change and the population measured without attributing it to the redesign.
2. Add the actual comparison and clarify whether the change was relative or in percentage points, such as [relative to the prior flow] or [percentage-point change from the prior flow], if accurate.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Important] The opt-in comparison does not establish that the redesign caused any difference. *(about 2 words to label the result as an association)*
2. [Important] The bullet gives a comparison method but no measured result. *(about 5 words, depending on the result)*

**Why**
1. Merchants who opted into the new flow may differ from those who stayed on the old one in ways that also affect onboarding outcomes. As written, the comparison can show an association, but not isolate the redesign’s impact.
2. A reader cannot tell what onboarding outcome was measured or whether the comparison showed an improvement. Without that finding, the bullet does not show what the work established.

**How to change it**
1. Describe the comparison as an association, or state a causal effect only if a design that addresses self-selection was used [name the design].
2. Add the measured onboarding outcome and its observed difference versus the old-flow group [measured outcome and comparative result]; describe it as an association unless the comparison design supports a causal claim.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Polish] The key result is buried after the method and scale. *(no words)*

**Why**
A scanning reader may pass over the reduction in time to first payment before reaching the end of the bullet. That makes the clearest outcome less visible than the supporting detail.

**How to change it**
Move the time-to-first-payment result to the start of the bullet, before the method and pilot scale.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The line reports a reduction in late deliveries by changing which shipments count, so the before-and-after rates are not comparable. *(about 1 word if the adjusted label applies)*

**Why**
Excluding weather-delayed shipments can lower the reported rate without reducing the number of late deliveries. A reader may therefore doubt that delivery performance actually improved.

**How to change it**
Report both rates using the same definition; if both figures use the weather exclusion, describe them as an adjusted late-delivery rate rather than a reduction in late deliveries.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Important] The S&OP bullet names the process and forecast pack but gives no outcome. *(about 5 words, depending on the outcome)*
2. [Polish] “Prepares” is present tense even though this role ended in August 2023. *(no words)*

**Why**
1. A reader can see the coordination and deliverable, but not what the reviews or pack changed. Without an outcome, the work’s effect on planning or decisions is unclear.
2. The tense shift breaks consistency in a description of a completed role. A reader may pause over whether this responsibility is still current.

**How to change it**
1. Add what decision or change followed from the reviews or forecast pack [verified outcome].
2. Replace “prepares” with “prepared.”

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
[Polish] The main result appears after the rollout and training details. *(no words)*

**Why**
A scanning reader may miss the annual driver-hours saving before reaching the end of the bullet. Putting the result first would make the impact easier to spot.

**How to change it**
Move the driver-hours saving closer to the start of the bullet, before the rollout and training details.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] The weekly-active-user result comes after the interview context, delaying the most scannable information. *(no words)*

**Why**
The growth from 400 to 1,150 is the clearest evidence of impact in the bullet. A reader scanning the opening may not reach it before moving on.

**How to change it**
Move the weekly-active-user result to the start of the bullet, before the interview context.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The weekly sessions are described without stating what changed as a result. *(about 5 words, depending on the result)*

**Why**
A reader can see the activity and its scheduling topic, but not whether the sessions led to a decision or improvement. Without an outcome, the value of the practicum is hard to assess.

**How to change it**
Add the main scheduling change or outcome that followed, with its comparison to the prior state [result and comparison].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake-form change has no measure of its scale or effect. *(about 4 words, depending on the measure)*

**Why**
Staff adoption shows the change was used, but not how substantial it was or what it did to intake. A reader cannot gauge the operational value from “shortened” alone.

**How to change it**
Add the number of fields or questions removed, or the intake-time change compared with the prior form [verified measure].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The merchant-onboarding result is attributed to the hospital practicum even though it repeats the Harbor Payments internship result. *(saves about 19 words if removed; replacement length varies)*

**Why**
The other practicum bullets concern outpatient scheduling and patient intake at clinics, while this one claims a merchant-payment outcome. As written, it assigns a separate role’s result to the hospital project.

**How to change it**
Remove the bullet or replace it with a verified hospital-project outcome [verified result].

> redesigning onboarding

**Problem**
[Important] The merchant-onboarding claim shifts this entry away from its hospital-project focus. *(saves about 19 words)*

**Why**
The scheduling and intake work fits the practicum, but merchant onboarding is unrelated to the project described by those bullets. Keeping the claim here repeats the internship story and weakens the focus of the entry.

**How to change it**
Remove the merchant-onboarding bullet so the entry stays focused on the hospital project.

## Already working

- s2:e1:b1: Pairs a quantified operational result with specific actions.
- s2:e0:b1: Makes the contribution, collaborators, and delivery result easy to understand.
- s2:e0:b3: Pairs a specific operating practice with both throughput and queue-reduction outcomes.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b66428c2.md.

