> Here is my resume: bench/planted-defects/tests-final/b2-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed: content and wording specialists covered all 4 eligible entries; narrative and format reviews ran. Education had no bullets to review, and job-description matching did not run because no posting was provided.

Most important changes:

1. **Correct inaccurate claims and figures.**
   - A 6.1-to-8.4 average recommendation rating is not Net Promoter Score.
   - A drop from 90 to 60 seconds is **33%**, not 50%.
   - An increase from 65% to 85% is **20 percentage points**, not 20%.
   - A 3:1 body-text contrast threshold does not generally establish WCAG 2.1 AA compliance.

2. **Make attribution and evidence more precise.**
   Several bullets imply that research methods directly produced business outcomes. Clarify the product change informed by the research, the comparison period or baseline, and how results were validated.

3. **Improve hierarchy and polish.**
   - Move Education below Experience and Projects.
   - Prioritize the strongest Senior UX Researcher accomplishments rather than presenting six equally weighted initiatives.
   - Correct “interveiws” to “interviews.”
   - Change the present-tense “Writes” in the former Northwind role.
   - Remove date of birth and nationality.

The PDF is one page and parses cleanly for ATS use. The complete findings are available in `/report --full`.

> /report
# Review: resume.pdf

**90/100** — format 100 · content 84 · wording 92 · narrative 84

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

8 errors, 17 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997 | Nationality: Canadian

**Problem**
[Error] The file wrongly includes personal details that readers are not meant to weigh.

**Why**
Date of birth and nationality are conventionally omitted because they are unrelated to professional qualifications. Including them creates unnecessary personal information and may distract from the candidate’s experience.

**How to change it**
Delete the date of birth and nationality line.

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Leading with Education weakens the résumé’s current professional story.

**Why**
After six years of progressive UX research work, the recent experience and projects are more relevant than the undergraduate degree. Opening with the degree delays the evidence recruiters are most likely to weigh.

**How to change it**
Move the Education section below Experience and Projects.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Brought the design system to WCAG 2.1 AA by setting body-text contrast to at least 3:1 against every background.

**Problem**
1. [Error] “At least 3:1” is wrong for normal-sized body text, and contrast alone does not establish WCAG 2.1 AA conformance.
2. [Important] “Setting body-text contrast” identifies the design change but not how its accessibility was evaluated or validated.

**Why**
1. WCAG 2.1 AA generally requires normal-sized text to have a contrast ratio of at least 4.5:1; 3:1 applies to large text. Claiming conformance from this specification may make an accessibility-aware reader question both the standard and the broader assessment.
2. The line currently shows a specification rather than the research or assessment method behind it. For a senior UX researcher, that omission leaves the reader unable to judge the candidate’s accessibility-evaluation expertise.

**How to change it**
1. Replace “at least 3:1” with “at least 4.5:1” for normal-sized body text. Replace “Brought the design system to WCAG 2.1 AA” with a narrower contrast claim unless [all applicable Level A and AA criteria were assessed and satisfied].
2. Replace or supplement “setting” with [accessibility audit or validation method], if accurate, while retaining the applicable WCAG standard and corrected contrast threshold.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] The line wrongly credits research-synthesis methods with directly reducing repeat support calls by 23%.
2. [Important] The 23% reduction is buried behind a long list of sources and synthesis methods.
3. [Important] “By 23%” lacks the measurement period and comparison baseline.

**Why**
1. Affinity mapping, journey mapping and a tagged clip library organize evidence; they do not themselves change statements or support interactions. Without the resulting intervention, a reader cannot follow the causal chain from research to the business outcome.
2. A scanning reader reaches the business result only after processing three evidence sources and three methods. That weakens one of the entry’s clearest quantified outcomes.
3. The reader cannot tell whether the reduction compares months, quarters or another interval. That makes the result harder to interpret or verify.

**How to change it**
1. Change “Synthesizing” to “Synthesized,” then say the findings informed [the resulting product, content, service or support change], after which repeat support calls fell 23%.
2. Move “cut repeat support calls about statements by 23%” to the beginning, then place the evidence sources and most relevant synthesis method after it.
3. Add [measurement period and comparison baseline] immediately after “by 23%.”

