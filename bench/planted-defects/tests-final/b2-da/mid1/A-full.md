# Full review: resume.pdf

**83/100** — format 100 · content 74 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 14 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 7 words)*

**Why**
Date of birth and nationality do not help a reader assess the candidate’s qualifications for the roles described. Including them can distract from the relevant experience and personal information is conventionally left off.

**How to change it**
Remove the date of birth and nationality details.

*raised by file*

> B.S. in Statistics

**Problem**
[Important] Education appears before experience even though the résumé includes several years of relevant work. *(no words)*

**Why**
The current order leads with the degree rather than the candidate’s relevant analytical experience. A reader should see that experience before the education entry.

**How to change it**
Move the Education entry below Experience.

*raised by narrative*

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
1. [Important] The duties do not state what they achieved. *(about 5 words to add)*
2. [Polish] The past-tense verbs make recurring work in this current role sound ended. *(no words)*

**Why**
1. A reader can see the responsibilities, but not whether the work supported busy shifts, accurate closeouts, or another useful outcome. Without that value, the bullet is harder to distinguish from a list of routine duties.
2. The role is marked “Present,” so a reader may wonder whether selling tickets and balancing the drawer are still part of the job. The tense mismatch weakens the accuracy of the description.

**How to change it**
1. If you keep this duty, add one supported outcome, such as [sales or transaction volume] or [cash accuracy compared with the expected drawer total].
2. Change “Sold” to “Sell” and “balanced” to “balance” for duties that are ongoing.

*raised by content, wording*

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
1. [Important] The training bullet does not state what the training achieved. *(about 5 words to add)*
2. [Polish] The training bullet should come before the less distinctive duties bullet. *(no words)*

**Why**
1. The count shows how many people were trained and names the topics, but not whether the attendants became able to work independently or handled tickets and refunds accurately. Without an outcome, a reader cannot judge the value of the training.
2. Training three new attendants gives a clearer indication of responsibility than the opening bullet’s routine duties. Leading with it would make the stronger contribution easier to notice when scanning the entry.

**How to change it**
1. If you have evidence, add one result such as [time to independent shifts] or [change in ticketing or refund errors].
2. Move this bullet ahead of the duties bullet if both are retained.

*raised by content, narrative*

> Box Office Attendant

**Problem**
[Important] This cinema role is disconnected from the analytics direction and takes up too much space if it is retained. *(saves about 14 words)*

**Why**
A reader can see that the duties fit the role, but the entry does not support the analytics story established elsewhere. Keeping two bullets for this less relevant position risks giving it more prominence than the current analytics work.

**How to change it**
If you retain the role, keep it to one line; the training bullet is the stronger of the two, so consider keeping that one.

*raised by narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The dashboard bullet does not show how retention patterns were identified or presented. *(about 5 words to add)*

**Why**
The reader can see the dashboard and the reported business result, but not the analytical or technical contribution behind the deliverable. One specific method or platform would make that contribution easier to assess.

**How to change it**
If it demonstrates your contribution, add one detail: [the key retention or cohort analysis method, or the dashboard platform].

*raised by content*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join method for finding customers with no orders is reversed, and counting null customer names does not reliably identify them. *(about 2 words to add)*
2. [Important] The line does not say what finding customers with no orders changed or enabled. *(about 5 words to add)*
3. [Important] The detailed join-and-count explanation distracts from the finding. *(saves about 5 words)*

**Why**
1. A left join from orders preserves orders, so it cannot reveal customers who have none. Customer names can also be null for customers who do have orders, which makes that count unreliable.
2. A reader can see the finding and the method, but cannot tell why identifying these customers mattered to the business or team. Without a consequence, the analysis has no visible value.
3. The sentence spends much of its space explaining the mechanics before the reader can take in what was found. That makes the result harder to scan and less prominent.

**How to change it**
1. If that is the query you ran, describe it accurately; to find customers with no orders, left-join customers to orders and check for a null, non-nullable order key.
2. Add [what action, decision, or follow-up the finding enabled].
3. Lead with “Found customers with no orders” and shorten the method that follows.

*raised by content, wording*

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The long list of methods buries the increase in orders tied to a campaign. *(no words)*

