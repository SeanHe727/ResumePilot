> Here is my resume: bench/planted-defects/tests-final/b5-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all five entries with bullets for content and wording, plus the full resume’s narrative and format. The two education entries have no bullets to review. No job-posting match was run because you didn’t provide a posting.

The main changes to make:
- **Clarify the career direction.** The analyst role, MBA, product internship, and projects point toward product work, while the current mechanic role interrupts that story. Explain its relevance or reduce its prominence. Within Experience, place the 2024 Harbor Payments internship above the 2018–2023 Crestline role.
- **Fix overlapping or confusing results.** The two Harbor Payments bullets describe the same checkout test and conversion lift; keep one. In the food-rescue project, correct the stated user-growth percentage and describe the fill-rate change as a percentage-point change.
- **Make outcomes and measurements clearer.** Several bullets describe actions without saying what resulted, and some figures lack a baseline or measurement period. The reviewers flagged examples in the mechanic, logistics, and practicum entries.

The file parses cleanly. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 79 · wording 82 · narrative 57

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 16 important, 15 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] The current Coastal Marine Services entry dominates the first impression without supporting the résumé’s product direction.

**Why**
The current role is prominent, but its content does not connect to the MBA, internship, and projects that tell the product story. That can leave a reader unsure how the role fits the candidate’s direction.

**How to change it**
Shorten the Coastal Marine Services entry to one line by cutting lower-priority detail.

> Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not listed newest-first.

**Why**
The 2018–2023 Crestline role appears above the 2024 Harbor Payments internship. A reader scanning the section may not encounter the more recent product experience first.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Polish] The five-day turnaround has no comparison point.

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
1. [Important] The inspection-related maintenance bullet gives no result.
2. [Polish] The maintenance description does not say what work you performed.

**Why**
1. A reader can tell the records supported annual inspections, but not whether the work kept the winches reliable, resolved issues, or supported a successful inspection. That leaves the outcome of the maintenance unclear.

**How to change it**
1. Add one outcome and its proof, if accurate, such as [inspection result] or [reliability or downtime outcome].

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
1. [Polish] The 30% reduction has no baseline, follow-up rates, or measurement period.
2. [Polish] The passive phrasing hides who implemented the redesign.
3. [Polish] The bullet uses a first-person pronoun.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
[Important] The route-planning result is buried after a long list of methods.

**Why**
The sentence leads with the rollout and several tasks before reaching the 1,800-hour saving. A reader scanning the bullet may miss its strongest result.

**How to change it**
Move the 1,800-driver-hours result to the opening, then retain only the most relevant supporting methods.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Lifted checkout conversion from 61% to 66% by testing a one-page flow against the three-step flow across 40,000 sessions, then shipping it to all merchants.

**Problem**
The checkout lift is reported before the testing and rollout details.

**Why**
The bullet puts the testing method and shipping after the result, making the rollout easy to miss. Leading with the conversion outcome would surface the impact sooner.

**How to change it**
Lead with the conversion lift, then give the testing method and rollout.

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] Conventional RICE Reach is not the number of support tickets a feature would close.
2. [Important] The bullet names the RICE process but not the priority or decision it produced.
3. [Polish] The explanation of the Reach metric is wordy.

**Why**
1. In conventional RICE, Reach estimates the number of people or users affected over a defined period. Tickets closed may be an outcome or part of an adapted scoring method, but they are not conventional Reach.
2. A reader can see that you used a framework, but not what product decision your work led to. Without that outcome, the significance of the prioritization is hard to assess.

**How to change it**
1. If you used conventional RICE, define Reach as the number of people or users affected over a specified period. If tickets closed were used, describe the scoring as an adaptation rather than conventional RICE.
2. Add the resulting priority or decision after this phrase, such as [the feature or initiative selected and what it changed].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
1. [Important] The loss analysis gives no estimate of the loss.
2. [Important] The roadmap priority is not named.
3. [Important] The roadmap outcome comes after a long list of process steps.
4. [Important] The loss analysis and roadmap decision precede the result, making the long process list slow to scan.

**Why**
1. The estimate is evidence behind the business case, but the bullet leaves its result unstated. A reader therefore cannot judge the scale that supported the roadmap decision.
2. The decision is the bullet’s outcome, but the wording does not identify what was selected. That makes the product impact difficult to picture.
3. The sentence opens with interviews, analysis, and business-case work before reaching the priority set. A scanning reader may miss the decision that gives those steps their purpose.
4. The sentence starts with several methods and leaves the priority until the end. A reader may miss the decision before reaching the supporting work.

