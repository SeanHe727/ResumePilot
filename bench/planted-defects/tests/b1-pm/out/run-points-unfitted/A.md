> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **4 experience/project entries:** content and wording reviews
- **All 6 entries:** narrative review
- **Format and ATS:** reviewed
- **Job-description match:** not reviewed because no posting was provided

The full report is available with `/report --full`. The main changes to make are:

1. **Remove or replace the incorrect practicum bullet.**  
   The “new merchant,” “2,300 merchants,” and “time to first payment” bullet does not fit the Regional Hospital Network project and duplicates Harbor Payments content. This is the most important credibility issue.

2. **Reorder the sections.**  
   Put **EXPERIENCE before EDUCATION** so the four-year operations role and product internship lead the resume.

3. **Clarify the Harbor Payments metrics.**
   - Explain whether the **35% checkout-conversion improvement** is relative growth or percentage-point growth, and identify the comparison period or group.
   - Combine the two onboarding bullets: one describes the measurement method, while the other reports the result.
   - Add the result or finding from the 25-merchant research.
   - Clarify what improved after the dispute self-service launch, beyond shipping two weeks early.

4. **Correct or qualify the Crestline Logistics delivery metric.**  
   Reporting a reduction from 11% to 7% while excluding weather-delayed shipments changes the denominator. The resume should distinguish adjusted performance from all-in performance.

5. **Strengthen the S&OP bullet.**  
   It currently describes recurring responsibilities but not the decision, recommendation, or business result enabled by the forecast pack.

6. **Add outcomes to the hospital practicum.**  
   The project bullets describe meetings and process mapping, but the first two do not show the scheduling result, team-lead scope, or operational impact. Use the actual figures if you have them.

7. **Check the skills section against the evidence.**  
   The narrative review identified skills such as A/B testing, SQL, PRDs, Jira, Figma, Amplitude, and Excel that are not clearly demonstrated in the bullets. Either connect them to specific work or remove unsupported items.

8. **Address the unexplained eight-month period** between the June 2018 degree date and March 2019 employment, if there was relevant work, study, travel, or another explanation.

9. **Remove personal information that is not customary on a U.S. resume**, specifically the date of birth and nationality line identified by the format review.

The document is one page, parses cleanly for ATS systems, and has consistent formatting.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 68 · wording 81 · narrative 66

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove or replace the merchant-onboarding bullet under the Regional Hospital Network practicum because it duplicates Harbor Payments and makes the project's ownership and chronology look unreliable.
   A recruiter may question whether the practicum bullets belong to one real project and may lose confidence in the accuracy of the rest of the résumé.
2. Report adjusted and all-in late-delivery performance separately because excluding weather-delayed shipments changes the denominator rather than proving that fewer shipments were late.
   A recruiter may see the 11%-to-7% result as a measurement artifact rather than an operational improvement unless the weather-adjusted and unadjusted rates are both clear.
3. Combine the onboarding-measurement method with the result, report the measured finding, and identify the timing and comparison design instead of leaving a result-free method bullet.
   The current pair repeats the evaluation, while opt-in versus old-flow performance may reflect self-selection and the pilot wording does not show whether the comparison was against the old flow or an earlier period.

## Already working

- s2:e0:b0: Leads with a substantial product outcome rather than describing only the redesign.
- s2:e0:b1: Shows ownership of requirements and success metrics.
- s2:e0:b5: Uses a strong from-to metric with a clear operational outcome.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- Define the checkout-conversion baseline, comparison, meaning of 35%, merchant count, and observation period, and lead with the flow change that produced the result. *(about 15 words to add)*
  Without those details, a reader cannot tell whether 35% means relative growth or percentage-point growth, judge the scale of the result, or quickly see what action drove it.
- Add the customer or operational result of the dispute-self-service work—such as a change in resolution time, cost, customer experience, or support volume—rather than relying only on shipping two weeks early. *(about 10 words to add)*
  Schedule performance shows delivery discipline but not whether the feature created value for customers or the business.
- State the chargeback finding that made the roadmap case persuasive, not just the 25 merchants interviewed, and compress the outcome to a direct form such as "used findings to prioritize chargebacks next quarter." *(about 8 words to add)*
  Interview volume shows research effort but not the size, severity, or business importance of the problem that changed the roadmap.
