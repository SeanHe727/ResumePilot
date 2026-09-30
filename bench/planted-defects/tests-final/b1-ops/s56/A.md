> Here is my resume: bench/planted-defects/tests-final/b1-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 bullet-bearing entries for content and wording; narrative and format checks also ran. Education required no bullet review; job-description matching did not run because no posting was provided.

The main changes identified:

1. **Correct conflicting or misleading metrics.**
   - Last-Mile Routing reports both an 18% and 40% mileage reduction; 120 to 90 miles is actually 25%.
   - 84% to 93% is **9 percentage points**, not 9%.
   - OEE of 112% is not valid under the standard definition.
   - The Lakeview forecast claim changes the evaluated SKU population rather than demonstrating improved forecasts.

2. **Fix the resume’s sequence and emphasis.**
   - Order Experience as Greenleaf, Crestway, then Lakeview.
   - Move Education below Experience and Projects.
   - Reduce Greenleaf to one line so the less-relevant current role does not outweigh the supply-chain work.

3. **Make weaker bullets more specific.**
   - Add outcomes or operational effects to Greenleaf, Crestway reorder-point work, and the food-bank project.
   - Explain methods behind routing, forecasting, scheduling, and slotting claims.
   - Use present tense for the current Greenleaf role, remove “my,” and start more bullets with direct action verbs.

The file itself is one page, consistent, and parses cleanly for ATS use. The complete findings are available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 75 · wording 89 · narrative 66

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 10 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Delivery Driver and Shop Assistant

**Problem**
[Important] The move from “Supply Chain Planner” to “Delivery Driver and Shop Assistant” is an unexplained step backward in relevance and seniority.

**Why**
The dates show the planning role ending in July 2025 and the florist role beginning in September 2025. Without context, a recruiter may question the transition instead of focusing on the candidate’s seven years of operations and supply-chain experience.

**How to change it**
Add a brief [accurate context for the transition] beside the current role or in a short summary, while keeping the supply-chain target explicit.

> Jul 2018 - Jan 2021

**Problem**
[Important] Experience is not ordered newest first.

**Why**
The 2018–2021 Lakeview role appears above the 2021–2025 Crestway role. This hides the progression from Operations Analyst to Supply Chain Planner and forces the reader to reconstruct the chronology.

**How to change it**
Move the Crestway Foods entry above Lakeview Distribution, producing the order Greenleaf Florist, Crestway Foods, then Lakeview Distribution.

> Greenleaf Florist

**Problem**
[Important] The Greenleaf Florist role receives too much visual weight relative to the operations and supply-chain roles.

**Why**
The current job usefully preserves employment continuity, but two bullets make it appear equally important to the more relevant analyst and planner experience. That emphasis can distract from the intended career narrative.

**How to change it**
Condense the Greenleaf responsibilities into one short bullet, retaining the strongest evidence of current workload and responsibility.

> B.S. in Industrial Engineering

**Problem**
[Important] Leading with the 2018 degree understates the more recent professional record.

**Why**
After seven years of relevant operations and supply-chain work, recruiters are more likely to prioritize recent experience and projects. Opening with education delays the strongest evidence of current capability.

**How to change it**
Move the Education section below Experience and Projects.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
1. [Polish] “Delivered” and “took” use past tense for a current role.
2. The workload figure in “Delivered 30 to 40 arrangements a day” has no result for delivery timeliness or accuracy.

**Why**
2. A reader can see the volume handled but not whether the deliveries were completed reliably. That makes the line describe workload rather than performance.

**How to change it**
2. After the volume, add [on-time delivery rate, delivery accuracy, or another verified service result].

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
1. [Polish] “Prepared” and “kept” use past tense for a current role.
2. “Prepared weekend wedding orders” does not identify the preparation the candidate personally performed.
3. “kept the cooler stocked and labeled” states an activity without showing its effect.

**Why**
2. A reader cannot tell whether this involved assembly, staging, quality checks, paperwork, or another task. The ambiguity hides the level of responsibility in the shop.
3. The reader cannot tell whether this work improved order readiness, accuracy, or product freshness. Without that connection, it reads as routine maintenance rather than useful operational support.

