> Here is my resume: bench/planted-defects/tests-final/b5-clin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries for content and wording, plus the resume’s overall sequence and ATS formatting. No job description was provided, so this is not a job-specific match review.

The main changes to address:
- **Correct methodological and numerical claims:** the odd/even admission-day assignment should not be described as randomized. The survival estimate is not supported by the method described. Also, 12% to 8% is a 33% reduction, and 35% to 55% is a 20-percentage-point increase—not 20%.
- **Make outcomes and responsibilities clearer:** clarify what happened to the 1,200 mismatched identifiers, and add specifics about your coordination across the three trial sites where possible.
- **Reorder and explain the timeline:** put Experience before Education and list Meridian Heart Institute before Northgate University Hospital. The dates leave about 10 months between the MPH and the first listed role without an explanation.

The file parses cleanly as a one-page resume. The complete report is available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 70 · wording 77 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 13 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Northgate University Hospital | Research Assistant

**Problem**
[Important] The résumé places Education before substantial post-degree Experience and lists the older Northgate role before the more recent Meridian role.

**Why**
A reader sees the degree before the work that now provides the stronger lead for your story. The Experience order also runs against the dates, making the career timeline less easy to scan.

**How to change it**
Move Experience above Education, then move Meridian Heart Institute above Northgate University Hospital.

> May 2021

**Problem**
[Polish] The dates leave about 10 months between the MPH and the Research Assistant role without listed study or work.

## Northgate University Hospital | Research Assistant | Metro City, USA | Apr 2022 - Aug 2022

> Randomized patients by assigning those admitted on odd-numbered days to the program and even-numbered days to usual care.

**Problem**
1. [Error] The assignment was not randomized: odd- or even-numbered admission days determine which group patients entered.
2. [Important] The line describes the allocation rule but does not say what the study was intended to test or contribute.

**Why**
1. That is a deterministic, predictable allocation rule, not assignment by chance, so calling it randomized overstates the study design. A research reader may question the accuracy of the methods description; the long explanation also makes the rule harder to scan.
2. A reader can picture how patients were assigned but cannot tell why the work mattered. Without the study purpose or contribution, the task is harder to evaluate as research experience.

**How to change it**
1. Replace “Randomized” with wording that describes allocation by odd- or even-numbered admission day, and shorten the rule to its essential detail. Only retain a claim of randomization if a genuine randomization process was also used.
2. Name the study or intervention the allocation supported and, if available, add [the outcome or decision it enabled].

> Interviewed 25 patients about missed clinic visits; the findings added text reminders that cut no-shows from 18% to 11%.

**Problem**
[Important] The entry lacks a clear lead thread, and its strongest bullet is not first.

**Why**
The bullets range from interviews and data infrastructure to allocation and operations. Opening with the patient-interview result would give the entry a clearer lead and put its concrete impact in the reader’s first scan.

**How to change it**
Move the patient-interview bullet before the allocation bullet and the other bullets.

> Cleaned and merged lab data from two hospital systems while also scheduling participant visits, ordering study supplies, taking minutes at lab meetings and covering the front desk, which resolved 1,200 mismatched patient identifiers.

**Problem**
1. [Important] The line lists several unrelated duties before its result, making the identifier outcome easy to miss.
2. [Important] The line does not say what happened to the 1,200 mismatched identifiers or make clear which work resolved them.

**Why**
1. The scheduling, supply, meeting, and front-desk tasks interrupt the data-work description before the measurable result appears. A reader scanning for research and data experience may overlook the 1,200-identifier outcome.
2. A reader cannot tell whether the identifiers were matched, corrected, or otherwise reconciled. The trailing clause also does not clearly connect the result to the data cleaning and merging rather than to one of the other listed duties.

**How to change it**
1. Lead with the identifier-resolution result, then cut or separate the unrelated duties.
2. Replace “resolved” with the specific result, such as “matched” or “corrected” if accurate, and clarify what happened to [the 1,200 identifiers].

## Meridian Heart Institute | Clinical Research Coordinator | Metro City, USA | Sep 2022 - Jul 2025

> Coordinated a 3-site randomized trial of a nurse-led discharge program for 640 heart-failure patients, finishing enrollment 4 months early with 94% of follow-up visits completed.

**Problem**
1. [Important] The line gives no example of how you coordinated work across the three sites.
2. [Polish] “Finishing enrollment 4 months early” is less direct than saying enrollment finished ahead of schedule.

**Why**
1. A reader can see the trial’s scale and results but cannot tell what you did to align the sites. Without a concrete coordination detail, the early enrollment and follow-up completion do less to demonstrate that skill.

**How to change it**
1. Add [one specific way you aligned site enrollment or follow-up processes], if accurate.

> Estimated median survival in each arm by averaging the follow-up time of patients who died, excluding censored patients.

**Problem**
1. [Error] The calculation does not support a median survival estimate: averaging follow-up time among patients who died estimates a mean among observed deaths, not median survival.
2. [Important] The line gives neither survival estimate nor a comparison between arms.

**Why**
1. Excluding censored patients also discards information about people whose survival time was not fully observed and can bias the result. A reader with clinical-trial analysis experience may question the validity of the stated estimate.
2. A reader cannot see what the analysis established or judge its relevance without the estimates or a finding. The line names an analysis but leaves its result unknown.

