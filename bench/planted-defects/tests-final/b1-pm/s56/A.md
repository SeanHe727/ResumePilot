> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed 4/4 eligible entries for content and wording; narrative and format checks completed; job-description match was not run because no posting was provided.

Top changes:

1. **Remove or replace the misplaced consulting bullet.** The hospital practicum includes the same 2,300-merchant onboarding result claimed under Harbor Payments. Keep it with Harbor Payments and add the practicum’s actual hospital-related outcome.
2. **Correct the late-delivery claim.** Excluding weather delays changes the calculation rather than reducing operational delays, so the current “cut late deliveries” claim is misleading.
3. **Fix the onboarding comparison.** The opt-in versus old-flow comparison does not establish causality and currently omits the result. State the measured difference and describe the design accurately; only claim A/B testing if an actual randomized test occurred.

Also move **Experience** ahead of Education, remove date of birth and nationality, clarify the 2018–2019 gap if substantive activity occurred, and use past tense throughout the ended Operations Analyst role.

The PDF is one page, parses cleanly, and has no ATS blockers. Full findings are available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 77 · wording 86 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 19 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996 | Nationality: American

**Problem**
[Error] The file includes personal details that should be omitted from the résumé.

**Why**
Date of birth and nationality are personal characteristics a reader is not meant to weigh in hiring. Including them creates unnecessary exposure to bias without supporting your qualifications.

**How to change it**
Delete the date-of-birth and nationality line.

> Northfield School of Management

**Problem**
[Important] The section order puts education ahead of a stronger professional and product trajectory.

**Why**
You have more than four years of professional experience and a directly relevant product internship. Recruiters should encounter that evidence before academic credentials so the résumé opens with the strongest case for your candidacy.

**How to change it**
Move the sections into this order: EXPERIENCE, PROJECTS, EDUCATION, SKILLS.

> Jun 2018

**Problem**
[Polish] The timeline contains an unexplained eight-month gap between the B.A. and the Operations Analyst role.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The figure “by 35%” does not say whether the conversion gain was relative or measured in percentage points.

**Why**
Those interpretations represent materially different gains. Without the measurement window or comparison period, a product reader also cannot judge what produced the figure.

**How to change it**
Replace “by 35%” with either “by 35% relative to the prior three-step flow” or “by 35 percentage points,” if accurate, and add [measurement window].

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The result “shipped it two weeks ahead of plan” shows delivery performance but not the feature’s value after launch.

**Why**
A product reader will want to know whether dispute self-service increased adoption, shortened resolution time or reduced support demand. Without that outcome, the line demonstrates project delivery more clearly than product impact.

**How to change it**
Keep the schedule result, then append [one measured post-launch outcome compared with the prior dispute process], if one was available during the internship.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] The line buries the $1.1 million finding and roadmap effect behind the research methods.
2. [Polish] The expression “1.1 million dollars” is less scannable than standard résumé notation.

**Why**
1. The financial finding and the decision it influenced are the strongest evidence, but a scanning reader reaches them late. Leading with those results would make the business significance visible before the supporting method.

**How to change it**
1. Move the annual-loss finding and roadmap effect before “Interviewed 25 merchants and analysed six months of chargeback data,” then use the research as support.

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Polish] The phrase “over the summer” repeats the internship dates already shown in the entry heading.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] The opt-in comparison cannot validly measure the redesign’s causal effect as written.
2. [Important] The comparison method is given without the outcome it found.

**Why**
1. Merchants who chose the new flow may systematically differ from those who remained on the old flow. The comparison therefore mixes the redesign’s effect with selection differences, which makes the implied causal claim unreliable.
2. A study design alone does not tell a reader whether the new flow performed better or informed a decision. Omitting the measured difference leaves the line without a result.

**How to change it**
1. Replace “Measured the onboarding redesign” with wording that says you compared outcomes for opt-in merchants and merchants on the old flow without implying causation. If selection differences were addressed, name [the method used to control for them].
2. After “old one,” add [the primary onboarding outcome and observed difference between the groups] and, if applicable, [the decision the finding supported].

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The same onboarding result across 2,300 merchants is incorrectly attributed to both this internship and a hospital consulting practicum.

**Why**
The practicum ended before this internship began and otherwise concerns clinics and patient intake. Two unrelated roles cannot claim the same redesign, cohort and first-payment result without an explicit connection, so the duplication undermines the credibility of both entries.

