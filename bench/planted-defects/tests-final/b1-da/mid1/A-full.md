# Full review: resume.pdf

**84/100** — format 100 · content 77 · wording 79 · narrative 62

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 9 Jan 1998

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 9 words)*

**Why**
Date of birth and nationality are not relevant to judging the candidate’s analyst experience. Keeping them in the file uses space on personal information rather than qualifications.

**How to change it**
Remove the date of birth and nationality details.

*raised by file*

> Pinecrest Insurance | Junior Analyst

**Problem**
[Important] The experience entries are not ordered newest first. *(no words)*

**Why**
Pinecrest appears before the more recent Brightcart role, which interrupts the expected reverse-chronological scan. A reader has to work out the sequence from the dates.

**How to change it**
Move Brightcart Retail (Aug 2022–Jun 2025) above Pinecrest Insurance (Jul 2020–Jul 2022).

*raised by file, narrative*

> B.S. in Statistics

**Problem**
[Polish] The work history should appear before education for a candidate with several years of analyst experience. *(no words)*

**Why**
The work history is the strongest evidence of the candidate’s relevant experience, but education currently comes first. A reader should encounter that experience before the degree.

**How to change it**
Move the experience section above the education entry.

*raised by narrative*

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Owned the claims backlog report and the weekly numbers the claims managers used.

**Problem**
[Important] The bullet states responsibility for the report but does not show the reporting work or what the weekly numbers helped managers accomplish. *(about 8 words to add)*

**Why**
A reader can see that managers used the numbers, but not what they did with them or what changed as a result. The responsibility framing also leaves the analytical or reporting skill behind the work unclear.

**How to change it**
Replace “Owned” with a concrete action such as “built,” “analyzed” or “maintained,” if accurate, and replace “the weekly numbers” with [the specific metrics or report output]. Add [the decision or process the report improved], if known.

*raised by content, wording*

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Polish] The staffing-change analysis is described only in general terms, and the bullet uses a first-person pronoun. *(about 3 words to add)*
2. [Polish] The strongest call-center result is not the opening line of the entry. *(no words)*

**Why**
1. A reader can see that the staffing change improved hold time, but cannot tell what analysis informed it. “My findings” also breaks the résumé’s phrase-style wording.
2. The reduction in hold time is the clearest outcome in this entry, but it currently follows the report bullet. Leading with it would make that impact easier to notice on a quick scan.

**How to change it**
1. Replace “my findings” with a concise, pronoun-free description of [the single most relevant analysis or finding], if it adds meaningful evidence of your skill.
2. Move this bullet ahead of the claims-backlog bullet.

*raised by content, wording, file, narrative*

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
[Important] The fraud-automation result is buried in a list of unrelated support duties. *(saves about 17 words if the duty list is cut)*

**Why**
The sentence places the time saving after several other tasks, so a reader may not know which work produced it. The long list also makes the analyst accomplishment read like a task list.

**How to change it**
Move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract.” Cut the unrelated duty list or retain only a duty relevant to the analyst role.

*raised by content, wording, narrative*

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Improved reporting efficiency by 90% by moving the monthly revenue report to scheduled SQL queries.

**Problem**
1. [Important] The 90% improvement is not tied to a defined measure. *(about 5 words to add)*
2. [Polish] The two uses of “by” make the result-and-method relationship awkward to scan. *(no words)*

**Why**
1. A reader cannot tell whether “reporting efficiency” means preparation time, manual effort or something else. Without naming the measure, the percentage is hard to interpret or assess.
2. The repeated construction makes it harder to distinguish the reported result from how the change was made. That can slow a reader trying to understand the accomplishment quickly.

**How to change it**
1. Replace “reporting efficiency” with [the actual measure] and, if accurate, add [its before-and-after values].
2. Replace “by moving” with “through moving.”

*raised by content, wording*

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] A null customer name does not reliably identify customers with no orders. *(about 1 word to add)*
2. [Important] The finding about customers with no orders lacks a scale or a stated consequence. *(about 5 words to add)*

**Why**
1. A customer may have a null name even when an order matched in the join, so this condition cannot distinguish an unmatched customer from a matched one. The correct check is whether a non-null order identifier from the joined orders table is null.
2. The reader can see what the analysis found, but not how large the group was or what the finding informed. Without one of those anchors, its practical value is difficult to judge.

**How to change it**
1. Replace the null-name condition with a count of customers whose joined order identifier is null.
2. Add [the number or share of customers identified] or [the decision or action the finding informed], if known.

*raised by content*

> Wrote data-quality checks on the 40 most-used tables, catching 15 broken loads before they reached a dashboard.

**Problem**
[Polish] The bullet does not identify what kind of data-quality check was used. *(about 2 words to add)*

**Why**
The number of tables and broken loads shows scope and outcome, but not the technical work behind them. One representative check would make that work more concrete without crowding the bullet.

**How to change it**
Replace “data-quality checks” with [one representative validation rule or check type], if accurate.

*raised by content*

> Reported the national conversion rate as the simple average of 14 regional conversion rates, without weighting by regional traffic.

**Problem**
1. [Error] The simple average of regional conversion rates is not the national conversion rate when regional traffic volumes differ. *(about 2 words to add)*
2. [Important] The conversion-rate report has no stated consequence or concrete reported result. *(about 5 words to add)*

