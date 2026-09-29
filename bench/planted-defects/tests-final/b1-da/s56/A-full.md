# Full review: resume.pdf

**86/100** — format 100 · content 76 · wording 88 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 14 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998 | Nationality: Brazilian

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 9 words)*

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to the candidate's qualifications. Including them introduces protected personal information without strengthening the application.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

*raised by file*

> Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

**Problem**
[Important] The experience entries are not ordered newest-first. *(no words)*

**Why**
Pinecrest ends in July 2022, while Brightcart runs from August 2022 to June 2025. Showing the older role first makes the chronology harder to scan and delays the candidate's more recent Data Analyst work.

**How to change it**
Move the Brightcart Retail entry above the Pinecrest Insurance entry.

*raised by file, narrative*

> B.S. in Statistics

**Problem**
[Important] Education appears before the more decision-relevant professional experience. *(no words)*

**Why**
With five years of relevant analyst work, recruiters should encounter the current professional level before the degree. Leading with education delays the stronger evidence of scope, progression, and business impact.

**How to change it**
Move the EXPERIENCE section ahead of EDUCATION.

*raised by narrative*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
1. [Important] The duty framing in “Owned the claims backlog report” does not identify the substantive work performed. *(adds about 4 words)*
2. [Polish] “the weekly numbers the claims managers used” is vague and does not say what management action or result the reporting supported. *(adds about 5 words)*

**Why**
1. A hiring manager cannot tell whether ownership meant routine distribution, report production, validation, or analytical maintenance. That ambiguity hides the level of data responsibility demonstrated by the work.
2. Usage establishes an audience but not operational value. A reader is left asking whether the figures changed staffing, prioritization, or backlog handling, weakening the evidence of business impact.

**How to change it**
1. Replace “Owned” with the specific action, such as “Produced” or “Maintained,” if accurate. After “report,” add [data source, reporting tool, or validation process used].
2. Replace the phrase with “weekly claims metrics for managers” plus [specific staffing, prioritization, or backlog decision enabled] and, if available, [result measured against the prior process].

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest operational achievement in the entry is not presented first. *(no words)*
2. [Polish] “Analyzed 18 months of call-center data” does not state how the staffing pattern was identified. *(adds about 4 words)*
3. [Polish] “my findings” uses a personal pronoun that does not fit the résumé's phrase-based style. *(saves 1 word)*

**Why**
1. The reduction in average hold time from 9 to 5 minutes is the entry's clearest connection between analysis and an operating result. Placing this bullet first would establish impact before the weaker reporting-duty bullet.
2. The outcome is strong, but the line does not reveal the analytical technique behind it. One concrete method would demonstrate analyst skill and give an interviewer a substantive technical follow-up.
3. The first-person wording is inconsistent with the surrounding bullets and spends a word without clarifying the contribution. It also interrupts the direct connection between the analysis and the staffing change.

**How to change it**
1. Move this bullet to the first position under Pinecrest Insurance.
2. After “data,” add [the primary technique used to identify demand by time period].
3. Change “my findings moved” to “findings moved,” or, if more accurate, replace it with “prompting managers to move.”

*raised by narrative, content, wording, file*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The administrative task list separates the automation from its 10-hour result and buries the entry's strongest final achievement. *(saves about 21 words)*
2. [Important] “Automated the monthly fraud-flag extract” does not explain the technical contribution. *(adds about 4 words)*

**Why**
1. The calendar, onboarding, sales-question, and help-desk duties make it unclear which work produced the saving. During a quick scan, those unrelated tasks distract from the fraud extract's measurable operational value.
2. A reader cannot distinguish scripting or workflow development from simple scheduling. Naming one tool or workflow would make the level of automation expertise assessable.

**How to change it**
1. Cut the quoted duty list and move “saved the fraud team 10 hours a month” directly before the automation claim. Keep any essential administrative duties elsewhere rather than between the action and result.
2. After “extract,” add [tool or workflow used to automate the extraction].

*raised by content, wording, narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
1. [Important] “Improved reporting efficiency by 90%” does not define the metric that improved. *(adds about 3 words)*
2. [Polish] The construction “by 90% by” is repetitive. *(saves 1 word)*

**Why**
1. A reader cannot tell whether 90% refers to preparation time, manual effort, delivery speed, or another measure. Because the denominator is unclear, the large percentage is difficult to evaluate or trust.
2. The repeated preposition makes the opening sound awkward and slows an otherwise concise automation claim. Removing the first “by” preserves the figure while improving the sentence's flow.

**How to change it**
1. Replace the phrase with “[monthly preparation time] from [before] to [after]” or “[manual effort] by 90%,” whichever is accurate.
2. Once the metric is defined, remove the first “by” so the percentage follows the metric directly.

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The SQL join is reversed for finding customers with no orders. *(adds about 2 words)*
2. [Polish] “Found customers with no orders” does not state the finding's scale or business consequence. *(adds about 7 words)*

**Why**
1. Using orders as the left table retains orders, so a missing customer match identifies orders without matching customer records rather than customers without orders. The correct anti-join keeps every customer, joins orders to those customers, and tests a non-nullable order identifier for null.
2. The line ends at an analytical output, leaving a hiring manager unable to tell whether it supported outreach, data cleanup, or reporting. Without a count and action, the value of performing the join remains unclear.

