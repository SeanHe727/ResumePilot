> Here is my resume: bench/planted-defects/tests-final/b3-ops/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s format and career narrative. Education has no bullets to review; a job-description match wasn’t run because no posting was provided.

The main changes to address:
- **Clarify the matching Crestway and food-bank results.** The narrative review notes that both entries cite roughly 1,400 items, three locations, major stockout reductions, and nearly $2M in inventory reduction. Explain whether these are separate efforts and distinguish their scope and outcomes, or align the attribution.
- **Check the forecast-accuracy comparison at Lakeview.** The content review flags that the 70% and 85% figures may use different SKU scopes after the MAPE calculation changed.
- **Make outcomes and methods clearer in several bullets.** For example, specify the baseline or period for cost reductions, clarify the safety-stock method, and state the result of the routing pilot. The narrative review also notes an 11-month gap after graduation and recommends putting Experience before Education.

Format checks found clean parsing and no layout warnings; the wording review also flagged a first-person pronoun and a present-tense verb in a past role. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 73 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

3 errors, 5 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> 1,400 SKUs across 3 distribution centers

**Problem**
[Error] The Crestway and food-bank entries present closely matching scope and outcomes, making the achievements look like the same work.

**Why**
The résumé gives the two entries very similar product counts, warehouse or distribution-center counts, stockout reductions, and inventory savings. A reader may doubt that these are distinct projects or be unsure where the work belongs.

**How to change it**
Clarify whether the projects were separate and, if so, distinguish their scope and results; otherwise make the entries agree and attribute the work consistently.

> B.S. in Industrial Engineering

**Problem**
[Important] Education appears before the recent, directly relevant experience.

**Why**
For an established candidate, the recent work is more immediately relevant to a recruiter than the degree. Leading with education delays the experience that should anchor the résumé.

**How to change it**
Move the experience section above education.

> May 2018

**Problem**
[Polish] The résumé leaves an 11-month gap between the degree and the first listed role unexplained.

## Crestway Foods | Supply Chain Planner | Metro City, USA | Feb 2021 - Jul 2025

> Rebuilt weekly demand planning for 1,400 SKUs across 3 distribution centers with a seasonal forecast model, cutting stockouts from 6.2% to 2.8% while inventory fell by $1.9M.

**Problem**
[Polish] The stockout and inventory results come after the forecasting method, making the strongest outcome less visible.

> Reduced freight costs by 15% by consolidating supplier pickups into regional milk runs.

**Problem**
[Important] The 15% freight-cost reduction has no stated comparison period or cost basis.

**Why**
Without a comparison point, a reader cannot tell what the percentage covers or how to interpret the scale of the savings. The result is less persuasive because its basis cannot be assessed.

**How to change it**
Add [the comparison period or cost basis] after the percentage, if accurate.

> Set safety stock for all 1,400 SKUs with the economic order quantity (EOQ) formula, balancing ordering and holding costs.

**Problem**
1. [Error] EOQ does not calculate safety stock; it determines an order quantity.
2. [Important] The safety-stock line gives no measured result.

**Why**
1. EOQ balances ordering and cycle-stock holding costs to determine an order quantity, not safety stock. Safety stock depends on demand and lead-time uncertainty and a target service level, so the current method claim misstates what the formula does.
2. The scope and stated approach are visible, but a reader cannot tell whether the work improved inventory, service levels, or costs. Without a measured change and comparison, the benefit of setting safety stock remains unclear.

**How to change it**
1. If EOQ was used, describe it as setting order quantities and name the method actually used to calculate safety stock; if safety stock was not separately calculated, remove that claim.
2. Add [the most relevant measured result and its comparison] if available.

> Built the weekly supplier scorecard for 40 vendors, which buyers used to renegotiate delivery windows with the five least reliable.

**Problem**
[Polish] The scorecard’s result is buried in a trailing clause, and the line does not say what the renegotiations achieved.

> Led the monthly sales and operations planning meeting, reconciling the sales forecast with plant capacity for the finance and production teams.

**Problem**
[Polish] The sales-and-operations planning line gives no outcome of reconciling the forecast with plant capacity.

> Trained 6 planners on the new forecasting workflow and wrote its exception-handling guide, which the team still uses for promotions.

**Problem**
[Polish] The continued use of the workflow is stated, but the line does not say what it improved.

## Lakeview Distribution | Operations Analyst | Metro City, USA | May 2019 - Jan 2021

