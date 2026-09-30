# Full review: resume.pdf

**84/100** — format 100 · content 75 · wording 86 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 6 important, 22 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Riverside Cinema | Box Office Attendant

**Problem**
[Important] The current cinema role leads the experience even though the analyst roles and projects better establish your analytics work. *(saves about 25 words)*

**Why**
A reader encounters the box-office position before the evidence of several years of analysis. Keeping its dates visible preserves the chronology without letting that position define the page.

**How to change it**
Lead with Brightcart and Pinecrest, then the analytics projects. Move Riverside below them as a one-line additional-experience entry that retains “Aug 2025 - Present.”

*raised by narrative*

> B.S. in Statistics

**Problem**
[Important] Education opens the résumé instead of supporting the more recent analyst experience. *(no words)*

**Why**
After several years in analyst roles, the work and projects provide the more immediate evidence of your fit. Opening with the degree delays that evidence for a scanning reader.

**How to change it**
Move the Education entry below the work and projects.

*raised by narrative*

> Box Office Attendant

**Problem**
[Polish] The reason for the shift from Data Analyst to Box Office Attendant is not apparent. *(about 8 words)*

**Why**
The titles show a change in direction after the Brightcart role ended; the interval between roles is not itself a concerning gap. A reader may ask whether you are continuing to pursue analytics work.

**How to change it**
If you want to explain the shift, add [brief, accurate context for the change in roles] in an appropriate summary or application note. Do not invent a reason to fill the interval.

*raised by narrative*

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
[Polish] The cash-drawer duty does not say what the reconciliation showed. *(about 6 words)*

**Why**
A reader can see that you handled closing procedures, but not whether you resolved discrepancies or achieved another useful result. That leaves the value of the duty unclear.

**How to change it**
If tracked, add [drawer result compared with recorded sales] after “at close.” If unavailable, add [specific customer-service outcome] after “evening shifts” instead.

*raised by content*

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
[Polish] The training count does not show whether the new attendants became ready to work independently. *(about 7 words)*

**Why**
Three attendants establishes the scope of the training. A reader still cannot tell what they could handle afterward.

**How to change it**
If known, add [what the attendants could handle independently after training] after “refund policy.”

*raised by content*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The dashboard wording makes its customer coverage sound like its audience. *(no words)*

**Why**
A reader could briefly take the 2.4M customers to be dashboard users rather than the population it covers. That obscures the scale of the data work.

**How to change it**
Replace “for” with “covering.”

*raised by wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The stated join direction is wrong for finding customers with no orders, and the procedural wording obscures the needed query. *(saves about 8 words)*
2. [Polish] The line does not say what identifying customers with no orders enabled. *(about 3 words)*
3. [Polish] The count operation gives no count. *(about 8 words)*

**Why**
1. A join that preserves orders omits customers who have no orders. A null customer name could instead reflect an unmatched order or a missing name, so the described count cannot substantiate the finding.
2. A reader can see the query task but not the decision or action it supported. Without that connection, the finding reads as an exercise rather than a business contribution.
3. A reader cannot tell how many customers the work identified. That makes the size of the finding impossible to assess.

**How to change it**
1. If this is the query you ran, replace the procedural wording with “left-joining customers to orders and filtering for a null order ID.” Otherwise, verify the query before retaining the claim.
2. If the finding was used, replace “Found customers with no orders” with [how the identified customers were used].
3. If worth reporting, add [number of customers identified out of total customers assessed] after the corrected query description. Otherwise, omit the counting detail.

*raised by content, wording*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The long method-first opening buries the increase from 58% to 81%. *(saves about 10 words)*

**Why**
A scanning reader reaches several technical steps before the strongest evidence of the work. The result may be missed even though it gives those steps their significance.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the start. Keep only the most telling method detail after it.

*raised by content, wording*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
1. [Polish] The funded recommendations are not identified. *(about 4 words)*
2. [Polish] The line describes presenting the review but not the analysis behind its recommendations. *(about 5 words)*

**Why**
1. Funding shows that the review influenced a decision. Without knowing what received support, a reader cannot judge its business relevance.
2. A data analyst's contribution is harder to distinguish from delivering a presentation when the analytical basis is absent. A reader has no concrete analysis to ask about.

