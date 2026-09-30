# Full review: resume.pdf

**82/100** — format 100 · content 70 · wording 83 · narrative 66

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 8 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that are conventionally left off. *(saves about 8 words)*

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh when assessing the candidate’s qualifications. Including them uses space without supporting the analyst application.

**How to change it**
Remove the date-of-birth and nationality details.

*raised by file*

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] The experience entries are not in newest-first order. *(no words)*

**Why**
Pinecrest appears above the more recent Brightcart role, so the timeline does not follow reverse chronological order. A reader may have to work harder to establish which experience is most recent.

**How to change it**
Move the Brightcart entry above Pinecrest.

*raised by file, narrative*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] The résumé lists education before the several years of relevant analyst experience. *(no words)*

**Why**
That order establishes education before the experience most relevant to an analyst role. A reader should encounter the candidate’s professional background first.

**How to change it**
Move the experience section above education.

*raised by narrative*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
1. [Polish] The opening bullet does not say what the weekly figures measured or what claims decision they supported, and “Owned” describes responsibility rather than an action. *(about 5 words to add)*
2. [Polish] The bullet names the claims backlog report but does not say how you built or checked it. *(about 4 words to add)*

**Why**
1. A reader can see that managers used the numbers, but not what they did with them or how the report helped claims operations. That makes the value of this work—and the analytical contribution behind the deliverable—hard to assess.
2. The deliverable alone does not show the reporting or analytical skill involved. Without one concrete detail, a reader cannot tell what work owning the report required.

**How to change it**
1. Replace “Owned” with the reporting action you took, and replace “weekly numbers” with [the measures reported]. Add [the claims-management decision or action the report supported], if accurate.
2. Add one relevant detail such as [the data source or validation step], if accurate.

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The hold-time result is buried after the analysis, and “my findings” uses a first-person pronoun. *(no words)*
2. [Polish] The analysis does not say what pattern identified the evening peak. *(about 5 words to add)*

**Why**
1. A reader scanning the entry reaches the analysis before the clearest evidence of its impact. The pronoun also breaks the résumé’s otherwise impersonal bullet style.
2. The staffing change and hold-time result are clear, but the reader cannot see what analysis led to that finding. One concrete analytical detail would make the skill behind the result easier to assess.

**How to change it**
1. Move this bullet ahead of the claims-backlog bullet and lead with the reduction from 9 to 5 minutes. Remove “my” or replace “my findings” with the action, and name [the call-volume pattern analyzed], if accurate.
2. Add [the key pattern analyzed, such as call volume by hour or day], if accurate.

*raised by narrative, wording, file, content*

> Wrote the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Polish] The query-error reduction has no stated baseline or comparison period. *(about 4 words to add)*

**Why**
A reader cannot tell what the reduction by half is being compared with or how it was measured. Without that context, the scale of the result is difficult to assess.

**How to change it**
Add [the baseline and comparison period] for the review-error count, only if you can support them.

*raised by content*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The automation result is crowded by unrelated support duties, and the 10-hour saving has no stated basis. *(saves about 17 words)*
2. [Polish] The bullet does not say what manual step the automation replaced or how the extract ran. *(about 5 words to add)*

**Why**
1. The calendar, sales questions, onboarding documents, and help-desk coverage make this read partly like a task list and distract from the fraud-team result. A reader also cannot tell what prior effort the monthly saving is compared with.
2. “Automated” names the result of the work but not the process change. Without one specific detail, a reader cannot distinguish the technical contribution from a general automation claim.

**How to change it**
1. Remove or separate the unrelated duties and put the 10-hour saving immediately after the automation action. Add [the prior monthly effort or other basis for calculating the saving], if you can substantiate it.
2. Add [the manual step replaced or how the extract was automated], if accurate; if neither applies, soften the claim.

*raised by narrative, wording, content*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
[Important] The 90% improvement has no defined efficiency measure. *(about 3 words to add)*

**Why**
A reader cannot tell whether the change reduced report-preparation time, manual work, or another cost. Without that anchor, the figure is hard to interpret and its scale is difficult to assess.

**How to change it**
Replace “reporting efficiency” with [the specific measure and its before-and-after comparison], such as report-preparation time, if accurate.

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The null check is on the wrong table: customers with no orders have nulls in the orders columns, not in the customers columns. *(no words)*
2. [Polish] The bullet gives the customer finding without saying what it changed or why it mattered. *(about 5 words to add)*

**Why**
1. With a left join from customers to orders, an unmatched customer still has a non-null customer name. Counting null customer names will not identify customers with no orders.
2. The reader can see that the analysis identified customers with no orders, but not how the finding was used. Without a consequence, the business value of the analysis is unclear.

**How to change it**
1. Replace the customer-name null check with a check for a null, non-nullable orders key, such as the order ID. Lead with the customer finding and trim the query mechanics.
2. Lead with the customer finding, trim the join mechanics, and add [the follow-up or decision it informed], if there was one.

*raised by content, wording*

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] The bullet does not say what the data-quality checks tested. *(about 4 words to add)*

**Why**
The count of broken loads shows an outcome, but the reader cannot tell what technical work the checks performed. One representative condition would distinguish this from generic monitoring.

**How to change it**
Name [one specific condition or failure pattern tested], if accurate.

*raised by content*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The funding result comes after the presentation detail, so the outcome is easy to miss when scanning. *(no words)*

**Why**
The fact that two of three recommendations were funded is the clearest evidence of the review’s impact. Putting it first would make that result visible before the reader reaches the presentation context.