**How to change it**
1. Specify that customers were the left table, orders were left-joined to them, and rows with a null order ID were filtered. Use the actual non-nullable [order identifier] if it was not “order ID.”
2. Add “[number or share] of customers” and “[specific action or decision enabled]” before the join detail.

*raised by content*

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] “Wrote data-quality checks” does not identify the conditions tested. *(adds about 2 words)*

**Why**
The counts show useful scale and prevention, but not what data-engineering skill the checks required. Naming one or two validation types would make the technical contribution concrete.

**How to change it**
Replace “data-quality checks” with one or two specific types, such as “freshness and row-count checks,” if accurate.

*raised by content*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] “Presented the quarterly customer review” emphasizes delivery without identifying the analysis behind the recommendations. *(adds about 1 word)*

**Why**
For a Data Analyst, the analytical basis is the main evidence of skill. Presentation alone could be read as coordination rather than the work that generated two funded recommendations.

**How to change it**
Replace “customer review” with the actual analytical basis, such as “cohort retention analysis” or “customer segmentation review,” if accurate.

*raised by content*

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The national conversion rate is calculated incorrectly as an unweighted average of regional rates. *(saves about 2 words)*
2. [Polish] “Reported the national conversion rate” does not say what the corrected metric informed. *(adds about 5 words)*

**Why**
1. A national conversion rate is total conversions divided by total traffic, equivalent to weighting each regional rate by its traffic denominator. A simple average is valid only if regional traffic is equal or the weighted and unweighted values happen to coincide, so the current wording signals a substantive statistical error.
2. Even a correctly calculated rate is only an output unless the line connects it to a decision or reporting process. Without that use, the reader cannot judge why the work mattered to Brightcart.

**How to change it**
1. Replace the calculation with “total conversions across 14 regions divided by total regional traffic,” or describe it as a “traffic-weighted average of regional conversion rates.” Remove the redundant unweighted-average wording.
2. After the corrected calculation, add “[decision, planning process, or reporting outcome it informed].”

*raised by content, wording*

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The retention-dashboard bullet buries its strongest result. *(no words)*
2. [Important] “Built the weekly retention dashboard” does not identify the logic used to define or track retention. *(adds about 1 word)*
3. [Polish] “that marketing used” can grammatically modify the customers rather than the dashboard. *(no words)*

**Why**
1. The increase in 90-day repeat purchase from 22% to 27% is more compelling than the deliverable's scale alone. Moving that result nearer the opening lets a recruiter see the business impact before processing the dashboard details.
2. The line names a deliverable but not how customer records became an actionable lapsed-buyer audience. One defining methodological detail would show the analytical work behind the marketing result.
3. The misplaced modifier briefly suggests that marketing used the customers themselves. That ambiguity slows comprehension in a bullet whose audience, deliverable, and customer population should be immediately distinct.

**How to change it**
1. Move the quoted result to the opening of the bullet, before the dashboard scope and use case.
2. Add the defining retention logic, such as “cohort-based,” if accurate; add a tool only if it reflects a meaningful technical choice.
3. Move “used by marketing” directly after “dashboard,” leaving “for 2.4M customers” as the dashboard's scope.

*raised by wording, narrative, content*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” misstates the forecasting metric. *(adds 1 word)*
2. [Important] “Modeled hourly bike-share demand” does not identify the forecasting approach. *(adds about 4 words)*
3. [Polish] The reported forecast error has no baseline comparison. *(adds about 6 words)*

**Why**
1. Mean absolute error is expressed in the demand variable's units, such as bikes or trips, rather than as a percentage. A percentage would instead indicate a percentage-based or normalized metric, so the current label makes the evaluation technically incorrect.
2. The heading names Python and SQL, but the bullet does not show what modeling skill was applied. A hiring manager therefore cannot distinguish a substantive forecasting method from a basic projection.
3. The figure shows that the model was evaluated, but not whether it improved on a simple or existing forecast. Without a baseline, a reader cannot determine whether the reported performance is meaningful.

**How to change it**
1. If the metric was percentage-based, replace it with “12% mean absolute percentage error.” Otherwise, report “mean absolute error of [number] bikes/trips per station-hour.”
2. After “demand,” add “using [model or forecasting approach],” naming only the primary approach.
3. After the corrected error metric, add “[baseline forecast and corresponding error or improvement],” if available.

*raised by content*

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
1. [Important] “Compared the forecast with the operator’s rebalancing schedule” does not identify the forecast-based intervention that produced the reduction. *(adds about 4 words)*
2. [Important] The strongest simulated operating result in the project is not presented first. *(no words)*
3. [Polish] “last summer” is an unstable and increasingly ambiguous date reference. *(no words)*
4. [Polish] “empty-station hours fell from 310 to 205 a week” attaches the weekly qualifier awkwardly. *(no words)*

