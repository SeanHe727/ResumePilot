> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the resume’s narrative and format. The education entries had no bullets to review, and no job description was provided for a match review.

The main changes to prioritize:
- Put Experience before Education and list Harbor Payments above Crestline Logistics.
- Correct the project metrics: growth from 400 to 1,150 is not a 150% increase, and a change from 75% to 95% is 20 percentage points.
- Remove the repeated checkout-test result and consolidate the practicum’s repeated pilot-approval result.
- Clarify the basis for outcome claims such as reduced errors and hours saved, and add an outcome to task-focused bullets where available.
- If you’re targeting product roles, clarify how the current mechanic role fits that direction.

The file parses cleanly and has no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 77 · wording 82 · narrative 59

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 18 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not newest-first: Crestline Logistics appears above the more recent Harbor Payments internship. *(no words)*

**Why**
The dates show that the Harbor Payments role ended in August 2024, after the Crestline role ended in August 2023. A reader scanning the section may misread the chronology or question the document’s organization.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, even though the work history establishes the candidate’s experience more directly. *(no words)*

**Why**
The five-year operations role and product internship offer more immediate evidence of the candidate’s work than the degrees do. Leading with Education may make that relevant experience less visible to a recruiter.

**How to change it**
Move the entire Experience section above Education.

> Diesel Mechanic

**Problem**
[Important] The current Diesel Mechanic entry is not clearly connected to the direction of a product-focused résumé. *(saves about 12 words)*

**Why**
The entry takes space from product and operations experience, while its relevance to that direction is not explained. A recruiter may have to infer why the role is included.

**How to change it**
Shorten the entry to one line, or add [a brief phrase explaining how it fits the direction of the résumé].

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
1. [Important] The scorecard bullet names recurring work but not what it changed. *(about 9 words)*
2. [Polish] “Owned” describes responsibility rather than the actions taken, and “that discussed them” is redundant. *(saves about 3 words)*

**Why**
1. A reader can see the responsibility, but not whether the scorecards improved carrier performance or informed an operational decision. Without an outcome, the value of the work is hard to judge.
2. The wording tells the reader what you were responsible for, but not what you did with the scorecards or meeting. The redundant clause uses space without clarifying your contribution.

**How to change it**
1. Replace the meeting clause with [operational decision or improvement the scorecards enabled, measured against a relevant baseline or target].
2. Replace “Owned” with the specific action you took and cut “that discussed them.”

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The 30% reduction in pick errors has no comparison period or baseline. *(about 8 words)*

**Why**
A reader cannot tell whether the figure compares error rates before and after the changes over a consistent period. Without an anchor, the result is harder to interpret.

**How to change it**
Add [comparison period or baseline used to calculate the reduction] after “30%.”

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
[Important] The forecast-error figures do not define the error metric or the forecasts and periods being compared. *(about 6 words)*

**Why**
Without those details, the 18% and 11% figures are not clearly interpretable. The change is seven percentage points, but the line alone does not show that the consensus forecast caused it.

**How to change it**
If available, specify the error metric and comparison periods and support the attribution; otherwise describe the observed change without claiming the consensus forecast caused it.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] The 1,800-hour annual saving has no stated baseline or measurement method. *(about 8 words)*
2. [Important] The 1,800-hour saving comes after a long list of activities, so a scanning reader may miss the result. *(no words)*
3. [Important] The bullet combines several separate activities without showing which change led to the saved hours. *(about 8 words)*

**Why**
1. The rollout and related work could save driver time, but the activities listed do not establish the size of the annual saving. A reader may question how the figure was measured and what it is compared against.
2. The quantified outcome is the strongest scan point, but it arrives only after several methods. That makes the impact less visible on a quick read.
3. A reader sees broad involvement but cannot identify the operational or technical change behind the result. That makes the link between the work and the hours saved less clear.

**How to change it**
1. If measured, state the baseline and how the hours were calculated; otherwise remove the figure or describe the time savings more cautiously.
2. Move the saving earlier in the bullet, before the activity list.
3. Keep the activity most directly tied to the hours saved and replace the remaining list with [specific tool capability or process change that reduced driver hours].

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] The line misdefines RICE Reach: support tickets a feature might close are not the number of people or users it affects. *(about 4 words)*
2. [Important] The line defines Reach as support tickets but does not say what the scoring led you to prioritize. *(about 10 words)*

**Why**
1. RICE Reach estimates how many people or users a feature will affect over a defined period. Tickets measure a support outcome instead, so calling this standard RICE may lead a product reader to question the scoring method.
2. A reader can see how features were scored, but not what the analysis changed. Without the resulting priority or decision, the value of the work is hard to judge.

