> Here is my resume: bench/planted-defects/tests-final/b3-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s sequence and ATS formatting. The education entries have no bullets to review. No job description was provided, so I did not assess job match.

The main changes to address are:
- Check the repeated claim that onboarding cut time to first payment in both the Harbor Payments internship and the hospital practicum; clarify which entry it belongs to or remove the duplicate.
- Reorder Experience so Harbor Payments appears before Crestline, and consider moving Education below Experience and Projects.
- Clarify the calculation behind the late-delivery reduction and what “forecast error” measures. For checkout conversion, add the baseline or comparison period if available.
- Remove the first-person pronoun and review whether to keep the listed date of birth and nationality.

The file parses cleanly. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 81 · wording 81 · narrative 67

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 11 important, 13 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The résumé includes personal details that are conventionally left off.

**Why**
A reader is not meant to weigh date of birth or nationality as part of the résumé’s qualifications. Including them uses space without strengthening the evidence of fit.

**How to change it**
Remove the date of birth and nationality from the file.

> Crestline Logistics | Operations Analyst

**Problem**
[Important] Experience is not ordered newest-first.

**Why**
Crestline, which ended in 2023, appears above the more recent Harbor internship from 2024. That order makes the experience section harder to scan chronologically and puts the older role first.

**How to change it**
Move Harbor Payments above Crestline Logistics in Experience.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience and Projects.

**Why**
The current order makes the reader encounter degrees before the work and product direction they support. Moving Education later would put the candidate’s applied experience first.

**How to change it**
Move Education below Experience and Projects.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] This presents a change in the on-time calculation as an actual reduction in late deliveries.

**Why**
Excluding weather-delayed shipments can lower the reported rate without changing how many deliveries were actually late. Because the line does not say whether both figures use the same definition, a reader cannot tell whether operations improved or only the reported measure changed.

**How to change it**
If both figures use the same definition, state that definition and the comparison period. Otherwise, describe the change as a reported-rate shift—for example, “Changed the on-time calculation to exclude weather-delayed shipments; the reported late-delivery rate fell from 11% to 7%”—rather than claiming late deliveries were cut.

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
1. [Polish] The first-person pronoun “my” does not belong in the résumé bullet.
2. [Polish] The passive phrase “was rolled out with” obscures who implemented the redesign.

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
1. [Important] The forecast-error result is not interpretable without naming the error measure.
2. [Polish] The forecast-error result is buried after the description of the review and its scope.
3. [Polish] “S&OP” may be unfamiliar to readers outside the team.

**Why**
1. A reader cannot tell what “forecast error” measures or compare the result with other forecasting outcomes. Naming the metric would make the change from 18% to 11% meaningful.

**How to change it**
1. Replace “forecast error” with [the specific error metric used, such as MAPE if accurate].

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
[Important] The route-planning rollout and its result should lead the entry.

**Why**
This line pairs a clear initiative with a quantified annual saving, making it a strong opening for the role. Placing it first would give a reader the most immediately legible impact before the other bullets.

**How to change it**
Move this bullet to the top of the Crestline Logistics bullets.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
1. [Important] The 35% conversion improvement has no baseline or comparison period.
2. [Polish] “For all merchants” is a broad qualifier that adds little to the result.

**Why**
1. A reader cannot tell what the increase was measured against or how to interpret its size. Without an anchor, the conversion result is difficult to assess.

**How to change it**
1. Add [the baseline or comparison period] after the 35% figure, if available.

> Wrote the requirements and success metrics for dispute self-service, aligning engineering, risk and support; the team shipped it two weeks ahead of plan.

**Problem**
1. [Important] The bullet gives the delivery schedule but not the feature’s post-launch effect.
2. [Polish] The shipping result comes late and refers vaguely to “it.”

**Why**
1. Shipping two weeks early shows execution, but a product-management reader still cannot tell whether the feature mattered after launch. Without an outcome, the feature’s value to users or the business remains unclear.

**How to change it**
1. Keep the schedule result and add [one post-launch outcome, such as self-service adoption or support contacts avoided], if available.

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
1. [Polish] The chargeback-loss estimate does not identify the merchant population it covers.
2. [Polish] The roadmap impact appears only after the methods and estimate.
3. [Polish] “The business case that set the next quarter’s roadmap priority” is a wordy explanation of the outcome.

