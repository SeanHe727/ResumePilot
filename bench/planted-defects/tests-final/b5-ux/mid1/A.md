> Here is my resume: bench/planted-defects/tests-final/b5-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
**Coverage:** Content and wording specialists reviewed all 4 experience/project entries; the narrative and format were also reviewed. Education has no bullets to assess. I didn’t compare against a job posting.

The main changes to prioritize:
- **Verify the figures:** the Pinegrove SUS score of 104 exceeds the scale’s maximum, and the transit-map change from 90 to 60 seconds is a 33% reduction, not a 50% improvement.
- **Clarify outcome metrics:** specify whether the 40% dispute-form increase is relative or percentage points, and add the comparison period for the 30% support-call reduction.
- **Reorder the resume:** put Experience above Education and list Pinegrove before Northwind. The format review also flagged date of birth and nationality as personal details to remove.

The format check found the resume parses cleanly and fits on one page. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 81 · wording 85 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997

**Problem**
[Error] Personal details such as date of birth and nationality are included even though readers are not meant to weigh them.

**Why**
Including these details directs attention to personal information rather than qualifications. Removing them keeps the résumé focused on the experience and evidence relevant to the role.

**How to change it**
Remove “Date of birth: 3 Mar 1997 | Nationality: Canadian.”

> B.A. in Cognitive Science

**Problem**
[Important] Move EXPERIENCE above EDUCATION because several years of relevant work now carry the story more than the degree.

**Why**
A reader should encounter the relevant work before the earlier degree. Keeping education first gives less space to the experience that now best demonstrates your fit.

**How to change it**
Move the EXPERIENCE section above the EDUCATION section.

> Jul 2019 - Feb 2022; Mar 2022 - Jun 2025

**Problem**
[Important] Experience is not listed newest-first.

**Why**
The more recent Pinegrove Financial role appears below Northwind Health. A reader scanning the résumé may not see your latest role and seniority as quickly.

**How to change it**
Move the Pinegrove Financial entry above the Northwind Health entry.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] The dashboard’s adoption is clear, but the line does not show what the survey or dashboard changed for care teams or patients.
2. [Polish] “Owned” names responsibility without showing the actions you took to run the survey or maintain the dashboard.

**Why**
1. A reader can see that you owned work the care teams used, but not why it mattered. Without a decision or action enabled by the work, this reads as responsibility rather than evidence of impact.

**How to change it**
1. Add the most consequential decision or action the survey or dashboard enabled, plus [evidence of its effect], if available.

> Interviewed 40 patients about appointment reminders; my findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
1. [Important] Move this bullet ahead of the survey-and-dashboard bullet so the strongest result leads the entry.
2. [Polish] “My findings” uses a first-person pronoun in a résumé bullet.

**Why**
1. The reminder research connects your work to a concrete change and a reduction in missed appointments. As the second bullet, that evidence may be seen later than the more general ownership claim.

**How to change it**
1. Move this entire bullet above “Owned the monthly patient survey and the reporting dashboard the care teams used.”

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
1. [Important] The 30% reduction in support calls has no stated measurement period or comparison window.
2. [Polish] “About joining a video visit” is wordier than necessary.

**Why**
1. A reader cannot tell when the calls were counted or what period the reduction compares. That makes the size of the result harder to interpret.

**How to change it**
1. Add [the period over which calls were compared], if available.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Led research on the mobile onboarding flow, testing three prototypes with 24 new customers; the shipped design raised completed sign-ups from 41% to 58% in the quarter after launch.

**Problem**
[Polish] “In the quarter after launch” expresses the timing less efficiently than “post-launch.”

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Important] “Improved dispute-form completion by 40%” does not clarify whether the result is a relative increase or a 40-percentage-point increase.

**Why**
Those describe different amounts of change, so a reader cannot tell exactly how much completion changed. Clarifying the comparison makes the result interpretable.

**How to change it**
Replace “by 40%” with “by 40% relative” or [baseline]% to [result]%, if accurate.

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
1. [Important] The coverage clause says the releases were tested but not what the testing changed or achieved.
2. [Polish] The explanation of the sessions’ purpose is longer than necessary.

