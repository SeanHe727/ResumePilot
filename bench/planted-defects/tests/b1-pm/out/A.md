> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed:

- **Format/ATS:** clean one-page PDF, parses correctly, consistent layout, no layout warnings.
- **Content:** all 4 entries with bullets reviewed:
  - Harbor Payments
  - Crestline Logistics
  - Campus Food Rescue App
  - MBA Consulting Practicum
- **Wording:** all 4 entries reviewed.
- **Narrative:** full resume reviewed.
- **Job-description match:** not reviewed because no posting was provided.

Main changes to make:

1. **Resolve the duplicated or conflicting achievement.**  
   The Harbor Payments internship and MBA Consulting Practicum both claim a merchant-onboarding result involving 2,300 merchants and reduced time to first payment. That result does not fit the hospital practicum as currently described. Confirm which entry owns it, then remove or replace the incorrect bullet.

2. **Clarify the Crestline late-delivery metric.**  
   The bullet compares 11% and 7% while also changing the calculation by excluding weather-delayed shipments. Explain the measurement consistently so the result is not presented as a performance improvement caused merely by changing the calculation.

3. **Add outcomes to activity-only bullets.**  
   The weakest areas are:
   - the chargeback research bullet, which gives the interview count but not the size or consequence of the problem;
   - the S&OP coordination bullet, which describes recurring preparation but not its effect;
   - both hospital-practicum bullets, which describe meetings and process changes without showing operational results.

4. **Support or qualify causal claims.**  
   Several bullets attribute the entire result to one intervention:
   - checkout conversion to the one-page flow;
   - user growth to pickup reminders;
   - reduction in late deliveries to the calculation change.  
   Verify the measurement method and distinguish correlation from demonstrated causation.

5. **Add context for figures.**  
   Clarify whether:
   - the 35% checkout improvement is relative or percentage-point growth;
   - the 30% pick-error reduction uses a defined baseline;
   - the 1,800 saved driver hours is measured or modeled;
   - the 95% pickup-slot figure supports the claim about eliminating staff coverage.

6. **Reorder the sections.**  
   The narrative review recommends placing **Experience before Education**, since the resume includes five years of post-undergraduate work and an MBA-led product transition.

7. **Address the June 2018–March 2019 gap.**  
   Add relevant activity if one exists, or be prepared to explain the period.

8. **Check the Skills section against the experience bullets.**  
   The narrative review identified skills such as A/B testing, SQL, and Figma that are not demonstrated in the entries. Either connect them to specific experience or remove them.

9. **Clean up wording and tense.**
   - Fix “Cut warehouse pick errors 30%” so the percentage is grammatically complete.
   - Use past tense consistently for the completed Crestline role.
   - Expand “S&OP” on first use.
   - Replace passive constructions in the campus-app and hospital-practicum bullets where they obscure ownership.
   - Make the strongest outcomes more prominent rather than burying them after process details.

10. **Review personal details.**  
    The format check flagged “Date of birth” and “Nationality” as personal details conventionally omitted from resumes.

The full specialist report contains the entry-by-entry comments and bullet IDs. No resume wording was changed.

> /report
# Review: resume.pdf

**76/100** — format 100 · content 59 · wording 84 · narrative 54

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The onboarding bullets duplicate each other and leave the strongest achievement split across two lines.**
   > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
   The resume presents the measurement method in one bullet and the result in another, then repeats the same merchant-onboarding result under the hospital practicum. A recruiter may question which role actually owns the work and miss the internship's clearest product story.
   **How to change it:** Delete the duplicate practicum claim, merge the comparison method into the Harbor outcome bullet, and state that the opt-in comparison was observational unless you have a controlled evaluation. Add the measured result from that comparison: [metric] was [new-flow result] versus [old-flow result].
2. **The late-delivery line incorrectly presents a reporting-definition change as an operational improvement.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   Excluding weather-delayed shipments removes some late shipments from the calculation rather than making deliveries arrive sooner. The 11% and 7% figures are not a clean before-and-after comparison unless the same exclusion was applied to both periods, so the claim can undermine trust in the metric.
   **How to change it:** Replace "Cut late deliveries" with "Reduced the reported late-delivery rate" and identify both figures as rates under the revised definition. If delivery performance actually improved, replace them with [comparable late-delivery rates calculated using the same weather-delay treatment in both periods] and add [the operational intervention].
