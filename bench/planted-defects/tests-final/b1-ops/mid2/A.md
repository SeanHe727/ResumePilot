> Here is my resume: bench/planted-defects/tests-final/b1-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full resume’s narrative and ATS formatting. Education has no bullets to review. I didn’t compare it to a job posting because none was provided.

The main changes to address:
- **Verify and reconcile the metrics.** The routing bullets give conflicting reductions (18% versus 40%; 120 to 90 miles is 25%). The analyst role’s forecast-accuracy comparison may not be like-for-like, and the OEE figure of 112% needs checking.
- **Reorder the resume.** Put Crestway Foods before Lakeview Distribution, and move Education below Experience.
- **Clarify outcomes and scope.** Several bullets list responsibilities without results; specify what changed, how the result was measured, and what population or timeframe the figures cover. The food-bank project’s opening bullet is especially general.

The file parses cleanly for ATS. No job-description match was run. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 72 · wording 82 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 11 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeview Distribution | Operations Analyst

**Problem**
[Important] The experience entries are not in reverse chronological order.

**Why**
Lakeview, dated 2018–2021, appears above the more recent Crestway role, dated 2021–2025. That interrupts the expected date sequence and makes the work history harder to scan.

**How to change it**
Move Crestway Foods above Lakeview Distribution.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education appears before the work history, even though the work history is the stronger opening for this candidate.

**Why**
The current order leads with the degree rather than the more relevant professional experience. A reader may not see the strongest evidence of fit as quickly.

**How to change it**
Move the Education entry below Experience.

> Delivery Driver and Shop Assistant

**Problem**
[Important] The current florist entry is longer than needed for the operations and supply-chain direction.

**Why**
The role accounts for the candidate’s present activity, but its shop and delivery duties do not advance that direction. Keeping it brief preserves the timeline without giving it disproportionate emphasis.

**How to change it**
Shorten Greenleaf Florist to one line while retaining the current role and dates.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
The delivery bullet gives volume and duties but no outcome.

**Why**
A reader can see the daily workload and payment responsibilities, but not what the work achieved. Without an outcome, the volume does less to show the value of the role.

**How to change it**
Add a supported result after the duties, such as [delivery or customer outcome].

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
The wedding-order bullet does not explain what preparing the orders involved.

**Why**
“Prepared” could describe a range of tasks, so a reader cannot picture the candidate’s contribution. The line also lists responsibilities without showing what they accomplished.

**How to change it**
Replace “Prepared” with the specific preparation task, such as [specific task], and add a result if one can be supported: [result].

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
1. [Error] The forecast-accuracy increase is not a valid like-for-like comparison because the calculation excludes a different SKU population.
2. [Polish] The phrase describing which SKUs the MAPE calculation covers is wordy and imprecise.

**Why**
1. Excluding SKUs that did not sell every week changes the population being measured and can make the metric look better without improving forecasts. The two figures therefore do not establish increased accuracy across the same assortment.

**How to change it**
1. Recalculate both figures using the same SKU inclusion rules. If the figures are only for weekly-selling SKUs, label them as such and do not present the change as an improvement unless comparable measurements support it.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Important] The time-study bullet uses a first-person pronoun and makes the candidate’s role in the triage station indirect.
2. [Polish] The days in the returns-processing comparison are not defined.

**Why**
1. “My findings led to” does not say whether the candidate helped put the station in place, and the sentence delays its clearest result. A reader may miss the contribution and impact while scanning the bullet.

**How to change it**
1. Remove “my” and, if accurate, replace “my findings led to a triage station” with a direct action describing the candidate’s role in implementing it. Move the result to the beginning of the bullet.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
1. [Polish] The dock-scheduling bullet does not say what the rules governed.
2. [Polish] “At the dock” repeats context already conveyed by “trailer wait.”

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
[Important] The inventory-accuracy figures do not identify which population they measure.

**Why**
A reader cannot tell whether the improvement applies to the 2,000 counted locations or a broader inventory population. That makes the reach of the result unclear.

