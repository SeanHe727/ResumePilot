# Full review: resume.pdf

**84/100** — format 100 · content 74 · wording 83 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

8 errors, 17 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] Personal details that readers are not meant to weigh are included in the résumé. *(saves about 9 words)*

**Why**
Date of birth and nationality are conventionally omitted from this type of résumé and can distract from qualifications. Removing them keeps the document focused on experience, skills, and evidence.

**How to change it**
Delete “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

*raised by file*

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] Experience is not ordered newest-first. *(no words)*

**Why**
Brightcart is the more recent and more senior role, but Pinecrest appears first. A reader scanning from the top may therefore see an older position before the candidate's current professional direction.

**How to change it**
Move Brightcart Retail above Pinecrest Insurance within EXPERIENCE.

*raised by file, narrative*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] The résumé places EDUCATION before EXPERIENCE. *(no words)*

**Why**
The candidate has several years of relevant analyst experience, so leading with the degree delays the material most relevant to hiring decisions. Showing professional direction first makes the document easier to evaluate.

**How to change it**
Move EXPERIENCE above EDUCATION and place the degree after the experience section.

*raised by narrative*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
[Important] “Owned the claims backlog report” does not show the reporting work performed, and the line gives no measurable result or enabled decision. *(about 6 words to add)*

**Why**
“The weekly numbers the claims managers used” establishes stakeholder use but not what changed because the report existed. A reader cannot evaluate the analytical or reporting skill, the scale of the work, or its operational value.

**How to change it**
Replace “Owned” with the specific work performed, such as [built, reconciled, automated, or redesigned], and replace “the weekly numbers the claims managers used” with [the decision or operational change enabled]. Add [the number of claims, teams, or managers covered] or [a measured improvement], if accurate.

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] “Analyzed 18 months of call-center data” does not identify the method that produced the staffing recommendation. *(about 5 words to add)*
2. [Polish] The call-center outcome should appear earlier in the entry because it is the strongest line. *(no words)*
3. [Polish] “my findings” uses a personal pronoun and should be changed to “findings.” *(saves 1 word)*

**Why**
1. The reader can see the period examined and the strong outcome, but not the analytical skill used to reach it. That makes the recommendation harder to assess as analysis rather than an unsupported conclusion.
2. The bullet contains a concrete staffing change and a reduction in average hold time from 9 to 5 minutes. Leaving it after the backlog-report bullet delays the clearest evidence of analytical impact for a scanning reader.
3. The first-person wording breaks the résumé's phrase-based style. Removing it makes the bullet more concise without weakening the ownership of the work.

**How to change it**
1. Add one concise method detail after the data period, such as [identified hourly demand patterns or compared hold times by interval], if accurate; omit it if the analysis was more specific than that.
2. Move this bullet above the backlog-report bullet.
3. Replace “my findings” with “findings.”

*raised by content, narrative, wording, file*

> Wrote the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Important] “cut query errors found in review by half” has no baseline count or measurement period. *(about 5 words to add)*

**Why**
The comparison is understandable, but the reader cannot judge whether the reduction involved a meaningful number of errors or how long the improvement lasted. The result therefore has less credibility and scale than it could.

**How to change it**
If available, replace or supplement “by half” with [the before-and-after error counts measured over a stated review period].

*raised by content*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The fraud-automation result is buried in a list of unrelated support duties. *(saves about 21 words)*

**Why**
A reader may not know whether saving 10 hours a month came from the fraud-flag automation or from the calendar, sales, onboarding, and help-desk work. The task list also makes the entry read less like analytical ownership and more like general support.

**How to change it**
Move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.” Cut the unrelated support duties, or move only the most relevant one into a separate bullet.

*raised by content, wording, narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
[Important] “Improved reporting efficiency by 90%” does not identify what improved, and the repeated “by” construction is hard to scan. *(about 4 words to add)*

**Why**
A hiring reader cannot tell whether the 90% refers to report-generation time, manual effort, processing time, or another measure. Without a clear baseline and metric, the percentage is difficult to interpret or trust.

**How to change it**
Replace “reporting efficiency” with [the specific reporting time or effort metric] and state the comparison as [90% versus the prior process or baseline]. Retain “scheduled SQL queries” as the method and recast the sentence to avoid “by 90% by moving.”

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join is reversed: the line cannot find customers with no orders as written. *(about 2 words to add)*
2. [Important] The customers-with-no-orders finding does not state how many customers were found or what decision it enabled. *(about 6 words to add)*

**Why**
1. Customers with no orders disappear when orders is the left-hand table, while a null customer name identifies an order without a matching customer. The current description therefore states the wrong result and undermines confidence in the SQL work.
2. The technical method alone makes the bullet read like an isolated query exercise. A reader still cannot tell why the result mattered to the retailer or what action followed.

