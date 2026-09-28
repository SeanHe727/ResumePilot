> Here is my resume: bench/planted-defects/tests-v3/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all 4 experience/project entries for content and wording, plus the full resume narrative and format. No job-description match was run because no posting was provided. The full report is available at `/report --full`.

The most important changes are:

1. **Fix the duplicated or misplaced achievement.**  
   The MBA Consulting Practicum includes a merchant-onboarding result that duplicates the Harbor Payments internship and conflicts with the stated hospital-network context. Remove or replace that bullet with the actual hospital-project result.

2. **Clarify unsupported or ambiguous metrics.**  
   Several results need baselines, comparison periods, definitions, or measured outcomes:
   - “Improved checkout conversion by 35%”
   - “Cut warehouse pick errors 30%”
   - “cutting the open-ticket queue by half”
   - The merchant opt-in comparison
   - The $1.1 million chargeback-loss estimate

3. **Add outcomes to activity-only bullets.**  
   The S&OP coordination bullet and the hospital practicum’s weekly working-session bullet describe responsibilities but not what changed or what the work produced.

4. **Reorder the resume.**  
   The narrative review recommends placing **Experience before Education**, with Harbor Payments before Crestline Logistics. The current ordering presents the MBA before the professional experience that establishes your career direction.

5. **Resolve resume integrity and application issues.**
   - Explain or account for the eight-month gap between June 2018 and March 2019.
   - Correct the three lines that did not parse cleanly.
   - Add an email address and phone number; the format review found neither in the document body.
   - Check the hospital practicum entry carefully for any remaining merchant-related language.

The resume is one page and has strong use of quantified results overall, but the report identifies the metric interpretation and project-context conflicts as the highest-priority issues.

> /report
# Review: resume.pdf

**80/100** — format 85 · content 77 · wording 83 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

8 errors, 17 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> missing email and phone in the body

**Problem**
[Important] The résumé has no email address or phone number in the body, so an application cannot be answered from the document. *(adds about 4 words)*

**Why**
A recruiter or hiring manager needs a direct way to contact you after reviewing the résumé. Without either contact detail, the application may be discarded even if the experience is relevant.

**How to change it**
Add your email address and phone number to the contact header at the top of the résumé.

> unsupportedSkills':' []

**Problem**
[Error] The résumé's extracted consistency fields are empty or malformed for unsupported skills and misspellings. *(saves about 2 words)*

**Why**
The entries `unsupportedSkills':' []` and `misspellings':' []` do not provide usable resume content and suggest a file or extraction problem. A malformed document can cause another parser to miss content or misread the application.

**How to change it**
Remove the malformed consistency-field text from the file and verify that the final document contains no unintended extraction artifacts.

> 3 line(s) this parser could not place cleanly

**Problem**
[Important] The file contains three lines that the parser could not place cleanly, which creates a risk that another system will also misread them. *(no words)*

**Why**
Applicant-tracking systems often extract text differently from a local parser. If three lines are not structurally placed, contact details, headings, dates, or bullets may be lost or displayed out of order.

**How to change it**
Rebuild or export the résumé using a simple text-based layout, then verify the extracted text and bullet order in the final file.

> Jun 2018

**Problem**
[Important] The résumé leaves an eight-month period unexplained between the B.A. and the Operations Analyst role. *(adds about 3–8 words)*

**Why**
A reader sees the degree ending in June 2018 and the next role beginning in March 2019, but cannot tell whether the gap reflects employment, study, travel, or another activity. The unexplained interval can prompt avoidable questions about your timeline.

**How to change it**
Add [the activity covering Jul 2018–Feb 2019] if it is relevant, or leave the gap only if there is no résumé-worthy experience to report.

> Northfield School of Management

**Problem**
[Important] The résumé places EDUCATION before EXPERIENCE even though four years of professional experience should establish the career direction first. *(no words)*

**Why**
Leading with the MBA makes the document read as education-led rather than experience-led. A recruiter reviewing your product background should encounter the professional evidence before the degree details.

**How to change it**
Move the EXPERIENCE section above EDUCATION; the text itself can remain unchanged.

> Harbor Payments

**Problem**
[Important] Within EXPERIENCE, Harbor Payments should appear before Crestline Logistics because it is both more recent and more directly relevant to product work. *(no words)*

**Why**
The current order gives the older operations role priority over the recent product internship. Moving Harbor Payments first lets the reader see the strongest product signal immediately.

**How to change it**
Move the Harbor Payments entry above Crestline Logistics without changing its dates or wording.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% checkout-conversion improvement lacks a baseline, comparison period, and indication of whether it is a relative lift or a percentage-point change. *(adds about 4–10 words)*

**Why**
A hiring manager cannot judge the size or credibility of the improvement without knowing what the 35% is measured against. Relative lift and percentage-point lift can represent very different outcomes.

**How to change it**
Replace “by 35%” with [conversion change, expressed as percentage points or relative percent, versus the prior flow or a defined comparison group, over a stated period].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The dispute self-service bullet states delivery speed and requirements work but does not show what changed after launch. *(adds about 4–10 words)*

