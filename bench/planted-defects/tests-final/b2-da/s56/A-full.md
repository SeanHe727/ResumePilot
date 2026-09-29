# Full review: resume.pdf

**86/100** — format 100 · content 76 · wording 91 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

8 errors, 20 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998 | Nationality: Brazilian

**Problem**
[Error] Personal details that readers are not meant to weigh should not appear in the résumé. *(saves about 9 words)*

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to qualifications and may invite inappropriate consideration. Their presence also uses space without strengthening the candidacy.

**How to change it**
Delete “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

*raised by file*

> Riverside Cinema | Box Office Attendant

**Problem**
[Important] The move from Data Analyst to Box Office Attendant is an unexplained step backward in seniority and away from analytics. *(about 10 words)*

**Why**
The dates show the analyst role ending in June 2025 and the cinema role beginning in August 2025, so a reader may question whether the candidate is still pursuing analytics. Without context, the current role can dominate the career story rather than simply explaining current employment.

**How to change it**
Add a brief, factual explanation in a summary or cover letter using [reason for the transition and continued analytics direction]. Keep the cinema entry compact.

*raised by narrative*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Education appears before the more relevant Experience and Projects sections. *(no words)*

**Why**
After five years of work, the analyst record is stronger evidence than the degree chronology. Leading with Education delays the results and technical experience most relevant to an analytics recruiter.

**How to change it**
Move Education below Experience and Projects.

*raised by narrative*

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
1. [Important] “Sold” and “balanced” use past tense for a current role. *(no words)*
2. [Polish] The cash-handling line gives no evidence of transaction volume or balancing accuracy. *(about 3 words)*

**Why**
1. The entry runs through “Present,” so the completed-action verbs conflict with its dates. That inconsistency can make the work status look stale or inaccurately updated.
2. The reader sees routine cashier duties but cannot judge their scale or the reliability of the cash handling. A workload or accuracy measure would make the responsibility credible evidence of dependable performance.

**How to change it**
1. Replace “Sold” with “Sell” and “balanced” with “balance.”
2. Replace “during evening shifts” with [average transactions handled per shift] or [average cash-drawer discrepancy compared with the expected total].

*raised by wording, content*

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
1. [Important] “Trained” uses past tense for a current role. *(no words)*
2. [Polish] The training line states its activity and scope but gives no result. *(about 7 words)*

**Why**
1. The verb conflicts with the entry’s “Present” end date. Consistent present tense makes clear that training remains part of the current responsibility.
2. The reader cannot tell whether the three attendants became independently shift-ready, reduced errors, or met an onboarding standard. Without an outcome, the line shows participation rather than training effectiveness.

**How to change it**
1. Replace “Trained” with “Train.”
2. After “refund policy,” add [became independently shift-ready within a stated number of shifts] or [passed the required onboarding assessment].

*raised by wording, content*

> Box Office Attendant

**Problem**
[Important] The Box Office Attendant entry gives an unrelated current role too much space. *(saves about 12 words)*

**Why**
The role explains current employment, but two bullets make it compete with the more relevant analytics experience. That emphasis may make the move away from analytics look more central than it is.

**How to change it**
Keep the title and dates, but condense the two bullets into one line containing [the stronger proof of dependable cash handling or successful training].

*raised by narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Important] The dashboard line does not identify the analytical method or tools used. *(about 6 words)*
2. [Important] “That marketing used” can grammatically appear to modify the customers rather than the dashboard. *(saves about 3 words)*

**Why**
1. The outcome is strong, but a hiring manager cannot assess the hands-on SQL, modeling, segmentation, or BI work behind it. That omission limits the line’s value as evidence of technical ability.
2. A reader may briefly parse the sentence as referring to customers used by marketing. The ambiguity interrupts an otherwise strong result and obscures who used the dashboard.

**How to change it**
1. After “dashboard,” add “using [data-modeling method or query tool] and [BI platform].”
2. Replace “the weekly retention dashboard for 2.4M customers that marketing used” with “marketing’s weekly retention dashboard covering 2.4M customers.”

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join direction and null check are wrong for finding customers with no orders. *(about 3 words)*
2. [Important] “Found customers with no orders” does not show the finding’s size, use, or business consequence. *(about 6 words)*

