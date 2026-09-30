> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all **5 entries with bullets** for content and wording, plus the full resume for career narrative and file format. The 2 education entries have no bullets to review. A job-posting match review did not run because no posting was provided.

Three changes to prioritize:

1. **Clarify the career direction.** The product internship and app project support a move toward product management, but the current diesel-mechanic role needs brief context. The narrative specialist recommends giving the product work more prominence and moving the 2024 internship above the older logistics role.
2. **Correct two app-project figures.** Growth from 400 to 1,150 weekly active users is **187.5%**, not 150%. A fill rate rising from 75% to 95% is a **20-percentage-point** increase, not a 20% increase.
3. **Remove repetition and make decisions specific.** The Harbor Payments bullets repeat the checkout test; its roadmap bullets do not name the priorities chosen. The practicum bullets repeat the scheduling-pilot decision.

The PDF parses cleanly. The full review is in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 77 · wording 81 · narrative 62

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 11 important, 20 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not newest-first: the 2018–2023 Crestline role appears above the 2024 Harbor Payments internship.

**Why**
A reader scanning Experience encounters the older role before the more recent product work. That ordering obscures the internship and makes the chronology harder to follow.

**How to change it**
Move the Harbor Payments entry above the Crestline Logistics entry within Experience.

> Product Lead | Student Venture | Oct 2023 - Present

**Problem**
[Important] The ongoing “Product Lead” work does not lead the page.

**Why**
The completed MBA supports your story, but readers encounter Education and Experience before the ongoing product project. Leading with that work would establish the product contribution before its academic context.

**How to change it**
Move Projects ahead of Experience, and move Education below both sections.

> Diesel Mechanic | Lake City, USA | Jul 2025 - Present

**Problem**
[Polish] The move from the product internship and MBA to “Diesel Mechanic” is dated but unexplained.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Polish] “under 5 days per job” gives no reference point for judging the dry-dock duration.

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
1. [Polish] “Maintained hydraulic winch systems” does not identify the maintenance you performed.
2. [Polish] “for the harbor authority’s annual inspections” gives the reason for the records but no inspection or operational outcome.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
1. [Important] “the monthly review meeting that discussed them” does not say what the scorecard reviews changed.
2. [Polish] “weekly carrier scorecards” does not identify the carrier performance they assessed.
3. [Polish] “Owned the weekly carrier scorecards” frames the work as an assigned duty rather than an action you took.
4. [Polish] “the monthly review meeting that discussed them” refers back to the scorecards roundaboutly.

**Why**
1. A hiring manager cannot tell whether the reviews led to a carrier decision or improved performance. Without that connection, the work reads as meeting administration rather than operations analysis.

**How to change it**
1. Replace “that discussed them” with [decision or change the reviews led to]. If you have a defensible result, add [outcome measured against prior performance].

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
[Important] “cut forecast error from 18% to 11%” is buried at the end of the bullet instead of leading this entry.

**Why**
The measured result is easier to miss when a reader first encounters the review process. It is also the strongest opening for the Crestline entry, so its current position weakens the first impression.

**How to change it**
Move this bullet above the other Crestline bullets, and move “cut forecast error from 18% to 11%” to its opening; retain the S&OP review and consensus forecast as the explanation.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] “which saved 1,800 driver hours a year across the region” buries the result and leaves its cause ambiguous.
2. [Polish] “Led the rollout of a route-planning tool to 3 depots” does not say what changed in route planning.

**Why**
1. The saving follows three supporting activities, so a scanning reader may miss it. Because “which saved” immediately follows the telematics contract, the reader may also credit the contract rather than the route-planning rollout.

**How to change it**
1. Lead with “saved 1,800 driver hours a year across the region” and name the route-planning rollout as its cause. Keep only supporting activities needed to explain that saving; separate the vendor negotiations if they matter independently.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Lifted checkout conversion from 61% to 66% by testing a one-page flow against the three-step flow across 40,000 sessions, then shipping it to all merchants.

**Problem**
[Polish] “against the three-step flow” adds detail the comparison does not need unless the old flow’s step count matters.

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] “scoring Reach as the number of support tickets each feature would close” defines RICE Reach incorrectly.
2. [Important] “scoring Reach as the number of support tickets each feature would close” adds process detail that slows the line.
3. [Important] “Prioritized the dispute roadmap” does not identify the initiative selected or decision made.

**Why**
1. Reach measures how many tickets a feature would address, not how many it would resolve. Predicted closures also reflect effectiveness, so treating them as Reach can count that benefit again in the Impact score.
2. The definition takes space before the reader learns what the prioritization produced. Once the definition is corrected, it need not remain if it does not help explain the decision.
3. A product reader can see that you used a framework but not what changed because of it. The choice is more informative than the framework alone.

**How to change it**
1. If that is what you scored, describe Reach as the estimated number of eligible dispute tickets each feature would address over [a defined period]. Otherwise, state [the unit actually used for Reach].
2. After correcting the Reach definition, cut the “scoring Reach” clause if the selected initiative makes the action clear without it.
3. If accurate, replace “the dispute roadmap” with [dispute initiative selected] for [roadmap period]. Keep “with RICE” only if it helps explain that choice.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
1. [Important] “set the next quarter’s roadmap priority” is buried after the methods and does not name the priority.
2. [Polish] “sizing the loss by segment” names an analysis without giving its finding.

