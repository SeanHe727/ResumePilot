> Here is my resume: bench/planted-defects/tests-final/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
The review covered all four entries with bullets, plus the full resume’s narrative and formatting. The two education entries have no bullets to review. No job description was provided, so I did not run a job-match review.

The main changes to address:
- **Resolve the hospital-practicum mismatch:** one bullet describes merchant onboarding and repeats a Harbor Payments result, despite being under a hospital scheduling project. Replace it with an accurate practicum outcome or remove it.
- **Clarify claims whose figures could mislead:** the logistics late-delivery rate excludes weather-delayed shipments, so the bullet may imply actual deliveries improved when the calculation changed. The onboarding comparison also gives no result and overstates what the comparison establishes.
- **Tighten consistency and structure:** change “prepares” to past tense in the ended role; consider moving Experience above Education; and explain the eight-month gap after the B.A. if relevant.
- The format check found clean ATS parsing and no layout warnings. It also flagged date of birth and nationality as personal details usually omitted.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 80 · narrative 68

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 6 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 2 Nov 1996

**Problem**
[Error] The file includes personal details that readers are not meant to weigh.

**Why**
The file lists a date of birth and nationality, personal details that are conventionally left off. Including them gives a reader information unrelated to assessing the résumé and takes space from relevant content.

**How to change it**
Remove “Date of birth: 2 Nov 1996 | Nationality: American” from the file.

> Jun 2018; Mar 2019

**Problem**
[Polish] The dates leave an eight-month gap between the B.A. and the Operations Analyst role.

> Northfield School of Management | MBA

**Problem**
[Polish] Education appears before Experience.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

> Interviewed 25 merchants and analysed six months of chargeback data to size annual chargeback losses at 1.1 million dollars, the business case that set the next quarter’s roadmap priority.

**Problem**
[Polish] The business-case and roadmap outcome comes after the research methods and loss estimate, so it is harder to spot quickly.

> Measured the onboarding redesign by comparing merchants who opted into the new flow with those who stayed on the old one.

**Problem**
1. [Error] The opt-in comparison does not establish that the redesign caused an outcome.
2. [Important] The comparison method has no stated outcome.

**Why**
1. Merchants who opted into the new flow may differ from those who stayed on the old flow in ways that also affect onboarding. Without random assignment or a credible adjustment for those differences, the comparison cannot isolate the redesign’s effect, so attributing an effect to it overstates the evidence.
2. A reader can see how the redesign was evaluated but cannot tell whether onboarding improved. Without an outcome, the line does not show what the measurement found or the value of the work.

**How to change it**
1. Replace “Measured the onboarding redesign” with a description of the opt-in versus old-flow comparison, without attributing an effect to the redesign. Attribute an effect only if a randomized or credible adjusted comparison was used.
2. Replace the standalone comparison statement with the observed result, using [onboarding outcome] versus [old-flow result].

## Crestline Logistics | Operations Analyst | Lake City, USA | Mar 2019 - Aug 2023

> Cut late deliveries from 11% to 7% by excluding weather-delayed shipments from the on-time calculation.

**Problem**
[Error] The 11%-to-7% figures are an adjusted rate, not evidence that actual late deliveries fell.

**Why**
Excluding weather-delayed shipments changes which deliveries count; it does not show that fewer shipments were actually late. As written, the figures can be read as an actual reduction, although the calculation supports a claim about the rate after exclusions.

**How to change it**
If these are the adjusted figures, replace “Cut late deliveries from 11% to 7%” with “Reduced the weather-adjusted late-delivery rate from 11% to 7%,” and keep the weather exclusion explicit.

> Cut warehouse pick errors 30% at two sites by redesigning slotting rules with the floor supervisors and retraining 45 pickers on the new layout.

**Problem**
[Polish] The method and training details after the result can be compressed.

> Coordinated the quarterly S&OP review across sales, finance and operations and prepares the forecast pack for each meeting.

**Problem**
1. [Important] The S&OP activities are listed without saying what they enabled.
2. [Error] “prepares” is present tense in an entry for a role that ended in August 2023.

**Why**
1. A reader can see the review involved sales, finance and operations and that you prepared a forecast pack. Without an outcome, the line does not show why the work mattered or what decision it supported.
2. The present-tense verb conflicts with the dates of this completed role. That inconsistency can make the timing of the work unclear.

**How to change it**
1. Replace the activity-only ending with [the decision or outcome the review or forecast pack enabled]; add a measure only if you have one.
2. Change “prepares” to “prepared.”

