> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **4 experience/project entries** for content and wording, the **whole-resume narrative**, and **format/ATS parsing**. Education entries had no bullets and were not reviewed by content/wording specialists. No job-description match was run because no posting was provided.

The main changes to make:

1. **Fix the practicum inconsistency.**  
   `s3:e1:b2` describes merchant onboarding and duplicates the Harbor Payments result, including the 2,300-merchant figure. Remove it from the hospital practicum or replace it with the actual hospital-network outcome.

2. **Add results to activity-only bullets.**  
   The following bullets describe work but not what changed:
   - `s2:e0:b4`: add the outcome of the onboarding comparison.
   - `s2:e1:b2`: add a result or scale for the S&OP reviews and forecast packs.
   - `s3:e1:b0`: explain what the scheduling sessions produced.
   - `s3:e1:b1`: quantify the intake-form improvement or its effect.

3. **Clarify measurement context.**  
   Harbor Payments’ “improved checkout conversion by 35%” needs a comparison point or measurement period. The food-rescue app’s increase from 400 to 1,150 weekly active users likewise needs a timeframe.

4. **Correct wording and tense.**
   - Change “Cut warehouse pick errors 30%” to grammatically include “by.”
   - Use “prepared” rather than “prepares” in the past role.
   - Expand “S&OP” on first use.
   - Review past/present tense in the ongoing project entry.
   - Replace vague or generic phrasing such as “over the summer” and “set up.”

5. **Address the narrative gap.**  
   The resume leaves an unexplained gap between June 2018 and March 2019. Add context if there was relevant work, travel, study, or another explanation.

6. **Format is technically strong.**  
   It is one page, parses cleanly for ATS, and has consistent formatting. The format review also flagged personal details such as date of birth and nationality as information generally omitted from resumes.

The complete specialist report is available with **`/report --full`**.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 83 · narrative 62

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. **Personal details such as date of birth and nationality should be left off the résumé.**
   > Date of birth: 2 Nov 1996
   These details are not meant to be weighed in the hiring decision by convention and can distract from qualifications. Including them also uses valuable space without strengthening the candidate's evidence of fit.
   **How to change it:** Delete the date-of-birth and nationality fields from the résumé.
2. **The late-delivery rate fell from 11% to 7% only because weather-delayed shipments were excluded from the calculation, not because late deliveries were reduced.**
   > Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.
   Changing the definition or denominator changes the reported metric rather than delivery performance. A reader may therefore see this as presenting a measurement change as an operational improvement, which weakens the credibility of the result.
   **How to change it:** Replace "Cut late deliveries" with "Lowered the reported late-delivery rate" and replace "by excluding" with "after excluding" or "by revising the on-time calculation to exclude."
3. **The warehouse pick-error reduction is not established as a causal result, and the percentage expression is grammatically incomplete.**
   > Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.
   The redesign and retraining do not by themselves prove that they caused the 30% reduction; other changes, normal variation, or a measurement change could explain it. A hiring manager may therefore question both the evidence behind the claim and the precision of the wording.
   **How to change it:** Replace "Cut" with "Observed" and change "30%" to "by 30%"; the corrected claim should say that a 30% reduction was observed after the redesign and retraining.

## Already working

- s2:e0:b0: States a strong, directly relevant product outcome.
- s2:e0:b5: Uses a strong from-to time comparison.
- s2:e1:b3: Combines ownership, implementation scope, and quantified efficiency gains.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- **The merchant interviews do not by themselves establish the size of the overall chargeback problem.** *(about 4 words to add)*
  > Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.
  Interviews can identify causes, workflows, and perceived impact, but they cannot quantify population-level prevalence or cost without operational, transaction, or otherwise representative quantitative evidence. A reader may therefore doubt whether the research actually supported the roadmap priority or merely identified pain points.
  **How to change it:** Replace "to size the chargeback problem" with "to identify chargeback pain points" and add [quantitative chargeback data] alongside the interview findings. Add [chargeback volume, cost, or affected-merchant estimate] if the business case contained one.
