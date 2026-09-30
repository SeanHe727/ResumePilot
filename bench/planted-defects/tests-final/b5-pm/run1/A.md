> Here is my resume: bench/planted-defects/tests-final/b5-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the resume’s narrative and format. The two education entries have no bullets to review. No job-description match was run because no posting was provided.

The main changes flagged:
- Put Experience before Education and list Harbor Payments above Crestline Logistics, which is more recent.
- Remove or replace one of the Harbor Payments bullets that repeats the same checkout test and five-point conversion lift.
- Verify the figures and causal claims in the food-rescue and operations results—for example, the growth and percentage-point calculations, and whether the results can be attributed to the actions listed.

The narrative review also flagged the Diesel Mechanic role as an unexplained shift from the resume’s product/operations direction. The format review found the file parses cleanly, with no layout warnings.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 83 · wording 84 · narrative 61

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 18 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Crestline Logistics | Operations Analyst

**Problem**
[Important] Harbor Payments appears below the older Crestline Logistics role, so Experience is not in reverse chronological order. *(no words)*

**Why**
The dates show that the Harbor internship ended in August 2024, after the Crestline role ended in August 2023. A reader scanning experience expects the more recent role first and may otherwise misread the timeline.

**How to change it**
Move Harbor Payments above Crestline Logistics within Experience.

> Northfield School of Management | MBA

**Problem**
[Important] Education appears before substantial professional experience. *(no words)*

**Why**
Leading with the MBA makes the reader reach the work history later, despite the résumé containing several years of professional experience. That delays the evidence of the candidate’s work background.

**How to change it**
Move Experience before Education.

> Coastal Marine Services | Diesel Mechanic

**Problem**
[Important] The Coastal Marine Services entry should be shortened or removed if it does not support the product-focused target. *(saves about 20 words if shortened)*

**Why**
The role is prominent as a full entry, while the target direction is product-focused. If the experience does not support that direction, its space can keep more relevant product evidence from standing out.

**How to change it**
Shorten the entry to one line or remove it if it does not support the target direction.

## Coastal Marine Services | Diesel Mechanic | Lake City, USA | Jul 2025 - Present

> Rebuilt diesel engines and gearboxes for a fleet of 14 commercial fishing vessels, keeping dry-dock time under 5 days per job.

**Problem**
[Important] The five-day claim does not clarify whether it measures dry-dock occupancy or total rebuild time, or what comparison makes it meaningful. *(about 4 words to add)*

**Why**
A full engine and gearbox rebuild can take longer than five days, while dry-dock occupancy may be shorter if work happens off-vessel or prepared exchange units are installed. Without knowing what the time covers or how the rebuilds affected it, a reader cannot judge the turnaround claim.

**How to change it**
Clarify whether the measure is dry-dock occupancy rather than total repair time, and name the approach if relevant; otherwise remove or soften the five-day claim.

## Crestline Logistics | Operations Analyst | Lake City, USA | Jul 2018 - Aug 2023

> Rebuilt weekly carrier scorecards used by 6 regional managers to renegotiate contracts, cutting late deliveries from 11% to 7% in two quarters.

**Problem**
[Important] The line attributes the delivery-rate improvement to the scorecards without establishing that the scorecards caused it. *(about 5 words to add)*

**Why**
Scorecards used in contract negotiations do not, by themselves, establish that delivery performance improved because of them. A reader may ask what else changed and how the scorecards’ effect was measured, which makes the result less persuasive.

**How to change it**
If a credible analysis established the scorecards’ effect, state the result and how it was measured; otherwise say the scorecards supported renegotiations and report the delivery-rate change separately.

> Cut warehouse pick errors 30% at two sites; my redesign of the slotting rules was rolled out with the floor supervisors and 45 retrained pickers.

**Problem**
1. [Important] The line does not establish that the slotting redesign produced the 30% reduction in pick errors. *(about 5 words to add)*
2. [Important] The bullet uses a first-person pronoun and obscures who implemented the slotting change. *(no words)*

**Why**
1. The rollout and retraining describe the intervention, not how the error reduction was measured or whether the redesign caused it. A reader may also question whether the error rates were compared on a like-for-like basis.
2. “My” shifts the bullet into first person, and “was rolled out with” leaves the implementation less direct. A reader has to infer your role and the floor supervisors’ involvement from an indirect construction.

**How to change it**
1. If comparable measurements support the reduction and its attribution, specify them; otherwise describe the redesign and rollout without claiming it cut errors.
2. Remove “my” and replace “my redesign of the slotting rules was rolled out with” with “redesigned the slotting rules with,” keeping the stated role of the floor supervisors.

