> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the resume’s narrative and ATS formatting. No job-description match was run because no posting was provided.

The main changes to prioritize:
- Resolve the duplicate merchant-onboarding result: it appears under both Harbor Payments and the hospital practicum, with conflicting attribution and figures. The narrative review recommends keeping it under the correct entry and replacing or clarifying the other bullet.
- Clarify how the Harbor Payments figures were calculated—especially the 35% conversion change and the annualized $1.1M chargeback estimate. The review also flags a measurement bullet that gives a comparison method but no result.
- Recheck the Crestline delivery-rate claim, since excluding weather-delayed shipments may explain the change in the calculation rather than fewer late deliveries.

Other recommendations include moving Education below Experience and Projects, removing date of birth and nationality, and tightening or replacing bullets that lack an outcome. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**82/100** — format 100 · content 73 · wording 78 · narrative 64

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 11 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996 | Nationality: American

**Problem**
[Error] The résumé includes personal details that readers are not meant to weigh. *(saves about 8 words)*

**Why**
A reader does not need your birth date or nationality to assess the experience presented here. Including them draws attention to information that is not relevant to your qualifications.

**How to change it**
Remove the date of birth and nationality.

> Northfield School of Management | MBA

**Problem**
[Important] Education leads the résumé even though your relevant experience and projects should lead the career story. *(no words)*

**Why**
With several years of work experience and relevant product entries, opening with education delays the information a reader is likely to look for first. Moving it down makes your career story quicker to see.

**How to change it**
Move Education below Experience and Projects; no wording change is needed.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The stated flow change does not establish a 35% conversion lift for all merchants. *(about 5 words, plus [the population actually measured])*
2. [Important] The 35% figure does not say whether it is relative growth or a percentage-point change. *(about 3 words, plus [the comparison baseline or period])*

**Why**
1. Replacing a three-step flow with a one-page flow does not show that conversion increased. Without a measurement and comparison, a reader may question both the claimed lift and whether it applies to all merchants.
2. Without the starting conversion rate or the type of change, a reader cannot tell how the result was measured. That makes the scale of the improvement difficult to judge.

**How to change it**
1. Add the conversion measurement and comparison supporting the 35% lift and its scope; otherwise, qualify the claim to [the population actually measured].
2. Clarify whether the figure is relative growth or percentage points, and add [the comparison baseline or period] if available.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The shipping result is buried after the deliverables and stakeholder list. *(no words)*

**Why**
A scanning reader encounters the requirements and stakeholder coordination before the outcome. Putting the early shipment first makes the result visible sooner.

**How to change it**
Move the early-shipment result to the front, then summarize how the requirements and metrics enabled it.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] Six months of data do not, by themselves, establish annual chargeback losses of 1.1 million dollars. *(about 4 words)*
2. [Important] The roadmap impact comes after a lengthy list of methods and the loss estimate. *(no words)*

**Why**
1. The line gives a six-month analysis and an annual figure without showing how one supports the other. A reader may question whether the annual amount is an estimate and what calculation or assumptions produced it.
2. A reader has to work through the methods and estimate before reaching the result. Leading with the roadmap priority makes the impact faster to scan.

**How to change it**
1. State the annualization calculation and assumptions, if used; otherwise, report the period actually measured or qualify the figure as an estimate.
2. Move the roadmap impact to the front, then keep the interviews, data analysis and estimate after it.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The onboarding comparison reports no result. *(about 3 words, or saves about 16 words if the bullet is removed)*

**Why**
A reader learns how you compared merchants but not what the comparison found. Without an outcome, the bullet does not show whether the redesign improved onboarding.

**How to change it**
Add [the measured difference between the two groups]; keep the comparison method only if space allows, or remove the bullet.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The bullet credits an improvement in delivery performance to excluding shipments from the calculation. *(adds about 1 word)*

**Why**
Changing which shipments count can lower the reported rate without making any delivery arrive earlier. The line therefore credits a calculation change as a reduction in late deliveries, leaving a reader unsure whether operations improved or only the reported rate changed.

**How to change it**
Replace “Cut late deliveries” with “Reported late-delivery rate changed” and change “by excluding” to “after excluding,” retaining the 11% and 7% figures.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Error] “Prepares” is present tense even though the role ended in August 2023. *(no words)*
2. [Important] The bullet describes work but gives no outcome of the review or forecast pack. *(about 5 words, plus [one decision or forecast outcome])*
3. [Polish] “Quarterly” and “for each meeting” redundantly describe the review cadence. *(saves 3 words)*

**Why**
1. The present-tense claim implies you still prepare the forecast pack in this role. That conflicts with the dates given for the position.
2. A reader can see the work and its stakeholders, but not why it mattered. One concrete decision or forecast outcome would show the value without adding a list of responsibilities.
3. Both phrases convey how often the review occurs. Keeping both adds words without clarifying the work.

**How to change it**
1. Change “prepares” to “prepared.”
2. After the description of the work, add [one decision or forecast outcome the review or pack enabled].
3. Remove “for each meeting.”

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The claim that the 9 tonnes would otherwise have been thrown away is a counterfactual the amount redistributed alone does not establish. *(saves about 4 words)*
2. [Important] The launch outcome does not say what product or launch work you personally led. *(about 5 words, plus [the feature or launch responsibility])*

**Why**
1. Food being surplus and picked up does not show that it would otherwise have been discarded; it might have been eaten or donated another way. Dining-hall records or other evidence would need to support that comparison.
2. For a Product Lead role, a reader can see the app’s outcome but not your contribution behind it. One specific ownership detail would distinguish your work from the app’s overall result.

**How to change it**
1. Keep the counterfactual only if records support it; otherwise, replace “food that would have been thrown away” with “surplus food.”
2. Add one brief phrase naming [the feature or launch responsibility you led], if accurate.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] The user-interview rationale comes before the main result. *(no words)*

**Why**
A scanning reader may not reach the growth figure quickly. Putting the increase in weekly active users first makes the outcome easier to spot.

**How to change it**
Move the weekly-active-user growth result to the front, then give the interview finding as its rationale.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake-form change gives no measure of how much the form was shortened or what improved. *(about 4 words, plus [the result])*

**Why**
Adoption shows that staff used the change, but a reader cannot tell whether it made intake faster, simpler or otherwise better. One outcome would make the value clearer.

**How to change it**
After “shortened,” add [the change in form length] or [the effect on intake time or completion], if you have it.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The 2,300-merchant onboarding result appears to repeat the Harbor Payments internship achievement and is attributed to a hospital-network practicum. *(saves about 20 words if removed; replacement length depends on [the correct metric and figure])*
2. [Polish] “It takes” uses present tense for a practicum that ended in May 2024. *(no words)*

**Why**
1. The internship entry makes the same first-payment, onboarding-redesign and 2,300-merchant claim, while this practicum describes outpatient scheduling and patient intake. As written, the result appears misattributed, and the two entries give different reductions.
2. The present tense makes the result sound current even though the practicum has ended. That conflicts with the dates given for the project.

**How to change it**
1. If this result belongs to Harbor Payments, remove it from this entry. Otherwise, clarify the hospital-network population and use the outcome actually measured [confirm the correct metric and figure].
2. Change “It takes” to “It took.”

## Already working

- s2:e0:b5: Pairs a defined product change with a clear before-and-after outcome and pilot scale.
- s2:e1:b1: Pairs a quantified error reduction with a clear two-site scope.
- s2:e1:b3: Connects a named operational rollout to an annual hours-saved result.

## Set aside (10)

10 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-32a5513e.md.

