> Here is my resume: bench/planted-defects/tests-final/b4-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 entries with bullets for content and wording, plus the full resume narrative and formatting. The 2 education entries have no bullets to review. I did not run a job-description match because no posting was provided.

The main changes to consider:
- Bring the product experience and projects forward; the current mechanic role leads the experience section and interrupts the product-management story.
- In the product internship, remove the duplicate checkout-test result and clarify the roadmap decisions and RICE “Reach” measure.
- Check the project percentage claims against the before-and-after figures, and add outcomes where bullets currently describe work without its effect.

The file parses cleanly for ATS. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**86/100** — format 100 · content 82 · wording 83 · narrative 60

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] The résumé leads with an unrelated mechanic role, obscuring the product direction.

**Why**
A recruiter sees the diesel-mechanic role before the product-management internship. That ordering makes the intended product direction less apparent at first glance.

**How to change it**
Move Coastal Marine Services below Harbor Payments, or compress it under an Additional Experience heading.

> Campus Food Rescue App

**Problem**
[Polish] Projects appear after Education, delaying the product work.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Polish] The dry-dock threshold has no comparison to show whether it was an improvement or a schedule target.

> Maintained hydraulic winch systems and logged service records for the harbor authority’s annual inspections.

**Problem**
[Polish] The inspection phrase gives the purpose of the maintenance records but not the outcome.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Lifted checkout conversion from 61% to 66% by testing a one-page flow against the three-step flow across 40,000 sessions, then shipping it to all merchants.

**Problem**
[Polish] The checkout-test bullet shifts from a past-tense action to a gerund.

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
1. [Error] The bullet misstates the conventional RICE Reach measure and does not name the roadmap choice.
2. [Polish] The RICE explanation is dense and may slow readers unfamiliar with the framework.

**Why**
1. RICE Reach estimates the number of people or users affected over a defined period; support tickets closed are not that measure. A reader also cannot tell which initiative the prioritization selected, so the decision and its significance remain unclear.

**How to change it**
1. If Reach was measured conventionally, replace the ticket count with the number of users affected over a defined period; otherwise, call it a ticket-based prioritization score, not RICE Reach. Name [the selected feature or initiative] and, if known, what it was expected to change.

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The loss analysis gives no estimate or comparison, and the selected roadmap priority is buried and unnamed.

**Why**
Without a loss estimate or comparison, a reader cannot judge the size of the opportunity; the interview count shows scope, not what the analysis found. The long list of methods also delays the decision, while “the next quarter’s roadmap priority” never says what was chosen.

**How to change it**
Move the decision to the start and name [the selected roadmap priority]. Add [the estimated loss for the relevant segment and its comparison], if available, and distinguish an estimate from a realized result.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
1. [Error] Session-level randomization does not support describing the lift as an effect on customers.
2. The description of the reported lift is awkward and unclear.

**Why**
1. Session-level randomization estimates an effect on sessions, and repeat customers can contribute multiple sessions. They may be counted repeatedly or experience both variants, so this test does not establish a customer-level effect.
2. The phrase makes readers work out what the five-point figure refers to. That is especially costly in a bullet that already describes the test design and its result.

**How to change it**
1. Describe the reported lift as an effect on checkout sessions. Report a customer-level effect only if the test randomized or analyzed at the customer level in a way that accounts for repeat customers.
2. Replace the phrase with a direct statement that reports the five-point lift, using “checkout sessions” as the unit rather than customers.

> 5-point conversion lift

**Problem**
[Important] The checkout test is repeated across two bullets, separating its design from its reported result.

**Why**
The reader encounters the same A/B test and five-point lift twice, which makes the entry feel repetitive. Keeping the test design and outcome together would make the evidence clearer and leave room for other product work.

**How to change it**
Combine the test design and result in one bullet, and remove the duplicate account of the test from the other bullet.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
[Polish] The bullet uses a first-person possessive, and its passive rollout wording obscures your role.

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
[Polish] The duration is phrased more lengthily than needed.

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] The driver-hour savings are buried after a long list of tasks, and that list makes their connection to the rollout unclear.
2. [Polish] “Taking over” makes the contract-negotiation action wordier than a direct description.

**Why**
1. A scanning reader may miss the strongest result before reaching it. Listing the SOP rewrite, training, and vendor negotiations before attributing the savings to the rollout also leaves unclear which work drove the 1,800-hour result.

**How to change it**
1. Move the savings to the start of the bullet, ahead of the rollout details, and make clear which work the savings came from. This rearrangement uses existing words.

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch claim does not identify the product or rollout work you owned.
2. [Polish] The explanation of “surplus-food” adds words without adding much information.

**Why**
1. The line establishes reach and food redistributed, but not what you did as product lead to achieve the launch. A reader cannot connect the impact to a specific product-lead contribution.

**How to change it**
1. Replace the general launch wording with [the specific rollout or product decision you owned], if accurate.

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The stated 150% increase is wrong: growth from 400 to 1,150 weekly active users is 187.5%.
2. [Polish] The bullet repeats the change by giving both before-and-after figures and a percentage.

**Why**
1. The increase is 750 users, which is 187.5% of the starting 400. The incorrect percentage undermines confidence in the other metrics.

**How to change it**
1. Replace “a 150% increase” with “a 187.5% increase.”

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
1. [Error] The change from 75% to 95% is 20 percentage points, not a 20% relative increase.
2. [Polish] The bullet states the change twice, with “by 20%” repeating the before-and-after rates.

**Why**
1. Subtracting the rates gives a 20-percentage-point change; relative to 75%, the increase is about 26.7%. Calling it a 20% increase misstates the metric.

**How to change it**
1. Use “raised the pickup-slot fill rate by 20 percentage points” and cut “from 75% to 95%.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Important] The savings estimate lacks an anchor, its analytical inputs are unnamed, and the pilot approval repeats the next bullet.

**Why**
Without a baseline cost or key assumption, a reader cannot assess what supports the $2.4M estimate. “Based on the model” does not show what informed it, and the pilot funding is repeated in the following bullet, splitting the estimate from its outcome.

**How to change it**
Keep the estimate, add [the baseline cost or one key assumption], and replace “the model” with [the key data or analytical input used], if accurate. Combine the funding outcome here and remove its repetition from the following bullet.

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
[Important] The intake-form bullet uses passive voice and gives no result of the change.

**Why**
The passive wording hides who mapped the intake and shortened the form. Adoption shows implementation, but without a measured effect, the reader cannot tell whether intake became faster, more complete, or otherwise better.

**How to change it**
Replace the passive clauses with direct verbs that name your role. After the adoption clause, add [the change in intake time, completion, or errors], if measured.

> Presented the final recommendation to the hospital COO and clinic directors, who approved a 90-day scheduling pilot at two clinics.

**Problem**
The pilot approval is buried after the audience list instead of leading with the strongest outcome.

**Why**
The approved 90-day pilot is the clearest result of the recommendation. Placing it after the list of attendees delays that outcome for a scanning reader.

**How to change it**
Move the approval to the start of the bullet, before the audience list.

## Already working

- s2:e1:b0: Pairs a clear change with a before-and-after measure.
- s2:e1:b5: Connects the presentation to a concrete funding decision.

## Set aside (4)

4 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-eeba5e46.md.

