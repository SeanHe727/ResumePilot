> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets for content and wording, plus the full resume’s narrative and format. The two education entries had no bullets to review. No job description was provided, so there’s no role-match review.

The main changes specialists flagged:
- Put Harbor Payments above Crestline Logistics to restore reverse chronology. The narrative review also noted that the current diesel mechanic role may distract from the product-management direction; it suggested shortening or contextualizing it.
- Remove duplicated outcomes: the Harbor checkout-test bullets repeat the same test and lift, and two practicum bullets repeat the pilot-approval result.
- Clarify several claims and figures: specify the baseline and period for the 30% reduction; resolve the mismatch between the campus app’s user counts and stated growth; and describe the 75%-to-95% change as a percentage-point change. The Harbor Payments RICE explanation was also flagged as unclear.

The format review found clean ATS parsing and no layout warnings, while noting the experience-order issue. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 77 · wording 80 · narrative 48

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 21 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not in reverse chronological order. *(no words)*

**Why**
Crestline Logistics, dated Jul 2018–Aug 2023, appears above Harbor Payments, dated Jun–Aug 2024. Readers may take the sequence as a chronology, so this ordering makes the experience section harder to follow.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] The Coastal Marine Services entry distracts from the product-management direction in its current form. *(saves about 15 words if shortened)*

**Why**
The diesel-mechanic role is presented with two detailed bullets, while the resume foregrounds product work elsewhere. A reader focused on product management may give less attention to the most relevant experience.

**How to change it**
Shorten the Coastal Marine Services entry to one or two lines, or add a brief explanation of its relevance to your direction if accurate.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
[Important] The hydraulic-winch maintenance bullet names tasks and inspection purpose but gives no result. *(about 5 words to add)*

**Why**
Readers can see the maintenance work and its connection to annual inspections, but not whether it improved reliability or helped the equipment meet inspection requirements. An outcome would show why the work mattered.

**How to change it**
Add one verifiable result, such as [the inspection outcome] or [the maintenance effect on winch reliability], if accurate.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
1. [Important] The carrier-scorecard work gives no result for the business or regional managers. *(about 8 words to add)*
2. [Important] “Owned” frames the scorecards and review meeting as responsibilities rather than specific actions. *(saves about 3 words)*

**Why**
1. Readers can see the recurring work and who used it, but not what decision or operational outcome it informed. Without that result, the bullet shows responsibility rather than the value of the work.
2. Readers see that the work was yours, but not what you did to produce or run it. The phrase “that discussed them” adds little because the meeting’s purpose is already clear.

**How to change it**
1. Add [the key decision or operational outcome the scorecards informed] and, if available, [the comparison that shows its effect]; retain the cadence only if space allows.
2. Replace “Owned” with the specific action you took, such as “prepared” if accurate, and cut “that discussed them.”

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The 30% reduction has no stated baseline or comparison period. *(about 3 words to add)*

**Why**
Without an anchor, readers cannot tell what the warehouse pick-error reduction is measured against. That makes the size of the improvement harder to assess.

**How to change it**
Anchor “30%” to [the baseline or comparison period], if available.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] The driver-hour savings are buried after a long list of rollout responsibilities. *(no words)*
2. [Important] “Taking over vendor negotiations” is conversational and obscures the specific work. *(saves about 1 word)*

**Why**
1. The result is the clearest evidence of value, but it comes after several tasks. A scanning reader may miss the impact before moving on.
2. Readers can infer that you became involved in negotiations, but the phrase does not clearly name the work you did. A direct verb makes the contribution easier to scan.

**How to change it**
1. Move the savings phrase near the beginning of the bullet, before the rollout tasks, and leave the methods after it.
2. Replace “taking over” with a direct verb naming your action, such as “negotiating” if accurate.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.
> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The roadmap bullets do not identify the priority selected. *(about 3 words to add)*

**Why**
One bullet says the dispute roadmap was prioritized with RICE, and the next says a priority was set, but neither names the decision. Readers see prioritization work without knowing what changed on the roadmap.

**How to change it**
Replace the generic outcome in the roadmap bullets with [the priority selected] and, if available, the resulting roadmap change or expected benefit.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The loss-sizing analysis gives no estimate or comparison between segments. *(about 6 words to add)*

**Why**
The loss estimate is the clearest evidence of why the roadmap priority mattered, but the line does not show what the analysis found. Readers cannot judge the scale of the opportunity or why one segment warranted attention.

**How to change it**
Add [the loss estimate for the priority segment, compared with other segments], if available.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Important] The bullet repeats the checkout test and its result already reported in the preceding bullet. *(saves about 22 words)*
2. [Important] The checkout-test bullet repeats the test and conversion result already reported in the preceding bullet. *(saves about 22 words)*

**Why**
1. The preceding bullet describes testing the one-page flow and reports the conversion change, while this bullet again describes the test and lift. Keeping both accounts uses space without showing a distinct contribution.
2. The preceding bullet describes testing the one-page flow and reports the conversion change, while this bullet again describes the test and lift. Keeping both accounts uses space without showing a distinct contribution.