**How to change it**
1. Use customers as the left-hand table, left-join orders to customers, and identify customers with no matching order by counting a null order identifier.
2. After the corrected finding, add [the decision or action enabled] and, if useful, [the number of customers identified].

*raised by content, wording*

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Important] “Wrote data-quality checks” does not identify what the checks tested or how they prevented broken loads from reaching dashboards. *(about 4 words to add)*

**Why**
The result is concrete, but the technical skill could range from simple null checks to freshness, schema, or reconciliation controls. Without one representative validation, the reader cannot assess the quality-engineering work.

**How to change it**
Replace or supplement “data-quality checks” with [one representative validation or control], while keeping “40 most-used tables” and “15 broken loads.”

*raised by content*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The funded outcome is weakened because the bullet foregrounds presenting rather than the analysis or recommendations that produced it. *(no words)*

**Why**
“Presented” describes delivery, while the two funded recommendations are the evidence of analytical influence. Leading with presentation makes the candidate's contribution look more like communication than decision-support analysis.

**How to change it**
Move the analysis or recommendations before the presentation, replacing “Presented” with [analyzed, developed, or recommended], if accurate; retain the funding result.

*raised by wording*

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The calculation is wrong: an unweighted average of regional conversion rates is not generally the national conversion rate when regional traffic differs. *(about 3 words to add)*
2. [Important] The conversion-rate calculation does not explain why it was made or what correction, decision, or consequence followed. *(about 7 words to add)*

**Why**
1. A national conversion rate must be total conversions divided by total traffic, which is equivalent to a traffic-weighted average of the regional rates. The simple average is valid only when regional traffic volumes are equal or happen to produce the same result.
2. The line currently describes a technical calculation without showing whether it was an intentional analysis, a reporting-quality issue, or a mistake that affected a decision. The reader therefore sees no demonstrated business value.

**How to change it**
1. Replace the calculation with total conversions divided by total traffic, or with the traffic-weighted average of the 14 regional conversion rates.
2. After the corrected calculation, add [the decision, correction, or business consequence]; if this was a reporting-quality issue, state [what was corrected or prevented].

*raised by content, wording*

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Polish] The retention-dashboard bullet should open the entry because it contains the clearest quantified business outcome. *(no words)*
2. [Polish] The clause “that marketing used to retarget lapsed buyers” creates an ambiguous reference to who performed the retargeting. *(about 1 word to add)*

**Why**
1. The dashboard served 2.4 million customers and coincided with repeat purchase rising from 22% to 27%, making it the strongest evidence of scale and impact. Placing it later delays the line most likely to hold a reader's attention.
2. A reader may briefly read the clause as saying that the dashboard retargeted buyers rather than marketing using the dashboard. That uncertainty obscures the relationship between the analytical output and the business action.

**How to change it**
1. Move this bullet to the top of the Brightcart entry.
2. Replace the clause with “which marketing used to retarget lapsed buyers” or “used by marketing to retarget lapsed buyers,” if accurate.

*raised by narrative, wording*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” misstates the metric unless the error was explicitly normalized. *(about 2 words to add)*
2. [Important] The forecast-accuracy result does not show what changed because of the forecast. *(about 4 words to add)*
3. [Important] The 12% accuracy figure has no validation period or baseline comparison. *(about 3 words to add)*
4. [Important] “Modeled hourly bike-share demand” does not identify the modeling approach. *(about 4 words to add)*

**Why**
1. Mean absolute error is expressed in the target's units, such as bikes, rather than as a percentage. A percentage requires a defined denominator and must be labeled as normalized MAE or another relative-error metric.
2. The reader can see that the model produced a prediction, but not whether it informed rebalancing, staffing, inventory, or another action. Without that connection, the project reads as model production rather than applied analysis.
3. A reader cannot judge whether the error is strong because the line does not say what data was held out or how the model compared with a simpler forecast. The metric therefore lacks context.
4. Python and SQL show the tools but not the forecasting technique. A reader cannot assess the analytical method behind the result from this generic wording.

**How to change it**
1. Report the MAE in bikes, or write “12% normalized MAE” only if that normalized calculation was actually performed and its denominator is defined.
2. Connect the forecast to [rebalancing, staffing, or inventory decisions], if accurate, while retaining the corrected error result.
3. Add the single most useful comparison, such as [the validation period] or [the baseline method and its error].
4. Replace or follow the phrase with [the specific time-series model, regression method, or feature-engineering approach], if accurate.

*raised by content*

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
1. [Error] The line wrongly credits a comparison with the rebalancing schedule for reducing empty-station hours. *(about 2 words to add)*
2. [Important] The line does not explain how the forecast changed the rebalancing schedule. *(about 5 words to add)*
3. [Polish] The rebalancing result should open the project because it is the strongest impact line. *(no words)*
4. [Polish] “Fell from 310 to 205 a week” makes the unit and comparison difficult to parse. *(saves 1 word)*

