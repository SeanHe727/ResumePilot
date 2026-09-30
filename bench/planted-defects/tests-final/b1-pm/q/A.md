> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording specialists reviewed all 4 experience/project entries; education entries had no bullets to review. Narrative and format reviews ran. No job description was provided, so no JD match review was run.

The main changes flagged:
- **Resolve the practicum mismatch:** The hospital practicum includes a merchant-onboarding result that appears to duplicate the Harbor Payments internship bullet, with conflicting figures and attribution. The narrative specialist recommends keeping the result under the correct entry and clarifying or replacing the practicum bullet.
- **Clarify what the numbers represent:** Several claims need their basis or method explained—for example, the checkout conversion increase, the annualized chargeback estimate, and the late-delivery rate that excludes weather delays. One internship bullet describes a comparison but gives no result.
- **Strengthen or clean up weaker lines:** The practicum bullets need clearer outcomes; the logistics role has a tense inconsistency and an unexplained abbreviation. The narrative review also noted an eight-month gap between school and the first listed role.

The format review found clean ATS parsing and no layout warnings. It also flagged date of birth and nationality as personal details to remove. The full report is available in **`/report --full`**.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 82 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 12 important, 1 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The résumé includes personal details that conventionally do not belong on a résumé. *(saves about 11 words)*

**Why**
A reader is not meant to weigh date of birth or nationality when assessing your qualifications. Including them uses space for details unrelated to the work and education presented.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American.”

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The 35% increase is attributed to the flow change and presented as applying to all merchants without evidence of causation or full-base coverage. *(about 5 words to add for the measured population)*
2. [Important] The 35% change has no comparison basis. *(about 8 words to add)*

**Why**
1. A before-and-after increase does not separate the effect of the new flow from other changes over time. The line also does not establish that every merchant experienced the uplift, so the broad scope may overstate the result.
2. A reader cannot tell whether 35% means relative growth or a percentage-point increase. Without the comparison period or group, the size of the result is difficult to judge.

**How to change it**
1. If no controlled analysis supports the causal and broad-scope claim, replace the attribution with a statement that conversion rose after the rollout and specify [the measured population]. Otherwise, name the analysis and its scope.
2. After “by 35%,” add [whether this is relative growth or percentage points, and the comparison period or group].

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Important] The six-month data does not, by itself, establish annual chargeback losses of 1.1 million dollars. *(about 5 words to add for the calculation)*
2. [Important] The business case and roadmap result are buried after the methods. *(no words)*

**Why**
1. Six months of chargeback data do not establish an annual total without an annualization method. The line also does not explain how the monetary losses were calculated, so readers cannot judge whether the figure supports the business case.
2. A scanning reader may reach the interviews and data analysis without seeing what the work informed. That makes the business impact—the result that set the next quarter’s priority—easier to miss.

**How to change it**
1. If you annualized the figure, label it an estimate and briefly state [the annualization and loss calculation]. Otherwise, report the six-month figure or remove the annual-loss claim.
2. Move the business-case and roadmap-priority clause to the start of the bullet, ahead of the interview and data-analysis details.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.
> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The opt-in comparison does not establish that the redesign caused the onboarding improvement. *(about 6 words to add for the observed difference)*

**Why**
Merchants who opted into the new flow may differ from those who stayed on the old one, so a difference between the groups could reflect selection rather than the redesign. The before-and-after figures in the other bullet also do not establish what caused the change; readers need to distinguish an observed change from a demonstrated effect.

**How to change it**
Describe the comparison as observational and add [the measured difference between the groups]. In the bullet reporting the change from 9 days to 4, remove the causal attribution unless randomization or adequate adjustment supports it; if it does, name the analysis.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The comparison describes how the redesign was measured but gives no result. *(about 7 words to add)*

**Why**
A reader can see the evaluation approach but cannot tell whether onboarding improved or what the comparison found. Without an outcome, the bullet does not show the value of the work.

**How to change it**
Keep the comparison and add [the onboarding outcome and measured difference between the groups].

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] Excluding weather-delayed shipments changes the calculation, not necessarily the number of late deliveries. *(about 3 words to add if describing the calculation adjustment)*

**Why**
The 11% and 7% figures are comparable only if both periods use the same inclusion criteria. Otherwise, the lower rate could result from excluding shipments rather than from improved delivery performance.

**How to change it**
Recalculate both periods using the same inclusion criteria before claiming a reduction in late deliveries. If you did not do that, replace “Cut late deliveries” with wording that describes an adjustment to the on-time calculation or a lower reported rate.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The 30% reduction has no baseline or measurement period. *(about 7 words to add)*

