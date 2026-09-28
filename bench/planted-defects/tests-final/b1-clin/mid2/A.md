> Here is my resume: bench/planted-defects/tests-final/b1-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all 18 bullets across the five entries with content and wording reviews, plus the full-document narrative and format checks. Education has no bullets to review; no job description was provided for a match review.

The main changes flagged:
- **Clarify a possible duplicate study:** the Community Health Survey project and Meridian role appear to describe the same 600-plus-patient heart-failure trial, but their dates differ.
- **Check the statistical claims:** a reviewer flagged the stated median-survival calculation and the claim of equivalence based on a nonsignificant result.
- **Make the asthma project more specific:** one bullet uses promotional language without saying what analysis was done or found.
- **Refocus the order and space:** the narrative review suggests moving Experience above Education and reducing the current gym role so it doesn’t compete with the research experience.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 68 · wording 77 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Mar 2020 - Aug 2020; Sep 2022 - Jul 2025; more than 600 heart-failure patients; 640 heart-failure patients

**Problem**
[Error] The Community Health Survey and Meridian entries give conflicting dates for what appears to be the same trial achievement.

**Why**
The survey entry is dated March–August 2020, while the Meridian role is dated September 2022–July 2025 and describes a 640-patient trial that finished enrollment four months early. A reader may doubt the timeline or wonder whether these are separate studies, which weakens confidence in the account.

**How to change it**
Clarify whether these are separate studies. If they are the same study, correct [the project dates] and make the study details consistent across the entries.

> M.P.H. in Biostatistics

**Problem**
[Polish] Experience should appear before Education.

## Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present

> Checked in about 150 climbers a shift and sold day passes and memberships.

**Problem**
[Important] The sales and check-in duties show activity and volume, but not the result of sales or how you handled customer-facing work.

**Why**
A reader can see that you checked in about 150 climbers, but that count does not show whether your sales work supported membership growth. The line also gives no detail about the service skill behind the customer interactions.

**How to change it**
Add [membership sign-ups compared with a target or prior period], if you have a defensible comparison. If accurate, add a brief detail about [a specific customer-service approach or check-in system you used].

> Ran the weekend rental desk and logged gear inspections for the manager.

**Problem**
[Important] The rental-desk and inspection responsibilities have no stated result, and “for the manager” does not clarify the work.

**Why**
A reader can picture the duties but cannot tell whether the rental operation or inspection records improved service or equipment readiness. The final phrase names who received the logs, not what the work accomplished.

**How to change it**
Add [what the inspection records helped the manager identify or address], if you can support it. Cut “for the manager” if it only identifies who received the logs.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Reduced data-entry errors by 70% by adding range checks and double entry for the primary outcome.

**Problem**
[Important] The 70% reduction has no stated baseline or comparison period.

**Why**
A reader cannot judge the starting point or what the reduction represents. Without that context, the size of the improvement is harder to interpret and assess.

**How to change it**
Add [baseline error rate or comparison period] next to “by 70%,” using the comparison that supports the figure; replace “by adding” with “through.”

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
[Error] Averaging follow-up times among patients who died does not estimate median survival, and the line gives no result for either arm.

**Why**
An average is not a median, and excluding censored patients discards information about survival times. A reader also cannot see what the analysis established or how the arms compared.

**How to change it**
If you used an appropriate survival method such as Kaplan–Meier, report [the median estimate for each arm] and [the key between-arm finding], then briefly state the method. Otherwise, describe the calculation as average follow-up time among observed deaths, not median survival.

> Built the enrollment tracker the three sites reviewed each week, flagging sites more than 10% behind target.

**Problem**
[Important] The tracker’s flagging function is stated, but its effect on enrollment is not.

**Why**
A reader can picture how the tracker identified sites that were behind target, but cannot tell whether the flags helped address delays or improve enrollment progress. A supported outcome would show the value of building the tool.

**How to change it**
Replace or supplement the threshold detail with [the result of the flags, such as how they changed enrollment progress or follow-up], if you can substantiate it.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Important] “All 4 reviews passed” does not explain what the reviews established.

**Why**
A reader may not know whether the reports met a review standard, identified no safety concerns, or led to another outcome. That ambiguity makes the result difficult to interpret.

**How to change it**
Replace “passed” with [the specific review outcome or criterion], if that is what the reviews established, and move the review result before the presentation detail.

> Established that the program was equivalent to usual care because the superiority test on readmission was not significant (p = 0.41).

**Problem**
[Error] A nonsignificant superiority test does not establish that the program was equivalent to usual care.