**Why**
1. An orders-to-customers left join preserves orders, while a null customer name indicates an order without a matching customer record. Finding customers who never ordered requires preserving every customer and testing for the absence of a non-nullable order identifier.
2. The reader cannot determine whether the analysis identified a material population or led to any action. That makes the technically described query look disconnected from business value.

**How to change it**
1. Replace the method with “left-joining the customers table to the orders table and filtering for a null order ID.”
2. Add either “identifying [count or share of customers]” or “enabling [specific business action or decision].”

*raised by content*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
1. [Important] The increase from 58% to 81% is buried behind a long implementation sequence. *(saves about 6 words)*
2. [Important] “dbt-style SQL models” does not establish whether dbt was actually used. *(about 1 word)*

**Why**
1. A scanning reader may miss the line’s strongest evidence of value before reaching the main verb. Leading with the result would make the improvement immediately visible while preserving the most relevant technical evidence.
2. A hiring manager cannot tell whether to credit direct dbt experience or only similar modeling conventions. That uncertainty weakens an otherwise specific technical claim.

**How to change it**
1. Move “raised the share of orders tied to a campaign from 58% to 81%” to the beginning, followed by “by,” and retain only the one or two strongest method details.
2. Replace it with “dbt models” if accurate; otherwise use “[warehouse or modeling framework] SQL models.”

*raised by content, wording*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The customer-review line describes presenting the recommendations but not the analysis behind them. *(about 5 words)*

**Why**
The funding result shows influence, but the reader cannot see how the recommendations were developed. For a data analyst, one analytical detail is needed to connect the decision to the candidate’s evidence rather than presentation skill alone.

**How to change it**
After “review,” add “using [customer analysis, forecast, or prioritization method].”

*raised by content*

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] “To answer their own questions with the self-serve dashboards” is unnecessarily wordy. *(saves about 5 words)*

**Why**
The longer construction delays the clear result that follows. A shorter phrase keeps attention on the scale of the training and the reduction in requests.

**How to change it**
Replace the quoted phrase with “on self-serve dashboards.”

*raised by wording*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Checking the p-value daily and stopping at the first value below 0.05 does not establish valid statistical significance at the 0.05 level. *(about 2 words)*
2. [Important] The A/B-test line does not identify the winning variant, its effect against control, or the resulting decision. *(about 10 words)*
3. [Polish] “Until significance” omits the required term “statistical.” *(about 1 word)*
4. [Polish] “By checking the p-value every day” is wordier than necessary. *(saves about 1 word)*

**Why**
1. Repeated testing with optional stopping inflates the false-positive rate. A valid confirmatory result requires prespecified stopping criteria or a sequential-testing method that adjusts for repeated looks.
2. The reader sees a testing procedure but cannot tell whether checkout performance improved or whether the experiment informed an action. That omission leaves the business value of the experiment unknown.
3. The shortened phrase is imprecise in an experimentation claim. However, adding the missing word would not correct the optional-stopping error by itself.
4. The extra wording adds no procedural detail and slows the line. If the monitoring description remains after the statistical claim is corrected, it can be stated more directly.

**How to change it**
1. If one was used, replace the procedure with “using [prespecified sample-size and stopping criteria / sequential-testing method].” Otherwise, remove the significance claim and describe the monitoring procedure without treating p < 0.05 as valid confirmatory evidence.
2. Add [winning variant], [checkout metric change versus control], and [decision made from the result]. Retain a significance claim only if a valid testing method supports it.
3. If a valid testing method supports the claim, replace it with “until statistical significance”; otherwise remove the significance wording.
4. Replace “every day” with “daily.”

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The strongest Pinecrest result is not the opening bullet. *(no words)*
2. [Polish] The call-center line does not show how the analysis identified the evening peak or justified moving two agents. *(about 5 words)*
3. [Polish] “My findings” uses a first-person pronoun that is inconsistent with résumé-style phrasing. *(saves about 1 word)*

**Why**
1. The reduction in average hold time from 9 to 5 minutes is the entry’s clearest operational result. Leading with it would establish analytical impact before the less conclusive experimentation line.
2. Without a specific technique, the reader cannot distinguish substantive analytical work from a basic data review. One method would make the staffing recommendation more technically credible.
3. The pronoun is unnecessary because the résumé already attributes the work to the candidate. Removing it makes the line more direct and consistent with the document’s other action-led bullets.

