> Here is my resume: bench/planted-defects/tests-v3/clean-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **Content review:** 4 experience/project entries; education headers were not applicable.
- **Wording review:** 4 entries.
- **Narrative review:** completed.
- **Format/ATS review:** completed.
- **Job-description match:** not run because no posting was provided.

Main changes to make:

1. **Reorder the sections.** Put **Experience before Education**. The resume currently has a coherent operations-to-product-management story, but the ordering separates the strongest evidence of that transition.
2. **Clarify results and causality.** Several bullets attribute improvements directly to an intervention without indicating whether the figures were measured, modeled, projected, or annualized. This especially affects the onboarding, conversion, chargeback, warehouse-error, and consulting-project bullets.
3. **Make weaker or ambiguous bullets more specific.** The requirements/metrics bullet does not state the resulting outcome; the app-launch and volunteer-system bullets do not fully show your role; and some phrases have ambiguous scope or ownership.
4. **Remove repetition in the consulting practicum.** Two bullets both end with the client funding or approving a scheduling pilot. Distinguish the financial model from the recommendation outcome, or retain the stronger result.
5. **Improve scanability.** In several bullets, the strongest result appears at the end. Lead with the measurable outcome where appropriate, and expand “S&OP” on first use.
6. **Keep the current file structure.** It is one page, parses cleanly for ATS systems, has consistent formatting, and 14 of 16 bullets contain figures.

The detailed findings, scores, and entry-by-entry notes are available in **`/report --full`**.

> /report
# Review: resume.pdf

**91/100** — format 100 · content 87 · wording 89 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

1 error, 25 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before experience even though the work history better establishes the candidate's career direction. *(no words)*

**Why**
The five years at Crestline Logistics plus the product internship provide more relevant evidence of the candidate's trajectory than the degrees alone. Leading with education delays the experience that a hiring reader is most likely to use to assess fit.

**How to change it**
Move the EXPERIENCE section above EDUCATION so the work history appears before the degrees.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Important] The onboarding bullet attributes the reduction in median time to the redesign without establishing causation. *(adds about 2 words)*

**Why**
A pilot median compared with a prior figure does not show that the single verification step caused the change. Merchant mix, seasonality, staffing, or other process changes could have contributed, so the causal claim may be challenged.

**How to change it**
Change “cutting” to language such as “after onboarding was redesigned around a single verification step.” Retain causal wording only if a controlled or randomized comparison was run and can be named.

> Lifted checkout conversion from 61% to 66% by testing a one-page flow against the three-step flow across 40,000 sessions, then shipping it to all merchants.

**Problem**
1. [Important] The checkout test is presented as causing the conversion increase without stating that it was properly randomized and analyzed. *(adds about 2 words)*
2. [Polish] The phrase “the three-step flow” repeats “flow” without adding much distinction after “one-page flow.” *(saves about 1 word)*

**Why**
1. Forty thousand sessions alone do not establish causal attribution; traffic mix, repeated users, tracking differences, or time effects could explain the gap. The result also needs consistent conversion definitions and appropriate statistical treatment to support the word “lifted.”
2. The repeated noun makes the comparison slightly heavier without clarifying the alternatives. This adds friction to a bullet whose experimental setup should scan quickly.

**How to change it**
1. Use an observed-comparison description unless the test had valid randomization, instrumentation, conversion definitions, and statistical support; if so, name that experimental basis and retain “lifted.”
2. Replace “the three-step flow” with “the three-step version” or another concise label that distinguishes it from the one-page flow.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The phrase “success metrics” does not state what outcome the metrics recorded. *(adds about 3 words if available)*

**Why**
A reader can see that measurement was planned but cannot tell whether dispute self-service improved adoption, resolution time, support volume, or another result. That leaves the product impact less concrete than the delivery timing.

**How to change it**
Replace or supplement “success metrics” with [measured outcome and comparison], if available; otherwise retain the delivery result as the only quantified evidence.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] The chargeback-loss estimate does not identify whose losses were measured. *(adds about 3 words)*
2. [Important] The result of the chargeback analysis is delayed until after the methods and is expressed indirectly. *(no words)*
3. [Polish] The dollar amount is written less concisely than standard résumé currency format. *(saves about 2 words)*

**Why**
1. Without the company, merchant portfolio, or another population, a reader cannot judge the scope of the estimate. The roadmap priority is therefore harder to interpret as a business decision.
2. A scanning reader must pass through interviews and data analysis before seeing the $1.1M business impact. “The business case that set the next quarter’s roadmap priority” also makes the decision outcome harder to identify quickly.
3. “1.1 million dollars” takes more space and is slower to scan than the compact form used elsewhere in the résumé. The longer wording also delays recognition of the estimate's scale.