**Why**
Shipping two weeks early is useful, but a product reader also wants to know whether self-service reduced support demand, improved resolution, or changed another customer or business outcome. The generic phrase “success metrics” does not establish that the feature succeeded.

**How to change it**
Replace or supplement “success metrics” with [one measured launch result and its comparison baseline or target], while retaining the two-week delivery result if useful.

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Important] The open-ticket queue reduction lacks either a starting queue size or a precise period for the claimed change. *(adds about 3–8 words)*

**Why**
“Cutting the open-ticket queue by half” communicates direction but not scale, so the reader cannot tell whether the reduction involved a few tickets or a substantial backlog. “Over the summer” also makes the pace of resolution difficult to judge.

**How to change it**
Add [starting open-ticket count or the exact beginning-to-end period] after “by half,” using only the one detail that best establishes scale.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Error] The comparison of opt-in and non-opt-in merchants cannot by itself measure the redesign's effect, and the bullet reports neither the measured outcome nor its result. *(adds about 6–14 words)*

**Why**
Opt-in merchants may differ systematically from merchants who did not opt in, creating selection bias and confounding. A raw comparison cannot isolate the redesign's impact without randomization or a credible adjustment, and the reader still cannot tell whether onboarding, conversion, speed, or another metric changed.

**How to change it**
State that the redesign was evaluated by comparing opt-in and non-opt-in merchants, and add [the specific metric compared and its result versus the old-flow group]; if applicable, identify the randomized or adjusted analysis used.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The onboarding redesign claim conflicts with the same redesign and 2,300-merchant result being attributed to an earlier MBA Consulting Practicum period. *(saves about 12–20 words if duplicated text is cut)*

**Why**
The internship places the redesign in Jun–Aug 2024, while the practicum attributes the same intervention to Jan–May 2024. Both entries cannot describe the same intervention occurring in those stated timeframes, so the duplicated result undermines confidence in the dates and ownership.

**How to change it**
Correct the dates and ownership so the redesign and its 2,300-merchant result appear under the period in which they actually occurred; otherwise remove the duplicated claim from one entry.

> Measured the onboarding redesign

**Problem**
[Important] The internship contains several separate workstreams rather than one clear product story, and the onboarding measurement line is supporting evidence that should sit with the onboarding result or be removed. *(saves about 8 words if removed)*

**Why**
The bullets move among checkout, dispute self-service, chargebacks, tickets, and onboarding. That breadth can make the product contribution harder to scan, while the standalone measurement bullet repeats the onboarding story without reporting its result.

**How to change it**
Move this measurement detail into the onboarding bullet after its result, or remove it if no measured outcome can be added.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The late-delivery claim is not a demonstrated reduction in total late deliveries because excluding weather-delayed shipments changes the measured population. *(adds about 2 words)*

**Why**
Removing weather-delayed shipments from the numerator and denominator can lower the reported rate without improving delivery performance. The two percentages are not comparable unless the same exclusion rule was applied consistently to both periods and the all-shipments rate also improved.

**How to change it**
Report that the weather-adjusted late-delivery rate fell from 11% to 7%, or replace the claim with the all-shipments result if it was measured under a consistent definition.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
1. [Error] “Cut warehouse pick errors 30%” is grammatically incomplete because the percentage change requires “by.” *(adds 1 word)*
2. [Important] The 30% pick-error reduction is not interpretable because the bullet gives no error definition, baseline period, post-change period, or comparable denominators. *(adds about 6–12 words)*

**Why**
1. Without “by,” the bullet does not use the standard construction for a percentage reduction. The error makes a strong operational result look hurried or poorly edited.
2. The slotting redesign and retraining can plausibly reduce errors, but the percentage could also reflect changes in order mix, staffing, volume, or counting rules. Without a comparable measurement basis, the reader cannot judge whether the result was measured or attributed correctly.

**How to change it**
1. Insert “by” before “30%.”
2. State the baseline and post-change error counts or rates, periods, and comparable measurement basis; if those details are unavailable, remove or soften the 30% result.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Coordinated ... and prepares” mixes past and present tense in a role that ended in 2023. *(saves 1 word)*
2. [Important] The S&OP review and forecast-pack work has no stated outcome, so the reader cannot see what the recurring process enabled or changed. *(adds about 3–6 words)*
3. [Polish] “S&OP” is unexplained jargon that makes the meeting type less immediately clear to readers outside operations. *(adds about 2–5 words)*

**Why**
1. The dated role is finished, so present-tense “prepares” makes the timeline inconsistent. That small mismatch can make the reader question whether the work is current or completed.
2. The bullet shows process ownership but not whether the reviews improved planning, resolved supply constraints, supported decisions, or changed forecast performance. Without one outcome, the line reads as task administration rather than operational impact.
3. A recruiter who does not know the abbreviation may not understand what you coordinated. Expanding it once preserves the operations signal while making the responsibility scannable.

