> Here is my resume: bench/planted-defects/tests-final/b2-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullets, plus the resume’s overall narrative and formatting. No job description was provided, so there’s no role-specific match review.

The main changes to address are:

- **Correct the study-design and analysis claims.** The Research Assistant entry calls odd/even admission-day assignment “randomized”; the content review says that predictable rule is not random allocation. The Coordinator entry’s method of averaging follow-up times for patients who died does not estimate median survival.
- **Reconcile the numbers with the claims.** In the asthma project, 12% to 8% is a one-third relative reduction, not 50%; 35% to 55% is a 20-percentage-point increase, not a 20% relative increase. Clarify what groups or periods the rates compare.
- **Make results and context clearer.** The reviews flag results that are missing or buried, including the survival estimates, the program’s effect in the Research Assistant study, and the asthma project’s survey-response finding. They also note a 10-month gap after the MPH and suggest clarifying how that project’s two outcomes fit together.

Formatting and ATS parsing were clean. The format review also flagged date of birth and nationality as personal details to remove. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 74 · wording 76 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 13 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 22 May 1997

**Problem**
[Error] The file includes personal details that are conventionally left off a résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate. Including them adds personal information without helping the reader judge qualifications.

**How to change it**
Remove “Date of birth: 22 May 1997” and “Nationality: Chilean.”

> Northgate University | M.P.H. in Biostatistics

**Problem**
[Important] Education appears before Experience, so the reader sees the academic foundation before the current research trajectory.

**Why**
The candidate’s current research experience is more immediately relevant to a reader assessing this trajectory. Showing it first would bring that experience into view sooner.

**How to change it**
Move the Experience section above Education.

> Sep 2019 - May 2021

**Problem**
[Polish] The timeline leaves 10 months with no study or work listed between the MPH and the research assistant role.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] Averaging the follow-up time of patients who died, while excluding censored patients, does not estimate median survival.
2. [Important] The bullet gives no median survival estimates or other finding.

**Why**
1. Censored patients’ observed time still contributes information about survival, so excluding them leaves out relevant information. An average among patients who died is not the median survival time, which makes the stated method and estimate unreliable.
2. A reader cannot judge what the analysis found or why it mattered to the trial. The method alone leaves the result unstated.

**How to change it**
1. If you used it, name the Kaplan–Meier estimate of median survival for each arm; otherwise, remove or correct the claim to match the method actually used.
2. Add [the median survival estimate for each arm, with units, and the comparison that mattered], using only details you can support.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Error] The participle “Reconciling” does not match the past-tense verb “cut.”
2. [Important] The reduction in queries comes after the three-site methods, delaying the result.

**Why**
1. The opening participle and main verb do not form a consistent construction. This grammatical mismatch distracts from the safety-query result.
2. The reader has to move through the methods before reaching the outcome. Leading with the reduction would make the result easier to find.

**How to change it**
1. Replace “Reconciling” with “Reconciled” and “cut” with “cutting.”
2. Move “cut unresolved safety queries from 45 to 6” to the start of the bullet; the methods can follow it.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Polish] The phrase “all 4 reviews passed without a protocol change” does not define what counted as passing.
2. [Polish] The review result is added as a separate sentence-style clause.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
[Polish] The audit result is added as a separate sentence-style clause.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] Calling the allocation “Randomized” is incorrect: odd- or even-numbered admission days are a predictable assignment rule, not random allocation.
2. [Important] The line describes the allocation but gives no outcome comparing the program with usual care.
3. [Polish] “Randomized patients by assigning” is redundant and obscures the allocation action.

**Why**
1. Patients and staff can anticipate which group a given admission day receives. Admission-day patterns may also coincide with other factors that differ between groups, so the design should not be presented as randomization.
2. A reader can understand the study setup but cannot tell whether the program helped patients or improved care. Without an outcome, the value of the work is not visible.

