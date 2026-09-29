> Here is my resume: bench/planted-defects/tests-final/b2-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the overall narrative and file format. Job-description matching did not run because you did not provide a posting; Education has no bullets to review.

The most important changes are:

1. **Resolve the duplicated forecast claim.** Stonebridge and the Student Investment Fund both claim an 18-month forecast for a USD 600M business, roughly 4% error, and USD 40M in early debt repayment. Keep it only under the entry where it happened.
2. **Verify two finance calculations before sending this out.** The content review flagged discounting free cash flow to equity at WACC and calculating a group EBITDA margin by adding business-unit margins. Correct the underlying claims, not just their wording.
3. **Lead with your finance experience.** The narrative review recommends moving Education below Experience and Projects, and keeping the current caddie role visible but brief under Other Experience. Clarify the shift from finance work ending in June 2025 to the current role.

The PDF parses cleanly; formatting is not the priority. The full findings and entry-by-entry plan are in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 84 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 11 important, 19 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeside Golf Club | Caddie

**Problem**
[Important] The current caddie role leads Experience instead of the two finance roles.

**Why**
Its current dates should remain visible, but placing it first makes non-finance work define the page before a reader reaches Stonebridge and Crescent Bank. The finance roles better establish the work most relevant to a finance application.

**How to change it**
Lead Experience with Stonebridge and Crescent Bank. Move the caddie role and its dates to a one-line Other Experience entry.

> Aug 2025 - Present

**Problem**
[Important] The move from finance employment to the current caddie role is unexplained.

**Why**
The finance role ends in June 2025 and the caddie role begins in August 2025. A reader considering you for finance work may wonder whether the change reflects a career shift or an interim role.

**How to change it**
If accurate, add a brief [reason for the transition or current finance objective] in an appropriate résumé summary; do not imply a reason the dates alone do not establish.

> B.B.A. in Finance

**Problem**
[Important] Education appears before several years of finance experience.

**Why**
The degree is relevant, but the later analyst work provides more immediate evidence of your finance experience. Leading with Education delays those stronger examples.

**How to change it**
Move the Education section below Experience and Projects.

## Lakeside Golf Club | Caddie | Metro City, USA | Aug 2025 - Present

> Caddied about 5 rounds a week, carrying bags and reading greens for members.

**Problem**
1. [Polish] The duties do not show a benefit beyond completing them.
2. [Polish] “Caddied” uses past tense for a role listed as current.

> Helped the pro shop run the weekend junior tournament.

**Problem**
1. [Important] The tournament line does not identify the task you handled.
2. [Polish] The tournament is named without a result of your contribution.
3. [Polish] “Helped” uses past tense for a role listed as current.

**Why**
1. “Helped” gives the reader no way to tell which event responsibility was yours. Naming the task would make the relevant skill visible instead of asking the reader to infer it.

**How to change it**
1. Replace “Helped the pro shop run” with [specific task you handled], keeping the tournament context.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Improved close efficiency by 40% by automating reconciliations and intercompany eliminations.

**Problem**
[Important] The 40% close-efficiency improvement does not identify its measure or comparison.

**Why**
A finance reader cannot tell whether the gain concerns close duration, staff hours or something else. Without a baseline, the size of the improvement is also hard to assess.

**How to change it**
Replace “close efficiency” with [measured item] and add “compared with [prior process or period].”

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The explanation of standardized project rules is wordy.

> Wrote the variance commentary for the monthly board pack, explaining each line more than 5% off budget.

**Problem**
1. [Polish] The board-pack commentary is named without saying what it enabled.
2. [Polish] The variance threshold does not show the analysis behind the explanations.
3. [Polish] “Each line” can be mistaken for a line of commentary rather than a financial line item.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] Discounting free cash flow to equity at WACC uses the wrong discount rate.
2. [Polish] The acquisition valuation does not say how it was used.

**Why**
1. Free cash flow to equity is cash available to equity holders and is discounted at the cost of equity. WACC instead pairs with free cash flow to the firm to estimate enterprise value; mixing the two makes the valuation method appear unsound.

**How to change it**
1. If the model discounted free cash flow to equity, replace “the company’s weighted average cost of capital” with “[the applicable cost of equity].” If it used WACC, describe the cash flow actually discounted; free cash flow to the firm is the corresponding term only if accurate.

> Reported a 45% group EBITDA margin by adding the EBITDA margins of the three business units.

**Problem**
1. [Error] Adding business-unit EBITDA margins does not calculate a group EBITDA margin.
2. [Polish] The group-margin output does not say what the reporting informed.

**Why**
1. Margins are ratios, not amounts that can be summed. Group EBITDA margin is consolidated EBITDA divided by consolidated revenue, with applicable intercompany eliminations; the stated method therefore makes the 45% figure unreliable.

**How to change it**
1. Replace “45%” with [margin calculated from consolidated EBITDA divided by consolidated revenue, with applicable intercompany eliminations], and remove the claim that the unit margins were added.

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
1. [Error] The same forecast achievement is attributed to this role and the Student Investment Fund role.
2. [Important] The strongest Stonebridge result is buried after the opening bullet.
3. [Polish] The debt-repayment outcome sits too far behind the forecast description.

