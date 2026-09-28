> Here is my resume: bench/planted-defects/tests-final/b1-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full-resume narrative and ATS formatting. The file parses cleanly as a one-page resume. I did not run a job-description match because no posting was provided.

The main changes to address:
- **Clarify the trial-related claims:** The coordinator entry describes estimating median survival by averaging follow-up times for patients who died; the content review says that method does not support a median-survival estimate. The narrative review also found a likely conflict between the 2020 Community Health Survey dates and a heart-failure trial described in the 2022–2025 coordinator role.
- **Make key results easier to assess:** Add context for the 70% data-entry-error reduction and the readmission comparison, and identify the specific analyses or findings behind the asthma project’s opening claim.
- **Refocus and reorder:** Remove or relocate the heart-failure trial bullet under the Community Health Survey, and consider leading the coordinator and research-assistant entries with their strongest outcomes. The wording review also flagged long or outcome-buried bullets.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**78/100** — format 100 · content 64 · wording 80 · narrative 65

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 14 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Mar 2020 - Aug 2020

**Problem**
[Error] The Community Health Survey dates conflict with the later coordinator-role dates if the two trial bullets describe the same study.

**Why**
The survey entry is dated March–August 2020, while the coordinator role is dated 2022–2025 and describes a 640-patient trial that finished enrollment four months early. If these are the same achievement, the conflicting dates and study details may make a reader question the accuracy of the résumé.

**How to change it**
Clarify whether these are separate studies; if they are the same, correct the project dates and make the study details consistent.

> Summit Climbing Gym

**Problem**
[Important] Shorten the Summit Climbing Gym entry to one line so it does not outweigh the research experience.

**Why**
The current entry gives two duty bullets for a current non-research role. That amount of space can draw attention away from the research experience that establishes the candidate’s direction.

**How to change it**
Condense the current-employment entry to one line, keeping only the most relevant detail.

> M.P.H. in Biostatistics

**Problem**
[Important] Move EXPERIENCE ahead of EDUCATION.

**Why**
Several years of post-degree work now establish the candidate’s direction more clearly than the degree. Leading with experience lets a reader encounter that trajectory first.

**How to change it**
Move the EXPERIENCE section before EDUCATION.

## Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present

> Checked in about 150 climbers a shift and sold day passes and memberships.

**Problem**
[Polish] The check-in and sales duties give neither an outcome nor context for the 150-climber count.

> Ran the weekend rental desk and logged gear inspections for the manager.

**Problem**
[Polish] The rental desk and inspection-log duties do not state what the work accomplished.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Reduced data-entry errors by 70% by adding range checks and double entry for the primary outcome.

**Problem**
[Important] The 70% reduction has no baseline or comparison period.

**Why**
Without a baseline or comparison period, a reader cannot judge the size of the change. The percentage is difficult to interpret on its own.

**How to change it**
Add [the error rate before and after over the same audit period], and retain the method clause.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] The survival calculation does not estimate median survival.
2. [Important] The survival line names an output but gives no estimates.

**Why**
1. Averaging follow-up times among patients who died gives a mean among observed deaths, not the median survival for each arm. Excluding censored patients also discards their survival information and can bias the estimate.
2. A reader can see that a survival analysis was attempted, but not what it found. Without the estimates, the line gives no result to assess.

**How to change it**
1. If you performed a Kaplan–Meier analysis, report the median survival it estimated. Otherwise, replace the claim with the mean observed time to death among patients who died.
2. Add [the estimates in each arm, in months, and the between-arm difference], if reportable; keep the method only if space permits.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Important] The “passed” reviews are unexplained, and the outcome is delayed behind the reporting details.

**Why**
A reader cannot tell what the reviews assessed or what “passed” means. Because the outcome comes after the reporting details, a scanning reader may miss it.

**How to change it**
Lead with the review outcome and replace “passed” with [the committee’s specific conclusion or decision], if concise and relevant; otherwise cut “passed” and retain the protocol-change outcome.

> Established that the program was equivalent to usual care because the superiority test on readmission was not significant (p = 0.41).

**Problem**
1. [Error] The equivalence claim is wrong: a nonsignificant superiority test does not establish equivalence.
2. [Important] The readmission result gives a p-value but no rates or effect magnitude.

**Why**
1. A p-value of 0.41 means the test did not detect a statistically significant difference; it does not show that the difference is small enough to meet an equivalence standard. Equivalence requires an appropriate analysis against a prespecified equivalence margin.
2. A reader cannot tell how different the observed outcomes were from the p-value alone. That makes it harder to judge the practical size of the result.