**How to change it**
2. Replace “Prepared” with the specific actions performed, such as [actual order-preparation tasks].
3. Add [verified effect on order readiness, accuracy, or freshness] after the activity.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
1. [Error] “Raised forecast accuracy from 70% to 85%” incorrectly presents a change in the evaluated SKU population as an improvement in the forecasts.
2. [Polish] “MAPE” is unexplained jargon on its first use.

**Why**
1. Excluding intermittent-demand SKUs can mechanically improve the reported metric because those items are often harder to forecast. The 70% and 85% figures are not comparable unless both were calculated over the same population, so the current claim risks undermining trust in the analysis.

**How to change it**
1. If the forecasts did not change, replace the claim with “Changed MAPE reporting to cover only SKUs that sold every week, increasing reported accuracy for that subset from 70% to 85%,” and add [planning or reporting benefit]. If a separate forecasting change improved performance, name that change instead.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Error] “from 3 days to 1” incorrectly omits the unit after the second number.
2. [Polish] “my findings led to” uses a personal pronoun and indirectly attributes the outcome.

**Why**
1. The reader can infer the missing unit, but the comparison is grammatically incomplete. Repeating the unit makes the result precise and immediately readable.

**How to change it**
1. Replace “from 3 days to 1” with “from 3 days to 1 day.”

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
[Polish] “dock scheduling rules” does not identify what changed in carrier scheduling.

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
[Polish] “Set up cycle counting” does not show how the program was structured or controlled.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] “a seasonal forecast model” does not identify the forecasting technique or treatment of seasonality.

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
1. [Important] “Set reorder points for every SKU” has no resulting change in service, inventory, or replenishment performance.
2. [Polish] “reviewed monthly with the category managers” does not clearly identify what was reviewed or who reviewed it.

**Why**
1. Without an outcome, the work can be read as routine parameter maintenance rather than a planning improvement. A comparison with the prior policy would show whether the analysis created operational value.

**How to change it**
1. After the monthly review clause, add [change in stockout rate, inventory, or replenishment performance versus the prior reorder-point policy].

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
[Important] The key result in “raised on-time inbound deliveries from 81% to 93%” is buried after a long method-led opening.

**Why**
A scanning reader may register scorecard administration without reaching the 12-point delivery improvement. The gerund opening also fails to give an ended role a direct past-tense action.

**How to change it**
Move “raised on-time inbound deliveries from 81% to 93%” to the beginning, capitalize “Raised,” and place the vendor scoring and scorecard sharing after it as the method.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The claim that OEE rose “from 71% to 112%” is impossible under the standard definition of overall equipment effectiveness.
2. [Important] “by cutting changeover time and micro-stops” states what decreased rather than how the reductions were achieved.

**Why**
1. OEE equals availability × performance × quality, and each component is capped at 100%, so OEE itself cannot exceed 100%. Although reducing changeovers and micro-stops can improve OEE, reporting 112% as OEE creates a conspicuous technical credibility problem.
2. The reader cannot identify the process-improvement technique or determine what the candidate personally changed. That omission hides the operational skill behind the result.

**How to change it**
1. Replace “112%” with [correct OEE, no more than 100%]. If 112% is an output index or performance against a target, replace “OEE” with the correct metric name instead.
2. Replace the phrase with “through [specific operational change that reduced changeovers or micro-stops].”

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
[Polish] “which the team still uses for promotions” shows adoption but not the benefit of using the workflow.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting planned route miles 18% against the grocer’s current routes.

**Problem**
1. [Error] “cutting planned route miles 18% against” is grammatically incorrect.
2. “Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem” identifies the formulation but not how optimized routes were produced.
3. The 18% mileage result is less visible than the method-led opening.

**Why**
1. The construction omits “by” before the percentage and uses “against” awkwardly for a comparison. The wording makes an otherwise clear quantified result harder to read.
2. A technical reader cannot tell whether the project used a solver, heuristic, or another optimization approach. That missing detail limits the evidence of Python and operations-research skill.
3. A scanning recruiter reaches the project setup before discovering its main result. Leading with the reduction would establish value immediately and leave the model formulation as supporting evidence.

