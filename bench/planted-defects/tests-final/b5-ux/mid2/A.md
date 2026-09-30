> Here is my resume: bench/planted-defects/tests-final/b5-ux/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four entries with bullets for content and wording, plus the resume’s overall narrative and format. Education has no bullets to review. I didn’t run a job-description match because no posting was provided.

The main changes to address:
- **Verify the figures and claims:** the review flagged a System Usability Scale score of 104 as invalid and the transit-map claim of a “50% improvement” for a change from 90 to 60 seconds as mathematically inconsistent. Clarify the basis for the 40% completion increase and 30% support-call reduction.
- **Make outcomes and methods clearer:** add results to the Northwind survey/dashboard and clinic-booking research bullets. Clarify what the open card sort established, and how the synthesis work relates to the support-call reduction.
- **Reorder and clean up:** put Experience before Education and list Pinegrove before Northwind. The format check also flagged personal details and a first-person pronoun; the file itself parses cleanly for ATS.

The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**87/100** — format 100 · content 80 · wording 84 · narrative 83

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 4 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Date of birth: 3 Mar 1997

**Problem**
[Error] Personal details that readers are not meant to weigh by convention are included.

**Why**
Date of birth and nationality do not help a reader assess the candidate’s research experience or results. Including them uses space for information unrelated to the résumé’s professional evidence.

**How to change it**
Remove the date of birth and nationality details.

> Lakeshore University | B.A. in Cognitive Science

**Problem**
[Important] Experience is listed after Education, delaying the professional trajectory.

**Why**
A reader sees the degree before the candidate’s work history. Moving Experience first would make the professional progression visible sooner.

**How to change it**
Move the Experience section ahead of Education.

> Northwind Health | UX Research Associate

**Problem**
[Important] The Experience entries are not in newest-first order.

**Why**
Northwind, dated 2019–2022, appears above Pinegrove, dated 2022–2025. That reverses the chronology and makes the most recent role less immediate to a reader.

**How to change it**
Move the Pinegrove Financial entry above the Northwind Health entry.

## Northwind Health | UX Research Associate | Metro City, USA | Jul 2019 - Feb 2022

> Owned the monthly patient survey and the reporting dashboard the care teams used.

**Problem**
1. [Important] The survey and dashboard are presented as responsibilities without an outcome, and “Owned” does not name an action.
2. [Polish] “the care teams used” is low-value context that can be removed.

**Why**
1. A reader can see what you were responsible for, but not what the survey or dashboard helped accomplish. That makes the value of this work hard to assess, while the responsibility framing obscures what you actually did.

**How to change it**
1. Replace “Owned” with [specific action taken with the survey or dashboard], and add [decision or outcome enabled] if you can substantiate it.

> Interviewed 40 patients about appointment reminders; my findings led to a two-way text reminder that cut missed appointments from 14% to 9%.

**Problem**
[Important] This is the strongest Northwind bullet, but it is not first, and “my findings” uses a first-person pronoun.

**Why**
A reader scanning the role encounters a responsibility-focused bullet before this clear research-to-outcome result. The pronoun also breaks the résumé’s phrase-based style and draws attention to the author rather than the findings.

**How to change it**
Move this bullet to the start of the Northwind entry and replace “my findings” with “the findings.”

> Tested the telehealth waiting-room screens with 16 older patients; the revised layout cut support calls about joining a video visit by 30%.

**Problem**
[Important] The 30% reduction in support calls has no stated comparison period or reference point.

**Why**
A reader cannot tell what the percentage is compared against, so the size and basis of the result are hard to interpret. That makes the impact less convincing.

**How to change it**
Add [period or baseline used to calculate the reduction] after the result.

## Pinegrove Financial | Senior UX Researcher | Metro City, USA | Mar 2022 - Jun 2025

> Improved dispute-form completion by 40% by splitting the form into three short steps with saved progress.

**Problem**
[Important] The 40% change in dispute-form completion is not identified as a relative increase or a percentage-point change.

**Why**
A reader cannot tell whether completion rose by 40% relative to its prior rate or by 40 percentage points. The ambiguity makes the size of the improvement difficult to judge.

**How to change it**
Clarify whether the increase was relative or in percentage points; if needed, add [baseline] and [post-change rate].

> Ran 18 moderated usability sessions a quarter from a recruiting panel of 400 customers, so every major release was tested with real account holders before launch.

**Problem**
[Polish] “so every major release was tested” uses a conversational connector and emphasizes a passive result instead of your action.

> Synthesizing 60 interviews, 400 survey responses and 18 months of support tickets through affinity mapping, journey mapping and a tagged clip library, cut repeat support calls about statements by 23%.

