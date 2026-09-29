> Here is my resume: bench/planted-defects/tests-final/b1-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 entries with bullets using content and wording specialists, plus the full-resume narrative and format checks. The education entry had no bullets to review; no job-description comparison was run.

The main changes to make are:

1. **Correct the clinical-statistics claims.** The method described for estimating median survival is not valid because it excludes censored patients. The “equivalent to usual care” claim is also too strong for a nonsignificant superiority test.
2. **Remove or relocate the duplicated heart-failure trial bullet.** It appears under both Meridian Heart Institute and Community Health Survey, with inconsistent dates and figures. Keep it only in the correct entry.
3. **Reorder the resume around the research trajectory.** Put the hospital and heart-institute roles first, followed by relevant projects. Move the climbing-gym role to a brief “Other Experience” section at the bottom.
4. **Replace generic project language with specific methods and outcomes.** The asthma project’s opening bullet uses phrases such as “cutting-edge analytics” and “transformative insights” without naming the analysis.
5. **Clarify outcomes for task-focused bullets.** Several bullets describe responsibilities—such as selling memberships, maintaining rental records, and building an enrollment tracker—without explaining their measurable effect.
6. **Verify or remove unsupported skills.** The narrative review found no evidence in the experience or projects for SAS or mixed-effects models.

The file itself is one page, parses cleanly for ATS systems, and has no layout warnings. The full consolidated review is available in `/report --full`.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 69 · wording 78 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 12 important, 7 polish. Errors are marked [Error]; fix those first.

## Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present

> Checked in about 150 climbers a shift and sold day passes and memberships.

**Problem**
[Important] The check-in volume and sales activity do not show the performance or commercial result of the work.

**Why**
“About 150 climbers a shift” gives useful scale, but a reader cannot tell whether that volume was handled efficiently or accurately. “Sold day passes and memberships” describes a duty without showing whether it contributed to membership growth, revenue, or customer service.

**How to change it**
Keep the volume and add one comparison or outcome after “memberships,” such as [membership sales or conversion result], [check-in accuracy], or [customer-service outcome], if accurate; otherwise keep the volume as the main evidence.

> Ran the weekend rental desk and logged gear inspections for the manager.

**Problem**
[Important] The rental-desk and inspection work lacks both a measurable scale and a stated operational result, and “for the manager” weakens the ending.

**Why**
The reader sees ownership of recurring tasks but cannot judge the amount of rental or inspection work handled. The line also does not show whether the work improved gear readiness, safety compliance, or manager visibility, while “for the manager” frames the logging as support rather than a completed responsibility.

**How to change it**
Replace “for the manager” with a direct ending, and add either [rentals handled per weekend] or [gear inspections logged per shift/week] plus the strongest available [gear availability, inspection-completion, or safety outcome], if accurate.

> Front Desk Staff

**Problem**
[Important] This entry should be compressed because its operational work does not support the résumé's biostatistics direction.

**Why**
The two bullets show routine customer-service and rental-desk duties, but neither connects the work to research, analysis, or a measurable technical contribution. Presented as a full role before the research experience, it makes the candidate's trajectory appear less focused.

**How to change it**
Move the entry to an abbreviated Other Experience section at the bottom, or reduce it to one line while retaining only the most useful operational evidence.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Reduced data-entry errors by 70% by adding range checks and double entry for the primary outcome.

**Problem**
[Important] The 70% reduction lacks the baseline or comparison that makes the result verifiable.

**Why**
A reviewer cannot judge the scale or credibility of “Reduced data-entry errors by 70%” without knowing what the reduction was measured against. The method is named, but the result has no time period or before-and-after anchor.

**How to change it**
Add the single comparison supporting the figure, such as [baseline error rate or comparison period], while keeping the range-check and double-entry method after the result.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
[Error] The described calculation cannot estimate median survival because it averages follow-up times among patients who died and excludes censored patients.

**Why**
That calculation is neither a median nor a valid censored survival analysis, and excluding censored patients can bias the estimate. A correct survival estimate accounts for censoring, typically through Kaplan–Meier analysis or an appropriate survival model; the current line also gives no arm-specific values or consequence.

**How to change it**
If performed, replace the method with a statement that median survival was estimated using Kaplan–Meier analysis accounting for censoring, and add [median survival for each arm and the study finding, report, or decision informed]. Otherwise remove or soften the claim. Replace “excluding censored patients” with the correct method rather than “using uncensored follow-up times only.”

> Built the enrollment tracker the three sites reviewed each week, flagging sites more than 10% behind target.

**Problem**
[Important] The enrollment tracker is described as a monitoring process, but its effect is missing and the sentence makes the sites sound like the tracker’s subject.

**Why**
A hiring manager can see what was monitored and the 10% threshold, but cannot tell whether the tracker accelerated enrollment, improved target attainment, or enabled an intervention. “The three sites reviewed each week” also momentarily reverses the intended relationship.

**How to change it**
Change the wording to “reviewed weekly by three sites” and add [enrollment or target-attainment outcome attributable to the tracker].

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Polish] The safety-review result should lead the bullet, and “4” should be written as “four.”

> Established that the program was equivalent to usual care because the superiority test on readmission was not significant (p = 0.41).

**Problem**
[Error] The statement that the program was equivalent to usual care is wrong because a nonsignificant superiority test does not establish equivalence.

