> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Content review: 4 experience/project entries; wording review: 4; narrative review: whole resume; format review: complete. Education entries were not applicable. JD match was not run because no job posting was provided.

The most important changes are:

1. **Resolve the duplicated/conflicting achievement.**  
   The MBA Consulting Practicum includes: “Halved the time it takes a new merchant to receive a first payment…” This is a payments result that duplicates the Harbor Payments internship, and the two bullets report different measurements. Keep it only under the correct entry or replace it with the hospital-network result.

2. **Add outcomes to activity-only bullets.**  
   Several lines describe work without explaining what changed afterward:
   - “Wrote the requirements and success metrics for dispute self-service…”
   - “Interviewed 25 merchants to size the chargeback problem…”
   - “Coordinated the quarterly S&OP review…”
   - “Held weekly working sessions with clinic managers…”
   
   Add the resulting decision, shipped feature, adoption, savings, improvement, or other measurable consequence where available.

3. **Clarify metrics and causality.**  
   Review the claims involving:
   - checkout conversion increasing by 35%;
   - late deliveries falling from 11% to 7% after changing the calculation;
   - weekly active users rising from 400 to 1,150;
   - food-rescue pickup slots being 95% filled while staff gap coverage was eliminated.
   
   Add comparison periods or populations and ensure the wording does not imply that a metric-definition change caused an operational improvement.

4. **Reorder the resume.**  
   Place **Experience before Education**. Keep the Campus Food Rescue project before the hospital practicum. The current ordering better supports the move from logistics operations into product management.

5. **Fix smaller wording issues.**  
   - Change “Cut warehouse pick errors 30%” to grammatically include “by.”
   - Keep tense consistent in the former logistics role.
   - Explain or replace “S&OP” for readers outside supply-chain operations.
   - Make active ownership clearer in the hospital practicum bullets.

6. **Check the timeline.**  
   The dates leave an unexplained gap from June 2018 to March 2019. Add relevant work, study, or other activity if applicable.

