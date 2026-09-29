> Here is my resume: bench/planted-defects/tests-final/b2-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed **5/5 eligible entries** for content and wording; narrative and format checks completed. Education had no bullets to assess. **Job-description matching did not run because no posting was provided.**

Most important changes:

1. **Correct technical and numerical claims.** The bike-share project contains a 300-to-200 change labeled 50% instead of 33%, a 60%-to-75% change described as 15% instead of 15 percentage points, and unclear use of “mean absolute error.” The A/B-test stopping method is also statistically unsupported.
2. **Remove or replace the SQL “customers with no orders” bullet.** The described join direction and null check do not produce the claimed result, and the bullet gives no business consequence.
3. **Strengthen the career narrative.** Lead with Experience rather than Education, reduce the current cinema role to one line, and emphasize the analyst roles and projects. The cinema role currently makes the trajectory appear to move away from analytics.
4. **Remove personal information and distracting material.** Delete date of birth and nationality, remove the first-person “my,” and cut the administrative-duty list attached to the fraud automation achievement.
5. **Clarify tense and outcomes.** Use present tense for the current cinema role, past tense for completed roles, and add methods, baselines, or results where bullets currently describe activity only.

The file is one page, consistent, and parses cleanly for ATS use. The full findings are available in **`/report --full`**.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 76 · wording 91 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 20 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998 | Nationality: Brazilian

**Problem**
[Error] Personal details that readers are not meant to weigh should not appear in the résumé.

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to qualifications and may invite inappropriate consideration. Their presence also uses space without strengthening the candidacy.

**How to change it**
Delete “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Riverside Cinema | Box Office Attendant

**Problem**
[Important] The move from Data Analyst to Box Office Attendant is an unexplained step backward in seniority and away from analytics.

**Why**
The dates show the analyst role ending in June 2025 and the cinema role beginning in August 2025, so a reader may question whether the candidate is still pursuing analytics. Without context, the current role can dominate the career story rather than simply explaining current employment.

**How to change it**
Add a brief, factual explanation in a summary or cover letter using [reason for the transition and continued analytics direction]. Keep the cinema entry compact.

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Education appears before the more relevant Experience and Projects sections.

**Why**
After five years of work, the analyst record is stronger evidence than the degree chronology. Leading with Education delays the results and technical experience most relevant to an analytics recruiter.

**How to change it**
Move Education below Experience and Projects.

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
1. [Important] “Sold” and “balanced” use past tense for a current role.
2. [Polish] The cash-handling line gives no evidence of transaction volume or balancing accuracy.

**Why**
1. The entry runs through “Present,” so the completed-action verbs conflict with its dates. That inconsistency can make the work status look stale or inaccurately updated.

**How to change it**
1. Replace “Sold” with “Sell” and “balanced” with “balance.”

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
1. [Important] “Trained” uses past tense for a current role.
2. [Polish] The training line states its activity and scope but gives no result.

**Why**
1. The verb conflicts with the entry’s “Present” end date. Consistent present tense makes clear that training remains part of the current responsibility.

**How to change it**
1. Replace “Trained” with “Train.”

> Box Office Attendant

**Problem**
[Important] The Box Office Attendant entry gives an unrelated current role too much space.

**Why**
The role explains current employment, but two bullets make it compete with the more relevant analytics experience. That emphasis may make the move away from analytics look more central than it is.

**How to change it**
Keep the title and dates, but condense the two bullets into one line containing [the stronger proof of dependable cash handling or successful training].

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The dashboard line does not identify the analytical method or tools used.
2. [Important] “That marketing used” can grammatically appear to modify the customers rather than the dashboard.

**Why**
1. The outcome is strong, but a hiring manager cannot assess the hands-on SQL, modeling, segmentation, or BI work behind it. That omission limits the line’s value as evidence of technical ability.
2. A reader may briefly parse the sentence as referring to customers used by marketing. The ambiguity interrupts an otherwise strong result and obscures who used the dashboard.

**How to change it**
1. After “dashboard,” add “using [data-modeling method or query tool] and [BI platform].”
2. Replace “the weekly retention dashboard for 2.4M customers that marketing used” with “marketing’s weekly retention dashboard covering 2.4M customers.”

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join direction and null check are wrong for finding customers with no orders.
2. [Important] “Found customers with no orders” does not show the finding’s size, use, or business consequence.