**How to change it**
1. Replace “its three recommendations” with a brief description of [the recommendation or initiative funded], retaining the two-of-three result.
2. If space permits, add [the key analysis that informed the recommendations] in place of some presentation detail.

*raised by content*

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] The description of using the dashboards is longer than needed. *(saves about 5 words)*

**Why**
The extra wording delays the clear outcome: fewer ad hoc requests. It adds little to the training scope already established by the count of merchandisers.

**How to change it**
Replace the quoted phrase with “to use self-serve dashboards.”

*raised by wording*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Stopping at the first daily p-value below 0.05 does not establish significance at the usual 5% threshold. *(saves about 10 words)*
2. [Polish] The A/B-test line gives neither a checkout outcome nor a resulting decision. *(about 5 words)*

**Why**
1. That threshold assumes a fixed testing plan; repeated checks followed by stopping at the first crossing increase the false-positive rate. Expanding “until significance” into a fuller claim of statistical significance would leave the error intact.
2. A reader cannot tell whether the test improved checkout or informed a useful choice. The p-value does not supply that missing result.

**How to change it**
1. If you used a valid sequential testing method, name it. Otherwise, replace “until significance” and the step-by-step stopping account with a brief description of daily monitoring that does not claim the test established significance.
2. Replace the stopping-process detail with [checkout outcome compared with the control], if measured; otherwise state [decision made from the test]. Do not retain the significance claim unless the testing method supports it.

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The staffing result should open this collection of separate junior-analyst assignments. *(no words)*
2. [Polish] The analysis that identified the evening peak is not specified. *(about 4 words)*
3. [Polish] The first-person phrase is out of place in this résumé bullet. *(no words)*

**Why**
1. The change from 9 to 5 minutes gives a scanning reader an immediate reason to examine the work. Leaving it after the test line makes the entry's strongest result less visible.
2. The staffing change and hold-time result are concrete, but a reader cannot picture the analytical step that led to them. One accurate detail would also give an interviewer a specific skill to ask about.
3. The surrounding bullets describe actions without referring to you as “my.” This shift draws attention to the phrasing instead of the staffing result.

**How to change it**
1. Move this bullet above the checkout A/B-test bullet.
2. If accurate, replace “Analyzed” with [the analysis used to identify the evening peak], retaining the staffing change and hold-time result.
3. Replace “my findings” with “the findings.”

*raised by narrative, content, wording, file*

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
1. [Error] “Writes” incorrectly presents work in a role that ended in July 2022 as ongoing. *(no words)*
2. [Polish] The halving of query errors has no stated measurement unit or comparison period. *(about 6 words)*

**Why**
1. Present tense conflicts with the position dates. The other bullets in this entry describe work completed during the role.
2. A reader cannot tell whether errors were counted per review, per query, or across a period. Without a consistent basis, the size of the improvement is hard to interpret.

**How to change it**
1. Replace “Writes” with “Wrote.”
2. Specify [unit of errors measured] and [comparison period or baseline] alongside “by half,” using only what the team tracked.

*raised by content, wording*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The administrative task list separates the fraud-extract automation from its claimed time saving. *(saves about 23 words)*
2. [Polish] The automation claim does not identify what was built or changed. *(about 5 words)*

**Why**
1. The bullets describe separate assignments, but this list makes a reader wonder which duty saved the fraud team 10 hours a month. It also weakens the link between the technical work and its result.
2. The time saving shows value, but a reader cannot distinguish a technical automation from taking over a recurring task. One implementation detail would make the contribution easier to assess.

**How to change it**
1. If the saving came from the automation, move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract” and cut the intervening duties from this bullet.
2. If accurate, add [the tool or process used to automate the extract] immediately after “extract.”

*raised by content, wording, narrative*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” incorrectly gives a percentage for an error metric measured in demand units. *(about 5 words)*
2. [Polish] The model type behind the hourly demand forecast is missing. *(about 2 words)*
3. [Polish] The forecast error has no baseline for comparison. *(about 6 words)*