**Why**
1. The other entry repeats the 18-month horizon, USD 600M business, roughly 4% error and USD 40M early debt repayment under dates years apart. A reader will question which role owns the achievement, putting both entries’ credibility at risk.
2. The forecast line connects measurable accuracy to USD 40M of early debt repayment. Leading with it, once its attribution is verified, would put that finance outcome before the less-specific close-efficiency claim.

**How to change it**
1. Keep the achievement under [the role where it occurred] and remove it from the other entry. If there were two distinct forecasts, state [the verified figures and outcomes for each] separately.
2. If this achievement belongs to Stonebridge, move its bullet to the top of the entry.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Underwrote 60 small-business loans worth USD 45M, and none of the approved loans defaulted in their first two years.

**Problem**
1. [Polish] The loan count does not show the analysis behind the underwriting.
2. [Polish] The no-defaults clause is wordy.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] The declined-application review does not say what it found or compared.
2. [Important] The approval-rate result is not the opening Crescent Bank bullet.
3. [Polish] “My findings” introduces first person into the résumé bullet.

**Why**
1. The threshold changes and higher approval rate are clear, but the reasoning that justified them is missing. That link is the clearest opportunity to show your credit judgment rather than only its outcome.
2. Changing two thresholds while raising approvals from 41% to 48% with no rise in early defaults is a strong, specific result. Placing it first would establish the role’s impact before the broader underwriting-volume claim.

**How to change it**
1. If accurate, replace “Reviewed” with a brief description of [decisive analysis of declined applications], retaining the three-year scope.
2. Move this bullet above the loan-underwriting bullet.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
1. [Error] “Writes” incorrectly presents work in a role that ended in December 2022 as ongoing.
2. [Polish] The checklist line does not identify the control that reduced missed tests.

**Why**
1. The dated role and its other completed-work bullets place this responsibility in the past. Present tense instead implies a current responsibility that conflicts with the end date.

**How to change it**
1. Replace “Writes” with “Wrote.”

> Built a spreading template for borrower financials that cut each credit memo from 6 hours to 3.

**Problem**
[Polish] The credit-memo wording makes the memo, rather than preparation time, sound like what was cut.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
[Important] The utility and the date anchoring the market-price comparison are unidentified.

**Why**
A reader cannot readily assess what was valued or which observed price the 6% result uses. Both omissions make an otherwise specific valuation comparison hard to verify.

**How to change it**
Replace “listed regional utility” with [utility name or ticker], and add [valuation date] after “market price.”

> Tested the valuation’s sensitivity: a 1-point change in the discount rate moved the share value from USD 52 to USD 44.

**Problem**
[Polish] The discount-rate change has no direction.

> Shared the model and a two-page note with the university investment club, which used it in its spring pitch.

**Problem**
[Polish] The club’s use of the valuation is unspecified.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Important] The FP&A line does not identify your action, deliverable or its effect and pulls the entry away from fund work.
2. “Financial reporting and analysis” is too broad to show the finance skill used.

**Why**
1. A reader cannot tell what you produced or what your support achieved. Beside the specific fund performance report, the broad FP&A claim weakens rather than clarifies this entry.
2. Those categories could cover many different tasks, so they do not tell a reader what report or analysis you produced. The following performance-report bullet provides a more concrete example.

**How to change it**
1. Cut this bullet so the fund performance report leads. If it must stay, replace “Supported the FP&A team” with [specific action and deliverable] and add [effect], if known.
2. Cut this phrase with the FP&A bullet. If retaining the bullet, replace it with [specific report or analysis produced].

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Important] The fund performance report is not the entry’s opening bullet.
2. [Polish] The committee-use clause can be shorter.

**Why**
1. It names a fund-specific deliverable, a benchmark comparison and recurring committee use. Leading with it gives the reader a clearer account of this analyst role than the broad FP&A opening.

**How to change it**
1. Move this bullet to the top of the entry.

> Built an 18-month cash forecast for a USD 600M business, holding error to about 4% and freeing USD 40M to repay debt early.

**Problem**
1. The 4% forecast-error claim does not say what was compared.
2. The cash-forecast line names an output without showing the forecasting approach.

**Why**
1. Without the comparison behind “error,” a reader cannot assess how the accuracy figure was determined. This detail matters especially if the forecast is verified as distinct from the Stonebridge claim.
2. A reader sees the horizon and claimed result but not what analytical work produced the forecast. Because the achievement echoes the later Stonebridge bullet, adding method detail only makes sense if this was genuinely separate work.

**How to change it**
1. If this was a separate forecast and the comparison is known, add [forecasts and actuals compared to calculate error]. Otherwise, remove this duplicate bullet.
2. If this was a distinct forecast, add [forecasting approach actually used]. Otherwise, remove this duplicate bullet.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f4919b86.md.

