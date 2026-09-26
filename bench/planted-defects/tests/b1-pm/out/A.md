> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the complete resume:

- **Format/ATS:** checked
- **Narrative and chronology:** checked
- **Content and wording:** checked for all 4 entries with bullets
- **Education:** included in the overall narrative review; no bullet-level review was applicable
- **Job-description match:** not reviewed because no posting was provided

The file is one page, parses cleanly, and has no layout warnings. The detailed report is available in `/report --full`.

## Changes to prioritize

### 1. Resolve the apparent project inconsistency

The **MBA Consulting Practicum** is identified as work for a regional hospital network, but its final bullet refers to:

- merchants
- onboarding
- first payments
- 2,300 merchants

This appears inconsistent with the rest of the entry. Either verify that the bullet belongs there or replace it with the correct hospital-project result. This is the most important issue because it affects credibility.

### 2. Correct the Operations Analyst metrics

The first Crestline bullet reports a reduction in late deliveries from 11% to 7% by excluding weather-delayed shipments. That makes the result appear to come from changing the calculation rather than improving delivery performance. Use a consistent denominator or describe the operational change and its independently measured result.

Also clarify:

- what period or baseline supports the 30% reduction in pick errors
- what changed as a result of preparing the S&OP materials
- how the annual 1,800 driver-hour saving was measured

### 3. Make product metrics more precise

Several Harbor Payments and project bullets need clearer measurement context:

- State whether the 35% checkout-conversion improvement is a relative increase or a percentage-point increase.
- Explain how the chargeback problem was sized, if you have the relevant business measure.
- For the onboarding redesign, include the actual comparison result rather than only describing the comparison groups.
- Avoid presenting the entire increase in weekly active users as caused solely by pickup reminders unless that attribution is supported.
- Explain how the estimate of 9 tonnes of rescued food was calculated.

### 4. Reorder the experience and projects

The current sequence emphasizes operations before the product-focused work. The narrative review found that the transition to product management would read more directly if the product-relevant material were grouped closer together.

Consider placing the **Campus Food Rescue App** and **Harbor Payments** material together, and consider whether the projects section should appear before the older Operations Analyst role. The final ordering should depend on the product roles you are targeting.

### 5. Address chronology

There is an apparent gap from **June 2018 to March 2019** between the B.A. and the Operations Analyst position. If there was employment, study, travel, or another relevant activity during that period, add it if appropriate. If not, be prepared to explain it in applications or interviews.

### 6. Tighten wording and consistency

The wording review identified these changes:

- Replace passive constructions in the food-rescue and hospital-project bullets with clear descriptions of your actions.
- Remove redundant timing such as “over the summer” when the dates already establish it.
- Use past tense consistently for the completed Operations Analyst role.
- Expand “S&OP” on first use.
- Correct the incomplete construction “Cut warehouse pick errors 30%” so the percentage is grammatically connected to the verb.
- Replace vague phrases such as “working sessions” with the specific work performed.

### 7. Check the Skills section against the evidence

The narrative review identified skills that are listed but not clearly demonstrated in the experience or project bullets, including:

- A/B testing
- PRDs
- SQL
- several additional skills noted in the full report

Either add evidence for those skills in the relevant entries or remove skills that you cannot support from the resume.

The strongest material is the Harbor Payments internship: it shows research, prioritization, requirements, cross-functional work, launch, and measurement. The main work now is to ensure every metric is defensible, remove the hospital/merchant inconsistency, and make the product-management story more prominent.

> /report
# Review: resume.pdf

**79/100** — format 100 · content 65 · wording 81 · narrative 62

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The practicum contains a merchant-onboarding bullet that duplicates Harbor Payments and conflicts with the stated hospital-network client.**
   > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
   The repeated 2,300-merchant scope and first-payment result make the line look copied or misattributed rather than like work completed for a Regional Hospital Network. That can make a hiring manager question the credibility of the entire entry and the surrounding metrics.
   **Instead:** Replace it with the verified hospital-practicum outcome, or remove it
2. **The late-delivery result changes the metric denominator, so it does not establish an operational improvement.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   Excluding weather-delayed shipments can lower the reported late-delivery rate without making deliveries faster or more reliable. A logistics reader may therefore see the 11%-to-7% change as metric redefinition, and the ambiguity between percentage points and relative reduction damages trust in the other figures.
   **Instead:** Use one inclusion rule for both periods, or describe the work as standardizing the reporting rule
3. **The onboarding measurement bullet reports a comparison without its outcome and does not establish that self-selection caused the result.**
   > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
   A hiring reader can see which merchants entered each group but cannot tell what metric changed, by how much, or whether the groups differed before the redesign. Without that information, the measurement reads as methodology rather than evidence and may overstate causal confidence.
   **Instead:** Combine it with the measured result, metric, comparison basis, and any control or adjustment used

## Already working

- s2:e0:b1: Clearly connects requirements and success metrics to a shipped product outcome.
- s2:e0:b2: Shows a complete discovery-to-decision chain from interviews to roadmap prioritization.
- s2:e0:b5: Uses a median and a clear before-and-after comparison, making the time result interpretable.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The onboarding result needs to state how the 9-day-to-4-day comparison was designed.** *(about 6 words to add)*
  > Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
  The before-and-after numbers are clear, but the line attributes the change to the redesign without showing whether the pilot used a control group or a defined pre/post comparison. A reader may therefore discount the result because seasonality, merchant mix, or another process change could explain part of it.
  **Instead:** Name the controlled pilot or defined pre/post comparison supporting the result