**How to change it**
1. Replace the equivalence claim with “The superiority test did not detect a statistically significant difference in readmission (p = 0.41).” Claim equivalence only if a prespecified equivalence analysis supports it.
2. Add [readmission rates by arm and the absolute difference over the study follow-up period], if available.

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
1. [Important] The trial line does not specify the coordination work you personally owned.
2. [Important] The trial line leads with the coordination role instead of the measurable outcomes.

**Why**
1. The early enrollment and follow-up completion show what the study achieved, but not what you did to support those outcomes. Without a specific action, the reader cannot assess your individual contribution.
2. Finishing enrollment early and completing 94% of follow-up visits are the line’s strongest results. Putting them later makes the evidence harder to scan.

**How to change it**
1. Add [one coordination action you owned that supported enrollment or follow-up], rather than listing several duties.
2. Move the enrollment and follow-up outcomes to the opening of the bullet; retain the trial description and your specific coordination action after them.

## Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The patient-interview result is stronger than the line that currently opens this experience.

**Why**
The interview bullet connects patient input to a change in practice and a measured reduction in no-shows. Moving it first would make that result easier for a reader to notice.

**How to change it**
Move this bullet ahead of the current opening bullet in the experience.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The data-cleaning result is buried after unrelated duties, which dilute the main contribution.
2. [Polish] The line does not explain how the patient identifiers were matched.

**Why**
1. A scanning reader may miss the resolution of 1,200 mismatched identifiers before reaching the end of the long duty list. The scheduling, ordering, minute-taking, and front-desk work also distract from the data-cleaning contribution.

**How to change it**
1. Move “resolved 1,200 mismatched patient identifiers” near the opening, and cut or shorten the unrelated duty list.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening bullet makes broad claims without naming an analysis, finding, or supporting measure.

**Why**
“Cutting-edge analytics” does not show what approach you used, and “transformative, patient-centered insights” does not say what the insight was or what it supported. The adjusted readmission finding and conference presentation provide a more evidence-led project story, so this opening claim does not connect to the evidence that follows.

**How to change it**
Replace the broad claims with [the specific analytical method used] and [the finding or decision it supported], if accurate; otherwise cut this bullet.

> Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9% without it, after adjusting for age and insurance.

**Problem**
1. [Important] The adjusted readmission finding is stronger than the current opening bullet.
2. [Polish] The readmission comparison gives no cohort size or adjustment method.

**Why**
1. The comparison and adjustment factors give a reader concrete evidence of the project’s result. Leading with this finding makes the project’s contribution easier to see.

**How to change it**
1. Move this finding ahead of the current opening bullet.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The survey bullet gives no key finding from the neighborhood estimates.

**Why**
A reader can see that the survey produced a new estimate, but not what the estimate showed. That leaves the clinic’s outcome less concrete and harder to judge.

**How to change it**
Lead with the estimate, then explain how the survey produced it; add [the estimate’s key finding], if shareable.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Important] The translation and pilot details give no result, and the passive wording hides who did the work.

**Why**
A reader can see how the survey was prepared, but not whether the pilot led to a useful change or what the preparation enabled. The passive construction also leaves unclear whether you performed these tasks.

**How to change it**
If you performed these tasks, name yourself as the actor and add [one material change from pilot feedback or a clear launch outcome].

> Ran a randomized discharge study of more than 600 heart-failure patients that completed enrollment months ahead of schedule.

**Problem**
[Error] The discharge-trial bullet is unrelated to this survey entry and appears to duplicate the later coordinator-role achievement.

**Why**
This entry is dated March–August 2020 and describes a community survey, while the same heart-failure trial is described under the later coordinator role. If these refer to the same study, the bullet misattributes the work; if they are separate studies, the line does not identify the discharge approaches or groups compared.

**How to change it**
Remove this bullet from the survey entry if it is the later trial; keep the claim under the coordinator role if accurate. If it is a separate study, clarify [the approaches or groups compared] and [how many months ahead of the planned date enrollment finished], and make clear that the study—not the patients—completed enrollment.

## Already working

- s2:e2:b0: Shows the scale of the screening and its concrete result in one line.
- s2:e1:b2: Shows a tangible tool adopted in a regular, multi-site review process.
- s3:e0:b2: Names a specific dissemination outcome: presentation at a state public-health conference poster session.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-803f8a94.md.

