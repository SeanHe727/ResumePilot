> Here is my resume: bench/planted-defects/tests-final/b2-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **4 experience/project entries:** content and wording reviewed
- **Overall narrative:** reviewed
- **Format/ATS:** reviewed
- **Education:** no bullet-level review applicable
- **Job-description match:** not reviewed because no posting was provided

The most important changes are:

1. **Correct technical and numerical claims**
   - The Research Assistant bullet calls odd/even admission-date assignment “randomized,” although the described method is deterministic.
   - The asthma project’s change from **12% to 8%** is not a 50% reduction: it is a 4-percentage-point decrease, or approximately a 33.3% relative decrease.
   - The survey response change from **35% to 55%** should be labeled as either a 20-percentage-point increase or a relative increase—not simply “20%.”
   - Rework or remove the median-survival bullet, since the described calculation does not estimate median survival correctly.

2. **Clarify outcomes and evidence**
   - Add denominators or time periods where possible—for example, what population or follow-up period supports the **94%** completion figure.
   - Explain what the safety reviews established and how many records/sites were covered by the consent audit.
   - For the community survey, state what the 20-person pilot demonstrated or changed.
   - Add the missing value associated with the “first estimate of uninsured residents by neighborhood.”

3. **Improve focus and ordering**
   - Move the outcome earlier in long bullets, especially the hospital data-cleaning bullet and the community survey bullets.
   - Separate the Research Assistant’s primary data work from administrative duties such as front-desk coverage and meeting minutes.
   - Reorder bullets in the Meridian role to foreground the strongest trial-management and safety outcomes.
   - Consider placing **Experience before Education**, since the resume now shows more than three years of relevant work.

4. **Address the timeline**
   - The resume leaves an unexplained gap between **May 2021** and **April 2022**. Add relevant work, coursework, research, or other activity if applicable.

5. **Remove vague promotional wording**
   - The asthma project’s phrases such as **“cutting-edge analytics,” “transformative,”** and **“patient-centered insights”** should be replaced with the actual analysis performed and its measurable result.
   - The unsupported skill **“mixed-effects models”** should either be demonstrated in an entry or removed.

The file itself is ATS-readable, consistent, one page, and has no layout blockers. The complete specialist report is available in **`/report --full`**.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 71 · wording 77 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 6 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 22 May 1997

**Problem**
[Error] Personal details that readers are not expected to weigh should be removed from the file.

**Why**
Date of birth and nationality are generally omitted by convention and can introduce irrelevant screening information. Keeping them uses space without strengthening the evidence of biostatistics or clinical research capability.

**How to change it**
Delete “Date of birth: 22 May 1997 | Nationality: Chilean.”

> Northgate University | M.P.H. in Biostatistics

**Problem**
[Important] Education should follow the experience section so the clinical research roles establish the candidate's current direction first.

**Why**
More than three years of work experience are shown, including two clinical research roles. Leading with the MPH makes the document read as education-led even though the stronger current evidence is professional experience.

**How to change it**
Move the Education entry below the Meridian Heart Institute and Northgate University Hospital experience entries.

> Sep 2019 - May 2021

**Problem**
[Polish] The resume leaves a 10-month period unexplained between the MPH and the Research Assistant role.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The follow-up percentage lacks the number of scheduled visits or the follow-up period needed to show its scale.

**Why**
A reader can see that follow-up was strong but cannot judge how much work the 94% represents or how complete the measurement was. Without that anchor, the achievement is harder to compare with other trial-coordination results.

**How to change it**
Add the single most useful anchor after the percentage: [number of scheduled follow-up visits] or [follow-up period], if accurate.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] The calculation described does not estimate median survival.
2. [Important] The median-survival bullet states an analysis without stating its result.

**Why**
1. Averaging follow-up time among patients who died produces a mean among observed deaths, not the time by which half of the trial cohort experienced the event. Excluding censored participants discards information from people whose event had not been observed and can bias the analysis, which creates a serious credibility problem in a biostatistics résumé.
2. A hiring reader needs to know what the analysis found or changed, not only that an estimate was performed. Without the arm-specific medians or comparison, the bullet shows technical activity but not analytical value.

**How to change it**
1. If performed, replace the calculation with a statement that median survival was estimated in each arm using Kaplan–Meier methods incorporating censored observations; otherwise remove or soften the claim.
2. Append [median survival for each arm and the relevant comparison], if accurate, after the corrected method description.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
[Error] The adverse-event bullet has a grammatical mismatch and buries its strongest result.

**Why**
The opening participle makes the reader work out who or what cut the unresolved queries. The reduction from 45 to 6 is the clearest evidence of impact, but it appears only after several process details.

**How to change it**
Move the reduction in unresolved safety queries to the front, then state that adverse-event reports were reconciled across three sites, coded to MedDRA terms, and cross-checked weekly against pharmacy records.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Polish] The phrase “all 4 reviews passed” is imprecise because it does not identify what the reviews established.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
[Polish] The final-audit result lacks its audit scope and uses passive wording that does not separate the training from the finding.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] The odd/even admission-date rule is quasi-randomization, not randomization.
2. [Important] The allocation bullet describes the design but not what changed because of the work.
3. [Polish] The opening “Randomized patients by assigning” is repetitive and indirect.