- **The checkout-conversion figure does not identify whether 35% is relative lift or percentage points.** *(about 5 words to add)*
  > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
  Those units describe materially different improvements, so a payments reader cannot judge the size of the result or reproduce the calculation. The otherwise strong product outcome loses precision at the point where its scale should be clearest.
  **Instead:** Label the figure as a relative increase or percentage-point change and give the period
- **The chargeback discovery bullet does not quantify what the business case established.** *(about 5 words to add)*
  > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
  The interview count shows research scope, but “size the chargeback problem” does not tell the reader whether the case was based on cost, volume, or affected merchants. Without that anchor, the roadmap-priority decision is asserted rather than demonstrated.
  **Instead:** Add the estimated chargeback cost, volume, or affected-merchant rate

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The warehouse pick-error result needs a comparison basis and the missing preposition.** *(about 5 words to add)*
  > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
  “30%” could mean a relative reduction or a percentage-point change, and the line gives no baseline or comparison period. That prevents the reader from judging the scale of the improvement even though the two-site scope and retraining detail are useful.
  **Instead:** Say “by 30%” and add baseline/post rates or the comparison period
- **The S&OP bullet describes recurring responsibilities but gives no business outcome.** *(about 8 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  Coordinating meetings and preparing a pack show ownership, while quarterly frequency shows cadence, but neither shows whether forecasting, inventory, service, or planning decisions improved. “S&OP” is also unexplained for readers outside the team, and “prepares” is inconsistent with the completed role.
  **Instead:** Use past tense, expand sales and operations planning, and add its clearest measurable result
- **The driver-hours saving lacks the process or baseline against which the saving was measured.** *(about 6 words to add)*
  > Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.
  The annual figure and three-depot scope show impact, but the reader cannot tell whether the hours were compared with the prior routing process, a plan, or an estimate. That makes the saving harder to validate and separates the result from the route-planning rollout.
  **Instead:** Name the prior process or baseline used to calculate the saving

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The pickup-slot bullet overclaims that staff coverage was no longer needed despite a 95% fill rate.** *(about 2 words to change)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  A 95% fill rate leaves 5% of slots unfilled, so the stated figure cannot establish that every coverage gap disappeared. A reader may treat the final claim as exaggeration rather than as a supported staffing benefit.
  **Instead:** Say the system reduced staff coverage gaps, unless a zero-coverage measure exists
- **The 9-tonne diversion figure does not explain how the counterfactual amount was recorded.** *(about 6 words to add, with no words added for the wording change)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  The reader cannot tell whether the food was weighed, estimated from orders, or inferred from inventory, so confidence in the environmental outcome depends on an unstated measurement basis. The passive phrase also makes the claim longer than necessary.
  **Instead:** Identify the measurement basis and use “otherwise discarded”
- **The user-growth bullet attributes the entire increase to reminders without isolating their contribution.** *(about 2 words to change)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The 60 interviews justify choosing reminders because students missed pickup windows, but they do not prove that reminders caused all of the increase from 400 to 1,150. Presenting the result as occurring after the rollout would preserve the evidence without overstating causality.
  **Instead:** Say users increased after the reminder rollout, or add evidence isolating its contribution

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The practicum bullets describe activities and implementation but do not show what the hospital scheduling work achieved.** *(about 10 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Weekly sessions establish stakeholder engagement, but they do not reveal whether the candidate analyzed demand, mapped bottlenecks, or facilitated a scheduling decision. Likewise, adoption of a shortened form shows use but not whether intake became faster, simpler, or more accurate; the passive wording further obscures ownership.
  **Instead:** Name the decisive analysis or scheduling change, state the intake improvement, and use active ownership language

## Across the whole résumé

- **The résumé presents an unexplained eight-month gap between the B.A. and the Operations Analyst role.** *(about 4 words to add)*
  > Jun 2018
  A reader can see the dates but cannot tell whether the period reflects work, study, travel, or another deliberate transition. Leaving the gap unexplained creates an avoidable question before the reader reaches the stronger experience.
  **Instead:** Add a brief, factual explanation for the gap
- **The product-focused projects and internship should appear before the older operations role and next to each other.** *(no words)*
  > Crestline Logistics | Operations Analyst
  The current ordering makes the four-year logistics role the first substantial experience after education, so the reader may see operations as the main direction rather than evidence supporting a move into product management. Putting Campus Food Rescue and Harbor Payments together lets the strongest transition evidence register earlier.
  **Instead:** Move the product entries ahead of Crestline and keep them adjacent

## Set aside (5)

Worth knowing, and not worth the space on this page:

- s2:e1:b3: "saving 1,800 driver hours a year" gives the result and time unit but not what process or baseline the saving was measured against.
- format: personal details a reader is not meant to weigh are left off by convention — "Date of birth: 2 Nov 1996 | Nationality: American"
- s2:e0:b3: "over the summer" repeats timing already supplied by the entry dates and adds little to the result.
- skills: A/B testing — no entry describes running an experiment, comparing variants, or using test results. (and 6 more like it)
- s3:e1:b2: "by redesigning onboarding" does not identify what was redesigned or what part the candidate owned.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c4c79c67.md.

