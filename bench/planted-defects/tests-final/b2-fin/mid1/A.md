> Here is my resume: bench/planted-defects/tests-final/b2-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording reviews covered all 5 entries with bullets; education had no bullets. Narrative and format checks are complete. No job description was provided for a match review.

The specialists’ main recommended changes:

- **Resolve a possible duplicate achievement:** the Stonebridge role and Student Investment Fund project both claim an 18-month forecast for a USD 600M business, about 4% error, and USD 40M in early debt repayment. Remove one claim or clarify how the work differed.
- **Clarify figures and methods:** define what “close efficiency by 40%” measures and its comparison; explain the period or benchmark for the 45% EBITDA margin, and verify the method used to calculate it. The acquisition valuation bullet also pairs free cash flow to equity with WACC, which the content review flagged as a mismatch.
- **Make contributions and outcomes more specific:** especially the caddie/tournament bullets and the Student Investment Fund’s generic “financial reporting and analysis” bullet. For Stonebridge’s board commentary and capital-plan template, state what the work informed or changed.
- **Fix consistency and focus:** change the past-role “Writes” to past tense, remove “my” from the Crescent Bank bullet, and consider shortening or removing the older Student Investment Fund entry. The narrative review also recommends moving Education below Experience.

The file parses cleanly as a one-page resume. The full review is available in **`/report --full`**.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 69 · wording 80 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 8 important, 19 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Harbor State University | B.B.A. in Finance

**Problem**
[Important] Education appears before the finance experience, even though the finance work is more relevant to the candidate’s current direction.

**Why**
A reader encounters the degree before the more relevant finance work. That ordering delays the experience most likely to support the candidate’s current direction.

**How to change it**
Move the Education entry below Experience.

> Student Investment Fund

**Problem**
[Important] The older Student Investment Fund entry does not add a clear next step after several years of finance work.

**Why**
The student entry dates to 2018–2019, before the later finance roles, and does not clearly advance the résumé’s direction. Keeping its full detail may take attention from more recent experience.

**How to change it**
Shorten or remove the Student Investment Fund entry, retaining only details that add a clear next step to the page.

## Lakeside Golf Club | Caddie | Metro City, USA | Aug 2025 - Present

> Caddied about 5 rounds a week, carrying bags and reading greens for members.

**Problem**
1. [Polish] The ongoing caddie work is written in past tense.
2. [Polish] The service tasks are listed without stating their effect on members.

> Helped the pro shop run the weekend junior tournament.

**Problem**
1. [Important] The tournament bullet does not say what you did, and “Helped” is both vague and past tense for a current role.
2. [Polish] The tournament bullet gives neither the event’s scale nor what your contribution accomplished.

**Why**
1. A reader cannot tell what contribution you made to the event. The past tense also conflicts with the role dates, making the work sound like it may have ended.

**How to change it**
1. Replace “Helped” with a present-tense verb and specify [the tournament task you handled], such as registration or setup if accurate.

> Caddied

**Problem**
[Polish] The two duties do not connect this current role to the finance direction of the rest of the résumé.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Improved close efficiency by 40% by automating reconciliations and intercompany eliminations.

**Problem**
[Important] “Close efficiency by 40%” does not identify the measure or the comparison behind the improvement.

**Why**
A reader cannot tell whether the change refers to close duration, reconciliation time, or another measure. Without the comparison, the practical size of the improvement is also unclear.

**How to change it**
Replace “close efficiency” with [the specific measure] and add [the before-and-after values or comparison period], if available.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The standardized capital-plan rules are described without saying what they changed, and the explanation is wordy.

> Wrote the variance commentary for the monthly board pack, explaining each line more than 5% off budget.

**Problem**
1. [Polish] The board-pack commentary is not tied to a decision or follow-up action.
2. [Polish] The phrase “explaining each line more than 5% off budget” is awkward and makes the threshold hard to scan.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] FCFE is discounted at the wrong rate: free cash flow to equity is normally discounted at the cost of equity, not WACC.
2. [Polish] The acquisition valuation gives the method but not what it supported or concluded.

**Why**
1. FCFE represents cash available to equity holders, so discounting it at WACC mismatches the cash flow and discount rate. WACC is normally used to discount free cash flow to the firm, so the current method description makes the valuation technically inconsistent.

**How to change it**
1. If the model used FCFE, replace WACC with the cost of equity; if it used WACC, replace “free cash flow to equity” with “free cash flow to the firm.”

> Reported a 45% group EBITDA margin by adding the EBITDA margins of the three business units.

