> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** content reviewed for 4 experience/project entries; wording reviewed for the same 4; narrative and format reviewed; education entries were not applicable. JD matching was not run because no job posting was provided.

The main changes to make are:

1. **Fix the conflicting project bullet.**  
   The MBA Consulting Practicum includes a bullet about “merchant onboarding” and “2,300 merchants,” which duplicates the Harbor Payments internship and does not fit a hospital-network project. Remove it or replace it with the actual practicum result.

2. **Reorder the resume to emphasize the product-management transition.**  
   Recommended sequence:
   - Experience
   - Projects
   - Education
   - Skills  
   Keep Harbor Payments before Crestline Logistics, and place Campus Food Rescue App before the consulting practicum.

3. **Replace activity-only bullets with outcomes.**  
   The weakest examples are:
   - “Held weekly working sessions with clinic managers…”
   - “Measured the onboarding redesign by comparing merchants…”
   - “Coordinated the quarterly S&OP review…”  
   Each needs the resulting improvement, decision, adoption, or business impact.

4. **Clarify or substantiate metrics.**  
   Several bullets provide percentages without baselines or comparison details, such as the 35% checkout-conversion improvement and 30% reduction in pick errors. Add the underlying rates where available.

5. **Correct wording and tense issues.**
   - “pick errors 30%” should grammatically express a reduction “by 30%.”
   - Use past tense consistently for the completed Crestline role.
   - Expand “S&OP” on first use.
   - Repeat “days” in “from 9 days to 4 days.”
   - Move major results earlier in longer bullets.

The file is one page, parses cleanly for ATS systems, and uses quantified results in most bullets. The complete review is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 75 · wording 80 · narrative 64

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Remove personal details conventionally left off résumés.**
   > Date of birth: 2 Nov 1996
   Date of birth and nationality do not help a recruiter weigh these qualifications and use attention on irrelevant information.
   **How to change it:** Delete the date-of-birth and nationality details.
2. **The late-delivery reduction is not demonstrated because weather-delayed shipments were excluded from the denominator.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   The changed calculation makes 11% and 7% potentially non-comparable, so it does not establish that actual late deliveries fell.
   **How to change it:** State that the reported rate changed after applying the exclusion rule, or report the all-shipments late-delivery rate.
3. **The S&OP bullet uses inconsistent tense and gives no resulting business outcome.**
   > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
   "Coordinated" and "prepares" are not parallel in an ended role. Coordination and forecast preparation show activity, but not what changed as a result.
   **How to change it:** Change "prepares" to "prepared," expand the first use to "Sales and Operations Planning (S&OP)," and add [the measured planning or operating outcome].

## Already working

- s2:e0:b0: Leads with a strong product outcome rather than a task.
- s2:e0:b5: Connects a specific onboarding change to a meaningful payment-start outcome.
- s2:e1:b3: Puts a quantified efficiency outcome alongside clear implementation ownership.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The onboarding comparison cannot establish a causal effect, and it reports no finding.** *(saves about 16 words if removed)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  Opt-in merchants may differ systematically from those who stayed on the old flow, so the comparison shows association rather than causation. It also ends with method instead of the outcome found.
  **How to change it:** State the comparison without causal language and combine it with the quantified result; if causal evaluation was performed, specify [the randomization or adjustment method].
- **The checkout-conversion claim lacks a baseline or comparison.** *(about 6 words to add)*
  > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
  A reader cannot judge the size of a 35% improvement or whether the calculation used a controlled comparison.
  **How to change it:** Add [the conversion rate before and after] or [the old-flow and new-flow rates].
- **The dispute-self-service bullet shows delivery speed but not product impact.** *(about 5 words to add)*
  > Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.
  Shipping early demonstrates execution, not whether self-service reduced support demand, improved resolution, or benefited merchants.
  **How to change it:** Add [the post-launch user or business outcome]; retain the schedule comparison only if space allows.
