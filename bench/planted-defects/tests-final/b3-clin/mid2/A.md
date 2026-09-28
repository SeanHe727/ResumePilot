> Here is my resume: bench/planted-defects/tests-final/b3-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullet points, plus the resume’s narrative and formatting. Education has no bullets to review. No job-description match was run because you haven’t provided a posting.

The main changes to address:
- In the Research Assistant entry, don’t call the odd/even admission-day assignment “randomized”; clarify the design and, if available, report the study result.
- Revisit the survival-analysis bullet: the described method does not estimate median survival, and the bullet gives no result.
- Correct the percentage claims in the asthma project and specify what the compared rates represent.
- Replace vague project claims with the specific analysis or finding. Clarify the comparison behind the no-show rates, and bring the 1,200-identifier result forward in the long Research Assistant bullet.
- Consider removing date of birth and nationality. The narrative review also flagged an unexplained gap between May 2021 and April 2022.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 76 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 13 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 22 May 1997

**Problem**
[Error] The résumé includes personal details that are conventionally left off and are not meant to be weighed by a reader.

**Why**
Date of birth and nationality do not show qualifications for the roles listed. Including them draws attention to personal information rather than experience and skills.

**How to change it**
Remove “Date of birth: 22 May 1997 | Nationality: Chilean” from the file.

> Northgate University | M.P.H. in Biostatistics

**Problem**
[Important] Education appears before the directly relevant clinical research experience.

**Why**
The current Clinical Research Coordinator role is more directly relevant to the research work than the older degree. Leading with Education gives less relevant information the first position.

**How to change it**
Move the Experience section before Education; keep the MPH in the resume as context.

> Community Health Survey | Volunteer, Team of 5 | REDCap

**Problem**
[Important] The 2020 Community Health Survey project takes more space than its relevance warrants.

**Why**
The project supports the survey-design background, but it is less central than the current role and the asthma project. Its present space can draw attention away from more recent and directly relevant work.

**How to change it**
Shorten this project to one or two lines, keeping the survey-design detail most relevant to the roles you are targeting.

> May 2021; Apr 2022

**Problem**
[Polish] The timeline leaves 10 months with no study or work listed between the MPH and Research Assistant roles.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
[Error] The described calculation does not estimate median survival, and the line gives no survival result.

**Why**
Averaging follow-up time among patients who died gives a mean for observed deaths, not a median survival estimate. Excluding censored patients also discards survival information, so readers cannot assess either the method or what the analysis found.

**How to change it**
If that is what you calculated, report the average follow-up time among patients who died instead. If you estimated median survival, name the censoring-aware method used, such as Kaplan–Meier only if accurate, and add [median estimate by arm and the between-arm comparison, if available].

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
[Polish] The opening participle makes the action and its timing awkward beside the past-tense result.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Polish] “Passed” does not explain what the four reviews concluded or what standard they met.
2. [Polish] The sentence awkwardly joins a subjectless resume phrase to a clause with a different subject.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
[Polish] The sentence awkwardly joins a subjectless resume phrase to a clause with a different subject.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] Calling the odd- and even-day assignment “Randomized” is inaccurate: it is predictable, not random allocation.
2. [Important] The line describes the assignment procedure but does not give a study result.

**Why**
1. Because the admission-day rule is deterministic, assignments can be anticipated and may be influenced by admission timing. It does not constitute randomization, so the current label overstates the study design.
2. Readers can see how patients were assigned, but not what the study found or why the work mattered. Without the main outcome, the research contribution is difficult to assess.

**How to change it**
1. Replace “Randomized” with “Assigned” and describe the odd- versus even-numbered admission-day rule without calling it random allocation.
2. Add [primary outcome and result compared with usual care], if available.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
1. [Important] The no-show rates lack a comparison period or group.
2. [Important] The result is buried after the interview details, and “the findings added” obscures who acted on them.

**Why**
1. Readers cannot tell whether 18% and 11% compare rates before and after the reminders or refer to different groups. Without that context, the size and meaning of the reported change are uncertain.
2. Readers meet the interview task before the no-show result, so the impact arrives late. The phrasing also leaves unclear who introduced the reminders, weakening the link between the research and the change.

