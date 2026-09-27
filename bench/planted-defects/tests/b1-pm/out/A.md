> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed:

- **Format/ATS:** full document
- **Content:** all 4 entries with bullets
- **Wording:** all 4 entries with bullets
- **Narrative:** full resume
- **Job-description match:** not run because no posting was provided

The full report is available via `/report --full`.

## Highest-priority changes

1. **Resolve the Harbor Payments contradictions**
   - One bullet says the new checkout flow applied to **all merchants**.
   - Another says some merchants opted in while others remained on the old flow.
   - Clarify the actual rollout scope.
   - The onboarding result involving **2,300 merchants** also appears again under the hospital practicum. Keep that achievement with Harbor Payments and replace the practicum bullet with the actual hospital-related result.

2. **Correct or clarify metric definitions**
   - The Crestline bullet reporting late deliveries falling from **11% to 7%** appears to change the calculation by excluding weather delays. Use a consistent before-and-after measure or clearly distinguish a reporting change from an operational improvement.
   - Clarify whether the **35% checkout conversion improvement** means relative growth or percentage-point growth, and identify the comparison baseline.
   - The app’s increase from **400 to 1,150 weekly active users** should be framed so it does not imply that adding reminders alone caused the entire increase unless that has been established.

3. **Strengthen the MBA Consulting Practicum entry**
   - Its first two bullets concern hospital scheduling and patient intake.
   - Its final bullet concerns merchant onboarding and first payment, which belongs to a different context.
   - Replace or relocate that bullet.
   - The remaining bullets describe activities but do not yet state the resulting scheduling or intake improvement.

4. **Reorder the resume**
   - Put **Experience** first.
   - Place **Projects** next, followed by **Education**, since the resume includes more than four years of prior professional experience and relevant product work.
   - Account for the **June 2018–March 2019** period between the bachelor’s degree and Crestline Logistics if there was work, study, travel, or another relevant activity.

5. **Fix wording and tense**
   - Change “prepares” in the completed Crestline role to past tense.
   - Spell out **S&OP** on first use.
   - Correct “Cut warehouse pick errors 30%” to grammatically include “by.”
   - Replace vague activity language such as “Held weekly working sessions” and “Set up a volunteer shift system” with wording that makes the delivered change clear.
   - Convert the passive patient-intake bullet to active voice.

6. **Check unsupported or unnecessary details**
   - The narrative review flagged **Figma** as a listed tool without supporting evidence elsewhere in the resume.
   - The format review flagged personal details such as **date of birth and nationality** as details conventionally omitted from resumes; remove them if they are currently included.

The resume parses cleanly, fits on one page, and has no ATS extraction blockers.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 79 · wording 81 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Do not add personal details such as date of birth or nationality to the résumé.**
   > Date of birth: 2 Nov 1996 | Nationality: American
   These details are not information a recruiter is meant to weigh and are conventionally left off a résumé. Including them uses space without strengthening the candidacy and can introduce irrelevant personal information into screening.
   **How to change it:** Leave date of birth and nationality out of the résumé; do not add them to the file.
2. **Move Education below Experience and likely below Projects so the page leads with more than four years of professional and product evidence.**
   > Northfield School of Management | MBA
   The current ordering gives the MBA and bachelor's degree prominence before the Harbor Payments, Crestline Logistics, and product work. A recruiter deciding quickly will see the candidate's strongest evidence later than necessary, even though the résumé shows substantial experience.
   **How to change it:** Move the Education section below Experience and below Projects if the resulting layout remains clear; do not change the education text itself.
3. **“Improved checkout conversion by 35% ... for all merchants” overstates the aggregate result and leaves the comparison and meaning of 35% unclear.**
   > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
   An aggregate result across merchants does not show that every merchant improved by the same amount because merchant mix, devices, payment methods, and baseline conversion can differ. The reader also cannot tell whether 35% means relative growth or percentage-point growth, so the size and credibility of the result are difficult to judge.
   **How to change it:** Replace “for all merchants” with the measured population, such as “across participating merchants,” and state the before-and-after conversion rates or specify whether 35% was a relative increase or a percentage-point increase over [comparison period].

## Already working

- s2:e0:b1: Shows ownership of core product work rather than only participation.
- s2:e1:b3: Combines ownership, implementation scope, adoption reach, and a quantified annual benefit.
- s3:e0:b0: Uses multiple checkable scope signals: student reach, dining-hall coverage, food redistributed, and first-year timing.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The onboarding result is duplicated or assigned to the wrong project because the same 2,300-merchant redesign appears under Harbor Payments and the earlier MBA practicum.** *(no words if moved; otherwise saves about 15 words)*
  > Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
  The practicum is dated January–May 2024, before the Harbor Payments internship dated June–August 2024, yet both entries claim essentially the same reduction in first-payment time for 2,300 merchants. A reader cannot tell which project owned the result and may treat it as inflated duplication rather than verified impact.
  **How to change it:** Verify the dates and merchant populations, distinguish the two redesigns if they were different, or keep the 2,300-merchant result under Harbor Payments and remove or relocate the duplicate practicum line.
- **The opt-in comparison is confounded and reports no measured onboarding outcome.** *(about 8 words to add)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  Merchants who opted into the new flow may differ from those who stayed on the old flow in size, motivation, sophistication, or readiness, so the comparison cannot isolate the redesign's effect without randomization or credible adjustment. The line then stops at describing the analysis and gives the recruiter no difference in time, completion, or another product result.
  **How to change it:** Label the result as an observational comparison unless randomization or an adjustment method was used, and add [the measured difference in the key onboarding outcome] between the new- and old-flow groups; fold the method into the stronger result line or delete this standalone bullet if it duplicates it.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The late-delivery line incorrectly presents a KPI-definition change as an improvement in delivery performance.** *(about 6 words to add)*
  > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
  Excluding weather-delayed shipments changes the measured population and can lower the reported rate without making any shipment arrive sooner. The 11% and 7% figures are therefore not comparable as actual delivery performance unless both use the same inclusion rules.
  **How to change it:** Replace “Cut late deliveries from 11% to 7%” with “Reduced the adjusted late-delivery rate from 11% to 7% after excluding weather-delayed shipments,” or use [before-and-after rates under the unchanged company KPI] and state the operational intervention that produced the improvement.