**Why**
1. The next assignment is predictable from the admission date, so staff or patients could potentially anticipate or influence allocation. Calling it randomization overstates the design and may make a research reader question the accuracy of the rest of the methods description.
2. A research reader can understand the assignment rule but cannot tell whether the program produced a meaningful result or what the study established. The line therefore demonstrates procedure without demonstrating analytical or clinical contribution.

**How to change it**
1. Replace “Randomized patients” with “Allocated patients quasi-randomly,” while retaining the odd-day program and even-day usual-care assignments.
2. Keep the corrected allocation description, then add [the study's main outcome and comparison], if accurate.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The no-show result should lead the bullet, and “the findings added text reminders” should identify who acted.

**Why**
The reduction from 18% to 11% is the strongest evidence in the line, so leading with the interview count makes the result less prominent. “The findings added” also obscures the actor and makes the connection between the interviews and the intervention sound indirect.

**How to change it**
Move the no-show reduction to the front, then say that interviews with 25 patients informed the addition of text reminders, if that is accurate.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
[Important] The data-cleaning result is buried among administrative duties and has an ambiguous cause.

**Why**
A reader may not know whether cleaning and merging the lab data resolved the identifiers or whether the entire list of duties is being presented as the cause. The technical contribution is therefore harder to see and is diluted by scheduling, supplies, minutes, and front-desk work.

**How to change it**
Place “resolved 1,200 mismatched patient identifiers” immediately after “Cleaned and merged lab data from two hospital systems,” and move the other duties elsewhere or omit them from this bullet.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening uses promotional language instead of naming the analysis, its result, or a useful project sequence.

**Why**
“Cutting-edge analytics” does not show what technical method the project demonstrates, while “transformative, patient-centered insights” describes an aspiration rather than an outcome. The generic opening also fails to establish a clear sequence around the readmission result and leaves the survey-response bullet looking like a different project.

**How to change it**
Replace the generic opening with [the specific analysis used] and [the main asthma readmission finding or recommendation], if accurate; place the readmission result first and move the unrelated survey-response work to a separate project or entry.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The stated 50% reduction is numerically wrong, and adjustment for age and insurance does not establish that follow-up caused the reduction.
2. [Important] The strongest project result should open the entry rather than follow the generic opening.
3. The phrase “after adjusting for age and insurance” names covariates but not the adjustment method.

**Why**
1. The change from 12% to 8% is a 4-percentage-point decrease, or approximately a 33.3% relative reduction. Adjusting for age and insurance controls only for those variables; it does not rule out selection effects or other confounding, so the causal verb overstates the evidence.
2. The readmission comparison is the clearest project center and gives a recruiter an immediate analytical result. Leading with the generic sentence delays that evidence and makes the project appear less focused.
3. A technical reader cannot tell whether the comparison used regression, stratification, matching, or another approach. That missing method makes the analytical claim harder to evaluate.

**How to change it**
1. Replace “cut” with “was associated with lower,” if no suitable causal design was used, and replace “a 50% reduction” with “a 4-percentage-point decrease” or “an approximately 33.3% relative reduction.”
2. Move the corrected readmission-result bullet before the generic opening, or remove the generic opening after replacing it with a specific method or finding.
3. Replace the phrase with [the actual adjustment method using age and insurance], if accurate; if no identifiable method was used, remove or soften the adjustment claim.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Error] The response-rate increase is 20 percentage points, not 20 percent.

**Why**
The stated rates move from 35% to 55%, which is a 20-percentage-point increase or an approximately 57.1% relative increase. Using “by 20%” beside both endpoint rates creates a mathematical and interpretive inconsistency.

**How to change it**
Replace “by 20%” with “by 20 percentage points,” or state the approximately 57.1% relative increase; remove the redundant measure if the endpoints remain.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The survey bullet gives the response count but not the uninsured estimate, and it buries the key outcome.

**Why**
The 1,100 responses show reach but not what the clinic learned. A recruiter scanning the line may miss the neighborhood-level result because it appears only at the end.

**How to change it**
Move the neighborhood-level result earlier and add [number or percentage of uninsured residents, by neighborhood], if available; retain 1,100 responses as the scale figure.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Polish] The translation and pilot bullet reports activities without an outcome or a clear actor.

> Wrote the survey’s data codebook, which the clinic used for its follow-up survey the next year.

**Problem**
[Polish] The lasting impact of the codebook is buried after the task description.

## Skills

> R

**Problem**
[Important] The resume lists mixed-effects models without an entry that demonstrates using them.

**Why**
A reader looking for evidence of the skill cannot connect it to a project, role, or analysis in the document. That unsupported skill claim may prompt questions about whether the method was actually used.

**How to change it**
Remove “mixed-effects models” unless an entry can accurately name the analysis that used it; if it was used, add that method to the relevant project or role.

## Already working

- s2:e0:b1: Uses a precise before-and-after comparison.
- s2:e1:b2: It ties the data-management work to a concrete downstream outcome rather than stopping at task completion.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-5ec0127a.md.

