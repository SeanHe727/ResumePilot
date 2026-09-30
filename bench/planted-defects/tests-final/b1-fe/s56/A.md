> Here is my resume: bench/planted-defects/tests-final/b1-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Coverage: Content and wording specialists reviewed all 4 eligible experience/project entries; narrative and format reviews ran. Education entries had no bullets to review, and job-description matching did not run because no posting was provided.

Top changes:

1. **Correct credibility issues in metrics and technology**
   - Resolve the Library Room Booking conflict: the heading says Vue, while a bullet says React and TypeScript.
   - Correct the transit app’s 3.0s-to-1.5s claim to a 50% reduction.
   - Describe the 30%-to-40% return-rate change as 10 percentage points.
   - Recheck claims linking WebP conversion to JavaScript bundle size and lazy-loading the hero image to improved LCP.

2. **Strengthen ownership and evidence**
   - The hackathon entry needs clearer individual contributions, testing details, and what happened after handoff.
   - Specify the accessibility audit tool or standard.
   - Clarify ambiguous measurements such as “900 riders,” cold-start completion point, and search time.
   - Replace indirect phrasing such as “worked on” and “the findings led to” with the actual action taken, where supported.

3. **Fix consistency and tighten the story**
   - Correct “Storybok” to “Storybook.”
   - Either support Angular in an entry or remove it from Skills.
   - Change “Writes” to past tense and fix the missing “by” in “raising bookings per search 9%.”
   - Consider removing the weaker Storybook documentation bullet and reordering entries so the strongest outcomes lead.

The file is one page and parses cleanly for ATS use. The complete findings and entry-by-entry plan are available in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 78 · wording 91 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

10 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sep 2019 - Jun 2023

**Problem**
[Polish] The dates leave nine months between the B.S. ending in June 2023 and the university web role beginning in April 2024 with no study or work listed.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Error] “Raising bookings per search 9%” is grammatically incorrect because it is missing the preposition “by.”

**Why**
Without the preposition, the quantified result reads as an editing error in an otherwise strong opening bullet. That small mistake can distract a reader from the A/B-tested booking improvement.

**How to change it**
Insert “by” before “9%.”

> Cut the booking flow’s JavaScript from 410 KB to 260 KB by code-splitting the calendar and map widgets.

**Problem**
1. [Error] Code-splitting does not cut the booking flow’s total JavaScript from 410 KB to 260 KB; it changes how much is loaded initially.
2. [Important] “Cut the booking flow’s JavaScript from 410 KB to 260 KB” reports a technical proxy without showing its user-facing consequence.

**Why**
1. The calendar and map code still exists in separate chunks and may be downloaded when those widgets are used. Calling this a reduction in total JavaScript overstates what the method accomplished and may make a technical reader distrust the figures.
2. A reader can see that the initial payload became smaller but cannot tell whether the change improved loading, responsiveness, or booking completion. That leaves the practical value of the optimization unproven.

**How to change it**
1. Replace “JavaScript” with “initially loaded JavaScript” so the metric accurately describes the effect of code-splitting.
2. After “calendar and map widgets,” add [the observed change in booking-flow load time, interaction time, or another measured user outcome compared with the previous version].

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] “The audit” does not identify the accessibility tool, standard, or scope behind the 14 issues.

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma in “deferring the analytics script, raised” incorrectly separates the compound subject from its verb.
2. [Important] The 52-to-91 Lighthouse result is buried after a long list of implementation details.

**Why**
1. The listed optimization actions collectively form the subject of “raised,” so no comma belongs between them. The punctuation interrupts the sentence and makes the result momentarily harder to parse.
2. A scanning reader encounters four methods before reaching the bullet’s strongest information. Leading with the result would make the scale of the performance improvement visible immediately.

**How to change it**
1. Remove the comma after “script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” to the opening, then place the existing methods after “by.”

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Adding loading="lazy" to the hero image cannot credibly be credited with reducing largest contentful paint from 4.1s to 1.2s.

**Why**
The hero image is commonly the LCP element, and lazy-loading delays its request rather than accelerating it. A technical reader is likely to challenge the causal claim because an LCP image should ordinarily load eagerly, potentially with high fetch priority or preloading.

**How to change it**
Replace “adding loading="lazy" to the hero image” with [the actual optimization responsible for the measured LCP reduction]. If no optimization was isolated, remove the causal attribution.

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
[Polish] “Designers could check spacing and color values without asking engineers” claims a benefit without evidence of adoption or reduced interruptions.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP reduces image or total transferred bytes, not the JavaScript bundle.

**Why**
Separately served images are static assets and are not part of a JavaScript bundle. Unless the images were embedded in JavaScript, the current terminology is technically wrong and may undermine confidence in the reported 60% reduction.

**How to change it**
Replace “JavaScript bundle” with “[image payload or total transferred bytes].” If the images were embedded in JavaScript, state that explicitly instead.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] “The findings led to a preview mode” obscures whether you designed, built, or only recommended the feature.
2. [Important] The bullet with the reduction from 30 to 6 broken pages is the entry’s strongest line but is not placed first.

**Why**
1. The passive construction disconnects your interviews from the implementation and its reduction in broken-page reports. A hiring manager therefore cannot determine how much of the feature and result belongs to you.
2. This line combines user research, product action, and a substantial measured outcome, while the current opening bullet contains a technically incorrect asset claim. Leaving the stronger evidence second weakens the entry’s first impression.

