> Here is my resume: bench/planted-defects/tests-final/b1-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s overall sequence and formatting. No job-description match was run because you didn’t provide a posting.

Changes to prioritize:
- Put Stonebridge above Crescent Bank, and move Education below Experience. Consider shortening or removing the older Student Investment Fund entry.
- Revisit the bond-risk bullet: the content review found that buying more fixed-rate bonds of the same duration does not hedge the existing holdings’ interest-rate risk. Clarify what the hedge actually involved and its result.
- Correct the project figures: USD 50 to USD 40 is a 20% decrease, and 70% to 82% is a 12-percentage-point increase. Clarify how forecast accuracy was measured.
- Check the valuation-method description, which pairs free cash flow to equity with WACC, and add an outcome if you can support one. Also change present-tense wording in ended roles and remove the first-person pronoun.
- Remove the date of birth and nationality. The file parses cleanly and is one page.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 78 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

8 errors, 5 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “Date of birth: 5 Feb 1998 | Nationality: Singaporean”

**Problem**
[Error] The personal details “Date of birth” and “Nationality” should be removed.

**Why**
These details are not relevant to evaluating the candidate’s work and are not expected in this résumé. Including them asks a reader to weigh personal information that does not strengthen the candidacy.

**How to change it**
Delete the date of birth and nationality from the file.

> “Jul 2020 - Dec 2022”

**Problem**
[Important] Crescent Bank appears above the more recent Stonebridge Manufacturing experience.

**Why**
The current order is not newest-first, so a reader encounters older experience before the more recent role. That makes the career timeline harder to scan.

**How to change it**
Move the Stonebridge Manufacturing entry above Crescent Bank.

> “Harbor State University”

**Problem**
[Important] Education appears before the work history despite several years of professional experience.

**Why**
The current order makes the degree lead instead of the more recent and relevant employment. A reader may have to look past education to reach the candidate’s professional experience.

**How to change it**
Move the Education entry below Experience.

> “Student Investment Fund”

**Problem**
[Important] The older Student Investment Fund entry is longer than needed for a résumé whose professional experience carries the finance story more directly.

**Why**
The entry dates from 2018–2019, before the professional roles, and its several bullets take space from more recent work. Keeping it to one line or removing it would give the professional experience greater emphasis.

**How to change it**
Shorten the Student Investment Fund entry to one line or remove it.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Hedged the bank’s interest-rate risk on its fixed-rate bond holdings by buying more fixed-rate bonds of the same duration.

**Problem**
[Error] Buying more fixed-rate bonds of the same duration does not hedge the interest-rate risk on the existing bond holdings.

**Why**
The additional bonds generally add to the portfolio’s exposure to interest-rate changes rather than offsetting it. A reader would need to know what rate-sensitive position actually offset that exposure; without one, the hedge claim undermines the credibility of the bullet.

**How to change it**
Name the offsetting position used [actual hedge], or remove the hedge claim if the action was only buying more bonds. If you have a defensible measure, add [measured change in interest-rate exposure versus pre-hedge exposure] after the method.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
[Polish] The pronoun “my” does not belong in this résumé bullet.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
[Error] “Writes” conflicts with the role dates ending in December 2022.

**Why**
The present tense says the checklist-writing is ongoing, but the listed employment has ended. A reader may question when the work took place and whether the entry’s dates are accurate.

**How to change it**
Change “Writes” to “Wrote” if the work happened during this role; otherwise clarify when the ongoing work takes place.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
[Polish] “Letting treasury pay down” states the debt-reduction result indirectly.

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Error] “So every request used the same” overstates what a shared template ensures and buries the outcome in a conversational clause.

**Why**
A common template can standardize calculations and present intended assumptions, but users can change inputs or depart from the rules. The claim that every request followed them goes beyond what the template alone establishes.

**How to change it**
Say the template standardized the NPV calculations and documented the discount-rate and payback rules. Claim that every request used them only if that was verified.

