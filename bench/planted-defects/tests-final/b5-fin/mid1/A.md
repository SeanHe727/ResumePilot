> Here is my resume: bench/planted-defects/tests-final/b5-fin/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and formatting. The education entry has no bullets to review. No job description was provided, so job-match review wasn’t run.

The main changes to consider:
- **Resolve the duplicated achievement:** the Stonebridge role and Student Investment Fund project both claim the same 18-month cash forecast, ~4% error, and USD 40M debt repayment outcome. Clarify which role it belongs to, or explain how the achievements differ.
- **Add context or outcomes to several claims:** reviewers flagged undefined measures such as “40%” close-efficiency improvement and “under 4%” forecast error, as well as missing periods or baselines for some figures. They also noted that the board-pack commentary and acquisition valuation bullets don’t say what the work enabled or what the valuation concluded.
- **Tighten the overall story:** the narrative review recommends putting Experience before Education and cutting or shortening the older Student Investment Fund project. It also flagged a typo in the skills line (“valuaton”) and personal details—date of birth and nationality—that are generally left off.

The format check found that the file parses cleanly as a one-page resume. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 72 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 13 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 5 Feb 1998

**Problem**
[Error] Personal details that readers are not meant to weigh should not appear on the résumé.

**Why**
A date of birth and nationality are personal details rather than evidence of qualifications. Including them uses space without helping a reader assess the candidate’s experience.

**How to change it**
Remove “Date of birth: 5 Feb 1998” and “Nationality: Singaporean.”

> Harbor State University

**Problem**
[Important] The education section appears before the candidate’s professional experience.

**Why**
The candidate has several years of professional experience, so leading with education makes the page’s strongest career context less prominent. A recruiter scanning from the top may reach the relevant experience later than necessary.

**How to change it**
Move EXPERIENCE above EDUCATION.

## Stonebridge Manufacturing | Financial Analyst | Metro City, USA | Jan 2023 - Jun 2025

> Improved close efficiency by 40% by automating reconciliations and intercompany eliminations.

**Problem**
[Important] The 40% close-efficiency improvement has no defined measure or comparison period.

**Why**
A reader cannot tell what became 40% more efficient or how the change was measured. Without a measure and baseline, the result is difficult to assess.

**How to change it**
Specify the measure and comparison, such as [close days or reconciliation hours] versus [baseline period].

> Modeled the capital plan for 12 plant projects in a shared NPV template, so every request used the same discount rate and payback rules.

**Problem**
[Polish] The explanation of the template’s standardization purpose is wordy.

> Wrote the variance commentary for the monthly board pack, explaining each line more than 5% off budget.

**Problem**
[Important] The variance-commentary line repeats the idea of explaining results and does not say what the commentary enabled.

**Why**
The reader can see what you produced, but not what the board or business did with it. The 5% threshold describes the scope of the work, not its value.

**How to change it**
Replace “Wrote the variance commentary” and the repeated “explaining” with the decision or action the commentary informed, if accurate: [a specific decision or action it supported].

> Valued the acquisition target by discounting its free cash flow to equity at the company’s weighted average cost of capital.

**Problem**
1. [Error] Free cash flow to equity is discounted at the wrong rate: it must be discounted at the cost of equity, not WACC.
2. [Important] The valuation result is unstated, and the method takes the place of the result in the line.

**Why**
1. Free cash flow to equity is cash available to equity holders, so the appropriate discount rate is the cost of equity. WACC is used with free cash flow to the firm; using it with free cash flow to equity describes an inconsistent valuation method.
2. A reader cannot gauge the scale or significance of the analysis without its output. The line gives the method but does not say how the valuation was used.

**How to change it**
1. If the model used free cash flow to equity, replace “the company’s weighted average cost of capital” with “the cost of equity.” If it used WACC, replace “free cash flow to equity” with “free cash flow to the firm.”
2. Move the valuation result to the opening and add [the resulting equity value or valuation range] and, if accurate, [the decision it informed].

> Reported a 45% group EBITDA margin by adding the EBITDA margins of the three business units.

**Problem**
1. [Error] Adding the three business-unit margins does not calculate a group EBITDA margin.
2. [Important] The long calculation clause delays the 45% figure, which also has no reporting period or stated use.

**Why**
1. A group margin is total EBITDA divided by total revenue, or equivalently a revenue-weighted average of the unit margins. Adding the margins does not produce the group figure, so the reported 45% is unsupported by the stated calculation.
2. The reader has to pass through the calculation explanation before reaching the main figure, even though that explanation should be removed. Without a period or business use, the figure is hard to interpret and its value to leadership is unclear.

**How to change it**
1. Recalculate the margin as total EBITDA divided by total revenue and report that figure. If 45% is the result, state that it was calculated using the group totals.
2. Cut “by adding the EBITDA margins of the three business units,” add [the fiscal quarter or year], and, if accurate, add [the decision or action the reporting supported].

> Built the rolling 18-month cash-flow forecast for a USD 600M manufacturer, keeping monthly forecast error under 4% and letting treasury pay down USD 40M of revolver debt early.

**Problem**
1. [Important] The forecast-error figure does not identify its measure or evaluation period.
2. [Important] The debt reduction is presented as an indirect consequence, and the strongest result does not lead the line.