**Why**
1. For hourly demand, mean absolute error is measured in trips or bikes per hour. A percentage needs a defined denominator or a different percentage-based metric, so a reader cannot tell what the reported accuracy means.
2. A reader sees the forecasting task but not the modeling skill used to carry it out. That limits what they can infer from the reported result.
3. Even after its metric is corrected, the number alone does not show whether the model improved on a simpler forecast. A reader therefore cannot judge the value of its accuracy.

**How to change it**
1. Replace it with mean absolute error of [measured trips or bikes per hour]. If you calculated a percentage-based metric instead, name the metric—such as “12% mean absolute percentage error,” if accurate—and specify [its denominator].
2. If accurate, add [model type] next to “Modeled,” naming the approach that produced the reported result.
3. If measured, add the corrected error for [baseline forecast] as a compact comparison.

*raised by content, wording*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The drop from 300 to 200 empty-station hours is a 33% reduction, not a 50% reduction. *(no words)*
2. [Important] The replay result should open the project once its percentage is corrected. *(no words)*
3. [Polish] The replay setting does not say what rebalancing decision changed. *(about 4 words)*
4. [Polish] The 300-hour starting point does not identify the rebalancing approach used as the baseline. *(about 4 words)*

**Why**
1. The decrease is 100 hours, and 100 divided by the starting 300 hours is 33.3%. The incorrect percentage undermines confidence in an otherwise prominent result.
2. The change in empty-station hours is the project's clearest operational result. Putting it first lets a scanning reader see the purpose of the forecasting work before its technical details.
3. A reader knows where the reduction was tested, but not what you designed or tested to produce it. The missing decision rule makes your contribution harder to distinguish from running a replay.
4. A reader can see the before-and-after counts but not what the replay improved upon. That makes the comparison less informative.

**How to change it**
1. Replace “a 50% reduction” with “a 33% reduction.” Keep the result identified as a replay or simulated outcome rather than an observed operational change.
2. Move this bullet above the modeling bullet, after correcting “a 50% reduction” to “a 33% reduction.”
3. If you designed or tested one, add [rebalancing decision rule] alongside “replay.”
4. Identify the 300-hour starting point as [baseline rebalancing approach] near the counts, if known.

*raised by content, wording, narrative*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] A rise from 60% to 75% is 15 percentage points, not a 15% increase. *(about 1 word)*
2. [Polish] “Forecast hit rate” does not define what counted as a hit. *(about 5 words)*

**Why**
1. The difference between the rates is 15 percentage points; relative to the original 60% rate, the increase is 25%. Calling it 15% misstates which change the figures show.
2. A reader cannot interpret the rise from 60% to 75% without knowing the success criterion. The metric's label alone does not establish how close a forecast had to be.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points.”
2. If a tolerance or threshold was used, define “hit” briefly with [forecast tolerance or threshold].

*raised by content, wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Saturday line” does not clearly name the time measure that fell. *(no words)*

**Why**
Because the result is measured in minutes, a reader has to infer that it means time spent waiting. Naming the wait makes the improvement immediately legible.

**How to change it**
Replace “Saturday line” with “Saturday wait.”

*raised by wording*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Polish] The first count of unique households is not given. *(about 4 words)*
2. [Polish] The line does not say how repeat visitors were matched. *(about 4 words)*

**Why**
1. The 9,000 logs show the size of the cleaning task, not the result of distinguishing households from visits. The missing count keeps a reader from seeing what the pantry learned.
2. With handwritten records, the identifying rule matters to understanding the data-cleaning work. Without it, a reader cannot assess how you linked visits to households.

**How to change it**
1. If available, add [number of unique households identified] after “first count of unique households.”
2. If accurate, add “using [matching rule or identifier]” after “matched repeat visitors.”

*raised by content*

## Already working

- s2:e1:b1: Pairs a substantial time saving with a specific implementation.
- s3:e1:b2: Shows a practical handoff and continued use without crowding the line with detail.

## Set aside (2)

- s2:e2:b0: “until significance” is an awkward shorthand; “until it reached statistical significance” states the intended meaning.
- s2:e2:b0: “by checking the p-value every day and stopping on the first day it fell below 0.05” narrates each step; condensing the procedure would make the line easier to scan.
