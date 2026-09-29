> Here is my resume: bench/planted-defects/tests-final/b1-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed 5 applicable entries across content and wording, plus the full narrative and format. Education was not applicable to bullet review. No job-description match was run because no posting was provided.

The most important changes are:

1. **Correct or clarify quantitative claims**
   - Lakeview: the 70%–85% forecast claim changes the MAPE population, so it is not a like-for-like comparison.
   - Crestway: clarify how OEE reached 112%; that figure is not valid under the standard definition.
   - Routing project: 120 to 90 miles is a **25%**, not 40%, reduction; 84% to 93% is a **9-percentage-point**, not 9%, increase.
   - Explain whether the project’s 18% and 40% routing reductions measure different things.

2. **Strengthen bullets that list duties without outcomes**
   - Both Greenleaf bullets describe workload or tasks but not the resulting benefit.
   - Crestway’s reorder-point bullet has no stated result.
   - The food-bank project’s recommendations and warehouse guide need an operational outcome or scope.

3. **Improve structure and career narrative**
   - Put Experience before Education.
   - List experience in reverse chronological order; Crestway should appear before Lakeview.
   - Reduce or reposition the Greenleaf role so it does not dominate the operations/supply-chain progression.
   - Put the Last-Mile Routing Study closer to the relevant supply-chain experience.
   - Remove first-person wording such as “my findings.”

The file itself is one page, parses cleanly for ATS use, and has no layout warnings. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 71 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 13 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Lakeview Distribution | Operations Analyst

**Problem**
[Important] Experience is not listed newest-first: the 2018–2021 Lakeview role appears above the more recent 2021–2025 Crestway role.

**Why**
A recruiter scanning the document expects the most recent professional experience first. The current order makes the chronology less intuitive and delays the candidate's latest relevant supply-chain work.

**How to change it**
Move Crestway Foods above Lakeview Distribution so the experience section runs from Feb 2021–Jul 2025, then Jul 2018–Jan 2021.

> B.S. in Industrial Engineering

**Problem**
[Important] Education appears before seven years of professional experience, so the professional record does not lead.

**Why**
For a candidate with substantial work history, recruiters are more likely to look first for recent accomplishments and career progression. Leading with the degree gives disproportionate prominence to older information.

**How to change it**
Move the Riverbend Polytechnic entry below Experience.

> Greenleaf Florist | Delivery Driver and Shop Assistant

**Problem**
[Important] The prominent Greenleaf Florist entry makes the career direction appear to move backward from operations and supply chain work.

**Why**
Its current placement and two bullets give a recent florist role more visual weight than the directly relevant analyst and planner roles. Without an explanation of the transition, a recruiter may question the candidate's intended direction or continuity.

**How to change it**
Shorten Greenleaf Florist to a single line or move it into a brief additional-experience treatment, unless the résumé explains the transition back to operations and supply chain work.

> Last-Mile Routing Study | Independent Project

**Problem**
[Important] The Last-Mile Routing Study is separated from the supply-chain experience it reinforces and is less prominent than the florist role.

**Why**
The project supports the candidate's operations and logistics direction through routing, simulation, and Python work. Its current placement makes that relevant evidence harder to connect with the professional record.

**How to change it**
Place the project directly after the relevant supply-chain experience, or make it more prominent within Projects.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
[Important] “Delivered 30 to 40 arrangements a day across the city” shows workload but not the result or value of the deliveries.

**Why**
A hiring reader can see the scale of the workload, but cannot tell whether deliveries were timely, accurate, reliable, or otherwise successful. The daily count is context for the contribution, not evidence that it produced a strong outcome.

**How to change it**
Keep the delivery volume if it usefully shows scale, but add or replace it with the strongest available result, such as [on-time delivery rate], [delivery accuracy rate], or [customer or business outcome] compared with [the relevant baseline].

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
1. [Important] “Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled” names duties without showing what they achieved.
2. [Important] “Prepared weekend wedding orders with the head florist” does not identify what preparation the candidate personally performed.

**Why**
1. The reader cannot tell whether the orders were completed on time, whether the cooler system reduced errors, or how the work supported the florist's operations. Without an outcome, the line reads as a list of routine responsibilities rather than evidence of contribution.
2. A reader can see that the work was collaborative but cannot identify the practical skill contributed, such as assembling, checking, staging, or organizing arrangements. The broad wording makes the candidate's responsibility difficult to assess.