- **The opt-in comparison cannot credibly measure the onboarding redesign's causal effect, and it states no outcome from the comparison.** *(about 4 words to add)*
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  Merchants who choose the new flow may differ systematically from those who stay on the old one, so differences between the groups can reflect selection rather than the redesign. The reader also cannot tell whether onboarding improved or by how much, leaving the bullet as an evaluation method without a result.
  **How to change it:** Change the claim to "Compared onboarding outcomes descriptively" for the two groups and add [onboarding outcome] improved by [amount] versus the comparison group. If accurate, replace the comparison with [a randomized or appropriately adjusted evaluation].

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- **The bullet uses present tense for a role that ended in August 2023 and leaves the S&OP acronym unexplained.** *(about 3 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  “Prepares” implies the candidate still performs the work after the stated employment period, creating a dates-and-tense inconsistency. Readers outside the team may also not know what S&OP means, while the lack of an outcome makes the bullet read mainly as a recurring responsibility.
  **How to change it:** Change "prepares" to "prepared" and expand "S&OP" to "sales and operations planning (S&OP)" on first use. Add [the strongest resulting outcome] after the forecast-pack description, such as [forecast-accuracy improvement] compared with [prior period].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- **The user-growth increase is not shown to have been caused by pickup reminders, and the change has no time period.** *(about 2 words to add)*
  > Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
  The 60 interviews support choosing reminders because students missed pickup windows, but they do not prove that reminders alone caused the increase from 400 to 1,150. Without a controlled comparison or valid pre/post design, the causal claim is unsupported, and without a period the magnitude of growth is harder to assess.
  **How to change it:** Say that weekly active users rose from 400 to 1,150 after pickup reminders were added, add [time period], and separately state that 60 interviews identified missed pickup windows as a problem. Add [evidence isolating the reminders’ effect] if claiming causation.
- **The 95% pickup-slot fill rate does not support the claim that staff no longer needed to cover gaps, and “Set up” does not show what was implemented.** *(about 5 words to add)*
  > Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.
  A 95% fill rate leaves 5% of slots unfilled, so the remaining gaps still require an explanation or contingency before staff coverage can be said to be unnecessary. The generic initiative wording also prevents a reader from seeing the candidate's specific design or operating responsibility.
  **How to change it:** Replace "Set up" with [the specific system the candidate designed or implemented], retain the 95% fill-rate result, and specify [how the remaining 5% of gaps were handled] or remove the claim that staff coverage was unnecessary.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- **The merchant-onboarding bullet does not belong in the Regional Hospital Network practicum and duplicates the Harbor Payments achievement.** *(saves about 14 words)*
  > Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.
  “New merchant,” “first payment,” and “2,300 merchants” are unrelated to the stated hospital work on outpatient scheduling and patient intake. A reader cannot tell which project produced the result, and the duplicated claim undermines confidence in the scope and ownership of both entries.
  **How to change it:** Remove this bullet from the practicum and replace it with [the actual measured outcome of the outpatient scheduling or patient-intake work]. Move the merchant-onboarding result to Harbor Payments only if it belongs there.
- **The intake-form bullet claims staff adoption without evidence, gives no amount or outcome for the shortening, and hides who performed the work.** *(about 5 words to add)*
  > Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.
  Mapping intake and shortening a form show a proposed or implemented redesign, but they do not establish that front-desk staff adopted and consistently used it. Without a quantified change or clear ownership, a reader cannot judge the scale, effect, or contribution of the candidate's work.
  **How to change it:** Rewrite the passive wording to identify the candidate's action, add [number of fields removed, completion-time reduction, or error reduction], and either remove "adopted by front-desk staff" or add [evidence that staff adopted and consistently used the changes].
- **The MBA Consulting Practicum contains a merchant-onboarding result that duplicates Harbor Payments and conflicts with the hospital-project narrative.** *(saves about 14 words)*
  > across 2,300 merchants
  The first two practicum bullets concern hospital scheduling and intake, while the third shifts to merchant payments. Repeating the nearly identical 2,300-merchant result under unrelated work makes the reader question which role produced the achievement and weakens the practicum's story.
  **How to change it:** Remove the merchant-onboarding bullet from the practicum and replace it with [the actual hospital-network outcome], or move it to Harbor Payments if it belongs there.

## Across the whole résumé

- **The resume contains an unexplained eight-month gap between the bachelor's degree and the Crestline Logistics role.** *(about 4 words to add)*
  > Jun 2018
  A reader comparing the education and employment dates will see no explanation for the period from June 2018 to March 2019. The gap may prompt questions about what the candidate was doing, especially because the rest of the timeline is presented as continuous.
  **How to change it:** Add [the candidate's activity during the eight-month period] as a dated entry if it is relevant and accurate, or leave the dates as they are if no explanation should be included.
- **Three bullets describe activities without stating the resulting change or outcome.** *(about 12 words to add)*
  > Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.
  > Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
  > Held weekly working sessions with clinic managers on outpatient scheduling across the network.
  The S&OP coordination, onboarding comparison, and hospital working sessions show process ownership but do not tell a hiring manager what improved or what decision followed. Without results, the reader cannot judge the value of the work even where the responsibilities and scope are clear.
  **How to change it:** Add [the strongest resulting outcome] to the S&OP bullet, [onboarding outcome] improved by [amount] to the comparison bullet, and [specific scheduling improvement or decision adopted] to the practicum sessions bullet.

## Set aside (16)

16 smaller points were left out to keep this to what matters most; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-90f84474.md.

