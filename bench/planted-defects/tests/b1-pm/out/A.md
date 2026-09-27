> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all six entries: content and wording reviews covered the four experience/project entries; education was not applicable. I also ran the format and narrative reviews. No job description was loaded, so this does not include a posting-specific match analysis.

The full report is available in `/report --full`. The main changes to make are:

1. **Fix the consulting practicum entry.**  
   Its third bullet repeats the Harbor Payments result about reducing time to first payment across 2,300 merchants. Because the practicum is described as work for a hospital network, remove that claim or replace it with the actual hospital-project outcome.

2. **Resolve redundancy in Harbor Payments.**  
   Two bullets describe evaluating the same merchant-onboarding redesign. Combine the measurement method with the bullet that contains the result, or remove the standalone measurement bullet.

3. **Clarify the operations metrics.**  
   The claim that late deliveries fell from 11% to 7% is attributed to excluding weather-delayed shipments from the calculation. Make clear that this was a reporting-definition change, not necessarily an operational reduction in late deliveries.

4. **Add outcomes or context to activity-only bullets.**  
   The reviewers identified these areas:
   - Harbor Payments: the chargeback interviews are described as “sizing” the problem without explaining how the size was established.
   - Crestline Logistics: the S&OP/forecast-pack responsibility has no stated outcome.
   - Hospital practicum: weekly working sessions have no result attached.
   - Hospital practicum: the shortened intake form has no amount of reduction or measurable effect.

5. **Verify the causal and numerical claims.**  
   The reviewers flagged:
   - “Improved checkout conversion by 35%” — clarify whether this is a relative increase or percentage-point increase and, if available, include the baseline.
   - The food-rescue app’s increase from 400 to 1,150 weekly active users — establish the measurement dates and avoid implying the reminders alone caused the entire increase unless that was tested.
   - The app’s 95% pickup-slot coverage — avoid claiming that staff coverage was entirely unnecessary unless the evidence supports it.
   - The 9 tonnes of food redistributed — clarify whether this was directly recorded or estimated.
   - The 1,800 annual driver-hour saving — document the calculation basis if possible.

6. **Improve chronology and positioning.**  
   The narrative review recommends:
   - Put **Experience** before **Education**, since the resume includes four years of professional experience.
   - Put **Projects** after Experience and before Education.
   - Investigate or explain the eight-month gap between June 2018 and March 2019.
   - Either demonstrate Figma use in the experience/projects or remove it from Skills.

7. **Correct smaller wording issues.**
   - Use “by 30%” rather than “30%” for the warehouse-pick-error reduction.
   - Use past tense for completed roles, including “prepared.”
   - Define or spell out “S&OP.”
   - Make passive project bullets clearly show your actions.
   - Clarify what “with two dining halls” modifies in the food-rescue project.

The file itself is one page, parses cleanly for ATS purposes, and has no layout warnings. The format review also flagged personal details such as date of birth and nationality; those should generally be omitted unless a specific application requires them.

> /report
# Review: resume.pdf

**78/100** — format 100 · content 63 · wording 82 · narrative 56

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The late-delivery line misstates a reporting-definition change as an operational reduction in late deliveries.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   Excluding weather-delayed shipments changes the measured population rather than preventing shipments from arriving late, so the reported fall from 11% to 7% does not show that overall delivery performance improved. A logistics reader will also assume the figures describe all shipments unless the restricted population is labeled explicitly.
   **How to change it:** Replace "Cut late deliveries" with the defined non-weather-related or controllable late-delivery rate and label both percentages accordingly. If the intended claim is about all late deliveries, use an all-in calculation with [the all-in late-delivery rates before and after the operational change], and describe the actual intervention rather than the exclusion as the cause.
2. **The chargeback interviews do not by themselves substantiate a claim that the problem was sized.**
   > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
   Interviews can reveal merchant experiences and generate hypotheses, but a sample of 25 may be non-representative and subject to recall or selection bias. A reader therefore cannot infer prevalence or financial magnitude from the interviews alone.
   **How to change it:** Replace that phrase with the qualitative research objective, or add [chargeback rate or financial exposure from transaction data] before claiming that the problem was sized.
