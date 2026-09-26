> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the full resume:

- **Content and wording:** all 4 entries with bullets
- **Narrative:** full resume
- **Format/ATS:** full file
- **Education:** no bullet-level review was applicable
- **Job-description match:** not run because no posting was provided

The main changes to make are:

1. **Fix the MBA Consulting Practicum entry.**  
   The third bullet refers to merchants and first payments, which conflicts with the hospital-network project. Correct, replace, or remove it before using the resume.

2. **Clarify the product-management story.**  
   The Harbor Payments entry contains overlapping bullets about dispute self-service, discovery, and success metrics. Make the sequence and distinct outcomes clear. Consider placing the Campus Food Rescue project closer to the Harbor internship so the product narrative is easier to follow.

3. **Make results more interpretable.**  
   Clarify:
   - Whether the 35% checkout-conversion change is a relative increase or percentage-point increase, and the comparison period.
   - The baseline or timing behind the 50% ticket-queue reduction.
   - The comparison period behind the 30% warehouse productivity improvement.
   - The result of the S&OP work.
   - The business or operational impact of the company-wide logistics strategy.

4. **Strengthen activity-only bullets.**  
   The S&OP bullet, the logistics-strategy bullet, and the first hospital-practicum bullet describe responsibilities but not the decisions or outcomes that followed.

5. **Remove or substantiate unsupported skills.**  
   The skills list includes tools and methods—such as SQL, Jira, Figma, Amplitude, A/B testing, PRDs, and Excel—that are not demonstrated elsewhere in the resume. Either connect them to specific experience or remove them.

6. **Address the timeline.**  
   The resume shows an unexplained gap between June 2018 and March 2019. Add the relevant activity if there was work, study, travel, or another explanation.

7. **Remove personal details that are generally unnecessary.**  
   The format review flagged the inclusion of date of birth and nationality.

8. **Tighten wording in several bullets.**  
   The wording review identified generic or indirect openings such as “Held,” “Set up,” “Coordinated,” and “Set the company’s logistics strategy,” plus some passive and wordy constructions. Make the candidate’s ownership more direct without changing the underlying facts.

