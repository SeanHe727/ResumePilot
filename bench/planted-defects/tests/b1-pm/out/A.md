> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **4 experience/project entries** for content and wording, plus the **whole-resume narrative** and format. Education entries were not applicable. **JD matching was not run** because no job posting was provided.

Most important changes:

1. **Fix the MBA Consulting Practicum inconsistency.**  
   Its final bullet—“Halved the time it takes a new merchant to receive a first payment…”—duplicates the Harbor Payments onboarding achievement and conflicts with the hospital-network context. Remove it, replace it with the actual practicum result, or move it to Harbor Payments if it belongs there.

2. **Clarify metrics that may represent reporting changes rather than operational improvements.**  
   The Crestline bullet saying “Cut late deliveries from 11% to 7% by excluding weather-delayed shipments…” currently presents a calculation change as a performance improvement. Explain the consistent comparison or distinguish the reporting change from the underlying result.

3. **Add outcomes to activity-only bullets.**  
   In particular:
   - Harbor Payments: the onboarding comparison method lacks its result.
   - Crestline: coordinating the S&OP review and preparing forecast packs lacks what changed as a result.
   - MBA Practicum: weekly scheduling sessions lack the resulting improvement.

4. **Make the product-management narrative more prominent.**  
   Consider placing **PROJECTS before EXPERIENCE**, or otherwise giving the Campus Food Rescue App greater prominence. The current sequence makes the product pivot less immediate.

5. **Address the unexplained date gap.**  
   The resume has no entry between the June 2018 degree completion and the March 2019 start at Crestline.

6. **Review the weaker wording and consistency points.**
   - Use past tense consistently in the former Crestline role; “prepares” should not remain present tense.
   - Define or avoid “S&OP” for readers outside supply-chain operations.
   - Check the wording around “30%” and clarify whether it is a relative reduction or percentage-point change.
   - The resume parses cleanly as a one-page, 484-word document. The format review flagged personal details such as date of birth and nationality as unnecessary.

