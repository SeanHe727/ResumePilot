> Here is my resume: bench/planted-defects/tests-final/b1-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content and wording specialists reviewed all 4 bullet-based entries; narrative and format reviews also ran. Education was not applicable, and job-description matching did not run because no posting was provided.

Most important changes:

1. **Correct technical and numerical problems**
   - The fixed-rate bond purchase does not support the claim that it “hedged” interest-rate risk.
   - USD 50 to USD 40 is a **20%**, not 25%, decline.
   - Do not discount free cash flow to equity using WACC.
   - Clarify whether “1 point” means one percentage point.

2. **Reorder the resume**
   - Use: **Experience → Projects → Education → Skills**.
   - Put Stonebridge Manufacturing before Crescent Bank.
   - Shorten the older Student Investment Fund entry, retaining its benchmark-reporting result.

3. **Fix specificity and consistency**
   - Remove first-person phrasing such as “my findings.”
   - Change “Writes” to past tense in the completed Crescent Bank role.
   - Define vague methods, benchmarks, automation, and accuracy measures.
   - Add outcomes to the training, acquisition valuation, and student-project bullets.

4. **Remove personal information**
   - Delete date of birth and nationality.
   - The file otherwise parses cleanly and has no layout or ATS blockers.

The full findings and bullet-level priorities are available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 70 · wording 88 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 15 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998 | Nationality: Singaporean

**Problem**
[Error] The file includes personal details that résumé readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to job performance and can introduce protected personal information. Their presence distracts from your qualifications without strengthening the application.

**How to change it**
Delete the date-of-birth and nationality line.

> Harbor State University

**Problem**
[Important] Education leads the résumé despite five years of professional experience.

**Why**
Your recent finance roles now provide stronger and more relevant evidence than the degree entry. Opening with education delays the material that hiring managers are most likely to weigh.

**How to change it**
Move the sections into this order: Experience, Projects, Education, Skills.

> Crescent Bank | Credit Analyst

**Problem**
[Important] The Experience section is not in reverse chronological order.

**Why**
Crescent Bank ended in December 2022, while Stonebridge continued through June 2025. Listing the older role first makes the reader work to reconstruct your progression and delays your most recent experience.

**How to change it**
Move the Stonebridge Manufacturing entry above the Crescent Bank entry.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
1. [Error] Buying more fixed-rate bonds of the same duration does not hedge the existing holdings’ interest-rate risk; it increases same-direction duration exposure.
2. [Important] The claim “Hedged the bank’s interest-rate risk” does not quantify how much the exposure changed.

**Why**
1. Additional bonds with the same rate-risk profile increase the portfolio’s sensitivity to interest-rate changes. Calling this a hedge signals incorrect fixed-income risk mechanics because a hedge requires an offsetting position.
2. Without a before-and-after risk measure, a reader cannot judge the transaction’s effectiveness or materiality. That leaves the bullet asserting risk management without evidence of the risk reduction.

**How to change it**
1. Replace “Hedged” with “Increased the bank’s fixed-rate bond holdings” if that is what occurred. If there was a genuine hedge, replace the stated method with the [actual offsetting instrument or position].
2. After “interest-rate risk,” add “reducing [risk measure] from [pre-trade level] to [post-trade level]” using the measure the bank actually tracked.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] The strongest underwriting result is not first, leaving the entry without a clear hierarchy across several kinds of credit work.
2. [Important] “No rise in early defaults” omits both the default rate and the measurement period.
3. [Polish] “Reviewed 3 years of declined applications” does not identify what was analyzed.
4. [Polish] “My findings” unnecessarily shifts the résumé into first person.

**Why**
1. The approval-rate result connects analysis, policy change, and business impact, while the current opening is technically incorrect portfolio-hedging work. Burying the stronger line makes the entry scan as a collection of unrelated tasks rather than a coherent stretch of credit analysis.
2. The reader cannot tell how much credit performance was observed or whether the expanded approvals had enough time to season. That weakens the assurance that the policy change preserved credit quality.

