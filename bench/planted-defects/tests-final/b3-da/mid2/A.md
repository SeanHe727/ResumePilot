> Here is my resume: bench/planted-defects/tests-final/b3-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The full review is available in **`/report --full`**. Content and wording specialists reviewed all four entries with bullets; the narrative and format reviews also ran. Education had no bullets to review, and no job-description match was run because no posting was provided.

The main changes to address:

- **Correct and clarify project metrics.** In the bike-share project, the change from 300 to 200 empty-station hours is about a 33% reduction, not 50%; explain what the replay compared. The change from 60% to 75% is 15 percentage points, not 15%. Clarify that these are replay results, not observed operational outcomes.
- **Revisit the checkout A/B-test description.** The content review flagged daily p-value checking and stopping at the first result below 0.05 as potentially inflating false positives, and noted that the bullet gives no test outcome.
- **Reorder and streamline.** Put Brightcart above Pinecrest, and consider moving Education below Experience. The reviewers also flagged the fraud-automation bullet’s unrelated duty list and personal details (date of birth and nationality) in the format check.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 83 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 8 important, 14 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] Personal details readers are not meant to weigh should be left off the résumé.

**Why**
A date of birth and nationality are personal details rather than evidence of analytical experience or qualifications. Including them can direct attention away from the candidate’s relevant work and education.

**How to change it**
Remove the date of birth and nationality if they appear in the résumé file.

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] Experience is not in newest-first order.

**Why**
Pinecrest is listed above the more recent Brightcart role. A reader scanning the experience section encounters the older role first.

**How to change it**
Move Brightcart Retail above Pinecrest Insurance.

> Eastmoor University | B.S. in Statistics

**Problem**
[Polish] Education appears before the stronger evidence of professional analytics work.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The daily stopping rule can raise the test’s false-positive rate above 5% without a sequential-testing adjustment.
2. [Important] The stopping-rule detail takes focus from the test outcome, which the line does not state.

**Why**
1. Checking the result repeatedly creates multiple chances for a random fluctuation to cross the threshold. Stopping at the first crossing can therefore make a nominal 5% test more likely to produce a false positive.
2. A reader sees how the test was stopped but cannot tell whether it changed a checkout outcome or what value it delivered. The stopping rule is not the business result, so the line leaves the impact of the test unclear.

**How to change it**
1. If you used a sequential-testing procedure, name it; otherwise describe a prespecified fixed analysis or remove the claim that you ran the test until significance.
2. Replace the stopping-rule detail with the test outcome and [primary metric vs. control]; if you did not use a valid sequential procedure, do not retain the claim that you stopped at significance.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
[Polish] This call-center result should open the entry, and its first-person pronoun should be removed.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
1. [Important] The reduction in review errors has no stated comparison period or error counts.
2. [Polish] The present-tense verb does not match a role that ended in July 2022.

**Why**
1. A reader cannot tell what the reduction is measured against or how many errors were involved. That makes the size of the improvement harder to judge.

**How to change it**
1. If available, clarify the comparison with [from X to Y errors per review period].

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The unrelated support-duty list buries the automation’s time saving and leaves the entry’s work without a clear focus.
2. [Polish] The automation’s technical approach is not stated.

**Why**
1. The time saving is the clearest evidence of the extract’s value, but it appears after several unrelated duties. Alongside the entry’s analysis, experimentation, documentation, automation, and support work, that list makes it harder for a reader to see a coherent picture of the role.

**How to change it**
1. Move “saved the fraud team 10 hours a month” beside the opening automation claim, and cut the unrelated duties from this bullet.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The dashboard result does not show how the lapsed buyers were identified or analyzed.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The stated join direction and null check do not identify customers with no orders.
2. [Important] The finding is buried after the method detail and does not say what it changed or enabled.

**Why**
1. A left join from orders to customers retains orders, so a null customer name indicates an order without a matching customer record. To find customers without orders, the customers table must be preserved and unmatched rows identified using an orders-side key.
2. The lengthy method comes before the result, making the finding harder to scan. Even with the result up front, a reader would not know who used it or what decision or action it informed.

**How to change it**
1. If that is what you ran, say you left-joined customers to orders and counted rows with a null, non-nullable orders-side key.
2. Lead with the finding, cut method detail that is not needed, and add [the decision, action, or outcome the finding informed], if known.

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The result is pushed to the end by a lengthy method list.

**Why**
A scanning reader may move on before reaching the increase in campaign-linked orders. Leading with the change would make the value of the work immediately visible.

**How to change it**
Move the result to the start of the bullet, before the method details.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The funded recommendations’ intended outcome and the analysis behind them are not stated.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Polish] The stated mean absolute error lacks a percentage basis, and the line does not identify the forecasting approach or evaluation.
2. [Polish] The ongoing project’s opening bullet uses past tense.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The percentage is wrong: a change from 300 to 200 hours is a 33.3% reduction, not a 50% reduction.
2. [Important] The result can read as an observed operational reduction even though it came from a replay.
3. [Polish] The replay does not identify the baseline for the 300-to-200 comparison.
4. [Polish] The replay does not say which rebalancing change was tested.
5. [Polish] This result should lead the project bullets, and its past-tense verb needs to match whether the experiment is complete.

**Why**
1. The decrease is 100 hours against a starting value of 300. That is 100/300, or one-third.
2. The opening claim says empty-station hours were cut, which can sound like an implemented change. A reader needs to know that the figures describe a simulation rather than an observed operational result.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. Move “in a replay of last summer’s rebalancing” before the result and label the reduction as simulated, if accurate.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%.
2. [Polish] The ongoing project’s final bullet uses past tense.

**Why**
1. The difference between the two hit rates is 15 percentage points. Relative to the starting 60% rate, the increase is 25%, so “by 15%” gives the wrong unit for the stated change.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points,” if accurate; alternatively, say “by 25%” for the relative increase.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
1. [Important] The line does not establish whether the Saturday-line figures are average waits or which periods they compare.
2. [Polish] “Moved” does not clarify whether the volunteer shift was rescheduled or relocated.

**Why**
1. Without a clear basis for the two figures, a reader cannot tell whether the reduction compares like with like. A measurement anchor would make the result easier to interpret.

**How to change it**
1. Clarify the basis with [whether these are average wait times and the comparable periods measured].

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not establish a count of unique households.
2. [Polish] The claimed household count is not quantified.

**Why**
1. Multiple visitors may belong to one household, and one person may visit on behalf of a household. A household count requires reliable household-level linkage, which the stated method does not describe.

**How to change it**
1. If you used household-level identifiers or another reliable household-linking method, name it; otherwise, describe the result as a count of unique visitors.

## Already working

- s2:e1:b1: Gives a clear before-and-after measure of reporting time.
- s2:e1:b5: Links a specific enablement activity to a clear operational result.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-03348bb6.md.