> Mapping 600 general-ledger accounts to a new chart of accounts, rebuilding the allocation rules and testing them against two prior closes, cut manual journal entries from 350 to 90 a month.

**Problem**
1. [Error] “Mapping” conflicts with the past-tense verbs in this ended role and leaves the bullet without a clear past-tense opening action.
2. [Polish] The reduction in manual entries appears only after lengthy account-mapping and testing details, making the result easy to miss.

**Why**
1. The role dates end in June 2025, while “Mapping” does not match the past-tense account of the work. That inconsistency can make the timing of the accomplishment unclear.

**How to change it**
1. Change “Mapping” to “Mapped.”

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] “Free cash flow to equity” discounted at WACC combines an equity cash-flow measure with the wrong discount rate.
2. [Polish] The valuation bullet gives no outcome from the analysis.

**Why**
1. Free cash flow to equity is cash available to equity holders and should be discounted at the cost of equity. WACC is generally used to discount free cash flow to the firm, which is available to both debt and equity holders; the current wording makes the valuation method internally inconsistent.

**How to change it**
1. Use the cost of equity to discount free cash flow to equity, or, if the model used WACC, describe it as discounting free cash flow to the firm.

> Trained 5 plant controllers on the new budgeting template and wrote its user guide.

**Problem**
[Polish] “Trained 5 plant controllers” and “wrote its user guide” give no result of that support.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
1. [Important] The comparison with the market price gives no date for that price.
2. [Polish] The 6% result comes after the methods, delaying the most scannable outcome.

**Why**
1. A utility’s share price changes over time, so a reader cannot tell which market price anchors the comparison. Without a reference date, the 6% result is harder to interpret.

**How to change it**
1. Add the relevant reference date after “market price,” such as [as-of date], if accurate.

> Showed the share value fell from USD 50 to USD 40, a 25% drop, when the discount rate rose by 1 point.

**Problem**
1. [Error] A fall from USD 50 to USD 40 is a 20% drop, not a 25% drop.
2. [Polish] “1 point” does not specify whether the discount rate rose by one percentage point.

**Why**
1. The USD 10 decrease is 20% of the starting value of USD 50. A 25% drop would bring the share value to USD 37.50, so the stated percentage conflicts with the figures.

**How to change it**
1. Change “a 25% drop” to “a 20% drop.”

> Raised the model’s forecast accuracy by 12% across 10 years, from 70% to 82%, by adding rate-case timing.

**Problem**
1. [Error] The increase from 70% to 82% is 12 percentage points, not 12%.
2. [Important] The bullet does not explain what “forecast accuracy” measures or how the 70% and 82% figures were evaluated.

**Why**
1. The stated figures differ by 12 percentage points, or about a 17.1% relative increase from 70%. Calling it a 12% increase misstates the size of the change.
2. Without the metric definition and comparison basis, a reader cannot interpret what improved or judge what the percentages represent. That leaves the claimed improvement difficult to assess.

**How to change it**
1. Change “by 12%” to “by 12 percentage points.”
2. Clarify [accuracy metric and validation basis], using the basis on which the 70% and 82% figures were evaluated.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Polish] “Supported the FP&A team with” frames the work as assistance rather than naming what you did.
2. [Polish] The opening bullet gives no outcome or evidence of value.
3. [Polish] “FP&A” may be unfamiliar to readers outside finance.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
1. [Polish] The bullet does not state what the performance report enabled the committee to do.
2. [Polish] “Which the committee used at every meeting” places the result after the action and makes “which” ambiguous.

> Wrote onboarding notes on the fund’s models for new analysts.

**Problem**
[Polish] The onboarding-notes bullet gives no result or evidence of how many people used the notes.

> “financial reporting and analysis”

**Problem**
[Polish] The bullets read as separate reporting and onboarding contributions rather than one focused piece of work.

## Already working

- s2:e0:b3: The before-and-after figures make the productivity gain easy to understand.
- s2:e1:b1: Quantifies the close improvement with a clear baseline and result.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-6f0f7a83.md.

