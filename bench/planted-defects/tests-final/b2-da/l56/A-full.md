# Full review: resume.pdf

**85/100** — format 100 · content 78 · wording 85 · narrative 64

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that are conventionally omitted. *(saves about 8 words)*

**Why**
“Date of birth” and “Nationality” are not evidence of analytical ability and invite judgments unrelated to the role. Their presence uses valuable space without helping a recruiter assess fit.

**How to change it**
Delete “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

*raised by file*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] The section order makes the degree and unrelated current job more prominent than the analytics experience. *(no words)*

**Why**
After five years of work, leading with Education makes the résumé appear less experienced than it is. Placing Riverside Cinema before the analytics roles and projects also gives a reader the wrong first impression about the candidate’s direction.

**How to change it**
Move Experience and Projects before Education, place Riverside Cinema in a short Additional Experience section after the analytics roles and projects or reduce it to one line, and make the analytics direction visible before that role.

*raised by narrative*

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
[Important] The routine box-office duties do not show an outcome, operational scale, or specific system, and they should not lead an analytics-focused résumé. *(about 6 words to add)*

**Why**
A hiring reader can see what was done but cannot tell whether the work was performed at meaningful volume or with consistent accuracy. The generic duties therefore contribute little to the analytics story, while “Trained 3 new attendants” is the clearer transferable signal.

**How to change it**
Remove “during evening shifts,” add [tickets or concessions processed per shift], [cash-variance result] across [number of shifts or transactions], and [ticketing or point-of-sale system] if accurate; move this bullet after the training bullet or reduce the role to one line.

*raised by content, wording, narrative*

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
[Important] The training bullet gives the scope of the training but not its result, so it should lead the entry. *(about 5 words to add)*

**Why**
“3” shows the number of attendants trained, but it does not show whether they became independent or met a readiness standard. Without that outcome, the strongest transferable responsibility remains less persuasive than it could be.

**How to change it**
Move this bullet first and add [the clearest training outcome], such as independent shift readiness, policy proficiency, or [time to qualification], compared with [the usual onboarding or readiness standard] if available.

*raised by content, narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Important] The retention-dashboard bullet needs one compact technical or analytical detail to show how the result was produced. *(about 2 words to add)*

**Why**
The 2.4M-customer scale and 22%-to-27% outcome are immediately valuable, but “Built” does not reveal the analyst’s method. A specific tool or segmentation approach would give the reader a concrete basis for evaluating the work.

**How to change it**
Add [SQL/BI tool] or [retention segmentation approach] after “dashboard,” if it was central to the work.

*raised by content*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The method for finding customers with no orders is backwards and describes the wrong null field. *(about 2 words to add)*
2. [Important] The customer-without-orders finding gives no count, percentage, business consequence, or direct description of the join result. *(about 6 words to add)*

**Why**
1. A left join preserves every row from the left table, so joining orders to customers cannot retain customers who have no orders. A null customer name would generally indicate an order that failed to match a customer, not a customer with no order.
2. The reader can understand the query but cannot judge the scale or what changed because of it. The bullet therefore reads like a technical exercise rather than work that supported a campaign, corrected data, or informed a decision.

**How to change it**
1. Replace the method with: left-join the customers table to the orders table and identify rows with a null order identifier.
2. Replace “counting rows with a null customer name” with “identified customers with no matching orders,” and add [number or share of customers] plus [the resulting business use or measured outcome], if available.

*raised by content, wording*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The attribution bullet makes the methods the grammatical subject and buries the 58%-to-81% result after a long list. *(no words)*

**Why**
A scanning reader may miss the impact and may not immediately see the candidate’s ownership of the work. Leading with the result would make the contribution legible while retaining the technical scope.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the front, then follow it with “by joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models.”

*raised by wording*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Important] The leadership-review bullet shows presentation ownership but not the analysis that produced the funded recommendations. *(about 2 words to add)*

**Why**
A reader can see that the review was presented, but cannot tell whether the recommendations came from analysis performed by the candidate. That weakens the connection between the communication activity and the budget outcome.

**How to change it**
Add [cohort analysis], [customer segmentation], or [trend analysis] before “presented,” if it directly produced the recommendations.

*raised by content*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
[Error] The A/B-test line uses an invalid significance procedure and does not state the test’s business result. *(about 4 words to add)*

**Why**
Checking an unadjusted p-value every day and stopping at the first value below 0.05 creates multiple opportunities for a false positive, so the stated threshold does not provide the claimed significance control. Even apart from that issue, statistical significance does not tell the reader whether checkout conversion, revenue, or another product outcome improved.

