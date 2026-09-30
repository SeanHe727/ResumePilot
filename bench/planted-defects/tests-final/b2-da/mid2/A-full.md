# Full review: resume.pdf

**83/100** — format 100 · content 74 · wording 83 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

> **The wording review of `s3:e1` produced nothing.** the reader returned nothing

5 errors, 13 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 9 words)*

**Why**
Date of birth and nationality are personal details rather than evidence of qualifications. Their inclusion can distract from the experience and skills relevant to the résumé.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

*raised by file*

> Eastmoor University | B.S. in Statistics

**Problem**
[Important] Education should not lead a résumé with several years of relevant work experience. *(no words)*

**Why**
The degree is useful background, but the candidate’s work and projects are stronger evidence of current fit. Leading with education delays that evidence.

**How to change it**
Move EDUCATION below EXPERIENCE and PROJECTS.

*raised by narrative*

> Riverside Cinema | Box Office Attendant

**Problem**
[Important] Riverside Cinema should follow the analyst roles and be shortened or removed. *(no words for the move; about 10 words saved if shortened)*

**Why**
Brightcart Retail and Pinecrest Insurance establish the candidate’s analyst career direction, while the cinema role does not. Its current prominence can draw attention away from the more relevant experience.

**How to change it**
Move Riverside Cinema below Brightcart Retail and Pinecrest Insurance, then cut it or shorten it to one line.

*raised by narrative*

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
[Important] The opening bullet lists duties but gives no evidence of their outcome or quality. *(about 5 words to add)*

**Why**
A reader can picture the tasks, but cannot tell what value or result your work delivered. One relevant measure would substantiate the contribution without adding routine details.

**How to change it**
Add [a result measure, such as customers served per shift or drawer accuracy across closes].

*raised by content*

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
1. [Important] The training bullet should come before the duties bullet. *(no words)*
2. [Polish] The training result is missing. *(about 6 words to add)*
3. [Polish] The bullet names the training topics but not how you taught them. *(about 5 words to add)*

**Why**
1. The training is the stronger evidence of contribution in this entry. Leading with it would make that contribution easier to notice.
2. The count shows how many people you supported, but not whether they learned the procedures or became ready to work independently. Without an outcome, the reader cannot tell why the training mattered.
3. The topics show subject-matter familiarity, but not the teaching skill involved. One specific approach would give the reader a clearer sense of your contribution.

**How to change it**
1. Move this bullet above the ticket-sales and cash-drawer bullet.
2. Add [a training outcome, such as trainees’ readiness or time to work independently, compared with the relevant expectation or baseline].
3. If accurate, add [how you taught the material, such as demonstrating the system or supervising practice transactions].

*raised by narrative, content*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
1. [Polish] The dashboard bullet names the deliverable but not the analytical approach behind it. *(about 4 words to add)*
2. [Polish] The pronoun “that” makes it unclear whether marketing used the dashboard or the customers. *(no words)*

**Why**
1. The retention result is strong, but the reader cannot see what analysis produced the dashboard. A central method or tool would make the analytical contribution easier to assess.
2. In “for 2.4M customers that marketing used,” the relative clause can attach to “customers.” A reader may have to reread the sentence to understand what marketing used.

**How to change it**
1. After “dashboard,” add [the specific segmentation, analysis, or tool central to building it], if accurate.
2. Replace “that” with “which” to refer to the dashboard, or recast the clause so it clearly refers to the dashboard.

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The described left join cannot find customers with no orders by counting null customer names. *(about 2 words to add)*
2. [Important] The bullet spends too much space on the join details and does not say what the finding enabled or changed. *(about 6 words to add)*

**Why**
1. A left join preserves rows from the left-hand table, and this method starts with orders, so customers with no orders will not appear. A null customer name instead indicates an unmatched order or a record whose customer name is null.
2. The reader gets a detailed method but no business use or consequence of identifying these customers. That leaves the value of the analysis unclear, and the method detail overwhelms the finding.

**How to change it**
1. If this was the method, say you left-joined customers to orders and identified customers with no matching order, such as by checking for a null order identifier. Otherwise, remove or correct the method claim.
2. After this phrase, add [the action enabled or resulting change], using a measurable result if available; cut the detailed join and row-counting explanation unless needed to state the accurate method.

*raised by content, wording*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The campaign-attribution result is buried after three methods instead of leading the bullet. *(no words)*

**Why**
A scanning reader has to pass through several methods before reaching the business-relevant change. The increase in orders tied to a campaign may be missed.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the opening, then retain the most telling method details after it.

*raised by content, wording*

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] The reduction in ad hoc data requests has no comparison period. *(about 3 words to add)*

**Why**
The reduction is promising, but the reader cannot tell how it was measured or what timeframe it covers. Without that context, the change is difficult to assess.

**How to change it**
Clarify [the comparison period] and, if available, add [request counts before and after].

*raised by content*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The A/B test uses repeated unadjusted significance checks as an invalid stopping rule. *(about 3 words to add)*
2. [Important] The bullet gives no measured checkout result or decision from the test. *(about 8 words to add)*
3. [Polish] “Until significance” is vague and repeats the stated stopping rule. *(saves about 2 words)*