**How to change it**
1. If Kaplan–Meier analysis was performed, report the median survival estimated from it; otherwise describe the calculation as the mean follow-up time among patients who died, not median survival.
2. Add [the estimates by arm and the relevant comparison or finding], if available.

> Reconciling adverse-event reports across three sites, coding them to MedDRA terms and cross-checking them against pharmacy records each week, cut unresolved safety queries from 45 to 6.

**Problem**
1. [Error] The opening participial phrase does not agree grammatically with the finite verb “cut.”
2. [Important] The before-and-after query counts have no time period.
3. [Polish] The result is buried after a long list of methods.

**Why**
1. The sentence begins with “Reconciling” but then makes “cut” the main verb without a subject that matches the opening construction. The reader may have to reread the line to follow its structure.
2. A reader cannot tell how quickly the backlog changed or what period the counts cover. That makes the size and pace of the improvement difficult to assess.

**How to change it**
1. Make the opening a finite past-tense verb that can take “cut” as its result, or recast the sentence so the opening and main verb agree.
2. Add [the period covered by the change], if known.

> Presented monthly safety reports to the data monitoring committee, and all 4 reviews passed without a protocol change.

**Problem**
1. [Important] “Passed” does not identify what the committee approved or found.
2. [Polish] The full-sentence construction after the comma makes the review outcome less direct.

**Why**
1. A reader cannot tell what the four reviews assessed or what their disposition was. No protocol change by itself does not show whether the safety reviews had a meaningful positive outcome.

**How to change it**
1. Replace “passed” with [the committee’s specific disposition or safety finding], if accurate; retain the no-change detail only if it clarifies that outcome.

> Trained 9 site nurses on the consent process and outcome forms, and no consent deviations were found at the final audit.

**Problem**
1. [Important] The audit result omits how many consent records were checked.
2. [Polish] The passive audit-result phrase is wordy and obscures the outcome.

**Why**
1. Without the audit sample size, a reader cannot gauge the scope of the finding. The absence of deviations is less informative when the number of records reviewed is unknown.

**How to change it**
1. Add [the number of consent records audited], if available.

## Asthma Readmission Analysis | Independent Project | R | Jan 2025 - Present

> Harnessed cutting-edge analytics to deliver transformative, patient-centered insights into respiratory health outcomes.

**Problem**
[Important] The opening bullet uses vague language instead of naming the analysis or its output, and the entry does not show how the readmission and survey-response results connect.

**Why**
“Cutting-edge” and “transformative” do not tell a reader what work you performed or what the project contributed. The separate readmission and survey-response findings also sit beside one another without explaining how they form parts of this project, which can make the entry feel unfocused.

**How to change it**
Replace the generic claim with [the central finding or outcome], and name [the specific analytical approach] only if it adds a skill not shown elsewhere. If accurate, clarify how the readmission and survey-response results relate; otherwise separate them into distinct projects.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
[Error] The stated 50% reduction is mathematically incorrect: a change from 12% to 8% is a 4-percentage-point drop, or about a 33.3% reduction relative to 12%.

**Why**
The current wording overstates the relative reduction and conflicts with the two rates shown. A reader checking the arithmetic may doubt the accuracy of the analysis.

**How to change it**
Replace “a 50% reduction” with “a 4-percentage-point drop” or “about a 33.3% reduction relative to baseline.”

> Raised the survey response rate by 20% with SMS reminders, from 35% to 55% of invited residents.
> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
[Error] The strongest project finding is not first, and “by 20%” misstates the change from 35% to 55%: it is a 20-percentage-point increase, or about a 57.1% relative increase.

**Why**
The current wording is ambiguous about whether 20% means a relative increase or percentage points, and its stated figures show a different change. Opening with the readmission finding would also put the project’s clearest result before the survey-response result.

**How to change it**
Move the readmission finding before this bullet. Replace “by 20%” with “by 20 percentage points,” if that accurately describes the change.

> Found that 7-day follow-up cut readmission from 12% to 8%, a 50% reduction, after adjusting for age and insurance.

**Problem**
1. [Important] The finding does not identify which patients or comparison group the reported readmission change concerns.
2. [Polish] The line names age and insurance as adjustment factors but does not name the analysis used.

**Why**
1. A reader cannot tell who experienced the change or what the seven-day follow-up group was compared with. Without that context, the result is difficult to interpret.

**How to change it**
1. Add [the patient population and comparison group], if they are not clear from the project context.

## Community Health Survey | Volunteer, Team of 5 | REDCap | Mar 2020 - Aug 2020

> Designed a 30-question community health survey and collected 1,100 responses, giving the clinic its first estimate of uninsured residents by neighborhood.

**Problem**
[Important] The line gives the response count but not the survey’s key estimate or finding about uninsured residents.

**Why**
A reader can see the collection volume but cannot tell what the clinic learned from the survey. Without a key estimate or neighborhood difference, the impact of the work is hard to judge.

**How to change it**
Keep the response count and add [the key uninsured estimate or neighborhood difference, expressed as a rate or count], if available.

> The survey was translated into Spanish and piloted with 20 residents before launch.

**Problem**
1. [Polish] The bullet about translation and piloting is not first, and it omits what those steps changed or established.
2. [Polish] The passive wording does not say who translated and piloted the survey.

## Already working

- s2:e0:b2: Shows both the scale of the data dictionary and its subsequent reuse.
- s2:e1:b1: Gives a clear before-and-after error rate and specifies the measure as a proportion of fields.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-71c91623.md.

