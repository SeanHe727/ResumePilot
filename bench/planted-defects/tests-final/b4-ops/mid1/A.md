> Here is my resume: bench/planted-defects/tests-final/b4-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the full resume’s narrative and format. Education had no bullets to review. No job description was provided, so I did not assess job match.

The main changes specialists flagged:
- Clarify whether the seasonal-forecast results in your Crestway role and food-bank project are separate achievements; as written, they appear to repeat the same result and scale.
- Reconcile the routing figures: 120 to 90 miles is a 25% reduction, not 40%.
- Revisit the safety-stock bullet: it attributes the calculation to EOQ and gives no resulting change. The specialists also noted an EOQ/inventory-measure issue.

The file parses cleanly as a one-page resume. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 81 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 7 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 14 Nov 1995

**Problem**
[Error] Personal details that readers are not meant to weigh are included in the file.

**Why**
Date of birth and nationality are not needed to evaluate the stated education or experience. Their presence gives the reader information unrelated to the qualifications presented.

**How to change it**
Remove “Date of birth: 14 Nov 1995 | Nationality: Mexican” from the résumé.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education appears before relevant work experience despite several years of relevant experience.

**Why**
A reader reaches the degree before seeing the work that best demonstrates the candidate’s operations and supply-chain experience. Leading with experience would make the most relevant evidence easier to find.

**How to change it**
Move the Education section below Experience.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Set safety stock for all 1,400 SKUs with the economic order quantity (EOQ) formula, balancing ordering and holding costs.

**Problem**
1. [Error] EOQ does not calculate safety stock.
2. [Important] The safety-stock claim gives no resulting change.

**Why**
1. EOQ determines an economical order quantity by balancing ordering and holding costs; it does not, by itself, set safety stock. A reader who knows inventory planning may question the method, which weakens confidence in the claim.
2. The 1,400-SKU scope shows the scale of the work, but not whether it improved availability or reduced excess inventory. A reader cannot judge the value of the planning work from the action alone.

**How to change it**
1. If EOQ was used, replace “Set safety stock” with an accurate description of setting order quantities. If safety stock was calculated separately, name the method actually used.
2. Add the supported result after the method, such as [change in stockouts or inventory, measured against the prior level].

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
[Polish] The scorecard’s outcome is missing and its use is buried in the sentence.

> Led the monthly sales and operations planning meeting, reconciling the sales forecast with plant capacity for the finance and production teams.

**Problem**
[Polish] The meeting description does not say what the reconciliation produced.

> Cut average order lead time through the warehouse from 10 days to 5 while holding daily throughput constant and doubling work-in-process to keep pickers busy.

**Problem**
[Error] The lead-time, throughput and work-in-process figures are incompatible if they describe the same warehouse system.

**Why**
In a steady-state flow system, work-in-process equals throughput multiplied by lead time. At constant throughput, halving lead time requires work-in-process to fall by half, not double; the current wording therefore makes the result harder to trust and scan.

**How to change it**
Correct the work-in-process or lead-time figure, or clarify whether the measures refer to different system boundaries or periods. Cut or revise “to keep pickers busy” if it obscures the relationship.

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Important] The demand-planning results are buried, and the seasonal forecasting method is underspecified.

**Why**
The stockout and inventory changes are the clearest evidence of impact, but they appear after the scope and model detail. “Seasonal forecast model” identifies a broad approach without showing the seasonal signal or adjustment, so readers cannot see the specific forecasting work behind the result.

**How to change it**
Move the stockout and inventory results closer to “Rebuilt weekly demand planning.” If useful and accurate, replace “seasonal forecast model” with [the specific seasonal feature or adjustment used].

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Ran a time study of the returns desk; the findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
[Polish] The returns-desk bullet does not make your role in creating or implementing the triage station clear.

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
1. [Important] The accuracy result is buried among unrelated duties, leaving its connection to cycle counting unclear and making the entry less focused.
2. [Important] The cycle-counting bullet is not the opening line of the entry, although it is identified as the strongest line.

