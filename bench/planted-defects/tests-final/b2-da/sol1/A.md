> Here is my resume: bench/planted-defects/tests-final/b2-da/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 entries with bullets for content and wording, plus the overall narrative and file format. Education has no bullets to review; job-posting match was not run because no posting was provided.

The changes to make first are:

1. **Correct or remove claims that the evidence does not support.** The Brightcart bullet’s described SQL join would not find customers with no orders. The Pinecrest A/B-test bullet treats stopping when the p-value first drops below 0.05 as proof of significance; the specialist says it does not establish that claim.
2. **Check the bike-share figures.** Going from 300 to 200 empty-station hours is about a 33% reduction, not 50%. Going from a 60% to a 75% hit rate is a 15-percentage-point increase, not a 15% increase. Confirm what the “12% mean absolute error” metric represents.
3. **Put the analytics career first.** Lead with Brightcart and Pinecrest, followed by the analytics projects. Keep the current cinema job and its dates visible, but move it to a shorter additional-experience entry; move Education below the work.

The PDF parses cleanly. The full findings and per-bullet notes are in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 86 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 6 important, 22 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Riverside Cinema | Box Office Attendant

**Problem**
[Important] The current cinema role leads the experience even though the analyst roles and projects better establish your analytics work.

**Why**
A reader encounters the box-office position before the evidence of several years of analysis. Keeping its dates visible preserves the chronology without letting that position define the page.

**How to change it**
Lead with Brightcart and Pinecrest, then the analytics projects. Move Riverside below them as a one-line additional-experience entry that retains “Aug 2025 - Present.”

> B.S. in Statistics

**Problem**
[Important] Education opens the résumé instead of supporting the more recent analyst experience.

**Why**
After several years in analyst roles, the work and projects provide the more immediate evidence of your fit. Opening with the degree delays that evidence for a scanning reader.

**How to change it**
Move the Education entry below the work and projects.

> Box Office Attendant

**Problem**
[Polish] The reason for the shift from Data Analyst to Box Office Attendant is not apparent.

## Riverside Cinema | Box Office Attendant | Metro City, USA | Aug 2025 - Present

> Sold tickets and concessions during evening shifts and balanced the cash drawer at close.

**Problem**
[Polish] The cash-drawer duty does not say what the reconciliation showed.

> Trained 3 new attendants on the ticketing system and the refund policy.

**Problem**
[Polish] The training count does not show whether the new attendants became ready to work independently.

## Brightcart Retail | Data Analyst | Metro City, USA | Aug 2022 - Jun 2025

> Built the weekly retention dashboard for 2.4M customers that marketing used to retarget lapsed buyers, lifting 90-day repeat purchase from 22% to 27%.

**Problem**
[Polish] The dashboard wording makes its customer coverage sound like its audience.

> Found customers with no orders by left-joining the orders table to the customers table and counting rows with a null customer name.

**Problem**
1. [Error] The stated join direction is wrong for finding customers with no orders, and the procedural wording obscures the needed query.
2. [Polish] The line does not say what identifying customers with no orders enabled.
3. [Polish] The count operation gives no count.

**Why**
1. A join that preserves orders omits customers who have no orders. A null customer name could instead reflect an unmatched order or a missing name, so the described count cannot substantiate the finding.

**How to change it**
1. If this is the query you ran, replace the procedural wording with “left-joining customers to orders and filtering for a null order ID.” Otherwise, verify the query before retaining the claim.

> Joining 40 source tables, deduplicating customer records across two loyalty systems and rebuilding the attribution logic in dbt-style SQL models, raised the share of orders tied to a campaign from 58% to 81%.

**Problem**
[Important] The long method-first opening buries the increase from 58% to 81%.

**Why**
A scanning reader reaches several technical steps before the strongest evidence of the work. The result may be missed even though it gives those steps their significance.

**How to change it**
Move “raised the share of orders tied to a campaign from 58% to 81%” to the start. Keep only the most telling method detail after it.

> Presented the quarterly customer review to the leadership team, and two of its three recommendations were funded in the next budget.

**Problem**
1. [Polish] The funded recommendations are not identified.
2. [Polish] The line describes presenting the review but not the analysis behind its recommendations.

> Trained 20 merchandisers to answer their own questions with the self-serve dashboards, halving ad hoc data requests.

**Problem**
[Polish] The description of using the dashboards is longer than needed.

## Pinecrest Insurance | Junior Analyst | Metro City, USA | Jul 2020 - Jul 2022

> Ran the checkout A/B test until significance by checking the p-value every day and stopping on the first day it fell below 0.05.

**Problem**
1. [Error] Stopping at the first daily p-value below 0.05 does not establish significance at the usual 5% threshold.
2. [Polish] The A/B-test line gives neither a checkout outcome nor a resulting decision.

**Why**
1. That threshold assumes a fixed testing plan; repeated checks followed by stopping at the first crossing increase the false-positive rate. Expanding “until significance” into a fuller claim of statistical significance would leave the error intact.

