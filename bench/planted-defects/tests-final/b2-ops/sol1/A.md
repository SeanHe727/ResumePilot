> Here is my resume: bench/planted-defects/tests-final/b2-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all five entries with bullets for content and wording, plus the overall career story and file format. The degree entry has no bullets to review. No job-posting comparison ran because none was provided.

The changes to address first are:

1. **Verify conflicting claims.** The Crestway role and food-bank project appear to credit the same forecasting results to different organizations. The content review also flagged an OEE figure above the standard metric’s maximum and a lead-time claim that conflicts with the stated increase in work-in-process. Check the underlying figures before using those bullets.
2. **Fix the order and career story.** Crestway is listed after the older Lakeview role. The narrative review recommends putting the supply-chain experience ahead of the current florist role and accounting for the change in direction after July 2025.
3. **Make duties more specific.** Several bullets name responsibilities without showing what changed—particularly Lakeview’s pick-path work and the food-bank project’s opening bullet. Separate Lakeview’s cycle-counting result from the unrelated duties bundled into that line.

The PDF parsed cleanly. The full review is in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 83 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 8 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education leads the résumé even though the established work history is the stronger introduction.

**Why**
A reader reaches the degree before the operational results in your experience. Leading with Experience would put the most relevant evidence in view sooner.

**How to change it**
Move the Education section below Experience.

> Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

**Problem**
[Important] The experience order puts the older Lakeview role before Crestway and both relevant roles below Greenleaf, obscuring the analyst-to-planner progression.

**Why**
A reader has to reconstruct the progression from the dates rather than seeing it in the order of the entries. The current arrangement also puts the less relevant present role ahead of the two roles that establish your supply-chain work.

**How to change it**
Put Crestway before Lakeview. If you lead with relevant experience, place both above Greenleaf and keep all dates visible; distinguish that relevance-based order from a newest-first list.

> Delivery Driver and Shop Assistant

**Problem**
[Important] The change from Supply Chain Planner to Delivery Driver and Shop Assistant has no explanation.

**Why**
The dates show a shift in direction after July 2025. Without brief context, a reader may wonder whether it reflects a deliberate transition, interim work, or a change in target role.

**How to change it**
If useful to the roles you are seeking, add [brief, accurate context for the change in direction] near the Greenleaf entry or in an existing summary. Do not supply a reason you cannot substantiate.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
1. [Polish] The delivery count does not show how reliably the arrangements arrived on schedule.
2. [Polish] The verbs are in past tense although the role is marked Present.

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
1. [Polish] The wedding-order work does not identify the preparation step you handled.
2. [Polish] The verbs are in past tense although the role is marked Present.
3. [Polish] The cooler task does not say what it helped accomplish.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Owned the pick-path layouts for the fast-moving zone and the labor reports the shift leads used.

**Problem**
1. [Important] The layout and reporting responsibilities do not say what either improved.
2. [Polish] “Owned” describes responsibility rather than what you did to the pick-path layouts.

**Why**
1. A reader can see your remit but cannot tell what it was worth operationally. An outcome from the more consequential responsibility would give the line a reason to earn space.

**How to change it**
1. Add [the operational result of the layout or reports and, if measured, what it was measured against]. If no figure is available, name the concrete change without inventing one.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
1. [Polish] The dock-scheduling result is buried below a less outcome-focused opening bullet.
2. The dock-scheduling line gives its scope and result but not the scheduling decision you made.

**Why**
2. The reduction from 95 to 40 minutes is strong evidence of impact. Without the decision embodied in the rules, a reader cannot tell what scheduling judgment produced it.

**How to change it**
2. After “dock scheduling rules,” add [the specific scheduling decision the rules set], if you can identify it.

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
[Important] The unrelated duties separate cycle counting from its inventory-accuracy result and obscure what produced that result.

**Why**
A scanning reader may miss the rise from 91% to 98.5% or attribute it to the intervening duties. Keeping cycle counting beside its result preserves the causal connection the bullet is trying to make.

**How to change it**
Place “raised inventory record accuracy from 91% to 98.5%” immediately after “Set up cycle counting for the 2,000 highest-value locations.” Remove the intervening duties from this bullet; put any worth retaining in a separate bullet.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
1. [Important] The reorder-point bullet does not say what changed because of the new thresholds.
2. [Important] The monthly-review phrase appears to modify the data rather than the reorder points.

**Why**
1. The 18 months of data establishes the basis for the work, not its effect. A reader cannot tell whether the thresholds improved availability, inventory levels, or a different planning decision.
2. A reader may have to reread the sentence to work out what you reviewed with category managers. Naming the object of the review makes the ongoing planning work clear.