**How to change it**
1. Replace “prepares” with “prepared.”
2. Add the single most concrete result after “forecast pack,” such as [planning decision enabled], [constraint resolved], or [forecast-performance improvement], if accurate.
3. Replace “S&OP” with “sales and operations planning” or write “sales and operations planning (S&OP)” if the abbreviation is useful later.

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
[Important] The claim of saving 1,800 driver hours a year is unsupported by the rollout and training activities alone. *(adds about 6–12 words)*

**Why**
A route-planning tool can plausibly reduce driver hours, but the figure requires a defined pre-rollout baseline, calculation method, adoption evidence, and attribution that separates tool savings from changes in volume, staffing, or schedules. Without those controls, the figure may be modeled capacity rather than measured hours saved.

**How to change it**
Add the baseline and post-rollout calculation supporting 1,800 hours, or describe the result as projected or estimated savings if that is what was calculated.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Important] The claim that the 9 tonnes would have been thrown away is an unsupported counterfactual, and the launch bullet does not show how you enabled the app launch. *(adds about 4–8 words)*

**Why**
Pickup totals establish how much food was redistributed, but they do not by themselves establish that all of it would otherwise have been discarded. The outcome also shows the launch but not your product decision, launch mechanism, or feature ownership as Product Lead.

**How to change it**
Say “redistributing 9 tonnes of surplus food in its first year,” or, if documented, state how much was verified as diverted from disposal. Add one compact detail describing [the product decision, launch mechanism, or feature you owned], if accurate.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Important] The volunteer-system bullet attributes the drop in staff cover shifts to the system without establishing that it caused the reduction. *(saves about 1 word)*

**Why**
The before-and-after figures show an association, but staffing demand, operating hours, or reporting practices may also have changed. The line does not identify a comparison period or other evidence isolating the system's effect.

**How to change it**
Say “staff cover shifts fell from 10 to 2 a week after implementation,” or establish the causal reduction with comparable before-and-after operating data; avoid repeating the time unit as “each week ... a week.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The practicum's first bullet describes weekly meetings but gives no resulting change, recommendation, or deliverable. *(adds about 4–10 words)*

**Why**
A reader can see that you convened clinic managers, but not whether the sessions improved scheduling, produced a recommendation, or changed an operating process. “Working sessions” is generic and makes the activity sound less substantive than it may have been.

**How to change it**
Add [the scheduling change, recommendation, or decision that resulted] and replace “working sessions” with [the specific analysis or deliverable you led].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The patient-intake bullet does not establish that front-desk staff adopted the changes, and it gives no size or outcome for shortening the form. *(adds about 5–10 words)*

**Why**
Mapping the process and shortening the form show that a change was designed, but they do not demonstrate verified usage at four clinics. Without the number of fields, pages, or minutes reduced, or an outcome that improved, the reader cannot gauge the intervention's impact.

**How to change it**
Replace the passive wording with your action and add [the number of fields, pages, or minutes reduced, measured against the prior form or process], if available. Retain adoption only if [front-desk usage at the four clinics was verified].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The third practicum bullet assigns merchant onboarding work to a hospital-network project and says 9 days was reduced to 4 days, which is not exactly half. *(saves about 18 words if removed)*

**Why**
Merchant onboarding and first payment are unrelated to the surrounding hospital scheduling and patient-intake work, and the same merchant result is attributed elsewhere to Harbor Payments. Halving 9 days would yield 4.5 days; 4 days is a reduction of about 55.6%, so the wording is numerically wrong as well as contextually misplaced.

**How to change it**
Remove the bullet from this entry and replace it with [a verified hospital-specific outcome]. If the onboarding result belongs elsewhere, say that time to first payment fell from 9 to 4 days, not that it was halved.

> new merchant

**Problem**
[Important] The first two practicum bullets belong to the hospital scheduling project, while the third is a merchant-onboarding achievement that duplicates Harbor Payments and should be removed from this entry or returned to that experience. *(saves about 18 words if removed)*

**Why**
The first two bullets concern clinic managers, outpatient scheduling, patient intake, and front-desk staff, but the third concerns a new merchant receiving a first payment. The context shift makes the project look internally inconsistent and obscures the actual hospital-network work.

**How to change it**
Keep the hospital scheduling and patient-intake bullets in this entry, and remove the merchant-onboarding bullet or return it to the experience where the work actually occurred.

> across 2,300 merchants

**Problem**
[Error] The practicum's third bullet duplicates the Harbor Payments onboarding achievement and does not belong under a Regional Hospital Network project. *(saves about 18 words if removed)*

**Why**
A reader would notice the repeated 2,300-merchant metric and the mismatch between the hospital project and merchant context. Keeping the result in both places makes ownership and project relevance unclear.

**How to change it**
Keep the onboarding achievement in Harbor Payments and replace or remove this practicum bullet with the actual hospital-network result.

## Already working

- s2:e0:b1: Connects user research to a specific product change.

## Set aside (3)

3 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-39db3398.md.