**Why**
The reader encounters several technical tasks before reaching the 58%-to-81% result. That delays the clearest evidence of the work’s impact.

**How to change it**
Move “Raised the share of orders tied to a campaign from 58% to 81%” to the beginning, then follow it with the methods.

*raised by wording*

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The funding outcome appears after the presentation detail, making the result harder to catch. *(no words)*

**Why**
A reader scanning the bullet must first process the presentation before reaching the evidence that the recommendations influenced the next budget. Putting that outcome first would make the impact clearer.

**How to change it**
Move the funding outcome before the presentation detail.

*raised by wording*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Stopping at the first daily p-value below 0.05 does not support calling the test significant. *(about 3 words to add)*
2. [Important] The test bullet describes the process but does not say what the test found or changed. *(about 6 words to add)*
3. [Important] The lengthy account of repeated p-value checks leaves the test’s result unstated. *(saves about 7 words)*

**Why**
1. Repeatedly checking the p-value and stopping at the first crossing increases the false-positive rate above the usual 5% under an unadjusted threshold. A nominal p-value below 0.05 does not establish significance under that stopping rule.
2. A reader cannot tell whether checkout performance improved or what decision the test supported. The p-value threshold alone does not communicate a business result.
3. Most of the line is spent on how the test was monitored, so a reader scanning the role may miss that it has no outcome. The process detail crowds out the information that would show the test’s value.

**How to change it**
1. If you used a valid sequential-testing procedure, name it and report its significance criterion; otherwise say the test stopped when the nominal p-value first fell below 0.05, without calling that statistical significance.
2. Add [the change in checkout conversion versus control] and include a decision only if the test informed one.
3. Cut the extended process detail and use the space for the test outcome; keep only the stopping description needed to report the method accurately.

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Polish] The analysis description does not show how it identified the evening peak. *(about 4 words to add)*
2. [Polish] The call-center outcome should lead the entry, and “my findings” uses a first-person pronoun. *(no words)*

**Why**
1. A reader can see the staffing change and shorter hold time, but not the analytical approach behind the recommendation. One specific approach would make the skill behind that result easier to assess.
2. The staffing change and reduction in hold time are the clearest result in the entry, but this bullet is not first. The pronoun also makes the bullet read like a sentence rather than a résumé phrase.

**How to change it**
1. Add [hour-of-day call-volume analysis] if that is how you identified the peak.
2. Move this bullet to the top of the entry and replace “my findings” with a direct phrase such as “findings.”

*raised by content, narrative, wording, file*

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Error] “Writes” is present tense even though this role ended in July 2022. *(no words)*

**Why**
The dates show that the role is over, so the present-tense verb makes the timing of the work inconsistent. A reader may take it to mean the guide is still being written.

**How to change it**
Change “Writes” to “Wrote.”

*raised by wording*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The unrelated duties bury the time saving and make it unclear which work produced it. *(saves about 18 words)*
2. [Polish] The line does not identify the tool or approach used to automate the extract. *(about 3 words to add)*

**Why**
1. The phrase about saving the fraud team 10 hours a month follows a list of several tasks, so a reader cannot tell whether the extract automation or the other duties caused the saving. The list also delays the outcome.
2. The reader can see the task and the time saved, but not how the automation was carried out. A specific implementation detail could show relevant technical skill.

**How to change it**
1. If the automation produced the saving, place the 10-hour result directly after “Automated the monthly fraud-flag extract” and cut the unrelated duties; otherwise specify which task or tasks saved the time.
2. If it strengthens the line, add [automation tool or method].

*raised by content, wording*

> covering the help desk on Fridays

**Problem**
[Important] The role does not clearly focus on its analytical work because the bullets span testing, operations, documentation, and support. *(saves about 10 words)*

**Why**
The reader sees useful analytical outcomes, but also a range of unrelated duties that makes the account feel scattered. That can make the core analytical contribution harder to recognize.

**How to change it**
Keep the analytical outcomes prominent and reduce or remove unrelated operations and support detail that does not strengthen the account of this role.

*raised by narrative*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
[Important] The percentage MAE has no stated basis, and the modeling approach is not identified. *(about 8 words to add)*

