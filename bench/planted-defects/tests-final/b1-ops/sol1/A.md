> Here is my resume: bench/planted-defects/tests-final/b1-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed: content 5/5 eligible entries; wording 5/5; narrative and format ran. The degree has no bullets to review. Job-description matching did not run because no posting was provided.

Change these first:

1. **Correct or verify the figures.** The routing project says 120 to 90 miles is a 40% reduction; those figures imply 25%. Its 84% to 93% on-time result is a **9-percentage-point** increase. The Crestway bullet’s 112% OEE also needs checking against the metric you actually measured.
2. **Separate measurement changes from performance gains.** Lakeview’s forecast-accuracy bullet attributes a rise from 70% to 85% to changing which SKUs the MAPE calculation covers. Establish whether the figures use the same SKU group before presenting them as an improvement.
3. **Put the supply-chain story in order.** Move Crestway above Lakeview and Education below the work and projects. The current florist role follows the planning role without explaining the change in direction; decide how you want to frame that transition.

The PDF parsed cleanly. The full findings and bullet-by-bullet priorities are in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 85 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 8 important, 16 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> cutting planned route miles 18%

**Problem**
[Error] The routing study presents different reductions without saying whether they use the same baseline and scenario.

**Why**
One bullet reports 18% fewer planned route miles against current routes, while another reports a reduction in average route length. A reader cannot tell whether these describe the same result or two distinct comparisons, even after the average-length arithmetic is corrected.

**How to change it**
If both bullets describe the same comparison, keep one consistently calculated figure. If they describe different comparisons, label [the baseline and scenario for each] beside its figure.

> Jul 2018 - Jan 2021

**Problem**
[Important] The Experience entries are not ordered newest-first.

**Why**
Lakeview appears above the later Crestway role, so a reader reaches older operations work before the more recent supply-chain planning experience. That delays the experience most relevant to your recent career.

**How to change it**
Move the Crestway Foods entry above the Lakeview Distribution entry.

> Delivery Driver and Shop Assistant

**Problem**
[Important] The move from Supply Chain Planner to Delivery Driver and Shop Assistant is unexplained.

**Why**
The interval between the roles is routine, but the shift to a less senior, different kind of work may leave a reader wondering how it fits your direction. A brief, accurate context could prevent that question from overshadowing the supply-chain experience.

**How to change it**
If relevant to the roles you seek, add [a brief, accurate explanation of the move] near the Greenleaf entry; do not imply a reason the résumé cannot support.

> B.S. in Industrial Engineering

**Problem**
[Important] Education appears before the recent experience and projects.

**Why**
Opening with the 2014–2018 degree delays the supply-chain work that shows what you have done more recently. Moving Education down lets the professional evidence lead.

**How to change it**
Move Education below Experience and Projects.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
[Polish] The daily delivery volume gives no delivery outcome.

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
[Polish] The wedding-order preparation does not say whether orders were ready when needed.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Error] The claimed rise in forecast accuracy is an error: narrowing the SKUs covered by MAPE changes the reported population, not the forecasts.

**Why**
An operations reader cannot treat 70% and 85% as an improvement without knowing they were calculated for the same SKU group. As written, the line invites doubt about whether planning improved at all or only the reported measure changed.

**How to change it**
Replace “Raised forecast accuracy from 70% to 85%” with a description of changed MAPE reporting: under the weekly-selling-SKU definition, reported forecast accuracy was 85%. Only claim a before-and-after improvement if you have [figures calculated for the same SKU group]; if a planning decision improved, name [that outcome] separately.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Important] The returns result is buried behind the study and the triage station.
2. [Polish] “Returns processing time” does not identify whether the measure is elapsed turnaround or staff handling time.
3. [Polish] “My findings” introduces first person into the résumé line.

**Why**
1. A scanning reader must pass through two steps before finding the reduction from 3 days to 1. Leading with that result makes the value of the time study immediately apparent.

**How to change it**
1. Move the reduction from 3 days to 1 to the start, then give the time study and triage station as its explanation.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
[Polish] “Dock scheduling rules” does not show what scheduling decision you made.

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
“Set up cycle counting” leaves your implementation decision unspecified.

**Why**
The accuracy gain shows that the work mattered, but the reader cannot tell what you chose or changed in setting up the counts. That makes a strong result less revealing of your inventory-control skill.

**How to change it**
If you can substantiate it, replace “Set up cycle counting” with [the specific cycle-counting decision you made]; otherwise keep the current claim rather than inventing a method.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] “A seasonal forecast model” does not identify what changed in your forecasting approach.

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
1. [Polish] The reorder-point bullet says what you set but not what the new points achieved.
2. [Polish] “Reviewed monthly with the category managers” does not clearly say who reviewed the reorder points.

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
[Important] The improvement in on-time inbound deliveries is buried after the scorecard process.