**Why**
1. An orders-to-customers left join preserves orders, while a null customer name indicates an order without a matching customer record. Finding customers who never ordered requires preserving every customer and testing for the absence of a non-nullable order identifier.
2. The reader cannot determine whether the analysis identified a material population or led to any action. That makes the technically described query look disconnected from business value.

**How to change it**
1. Replace the method with “left-joining the customers table to the orders table and filtering for a null order ID.”
2. Add either “identifying [count or share of customers]” or “enabling [specific business action or decision].”

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
1. [Important] The increase from 58% to 81% is buried behind a long implementation sequence.
2. [Important] “dbt-style SQL models” does not establish whether dbt was actually used.

**Why**
1. A scanning reader may miss the line’s strongest evidence of value before reaching the main verb. Leading with the result would make the improvement immediately visible while preserving the most relevant technical evidence.
2. A hiring manager cannot tell whether to credit direct dbt experience or only similar modeling conventions. That uncertainty weakens an otherwise specific technical claim.

**How to change it**
1. Move “raised the share of orders tied to a campaign from 58% to 81%” to the beginning, followed by “by,” and retain only the one or two strongest method details.
2. Replace it with “dbt models” if accurate; otherwise use “[warehouse or modeling framework] SQL models.”

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The customer-review line describes presenting the recommendations but not the analysis behind them.

**Why**
The funding result shows influence, but the reader cannot see how the recommendations were developed. For a data analyst, one analytical detail is needed to connect the decision to the candidate’s evidence rather than presentation skill alone.

**How to change it**
After “review,” add “using [customer analysis, forecast, or prioritization method].”

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] “To answer their own questions with the self-serve dashboards” is unnecessarily wordy.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Checking the p-value daily and stopping at the first value below 0.05 does not establish valid statistical significance at the 0.05 level.
2. [Important] The A/B-test line does not identify the winning variant, its effect against control, or the resulting decision.
3. [Polish] “Until significance” omits the required term “statistical.”
4. [Polish] “By checking the p-value every day” is wordier than necessary.

**Why**
1. Repeated testing with optional stopping inflates the false-positive rate. A valid confirmatory result requires prespecified stopping criteria or a sequential-testing method that adjusts for repeated looks.
2. The reader sees a testing procedure but cannot tell whether checkout performance improved or whether the experiment informed an action. That omission leaves the business value of the experiment unknown.

**How to change it**
1. If one was used, replace the procedure with “using [prespecified sample-size and stopping criteria / sequential-testing method].” Otherwise, remove the significance claim and describe the monitoring procedure without treating p < 0.05 as valid confirmatory evidence.
2. Add [winning variant], [checkout metric change versus control], and [decision made from the result]. Retain a significance claim only if a valid testing method supports it.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest Pinecrest result is not the opening bullet.
2. [Polish] The call-center line does not show how the analysis identified the evening peak or justified moving two agents.
3. [Polish] “My findings” uses a first-person pronoun that is inconsistent with résumé-style phrasing.

**Why**
1. The reduction in average hold time from 9 to 5 minutes is the entry’s clearest operational result. Leading with it would establish analytical impact before the less conclusive experimentation line.

**How to change it**
1. Move this bullet above the checkout A/B-test bullet.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
1. [Error] “Writes” incorrectly claims an ongoing responsibility in a role that ended in July 2022.
2. [Polish] “Cut query errors found in review by half” gives no underlying error count or rate.

**Why**
1. The present-tense verb conflicts with the completed employment dates and with the past-tense impact later in the line. That inconsistency may make the chronology look carelessly updated.

**How to change it**
1. Replace “Writes” with “Wrote.”

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The unrelated administrative duty list fragments the entry’s analyst narrative.
2. [Important] The 10-hour saving is placed too far from the automation that produced it.
3. [Polish] The fraud-flag line does not identify the tool or process used for the automation.

**Why**
1. Calendar maintenance, onboarding updates, and help-desk coverage distract from the fraud automation and reinforce the impression of a mixed task list rather than a coherent stretch of analyst work. Removing them would keep the entry focused on transferable analytical contributions.
2. After the intervening duty list, “which” can appear to refer to all the responsibilities rather than the fraud extract. That ambiguity weakens the cause-and-effect link between the automation and its measured benefit.

