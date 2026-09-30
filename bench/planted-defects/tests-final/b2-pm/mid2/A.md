> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five experience and project entries for content and wording, plus the full resume’s narrative and formatting. Education has no bullets to review. I did not run a job-description match because no posting was provided.

The main changes to consider:
- Reorder the experience section so Harbor Payments appears before Crestline Logistics, and move Education below Experience.
- Remove the repeated checkout A/B test result in the Harbor Payments internship entry.
- Correct the percentage descriptions in the food-rescue project: the change from 400 to 1,150 weekly active users and the change from 75% to 95% need accurate math and clear timeframes.

The reviewers also flagged the resume’s career direction: the current diesel mechanic role sits apart from the product-management story. Formatting and ATS parsing were clean. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 80 · wording 82 · narrative 56

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 10 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Maintained hydraulic winch systems

**Problem**
[Important] The Coastal Marine Services role should take up only one line so it does not dominate the product and operations story.

**Why**
The role is unrelated to the product and operations story, but its two bullets give it more space than the recommendation calls for. Shortening it would leave more room for the experience most relevant to that story.

**How to change it**
Shorten the Coastal Marine Services entry to one line, keeping only its most relevant detail.

> Crestline Logistics | Operations Analyst

**Problem**
[Important] The experience entries are not in newest-first order: Crestline is listed above the newer Harbor Payments role.

**Why**
A reader expects the most recent experience first and may read the ordering as a chronology. Listing the older Crestline role above Harbor Payments obscures which experience is more recent.

**How to change it**
Move Harbor Payments above Crestline Logistics in the Experience section.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears above Experience despite the résumé’s substantial professional history.

**Why**
The current order gives education priority over several years of experience and later product work. Moving it below Experience would make the professional history easier to find first.

**How to change it**
Move the Education section below Experience.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
1. [Polish] The bullet names the inspection purpose but gives no outcome from the maintenance or inspections.
2. [Polish] “Maintained” does not say what work you performed on the hydraulic winch systems.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
[Important] The scorecard and meeting bullet describes duties without stating what they changed.

**Why**
A reader can see that you handled the scorecards and review, but not their value to operations. The ownership-focused opening and the phrase “that discussed them” spend words on responsibility and meeting purpose without showing a decision or improvement the work enabled.

**How to change it**
Replace the ownership-focused opening with a direct action, cut “that discussed them,” and add [the main decision or operational improvement the reviews enabled]; include a comparison or measure only if you have one.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Polish] “New” adds no useful information to “layout.”

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] The 1,800-hour result is buried after a long list of methods and responsibilities.
2. [Polish] The stack of rollout, SOP, training and vendor details makes the bullet difficult to scan, and “taking over vendor negotiations” names a responsibility rather than a specific action or outcome.

**Why**
1. The savings are the bullet’s clearest impact, but they appear only after the rollout, SOP, training and vendor details. A scanning reader may miss the result before reaching it.

**How to change it**
1. Move the savings result to the opening of the bullet, before the supporting details.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Important] The RICE bullet names a framework but not the initiative it led you to prioritize.
2. [Polish] The RICE and Reach explanation uses jargon and an unnecessarily cumbersome description of the criterion.

**Why**
1. A reader can see that you used a prioritization framework, but not what product decision you influenced. Naming the selected initiative would make your judgment and its consequence tangible.

**How to change it**
1. Add the selected initiative after this phrase, such as “prioritizing [initiative selected],” if accurate.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
1. [Important] The bullet does not name the priority selected, and its long method list comes before the decision.
2. [Important] The loss analysis gives no estimate or comparison to show the scale of the opportunity.

**Why**
1. The reader cannot tell what product decision the research and business case drove. Leading with the result would make the decision easier to find, while shortening the process list would keep it from obscuring that result.
2. The analysis sounds relevant to the business case, but without an estimate a reader cannot judge the scale of the opportunity it supported. That makes the rationale for the roadmap decision harder to assess.

**How to change it**
1. Replace this phrase with “[initiative selected] as next quarter’s roadmap priority,” if accurate, move that result to the opening, and shorten the method details.
2. Add [the estimated loss in the priority segment, with its comparison period], if available.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
[Error] Session randomization does not by itself establish a customer-level effect, and the lift is described unclearly.

**Why**
Session randomization estimates a session-level effect; a customer with multiple sessions could encounter both versions. It does not by itself establish an effect on merchants’ customers, and the current phrasing leaves the reader unsure what the five-point lift measures.

**How to change it**
Describe the result directly as a session-level conversion lift; only state a customer-level effect if customers were consistently assigned or the analysis validly estimated that effect.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Polish] “Who funded the rollout” makes the connection between the presentation and the funding outcome indirect.

> the 5-point conversion lift

**Problem**
[Error] This bullet repeats the checkout A/B test and five-point lift already reported in the preceding bullet.

**Why**
The same test and result appear in both bullets, making the achievement look duplicated rather than broader. That uses space that could show another contribution or preserve the test detail without repeating its outcome.

**How to change it**
Keep the result in one bullet; in this bullet, retain only non-repeated methodological detail if useful, or remove the bullet.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Polish] “That would have been thrown away” repeats the idea already conveyed by “surplus-food.”

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The change from 400 to 1,150 weekly active users is a 187.5% increase, not a 150% increase.
2. [Polish] The weekly-active-user increase has no timeframe.

**Why**
1. The increase is 750 users over a baseline of 400, which equals 187.5%. Leaving the stated percentage in place makes the arithmetic inconsistent with the figures and can undermine confidence in the metric.

**How to change it**
1. Replace “a 150% increase” with “a 187.5% increase.”

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The fill rate rose by 20 percentage points, not by 20% as a relative increase.

**Why**
The stated rates move from 75% to 95%, a difference of 20 percentage points. A reader may interpret “20%” as a relative increase, which would not match those before-and-after rates.

**How to change it**
Replace “20%” with “20 percentage points.” If you intend to report the relative increase instead, use “26.7%.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Important] “Sized a $2.4M annual saving” could be read as realized savings, although the figure came from a model.

**Why**
A reader needs to know whether the amount is a forecast or an outcome already achieved. Without that distinction, the result may be given more weight than a modeled estimate warrants.

**How to change it**
If accurate, replace “annual saving” with “modeled annual savings potential.”

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Polish] The intake bullet does not say what improved as a result of shortening the form.
2. [Polish] The passive wording makes it unclear who mapped patient intake and shortened the form.

> the client funded a pilot

**Problem**
[Important] The pilot funding is reported here and again in the presentation bullet.

**Why**
Both bullets report approval or funding of a scheduling pilot based on the consolidation recommendation. Repeating that result makes the entry look less varied and takes space from the modeled savings estimate.

**How to change it**
Remove the pilot-funding clause here and keep the pilot approval in the presentation bullet.

## Already working

- s2:e2:b0: Connects a specific onboarding change to a measurable improvement and a defined pilot population.
- s2:e2:b1: Pairs a clear conversion result with the test comparison and rollout.
- s2:e1:b2: Provides a direct before-and-after measure and sustained ownership across 12 consecutive quarters.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-ca0f359e.md.

