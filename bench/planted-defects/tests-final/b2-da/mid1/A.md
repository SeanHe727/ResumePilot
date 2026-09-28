> Here is my resume: bench/planted-defects/tests-final/b2-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the full resume’s narrative and formatting. No job description was provided, so this isn’t a posting-specific review.

Changes to prioritize:
- **Clarify or correct the project metrics:** The bike-share results need clearer definitions and accurate percentage-point/percentage-change wording. Also distinguish replay results from observed operational results.
- **Resolve factual or methodological questions:** The Brightcart customer query describes the table join in the opposite direction from the intended finding; the Pinecrest A/B-test bullet needs its result and a sound explanation of how the test was stopped.
- **Bring outcomes forward:** Several bullets bury the impact under process or unrelated duties. The review also flags the current cinema role as disconnected from the analytics direction; consider compressing it.
- **Reorder the page:** Put Experience before Education. Remove the personal details flagged in the format check.

The PDF parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 74 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

7 errors, 14 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality do not help a reader assess the candidate’s qualifications for the roles described. Including them can distract from the relevant experience and personal information is conventionally left off.

**How to change it**
Remove the date of birth and nationality details.

> B.S. in Statistics

**Problem**
[Important] Education appears before experience even though the résumé includes several years of relevant work.

**Why**
The current order leads with the degree rather than the candidate’s relevant analytical experience. A reader should see that experience before the education entry.

**How to change it**
Move the Education entry below Experience.

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
1. [Important] The duties do not state what they achieved.
2. [Polish] The past-tense verbs make recurring work in this current role sound ended.

**Why**
1. A reader can see the responsibilities, but not whether the work supported busy shifts, accurate closeouts, or another useful outcome. Without that value, the bullet is harder to distinguish from a list of routine duties.

**How to change it**
1. If you keep this duty, add one supported outcome, such as [sales or transaction volume] or [cash accuracy compared with the expected drawer total].

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
1. [Important] The training bullet does not state what the training achieved.
2. [Polish] The training bullet should come before the less distinctive duties bullet.

**Why**
1. The count shows how many people were trained and names the topics, but not whether the attendants became able to work independently or handled tickets and refunds accurately. Without an outcome, a reader cannot judge the value of the training.

**How to change it**
1. If you have evidence, add one result such as [time to independent shifts] or [change in ticketing or refund errors].

> Box Office Attendant

**Problem**
[Important] This cinema role is disconnected from the analytics direction and takes up too much space if it is retained.

**Why**
A reader can see that the duties fit the role, but the entry does not support the analytics story established elsewhere. Keeping two bullets for this less relevant position risks giving it more prominence than the current analytics work.

**How to change it**
If you retain the role, keep it to one line; the training bullet is the stronger of the two, so consider keeping that one.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The dashboard bullet does not show how retention patterns were identified or presented.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The join method for finding customers with no orders is reversed, and counting null customer names does not reliably identify them.
2. [Important] The line does not say what finding customers with no orders changed or enabled.
3. [Important] The detailed join-and-count explanation distracts from the finding.

**Why**
1. A left join from orders preserves orders, so it cannot reveal customers who have none. Customer names can also be null for customers who do have orders, which makes that count unreliable.
2. A reader can see the finding and the method, but cannot tell why identifying these customers mattered to the business or team. Without a consequence, the analysis has no visible value.
3. The sentence spends much of its space explaining the mechanics before the reader can take in what was found. That makes the result harder to scan and less prominent.

**How to change it**
1. If that is the query you ran, describe it accurately; to find customers with no orders, left-join customers to orders and check for a null, non-nullable order key.
2. Add [what action, decision, or follow-up the finding enabled].
3. Lead with “Found customers with no orders” and shorten the method that follows.

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The long list of methods buries the increase in orders tied to a campaign.

**Why**
The reader encounters several technical tasks before reaching the 58%-to-81% result. That delays the clearest evidence of the work’s impact.

**How to change it**
Move “Raised the share of orders tied to a campaign from 58% to 81%” to the beginning, then follow it with the methods.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
[Polish] The funding outcome appears after the presentation detail, making the result harder to catch.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Stopping at the first daily p-value below 0.05 does not support calling the test significant.
2. [Important] The test bullet describes the process but does not say what the test found or changed.
3. [Important] The lengthy account of repeated p-value checks leaves the test’s result unstated.

**Why**
1. Repeatedly checking the p-value and stopping at the first crossing increases the false-positive rate above the usual 5% under an unadjusted threshold. A nominal p-value below 0.05 does not establish significance under that stopping rule.
2. A reader cannot tell whether checkout performance improved or what decision the test supported. The p-value threshold alone does not communicate a business result.
3. Most of the line is spent on how the test was monitored, so a reader scanning the role may miss that it has no outcome. The process detail crowds out the information that would show the test’s value.