The file is one page, extracts cleanly, and has no layout or ATS parsing blockers. The full specialist report, including the entry-by-entry findings and bullet IDs, is available with `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 82 · narrative 55

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Repair or remove the MBA Consulting Practicum entry before using the résumé because its merchant-onboarding bullet duplicates Harbor Payments and makes the project appear misattributed.
2. Move the Campus Food Rescue App ahead of Crestline Logistics so the product-management evidence follows Harbor Payments instead of being buried after four years of operations work.
3. Combine the two dispute-self-service bullets only after separating their distinct work: keep the requirements and delivery result in one bullet, and use the other for the launch result if it has a measurable customer or business outcome.

## Already working

- s2:e0:b0: Leads with a strong product outcome.
- s2:e0:b5: Provides a strong baseline-to-result comparison.
- s2:e1:b3: Combines ownership, implementation scope, adoption, and a quantified annual benefit.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- Combine the two dispute-self-service bullets only after separating their distinct work: keep the requirements and delivery result in one bullet, and use the other for the launch result if it has a measurable customer or business outcome. *(saves about 12 words)*
- Replace the vague post-launch wording with the specific product decision that the discovery work produced, or remove that clause if it produced no distinct result. *(saves about 5 words)*
- Specify whether the 35% checkout-conversion improvement was a relative lift or percentage-point gain and identify the comparison period, cohort, or baseline. *(about 7 words to add)*
- Add the post-launch outcome of dispute self-service, such as a change in self-service adoption, support contacts, resolution time, or dispute cost, rather than reporting only that it shipped ahead of plan. *(about 7 words to add)*
- Add the customer or business result from launching dispute self-service to all merchants, rather than leaving its scope as the only launch evidence. *(about 7 words to add)*
- State the size or consequence of the chargeback problem uncovered through the 25 merchant interviews. *(about 5 words to add)*
- Add the starting open-ticket count or a defined time comparison to the claim that the queue was cut in half. *(about 5 words to add)*
- Shorten the stakeholder clause in the requirements bullet while preserving the cross-functional ownership. *(saves about 4 words)*

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

- Reorder or group the Crestline bullets into a clearer progression from the work performed to the operational improvements delivered, because the strategy, warehouse, S&OP, and route-tool claims currently read as separate workstreams. *(no words)*
- Replace “Set the company’s logistics strategy” with the specific strategic analysis, decision, or operating model you owned. *(about 8 words to add)*
- Add the clearest operational or financial consequence of adopting that strategy across every region and business line. *(about 6 words to add)*
- Add the comparison period or baseline against which the 30% warehouse-pick-error reduction was measured. *(about 4 words to add)*
- Add the decision or operational change produced by the quarterly S&OP review and one supporting figure, such as forecast accuracy, planning-cycle time, inventory, service level, or forecast-portfolio size. *(about 9 words to add)*
- Make the S&OP bullet use one tense and remove “for each meeting” after “quarterly S&OP review.” *(saves about 5 words)*
- Name the key planning capability or process improvement behind the route-planning tool's 1,800 annual driver-hour saving. *(about 5 words to add)*
- Change “Led the rollout of a route-planning tool” to the more direct “Rolled out a route-planning tool.” *(saves about 2 words)*

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

- Identify your product ownership in the app-launch bullet by naming the product decisions or launch responsibilities you personally led. *(about 7 words to add)*
- Add the measurement window for the increase from 400 to 1,150 weekly active users and clarify whether pickup reminders were the only material change during that period. *(about 8 words to add)*
- Quantify the staff coverage or staff time eliminated by the volunteer shift system. *(about 5 words to add)*
- Replace “Set up” with a more specific implementation verb such as “Built” or “Implemented.” *(no words)*
- Shorten “that would have been thrown away” to a more direct rescued-food outcome. *(saves about 4 words)*
- Replace the passive pickup-window clause with “after 60 interviews revealed missed pickup windows.” *(saves about 3 words)*
- Replace “removing the need for staff to cover gaps” with “eliminating staff coverage gaps.” *(saves about 5 words)*

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- Repair or remove the MBA Consulting Practicum entry before using the résumé because its merchant-onboarding bullet duplicates Harbor Payments and makes the project appear misattributed. *(no words)*
- Replace the merchant-onboarding bullet with a result from the Regional Hospital Network project, or move it to the correct engagement before using this entry. *(no words)*
- Replace “Held weekly working sessions” with the specific scheduling analysis, decision, or process change that those sessions delivered. *(about 8 words to add)*
- Name the specific outpatient-scheduling problem analyzed and quantify or state the result achieved across the network. *(about 7 words to add)*
- Rewrite the patient-intake bullet in active voice to show that you mapped the process and shortened the form across four clinics. *(no words)*
- Add the benefit of shortening the intake form, such as reduced completion time, fewer fields, or fewer intake errors. *(about 5 words to add)*
- If the merchant-onboarding bullet is moved to its correct entry, define the baseline and timing boundary for the halved time-to-first-payment result and identify the onboarding decision that caused it. *(about 9 words to add)*

## Across the whole résumé

- Move the Campus Food Rescue App ahead of Crestline Logistics so the product-management evidence follows Harbor Payments instead of being buried after four years of operations work. *(no words)*
- Explain the eight-month gap between the B.A. ending in Jun 2018 and Crestline Logistics beginning in Mar 2019. *(about 4 words to add)*
- Remove the date of birth and nationality from the résumé. *(saves about 9 words)*

## Set aside (4)

Worth knowing, and not worth the space on this page:

- format: age, gender and photos are excluded by convention — "Date of birth: 2 Nov 1996 | Nationality: American"
- s2:e1:b3: The generic phrase "route-planning tool" does not show what planning change created the hours saved; name the key capability or process improvement if space permits.
- s3:e1:b2: “by redesigning onboarding” is too broad to show which consulting or process-design decision created the improvement.
- skills: A/B testing — no experience or project bullet describes running an experiment or comparing variants; a reader would expect this in the Harbor Payments or Campus Food Rescue App entries. (and 6 more like it)


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-879fc4dc.md.

