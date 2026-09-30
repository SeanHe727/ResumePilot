> Here is my resume: bench/planted-defects/tests-final/b5-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries for content and wording, plus the resume’s narrative and formatting. Education has no bullets to review. No job description was loaded, so I did not assess job fit.

The specialists’ main suggested changes:
- Fix the bike-share figures: 300 to 200 is a 33.3% reduction, not 50%; 60% to 75% is a 15-percentage-point increase.
- Revisit the customer-no-orders bullet: the described left join does not support that finding. Add what the finding led to, if applicable.
- Clarify the checkout A/B test: daily checks with stopping at the first p-value below 0.05 raise a repeated-testing concern, and the bullet does not say what changed as a result.
- Consider moving Experience before Education, and removing the date of birth and nationality; the format check flagged those details as unnecessary personal information.

The file parses cleanly for ATS. The narrative review also noted a 10-month gap between graduation and the first listed role. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 75 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 14 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh when assessing your qualifications. Including them uses space without strengthening the evidence of your experience or skills.

**How to change it**
Remove the date of birth and nationality from the file.

> Eastmoor University

**Problem**
[Important] Experience should appear ahead of Education.

**Why**
With two analytics roles listed, the work history is the clearest evidence of your current direction. Putting Education first delays that evidence.

**How to change it**
Move the Experience section ahead of Education.

> May 2020

**Problem**
[Polish] The résumé shows a 10-month gap between the degree ending and the first listed role.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The stated join cannot identify customers with no orders.
2. [Important] The line gives no business outcome for finding customers with no orders.

**Why**
1. With orders as the left table, the join preserves orders rather than customers who have no matching order. A null customer name indicates an unmatched customer record, not necessarily a customer without orders, so a reader may doubt the finding.
2. A reader can see the data task, but not what action or decision it supported. Without an outcome, the value of identifying those customers is difficult to judge.

**How to change it**
1. If this is the query you ran, revise the claim to match what it identifies. To find customers with no orders, use a left join from customers to orders and check for a null field from the orders table—if that is what you actually did.
2. Add [what action or decision identifying these customers enabled]; if tracked, include [number or share of customers identified].

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Error] The result is buried after a long list of methods, and a comma incorrectly separates the subject from its verb.

**Why**
A reader reaches several methods before seeing the change from 58% to 81%, making the business result easier to miss. The comma after “models” also breaks the sentence between its subject and verb.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the opening, keep the most telling method detail after it, and remove the comma after “models.”

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The line names the presentation but not the analysis behind its recommendations.

**Why**
For a data analyst role, a reader needs some indication of how the review generated useful recommendations, not only that it was delivered. Without that analytical contribution, the funded recommendations are harder to connect to your work.

**How to change it**
Add [the key customer finding or analysis behind one funded recommendation].

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Apr 2021 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The described repeated p-value checking and stopping rule do not, by themselves, justify calling the result statistically significant at the usual 5% level.
2. [Important] The bullet emphasizes the stopping procedure rather than what the test changed.

**Why**
1. Checking p-values repeatedly and stopping at the first result below 0.05 increases the false-positive rate above the usual 5%. A reader familiar with A/B testing may therefore question whether the result supports the stated significance claim.
2. The daily p-value checks and stopping threshold take up attention without showing whether checkout performance improved. A reader cannot judge the test’s usefulness without the metric and result.

**How to change it**
1. If you used a sequential-testing adjustment or valid stopping rule, name it; otherwise, describe the test as exploratory or report results from a prespecified analysis.
2. Cut the extended description of daily checks and the stopping point; add [the checkout metric tested and its observed change versus the control, if any].

> Analyzed 18 months of call-center data; the findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The line does not say what analysis revealed the evening peak.
2. [Important] The strongest line in the entry is not the opening one.

**Why**
1. A reader can see the operational result, but not the analytical skill behind the recommendation that moved agents to that period. The general description leaves the basis for the recommendation unclear.
2. The call-center analysis connects a finding to a staffing change and a measured reduction in hold time. Opening with it would make that evidence of impact easier to notice.