**How to change it**
1. Add the strongest available outcome after the duties, such as [number of wedding orders completed], [on-time completion rate], or [reduction in missing or misplaced items], measured against [the relevant baseline] if known.
2. Replace the broad preparation wording with the most specific task personally performed, such as [assembled arrangements], [checked order contents], or [staged deliveries], if accurate.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Error] The claim that forecast accuracy rose from 70% to 85% is invalid because the MAPE calculation changed to cover only SKUs that sold every week.

**Why**
Changing the SKU population makes the before-and-after figures non-comparable; excluding intermittent sellers can improve the reported metric without improving forecasting performance. The calculation change therefore cannot support a genuine accuracy increase across the original population.

**How to change it**
Recalculate both periods using the same SKU population and report the comparable accuracy change, or say that MAPE was 85% for SKUs that sold every week without claiming that overall forecast accuracy rose from 70% to 85%. Clarify whether both figures use the same evaluation period and population.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
1. [Important] “my findings” uses a first-person pronoun, and “my findings led to a triage station” leaves the candidate's role in creating it unclear.
2. [Polish] “cut returns processing time from 3 days to 1” does not identify what summary of processing time the figures represent.
3. [Polish] The processing-time result appears only after the study and station description, slowing recognition of the strongest evidence.

**Why**
1. The pronoun breaks the résumé's otherwise impersonal style. The causal wording also risks overstating or understating the candidate's contribution because it does not distinguish between informing, designing, or implementing the station.

**How to change it**
1. Change “my findings” to “findings” and use “informed the creation of a triage station” if that accurately reflects the work. Keep the wording limited to the candidate's actual role.

> Wrote the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
[Polish] The measurable trailer-wait reduction is buried after the scheduling rules and carrier count.

> Set up cycle counting for the 2,000 highest-value locations, raising inventory record accuracy from 91% to 98.5% within a year.

**Problem**
[Polish] “Set up” is generic, and the inventory-accuracy improvement is placed after the process description.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
1. [Important] “Set reorder points for every SKU” states the task and scale but not what changed as a result.
2. [Polish] “from 18 months of daily demand and supplier lead-time data” makes the source of the reorder points less clear than “using” that data.

**Why**
1. A reader can see the planning responsibility, but cannot tell whether it reduced stockouts, excess inventory, planner effort, or another problem. The line therefore shows activity without demonstrated value.

**How to change it**
1. Add the single strongest measured outcome after the review cadence, such as [change in stockouts, inventory, service level, or planner workload] measured against [the prior process or baseline period].

> Scoring 40 vendors weekly on on-time delivery, fill rate, lead-time variance and invoice accuracy, and sharing the scorecards with buyers before each quarterly review, raised on-time inbound deliveries from 81% to 93%.

**Problem**
[Polish] The vendor-scorecard result is delayed by a participial opening, four measures, and two timing clauses.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] The claim that OEE rose from 71% to 112% is invalid under the standard OEE definition, and the line does not establish what the 112% figure measures.
2. [Polish] “cutting changeover time and micro-stops” names loss categories rather than the actions that delivered the improvement.

**Why**
1. OEE is calculated as availability × performance × quality, with each component capped at 100%, so standard OEE cannot exceed 100%. A value of 112% indicates an error in the calculation, denominator, or metric definition, leaving the comparison uninterpretable.

**How to change it**
1. Report the actual OEE value, which must be no higher than 100%; if 112% is a different productivity or performance metric, relabel it. If accurate, identify the metric basis or replace it with [the correctly defined OEE result or underlying availability, performance, and quality measure].

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
[Polish] “which the team still uses for promotions” shows adoption but not what the guide improved.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting planned route miles 18% against the grocer’s current routes.

**Problem**
1. [Polish] “cutting planned route miles 18% against the grocer’s current routes” gives a percentage without the baseline miles or comparison period.
2. [Polish] “Modeled ... as a vehicle-routing problem” identifies the problem type but not the technical work used to solve it.

> Cut average route length from 120 to 90 miles, a 40% reduction, by solving the routing problem with customer time windows.