> Ran the quarterly S&OP review across sales, finance and operations for 12 consecutive quarters, introducing a consensus forecast that cut forecast error from 18% to 11%.

**Problem**
1. [Important] The line attributes the forecast-error improvement to the consensus forecast without establishing that the process caused it. *(about 5 words to add)*
2. [Polish] “For 12 consecutive quarters” is longer than needed to state the duration. *(saves about 1 word)*

**Why**
1. Running S&OP reviews and introducing a consensus forecast do not, by themselves, prove that the process reduced forecast error. A reader may ask how the errors were compared and whether other factors contributed, weakening the result as evidence of impact.
2. The phrase adds emphasis but does not change the reader’s understanding of the period. The shorter version keeps the duration visible without spending extra words.

**How to change it**
1. If an analysis supports the attribution, state how the errors were compared; otherwise describe the consensus forecast and report the change without attributing it to the process.
2. Replace “for 12 consecutive quarters” with “for 12 quarters.”

> Led the rollout of a route-planning tool to 3 depots while rewriting the standard operating procedures, running driver training and taking over vendor negotiations for the telematics contract, which saved 1,800 driver hours a year across the region.

**Problem**
1. [Important] The line does not establish how the annual driver-hours savings were calculated or whether the listed work produced them. *(about 5 words to add)*
2. [Important] The strongest outcome appears after a long list of activities, so a scanning reader may miss it. *(no words)*
3. [Polish] The list of process details crowds the main accomplishment. *(saves about 7 words)*

**Why**
1. Rolling out a tool, rewriting procedures, training drivers, and negotiating a contract do not show the basis for the annual figure. A reader may ask what baseline or comparison supports the savings and how the changes are tied to them.
2. The annual savings are the clearest evidence of the rollout’s value, but they arrive after several tasks. The result can lose impact before a reader reaches the end of the bullet.
3. The bullet already includes the rollout and the annual savings, but the procedure-writing, training, and vendor-negotiation details compete for attention. A reader may have trouble identifying which work best demonstrates your contribution.

**How to change it**
1. If a documented calculation supports the annual savings and its attribution, state the basis; otherwise describe the rollout and related work without claiming 1,800 hours saved.
2. Move the savings result closer to the start of the bullet, then keep only the one or two activity details that best show your contribution.
3. Cut this list to the one or two details that best show your contribution to the rollout.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.

**Problem**
[Error] RICE Reach is scored with ticket counts rather than the estimated number of people or customers affected. *(about 8 words to add)*

**Why**
In RICE, Reach estimates how many people or customers a feature affects over a defined period. Ticket counts can include repeat tickets from the same person, so they do not measure the number of people reached; a product reader may therefore question how the prioritization worked.

**How to change it**
Replace the ticket-count definition with Reach based on estimated people or customers affected over a defined period; keep expected ticket reduction as a separate estimate. Briefly explain RICE and Reach if you retain the framework terms.

> Prioritized the dispute roadmap with RICE, scoring Reach as the number of support tickets each feature would close.
> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
[Important] The dispute-roadmap bullets do not name the initiative chosen or what the decision changed. *(about 8 words to add)*

**Why**
“Prioritized the dispute roadmap” and “set the next quarter’s roadmap priority” show that a decision was made but not what work moved forward. Without that, a reader cannot judge the product or business significance of the prioritization.

**How to change it**
Replace the broad roadmap phrases with [the dispute initiative that became the priority] and, if applicable, [what changed after it was prioritized].

> After interviewing 25 merchants, mapping chargeback reasons, sizing the loss by segment and drafting a business case with finance, set the next quarter’s roadmap priority.

**Problem**
1. [Important] The line names loss sizing but gives no estimate or segment comparison to show what the analysis found. *(about 8 words to add)*
2. [Important] The main roadmap decision is delayed until after a long list of research and analysis tasks. *(no words)*

**Why**
1. Without the result, a reader cannot tell what evidence supported the roadmap decision. One concise finding would make the analysis more credible and useful to a product reader.
2. A scanning reader has to pass through the interviews, chargeback mapping, loss sizing, and business case before reaching the outcome. That delays the product decision the work supported and can make the bullet’s main point easy to miss.

**How to change it**
1. Add [the loss estimate and the segment or baseline it was measured against] where you describe the sizing.
2. Move the roadmap decision closer to the start, then trim the methods list to the one or two details that best support it.

> Ran the checkout A/B test with randomization by session and reported the 5-point conversion lift as the effect on merchants’ customers.

**Problem**
[Error] The Harbor Payments entry repeats the same checkout A/B test and conversion lift in two bullets. *(saves about 21 words if the repeated bullet is removed)*