> Raised forecast accuracy from 70% to 85% by switching the MAPE calculation to cover only SKUs that sold every week.

**Problem**
[Error] The 70%–85% figures do not establish an overall forecast-accuracy gain because the calculation excludes SKUs that did not sell every week.

**Why**
Changing the measured population excludes intermittent-selling SKUs, so the figures are not a like-for-like measure of overall forecast accuracy. A reader cannot tell whether forecasts improved or whether the change came from measuring a different, narrower SKU group.

**How to change it**
If both figures measure only weekly-selling SKUs, label them that way; otherwise recalculate both figures using the same SKU population and metric. Replace the longer method phrase with “excluding SKUs that did not sell weekly” if that accurately describes the change.

> Ran a time study of the returns desk; my findings led to a triage station that cut returns processing time from 3 days to 1.

**Problem**
[Polish] The bullet uses a first-person possessive.

> Writes the dock scheduling rules for 12 carriers, cutting average trailer wait at the dock from 95 to 40 minutes.

**Problem**
[Polish] This line is not the strongest opening bullet, and “Writes” is in the wrong tense for a role that ended in January 2021.

> Set up cycle counting for the 2,000 highest-value locations while also covering night-shift supervision, updating the safety training slides, coordinating holiday temp hiring and running the forklift certification schedule, which raised inventory record accuracy from 91% to 98.5%.

**Problem**
[Important] The long list of other duties pushes the inventory-accuracy result away from cycle counting and obscures which work drove it.

**Why**
A scanning reader may miss the strongest outcome after the list of duties. The placement also makes it difficult to tell whether cycle counting or one of the other responsibilities led to the accuracy gain.

**How to change it**
Move the accuracy result directly after “2,000 highest-value locations” and name cycle counting as the driver if accurate; cut or move the other duties.

## Last-Mile Routing Study | Independent Project | Python | Oct 2024 - Present

> Checked the planned routes against 4 weeks of real delivery logs; planned drive times came within 5% of the actual ones.

**Problem**
[Polish] The 5% comparison does not say how the deviation was summarized across the delivery logs.

> Shared the model and a one-page summary with the grocer’s dispatch team, who piloted the routes on two trucks for a month.

**Problem**
[Polish] The route pilot is described without saying what it showed, and the line is unclear about what the team received.

## Regional Food Bank Warehouse | Volunteer Consultant, Team of 4 | Excel | Mar 2022 - Jul 2022

> Analyzed warehouse operations and made recommendations to the food bank’s leadership.

**Problem**
1. [Important] The opening line is too general to show what analysis or recommendations the work involved.
2. The opening line gives no resulting change or evidence of value from the recommendations.

**Why**
1. “Analyzed warehouse operations” does not identify the analysis, and the recommendations are not tied to a specific problem. The broad opening adds little detail about the contribution, especially beside the more concrete donation-intake work.
2. A reader can see that recommendations went to leadership, but cannot tell whether they led to a change or provided measurable value. Without an outcome, the line does not show what the consulting work achieved.

**How to change it**
1. Replace the general opening with [the specific analysis and recommendations, if accurate], or cut it.
2. Add [the resulting change or clearest evidence of value] if available.

> Mapped the donation intake process with the warehouse lead and removed two duplicate data-entry steps, so donations reached the shelves a day sooner.

**Problem**
[Polish] The donation-intake improvement should open the entry, and its one-day timing comparison needs a baseline.

> Built a seasonal forecast for 1,400 products across three warehouses that more than halved stockouts and cut inventory by nearly $2M.

**Problem**
The forecast line does not explain its approach, puts both outcomes after the scope, and closely repeats the Crestway achievement.

**Why**
A reader cannot tell how the seasonal forecast was built, and has to reach the end of the line to find the stockout and inventory results. Those outcomes also closely resemble the Crestway headline, making it hard to tell whether these are distinct projects or the same work reported twice.

**How to change it**
Move the stockout and inventory results before the forecast scope, and name the approach if accurate. Clarify whether this was a separate project; if so, distinguish its scope and results, and otherwise attribute the work consistently.

## Skills

> SAP

**Problem**
[Polish] SAP is listed under Tools, but no experience or project entry shows how it was used.

## Already working

- s3:e0:b0: The line pairs a clear optimization result with a direct baseline.

## Set aside (6)

6 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-a38da5d8.md.