**Why**
1. A scanning reader may miss the decision at the end of the list. Without knowing what was chosen, they also cannot judge the significance of the interviews and business case.

**How to change it**
1. Move the decision to the start and replace “the next quarter’s roadmap priority” with [specific initiative] as next quarter’s priority. Retain only the methods most relevant to that choice.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Error] “with randomization by session” does not support reporting the lift as an effect on distinct “merchants’ customers.”
2. [Important] “the checkout A/B test” and “the 5-point conversion lift” repeat the test and result already reported in this entry.

**Why**
1. The test assigns sessions, and one customer can have multiple sessions, potentially in different variants. The reported conversion difference is therefore a session-level result unless a separate customer-level analysis supports the claim; the current wording also leaves the measured customer behavior vague.
2. The earlier checkout bullet already gives the conversion figures and test scale. Repeating them uses space without adding another result, although the session-randomization detail may be worth preserving if needed.

**How to change it**
1. If retaining this detail, report the 5-percentage-point lift in checkout conversion across sessions. If [a customer-level analysis] was also run, describe its result separately rather than calling the session-level lift a customer effect.
2. Keep the result in the earlier checkout bullet. Move “randomization by session” there if the methodological detail matters, then remove this bullet.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Polish] “a follow-up roadmap” does not identify the proposal leadership funded.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] “Launched a surplus-food pickup app” does not identify the product or launch decision you personally owned.
2. [Polish] “to 3,100 students with two dining halls” leaves the dining halls’ role unclear.
3. [Polish] “food that would have been thrown away” is wordier than necessary.

**Why**
1. The redistribution figure shows the venture’s result, but not what you contributed as Product Lead. A concrete decision would help a reader assess your product skill.

**How to change it**
1. Keep the redistribution result and add [product or launch decision you personally owned] alongside “Launched.”

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] “from 400 to 1,150, a 150% increase” states the percentage increase incorrectly.
2. [Polish] “pickup reminders chosen after 60 user interviews” obscures what the interviews informed.

**Why**
1. The gain is 750 weekly active users, and 750 divided by the starting figure of 400 is 187.5%. The mismatch invites a reader to question the accuracy of an otherwise strong product result.

**How to change it**
1. Replace “a 150% increase” with “a 187.5% increase,” keeping the stated figures of 400 and 1,150.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] “by 20% across two dining halls, from 75% to 95%” incorrectly calls a 20-percentage-point rise a 20% increase.

**Why**
Subtracting 75% from 95% gives 20 percentage points. Relative to the starting 75% rate, the increase is approximately 26.7%, so the current term understates and mislabels the change.

**How to change it**
Replace “by 20%” with “by 20 percentage points,” retaining “from 75% to 95%.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
1. [Polish] “based on the model” does not identify the main source of the estimated saving.
2. [Polish] “the client funded a pilot based on the model” leaves the decision behind the sizing work.
3. “$2.4M annual saving” has no comparison with the clinics’ current scheduling costs.

**Why**
3. The estimate is substantial, but a reader cannot tell its scale relative to the costs it would reduce. That makes the modeled opportunity harder to evaluate.

**How to change it**
3. If available, add [current annual scheduling costs across the 4 clinics] beside the $2.4M estimate.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Polish] “changes adopted by front-desk staff” establishes adoption without saying what improved.
2. [Polish] “Patient intake at 4 clinics was mapped and the intake form was shortened” hides your actions in passive wording.
3. [Polish] “with the changes adopted by front-desk staff” buries the adoption result in a trailing clause.
4. [Polish] “the intake form was shortened” does not show what was removed or simplified.

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
1. “the final recommendation” does not say which scheduling change leaders approved testing.
2. “who approved a 90-day scheduling pilot at two clinics” leaves the approval at the end of the bullet.

**Why**
1. The approval is clear, but a reader cannot tell what the pilot would change. Naming the recommendation would make the consulting contribution behind that decision more concrete.
2. The client decision is the line’s outcome, but a scanning reader reaches it only after the presentation detail. Earlier placement would make the result register sooner.

**How to change it**
1. Replace “the final recommendation” with [scheduling change recommended for the pilot].
2. Move “approved a 90-day scheduling pilot at two clinics” earlier in the bullet, then retain the presentation as context.

> approved a 90-day scheduling pilot at two clinics

**Problem**
[Important] “approved a 90-day scheduling pilot at two clinics” repeats the pilot decision already reported in this entry.

**Why**
One bullet says the client funded a pilot; this one says leaders approved it. Those appear to describe the same decision, so separate accounts spend space without establishing separate outcomes.

**How to change it**
Combine the model and presentation into one account of the pilot decision. Remove the repeated approval or funding statement from the other bullet.

## Already working

- s2:e1:b1: Connects a measured reduction in pick errors to specific operational changes.
- s2:e2:b0: Connects a specific onboarding change to a measured merchant outcome.

## Set aside (5)

5 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e3152c2d.md.