**How to change it**
1. Cut the text from “while also” through “on Fridays,” including the filler phrase “while also.”
2. Move “saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.”

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” misstates the metric because ordinary mean absolute error is not a percentage.
2. [Important] The demand-model line does not identify the model or validation approach.
3. [Important] The error result does not define its normalization or compare performance with a baseline.
4. [Polish] “Forecasting next-day demand” does not identify the operational decision the forecast was intended to improve.
5. “Within 12% mean absolute error” also lacks the article required by its current grammatical construction.

**Why**
1. MAE retains the units of the forecast target, such as trips or bikes. A percentage requires a normalized MAE or a percentage-based metric such as mean absolute percentage error, so the current wording undermines technical credibility.
2. The reader cannot see the analytical choices behind the forecast or assess whether evaluation respected the data’s time order. That limits the line’s usefulness as evidence of modeling skill.
3. The reader cannot interpret whether the stated result is strong without knowing what the percentage is measured against. A simple or prior model evaluated on the same test period would provide the missing reference point.
5. As written, the phrase is grammatically incomplete. Adding the article alone would not solve the more important metric error, so the wording must follow the correctly identified metric.

**How to change it**
1. Replace it with “an MAE of [number and unit],” or name the actual percentage-based or normalized error metric used.
2. After “demand,” add [model or algorithm] and, if space permits, [time-based validation approach].
3. Use the precisely named error metric and add [baseline model error measured on the same test period].
5. First replace the incorrect metric; if the actual measure validly uses this percentage construction, include “a” before the metric name.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] Reducing empty-station hours from 300 to 200 is a 33% reduction, not a 50% reduction.
2. [Important] The strongest bike-share result is not the opening bullet.
3. [Important] “A replay of last summer’s rebalancing” does not identify either the proposed approach or the baseline.
4. [Polish] “Empty-station hours” does not define whether the figure is aggregated station-hours across the network.

**Why**
1. The decrease is 100 from a baseline of 300, which equals 33.3%. The internal arithmetic error makes the project’s other quantitative claims less trustworthy.
2. The reduction from 300 to 200 empty-station hours is the project’s clearest operational result. Putting it first would establish practical impact before the model description.
3. The reader cannot tell what intervention produced the improvement or how the historical comparison was constructed. That makes the simulation result difficult to evaluate or reproduce.

**How to change it**
1. Replace “50%” with “33%.”
2. After correcting the percentage, move this bullet above the demand-model bullet.
3. Replace the phrase with “in a historical replay against [baseline rebalancing policy] using [proposed rule or optimization approach].”

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%.
2. [Important] “Forecast hit rate” does not define what qualifies as a hit.
3. [Polish] “Adding weather and event features” does not identify a specific feature-engineering decision.

**Why**
1. The absolute change is 15 percentage points; relative to the original 60% rate, the increase is 25%. Confusing these measures weakens confidence in the project’s quantitative reporting.
2. The reader needs the success threshold to interpret the change from 60% to 75%. Without that definition, the metric cannot be evaluated even after the percentage-point wording is corrected.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points.”
2. Replace “forecast hit rate” with [metric name and threshold defining a hit], while retaining “15 percentage points” for the change.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Mapped” does not show how Excel or SQL was used to analyze the pantry visits.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not by itself support a count of unique households.
2. [Polish] The line does not state the resulting unique-household count.
3. [Polish] “Matched repeat visitors” does not identify the rule or fields used for record linkage.
4. [Polish] “Cleaned 9,000 handwritten visit logs into a single table” illogically suggests that physical logs were cleaned into a table.

**Why**
1. Several visitors can belong to the same household, so person-level deduplication produces unique visitors rather than unique households. A household count requires household identifiers or explicit household-level linkage.

**How to change it**
1. Change the result to “its first count of unique visitors,” or, if household identifiers were used, say “matched records using [household identifier or household-level linkage method].”

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] “Each month after the project ended” gives a cadence but not the duration of continued use.

## Already working

- s2:e1:b1: Combines a clear operational outcome with a strong before-and-after measure.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f66563df.md.