**How to change it**
Add the measured population immediately after the figures: [locations or inventory population measured].

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
1. [Important] The demand-planning bullet puts its impact after the scope and method.
2. [Polish] “A seasonal forecast model” is too general to show the specific forecasting approach.

**Why**
1. A scanning reader must reach the end of the line to find the stockout and inventory results. Those are the clearest evidence of the work’s value and should be easier to spot.

**How to change it**
1. Move the existing impact to the beginning of the bullet, before the scope and method.

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
[Important] The reorder-point bullet gives no result, and its closing phrase shifts attention to a recurring duty.

**Why**
A reader can see the task and its data inputs but cannot tell whether it improved availability, reduced excess inventory, or otherwise helped the business. The monthly review detail makes the bullet sound more like an ongoing responsibility than a completed action.

**How to change it**
Cut the monthly-review phrase and add a supported outcome after the existing method: [change in service level, stockouts, or inventory compared with the prior process].

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
[Important] The vendor-scorecard bullet opens awkwardly and buries its result after lengthy process details.

**Why**
The participial opening makes the causal link between the scorecards and delivery improvement unclear. A scanning reader may not reach the strongest evidence of the work’s value.

**How to change it**
Move the existing delivery result to the beginning, then describe the work with past-tense action verbs. Retain only the most telling scorecard details and cut or compress the rest.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The OEE figure of 112% is impossible under the conventional OEE definition.
2. [Polish] The OEE bullet names areas of improvement but not the specific intervention.

**Why**
1. OEE is the product of availability, performance, and quality, each bounded at 100%, so conventional OEE cannot exceed 100%. Cutting changeover time and micro-stops can improve OEE but cannot make it reach 112%.

**How to change it**
1. Recalculate and report the conventional OEE value. If 112% reflects a different or nonstandard metric, name that metric instead of OEE.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
[Polish] The exception-handling guide’s use for promotions does not show what it improved.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] The 120-to-90-mile change is a 25% reduction, not 40%.
2. “Average route length” does not say what routes the average covers.

**Why**
1. The decrease is 30 miles, and 30 divided by the original 120 miles is 25%. The stated percentage contradicts the figures and also creates an inconsistency with the other route-mile result in this study.
2. A reader cannot tell which routes are included in the average, making the measure harder to interpret. Naming the comparison population would clarify the result.

**How to change it**
1. Change “a 40% reduction” to “a 25% reduction.” Clarify the measures or make the route-mile results consistent if they report the same improvement.
2. Add the population averaged, such as [routes included in the average], if accurate.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
[Important] The time-window intervention is repeated in the following bullet.

**Why**
Both bullets describe adding customer time windows, so they read as though they report the same intervention. Consolidating the overlapping details would make the project evidence clearer.

**How to change it**
Consolidate the repeated intervention details with the preceding bullet, keeping the distinct supported outcome for each result.

> Cut average route length

**Problem**
[Important] The route-mile results are repeated across two bullets in the same study.

**Why**
Both bullets report reducing route miles, so a reader may take them as duplicate evidence for the same result. Keeping one route-mile result would give the entry more room for distinct evidence.

**How to change it**
Keep either this route-mile result or the route-mile result in the first bullet, rather than both.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Polish] The warehouse-analysis bullet gives no scope or approach and does not say what changed as a result.
2. [Polish] “Made recommendations” is broad and does not specify the action taken.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
[Important] The intake-process bullet uses passive voice, obscuring the candidate’s role, and opens with background before the result.

**Why**
A reader cannot tell who mapped the process or removed the duplicate steps. The clearest impact—donations reaching shelves sooner—also appears late in the line.

**How to change it**
Replace the passive phrasing with active verbs naming the candidate’s role, and move the existing result to the beginning of the bullet.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] The slotting-guide bullet does not show the expertise it captured or the result of the re-slotting.
2. [Polish] “Again” is redundant after “re-slot.”

## Already working

- s2:e2:b1: The outcome, comparison, timeframe, and practical method are all clear and compact.
- s3:e0:b0: Pairs a concrete operational outcome with a clear comparison point.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f6cef6ed.md.

