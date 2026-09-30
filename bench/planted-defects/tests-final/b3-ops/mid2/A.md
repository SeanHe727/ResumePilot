> Here is my resume: bench/planted-defects/tests-final/b3-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all **4 experience/project entries** for content and wording, plus the full resume’s narrative and format. Education had no bullets to review. **No job-description match was run** because no posting was provided.

The main changes to address:
- **Clarify the closely matching achievements** in the Crestway role and food-bank project: both cite about 1,400 items, three sites, and nearly $2M in inventory reduction alongside stockout improvements. Explain whether these are separate efforts and make the scope and attribution clear.
- **Make results easier to assess:** add comparison periods or baselines where unclear, and explain what changed or improved after planning, analysis, or recommendations.
- **Fix presentation inconsistencies:** use past tense for the ended Lakeview role, remove the first-person pronoun, move Education below your experience, and address the 11-month gap after graduation. The narrative review also flagged SAP as listed without supporting experience on the page.

The file parses cleanly and is one page. The full report is available in **`/report --full`**.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 76 · wording 85 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 16 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> cut inventory by nearly $2M

**Problem**
[Error] The Crestway and Regional Food Bank entries present closely matching figures and outcomes that look like the same work reported twice.

**Why**
Both entries cite 1,400 products or SKUs, three warehouses or distribution centers, reduced stockouts, and nearly $2M less inventory. A reader may doubt whether these are separate achievements or whether the work has been attributed consistently.

**How to change it**
Clarify whether the projects were separate; if so, distinguish their scope and results, and if not, make the entries agree and attribute the work consistently.

> Riverbend Polytechnic | B.S. in Industrial Engineering

**Problem**
[Important] Education appears before the work history despite several years of experience.

**Why**
The relevant work history is not the first thing a reader sees. That makes the résumé’s most directly relevant experience less prominent.

**How to change it**
Move Education to the end, after Experience, Projects, and Skills.

> Sep 2014 - May 2018

**Problem**
[Polish] The résumé leaves an 11-month gap between the degree and the first listed role unexplained.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
1. [Important] The inventory reduction does not identify the inventory measure or comparison period.
2. [Important] The stockout and inventory results come after the method and scope, delaying the impact for a scanning reader.

**Why**
1. A reader can see the size of the change but cannot tell whether it refers to on-hand inventory value, inventory costs, or another measure. Without that context, the result is harder to interpret and verify.
2. The reader has to reach the end of the bullet to see the improvements. Moving the results forward would make the impact easier to spot without changing the claims.

**How to change it**
1. After “$1.9M,” specify the measure and comparison period, such as [on-hand inventory value compared with the prior year], if accurate.
2. Move the stockout and inventory results closer to the beginning of the bullet, before the method and scope.

> Reduced freight costs by 15% by consolidating supplier pickups into regional milk runs.

**Problem**
[Polish] The freight-cost reduction has no comparison period or baseline.

> Set safety stock for all 1,400 SKUs with the economic order quantity (EOQ) formula, balancing ordering and holding costs.

**Problem**
1. [Error] EOQ does not calculate safety stock.
2. [Important] The safety-stock work has no stated outcome.
3. [Polish] “Balancing ordering and holding costs” is redundant after naming the EOQ formula and adds no clarity.

**Why**
1. EOQ estimates order quantity by balancing ordering and cycle-stock holding costs. Safety stock instead depends on demand and lead-time uncertainty and a chosen service level, so attributing its calculation to EOQ is technically incorrect.
2. The line shows that the work covered all 1,400 SKUs, but not what it changed for the business. A reader cannot tell whether it affected availability, excess inventory, or another planning outcome.

**How to change it**
1. If EOQ was used, describe it as setting order quantities; name the separate safety-stock method actually used [method], or remove the EOQ claim.
2. After the safety-stock action, add [the resulting change in stockouts, service level, or inventory compared with the prior policy], if available.

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
1. [Important] The line does not say what changed after buyers renegotiated delivery windows.
2. [Polish] “Which buyers used to” makes the scorecard’s purpose wordy.

**Why**
1. The scorecard’s use in a decision is clear, but a reader cannot assess whether supplier reliability or delivery performance improved. A post-renegotiation outcome would show the value of the work.

**How to change it**
1. After “five least reliable,” add [the change in on-time delivery or another tracked supplier outcome], if available.

> Led the monthly sales and operations planning meeting, reconciling the sales forecast with plant capacity for the finance and production teams.

**Problem**
[Important] The meeting’s reconciliation work has no stated outcome.

**Why**
A reader can picture the planning activity, but not what it enabled for finance or production. Without a decision or planning result, it is difficult to distinguish the work from simply convening the meeting.

**How to change it**
After “production teams,” add [the resulting change in production plans, capacity gaps resolved, or forecast alignment], if accurate.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
1. [Polish] The guide’s continued use for promotions is not tied to a stated benefit.
2. [Polish] “Which the team still uses for promotions” is a wordy add-on.