**How to change it**
1. Move this bullet above the checkout A/B-test bullet.
2. After “call-center data,” add [time-of-day demand analysis, queue analysis, or other method actually used].
3. Replace “my findings” with “findings.”

*raised by narrative, content, wording, file*

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
1. [Error] “Writes” incorrectly claims an ongoing responsibility in a role that ended in July 2022. *(no words)*
2. [Polish] “Cut query errors found in review by half” gives no underlying error count or rate. *(about 8 words)*

**Why**
1. The present-tense verb conflicts with the completed employment dates and with the past-tense impact later in the line. That inconsistency may make the chronology look carelessly updated.
2. The reader cannot judge the absolute size of the improvement or whether both periods had comparable review volume. A consistent baseline and endpoint would make the claimed reduction interpretable.

**How to change it**
1. Replace “Writes” with “Wrote.”
2. If records are available, replace “by half” with “from [baseline errors per review period or query volume] to [new errors using the same basis].”

*raised by content, wording*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The unrelated administrative duty list fragments the entry’s analyst narrative. *(saves about 20 words)*
2. [Important] The 10-hour saving is placed too far from the automation that produced it. *(no words)*
3. [Polish] The fraud-flag line does not identify the tool or process used for the automation. *(about 4 words)*

**Why**
1. Calendar maintenance, onboarding updates, and help-desk coverage distract from the fraud automation and reinforce the impression of a mixed task list rather than a coherent stretch of analyst work. Removing them would keep the entry focused on transferable analytical contributions.
2. After the intervening duty list, “which” can appear to refer to all the responsibilities rather than the fraud extract. That ambiguity weakens the cause-and-effect link between the automation and its measured benefit.
3. The time saving is useful, but the reader cannot see which transferable technical skill produced it. One implementation detail would support technical screening and give an interviewer a concrete follow-up.

**How to change it**
1. Cut the text from “while also” through “on Fridays,” including the filler phrase “while also.”
2. Move “saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.”
3. Immediately after “fraud-flag extract,” add “using [tool, script, query, or workflow actually used].”

*raised by wording, narrative, content*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” misstates the metric because ordinary mean absolute error is not a percentage. *(about 2 words)*
2. [Important] The demand-model line does not identify the model or validation approach. *(about 6 words)*
3. [Important] The error result does not define its normalization or compare performance with a baseline. *(about 7 words)*
4. [Polish] “Forecasting next-day demand” does not identify the operational decision the forecast was intended to improve. *(about 5 words)*
5. “Within 12% mean absolute error” also lacks the article required by its current grammatical construction. *(about 1 word)*

**Why**
1. MAE retains the units of the forecast target, such as trips or bikes. A percentage requires a normalized MAE or a percentage-based metric such as mean absolute percentage error, so the current wording undermines technical credibility.
2. The reader cannot see the analytical choices behind the forecast or assess whether evaluation respected the data’s time order. That limits the line’s usefulness as evidence of modeling skill.
3. The reader cannot interpret whether the stated result is strong without knowing what the percentage is measured against. A simple or prior model evaluated on the same test period would provide the missing reference point.
4. The model output is clear, but its practical purpose for a bike-share operator is not. Naming the supported decision would connect the technical work to operational value.
5. As written, the phrase is grammatically incomplete. Adding the article alone would not solve the more important metric error, so the wording must follow the correctly identified metric.

**How to change it**
1. Replace it with “an MAE of [number and unit],” or name the actual percentage-based or normalized error metric used.
2. After “demand,” add [model or algorithm] and, if space permits, [time-based validation approach].
3. Use the precisely named error metric and add [baseline model error measured on the same test period].
4. Add [rebalancing or staffing decision supported] if that purpose was part of the project.
5. First replace the incorrect metric; if the actual measure validly uses this percentage construction, include “a” before the metric name.

*raised by content, wording*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] Reducing empty-station hours from 300 to 200 is a 33% reduction, not a 50% reduction. *(no words)*
2. [Important] The strongest bike-share result is not the opening bullet. *(no words)*
3. [Important] “A replay of last summer’s rebalancing” does not identify either the proposed approach or the baseline. *(about 7 words)*
4. [Polish] “Empty-station hours” does not define whether the figure is aggregated station-hours across the network. *(about 1 word)*

