# Full review: resume.pdf

**88/100** — format 100 · content 78 · wording 91 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

10 errors, 12 important, 10 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Sep 2019 - Jun 2023

**Problem**
[Polish] The dates leave nine months between the B.S. ending in June 2023 and the university web role beginning in April 2024 with no study or work listed. *(about 8 words)*

**Why**
A reader may wonder whether relevant employment, study, project work, or another activity is missing from that period. Leaving the interval unexplained can create an avoidable continuity question.

**How to change it**
Add [the relevant role, study, project, or other activity from June 2023 to April 2024] if there is one worth including. Otherwise be prepared to explain the interval rather than inventing an entry.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Error] “Raising bookings per search 9%” is grammatically incorrect because it is missing the preposition “by.” *(adds 1 word)*

**Why**
Without the preposition, the quantified result reads as an editing error in an otherwise strong opening bullet. That small mistake can distract a reader from the A/B-tested booking improvement.

**How to change it**
Insert “by” before “9%.”

*raised by wording*

> Cut the booking flow’s JavaScript from 410 KB to 260 KB by code-splitting the calendar and map widgets.

**Problem**
1. [Error] Code-splitting does not cut the booking flow’s total JavaScript from 410 KB to 260 KB; it changes how much is loaded initially. *(adds 2 words)*
2. [Important] “Cut the booking flow’s JavaScript from 410 KB to 260 KB” reports a technical proxy without showing its user-facing consequence. *(about 10 words)*

**Why**
1. The calendar and map code still exists in separate chunks and may be downloaded when those widgets are used. Calling this a reduction in total JavaScript overstates what the method accomplished and may make a technical reader distrust the figures.
2. A reader can see that the initial payload became smaller but cannot tell whether the change improved loading, responsiveness, or booking completion. That leaves the practical value of the optimization unproven.

**How to change it**
1. Replace “JavaScript” with “initially loaded JavaScript” so the metric accurately describes the effect of code-splitting.
2. After “calendar and map widgets,” add [the observed change in booking-flow load time, interaction time, or another measured user outcome compared with the previous version].

*raised by content*

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] “The audit” does not identify the accessibility tool, standard, or scope behind the 14 issues. *(about 3 words)*

**Why**
A reader cannot tell whether the count came from an automated scan, a WCAG review, or an internal checklist. That ambiguity makes the accessibility result harder to evaluate and weakens the evidence of relevant expertise.

**How to change it**
Replace “the audit” with [the audit tool, accessibility standard, or review scope used], retaining the count of 14.

*raised by content*

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma in “deferring the analytics script, raised” incorrectly separates the compound subject from its verb. *(no words)*
2. [Important] The 52-to-91 Lighthouse result is buried after a long list of implementation details. *(no words)*

**Why**
1. The listed optimization actions collectively form the subject of “raised,” so no comma belongs between them. The punctuation interrupts the sentence and makes the result momentarily harder to parse.
2. A scanning reader encounters four methods before reaching the bullet’s strongest information. Leading with the result would make the scale of the performance improvement visible immediately.

**How to change it**
1. Remove the comma after “script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” to the opening, then place the existing methods after “by.”

*raised by wording, content*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Adding loading="lazy" to the hero image cannot credibly be credited with reducing largest contentful paint from 4.1s to 1.2s. *(no words)*

**Why**
The hero image is commonly the LCP element, and lazy-loading delays its request rather than accelerating it. A technical reader is likely to challenge the causal claim because an LCP image should ordinarily load eagerly, potentially with high fetch priority or preloading.

**How to change it**
Replace “adding loading="lazy" to the hero image” with [the actual optimization responsible for the measured LCP reduction]. If no optimization was isolated, remove the causal attribution.

*raised by content*

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
[Polish] “Designers could check spacing and color values without asking engineers” claims a benefit without evidence of adoption or reduced interruptions. *(about 10 words)*

**Why**
The reader cannot tell whether designers used the Storybook documentation or whether engineer questions actually declined. Without that evidence, the line demonstrates documentation work but not the stated operational effect.

**How to change it**
Add either [the number of designers who used the documentation] or [the change in related engineer questions over a defined period compared with before].

*raised by content*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP reduces image or total transferred bytes, not the JavaScript bundle. *(no words)*

**Why**
Separately served images are static assets and are not part of a JavaScript bundle. Unless the images were embedded in JavaScript, the current terminology is technically wrong and may undermine confidence in the reported 60% reduction.