> Presented quarterly findings to the head of product and two design teams; three of the top five recommended fixes shipped in the next release cycle.

**Problem**
[Polish] “Recommended fixes” does not identify the product area or customer problem addressed.

> Trained 12 product managers to run their own unmoderated tests with a shared script template, which doubled the number of tests run each quarter.

**Problem**
1. [Important] “Doubled” gives a relative increase without the underlying quarterly test volume.
2. [Polish] “The number of tests run each quarter” is unnecessarily verbose.

**Why**
1. A doubling might represent a change from one test to two or from ten to twenty. Without the counts, the reader cannot judge the resulting research cadence or organizational adoption.

**How to change it**
1. If available, replace the relative claim with “increased tests per quarter from [baseline count] to [new count].”

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
1. [Error] Prototype testing with 24 customers does not establish that the shipped design caused completed sign-ups to rise from 41% to 58%.
2. [Important] The entry’s strongest quantified achievement appears last rather than opening the role.
3. [Polish] “Testing three prototypes” does not identify the research format used.

**Why**
1. Prototype usability research can reveal problems, but it cannot attribute a later production change to the design. Traffic mix, seasonality or concurrent changes could also explain a quarter-over-quarter increase.
2. The increase in completed sign-ups from 41% to 58% is likely to attract attention faster than the current opening bullet. Leaving it sixth delays the clearest evidence of research tied to a major product outcome.

**How to change it**
1. Replace “the shipped design raised” with “completed sign-ups rose” and state that this occurred after the resulting design launched. If [a controlled production experiment] established causation, name that test instead.
2. Move this entire bullet to the first position under Pinegrove Financial.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Raised the patient app’s Net Promoter Score from 6.1 to 8.4, calculated as the average 0-10 recommendation rating across 2,000 monthly survey responses.

**Problem**
1. [Error] The line incorrectly labels an average recommendation rating as “Net Promoter Score.”
2. [Important] The rating increase does not identify the candidate’s research work or the product change it informed.

**Why**
1. NPS is the percentage of respondents rating 9–10 minus the percentage rating 0–6, expressed on a scale from -100 to 100. Calling a 0–10 average NPS is a technical error, while the attached calculation definition interrupts the achievement without fixing it.
2. A hiring manager can see the result but cannot tell what the candidate personally contributed. The omission therefore hides the UX research skill and decision that might explain the improvement.

**How to change it**
1. Replace “Net Promoter Score” with “average recommendation rating.” Cut “calculated as the average 0-10 recommendation rating” and retain “across 2,000 monthly survey responses.”
2. Add “by [specific research method and product change it informed]” while retaining the 2,000 monthly survey responses as evidence.

> Interviewed 40 patients about appointment reminders; the findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] The entry’s strongest quantified achievement does not open the role.
2. [Polish] “The findings led to” neither states the key patient insight nor clearly connects the candidate’s work to the reminder.

**Why**
1. The reduction in missed appointments from 14% to 9% provides an immediate, consequential outcome from qualitative research. Moving it first would strengthen the entry’s initial impression.

**How to change it**
1. Move this entire bullet to the first position under Northwind Health.

> Writes the screener and consent templates for all patient studies, cutting study setup time from two weeks to three days.

**Problem**
[Important] “Writes” uses present tense for a role that ended in February 2022.

**Why**
The tense conflicts with the stated employment dates and may look like an uncorrected editing error. Consistent past tense makes the chronology unambiguous.

**How to change it**
Replace “Writes” with “Wrote.”

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
1. [Important] “Tested” does not show what participants attempted or which usability barrier drove the revised layout.
2. [Polish] “Support calls about joining a video visit” is wordy.

**Why**
1. The participant count alone does not reveal how the candidate diagnosed the video-joining problem. A concrete task or finding would better demonstrate the research method and analytical contribution.

**How to change it**
1. Replace “Tested” with “Conducted [type of usability test] focused on [key joining task or usability barrier].”

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
1. [Important] “Redesigned a city transit map” states the work without giving the outcome of the redesign or testing.
2. [Important] “12 participants” does not identify whether the sample represented the intended accessibility audience.

