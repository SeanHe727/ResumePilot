> Here is my resume: bench/planted-defects/tests-final/b1-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the overall narrative and file format. Education has no bullets to review. Job-description matching did not run because no posting was provided.

The changes to tackle first are:

1. **Resolve the duplicated result.** The retail role and food-pantry project both claim a roughly 2.4 million-person retention dashboard. The specialists recommend keeping the result under the correct entry and correcting or removing the other claim.
2. **Check two analytical claims.** The Brightcart query described would not identify customers with no orders, and an unweighted average of regional conversion rates is not generally a national conversion rate. Verify the work before retaining those bullets.
3. **Put the recent role first and clarify measures.** Move Brightcart above Pinecrest; specify what the “90%” reporting improvement measures. The format review also recommends removing date of birth and nationality.

The PDF parses cleanly. The full findings and entry-by-entry plan are in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 77 · wording 84 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 9 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998 | Nationality: Brazilian

**Problem**
[Error] The file includes personal details that a reader is not meant to weigh.

**Why**
Date of birth and nationality do not help a reader assess your analyst work. Including them directs attention to information normally left off a résumé.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

**Problem**
[Important] Experience is not ordered newest-first.

**Why**
Pinecrest appears before the later Brightcart role. A reader looking first for your most recent analyst work has to skip past the older job to find it.

**How to change it**
Move the Brightcart entry above Pinecrest.

> B.S. in Statistics

**Problem**
[Polish] Education appears before the analyst work that now makes the stronger introduction.

> Jun 2025

**Problem**
[Polish] Paid employment ends in June 2025, and the ongoing independent project does not account for a subsequent role.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
1. [Polish] “Owned” states responsibility for the claims backlog report without showing the reporting or analysis you performed.
2. [Polish] “The weekly numbers the claims managers used” neither names the figures nor says what managers used them to do.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Polish] “Analyzed 18 months of call-center data” does not identify the analysis behind the staffing recommendation.
2. [Polish] The call-center result is stronger than the bullet currently placed first.
3. [Polish] “My findings” introduces a first-person pronoun into the résumé bullet.

> Wrote the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Important] “By half” does not reveal how many query errors the SQL guide eliminated.

**Why**
A halving could represent very different numbers of errors. Without a comparable before-and-after count, a reader cannot gauge the result’s weight.

**How to change it**
If available, replace “by half” with [errors found per review period before] to [errors found per comparable review period after].

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The list of unrelated duties separates the fraud-flag automation from its 10-hour monthly saving.
2. [Polish] “Automated the monthly fraud-flag extract” does not say what part of the process the automation replaced.

**Why**
1. By the time a reader reaches the saving, it is unclear which activity produced it. The calendar, onboarding and help-desk duties also make the automation result harder to spot.

**How to change it**
1. Cut that intervening list and move “saved the fraud team 10 hours a month” directly after the automation work.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
1. [Important] “Reporting efficiency” does not identify what improved by 90%.
2. [Polish] “By 90% by moving” repeats the same connector.

**Why**
1. A reader cannot tell whether the figure describes preparation time, manual steps or another measure. Naming the measure would make the improvement assessable.

**How to change it**
1. Replace “reporting efficiency” with [the measure that fell by 90%], if accurate.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
[Error] Left-joining orders to customers and counting null customer names does not find customers with no orders.

**Why**
Starting from orders excludes customers who have never ordered. A null customer name could instead mean an unmatched order or a missing name, so the stated method does not support the finding.

**How to change it**
Cut this isolated bullet, or, if the analysis was actually done, correct the method to left-join customers to orders and count customers whose order ID is null.

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] “Data-quality checks” does not show what the checks tested.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
1. [Important] “Presented the quarterly customer review” does not show what analysis produced its recommendations.
2. [Polish] “Two of its three recommendations were funded” leaves the funded work unidentified.
3. [Polish] The presentation comes before the funding result, delaying the strongest part of the line.

**Why**
1. A reader sees the presentation and funding outcome but not your analytical contribution. For a data analyst, that missing link matters more than the act of presenting alone.