**How to change it**
1. If you used standard RICE, replace the Reach definition with the number of people or users affected over [defined period]. If you scored ticket volume instead, describe the method as an adapted scoring approach.
2. After the scoring description, add [the top-ranked dispute feature and the roadmap decision it drove].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The line gives several analysis steps but does not identify the loss found or the roadmap priority selected. *(about 5 words)*

**Why**
A reader sees substantial analysis but cannot tell what it revealed or which product action it supported. That makes the business value of the work difficult to assess.

**How to change it**
Lead with the outcome and replace the trailing summary with [the specific roadmap priority] and, if the sizing informed it, [the key estimated loss for the target segment]. Compress earlier process details if needed.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Important] The checkout-test bullet repeats the preceding bullet’s A/B test and five-point conversion lift. *(saves about 21 words)*
2. [Important] Session-level randomization does not establish an effect on distinct customers. *(about 2 words)*

**Why**
1. The preceding bullet already reports the test and its outcome, so this line spends space restating the result. The reader gets no distinct additional impact from the repeated lift.
2. A customer with multiple sessions can receive different variants and be counted more than once. The stated randomization unit therefore supports a session-level effect, not necessarily a customer-level one.

**How to change it**
1. Remove this bullet, or fold its test detail into the preceding bullet if that detail is needed there.
2. If the analysis was session-level, describe the lift as a session-level effect; claim a customer-level effect only if the experiment assigned and analyzed outcomes at the customer level.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The claim that the 9 tonnes would otherwise have been thrown away is not established by saying the app redistributed surplus food. *(saves about 6 words)*
2. [Important] “Launched a surplus-food pickup app” does not say what you did to develop or launch it. *(about 6 words)*

**Why**
1. Redistribution shows where the food went, not what would otherwise have happened to it. A reader may question whether all of it would have been discarded, weakening the credibility of the impact claim.
2. A reader can see the project’s result, but not what your Product Lead work involved. Without a concrete contribution, your role and product or launch skills are harder to assess.

**How to change it**
1. If you tracked the food’s likely fate, specify how; otherwise cut “that would have been thrown away” and describe it as surplus food.
2. Add [your specific product or launch contribution] to show what you did.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
[Error] The stated 150% increase is mathematically wrong: growth from 400 to 1,150 is 187.5%. *(no words)*

**Why**
The increase is 750 weekly active users, and 750 divided by the starting 400 is 187.5%. A reader who checks the arithmetic may doubt the accuracy of the other reported results.

**How to change it**
Replace “a 150% increase” with “a 187.5% increase.”

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The stated 20% increase is wrong: the change from 75% to 95% is 20 percentage points. *(about 2 words)*

**Why**
The endpoint difference is 95% − 75% = 20 percentage points; the relative increase is about 26.7%. A reader may otherwise interpret the figure as a relative increase, which does not match the rates shown.

**How to change it**
Replace “by 20%” with “by 20 percentage points.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Important] The $2.4M annual savings estimate does not say how the model was built. *(about 7 words)*

**Why**
The reader sees the potential value and that a pilot was funded, but not the analysis behind the estimate. One concise detail would make your consulting contribution easier to judge.

**How to change it**
Add [the key input or analysis used to build the savings model], keeping it to one concise detail.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Polish] The passive wording hides your actions in the patient-intake bullet. *(no words)*

**Why**
The reader can see that the intake process changed, but the sentence does not make clear who mapped it or shortened the form. That obscures your contribution.

**How to change it**
Replace the passive opening with “Mapped patient intake at 4 clinics and shortened the intake form.”

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
[Important] “The final recommendation” does not specify what the COO and clinic directors approved. *(about 1 word)*

**Why**
The approval is a useful outcome, but readers need to know what change the pilot would test to understand the practicum’s value. The generic phrase leaves that decision unclear.

**How to change it**
Replace “the final recommendation” with the specific approved change, such as “outpatient scheduling consolidation,” if accurate.

> approved a 90-day scheduling pilot

**Problem**
[Important] The practicum bullets repeat the scheduling-pilot approval or funding outcome. *(saves about 10 words)*

**Why**
Both bullets report a pilot result, so the second mention adds little new information. That repetition takes space from the savings estimate and the work behind it.

**How to change it**
Combine the quantified savings and approval details in one bullet, rather than reporting the pilot result twice.

## Already working

- s2:e2:b1: Connects a product change to a measured conversion improvement.
- s2:e2:b5: Shows stakeholder influence with a concrete outcome: funded expansion.

## Set aside (7)

7 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-449c5993.md.

