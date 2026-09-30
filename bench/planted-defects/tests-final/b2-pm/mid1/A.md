> Here is my resume: bench/planted-defects/tests-final/b2-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 entries with bullets for content and wording, plus the full resume for narrative and format. The 2 education entries had no bullets to review. Job-description matching wasn’t run because no posting was provided.

The main changes flagged:
- Put Harbor Payments above Crestline Logistics in Experience; consider moving Education below Experience. For a product-management target, the narrative review suggests shortening the diesel mechanic entry and giving the product work more prominence.
- Correct the project metrics: growth from 400 to 1,150 users is a 187.5% increase, and 75% to 95% is a 20-percentage-point increase.
- Remove repeated outcomes: the Harbor Payments checkout test appears twice, as does the practicum’s pilot approval/funding result.
- Clarify the RICE “Reach” measure and ensure the A/B test’s reported result matches its session-level randomization.

The file parses cleanly and is one page. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 82 · wording 84 · narrative 48

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

5 errors, 9 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2018 - Aug 2023

**Problem**
[Important] Experience is not in newest-first order: Crestline Logistics appears above the more recent Harbor Payments role.

**Why**
Crestline ended in August 2023, while Harbor Payments ended in August 2024. The current ordering can make the experience sequence harder to follow and hides the more recent product internship below an older role.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Diesel Mechanic

**Problem**
[Important] The diesel mechanic entry takes space and prominence from the product internship and projects.

**Why**
For a product-management direction, the two mechanic bullets receive more space than a one-line entry would, while product evidence is less prominent. That can make the resume’s focus less immediate to a recruiter.

**How to change it**
Shorten the diesel mechanic entry to one line and give the product internship and projects more prominence.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before Experience, so the work and product evidence do not lead.

**Why**
The education section comes before the experience that demonstrates applied work and product contributions. The recent MBA can remain easy to find even if the work evidence leads.

**How to change it**
Move Education below Experience.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Polish] The current-role bullet uses past tense instead of present tense.

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
1. [Polish] The current-role bullet uses past tense instead of present tense.
2. [Polish] The maintenance task and its result are not specified.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Owned the weekly carrier scorecards for the regional managers and the monthly review meeting that discussed them.

**Problem**
1. [Important] The scorecards and meeting are described as responsibilities, without an action or outcome.
2. [Important] The phrase about the monthly review is wordy and leaves your role in it vague.

**Why**
1. A reader can see that the scorecards and meeting were recurring, but not what you did in the meeting or whether the work changed a decision or carrier performance. Without a concrete result, the importance of this responsibility is hard to judge.
2. “The monthly review meeting that discussed them” uses extra words without saying whether you led or contributed to the review. A reader may be unsure what your involvement was beyond owning the scorecards.

**How to change it**
1. Replace “Owned” with the specific action you took, if accurate, and add [a decision or carrier-performance change resulting from the scorecards, measured against a relevant baseline] after “discussed them.”
2. Replace the phrase with “[led/contributed to] the monthly carrier review,” choosing the role that is accurate.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
[Important] The driver-hour savings are buried after several rollout activities.

**Why**
A reader reaches the rollout, procedure, training, and negotiation details before seeing the operational payoff. Putting the 1,800-hour result first makes the value of the work immediately clear.

**How to change it**
Move “saved 1,800 driver hours a year across the region” to the beginning of the bullet, then keep only the one or two rollout details that best show your contribution.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
[Error] The line misdefines RICE Reach and does not name the roadmap decision it produced.

**Why**
In standard RICE, Reach estimates how many users or other units a feature will affect over a defined period; support tickets closed are a different measure. Mislabeling that measure can change how features are ranked, and without naming the selected initiative, a reader cannot see what the prioritization accomplished.

**How to change it**
Define Reach as the expected number of users or other units affected over a defined period. If the score was expected tickets closed, call it a customized RICE model or a different prioritization measure, and replace “Prioritized the dispute roadmap” with [the priority selected].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The selected roadmap priority is buried after the supporting analysis.

**Why**
The reader sees a long list of research and analysis before learning what decision it supported. The product bet is therefore less visible than the methods used to reach it.

**How to change it**
Lead with the specific initiative selected, [priority selected], then move the merchant interviews, chargeback analysis, loss sizing, and business case after it.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
[Error] A session-randomized test does not, by itself, establish a customer-level conversion effect.

**Why**
Customers may have multiple sessions, so a session-weighted lift can differ from a lift among unique customers. The current wording is also unclear about what the reported result measures.

**How to change it**
If this bullet is retained, report the result as a session-level conversion lift. State a customer-level effect only if the design and analysis support it, and specify that basis.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Polish] The wording makes the leadership team, rather than the presentation, the grammatical subject of the funding result.

> 5-point conversion lift

**Problem**
[Error] This bullet repeats the checkout test and conversion lift already reported in the preceding bullet.

**Why**
The preceding bullet gives the same test result, including the 61% to 66% conversion change. Reporting it again makes the achievement appear duplicated and uses space that could show another contribution.

**How to change it**
Remove this repeated account, or keep the stronger account in the preceding bullet and fold in the session-randomization detail only if useful.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] “That would have been thrown away” is wordy for food that was otherwise discarded.
2. [Polish] The phrase “with two dining halls” leaves the halls’ relationship to the app launch unclear.

**Why**
1. The longer phrase adds words without adding meaning to the result. The concise alternative keeps the focus on the food redistributed.

**How to change it**
1. Replace “that would have been thrown away” with “otherwise discarded.”

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The 400-to-1,150 increase is 187.5%, not 150%.
2. [Polish] The phrase about reminders does not make clear whether the interviews informed their design.

**Why**
1. The increase is 750 users, which is 187.5% of the starting 400. The stated percentage conflicts with the figures and makes the growth appear smaller than it was.

**How to change it**
1. Replace “150%” with “187.5%.”

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The change from 75% to 95% is 20 percentage points, not a 20% increase.

**Why**
A relative increase from 75% to 95% is about 26.7%. Calling the change 20% conflicts with the endpoints and can lead readers to interpret it as a relative increase.

**How to change it**
Replace “by 20%” with “by 20 percentage points”; the existing endpoints support that wording.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Polish] The $2.4M saving estimate has no stated baseline or key assumption.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Polish] The intake work is written in passive voice, obscuring your role.
2. [Polish] The line does not say how much the form was shortened or what the change improved.

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
[Polish] The recommendation is presented without the analysis or evidence that supported it.

> approved a 90-day scheduling pilot at two clinics

**Problem**
[Important] The pilot approval is repeated here and in the savings bullet.

**Why**
Both bullets report the client’s approval or funding of the scheduling pilot. Repeating the same outcome takes space from the recommendation’s supporting evidence.

**How to change it**
Remove the repeated pilot-approval clause here and combine the pilot outcome with the quantified savings in the other bullet.

## Already working

- s2:e2:b1: Pairs a quantified conversion improvement with the test scale and the subsequent rollout.
- s2:e2:b0: Connects a specific onboarding change to a clearly measured reduction in time to first payment.
- s2:e1:b1: Connects a measurable warehouse outcome to specific changes and identifies the sites and number of pickers involved.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0b6d9812.md.

