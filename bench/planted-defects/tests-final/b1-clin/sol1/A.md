> Here is my resume: bench/planted-defects/tests-final/b1-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the overall story and file format. The degree has no bullets to review; no job posting was provided for a match review.

1. **Verify two clinical claims before sending this out.** The stated calculation excludes censored patients, so it does not estimate median survival in each arm. A nonsignificant superiority result (p = 0.41) also does not establish equivalence to usual care.
2. **Resolve the trial’s placement.** A randomized discharge study appears under the 2020 Community Health Survey and closely matches the trial described in your 2022–2025 Meridian role. Confirm which entry owns that work, then remove the conflicting account.
3. **Lead with research experience.** The narrative review recommends putting Meridian and the hospital role ahead of the current gym job, and cutting the generic opening of the asthma project in favor of its specific finding.

The PDF parses cleanly, so the priorities are the claims and the story rather than formatting. The full report is in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 71 · wording 80 · narrative 65

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 11 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Front Desk Staff

**Problem**
[Important] The front-desk role leads the experience section instead of the clinical research roles.

**Why**
Its current dates matter, but its placement makes a nonresearch job the first account of your experience. A reader looking for clinical research work should encounter Meridian and Northgate University Hospital first.

**How to change it**
Lead EXPERIENCE with Meridian and Northgate University Hospital. Move Summit to a clearly labeled Additional Experience section, retain its dates and shorten it to one line.

> M.P.H. in Biostatistics

**Problem**
[Important] Education appears before the clinical research experience and ongoing health-analysis project.

**Why**
This order makes readers reach the M.P.H. before the work that most directly demonstrates your recent research experience. Putting the research sections first would keep both your employment and current analysis together near the top.

**How to change it**
Move EDUCATION below EXPERIENCE and PROJECTS.

> Sep 2025 - Present

**Problem**
[Polish] The résumé shows no research position after the July 2025 clinical research role.

## Summit Climbing Gym | Front Desk Staff | Metro City, USA | Sep 2025 - Present

> Checked in about 150 climbers a shift and sold day passes and memberships.

**Problem**
1. [Polish] The sales duty has no stated result.
2. [Polish] The verbs are in past tense for a role marked Present.

> Ran the weekend rental desk and logged gear inspections for the manager.

**Problem**
1. [Important] The inspection wording does not say whether you inspected gear or recorded someone else’s inspections.
2. [Polish] The rental-desk duty has no stated result.
3. [Polish] The verbs are in past tense for a role marked Present.

**Why**
1. Those are different responsibilities. Without the distinction, a reader cannot judge your hands-on responsibility for the gear.

**How to change it**
1. Replace “logged gear inspections” with [inspected rental gear] or [recorded gear inspection results], whichever describes your work.

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Reduced data-entry errors by 70% by adding range checks and double entry for the primary outcome.

**Problem**
[Polish] The 70% reduction lacks the starting error rate.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] Averaging follow-up time among patients who died while excluding censored patients does not estimate median survival in each arm.
2. [Important] The line gives no survival estimate for either arm.

**Why**
1. That calculation gives a mean for a selected subset, not a median for all patients in an arm. A research reader will question the survival-analysis claim because estimating survival requires accounting for censored observations.
2. Naming an analysis without its findings leaves a research reader unable to tell what it showed. The missing estimates also make the work less useful as evidence of an analytical result.

**How to change it**
1. Replace the median-survival claim with “calculated mean follow-up time among patients who died.” Only if you also estimated median survival using [the censoring-aware method used], state that as a separate analysis.
2. If censoring-aware median survival was actually estimated and belongs here, add [median survival in each arm] alongside that corrected claim.

> Built the enrollment tracker the three sites reviewed each week, flagging sites more than 10% behind target.

**Problem**
[Polish] The tracker line stops at flagging sites and does not say what happened next.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Polish] The reports line does not show whether you worked on the safety data or only presented it.
2. [Polish] The line does not identify what, if anything, passed the four reviews.

> Established that the program was equivalent to usual care because the superiority test on readmission was not significant (p = 0.41).

**Problem**
[Error] A nonsignificant superiority test does not establish that the program was equivalent to usual care.

**Why**
A test that fails to find a difference does not demonstrate that two treatments are sufficiently similar. Equivalence requires a prespecified margin and an analysis showing the result falls within it, so the present claim would undermine confidence in the statistical interpretation.

