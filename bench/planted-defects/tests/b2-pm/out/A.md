> Here is my resume: bench/planted-defects/tests/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five experience/project entries for content and wording, plus the full resume narrative and format. Education was not reviewed for bullets because it has no bullet content. No job-description match was run because no posting was provided.

Most important changes:

1. **Fix the career-story order**
   - Put **Experience before Education**.
   - Order experience newest-first: **Harbor Payments → Crestline Logistics → Coastal Marine Services**.
   - Move Projects immediately after Experience.
   - Coastal Marine Services currently appears as an unexplained post-MBA pivot; shorten it or clarify its relationship to your target role.

2. **Correct and clarify quantified claims**
   - “400 to 1,150, a 150% increase” is mathematically inconsistent; verify the intended percentage.
   - “Raised … by 20% … from 75% to 95%” should distinguish percentage points from relative percentage growth.
   - Clarify ambiguous figures such as “5-point conversion lift,” “$2.4M annual saving,” and “under 5 days per job” with their baselines or precise units.

3. **Remove repetition and strengthen outcomes**
   - Harbor Payments has two bullets describing the same checkout A/B test and conversion result.
   - The consulting project repeats the pilot-approval outcome.
   - Several bullets describe ownership or activity without stating what changed—especially the Crestline scorecard bullet and the Coastal Marine service-record bullet.

4. **Improve scanability**
   - Lead long bullets with the business result, then briefly explain how you achieved it.
   - Expand or define jargon such as **S&OP** and **RICE**.
   - Replace passive constructions and vague phrases where they obscure your contribution.

The file itself is one page, parses cleanly for ATS, and has no layout warnings. The full review is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 75 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.
> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Important] The strongest outcomes in the diesel and route-planning bullets are buried after technical or implementation details. *(no words)*

**Why**
A scanning reader may reach the end of each bullet without immediately seeing the operational value. In the route-planning bullet, the long list of rollout, SOP, training and negotiation actions also makes it unclear which action produced the 1,800-hour saving.

**How to change it**
Move the route-planning result directly after "route-planning tool to 3 depots" and retain only the implementation detail that best proves ownership; similarly, move "keeping dry-dock time under 5 days per job" earlier in the diesel bullet. Replace "taking over vendor negotiations" with "negotiating the telematics contract."

> Crestline Logistics | Operations Analyst

**Problem**
[Important] The résumé should place EXPERIENCE before EDUCATION and order the experience and project sections to establish the product-management direction. *(no words)*

**Why**
The five years of prior professional experience should establish the career context before the degrees. Within EXPERIENCE, the current order is not reverse chronological, and placing the product projects after the mechanic role allows an unrelated post-MBA position to dominate the reader’s first impression.

**How to change it**
Move EXPERIENCE above EDUCATION; within EXPERIENCE place Harbor Payments first, Crestline Logistics second and Coastal Marine Services third; move PROJECTS above or immediately after EXPERIENCE.

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] Coastal Marine Services looks like an unexplained post-MBA pivot in the current presentation. *(saves about 12 words)*

**Why**
Its Jul 2025–Present dates follow the Jun 2025 MBA end date, but the résumé does not explain how the mechanic role relates to the target direction. A long unrelated entry can distract from the product-management evidence and make the career narrative harder to follow.

**How to change it**
Shorten the entry to a compact listing or add a brief explanation of its relationship to the target direction, while retaining the Jul 2025–Present dates and making the transition from the Jun 2025 MBA end date visually clear.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
[Important] The carrier-scorecard bullet states a responsibility but gives no result. *(adds about 8 words)*

**Why**
A reader can see that scorecards and meetings were managed, but cannot tell whether carrier performance, service levels, cost or management decisions improved. The bullet therefore describes assigned activity rather than evidence of impact.

**How to change it**
Replace "Owned" with a specific action such as "Produced" or "Analyzed," replace the meeting clause with "presented findings at monthly reviews," and add [what changed because managers used the scorecards, measured against the relevant baseline or target].

> Coordinated the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, cutting forecast error from 18% to 11%.

**Problem**
[Important] "S&OP" is an unexplained acronym. *(adds about 2 words)*

**Why**
Readers outside supply-chain operations may not recognize the abbreviation immediately. That slows scanning and makes the scope of the quarterly review less accessible.

**How to change it**
Write out the term or define it once by replacing "S&OP" with the full name.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] The bullet mislabels a ticket-based scoring measure as standard RICE Reach. *(about 3 words)*
2. [Important] The dispute-roadmap bullet describes a prioritization process without stating the resulting decision or value. *(adds about 8 words)*

**Why**
1. In standard RICE, Reach estimates the number of users, customers, transactions or other relevant units affected during a defined period. Support tickets are a support-volume or impact proxy, so the current wording can make the prioritization method look technically incorrect.
2. A hiring reader can see the framework but cannot tell which feature or roadmap choice it influenced. The bullet therefore reads as process rather than product impact.

**How to change it**
1. If standard RICE was used, replace the Reach description with the estimated number of users or customers affected during a defined period; if tickets were the actual measure, describe the approach as an adapted prioritization score rather than standard RICE. Expand "RICE" when first used.
2. Add [the dispute feature selected and the business or customer outcome it was expected to address] after the prioritization action.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The chargeback-roadmap bullet leads with a long method list and leaves the loss analysis too vague to judge. *(adds about 6 words)*