**How to change it**
1. Move this entire bullet to the opening position. Follow it with the covenant-monitoring and credit-memo bullets, and correct or remove the portfolio-hedging bullet.
2. Replace the phrase with “while early defaults remained at [rate] over [performance window].”

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
1. [Error] “Writes” incorrectly presents completed work as current despite the role ending in December 2022.
2. [Polish] “Covenant-monitoring checklist” names the deliverable but not the control that prevented missed tests.

**Why**
1. The present-tense verb conflicts with the employment dates and the past tense used elsewhere in the entry. That inconsistency can make the timing of the responsibility unclear.

**How to change it**
1. Replace “Writes” with “Wrote.”

> Built a spreading template for borrower financials that cut each credit memo from 6 hours to 3.

**Problem**
1. [Polish] “Spreading template for borrower financials” does not show what the template automated or standardized.
2. [Polish] “Cut each credit memo from 6 hours to 3” incorrectly treats the memo itself as a duration.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
[Polish] “Letting treasury pay down” is informal and states the causal relationship imprecisely.

> Cut the monthly close from 8 working days to 5 by automating 30 reconciliations and intercompany eliminations.

**Problem**
[Polish] “Automating 30 reconciliations and intercompany eliminations” does not explain how the automation was implemented.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
1. [Polish] “Every request used the same discount rate and payback rules” shows consistency without stating what that consistency improved.
2. [Polish] “So every request used” is conversational and loosely describes the standardization achieved.

> Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a month.

**Problem**
1. [Important] The reduction in manual journal entries is buried behind a long description of the method.
2. [Polish] “Them” does not clearly identify whether the accounts or the allocation rules were tested.

**Why**
1. A scanning reader must pass through account mapping, allocation-rule rebuilding, and testing before reaching the strongest evidence of value. Leading with the reduction makes the scale of the improvement immediately visible.

**How to change it**
1. Move “cut manual journal entries from 350 to 90 a month” to the opening, followed by “by” and the existing mapping, rule-rebuilding, and testing details.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] The valuation incorrectly discounts free cash flow to equity at weighted average cost of capital.
2. [Important] “The company’s” does not identify whether the discount rate belongs to Stonebridge or the acquisition target.
3. [Important] “Valued the acquisition target” does not state what decision or deal action the analysis informed.

**Why**
1. FCFE represents cash available only to equity holders and must be discounted at an appropriate cost of equity. WACC applies to unlevered free cash flow to the firm, so the current pairing signals an error in valuation mechanics.
2. The relevant entity affects the appropriate valuation inputs, particularly capital structure and risk. Leaving it ambiguous makes the methodology harder to assess even after the cash-flow and discount-rate mismatch is corrected.
3. A hiring manager cannot tell whether the valuation affected a bid, negotiation, due-diligence process, or go/no-go decision. Without that consequence, the bullet reads as an analytical deliverable rather than demonstrated business influence.

**How to change it**
1. If FCFE was used, replace the discount-rate phrase with “at the target’s cost of equity.” If WACC was used, replace “free cash flow to equity” with “free cash flow to the firm” and identify the rate as the target’s WACC.
2. Replace “the company’s” with “the target’s” or “Stonebridge’s,” according to the rate actually used.
3. After the corrected method, add [the bid, negotiation, due-diligence, or investment decision informed] and, if available, [the valuation conclusion compared with the proposed price].

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Polish] The training and user-guide bullet does not state whether the work improved adoption, accuracy, rework, or cycle time.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
1. [Important] “Within 6% of the market price” omits both the direction of the difference and the benchmark date.
2. [Polish] “Valued” is inconsistent with a project dated through “Present.”

**Why**
1. A valuation reader needs to know whether the model indicated upside or downside. The date is also necessary to identify the observable market price against which the estimate was compared.

**How to change it**
1. Replace the phrase with “estimating [6% upside or downside] versus the closing market price on [valuation date].”

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
1. [Error] The stated 25% drop from USD 50 to USD 40 is mathematically incorrect.
2. [Important] “Discount rate” does not identify whether the model used WACC, cost of equity, or another rate.
3. [Important] “Rose by 1 point” leaves the unit of the rate change ambiguous.
4. [Polish] “Showed” is inconsistent with a project dated through “Present.”