**How to change it**
1. Replace “Randomized patients by assigning” with a direct description of assignment by odd- or even-numbered admission day; do not call it randomization.
2. Add [the program’s measured outcome and how it compared with usual care, if available] after the allocation description.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
1. [Important] The strongest result is not the first bullet in the entry.
2. [Polish] The interviews are not clearly connected to the text-reminder intervention.

**Why**
1. The interviews led to an intervention associated with fewer no-shows, which gives the reader a clear result. Opening with this line would make that impact easier to notice.

**How to change it**
1. Move this bullet before the current opening bullet; the change costs no words.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The result is delayed by an overlong list of administrative duties.
2. [Important] The placement of the result leaves unclear which work resolved the mismatched identifiers.

**Why**
1. The final line combines data work with scheduling, supplies, minutes, and front-desk duties, making the entry feel more like a task list than a focused account of the study. The reader reaches the data result only after that list.
2. The reader may not know whether the identifier resolution came from cleaning and merging lab data or from the broader set of duties. Making the connection clear helps show the value of the technical contribution.

**How to change it**
1. Cut or shorten the administrative-duty list and move the result closer to the data work.
2. Move “which resolved 1,200 mismatched patient identifiers” directly after “Cleaned and merged lab data from two hospital systems.”

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
1. [Important] The opening bullet uses vague promotional language instead of naming a specific finding or consequence.
2. [Important] The line does not name the analysis method used.

**Why**
1. “Cutting-edge analytics” does not tell a reader what analysis the project used, while “transformative, patient-centered insights” does not say what the project established or why it mattered. The bullet therefore does not show the analytical skill or contribution.
2. The phrase “cutting-edge analytics” does not show what analytical skill the project demonstrates. Naming the actual method would make that skill legible to a reader.

**How to change it**
1. Replace “cutting-edge analytics” with [one analysis method actually used] and replace the promotional description with [a specific finding and what it changed for patients or care teams].
2. Replace “cutting-edge analytics” with [one analysis method actually used].

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] A reduction from 12% to 8% is not a 50% reduction.
2. [Important] The line gives two readmission rates without identifying the groups or periods being compared.
3. [Important] The readmission finding is not the first bullet in the project entry.
4. [Polish] The line names adjustment variables but not the analysis approach.

**Why**
1. The change is a 4-percentage-point absolute decrease, or a 33.3% relative reduction from the starting rate. The stated 50% figure matches neither calculation.
2. Without a comparison basis, a reader cannot tell what the change represents. Naming the key comparator would make the result easier to interpret.
3. The readmission result is a clear finding and is more concrete than the opening promotional claim. Leading with it would help a reader see the project’s main result sooner.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point decrease” or “a 33% relative reduction.”
2. Clarify the comparison with [the relevant comparison group or time period].
3. Move this bullet before the current opening bullet; the change costs no words.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Error] The increase from 35% to 55% is 20 percentage points, not a 20% relative increase.

**Why**
Relative to the starting 35% response rate, the increase is about 57%. Calling it a 20% increase misstates the size of the change.

**How to change it**
Replace “by 20%” with “by 20 percentage points” or “by about 57%.”

> survey response rate

**Problem**
[Important] The readmission finding and survey-response result appear to be separate outcomes without a stated connection.

**Why**
A reader may not know how the survey work belongs to the asthma readmission analysis. Without that link, the project’s scope is unclear.

**How to change it**
Clarify how the survey work relates to this analysis, or separate or remove that result.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The line gives no result from the estimate of uninsured residents by neighborhood.

**Why**
A reader can see that the clinic gained an estimate, but cannot judge what it found or the scale of the finding. The response count shows participation, not the estimate’s result.

**How to change it**
Replace or follow that phrase with [the estimated uninsured share or count by neighborhood].

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Polish] The line gives no result of the pilot.
2. [Polish] The survey’s translation and pilot are described in passive voice, leaving unclear who did them.

## Already working

- s2:e0:b0: Pairs trial scale and design with two clear completion measures.
- s2:e0:b1: The before-and-after rates make the improvement easy to judge.
- s3:e1:b2: Shows a specific data-related deliverable.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-bb982705.md.