**How to change it**
Replace “until significance” and the stopping description with a prespecified sequential-testing method, naming it if known; otherwise remove or soften the significance claim. Add [the measured checkout result] compared with [the control or pre-test baseline].

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
[Important] The call-center bullet puts the method before the stronger result and uses a first-person pronoun. *(no words)*

**Why**
The staffing change and reduction from 9 to 5 minutes are the evidence a recruiter is most likely to notice, while the opening makes the line slower to scan. “My findings” also breaks the résumé’s otherwise impersonal phrasing.

**How to change it**
Move “cut average hold time from 9 to 5 minutes” and the staffing result earlier, and replace “my findings” with “the findings” or “analysis.”

*raised by wording, narrative, file*

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Error] “Writes” is the wrong tense for a responsibility in a role that ended in July 2022. *(no words)*

**Why**
Present tense makes the reader think the candidate still writes the guide and checklist. That conflicts with the dated Pinecrest position and makes the timeline internally inconsistent.

**How to change it**
Change “Writes” to “Wrote.”

*raised by content, wording*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The long list of secondary duties obscures the automation achievement and leaves the source of the 10-hour saving unclear. *(saves about 18 words)*

**Why**
A scanning reader may not know whether the monthly saving came from the fraud extract or from the combined duties. “Ad hoc questions” is also vague filler, so the main achievement loses prominence among unrelated responsibilities.

**How to change it**
Move “saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract,” then cut the secondary-duty list or split only a specific, relevant responsibility into a shorter separate bullet; replace “ad hoc questions” with the type of sales support if it must remain.

*raised by content, wording*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
[Important] The demand-modeling bullet gives accuracy but does not show the modeling approach or what the forecast enabled. *(about 6 words to add)*

**Why**
The reader can see the dataset size and 12% mean absolute error, but not the technical work behind the model or the decision it supported. Without that connection, the result remains a project metric rather than evidence of practical analytical use.

**How to change it**
Replace or supplement “Modeled” with [model type or key Python/SQL step], and add [how the forecast informed rebalancing or planning] after the error result, if accurate.

*raised by content*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
[Error] The claimed reduction is arithmetically wrong, and the line presents a replay as if it were a real operational cut without explaining the replay method. *(about 3 words to add)*

**Why**
Reducing empty-station hours from 300 to 200 removes 100 of 300 hours, which is a 33.3% reduction, not 50%. Because the result came from a replay of last summer’s rebalancing, “Cut” may also overstate the practical impact, while the reader still cannot tell what policy or rule produced the simulated result.

**How to change it**
Change “a 50% reduction” to “a 33.3% reduction,” replace “Cut” with [simulation or backtest wording], and add [rebalancing policy, optimization method, or simulation rule] that drove the replay.

*raised by content, wording, narrative*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
[Error] The change from 60% to 75% is a 15-percentage-point increase, not a 15% increase, and “hit rate” is undefined. *(about 3 words to add)*

**Why**
The current wording conflicts with its own endpoints: the absolute increase is 15 percentage points, while the relative increase is 25%. A reader also cannot tell what counted as a correct forecast, so the metric is difficult to interpret.

**How to change it**
Change the claim to “Raised forecast hit rate by 15 percentage points across 120 stations, from 60% to 75%,” and add [the criterion used to define a forecast hit] if it can fit clearly.

*raised by content, wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The pantry-shift sentence makes the causal connection and the shift change awkward. *(about 2 words to add)*

**Why**
“So the pantry moved one volunteer shift” sounds conversational and does not clearly state that the analysis informed the staffing change. That weakens the link between the evidence and the 50-to-20-minute reduction.

**How to change it**
Replace “so the pantry moved one volunteer shift” with [the pantry moved one volunteer shift based on the analysis] or another concise description of the staffing change.

*raised by wording*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Polish] The unique-household result does not state the number of households identified. *(about 2 words to add)*

**Why**
The 9,000-log input shows scale, but the reader cannot tell what the matching work produced. The result therefore remains less concrete than the dataset figure.

**How to change it**
Replace “its first count of unique households” with “[number of unique households identified] unique households.”

*raised by content*

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s continued use is not quantified. *(about 3 words to add)*

**Why**
“Each month after the project ended” could mean one update or a sustained handoff. The duration would show whether the guide created a durable process rather than a one-time document.

**How to change it**
Replace “after the project ended” with “for [number of months the guide was used],” if accurate.

*raised by content*

## Already working

- s2:e1:b1: Shows a large, immediately understandable reduction in recurring reporting effort.
- s2:e1:b5: Connects enablement activity directly to a measurable operational benefit.