- **The line uses the wrong tense for an ended role: “prepares” must be past tense.** *(no words)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  The Crestline role ended in August 2023, while “Coordinated” correctly describes completed work in the past tense. The mixed tense makes the timing of the responsibility inconsistent and can make the reader wonder whether the role is still active.
  **How to change it:** Change “prepares” to “prepared.”
- **The S&OP line describes activities without a business result, uses an unexplained abbreviation, and needs a consistent past-tense verb.** *(about 8 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  “Coordinated” and “prepares” make the line read as meeting administration rather than an operations-analysis contribution, and the abbreviation may be unclear to readers outside the team. Without a result or measure, the recruiter cannot judge what the process enabled for planning, inventory, capacity, or service performance.
  **How to change it:** Change “prepares” to “prepared,” spell out [Sales and Operations Planning] before using “S&OP,” and replace the activity-only ending with [the decision or operational outcome enabled] plus [one measure such as forecast accuracy, planning-cycle time, inventory, capacity, or service performance].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The weekly-active-user increase should not be attributed entirely to pickup reminders without causal evidence.** *(no words)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The figures show that weekly active users rose from 400 to 1,150 after the change, but the 60 interviews only explain why reminders were chosen. Seasonality, marketing, overall app growth, or other changes could have produced part of the increase, so the causal wording overstates the evidence.
  **How to change it:** Change “Raised” to “Increased” or say users increased from 400 to 1,150 “after adding pickup reminders”; claim that reminders caused the increase only if supported by [a controlled or quasi-experimental comparison].
- **The 95% volunteer fill rate is internally inconsistent with claiming that staff coverage gaps were eliminated.** *(saves about 2 words)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  A 95% fill rate leaves 5% of pickup slots uncovered, so volunteers alone could not remove the need for staff if every slot required coverage. The wording also frames the work as a generic setup and describes the result indirectly.
  **How to change it:** Use “Implemented a volunteer shift system” and state that it filled 95% of pickup slots; claim eliminated staff coverage gaps only if [the remaining 5% were cancelled, tolerated, or covered through another reliable arrangement], otherwise remove that claim.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The practicum bullet is wrong for a hospital-network project: it claims a merchant-onboarding result that belongs to another entry.** *(about 12 words to replace)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  Merchants, first payments, and merchant onboarding do not fit the surrounding clinic scheduling and patient-intake work. The same 2,300-merchant result already appears under Harbor Payments, so this line looks copied, duplicated, and assigned to the wrong project.
  **How to change it:** Replace the bullet with [the verified outcome of the outpatient scheduling or patient-intake work], or remove it; do not retain the merchant population or first-payment metric unless they genuinely describe this hospital project.
- **The scheduling bullet states meeting activity but not the scheduling change or measurable result produced.** *(about 8 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  “Held weekly working sessions” tells the recruiter that participation occurred but not what decision or intervention the candidate led. “Across the network” supplies scope without showing whether wait time, appointment capacity, utilization, or no-shows improved.
  **How to change it:** Replace “Held” with the specific action, such as “Led,” and add [the outpatient scheduling change or decision adopted] plus [the strongest measured result and comparison point].
- **The patient-intake bullet hides ownership and gives no measurable size or benefit for the shortened form.** *(about 8 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Passive wording makes it unclear that the candidate performed the mapping and redesign, while adoption by front-desk staff is buried after the methods. The reader still cannot tell how much the form changed or whether intake became faster, easier, or less error-prone.
  **How to change it:** Use active phrasing such as “Mapped patient intake at 4 clinics and shortened the intake form,” lead with the adoption by front-desk staff, and add [the number of fields or questions removed or the change in intake-completion time] plus [the resulting operational or patient-facing improvement].

## Set aside (9)

Worth knowing, and not worth the space on this page:

- s2:e0:b1: "the team shipped it two weeks ahead of plan" shows delivery timing but not what changed for merchants, support, or dispute operations after launch.
- s2:e0:b3: "cutting the open-ticket queue by half" gives a relative change but does not state the starting queue size or when the comparison was made.
- s3:e0:b0: "Launched a surplus-food pickup app" identifies the deliverable but not the product-lead work behind launching it.
- whole resume, dates: Jun 2018 to Mar 2019: eight months with no study or work listed after the B.A. and before the Crestline Logistics role.
- skills: Figma — listed under Tools, but no entry shows wireframing, mockup, prototyping, or other work that specifically supports using Figma; a reader would expect it in a bullet describing the product or app interface design.
- s2:e0:b3: The phrase "over the summer" adds little because the entry already gives the internship dates and can be removed without losing meaning.
- s2:e1:b1: "Cut warehouse pick errors 30%" is grammatically incomplete because the percentage needs the preposition "by"; use "Cut warehouse pick errors by 30%".
- s3:e1:b2: "the time it takes a new merchant to receive a first payment" uses present-tense wording inside an ended project; change it to "the time it took a new merchant to receive a first payment." (and 2 more like it)
- s2:e0: s2:e0:b0 and s2:e0:b4 repeat: Both describe the redesigned merchant flow and its evaluation; fold the comparison method from b4 into the stronger result in b0 or delete b4 as a standalone line.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-deced79c.md.