**How to change it**
1. If accurate, replace the general description with [the hourly call-volume or hold-time pattern that identified the evening peak].
2. Move the call-center bullet to the top of the Pinecrest entry.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The result of the automation is separated from it by a long list of unrelated duties.

**Why**
The 10-hour monthly saving is the clearest evidence of value, but the intervening responsibilities make it harder to spot. Those duties do not explain the time saved by automating the extract.

**How to change it**
Move “which saved the fraud team 10 hours a month” next to “Automated the monthly fraud-flag extract” and cut the unrelated duty list.

> Ran the checkout A/B test

**Problem**
[Important] The entry reads as a collection of testing, operations, and process improvements rather than a clear progression.

**Why**
A reader sees relevant analytical work, but the sequence does not make its relationship to the operational and process improvements clear. That can make the experience feel less focused than the individual results warrant.

**How to change it**
Reorder the existing bullets to make a clear progression among the analytical work, operational work, and process improvements.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Leveraged data-driven insights and advanced analytics to unlock actionable value for urban mobility stakeholders.

**Problem**
[Important] The bullet uses vague claims without naming the work performed or a concrete outcome.

**Why**
Phrases about data-driven insights and advanced analytics could describe many projects and do not show what you did. The claim of value also names no action, decision, or result, so a reader cannot assess why the study mattered.

**How to change it**
Cut the jargon and replace it with [the analysis or technique that produced the result, if accurate] and [the specific stakeholder action or outcome the study supported]; if available, add [measured result compared with a baseline].

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The decrease from 300 to 200 hours is a 33⅓% reduction, not 50%.
2. [Important] The line gives the replay context but not the rebalancing approach that was tested.
3. [Important] The strongest line in the project is not the opening one.

**Why**
1. The decrease is 100 hours from a baseline of 300, which is one-third of the starting figure. A reader who checks the arithmetic will see the stated percentage contradicts the before-and-after values.
2. A reader can see that the result came from a replay, but not what analytical or operational choice produced it. Naming that approach would show more of your contribution to the result.
3. The empty-station result gives a concrete before-and-after measure of the replay. Leading with it would make that outcome easier to find when scanning the project.

**How to change it**
1. Replace “a 50% reduction” with “a 33⅓% reduction,” using the figures shown.
2. Keep the replay context and add [the rebalancing approach tested], if it is not clear elsewhere in the entry.
3. Move the empty-station bullet above the forecast bullet.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
[Error] The change from 60% to 75% is 15 percentage points, not a 15% relative increase.

**Why**
The before-and-after rates differ by 15 percentage points. Calling that change “15%” can be read as a relative increase, which would mean something different.

**How to change it**
Replace “by 15%” with “by 15 percentage points” to match the stated rates.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The result is delayed after the method and timeframe.

> 9,000 handwritten visit logs were cleaned into a single table and repeat visitors were matched, so the pantry had its first count of unique households.

**Problem**
1. [Important] The line omits the number of unique households identified.
2. [Important] The passive phrasing hides your actions, and the matching method is not explained.
3. [Important] The outcome is delayed after the process description.

**Why**
1. A reader can see the dataset’s size, but not the main result of the work. The count is the clearest measure of what the analysis uncovered.
2. “Were cleaned” and “were matched” leave your contribution unclear. Matching is central to producing a unique-household count, so a reader also needs a brief indication of how the matches were made.
3. The first count of unique households is the result a reader is most likely to look for. Placing it first would make the outcome easier to spot.

**How to change it**
1. Add [number of unique households identified] after this phrase, if you can share the count.
2. Replace “were cleaned” and “were matched” with active verbs describing your work, and add [matching method used], if accurate.
3. Move “the pantry had its first count of unique households” to the opening of the bullet.

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s ongoing use is clear, but what the monthly updates improved is not.

## Already working

- s2:e0:b0: Connects a clearly described deliverable to a business outcome and a before-and-after measure.
- s2:e0:b1: Makes the time saved concrete and ties it to specific changes in the reporting process.
- s2:e0:b5: Connects training and self-service dashboards to a measurable change in team support needs.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ca7bb9ed.md.