**Problem**
1. [Error] The claim that average route length fell from 120 to 90 miles is arithmetically wrong when stated as a 40% reduction, and it conflicts with the separate 18% routing reduction unless the measures are different.
2. [Polish] “by solving the routing problem with customer time windows” names a constraint but not the solving technique or specific modeling action.

**Why**
1. The reduction is 30 miles, and 30 divided by the original 120 miles equals 25%; a 40% reduction from 120 miles would result in 72 miles. Alongside the 18% figure in the preceding bullet, the error makes the project's core result look unreliable.

**How to change it**
1. State that average route length fell from 120 to 90 miles, a 25% reduction. If the 18% and 25% results measure different things, identify those measures; otherwise make the metric and percentage consistent.

> Raised on-time deliveries by 9% in simulation, from 84% to 93%, by adding customer time windows to the routing model.

**Problem**
1. [Error] “Raised on-time deliveries by 9%” misstates the change from 84% to 93%; the figures show a 9-percentage-point increase.
2. [Important] “in simulation” does not state the simulation scope or what counted as an on-time delivery.
3. [Polish] “By adding customer time windows” repeats the previous bullet's method without distinguishing the additional work behind the on-time-delivery result.

**Why**
1. The difference between the two percentages is nine percentage points, while the relative increase from the 84% baseline is approximately 10.7%. The current wording makes the result mathematically ambiguous and can undermine confidence in the rest of the analysis.
2. Without the number of simulated days or stops and the timing criterion, a reader cannot judge how much evidence supports the service-level result. The project claim therefore appears less reproducible and less meaningful.

**How to change it**
1. Change the claim to “on-time deliveries rose by 9 percentage points, from 84% to 93%,” or to approximately 10.7% relative to baseline.
2. Replace “in simulation” with [number of simulated delivery days or stops], and define on-time with [the delivery-window criterion used].

> cutting planned route miles 18%

**Problem**
[Important] The first two bullets repeat the routing-distance result rather than clearly separating primary impact from distinct technical evidence.

**Why**
Both bullets describe reducing planned route miles or route length, so the reader may see duplicate evidence instead of two accomplishments. The differing 18% and 40% figures also make the project results look inconsistent until the measures are explained.

**How to change it**
Retain one bullet as the primary routing result and use the other only if it adds distinct technical evidence; clarify whether the measures are different and make the metric and percentage consistent.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Important] “Analyzed warehouse operations” and “made recommendations” do not show what analysis was performed or what operational change resulted.
2. [Important] “Analyzed warehouse operations” and “made recommendations” provide no measure of the problem, improvement, or scope.
3. [Polish] “Made recommendations” is vague, and “to the food bank’s leadership” adds context without clarifying the work.

**Why**
1. A reader cannot tell whether the work influenced warehouse performance or remained an advisory deliverable. The generic wording also gives little evidence of the consulting or Excel skill behind the recommendation.
2. Without one anchor, the reader cannot judge how substantial the analysis was or whether it produced a meaningful result. The line therefore describes activity but not scale or demonstrated value.

**How to change it**
1. Replace the generic analysis wording with the main approach used, such as [process mapping], [time-study analysis], or [Excel-based workflow analysis], and replace the recommendation-only ending with [specific warehouse improvement caused by the recommendations], if accurate.
2. Add the single strongest measure, such as [reduction in warehouse processing time measured against the pre-project process] or [number of process areas assessed], if accurate.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Polish] “Donations reached the shelves a day sooner” states an improvement without identifying its comparison point.
2. [Polish] The passive wording in “The donation intake process was mapped and two duplicate data-entry steps were removed” obscures the candidate's actions.

> Wrote a slotting guide that the volunteer coordinators used to re-slot the warehouse again after its spring expansion.

**Problem**
1. [Polish] “Used to re-slot the warehouse again after its spring expansion” shows adoption but not the improvement produced, and “again” is redundant.
2. [Polish] “The volunteer coordinators used” indicates adoption but not how broadly or effectively the guide was applied.

## Already working

- s2:e2:b0: Combines scope, method, service improvement, and financial impact in one line.
- s2:e2:b1: States the business outcome before the operational method.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-3046527e.md.