**Why**
1. Forecast error can be calculated in different ways, so “under 4%” is not precise enough to interpret on its own. The reader also cannot tell how long the forecast met that level.
2. “Letting treasury pay down” makes the result sound less direct than the stated USD 40M debt reduction. Opening with the forecast and accuracy delays the clearest business outcome on a quick scan.

**How to change it**
1. Name [the error metric] and [the period over which it stayed under 4%].
2. Move the USD 40M debt-repayment result to the opening and replace “letting treasury pay down” with a direct statement of the reduction.

## Crescent Bank | Credit Analyst | Metro City, USA | Jul 2020 - Dec 2022

> Owned the credit reviews for the small-business loan book and the watch list the lending officers used.

**Problem**
[Important] The credit-review line gives no result, leaves the assessment inputs unstated, and describes responsibilities rather than actions.

**Why**
A reader can see the area you covered, but not what changed because of the reviews or how you used the watch list. The line also gives no basis for judging your credit assessments.

**How to change it**
Replace “Owned” with the review and watch-list actions you performed, name [the main financial input or assessment criterion you used], and add [what changed because of the work, with a measure or comparison].

> Reviewed 3 years of declined applications; the findings changed two ratio thresholds and raised approvals from 41% to 48% with no rise in early defaults.

**Problem**
1. [Important] The early-default comparison has no stated period or baseline.
2. [Important] The line’s strongest outcome does not lead the sentence.

**Why**
1. The approval increase is clear, but the safeguard is hard to assess without knowing what “no rise” is compared against. A comparison anchor would make the risk outcome more credible.
2. The change to thresholds and approval rates is the clearest evidence of impact. Leading with the review process delays that result on a quick scan.

**How to change it**
1. Add [the comparison period or baseline for early defaults] after this phrase.
2. Move the findings, threshold changes, and approval increase to the opening, then place the review of declined applications after them.

## Regional Utility Valuation | Independent Project | Excel | Nov 2024 - Present

> Tested the valuation’s sensitivity: a 1-point change in the discount rate moved the share value from USD 52 to USD 44.

**Problem**
[Important] The sensitivity line does not specify the direction or unit of the discount-rate change.

**Why**
Without the direction, a reader cannot tell what the USD 52-to-USD 44 movement represents. “1-point” also does not establish whether the change is one percentage point or another unit.

**How to change it**
Replace this phrase with the direction and unit, and, if useful, the starting and ending rates: a 1-point [increase/decrease] from [starting rate] to [ending rate].

> Shared the model and a two-page note with the university investment club, which used it in its spring pitch.

**Problem**
[Polish] “Which used it” does not make clear whether the club used the model, the note, or both.

## Student Investment Fund | Analyst, Team of 6 | Excel | Sep 2018 - May 2019

> Supported the FP&A team with financial reporting and analysis.

**Problem**
The FP&A line describes assistance but does not identify the work or its outcome.

**Why**
A reader cannot tell what you prepared or analyzed, or what changed because of it. As written, the line does not connect the activity clearly to the fund.

**How to change it**
Replace the generic description with [the specific fund reporting or analysis you performed] and, if accurate, [its outcome].

> Rebuilt the fund’s performance report to show returns against its benchmark, which the committee used at every meeting.

**Problem**
[Important] The committee’s use of the performance report is delayed instead of leading the line.

**Why**
The committee used the report at every meeting, which is the clearest evidence of its value. Burying that result at the end makes it less visible on a quick scan.

**How to change it**
Move the committee’s use of the report to the opening, then state that you rebuilt it to show returns against the benchmark.

> Built an 18-month cash forecast for a USD 600M business, holding error to about 4% and freeing USD 40M to repay debt early.

**Problem**
[Error] The cash-forecast achievement is attributed to two different roles, and its error measure and construction are unclear.

**Why**
The Student Investment Fund dates the work to 2018–2019, while Stonebridge dates an almost identical forecast and outcome to 2023–2025. This makes the achievement’s attribution unclear; the line also does not define the error comparison or explain how the forecast was built.

**How to change it**
Keep the achievement under the role where it actually occurred; replace it here with a verified fund result, or remove it if it was performed at Stonebridge. If these were separate projects, clarify [what distinguishes this forecast]; if retaining the claim, specify [what the error was measured against] and name the build method only if you used it.

> Student Investment Fund

**Problem**
[Important] The entry’s generic FP&A description and older project details make it difficult to place in the career story.

**Why**
The entry combines a description that does not clearly connect to the fund with fund reporting and a cash-forecast claim that appears again under later professional experience. As an older student entry, it competes with more relevant experience instead of strengthening the progression.

**How to change it**
Shorten the entry to one line focused on the fund reporting, or cut it; keep any cash-forecast achievement only under the role where it occurred.

## Skills

> valuaton

**Problem**
[Error] The Methods skills line misspells “valuation.”

**Why**
The misspelling is visible in a skills term and can make the line look unchecked. Correcting it preserves the intended method name.

**How to change it**
Replace “valuaton” with “valuation.”

## Already working

- s3:e0:b0: Pairs a specific valuation approach with a quantified result and an explicit comparison.
- s2:e1:b3: The before-and-after measure makes the efficiency gain easy to understand.
- s2:e1:b2: Pairs a concrete deliverable with a measurable annual reduction in missed tests.

## Set aside (5)

5 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f4f51b42.md.

