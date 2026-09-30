> Here is my resume: bench/planted-defects/tests-final/b1-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries for content and wording, plus the resume’s overall narrative and formatting. The education entries have no bullets to review; no job description was provided for a targeting comparison.

The main changes to address:

- **Resolve accuracy and consistency issues:** the Library Room Booking project is labeled Vue but its bullet says React and TypeScript. In the university IT role, clarify how converting images to WebP relates to the claimed JavaScript-bundle reduction.
- **Check metric claims:** the transit app’s 3.0s-to-1.5s change does not support a 75% improvement, and “by 10%” is unclear for a change from 30% to 40%. Also, verify the claim that lazy-loading the hero image improved LCP.
- **Improve the overall presentation:** put Experience before Education, account for the June 2023–April 2024 gap if relevant, and check whether Angular belongs in Skills. Correct “Storybok” to “Storybook.”

The file is one page, parses cleanly, and has no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 8 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Frontend Engineering Intern

**Problem**
[Important] Education appears before Experience, so the relevant web-development work does not lead the résumé.

**Why**
A reader scanning for relevant experience reaches the education entries first. Moving the work history earlier would put the web-development experience in view sooner.

**How to change it**
Move the Experience section above Education.

> Jun 2023; Apr 2024

**Problem**
[Polish] The dates leave about nine months with no study or work listed from June 2023 to April 2024.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
[Important] The gerund list is the subject of “raised,” making the actions awkward to read and delaying the result.

**Why**
A reader has to work through four methods before reaching the score change, so the main impact is easy to miss while scanning. The construction also makes it less clear that you carried out the optimizations.

**How to change it**
Move “raised the checkout page’s Lighthouse performance score from 52 to 91” to the start, then keep only the one or two methods that best show your contribution and connect them with “by.”

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] If the hero image is the LCP element, lazy-loading it can delay its fetch and does not explain the claimed LCP improvement.

**Why**
A reader familiar with web performance may question the cause because lazy-loading can postpone the LCP image’s fetch. Without another change to explain the drop from 4.1s to 1.2s, the result may seem technically implausible.

**How to change it**
If the hero image was prioritized or another change improved LCP, name that change; if not, remove the causal claim.

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
1. [Important] The line states an intended benefit of the Storybook documentation but gives no evidence that designers used it or that it reduced requests.
2. [Polish] “Without asking engineers” is a wordy add-on because the preceding phrase already says designers could check the values themselves.

**Why**
1. A reader cannot tell whether the documentation changed how designers worked. Without an adoption or support-request measure, the benefit remains an assertion rather than a demonstrated outcome.

**How to change it**
1. Add one evidence point after this phrase, such as [number of designers who used the tokens] or [change in engineer requests].

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNGs to WebP cannot, by itself, reduce a JavaScript bundle because image assets are not JavaScript code.

**Why**
WebP conversion can reduce image file size, but it does not explain a 60% change in the JavaScript bundle. A reader may doubt the metric or the stated cause, weakening confidence in the result.

**How to change it**
If the 60% figure is for image payload, replace “JavaScript bundle” with “image payload”; otherwise name the JavaScript optimization that produced the reduction.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The line opens with the editor interviews rather than the stronger preview-mode result.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Error] “Writes” is present tense in a role dated April–August 2024; use past tense for work completed during that role.

**Why**
The present-tense verb conflicts with the dates, which show a completed position. A reader may be unsure whether the checklist work is ongoing or when it happened.

**How to change it**
Replace “Writes” with “Wrote” if the checklist work was completed during this role.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
1. [Important] “Search time” does not identify what was timed.
2. [Important] “Under 1” omits the unit, so the endpoint is not clear.

**Why**
1. A reader cannot tell whether the figures measure page response, result display, or how long a user takes to find a result. Without that definition, the comparison is harder to interpret.
2. The starting figure is in seconds, but the ending figure does not say whether it uses the same unit. A reader should not have to infer that the search fell to under one second.

**How to change it**
1. Replace “search time” with [what was timed, such as result display or user task completion], if accurate.
2. Replace “under 1” with “under 1 second.”

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] The line gives no source or integration for the live bus arrivals.
2. [Polish] “About 900” makes the weekly rider count imprecise.

**Why**
1. A reader can see what the app displays but not how it obtains the arrival data. Naming the data source or integration would make the technical contribution easier to assess.

**How to change it**
1. Add the [arrival-data source or integration used] after the feature description, if it demonstrates your work.

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
[Error] The drop from 3.0s to 1.5s is a 50% reduction, not a 75% improvement.

**Why**
The time fell by 1.5 seconds from a 3.0-second baseline, which is half the original time. The stated percentage conflicts with the before-and-after figures and can undermine confidence in the metric.

**How to change it**
Replace “a 75% improvement” with “a 50% reduction” or “cut the time in half.”

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
[Error] The change from 30% to 40% is 10 percentage points, not 10%.

**Why**
The figures show a rise of 10 percentage points; “10%” can instead be read as a relative increase, which would be about 33% from the 30% baseline. The reader should not have to work out which measure you mean.

**How to change it**
Replace “by 10%” with “by 10 percentage points” if that is the intended measure; if you intend the relative increase, use “by about 33%.”

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The heading says Vue, but the bullet says the booking-flow frontend used React and TypeScript, leaving the framework claims in conflict.
2. [Important] “Worked on the frontend” does not identify what you built or changed.

**Why**
1. React and Vue are different UI frameworks, and TypeScript does not reconcile the difference. A reader cannot tell which framework the project used, making the technical context unreliable.
2. The line names a general area of work but gives no specific contribution or result. A reader cannot distinguish a substantial feature from a limited involvement.

**How to change it**
1. If the booking flow used React, update the heading; if it used Vue, correct the bullet; if both were used, specify which parts used each framework.
2. Replace “Worked on the frontend of the booking flow” with [the specific feature or result it delivered], if accurate.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The line names edge cases but does not say what the component or tests achieved.
2. [Polish] The calendar-component bullet should appear before the earlier, less specific project bullet.

**Why**
1. A reader can see that overlapping bookings and time-zone changes were considered, but cannot tell whether the implementation worked reliably or what it improved. An outcome or test result would make the contribution more credible.

**How to change it**
1. Add [a test outcome or defect prevented, measured against a stated baseline] after this phrase, if available.

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Polish] The line does not say what came of the demo or code handover.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
A spelling error in a tool name can make the skills list look unproofread and may leave a reader unsure which tool you mean.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Polish] Angular is listed under Tools, but no entry shows or plausibly requires its use.

## Already working

- s2:e0:b0: Connects a technical change to both a performance result and a business outcome.
- s2:e0:b1: Makes the size reduction concrete with a clear before-and-after comparison.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-e5ec983c.md.