**How to change it**
1. If you used a valid sequential testing method, name it. Otherwise, replace “until significance” and the step-by-step stopping account with a brief description of daily monitoring that does not claim the test established significance.

> Analyzed 18 months of call-center data; my findings moved two agents to the evening peak and cut average hold time from 9 to 5 minutes.

**Problem**
1. [Important] The staffing result should open this collection of separate junior-analyst assignments.
2. [Polish] The analysis that identified the evening peak is not specified.
3. [Polish] The first-person phrase is out of place in this résumé bullet.

**Why**
1. The change from 9 to 5 minutes gives a scanning reader an immediate reason to examine the work. Leaving it after the test line makes the entry's strongest result less visible.

**How to change it**
1. Move this bullet above the checkout A/B-test bullet.

> Writes the team’s SQL style guide and review checklist, which cut query errors found in review by half.

**Problem**
1. [Error] “Writes” incorrectly presents work in a role that ended in July 2022 as ongoing.
2. [Polish] The halving of query errors has no stated measurement unit or comparison period.

**Why**
1. Present tense conflicts with the position dates. The other bullets in this entry describe work completed during the role.

**How to change it**
1. Replace “Writes” with “Wrote.”

> Automated the monthly fraud-flag extract while also maintaining the team calendar, answering ad hoc questions from sales, updating onboarding documents and covering the help desk on Fridays, which saved the fraud team 10 hours a month.

**Problem**
1. [Important] The administrative task list separates the fraud-extract automation from its claimed time saving.
2. [Polish] The automation claim does not identify what was built or changed.

**Why**
1. The bullets describe separate assignments, but this list makes a reader wonder which duty saved the fraud team 10 hours a month. It also weakens the link between the technical work and its result.

**How to change it**
1. If the saving came from the automation, move “which saved the fraud team 10 hours a month” directly after “Automated the monthly fraud-flag extract” and cut the intervening duties from this bullet.

## City Bike-Share Demand Study | Independent Project | Python, SQL | Jan 2025 - Present

> Modeled hourly bike-share demand for 120 stations from 2 years of public trip data, forecasting next-day demand within 12% mean absolute error.

**Problem**
1. [Error] “12% mean absolute error” incorrectly gives a percentage for an error metric measured in demand units.
2. [Polish] The model type behind the hourly demand forecast is missing.
3. [Polish] The forecast error has no baseline for comparison.

**Why**
1. For hourly demand, mean absolute error is measured in trips or bikes per hour. A percentage needs a defined denominator or a different percentage-based metric, so a reader cannot tell what the reported accuracy means.

**How to change it**
1. Replace it with mean absolute error of [measured trips or bikes per hour]. If you calculated a percentage-based metric instead, name the metric—such as “12% mean absolute percentage error,” if accurate—and specify [its denominator].

> Cut empty-station hours from 300 to 200 a week, a 50% reduction, in a replay of last summer’s rebalancing.

**Problem**
1. [Error] The drop from 300 to 200 empty-station hours is a 33% reduction, not a 50% reduction.
2. [Important] The replay result should open the project once its percentage is corrected.
3. [Polish] The replay setting does not say what rebalancing decision changed.
4. [Polish] The 300-hour starting point does not identify the rebalancing approach used as the baseline.

**Why**
1. The decrease is 100 hours, and 100 divided by the starting 300 hours is 33.3%. The incorrect percentage undermines confidence in an otherwise prominent result.
2. The change in empty-station hours is the project's clearest operational result. Putting it first lets a scanning reader see the purpose of the forecasting work before its technical details.

**How to change it**
1. Replace “a 50% reduction” with “a 33% reduction.” Keep the result identified as a replay or simulated outcome rather than an observed operational change.
2. Move this bullet above the modeling bullet, after correcting “a 50% reduction” to “a 33% reduction.”

> Raised forecast hit rate by 15% across 120 stations, from 60% to 75%, by adding weather and event features.

**Problem**
1. [Error] A rise from 60% to 75% is 15 percentage points, not a 15% increase.
2. [Polish] “Forecast hit rate” does not define what counted as a hit.

**Why**
1. The difference between the rates is 15 percentage points; relative to the original 60% rate, the increase is 25%. Calling it 15% misstates which change the figures show.

**How to change it**
1. Replace “by 15%” with “by 15 percentage points.”

## Food Pantry Visit Analysis | Volunteer, Team of 3 | Excel, SQL | Mar 2023 - Aug 2023

> Mapped 14 months of pantry visits by hour and day, so the pantry moved one volunteer shift and cut the Saturday line from 50 to 20 minutes.

**Problem**
[Polish] “Saturday line” does not clearly name the time measure that fell.

> Cleaned 9,000 handwritten visit logs into a single table and matched repeat visitors, giving the pantry its first count of unique households.

**Problem**
1. [Polish] The first count of unique households is not given.
2. [Polish] The line does not say how repeat visitors were matched.

## Already working

- s2:e1:b1: Pairs a substantial time saving with a specific implementation.
- s3:e1:b2: Shows a practical handoff and continued use without crowding the line with detail.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-62a54555.md.