**How to change it**
1. Add the measured population after “losses,” such as [company-wide losses] or [losses across the merchant portfolio], if accurate.
2. Move the $1.1M estimate and roadmap-priority result before the research methods, and replace the indirect clause with a direct decision phrase such as [set the next quarter’s roadmap priority].
3. Replace “1.1 million dollars” with “$1.1M.”

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Important] The bullet implies that weekly triage caused the open-ticket queue to fall by half. *(adds about 2 words)*

**Why**
Queue size also depends on incoming and reopened tickets, staffing, reassignment, and closure rules. Closing 140 tickets while observing a halved queue does not by itself establish that triage produced the reduction.

**How to change it**
Replace “and cutting” with a neutral sequence such as “while the open-ticket queue fell by half.” Retain causal attribution only if ticket inflow and other operating conditions support it.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Important] The phrase “the onboarding results” does not identify which result leadership used to justify the rollout. *(adds about 2 words)*

**Why**
The reader sees the funding decision but cannot connect it to a specific product or business metric. The presentation therefore sounds less decision-relevant than it may have been.

**How to change it**
Replace “the onboarding results” with [onboarding metric and measured change], if accurate.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Rebuilt weekly carrier scorecards used by 6 regional managers to renegotiate contracts, cutting late deliveries from 11% to 7% in two quarters.

**Problem**
[Important] The late-delivery reduction is attributed to the scorecard rebuild and related renegotiations without establishing causation. *(adds about 2 words)*

**Why**
Carrier mix, seasonality, network changes, contract actions, or altered measurement rules could also explain the change from 11% to 7%. As written, the figures show an observed before-and-after association rather than proving that the scorecards produced the improvement.

**How to change it**
Say that late deliveries fell from 11% to 7% after the scorecard rebuild, or retain causal wording only if a controlled comparison with consistent delivery definitions supports it.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The pick-error reduction is attributed to the bundled slotting and retraining intervention without establishing causation, and its 30% measure is undefined. *(adds about 4 words if figures are available)*

**Why**
The line does not distinguish the effects of slotting, retraining, normal variation, workload, product mix, or other site changes. It also does not say whether 30% is a relative reduction in errors per pick, order, or another denominator, so the size of the improvement is difficult to interpret.

**How to change it**
Say that pick errors fell 30% after the slotting redesign and retraining, and replace “30%” with [baseline and result] or a defined relative or percentage-point comparison if accurate. Retain causal wording only if the comparable measurement supports it.

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
1. [Important] The forecast-error reduction does not define the error measure or establish that the two figures are comparable. *(adds about 4 words)*
2. [Important] The forecast-review bullet repeats its quarterly cadence. *(saves about 2 words)*
3. [Important] The abbreviation “S&OP” is unexplained jargon for readers outside operations. *(adds about 4 words)*

**Why**
1. Forecast error can vary by formula, horizon, aggregation level, and treatment of intermittent or changed demand. Demand conditions, product mix, data quality, or other planning changes could also explain the reduction, so “cut” overstates what the figures alone show.
2. “Quarterly” already tells the reader the review frequency, while “for 12 consecutive quarters” repeats it. The duplication uses space without adding a new result.
3. A hiring reader unfamiliar with the abbreviation may not immediately understand the scope of the review. Expanding it once preserves the domain signal while making the bullet accessible.

**How to change it**
1. Name the error metric, forecast horizon, and scope, and say forecast error fell from 18% to 11% after the process change. Use “cut” only if a comparable controlled or time-series analysis supports attribution.
2. Use “for three years” or retain only one of “quarterly” and “for 12 consecutive quarters.”
3. Write “sales and operations planning (S&OP)” on first use.

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The annual saving of 1,800 driver hours does not state whether it was measured, projected, annualized, or how it was calculated. *(adds about 4 words)*
2. [Important] The 1,800-hour result is buried after the rollout and training details. *(no words)*

**Why**
1. The rollout and training establish implementation but not that 1,800 hours of driver labor were actually saved. The figure could instead reflect reduced mileage, dispatcher time, avoided overtime, increased capacity, or changes in volume and route mix, leaving its business meaning uncertain.
2. The quantified business impact is the strongest part of the bullet, but a scanning reader encounters implementation activity first. This makes the accomplishment sound more like tool deployment than measurable operational improvement.

**How to change it**
1. State that the tool was projected to save 1,800 driver hours annually, or report a measured saving only if comparable pre- and post-rollout records and the annualization basis support it. Add [the comparison or measurement basis] after the figure if accurate.
2. Move “saving 1,800 driver hours a year” to the beginning, then follow with the rollout, depot count, and training details.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The app-launch bullet identifies the release but not the product work performed as Product Lead. *(adds about 4 words if available)*
2. [Important] The phrase “with two dining halls” ambiguously modifies either the app's launch or the 3,100 students. *(no words)*
3. [Important] The phrase “that would have been thrown away” adds a long passive clause instead of stating the recovered-food result directly. *(saves about 3 words)*