> Led the rollout of a route-planning tool to 3 depots, training 60 drivers and dispatchers and saving 1,800 driver hours a year.

**Problem**
1. [Important] The 1,800-hour figure is not identified as measured savings or a projection.
2. [Polish] The route-planning rollout result is not the opening bullet in the entry.

**Why**
1. Readers may interpret realized and forecast savings differently. Without its status, they cannot tell what the result represents.

**How to change it**
1. Label the figure as [realized or projected] savings; if needed, briefly state [how the hours were measured or estimated].

## Campus Food Rescue App | Product Lead | Student Venture | Oct 2023 - Present

> Launched a surplus-food pickup app to 3,100 students with two dining halls, redistributing 9 tonnes of food that would have been thrown away in its first year.

**Problem**
1. [Important] The launch line does not say what product or rollout work you personally owned.
2. [Polish] “surplus-food” and “that would have been thrown away” repeat the same idea.

**Why**
1. A reader can see the app’s reach but not the product-lead contribution behind the launch. One concrete action would make your role in the result more specific and credible.

**How to change it**
1. After “Launched,” add [the specific product or rollout decision you owned], such as defining the pickup flow or coordinating the rollout, if accurate.

> Launched pickup reminders after 60 user interviews showed students missed pickup windows; weekly active users grew from 400 to 1,150 over the following term.

**Problem**
[Polish] The weekly-active-user result comes after the interview context, making it slower to find.

> Set up a volunteer shift system with two dining halls, filling 95% of pickup slots each week and cutting staff cover shifts from 10 to 2 a week.

**Problem**
[Polish] “each week” and “a week” repeat the same timeframe.

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

> Held weekly working sessions with clinic managers on outpatient scheduling across the network.

**Problem**
[Important] The scheduling line describes meetings without stating a resulting change.

**Why**
A reader can see who was involved and what the sessions covered, but not what the practicum achieved. Without a concrete scheduling outcome, the line does not show why the work mattered.

**How to change it**
Add [the most important scheduling change] and, where available, a measure against a baseline such as [change in appointment access or wait time vs. before the work].

> Patient intake at 4 clinics was mapped and the intake form was shortened, with the changes adopted by front-desk staff.

**Problem**
1. [Important] The line does not say how much the form was shortened or what effect the change had.
2. [Polish] The intake result is buried after the methods instead of leading the entry.
3. [Polish] Passive voice hides who mapped the intake and shortened the form.

**Why**
1. Adoption by staff shows the change was put into practice, but readers cannot judge its size or value. A before-and-after measure would make the result more concrete.

**How to change it**
1. Add the form’s before-and-after length or one downstream effect, such as [change in intake completion time vs. before].

> Halved the time it takes a new merchant to receive a first payment, across 2,300 merchants, by redesigning onboarding.

**Problem**
1. [Error] The merchant-onboarding result is assigned to the hospital practicum, where it does not belong.
2. The bullet does not specify which part of onboarding was redesigned.
3. “the time it takes” is wordy and present tense for a past result.

**Why**
1. The bullet repeats the Harbor Payments onboarding result for the same 2,300 merchants, but this entry is for a regional hospital network and ends in May 2024, before the June–August 2024 internship. A reader would notice that a merchant-payment achievement is attached to an unrelated hospital project, which undermines confidence in the entry.
2. “Redesigning onboarding” names a broad activity but not the intervention. A reader cannot tell what you changed or assess your contribution; in this entry, the hospital context also makes the phrase especially difficult to interpret.
3. The practicum ended in May 2024, but the phrase describes the result in the present tense. The wording also takes more space than a concise measure, while the bullet’s attribution to this hospital entry still needs verification.

**How to change it**
1. Remove this bullet from the practicum and replace it with [the outcome actually achieved there]. If the merchant result belongs to Harbor Payments, keep it under that role with its stated cohort and metric; lead this entry with the intake change.
2. If this result is verified as belonging in the practicum, name [the specific onboarding step changed]; otherwise remove the bullet from this entry.
3. If the bullet is verified as belonging here, replace “the time it takes a new merchant to receive a first payment” with “new-merchant time to first payment” and use past-tense wording; otherwise remove the bullet.

## Already working

- s2:e0:b5: States the design change, before-and-after outcome, and pilot scale clearly.
- s2:e0:b0: Connects a concrete checkout change to a quantified outcome.
- s2:e0:b1: Shows both the product work and a clear delivery outcome.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c298164a.md.

