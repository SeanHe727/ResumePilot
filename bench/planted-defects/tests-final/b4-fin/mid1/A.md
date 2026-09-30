> Here is my resume: bench/planted-defects/tests-final/b4-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Reviewed:** all five entries with bullets for content and wording, plus the full-resume narrative and format. I didn’t run a job-description match because no posting was provided.

The main changes to address:

- **Resolve a potentially duplicated achievement:** the same 18-month cash forecast, USD 600M business, roughly 4% error, and USD 40M debt repayment appear under both Stonebridge and the Student Investment Fund. Clarify which entry it belongs to, or distinguish the work and correct its details.
- **Lead with your finance experience:** the narrative review recommends moving Experience before Education. It also says the current caddie role interrupts the finance story; consider reducing it to a brief note so the ongoing valuation project carries the current timeline.
- **Clarify or substantiate several bullets:** give context for the 40% close-efficiency improvement; explain how your board-pack commentary was used; clarify the acquisition valuation approach and the reported group EBITDA margin; and specify what you personally did for the junior tournament. The reviewers also flagged the valuation bullet’s pairing of free cash flow to equity with WACC.
- **Check wording and personal details:** replace the first-person phrasing, use past tense for the completed Crescent Bank role, and consider removing date of birth and nationality.

The file parses cleanly as a one-page resume with consistent formatting and no ATS blockers. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 72 · wording 78 · narrative 60

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 7 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998 | Nationality: Singaporean

**Problem**
[Error] Remove the date of birth and nationality from the resume.

**Why**
These personal details are not information a reader is meant to weigh and are conventionally left off. Keeping them on the page adds information unrelated to assessing your qualifications.

**How to change it**
Cut “Date of birth: 5 Feb 1998 | Nationality: Singaporean.”

> B.B.A. in Finance

**Problem**
[Important] Experience should appear before Education.

**Why**
The resume shows several years of post-degree experience, so leading with education delays the work history a recruiter is more likely to weigh first. Moving the experience section forward would put the most relevant career evidence earlier on the page.

**How to change it**
Move the Education entry below the Experience entries.

## Lakeside Golf Club | Caddie | Metro City, USA | Aug 2025 - Present

> Caddied about 5 rounds a week, carrying bags and reading greens for members.

**Problem**
[Polish] The duties describe the work but give no outcome for members.

> Helped the pro shop run the weekend junior tournament.

**Problem**
[Important] The tournament bullet does not identify your specific responsibility or the result of your contribution.

**Why**
“Helped the pro shop run” leaves a reader unsure whether you owned a specific part of the event or provided general support. The bullet also gives no outcome, so the reader cannot assess what your work contributed to the tournament.

**How to change it**
Replace “Helped the pro shop run” with [the part of the tournament you handled], if accurate, and add [the outcome your work helped achieve] with a supporting measure if available.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Improved close efficiency by 40% by automating reconciliations and intercompany eliminations.

**Problem**
1. [Important] The 40% efficiency gain has no stated baseline or comparison period.
2. [Polish] The repeated “by” makes the relationship between the gain and the method clunky.

**Why**
1. A reader cannot judge the size of the improvement without knowing what close time or effort it is measured against. That makes the figure harder to interpret and less credible.

**How to change it**
1. Add the prior close time or effort and the comparison period, using [from X to Y over Z months].

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
1. [Polish] The bullet says the template standardized criteria but not what that enabled.
2. [Polish] The final clause is wordy because the shared template already conveys standardization.

> Wrote the variance commentary for the monthly board pack, explaining each line more than 5% off budget.

**Problem**
1. [Polish] The board-pack bullet names the deliverable but not its consequence.
2. [Polish] “Each line more than 5% off budget” is an awkward description of the items covered.

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] Free cash flow to equity is paired with the wrong discount rate.
2. [Important] The acquisition valuation has no amount or range.

**Why**
1. Free cash flow to equity is cash available to shareholders and is ordinarily discounted at the cost of equity. WACC is used to discount free cash flow to the firm; it is appropriate for FCFE only in special cases, such as when WACC equals the cost of equity.
2. The valuation is the central output of the work, but the reader cannot see its scale or what the analysis produced. That makes it difficult to assess the result of the valuation work.

**How to change it**
1. If the model used FCFE, replace “weighted average cost of capital” with “cost of equity.” If it used WACC, replace “free cash flow to equity” with “free cash flow to the firm.”
2. Add [the resulting valuation amount or range], if it can be shared.

> Reported a 45% group EBITDA margin by adding the EBITDA margins of the three business units.

**Problem**
1. [Error] Business-unit EBITDA margins cannot be added to calculate a group EBITDA margin.
2. [Polish] The reporting bullet gives a margin but does not say what your work contributed or enabled.