**How to change it**
1. Keep the test result in one bullet and cut the repeated test-and-result account from this bullet.
2. Keep the test result in one bullet and cut the repeated test-and-result account from this bullet.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The line claims the app prevented 9 tonnes of food from being discarded without evidence of that counterfactual. *(saves about 4 words)*
2. [Important] The launch bullet gives the app’s outcome but not your personal contribution to getting it live. *(about 5 words to add)*

**Why**
1. Redistribution shows that the food was picked up, not what would have happened to it without the app. Readers may question the avoided-waste claim unless records support that likely fate.
2. Readers can see the app’s reach and redistribution result, but not what you owned as product lead. That leaves your role in delivering the launch unclear.

**How to change it**
1. Replace “food that would have been thrown away” with “surplus food,” unless records support the avoided-waste claim.
2. Add [your specific contribution to the product, dining-hall partnership, or pickup operations].

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The increase is 187.5%, not 150%. *(no words)*
2. [Error] “A 150% increase” repeats the user growth already shown by the before-and-after figures. *(saves about 3 words)*
3. [Important] The line claims the reminders caused the increase in weekly active users without evidence for that causal link. *(about 4 words saved if the causal phrase is removed)*
4. [Important] The interviews are counted, but the finding that led to pickup reminders is missing. *(no words)*

**Why**
1. Weekly active users rose by 750, from 400 to 1,150. Relative to the starting value of 400, that is a 187.5% increase, so the current percentage conflicts with the figures and can undermine confidence in the metric.
2. Readers can calculate the change from 400 to 1,150, so the percentage repeats that information. It also takes space that could clarify the product decision or how the reminders were chosen.
3. The 60 interviews can inform a feature choice, but they do not establish that reminders caused usage to rise from 400 to 1,150. Without a suitable test or comparison, readers may doubt the attribution and the strength of the impact claim.
4. Readers can see that research preceded the feature choice, but not what users said that made reminders the right response. Without that link, the interviews do not show how research shaped the product decision.

**How to change it**
1. Replace “150%” with “187.5%.”
2. After correcting the percentage, cut “a 187.5% increase” and keep the before-and-after figures.
3. If a controlled experiment or suitable comparison supports the effect, name it; otherwise say the reminders followed the interviews and report the usage change without attributing it to them.
4. Replace “chosen after 60 user interviews” with [the interview finding that motivated pickup reminders], if accurate.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
1. [Error] The change from 75% to 95% is 20 percentage points, not a 20% increase. *(about 1 word to add)*
2. [Important] The shift-system method does not say what changed about staffing pickup slots. *(about 5 words to add)*
3. [Polish] “By setting up a volunteer shift system” is wordier than a direct action verb. *(saves about 2 words)*

**Why**
1. The difference between the two fill rates is 20 percentage points; relative to the original 75% rate, the increase is about 26.7%. As written, the headline figure conflicts with the before-and-after rates and leaves readers unsure which measure you intend.
2. The fill-rate result is clear, but readers cannot tell what operational change you introduced to achieve it. A specific scheduling or coverage detail would make your contribution more evident.
3. The phrase takes several words to describe the method without naming the action directly. A tighter verb makes the contribution easier to scan.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points” or “by about 26.7%,” depending on the intended measure.
2. Add [the key scheduling or coverage change you introduced].
3. Replace the phrase with a direct action, such as “by scheduling volunteer shifts,” if accurate.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The intake-form change has no measure of its scale or effect. *(about 5 words to add)*
2. [Important] The passive wording obscures your actions on patient intake and the form. *(no words)*

**Why**
1. Readers cannot tell how much the form was shortened or whether intake improved beyond staff adoption. A before-and-after measure would make the result more concrete.
2. Readers see that intake was mapped and the form was shortened, but not who did the work. That makes your contribution harder to distinguish from the team’s outcome.

**How to change it**
1. Replace “was shortened” with [the number of fields removed or the change in intake time, compared with before], if available.
2. Replace the passive phrases with the actions you took, such as “mapped patient intake” and “shortened the intake form,” if accurate.

> client funded a pilot; approved a 90-day scheduling pilot

**Problem**
[Important] The project repeats the client’s approval of a scheduling pilot in two bullets. *(saves about 7 words)*

**Why**
One bullet says the client funded a pilot, and another says decision-makers approved one. Readers see the same outcome twice rather than a single account linking the savings estimate to the resulting approval.

**How to change it**
Combine the modeled savings and pilot approval into one bullet, keeping the approval outcome only once.

> client funded a pilot; approved a 90-day scheduling pilot

**Problem**
[Important] The practicum repeats the client’s approval of a scheduling pilot in two bullets. *(saves about 7 words)*

**Why**
One bullet says the client funded a pilot, and another says decision-makers approved one. Readers see the same outcome twice rather than a single account linking the savings estimate to the resulting approval.

**How to change it**
Combine the modeled savings and pilot approval into one bullet, keeping the approval outcome only once.

## Already working

- s2:e2:b0: Shows a clear improvement from 9 days to 4 days and names the merchant group covered by the pilot.
- s2:e2:b1: Pairs a measured conversion gain with the specific flow change that was tested.
- s2:e2:b5: Connects presenting the results to a tangible leadership decision: funding a further rollout.

## Set aside (9)

9 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f2fb6224.md.

