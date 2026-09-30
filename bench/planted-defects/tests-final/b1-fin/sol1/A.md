> Here is my resume: bench/planted-defects/tests-final/b1-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the four entries with bullets for content and wording, plus the resume’s overall narrative and file format. The degree entry has no bullets to review; job-description matching wasn’t run because no posting was provided. The full report is in `/report --full`.

The three changes to address first are:

1. **Verify the finance claims.** The specialists flagged the bond purchase described as an interest-rate hedge and a valuation that discounts free cash flow to equity at WACC. Check what was actually done before retaining either claim.
2. **Correct the project figures.** A fall from USD 50 to USD 40 is 20%, not 25%; a rise from 70% to 82% is 12 percentage points, not 12%.
3. **Lead with recent experience.** Put Experience above Education and Stonebridge before Crescent Bank. Shorten or remove the older student project to make room for recent work.

The PDF parses cleanly. The format review also flagged the date of birth and nationality for removal.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 83 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 10 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998 | Nationality: Singaporean

**Problem**
[Error] The file includes personal details that a reader is not meant to weigh.

**Why**
Date of birth and nationality do not establish the candidate’s finance qualifications. Including them draws attention away from the work experience and results the résumé is meant to present.

**How to change it**
Remove “Date of birth: 5 Feb 1998 | Nationality: Singaporean” from the file.

> Crescent Bank | Credit Analyst

**Problem**
[Important] The experience entries are not in newest-first order.

**Why**
Crescent Bank appears above the more recent Stonebridge Manufacturing role. A reader looking for the latest employment must scan past an older position first.

**How to change it**
Move the Stonebridge Manufacturing entry above the Crescent Bank entry.

> B.B.A. in Finance

**Problem**
[Important] Education leads the page instead of the five years of work experience.

**Why**
The degree appears before the roles that show the candidate’s more recent finance work. Leading with experience would put the current evidence of capability where a reader encounters it first.

**How to change it**
Move the experience section above the education section.

> Student Investment Fund

**Problem**
[Polish] The Student Investment Fund entry takes more space than its relevance to the page’s current direction warrants.

> Jun 2025

**Problem**
[Polish] The résumé does not show employment after June 2025; the only activity shown after that is the ongoing independent valuation project.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
1. [Error] Buying more fixed-rate bonds of the same duration does not hedge the interest-rate risk on existing fixed-rate bond holdings.
2. [Polish] The claimed interest-rate hedge has no measure of how much risk changed.
3. [Polish] The description of fixed-rate bonds is repeated unnecessarily.

**Why**
1. When rates change, the additional bonds generally move in value in the same direction as the existing holdings. Without an offsetting exposure, the purchase increases the exposure rather than reducing it, so a credit reader would question the technical claim.

**How to change it**
1. If there was an offsetting position, name [the actual hedge] and its role. Otherwise, replace the hedge claim with a description of buying additional fixed-rate bonds.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] “my findings” does not reveal what the review found in the declined applications.
2. [Important] The strongest Crescent Bank bullet is not first.
3. [Polish] “no rise in early defaults” omits the period over which defaults were observed.
4. [Polish] “my findings” introduces a personal pronoun into the bullet.

**Why**
1. The reader sees the threshold changes and approval result but not the analytical insight connecting the review to that decision. That leaves the candidate’s contribution to the policy change harder to assess.
2. The approval increase and unchanged early defaults give a reader a result to assess immediately. Placing this bullet after the bond claim delays that evidence of the candidate’s credit-analysis work.

**How to change it**
1. Replace “my findings” with [the key pattern in declined applications that informed the threshold changes], if it can be stated briefly.
2. Move the bullet beginning “Reviewed 3 years of declined applications” to the first position under Crescent Bank.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
[Polish] “Writes” uses present tense for a role that ended in 2022.

> Built a spreading template for borrower financials that cut each credit memo from 6 hours to 3.

**Problem**
[Polish] The bullet says it cut each memo rather than the time spent preparing one.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
1. [Important] “monthly forecast error under 4%” does not identify the actual cash-flow measure or the period used to calculate the error.
2. [Polish] The forecast bullet names the deliverable but not its modeling approach.