**Why**
1. The decrease is 100 from a baseline of 300, which equals 33.3%. The internal arithmetic error makes the project’s other quantitative claims less trustworthy.
2. The reduction from 300 to 200 empty-station hours is the project’s clearest operational result. Putting it first would establish practical impact before the model description.
3. The reader cannot tell what intervention produced the improvement or how the historical comparison was constructed. That makes the simulation result difficult to evaluate or reproduce.
4. The aggregation definition determines the scale and interpretation of the reduction. Without an exact unit, the reader cannot tell what the weekly totals represent.

**How to change it**
1. Replace “50%” with “33%.”
2. After correcting the percentage, move this bullet above the demand-model bullet.
3. Replace the phrase with “in a historical replay against [baseline rebalancing policy] using [proposed rule or optimization approach].”
4. Replace “empty-station hours” with “weekly empty station-hours” if that is the accurate unit.

*raised by content, wording, narrative*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%. *(about 1 word)*
2. [Important] “Forecast hit rate” does not define what qualifies as a hit. *(about 5 words)*
3. [Polish] “Adding weather and event features” does not identify a specific feature-engineering decision. *(about 7 words)*

**Why**
1. The absolute change is 15 percentage points; relative to the original 60% rate, the increase is 25%. Confusing these measures weakens confidence in the project’s quantitative reporting.
2. The reader needs the success threshold to interpret the change from 60% to 75%. Without that definition, the metric cannot be evaluated even after the percentage-point wording is corrected.
3. The broad categories show direction but not the analytical choice that contributed to the improvement. One representative feature and encoding method would demonstrate more technical substance than a general feature list.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points.”
2. Replace “forecast hit rate” with [metric name and threshold defining a hit], while retaining “15 percentage points” for the change.
3. Add [one telling weather or event feature and how it was encoded].

*raised by content, wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Mapped” does not show how Excel or SQL was used to analyze the pantry visits. *(about 2 words)*

**Why**
The reader sees that visits were grouped by hour and day but cannot identify the technical skill demonstrated. Naming the tool and operation would connect the analysis to the technologies listed in the project heading.

**How to change it**
Replace “Mapped” with “Aggregated in SQL” or “Analyzed in Excel,” if accurate, naming only the tool that performed the grouping.

*raised by content*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not by itself support a count of unique households. *(about 2 words)*
2. [Polish] The line does not state the resulting unique-household count. *(about 5 words)*
3. [Polish] “Matched repeat visitors” does not identify the rule or fields used for record linkage. *(about 5 words)*
4. [Polish] “Cleaned 9,000 handwritten visit logs into a single table” illogically suggests that physical logs were cleaned into a table. *(about 2 words)*

**Why**
1. Several visitors can belong to the same household, so person-level deduplication produces unique visitors rather than unique households. A household count requires household identifiers or explicit household-level linkage.
2. The 9,000 records show input scale rather than the size of the analytical result. The final total would make the deliverable concrete if the household claim is valid and the figure can be disclosed.
3. The wording could describe anything from exact matching to substantive entity resolution. Without one matching detail, the reader cannot judge the level of data-cleaning skill involved.
4. The wording blurs the separate work of digitizing the handwritten material and cleaning the resulting records. That imprecision makes the data-preparation process harder to understand.

**How to change it**
1. Change the result to “its first count of unique visitors,” or, if household identifiers were used, say “matched records using [household identifier or household-level linkage method].”
2. After the corrected result, add [number of unique households identified] or [number of unique visitors identified], as applicable.
3. After the phrase, add “using [most important matching field or rule].”
4. Replace the phrase with “Digitized and cleaned 9,000 handwritten visit records in a single table.”

*raised by content, wording*

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] “Each month after the project ended” gives a cadence but not the duration of continued use. *(about 3 words)*

**Why**
The reader can see that the handoff worked at least once but cannot distinguish a single follow-up from sustained adoption. A duration or update count would show how durable the guide was.

**How to change it**
Replace “after the project ended” with “for [number of months] after the project ended” or “for [number of monthly updates].”

*raised by content*

## Already working

- s2:e1:b1: Combines a clear operational outcome with a strong before-and-after measure.

## Set aside (2)

- s2:e2:b3: “while also” is filler that adds no substantive information.
- s3:e0:b0: “within 12% mean absolute error” is missing an article; correct it to “within a 12% mean absolute error.”
