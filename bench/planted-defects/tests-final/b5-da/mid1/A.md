> Here is my resume: bench/planted-defects/tests-final/b5-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets, plus resume format and career narrative. The resume parses cleanly as a one-page document; no job-description match was run because no posting was provided.

The main changes to address:
- Revisit the Pinecrest A/B-test bullet: the daily significance checks raise a statistical concern, and the bullet does not state what changed as a result.
- Verify the bike-share project’s figures: 300 to 200 empty-station hours is a 100-hour drop, not a 50% reduction; 60% to 75% is a 15-percentage-point increase.
- Check the Brightcart customer join: as described, left-joining orders to customers would not identify customers with no orders. Also consider removing the date of birth and nationality listed in the contact section.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 74 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The file includes personal details that are conventionally left off a résumé.

**Why**
A reader is not meant to weigh date of birth or nationality when assessing this résumé. Including them adds personal information without strengthening the candidate’s qualifications.

**How to change it**
Remove the date of birth and nationality from the file.

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Education appears before the candidate’s multi-year experience.

**Why**
The ordering puts the degree ahead of several years of analyst experience. A reader should see the relevant work history before the education section.

**How to change it**
Move Education below Experience.

> May 2020

**Problem**
[Polish] There is a 10-month gap between graduation and the first listed role.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join described cannot identify customers with no orders.
2. [Important] The finding does not say what action or decision it informed.
3. [Important] The finding gives neither the size of the group nor the period measured.
4. [Polish] The explanation of the join obscures the useful finding.

**Why**
1. A left join preserves rows from the orders table, so customers without orders never appear in the result. A null customer name can instead indicate an order with a missing or unmatched customer record, which makes the stated finding unreliable.
2. A reader can see the analysis result but not how it was used. Naming the decision would show why identifying these customers mattered.
3. Without a count or share, a reader cannot judge the scale of the result. A stated period would also make clear what the measure covers.

**How to change it**
1. If that was the query, describe it as identifying orders with null customer names. To identify customers with no orders, left-join customers to orders and count rows with a null order identifier.
2. Add [the campaign or decision this finding informed], if accurate.
3. Add [the number or share of customers identified] over [a stated period].

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The 58% to 81% result is buried after a long method-led opening.

**Why**
A scanning reader encounters several method details before learning what improved. Leading with the result would make the value of the work apparent sooner.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the start, then keep only the most relevant method details.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The review description does not identify the customer analysis behind the funded recommendations.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Apr 2021 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The A/B test uses repeated unadjusted significance testing, so stopping at the first p-value below 0.05 does not establish significance at that threshold.
2. [Important] The test line does not say what changed as a result.
3. [Important] The threshold is given without the measured effect.

**Why**
1. Repeatedly checking a standard p-value and stopping when it first crosses 0.05 inflates the false-positive rate above the usual 5% level. The method also dominates the bullet without stating a test result, leaving a reader unable to assess the finding.
2. A reader can see that a test was conducted but cannot tell whether it improved checkout performance or informed a decision. Without an outcome, the business value of the test is unclear.
3. A p-value threshold does not show how large or useful the observed difference was. A reader needs the test and control result to interpret the outcome.

**How to change it**
1. If a valid sequential-testing method or adjustment was used, name it; otherwise remove the daily stopping rule and report the test result using an appropriate analysis.
2. Add [the outcome that mattered, such as the change in checkout completion versus the control], if accurate.
3. Replace the threshold-only ending with [the measured difference between the test and control]; retain a p-value only if it adds useful context.

> Analyzed 18 months of call-center data; the findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest result is not the opening line of the entry.
2. [Polish] The call-center analysis does not say how it identified the evening peak.

**Why**
1. The call-center line connects the analysis to a staffing change and a reduction in hold time. Putting that concrete result first would give a reader a stronger first impression of the entry.

**How to change it**
1. Move the call-center line to the beginning of the entry.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The unrelated duties obscure the automation and its saving.

**Why**
The 10-hour monthly saving follows a list of other responsibilities, making it harder to see that automating the extract produced the result. The extra duties distract from the main accomplishment.

**How to change it**
Move the fraud-flag automation and its 10-hour monthly saving together at the start, and remove the unrelated duties unless they are essential to explain the result.

> checkout A/B test; call-center data

**Problem**
[Polish] The entry’s workstreams read as separate rather than connected.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Leveraged data-driven insights and advanced analytics to unlock actionable value for urban mobility stakeholders.

**Problem**
[Important] The project description uses generic language instead of naming the work or its outcome.

**Why**
A reader cannot tell what the project changed or how its value was measured. The broad claim is difficult to assess without a concrete result.

**How to change it**
Replace “unlock actionable value” with [a specific outcome and measure versus a baseline]; replace “advanced analytics” with [the analysis method used] only if it helps explain that result.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 hours is a 33.3% reduction, not a 50% reduction.
2. [Polish] The replay does not say what rebalancing change was tested.

**Why**
1. The decrease is 100 hours from a starting value of 300, which is one-third of the original total. A 50% reduction would be 150 hours.

**How to change it**
1. Replace “50% reduction” with “33.3% reduction” or “a reduction of 100 hours a week”; verify the figures if needed.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%.
2. [Important] The hit-rate measure is undefined.
3. [Important] The strongest project result is not the opening line.

**Why**
1. Relative to the starting rate of 60%, the increase is 25%. The stated 15 is the difference between the two rates in percentage points.
2. Without knowing what counted as a hit or how far ahead the forecast was made, a reader cannot interpret the reported rates. A compact definition would make the comparison more meaningful.
3. The forecast line gives a measured before-and-after result and identifies the features added. Moving it first would let a reader see the project’s clearest evidence of impact immediately.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points” to match the figures.
2. Add [the hit criterion and forecast horizon] after “forecast hit rate,” if space allows.
3. Move the forecast-hit-rate line to the beginning of the project entry.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The minutes are not clearly identified as wait time.

> 9,000 handwritten visit logs were cleaned into a single table and repeat visitors were matched, so the pantry had its first count of unique households.

**Problem**
1. [Important] The line does not say how repeat visitors were matched.
2. [Polish] The household result is not quantified and is buried in a wordy explanation.
3. [Polish] The passive phrasing leaves your role in cleaning the logs unclear.

**Why**
1. Matching is central to deriving a household count from handwritten logs. A reader cannot assess the analysis without knowing the identifier or rule used.

**How to change it**
1. Replace “repeat visitors were matched” with [the field or rule used to match repeat visitors].

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s monthly use has no stated duration.

## Already working

- s2:e0:b0: Connects a defined analytics deliverable to a business outcome with a clear before-and-after measure.
- s2:e0:b1: Pairs a measurable time reduction with a concise explanation of the automation and delivery method.
- s2:e0:b5: Connects training for a defined audience to a clear reduction in ad hoc data requests.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0db237c6.md.