**Why**
1. The USD 10 decline must be divided by the original USD 50 value. That calculation equals 20%, and leaving the error in a valuation project undermines confidence in the surrounding model.
2. The appropriate rate depends on the modeled cash flow and is central to interpreting a DCF sensitivity. Omitting it prevents a finance reader from checking whether the valuation mechanics are coherent.
3. A one-percentage-point change is materially different from a one-basis-point change. Without the unit, the reader cannot interpret the magnitude of the sensitivity test.

**How to change it**
1. Replace “25%” with “20%.”
2. Replace “discount rate” with “WACC” if accurate, or with [specific discount rate used].
3. Replace “1 point” with “1 percentage point” if that is the intended unit.

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
1. [Error] “Accuracy by 12%” incorrectly describes the increase from 70% to 82%.
2. [Important] “Forecast accuracy” and “across 10 years” do not define the metric, comparison data, or evaluation design.
3. [Polish] “Adding rate-case timing” does not explain how that input changed the forecast.
4. [Polish] “Raised” is inconsistent with a project dated through “Present.”

**Why**
1. The direct change is 12 percentage points, not 12%. Expressed as a relative percentage increase, the change is approximately 17.1%, so the current wording misstates the result.
2. A reader cannot interpret or reproduce the reported improvement without knowing the accuracy measure and actual outcome used as the benchmark. It is also unclear whether the ten years describe a historical back-test or another evaluation period.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points.”
2. Replace “forecast accuracy” with [defined accuracy metric], and replace “across 10 years” with “across a [10-year historical back-test or other evaluation period] against [actual outcome used].”

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. “Financial reporting and analysis” does not identify the actual deliverable or analytical work performed.
2. “Supported the FP&A team” does not state what the work enabled or improved.

**Why**
1. The reader cannot tell whether you built a report, reconciled data, analyzed returns, or performed another task. The generic wording conceals the skill that the line is meant to demonstrate.
2. Even with a concrete deliverable, the reader still needs its consequence to judge whether the support mattered. Without an outcome, the line remains a duty rather than evidence of contribution.

**How to change it**
1. Replace “Supported” and the generic activity with [the specific action performed] and [the report, analysis, or other deliverable produced].
2. After the specific action and deliverable, add [the reporting, planning, or decision outcome enabled or improved].

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Important] The strongest line in the entry is not first.
2. [Important] “Its benchmark” does not identify the index or benchmark used for the return comparison.
3. [Polish] “Rebuilt the fund’s performance report” does not show what was technically or analytically changed.
4. [Polish] “Which” could grammatically refer to the benchmark rather than the performance report.

**Why**
1. The benchmark-reporting bullet shows a defined analytical output and repeated committee use, unlike the generic opening line. Leading with it would give the entry an immediate purpose if the entry is retained.
2. The benchmark determines whether the comparison was appropriate for the fund’s mandate. Without its name, a reader cannot evaluate the relevance of the performance analysis.

**How to change it**
1. Move this entire bullet to the opening position.
2. Replace “its benchmark” with [benchmark name or index].

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
1. “The fund’s models” does not identify which models or components were documented.
2. “For new analysts” identifies the audience but not the effect of the onboarding notes.

**Why**
1. A reader cannot tell whether the notes covered valuation, portfolio, performance, or another type of model. The generic reference therefore provides little evidence of the financial knowledge transferred.
2. The reader cannot tell whether the notes shortened onboarding, reduced errors, or improved independent model use. Without a result, the line records a document rather than its value.

**How to change it**
1. Replace “the fund’s models” with [specific models or model components documented].
2. After “new analysts,” add [the verified effect on onboarding time, errors, or independent model use].

> Student Investment Fund

**Problem**
[Important] The short student entry is padded by generic support and onboarding duties that compete with its stronger benchmark-reporting work.

**Why**
The benchmark report gives the entry a clear investment-analysis purpose, while the other two lines lack comparable specificity or impact. At five years into your professional career, this 2018–2019 experience should not take space from current finance and valuation evidence.

**How to change it**
Shorten the entry to one line centered on the benchmark-reporting work, or cut the entry if space is needed.

## Set aside (5)

5 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ee6ac9b0.md.