**How to change it**
1. After the rates, name [the comparison period or group, such as the relevant before-and-after periods or cohorts], if accurate.
2. Move the no-show result to the start of the bullet. Replace “the findings added” with “[the clinic or study team] introduced text reminders,” if accurate.

> Wrote the study’s data dictionary for 180 variables, which the next two cohort studies reused.

**Problem**
[Polish] The two cohort studies are the subject of an awkward trailing clause instead of being stated directly as the users of the dictionary.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
[Important] The identifier-resolution result is buried after unrelated duties, and the trailing “which” leaves unclear what resolved the mismatches.

**Why**
Readers may not know whether the lab-data work or the entire list of duties resolved the identifiers. The long list also makes the main research contribution harder to identify quickly.

**How to change it**
Move the 1,200-identifier result directly after “Cleaned and merged lab data from two hospital systems.” Cut or move the unrelated duties, remove “while also,” and add [how you matched the identifiers] only if it shows a relevant skill.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
1. [Important] “Cutting-edge analytics” does not identify the analysis, and the phrase leaves the specific approach unstated.
2. [Important] “Transformative, patient-centered insights” does not state a specific finding or consequence.

**Why**
1. Readers cannot tell what analytical skill the project demonstrates from this label. Without the approach, they have little basis for assessing the work.
2. Readers cannot picture what the project established or what decision it informed. The broad claim gives them no concrete result by which to judge its value.

**How to change it**
1. Replace “cutting-edge analytics” with [the specific analysis performed], if accurate.
2. Replace the general claim with [a specific finding or decision informed by the analysis], if available.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The 12%-to-8% change is a 4-percentage-point decrease, or about a 33% relative reduction, not a 50% reduction.
2. [Important] The strongest result is not the opening bullet.
3. [Important] The two readmission rates lack a comparison group or period.
4. [Polish] The line names adjustment factors but not the statistical approach.

**Why**
1. The current percentage misstates the result: the absolute difference is 4 percentage points, and the relative decrease from 12% is about 33%. Readers who check the arithmetic may question the accuracy of the analysis.
2. The concrete readmission result appears after the vague opening claim. Leading with the result would let readers see the project's measurable outcome sooner.
3. Readers cannot tell what the 12% and 8% rates represent, so they cannot interpret the reported change. Naming the comparison would anchor the result.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point decrease” or “about a 33% reduction.”
2. Move this result bullet before the “Harnessed cutting-edge analytics” bullet.
3. Clarify [the comparison groups or time periods represented by the two rates], if applicable.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Error] The increase from 35% to 55% is 20 percentage points, not a 20% relative increase.

**Why**
A 20-percentage-point increase from the original 35% rate is about a 57% relative increase. The current “by 20%” wording conflates those measures and may lead readers to misread the result.

**How to change it**
Replace “by 20%” with “by 20 percentage points” if that is the intended measure; otherwise state the relative increase accurately.

> 7-day follow-up; SMS reminders

**Problem**
[Important] The project presents its readmission and survey-response results as separate strands rather than one clear narrative.

**Why**
The 7-day follow-up analysis and the SMS reminder response-rate result appear as distinct outcomes, with no stated link between them. Readers may therefore be unsure what question or contribution holds the project together.

**How to change it**
If the results are connected, state [the shared project question or link between the analyses]. If they are separate work, distinguish them rather than implying one narrative.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The line gives the survey’s output but not what the estimate found.

**Why**
The 1,100 responses show scale, not what the clinic learned. Without a concrete estimate or its use, readers cannot judge the result’s significance.

**How to change it**
Add [the uninsured rate or count by neighborhood, or how the clinic used the estimate], if available.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Important] The line gives preparation steps but no outcome from the translation or pilot.
2. [Polish] The strongest bullet is not the opening one.
3. [Polish] The passive wording does not show what you did.

**Why**
1. Readers can tell that the survey was translated and piloted with 20 residents, but not whether the feedback revealed an issue or led to a change. The purpose and value of the preparation therefore remain unclear.

**How to change it**
1. Add [what the pilot feedback revealed or what you changed before launch], if applicable.

## Already working

- s2:e0:b0: Pairs a clear operational impact with a specific follow-up completion rate.
- s2:e0:b1: Connects two concrete data-quality controls to a clearly measured reduction in errors.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9e3becf7.md.