**How to change it**
1. If accurate, replace “Presented” with a brief phrase naming [the analysis that informed the recommendations], while retaining the funding outcome.

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
[Error] The simple average of 14 regional conversion rates is not generally the national conversion rate.

**Why**
A national conversion rate divides total conversions by total traffic. An equal average of regional rates gives a low-traffic region the same weight as a high-traffic one, so the reported figure is mislabeled.

**How to change it**
Cut this isolated bullet, or correct the label to “unweighted average regional conversion rate.” If the national rate was calculated instead, state that it used total conversions divided by total traffic across the 14 regions.

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The strongest Brightcart result is not the entry’s opening bullet.
2. [Important] “Built the weekly retention dashboard” does not explain how it identified lapsed buyers.
3. [Important] The rise in 90-day repeat purchase comes too late in the dashboard bullet.

**Why**
1. The retention work combines a defined audience, a marketing use and a before-and-after result. Leading with it gives the reporting, data-quality and leadership bullets a stronger frame; the isolated customer-query and conversion-rate bullets interrupt that story.
2. The marketing use and repeat-purchase change are clear, but the rule behind the audience is not. One concise detail would distinguish your analysis from routine dashboard assembly.
3. The line first describes the dashboard and its use, so a scanning reader may miss the measurable result. Moving the existing result forward makes its value apparent sooner.

**How to change it**
1. Move this bullet to the first position under Brightcart; cut the isolated customer-query and conversion-rate bullets as noted above.
2. If accurate, add [the cohort definition or rule used to identify lapsed buyers] near “weekly retention dashboard.”
3. Move that result closer to the opening of the bullet.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” incorrectly expresses mean absolute error as a percentage.
2. [Polish] “Modeled hourly bike-share demand” does not name the forecasting approach.
3. [Polish] “Within 12% mean absolute error” provides no baseline for judging forecast accuracy.

**Why**
1. For forecasts of hourly trip counts, mean absolute error is measured in trips. A percentage requires a separately defined percentage-error or normalized metric, so a reader cannot tell which accuracy measure was calculated.

**How to change it**
1. Report MAE as [number] trips per station-hour, or, if that is what was calculated, name the actual percentage metric, such as mean absolute percentage error, with its value.

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
1. [Important] “Compared the forecast with the operator’s rebalancing schedule” does not identify the forecast-guided change tested in the replay.
2. [Polish] “310 to 205 a week” makes the weekly unit easy to miss.

**Why**
1. That change is the missing step between forecasting demand and reducing empty-station hours. Without it, a reader cannot tell what decision your analysis contributed to the replay.

**How to change it**
1. If accurate, replace that phrase with a concise description of [the forecast-guided rebalancing change tested].

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “So the pantry moved one volunteer shift and cut” leaves the actor unclear and states the result conversationally.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not, by itself, produce a count of unique households.
2. [Polish] “Matched repeat visitors” does not identify the matching rule.
3. [Polish] “Its first count of unique households” does not provide the count.

**Why**
1. A household can include multiple visitors. Matching people across visits identifies distinct visitors; a household count requires a way to group those people by household.

**How to change it**
1. Replace “unique households” with “unique visitors” if that is what the matching established. If the logs contained household identifiers or a visitor-to-household mapping and you used them, state that basis for the household count instead.

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
[Error] The claim about 2.4 million shoppers and increased repeat purchases duplicates the retail retention result and does not fit this pantry project.

**Why**
A reader would question why a pantry visit analysis claims a retail-scale shopper dashboard and a similar repeat-purchase gain. Attributing what appears to be the same result to two entries undermines confidence in both; it also leaves the dashboard’s connection to pantry records unclear.

**How to change it**
Remove this line. Replace it only with [a verified dashboard and outcome from the pantry project], using terms that match the activity actually measured.

## Already working

- s3:e0:b2: Shows that the project produced public artifacts and received external visibility without claiming unshown adoption.

## Set aside (8)

8 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-146f88fd.md.