3. **The pickup-reminder line attributes all user growth to the reminders without evidence that they caused it.**
   > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
   The interviews support the decision to test reminders because students missed pickup windows, but they do not prove that reminders produced the full increase from 400 to 1,150 weekly active users. A product reader may therefore question the causal claim and the evaluation discipline.
   **How to change it:** Replace "by adding pickup reminders" with "after adding pickup reminders" unless you can add [the evaluation showing how much of the user growth came from reminders]. Replace "chosen after 60 user interviews showed students missed pickup windows" with "after interviewing 60 users who reported missing pickup windows."

## Already working

- s2:e0:b5: It is the entry's strongest end-to-end product story: intervention, outcome, metric, and scale are all present.
- s2:e1:b1: The outcome appears before the method and is tied to a concrete operational metric.
- s2:e0:b0: It leads with a business outcome rather than a task.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The checkout-conversion claim does not identify its baseline or establish that the flow replacement caused the gain.** *(about 8 words to add)*
  > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
  A reader cannot tell whether 35% means a relative increase or a percentage-point change, so the size of the result is ambiguous. The line also leaves open whether traffic mix, seasonality, or another change produced the improvement rather than the one-page flow.
  **How to change it:** Replace the percentage with [conversion before] to [conversion after] and label it as a relative or percentage-point increase. Add the supporting [randomized test or comparison period] and [sample or merchant scope] rather than attributing the result to the redesign alone.
- **The chargeback research claims to size a problem without providing quantitative sizing evidence.** *(about 8 words to add)*
  > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
  Twenty-five interviews can reveal causes and user perspectives, but interviews alone do not establish the rate, volume, or cost of a problem across a population. Without that anchor, the roadmap priority appears to rest on qualitative input alone.
  **How to change it:** Replace "size" with "characterize" if interviews were the only input, or name the quantitative source and analysis used alongside them: [chargeback or transaction data and how it was analyzed]. Add [chargeback rate, volume, or cost] across [the relevant population].
- **The ticket-queue reduction cannot be checked because the line omits the starting and ending counts and measurement window.** *(about 8 words to add)*
  > Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.
  Closing 140 tickets does not by itself establish that the queue fell by half; the result depends on the initial queue and tickets arriving during the period. A hiring reader may therefore doubt the percentage even though the operating responsibility is credible.
  **How to change it:** Add the queue counts and measurement window: from [starting open tickets] to [ending open tickets] between [dates], alongside the 140 tickets closed.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The pick-error claim is grammatically incomplete and does not define what the 30% reduction measures.** *(about 5 words to add)*
  > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
  The reader cannot tell whether 30% is a relative reduction in the error rate, a reduction in total errors, or a percentage-point change. That ambiguity makes the result harder to compare and verify.
  **How to change it:** Change "Cut warehouse pick errors 30%" to "Cut warehouse pick errors by 30%" and, if available, add [the before-and-after error rates or error counts and comparison period].
