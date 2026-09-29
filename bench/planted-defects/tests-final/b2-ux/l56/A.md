> Here is my resume: bench/planted-defects/tests-final/b2-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the resume’s format, career narrative, content, and wording.

The main changes to make are:

1. **Reorder the sections**
   - Move **Experience** to the top.
   - Place **Projects** next, followed by **Education** and **Skills**.
   - The current order leads with education despite several years of relevant experience.

2. **Correct technical and numerical claims**
   - The Pinegrove bullet says **3:1 body-text contrast meets WCAG 2.1 AA**; ordinary body text generally requires **4.5:1**.
   - The Accessible Transit Map result from **90 to 60 seconds** is a **33% reduction**, not a 50% improvement.
   - The increase from **65% to 85%** should be described as a **20-percentage-point increase**, not simply “20%.”
   - Verify whether the Northwind score is truly **Net Promoter Score**; an average 0–10 recommendation rating is not automatically NPS.

3. **Make outcomes easier to scan**
   - Lead more bullets with the measurable result, then explain the research method.
   - Clarify baselines and comparison periods for claims such as the 30% support-call reduction and doubled testing volume.
   - Explain what research insight led to the two-way text reminder and what changed as a result.

4. **Clean up wording and consistency**
   - Change **“interveiws”** to **“interviews.”**
   - Remove or substantiate **Tableau**, since the resume does not show where it was used.
   - Replace the present-tense “Writes” in the former Northwind role with past tense.
   - Reduce repeated method descriptions in the transit-map project.

The PDF itself is one page, machine-readable, consistently formatted, and has no layout or ATS parsing blockers. Content and wording reviews covered all four entries with bullets; education was not applicable to those reviews. No job-description comparison was run because no posting was provided.

The full consolidated report is available in `/report --full`.

> /report
# Review: resume.pdf

**91/100** — format 100 · content 88 · wording 87 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

9 errors, 13 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997 | Nationality: Canadian

**Problem**
[Error] Personal details that readers are not expected to weigh are included in the file.

**Why**
Date of birth and nationality can invite irrelevant or legally sensitive judgments rather than helping assess UX research qualifications. Their presence also takes attention away from experience and project evidence.

**How to change it**
Remove the date of birth and nationality from the resume.

> Lakeshore University

**Problem**
[Important] Education appears before the professional experience and project evidence that should lead the resume.

**Why**
After roughly six years of work, a recruiter is more likely to look first for the professional trajectory and relevant project impact. Leading with the 2015–2019 degree delays the strongest evidence of current UX research experience.

**How to change it**
Move the Education section below Experience and preferably below Projects.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
1. [Error] The claim that setting body-text contrast to 3:1 brought the design system to WCAG 2.1 AA is incorrect for ordinary body text.
2. [Important] The line does not establish what portion of the design system was tested or how compliance was confirmed.
3. [Important] “Brought the design system to WCAG 2.1 AA” makes the scope of compliance broader than the contrast requirement that follows.

**Why**
1. WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal-sized body text; 3:1 applies only to sufficiently large text. A reader may therefore doubt the compliance claim and the accuracy of the accessibility work.
2. “Against every background” does not show whether the work covered all components, themes, or color combinations. Without a scope or validation detail, the broad compliance claim is harder to trust.
3. A reader may interpret the opening as full design-system compliance, while the rest of the bullet describes only a contrast change. That mismatch can make the achievement sound overstated.

**How to change it**
1. Replace “at least 3:1” with “at least 4.5:1” for normal body text, or limit the 3:1 claim to text that meets WCAG’s large-text definition.
2. Replace or supplement “against every background” with [number or scope of components, themes, or color combinations audited] or [accessibility audit or testing method used], if accurate.
3. Replace the broad opening with a narrower claim about bringing the design system’s normal body-text contrast into compliance, if accurate.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] The line incorrectly credits synthesis and documentation methods with reducing repeat support calls.
2. [Important] The bullet opens with an awkward present-participle construction and buries the 23% result after too many inputs and methods.

**Why**
1. Affinity mapping, journey mapping, and a clip library organize evidence and identify themes; they do not themselves reduce call volume. The reduction requires a named intervention based on the research and comparable pre- and post-intervention measurements.
2. “Synthesizing ... cut” mixes a present participle with a past-tense result, making the opening grammatically awkward. The long method list also makes a scanning reader work to find the outcome and obscures which evidence or method mattered most.

**How to change it**
1. If an intervention was made, name it and state that it was followed by a 23% reduction in repeat statement-related support calls; otherwise, remove or soften the reduction claim.
2. Move the reduction immediately after the action, use a past-tense opening, and retain only the most relevant method or data source: [the method or source most directly tied to the reduction].

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] The stronger outcome—three of five recommended fixes shipping—is placed after the presentation details.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
[Polish] The doubled testing volume lacks the underlying quarterly baseline.

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Important] The mobile-onboarding bullet leads with a responsibility and places the 17-percentage-point sign-up increase after the research details.

**Why**
“Led research” tells the reader about ownership but not the concrete action first. The strongest evidence of impact appears only at the end, so a scanning reader may miss it.

**How to change it**
Lead with testing the three prototypes or with the completed-sign-up increase, then retain the research scope and customer count after the result.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The line mislabels an average recommendation rating as Net Promoter Score.
2. [Important] The line gives an outcome but does not identify the action or research contribution that produced it.
3. [Polish] The survey-method explanation interrupts the result instead of supporting a clear achievement statement.