**How to change it**
1. Replace “the findings led to” with “used the findings to [design, build, or recommend].” If accurate, “used the findings to build” makes implementation ownership explicit.
2. Move this bullet to the first position within the Westfield State University role.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Error] “Writes” uses the wrong tense for an ended role, and writing a checklist alone cannot be credited with reducing failed audits.
2. [Polish] “Accessibility checklist” is too general to show which standard or technical requirements guided the work.

**Why**
1. The Apr–Aug 2024 dates require past tense. Audit failures can decline when a checklist is adopted and used to remediate pages, not merely because the document was written, so the current wording overstates the causal link.

**How to change it**
1. Replace “Writes” with “Wrote” and add “[implemented or rolled out]” if that occurred. If implementation or adoption was not established, remove or soften the claim that the checklist reduced failed audits from 12 to 2 per semester.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not identify whether the 4-to-under-1-second improvement measures response latency, results rendering, or total task time.

**Why**
Those metrics represent different technical and user outcomes. Without naming what was timed, a reader cannot interpret or reproduce the performance result.

**How to change it**
Replace “search time” with [the specific measure used], such as “median results-render time” or “search-response latency” if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] “About 900 riders a week” does not define whether the figure represents unique users, sessions, or another analytics measure.
2. [Polish] “Showing live bus arrivals” does not explain how the application obtains or updates its arrival data.

**Why**
1. Without a precise unit or source, the reader cannot tell exactly what the adoption number measures. That ambiguity weakens an otherwise useful indication of project usage.

**How to change it**
1. Replace “riders” with the accurate unit, such as “weekly active users” if accurate, and identify [the analytics source or counting method].

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
1. [Error] Reducing cold-start time from 3.0s to 1.5s is a 50% reduction, not “a 75% improvement.”
2. [Polish] “Cold-start time” does not specify the performance milestone measured at 1.5 seconds.

**Why**
1. The reduction is 1.5 seconds against a 3.0-second baseline, which equals 50%. The incorrect calculation is easy to check and can make a reader question the reliability of other metrics.

**How to change it**
1. Replace “a 75% improvement” with “a 50% reduction.”

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
1. [Error] Moving a rate from 30% to 40% is an increase of 10 percentage points, not “by 10%.”
2. [Important] “Weekly returning riders” names a group of people even though the 30% and 40% figures describe a rate.
3. [Important] “In the first month, from 30% to 40%” omits both the baseline comparison period and the rule for classifying a rider as returning.
4. [Polish] “By adding saved stops” names the feature but not the technical mechanism used to implement it.

**Why**
1. A 10% relative increase from the original 30% would produce 33%, not 40%. The current wording confuses percentage-point and relative change, making the retention result mathematically incorrect.
2. The mismatch makes the metric sound like a count and a percentage at the same time. Using the rate’s proper name would let the reader understand the figures immediately.
3. Return rates depend heavily on cohort and time-window definitions. Without one compact anchor for each, the reader cannot judge whether the before-and-after figures are comparable.

**How to change it**
1. Replace “by 10%” with “by 10 percentage points.”
2. Replace “weekly returning riders” with “weekly rider return rate.”
3. Clarify that the first month is compared with [baseline period], and define the rate using [return window or cohort rule].

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] “Using React and TypeScript” conflicts with the project heading’s “Vue” framework attribution.
2. [Important] “Worked on” uses bystander language and does not identify the feature you owned or what it enabled.

**Why**
1. The inconsistency makes the actual frontend stack and your experience with each framework uncertain. A reader may question whether the heading, the bullet, or both are inaccurate.
2. A hiring manager cannot distinguish substantial product ownership from general assistance on the interface. The vague construction therefore understates both your contribution and its value.

**How to change it**
1. Correct either “React and TypeScript” or “Vue” to the stack actually used. If both frameworks were used, state their distinct roles using [brief architecture detail].
2. Replace “Worked on the frontend of the booking flow” with a direct verb such as “Built” or “Implemented,” followed by [the specific booking-flow feature owned] and [what it enabled or improved].

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Error] “Time-zone changes” uses nonstandard hyphenation.
2. [Important] The calendar component and testing bullet is the entry’s strongest line but is not placed first.
3. [Polish] “Handling overlapping bookings and time-zone changes” lists supported cases without saying what the implementation verified or prevented.
4. [Polish] “Its tests” does not identify the testing approach or technical mechanism used to validate the calendar.

**Why**
1. “Time zone” is an open compound in this context. Correcting it removes a visible copy-editing error from a technically substantive bullet.
2. It identifies a concrete component, testing work, and difficult booking cases, whereas the opening line uses vague “Worked on” language. Leading with the calendar bullet would give the project a stronger first impression.

**How to change it**
1. Replace “time-zone changes” with “time zone changes.”
2. Move this bullet to the first position within the Library Room Booking entry.

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Polish] “Presented the demo to the library staff and handed over the code” stops at delivery without stating what followed.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled.

**Why**
The product’s correct name is “Storybook.” A misspelled tool name in the Skills section creates an avoidable accuracy problem, especially because Storybook also appears correctly in the experience section.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular appears in Skills, but no experience or project entry shows where you used it.

**Why**
A reader cannot connect the listed framework to checkable work elsewhere in the résumé. That can make the skill look unsupported or invite questions about the actual depth of your experience.

**How to change it**
Add Angular usage to [the relevant experience or project entry] if it was used there; otherwise remove “Angular” from Skills.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-20df95a6.md.