**Why**
The percentage gives a sense of improvement, but readers cannot gauge the change without the starting and ending pick-error rates. The period would also help them understand how the result was measured.

**How to change it**
Add [the baseline and post-change pick-error rates and the measurement period], if available.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
[Polish] The bullet switches from past tense to present tense in an ended role. *(no words)*

**Why**
“Coordinated” describes completed work, while “prepares” suggests the forecast-pack work is ongoing. That tense shift can make the timeline of the responsibility unclear.

**How to change it**
Replace “prepares” with “prepared.”

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The line presents the 1,800 annual driver hours as realized savings without stating whether they were measured or estimated. *(about 1 word to label it an estimate)*
2. [Important] The strongest result appears after the rollout and training details. *(no words)*

**Why**
1. A route-planning rollout may support an annualized estimate, but that is not the same as verified hours saved. As written, readers may take the figure as an actual measured result.
2. Readers scanning the bullet encounter the rollout and training before seeing the 1,800-hour result. Moving the result forward makes the achievement easier to spot.

**How to change it**
1. If the hours were measured, state [how they were verified]. Otherwise, label the figure as an annualized estimate.
2. Move “saving 1,800 driver hours a year” to the start of the bullet, ahead of the rollout and training details.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Important] “That would have been thrown away” repeats the surplus-food context. *(saves about 5 words)*

**Why**
The bullet already describes a surplus-food pickup app, so the phrase repeats information a reader has just been given. It lengthens the result without adding a distinct detail.

**How to change it**
Cut “that would have been thrown away.”

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Important] The timing of the reminders and user growth may imply that the reminders caused the increase. *(no words)*

**Why**
Weekly active users rising after the launch does not establish that the reminders caused the growth; other factors could explain the change. Interviews can identify missed pickups among participants, but do not by themselves show how prevalent that problem was among students generally.

**How to change it**
If a comparison or other evidence supports the attribution, state how reminders affected weekly active users. Otherwise, report the increase over the following term without implying that the reminders caused it.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The passive wording hides who mapped the intake process and shortened the form. *(no words)*
2. [Important] The adoption result appears after the methods instead of leading the bullet. *(no words)*

**Why**
1. Readers cannot tell from the line who performed the work. That leaves your contribution to the practicum unclear.
2. Readers scanning the bullet encounter the process and form changes before learning that front-desk staff adopted them. Bringing adoption forward makes the outcome visible sooner.

**How to change it**
1. Replace the passive clause with an active construction naming [who] mapped the process and shortened the form.
2. Move “adopted by front-desk staff” to the start of the bullet, ahead of the process-mapping and form-shortening details.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The practicum bullet assigns the merchant-onboarding result to a hospital project. *(saves about 19 words if removed)*
2. [Error] The résumé attributes the same onboarding achievement to two different roles and gives conflicting reductions. *(saves about 19 words if the practicum bullet is removed)*
3. [Error] “Halved” is numerically wrong for the same result reported as a change from 9 days to 4 days. *(saves about 3 words)*

**Why**
1. The other bullets describe outpatient scheduling and patient intake at clinics, while merchant onboarding to first payment is a payments-platform activity. The same onboarding achievement appears under the Harbor Payments internship, so readers may doubt which role produced it and what this practicum contributed.
2. The Harbor Payments internship reports a change from 9 days to 4 days across 2,300 merchants, while the hospital practicum claims the same merchant-onboarding result as a halving. A reader may question the achievement’s attribution and the accuracy of its figures.
3. Half of 9 days is 4.5 days, not 4 days. A change from 9 days to 4 days is about a 56% reduction, so the two descriptions do not agree.

**How to change it**
1. If the result belongs to the Harbor Payments internship, remove it from this practicum and keep it under that role. If it was a separate workstream in this practicum, clarify [how merchant onboarding relates to the hospital project] and verify the attribution and figures.
2. Keep the result under the correct entry and remove or clarify the other bullet. If it is the same result, use the 9-days-to-4-days figures consistently; if it is separate work, clarify [how it relates to the practicum] and verify its figures.
3. If these figures refer to the same result, replace “Halved the time” with “Reduced time to first payment from 9 days to 4 days.”

## Already working

- s2:e0:b1: Names the feature and the requirements and success metrics work.
- s2:e0:b3: Pairs the volume handled with a meaningful queue reduction.

## Set aside (10)

10 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-566a724c.md.