**Why**
A reader cannot interpret the forecast error without knowing its denominator or how the percentage was normalized. The entry names Python and SQL, but those tools do not show the modeling approach behind the forecast.

**How to change it**
Clarify [how the 12% MAE was normalized], or use MAE in its original units; also add [model family] or [validation approach] if accurate.

*raised by content*

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 hours is a 33.3% reduction, not a 50% reduction. *(no words)*
2. [Important] The replay description does not say what rebalancing change was tested. *(about 5 words to add)*
3. [Polish] This result should lead the project bullets. *(no words)*
4. The wording can make the replay result sound like an observed operational result. *(no words)*

**Why**
1. The decrease is 100 hours from a baseline of 300, which is 33.3%. A 50% reduction would bring the total to 150 hours a week.
2. Without the intervention, a reader cannot see the analytical or operational method behind the result. The replay setting alone does not explain what was changed.
3. The empty-station-hours result is the clearest outcome in the project, but it appears after the forecasting bullet. Putting it first would make the impact easier to see when scanning.
4. The line begins by saying empty-station hours were cut and only later says this was “in a replay.” A reader may not know whether the reduction happened in operations or only in the replay.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. Name [the rebalancing policy or decision you evaluated].
3. Move this bullet to the top of the project entry.
4. Make clear that the 300-to-200 result was produced in the replay, rather than presenting it first as an observed operational cut.

*raised by content, wording, narrative*

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The change from 60% to 75% is 15 percentage points, not a 15% increase, and “by 15%” repeats the change already shown. *(saves about 2 words)*
2. [Important] The line does not define what counted as a forecast hit. *(about 5 words to add)*

**Why**
1. Relative to the starting hit rate of 60%, the increase is 25%; the absolute difference is 15 percentage points. Stating both “by 15%” and the starting and ending rates is also redundant.
2. Without the hit criterion, a reader cannot interpret the metric or compare it with another forecast result. The percentages alone do not explain what performance was measured.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points” and remove any repeated description of the change, while retaining the 60%-to-75% comparison.
2. Add [what counted as a forecast hit], if accurate.

*raised by content, wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The impact appears after the analysis detail instead of leading the bullet. *(no words)*

**Why**
A scanning reader must get through the description of the visit mapping before reaching the shift change and shorter Saturday line. That delays the clearest evidence of the work’s practical effect.

**How to change it**
Move the shift change and shorter-line outcome to the beginning of the bullet.

*raised by wording*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not establish a count of unique households. *(about 2 words to add)*
2. [Polish] The line does not give the number of unique households it says the work counted. *(about 1 word to add)*
3. [Polish] The outcome appears after the data-cleaning details, making it harder to spot. *(no words)*

**Why**
1. Deduplicating people supports a unique-visitor count, but visitors and households are different units: multiple visitors can belong to one household. A household count requires household-level identifiers or a defensible grouping method, neither of which the line describes.
2. The 9,000 logs show the scale of the input, not the output. The count would let readers gauge what the cleanup and matching produced.
3. A reader reaches the key result only after reading about the logs and matching process. Leading with the outcome would make the contribution easier to scan.

**How to change it**
1. If you used household identifiers or a grouping method, name it; otherwise change the claim to a count of unique visitors.
2. Replace “first count of unique households” with “[number] unique households,” if you can share the count.
3. Move the outcome about the count of unique households to the beginning of the bullet.

*raised by content, wording*

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s usage detail delays the practical point that it enabled monthly updates. *(saves about 5 words)*

**Why**
The sentence spends extra words explaining when the coordinator used the guide. The useful point is that the guide supported ongoing monthly updates after the project ended.

**How to change it**
Shorten the usage detail while retaining that the guide enabled monthly updates after the project ended.

*raised by wording*

## Already working

- s2:e1:b1: Shows a clear efficiency gain with a specific before-and-after comparison.
- s2:e1:b5: Connects training and dashboard adoption to a measurable reduction in requests.

## Set aside (1)

- s3:e0:b1: “Cut empty-station hours from 300 to 200 a week” is followed by “in a replay of last summer’s rebalancing,” leaving unclear whether this was an observed operational result or a replay result.