> Ran weekly triage with engineering and support, closing 140 onboarding tickets over the summer and cutting the open-ticket queue by half.

**Problem**
[Polish] “Over the summer” repeats timing already supplied by the role dates.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
[Important] The comparison method is given without its outcome or result.

**Why**
A reader can see which merchant groups were compared, but cannot tell what outcome was measured or whether the redesign improved onboarding. The bullet describes evaluation without showing what it found.

**How to change it**
Add [the outcome compared and the result]; if the 9-to-4-day change in the next bullet came from this comparison, connect that result here.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
1. [Error] The 9-to-4-day onboarding result is attributed to both this internship and a hospital-network practicum.
2. “Around a single verification step” is an indirect way to describe the redesign.

**Why**
1. The résumé gives the same merchant-onboarding result and 2,300-merchant figure to two projects. The practicum dates precede this internship, and its hospital-network context does not fit the merchant-payment claim, so a reader may doubt which role actually owned the result.
2. The wording makes the process change less direct than it needs to be. A reader can understand the intervention more quickly when the step is stated plainly.

**How to change it**
1. Confirm which role owned the result, retain it only under that role, and correct or remove the conflicting attribution [which role and context are accurate].
2. Replace “around a single verification step” with “with a single verification step.”

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The app is named, but the line does not say how it enabled food pickups.
2. [Polish] “That would have been thrown away” is wordy and hypothetical.

**Why**
1. A reader can see the product and its result, but not the product contribution behind them. One concrete feature or workflow would make the work easier to understand.

**How to change it**
1. After “app,” add [the key feature or workflow you designed that enabled food pickups]. Keep it to one specific detail.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] “After 60 user interviews showed” makes the interviews sound like the direct trigger for the reminders.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The scheduling sessions are described without a resulting change.

**Why**
A reader can see who was involved and what the sessions covered, but not what the work accomplished. Without a concrete scheduling outcome, the value of the practicum is difficult to judge.

**How to change it**
Add [the scheduling outcome, such as a delay or bottleneck reduced, compared with before].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The intake change is described without saying what it improved.
2. [Important] The strongest intake result is not the opening bullet for the practicum.
3. [Polish] Passive constructions hide who mapped intake and shortened the form.

**Why**
1. Adoption shows that staff used the change, but does not show whether intake became faster, simpler, or less error-prone. One measured effect would make the value of the work clearer.
2. This bullet gives the concrete work across four clinics and says staff adopted the changes. Leading with it would give a reader the clearest evidence of the practicum’s work before the less conclusive session description.

**How to change it**
1. Add [the measured effect on intake time or errors, compared with before].
2. Move this intake bullet above the weekly working-sessions bullet.

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding achievement does not fit this hospital-network practicum.
2. “By redesigning onboarding” does not specify what changed in the process.
3. “It takes” uses present tense for a completed result.
4. “Across 2,300 merchants” interrupts the phrase describing the time reduction.

**Why**
1. The other practicum bullets describe clinic scheduling and patient intake, while this one claims a merchant-payment outcome that is also attributed to the Harbor internship. That mismatch makes the bullet an implausible account of the hospital project.
2. Even apart from the mismatch with the hospital practicum, the phrase does not tell a reader what the redesign involved. The claimed outcome is therefore not connected to a concrete intervention.
3. The rest of the bullet describes a completed change, so the present-tense phrasing makes the timing inconsistent. That can interrupt a reader’s understanding of the result.
4. The inserted scope separates the time measure from its result, making the claim harder to scan. The placement also does not resolve the underlying mismatch between this practicum and the merchant outcome.

**How to change it**
1. Replace the bullet with [a verified outcome from the hospital practicum], or remove it.
2. If this work belongs in a different entry, name [the onboarding change you made] here; otherwise remove the phrase with the bullet.
3. If retaining a verified result in this entry, change “takes” to “took”; otherwise remove the mismatched bullet.
4. If the claim belongs here, move “across 2,300 merchants” next to the population it describes; otherwise remove the mismatched bullet.

## Already working

- s3:e0:b2: Pairs a clear operational intervention with two concrete results.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-83344c26.md.