**Why**
1. Comparing a forecast with a schedule cannot itself change station availability. The reduction is claimable only as a simulated result if the replay applied a forecast-guided schedule and modeled the resulting inventory changes.
2. The replay establishes an evaluation but not the decision rule that converted the forecast into a schedule or inventory action. A technical reader cannot tell what was actually simulated.
3. The simulated change from 310 to 205 empty-station hours gives the reader an immediate operational outcome. Leading with it makes the project more compelling before the modeling details.
4. The phrase leaves “a week” hanging after the two values, so the reader must work out whether the figures are weekly totals or rates. A clearer per-week construction makes the simulated result easier to scan.

**How to change it**
1. If that was done, replace the comparison claim with “Applied forecast-guided rebalancing in a replay of last summer, reducing simulated empty-station hours from 310 to 205 per week.” Otherwise, remove the reduction claim.
2. Clarify the one simulation step or decision rule used to apply the forecast, such as [forecast-triggered station prioritization or a vehicle-routing rule], if accurate.
3. Move this bullet above the modeling bullet.
4. Replace it with “from 310 to 205 per week.”

*raised by content, narrative, wording*

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] The publication has no measure of reach or reuse, and the city link shows recognition rather than an enabled outcome. *(about 3 words to add)*

**Why**
The reader can tell that the notebooks were published and linked, but cannot judge whether anyone used them or whether they informed a decision. The project therefore receives credit for visibility without evidence of impact.

**How to change it**
Add one verifiable measure such as [views, downloads, citations, documented reuse, adoption, or audience reached], if available; otherwise retain the city link as the evidence.

*raised by content*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
1. [Error] The line incorrectly treats the before-and-after line reduction as caused by mapping the visits. *(about 1 word to add)*
2. [Important] The line does not show which part of the team analysis the candidate personally owned. *(about 4 words to add)*
3. [Polish] “moved one volunteer shift” does not specify the schedule change. *(about 2 words to add)*

**Why**
1. The map can identify demand patterns, but it cannot establish that the shift change caused the reduction from 50 to 20 minutes. Changes in demand, staffing, service process, weather, or holidays could also explain the difference.
2. Because the entry identifies a team of three, a reader cannot tell whether the candidate performed the mapping, interpreted it, or helped implement the schedule change. That weakens the evidence of individual analytical contribution.
3. The reader cannot tell which day or time was changed, so the operational consequence is imprecise. The missing detail also makes the relationship between the visit pattern and staffing decision harder to understand.

**How to change it**
1. Replace “so” with “after,” as in “Mapped 14 months of pantry visits by hour and day; after the pantry moved one volunteer shift, the Saturday line fell from 50 to 20 minutes.” If a causal evaluation was performed, name that analysis instead.
2. Add the candidate's specific contribution after the team context, such as [analyzed visit patterns] or [built the hour/day analysis], if accurate.
3. Replace it with “moved one volunteer shift to Saturday” or state the actual schedule change.

*raised by content, wording*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not by itself produce a count of unique households. *(no words)*
2. [Important] The line does not state the count produced or how the pantry used it. *(about 6 words to add)*

**Why**
1. The process identifies repeated records for the same visitor, while household membership is a separate relationship. Without household identifiers or a documented, validated matching rule, the result is a count of matched visitors rather than unique households.
2. The 9,000 logs show the size of the source material, not the measurable result of matching. A reader also cannot tell whether the count informed capacity planning, outreach, funding, or another pantry decision.

**How to change it**
1. Replace “unique households” with “unique matched visitors” unless the logs contained household identifiers; if they did, state the household-matching method.
2. Replace the ending with “a count of [number] unique matched visitors” or the accurate household result, then add [the pantry decision or action it informed], if accurate. Lead with the count if available.

*raised by content, wording*

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The retention-dashboard bullet does not fit the food-pantry project and duplicates the Brightcart achievement. *(saves about 14 words)*
2. [Important] “raised repeat purchases by nearly a quarter” has no comparison baseline and does not explain the candidate's contribution. *(about 6 words to add)*

**Why**
1. “About 2.4 million shoppers,” “repeat purchases,” and the nearly-quarter increase describe the same population and outcome already credited to Brightcart, not the 9,000 pantry visit logs. This makes the reader unsure which work the candidate actually performed and disrupts the project's focus.
2. The reader cannot tell whether the increase was measured against a prior period, a control group, or another baseline. The bullet also names a dashboard without showing the analysis or action that linked it to the claimed outcome.

**How to change it**
1. Remove this bullet or replace it with the pantry project's actual population and outcome: [verify the project scope and result]. Keep the retail retention achievement under Brightcart only.
2. If the bullet describes different work, add the comparison as “versus [prior period or comparison group]” and explain [the method or outreach decision the dashboard supported], if accurate. Otherwise remove the claim.

*raised by content, wording, narrative*