**Why**
1. A reader can see that research happened regularly, but not what it contributed to the product or business. A finding that influenced a release would make the value of the work clearer.

**How to change it**
1. Replace the coverage-only clause with [a key finding and the decision or release change it informed], if available.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] “Synthesizing” uses present-participle form even though this completed role and its results are described in the past tense.
2. [Important] The result is buried after a long list of inputs and methods.

**Why**
1. The tense shift can make the line sound as if the work is ongoing, despite the completed role dates and past-tense result. Consistent past tense makes the timeline clearer.
2. A scanning reader may reach the methods before seeing the 23% reduction in repeat support calls. That delays the strongest evidence of the work’s impact.

**How to change it**
1. Replace “Synthesizing” with “Synthesized.”
2. Move “cut repeat support calls about statements by 23%” to the start of the line, then keep only the single most telling method or source.

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
[Error] A standard System Usability Scale score cannot be 104; its maximum is 100.

**Why**
SUS scores range from 0 to 100, and testing rounds or participant counts do not change that scale. A score above the maximum may make a reader doubt the measurement and the other reported results.

**How to change it**
Replace “104” with [the verified standard SUS score]. If 104 is from a different scale, name that scale instead.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
1. [Error] An open card sort does not validate whether users can find items in a particular navigation.
2. [Important] The line does not say what the card sort revealed or what changed as a result.
3. [Polish] “Before it shipped” is unnecessary timing detail after the validation claim.

**Why**
1. An open card sort reveals how participants group and label content; it does not test findability in a designed navigation. Calling it validation overstates what the method established.
2. A reader cannot tell whether the research uncovered a problem, confirmed a decision, or affected the shipped design. That leaves the contribution and value of the research unclear.

**How to change it**
1. Say the open card sort informed the navigation’s information architecture. If you ran a tree test or usability test, name that method as the findability validation; otherwise, remove the validation claim.
2. Replace “Validated ... findability” with [the key card-sort finding and, if accurate, the navigation change it informed].

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Polish] “On timed route-finding tasks” is wordy and less direct than describing the test as timed route-finding tasks.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
1. [Error] The change from 90 to 60 seconds is a 33.3% reduction, not a 50% improvement.
2. [Important] “A 50% improvement” repeats the time reduction and adds no new information.

**Why**
1. The decrease is 30 seconds out of the original 90 seconds. A 50% reduction would mean a median time of 45 seconds, so the stated percentage conflicts with the figures.
2. The 90-to-60-second figures already show that route-finding time fell. Keeping a percentage alongside them adds clutter, and the current percentage is also incorrect.

**How to change it**
1. Replace “a 50% improvement” with “a 33.3% reduction” or “about 33% faster.”
2. Cut “a 50% improvement.”

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
1. [Important] The agency invitation is the strongest outcome, but it follows a long clause, and “openly” is redundant.
2. [Polish] The line does not say what the agency review covered or what followed from the invitation.

**Why**
1. A reader encounters the publication detail before the more distinctive agency invitation. Leading with the invitation gives the outcome prominence; “published” already conveys that the materials were made public.

**How to change it**
1. Move the agency invitation to the start of the line and cut “openly.”

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Conducted user interviews and created wireframes for a free clinic’s online booking flow.

**Problem**
[Important] The line names the interviews and wireframes but not the redesign’s outcome or evidence.

**Why**
A reader can see what work you did, but cannot tell whether booking became easier or more successful. A result and comparison would demonstrate the value of the work.

**How to change it**
Add the clearest outcome and, if available, [a compact comparison, such as the booking completion rate before and after the redesign].

> Recruited 10 clinic patients and ran two rounds of hallway testing, fixing the six issues that stopped first-time users from finishing a booking.

**Problem**
1. [Polish] “Hallway testing” is team-specific jargon that may be unclear outside the field.
2. [Polish] “The six issues that stopped first-time users from finishing a booking” is wordy.

## Already working

- s2:e0:b2: Gives a clear time comparison that demonstrates the value of the templates.
- s3:e1:b2: Shows the work continued to be used after the project and supported a specific addition to the booking pages.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-8fd1f8b2.md.

