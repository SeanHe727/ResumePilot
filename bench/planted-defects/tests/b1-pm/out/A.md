> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Format/ATS:** reviewed; it parses cleanly as a one-page, 484-word resume with no layout blockers.
- **Content:** reviewed all four entries with bullets: Harbor Payments, Crestline Logistics, Campus Food Rescue App, and MBA Consulting Practicum.
- **Wording:** reviewed all four of those entries.
- **Narrative:** reviewed the resume as a whole.
- **Job match:** not reviewed because no job posting was provided.

The full findings are available in `/report --full`. The main changes to make are:

1. **Fix the MBA Consulting Practicum entry.**  
   Its final bullet refers to merchant onboarding and 2,300 merchants, which does not fit a regional hospital project. Move it to the appropriate Harbor Payments entry if it belongs there, or replace it with the hospital project's actual outcome.

2. **Clarify the strongest metrics.**  
   Add context or baselines for:
   - the 35% checkout-conversion improvement;
   - the 30% pick-error reduction;
   - the 1,800 annual hours saved;
   - the food-rescue impact figures;
   - the shortened hospital intake form.  
   The reader should be able to tell what was compared, over what period, and how the result was measured.

3. **Rework the Harbor Payments bullets.**  
   The onboarding redesign appears in two bullets: one describes the comparison method and the other gives the outcome. Combine or consolidate those points so the method and result appear together without repetition.

4. **Reconsider the Crestline late-delivery metric.**  
   Excluding weather-delayed shipments from the calculation makes the reported improvement difficult to interpret. Show the underlying shipment or late-delivery figures and distinguish operational improvement from a change in reporting definition.

5. **Add outcomes to activity-only bullets.**  
   In particular, the forecasting-pack bullet and the hospital weekly-sessions bullet describe recurring work but do not show what changed as a result.

6. **Resolve the date gap.**  
   The resume has no listed study or work from June 2018 to March 2019. Add the relevant activity if there was one, or be prepared to explain the period.

7. **Support or remove unsupported skills.**  
   The skills section lists A/B testing, SQL, Jira, Figma, Amplitude, and Excel, but the experience and project bullets do not demonstrate their use. Either connect those skills to specific work or remove the unsupported claims.

8. **Reorder the sections.**  
   Put **Experience** before **Education** so the professional history leads the document.

9. **Remove personal demographic information.**  
   The format review identified “Date of birth” and “Nationality.” These are generally excluded from resumes and should be removed.

10. **Tighten wording and consistency.**  
    Several bullets use indirect phrasing, repeat words, or mix past and present tense. The wording review identified these specifically, including the Crestline forecasting bullet and several project bullets.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 69 · wording 82 · narrative 58

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Replace the unrelated merchant-onboarding bullet with the hospital project’s actual outcome.
   The mismatch breaks the entry’s narrative and suggests copied content.
2. Move Experience above Education and explain the eight-month post-graduation gap.
   This establishes professional level first and prevents an unexplained timeline pause.
3. Remove age, gender, photographs, date of birth, and nationality.
   These details are conventionally excluded and add screening risk without relevant evidence.

## Already working

- s2:e0:b5: Provides the clearest combination of impact, measurement, and method in the entry.
- s2:e0:b5: Uses a strong from-and-to metric with a clear business-relevant outcome.
- s2:e1:b3: It combines clear ownership with a business-relevant operational result.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- Combine the repeated onboarding bullets and report the comparison’s result, not just its method. *(saves about 8 words)*
  The reader cannot judge whether the redesign worked.
- Clarify the 35% conversion baseline, unit, and merchant comparison. *(about 7 words to add)*
  The result’s size and credibility are otherwise unclear.
- Add the user or business outcomes behind the dispute work and chargeback research. *(about 10 words to add)*
  Delivery speed and interviews alone do not show product impact.
- State what you owned in triage and onboarding redesign, beyond throughput and team activity. *(about 8 words to add)*
  The reader needs to separate your decisions from the team’s work.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- Replace the adjusted late-delivery claim with an unadjusted rate or shipment comparison. *(about 6 words to add)*
  Changing the KPI definition does not prove faster deliveries.
- Add the pick-error baseline so the 30% reduction is judgeable. *(about 5 words to add)*
  The percentage lacks operational scale without a starting point.
- Add outcomes for the forecast pack and validate whether route savings were measured or estimated. *(about 12 words to add)*
  The reader cannot assess either initiative’s business value or evidence basis.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- Support the app launch and 9-tonne result with the launch mechanism and measurement basis. *(about 10 words to add)*
  Your contribution and the impact calculation may otherwise be questioned.
- Add the user-growth period and quantify the staff burden removed by the volunteer system. *(about 8 words to add)*
  The reader cannot judge growth speed or secondary operational benefit.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- Add measurable scheduling and intake outcomes, including affected scope and form reduction. *(about 12 words to add)*
  The current bullets show activity and adoption, not scale or benefit.
- Defend any relocated onboarding result with before-and-after timing. *(about 5 words to add)*
  “Halved” is not independently interpretable without the timing measure.

## Across the whole résumé

- Remove or substantiate A/B testing, SQL, Jira, Figma, Amplitude, and Excel. *(saves about 6 words)*
  The experience section does not verify these claims.

## Set aside (8)

Worth knowing, and not worth the space on this page:

- s2:e0:b0: "for all merchants" suggests universal coverage without stating how many merchants were included or whether the comparison was controlled.
- s2:e0:b4: "merchants who opted into the new flow" introduces a self-selection problem without stating how you accounted for differences between the two groups.
- s2:e0:b5: "Redesigned merchant onboarding" does not clarify which product decisions or parts of the redesign you personally owned.
- s3:e0:b1: The phrase "raised weekly active users from 400 to 1,150" lacks the comparison period, so the reader cannot tell how quickly or over what interval the growth occurred.
- s3:e0:b2: The method "Set up a volunteer shift system" is broad and does not reveal the key mechanism used to achieve the 95% fill rate.
- s2:e1:b2: "Coordinated ... and prepares" mixes past and present tense, so the bullet should use either "prepared" or a consistently present-tense construction.
- s3:e0:b2: "Set up a volunteer shift system" uses a generic verb and could name the more specific action performed.
- whole resume, dates: The dates show an eight-month period with no study or work listed from Jun 2018 to Mar 2019, immediately after the Lakeview University degree.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-281eaff4.md.

