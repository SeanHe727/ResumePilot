> Here is my resume: bench/planted-defects/tests-final/b2-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed: content and wording for all 4 bullet-based entries, plus format and whole-resume narrative; Education was not applicable, and job-description matching was not run because no posting was provided.

Most important changes identified by the specialists:

1. **Correct methodological claims.** Do not call odd/even admission-day assignment “randomized.” Also revise the survival-analysis bullet: averaging follow-up only among patients who died, while excluding censored patients, does not estimate median survival.
2. **Fix the project calculations.** A change from 12% to 8% is a **33% relative reduction** or **4-percentage-point decrease**, not 50%. A change from 35% to 55% is **20 percentage points**, not 20%.
3. **Strengthen and reorganize weaker material.** Replace vague language such as “cutting-edge analytics” with the actual method and finding; remove or separate unrelated administrative duties; and move the SMS survey-response bullet out of the asthma project if it belongs elsewhere.
4. **Improve structure.** Lead with **Experience**, followed by **Projects, Education, and Skills**. The specialists also recommend reordering bullets so results and core research work appear before supporting duties.
5. **Remove personal details.** Omit date of birth and nationality. The PDF otherwise parsed cleanly and had no layout or ATS blockers.

The complete entry-by-entry findings are available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 75 · wording 83 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 19 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 22 May 1997 | Nationality: Chilean

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally omitted from a U.S. résumé because they are unrelated to qualifications and expose protected personal information. Including them can distract from your experience and create avoidable bias concerns.

**How to change it**
Delete the date of birth and nationality line.

> Sep 2019 - May 2021

**Problem**
[Important] The timeline leaves 10 months unaccounted for between the M.P.H. and the Research Assistant role.

**Why**
The M.P.H. ends in May 2021, while the next listed study or work begins in April 2022. A recruiter may wonder whether relevant employment, training, caregiving, job searching, or another activity is missing.

**How to change it**
If applicable, add [the role, study, training, or other activity from June 2021 through March 2022] with accurate dates; otherwise be prepared to explain the interval.

> M.P.H. in Biostatistics

**Problem**
[Important] Education appears too early for your current level and direction of experience.

**Why**
You now have more than three years of relevant clinical-research experience, and the projects reinforce a current analysis direction. Leading with education delays the stronger evidence of your professional and technical fit.

**How to change it**
Move EXPERIENCE ahead of PROJECTS and place EDUCATION after PROJECTS, producing the sequence EXPERIENCE, PROJECTS, EDUCATION, SKILLS.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The line does not identify the coordination practice that helped produce its enrollment and follow-up results.

**Why**
The outcomes are strong, but a reader cannot distinguish your contribution from the broader study team's work. One concrete practice would show how you influenced the trial's performance.

**How to change it**
After the trial scope, add [the recruitment or follow-up process you used across sites].

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] “Estimated median survival” is incorrect because averaging follow-up times only among patients who died does not estimate median survival.
2. [Important] The line states that survival was estimated but not what the analysis found or enabled.

**Why**
1. That calculation produces the mean observed follow-up time among the selected patients who died, not median survival in each randomized arm. Excluding censored observations also discards information required for a valid survival analysis, which could undermine confidence in your statistical knowledge.
2. A reader cannot tell whether the work contributed to a study conclusion, report, monitoring decision, or other useful output. That leaves the analysis sounding like an isolated task rather than evidence of impact.

**How to change it**
1. If you used Kaplan–Meier analysis, replace the method with “using Kaplan–Meier analysis, accounting for censored observations.” Otherwise, replace “Estimated median survival in each arm” with “Calculated the average observed follow-up time among patients who died.”
2. After the corrected method, add [the arm-level finding] or [the specific deliverable or decision the analysis informed].

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Important] The reduction in unresolved safety queries is buried behind three method details.
2. [Polish] “three sites” is inconsistent with the entry's numeral style.
3. [Polish] “each week” is unnecessarily long.