3. **The MBA Consulting Practicum entry contains a merchant-onboarding achievement that is duplicated from Harbor Payments and does not fit the hospital-network project.**
   > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
   A hiring manager will read "new merchant" and "2,300 merchants" as unrelated to the surrounding hospital scheduling and intake work. The duplication makes the project look copied or misattributed, weakening confidence in both the entry and the claimed result.
   **How to change it:** Delete the third practicum bullet unless it genuinely belongs to the hospital engagement; if it does, replace the merchant language and figures with [the hospital-network population and outcome actually affected]. Shorten or remove the entry if no genuine hospital outcome remains.

## Already working

- s2:e0:b5: Uses a strong before-and-after measurement with a defined median metric.
- s2:e0:b1: Shows ownership of requirements and success metrics.
- s3:e0:b0: Quantifies both user reach and food redistributed.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The onboarding comparison bullet is incomplete and cannot establish a redesign effect from self-selected groups without an outcome or adjustment method.** *(about 8 words to add)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  The line names who was compared but never says what metric differed or by how much, so the reader cannot tell what the measurement proved. Because merchants opted into the new flow, pre-existing differences between the groups could explain any observed gap rather than the redesign.
  **How to change it:** Add [the outcome metric] and [the observed difference] after the comparison, and describe it as an observational comparison; add [the method used to control for pre-existing differences] if one exists. Otherwise merge the comparison method into the onboarding-result bullet or remove this bullet.
- **The checkout-conversion improvement needs its baseline and percentage interpretation.** *(about 5 words to add)*
  > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
  A reader cannot judge the size of the result without knowing the starting conversion rate. "35%" could mean a relative increase or a 35-percentage-point increase, which are materially different outcomes.
  **How to change it:** Add [the baseline checkout conversion rate] and label 35% as either a relative increase or a percentage-point change, whichever the data supports.
- **The ticket-queue reduction is not supported without starting and ending counts or the period's ticket inflow.** *(about 4 words to add)*
  > Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.
  Closing 140 tickets does not itself prove that the queue fell by half because new tickets and other queue changes may have affected the result. A reader cannot validate the claimed reduction from the current figures.
  **How to change it:** Add [starting open-ticket count] and [ending open-ticket count], or state the net queue change after accounting for new tickets; retain 140 only if it adds useful context.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The S&OP bullet describes recurring planning activity but gives no business outcome.** *(about 4 words to replace)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  Quarterly meetings and a forecast pack show responsibility and cadence, but they do not tell the reader whether the process improved forecast accuracy, inventory, service levels, or decision-making. The work therefore reads as administration rather than measurable operational value.
  **How to change it:** Replace one activity detail with the strongest defensible result, such as [forecast-accuracy change], [planning-cycle time saved], [inventory reduction], or [service-level change], and change "prepares" to "prepared" if retaining the sentence.