**Why**
1. The reader cannot tell from this line whether accessibility or route finding improved. That makes the opening project bullet less persuasive than the available results support.
2. The relevance of the test depends on whether participants were screen-reader users, low-vision riders or a general sample. Without that information, the reader cannot judge how strongly the study supports the accessibility claim.

**How to change it**
1. After “timed route-finding tasks,” add the existing median-time or task-success change and identify the original map as the comparison.
2. Replace “12 participants” with “12 [screen-reader and/or low-vision participants],” if accurate.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] “A 50% improvement” is mathematically wrong; reducing time from 90 to 60 seconds is a 33% reduction.
2. [Important] “From 90 to 60 seconds” does not name the two conditions being compared.
3. [Polish] “Audio landmarks” does not explain what information was announced or how it supported route finding.

**Why**
1. The time fell by 30 seconds relative to an original 90 seconds, which is 33.3%. The incorrect percentage can undermine confidence in the project’s other quantitative claims.
2. The reader has to infer that the figures compare the redesigned map with the original map. An explicit condition makes the result interpretable as a test outcome rather than an unexplained pre/post change.

**How to change it**
1. Replace “a 50% improvement” with “a 33% reduction.”
2. Add “versus the original map” next to the 90-second baseline, if that was the comparison condition.

> Raised task success by 20% across 12 participants, from 65% to 85%, with audio landmarks and high-contrast line colors.

**Problem**
1. [Error] “By 20%” is wrong; the increase from 65% to 85% is 20 percentage points.
2. [Important] The task-success result does not identify either the participant population or the baseline condition.
3. [Important] “With audio landmarks and high-contrast line colors” unnecessarily repeats the preceding bullet.
4. [Polish] If retained here, “audio landmarks” is too vague to show how the feature guided users through a route.

**Why**
1. The relative increase is approximately 30.8%, whereas the absolute difference is 20 percentage points. Using the wrong unit may make readers question the candidate’s handling of research metrics.
2. Those details determine whether the result applies to the intended accessibility audience and what the redesign outperformed. Without them, the 65%-to-85% change is less interpretable.
3. Repeating the same intervention spends space without adding evidence. Removing it keeps this line focused on the distinct task-success result.

**How to change it**
1. Replace “by 20%” with “by 20 percentage points.”
2. Replace “across 12 participants” with “among 12 [screen-reader and/or low-vision participants]” and identify 65% as the [original-map or pre-redesign] baseline, if accurate.
3. Cut “with audio landmarks and high-contrast line colors” from this bullet.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Redesigned a free clinic’s online booking flow, cutting the steps to book from 9 to 4; phone bookings fell by a quarter in the next two months.

**Problem**
1. [Important] “Redesigned” does not identify the intervention that removed five booking steps.
2. [Important] “Fell by a quarter” does not name the comparison period or baseline.

**Why**
1. The reader can see that the flow became shorter but not what interaction or information-architecture decision produced that result. This hides the specific UX skill the candidate applied.
2. The next two months identify when the outcome was observed, not what it was compared against. Without a pre-launch or equivalent prior period, the reader cannot readily interpret or verify the decline.

**How to change it**
1. Replace “Redesigned” with [specific interaction or information-architecture change that removed five steps].
2. After “the next two months,” add “versus [named pre-launch period or equivalent prior two-month period].”

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Polish] “Fixing the six issues” does not show whether first-time users successfully completed bookings after the changes.
2. [Polish] “Hallway testing” is niche terminology that may not be clear to a broader recruiting audience.

## Skills

> interveiws

**Problem**
[Error] “Interveiws” is misspelled.

**Why**
The error appears in a Methods list where precision is expected. A visible typo can make the résumé seem insufficiently proofread.

**How to change it**
Replace “interveiws” with “interviews.”

## Already working

- s2:e0:b0: Leads with the outcome and quantifies the change from 37% to 22%.
- s3:e1:b2: Uses adoption by two subsequent teams as concrete evidence of value.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-57b7b5b1.md.