- **The S&OP bullet describes recurring coordination but gives no measurable value and uses inconsistent tense and unexplained jargon.** *(about 5 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  A reader can see the meeting cadence and forecast-pack responsibility but cannot tell whether the work improved forecasting, shortened planning, or enabled a material decision. "Prepares" is also present tense for a role that ended in 2023, and readers outside logistics may not know S&OP.
  **How to change it:** Change "S&OP" to "sales and operations planning (S&OP)" and "prepares" to "prepared." Keep the scope, then add [forecast-accuracy change], [planning-cycle reduction], or [business units, sites, or decisions covered].
- **The route-planning bullet buries its strongest result and does not explain how the 1,800-hour saving was measured.** *(no words)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  The annual saving is the most recruiter-visible evidence of value, but it appears after rollout and training details. Without knowing whether it came from logged hours, route-time comparisons, or a model, the reader cannot judge how directly the tool produced it.
  **How to change it:** Move "saving 1,800 driver hours a year" to the front, then follow with the three-depot rollout and training details. Add [whether the saving came from actual logged hours, route-time comparisons, or a forecast] and, if available, the comparison period.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The 95% pickup-slot fill rate does not establish that staff no longer needed to cover gaps.** *(about 8 words to add)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  A 95% fill rate leaves 5% of slots uncovered, and the line does not say whether staff covered those slots or whether they occurred at important times. The unsupported absolute claim can make the otherwise credible coverage figure look inflated.
  **How to change it:** Replace the clause with "reducing staff coverage needs by [the staff coverage hours or gaps eliminated each week]" or state the actual consequence supported by the 95% fill rate. Change "with two dining halls" to "across two dining halls."
- **The food-rescue result uses a longer passive construction than necessary.** *(saves about 3 words)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  The phrase makes the environmental outcome slower to scan without adding evidence. The concise wording keeps the same meaning and gives the result more room to stand out.
  **How to change it:** Replace "that would have been thrown away" with "otherwise discarded."

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The final practicum bullet incorrectly assigns Harbor's merchant-onboarding result to a hospital project and duplicates the Harbor entry.** *(saves about 15 words)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  The entry establishes outpatient scheduling and patient intake for a regional hospital network, so a merchant population and merchant-payment result make the entire engagement look inaccurate. The 9-days-to-4-days result is also approximately a 56% reduction, not exactly a halving, which makes the duplicate formulation more conspicuous.
  **How to change it:** Delete the merchant-payment bullet and keep the achievement and figures only under Harbor Payments. Replace it with [the measurable result produced by the hospital practicum], using [the hospital clinics, patients, appointments, or other population actually measured] and the correct before-and-after result; do not use "by redesigning onboarding."
- **The outpatient-scheduling bullet describes stakeholder activity without stating what changed or what result it produced.** *(about 8 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  Weekly sessions show engagement, but a hiring manager cannot tell whether scheduling improved, a recommendation was delivered, or a process was adopted. "Across the network" adds scope but does not show effectiveness.
  **How to change it:** Change "Held weekly working sessions" to "Led weekly sessions," then add [the scheduling outcome or recommendation adopted] and [the number of clinics or scheduling measures affected] with [the resulting change].
- **The intake-process bullet stops at implementation and does not quantify what the shortened form improved.** *(about 8 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Adoption by front-desk staff shows acceptance, not a benefit to patients or staff. The four-clinic scope is useful, but without the amount of shortening or an outcome measure, the reader cannot judge the scale of the improvement.
  **How to change it:** Use active voice: "Mapped patient intake at 4 clinics and shortened the intake form," then add [the change in intake time, completion, errors, or another measured result]. Move the adoption result earlier if it is important: [shortened form] adopted by front-desk staff.

## Across the whole résumé

- **Move EXPERIENCE above EDUCATION because the current order makes a candidate with five years of post-undergraduate work read as education-led.** *(no words)*
  > Northfield School of Management
  The reader encounters the MBA and bachelor's degree before the substantive Operations Analyst and product experience. That ordering can obscure the career evidence that should carry the first impression, while the MBA can remain visible below experience.
  **How to change it:** Place the experience entries before the education entries; retain the MBA and bachelor's degree below them.
- **The résumé leaves an unexplained gap from June 2018 to March 2019.** *(about 3 words to add)*
  > Jun 2018
  The bachelor's degree ends in June 2018 and the Operations Analyst role begins in March 2019, so a reader may wonder whether work, study, or another activity is missing. An unexplained gap can prompt questions before the candidate's experience is assessed.
  **How to change it:** Add the relevant activity for Jun 2018–Mar 2019 as [employment, study, caregiving, travel, or other explanation], or show the dates of an activity already omitted.
- **Remove personal details that readers are not expected to weigh, including the date of birth and nationality.** *(saves about 10 words)*
  > Date of birth
  These details do not support the candidate's qualifications and are conventionally omitted from résumés. Leaving them in can distract from relevant evidence and introduce information a hiring reader should not need to consider.
  **How to change it:** Delete "Date of birth: 2 Nov 1996 | Nationality: American."
- **The résumé's strongest results should lead their bullets, while passive and buried wording weakens several otherwise credible achievements.** *(saves about 4 words)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  The route-planning result is hidden after the rollout and training, and the hospital intake bullet hides ownership behind passive voice. Leading with the measurable outcome and using direct verbs lets a recruiter see value and responsibility before process detail.
  **How to change it:** Move "saving 1,800 driver hours a year" before the rollout and training details, replace "that would have been thrown away" with "otherwise discarded," and use "Mapped patient intake at 4 clinics and shortened the intake form" in the practicum. Remove the duplicate merchant bullet rather than repeating the same result.

## Set aside (4)

Worth knowing, and not worth the space on this page:

- format: personal details a reader is not meant to weigh are left off by convention — "Date of birth: 2 Nov 1996 | Nationality: American"
- skills: A/B testing — no entry shows a controlled A/B test; the onboarding comparison is described as an opt-in versus old-flow comparison. (and 3 more like it)
- s3:e0:b1, s3:e0:b2: "chosen after 60 user interviews showed students missed pickup windows" passively describes the candidate's product decision and makes the sentence harder to scan; use "after interviewing 60 users who reported missing pickup windows." (and 1 more like it)
- s2:e0: s2:e0:b0 and s2:e0:b5 repeat: Both describe redesigning a merchant checkout or onboarding flow, though they use different outcomes. Clarify that they were separate initiatives or merge them.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8e5c4321.md.