- **The route-planning savings figure lacks the baseline or calculation basis needed to validate it.** *(about 7 words to add)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  A reader cannot tell whether 1,800 hours came from measured before-and-after driver time, modeled route time, or another estimate. Without that reference point, the result may look speculative even though the rollout scope and intervention are clear.
  **How to change it:** Move the savings result immediately after the opening action and add [driver hours before versus after rollout], [hours saved per route or depot], or [the pre-rollout planning baseline used to calculate the annual saving].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The pickup-reminder bullet attributes the entire weekly-active-user increase to the reminders without causal evidence and omits the measurement periods.** *(about 5 words to add)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The interviews explain why reminders were chosen, but they do not isolate the reminders' effect from other changes or normal growth. Without the baseline and endpoint periods, the reader also cannot judge whether the increase was rapid, gradual, or seasonal.
  **How to change it:** Replace "by adding" with "after adding" and add [the baseline period and endpoint period] after the two user figures. Retain causal wording only if you can add [a controlled comparison or other evidence isolating the reminders' effect].
- **The food-redistribution figure does not show whether the 9 tonnes was weighed or estimated against a disposal baseline.** *(about 8 words to add)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  A hiring manager cannot tell how the waste-prevention claim was established, so the figure may read as a projection rather than a measured result. The strong environmental outcome loses credibility because its measurement basis is hidden.
  **How to change it:** Replace the counterfactual wording with [how the 9 tonnes was weighed or reconciled against recorded disposal], while retaining the redistribution figure.
- **The 95% pickup-slot rate cannot support the absolute claim that staff no longer covered gaps.** *(saves about 7 words if deleted)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  A 95% filled-slot rate leaves some slots unfilled and measures assignment rather than confirmed attendance during pickup. The line therefore cannot establish that staff coverage was eliminated.
  **How to change it:** Delete that phrase unless you can add [staff coverage hours or gaps eliminated]; otherwise replace it with a qualified result such as reduced staff coverage needs and clarify whether the system operated across both dining halls.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The hospital practicum's third bullet is a copied merchant-onboarding claim and should be removed or replaced with the actual hospital result.** *(saves about 20 words if deleted; otherwise about 6 words to replace)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  The first two bullets establish a hospital scheduling and intake project, so the sudden reference to a new merchant and 2,300 merchants looks unrelated. The duplicate claim also makes the entry appear misattributed and undermines confidence in the rest of the project.
  **How to change it:** Delete the bullet unless it genuinely belongs to this engagement; if it does, replace the merchant terms with [the hospital-network population and outcome actually affected]. If the project has no further hospital outcome, shorten or remove the entry.
- **The practicum's working-session bullet gives activity and scope but no scheduling outcome or affected scale.** *(about 7 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  A reader can see that clinic managers were engaged across the network, but cannot tell what changed as a result. Scope alone does not show improved scheduling, capacity, time, or error rates.
  **How to change it:** Replace the meeting activity with [the outpatient scheduling change adopted or implemented] and add [the number of clinics or appointments affected] or [the change in scheduling time, capacity, or error rate]. Retain the collaboration detail only if space allows.
- **The intake-form bullet does not quantify the shortening or the result that followed.** *(about 6 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  The word "shortened" gives no sense of scale, while adoption by front-desk staff shows implementation but not whether intake became faster, more complete, or less error-prone. The reader cannot judge the operational value of the intervention.
  **How to change it:** Replace or supplement "shortened" with [the number or percentage of fields removed] or [the reduction in intake time or errors], while retaining the four-clinic scope.
- **The remaining onboarding claim gives an unsupported 50% reduction without a time unit, boundary, or specific intervention.** *(about 8 words to replace)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  The reader cannot tell whether the interval was measured in days or hours or what counted as the start and end of first-payment time. "Redesigning onboarding" is also too broad to show what the candidate actually changed.
  **How to change it:** Delete the bullet if it does not belong to the hospital project; otherwise replace "Halved the time it takes" with [the before-and-after time to first payment] and replace "by redesigning onboarding" with [the specific onboarding change].

## Across the whole résumé

- **Move Experience before Education and place Projects immediately after Experience, with Skills last.** *(no words)*
  > Northfield School of Management | MBA
  With four years of professional experience, leading with the MBA makes the résumé read more like a student résumé than an experienced candidate moving into product management. Putting the projects after Experience lets the product evidence follow the Harbor internship and operations background instead of being separated from it.
  **How to change it:** Reorder the sections to Experience, Projects, Education, and Skills; move the existing sections without changing their wording.

## Set aside (7)

Worth knowing, and not worth the space on this page:

- format: personal details a reader is not meant to weigh are left off by convention — "Date of birth: 2 Nov 1996 | Nationality: American"
- s3:e0:b2: "filling 95% of pickup slots" does not establish whether the slots were actually staffed during pickup.
- s2:e1:b2, s2:e1:b3: "Coordinated" and "prepares" use inconsistent tense for a role that ended in Aug 2023; change "prepares" to "prepared." (and 2 more like it)
- s3:e0:b0, s3:e0:b1, s3:e0:b2, s3:e1:b1, s3:e1:b2: "to 3,100 students with two dining halls" makes "with two dining halls" ambiguous because it is unclear whether the app served the students, the dining halls, or both. (and 6 more like it)
- whole resume, dates: The timeline shows 8 months with no study or work listed from Jun 2018 to Mar 2019, immediately after the B.A. in Economics.
- skills: Figma is listed under Tools, but no entry shows creating wireframes, prototypes, or other design artifacts with Figma. Either show its use in the product work or remove it.
- whole resume, consistency, s2:e0: The Harbor Payments bullets [s2:e0:b4] and [s2:e0:b5] describe the same onboarding redesign and measurement effort, while [s2:e0:b5] contains the outcome. A reader may interpret them as two separate achievements; merge the measurement method into [s2:e0:b5] or remove [s2:e0:b4]. (and 1 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0aeb7c9e.md.