**Why**
The first bullet gives the result as a move from 61% to 66%, while the later bullet describes the same test as a five-point lift. A reader may see the repetition as padding rather than a separate achievement.

**How to change it**
Remove the repeated checkout-test bullet, or use it only for distinct information not already in the earlier bullet; keep the conversion figures consistent.

> Presented the onboarding results and a follow-up roadmap to the payments leadership team, who funded the rollout to two more regions.

**Problem**
[Polish] The funding outcome is stated indirectly through the leadership team. *(about 2 words)*

**Why**
The clause makes the leadership team the grammatical subject of the funding decision rather than stating the outcome directly. That makes the result less immediate to a reader scanning for the consequence of the presentation.

**How to change it**
Replace “who funded the rollout to two more regions” with “resulting in funding for the rollout to two more regions.”

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The line claims that all redistributed food would otherwise have been thrown away without establishing that counterfactual. *(saves about 4 words)*
2. [Important] The launch bullet gives the app’s reach and partners but not your specific contribution to getting it live. *(about 6 words to add)*

**Why**
1. Recording how much food was redistributed does not show what would otherwise have happened to it. A reader may question the claim that all of it would have been discarded, which can distract from the supported rescue result.
2. A reader can see the scale of the launch, but not what product or operational skill you brought to it. One concrete example of ownership would make the Product Lead role more credible.

**How to change it**
1. Replace the phrase with “surplus food”; retain the claim about what would have been thrown away only if [evidence establishes its likely prior disposition].
2. Add one specific contribution after “Launched,” such as [the product decision or dining-hall onboarding step you owned]; if accurate, describe it as coordinating [specific launch step].

> Raised weekly active users from 400 to 1,150, a 150% increase, by adding pickup reminders chosen after 60 user interviews.

**Problem**
1. [Error] The increase is 187.5%, not 150%. *(no words)*
2. [Important] The line attributes the increase in weekly active users to the reminders without evidence that they caused it. *(about 4 words to add)*

**Why**
1. Weekly active users rose by 750 from a starting point of 400, which is 187.5% of the starting figure. The ending figure is 287.5% of the starting figure, so the current percentage understates the increase and can make the arithmetic look unreliable.
2. The interviews can inform which reminders to add, but they do not establish that the reminders caused a before-and-after increase in usage. Other changes or trends could account for the difference, so the causal claim may not withstand a reader’s scrutiny.

**How to change it**
1. Replace “a 150% increase” with “a 187.5% increase.”
2. If a controlled test established the reminders’ effect, report that result; otherwise describe the reminders as an action taken and the user figures as a before-and-after change.

> Raised the pickup-slot fill rate by 20% across two dining halls, from 75% to 95%, by setting up a volunteer shift system.

**Problem**
[Error] The change from 75% to 95% is 20 percentage points, not a 20% increase. *(about 2 words)*

**Why**
The difference between the two fill rates is 20 percentage points. Relative to the starting 75%, the increase is about 26.7%, so calling it 20% misstates the size of the change.

**How to change it**
Replace “by 20%” with “by 20 percentage points.”

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Sized a $2.4M annual saving from consolidating outpatient scheduling across 4 clinics; the client funded a pilot based on the model.

**Problem**
[Important] “Based on the model” does not identify the analysis or data supporting the savings estimate. *(about 5 words to add)*

**Why**
A reader can see the proposed consolidation and the estimated saving, but not the analytical work behind the figure. One key input or approach would make the estimate more credible and show your consulting skill.

**How to change it**
Replace “based on the model” with [the key data or analysis used to size the savings].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The line says the intake form was shortened but gives no measure of how much it changed. *(about 4 words to add)*
2. [Polish] The passive construction leaves the team’s intake-mapping and form-shortening actions less direct. *(no words)*

**Why**
1. A reader can see that the change was adopted, but cannot gauge its size. One before-and-after measure would make the improvement easier to assess.
2. “Was mapped” and “was shortened” put the intake process and form in the subject position rather than stating what the team did. A reader has to infer the actions and ownership.

**How to change it**
1. Add [the number of fields removed] or another single measure of the reduction compared with the original form.
2. Replace “Patient intake at 4 clinics was mapped and the intake form was shortened” with “Mapped patient intake at 4 clinics and shortened the intake form.”

## Already working

- s2:e2:b0: Pairs a clear onboarding change with a concrete improvement and a defined pilot population.
- s2:e2:b1: Connects a measured conversion improvement to a specific test and broader release.
- s3:e1:b2: The approval, pilot duration, and clinic count make the result easy to understand.

## Set aside (5)

5 smaller points were left out; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-fbb12e95.md.

