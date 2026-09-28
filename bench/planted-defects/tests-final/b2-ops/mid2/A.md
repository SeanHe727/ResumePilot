> Here is my resume: bench/planted-defects/tests-final/b2-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the full resume’s narrative and format. Education had no bullets to review; no job description was provided for a match review.

The main changes flagged:
- Put experience in reverse chronological order: Crestway Foods before Lakeview Distribution.
- Clarify the near-identical forecasting results attributed to both Crestway Foods and the food bank project.
- Check the OEE figure of 112% and explain the relationship between the halved lead time and doubled work-in-process. Several other bullets also need a clearer outcome or more detail about the work.

The file parses cleanly as a one-page resume. The full review and entry-by-entry findings are available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 72 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 7 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> cutting stockouts from 6.2% to 2.8%

**Problem**
[Error] The Crestway and food-bank forecast bullets report nearly identical results and scale in different settings, so the achievement’s context is unclear.

**Why**
Both bullets describe seasonal forecasting for about 1,400 products or SKUs across three warehouses or distribution centers, with stockouts more than halved and inventory reduced by about $2M. A reader may wonder whether this is one achievement presented twice or two distinct projects, and may doubt the figures until the contexts agree.

**How to change it**
Clarify whether the claims describe the same achievement; if they do, retain it once with the correct context and figures, and if they do not, distinguish the settings and confirm [the figures for each project].

> Lakeview Distribution | Operations Analyst

**Problem**
[Important] The experience section is not in newest-first order.

**Why**
Lakeview, dated through January 2021, appears above Crestway, which ended in July 2025. A reader may miss the most recent and relevant experience when scanning the section.

**How to change it**
Move Crestway Foods above Lakeview Distribution in the experience section.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education appears above the work history, even though the work history carries the main story.

**Why**
The education entry precedes several years of relevant experience, delaying the section that best shows the candidate’s current professional qualifications. That weakens the resume’s opening emphasis.

**How to change it**
Move the Education section below Experience.

> Delivery Driver and Shop Assistant

**Problem**
[Polish] Greenleaf Florist takes more space than needed for a role that may not support the supply-chain or operations target.

## Greenleaf Florist | Delivery Driver and Shop Assistant | Metro City, USA | Sep 2025 - Present

> Delivered 30 to 40 arrangements a day across the city and took cash and card payments at the door.

**Problem**
[Polish] The delivery bullet gives workload but no result of the work.

> Prepared weekend wedding orders with the head florist and kept the cooler stocked and labeled.

**Problem**
[Polish] The wedding-order and cooler duties have no stated outcome.

## Lakeview Distribution | Operations Analyst | Metro City, USA | Jul 2018 - Jan 2021

> Owned the pick-path layouts for the fast-moving zone and the labor reports the shift leads used.

**Problem**
[Polish] The opening bullet describes ownership without specifying the actions or what the reports were used to do.

> Ran a time study of the returns desk; the findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
[Polish] The time-study result should lead the entry rather than follow the opening bullet.

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
[Important] The long list of unrelated duties buries the cycle-counting work and inventory-accuracy result.

**Why**
The list comes between the cycle-counting method and the rise in accuracy, so the reader cannot tell which work drove the result. A scanning reader may miss the inventory-accuracy contribution altogether.

**How to change it**
Move the cycle-counting work and accuracy result together, and cut the unrelated duties from this line; if accurate, add [how cycle counting improved inventory accuracy].

> Owned the pick-path layouts

**Problem**
[Important] The entry reads as a collection of responsibilities and results rather than a clearly ordered account of the role.

**Why**
A reader has to assemble the role’s story from separate duties and outcomes instead of seeing how the work is organized. That makes the relevant operations experience harder to scan and remember.

**How to change it**
Organize the bullets around the operational work and its results, with the clearest achievements leading; keep the facts and results already in the entry.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] The forecast method is named only as a “seasonal forecast model.”