**Why**
1. NPS is calculated from the percentages of promoters and detractors, not by averaging 0–10 recommendation ratings. The current wording makes the measurement technically invalid and may cause a knowledgeable reader to question the result.
2. A hiring reader can see the score change but cannot tell what UX research or product intervention you contributed. The result therefore reads more like a product metric than evidence of your work.

**How to change it**
1. Replace “Net Promoter Score” with “average recommendation rating,” or report NPS as the percentage of 9–10 ratings minus the percentage of 0–6 ratings.
2. Add [specific research insight, product change, or UX intervention] before the measurement clause.

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] The line does not identify the patient insight that guided the two-way reminder.
2. [Important] The reduction in missed appointments has no comparison period or population.

**Why**
1. The reader can see that interviews preceded the intervention but cannot tell how evidence became a product decision. One concise insight would make the research contribution more credible.
2. The figures are understandable, but the reader cannot tell whether the two rates cover comparable appointment groups or time windows. That weakens confidence in the claimed effect.

**How to change it**
1. Replace “the findings” with [key patient insight] so the reminder is tied to a specific research finding.
2. Add [pre/post comparison period or population] after the missed-appointment measure.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Polish] The opening “Writes” conflicts with the role’s past dates and makes the bullet’s timing unclear.

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
1. [Error] The 30% reduction in support calls lacks a baseline and comparison period.
2. [Polish] The phrase describing the support-call outcome is cumbersome.

**Why**
1. A percentage reduction requires a known original volume and a defined follow-up period. Without them, the reader cannot check the size or comparability of the change.

**How to change it**
1. State the baseline and comparison period, for example: “cut support calls from [baseline] to [follow-up count] over [period], a 30% reduction.”

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Important] The first bullet describes the redesign and test setup but gives neither the accessibility outcome nor what the test showed.

**Why**
The reader can see who the work served and how many people participated, but not why the redesign mattered. Without a result or comparison, the line stops at activity even though later bullets contain measurable outcomes.

**How to change it**
Add [what became easier, faster, or more successful for the target riders] and, if appropriate, replace or extend the testing clause with [the measured result] from the timed route-finding tasks.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The claim that reducing route-finding time from 90 to 60 seconds was a 50% improvement is mathematically incorrect.
2. [Polish] The strongest outcome is not the opening bullet of the project.

**Why**
1. The 30-second reduction is 33.3% of the 90-second baseline; a 50% reduction would produce a 45-second result. The incorrect percentage can undermine confidence in the rest of the project’s measurements.

**How to change it**
1. Replace it with “a 33.3% reduction,” or remove the percentage and retain the 90-to-60-second figures.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.
> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
[Polish] The method phrase is repeated in both outcome bullets.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
[Error] The task-success increase is ambiguously and inaccurately labelled as 20%.

**Why**
The figures show a 20-percentage-point increase from 65% to 85%, which is approximately a 30.8% relative increase. Leaving “by 20%” beside those endpoints makes the magnitude difficult to interpret consistently.

**How to change it**
Replace “by 20%” with “by 20 percentage points,” or remove it and retain “from 65% to 85%.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
[Important] The booking-flow bullet gives the outcome but does not show how the redesign was carried out.

**Why**
A reader can see the reduction in steps and phone bookings but not the design skill behind the change. The entry names Figma, yet the bullet does not connect that tool to a design decision or flow change.

**How to change it**
Add one compact method or design decision after the outcome, such as “using Figma to [specific flow or usability decision],” if accurate.

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Error] The claim that six issues stopped first-time users generally from finishing a booking overstates what testing 10 patients establishes.
2. [Important] The testing bullet does not say whether fixing the six issues improved completion.
3. [Polish] “Hallway testing” is specialized UX jargon that may not be clear to a general resume reader.

**Why**
1. Two rounds of hallway testing can identify issues encountered by the participating patients, but it cannot establish that exactly six issues prevented first-time users generally from completing a booking. The broader claim may make the research inference look stronger than the evidence supports.
2. The reader can see what was changed but not whether the change produced a better booking experience. Without a post-fix result, the bullet demonstrates diagnosis and intervention rather than outcome.

**How to change it**
1. Replace the clause with “identified and helped fix six issues that prevented participating first-time users from completing a booking.”
2. If measured, replace or follow the final clause with [post-fix first-time booking completion result]; otherwise retain the narrower testing claim.

> Wrote the clinic’s volunteer handbook for maintaining the booking pages, which two later volunteer teams used to add Spanish-language booking.

**Problem**
[Important] The handbook’s relationship to the later Spanish-language addition is unclear and cumbersome.

**Why**
The reader can see that two teams used the handbook and later added Spanish-language booking, but the specific guidance or process it enabled is only implied. The result therefore sounds loosely causal.

**How to change it**
Replace the relative clause with the specific handbook guidance or process that enabled the work: “used to [specific maintenance or localization task],” if accurate.

## Skills

> interveiws

**Problem**
[Error] “interveiws” is misspelled in the Methods skills line.

**Why**
The typo is immediately visible in a skills section and can make the resume look insufficiently checked. It also weakens the presentation of a core UX research capability.

**How to change it**
Replace “interveiws” with “interviews.”

> Tableau

**Problem**
[Important] Tableau is listed as a tool without any experience or project evidence showing it in use.

**Why**
A recruiter cannot tell whether Tableau is a practiced skill or an unsupported keyword. The mismatch reduces the credibility of the skills list and uses space that could support demonstrated capabilities.

**How to change it**
Add an entry demonstrating Tableau use, if accurate, or remove Tableau from the skills list.

## Already working

- s2:e0:b0: Names the exact product problem, intervention, and outcome.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-fdfbbf33.md.

