> Here is my resume: bench/planted-defects/tests-final/b1-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed content for all four entries with bullets, plus the full-resume narrative and format. The wording review and job-description match did not run; no job posting was provided.

The main changes to address:
- **Check technical accuracy:** the Crescent Bank bond bullet says buying more fixed-rate bonds of the same duration hedged interest-rate risk. The Stonebridge valuation bullet pairs free cash flow to equity with WACC. The utility project also calls a change from $50 to $40 a 25% drop, and describes accuracy moving from 70% to 82% as a 12% increase.
- **Clarify what changed and what resulted:** specify which credit-ratio thresholds changed, what the capital-planning template improved, and what the training or onboarding materials helped people do. Add context for the early-default comparison and the utility project’s accuracy measure.
- **Reorder and clean up the page:** put Stonebridge before Crescent Bank, move Experience above Education, and remove the date of birth and nationality. The file parses cleanly for ATS, and the resume is one page.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 69 · narrative 66

Read 4 of 4 entries for content, 0 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998 | Nationality: Singaporean

**Problem**
[Error] The résumé includes personal details that convention leaves off.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate’s experience and qualifications. Including these details takes attention from the evidence relevant to the role.

**How to change it**
Remove the date of birth and nationality.

> Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

**Problem**
[Important] The Experience entries are not in newest-first order.

**Why**
Crescent Bank (Jul 2020–Dec 2022) appears above the more recent Stonebridge Manufacturing role (Jan 2023–Jun 2025). This makes the experience chronology harder to scan.

**How to change it**
Move the Stonebridge Manufacturing entry before Crescent Bank.

> Harbor State University | B.B.A. in Finance

**Problem**
[Important] Experience appears below Education, although the professional roles are the strongest evidence of the candidate’s current direction.

**Why**
A reader reaches the degree before the two professional roles that best show the candidate’s current work. That order delays the most relevant evidence.

**How to change it**
Move the Experience section above Education.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
1. [Error] Buying more fixed-rate bonds of the same duration does not hedge the interest-rate risk of the existing holdings.
2. [Important] The line gives no measure of how much the claimed hedge changed the bank’s interest-rate risk.

**Why**
1. The new bonds add interest-rate exposure in the same direction as the existing holdings rather than offsetting their price sensitivity. A reader who understands fixed-income risk will question the claim unless the hedge used an offsetting position or liability.
2. A reader cannot judge the scale of the outcome from the claim alone. Without a before-and-after measure of interest-rate sensitivity, the result is hard to assess.

**How to change it**
1. If you used an offsetting position or liability, name it; otherwise, remove the claim that buying more bonds hedged the risk.
2. After the result, add [change in portfolio interest-rate sensitivity compared with before the hedge], if available.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] “two ratio thresholds” does not identify which credit ratios changed.
2. [Important] “with no rise in early defaults” does not state the comparison period or rate.
3. [Polish] The declined-application analysis is the strongest line in the entry but is not the opening bullet.

**Why**
1. A credit analyst reader cannot tell what the analysis examined or what judgment the findings informed. Naming the ratios would make the policy change more specific.
2. Without a comparison, a reader cannot tell what supports the claim that credit quality did not worsen as approvals increased. The approval change is concrete, but the default claim cannot be assessed on the same terms.

**How to change it**
1. Replace “two ratio thresholds” with [the two ratio names], if space permits.
2. Add [early-default rate compared with the prior period or a comparable applicant group], if available.

> interest-rate risk

**Problem**
[Polish] The bond-risk bullet sits apart from the entry’s credit-policy, portfolio-monitoring, and memo-efficiency work.

> my findings

**Problem**
[Polish] “my findings” uses a personal pronoun in a résumé bullet.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The shared NPV rules show consistency but not what changed in the capital-planning process.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] The line mismatches free cash flow to equity with WACC.
2. [Important] “Valued the acquisition target” states the task but not what the valuation showed or how it was used.

**Why**
1. Free cash flow to equity is cash available to equity holders and should be discounted at the cost of equity. WACC discounts free cash flow to the firm, which is available to both debt and equity investors.
2. A reader can see the method but cannot judge the result or the contribution to the acquisition. Without a conclusion, the bullet reads as a method without an outcome.

**How to change it**
1. If the cash flow was free cash flow to equity, replace “weighted average cost of capital” with “cost of equity.” If you used WACC, replace “free cash flow to equity” with “free cash flow to the firm.”
2. After the valuation method, add [the valuation estimate or conclusion and the decision it informed]; include only a result that can be shared.

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Polish] The line does not say whether the training or user guide changed budgeting work.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
[Error] The stated 25% drop is wrong: a fall from USD 50 to USD 40 is a 20% drop.

**Why**
The decrease is USD 10, which is 20% of the starting value of USD 50. A 25% drop from USD 50 would result in USD 37.50, so the stated percentage conflicts with the model values.

**How to change it**
Replace “25% drop” with “20% drop.”

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
1. [Error] The change from 70% to 82% is 12 percentage points, not a 12% relative increase.
2. [Important] The accuracy figures do not say what was forecast or how accuracy was assessed.

**Why**
1. The difference between the two accuracy figures is 12 percentage points. Relative to the starting 70%, the increase is about 17.1%, so “12%” misstates the change if it means a relative increase.
2. A reader cannot tell what improved or what the 70% and 82% compare. Naming the forecast metric and validation basis would make the result interpretable.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points”; alternatively, say “by about 17.1%” if describing the relative increase.
2. Clarify [forecast metric and validation basis], using the corrected “12 percentage points” wording if that is the intended comparison.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Important] “financial reporting and analysis” does not identify specific work or connect the support claim to the fund’s reporting and onboarding work.
2. [Important] The FP&A support line does not state an outcome.

**Why**
1. The phrase could describe many different tasks, so a reader cannot see what you personally contributed or what skill you used. Because the claim is general, it also does not connect the fund’s other bullets into a clear account of your work.
2. A reader cannot tell what the reporting or analysis enabled or improved. Without an outcome and proof, the contribution remains hard to assess.

**How to change it**
1. Replace the general claim with [one specific report or analysis you worked on] and, if relevant, [one key technique or tool you used] that connects to the fund’s work described below.
2. Add [what the reporting or analysis enabled or changed] and, if available, [the measure compared with a baseline or prior period].

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Polish] The benchmark-reporting bullet is the strongest line in the entry but is not the opening bullet.
2. [Polish] The line does not say what changed in the performance report to show returns against its benchmark.

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
1. [Polish] The line does not say what the onboarding notes helped new analysts do.
2. [Polish] “the fund’s models” does not identify which model or modeling task the notes covered.

## Already working

- s2:e1:b0: Connects forecast accuracy to a concrete treasury action.
- s2:e1:b1: Pairs a concrete process change with a measurable time reduction.
- s2:e1:b3: Connects chart-of-accounts and allocation-rule work to a clear operational result.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-a01d346b.md.