**Why**
1. The reader cannot tell which contribution raised inventory record accuracy from 91% to 98.5%. The list of supervision, training, hiring and certification duties obscures the measured result and makes the operations work feel less focused.
2. The entry opens with the pick-path result, while the cycle-counting line carries the inventory-accuracy result. A reader scanning the entry may not see that stronger evidence first.

**How to change it**
1. Move the accuracy result directly after “Set up cycle counting for the 2,000 highest-value locations.” Cut or relocate the secondary duties, especially “safety training slides,” or separate relevant responsibilities from this result.
2. Move the cycle-counting bullet ahead of the current opening bullet, keeping the accuracy result next to the cycle-counting action.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Spearheaded a data-driven, optimization-first transformation of last-mile logistics that unlocked significant efficiency gains.

**Problem**
[Polish] The opening bullet uses broad, promotional language instead of naming the work or its result.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] The route-length figures show a 25% reduction, not a 40% reduction.
2. [Important] The route-length result is not the opening bullet of the project, although it is identified as the strongest line.
3. [Polish] The route-length averages lack comparison context, and the method description does not name how the time windows were used.

**Why**
1. The decrease is 30 miles, and 30 divided by the original 120 miles is 25%. The conflicting percentage makes the result look inaccurate.
2. The opening bullet makes a broad claim, while this bullet gives the project’s measurable route-length result. A reader scanning the project may not reach its clearest evidence first.

**How to change it**
1. Change “a 40% reduction” to “a 25% reduction,” unless the route-length figures are the ones that need correction.
2. Move this bullet ahead of the current opening bullet after correcting the percentage.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
1. [Important] The pilot’s result is missing, and the trial detail delays the point of the handoff.
2. [Polish] The handoff bullet does not show how the model was made or validated.

**Why**
1. The sentence says the dispatch team tested the routes but not whether operations improved or the trial informed a decision. Without that result, the reader cannot judge the value of the pilot, and the relative clause postpones the most useful information.

**How to change it**
1. Move [what changed during the pilot and the result compared with the prior routes or process] before the sharing detail, if available.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Mapped the donation intake process with the warehouse lead and removed two duplicate data-entry steps, so donations reached the shelves a day sooner.

**Problem**
[Polish] “A day sooner” gives no baseline for the intake-to-shelf improvement.

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
The forecast claim gives neither comparison baselines nor enough detail to show how the forecast was produced.

**Why**
“More than halved stockouts” and “cut inventory by nearly $2M” do not say what prior levels or period they are compared with. “Seasonal forecast” names only the broad approach, so readers cannot assess the forecasting work behind the results.

**How to change it**
Add [baseline or comparison period for each result] and, if accurate, replace “seasonal forecast” with [one specific forecasting method or seasonal adjustment used].

> more than halved stockouts

**Problem**
[Error] This bullet reports nearly the same forecasting achievement as the Crestway demand-planning bullet, making the result look duplicated.

**Why**
A reader may interpret the two claims as one achievement presented in two project entries rather than as separate work. That can undermine confidence in the distinction between the projects and the reported results.

**How to change it**
Remove this bullet or explain [how this project and its result differ from the Crestway work]; retain the achievement under only one entry if they are not separate.

## Skills

> forcasting

**Problem**
[Error] “Forcasting” is misspelled in Skills > Methods.

**Why**
A spelling error in a skills term can distract from the candidate’s qualifications and make the résumé appear less carefully checked.

**How to change it**
Replace “forcasting” with “forecasting.”

## Already working

- s2:e1:b0: Connects a specific operational change to two clearly measured outcomes.
- s2:e0:b0: Connects a specific operational change to a clear, comparable cost reduction.
- s3:e1:b0: Connects a specific warehouse change to a clear time saving, with a before-and-after measure.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b73feed5.md.