**Why**
1. A hiring reader can see the outcome but has little evidence of product judgment or ownership beyond releasing an app. The strong reach and food-recovery result therefore do not fully demonstrate how the candidate made the service work.
2. A reader cannot tell whether both dining halls supplied the users, partnered in the launch, or were simply the service locations. That ambiguity makes the scope of the product rollout less precise.
3. The passive wording makes the outcome slower to scan and places attention on a hypothetical disposal event rather than the 9 tonnes redistributed. This dilutes a concrete sustainability result.

**How to change it**
1. Keep the launch and result, but replace or supplement the generic launch wording with [the key workflow or feature you designed and shipped that enabled pickups], if accurate.
2. Move “with two dining halls” next to the noun it qualifies, or replace it with [the precise relationship between the app, students, and dining halls].
3. Replace the clause with a direct recovered-food description, such as “redistributing 9 tonnes of surplus food,” if accurate.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
1. [Important] The volunteer-shift bullet describes the system but not the specific product or operating work performed to create it. *(adds about 4 words if available)*
2. [Important] The phrase “with two dining halls” does not clarify whether the shift system served both halls or was created in partnership with them. *(no words)*
3. [Important] The bullet repeats the weekly cadence in both the pickup-slot and staff-cover results. *(saves about 2 words)*

**Why**
1. The measured outcomes are strong, but a reader cannot tell whether the contribution was scheduling, volunteer recruitment, workflow design, or another form of ownership. That ambiguity reduces the evidence of product leadership behind the result.
2. The reader cannot accurately interpret the operating scope or the candidate's stakeholder role. The ambiguity weakens the context around the 95% pickup-slot result.
3. “Each week” and “a week” communicate the same timing, making the ending less concise. The repeated cadence distracts from the stronger operational change from 10 shifts to 2.

**How to change it**
1. Keep the two measured outcomes and replace or supplement the generic system wording with [the scheduling, recruitment, or workflow feature you designed and implemented], if accurate.
2. Move the phrase beside the action it describes, or replace it with [whether the system served both halls or was built with them], if accurate.
3. Remove one weekly qualifier while retaining the figures for pickup-slot coverage and staff cover shifts.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Mapped patient intake at 4 clinics with front-desk staff and cut the recommended intake form from 5 pages to 2 without losing required fields.

**Problem**
1. [Error] The claim that the two-page form retained all required fields is not supported by the stated mapping method. *(adds about 5 words if accurate; otherwise saves about 4 words)*
2. [Important] The intake-mapping method is not specific enough to show how the process was analyzed. *(adds about 2 words)*

**Why**
1. Front-desk mapping can identify registration workflow issues, but it cannot establish that clinical, privacy, consent, billing, health-information, EHR, and downstream workflow requirements were preserved. A reader may therefore doubt the compliance and operational validity of the recommendation, weakening an otherwise concrete consulting result.
2. Naming front-desk staff identifies the participants but not the practical consulting method used to understand intake. A reader cannot tell whether the work involved observation, process mapping, or facilitated workflow review, making the candidate's analytical contribution less visible.

**How to change it**
1. If performed, add [field-level requirements review and stakeholder sign-off] to validate the two-page form. Otherwise, remove or soften “without losing required fields.”
2. Replace “with front-desk staff” with [the specific mapping method used], such as [observed intake workflows] or [facilitated process-mapping sessions], if accurate.

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
1. [Important] The presentation bullet shows the communication step but not the analytical or decision-support work behind the recommendation. *(adds about 3 words if available)*
2. [Important] The strongest result—the approved pilot—is buried after the presentation details. *(no words)*

**Why**
1. A reader can see who heard the recommendation, but not what the candidate contributed beyond presenting it. Adding one compact detail about the recommendation's basis would make the consulting skill more visible while preserving the approved-pilot result.
2. A scanning reader encounters the audience before the decision that demonstrates the recommendation's impact. The bullet therefore foregrounds communication activity instead of the client action that validates the work.

**How to change it**
1. Keep the approval result, and replace or qualify “Presented the final recommendation” with [the specific analysis or recommendation basis], such as [presented a scheduling-consolidation business case], if accurate.
2. Move the approved-pilot result to the beginning of the bullet, then follow it with the presentation audience and, if accurate, [the analysis or recommendation basis].

> the client funded a pilot

**Problem**
[Important] The consulting practicum repeats the same scheduling-pilot outcome in both the financial-model and presentation bullets. *(saves about 8 words if one repeated outcome is cut)*

**Why**
Both bullets say the client funded or approved a scheduling pilot, so the second result adds little new evidence. This uses space that could distinguish the savings model from the recommendation's communication or decision-support impact.

**How to change it**
Retain the stronger pilot-approval version, or change one bullet to describe the financial model and the other to describe a distinct presentation or implementation outcome.

## Set aside (4)

4 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-07610488.md.