**Problem**
1. [Error] The bullet wrongly credits qualitative synthesis methods with measuring a 23% reduction in support calls.
2. [Error] “Synthesizing” conflicts with the past-tense “cut” in a role that ended in June 2025.
3. [Important] The 23% result is buried under a long list of inputs and methods.

**Why**
1. Affinity mapping, journey mapping and a clip library organize and interpret research findings; they cannot establish a reduction in call volume. The claimed reduction requires support-call outcome data and an appropriate comparison, so the current causal claim risks undermining trust in the result.
2. The opening reads as ongoing work, while the result describes a completed action. That tense shift can make the timing of the work unclear.
3. A scanning reader encounters the interviews, survey responses, tickets and methods before reaching the outcome. That delays the clearest statement of value and makes the bullet harder to scan.

**How to change it**
1. If a separate analysis of support-call data established the reduction, describe that analysis and its comparison; otherwise remove the 23% claim or state only what the synthesis found.
2. Replace “Synthesizing” with “Synthesized.”
3. Move the result to the start of the bullet, then keep the most relevant research input and one method that shows your skill.

> Raised the onboarding flow’s System Usability Scale score from 68 to 104 across two rounds of moderated testing with 20 customers.

**Problem**
[Error] A standard System Usability Scale score cannot be 104.

**Why**
The SUS scale ranges from 0 to 100, so 104 is not a valid standard SUS score. As written, either the reported figure or the named measure is incorrect, which makes the result unreliable.

**How to change it**
Replace “104” with [correct SUS score], if available; otherwise identify the different measure used.

> Validated the redesigned app navigation’s findability with an open card sort of 30 customers before it shipped.

**Problem**
[Error] An open card sort does not directly validate findability, and the bullet does not say what the sort found.

**Why**
An open card sort shows how participants group and label content, which can inform navigation structure; it does not test whether users can find items in the redesigned navigation. Without the sort’s finding or the change it informed, a reader also cannot tell what the research established.

**How to change it**
Say the card sort informed the navigation structure and add [what it showed or changed]. Claim findability validation only if you also conducted a task-based test, such as usability testing or tree testing.

## Accessible Transit Map | Independent Project | Figma | Sep 2024 - Present

> Redesigned a city transit map for screen-reader and low-vision riders, and tested it with 12 participants on timed route-finding tasks.

**Problem**
[Important] The timed route-finding test is described without a result.

**Why**
A reader can see that the map was evaluated with 12 participants, but not what the test showed. Without an outcome or comparison, the evaluation does not establish whether the redesign helped riders.

**How to change it**
Add [clearest test outcome and comparison with the prior map], if available.

> Cut median route-finding time from 90 to 60 seconds, a 50% improvement, by adding audio landmarks and high-contrast line colors.

**Problem**
[Error] The decrease from 90 to 60 seconds is a 33.3% reduction, not a 50% improvement.

**Why**
The decrease is 30 seconds from a 90-second baseline, which is 33.3% of the baseline. The incorrect percentage overstates the result and may make a reader question the accuracy of the other figures.

**How to change it**
Replace “a 50% improvement” with “a 33.3% reduction in median route-finding time.”

> Published the design files and test protocol openly, and the city’s transit agency invited the project to its spring accessibility review.

**Problem**
1. [Important] The agency’s invitation is given without saying what it led to.
2. [Polish] The clipped opening leaves the publisher implicit and makes the shift to the agency harder to follow.

**Why**
1. The invitation signals interest, but a reader cannot tell whether you presented the work, took part in the review or influenced a decision. Without that status or result, the significance of the invitation is difficult to judge.

**How to change it**
1. Add [review status or result], such as whether you presented the design or received feedback; state a specific outcome only if accurate.

## Community Clinic Booking Redesign | Volunteer, Team of 3 | Figma | Mar 2023 - Aug 2023

> Conducted user interviews and created wireframes for a free clinic’s online booking flow.

**Problem**
[Important] The interview scope or a concrete research finding is missing, and the wireframes are not linked to a booking problem or change.

**Why**
Without an interviewee count or finding, a reader cannot gauge the research scope or see what evidence informed the design. The wireframes are named as a deliverable, but not connected to a problem they addressed or a result for clinic patients.

**How to change it**
Add [number of patients interviewed] after “user interviews” and, if space allows, [finding and booking problem it surfaced] plus [how the wireframes addressed it].

> Wrote the clinic’s volunteer handbook for maintaining the booking pages, which two later volunteer teams used to add Spanish-language booking.

**Problem**
[Polish] The result that later volunteer teams used the handbook to add Spanish-language booking is buried after the handbook description.

## Already working

- s2:e1:b0: Connects a specific research effort to a clear post-launch product result.
- s3:e1:b1: Gives testing scale and number of rounds.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-68004e2d.md.