**How to change it**
Keep the result under the role that actually produced it. If both roles contributed, distinguish this internship using [its accurate scope, dates and outcome] and remove the duplicated claim from the practicum.

> opted into the new flow

**Problem**
[Important] The opt-in comparison does not support the résumé’s separate claim of A/B-testing experience.

**Why**
An A/B test randomly assigns participants, whereas this line says merchants chose whether to opt in. A reader looking for evidence of the listed skill will find a different research design and may question the accuracy of the skills section.

**How to change it**
Add a bullet documenting [an actual A/B test] if you conducted one; otherwise remove “A/B testing” from the Product skills.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] “Cut late deliveries” is false because excluding weather-delayed shipments only changes the reported calculation.

**Why**
The method does not change whether any shipment arrived late; it changes which shipments count in the metric. Presenting the resulting movement from 11% to 7% as an operational improvement makes the achievement misleading and leaves the business purpose of the revised measure unstated.

**How to change it**
Replace “Cut late deliveries” with “Reduced the reported late-delivery rate.” Add [the planning, accountability or service decision enabled] if accurate.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
1. [Important] The figure “30%” does not specify whether the reduction was relative or when it was measured.
2. [Polish] The phrase “two sites” is inconsistent with the entry’s numeral formatting.

**Why**
1. Without those anchors, a reader cannot interpret the improvement’s exact size or durability. The ambiguity weakens an otherwise concrete operational result.

**How to change it**
1. Replace “30%” with “from [baseline error rate] to [ending error rate]” or, if it was a relative reduction, “30% over [measurement period].”

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] The present-tense verb “prepares” is wrong for a role that ended in August 2023.
2. [Important] The S&OP activities have no stated business result.
3. [Important] The phrase “prepares the forecast pack” does not reveal the analytical work you personally performed.
4. [Polish] The acronym “S&OP” is not expanded for readers outside the function.

**Why**
1. Present tense describes an ongoing responsibility, while the dates say the employment has ended. It also conflicts with the past-tense verb “Coordinated” in the same sentence.
2. A hiring manager cannot tell whether the work improved forecast quality, resolved capacity gaps, changed inventory plans or enabled another decision. The line therefore reads as a responsibility rather than an accomplishment.
3. It could mean administrative document assembly or substantive forecasting, which imply very different skill levels. That ambiguity prevents a reader from assessing your ownership of the planning process.

**How to change it**
1. Replace “prepares” with “prepared.”
2. Add [the most important decision or operational outcome enabled] and, if available, [a supporting comparison such as forecast accuracy versus the prior process].
3. After changing the tense, replace “prepared the forecast pack” with [the specific analytical ownership], such as “reconciled demand and capacity forecasts” or “modelled inventory scenarios,” if accurate.

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] “Led the rollout” does not distinguish substantive configuration or analytical ownership from deployment coordination.
2. [Important] The route-planning result is the entry’s strongest bullet but is placed last.

**Why**
1. A hiring manager cannot tell whether you selected routing logic, configured constraints, managed data or mainly organized training. That uncertainty hides the depth of your implementation contribution despite the strong time-saving result.
2. Saving 1,800 driver hours annually across three depots is the clearest evidence of scale and impact in this role. Leading with it would give a scanning recruiter a stronger first impression of the entry.

**How to change it**
1. Replace “Led the rollout” with [the most substantive implementation action], such as “configured [routing constraints or data inputs] and deployed [tool name],” if accurate.
2. Move this bullet to the first position under Crestline Logistics.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The figure “to 3,100 students” does not distinguish users from students who were merely eligible for access.
2. [Important] “Launched a surplus-food pickup app” does not show the product or launch decision you personally drove.
3. [Polish] The phrase “that would have been thrown away” is unnecessarily wordy.
4. [Polish] The pronoun “its” has an unclear referent.

**Why**
1. Registrations, active users and an addressable audience represent very different levels of adoption. Without the distinction, the figure cannot reliably demonstrate reach.
2. The line identifies what shipped but not the product-lead skill that connected the app to its outcome. One concrete decision or mechanism would make your ownership visible and give an interviewer something substantive to explore.

