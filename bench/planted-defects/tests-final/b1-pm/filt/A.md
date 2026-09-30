> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full resume narrative and ATS formatting. The report gives an overall score of 84; the two education entries had no bullets to review, and no job description was provided for a match review.

The main changes to address:
- **Resolve the duplicated onboarding result:** the 2,300-merchant, time-to-first-payment claim appears under both Harbor Payments and the hospital practicum. The reviewers flag the practicum attribution as inconsistent with its hospital context.
- **Clarify what the numbers demonstrate:** the reviewers question whether the checkout and onboarding changes caused the reported improvements, and note that excluding weather-delayed shipments changes the on-time calculation rather than showing deliveries became more punctual. They also flag the 1,800 annual driver-hours saving as unsupported by the bullet’s stated evidence.
- **Add outcomes or specifics where work is hard to assess:** the S&OP review and hospital clinic working sessions lack a stated result; the intake-form bullet does not say how much the form was shortened.

The formatting check found clean ATS parsing and consistent layout. It also flagged date of birth and nationality as personal details commonly left off. The narrative review noted an unexplained eight-month gap after your undergraduate degree.

The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 81 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

2 errors, 9 important, 12 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2018

**Problem**
[Polish] The dates leave an unexplained eight-month gap between the degree and the Crestline role. *(about 3–6 words to add)*

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The 35% checkout-conversion increase is attributed to the flow replacement without a stated comparison design or defined metric. *(about 5–10 words to add)*
2. [Important] The 35% conversion increase has no baseline or measurement period. *(about 5–8 words to add)*
3. [Polish] “For all merchants” is broad and does not clarify the scope beyond the flow being replaced. *(saves about 3 words if deleted)*

**Why**
1. A change after rollout does not show that the replacement caused the increase; other factors may have changed at the same time. Without knowing what counted as conversion, the reader also cannot interpret the 35% figure.
2. Without a reference point, readers cannot judge the size of the increase or how long it took to occur. The figure is therefore difficult to assess even apart from the causal claim.

**How to change it**
1. If a causal comparison supports the claim, name the design and define checkout conversion; otherwise describe the 35% as an observed change without attributing it to the replacement.
2. Add [the conversion rate before the change] and [the measurement period] so the 35% lift has a clear reference.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
[Polish] The two-week-early delivery result is buried after the requirements and stakeholder details. *(no words)*

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Polish] The roadmap outcome comes after the research methods and loss estimate. *(no words)*
2. [Polish] “1.1 million dollars” uses a wordier number format than necessary. *(saves about 2 words)*

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Polish] “Over the summer” repeats the internship dates. *(saves about 3 words)*

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Important] The opt-in comparison does not establish that the redesign caused an onboarding change. *(about 5–10 words to add)*
2. [Important] The bullet reports how the redesign was measured but not what the comparison found. *(about 5–10 words to add)*

**Why**
1. Merchants who chose the new flow may differ from those who stayed on the old one in ways that affect onboarding. Without a result, readers also cannot tell what the comparison found or why measuring it mattered.
2. A reader cannot tell whether onboarding improved or what the comparison established. Without a result, the line does not communicate the value of doing the measurement.

**How to change it**
1. If merchants were randomly assigned or you adjusted for relevant group differences, name that method; otherwise describe this as an observational comparison. Add [the measured onboarding outcome and difference between the groups].
2. Add [the measured onboarding outcome and difference between the groups] after the comparison.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The bullet changes how late deliveries are counted; it does not demonstrate that deliveries became more punctual. *(about 3–8 words to add if clarifying the reported rate; no words if only reordering)*

**Why**
Excluding weather-delayed shipments changes the population used to calculate the rate, so 11% and 7% are not comparable unless both use the same inclusion rule. As written, the figures show a lower reported rate after the exclusion, not that fewer deliveries were late.

**How to change it**
Say the reported rate fell from 11% to 7% after excluding weather-delayed shipments, or compare both rates using the same calculation. If actual punctuality also improved, add [the actual late-delivery change measured consistently].

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Important] The S&OP bullet names recurring work but not what the review or forecast pack helped the business decide or achieve. *(about 4–8 words to add)*
2. [Polish] “Prepares” is present tense in a role that ended in August 2023. *(no words)*

**Why**
1. Readers can see the stakeholders and cadence, but not why the work mattered. One concrete outcome would distinguish its value from routine meeting support.

**How to change it**
1. Add [the decision or business outcome the review or forecast pack supported], using a concise result or evidence if available.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The bullet presents the 9 tonnes as food that would otherwise have been thrown away without evidence for that counterfactual. *(saves about 5 words if the unsupported phrase is replaced)*
2. [Important] The launch bullet does not say what product or rollout contribution you owned. *(about 5–8 words to add)*

**Why**
1. A pickup total shows how much food was redistributed, but not what would have happened to it otherwise. Without evidence of the dining halls’ planned disposal, the claim may overstate how much food was diverted from waste.
2. The reader can see the launch, reach and result, but not what you did to make the launch happen. One concrete contribution would make your product skills easier to assess.

**How to change it**
1. If dining-hall records or staff confirmation support the counterfactual, retain it; otherwise replace “food that would have been thrown away” with “surplus food.”
2. After “pickup app,” add [the key product or rollout decision you owned], keeping the existing result and dining-hall context.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
1. [Polish] “A volunteer shift system” does not show how volunteers were organized to fill pickup slots. *(about 3–6 words to add)*
2. [Polish] “Each week” and “a week” repeat the same frequency. *(saves about 2 words)*

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
1. [Important] The weekly sessions do not state what changed as a result. *(about 5–10 words to add)*
2. [Polish] “Working sessions” does not explain what you did with clinic managers. *(about 2–5 words to add)*

**Why**
1. A reader can see the activity and stakeholders, but not whether the sessions led to a decision or improvement. That leaves the value of the work unclear.

**How to change it**
1. Add [the main resulting decision or change in scheduling practice] and, if available, [what it improved].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Polish] “The intake form was shortened” does not indicate the extent of the reduction. *(about 2–5 words to add)*
2. [Polish] The passive wording hides who mapped the intake process and shortened the form. *(no words if the same amount of text is retained)*

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] This bullet assigns a merchant-onboarding result to a hospital-network practicum and repeats the Harbor Payments achievement. *(saves about 17 words if removed; clarification adds words)*
2. [Important] The bullet does not fit the hospital context, leaves the onboarding change unspecified, and uses present tense for a completed role. *(about 4–10 words to add, plus no words for the tense change)*

**Why**
1. A hospital scheduling project does not, on its face, explain a merchant onboarding outcome. The same 2,300-merchant result appears under the later payment-product internship, so the duplication raises doubt about which role owns it.
2. “New merchant” and “2,300 merchants” make the result’s connection to the Regional Hospital Network unclear. The reader also sees no specific onboarding change, and “takes” conflicts with the practicum’s past dates.

**How to change it**
1. If this result came from Harbor Payments, remove the bullet from the practicum; otherwise clarify [the practicum’s connection to the merchant-onboarding work] and verify the 2,300-merchant result.
2. If the work belongs here, clarify [the client or project context] and add [the onboarding step or process you changed], if accurate; otherwise move it to the correct entry. Change “takes” to “took.”

## Already working

- s2:e1:b1: Connects a measurable error reduction to specific changes and a defined two-site scope.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-53ddb22b.md.