The full specialist report is available with `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 73 · wording 81 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Remove irrelevant personal details.**
   > Date of birth
   A reader is not meant to weigh date of birth or nationality. They use space without supporting the candidacy.
   **How to change it:** Delete the date-of-birth and nationality details.
2. **The late-delivery bullet misrepresents a KPI-definition change as an operational reduction.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   Excluding weather-delayed shipments changes the measured population and can lower the reported rate without improving performance. The figures therefore support only a weather-adjusted rate unless both figures use a consistent rule.
   **How to change it:** Report the weather-adjusted rate from 11% to 7%, or use all-shipment rates calculated consistently.
3. **The checkout result claims causation and generalizes to all merchants without a valid comparison.**
   > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
   Other factors could explain the before-and-after change. The 35% also lacks a baseline or comparison period, so its size is hard to judge.
   **How to change it:** State the result for [the measured population and period], add [baseline and resulting conversion rates], and use causal wording only with [a controlled or adjusted comparison].

## Already working

- s2:e1:b1: Connects a quantified operational result to a specific process redesign.
- s2:e0:b1: Shows ownership of requirements and success metrics.
- s3:e0:b0: Leads with a concrete launch and a measurable first-year result.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The dispute-self-service bullet reports delivery but no post-launch outcome.** *(about 5 words to add)*
  > Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.
  Early shipping shows execution, not customer or business value. The reader still cannot tell whether disputes or support demand improved.
  **How to change it:** Add [a post-launch customer, support, or dispute-resolution result].
- **The interviews did not size the chargeback problem.** *(about 6 words to add)*
  > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
  Twenty-five interviews can identify pain points but cannot establish population-wide volume, prevalence, or financial exposure. The roadmap case therefore lacks stated quantitative support.
  **How to change it:** Say “identify chargeback pain points,” then add [validated chargeback volume, cost, or affected-merchant rate].
- **The opt-in comparison cannot establish the redesign's causal effect and omits its result.** *(about 8 words to add)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  The groups may differ before onboarding, creating self-selection bias. The bullet also gives no outcome or difference, so it reads as method rather than impact.
  **How to change it:** Describe the comparison as descriptive, add [the outcome and difference], and use causal language only with [random assignment or credible adjustment].
- **The onboarding redesign is presented as the cause of the 9-day-to-4-day reduction without a valid comparator.** *(about 5 words to add)*
  > Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
  Other operational changes could have contributed. The pilot result also does not justify applying the claim beyond the measured merchants.
  **How to change it:** State 4 days versus 9 days previously across 2,300 pilot merchants; add [a valid comparator] before claiming causation.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The pick-error result omits “by” and lacks baseline rates or a comparison period.** *(about 5 words to add)*
  > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
  The grammar is incomplete, and the relative reduction cannot be judged against an underlying rate or defined period.
  **How to change it:** Write “Cut warehouse pick errors by 30%,” then add [pre- and post-change rates] or [comparison period].
- **The S&OP bullet uses inconsistent tense, unexplained jargon, and reports coordination without an outcome.** *(about 5 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  “Prepares” conflicts with the completed role, and readers outside supply chain may not know S&OP. Meeting ownership does not show what the forecast pack changed.
  **How to change it:** Change “prepares” to “prepared,” spell out S&OP, and add [the decision or business outcome enabled].
- **The driver-hour saving lacks a stated comparison and is buried after implementation details.** *(about 6 words to add)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  The reader cannot tell what the 1,800 hours are measured against. Its position also hides the strongest result during a quick scan.
  **How to change it:** Lead with the saving and add [what it is compared with or how it was calculated].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The launch bullet does not show the candidate's specific product contribution, and its wording is passive and ambiguous.** *(about 7 words to add)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  The launch could describe a team or vendor effort rather than Product Lead ownership. “That would have been thrown away” is wordy, and “with two dining halls” has unclear scope.
  **How to change it:** Add [the key feature, workflow, or launch process owned], replace the passive phrase with a direct result, and attach “two dining halls” clearly to the app or launch.
- **The user increase is fully credited to reminders without causal evidence.** *(about 3 words to add)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  Interviews show missed pickup windows, not that reminders caused growth. Promotion, seasonality, or food availability could explain the increase.
  **How to change it:** Say users rose after reminders, or add [controlled evidence isolating their effect]; move the interview rationale beside the decision.
- **A 95% slot-fill rate does not support eliminating staff coverage, and the staffing reduction is unquantified.** *(about 8 words to add)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  The remaining 5% may still require staff or another arrangement. The reader also cannot gauge the burden removed.
  **How to change it:** Say coverage was reduced, or add [how remaining gaps were handled] and [staff hours or shifts saved]; replace “Set up” with [the specific action taken].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The merchant-onboarding achievement does not belong under the hospital practicum.** *(saves about 17 words if removed)*
  > new merchant
  It duplicates Harbor Payments and makes the practicum internally inconsistent. A reader may question the accuracy of both entries.
  **How to change it:** Keep the achievement under Harbor Payments only, or replace it with [the actual hospital-network result].
- **The scheduling bullet describes meetings rather than the analysis, change, or resulting improvement.** *(about 10 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  A reader cannot tell whether the sessions were substantive redesign or routine meetings. “Across the network” also gives vague scope without a clinic count.
  **How to change it:** Replace the activity with [the scheduling change] that improved [metric] from [baseline] to [result] across [scope].
- **The intake bullet uses passive voice and gives no size or benefit for the shortened form.** *(about 6 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Four clinics establish scope, but not how much the form changed or whether intake improved. Delayed adoption also weakens the action-result connection.
  **How to change it:** Use direct verbs, place adoption after the action, and add [fields, steps, time, or errors changed].
- **The merchant-onboarding bullet is wrong for this practicum and incorrectly calls 9 days to 4 days a halving.** *(saves about 17 words if removed)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  Merchants and first payments belong to Harbor Payments, not a hospital network. Also, halving 9 days produces 4.5 days, not 4.
  **How to change it:** Replace it with [the actual hospital-network result]; if retained under Harbor Payments, say “reduced median time from 9 days to 4 days.”

## Across the whole résumé

- **The résumé leaves Jun 2018 to Mar 2019 unexplained and delays the product story.** *(about 4 words to add)*
  > Jun 2018
  The gap may prompt questions about what happened after graduation. Leading with older operations experience also makes the product direction less immediate.
  **How to change it:** Add [the activity covering Jun 2018 to Mar 2019], and move PROJECTS above EXPERIENCE; keep Campus Food Rescue App before the practicum.

## Set aside (3)

3 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9ed80699.md.