**How to change it**
1. Replace the phrase with “cutting planned route mileage by 18% versus.”
2. Add the [optimization method, solver, or heuristic actually used] after “vehicle-routing problem.”
3. Move the 18% mileage reduction to the beginning and place the modeling description after it.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] “from 120 to 90 miles, a 40% reduction” is arithmetically wrong.
2. “by solving the routing problem with customer time windows” names a constraint but not the optimization method.

**Why**
1. The decrease is 30 miles, and 30 divided by the original 120 miles is 25%. Leaving the incorrect percentage in a quantitative optimization project would directly damage confidence in the analysis.
2. Customer time windows define part of the problem rather than explaining how it was solved. A technical reader therefore cannot assess the sophistication or reproducibility of the work.

**How to change it**
1. Replace “40%” with “25%,” unless either mileage figure is incorrect and should instead be corrected from the project data.
2. Add the [actual optimization method, solver, or heuristic] used to solve the time-window-constrained problem.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
1. [Error] “by 9% in simulation, from 84% to 93%” incorrectly confuses percent with percentage points.
2. “by adding customer time windows to the routing model” does not explain the technical implementation.

**Why**
1. An increase from 84% to 93% is 9 percentage points, not 9%; as a relative increase, it is approximately 10.7%. Using the correct unit is especially important in a project built around quantitative results.
2. The reader knows which constraint was added but not how it was represented or enforced in the model. That leaves the claimed simulation improvement weakly connected to the candidate’s technical work.

**How to change it**
1. Replace “by 9%” with “by 9 percentage points.”
2. Add [how the time windows were represented or enforced in the model], if that implementation was completed.

> cutting planned route miles 18%

**Problem**
[Error] The project reports the same route-mileage achievement twice and gives conflicting reductions of 18% and 40%.

**Why**
A reader will see both bullets as results from the same routing model and will not know whether they represent different scenarios. The repetition wastes space, while the inconsistent percentages weaken confidence in the project’s calculations.

**How to change it**
Retain one mileage result and remove the other. If the figures represent different scenarios, label each with [scenario] and use the correct reduction for each.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Important] “made recommendations to the food bank’s leadership” stops at delivering advice rather than showing what was adopted or improved.
2. [Polish] “Analyzed warehouse operations” is too broad to show what was examined or how Excel supported the analysis.
3. [Polish] “made recommendations to” is weaker and less direct than a single action verb.

**Why**
1. A recommendation alone does not demonstrate that the analysis influenced an operational decision. Without an adopted action or result, the reader cannot judge the project’s value.

**How to change it**
1. Replace the general phrase with [specific recommendation leadership adopted] and [resulting operational change]. If nothing was implemented, identify [concrete decision the analysis supported].

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Important] The strongest result, “donations reached the shelves a day sooner,” is not the entry’s opening bullet.
2. [Important] “The donation intake process was mapped and two duplicate data-entry steps were removed” uses passive voice.

**Why**
1. The current first bullet is broad and outcome-free, while this line shows a specific process change and a measured operational benefit. Moving it first would give a scanning reader immediate evidence of impact.
2. The passive construction hides who performed the mapping and removal. Leading with the actions makes the candidate’s contribution explicit and more consistent with résumé style.

**How to change it**
1. Move this bullet above “Analyzed warehouse operations and made recommendations to the food bank’s leadership.”
2. Replace the passive opening with “Mapped the donation intake process and removed two duplicate data-entry steps.”

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] “Wrote a slotting guide” does not show how locations were assigned or what analysis informed the guide.
2. [Polish] “re-slot the warehouse again” is redundant.
3. [Polish] “that the volunteer coordinators used to” is unnecessarily wordy.

## Already working

- s2:e2:b1: Pairs a judgeable unit-cost improvement with a clear implementation method.

## Set aside (7)

7 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8426bad4.md.