- Add the starting or ending queue size and the exact period behind the claim that the open-ticket queue was cut in half. *(about 8 words to add)*
  The reader cannot judge the scale or pace of closing 140 tickets from a percentage alone and a broad summer boundary.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- Add the baseline and measurement period for the 30% reduction in warehouse pick errors, while compressing the collaboration and training context to keep the result prominent. *(about 6 words to add and saves about 4 words)*
  A reader cannot judge the size, duration, or durability of the reduction from the percentage alone, and the extra phrasing competes with the strongest evidence of execution.
- Add the business result enabled by the S&OP review and forecast pack—such as a change in forecast accuracy, inventory, service level, or decision cycle—and rewrite the bullet consistently in past tense without repeating the meeting cadence. *(about 10 words to add and saves about 5 words)*
  The current bullet shows recurring responsibility but not what changed because of the analysis or coordination.
- Give the calculation basis for saving 1,800 driver hours a year, such as route-planning time before versus after rollout or hours saved per week. *(about 8 words to add)*
  A reader needs to understand how the annual estimate was derived before treating it as a defensible efficiency result.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- Add the most important product or launch responsibility personally owned beyond launching the surplus-food pickup app. *(about 8 words to add)*
  The launch and impact figures show project value, but not what the candidate did as product lead to create and deliver it.
- Qualify the attribution of the increase from 400 to 1,150 weekly active users by stating whether other major changes occurred during the comparison period, and make the interview-based rationale easier to scan. *(about 8 words to add)*
  The current wording implies pickup reminders caused the entire increase even though the evidence does not isolate their effect, while the attached research clause is difficult to parse.
- Name the mechanism used to recruit, schedule, or confirm volunteers, and quantify the staff time or number of shifts eliminated after reporting that 95% of pickup slots were filled. *(about 10 words to add)*
  The current bullet shows an outcome but not how the system worked or how much staffing capacity the change actually freed.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- Replace the merchant-onboarding bullet with the hospital practicum result, or explain its connection to the hospital network if it genuinely belongs there. *(saves about 15 words if removed)*
  The surrounding bullets concern outpatient intake, so the unrelated merchant result makes the project read as copied or misfiled.
- Replace the generic weekly working-session description with the scheduling problem solved, the decision produced, and the team-lead scope, including the relevant team, manager, clinic, or workstream count. *(about 12 words to add)*
  A reader cannot tell what the candidate led, how large the work was, or what changed as a result of the sessions.
- Quantify both the form change and its operational result, then state adoption directly—for example, the number or percentage of fields removed and the minutes saved or intake-error reduction after front-desk adoption. *(about 12 words to add)*
  The current bullet proves implementation but does not show how much the process changed or whether the change created measurable value.

## Across the whole résumé

- Move EXPERIENCE above EDUCATION so the four years of post-undergraduate work carry the page before the degrees. *(no words)*
  Recruiters will see the experience most relevant to hiring decisions first instead of encountering older education before the work history.
- Account for the eight-month gap between the B.A. in Economics and the start of work at Crestline Logistics. *(about 3 words to add)*
  A reader may wonder whether the gap reflects unemployment, further study, or omitted experience.
- Remove the résumé's age and nationality details because date of birth, nationality, gender, and photos are excluded by convention. *(saves about 9 words)*
  These details use space without helping assess qualifications and may create avoidable screening concerns.
- Tighten the cited bullets by replacing wordy, passive, or awkward constructions with direct action-and-result phrasing. *(saves about 25 words)*
  Shorter, more direct bullets will scan faster and make ownership and outcomes easier to recognize without changing the underlying claims.

## Set aside (5)

Worth knowing, and not worth the space on this page:

- s2:e0:b2, s2:e0:b3: The figure "25 merchants" measures interview volume, not the scale or importance of the chargeback problem. (and 1 more like it)
- s3:e0:b2: “Set up a volunteer shift system” is too vague to demonstrate the operational method; name the key mechanism used to recruit, schedule, or confirm volunteers.
- s3:e0:b1, s3:e0:b2, s2:e1:b1, s3:e1:b0, s3:e1:b1, s3:e1:b2: "chosen after 60 user interviews showed students missed pickup windows" is a compressed, awkwardly attached clause that makes the reasoning harder to scan. (and 5 more like it)
- whole resume, dates: Jun 2018 to Mar 2019: 8 months with no study or work listed after the B.A. in Economics.
- skills: A/B testing — the Harbor Payments entry mentions comparing opt-in and old-flow users, but does not show an actual A/B test; a reader would expect an explicit experiment in Harbor Payments. (and 6 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-d82ab728.md.