**Why**
1. A scanning reader may register only the reconciliation duties and miss the strongest evidence of their value. Leading with the quantified result makes the achievement visible before the supporting methods.

**How to change it**
1. Move “cut unresolved safety queries from 45 to 6” to the beginning, followed by “by reconciling adverse-event reports across 3 sites”; retain the MedDRA and pharmacy-record methods afterward.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Important] “all 4 reviews passed” incorrectly makes the reviews sound like the things being evaluated.
2. [Polish] The line names the safety-report deliverable but not the substantive safety work behind it.

**Why**
1. A reader may pause over what “passed” means because a committee review ordinarily reaches a conclusion rather than passing itself. The awkward construction weakens an otherwise useful governance outcome.

**How to change it**
1. Replace “all 4 reviews passed without a protocol change” with “all 4 reviews concluded without protocol changes.”

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] Calling odd/even admission-day assignment “randomized” is incorrect because the allocation rule is deterministic and predictable.
2. [Important] The allocation line does not state the study milestone or result that the work enabled.
3. [Polish] The description of the admission-day rule is longer than necessary.

**Why**
1. Calendar-day parity does not use a random mechanism, and staff can foresee the next patient's assignment. Admission patterns may also differ by day, permitting selection bias and systematic imbalance between the groups.
2. A reader can understand the procedure but cannot tell how much work it involved or what value it delivered. Without a scale and outcome, the line reads as process rather than an accomplishment.

**How to change it**
1. Replace “Randomized patients” with “Allocated patients by admission-day parity,” retaining the odd-day and even-day assignments.
2. After “usual care,” add [number of patients allocated] and [the study milestone or analytical outcome the allocation enabled].

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
1. [Error] “the findings added text reminders” incorrectly gives the findings an action they cannot perform.
2. [Important] The entry does not open with its strongest result.

**Why**
1. Findings can lead to a decision, but they cannot implement reminders themselves. The current wording momentarily obscures the connection between your interviews, the intervention, and the reduction in no-shows.
2. The patient-interview line connects a defined sample to an operational change and a drop in no-shows from 18% to 11%. Placing it first would establish your impact before the weaker allocation-process line.

**How to change it**
1. Replace “the findings added text reminders” with “the findings led to text reminders.”
2. Move this bullet to the first position in the entry.

> Wrote the study’s data dictionary for 180 variables, which the next two cohort studies reused.

**Problem**
[Important] “which” appears to refer to the 180 variables rather than the data dictionary.

**Why**
A reader may initially interpret the variables themselves as the reused item. That ambiguity interrupts an otherwise strong statement about creating a resource that supported later studies.

**How to change it**
Replace “which the next two cohort studies reused” with “a resource reused by the next two cohort studies.”

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The administrative duty list separates the lab-data work from its result and weakens the entry's research narrative.
2. [Polish] The line does not explain how the records or patient identifiers were reconciled.

**Why**
1. A reader may incorrectly associate the 1,200 resolved identifiers with scheduling, supplies, meeting minutes, or front-desk coverage rather than the data work. The unrelated duties also make the entry feel like an unordered mix of research and administration instead of a focused account of your contribution.

**How to change it**
1. Move “which resolved 1,200 mismatched patient identifiers” directly after “two hospital systems.” Cut the administrative list from this line; if any duty is important enough to retain, place it in a separate bullet.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
1. [Important] “Harnessed cutting-edge analytics” is vague jargon that does not identify your analytical technique.
2. [Important] “transformative, patient-centered insights” is promotional filler that does not state what the project learned or enabled.

**Why**
1. A hiring manager cannot tell whether the work involved statistical modeling, visualization, cohort analysis, or another substantive method. That prevents the opening line from demonstrating the technical contribution expected from an R project.
2. A reader has no concrete finding with which to judge the project's relevance or value. The broad claim also invites skepticism because neither the insight nor its intended use is identified.

