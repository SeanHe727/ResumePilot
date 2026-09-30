> Here is my resume: bench/planted-defects/tests-final/b5-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets, the resume’s overall narrative, and its formatting. It’s one page and parses cleanly. I did not compare it with a job posting.

The main changes to consider:
- Move Experience above Education and list Harbor Payments before Crestline Logistics.
- Clarify how the current diesel mechanic role fits your product/operations direction, or reduce its prominence.
- Fix the Campus Food Rescue App figures: 400 to 1,150 weekly active users is a 187.5% increase; 75% to 95% is a 20-percentage-point increase. Also combine or remove the repeated Harbor Payments checkout-test result.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 81 · wording 85 · narrative 55

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 9 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023; Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

**Problem**
[Important] Experience is not listed newest-first: the 2024 Harbor Payments role appears below the 2018–2023 Crestline Logistics role. *(no words)*

**Why**
A reader expects the most recent experience first, so the current order interrupts the chronology. It can make the experience section harder to scan.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience despite the résumé showing five years of professional experience. *(no words)*

**Why**
Leading with the MBA places education ahead of a substantial work record. A reader may consequently notice your experience later than intended.

**How to change it**
Move Experience before Education.

> Diesel Mechanic

**Problem**
[Polish] Coastal Marine Services is a prominent entry that appears unrelated to the career direction shown elsewhere. *(saves 14 words if you remove the second bullet)*

**Why**
The entry receives two bullets but does not explain its connection to the product and operations experience in the résumé. A reader may be left wondering why it takes up that much space.

**How to change it**
Shorten the entry to one line by removing the service-records bullet, or add [a brief explanation of how the role fits the career direction] if accurate.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
[Important] The 1,800-hour saving is attached to a long list of actions, leaving unclear which action drove it. *(about 1 word added)*

**Why**
The final “which” could refer to the vendor negotiations or the full set of work. The result also comes after several tasks, making the main outcome harder to spot quickly.

**How to change it**
Move the savings phrase directly after “route-planning tool to 3 depots” and replace “which” with “the rollout” if accurate; otherwise specify [which action drove the savings].

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Lifted checkout conversion from 61% to 66% by testing a one-page flow against the three-step flow across 40,000 sessions, then shipping it to all merchants.

**Problem**
[Important] The line attributes the rise from 61% to 66% to the one-page flow without establishing that the test supports a causal estimate. *(no words)*

**Why**
The 40,000 sessions and observed rates alone do not show how sessions were allocated, whether other changes could explain the difference, or how much uncertainty there was. A reader may therefore doubt that the flow caused the increase.

**How to change it**
If valid random allocation and analysis support a causal estimate, state that; otherwise replace “Lifted” with “Observed” and describe the 61% and 66% rates without attributing the increase to the flow.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The roadmap outcome does not say which priority was selected. *(about 5 words added, if both details are available)*

**Why**
The decision is the outcome of the merchant interviews, chargeback analysis, and business case, but the line leaves it unnamed. A reader cannot judge what the work led the team to prioritize.

**How to change it**
Replace “set the next quarter’s roadmap priority” with [the selected priority] and add [the estimated loss for that segment compared with alternatives], if available.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
[Error] Harbor Payments bullets 1 and 4 repeat the same checkout test and conversion result. *(saves about 21 words)*

**Why**
One bullet gives conversion rates of 61% to 66%, while the other describes a 5-point lift from the same test. Keeping both spends space on one achievement and may make the result seem like two separate accounts.

**How to change it**
Keep one account of the checkout test and result; remove bullet 4 and retain the 61% to 66% figures in bullet 1.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The claim that all 9 tonnes would have been thrown away is an unverified counterfactual. *(saves about 5 words)*
2. [Polish] The launch claim does not explain how you brought the app and dining halls into operation. *(about 5 words added)*

**Why**
1. The amount redistributed does not establish what would have happened to the food otherwise. Without evidence for that alternative, a reader may question the claim’s credibility.
2. The launch and its scale are clear, but the line gives no example of how you delivered them. A reader assessing your product-lead contribution may want to know what decision or coordination enabled the launch.

**How to change it**
1. If you have evidence about the food’s likely destination, specify that basis; otherwise replace “food that would have been thrown away” with “surplus food.”
2. Add [the key product or operational decision that enabled the launch], if accurate; avoid adding a list of implementation details.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The rise from 400 to 1,150 weekly active users is 187.5%, not 150%. *(no words)*
2. [Important] The line does not show how the 60 interviews informed the choice of pickup reminders. *(about 3 words added, depending on the finding)*

**Why**
1. The increase is 750 users, which is 187.5% of the starting 400; a 150% increase would bring the total to 1,000. A reader checking the figures may doubt the accuracy of the result.
2. A reader can see that you conducted user research, but not what it revealed or how that finding shaped the product decision. That makes the research’s contribution to the increase harder to assess.

**How to change it**
1. Replace “150%” with “187.5%” or “about 188%.”
2. Replace “chosen after” with “based on [the interview finding that informed the reminders],” if accurate.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The change from 75% to 95% is 20 percentage points, not a 20% increase. *(about 2 words added)*

**Why**
The endpoints show a 20-point rise; relative to the starting 75%, the increase is about 26.7%. A reader may interpret “20%” as a relative increase and question which measure the result represents.

**How to change it**
Replace “by 20%” with “by 20 percentage points.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The intake-form change has no measure of how much it changed or what effect it had. *(about 4 words added)*
2. [Polish] Passive phrasing hides that you mapped intake and shortened the form. *(saves about 2 words)*

**Why**
1. Staff adoption shows that the change was used, but not whether it made intake faster or simpler. Without a before-and-after measure, a reader cannot judge the benefit.
2. “Was mapped” and “was shortened” do not name who did the work. A reader may not credit these actions to you, making your contribution less visible.

**How to change it**
1. Replace “was shortened” with [the reduction in intake time or number of form fields, compared with before], if available.
2. Replace “Patient intake at 4 clinics was mapped” and “the intake form was shortened” with active verbs naming your actions; retain the statement that front-desk staff adopted the changes.

> the client funded a pilot

**Problem**
[Important] The scheduling-consolidation work and the approved pilot are reported as overlapping outcomes in two bullets. *(saves 8 words)*

**Why**
One bullet says the client funded a pilot based on the model, and another says the COO and clinic directors approved a scheduling pilot. A reader may see these as two separate results when they describe the same decision.

**How to change it**
Remove the generic funding clause from the savings bullet and retain the more specific approval of the 90-day pilot at two clinics.

## Already working

- s2:e2:b0: Connects a specific product change to a measurable improvement.
- s2:e2:b5: Connects the presentation to a concrete leadership decision.

## Set aside (11)

11 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c71b297b.md.

