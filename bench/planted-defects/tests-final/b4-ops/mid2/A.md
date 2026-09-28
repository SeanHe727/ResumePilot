> Here is my resume: bench/planted-defects/tests-final/b4-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed content and wording in all four entries with bullets, plus the full-resume narrative and format. Education had no bullets to review. I did not run a job-match review because no posting was provided.

The main changes to address are: clarify whether the similar forecasting achievements in Crestway and the food-bank project are separate; correct the routing study’s percentage, since 120 to 90 miles is not a 40% reduction; and revisit the safety-stock bullet’s use of EOQ. The specialists also flagged a spelling error in Skills and suggested moving Education below Experience.

The format check found clean parsing and consistent layout. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 82 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 6 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Nov 1995 | Nationality: Mexican

**Problem**
[Error] The file includes personal details that should be left off the résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing the candidate’s qualifications. Including them takes space from relevant evidence and introduces information that is not needed for the review.

**How to change it**
Remove the date of birth and nationality.

> seasonal forecast model; Built a seasonal forecast

**Problem**
[Error] The Crestway and food-bank forecast bullets describe nearly the same stockout and inventory reductions, which can make the achievement look duplicated.

**Why**
Both entries describe a seasonal forecast covering 1,400 items across three locations and report similar stockout and inventory reductions. A reader may wonder whether these are separate projects or one result presented twice.

**How to change it**
Clarify [how the two forecast projects and results differ], if they are separate; otherwise retain the achievement under only one entry.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education appears before the more relevant experience, weakening the opening evidence for a candidate with several years of relevant work.

**Why**
A recruiter sees the degree before the operational experience that better demonstrates the candidate’s fit. That delays the most useful evidence at the start of the résumé.

**How to change it**
Move the Education entry below Experience.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Set safety stock for all 1,400 SKUs with the economic order quantity (EOQ) formula, balancing ordering and holding costs.

**Problem**
[Error] EOQ does not calculate safety stock, and the line gives no resulting change.

**Why**
EOQ balances ordering and holding costs for cycle stock; safety stock depends on demand and lead-time variability and the desired service level. A reader may doubt the method or ask whether availability or inventory improved, so the SKU count alone does not show the value of the work.

**How to change it**
If EOQ was used, describe it as setting order quantities and identify [the method actually used to calculate safety stock]; otherwise remove the EOQ claim. Add [the clearest resulting change, such as a stockout or inventory-cost change], if you can substantiate it.

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
[Polish] The scorecard bullet does not state what the renegotiations achieved.

> Led the monthly sales and operations planning meeting, reconciling the sales forecast with plant capacity for the finance and production teams.

**Problem**
[Polish] The meeting bullet does not say what reconciling the forecast and capacity enabled.

> Cut average order lead time through the warehouse from 10 days to 5 while holding daily throughput constant and doubling work-in-process to keep pickers busy.

**Problem**
1. [Error] The lead-time reduction conflicts with the claim that throughput stayed constant while work-in-process doubled.
2. [Important] The line does not define which warehouse steps the lead-time measurement covers.
3. [Polish] The work-in-process explanation buries the lead-time result and distracts from it.

**Why**
1. Under Little’s Law, work-in-process equals throughput multiplied by lead time. At constant throughput, doubling work-in-process implies longer—not shorter—lead time, so these figures cannot all describe the same steady-state warehouse flow.
2. Without a clear start and end point, a reader cannot tell what process was shortened or compare the measure consistently. The throughput and work-in-process figures do not define that interval.

**How to change it**
1. Correct the lead-time, throughput, or work-in-process figures to match the actual measurements before retaining the claims.
2. Specify [the start and end steps included in the lead-time measure], if you can identify them.

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
1. [Polish] The model phrase appears before the results, delaying the strongest information in the bullet.
2. [Polish] This is the strongest Crestway bullet but does not open the entry.
3. The seasonal forecast model is not described specifically enough to show what method was used.

**Why**
3. A reader sees that forecasting was part of the work, but “seasonal forecast model” does not identify the technique. That makes it harder to assess the technical work behind the reported results.

**How to change it**
3. Replace “a seasonal forecast model” with [the specific forecasting method used], if accurate.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
[Important] The cycle-counting result is buried in a list of unrelated duties, making the bullet read like a task list rather than one focused achievement.

**Why**
The inventory-accuracy improvement is the clearest outcome, but readers may miss it after the several separate supervisory and administrative responsibilities. That weakens the focus of the achievement and makes the result harder to notice.

**How to change it**
Lead with the inventory-accuracy result, keep the cycle-counting work attached to it, and cut or split the unrelated duties about supervision, slides, hiring, and certification.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Spearheaded a data-driven, optimization-first transformation of last-mile logistics that unlocked significant efficiency gains.

**Problem**
[Important] The project description uses vague, jargon-heavy labels instead of naming the approach or a measurable efficiency outcome.

**Why**
“Data-driven” and “optimization-first” do not tell a reader what technical work the project involved. “Significant efficiency gains” gives no result or measure, so the reader cannot judge the claim’s value.

**How to change it**
Replace the broad labels with [one specific modeling or solver approach used] and replace “unlocked significant efficiency gains” with [a specific efficiency outcome and measured change versus baseline], if accurate; otherwise remove unsupported claims.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] A decrease from 120 to 90 miles is a 25% reduction, not a 40% reduction.
2. [Polish] The line names customer time windows but not the optimization approach used to produce the routes.
3. [Polish] This is the strongest project bullet but does not open the entry.

**Why**
1. The decrease is 30 miles, which is 25% of the original 120 miles. A 40% reduction from 120 miles would be 72 miles, so the stated percentage undermines confidence in the result.

**How to change it**
1. Replace “a 40% reduction” with “a 25% reduction.”

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
[Polish] The pilot bullet gives its scope and duration but no outcome.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
1. [Important] The forecast results lack a comparison period, and the nearly $2M figure is not defined.
2. [Polish] The quantified impact comes after the product and warehouse counts, delaying the result within the bullet.
3. [Polish] This is the strongest food-bank bullet but does not open the entry.

**Why**
1. Without a before-and-after period, a reader cannot tell the timeframe of the stockout change. The inventory figure is also hard to interpret without knowing whether it refers to inventory value or another cost measure.

**How to change it**
1. Add [the comparison period] and clarify whether the nearly $2M refers to inventory value or another measure; include only the detail that best anchors the result.

> Built a seasonal forecast

**Problem**
[Important] The demand-planning bullet shifts away from the warehouse-operations focus established by the first two bullets.

**Why**
The first two bullets describe warehouse-process changes, while this one introduces demand planning and closely echoes the Crestway forecast achievement. That shift can make the project’s focus unclear.

**How to change it**
Keep this bullet here only if the forecasting work was part of this warehouse project and supports its focus; otherwise remove it from this entry.

## Skills

> forcasting

**Problem**
[Error] The Skills entry misspells “forecasting.”

**Why**
A visible spelling error can distract a reader and make the Skills section appear less carefully checked. It is particularly noticeable in a methods list, where accuracy matters.

**How to change it**
Change “forcasting” to “forecasting.”

## Already working

- s2:e0:b0: Pairs a concrete cost improvement with a clear baseline and timeframe.
- s2:e1:b0: Pairs a clear operational change with quantified results.
- s2:e1:b1: Clearly connects analysis to a process change.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-5af871e5.md.