**How to change it**
1. If you used a valid sequential-testing procedure, name it and report its significance criterion; otherwise say the test stopped when the nominal p-value first fell below 0.05, without calling that statistical significance.
2. Add [the change in checkout conversion versus control] and include a decision only if the test informed one.
3. Cut the extended process detail and use the space for the test outcome; keep only the stopping description needed to report the method accurately.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Polish] The analysis description does not show how it identified the evening peak.
2. [Polish] The call-center outcome should lead the entry, and “my findings” uses a first-person pronoun.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Error] “Writes” is present tense even though this role ended in July 2022.

**Why**
The dates show that the role is over, so the present-tense verb makes the timing of the work inconsistent. A reader may take it to mean the guide is still being written.

**How to change it**
Change “Writes” to “Wrote.”

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The unrelated duties bury the time saving and make it unclear which work produced it.
2. [Polish] The line does not identify the tool or approach used to automate the extract.

**Why**
1. The phrase about saving the fraud team 10 hours a month follows a list of several tasks, so a reader cannot tell whether the extract automation or the other duties caused the saving. The list also delays the outcome.

**How to change it**
1. If the automation produced the saving, place the 10-hour result directly after “Automated the monthly fraud-flag extract” and cut the unrelated duties; otherwise specify which task or tasks saved the time.

> covering the help desk on Fridays

**Problem**
[Important] The role does not clearly focus on its analytical work because the bullets span testing, operations, documentation, and support.

**Why**
The reader sees useful analytical outcomes, but also a range of unrelated duties that makes the account feel scattered. That can make the core analytical contribution harder to recognize.

**How to change it**
Keep the analytical outcomes prominent and reduce or remove unrelated operations and support detail that does not strengthen the account of this role.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
[Important] The percentage MAE has no stated basis, and the modeling approach is not identified.

**Why**
A reader cannot interpret the forecast error without knowing its denominator or how the percentage was normalized. The entry names Python and SQL, but those tools do not show the modeling approach behind the forecast.

**How to change it**
Clarify [how the 12% MAE was normalized], or use MAE in its original units; also add [model family] or [validation approach] if accurate.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 hours is a 33.3% reduction, not a 50% reduction.
2. [Important] The replay description does not say what rebalancing change was tested.
3. [Polish] This result should lead the project bullets.
4. The wording can make the replay result sound like an observed operational result.

**Why**
1. The decrease is 100 hours from a baseline of 300, which is 33.3%. A 50% reduction would bring the total to 150 hours a week.
2. Without the intervention, a reader cannot see the analytical or operational method behind the result. The replay setting alone does not explain what was changed.
4. The line begins by saying empty-station hours were cut and only later says this was “in a replay.” A reader may not know whether the reduction happened in operations or only in the replay.

**How to change it**
1. Replace “a 50% reduction” with “a 33.3% reduction.”
2. Name [the rebalancing policy or decision you evaluated].
4. Make clear that the 300-to-200 result was produced in the replay, rather than presenting it first as an observed operational cut.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The change from 60% to 75% is 15 percentage points, not a 15% increase, and “by 15%” repeats the change already shown.
2. [Important] The line does not define what counted as a forecast hit.

**Why**
1. Relative to the starting hit rate of 60%, the increase is 25%; the absolute difference is 15 percentage points. Stating both “by 15%” and the starting and ending rates is also redundant.
2. Without the hit criterion, a reader cannot interpret the metric or compare it with another forecast result. The percentages alone do not explain what performance was measured.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points” and remove any repeated description of the change, while retaining the 60%-to-75% comparison.
2. Add [what counted as a forecast hit], if accurate.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] The impact appears after the analysis detail instead of leading the bullet.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Error] Matching repeat visitors does not establish a count of unique households.
2. [Polish] The line does not give the number of unique households it says the work counted.
3. [Polish] The outcome appears after the data-cleaning details, making it harder to spot.

**Why**
1. Deduplicating people supports a unique-visitor count, but visitors and households are different units: multiple visitors can belong to one household. A household count requires household-level identifiers or a defensible grouping method, neither of which the line describes.

**How to change it**
1. If you used household identifiers or a grouping method, name it; otherwise change the claim to a count of unique visitors.

> Wrote a one-page guide the pantry coordinator used to update the visit table each month after the project ended.

**Problem**
[Polish] The guide’s usage detail delays the practical point that it enabled monthly updates.

## Already working

- s2:e1:b1: Shows a clear efficiency gain with a specific before-and-after comparison.
- s2:e1:b5: Connects training and dashboard adoption to a measurable reduction in requests.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9fb11080.md.

