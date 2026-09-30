> Here is my resume: bench/planted-defects/tests-final/b4-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets, plus the resume’s narrative and formatting. Education has no bullets, so it wasn’t reviewed for content or wording. No job description was provided for a match review.

The main changes to address:
- Put Brightcart above Pinecrest so experience runs newest first.
- Resolve the project-metric inconsistencies: the bike-share result of 300 to 200 empty-station hours is about a 33% reduction, not 50%; 60% to 75% is a 15-percentage-point increase, not a 15% increase.
- Revisit the Pinecrest A/B-test bullet: the reviewer notes that checking significance daily and stopping at the first p-value below 0.05 doesn’t support the stated significance claim, and the bullet gives no result or impact.
- Remove the first-person pronoun and consider removing date of birth and nationality; the format review also flagged these.

The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 78 · wording 84 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The personal details shown are not relevant to a reader’s assessment and should be removed.

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh when assessing the résumé. Including them takes space without supporting the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] The experience section is not in newest-first order.

**Why**
Brightcart ended in June 2025, later than Pinecrest’s July 2022 end date. Listing Pinecrest first makes the experience chronology harder to scan.

**How to change it**
Move the Brightcart Retail entry above Pinecrest Insurance.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The daily p-value checks and stop rule do not support treating the result as significant at the usual 0.05 level.
2. [Important] The bullet gives no test outcome or impact, and its process detail takes space from the result.

**Why**
1. Repeatedly checking and stopping at the first p-value below 0.05 increases the false-positive rate. The line does not describe a sequential-testing correction or a prespecified stopping rule, so a reader may doubt the significance claim.
2. A reader cannot tell what the test established or whether it improved checkout performance. The p-value threshold is a stopping criterion, not evidence of a useful result.

**How to change it**
1. If a sequential-testing correction was used, name it; otherwise, describe a prespecified analysis and stopping rule, or remove the claim that this procedure established significance.
2. Replace the general test description with [checkout change tested] and add [primary checkout metric and variant-versus-control result]; cut the daily-checking detail unless it is needed to explain a valid testing procedure.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest accomplishment in the entry is not the opening bullet.
2. [Important] The line does not say how the analysis identified the evening peak.
3. [Polish] The first-person pronoun does not belong in this résumé bullet.

**Why**
1. The call-center result is a concrete operational outcome, but readers encounter the checkout-test bullet first. Moving the stronger accomplishment to the top would make its impact easier to notice.
2. The staffing change and hold-time result are clear, but a reader cannot see what analytical skill led to the decision. One concise detail would make the contribution more credible.

**How to change it**
1. Move this bullet to the start of the Pinecrest bullets.
2. Add [the key analysis used to identify the evening peak], such as a time-of-day breakdown if accurate.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Error] “Writes” conflicts with the role’s end date in July 2022.

**Why**
The present tense reads as a current responsibility, but the associated role has ended. If the work happened during the role, the past tense makes the timeline consistent.

**How to change it**
Replace “Writes” with “Wrote” if the work was done during this role; if it continued after July 2022, clarify that it continued.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The list of secondary duties buries the fraud extract’s time-saving result.

**Why**
A scanning reader may reach the end of the line before seeing the result. The other duties do not clarify the value of automating the extract.

**How to change it**
Move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract” and remove the intervening duty list from this bullet.

> maintaining the team calendar

**Problem**
[Polish] The entry mixes analysis, process work, a statistical test, and support duties without building a clear picture of the analyst’s work.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Important] The dashboard bullet does not show the analytical logic used to define the retargeting audience.

**Why**
The deliverable and its business result are clear, but a reader cannot see what analysis went into identifying lapsed buyers. One concise detail would make the analytical contribution more apparent.

**How to change it**
Add [the key rule or cohort logic used to define lapsed buyers] after the dashboard description.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The described join and null check do not identify customers with no orders.
2. [Polish] The bullet does not say what the finding enabled or changed.
3. [Polish] The finding gives no measure of how many customers had no orders.

**Why**
1. If orders is the left table, customers with no orders are excluded; a NULL customer name instead indicates an order with no matching customer. If customers is the left table, its preserved customer name is not made NULL because there are no matching orders.

**How to change it**
1. To find customers with no orders, start with customers, left-join orders, and check for a NULL order ID, or use a NOT EXISTS query.

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The campaign-attribution result is buried after a long methods list.

**Why**
A scanning reader encounters several method details before seeing the outcome. That makes the main value of the work easier to miss.

**How to change it**
Move the existing result phrase to the beginning of the bullet, then leave the method details after it.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The bullet does not describe the analysis behind the funded recommendations.

**Why**
The funding outcome is persuasive, but a reader cannot see what analytical work informed the recommendations. Naming one relevant analysis would make the contribution clearer.

**How to change it**
Add [the single customer analysis or pattern behind one of the funded recommendations].

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Important] The percentage error is undefined, and the line does not identify the forecasting approach.
2. [Polish] The past-tense “Modeled” conflicts with the ongoing project and present-tense “forecasting.”

**Why**
1. A reader cannot interpret the accuracy without knowing what the percentage is relative to or what evaluation period it covers. The tools named in the project heading do not show the model or approach used.

**How to change it**
1. Clarify the metric as [MAE in demand units or normalized MAE definition], identify [the evaluation period or split] if space allows, and add [forecasting model or approach used] after “demand.”

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The decrease from 300 to 200 empty-station hours per week is a 33.3% reduction, not a 50% reduction.
2. [Important] The line does not identify the rebalancing schedule or approach used as the comparison baseline.

**Why**
1. The decrease is 100 hours measured against the original 300 hours. Dividing 100 by 300 gives 33.3%, so the stated percentage is mathematically incorrect.
2. Without the comparator, a reader cannot tell what the replay changed or how to interpret the reduction. Naming the baseline would make the result easier to assess.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. Specify [the baseline rebalancing schedule or approach used for comparison].

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
[Error] The change from 60% to 75% is 15 percentage points, not a 15% relative increase.

**Why**
The absolute difference is 15 percentage points; relative to the original 60% hit rate, the increase is 25%. The line also leaves “hit” undefined, so a reader cannot assess what the metric counts.

**How to change it**
Replace “by 15%” with “by 15 percentage points” and clarify [what counted as a forecast hit].

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Polish] The line does not state the number of unique households identified.

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The monthly use of the guide has no stated duration.

## Already working

- s2:e1:b1: Pairs a concrete time saving with the change that enabled it.
- s2:e1:b5: Connects a specific user group and training effort to reduced demand for ad hoc support.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-deb1fbcf.md.

