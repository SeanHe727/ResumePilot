> Here is my resume: bench/planted-defects/tests-final/b1-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 entries containing bullets for content and wording; education was not applicable. Narrative and ATS/format checks also ran. Job-description matching did not run because no posting was provided.

Top changes from the specialists:

1. **Remove or replace the misplaced Food Pantry bullet.** It duplicates the Brightcart retention-dashboard result—about 2.4M people and increased repeat purchases—and uses retail terminology inconsistent with the pantry project.
2. **Correct technical claims.** The Brightcart customer/order join is described in the wrong direction; the national conversion rate is improperly averaged without traffic weighting; and the bike-share project labels a percentage as mean absolute error.
3. **Reorder and tighten the page.** Put Experience before Education, list Brightcart before Pinecrest, remove date of birth and nationality, and cut the administrative task list that buries the fraud-automation result.

The file itself is one page and parses cleanly in an ATS. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 76 · wording 88 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 14 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998 | Nationality: Brazilian

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to the candidate's qualifications. Including them introduces protected personal information without strengthening the application.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

**Problem**
[Important] The experience entries are not ordered newest-first.

**Why**
Pinecrest ends in July 2022, while Brightcart runs from August 2022 to June 2025. Showing the older role first makes the chronology harder to scan and delays the candidate's more recent Data Analyst work.

**How to change it**
Move the Brightcart Retail entry above the Pinecrest Insurance entry.

> B.S. in Statistics

**Problem**
[Important] Education appears before the more decision-relevant professional experience.

**Why**
With five years of relevant analyst work, recruiters should encounter the current professional level before the degree. Leading with education delays the stronger evidence of scope, progression, and business impact.

**How to change it**
Move the EXPERIENCE section ahead of EDUCATION.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
1. [Important] The duty framing in “Owned the claims backlog report” does not identify the substantive work performed.
2. [Polish] “the weekly numbers the claims managers used” is vague and does not say what management action or result the reporting supported.

**Why**
1. A hiring manager cannot tell whether ownership meant routine distribution, report production, validation, or analytical maintenance. That ambiguity hides the level of data responsibility demonstrated by the work.

**How to change it**
1. Replace “Owned” with the specific action, such as “Produced” or “Maintained,” if accurate. After “report,” add [data source, reporting tool, or validation process used].

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest operational achievement in the entry is not presented first.
2. [Polish] “Analyzed 18 months of call-center data” does not state how the staffing pattern was identified.
3. [Polish] “my findings” uses a personal pronoun that does not fit the résumé's phrase-based style.

**Why**
1. The reduction in average hold time from 9 to 5 minutes is the entry's clearest connection between analysis and an operating result. Placing this bullet first would establish impact before the weaker reporting-duty bullet.

**How to change it**
1. Move this bullet to the first position under Pinecrest Insurance.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The administrative task list separates the automation from its 10-hour result and buries the entry's strongest final achievement.
2. [Important] “Automated the monthly fraud-flag extract” does not explain the technical contribution.

**Why**
1. The calendar, onboarding, sales-question, and help-desk duties make it unclear which work produced the saving. During a quick scan, those unrelated tasks distract from the fraud extract's measurable operational value.
2. A reader cannot distinguish scripting or workflow development from simple scheduling. Naming one tool or workflow would make the level of automation expertise assessable.

**How to change it**
1. Cut the quoted duty list and move “saved the fraud team 10 hours a month” directly before the automation claim. Keep any essential administrative duties elsewhere rather than between the action and result.
2. After “extract,” add [tool or workflow used to automate the extraction].

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
1. [Important] “Improved reporting efficiency by 90%” does not define the metric that improved.
2. [Polish] The construction “by 90% by” is repetitive.

**Why**
1. A reader cannot tell whether 90% refers to preparation time, manual effort, delivery speed, or another measure. Because the denominator is unclear, the large percentage is difficult to evaluate or trust.

**How to change it**
1. Replace the phrase with “[monthly preparation time] from [before] to [after]” or “[manual effort] by 90%,” whichever is accurate.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The SQL join is reversed for finding customers with no orders.
2. [Polish] “Found customers with no orders” does not state the finding's scale or business consequence.

**Why**
1. Using orders as the left table retains orders, so a missing customer match identifies orders without matching customer records rather than customers without orders. The correct anti-join keeps every customer, joins orders to those customers, and tests a non-nullable order identifier for null.

**How to change it**
1. Specify that customers were the left table, orders were left-joined to them, and rows with a null order ID were filtered. Use the actual non-nullable [order identifier] if it was not “order ID.”

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] “Wrote data-quality checks” does not identify the conditions tested.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] “Presented the quarterly customer review” emphasizes delivery without identifying the analysis behind the recommendations.

**Why**
For a Data Analyst, the analytical basis is the main evidence of skill. Presentation alone could be read as coordination rather than the work that generated two funded recommendations.

**How to change it**
Replace “customer review” with the actual analytical basis, such as “cohort retention analysis” or “customer segmentation review,” if accurate.

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The national conversion rate is calculated incorrectly as an unweighted average of regional rates.
2. [Polish] “Reported the national conversion rate” does not say what the corrected metric informed.

**Why**
1. A national conversion rate is total conversions divided by total traffic, equivalent to weighting each regional rate by its traffic denominator. A simple average is valid only if regional traffic is equal or the weighted and unweighted values happen to coincide, so the current wording signals a substantive statistical error.