**How to change it**
1. Replace that phrase with [the named statistical analysis or model] and specify that it was performed in R.
2. Replace that phrase with [the project's most important respiratory-health finding] and [its intended use or audience].

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The change from 12% to 8% is not a 50% reduction.
2. [Important] “cut readmission” does not identify the measured outcome as a rate.
3. [Important] The reported rates do not define the readmission window or patient cohort.
4. [Important] The entry does not open with its strongest analytical result.
5. [Polish] The line names adjustment covariates but not the statistical method used.

**Why**
1. The absolute decrease is 4 percentage points. Relative to the original 12% rate, the reduction is 4/12, or approximately 33%, so the current figure could undermine confidence in your quantitative accuracy.
2. The figures are proportions, so the noun should make clear that the analysis concerns the readmission rate rather than a count or general event. The missing word makes the statistical statement less precise.
3. Readmission results depend heavily on the outcome definition and population. Without that context, a reader cannot interpret the 12% and 8% rates or compare them with other findings.
4. The readmission line provides rates, covariate adjustment, and a substantive result, while the current opening relies on vague claims. Moving the corrected result first would establish the project's value immediately.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point decrease (33% relative reduction).”
2. Replace “cut readmission” with “cut the readmission rate.”
3. Replace “readmission” with “[readmission window and definition] readmission” and add [patient cohort] if it can be stated compactly.
4. Move this bullet, after correcting its numerical and methodological issues, to the first position in the project.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
1. [Error] The increase from 35% to 55% is not an increase “by 20%.”
2. “with SMS reminders” does not identify the design or analysis supporting attribution of the increase to the reminders.

**Why**
1. It is an increase of 20 percentage points. Relative to the original 35% response rate, it is approximately a 57% increase, so the current wording confuses two different measures.
2. The before-and-after rates alone do not show whether the reminders caused the change or whether other factors differed. A causal-sounding claim without the supporting design may make a technical reader question the analysis.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points.”
2. If you used a supporting design or analysis, add [study design or analytical method]. Otherwise, soften the attribution by replacing “Raised” with “The response rate rose” and describing when SMS reminders were used.

> survey response rate

**Problem**
[Important] The survey-response bullet does not belong in the asthma readmission project as presented.

**Why**
The first two bullets concern asthma readmissions, while this line describes survey recruitment among invited residents. The unexplained change in subject makes the project look assembled from unrelated work.

**How to change it**
Move this bullet to the project where the survey work occurred, or cut it if no relevant project is included.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The line does not identify how the 1,100 survey respondents were selected or recruited.

**Why**
One compact sampling or recruitment detail would demonstrate methodological skill and clarify the basis of the neighborhood estimate. Without it, a reader cannot judge whom the responses represent.

**How to change it**
After “collected 1,100 responses,” add “from [target population] using [sampling or recruitment approach].”

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Important] The passive wording hides which translation and pilot work you personally performed.
2. [Important] The line does not state what changed because of the 20-resident pilot.

**Why**
1. Because the header identifies a five-person team, a reader cannot distinguish your direct contribution from general team activity. That ambiguity weakens the evidence of ownership.
2. Piloting is valuable when it identifies a problem or improves the instrument. Without the resulting change, the line reads as process rather than an accomplishment.

**How to change it**
1. Replace the passive construction with your actual role: if accurate, use “Translated the survey into Spanish” or “Coordinated Spanish translation,” then retain the 20-resident pilot.
2. After “before launch,” add “leading to [number or type of wording, translation, or response-option changes].”

> Wrote the survey’s data codebook, which the clinic used for its follow-up survey the next year.

**Problem**
[Polish] The codebook line does not show the data-management skill required to create it.

## Already working

- s2:e0:b1: Connects specific quality-control measures to a strong quantified result.
- s2:e0:b5: Links staff training directly to a compliance outcome.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-6f2c6456.md.

