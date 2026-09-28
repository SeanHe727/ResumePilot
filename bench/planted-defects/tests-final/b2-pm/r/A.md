> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Coverage: content and wording reviews covered all 5 entries with bullets; narrative and format reviews ran; no job-description match was possible because no posting was provided.

The report’s overall score is **84**. The main changes to consider:

- Put Experience above Education and reorder experience newest-first. The reviewers also noted that the current mechanic role may need context because it interrupts the product/operations direction.
- Remove the duplicate checkout A/B test result in the Harbor Payments entry. Clarify the RICE “Reach” definition and the specific roadmap decision.
- Check the project metrics: 400 to 1,150 weekly users is not a 150% increase, and 75% to 95% is a 20-percentage-point increase. Reviewers also flagged claims that attribute changes to specific features without showing what supports that attribution.

The format check found the PDF parses cleanly, with no layout warnings. See `/report --full` for the complete findings.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 79 · wording 82 · narrative 56

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 13 important, 0 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.
> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
[Important] The funding and pilot-approval outcomes appear after presentation details, where scanning readers may miss them. *(no words)*

**Why**
Both bullets place the result at the end, after describing the presentation. A reader scanning for impact may stop before reaching the funding or approval outcome.

**How to change it**
Move each funding or approval outcome before the presentation details, adjusting the phrasing as needed without adding facts.

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] The unrelated mechanic role takes space and attention that could reinforce the product and operations direction. *(saves about 20 words)*

**Why**
The role currently has two bullets, giving it substantial space despite being less aligned with that direction. A concise entry would preserve the work history without letting it compete with more relevant experience.

**How to change it**
Keep the role and dates, but reduce the entry to one line with one concise, relevant duty or result; cut the remaining detail.

> Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not listed newest-first. *(no words)*

**Why**
Crestline is listed above Harbor Payments even though Harbor is the more recent role. Readers scanning the work history may get the chronology wrong.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, giving the degrees more prominence than the work history. *(no words)*

**Why**
The work history is more useful than the degrees for establishing the page’s direction. Leading with education delays the experience most relevant to that impression.

**How to change it**
Move the Experience section above Education.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
[Important] The annual savings appear after a long list of implementation activities, making the main result easy to miss. *(saves about 10 words)*

**Why**
A scanning reader has to get through several activities before reaching the 1,800-hour annual saving. The similarly weighted details also obscure which implementation work most directly supports the result.

**How to change it**
Move the savings result directly after “to 3 depots,” then keep only the implementation detail most relevant to that result.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Redesigned merchant onboarding around a single verification step, cutting median time to first payment from 9 days to 4 across 2,300 new merchants in the pilot region.

**Problem**
[Important] The redesign is credited with the time reduction without a comparison that establishes it caused the change. *(about 1 word to add)*

**Why**
A before-and-after difference alone cannot show that the redesign caused the reduction; other changes or differences in the merchants measured could explain it. The 2,300 merchants show the pilot’s size, not a causal comparison.

**How to change it**
If a credible comparison supports the causal claim, describe it; otherwise replace “cutting” with wording that reports the median time falling from 9 days to 4 in the pilot.

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] RICE Reach is incorrectly defined as ticket volume rather than users or people affected over a defined period. *(about 3 words to add)*
2. [Important] “Prioritized the dispute roadmap” does not identify the selected priority or its intended result. *(about 5 words to add)*

**Why**
1. Tickets are not a direct measure of how many users a feature reaches: one person may submit multiple tickets, and a ticket may not correspond to a unique affected user. Using raw ticket counts as Reach can make the RICE scores misleading or incomparable.
2. Readers can see that you used a framework, but not what decision it produced or why that decision mattered. Without the choice and its purpose, the bullet gives little evidence of the product judgment behind the prioritization.

**How to change it**
1. If you measured users affected, replace the Reach definition with the number of users affected over a defined period; otherwise remove the RICE/Reach claim or describe ticket counts only as an input, if accurate.
2. Replace “Prioritized the dispute roadmap” with [the feature or initiative selected] and add [the intended business or customer outcome, if known].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The bullet does not say what the next quarter’s roadmap priority was or what outcome it targeted. *(about 5 words to add)*

**Why**
The reader sees that research informed a decision, but cannot tell what changed as a result. Without the priority or its intended outcome, the research and business case have no visible decision impact.

**How to change it**
Move the decision to the start, replace “set the next quarter’s roadmap priority” with [the initiative selected], and add [the outcome it targeted, if known]; retain only the most telling supporting research detail.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
[Important] The bullet repeats the checkout test and its conversion result, so one of the two bullets should be removed. *(saves about 20 words)*

**Why**
The preceding bullet already describes the one-page-flow test, its scale, and the conversion lift. Repeating that test here takes space without showing a distinct contribution or result.

**How to change it**
Remove this bullet and retain the preceding bullet, which already reports the test and conversion result.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The claim that all 9 tonnes would have been thrown away is not established by the amount redistributed. *(saves about 5 words)*
2. [Important] “Launched” does not show what product or launch work you personally did. *(about 4 words to add)*
3. [Important] “To 3,100 students” does not clarify whether they were users or the campus population. *(about 2 words to add if describing the campus)*

**Why**
1. The reported amount shows what the app moved, not what would have happened without it. Some of the food may have had another destination, so the counterfactual could make the impact claim seem overstated.
2. The outcome is clear, but a reader cannot tell what you contributed as product lead. One concrete action you owned would make your role easier to assess.
3. A reader may interpret the figure as 3,100 actual users, which is different from making the app available to a campus of that size. The ambiguity makes the reach of the launch hard to judge.

**How to change it**
1. Unless you have evidence for the counterfactual, replace “9 tonnes of food that would have been thrown away” with “9 tonnes of surplus food.”
2. Add one specific product or launch action [specific action you owned], if accurate; leave out implementation detail that does not show your contribution.
3. If this is the campus population, replace it with “across a campus of 3,100 students”; if it is actual users, specify [number of registered or active users].

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The 150% increase is arithmetically wrong: weekly active users rose by 187.5%. *(no words)*
2. [Important] The wording claims the reminders caused the increase without evidence that isolates their effect. *(no words)*

**Why**
1. The increase from 400 to 1,150 is 750 users, which is 187.5% of the starting figure. Calling it 150% conflicts with the figures and may make readers question the accuracy of the other metrics.
2. The interviews explain how the reminder feature was chosen, but they do not establish that it drove the increase in weekly active users. A reader may doubt the causal claim if other changes or trends could explain the rise.

**How to change it**
1. Replace “150%” with “187.5%,” or replace the percentage with “an increase of 750 weekly active users.”
2. If a suitable test supports the causal claim, name it; otherwise replace “by adding” with “after adding” so the line reports the timing without claiming causation.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The fill rate rose by 20 percentage points, not 20%. *(about 2 words to add)*

**Why**
Subtracting 75% from 95% gives a 20-percentage-point change; relative to the starting rate, the increase is about 26.7%. The current wording conflicts with the figures and can make the result seem miscalculated.

**How to change it**
Replace “by 20%” with “by 20 percentage points.”

## Already working

- s2:e1:b1: Connects a quantified operational improvement to specific actions and scope.
- s2:e1:b2: Pairs a sustained cross-functional responsibility with a clear before-and-after result.
- s2:e2:b1: Shows the tested design change, conversion comparison, test scale, and rollout.

## Set aside (15)

15 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-2df4d579.md.

