> Here is my resume: bench/planted-defects/tests-final/b4-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording reviews covered all 5 entries with bullets; narrative review covered the full resume, and the format check ran. A job-description match was not run because no posting was provided.

The main changes to make:
- **Clarify the resume’s direction.** The narrative review found that the diesel mechanic role currently pulls attention away from the product and operations story. Consider moving Projects above Experience and shortening that role or adding context for its place in your career.
- **Remove repeated claims.** The product internship repeats the checkout A/B test and conversion result; the consulting practicum repeats the scheduling-pilot approval. Keep the clearest account of each.
- **Check the reported percentage changes.** The food-rescue project’s figures show weekly users rising from 400 to 1,150, which is not a 150% increase; pickup-slot utilization rising from 75% to 95% is a 20-percentage-point increase, not a 20% increase.
- **Make a few bullets more specific and consistent.** Add the outcome or details of the maintenance work where available, clarify which roadmap decision the analysis supported, and use present tense for the current role. Remove the first-person pronoun flagged in the warehouse bullet.

The file is one page, parses cleanly for ATS, and has no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 80 · wording 82 · narrative 56

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 11 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Diesel Mechanic

**Problem**
[Important] Projects should appear before Experience to bring the product-related MBA work into view before the current diesel mechanic role.

**Why**
The current role is the first experience entry, so readers encounter the diesel-mechanic direction before the product-related MBA work. Moving Projects above Experience would make that product work visible earlier in the résumé.

**How to change it**
Move the Projects section above Experience.

> Diesel Mechanic

**Problem**
[Important] The Coastal Marine Services entry resets the résumé’s direction toward diesel mechanics as the most recent role.

**Why**
The entry leads with a current Diesel Mechanic role, which may make the résumé’s direction appear to be diesel mechanics rather than the product-related work elsewhere. Shortening the entry would reduce that emphasis without introducing unsupported context.

**How to change it**
Shorten the Coastal Marine Services entry to one line.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Polish] The current role’s bullets use past tense instead of present tense.

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
[Important] The hydraulic-winch bullet uses past tense for a current role and does not specify the maintenance task or its outcome.

**Why**
“Maintained” and “logged” make current work sound completed. The line also leaves a reader unable to distinguish routine servicing from a repair or inspection task, or to judge whether the work improved reliability or supported a specific inspection result.

**How to change it**
Change “Maintained” and “logged” to present tense. After “hydraulic winch systems,” add [one representative service, inspection, or repair task, if accurate], and replace the inspection-purpose ending with [the inspection outcome or reliability result, if known], using a comparison only if substantiated.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Important] The RICE bullet names a prioritization process but not the initiative selected or what the decision changed.
2. [Polish] The Reach phrase makes the scoring method sound like a definition rather than how it was applied.

**Why**
1. A reader can see that RICE was used, but not the product decision it produced or why that decision mattered. Without that outcome, the bullet gives more evidence of process than of product impact.

**How to change it**
1. Add [the initiative prioritized and what it addressed or changed, if accurate].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The long list of methods buries the roadmap decision, and the line does not name the priority or estimate the loss that informed it.

**Why**
The reader reaches the decision only after four research and business-case activities, then still cannot tell what the chosen priority was. The loss analysis also gives no estimate or comparison, so its scale and relevance to the decision remain unclear.

**How to change it**
Move the decision to the front and replace “set the next quarter’s roadmap priority” with [the initiative selected and the problem or result it targeted]. Replace “sizing the loss by segment” with [the estimated loss for the priority segment and a relevant baseline or comparison, if known].

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Error] Session-level randomization does not establish that the reported lift was an effect on distinct customers.
2. [Important] The lift is repeated from the preceding bullet, and this line does not identify the conversion event or comparison.

**Why**
1. Randomizing by session supports a session-level conversion estimate, not necessarily a customer-level effect. Customers with multiple sessions may encounter different variants, so the stated design does not establish the customer-level interpretation.
2. The preceding bullet already reports the checkout A/B test and five-point lift, so repeating both makes the same result less distinctive. Without the conversion event and comparison, a reader also cannot tell exactly what the five-point change measures.

