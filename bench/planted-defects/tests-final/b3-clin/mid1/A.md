> Here is my resume: bench/planted-defects/tests-final/b3-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s narrative and ATS formatting. Education has no bullets to review, and no job description was provided for a match review.

The main changes to address:
- Correct the study-design wording in the Research Assistant entry: odd/even admission-day assignment is not randomization. Clarify the method accurately.
- Recheck the survival-analysis bullet: the described calculation does not support calling the result median survival, particularly with censored patients excluded. Verify the method and report the actual estimates if available.
- Fix the percentage descriptions in the asthma project: the stated rate changes do not match the claimed relative percentages. Replace vague opening language with the specific analysis or finding.
- Consider moving Experience above Education and accounting for the May 2021–April 2022 gap. The format check also flagged date of birth and nationality as personal details to remove.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 74 · narrative 77

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 22 May 1997

**Problem**
[Error] The personal details identified in the file finding should be removed.

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh by convention. Including them can draw attention away from the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 22 May 1997 | Nationality: Chilean.”

> Community Health Survey

**Problem**
[Important] The Community Health Survey project is older than the current work and projects, which provide stronger evidence of the candidate’s direction.

**Why**
The 2020 project takes space from more recent evidence. Keeping it at its current length may make the candidate’s newer research experience less prominent.

**How to change it**
Shorten the project to a single line or remove it.

> M.P.H. in Biostatistics

**Problem**
[Polish] Experience should appear above Education.

> May 2021

**Problem**
[Polish] The résumé leaves a 10-month period unaccounted for between the MPH and the Research Assistant role.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The trial-coordination claim does not identify the work you personally handled.

**Why**
The scale and outcomes are strong, but a hiring reader cannot tell which clinical-research coordination skills you applied. One concrete responsibility would make your contribution easier to assess.

**How to change it**
After “trial,” add [the specific coordination responsibility you owned], such as site startup, participant scheduling, or protocol tracking, if accurate.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] The calculation described is not an estimate of median survival.
2. [Important] The bullet names median-survival estimates but gives neither the estimates nor a comparison.

**Why**
1. Averaging observed follow-up times only among patients who died gives the mean observed time to death among those patients, not median survival. Excluding censored patients also fails to account for their survival information, so a reader familiar with survival analysis would question the result.
2. Without the values, a reader cannot tell what the analysis found. The method alone does not show what the estimates mean for either arm.

**How to change it**
1. If you performed Kaplan–Meier analysis, replace this calculation with the median survival estimated from it and add [the estimate for each arm, with units]. Otherwise, describe the calculation as mean observed time to death among patients who died and remove the median-survival claim.
2. Replace “in each arm” with [the median survival estimate for each arm, with units], and add [the comparison between arms] if relevant and available.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Important] The adverse-event result is delayed by a long list of tasks.
2. [Error] “Reconciling” is not in the past tense used for this completed role.

**Why**
1. Readers encounter three methods before learning that unresolved queries fell from 45 to 6. Leading with that result would make the impact easier to see.
2. The other completed-role bullets use past-tense verbs, so this opening reads as grammatically inconsistent. A reader may pause over whether the action is ongoing or completed.

**How to change it**
1. Move “cut unresolved safety queries from 45 to 6” to the start of the bullet, then shorten the method list to the most relevant tasks.
2. Replace “Reconciling” with “Reconciled.”

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Polish] “All 4 reviews passed” does not identify what the committee assessed or what counted as passing.
2. [Polish] The review outcome feels appended to the reporting activity.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] Calling the assignment “Randomized” is incorrect: odd- or even-numbered admission days are a predictable, deterministic rule, not random allocation.
2. [Important] The assignment description does not say what the study changed.
3. [Important] The odd/even-day assignment procedure is spelled out at unnecessary length.

