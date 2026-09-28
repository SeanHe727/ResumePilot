> Here is my resume: bench/planted-defects/tests-v3/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the resume’s format, narrative, and all four entries with bullets. Education was not applicable for bullet-level review, and no job description was loaded for a match review.

The main changes to make are:

1. **Fix the MBA Consulting Practicum entry**
   - Bullet `s3:e1:b2` describes merchant onboarding and repeats the Harbor Payments result involving 2,300 merchants. This conflicts with the hospital-network project.
   - Remove or replace it with a hospital-specific result.
   - The other two bullets need measurable outcomes or deliverables; currently they mainly describe activities.

2. **Clarify the Harbor Payments measurement claims**
   - Bullet `s2:e0:b4` describes a comparison but never says what the analysis found.
   - Bullet `s2:e0:b5` presents the 9-to-4-day improvement as causal without explaining the measurement basis.
   - Ensure the figures, scope, and causal wording agree across both bullets.

3. **Correct the logistics metrics**
   - Bullet `s2:e1:b0` appears to improve the reported late-delivery rate by excluding weather-delayed shipments. Clarify that the comparison uses the same weather-adjusted calculation.
   - Bullet `s2:e1:b2` describes a recurring responsibility without an outcome and mixes past and present tense.
   - Expand “S&OP” on first use.

4. **Make the product-management direction more prominent**
   - Consider moving Projects above the older logistics role, or place the Campus Food Rescue App directly after Harbor Payments.
   - The narrative review also identified an unexplained gap between June 2018 and March 2019.

5. **Tighten wording and consistency**
   - Several bullets use passive or indirect phrasing.
   - Clarify terms such as “triage,” “working sessions,” and “cover shifts.”
   - Make scope phrases such as “with two dining halls” unambiguous.
   - The formatting review found a clean, ATS-readable one-page document with consistent formatting. It also flagged personal details such as date of birth and nationality as information generally omitted from resumes.

The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 78 · wording 80 · narrative 72

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 12 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> across 2,300 merchants

**Problem**
[Error] The résumé repeats the same onboarding achievement under Harbor Payments and a hospital-network practicum, with conflicting context and result wording. *(saves about 16 words if removed)*

**Why**
A reader would see the 2,300-merchant result as duplicated, while the hospital context conflicts with merchant onboarding. The difference between “from 9 days to 4” and “halved” also makes the achievement look unreliable.

**How to change it**
Keep the onboarding achievement only under the correct Harbor Payments entry, and remove it from the practicum or replace it with [a verified hospital-network result]; make the figures and context agree.

> Campus Food Rescue App

**Problem**
[Important] The Projects section is placed too late for the product-management direction to lead the résumé. *(no words)*

**Why**
The Campus Food Rescue App and Harbor Payments internship provide the clearest product evidence, but the older logistics role appears first and dominates the experience narrative. A product-management reader may therefore miss the intended career direction during an initial scan.

**How to change it**
Move Projects above Experience, or place Campus Food Rescue App immediately after Harbor Payments.

> Jun 2018

**Problem**
The résumé leaves an eight-month period unexplained between the B.A. and the Operations Analyst role. *(about 3 to 8 words to add)*

**Why**
A reader can see that the degree ended in June 2018 and the next listed role began in March 2019, but cannot tell whether the period reflects work, study, travel, or another activity. The unexplained interval can prompt avoidable questions about the timeline.

**How to change it**
If there was relevant activity during the period, add [the activity and dates]; otherwise leave the timeline unchanged rather than inventing an explanation.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Improved checkout conversion by 35% after replacing the three-step flow with a one-page flow for all merchants.

**Problem**
[Important] The 35% conversion result is presented as a causal, universal improvement without evidence supporting either claim. *(about 3 words to add)*

**Why**
A before-and-after change can also reflect traffic mix, seasonality, device mix, or other concurrent changes. Results from the measured merchants cannot automatically establish the same outcome for “all merchants,” so the broad claim may make the result look overstated.

**How to change it**
If a randomized test or suitable controlled analysis supports the claim, state the measured change and tested population; otherwise describe conversion as observed to increase by 35% among [the measured merchants and period] after the change, rather than claiming it applied to all merchants.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] Comparing merchants who opted into the new flow with merchants who stayed on the old flow does not validly establish the redesign’s effect. *(about 5 words to add)*
2. [Important] The comparison method is stated, but the bullet never says what the onboarding measurement found. *(about 4 to 8 words to add)*

**Why**
1. Opt-in merchants may differ systematically from non-opt-in merchants, so the outcome difference may reflect selection or pre-existing differences rather than the redesign. The comparison supports an association, not an unbiased effect, unless randomization or appropriate adjustment was used.
2. A reader can see that an evaluation was attempted but cannot tell whether onboarding improved or by how much. The line therefore demonstrates analysis without demonstrating product impact.

**How to change it**
1. Use a randomized comparison or an adjusted analysis of baseline differences if one was performed; otherwise describe the result as an association between opting into the new flow and [the observed outcome difference].
2. Keep the comparison method, then add [the resulting change in the measured onboarding outcome], using a specific time, rate, or percentage-point difference if accurate.

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
1. [Important] The onboarding result is presented as causal without a control or other basis for causal attribution. *(about 3 words to add)*
2. The onboarding result omits the repeated unit after the second number and leaves the pilot scope vague. *(about 1 word to add)*