**How to change it**
1. Replace “to 3,100 students” with “used by [number of registered or active students]” or, if it describes only the addressable audience, “made available to 3,100 students.”
2. After “pickup app,” add “by [the single most important product decision or launch mechanism].”

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
1. [Important] “Volunteer shift system” does not explain what changed about sign-up, scheduling or coverage management.
2. [Polish] The phrases “each week” and “a week” repeat the same timeframe.
3. [Polish] The phrase “staff cover shifts” is unclear to readers outside the operation.

**Why**
1. The coverage results are strong, but the generic label gives little evidence of the operational design or product skill that produced them. A specific mechanism would connect your action to the improvement.

**How to change it**
1. Replace “volunteer shift system” with [the specific scheduling or coordination mechanism most responsible for improving coverage].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
1. [Important] The line ends without a decision, recommendation, implementation or scheduling improvement.
2. [Important] “Held weekly working sessions” weakly and vaguely describes your contribution.

**Why**
1. Meeting cadence alone does not establish that the consulting work produced value. Without a result, the bullet reads as participation rather than leadership of an effective workstream.
2. The wording shows that meetings occurred but not whether you directed them or what diagnostic work happened during them. A consulting reader therefore cannot assess your role in addressing the scheduling problem.

**How to change it**
1. Replace the activity-only ending with [the recommendation or scheduling change implemented] and [the measured operational result compared with the prior process].
2. If you directed the sessions, replace “Held” with “Led.” Replace “working sessions” and “on” with [the specific activity and purpose], such as “process-mapping sessions to improve,” if accurate.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The passive construction hides your ownership of the intake work.
2. [Important] “The intake form was shortened” gives no before-and-after measure.
3. [Important] Adoption by front-desk staff does not state what the adopted changes improved.
4. [Polish] “Patient intake at 4 clinics was mapped” does not identify how you found the intake problems or unnecessary fields.
5. [Polish] The intake-redesign bullet is the strongest hospital-related line but is not placed first.

**Why**
1. Beginning with “Patient intake” makes the process the grammatical actor rather than you. The later passive adoption clause also adds words and weakens the action-to-result flow.
2. Without the old and new number of fields or pages, a reader cannot tell whether the redesign was minor or substantial. The missing scale weakens the evidence of improvement.
3. Adoption is useful proof that the recommendation was implemented, but it does not establish a patient or operational benefit. A measured outcome would show why the redesign mattered.

**How to change it**
1. Replace the opening with “Mapped patient intake at 4 clinics and shortened the intake form.” Move “adopted by front-desk staff” directly after those actions without “with the changes.”
2. Replace “shortened the intake form” with “reduced the intake form from [old number of fields or pages] to [new number of fields or pages].”
3. Extend or replace the adoption phrase with [the change in intake completion time, errors or another operational result compared with the prior process]. Retain adoption only if it adds distinct evidence.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding bullet is assigned to the wrong entry.
2. [Error] “Halved the time” is mathematically inconsistent with the résumé’s figures of 9 days to 4 days.
3. The phrase “by redesigning onboarding” is too broad to show what changed.
4. The result wording is wordy and interrupted by the parenthetical placement of the cohort.

**Why**
1. Merchants, first payments and the 2,300-merchant cohort do not fit a regional hospital engagement whose other bullets concern clinics and patient intake. The same achievement appears under Harbor Payments, so leaving it here looks like a pasted or duplicated claim and disrupts the entry’s hospital-project narrative.
2. Half of 9 days is 4.5 days, not 4 days. A decline from 9 to 4 days is approximately 56%, so the conflicting descriptions make the metric look unreliable.
3. Onboarding may include verification, documentation, activation and payment setup. Without the specific intervention, a reader cannot connect your work to the time reduction.
4. “The time it takes” delays the metric, while the commas around “across 2,300 merchants” break the result-to-method flow. Even in the correct entry, that structure makes a strong quantified outcome slower to scan.

**How to change it**
1. Remove this bullet from the practicum and retain the merchant result only under the role that produced it. Replace it here with [an actual hospital-network result].
2. In the correct Harbor Payments entry, use the exact figures “from 9 days to 4 days” or “reduced it by 56%.”
3. If this claim belongs to the correct role, replace “redesigning onboarding” with [the specific onboarding step or mechanism changed].
4. In the correct entry, replace the wordy phrase with “new merchants’ time to first payment” and place “across 2,300 merchants” directly after “new merchants” without commas.

## Already working

- s3:e0:b1: Connects customer discovery directly to a concrete product change.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-5d563358.md.

