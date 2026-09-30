> Here is my resume: bench/planted-defects/tests-final/b3-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets, plus the resume’s narrative and formatting. Education has no bullets to review, and no job posting was provided.

The main changes specialists flagged:
- **Resolve the duplicate cash-forecast claim:** the same forecast, accuracy, and debt-repayment result appears under both Stonebridge and the Student Investment Fund. Keep it under the correct entry or clarify how the work differed.
- **Check two technical claims in Stonebridge:** the valuation bullet pairs free cash flow to equity with WACC, and the group-margin bullet appears to add unit margins. The content review flagged both as potentially misleading as written.
- **Reorder and tighten:** put Stonebridge before Crescent Bank, move education below experience, and shorten or remove the older Student Investment Fund entry if it no longer supports your story.
- **Fix wording details:** use consistent tense for current versus completed roles, remove the first-person pronoun in the bank bullet, and clarify the specific actions and outcomes in the caddie bullets.

The file parses cleanly as a one-page resume. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 69 · wording 80 · narrative 62

Read 5 of 5 entries for content, 5 for wording (content: 0 read for this report, 5 unchanged since the last one and reused). Career reading done, posting comparison no-posting.

5 errors, 11 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Student Investment Fund | Analyst, Team of 6

**Problem**
[Important] The older Student Investment Fund entry should be shortened or removed.

**Why**
This older student entry has one contribution that supports the current investment-analysis story, while the cash-forecast bullet repeats an achievement presented under Stonebridge. Keeping the entry in full risks giving space to an older, duplicated claim instead of more relevant experience.

**How to change it**
Shorten the entry to its most relevant contribution or remove it.

> Harbor State University | B.B.A. in Finance

**Problem**
[Important] Education appears before experience despite several years of post-degree work.

**Why**
The résumé shows several years of professional experience after the degree, which is more relevant to a reader now. Placing education first delays the work history.

**How to change it**
Move the education entry below the experience section.

> Crescent Bank | Credit Analyst

**Problem**
[Important] The experience entries are not in newest-first order.

**Why**
Crescent Bank, which ended in December 2022, appears above Stonebridge Manufacturing, which ended in June 2025. That order makes the experience section harder to scan chronologically.

**How to change it**
Move Stonebridge Manufacturing above Crescent Bank.

## Lakeside Golf Club | Caddie | Metro City, USA | Aug 2025 - Present

> Caddied about 5 rounds a week, carrying bags and reading greens for members.

**Problem**
1. [Polish] The duties are given without an outcome for members.
2. [Polish] The current caddie role is described in past tense.

> Helped the pro shop run the weekend junior tournament.

**Problem**
1. [Important] The tournament bullet does not say what work you personally handle.
2. [Important] The tournament work is described in past tense despite being part of a current role.
3. [Polish] The tournament bullet gives no result or measure of the contribution.

**Why**
1. “Helped the pro shop run” describes assistance without naming your contribution. A reader cannot tell what skills or responsibilities the work demonstrates.
2. The entry dates the job from August 2025 to the present, while “Helped” reads as completed work. That inconsistency can make the status of the responsibility unclear.

**How to change it**
1. Replace “Helped the pro shop run” with [the specific tournament task you handle], such as participant check-in or scoring if accurate; use present tense for the ongoing role.
2. Replace “Helped” with a present-tense action that accurately describes your contribution.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Polish] The declined-application result should appear before the opening loan-underwriting bullet.
2. [Polish] The declined-application analysis is not identified, and “my findings” uses a first-person pronoun.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
[Error] “Writes” is the wrong tense for a role that ended in December 2022.

**Why**
The present-tense verb makes checklist writing sound like a current Crescent Bank responsibility. The résumé gives no indication that the work continued after the role ended.

**How to change it**
Change “Writes” to “Wrote” if the work was done during the Crescent Bank role; if it continued afterward, clarify the ongoing capacity.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Improved close efficiency by 40% by automating reconciliations and intercompany eliminations.

**Problem**
[Important] The 40% close-efficiency figure has no defined measure or comparison.

**Why**
A reader cannot tell whether “efficiency” means close time, manual effort, or another measure. Without a baseline, the 40% change is also difficult to interpret.

**How to change it**
Replace “close efficiency” with [the specific measure] and add [the baseline period or comparison].

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
1. [Polish] The shared template’s standardization is described without its effect.
2. [Polish] The explanation of the shared template is longer than needed.

> Wrote the variance commentary for the monthly board pack, explaining each line more than 5% off budget.

**Problem**
1. [Polish] The board-pack commentary is named without saying what it changed or informed.
2. [Polish] The useful scope detail comes after the main action and is wordy.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] The method pairs free cash flow to equity with the wrong discount rate.
2. [Important] The acquisition valuation has no result or stated use.
3. [Polish] The method comes before the valuation result, if one is available.

**Why**
1. Free cash flow to equity is cash available to equity holders and should be discounted at the cost of equity. WACC is generally used to discount free cash flow to the firm, not free cash flow to equity.
2. The reader sees that a valuation was performed, but not what it produced or how it related to the acquisition decision. That makes the work’s outcome and relevance hard to assess.