**How to change it**
Replace “JavaScript bundle” with “[image payload or total transferred bytes].” If the images were embedded in JavaScript, state that explicitly instead.

*raised by content*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] “The findings led to a preview mode” obscures whether you designed, built, or only recommended the feature. *(about 2 words)*
2. [Important] The bullet with the reduction from 30 to 6 broken pages is the entry’s strongest line but is not placed first. *(no words)*

**Why**
1. The passive construction disconnects your interviews from the implementation and its reduction in broken-page reports. A hiring manager therefore cannot determine how much of the feature and result belongs to you.
2. This line combines user research, product action, and a substantial measured outcome, while the current opening bullet contains a technically incorrect asset claim. Leaving the stronger evidence second weakens the entry’s first impression.

**How to change it**
1. Replace “the findings led to” with “used the findings to [design, build, or recommend].” If accurate, “used the findings to build” makes implementation ownership explicit.
2. Move this bullet to the first position within the Westfield State University role.

*raised by content, wording, narrative*

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Error] “Writes” uses the wrong tense for an ended role, and writing a checklist alone cannot be credited with reducing failed audits. *(about 4 words)*
2. [Polish] “Accessibility checklist” is too general to show which standard or technical requirements guided the work. *(about 3 words)*

**Why**
1. The Apr–Aug 2024 dates require past tense. Audit failures can decline when a checklist is adopted and used to remediate pages, not merely because the document was written, so the current wording overstates the causal link.
2. Without the governing standard, the reader cannot interpret the scope of the checklist or the associated audit improvement. Naming it would provide clearer evidence of accessibility knowledge.

**How to change it**
1. Replace “Writes” with “Wrote” and add “[implemented or rolled out]” if that occurred. If implementation or adoption was not established, remove or soften the claim that the checklist reduced failed audits from 12 to 2 per semester.
2. Replace “accessibility checklist” with “[accessibility standard and conformance level] checklist”; if accurate, “WCAG 2.1 AA checklist” is more specific.

*raised by content, wording*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not identify whether the 4-to-under-1-second improvement measures response latency, results rendering, or total task time. *(about 2 words)*

**Why**
Those metrics represent different technical and user outcomes. Without naming what was timed, a reader cannot interpret or reproduce the performance result.

**How to change it**
Replace “search time” with [the specific measure used], such as “median results-render time” or “search-response latency” if accurate.

*raised by content*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] “About 900 riders a week” does not define whether the figure represents unique users, sessions, or another analytics measure. *(about 5 words)*
2. [Polish] “Showing live bus arrivals” does not explain how the application obtains or updates its arrival data. *(about 4 words)*

**Why**
1. Without a precise unit or source, the reader cannot tell exactly what the adoption number measures. That ambiguity weakens an otherwise useful indication of project usage.
2. The data integration is likely one of the project’s most relevant technical elements. Omitting it leaves an interviewer without a concrete indication of the feed, API, or update mechanism you implemented.

**How to change it**
1. Replace “riders” with the accurate unit, such as “weekly active users” if accurate, and identify [the analytics source or counting method].
2. Add “via [transit feed or API]” after “live bus arrivals.” Name [the update mechanism] too only if it adds a distinctive technical detail.

*raised by content*

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
1. [Error] Reducing cold-start time from 3.0s to 1.5s is a 50% reduction, not “a 75% improvement.” *(no words)*
2. [Polish] “Cold-start time” does not specify the performance milestone measured at 1.5 seconds. *(about 3 words)*

**Why**
1. The reduction is 1.5 seconds against a 3.0-second baseline, which equals 50%. The incorrect calculation is easy to check and can make a reader question the reliability of other metrics.
2. The timing might end at first render, usable content, interactivity, or another milestone, and those measurements are not interchangeable. Without that definition, the result is difficult to interpret or reproduce.

**How to change it**
1. Replace “a 75% improvement” with “a 50% reduction.”
2. Replace “cold-start time” with [the measured performance milestone], or add “measured as [milestone]” after it.

*raised by content, wording*

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
1. [Error] Moving a rate from 30% to 40% is an increase of 10 percentage points, not “by 10%.” *(adds 2 words)*
2. [Important] “Weekly returning riders” names a group of people even though the 30% and 40% figures describe a rate. *(adds 1 word)*
3. [Important] “In the first month, from 30% to 40%” omits both the baseline comparison period and the rule for classifying a rider as returning. *(about 8 words)*
4. [Polish] “By adding saved stops” names the feature but not the technical mechanism used to implement it. *(about 5 words)*

