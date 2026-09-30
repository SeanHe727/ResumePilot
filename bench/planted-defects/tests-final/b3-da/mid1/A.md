> Here is my resume: bench/planted-defects/tests-final/b3-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets, plus the resume’s narrative and formatting. No job description was provided, so I did not assess role fit.

The main changes to address are:

- **Fix accuracy and method issues:** The Pinecrest A/B-test bullet describes checking significance daily and stopping when *p* fell below 0.05; the reviewer flagged this as statistically invalid as written. In the bike-share project, the stated reduction from 300 to 200 hours does not match “50%,” and the increase from 60% to 75% is 15 percentage points, not 15%. Clarify the measures and results.
- **Correct the SQL explanation:** The Brightcart bullet says a left join identified customers with no orders by finding null customer names. The reviewer noted that this method does not support that claim as written.
- **Reorder and streamline:** Put Experience before Education and list Brightcart before Pinecrest. The reviewers also flagged the long list of unrelated Pinecrest duties as burying the result.
- **Polish individual bullets:** Remove first-person wording, use past tense for the completed Pinecrest role, and clarify the analysis behind some results. The format review also flagged date of birth and nationality as personal details to remove.

The file parses cleanly as a one-page resume. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 80 · wording 81 · narrative 70

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 13 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The personal details identified in the file finding should be removed.

**Why**
Date of birth and nationality are personal details a reader is not meant to weigh when assessing the résumé. Including them can distract from the candidate’s qualifications.

**How to change it**
Remove “Date of birth: 9 Jan 1998 | Nationality: Brazilian.”

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] Experience should appear before Education, and the Experience entries should be in newest-first order.

**Why**
The current ordering puts Education before the candidate’s established analyst work. It also places the older Pinecrest role above the more recent Brightcart role, making the experience chronology harder to scan.

**How to change it**
Move Experience above Education, then list Brightcart before Pinecrest.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] The test’s stopping rule is statistically invalid as written.
2. [Important] The bullet gives the test process but not its outcome or resulting change.

**Why**
1. Repeatedly checking p-values and stopping at the first value below 0.05 inflates the test’s overall Type I error rate. A reader therefore cannot rely on the stated threshold as evidence of significance; a 5% rate requires a prespecified single analysis or an appropriate sequential-testing adjustment.
2. A reader cannot tell what the experiment established or whether it improved checkout performance. The stopping threshold does not show the value of the work, and the process detail keeps the key takeaway from standing out.

**How to change it**
1. If you used a sequential-testing adjustment, name it. Otherwise, describe a prespecified single analysis or remove the claim that stopping at p < 0.05 established significance.
2. Replace “until significance” with [primary metric and measured result versus control].

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The bullet does not say what analysis identified the evening peak.
2. [Important] The first-person pronoun makes the staffing result indirect.
3. [Important] This bullet should appear before the other Pinecrest bullets.

**Why**
1. The reader can see the data source but not how your analysis supported the staffing decision. One concrete analytic detail would make your skill easier to assess.
2. A reader has to pass through “my findings” to understand the action you drove. The pronoun also conflicts with the résumé’s phrase-style bullets, making the result less direct.
3. The staffing change and reduction in hold time are the strongest result in this entry, but they do not lead it. Opening with this line would make that result more prominent to a scanning reader.

**How to change it**
1. Add one detail about the analysis that identified the peak, such as [hourly call-volume pattern or other analysis used], if accurate.
2. Replace “my findings moved” with a direct action, such as “shifted,” if accurate; remove “my.”
3. Move this bullet to the opening position in the Pinecrest entry.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
[Polish] “Writes” is present tense even though the role ended in July 2022.

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The unrelated duty list delays the time-saving result.

**Why**
A scanning reader has to pass a list of ancillary duties before reaching the main contribution and its measurable value. That makes the impact less immediate.

**How to change it**
Cut the ancillary-duty list and move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.”

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Important] The dashboard bullet names the deliverable but not the analytical or technical work used to build it.