**How to change it**
Move the funding result to the start of the bullet, before the presentation detail.

*raised by wording*

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The simple average of 14 regional conversion rates is not the national conversion rate. *(about 3 words to add)*
2. [Polish] The bullet does not say what decision or outcome the reported rate informed. *(about 5 words to add)*

**Why**
1. A national conversion rate aggregates total conversions over total traffic, so regions with more traffic contribute more to the result. Giving each region equal weight produces an unweighted average of regional rates instead, and the bullet does not make clear what action the reported number informed.
2. As written, the line describes a calculation but gives no reason the reader should care about it. Without a consequence, the reporting’s value is unclear.

**How to change it**
1. Calculate total conversions divided by total traffic across the regions, or label the figure as the unweighted average of regional rates. Add [the decision or outcome the figure informed], if applicable.
2. Add [the specific decision or outcome the rate informed], if applicable.

*raised by content, wording*

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Important] The repeat-purchase result is buried after the dashboard context, and this is the strongest bullet in the entry. *(no words)*

**Why**
A scanning reader may reach the end of the bullet before seeing its clearest result. The lift is also more compelling than the opening responsibility-focused material in the entry, so it should appear earlier.

**How to change it**
Move this bullet ahead of the entry’s opening bullet and lead with the repeat-purchase result, before the dashboard and retargeting context.

*raised by narrative, wording*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
[Polish] The forecast error is missing its evaluation basis, and the bullet does not name the modeling approach. *(about 7 words to add)*

**Why**
A reader cannot tell what data or baseline the 12% error is measured against, so the accuracy claim is difficult to interpret. Python and SQL name tools, but not the modeling skill used to produce the forecast.

**How to change it**
Add [the held-out evaluation period or baseline] after the error figure and name [the model family or a distinctive modeling choice], if accurate.

*raised by content*

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
1. [Important] The result is not foregrounded, and “in a replay of last summer” leaves the simulation qualifier until the end. *(no words)*
2. [Polish] The bullet does not explain how the forecast was used in the replay. *(about 6 words to add)*

**Why**
1. A reader reaches the end before learning that the comparison was simulated. The reduction in empty-station hours is also the strongest result in this project and would land harder if its bullet came first.
2. The reduction in empty-station hours is clear, but the reader cannot see what decision connected the forecast to that result. Without the replay step or rule, the claimed impact is difficult to evaluate.

**How to change it**
1. Move this bullet ahead of the modeling bullet and bring the replay qualifier forward, before the empty-station-hours comparison.
2. Add [the key replay decision or rule for how forecasts changed rebalancing], if accurate.

*raised by narrative, wording, content*

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] The city’s link is buried in a relative clause instead of being foregrounded as the outcome. *(no words)*

**Why**
The reader reaches the end of the bullet to learn that the city’s open-data team linked the work. Leading with that recognition makes the outcome easier to spot.

**How to change it**
Move the city-team link to the start of the bullet, before the notebook and write-up details.

*raised by wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The Saturday line-cut result comes after the method, making the outcome easy to miss. *(no words)*

**Why**
A reader scanning the bullet reaches the visit mapping before the clearest evidence of its value. Leading with the reduction from 50 to 20 minutes makes the practical result visible sooner.

**How to change it**
Move the line-cut result to the start of the bullet, before the visit-mapping method.

*raised by wording*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The bullet does not state the unique-household count or how repeat visitors were matched. *(about 6 words to add)*

**Why**
The count is presented as the new measure produced by the work, but the reader cannot see what it revealed. The matching basis is also central to understanding how the count was derived.

**How to change it**
Replace that phrase with [the number] unique households identified, if you can report it, and add [the identifier or fields used to match visitors], if accurate.

*raised by content*

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The shopper-retention claim is a duplicate of the Brightcart achievement and does not belong in this pantry project. *(saves about 14 words)*
2. The repeat-purchase claim does not state its comparison or timeframe. *(about 4 words to add)*
3. The retention-dashboard claim does not say what analytical feature or approach supported the result. *(about 5 words to add)*

**Why**
1. The food-pantry context does not fit a dashboard for millions of shoppers or a repeat-purchase result. The Brightcart entry already gives a closely matching customer count and repeat-purchase lift, so the conflicting attribution can make the résumé seem inconsistent.
2. If this is a distinct pantry result, a reader still cannot tell what “nearly a quarter” is compared with or over what period. That makes the claimed change hard to evaluate.
3. Even if this is a distinct pantry result, “Built a retention dashboard” does not show what analytical work the dashboard involved. The reader cannot distinguish the contribution from a generic dashboard task.

**How to change it**
1. Remove this bullet. If it is a different, accurate pantry result, replace it with [the actual pantry-project result] and make the distinct project and outcome clear.
2. If this is an accurate, distinct result, replace “nearly a quarter” with [the supported before-and-after figures and timeframe]; otherwise remove the claim.
3. If this is an accurate, distinct project, add [the analytical feature or approach that supported the result], if accurate; otherwise remove the claim.

*raised by narrative, content, wording*

## Set aside (4)

- s3:e1:b2: The line refers to “2.4 million shoppers” and “repeat purchases,” which do not visibly connect to the “Food Pantry Visit Analysis” entry.
- s3:e1:b2: The phrase “raised repeat purchases by nearly a quarter” does not specify the comparison or timeframe.
- s3:e1:b2: The line says “Built a retention dashboard” but does not show what analytical feature or approach supported the result.
- s3:e1:b2: "2.4 million shoppers" creates a sharp scope shift from the food-pantry analysis entry, making the bullet seem unrelated.