**Why**
1. A 10% relative increase from the original 30% would produce 33%, not 40%. The current wording confuses percentage-point and relative change, making the retention result mathematically incorrect.
2. The mismatch makes the metric sound like a count and a percentage at the same time. Using the rate’s proper name would let the reader understand the figures immediately.
3. Return rates depend heavily on cohort and time-window definitions. Without one compact anchor for each, the reader cannot judge whether the before-and-after figures are comparable.
4. For an independent project, one compact implementation detail would provide stronger evidence of technical ownership. As written, the line emphasizes the product result while leaving the engineering work opaque.

**How to change it**
1. Replace “by 10%” with “by 10 percentage points.”
2. Replace “weekly returning riders” with “weekly rider return rate.”
3. Clarify that the first month is compared with [baseline period], and define the rate using [return window or cohort rule].
4. After “saved stops,” add “persisted through [storage or synchronization mechanism]” if that mechanism demonstrates relevant skill.

*raised by content, wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] “Using React and TypeScript” conflicts with the project heading’s “Vue” framework attribution. *(no words)*
2. [Important] “Worked on” uses bystander language and does not identify the feature you owned or what it enabled. *(about 5 words)*

**Why**
1. The inconsistency makes the actual frontend stack and your experience with each framework uncertain. A reader may question whether the heading, the bullet, or both are inaccurate.
2. A hiring manager cannot distinguish substantial product ownership from general assistance on the interface. The vague construction therefore understates both your contribution and its value.

**How to change it**
1. Correct either “React and TypeScript” or “Vue” to the stack actually used. If both frameworks were used, state their distinct roles using [brief architecture detail].
2. Replace “Worked on the frontend of the booking flow” with a direct verb such as “Built” or “Implemented,” followed by [the specific booking-flow feature owned] and [what it enabled or improved].

*raised by content, wording, narrative*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Error] “Time-zone changes” uses nonstandard hyphenation. *(no words)*
2. [Important] The calendar component and testing bullet is the entry’s strongest line but is not placed first. *(no words)*
3. [Polish] “Handling overlapping bookings and time-zone changes” lists supported cases without saying what the implementation verified or prevented. *(about 7 words)*
4. [Polish] “Its tests” does not identify the testing approach or technical mechanism used to validate the calendar. *(about 2 words)*

**Why**
1. “Time zone” is an open compound in this context. Correcting it removes a visible copy-editing error from a technically substantive bullet.
2. It identifies a concrete component, testing work, and difficult booking cases, whereas the opening line uses vague “Worked on” language. Leading with the calendar bullet would give the project a stronger first impression.
3. The reader can identify the requirements but cannot tell whether the component reliably rejected conflicts, displayed times correctly, or achieved another checkable result. That leaves the robustness of the implementation unsubstantiated.
4. Without a test type or framework, a reader cannot assess the depth of the testing work. The omission also removes a useful technical detail that could prompt an interview discussion.

**How to change it**
1. Replace “time-zone changes” with “time zone changes.”
2. Move this bullet to the first position within the Library Room Booking entry.
3. Replace “handling” with a precise verified result, followed by [test coverage, number of validated edge cases, or observed booking outcome measured against prior behavior]. Also change “time-zone” to “time zone.”
4. Replace “its tests” with [test type or framework], retaining only the most technically revealing case it validated.

*raised by wording, narrative, content*

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Polish] “Presented the demo to the library staff and handed over the code” stops at delivery without stating what followed. *(about 7 words)*

**Why**
A demo and handoff carry more weight when the reader can see whether staff accepted, evaluated, adopted, or continued the project. Without that outcome, the line reports activity but not its effect.

**How to change it**
After “library staff,” add [their decision, feedback, adoption status, or another checkable outcome]. Keep “setup notes” only if they enabled [specific continuation or deployment].

*raised by content*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled. *(no words)*

**Why**
The product’s correct name is “Storybook.” A misspelled tool name in the Skills section creates an avoidable accuracy problem, especially because Storybook also appears correctly in the experience section.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

> Angular

**Problem**
[Important] Angular appears in Skills, but no experience or project entry shows where you used it. *(saves 1 word if removed)*

**Why**
A reader cannot connect the listed framework to checkable work elsewhere in the résumé. That can make the skill look unsupported or invite questions about the actual depth of your experience.

**How to change it**
Add Angular usage to [the relevant experience or project entry] if it was used there; otherwise remove “Angular” from Skills.

*raised by narrative*