**Why**
A scanning reader may miss the 81%-to-93% result before reaching the end of the long line. Putting it first lets the weekly vendor scoring explain an outcome the reader already understands.

**How to change it**
Move the 81%-to-93% improvement near the start, followed by the weekly vendor scorecards. If space is tight, cut the less relevant scorecard measures.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The claimed OEE of 112% is impossible under the standard definition of overall equipment effectiveness.
2. [Polish] “By cutting changeover time and micro-stops” names what improved but not the intervention you made.

**Why**
1. OEE combines availability, performance, and quality, each capped at 100%, so cutting changeover time and micro-stops cannot produce OEE above 100%. The figure puts the credibility of an otherwise concrete packaging result at risk.

**How to change it**
1. Replace “112%” with [the correctly calculated final OEE] if it confirms a rise from 71%. If 112% measures something else, replace “OEE” with [the metric actually measured] and state its comparison accurately.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
[Polish] “Which the team still uses for promotions” does not identify whether the team uses the guide or the workflow.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] The stated drop from 120 to 90 miles is a 25% reduction, not a 40% reduction.
2. “Cut average route length” does not make clear that this is a modeled result rather than a change to deliveries actually made.
3. “Solving the routing problem with customer time windows” names a constraint but not how you solved the problem.

**Why**
1. The difference is 30 miles, and 30 divided by the original 120 is 25%. A reader checking the calculation will doubt the route analysis if the percentage remains wrong.
2. The project is a routing study, so a reader needs to know whether the shorter routes were planned or deployed. Leaving that distinction unstated risks giving the result more operational weight than the project supports.
3. Time windows tell the reader what the routes had to respect. They do not reveal the modeling or solution choice behind the mileage result, limiting what this Python project shows about your technical work.

**How to change it**
1. If the mileages are correct, replace “40%” with “25%”; keep “from 120 to 90 miles” as the basis of the calculation.
2. If these were modeled routes, replace “Cut average route length” with “Reduced modeled average route length”; claim an operational reduction only if [the routes were deployed and measured].
3. If you can name it accurately, add [the solution method used] beside “customer time windows”; otherwise leave the method unspecified rather than implying a particular algorithm.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
1. [Error] The change from 84% to 93% is a 9-percentage-point increase, not a 9% increase.
2. [Polish] The 84% starting rate does not identify the simulation scenario used as the baseline.

**Why**
1. Subtracting the two on-time rates gives 9 percentage points; the relative increase over 84% is about 10.7%. Using the wrong unit makes the simulation result appear imprecise.

**How to change it**
1. Replace “by 9% in simulation” with “by 9 percentage points in simulation,” retaining the 84%-to-93% rates.

> cutting planned route miles 18%

**Problem**
[Important] The two routing bullets repeat the route-mile reduction rather than giving the project two distinct results.

**Why**
Both ask the reader to credit a reduction in miles from the routing model. Keeping one account frees the other bullet to carry a different substantiated finding and prevents repetition from obscuring the project’s scope.

**How to change it**
Keep one route-mile result. Cut the other route-mile account unless you can replace it with [a distinct, substantiated project result].

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Polish] “Analyzed warehouse operations” does not identify the process or evidence you examined.
2. [Polish] “Made recommendations” neither names the advice nor says what happened to it.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Important] The one-day improvement is buried at the end of the donation-intake bullet.
2. [Important] The donation-intake result is not the entry’s opening bullet.
3. [Polish] The passive verbs hide who mapped the process and removed the duplicate steps.

**Why**
1. A scanning reader encounters the mapping and data-entry steps before discovering what they achieved. Leading with the faster shelf arrival makes the reason for those steps clear immediately.
2. It is the clearest measured outcome in the entry, whereas the current opening bullet only says that you analyzed operations and made recommendations. Putting the result first gives the volunteer work a stronger first impression.

**How to change it**
1. Move “donations reached the shelves a day sooner” to the start of this bullet, then give the removed duplicate steps as the explanation.
2. Move this bullet above the general warehouse-analysis bullet.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] “Slotting guide” identifies the deliverable but not the guidance it contained.
2. [Polish] “Re-slot the warehouse again” repeats the idea of doing the slotting over.

## Already working

- s2:e2:b1: Pairs a comparable unit-cost result with the operational change that produced it.
- s3:e0:b0: Connects a defined set of delivery stops to a measured result against current routes.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-aea649f8.md.