**Why**
A p-value of 0.41 only shows that superiority was not demonstrated; it does not show that the treatments are equivalent. Equivalence requires a prespecified equivalence margin and an appropriately designed equivalence analysis, and the current p-value gives no readmission comparison or decision threshold.

**How to change it**
Replace the claim with “Found no statistically significant difference from usual care on readmission (p = 0.41)” or, only if supported by a prespecified equivalence analysis, state equivalence and add [the readmission rates, equivalence margin, or confidence interval].

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Polish] The strongest outcomes in the trial bullet are buried after the study description, and “4 months” should be written as “four months.”

> 640 heart-failure patients

**Problem**
[Error] This trial achievement must be assigned to the correct entry and stated with one consistent patient count and enrollment-timing result.

**Why**
The line presents a specific three-site randomized trial involving 640 heart-failure patients and enrollment four months early, but the résumé also places a similar achievement in the Community Health Survey entry. Until the candidate identifies which role and dates own the achievement, a reader may doubt the chronology and whether the result has been duplicated.

**How to change it**
Keep this achievement here only if Meridian Heart Institute is the correct role; otherwise remove it from this line. Whichever entry is correct, use one consistent patient count and one precise enrollment-timing statement.

## Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022

> Screened 2,300 medical records for a diabetes cohort study, confirming eligibility for 410 patients against the protocol criteria.

**Problem**
[Important] The record-screening line does not explain what the confirmed 410-patient cohort enabled, and “against the protocol criteria” is redundant.

**Why**
The reader can see the screening volume and eligibility result but not why the work mattered beyond completing a task. The final phrase repeats the idea already conveyed by confirming eligibility, using words without adding downstream value.

**How to change it**
Cut “against the protocol criteria” and add [what the confirmed cohort enabled or supported], without claiming a study result you cannot substantiate.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Polish] The strongest outcome should lead the patient-interview line, and the findings should be described as informing the reminder intervention rather than directly adding it.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
[Important] The identifier-resolution result is buried after an unrelated list of duties, and the line does not clearly attribute the result to the data work.

**Why**
A scanning reader may not know whether cleaning and merging the lab data, the administrative duties, or the entire list resolved the 1,200 mismatched identifiers. The long “while also” construction mixes technical and administrative work, making the strongest evidence harder to find.

**How to change it**
Move the identifier-resolution result immediately after “Cleaned and merged lab data from two hospital systems,” and place the scheduling, supply, meeting-minute, and front-desk duties elsewhere or omit them from this impact-focused line.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening project description uses inflated, nonspecific language instead of naming the analysis, finding, or checkable result.

**Why**
“Cutting-edge,” “transformative,” and “patient-centered” do not show what technical work was performed or what the project discovered. Without a figure, defined audience, or consequence, a hiring reader has no anchor for judging the project's value.

**How to change it**
Replace the generic method phrase with [specific analytical method used] and replace the broad outcome language with [key result compared with a baseline or comparison group] or [finding or decision informed], if accurate.

> Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9% without it, after adjusting for age and insurance.

**Problem**
[Polish] The readmission comparison is imprecise and does not name the statistical method used.

> Presented the analysis at the state public-health conference poster session.

**Problem**
[Polish] The presentation line does not identify the conference or show an outcome beyond presenting the analysis.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Polish] The survey result should lead the bullet rather than appearing after the design description.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Important] The pilot line hides the candidate's role and does not say what the pilot changed or enabled.

**Why**
A reader can see that translation and piloting occurred, but not whether the pilot improved wording, accessibility, or survey flow. Passive wording also makes the candidate's contribution less clear.

**How to change it**
Use active verbs—“Translated” and “piloted”—and add [the key wording, accessibility, or survey-flow change identified in the pilot], if accurate.

> Ran a randomized discharge study of more than 600 heart-failure patients that completed enrollment months ahead of schedule.

**Problem**
[Polish] The enrollment result gives no precise number of months and its wording makes the study rather than the patients seem to complete enrollment.

> randomized discharge study

**Problem**
[Important] The heart-failure trial bullet is unrelated to the survey project and should be removed from this entry.

**Why**
The survey design and piloting bullets form a coherent project, while the randomized discharge study breaks that narrative. Repeating the trial achievement here also makes the résumé appear copied or internally inconsistent because the same type of work is assigned to a later clinical research role.

**How to change it**
Remove this bullet from Community Health Survey and retain the trial achievement only under the correct role and dates, using one consistent patient count and enrollment-timing statement.

## Skills

> SAS

**Problem**
[Important] The résumé lists SAS without evidence of SAS use.

**Why**
No entry shows SAS being used or describes work that specifically requires it. A recruiter may therefore treat the skill as unsupported, which weakens confidence in the skills section.

**How to change it**
Add a specific entry or result showing SAS use, if accurate; otherwise remove SAS from the skills list.

> mixed-effects models

**Problem**
[Important] The résumé lists mixed-effects models without evidence of a mixed-effects analysis.

**Why**
No project or role names a mixed-effects model or describes work that requires the method. The unsupported skill can make the technical profile appear overstated.

**How to change it**
Add evidence of a mixed-effects analysis, if accurate; otherwise remove the method from the skills list.

## Already working

- s2:e2:b2: Shows ownership of a defined research deliverable.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b245578b.md.