> Set reorder points for every SKU from 18 months of daily demand and supplier lead-time data, reviewed monthly with the category managers.

**Problem**
[Polish] The reorder-point bullet does not state the effect of setting the reorder points.

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
[Polish] The scorecard bullet does not say what the delivery-window negotiations achieved.

> Raised the packaging line’s overall equipment effectiveness (OEE) from 71% to 112% by cutting changeover time and micro-stops.

**Problem**
1. [Error] Standard OEE cannot defensibly be reported as 112% against a valid ideal-cycle-time baseline.
2. [Polish] The OEE method names improvement levers but not what you changed on the line.

**Why**
1. Standard OEE uses availability, performance, and quality against an ideal-cycle-time baseline, so a result above 100% indicates a baseline or calculation problem rather than standard OEE exceeding the valid ideal rate. The stated reductions in changeovers and micro-stops do not resolve that issue.

**How to change it**
1. Validate the ideal-cycle-time baseline and component calculations, then replace “112%” with the corrected OEE; if 112% is a different metric, name that metric instead.

> Cut average order lead time through the warehouse from 10 days to 5 while holding daily throughput constant and doubling work-in-process to keep pickers busy.

**Problem**
1. [Error] The lead-time, throughput, and work-in-process figures are inconsistent if they describe the same flow and period.
2. [Polish] The explanation about throughput and work-in-process buries the concise lead-time result.

**Why**
1. Little’s Law relates average work-in-process to throughput multiplied by average time in the system. If throughput is constant, halving lead time implies lower average WIP, not double, so a reader may doubt the figures or their definitions.

**How to change it**
1. Reconcile the figures and their scopes; if they describe the same flow and period, correct the lead-time or WIP claim, and if not, specify [the distinct definitions or boundaries].

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting planned route miles 18% against the grocer’s current routes.

**Problem**
[Polish] The routing bullet names the problem type but not a specific modeling or solution choice.

> Checked the planned routes against 4 weeks of real delivery logs; planned drive times came within 5% of the actual ones.

**Problem**
[Important] The drive-time comparison does not specify whether 5% applies to each route or to an aggregate.

**Why**
Those comparisons establish different levels of predictive accuracy, so a reader cannot tell what the validation actually demonstrates. “The actual ones” also makes the comparison needlessly indirect.

**How to change it**
Replace “the actual ones” with “actual drive times” and replace “came within 5%” with [the specific route-level or aggregate comparison], if accurate.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
[Polish] The pilot bullet describes a trial but not its outcome.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Polish] The first bullet does not identify the analysis performed or what the recommendations changed.
2. [Polish] “Made recommendations” is generic and obscures the specific action.

> The donation intake process was mapped and two duplicate data-entry steps were removed, so donations reached the shelves a day sooner.

**Problem**
1. [Polish] The donation-intake result does not state the baseline for the one-day improvement.
2. [Polish] The strongest line is not the opening bullet, and its opening phrase uses passive voice.

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
1. [Important] The stockout and inventory results have no stated measurement period.
2. [Polish] The seasonal-forecast bullet names the deliverable but not the forecasting approach or key input.

**Why**
1. Without a time window, a reader cannot interpret the scope of either result. It is also unclear whether both outcomes were measured over the same period.

**How to change it**
1. Add [the measurement period for the stockout and inventory results], if both figures use the same period.

> Analyzed warehouse operations

**Problem**
[Important] The entry combines a generic recommendation statement with two operational improvements, so the project does not read as focused.

**Why**
A reader sees a broad recommendation claim alongside two concrete process and forecasting results, without a clear account of how they fit together. That makes the actual work harder to understand as one project.

**How to change it**
Keep the implemented improvement that best represents the project at the center; if the recommendation work belongs to a separate effort, separate it rather than implying that all three activities formed one project.

## Already working

- s2:e1:b2: Names the operational change and ties it to reduced dock wait time.
- s2:e2:b1: Pairs a clear cost outcome with a concise, recognizable logistics method.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-add13843.md.