**How to change it**
1. Replace the calculation with “total conversions across 14 regions divided by total regional traffic,” or describe it as a “traffic-weighted average of regional conversion rates.” Remove the redundant unweighted-average wording.

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The retention-dashboard bullet buries its strongest result.
2. [Important] “Built the weekly retention dashboard” does not identify the logic used to define or track retention.
3. [Polish] “that marketing used” can grammatically modify the customers rather than the dashboard.

**Why**
1. The increase in 90-day repeat purchase from 22% to 27% is more compelling than the deliverable's scale alone. Moving that result nearer the opening lets a recruiter see the business impact before processing the dashboard details.
2. The line names a deliverable but not how customer records became an actionable lapsed-buyer audience. One defining methodological detail would show the analytical work behind the marketing result.

**How to change it**
1. Move the quoted result to the opening of the bullet, before the dashboard scope and use case.
2. Add the defining retention logic, such as “cohort-based,” if accurate; add a tool only if it reflects a meaningful technical choice.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” misstates the forecasting metric.
2. [Important] “Modeled hourly bike-share demand” does not identify the forecasting approach.
3. [Polish] The reported forecast error has no baseline comparison.

**Why**
1. Mean absolute error is expressed in the demand variable's units, such as bikes or trips, rather than as a percentage. A percentage would instead indicate a percentage-based or normalized metric, so the current label makes the evaluation technically incorrect.
2. The heading names Python and SQL, but the bullet does not show what modeling skill was applied. A hiring manager therefore cannot distinguish a substantive forecasting method from a basic projection.

**How to change it**
1. If the metric was percentage-based, replace it with “12% mean absolute percentage error.” Otherwise, report “mean absolute error of [number] bikes/trips per station-hour.”
2. After “demand,” add “using [model or forecasting approach],” naming only the primary approach.

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
1. [Important] “Compared the forecast with the operator’s rebalancing schedule” does not identify the forecast-based intervention that produced the reduction.
2. [Important] The strongest simulated operating result in the project is not presented first.
3. [Polish] “last summer” is an unstable and increasingly ambiguous date reference.
4. [Polish] “empty-station hours fell from 310 to 205 a week” attaches the weekly qualifier awkwardly.

**Why**
1. The simulation result is strong, but the wording only says two things were compared. A reader cannot tell whether the candidate generated recommendations, optimized a schedule, or merely evaluated the operator's existing plan.
2. The reduction from 310 to 205 empty-station hours is the clearest evidence that the project could improve operations. Leading with it would establish the project's value before the modeling and evaluation details.

**How to change it**
1. Replace “Compared the forecast with” with the actual intervention, such as “Generated [forecast-based rebalancing recommendations] and compared them with,” if accurate.
2. Move this bullet to the first position in the project.

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] “which” does not clearly indicate whether the city linked the write-up alone or both deliverables.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Mapped 14 months of pantry visits by hour and day” does not identify the technique or tool used.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not by itself produce a count of unique households.
2. [Important] The line does not explain how the handwritten records were standardized or matched.
3. [Polish] The first unique-person or household count is not connected to a downstream decision or requirement.

**Why**
1. Deduplicating visitors identifies unique individuals, while several individuals can belong to one household. A unique-household count requires a household identifier or a documented household-level matching method.
2. Record matching is the most technically distinctive part of the work, but the current wording does not show the rules or tooling involved. Without that detail, a reader cannot assess the data-quality skill required to reconcile 9,000 logs.

**How to change it**
1. Replace “unique households” with “unique visitors,” or, if household identifiers were used, add [household identifier or household-level matching method] and retain “unique households.”
2. Extend “matched repeat visitors” with “in [tool] using [identifier or key matching rule].”

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The claim about 2.4 million shoppers and repeat purchases is misattributed to the food-pantry project.
2. “that raised repeat purchases” incorrectly implies that the dashboard itself directly caused the outcome without explaining the action it enabled.
3. “raised repeat purchases by nearly a quarter” does not define the repeat-purchase measure or comparison point.

**Why**
1. Brightcart already claims a retention dashboard for 2.4 million customers and an increase from 22% to 27%, which is nearly a quarter. The duplicated scale and result, together with retail terms such as “shoppers” and “purchases,” contradict the pantry entry's focus on visitors and households.
2. A dashboard is a reporting or decision-support tool, so readers need the intervening use—such as outreach or service planning—to assess attribution. Without that link, the causal claim appears overstated and the underlying analysis remains unidentified.
3. The reader cannot tell whether the phrase means a relative increase, a percentage-point increase, or a change over a particular retention window. That ambiguity makes the magnitude impossible to verify or compare with the Brightcart result.

**How to change it**
1. Remove this bullet and keep the achievement under the correct entry. Alternatively, replace it with the pantry project's [actual dashboard population, metric, and measured outcome], using “repeat visits” or “returning households” where accurate.
2. If this line is replaced with a genuine pantry result, identify [analysis contained in the dashboard] and [specific action people took because of it]. Attribute the outcome to that action rather than directly to the dashboard.
3. If this claim belongs to a genuine pantry result, replace it with “[defined return metric] from [before] to [after] over [time period].” Otherwise, remove it with the misattributed bullet.

## Already working

- s2:e0:b2: Names two concrete deliverables rather than referring vaguely to process improvements.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-00ced839.md.