**Why**
The reader must work through four activities before reaching the actual roadmap decision. "Sizing the loss by segment" does not show how large the loss was or what comparison supported the priority, so the analysis demonstrates effort without showing the evidence behind the decision.

**How to change it**
Lead with "Set the next quarter’s roadmap priority," then move the research methods after it and replace "sizing the loss by segment" with [the loss estimate by segment and the comparison used to select the priority].

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Error] The checkout-test bullet reports a session-level result as an effect on unique customers without naming the conversion outcome or its precise unit. *(about 2 words)*
2. [Important] The checkout A/B-test result is repeated in the following bullet without adding a distinct outcome. *(saves about 12 words)*

**Why**
1. Session-level randomization identifies a session-level conversion effect, not automatically a causal effect on unique customers, because one customer can contribute sessions to both groups. The phrase "effect on merchants’ customers" also leaves the reader unsure whether the metric was checkout completion, payment initiation or another behavior, while "5-point" could mean percentage points or percent.
2. The preceding bullet already reports the test and five-point conversion lift. Keeping both makes the internship section spend space on the same evidence instead of showing another product decision or result.

**How to change it**
1. Replace "randomization by session" with "session-level randomization" and report a "5-percentage-point lift in session conversion" or [the specific conversion outcome and affected customer population]; use a customer-level result only if it was measured with an appropriate customer-level analysis.
2. Retain the quantified result in one bullet and remove the duplicate, or substantially repurpose this bullet around a distinct outcome that is not already reported.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
The follow-up roadmap phrase is slightly vague. *(no words)*

**Why**
The reader can infer that the roadmap relates to onboarding, but the purpose is not explicit. Naming the rollout makes the leadership outcome easier to understand.

**How to change it**
Replace "a follow-up roadmap" with "the rollout roadmap" if that accurately describes what was presented.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Important] The app-launch bullet shows the launch outcome but not the candidate’s personal product contribution. *(adds about 3 words)*

**Why**
For a Product Lead entry, a reader needs one concrete action to distinguish ownership from association with the venture. Without that action, the launch evidence is less persuasive as proof of product leadership.

**How to change it**
Add one compact action after "Launched," such as [prioritized the MVP], [coordinated the pilot] or [ran onboarding], using only the action actually performed.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
[Error] The weekly-active-user increase is mathematically misstated: growth from 400 to 1,150 is a 187.5% increase, not a 150% increase. *(no words)*

**Why**
The increase is 750 users, and 750 divided by the starting value of 400 equals 187.5%. Reaching 1,150 means users reached 287.5% of the original level, so the current percentage can undermine confidence in the rest of the quantified results.

**How to change it**
Replace "a 150% increase" with "a 187.5% increase."

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.
> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Important] The weekly-active-user and fill-rate bullets present their product and operational changes as causing the full results without evidence of attribution. *(no words)*

**Why**
The interviews can inform reminder design but do not establish that reminders caused the entire user increase, and the volunteer system does not isolate its contribution to the fill-rate change. Other changes, demand shifts or chance could explain the results, so the causal wording overstates what the evidence shows.

**How to change it**
Replace both causal "by" clauses with "after" clauses: describe the user increase as occurring after adding reminders informed by 60 interviews, and the fill-rate increase as occurring after setting up the volunteer shift system. If a controlled analysis was run, report its result instead.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The pickup-slot fill-rate change is incorrectly described as a 20% increase rather than a 20-percentage-point increase. *(adds about 1 word)*

**Why**
The endpoints move from 75% to 95%, which is a 20-percentage-point increase and approximately a 26.7% relative increase. Using "20%" alongside those endpoints makes the result open to materially different interpretations.

**How to change it**
Replace "by 20%" with "by 20 percentage points"; if accurate and useful, the relative description can instead be stated as "a 26.7% relative increase."

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Important] The scheduling-savings figure lacks its comparison basis and modeling method. *(adds about 8 words)*

**Why**
A hiring reader cannot tell whether the $2.4M represents labor, operating-cost or another type of saving, so the scale is harder to evaluate. The line also gives little evidence of the analytical work behind the recommendation, while "a $2.4M annual saving" is less precise than "$2.4M in annual savings."

**How to change it**
Replace the phrase with "$2.4M in annual savings," then add [the baseline or cost category measured against] and [the analysis or model used]. State directly that the savings analysis led to the funded pilot.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake-process bullet uses passive wording and gives no measure of the form reduction or resulting benefit. *(adds about 6 words)*

**Why**
A reader cannot see clearly what the candidate did, how much the form changed or whether intake became faster or more accurate. Staff adoption proves implementation, but not the operational value of the change.

**How to change it**
Use active wording for the mapping and redesign work, add [the number of fields or pages before and after] or [the measured reduction in intake time or errors], and move the staff-adoption result into a direct active clause.

> approved a 90-day scheduling pilot

**Problem**
[Important] The practicum repeats the scheduling recommendation and pilot approval in two bullets. *(saves about 14 words)*

**Why**
Both bullets describe the recommendation leading to client approval of a pilot, so the second adds little new evidence. The section would use its space more effectively by keeping the quantified savings and incorporating the approval detail into that result.

**How to change it**
Remove the duplicate approval bullet and fold the pilot approval into the savings bullet, retaining the quantified savings as the main result.

## Already working

- s2:e1:b1: The result appears immediately and is tied to a specific operational problem.

## Set aside (8)

8 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-54b33bcf.md.