**Why**
1. Adding the three unit margins does not produce a valid group margin. The group margin is total group EBITDA divided by total group revenue, equivalently a revenue-weighted average of the unit margins.

**How to change it**
1. Recalculate the group margin as total group EBITDA divided by total group revenue, and report that figure instead of the sum of the unit margins.

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
1. [Polish] The strongest Stonebridge bullet should appear first.
2. [Polish] “Letting treasury pay down” is informal and makes your contribution to the repayment less direct.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Underwrote 60 small-business loans worth USD 45M, and none of the approved loans defaulted in their first two years.

**Problem**
[Important] The underwriting bullet does not identify the analysis or decision criterion used.

**Why**
The loan volume and outcome are compelling, but a reader cannot see the credit-analysis skill behind the decisions. Adding the most telling criterion would make the underwriting work more assessable.

**How to change it**
Add [the key analysis or criterion used], if accurate.

> Reviewed 3 years of declined applications; my findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Polish] The declined-application analysis and its results should lead the entry.
2. [Polish] The first-person pronoun “my” does not belong in this resume bullet.

> Writes the covenant-monitoring checklist for the portfolio, cutting missed covenant tests from 7 to 1 a year.

**Problem**
1. [Error] “Writes” is present tense even though the role ended in December 2022.
2. [Polish] “From 7 to 1 a year” is awkward and makes the annual measure harder to scan.

**Why**
1. The role dates show that this is completed work, so the present-tense verb conflicts with the timeline. The other bullets describe completed actions in the past tense.

**How to change it**
1. Change “Writes” to “Wrote.”

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Valued a listed regional utility with a 10-year DCF and a comparable-company check, landing within 6% of the market price.

**Problem**
[Polish] The market-price comparison does not say whether the valuation was above or below the price or when the comparison was made.

> Tested the valuation’s sensitivity: a 1-point change in the discount rate moved the share value from USD 52 to USD 44.

**Problem**
[Important] The sensitivity scenario does not specify the direction, starting rate, or unit of the discount-rate change.

**Why**
A reader cannot tell which assumption produced the USD 52 and USD 44 values. “One point” could mean one percentage point or another measure, so the scenario is not interpretable as written.

**How to change it**
Specify [whether the rate increased or decreased], [its starting rate], and that the change was [one percentage point or the accurate unit].

> Shared the model and a two-page note with the university investment club, which used it in its spring pitch.

**Problem**
[Polish] “Which used it” could refer to either the model or the note.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
1. [Important] The FP&A bullet does not identify a specific task or action.
2. [Polish] The FP&A bullet gives no outcome of the work.

**Why**
1. “Financial reporting and analysis” is broad, and “Supported the FP&A team with” frames the work as assistance rather than naming what you did. A reader cannot picture the work or recognize the skill you used.

**How to change it**
1. Replace the broad phrase and “Supported the FP&A team with” with [one specific report or analysis task] that best shows your contribution.

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
[Polish] The performance-report bullet should lead the entry.

> Built an 18-month cash forecast for a USD 600M business, holding error to about 4% and freeing USD 40M to repay debt early.

**Problem**
1. The forecast bullet does not explain how its error figure was calculated or compared.
2. The forecast outcomes come after the setup and would be easier to scan first.

**Why**
1. A reader cannot interpret “about 4%” without knowing what the forecast was measured against or how error was calculated. That limits the credibility and usefulness of the accuracy claim.
2. The accuracy and debt-repayment outcomes are the most concrete parts of the bullet, but appear after the setup. If this is a distinct achievement that remains in the entry, leading with those outcomes would make them more visible.

**How to change it**
1. If this bullet remains because it describes a distinct forecast, add [how forecast error was calculated and compared]; otherwise remove the bullet with the duplicate achievement.
2. If this is a distinct forecast that remains here, move the outcomes before the setup; otherwise remove the bullet with the duplicate achievement.

> Built an 18-month cash forecast for a USD 600M business

**Problem**
[Error] The cash-forecast bullet repeats an achievement attributed to the later Stonebridge role and does not fit this fund entry.

**Why**
This bullet describes an 18-month forecast for a USD 600M business, about 4% error, and USD 40M of early debt repayment—the same distinctive achievement described under Stonebridge several years later. A reader may doubt which role the work belongs to or whether these are genuinely separate forecasts.

**How to change it**
Remove this bullet from the Student Investment Fund entry. If it was a separate forecast, clarify [the correct role, scale, and results] rather than repeating the Stonebridge achievement.

## Already working

- s2:e2:b3: Connects a concrete work product to a directly measured efficiency improvement.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8af2fc1a.md.

