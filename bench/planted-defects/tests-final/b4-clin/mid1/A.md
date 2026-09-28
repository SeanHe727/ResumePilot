> Here is my resume: bench/planted-defects/tests-final/b4-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s narrative and formatting. The education entry has no bullets to assess. No job description was provided, so I did not assess job match.

The main changes to prioritize:
- **Correct the research-method claims.** The hospital bullet calls odd/even admission-day assignment “randomized”; the reviewer says that is inaccurate. Another bullet’s method for estimating median survival does not support that estimate, and it gives no result.
- **Fix the project’s percentage claim.** A change from 12% to 8% is a 4-percentage-point decrease, not a 50% reduction. The project’s opening bullet is also too general to show what analysis you performed or found.
- **Reorder the resume.** Put the more recent Meridian role before Northgate, and consider placing Experience above Education. The narrative review also flagged roughly 10 months between the MPH and the first listed role.
- **Clarify outcomes and tighten crowded bullets.** Some bullets list actions without saying what they found or what changed; in one, the key result is buried after a list of duties.

The file parses cleanly for ATS. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 71 · wording 76 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 6 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Apr 2022 - Aug 2022

**Problem**
[Important] Experience is below Education, and its entries are not in newest-first order.

**Why**
The résumé shows several years of professional experience after the MPH, so placing Experience first would make that background visible sooner. Within Experience, Meridian’s 2022–2025 role is more recent than Northgate’s 2022 role, but it appears second.

**How to change it**
Move Experience above Education and place Meridian Heart Institute (Sep 2022–Jul 2025) before Northgate University Hospital (Apr 2022–Aug 2022).

> May 2021

**Problem**
[Polish] The dates leave about 10 months between the MPH and the Research Assistant role unexplained.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
[Error] The odd/even admission-day rule is not randomization, and the line gives no study outcome.

**Why**
Odd/even assignment follows a predictable rule, not a random allocation sequence. Admission timing could also be influenced by patients or staff, creating selection or confounding concerns. Without an outcome, readers cannot see what the study accomplished or why the assignment mattered.

**How to change it**
Replace “Randomized” with “systematically assigned by admission-day parity” and do not call the method randomization. Add [outcome, compared with usual care] if available.

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The no-show reduction is buried after the interview method instead of leading the bullet.

**Why**
A scanning reader may reach the end of the line before noticing the measured result. That makes the clearest evidence of impact less likely to register.

**How to change it**
Move the result about text reminders and no-shows to the opening, before the interview detail.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
[Important] The unrelated duty list delays the identifier result and obscures its connection to the data work.

**Why**
Scheduling, ordering, meeting minutes, and front-desk coverage interrupt the data-cleaning story before the result appears. Readers may miss the 1,200 identifiers resolved or fail to connect that result to cleaning and merging the lab data, while the bundle makes the entry read like an unordered task list.

**How to change it**
Move “resolved 1,200 mismatched patient identifiers” next to the data-cleaning and merging work, and cut or shorten the scheduling, supplies, minutes, and front-desk duties. Remove “while also.”

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
[Polish] “4 months early” has no stated planned date or timeline for comparison.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] Averaging follow-up time only among patients who died does not estimate median survival.
2. [Important] The line gives no survival estimates, arm comparison, or interpretation of the analysis.

**Why**
1. This calculation excludes censored patients and gives the average follow-up time among observed deaths, not the time by which half the arm is estimated to experience the event. In survival analysis, Kaplan–Meier estimation accounts for censored follow-up.
2. Readers cannot see what the analysis established or whether survival differed between arms. Without the finding or what it informed, the analytical task has no clear relevance to the trial.

**How to change it**
1. If Kaplan–Meier was used, report the median survival estimated from that analysis; otherwise replace “median survival” with “mean follow-up time among patients who died.”
2. If the method supports it, add [median survival for each arm, with units and timepoint] and [what trial decision or interpretation the estimates informed], if applicable.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Polish] The action begins with a non-finite verb form, unlike the past-tense verbs in the other bullets.
2. [Polish] “three sites” uses a different number style from “3-site” elsewhere in the entry.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
[Polish] The claim that all four reviews “passed” does not identify the committee’s decision or a safety finding.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
[Polish] The zero-deviation result does not state how many consent records were audited.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening bullet uses buzzwords instead of naming a finding or analysis, and it does not connect the project’s two measured results.

**Why**
“Cutting-edge” and “transformative” do not tell a reader what work was performed or what it found. Because the claim does not connect the readmission and survey findings, it gives no useful context for either result.

**How to change it**
Delete the generic opening bullet rather than retaining its unsupported claims.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Error] The readmission change from 12% to 8% is a 4-percentage-point drop, not a 50% reduction.
2. [Important] The readmission finding should appear before the other project finding.
3. [Polish] The adjustment factors are named, but the analysis used to account for them is not.

**Why**
1. The stated rates differ by 4 percentage points. Relative to the original 12%, the reduction is about 33%, so “50%” misstates the result and can undermine confidence in the analysis.
2. The readmission result is the stronger opening point, but a reader encounters it after the generic introductory bullet. Moving it first makes the project’s clearest measured finding easier to notice.

**How to change it**
1. Replace “a 50% reduction” with “a 4-percentage-point drop (about a 33% relative reduction).”
2. Move this bullet ahead of the survey-response bullet.

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.

**Problem**
[Polish] “by 20%” does not specify the unit of change, even though the rates rise from 35% to 55%.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Polish] The line describes the estimate but not what it showed.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Polish] The translation and pilot steps have no stated result or resulting change.
2. [Polish] The line does not say what the 20-resident pilot tested.
3. [Polish] The passive opening hides who translated and piloted the survey.

## Already working

- s2:e0:b2: Pairs a clear deliverable with its scope and evidence of later reuse.
- s2:e1:b1: Connects a specific intervention to a measured before-and-after improvement.
- s3:e1:b2: Shows the work was reused by the clinic beyond the initial survey.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-2b943ad0.md.