**How to change it**
1. Replace this phrase with [the estimated loss for the priority segment, with its comparison or basis].
2. Replace “the next quarter’s roadmap priority” with [the initiative or problem selected].
3. Lead with the roadmap priority and retain only the most relevant supporting methods.
4. Move the priority to the opening and keep only the most relevant methods after it.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Error] The checkout lift is reported as a customer-level effect even though the test randomized by session.
2. [Important] The test-detail bullet repeats the checkout lift already reported in the preceding bullet.
3. [Important] The unit of the five-point conversion change is unspecified.

**Why**
1. Session randomization estimates a session-level effect, and customers with multiple sessions can contribute more than once. Reporting it as an effect on customers overstates what this design establishes unless the analysis accounted for repeated sessions or each customer contributed only once.
2. Both bullets describe the checkout A/B test and give the same five-point lift. Repeating the result takes space from other evidence about your work.
3. A reader cannot tell whether the change is in percentage points or a relative percent increase. Those units describe different-sized effects.

**How to change it**
1. Report the lift as a session-level effect; report a customer-level effect only if the test and analysis accounted for repeated sessions or each customer contributed only one session.
2. Remove the repeated lift and either move the distinct randomization detail into the preceding bullet or use this bullet for a distinct finding.
3. Replace “5-point” with [the exact change unit, such as percentage points or relative percent, if accurate].

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Polish] The leadership team’s funding decision is buried in a relative clause.

> Prioritized the dispute roadmap with RICE

**Problem**
[Polish] The onboarding and checkout results sit apart from the remaining roadmap bullets.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch result does not explain your product-lead contribution.
2. [Polish] The relationship between the 3,100 students and two dining halls is unclear.
3. [Polish] The food description uses a wordy passive phrase.

**Why**
1. A reader can see the project’s impact, but not what you personally owned or how you helped deliver it. One specific ownership detail would make the Product Lead role more credible.

**How to change it**
1. Add one brief detail about [the product or launch decision you owned], if it is not already clear from the surrounding résumé.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The weekly-active-user increase is 187.5%, not 150%.
2. [Polish] The bullet does not say who chose the reminders or how interviews informed the choice.

**Why**
1. The increase from 400 to 1,150 is 750 users, which is 187.5% of the starting value of 400. The stated percentage conflicts with the figures and weakens confidence in the metric.

**How to change it**
1. Change “a 150% increase” to “a 187.5% increase.”

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
1. [Error] The fill-rate change is 20 percentage points, not 20%.
2. [Important] The bullet does not explain how the volunteer shifts improved slot fill.

**Why**
1. The change from 75% to 95% is 20 percentage points; relative to the starting rate, it is about a 26.7% increase. “20%” can be read as a relative increase and conflicts with the stated rates.
2. The sentence names the volunteer system but does not show how it affected the fill rate. A reader cannot connect the intervention to the result.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points,” or with “by about 26.7%” if reporting the relative increase.
2. Add [how the volunteer shift system improved slot fill], if accurate.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
1. [Important] The client-funded pilot comes after the savings estimate and is easy to miss.
2. [Polish] The savings model does not say what informed it.

**Why**
1. The pilot is the concrete outcome, but the bullet reaches it only after the estimate and method. A scanning reader may overlook the client’s decision.

**How to change it**
1. Move the client-funded pilot to the opening, then give the savings estimate and model detail.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The shortened form has no measure of the change or its effect.
2. [Polish] Passive phrasing hides your actions on the intake work.

**Why**
1. Adoption shows that staff used the changes, but not whether intake became meaningfully faster or simpler. A measure would help a reader judge the value of the work.

**How to change it**
1. Add one before-and-after measure, such as [minutes saved per intake versus the prior process] or [fields removed from the form].

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
1. [Important] The recommendation is presented, but the analysis behind it is not described.
2. [Polish] “Final” is filler.

**Why**
1. A reader sees who received the recommendation and that a pilot was approved, but not the consulting analysis or judgment that informed it. The work behind the approval remains unclear.

**How to change it**
1. Replace some presentation detail with one key analysis that informed the recommendation, such as [the analysis used to select the pilot sites], if accurate.

> the intake form was shortened

**Problem**
[Polish] The intake-form work reads as a separate strand from the scheduling recommendation.

## Already working

- s2:e1:b0: Links a concrete operational improvement to the scorecards and their use by regional managers.
- s2:e1:b2: Shows sustained ownership of a recurring review and ties a process change to a quantified outcome.
- s2:e2:b0: Provides both a baseline and outcome, plus the size and scope of the pilot.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-36f996d7.md.

