> Here is my resume: bench/planted-defects/tests-final/b1-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume: all 4 entries with bullets received content and wording reviews, plus format and narrative reviews. The full report is available at `/report --full`.

Most important changes:

1. **Correct the experience order**
   - Put **EXPERIENCE before EDUCATION**.
   - List **Stonebridge Manufacturing (Jan 2023–Jun 2025)** before **Crescent Bank (Jul 2020–Dec 2022)**.

2. **Fix technical and numerical issues**
   - The bond bullet’s described action does not hedge interest-rate risk as claimed; clarify the actual hedge.
   - In the utility valuation project, USD 50 to USD 40 is a **20% decline**, not 25%.
   - “70% to 82%” is a **12-percentage-point increase**, not a 12% increase.
   - Specify how “forecast error” and “forecast accuracy” were calculated.

3. **Strengthen outcome evidence**
   - Add the result of the acquisition valuation: recommendation, decision, valuation range, or other documented consequence.
   - Explain what changed because of the capital-planning template.
   - Add the result of training the five plant controllers.
   - The Student Investment Fund bullets need concrete deliverables, scale, and outcomes rather than general support or documentation.

4. **Improve wording consistency**
   - Remove the first-person phrase “my findings.”
   - Change present-tense “Writes” to past tense.
   - Replace participle openings such as “Mapping…” with past-tense verbs.
   - Clarify the pronoun in “wrote its user guide.”

5. **Check personal details**
   - The format review flags date of birth and nationality as unnecessary personal details; remove them unless specifically required for the application.

The resume parses cleanly as a one-page, 434-word document with no layout or ATS blockers.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 72 · wording 81 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998 | Nationality: Singaporean

**Problem**
[Error] Personal details such as date of birth and nationality should be removed.

**Why**
These details are not meant to be weighed in a resume and can distract from qualifications. They also add information unrelated to the finance experience and project evidence presented here.

**How to change it**
Remove the date-of-birth and nationality details from the file.

> Crescent Bank | Credit Analyst

**Problem**
[Important] Experience should appear before education, with Stonebridge Manufacturing before Crescent Bank.

**Why**
With two years of post-graduation experience and a current or recent analyst role, the work history should establish the candidate’s present level first. Within experience, newest-first ordering lets the reader see the Financial Analyst position before the older Credit Analyst role.

**How to change it**
Move the EXPERIENCE section before EDUCATION, then place "Stonebridge Manufacturing | Financial Analyst" above Crescent Bank.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
1. [Error] Buying more fixed-rate bonds of the same duration does not hedge the bank’s existing interest-rate risk.
2. [Important] The phrase "buying more fixed-rate bonds of the same duration" repeats "fixed-rate" and leaves "more" imprecise.
3. [Important] The hedge claim gives no measure of the bank’s interest-rate exposure before and after the action.

**Why**
1. The additional bonds generally add similar interest-rate sensitivity, increasing rather than offsetting the portfolio’s exposure to rate movements. A correct hedge requires an offsetting position, such as an appropriately sized interest-rate derivative or another exposure with opposite duration sensitivity.
2. The wording makes the method harder to scan and does not tell the reader how much was purchased. Even after the technical method is corrected, the description should name the position precisely.
3. A reader cannot judge the scale or effectiveness of the work from the action alone. One risk measure would make the claim credible without requiring a long technical explanation.

**How to change it**
1. Replace the stated method with the actual offsetting hedge used, such as [an interest-rate swap or other position with opposite rate sensitivity].
2. Remove the repeated "fixed-rate" and replace "more" with the actual quantity or position description, if accurate.
3. Add [change in the bank’s interest-rate sensitivity or duration gap] compared with [the position before the hedge] after the existing result.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Error] Reviewing three years of declined applications cannot by itself support the claim that the threshold changes caused no rise in early defaults.
2. [Important] The strongest Crescent Bank line should open the entry, and the bullet should avoid the first-person pronoun "my."

**Why**
1. A review of declined applications does not measure subsequent early defaults among the newly approved population. The conclusion requires consistently defined before-and-after approval and default cohorts, equal seasoning for the default horizon, and controls for applicant mix and other changes.
2. The approval-rate result is the most consequential evidence in the entry and will land harder before the less outcome-focused bullets. "My findings" adds a personal pronoun without adding evidence, while resume bullets conventionally use implied subjects.

**How to change it**
1. Keep the approval-rate result as a descriptive outcome: "Approval rate rose from 41% to 48% after two ratio thresholds changed." Add the no-rise claim only if supported by a properly seasoned, consistently defined default-cohort analysis; otherwise remove or soften it.
2. Move this bullet before the other Crescent Bank bullets, and replace "my findings" with "the analysis" or remove the phrase if the sentence remains clear.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
1. [Polish] The covenant checklist’s adoption scope is unclear.
2. [Polish] "Writes" is the wrong tense for a role that ended in December 2022.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
[Polish] The forecast-error result does not state how forecast error was calculated or compared.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The line describes standardized discount rates and payback rules but does not show why the consistency mattered.

> Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a month.

**Problem**
[Important] The reduction in manual journal entries is buried after three implementation methods, and "Mapping" uses the wrong tense for the ended role.

**Why**
A scanning reader may reach the technical work before seeing the strongest evidence of value: the reduction from 350 to 90 entries a month. The present participle also makes completed work sound ongoing.

**How to change it**
Lead with "cut manual journal entries from 350 to 90 a month," then retain the most telling implementation detail; change "Mapping" to "Mapped."

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] The line mismatches free cash flow to equity with the weighted average cost of capital.
2. [Important] The acquisition-valuation line gives no resulting valuation, recommendation, or decision.

**Why**
1. FCFE is cash flow available to equity holders after debt-related cash flows and should normally be discounted at the cost of equity. WACC is appropriate for unlevered free cash flow to the firm, so the stated cash-flow measure and discount rate are technically inconsistent.
2. The method proves analytical activity but not its usefulness to the employer. A reader is left asking whether the valuation informed an acquisition recommendation, purchase decision, or other conclusion.

**How to change it**
1. Use unlevered free cash flow to the firm discounted at WACC, or use FCFE discounted at the cost of equity.
2. Add the resulting [valuation conclusion, recommendation, or acquisition decision] after the corrected method, using a figure or decision outcome if available.

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Important] The training and guide line gives no outcome for the rollout.

**Why**
The reader can see the activity and audience but cannot tell whether adoption improved, budgeting errors fell, the cycle shortened, or another benefit followed. The pronoun "its" also has an unclear antecedent.

**How to change it**
Replace "its user guide" with "the template's user guide" and add [adoption, error-rate, cycle-time, or other budgeting outcome] measured against [baseline or prior process].

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
[Important] The utility valuation line does not state what the valuation changed or supported.

**Why**
A reader can see that the estimate was within 6% of the market price, but not why the project mattered beyond producing an estimate. A decision, recommendation, or conclusion would make the project’s value clearer.

**How to change it**
After the existing result, add the specific [investment recommendation, valuation conclusion, or scenario decision] the valuation supported, if accurate.

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
[Error] The decline from USD 50 to USD 40 is 20%, not 25%, and the scenario should be identified as a percentage-point sensitivity change.

**Why**
The USD 10 decrease divided by the original USD 50 equals 20%. "One point" is also ambiguous because a finance reader needs to know that the discount rate rose by one percentage point and how that scenario was run.

**How to change it**
Change "a 25% drop" to "a 20% drop" and replace "when the discount rate rose by 1 point" with "in a discount-rate sensitivity analysis when the discount rate rose by 1 percentage point," if accurate.

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
[Error] The change from 70% to 82% is a 12-percentage-point increase, and "rate-case timing" does not explain the added data.

**Why**
Calling the change 12% conflicts with the stated endpoints; the relative increase is approximately 17.1%. The specialized shorthand also leaves a general reader unsure what timing information improved the model or what benchmark defined forecast accuracy.

**How to change it**
Change the result to "raised the model’s forecast accuracy by 12 percentage points, from 70% to 82%," and replace "rate-case timing" with a brief description of the timing data added; after the endpoints, add [historical actuals, reported results, analyst consensus, or other validation benchmark], if accurate.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
[Important] The FP&A line hides the candidate’s contribution and gives no concrete deliverable, scale, or result.

**Why**
A reader cannot tell whether this was routine assistance or work that improved reporting, planning, or a decision. Broad labels such as "financial reporting and analysis" provide little evidence of what the candidate actually did.

**How to change it**
Replace the generic opening with the specific task performed, such as [variance analysis, forecasting, or reconciliation], and add [planning or reporting decision enabled] plus one measure such as [number of reports or analyses produced] or [time saved or reporting improvement compared with the prior process], if accurate.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
[Important] The performance-report line should open the entry and should state the return comparison or decision the report supported.

**Why**
The line shows adoption at every meeting, but frequent use does not establish investment impact. A return figure, measured difference, or committee action would show why the rebuilt report mattered and would make it a stronger opening line.

**How to change it**
Move this bullet before the generic FP&A line, and add [fund return versus benchmark return over the reporting period] and [committee decision or action informed by the report], if accurate.

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
[Polish] The onboarding-notes line gives no evidence of what the notes enabled, their reach, or the modeling knowledge documented.

## Already working

- s2:e1:b1: Uses a clear before-and-after measure.
- s2:e0:b3: Connects a clearly named deliverable to a directly comparable time saving.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-6bbfe919.md.