The file itself is one page, parses cleanly for ATS systems, and has no layout warnings. The full specialist report is available at `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 72 · wording 80 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

9 errors, 9 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] Remove personal details that are not relevant to hiring. *(saves about 9 words)*

**Why**
A reader is not meant to weigh date of birth or nationality. They use space without strengthening your candidacy.

**How to change it**
Delete the date-of-birth and nationality details.

> across 2,300 merchants

**Problem**
[Error] The merchant-onboarding result is assigned to two projects, and 9 days to 4 days is not exactly a halving. *(no words)*

**Why**
The practicum predates Harbor Payments and concerns a hospital network. The conflict makes ownership and accuracy unclear.

**How to change it**
Keep the achievement under the correct role, remove the duplicate, and use the consistent median-time metric.

> Jun 2018

**Problem**
[Important] Explain the eight-month gap and move EXPERIENCE above EDUCATION. *(about 3–8 words to add)*

**Why**
The dates leave a reader wondering what happened after June 2018. Five years of work should carry more visual weight than the degrees.

**How to change it**
Add [the activity occupying Aug 2018–Feb 2019], and move EXPERIENCE above EDUCATION.

> Campus Food Rescue App

**Problem**
[Important] Keep Campus Food Rescue App before MBA Consulting Practicum. *(no words)*

**Why**
The ongoing project is the stronger product story and should open PROJECTS.

**How to change it**
Move Campus Food Rescue App before the practicum.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The checkout claim lacks a baseline and does not establish causation or universal scope. *(about 4–10 words to add)*

**Why**
Other changes could explain the 35% increase, and a subset cannot represent all merchants without evidence. The reader cannot tell whether 35% is relative or percentage-point change.

**How to change it**
Add [the baseline and comparison], report the measured population, and remove causal or universal wording unless supported.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Important] The dispute-self-service bullet gives no post-launch result and obscures your delivery role. *(about 5–10 words to add)*

**Why**
The reader sees requirements and alignment but cannot judge feature value. "The team shipped it" hides your connection to delivery.

**How to change it**
Use an active delivery phrase and add [the change in the key success metric].

> Interviewed 25 merchants to size the chargeback problem and turned the findings into the business case that set the next quarter’s roadmap priority.

**Problem**
[Important] Interviews alone cannot size the chargeback problem, and the bullet gives no finding. *(about 4–10 words to add)*

**Why**
Twenty-five interviews show experience and perceptions, not prevalence or financial magnitude. Without a quantified result, the roadmap priority is unsupported.

**How to change it**
Call the work directional, and add [representative data] and [the quantified finding] if available.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] The opt-in comparison is descriptive, not a valid causal measurement. *(about 2 words to add)*
2. [Important] The onboarding-evaluation bullet gives a method but no result or decision. *(about 5–12 words to add)*

**Why**
1. Opt-in merchants may differ systematically from those who stayed on the old flow. Their outcomes cannot establish the redesign's effect without randomization or credible adjustment.
2. The reader cannot tell whether the new flow improved performance or changed the product.

**How to change it**
1. Call it a descriptive comparison, or add a valid randomized or quasi-experimental method.
2. Add [the measured difference] or [the decision informed].

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Error] The onboarding result cannot be attributed to this internship as written. *(no words)*

**Why**
The same result is assigned to an earlier practicum. A reader cannot tell which role produced it.

**How to change it**
Correct the dates and attribution, or remove the result from this entry.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] Excluding weather-delayed shipments changes the calculation; it does not prove overall late deliveries fell. *(about 4–8 words to add)*

**Why**
The denominator changes, so the reported rate may fall without fewer late deliveries. The periods and shipment population are also unspecified.

**How to change it**
Report the non-weather rate explicitly, add [comparison periods], and report any overall reduction separately.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Error] The bullet must say “cut warehouse pick errors by 30%.” *(about 1–7 words to add)*

**Why**
The percentage needs the preposition “by.” The baseline and measurement window are also missing.

**How to change it**
Insert “by” and add [error rate before], [error rate after], and [comparison period] if available.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
[Error] The S&OP bullet reports activities without an outcome and mixes tense. *(about 4–8 words to add)*

**Why**
A reader cannot see whether planning improved. “S&OP” is also unexplained jargon, and “prepares” is present tense for a completed role.

**How to change it**
Change “prepares” to “prepared,” explain S&OP, and add [the strongest measured outcome].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.
> Raised weekly active users from 400 to 1,150 by adding pickup reminders, chosen after 60 user interviews showed students missed pickup windows.
> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and removing the need for staff to cover gaps.

**Problem**
[Error] The project bullets do not clearly show ownership, scope, timing, or valid causation. *(about 5–15 words to add)*

**Why**
The launch does not identify your contribution; “with two dining halls” is ambiguous; and user growth is attributed to reminders without a control or timeframe. The 95% fill rate also contradicts removing every staff gap.

**How to change it**
Add [your owned responsibility], clarify the dining-hall relationship, add [the growth period], state that users rose after reminders unless causation is proven, and say staff coverage was reduced rather than eliminated.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The scheduling bullet describes meetings rather than your work or its result. *(about 3–10 words to add)*

**Why**
“Working sessions” does not show analysis, advice, or process design. Without an outcome, the reader cannot judge your contribution as team lead.

**How to change it**
Replace the phrase with [the specific analysis or recommendation adopted], using “Advised” or “Led” if accurate.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake bullet hides ownership and does not quantify the shortened form. *(about 4–10 words to add)*

**Why**
Passive wording obscures who performed the work, while adoption is buried. Four clinics show scope, not the size of improvement.

**How to change it**
Use active wording, bring adoption forward, and add [fields or steps removed] or [the change in intake time or completion rate].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The merchant-onboarding bullet is wrong for this hospital practicum. *(about 2–10 words to add)*

**Why**
The surrounding work concerns scheduling and intake, not payments. It duplicates Harbor Payments and makes the project look misattributed.

**How to change it**
Remove it and replace it with [the actual measured hospital-project outcome].

> first payment

**Problem**
[Important] Remove the merchant-onboarding bullet from the hospital practicum or move it to Harbor Payments. *(saves about 17 words)*

**Why**
It is unrelated to the surrounding hospital work and duplicates another entry. The project otherwise concerns scheduling and intake.

**How to change it**
Delete the bullet from the practicum and retain it only under the correct role.

## Already working

- s2:e1:b3: Combines ownership of a rollout with a quantified annual benefit.

## Set aside (7)

7 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-9b70bb26.md.