**Why**
Failure to detect a difference is not evidence of equivalence. Equivalence requires a prespecified acceptable difference and an appropriate equivalence analysis.

**How to change it**
Say the superiority test did not find a statistically significant difference. Claim equivalence only if an appropriate equivalence analysis with a prespecified margin was performed.

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Important] The strongest outcomes are delayed until the end of the line.

**Why**
The early enrollment and follow-up completion results are the most immediately scannable evidence of the trial’s success. Leading with the study setup makes the reader wait for those results.

**How to change it**
Move the enrollment and follow-up outcomes before the trial description, keeping the same figures and study details.

## Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022

> Screened 2,300 medical records for a diabetes cohort study, confirming eligibility for 410 patients against the protocol criteria.

**Problem**
[Polish] “Eligibility” and “protocol criteria” overlap.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The strongest result in the entry is not introduced first.

**Why**
The reduction in no-shows is a clear outcome tied to patient interviews and is likely to draw a reader’s attention. Putting another line first delays that evidence.

**How to change it**
Move the interview and reminder line to the opening position in this entry.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The data result is buried in a long list of unrelated duties, making the entry read like a task list.
2. [Polish] The data-cleaning description does not say how the identifiers were reconciled.

**Why**
1. The identifier result is the clearest outcome, but a reader encounters several routine duties before reaching it. That makes the data work—and its result—harder to notice.

**How to change it**
1. Move the identifier result directly after the data work, then trim or split the duty list.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The promotional language does not identify the analysis performed or what it found.

**Why**
A reader cannot tell what analytical skill you used or picture the contribution from broad claims about transformative insight. The specific finding is more persuasive than describing it as transformative.

**How to change it**
Replace “cutting-edge analytics” with [the analysis approach used], if accurate, and replace “transformative, patient-centered insights into respiratory health outcomes” with [the specific finding] and, if accurate, [what decision or practice it informed].

> Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9% without it, after adjusting for age and insurance.

**Problem**
1. [Important] The readmission percentages lack group sizes or a description of the patient population.
2. [Important] The strongest finding is not the opening line in the project entry.
3. [Polish] “Without it” makes the comparison group unclear, and the adjustment method is unnamed.

**Why**
1. Without the cohort size or definition, a reader cannot tell how much evidence the comparison represents. That makes the rates harder to interpret.
2. This line gives a concrete comparison and adjusted result, making it the clearest evidence of the project’s contribution. Leading with a less specific line delays that evidence.

**How to change it**
1. Add [the number of patients in each group] or [the cohort definition], whichever best clarifies the comparison.
2. Move this finding to the opening position in the project entry.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The response count does not explain how respondents were selected or how their responses produced the estimate.

**Why**
A reader cannot tell whether the responses support an estimate of uninsured residents across neighborhoods. That leaves the basis for the stated estimate unclear.

**How to change it**
Add [how residents were selected or how responses were weighted, if applicable] to show the key step behind the estimate.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
[Polish] The pilot’s outcome is missing, and the passive wording hides who translated the survey.

> Ran a randomized discharge study of more than 600 heart-failure patients that completed enrollment months ahead of schedule.

**Problem**
1. The randomized-study description does not state what was randomized or what the comparison was.
2. “Months ahead of schedule” does not give a precise enrollment timeline.
3. “That completed enrollment” grammatically refers to the patients rather than the study.

**Why**
1. A reader cannot tell what the study design compared from the phrase “randomized discharge study.” That makes the achievement difficult to assess as research experience.
2. A reader cannot tell how far ahead of the plan the study finished enrollment. The imprecise timing makes the result less informative.
3. A reader may understand the sentence to mean that the patients completed enrollment. The unclear reference obscures the intended schedule result.

**How to change it**
1. If this bullet is retained as a separate study, specify [what was randomized] and [the comparison], if accurate.
2. If this bullet is retained as a separate study, replace “months” with [the amount of time ahead of schedule], if known.
3. If this bullet is retained as a separate study, replace “that completed enrollment” with wording that makes the study the subject, such as “with enrollment completed [amount of time] ahead of schedule,” if accurate.

> Ran a randomized discharge study

**Problem**
[Important] The heart-failure trial bullet repeats the trial achievement reported under Meridian and does not fit this survey entry.

**Why**
The first two bullets describe the community survey, while this one describes a separate heart-failure trial. Keeping it here repeats the achievement and makes the entry’s focus unclear.

**How to change it**
Remove this bullet from the Community Health Survey entry.

## Already working

- s2:e2:b2: Shows downstream use of the work, not just completion of the data dictionary.
- s3:e0:b2: The presentation venue and format are stated concretely.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-28329a30.md.