**How to change it**
Replace the equivalence claim with “the superiority test did not find a statistically significant difference in readmission (p = 0.41).” Claim equivalence only if [a prespecified equivalence analysis] supports it.

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
1. [Important] “Coordinated” does not identify which part of trial delivery you managed.
2. [Important] The strongest trial results are buried after the scope and the bullet appears too late in the entry.

**Why**
1. Early enrollment and completed follow-up visits are strong results, but the broad verb leaves your contribution to them unclear. Naming your responsibility would help a reader assess your role in the trial.
2. A scanning reader reaches the enrollment and follow-up results only at the end of this line, after several earlier bullets. Leading with them would make the clearest evidence of trial delivery visible first.

**How to change it**
1. Replace “Coordinated” or add [the enrollment or follow-up process you directly managed], while retaining the existing results.
2. Move this bullet to the top of the Meridian entry. Within it, move “finishing enrollment 4 months early with 94% of follow-up visits completed” before the trial description.

## Northgate University Hospital | Research Assistant | Metro City, USA | Jul 2021 - Aug 2022

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
1. [Important] The patient-interview result is not the opening bullet.
2. [Polish] The sentence assigns the decision to add reminders to the findings themselves.

**Why**
1. The 25 interviews and the change from 18% to 11% give a reader a clear contribution and outcome. Placing that evidence first would make the role’s impact visible sooner.

**How to change it**
1. Move this bullet above the medical-record screening bullet, retaining its figures.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] An administrative-duty list separates the data work from its identifier-reconciliation result.
2. [Polish] The data-work description does not explain how you reconciled the mismatched identifiers.

**Why**
1. A scanning reader can miss the 1,200 resolved identifiers or mistakenly connect that result to scheduling and front-desk work. The unrelated tasks also weaken an otherwise focused account of data reconciliation.

**How to change it**
1. Cut the list beginning “while also scheduling” and put “resolved 1,200 mismatched patient identifiers” immediately beside “Cleaned and merged lab data from two hospital systems.”

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Found that follow-up within 7 days was linked to lower readmission: 8.2% against 11.9% without it, after adjusting for age and insurance.

**Problem**
1. [Important] The readmission finding appears after the generic opening rather than leading the project.
2. [Polish] The line names the adjustment variables but not the adjustment method.
3. [Polish] “Against” makes the percentage comparison awkward to read.

**Why**
1. The comparison between 8.2% and 11.9% is the evidence a reader can assess immediately. Giving it first position makes the analytical result, rather than a general description, define the project.

**How to change it**
1. Move this bullet above the generic opening, or make it the first bullet when that opening is cut.

> Presented the analysis at the state public-health conference poster session.

**Problem**
[Polish] The poster line does not name the conference.

> Harnessed cutting-edge analytics

**Problem**
[Important] The generic opening delays the project’s concrete finding.

**Why**
The readmission comparison and poster already give this project a clear research story. Opening with a broad claim makes a reader work past it to discover what the analysis found.

**How to change it**
Cut the generic opening bullet and let the readmission-finding bullet open the project.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Important] The passive wording hides which translation or pilot work you personally did.
2. [Polish] The pilot’s size is stated, but its effect on the survey is not.

**Why**
1. A reader cannot distinguish whether you translated the survey, conducted the pilot or contributed in another way. In a team project, that uncertainty limits the credit you can claim for the work.

**How to change it**
1. Replace the passive wording with [your specific role in translating or piloting the survey]. If you did both, use “Translated the survey into Spanish and piloted it with 20 residents before launch.”

> Ran a randomized discharge study of more than 600 heart-failure patients that completed enrollment months ahead of schedule.

**Problem**
[Error] The discharge-trial and early-enrollment claim is incorrectly placed under the 2020 Community Health Survey entry.

**Why**
The résumé also places a closely matching 640-patient trial with early enrollment under the Meridian role in 2022–2025. Readers may read this as the same achievement claimed years apart, calling the dates and ownership of the work into question.

**How to change it**
Remove this bullet from the survey entry; keep the trial achievement under the correct entry. If you performed distinct trial work during March–August 2020, describe [the specific duties performed then] separately without claiming the later enrollment result.

## Already working

- s2:e2:b0: Clear screening task, method and eligible-patient result.
- s2:e2:b2: Compact account of a deliverable, its scope and its subsequent use.
- s3:e1:b0: Connects a concrete contribution to a result the clinic could use.

## Set aside (8)

8 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-3bf1e067.md.