**Why**
1. The simulation result is strong, but the wording only says two things were compared. A reader cannot tell whether the candidate generated recommendations, optimized a schedule, or merely evaluated the operator's existing plan.
2. The reduction from 310 to 205 empty-station hours is the clearest evidence that the project could improve operations. Leading with it would establish the project's value before the modeling and evaluation details.
3. As the résumé ages, readers will no longer know which summer the replay covered. A fixed year preserves the simulation's time frame without requiring inference from the project dates.
4. The current placement can make “a week” sound attached only to 205 rather than to the metric. Naming the measure as weekly at the outset makes both figures directly comparable.

**How to change it**
1. Replace “Compared the forecast with” with the actual intervention, such as “Generated [forecast-based rebalancing recommendations] and compared them with,” if accurate.
2. Move this bullet to the first position in the project.
3. Replace “last summer” with “summer [year].”
4. Change the phrase to “weekly empty-station hours fell from 310 to 205.”

*raised by content, narrative, wording*

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] “which” does not clearly indicate whether the city linked the write-up alone or both deliverables. *(adds 2 words)*

**Why**
The relative pronoun can grammatically refer only to the nearest noun, “write-up,” despite the preceding reference to notebooks. That ambiguity weakens the external-validation claim by leaving its exact scope unclear.

**How to change it**
If both deliverables were linked, replace “which” with “both of which”; otherwise, name the linked deliverable explicitly.

*raised by wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Mapped 14 months of pantry visits by hour and day” does not identify the technique or tool used. *(adds about 3 words)*

**Why**
Because the heading lists both Excel and SQL, a technical reader cannot tell which skill this result demonstrates. A more specific verb would connect the operational outcome to the candidate's actual analytical work.

**How to change it**
If accurate, replace “Mapped” with “Aggregated in SQL” or “Analyzed with Excel pivot tables.”

*raised by content*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not by itself produce a count of unique households. *(no words)*
2. [Important] The line does not explain how the handwritten records were standardized or matched. *(adds about 6 words)*
3. [Polish] The first unique-person or household count is not connected to a downstream decision or requirement. *(adds about 5 words)*

**Why**
1. Deduplicating visitors identifies unique individuals, while several individuals can belong to one household. A unique-household count requires a household identifier or a documented household-level matching method.
2. Record matching is the most technically distinctive part of the work, but the current wording does not show the rules or tooling involved. Without that detail, a reader cannot assess the data-quality skill required to reconcile 9,000 logs.
3. The deliverable sounds potentially useful, but the line does not show whether it changed planning, reporting, funding, or service delivery. That omission leaves the practical value of the matching work unresolved.

**How to change it**
1. Replace “unique households” with “unique visitors,” or, if household identifiers were used, add [household identifier or household-level matching method] and retain “unique households.”
2. Extend “matched repeat visitors” with “in [tool] using [identifier or key matching rule].”
3. After the corrected count, add “for [specific planning, reporting, or funding decision].”

*raised by content*

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The claim about 2.4 million shoppers and repeat purchases is misattributed to the food-pantry project. *(saves about 15 words)*
2. “that raised repeat purchases” incorrectly implies that the dashboard itself directly caused the outcome without explaining the action it enabled. *(adds about 8 words)*
3. “raised repeat purchases by nearly a quarter” does not define the repeat-purchase measure or comparison point. *(adds about 5 words)*

**Why**
1. Brightcart already claims a retention dashboard for 2.4 million customers and an increase from 22% to 27%, which is nearly a quarter. The duplicated scale and result, together with retail terms such as “shoppers” and “purchases,” contradict the pantry entry's focus on visitors and households.
2. A dashboard is a reporting or decision-support tool, so readers need the intervening use—such as outreach or service planning—to assess attribution. Without that link, the causal claim appears overstated and the underlying analysis remains unidentified.
3. The reader cannot tell whether the phrase means a relative increase, a percentage-point increase, or a change over a particular retention window. That ambiguity makes the magnitude impossible to verify or compare with the Brightcart result.

**How to change it**
1. Remove this bullet and keep the achievement under the correct entry. Alternatively, replace it with the pantry project's [actual dashboard population, metric, and measured outcome], using “repeat visits” or “returning households” where accurate.
2. If this line is replaced with a genuine pantry result, identify [analysis contained in the dashboard] and [specific action people took because of it]. Attribute the outcome to that action rather than directly to the dashboard.
3. If this claim belongs to a genuine pantry result, replace it with “[defined return metric] from [before] to [after] over [time period].” Otherwise, remove it with the misattributed bullet.

*raised by content, wording, narrative*

## Already working

- s2:e0:b2: Names two concrete deliverables rather than referring vaguely to process improvements.

## Set aside (4)

- s3:e1:b2: "Built a retention dashboard" does not identify what analysis it contained or how people used it to affect purchasing behavior.
- s3:e1:b2: "raised repeat purchases by nearly a quarter" does not define the repeat-purchase measure or its comparison point.
- s3:e1:b2: "shoppers" and "repeat purchases" conflict with the entry's otherwise consistent pantry terminology of visitors, visits, and households.
- s3:e1:b2: "that raised repeat purchases" grammatically attributes the increase directly to the dashboard rather than clearly stating how it enabled the outcome.