**Why**
1. The percentage sounds precise, but a reader cannot interpret its accuracy without knowing what the forecasts were compared with and when. That weakens the link between the forecast and the stated treasury result.

**How to change it**
1. Specify [actual cash-flow measure compared] and [period over which error was measured] beside “under 4%.”

> Cut the monthly close from 8 working days to 5 by automating 30 reconciliations and intercompany eliminations.

**Problem**
[Polish] The close bullet does not show what automation the candidate implemented.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The capital-plan bullet states its standardization result wordily.

> Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a month.

**Problem**
[Important] The journal-entry reduction is buried after a long list of methods.

**Why**
A reader must get through the mapping, rule changes, and testing before reaching the reduction from 350 to 90 entries a month. Leading with the result would make the value of that work apparent first.

**How to change it**
Move “cut manual journal entries from 350 to 90 a month” to the start of the bullet, then follow it with the mapping, allocation-rule, and testing methods.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] Discounting free cash flow to equity at weighted average cost of capital mismatches the cash flow and discount rate.
2. [Polish] The acquisition-target bullet does not say how the valuation was used.

**Why**
1. Free cash flow to equity is available to equity holders and is discounted at a cost of equity appropriate to the target’s risk. WACC belongs with cash flow available to both debt and equity providers; the mismatch makes the valuation method technically unsound as stated.

**How to change it**
1. If the model used free cash flow to equity, replace the rate with [the appropriate cost of equity]. If it used WACC, describe the modeled cash flow as [free cash flow to the firm], if accurate.

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Polish] The training bullet does not state what the training and guide enabled or changed.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
1. [Polish] The market-price comparison does not state what the valuation concluded for an investor.
2. [Polish] “landing within 6% of the market price” is a casual, wordy description of the result.

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
1. [Error] The fall from USD 50 to USD 40 is a 20% drop, not a 25% drop.
2. [Polish] “1 point” does not specify the unit of the discount-rate increase.

**Why**
1. The USD 10 decrease is measured against the starting USD 50 value. The incorrect percentage makes the sensitivity calculation look unchecked.

**How to change it**
1. Replace “a 25% drop” with “a 20% drop.”

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
1. [Error] The increase from 70% to 82% is 12 percentage points, not 12%.
2. [Important] The accuracy claim does not identify what was forecast, what it was checked against, or what “across 10 years” measures.

**Why**
1. The figures differ by 12 percentage points; relative to the initial 70%, the increase is approximately 17.1%. Calling it 12% confuses those two measures and undermines confidence in the reported improvement.
2. Without the forecasted measure and comparison, a finance reader cannot interpret the 70% and 82% figures. The unclear time reference also leaves open whether 10 years is the forecast horizon or the period used to assess accuracy.

**How to change it**
1. Replace “by 12%” with “by 12 percentage points.”
2. After correcting the percentage-point error, identify [forecasted measure] and [results or benchmark used for comparison]. Replace “across 10 years” with wording that names [forecast horizon or back-test period], whichever was meant.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Important] “Supported the FP&A team” does not identify an output or result.
2. [Important] “financial reporting and analysis” does not show which task the candidate performed.

**Why**
1. A reader cannot tell what the candidate produced or what need the contribution served. That makes the work difficult to weigh against the more specific fund-report bullet below it.
2. The phrase names an area of work rather than an action. A specific task would let a reader assess the finance skill used, instead of having to guess what “supported” involved.

**How to change it**
1. Replace “Supported the FP&A team” with [the report or analysis you personally produced] and [the decision or reporting need it served].
2. Replace the phrase with [the specific reporting or analysis task], if the output added to this bullet does not already make the task clear.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
[Important] The strongest Student Investment Fund bullet is not first.

**Why**
The performance report names a deliverable and shows that the committee used it at every meeting. Opening instead with the broad support claim delays the clearest evidence of the candidate’s contribution.

**How to change it**
Move the bullet beginning “Rebuilt the fund’s performance report” to the first position under Student Investment Fund.

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
1. [Polish] “on the fund’s models” leaves the subject of the onboarding notes too broad.
2. [Polish] “for new analysts” names the audience but not what the notes enabled them to do.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ef01b78b.md.