**Why**
1. An unweighted average gives each region equal influence even when their traffic differs. A national rate must reflect conversions and traffic across all regions; the line also does not say whether the limitation was corrected or flagged.
2. The reader can see how the rate was calculated, but not what the reporting mattered for. A decision it informed, or the rate and a relevant comparison, would give the work a clearer value.

**How to change it**
1. Replace the simple average with total conversions divided by total traffic, or a traffic-weighted average of the 14 regional rates. State that you corrected or flagged the earlier calculation only if you did so.
2. Add [the decision or action the report informed], if there was one; otherwise add [the reported rate or its change against a relevant comparison].

*raised by content, wording*

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The strongest result is at the end of the entry rather than leading it, and the entry’s topics lack a clear progression. *(no words)*

**Why**
The repeat-purchase increase is the clearest customer-analysis outcome, but it appears after several other bullets. Leading with it and grouping the remaining work by theme would make the entry easier to follow.

**How to change it**
Move this bullet to the start of the entry and group the remaining reporting, data-quality and analysis bullets by theme.

*raised by wording, narrative*

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Important] The bullet does not name the forecasting approach or establish what the 12% error is relative to. *(about 6 words to add)*
2. [Polish] The forecast-accuracy result appears after the station count and data period. *(no words)*

**Why**
1. A reader cannot see the technical method behind the forecast, and the percentage error has no stated basis or comparison. That makes both the work and its predictive performance difficult to assess.
2. A reader reaches the performance result only after the project’s scale and data source. Moving the result forward would make the outcome easier to spot when scanning.

**How to change it**
1. Replace “Modeled” with [the forecasting approach used] and replace the error phrase with [the exact error metric and unit] and, if available, [baseline error for comparison].
2. Move the forecast-accuracy result closer to the start of the bullet.

*raised by content, wording*

> Compared the forecast with the operator’s rebalancing schedule: empty-station hours fell from 310 to 205 a week in a replay of last summer.

**Problem**
[Polish] The strongest project outcome is not the first project bullet. *(no words)*

**Why**
The drop in empty-station hours is the clearest result, but it follows the model-description bullet. Leading with the replay outcome would bring the practical impact forward.

**How to change it**
Move this bullet ahead of the modeling bullet.

*raised by narrative*

> Published the notebooks and a short write-up, which the city’s open-data team linked from its bike-share page.

**Problem**
[Polish] “Which” does not make clear whether the notebooks or the write-up were linked. *(no words)*

**Why**
The sentence names two possible referents before saying what the open-data team linked. A reader may be unsure which item received the external recognition.

**How to change it**
Replace “which” with the specific item the team linked: [the notebooks] or [the short write-up], whichever is accurate.

*raised by wording*

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Important] The pantry outcome comes after a long explanation rather than leading the project entry. *(no words)*

**Why**
A scanning reader reaches the shift change and shorter Saturday line only after the “so the pantry” clause. Leading with that outcome would make the project’s impact clearer, while removing the unrelated shopper-retention claim would keep the entry focused on pantry work.

**How to change it**
Move the shift change and line-time reduction to the start of the entry. Remove the shopper-retention bullet, which does not describe a pantry outcome.

*raised by wording, narrative*

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
[Important] The unique-household result is wordy and does not give the count. *(about 3 words to add)*

**Why**
The 9,000 logs describe the amount of data processed, not the result of matching repeat visitors. Without the household count, the new result remains difficult to judge.

**How to change it**
Replace this phrase with “identified [number of unique households],” using a count only if you can confirm it.

*raised by content, wording*

> Built a retention dashboard for about 2.4 million shoppers that raised repeat purchases by nearly a quarter.

**Problem**
1. [Error] The shopper-retention claim duplicates the Brightcart achievement and does not describe a pantry outcome. *(saves about 15 words if removed)*
2. The “nearly a quarter” increase has no stated comparison. *(about 4 words to add)*
3. The bullet names a dashboard but does not explain what it did to inform the reported increase. *(about 5 words to add)*

**Why**
1. The résumé attributes a 2.4-million-customer retention dashboard and repeat-purchase lift to the Brightcart role as well. Repeating nearly the same achievement here makes its attribution inconsistent and the pantry entry less credible.
2. A reader cannot tell what the repeat-purchase increase is measured against. That leaves the size and meaning of the claimed change unclear.
3. A reader cannot tell how building the dashboard relates to the repeat-purchase result. That weakens the connection between the deliverable and the claimed outcome.

**How to change it**
1. Replace the bullet with [the actual pantry-specific result], if one exists, or remove it.
2. If this is an accurate pantry-specific result, replace the relative increase with [the measured before-and-after values]; otherwise remove the claim.
3. If this is an accurate pantry-specific achievement, add [how the dashboard informed the reported increase]; otherwise remove the claim.

*raised by content, wording, narrative*

## Already working

- s2:e0:b2: Connects a specific team resource to a measurable reduction in review-found errors.
- s2:e1:b3: The funding outcome makes the work’s influence clear.

## Set aside (3)

- s3:e1:b2: “Raised repeat purchases by nearly a quarter” does not say what the increase was measured against.
- s3:e1:b2: “Built a retention dashboard” names the deliverable but not what it did to inform the reported increase.
- s3:e1:b2: "About 2.4 million shoppers" and "raised repeat purchases" appear unrelated to a food-pantry visit analysis, so the line reads as if it belongs to a different project.