**Why**
A reader can see what you produced, but not what data or analysis demonstrates your skills. One telling detail would make the contribution more credible without crowding the strong result.

**How to change it**
Add one compact detail about the retention logic or data work, such as [how you defined or identified lapsed buyers], if accurate.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] A left join preserves the customer name when there is no matching order, so a null customer name does not identify customers with no orders.
2. [Important] The bullet gives the finding but not what it led to, and foregrounds the method instead of its significance.

**Why**
1. A null customer name indicates missing name data, not the absence of an order. The correct check is for a null value in an order-side column that is non-null whenever an order matches.
2. Without a stated use or outcome, a reader cannot tell why identifying these customers mattered to the business. The detailed join description takes space while leaving that value unstated.

**How to change it**
1. Replace “null customer name” with a null order identifier, using an order-side field that is non-null whenever an order matches.
2. Cut “by left-joining the orders table to the customers table and counting rows with a null customer name” and add [what the business did with the identified customers or what decision the analysis enabled].

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
1. [Important] The long gerund phrase obscures who did the work and delays the result.
2. [Polish] “dbt-style SQL models” is team-specific shorthand that may not be clear outside the team.

**Why**
1. The opening phrase makes the work itself the grammatical subject, so the reader has to work through a long list before reaching the outcome. That weakens the impact of the increase from 58% to 81%.

**How to change it**
1. Replace the opening gerund phrase with an active past-tense verb, such as “Joined,” before the existing description of the work.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] MAE is measured in the same units as demand; reporting it as 12% without a denominator or normalization is not interpretable.
2. [Important] The bullet does not say what modeling approach produced the forecast.

**Why**
1. A percentage requires a defined reference value, but the bullet does not give one. A reader cannot interpret or compare the forecast error as stated.
2. A reader cannot see the main analytical skill behind the result or what kind of model you built. One specific modeling detail would make that work easier to assess.

**How to change it**
1. Report MAE in demand units, or name the normalization and report the metric as normalized MAE; use the form you actually calculated.
2. Add [model type or key modeling approach] after “Modeled,” if accurate.

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The change from 300 to 200 empty-station hours a week is about a 33.3% reduction, not a 50% reduction.
2. [Important] The bullet does not say what rebalancing change was tested, and it does not make clear that the reduction was simulated.

**Why**
1. The decrease is 100 hours from a baseline of 300, or about one-third. The stated percentage contradicts the before-and-after figures; a 50% reduction from 300 would leave 150 hours.
2. The replay setting signals an evaluation, but the reader cannot tell what decision or change led to the result. Nor is it clear from the result alone that the reduction was simulated rather than observed.

**How to change it**
1. Replace “a 50% reduction” with “about a 33.3% reduction,” or use the correct endpoint if the reduction was 50%.
2. Clarify that the result was simulated and add [the rebalancing decision or change tested in the replay], if accurate.

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] The increase from 60% to 75% is 15 percentage points, not 15%.
2. [Important] The bullet does not define what counts as a forecast “hit.”

**Why**
1. The rates differ by 15 percentage points. Relative to the starting rate of 60%, the increase is 25%, so the current wording conflicts with the figures.
2. Readers cannot tell what counted as a correct forecast, which makes the reported hit rate hard to interpret. The bullet also describes the change both as “by 15%” and as a move from 60% to 75%, which can be read as different kinds of increase.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points”; if the intended claim is a relative increase, say “by 25%.”
2. Add [the criterion for a forecast to count as a hit] and describe the change as “15 percentage points,” if accurate.

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The bullet does not state the number of unique households identified.

**Why**
The 9,000 logs show the scale of the input, not the result of deduplicating them. Without the resulting count, a reader cannot gauge the output or its usefulness.

**How to change it**
Replace “first count of unique households” with [number of unique households identified].

## Already working

- s2:e1:b1: Makes the operational benefit immediately clear.
- s2:e1:b4: Shows a concrete downstream response to the recommendations.
- s2:e1:b5: Connects training to a measurable change in how the team obtains data.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-92064997.md.

