> Here is my resume: bench/planted-defects/tests-final/b4-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s narrative and ATS formatting. The formatting check found it parses cleanly as a one-page resume. Wording review and job-description matching were not run.

The main changes to address:
- **Correct the methods and claims:** the Northgate odd/even-day assignment is described as randomized, but the content reviewer says that is not randomization. At Meridian, averaging follow-up only among patients who died does not support a median-survival estimate.
- **Fix the percentage descriptions:** for the asthma project, 12% to 8% is about a 33% relative reduction, not 50%; 35% to 55% is a 20-percentage-point increase, not a 20% increase.
- **Reorder the resume:** list Meridian before Northgate in Experience. The narrative review also noted a May 2021–April 2022 period with no work or study listed.

The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · narrative 72

Read 4 of 4 entries for content, 0 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Apr 2022 - Aug 2022

**Problem**
[Important] The Experience entries are not in newest-first order.

**Why**
Northgate’s April–August 2022 dates appear above Meridian’s September 2022–July 2025 dates. Readers scanning for recent experience may encounter the older role first.

**How to change it**
Move the Meridian Heart Institute entry above the Northgate University Hospital entry.

> M.P.H. in Biostatistics

**Problem**
[Important] Education appears before Experience and Projects, so the recent work does not lead the page.

**Why**
The education entry is the first section, ahead of more recent work and projects. Readers looking for current experience have to scan past it.

**How to change it**
Move the Education section below Experience and Projects.

> May 2021

**Problem**
[Polish] The dates show a 10-month period with no study or work listed.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] Odd- and even-day assignment is quasi-random, not randomized.
2. [Important] The assignment description gives no study result.

**Why**
1. Admission day determines the group, so assignment is predictable rather than based on chance. Calling it randomized overstates the study design and may lead readers to question the validity of the comparison.
2. Readers can see how patients were assigned, but not what the study found or what your contribution achieved. Without a result and comparison, they cannot judge why this work mattered.

**How to change it**
1. Replace “Randomized” with “Quasi-randomly allocated,” or describe the admission-day assignment without calling it random.
2. Add [the study’s main outcome compared with usual care] after the assignment description, if available.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The strongest bullet in this entry is not the opening one.

**Why**
The interview bullet connects patient feedback to a specific intervention and a measured reduction in no-shows. Leading with it would show the value of your work before readers reach the assignment description.

**How to change it**
Move the bullet beginning “Interviewed 25 patients” ahead of the current opening bullet.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
[Important] The result is buried after unrelated duties, and the line mixes data work with operational tasks.

**Why**
Readers may miss the resolution of 1,200 mismatched identifiers because it follows a list of scheduling, supply, meeting and front-desk duties. The “which resolved” wording also leaves the link to the data-cleaning work unclear, while the assorted tasks dilute the focus of this research-assistant entry.

**How to change it**
Move “resolved 1,200 mismatched patient identifiers” directly after “cleaned and merged lab data from two hospital systems.” Cut the unrelated duties here or place them in a separate line.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The trial description does not identify the coordination work you owned.

**Why**
The enrollment timeline and follow-up completion show the outcome, but readers cannot tell which actions helped deliver it. Without a specific action, they cannot assess the clinical research coordination skills behind the result.

**How to change it**
Add [a specific recruitment or site-coordination action you took to keep enrollment on schedule], if accurate.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] Averaging only the follow-up times of patients who died does not estimate median survival or account for censoring.
2. [Important] The line gives no median-survival estimates or comparison between the arms.

**Why**
1. That average is neither a median nor a valid survival estimate that accounts for censored observations. Excluding censored patients discards survival information and can bias the result.
2. Without the estimates or their contrast, readers cannot see what the analysis found. That leaves the result and its relevance to the trial unclear.

**How to change it**
1. If a Kaplan–Meier analysis was performed and the curve reached 50%, report the median survival estimated by that method; otherwise, remove the median-survival claim.
2. Add [the median survival estimate for each arm and the between-arm difference, if reported], or the clearest reported comparison.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
[Polish] The zero-deviation result does not state the scope of the audit.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
1. [Important] The opening claim gives neither a concrete finding nor a clear through-line for the project.
2. [Polish] “Cutting-edge analytics” does not name the analysis performed.

**Why**
1. Readers cannot tell what the analysis revealed or why the work mattered. Since the project also reports a readmission result and a survey-response result, the broad opening does not establish what ties the work together.

**How to change it**
1. Replace “transformative, patient-centered insights” with [a specific finding or decision the analysis informed], and add [a measured effect or comparison, if available].

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The relative reduction from 12% to 8% is about 33.3%, not 50%.
2. [Important] The strongest project result is not the opening bullet.
3. [Polish] The line names age and insurance but not the method used to adjust for them.

**Why**
1. The difference is 4 percentage points. Dividing 4 by the starting 12% gives about 33.3%, so the stated relative reduction is incorrect.
2. The readmission bullet gives a concrete outcome and identifies adjustment factors, while the opening bullet makes a broad claim. Leading with the result would show readers the project’s substance sooner.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point reduction” or “about a 33% relative reduction.”
2. Move the bullet beginning “Found that 7-day follow-up” ahead of the current opening bullet.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Error] The increase from 35% to 55% is 20 percentage points, not 20%.

**Why**
The absolute change is 20 percentage points. Relative to the starting 35% rate, the increase is about 57.1%, so “by 20%” misstates the change.

**How to change it**
Replace “by 20%” with “by 20 percentage points.”

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Polish] The response count alone does not show how residents were sampled or how many neighborhoods the estimate covers.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Polish] The line does not say what the pilot revealed or changed.

## Already working

- s2:e1:b1: Connects specific data-quality actions to a measured improvement.
- s2:e1:b3: Links a clear reduction in unresolved queries to concrete safety-reconciliation work.
- s2:e1:b4: States the outcome across four reviews.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ae2f337b.md.