**How to change it**
1. If the valuation used free cash flow to equity, replace WACC with the cost of equity. If it used WACC, identify the cash flow as free cash flow to the firm.
2. Add [the valuation output or the acquisition decision it informed], if appropriate to disclose.

> Reported a 45% group EBITDA margin by adding the EBITDA margins of the three business units.

**Problem**
1. [Error] Adding business-unit EBITDA margins does not calculate a group EBITDA margin.
2. [Polish] The 45% group margin has no comparison point.
3. [Polish] The stated method follows the 45% claim and can make it read as a consolidated margin.

**Why**
1. A group margin is total group EBITDA divided by total group revenue, or a revenue-weighted average of the unit margins. The sum of the unit margins is not a group margin, so the stated 45% is not supported by the method given.

**How to change it**
1. Calculate group EBITDA divided by group revenue and report that figure; if 45% came from that calculation, replace the stated method with the correct one.

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
1. [Error] This forecast and debt-repayment achievement is also attributed to the Student Investment Fund entry.
2. [Important] “Monthly forecast error under 4%” does not define how the error was measured.
3. [Polish] The forecast results should lead the bullet rather than follow its method and company-size context.
4. [Polish] This strong forecast result should open the Stonebridge entry.

**Why**
1. The same forecast period, business size, error rate, and debt repayment appear in both roles, so the résumé presents one specific achievement in two different contexts. A reader may doubt which role actually owns the work and outcome.
2. Without the error measure or calculation, a reader cannot interpret what the accuracy figure represents. It is also difficult to compare with another forecast result.

**How to change it**
1. Keep the achievement under the role where it occurred and remove or replace the duplicate here; if the forecasts were distinct, clarify the difference [and verify the correct dates].
2. Replace “forecast error” with [the specific error measure and how it was calculated], if accurate.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
[Important] The 6% comparison does not identify the market-price benchmark.

**Why**
A reader cannot tell when the valuation was compared with the market. Without that reference, the 6% result is harder to interpret.

**How to change it**
Add [the valuation date or market-price date], whichever accurately identifies the comparison.

> Tested the valuation’s sensitivity: a 1-point change in the discount rate moved the share value from USD 52 to USD 44.

**Problem**
[Important] The discount-rate change does not specify its direction or rate context.

**Why**
The reader cannot tell whether the change was an increase or decrease, or what rate it started from. That makes it unclear which scenario produced each share value; “1-point” also leaves open whether the change was one percentage point or a relative one-percent change.

**How to change it**
Replace “1-point change” with [the direction and percentage-point change, from the starting rate to the resulting rate], if accurate.

> Shared the model and a two-page note with the university investment club, which used it in its spring pitch.

**Problem**
[Polish] “It” has an unclear referent after two deliverables are named.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
The generic FP&A description does not name a specific action or what the work produced.

**Why**
“Supported” frames the work as assistance, while “financial reporting and analysis” does not identify what you personally did. A reader cannot see a concrete contribution or its result.

**How to change it**
Replace “Supported the FP&A team with financial reporting and analysis” with [the specific action you took and what it produced or changed].

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Polish] The report is described without the result of its benchmark comparison.
2. [Polish] The committee-use clause is long and follows the report’s main result.
3. [Polish] The benchmark-report contribution should come before the other student-fund bullets.

> Built an 18-month cash forecast for a USD 600M business, holding error to about 4% and freeing USD 40M to repay debt early.

**Problem**
1. [Error] The cash-forecast achievement is also attributed to the Stonebridge role.
2. The forecast bullet does not say what drove or informed the forecast.
3. The forecast error figure does not identify how the error was measured.

**Why**
1. The matching forecast period, business size, error rate, and debt repayment make these read as the same accomplishment, not two separate results. Both entries cannot independently own the same work and outcome.
2. The line gives the forecast’s length and scale, but not what inputs or activity shaped it. A reader cannot tell what the work involved beyond producing the forecast.
3. “About 4%” gives a level without a calculation method, so a reader cannot interpret what the accuracy figure represents. That also makes it difficult to compare with another forecast.

**How to change it**
1. Keep the achievement under the role where it occurred; if the forecasts were distinct, clarify how they differed [and verify the correct dates].
2. Add [the specific inputs or activity that drove or informed the forecast], if accurate.
3. Replace “error” with [the specific error measure and how it was calculated], if accurate.

> Student Investment Fund

**Problem**
[Important] The Student Investment Fund entry does not form a focused student-fund story.

**Why**
The benchmark-report contribution supports an investment-analysis story, but the generic FP&A line and cash-forecast achievement pull the entry in different directions. That makes the relevance of the experience harder for a reader to see.

**How to change it**
Shorten the entry to its most relevant investment-analysis contribution, or remove it.

## Already working

- s2:e1:b0: Connects a substantial lending portfolio to a clear credit-performance outcome.
- s2:e1:b3: Shows a practical process improvement with a direct operational benefit.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-01bfc5a5.md.