**Why**
1. A before-and-after reduction can also reflect time trends, changes in merchant mix, or concurrent process changes. The pilot result does not by itself establish that the same effect applies beyond the pilot region.
2. A reader can understand the result, but “from 9 days to 4” is slightly slower to scan than repeating the unit. “Pilot region” also does not show what market or geography the 2,300 merchants represent.

**How to change it**
1. If a controlled analysis supports causation, state the result with its comparison; otherwise say median time to first payment fell from 9 days to 4 days among 2,300 new merchants in the pilot region after the redesign.
2. Change “from 9 days to 4” to “from 9 days to 4 days,” and replace “pilot region” with [the region or relevant market], if the candidate wants to disclose it.

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The line incorrectly calls a change in the calculation a reduction in late deliveries. *(about 4 words to add)*

**Why**
Excluding weather-delayed shipments changes the population being measured and can mechanically lower the reported late-delivery rate. It does not show that the actual number or proportion of late deliveries fell, so the claimed operational improvement is misleading.

**How to change it**
Replace the claim with a 7% exception-adjusted late-delivery rate after excluding weather-delayed shipments, and separately provide the all-shipment rate if it was measured; if accurate, use “reduced reported late deliveries” rather than “cut late deliveries.”

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Important] The 30% pick-error reduction is missing “by” and is not supported by a stated comparable measurement basis. *(about 2 words to add)*

**Why**
The grammatical error makes the result less polished, while changes in order volume, product mix, staffing, or error recording could explain a before-and-after difference. The interventions are plausible, but the percentage is credible only if pre- and post-intervention rates used a consistent definition.

**How to change it**
Change the wording to “Cut warehouse pick errors by 30%.” Retain the percentage only if it came from comparable pre- and post-intervention error rates using a consistent definition; otherwise remove the percentage and describe the redesign and retraining.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
[Important] The S&OP bullet states recurring responsibilities but gives no outcome or measurable value. *(about 8 to 15 words to add)*

**Why**
A reader can see the cadence and cross-functional scope, but not whether the forecast improved, planning decisions changed, or the pack was used effectively. Without an outcome, the bullet reads mainly as meeting administration rather than analytical contribution.

**How to change it**
Change “prepares” to “prepared,” expand “S&OP” to “sales and operations planning (S&OP)” on first use, and add [the planning or decision outcome] plus [one measurable result compared with the prior process or target], if available.

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The claimed 1,800 annual hours saved is not substantiated by the rollout and training details. *(saves about 7 words if removed)*
2. [Important] The route-planning rollout does not identify the operational process or capability that changed. *(about 4 to 8 words to add)*

**Why**
1. The line gives no baseline, measurement period, or method for separating tool-related savings from changes in route volume, staffing, or scheduling. The figure may therefore be an estimate rather than an observed operational saving.
2. The reader sees deployment and training, but not the logistics or analytical skill behind the implementation. A compact description of the routing improvement would distinguish this from generic software rollout work.

**How to change it**
1. Retain the figure only if it was calculated from consistent pre- and post-rollout driver-hour data with relevant operational changes accounted for; otherwise remove the savings claim and keep the rollout and training detail.
2. Add [the specific routing or dispatch capability you configured or improved], if accurate, while retaining the training and hours-saved result.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Important] The app-launch bullet gives no product or launch responsibility beyond saying that the app was launched. *(about 6 to 10 words to add)*

**Why**
The result shows reach and impact, but a reader cannot tell what the Product Lead personally owned. One specific product decision or launch responsibility would make the product skill behind the outcome easier to assess.

**How to change it**
Keep the food-rescue result and add [the product decision or launch work you owned].

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The scheduling bullet gives only a recurring activity and no resulting change, decision, or deliverable. *(about 8 to 15 words to add)*

**Why**
A reader can see that clinic managers were involved, but cannot tell what the sessions produced or why the work mattered to the network. “Working sessions” is also vague about the candidate’s role and output.

**How to change it**
Replace “working sessions” with [the specific work or deliverable], then add [the process or decision changed] and the single most telling result measured against [a baseline or comparison].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake bullet does not measure how much the form was shortened or what improvement resulted. *(about 5 to 10 words to add)*

**Why**
Adoption shows that the change was implemented, while the four-clinic scope shows only rollout scale; neither demonstrates the effect on patients or staff. A reader cannot judge the practical value of the redesign.

**How to change it**
Add [the number of fields or questions removed, or the change in completion time] and, if available, [the resulting improvement compared with the prior process].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
[Error] The merchant-onboarding result does not belong in a regional hospital outpatient-scheduling practicum. *(saves about 20 words if removed)*

**Why**
A regional hospital network does not have new merchants or merchant onboarding in the stated project context. The same 2,300-merchant achievement appears under Harbor Payments, creating a direct cross-entry contradiction.

**How to change it**
Remove this bullet from the practicum and replace it with [a verified hospital-network scheduling result], or retain the onboarding result only under Harbor Payments.

> redesigning onboarding

**Problem**
[Important] The third practicum bullet is unrelated to the coherent hospital scheduling and intake project described by the first two bullets. *(saves about 20 words if removed)*

**Why**
The first bullets establish a hospital-network project involving clinic scheduling and patient intake, while merchant onboarding belongs to a payments context. Leaving the unrelated bullet in place makes the project history look copied or misfiled.

**How to change it**
Remove the bullet or replace it with a hospital-specific result that follows from the scheduling or intake work.

## Set aside (15)

15 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-232d8dad.md.