**Problem**
1. [Error] The reported group EBITDA margin is calculated incorrectly by adding the units’ margins.
2. [Polish] The group-margin bullet does not explain what your reporting or calculation contributed.
3. [Polish] The 45% group margin has no reporting period or comparison.

**Why**
1. Margins cannot be added to calculate a group margin. The group EBITDA margin is total EBITDA divided by total revenue, equivalent to a revenue-weighted average of the unit margins.

**How to change it**
1. Calculate the group margin as total EBITDA divided by total revenue, then replace 45% with [the correct result].

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
[Important] The USD 40M debt-repayment outcome comes after the forecast details, so the strongest result is not the opening point.

**Why**
The early debt repayment is a notable outcome, but it appears at the end of a long bullet. A scanning reader may miss the result before moving on.

**How to change it**
Move the debt-repayment outcome to the start of the bullet, before the forecast details.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Underwrote 60 small-business loans worth USD 45M, and none of the approved loans defaulted in their first two years.

**Problem**
1. [Important] The underwriting bullet does not identify the analysis used to assess borrower creditworthiness.
2. [Polish] The loan outcome is a long add-on after the underwriting details, making it slower to scan.

**Why**
1. The loan count and outcome show scope and results, but not the analytical skill behind the underwriting decisions. A specific decision input would make that expertise easier to recognize.

**How to change it**
1. After “Underwrote,” add [the key underwriting analysis or decision criterion used], such as cash-flow or debt-service coverage analysis if accurate.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] The strongest approval result is buried after the review description rather than leading the bullet.
2. [Polish] “Reviewed 3 years of declined applications” is ambiguous about whether the applications were declined over three years or reviewed across three years.
3. [Polish] The phrase “my findings” uses a first-person pronoun in a résumé bullet.

**Why**
1. The change in approvals from 41% to 48% with no rise in early defaults is the most compelling result. Starting with the review process delays that result for a scanning reader.

**How to change it**
1. Move the approval and default outcome to the start of the bullet, before the description of the review.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
[Error] “Writes” incorrectly uses present tense for work in a role that ended in December 2022.

**Why**
As written, the bullet places the checklist work in the present, outside the dates of the Crescent Bank role. That conflicts with the résumé’s chronology and can make the responsibility seem current.

**How to change it**
If the work was done during this role, change “Writes” to “Wrote”; otherwise clarify why the responsibility is current.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
[Polish] The 6% comparison comes after the valuation methods, so the result may be missed by a scanning reader.

> Tested the valuation’s sensitivity: a 1-point change in the discount rate moved the share value from USD 52 to USD 44.

**Problem**
[Polish] “A 1-point change” does not state the direction or the starting and ending discount rates.

> Shared the model and a two-page note with the university investment club, which used it in its spring pitch.

**Problem**
[Polish] “It” could refer to either the model or the note.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Polish] The FP&A support bullet does not identify the specific contribution or deliverable.
2. [Polish] The FP&A support bullet gives no outcome from the work.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
[Important] The repeated committee use is the performance-report outcome, but it comes after the explanation of what the report showed.

**Why**
The committee’s use at every meeting is the clearest evidence of the report’s value. Placing it after the report description may make a scanning reader miss that result.

**How to change it**
Move the committee’s repeated use to the start of the bullet, before the report description.

> Built an 18-month cash forecast for a USD 600M business, holding error to about 4% and freeing USD 40M to repay debt early.

**Problem**
1. [Error] The 18-month USD 600M forecast and its results duplicate the later Stonebridge achievement.
2. “Error” does not say what was measured, and “about 4%” lacks a stated error basis.
3. The cash-forecast bullet does not say how the forecast was developed.

**Why**
1. Both entries claim a forecast for a USD 600M business, about 4% error, and USD 40M in early debt repayment, despite being several years apart. As written, they read as the same achievement attributed to two roles, leaving its ownership inconsistent.
2. A reader cannot tell what the 4% represents or what the forecast was compared against. The result is therefore harder to interpret than the later role’s more explicit “forecast error” wording.
3. The bullet gives the forecast horizon and results, but not the work behind producing it. A reader cannot assess the forecasting approach from the current description.

**How to change it**
1. Remove this duplicate claim, or clarify [the details distinguishing the two forecasts] if they were separate achievements.
2. Use “forecast error” and add [what the error was measured against], if accurate.
3. If accurate, add [the method or inputs used to develop the forecast]; otherwise leave the method unclaimed.

> financial reporting and analysis

**Problem**
[Polish] The bullets shift among generic FP&A support, fund performance reporting, and a cash forecast without reading as one student-fund contribution.

## Already working

- s2:e2:b3: Pairs a specific deliverable with a clear time saving.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9f937d9c.md.

