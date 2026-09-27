> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
4 experience/project entries had content and wording reviews; narrative and format reviews ran for the whole resume; education was not reviewed because it has no bullets; no job-description match was run because no posting was provided.

The most important changes are:

1. **Correct the duplicate/misplaced Harbor Payments achievement.**  
   The MBA Consulting Practicum bullet about onboarding and “2,300 merchants” duplicates the Harbor Payments result and does not fit a hospital-network project. Remove it, replace it with the actual hospital-project result, or move it to Harbor Payments if that is where it belongs.

2. **Add outcomes to activity-only bullets.**  
   The weakest examples are:
   - “Measured the onboarding redesign by comparing…”
   - “Coordinated the quarterly S&OP review…”
   - “Held weekly working sessions with clinic managers…”
   
   Each explains what you did but not what changed. Add the measured finding, decision, improvement, or implementation result.

3. **Clarify questionable metrics and causal claims.**
   - Explain what the “35%” checkout-conversion improvement is measured against.
   - The Crestline statement about reducing late deliveries by excluding weather-delayed shipments may read as a reporting-definition change rather than an operational improvement; distinguish the measurement change from any actual delivery improvement.
   - Add timing to the “400 to 1,150” weekly-active-user comparison.

Additional changes:

- Move **Experience** and **Projects** above **Education** to emphasize the transition into product management.
- Explain the eight-month gap between the bachelor’s degree ending in June 2018 and Crestline beginning in March 2019, if relevant.
- Change “prepares” to past tense in the former Crestline role and spell out or clarify “S&OP.”
- Fix “Cut warehouse pick errors 30%” to include “by.”
- Make ownership clearer in the hospital practicum’s passive-voice bullet.
- The PDF is one page, extracts cleanly, and has no ATS parsing blockers. The format review also noted that date of birth and nationality are normally omitted.
- Preserve the strongest quantified accomplishments, especially the Harbor Payments onboarding result, Crestline’s warehouse-error reduction, and the food-rescue app’s adoption metrics.

The full specialist report is available with `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 77 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **The résumé includes personal details conventionally left off.**
   > Date of birth: 2 Nov 1996
   Date of birth and nationality are not relevant to evaluating the candidate. Their inclusion adds irrelevant information and avoidable screening concerns.
   **How to change it:** Delete the date-of-birth and nationality details.
2. **The 35% checkout-conversion improvement is presented as caused by the flow replacement without a credible comparison.**
   > Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.
   A before-and-after result does not establish causation; traffic mix, seasonality, pricing, or measurement could explain it. A recruiter may therefore question the claim.
   **How to change it:** State the observed change without causal attribution, or add [a randomized control or other credible comparison supporting the 35% attribution].
3. **Interviews cannot by themselves quantify the size of a chargeback problem.**
   > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
   They show perceptions and needs, not prevalence or financial impact. A reader may ask what quantitative evidence supported the roadmap priority.
   **How to change it:** Say the interviews identified merchant needs, or add [quantitative data and a representative sampling method supporting the size estimate] and [the strongest quantified finding].

## Already working

- s2:e0:b1: Connects product definition work to a concrete delivery result.
- s2:e1:b3: Combines ownership, implementation scope, training, and quantified business impact.
- s3:e0:b0: Combines a concrete launch with a substantial first-year outcome.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The onboarding analysis states a self-selected comparison and a causal result without valid causal evidence.** *(about 3 words to add)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  > Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.
  Opt-in merchants may differ systematically from non-opt-ins, so the comparison cannot establish the redesign's effect. The 9-to-4-day figures support a descriptive reduction, not attribution to the redesign.
  **How to change it:** Describe the result as observational, saying time fell from 9 days to 4 days in the pilot population, or add [a credible causal comparison].

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The late-delivery reduction is not an actual reduction because weather-delayed shipments were excluded.** *(about 3 words to add)*
  > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
  Changing the population and denominator only shows improvement in a redefined metric. The numerical change is four percentage points, not a 7% reduction in actual late deliveries.
  **How to change it:** Say the weather-excluded rate fell from 11% to 7%, or compare all shipments consistently.
- **"Cut warehouse pick errors 30%" is grammatically incomplete.** *(adds 1 word)*
  > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
  The missing preposition interrupts the scan and distracts from a strong operational result.
  **How to change it:** Insert "by" before "30%."
- **"Prepares" is the wrong tense for a completed role.** *(no words)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  The bullet switches from past to present tense, making the timing of the responsibility unclear.
  **How to change it:** Replace "prepares" with "prepared."
- **The S&OP bullet describes responsibilities without an outcome.** *(about 6 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  The reader sees recurring coordination but not its effect on planning or decisions. It reads as administration rather than analytical contribution.
  **How to change it:** Add [the most telling outcome], measured against [the relevant baseline or comparison].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The weekly-active-user increase is presented as caused entirely by pickup reminders.** *(about 2 words to add)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The interviews support the problem diagnosis, not the claim that reminders caused the whole increase. Without isolating evidence, a recruiter may discount the result.
  **How to change it:** Say users increased after reminders were added, or add [evidence isolating the reminders' effect].
- **A 95% fill rate is inconsistent with removing the need for staff to cover remaining gaps.** *(saves about 3 words if cut)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  Five percent of slots remained unfilled. If those slots required coverage, the line overstates the operational result.
  **How to change it:** Say the system reduced staff coverage, or specify [how the remaining 5% were handled without staff coverage].
- **The app-launch bullet does not show the product work personally performed.** *(about 6 words to add)*
  > Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
  The outcome is strong, but the reader cannot tell how the candidate defined, built, tested, or operated the product. One method detail would support the Product Lead title.
  **How to change it:** Add [the most telling product method or ownership area].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The merchant-onboarding bullet does not belong to the hospital practicum and duplicates Harbor Payments.** *(saves about 18 words if removed)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  Merchant onboarding and first payment do not fit a hospital scheduling project, and the same 2,300-merchant achievement appears elsewhere. This makes the résumé look inaccurate.
  **How to change it:** Remove it from the practicum, or replace it with [the practicum's hospital-scheduling result]. If moved to Harbor Payments, describe 9-to-4 days as about 56%, not an exact halving.
- **The outpatient-scheduling bullet states stakeholder activity without the resulting change.** *(about 7 words to add)*
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  The reader sees access to clinic managers but not what the team delivered or changed. The project therefore lacks a clear outcome.
  **How to change it:** Replace "working sessions" with the specific action and add [the scheduling change or operational outcome] plus [the proving metric], if available.
- **The intake-form bullet does not quantify the shortening or state what improved.** *(about 5 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  The intervention and adoption are useful, but its scale and effect remain unclear. Passive wording also obscures the candidate's ownership.
  **How to change it:** Use active wording and add [how much it was shortened] or [the resulting intake outcome].

## Set aside (6)

6 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-46dd623d.md.