## Lakeview Distribution | Operations Analyst | Metro City, USA | May 2019 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Important] The accuracy figures are not clearly comparable to the weekly-selling-SKU measure.

**Why**
A reader cannot tell whether both accuracy figures were calculated on the same SKU population. If the populations differ, the increase is harder to interpret as an improvement.

**How to change it**
Clarify whether both figures use the same SKU set and period; if they do not, add [accuracy on a consistently measured SKU set or another comparable benchmark].

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
[Polish] The first-person pronoun “my” does not belong in this résumé bullet.

> Writes the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
1. [Error] “Writes” is present tense even though the role ended in January 2021.
2. [Important] The dock-scheduling bullet does not specify what the rules changed.

**Why**
1. As written, it suggests the rule-writing is ongoing despite the dated role being in the past. That conflicts with the entry’s timeline and tense pattern.
2. The reader sees the scope of the work and the reduced wait, but not the scheduling decision or process change behind that result. Naming the change would make the connection between the rules and the outcome clearer.

**How to change it**
1. Change “Writes” to “Wrote” if this describes work done in the role.
2. After “12 carriers,” add [the key scheduling rule or change that reduced trailer wait], if accurate.

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
[Important] The inventory-accuracy result is buried after a long list of unrelated duties, and the bullet does not lead the entry.

**Why**
The list delays the 91%-to-98.5% result and makes it harder to see which work it belongs to. The bullet’s cycle-counting result is its strongest point, so its current position and the intervening duties weaken its impact.

**How to change it**
Move the result beside the cycle-counting work, cut unrelated duties from this bullet or keep only a duty directly tied to the accuracy gain, and move this bullet to the start of the entry.

> while also covering night-shift supervision

**Problem**
[Important] The final bullet bundles cycle counting with several separate supervisory and administrative duties, making the entry read like a task list.

**Why**
The entry has several relevant operations outcomes, but the cluster of unrelated duties dilutes the cycle-counting result. That makes the overall story less focused.

**How to change it**
Remove the unrelated duties from this bullet or place each relevant duty in a separate bullet where it supports a clear result.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Modeled a regional grocer’s 85 daily delivery stops as a vehicle-routing problem, cutting planned route miles 18% against the grocer’s current routes.

**Problem**
[Polish] The routing-problem bullet names the problem but not how it was solved.

> Checked the planned routes against 4 weeks of real delivery logs; planned drive times came within 5% of the actual ones.

**Problem**
[Polish] “The actual ones” makes the drive-time comparison imprecise.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
[Important] The route pilot has no stated outcome.

**Why**
The truck count and pilot duration show scope, but not whether the pilot confirmed the model’s value or changed dispatch operations. Without a measured result, a reader cannot assess its impact.

**How to change it**
Replace the pilot-scope wording with [the measured pilot outcome and its comparison, such as actual route miles versus current routes], if available.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Important] The recommendation bullet gives an output but no result.
2. [Polish] “Analyzed warehouse operations” does not identify the analysis performed.
3. [Polish] “Made recommendations” does not show the action taken to develop them.

**Why**
1. A reader cannot tell whether leadership acted on the recommendations or what operational change followed. That leaves the value of the work unclear.

**How to change it**
1. After the recommendations, add [whether one was adopted and the resulting change], if applicable.

> Mapped the donation intake process with the warehouse lead and removed two duplicate data-entry steps, so donations reached the shelves a day sooner.

**Problem**
1. [Important] “A day sooner” does not state the comparison point.
2. [Important] The result comes after the process, so a scanning reader may miss the impact.

**Why**
1. The reader can see the size of the time improvement but not what it was measured against. Naming the prior intake-to-shelf time or comparison period would make the result easier to judge.
2. The intake-to-shelf improvement is the outcome, but it appears only after the process details. Bringing it forward would make the result easier to spot.

**How to change it**
1. Clarify [the prior intake-to-shelf time or comparison period], if known.
2. Move “donations reached the shelves a day sooner” closer to the beginning of the bullet.

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
1. [Important] The stockout and inventory reductions do not specify the stockout measure or comparison period.
2. [Important] The results are buried after the product and warehouse counts, and this is not the entry’s opening bullet.
3. [Polish] The seasonal-forecast bullet does not identify the forecasting approach.

**Why**
1. Without that context, a reader cannot tell what was counted as a stockout or over what period the reductions were measured. That makes the outcomes harder to assess.
2. The stockout and inventory improvements are the strongest result, but the reader reaches them only after the scope details. Leading with the results and moving this bullet to the start of the entry would make its impact easier to see.

**How to change it**
1. Clarify [the stockout measure and comparison period], if known.
2. Move the results closer to the beginning of the bullet, before the product and warehouse counts, and move this bullet to the start of the entry.

> made recommendations to the food bank’s leadership

**Problem**
[Polish] The general recommendation bullet and the two distinct improvement efforts make the entry feel less focused as a project narrative.

## Skills

> SAP

**Problem**
[Polish] SAP is listed under Tools, but no experience or project entry shows its use.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-59215747.md.