**How to change it**
1. After “Set reorder points for every SKU,” add [observed service or inventory change compared with the prior reorder points], if measured. Otherwise, name [the specific operational decision the new points enabled].
2. If the reorder points were reviewed, replace the phrase with “and reviewed them monthly with category managers.”

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
1. [Polish] The scorecard bullet shows a renegotiation but not what the new delivery windows achieved.
2. [Polish] The scorecard does not show how the five least reliable vendors were identified.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The stated OEE of 112% is impossible under the standard OEE definition.
2. [Polish] The OEE bullet names losses that fell but not the process change you made.

**Why**
1. OEE is availability × performance × quality, and each factor is capped at 100%. Cutting changeover time and micro-stops can raise OEE, but not above 100%; the figure therefore casts doubt on the measurement.

**How to change it**
1. Replace “112%” with [verified OEE, no greater than 100%]. If 112% measures something else, replace “overall equipment effectiveness (OEE)” with [the correct name of that metric].

> Cut average order lead time through the warehouse from 10 days to 5 while holding daily throughput constant and doubling work-in-process to keep pickers busy.

**Problem**
1. [Error] Halving lead time at constant throughput conflicts with the claim that work-in-process doubled.
2. [Polish] The lead-time bullet does not say what you changed in the order flow.
3. [Polish] “To keep pickers busy” gives a motive rather than a result.

**Why**
1. For a stable process measured across the same warehouse boundaries, Little’s Law says work-in-process equals throughput multiplied by lead time. At constant throughput, reducing lead time from 10 days to 5 days would halve average work-in-process, not double it; the figures or their measurement boundaries need checking.

**How to change it**
1. Check the figures and boundaries, then replace “doubling work-in-process” with [verified WIP change]. Alternatively, revise the 10-to-5-day lead-time or constant-throughput claim to match what was measured.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting planned route miles 18% against the grocer’s current routes.

**Problem**
1. [Polish] The comparison to the grocer’s current routes is awkwardly phrased.
2. The routing bullet does not show how you generated the improved routes.

**Why**
2. Modeling the 85 stops establishes the problem and the planned 18% reduction states the comparison. A reader cannot yet assess the modeling work that produced those routes.

**How to change it**
2. If accurate, add [the specific way you generated the planned routes] near “vehicle-routing problem”; do not imply a method you did not use.

> Checked the planned routes against 4 weeks of real delivery logs; planned drive times came within 5% of the actual ones.

**Problem**
1. [Polish] The 5% difference does not identify the unit or calculation behind it.
2. [Polish] “Real” adds nothing to the description of the delivery logs.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
[Polish] The pilot bullet says the routes were tried but not what happened during the pilot.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
[Important] The broad opening delays the specific contributions and does not show the analysis’s evidence or the recommendations’ outcome.

**Why**
A reader learns little from the summary beside the intake and forecasting bullets that follow it. It also leaves open what you analyzed and what came of the advice, so the entry starts with its least assessable claim.

**How to change it**
Cut this broad opening and lead with the specific intake work. If it covers separate work worth retaining, replace it with [the evidence analyzed and the outcome of the recommendations], if known.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Polish] The passive wording hides who mapped the intake process and removed the duplicate steps.
2. [Polish] The one-day result comes after the process description, where it is easier to miss.

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
1. [Error] The food-bank forecast repeats the distinctive scope and results credited to Crestway Foods, making the achievement appear misassigned.
2. “Built a seasonal forecast” does not show how seasonality entered the forecast.
3. The forecast claim appears below the generic opening instead of leading the project.

**Why**
1. Crestway’s bullet reports a seasonal forecast for 1,400 SKUs across three distribution centers, with stockouts falling from 6.2% to 2.8% and inventory falling by $1.9M. Crediting a separate food-bank project with the matching scope and nearly identical results makes a reader doubt which organization achieved them.
2. The label tells a reader what kind of forecast you claim to have built, but not the analytical step behind it. That makes the method hard to assess independently of the reported result.
3. Its stated scope and results would draw attention sooner than a broad summary. Because those figures also appear under Crestway, moving this bullet first would help only after you verify that it belongs to the food-bank project.

**How to change it**
1. If these are Crestway results, remove this bullet from the food-bank entry. Otherwise, replace its scope and results with [the food-bank project’s actual forecast scope and measured results].
2. Only if this is a separate, verified food-bank forecast, add [how seasonality was incorporated] after “seasonal forecast.” Otherwise, remove the misassigned bullet.
3. If the food-bank forecast and its results are verified and retained, move its corrected bullet to the first position. Otherwise, do not promote the duplicate claim.

## Already working

- s2:e2:b0: Connects the planning change to service and inventory outcomes across a defined SKU and distribution-center scope.
- s2:e2:b1: States the saving and the operational change that produced it in one compact line.
- s2:e1:b1: Measures the outcome against its prior processing time.

## Set aside (7)

7 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ea43d2b6.md.