**How to change it**
1. Describe the result as a session-level conversion lift; claim a customer-level effect only if assignment and analysis support that interpretation.
2. Keep the stronger account of the A/B test in one bullet and remove the repeated test-and-result claim here. If retaining this line, specify [the conversion event] and, if accurate, that the lift was versus the control flow.

> Prioritized the dispute roadmap with RICE

**Problem**
[Important] The two roadmap bullets repeat the priority-setting outcome without making clear whether the work was distinct.

**Why**
Both bullets describe setting roadmap priorities, so a reader may see them as the same accomplishment presented twice. That repetition uses space without clarifying whether the RICE scoring and the broader research led to separate decisions.

**How to change it**
Combine the bullets or distinguish the RICE scoring from the broader research and business case; keep only the distinct decision or contribution each produced.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
[Polish] The first-person pronoun is out of place in the résumé bullet.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
[Important] The 1,800-hour saving appears after a long list of activities instead of near the start.

**Why**
A scanning reader must get through several tasks before reaching the strongest evidence of value. Leading with the annual saving makes the result easier to notice, while trimming the list keeps the line focused.

**How to change it**
Move “saving 1,800 driver hours a year across the region” directly after the route-planning-tool rollout. Keep only the one or two most relevant activities from the remaining list.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
[Polish] The disposal phrase is wordy and passive.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The user increase is 187.5%, not 150%.
2. [Important] The bullet’s strongest accomplishment is not positioned first in the project entry.
3. [Polish] The interview phrase does not explain how the interviews informed the reminders.
4. [Polish] The percentage repeats information already shown by the user counts.

**Why**
1. Weekly active users rose by 750, from a base of 400; 750 is 187.5% of that starting figure. The stated percentage conflicts with the counts and may make a reader question the accuracy of the result.
2. This line reports a clear increase in weekly active users, supported by the before-and-after counts. Leading with it would bring that result into view before the other project bullets.

**How to change it**
1. Replace “a 150% increase” with “a 187.5% increase,” or remove the percentage because the starting and ending counts already show the change.
2. Move this bullet above the other Campus Food Rescue App bullets.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
1. [Error] The fill rate rose by 20 percentage points, not 20%.
2. [Polish] The stated percentage duplicates the change already shown by the before-and-after rates.

**Why**
1. The difference between 75% and 95% is 20 percentage points. Relative to the starting rate of 75%, the increase is about 26.7%, so “by 20%” misstates the change.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
1. [Polish] The phrase “based on the model” repeats the basis already stated.
2. The savings estimate gives no comparison or basis for its value.

**Why**
2. A reader sees a specific annual estimate but cannot tell what it was compared with or how the estimate was derived. Without that context, the scale and credibility of the projected saving are harder to judge.

**How to change it**
2. Add [the relevant comparison or analytical basis for the $2.4M estimate, if accurate].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake work is written passively and gives no measure of the change or its effect.

**Why**
The passive phrasing hides who mapped and shortened the process. A reader can see that staff adopted the change but cannot tell how much the form changed or what improved for patients or staff.

**How to change it**
Open with the active wording “Mapped patient intake at 4 clinics and shortened the intake form.” Add [one relevant before-and-after measure, such as intake completion time, if available].

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
1. [Important] The recommendation’s analytical basis is not stated, and “final” adds no useful information.
2. [Polish] The pilot’s duration and scope are stated, but its intended or achieved result is not.

**Why**
1. Approval shows that the client accepted the recommendation, but the line does not show what analytical work supports it. “Final” does not explain that work or change the action or outcome.

**How to change it**
1. Delete “final” and add [the single most relevant analytical basis for the recommendation, if accurate].

> approved a 90-day scheduling pilot

**Problem**
[Polish] The two bullets repeat the scheduling-pilot approval or funding outcome.

## Already working

- s2:e1:b0: Connects a specific onboarding change to a clear, quantified result.
- s2:e1:b1: Pairs a measured result with the experiment and the decision to ship.
- s2:e1:b5: Links the leadership presentation to a concrete funding decision and expanded rollout.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-caf6a433.md.