**Why**
1. Repeatedly checking an ordinary p-value and stopping at the first value below 0.05 raises the false-positive rate above the usual 5%. The stated method therefore does not support treating the result as statistically significant at the 0.05 level.
2. A reader cannot tell which variant performed better, how much the checkout outcome differed, or whether the test informed a product decision. The threshold alone does not show the practical result of the analysis.
3. The phrase does not explain the analysis, and the next clause already says the test stopped when the p-value first fell below 0.05. Keeping both makes the method harder to read without adding information.

**How to change it**
1. If you used a sequential-testing method or adjustment, name it. Otherwise, remove the significance claim and describe the result using a prespecified fixed-sample analysis, if one was conducted.
2. Add [the checkout metric and result for each variant or the measured change] and [the decision that followed, such as which variant was adopted], if accurate.
3. Cut “until significance.”

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The analysis bullet does not lead with its strongest result. *(no words)*
2. [Polish] The bullet does not show how the analysis identified the evening peak. *(about 4 words to add)*
3. [Polish] The phrase uses a first-person pronoun, which does not fit résumé bullet style. *(saves 1 word)*

**Why**
1. The staffing change and hold-time reduction are more compelling than the description of the analysis alone. Leading with the outcome would make the contribution easier to notice.
2. The staffing change and hold-time result are clear, but the reader cannot see what analytical skill supported the recommendation. One telling detail would make the contribution more credible.
3. “My” makes the line read like a sentence in a personal account rather than a résumé phrase. Removing it keeps the result and contribution while avoiding the pronoun.

**How to change it**
1. Move this bullet before the other Pinecrest bullets.
2. Add [the key analysis used to identify the evening peak], if it helps explain how the findings supported the staffing change.
3. Remove “my” from “my findings.”

*raised by narrative, content, wording, file*

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Polish] “Writes” uses present tense for work in a role that ended in July 2022. *(no words)*

**Why**
The role is completed, but the present-tense verb suggests the work is ongoing. That tense mismatch can make the timeline unclear.

**How to change it**
Replace “Writes” with “Wrote.”

*raised by wording*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The list of secondary duties buries the fraud extract’s 10-hour monthly saving. *(saves about 20 words)*
2. [Polish] The bullet gives no technical or analytical detail about how the extract was automated. *(about 3 words to add)*

**Why**
1. The calendar, sales questions, onboarding documents, and help-desk coverage distract from the analyst contribution and its measured result. The entry also mixes this long list of unrelated support duties with analysis and team practices, making the analyst work harder to see.
2. The time saved is clear, but the reader cannot assess the technical skill behind the automation. One relevant approach or tool would make the contribution easier to evaluate.

**How to change it**
1. Cut the list of secondary duties and keep the fraud-extract work and its 10-hour monthly saving prominent.
2. Add [the key automation approach or tool], if it is relevant to the work.

*raised by wording, narrative, content*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
[Important] The forecast bullet does not name the modeling approach or explain the percentage denominator for its error metric. *(about 7 words to add)*

**Why**
The task and scale are clear, but the reader cannot see the technical approach behind the forecast. Mean absolute error is usually read in the target’s units, so a percentage needs a denominator to be interpretable.

**How to change it**
Replace “Modeled” or add after it [the model or forecasting approach used]. After the error metric, add [the denominator used to express the error as a percentage].

*raised by content*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 empty-station hours is a 33.3% reduction, not a 50% reduction. *(no words)*
2. [Important] The empty-station result should lead the project bullets. *(no words)*
3. [Polish] The replay bullet does not say what rebalancing approach produced the change. *(about 4 words to add)*

**Why**
1. The reduction is 100 hours out of the original 300, which is one-third. A 50% reduction from 300 would bring the total to 150 hours a week.
2. The measured change is the strongest result in this project. Leading with it would make the impact easier to notice.
3. The reader can see the simulated outcome, but cannot tell what intervention or rule was tested. One specific approach would make the result more credible.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction,” or use the correct ending figure if the reduction was actually 50%.
2. Move this bullet before the other City Bike-Share project bullets.
3. After “replay,” add [the rebalancing strategy or rule tested].

*raised by content, wording, narrative*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The change from 60% to 75% is 15 percentage points, not a 15% increase. *(about 2 words to add)*
2. [Important] The bullet does not define what counts as a forecast hit. *(about 5 words to add)*

**Why**
1. The absolute change is 15 percentage points. Relative to the original 60% hit rate, the increase is 25%, so “by 15%” misstates the change.
2. The 60% and 75% figures are easier to interpret with a consistent measure, but the reader cannot judge the metric without its criterion. The result is therefore hard to assess.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points,” keeping “from 60% to 75%.”
2. After “hit rate,” add [the threshold or rule used to count a forecast as a hit].

*raised by content, wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The unique-household result does not state the number of households identified. *(about 2 words to add)*

**Why**
The 9,000 logs show how much data you handled, not what the analysis revealed. Without the resulting count, the reader cannot judge the scale of the finding.

**How to change it**
Replace “its first count of unique households” with [the number of unique households identified].

*raised by content*

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] “After the project ended” adds timeline detail that weighs down the guide bullet. *(saves about 2 words)*

**Why**
The phrase adds little beyond explaining when the coordinator used the guide. “Continued using” conveys its ongoing value more directly.

**How to change it**
Replace “used ... after the project ended” with “continued using,” adjusting the surrounding words as needed.

*raised by wording*

## Already working

- s2:e1:b1: Leads with a concrete operational improvement.
- s2:e1:b4: Shows that the work reached senior decision-makers and affected funding.
