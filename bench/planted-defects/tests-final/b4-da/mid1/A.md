> Here is my resume: bench/planted-defects/tests-final/b4-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets, plus the resume’s narrative and ATS formatting. No job-description match was run because no posting was provided.

The main changes to address:

- **Check the A/B test claim:** the Pinecrest bullet describes checking the p-value daily and stopping once it fell below 0.05. The content review flagged this as an invalid stopping procedure for a conventional test.
- **Correct the project metrics:** 300 to 200 is a **33%**, not 50%, reduction. A change from 60% to 75% is **15 percentage points**, not 15%.
- **Fix the Brightcart join explanation:** the described left join and null customer-name check does not establish which customers had no orders.
- **Reorder and trim:** put experience before education and list Brightcart before Pinecrest. The formatting review also flagged the date of birth and nationality as unnecessary personal details.

The full report is available with `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 79 · wording 81 · narrative 69

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 19 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] Date of birth and nationality are personal details not conventionally included on this résumé.

**Why**
These details are not meant to be weighed as part of the candidate's qualifications. Including them may distract from the experience and skills relevant to the role.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] The experience entries are not in newest-first order.

**Why**
Brightcart is the more recent role, but Pinecrest appears first. That makes the work history harder to scan chronologically and gives older experience priority.

**How to change it**
Place Brightcart Retail before Pinecrest Insurance in the experience section.

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Experience should appear before education for a candidate with several years of relevant experience.

**Why**
The current order leads with the degree rather than the analyst work. Putting the experience first would foreground the candidate's relevant professional background.

**How to change it**
Move the experience section above the education entry.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The stated daily-checking stopping rule does not establish significance for a conventional unadjusted A/B test.
2. [Important] The bullet gives the stopping procedure but no test outcome or resulting decision.
3. [Polish] The p-value checking procedure is described at unnecessary length.

**Why**
1. Repeatedly checking and stopping when p < 0.05 raises the false-positive rate above 5%, so the threshold does not support the significance claim as written. A reader may question whether the result is reliable, weakening the evidence for your testing work.
2. A reader can see how you stopped the test but not what it found or whether checkout performance changed. Without an outcome, the value of the work is hard to assess.

**How to change it**
1. If you used a valid sequential-testing correction or a prespecified stopping rule, name it; otherwise, describe the result as exploratory and remove the claim that this procedure established significance.
2. Add [what the test found or what decision or business outcome followed], if there was one.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The call-center analysis bullet should come before the opening A/B-test bullet.
2. [Important] The phrase “Analyzed 18 months of call-center data” does not identify the analysis that found the evening peak.
3. [Polish] The phrase “my findings” uses a first-person pronoun in a résumé bullet.

**Why**
1. The review identifies the call-center result as the stronger opening for this entry. Leading with its operational impact would make the relevant analyst work clearer sooner.
2. The reader can see the dataset and the resulting staffing change, but not what analytical skill produced the finding. One specific method would make your contribution easier to assess.

**How to change it**
1. Move this bullet ahead of the checkout A/B-test bullet.
2. Replace that phrase with [the specific analysis used to identify the evening peak], if it adds useful detail.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Polish] “Writes” is the wrong tense for a role that ended in July 2022.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The fraud-automation bullet buries its result under a list of unrelated duties.
2. [Important] The phrase “Automated the monthly fraud-flag extract” does not show what was automated or how.
3. The claimed 10-hour monthly saving has no stated measurement or comparison.

**Why**
1. The list delays the clearest evidence of impact, making the automation harder to recognize on a quick scan. The entry-level review also flags this bullet as bundled with unrelated duties; streamlining it around the automation result would keep the analyst work prominent.
2. The reader can tell there was an automation effort but cannot see the technical or process skill involved. One concrete detail would make the work more recognizable.
3. A reader cannot tell how the time saving was calculated or what it was compared with. That leaves the size of the automation's impact difficult to evaluate.

**How to change it**
1. Move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract,” then cut the unrelated duties or substantially shorten them.
2. Add [the key part of the extract you automated or the tool or approach used], choosing the most telling detail.
3. Add [how the time saved was measured or what baseline it was compared with], if known.

> checkout A/B test

**Problem**
[Important] The A/B-test bullet feels separate from the analyst story in this entry.

**Why**
The finding flags the test as disconnected from the other work in the entry. A reader may not see how this claim supports the candidate's analyst profile.

**How to change it**
If the test supports the analyst story, make its relevant finding or outcome clear; otherwise, consider removing this bullet.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The dashboard description does not explain how lapsed buyers were identified or defined.
2. [Important] The retention lift is buried after the dashboard description.

**Why**
1. The business result is clear, but a reader cannot see the analytical skill behind the dashboard. One specific approach would make your contribution easier to assess.
2. A scanning reader may miss the increase in repeat purchase because it appears only at the end of the bullet. Leading with the result would make the business impact immediate.

**How to change it**
1. After that phrase, add [how you defined lapsed buyers] or [the analysis used to identify them], if accurate.
2. Move the phrase beginning “lifting 90-day repeat purchase” to the start of the bullet, before the dashboard description.

> Cut the monthly revenue report from 3 days of spreadsheet work to 2 hours by moving it to scheduled SQL queries and a shared dashboard.

**Problem**
[Polish] The revenue-report method follows the result and can be shortened.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The described join does not find customers with no orders.
2. [Important] The bullet does not say what the no-orders finding was used for or what changed as a result.
3. [Polish] The null-name implementation detail is lengthy and obscures the finding.

**Why**
1. Starting from orders cannot retain customers who have no matching order, and a null customer name can indicate an unmatched customer record rather than no orders. The stated method therefore does not support the claim.
2. A reader can see the query task but not why the finding mattered to the business. Without a downstream action or outcome, the value of the work is unclear.

**How to change it**
1. Replace the method with a left join from customers to orders, then test whether a non-nullable field from the orders table is NULL.
2. Add [the decision or customer action this finding enabled and its outcome], if applicable.

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Error] The gerund phrase is the subject of “raised,” rather than the candidate, and the long methods list delays the result.

**Why**
The current opening makes the list of activities—not the candidate—the subject of the main verb. It also puts the method before the clearest evidence of value, so a scanning reader may miss the increase in campaign-attributed orders.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the start, then replace the gerund opening with a finite clause naming you as the subject and a finite action verb.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The funded recommendations appear only after the presentation description.

**Why**
The funding outcome is the clearest evidence of the review's impact, but readers meet it after the setup. Moving it earlier would make that impact easier to spot.

**How to change it**
Move the funded-recommendations result before the presentation description.

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] The dashboard-self-service phrase is wordy.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Important] The 12% mean absolute error is not interpretable as a percentage without its scale or denominator.
2. [Important] The bullet does not identify the forecasting approach.

**Why**
1. A reader cannot tell what the percentage is relative to, so the forecast error is difficult to interpret. The result loses force without that context.
2. For a data-focused project, a brief method detail would show what forecasting skill produced the result. The entry lists Python and SQL but not how you applied them.

**How to change it**
1. Add [the scale or normalization used to express MAE as a percentage].
2. After “Modeled,” add [the forecasting model or approach used], if relevant and accurate.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 hours is a 33⅓% reduction, not a 50% reduction.
2. [Important] The replay result has no stated comparison baseline.
3. [Important] The empty-station-hours result should lead the project bullets.

**Why**
1. The decrease is 100 hours out of the original 300, which is one-third. A 50% reduction from 300 would leave 150 hours, so the stated percentage conflicts with the figures.
2. The before-and-after counts are more interpretable when the reader knows which rebalancing plan or scenario they represent. Without that context, it is harder to understand what the reduction demonstrates.
3. The review identifies this as the project's strongest line, but it currently follows the forecasting bullet. Putting it first would make the clearest operational result more immediate.

**How to change it**
1. Replace “a 50% reduction” with “a 33⅓% reduction.”
2. Add [the rebalancing plan or scenario used as the comparison].
3. Move this bullet before the hourly-demand modeling bullet.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The figures show a 15-percentage-point increase in hit rate, not a 15% increase.
2. [Important] The bullet does not define what counted as a forecast hit.

**Why**
1. The change from 60% to 75% is 15 percentage points. Relative to the original 60% rate, it is a 25% increase, so the current wording confuses two different measures.
2. Forecast accuracy depends on the criterion used to count a prediction as correct. Without that criterion, a reader cannot interpret the reported hit rates.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points”; alternatively, state “by 25% relative to the original rate.”
2. Add [the tolerance or threshold used to count a forecast as a hit].

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Important] The pantry-line result is delayed until after the method and “so.”

**Why**
A scanning reader reaches the impact only after the analysis description. Leading with the result would make the operational change more immediate.

**How to change it**
Move the Saturday-line result to the start of the bullet, before the visit-mapping method.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The bullet does not give the number of unique households identified.

**Why**
Without the count, a reader cannot tell the scale of the dataset's result or the value of the new baseline. The work therefore has less measurable impact on the page.

**How to change it**
Replace that phrase with [the number of unique households identified].

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] “After the project ended” is unnecessary timing detail.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8e5097d4.md.