- **The interviews did not by themselves size the chargeback problem or show why it deserved priority.** *(about 5 words to add)*
  > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
  Twenty-five potentially non-representative interviews support qualitative discovery, not population-level quantification. The reader also lacks the evidence behind the roadmap decision.
  **How to change it:** Use language about identifying pain points and informing the business case; add [the quantitative source and estimate] or [a frequency, cost, or affected-share finding].
- **Repeat the unit at the end of the onboarding result.** *(adds 1 word)*
  > Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
  A scanning reader should not have to infer that 4 means days.
  **How to change it:** Change it to "from 9 days to 4 days."

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The pick-error bullet is grammatically incomplete and lacks the underlying error-rate comparison.** *(about 6 words to add)*
  > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
  "By" is required to express the reduction, and the relative figure alone does not show whether the improvement was substantial or small.
  **How to change it:** Change it to "pick errors by 30%" and add [the starting and ending error rates] over a comparable period.
- **The route-planning result is buried after the methods.** *(no words)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  The 1,800-hour saving is the strongest evidence of value but appears only after the rollout and training details.
  **How to change it:** Move the saving immediately after "to 3 depots."

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The 9-tonne claim overstates what the line establishes, and the result is buried.** *(saves about 5 words)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  The quantity does not prove every batch would otherwise have been discarded without disposal records. Its late position also weakens impact for a scanning reader.
  **How to change it:** Use "redistributing 9 tonnes of surplus food" unless records verify the counterfactual, and move the quantified result earlier in the bullet.
- **The user-growth bullet attributes the entire increase to reminders without a causal test.** *(about 2 words to add)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The interviews explain why reminders were chosen, but not whether they caused the 750-user increase; other changes or seasonality could explain it.
  **How to change it:** Say users rose after reminders were added, informed by 60 interviews; retain causal wording only with [an experiment or comparable cohort analysis].
- **A 95% fill rate does not establish that staff coverage gaps disappeared, and the mechanism is too vague.** *(saves about 9 words)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  Approximately 5% of slots remained unfilled, and the reader cannot tell what the candidate built to achieve the result.
  **How to change it:** Remove the staff-coverage claim unless records support it, and replace the general system description with [the key mechanism created].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The practicum's merchant-onboarding bullet is unrelated to the hospital project and should be removed or replaced.** *(saves about 20 words if removed)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  It conflicts with the entry's scheduling and patient-intake narrative and repeats Harbor Payments' result. Its relative metric, merchant scope, and unspecified intervention further make it look copied.
  **How to change it:** Remove it, or replace it with the hospital project's actual [measured outcome] and specific intervention.
- **The scheduling and intake bullets describe activity and adoption but not outcomes.** *(about 6 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Working sessions and front-desk adoption show engagement and implementation, but not whether access, capacity, intake time, errors, or completion improved. Passive wording also obscures who performed the work.
  **How to change it:** Use active wording, replace vague scope with [the specific scope], and add [the resulting scheduling or intake outcome]. Write "four clinics" if numerals are not used consistently.

## Across the whole résumé

- **The résumé assigns the same merchant-onboarding achievement to both Harbor Payments and the hospital practicum.** *(saves about 18 words)*
  > new merchant to receive a first payment
  The practicum concerns hospital scheduling, so the duplicate looks copied and weakens confidence in the résumé's accuracy.
  **How to change it:** Assign the achievement to the correct entry and remove or replace the duplicate with the actual [project outcome].
- **Lead with EXPERIENCE, then PROJECTS, then EDUCATION.** *(no words)*
  > Northfield School of Management | MBA
  With more than four years of pre-MBA work, leading with education makes the MBA look like the primary qualification rather than a product-management transition. The food-rescue project is the stronger product thread and should precede the practicum.
  **How to change it:** Move EXPERIENCE above EDUCATION; place PROJECTS between them, with Campus Food Rescue App before MBA Consulting Practicum.
- **The timeline leaves June 2018 to March 2019 unexplained.** *(about 3 words to add)*
  > Jun 2018
  A recruiter can see the gap but cannot tell whether it reflects work, study, travel, or another activity.
  **How to change it:** Add the missing activity or a concise explanation: [the candidate's actual activity].

## Set aside (17)

17 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-cdc695b6.md.

