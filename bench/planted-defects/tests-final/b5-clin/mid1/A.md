> Here is my resume: bench/planted-defects/tests-final/b5-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the full resume for chronology and formatting. No job description was provided, so I did not assess job-match.

The biggest changes to make:
- **Correct the study descriptions and calculations.** The odd/even admission-date assignment is not randomized. The survival calculation described does not estimate median survival. For the asthma project, 12% to 8% is a 4-percentage-point drop (about 33% relative), and 35% to 55% is a 20-percentage-point increase—not 20%.
- **Reorder the resume.** Put the more recent Meridian role before Northgate Hospital, and consider moving Education below Experience. The dates also leave a 10-month period between May 2021 and April 2022 unexplained.
- **Make key outcomes easier to scan.** Reviewers noted that some bullets bury results after long lists of tasks or methods; put the main outcome up front where appropriate, and clarify what your work produced.

The file parses cleanly as a one-page resume. The full report, including entry-by-entry findings, is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 75 · narrative 66

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 11 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Apr 2022 - Aug 2022”

**Problem**
[Important] Experience is not listed newest-first.

**Why**
The Northgate University Hospital role from April to August 2022 appears above the Meridian Heart Institute role from September 2022 to July 2025. A reader sees older experience before newer experience, making the chronology harder to scan.

**How to change it**
Move Meridian Heart Institute above Northgate University Hospital.

> “M.P.H. in Biostatistics”

**Problem**
[Important] Education appears before experience even though several years of work follow the MPH.

**Why**
The résumé shows several years of work after the degree, so experience is now the more relevant opening section. A reader encounters education before the professional history most relevant to the current profile.

**How to change it**
Move the Education section below Experience.

> “Sep 2019 - May 2021”; “Apr 2022 - Aug 2022”

**Problem**
[Polish] The listed dates leave 10 months without study or work shown.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
[Error] The odd/even admission-date rule is not randomization, and this bullet gives no study finding.

**Why**
Odd and even calendar dates follow a fixed, predictable rule rather than a random allocation process, and the pattern can align with calendar effects. A reader may question whether the study used valid randomization and cannot see what the research found or contributed.

**How to change it**
Replace “Randomized” with “Assigned” and retain the stated odd/even rule. If a separate random allocation process was used, name it instead; add [the study outcome and what it was compared with], if available.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The no-show reduction is buried after the interview method instead of leading the bullet.

**Why**
A scanning reader may stop at the method and miss the outcome. That makes the most direct evidence of the work’s effect less visible.

**How to change it**
Move the no-show reduction to the opening, before the interview detail, without changing the figures.

> Wrote the study’s data dictionary for 180 variables, which the next two cohort studies reused.

**Problem**
[Polish] The reuse result follows the description of the data dictionary instead of leading the bullet.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The long list of administrative duties obscures the data contribution and separates it from the identifier result.
2. [Important] The bullet does not make clear which work resolved the 1,200 mismatched patient identifiers.

**Why**
1. The reader cannot tell which task resolved the mismatched identifiers, and the list makes the entry read like a task list rather than one defined contribution. The result also arrives only after several methods and duties, making the accomplishment hard to find.
2. The data work and several administrative duties are all presented before the result. A reader may not know whether the identifier resolution came from cleaning and merging data or from one of the other tasks.

**How to change it**
1. Move “which resolved 1,200 mismatched patient identifiers” next to the data work it resulted from, and cut or separate unrelated duties. Cut “while also”; clarify [which task resolved the identifiers] if needed.
2. Place the result next to the work that produced it; clarify [which task resolved the identifiers] if the connection is still unclear.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The trial-coordination claim does not specify what coordination work you owned.

**Why**
The reader can see the trial’s scale and results but cannot assess the clinical-research skill or action behind them. One concrete example would make your contribution easier to judge.

**How to change it**
Replace “Coordinated” with [the specific recruitment, site-coordination, or follow-up workflow you owned].

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] Averaging only observed death times does not estimate median survival.
2. [Important] The bullet gives no survival estimate or between-arm comparison.

**Why**
1. This calculation excludes censored patients, whose follow-up still provides information about survival, and averages observed death times rather than estimating the median. In survival analysis, the usual method is Kaplan–Meier estimation, with the median taken where the estimated survival curve reaches 50%.
2. A reader cannot see what the analysis produced or judge what the estimates contributed. Naming a calculation alone leaves the result unknown.

**How to change it**
1. If Kaplan–Meier analysis was performed, report the median survival estimated from that analysis. Otherwise, describe this only as the average observed follow-up time among patients who died.
2. Add [median survival for each arm and the between-arm difference or comparison] after the method, if available and supported by the correct analysis.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Error] The adverse-event bullet has no main verb and uses a present-progressive opening for an ended role.
2. [Important] The reduction in unresolved safety queries is buried after a long list of methods.

**Why**
1. “Reconciling” leaves the action without a finite verb, so the reader has to infer what you did. The present-progressive construction also conflicts with the completed role and makes the accomplishment less direct.
2. A scanning reader may take in the coding and cross-checking details without noticing the outcome. That makes the quantified result less prominent.

**How to change it**
1. Replace “Reconciling” with a past-tense main verb, such as “Reconciled,” if that accurately describes the work.
2. Move the reduction in unresolved queries to the opening, ahead of the methods.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Polish] The bullet does not say what the reports helped the committee decide or do.
2. [Polish] The review outcome comes after the presentation detail instead of leading the bullet.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening claim names neither the analysis nor a specific, supported finding.

**Why**
“Cutting-edge” and “transformative” are promotional claims, not evidence of what the project did or found. A reader cannot picture the insight, judge its value, or assess the analytical skill behind it.

**How to change it**
Replace the promotional wording with [the specific analytical method used] and [the key measured result and what it is compared against], if accurate and available; otherwise remove the unsupported impact claim.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The reduction from 12% to 8% is 4 percentage points, not 50%.
2. [Important] The readmission result is not the opening bullet in the project entry.
3. [Polish] The adjustment variables are named, but the analytical approach is not.

**Why**
1. The stated figures give a 4-percentage-point drop, which is about a 33% relative reduction from 12%. Calling it 50% is arithmetically inconsistent and may undermine confidence in the analysis.
2. This is the entry’s clearest quantified analysis result, but it follows the broad opening claim. A reader scanning the project may not reach the more informative result first.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point reduction” or “about a 33% relative reduction.”
2. Move this bullet before the broad opening claim, after correcting the percentage change.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
1. [Error] The change from 35% to 55% is 20 percentage points, not 20%.
2. [Important] The survey-response result is not connected to the readmission analysis in this project entry.

**Why**
1. The stated rates differ by 20 percentage points. Relative to the original 35%, the increase is about 57%, so “by 20%” misstates the change.
2. The entry presents the response-rate change and the readmission result as separate strands. A reader may not know whether the survey informed the analysis or was a separate project outcome.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points,” keeping the stated rates.
2. If accurate, add [what the survey measured or how its responses supported the readmission analysis] so the connection is clear.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Polish] The response count does not show how well the responses represent residents across neighborhoods.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Polish] The bullet names translation and pilot work but gives no outcome from the pilot.
2. [Polish] The passive wording leaves unclear who translated and piloted the survey.

## Already working

- s2:e1:b1: Links a quantified improvement to specific database checks.
- s2:e1:b5: Connects training in specific study procedures with a favorable audit finding.
- s3:e1:b2: Connects a specific deliverable to the clinic’s later reuse of it.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8329f452.md.

