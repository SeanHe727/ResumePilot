# Full review: resume.pdf

**82/100** — format 100 · content 73 · wording 74 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The file includes personal details that are conventionally left off a résumé. *(saves about 8 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing this résumé. Including them adds personal information without strengthening the candidate’s qualifications.

**How to change it**
Remove the date of birth and nationality from the file.

*raised by file*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Education appears before the candidate’s multi-year experience. *(no words)*

**Why**
The ordering puts the degree ahead of several years of analyst experience. A reader should see the relevant work history before the education section.

**How to change it**
Move Education below Experience.

*raised by narrative*

> May 2020

**Problem**
[Polish] There is a 10-month gap between graduation and the first listed role. *(about 4 words to add)*

**Why**
The dates show a gap from May 2020 to April 2021, and a reader may wonder what happened during that period. A brief explanation can answer that question if there is relevant context to share.

**How to change it**
If you want to address the gap, add [brief context for May 2020–April 2021].

*raised by narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join described cannot identify customers with no orders. *(no words)*
2. [Important] The finding does not say what action or decision it informed. *(about 5 words to add)*
3. [Important] The finding gives neither the size of the group nor the period measured. *(about 6 words to add)*
4. [Polish] The explanation of the join obscures the useful finding. *(saves about 10 words)*

**Why**
1. A left join preserves rows from the orders table, so customers without orders never appear in the result. A null customer name can instead indicate an order with a missing or unmatched customer record, which makes the stated finding unreliable.
2. A reader can see the analysis result but not how it was used. Naming the decision would show why identifying these customers mattered.
3. Without a count or share, a reader cannot judge the scale of the result. A stated period would also make clear what the measure covers.
4. A reader has to work through the join and null-counting details before reaching the point that customers with no orders were identified. That makes the main result harder to scan.

**How to change it**
1. If that was the query, describe it as identifying orders with null customer names. To identify customers with no orders, left-join customers to orders and count rows with a null order identifier.
2. Add [the campaign or decision this finding informed], if accurate.
3. Add [the number or share of customers identified] over [a stated period].
4. Cut the detailed join and null-counting explanation, keeping the finding concise; retain the method only if it is needed to describe the corrected analysis.

*raised by content, wording*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The 58% to 81% result is buried after a long method-led opening. *(no words)*

**Why**
A scanning reader encounters several method details before learning what improved. Leading with the result would make the value of the work apparent sooner.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the start, then keep only the most relevant method details.

*raised by content, wording*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The review description does not identify the customer analysis behind the funded recommendations. *(about 5 words to add)*

**Why**
The funding result shows influence, but a reader cannot see what analytical contribution made the review useful to leadership. One representative finding would make that contribution more concrete.

**How to change it**
Replace the generic review description with [one customer finding behind a funded recommendation], if accurate.

*raised by content*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Apr 2021 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The A/B test uses repeated unadjusted significance testing, so stopping at the first p-value below 0.05 does not establish significance at that threshold. *(saves about 8 words if the stopping rule is removed)*
2. [Important] The test line does not say what changed as a result. *(about 6 words to add)*
3. [Important] The threshold is given without the measured effect. *(about 4 words to add)*

**Why**
1. Repeatedly checking a standard p-value and stopping when it first crosses 0.05 inflates the false-positive rate above the usual 5% level. The method also dominates the bullet without stating a test result, leaving a reader unable to assess the finding.
2. A reader can see that a test was conducted but cannot tell whether it improved checkout performance or informed a decision. Without an outcome, the business value of the test is unclear.
3. A p-value threshold does not show how large or useful the observed difference was. A reader needs the test and control result to interpret the outcome.

**How to change it**
1. If a valid sequential-testing method or adjustment was used, name it; otherwise remove the daily stopping rule and report the test result using an appropriate analysis.
2. Add [the outcome that mattered, such as the change in checkout completion versus the control], if accurate.
3. Replace the threshold-only ending with [the measured difference between the test and control]; retain a p-value only if it adds useful context.

*raised by content, wording*

> Analyzed 18 months of call-center data; the findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest result is not the opening line of the entry. *(no words)*
2. [Polish] The call-center analysis does not say how it identified the evening peak. *(about 5 words to add)*

**Why**
1. The call-center line connects the analysis to a staffing change and a reduction in hold time. Putting that concrete result first would give a reader a stronger first impression of the entry.
2. A reader sees the staffing change and its effect, but not how the analysis supported that decision. A concise method detail would make the analytical contribution clearer.

**How to change it**
1. Move the call-center line to the beginning of the entry.
2. Add [the key analysis used to identify the peak], if it is meaningful and can be stated briefly.

*raised by narrative, content*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The unrelated duties obscure the automation and its saving. *(saves about 23 words)*

**Why**
The 10-hour monthly saving follows a list of other responsibilities, making it harder to see that automating the extract produced the result. The extra duties distract from the main accomplishment.

**How to change it**
Move the fraud-flag automation and its 10-hour monthly saving together at the start, and remove the unrelated duties unless they are essential to explain the result.

*raised by content, wording*

> checkout A/B test; call-center data

**Problem**
[Polish] The entry’s workstreams read as separate rather than connected. *(no words if reordered; about 6 words to add for a link)*

**Why**
The checkout test, call-center staffing analysis, SQL process work, and fraud reporting show an analyst foundation, but the entry gives them no shared throughline. A reader may come away seeing a set of unrelated assignments rather than a coherent analyst profile.

**How to change it**
Group related bullets together or add [how these workstreams supported a shared goal], if accurate.

*raised by narrative*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Leveraged data-driven insights and advanced analytics to unlock actionable value for urban mobility stakeholders.

**Problem**
[Important] The project description uses generic language instead of naming the work or its outcome. *(about 5 words to add)*

**Why**
A reader cannot tell what the project changed or how its value was measured. The broad claim is difficult to assess without a concrete result.

**How to change it**
Replace “unlock actionable value” with [a specific outcome and measure versus a baseline]; replace “advanced analytics” with [the analysis method used] only if it helps explain that result.

*raised by content, wording*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 hours is a 33.3% reduction, not a 50% reduction. *(no words)*
2. [Polish] The replay does not say what rebalancing change was tested. *(about 4 words to add)*

**Why**
1. The decrease is 100 hours from a starting value of 300, which is one-third of the original total. A 50% reduction would be 150 hours.
2. The before-and-after result is clear, but a reader cannot see what was changed or evaluated. One detail about the replay would make the candidate’s contribution easier to understand.

**How to change it**
1. Replace “50% reduction” with “33.3% reduction” or “a reduction of 100 hours a week”; verify the figures if needed.
2. After “replay,” add [the rebalancing change tested], if it is important to understanding the result.

*raised by content, wording*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%. *(about 2 words to add)*
2. [Important] The hit-rate measure is undefined. *(about 5 words to add)*
3. [Important] The strongest project result is not the opening line. *(no words)*

**Why**
1. Relative to the starting rate of 60%, the increase is 25%. The stated 15 is the difference between the two rates in percentage points.
2. Without knowing what counted as a hit or how far ahead the forecast was made, a reader cannot interpret the reported rates. A compact definition would make the comparison more meaningful.
3. The forecast line gives a measured before-and-after result and identifies the features added. Moving it first would let a reader see the project’s clearest evidence of impact immediately.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points” to match the figures.
2. Add [the hit criterion and forecast horizon] after “forecast hit rate,” if space allows.
3. Move the forecast-hit-rate line to the beginning of the project entry.

*raised by content, wording, narrative*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The minutes are not clearly identified as wait time. *(no words)*

**Why**
A reader may not know whether the 50-to-20-minute change measures waiting or another duration. Naming the measure makes the before-and-after result easier to understand.

**How to change it**
If accurate, replace “Saturday line” with “Saturday wait time.”

*raised by content*

> 9,000 handwritten visit logs were cleaned into a single table and repeat visitors were matched, so the pantry had its first count of unique households.

**Problem**
1. [Important] The line does not say how repeat visitors were matched. *(about 4 words to add)*
2. [Polish] The household result is not quantified and is buried in a wordy explanation. *(about 4 words to add)*
3. [Polish] The passive phrasing leaves your role in cleaning the logs unclear. *(no words)*

**Why**
1. Matching is central to deriving a household count from handwritten logs. A reader cannot assess the analysis without knowing the identifier or rule used.
2. The 9,000 logs describe the source material, not the number of unique households identified. A reader cannot see the main result without that count.
3. The line says the logs were cleaned but does not identify who did the work. That makes the candidate’s contribution to a substantial data-cleaning task harder to assess.

**How to change it**
1. Replace “repeat visitors were matched” with [the field or rule used to match repeat visitors].
2. Replace “so the pantry had its first count of unique households” with [the number of unique households identified].
3. Replace “were cleaned” with an active verb and state your role, if accurate.

*raised by content, wording*

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s monthly use has no stated duration. *(about 3 words to add)*

**Why**
The line shows that the coordinator used the guide but does not say whether that continued briefly or over a longer period. The time marker also adds words without supplying that duration.

**How to change it**
Replace “after the project ended” with [the number of months the coordinator used the guide].

*raised by content, wording*

## Already working

- s2:e0:b0: Connects a defined analytics deliverable to a business outcome with a clear before-and-after measure.
- s2:e0:b1: Pairs a measurable time reduction with a concise explanation of the automation and delivery method.
- s2:e0:b5: Connects training for a defined audience to a clear reduction in ad hoc data requests.