**Why**
1. Because the rule is predictable, it is not random allocation. Admission-day assignment can also systematically associate treatment group with factors that vary by day, which weakens what readers can infer from the comparison.
2. A reader can see how patients were allocated, but not whether the program helped. Without an outcome and comparison, the value of the work is hard to judge.
3. The full clause takes attention away from the study outcome and makes the assignment harder to scan. The odd/even rule can be stated more compactly without losing its meaning.

**How to change it**
1. Replace “Randomized patients” with “Assigned patients by admission day” and retain the odd/even-day groups.
2. After the assignment clause, add [the study outcome and measured difference versus usual care], if available.
3. Compress the procedure to “by admission day: odd to the program, even to usual care.”

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
1. [Important] The no-show rates lack a comparison period or baseline.
2. [Important] The strongest line is not the opening one.

**Why**
1. A reader cannot tell what periods or groups the rates represent, making it harder to interpret the size of the change. The rates alone do not establish when or against what the reminders were compared.
2. The interview and reminder result gives the entry a direct study outcome, but it appears after the assignment procedure. Moving this bullet first would let readers encounter that result sooner.

**How to change it**
1. Add [the baseline period or comparison window], if available.
2. Move this bullet before the admission-day assignment bullet.

> Wrote the study’s data dictionary for 180 variables, which the next two cohort studies reused.

**Problem**
[Polish] The data-dictionary reuse result is less direct than it needs to be.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The long list of operational duties distracts from the data work and delays the identifier result.
2. [Polish] The lab-data description does not say how records were matched across the systems.

**Why**
1. The reader has to pass through several unrelated duties before reaching the 1,200 mismatched identifiers. The entry also moves between study outcomes and this broad bundle of tasks without a clear sequence, making the research-support contribution harder to follow.

**How to change it**
1. Lead with the identifier result, then shorten the duty list to the most relevant tasks or separate those duties from the data work.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
1. [Important] “Cutting-edge analytics” does not identify the analytical method used.
2. [Important] The opening claim does not name a specific finding or change.

**Why**
1. A reader cannot tell what technical skill the project demonstrates from this broad label. Naming the actual approach would make the analytical contribution assessable.
2. “Transformative” and “patient-centered” do not tell readers what the project contributed. Without a concrete result, they cannot judge what the claimed insights mean.

**How to change it**
1. Replace “cutting-edge analytics” with [the specific analysis or method used], naming one approach that best shows your contribution.
2. Replace this phrase with [the clearest finding or outcome and its comparison or measure], if available.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The decrease from 12% to 8% is 4 percentage points, or about a 33% relative reduction, not a 50% reduction.
2. [Important] The analysis result and survey-response result read as separate strands, and the strongest result is not the opening line.
3. [Polish] The adjustment description names covariates but not how the adjustment was performed.

**Why**
1. The stated percentage does not match the figures in the bullet. A reader who checks the arithmetic may question the accuracy of the analysis.
2. The opening claim does not establish a concrete sequence, while the readmission result is the clearest analytical finding. Readers may have trouble seeing how the project’s separate results fit together or what to notice first.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point decrease” or “about a 33% reduction.”
2. Move the readmission-result bullet before the opening bullet; keep the survey-response result distinct unless the two findings are connected.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Error] The response-rate increase is 20 percentage points, not 20% relative to the original rate.

**Why**
The rate rises from 35% to 55%, a 20-percentage-point increase; relative to 35%, that is about a 57% increase. The stated unit could lead readers to misread the size of the change.

**How to change it**
Replace “by 20%” with “by 20 percentage points” or “by about 57% relative to the original rate.”

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Polish] The survey line gives no result from the translation or pilot.
2. [Polish] The passive phrasing hides who translated and piloted the survey.

> Wrote the survey’s data codebook, which the clinic used for its follow-up survey the next year.

**Problem**
[Polish] “Which the clinic used” is a wordy connection to the codebook’s later use.

## Already working

- s2:e0:b1: Connects a measured reduction in database errors to specific quality-control steps.
- s2:e0:b5: Connects training a defined group on specific processes to a final-audit result.
- s3:e1:b0: Connects the survey work to a specific first-of-its-kind clinic resource.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c9006581.md.

