> Here is my resume: bench/planted-defects/tests-final/b1-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all four experience and project entries for content and wording, plus the resume’s overall narrative and PDF format. The two education entries have no bullets to review. No job-description match was run because you haven’t provided a posting.

The three changes to tackle first are:

1. **Verify the technical and numerical claims.** The reviews flagged PNG-to-WebP conversion as an unlikely explanation for a smaller *JavaScript bundle*, lazy-loading a visible hero image as an unlikely cause of faster LCP, and incorrect percentage descriptions in the transit app bullets.
2. **Resolve the Library Room Booking conflict.** Its heading says Vue, while a bullet says React and TypeScript. Clarify which you used and what you personally built; otherwise, consider cutting or compressing this older project.
3. **Tighten the story.** The internship has six bullets; the narrative review suggests focusing it on the strongest work. Also fix “Storybok,” use past tense for the ended university role, and substantiate or remove Angular from Skills.

The PDF parses cleanly. The full review and per-bullet findings are in `/report --full`.

> /report
# Review: resume.pdf

**88/100** — format 100 · content 81 · wording 86 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 4 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Library Room Booking

**Problem**
[Important] Library Room Booking takes more space than its contribution to the résumé’s frontend story warrants.

**Why**
The newer transit app and internship provide stronger accounts of frontend work. Giving the older hackathon three bullets makes them compete for attention with those entries.

**How to change it**
Cut the Library Room Booking entry, or compress it to one line.

> Jun 2023

**Problem**
[Polish] The résumé leaves the period between the B.S. ending in June 2023 and the Web Developer role starting in April 2024 largely unaccounted for.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Error] The phrase “raising bookings per search 9%” is missing “by” before the percentage.

**Why**
The missing word makes an otherwise strong measured result read like an editing error. It interrupts the reader where the A/B-test outcome should be clearest.

**How to change it**
Add “by” before “9%.”

> Cut the booking flow’s JavaScript from 410 KB to 260 KB by code-splitting the calendar and map widgets.

**Problem**
[Polish] The JavaScript reduction does not say whether the smaller payload changed the booking experience.

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma in “deferring the analytics script, raised” incorrectly separates the compound subject from its verb.
2. [Important] The long methods list buries the Lighthouse score change.

**Why**
1. The four actions together form the subject of “raised.” The comma makes the sentence stumble just before its Lighthouse result.
2. A reader must get through four implementation details before reaching the improvement from 52 to 91. Leading with that result would make the impact easier to find on a quick scan.

**How to change it**
1. Remove the comma after “script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” ahead of the methods list, then place the existing methods after it.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The line incorrectly credits the LCP reduction to lazy-loading the hero image.

**Why**
A hero image visible on initial load is typically an LCP candidate, and lazy-loading it normally delays its request rather than making it paint sooner. The figures may be real, but this explanation makes a technically informed reader doubt what caused the improvement.

**How to change it**
If the reduction was measured, replace that phrase with [the change that actually caused the LCP reduction] after checking [the before-and-after LCP elements and other changes made]. Otherwise, remove the claim that lazy-loading the hero caused the drop from 4.1s to 1.2s.

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
[Polish] The line says designers could use the documentation but does not show that they did.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP does not ordinarily reduce a JavaScript bundle by 60%.

**Why**
Images are normally served as separate assets, so “JavaScript bundle” and “PNG images” appear to describe different things. Unless the images were embedded in the bundle, the mismatch makes the measured result hard to trust.

**How to change it**
Replace “JavaScript bundle” with [the asset or transfer-size metric actually measured]. Keep “JavaScript bundle” only if the converted images were embedded in it.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The phrase “the findings led to a preview mode” obscures whether you designed, built or only proposed the mode.
2. [Polish] The reduction in broken-page reports is buried late in the bullet.
3. [Polish] This measured preview-mode bullet is not the opening bullet of the entry.

**Why**
1. A reader cannot tell whether your contribution ended with the eight interviews or included the change associated with fewer broken-page reports. That uncertainty weakens the connection between your work and the result.

**How to change it**
1. Replace that phrase with [your precise role in the preview-mode change]; if accurate, “used the findings to build a preview mode” is one option.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Important] “Writes” incorrectly uses present tense for a role that ended in August 2024.
2. [Polish] The checklist is not specific enough to show which accessibility requirements it covered.

**Why**
1. The present tense implies that you still maintain the checklist despite the entry’s end date. That inconsistency makes the timing of the work unclear.

**How to change it**
1. If the work ended with the role, replace “Writes” with “Wrote.”

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] “Showing live bus arrivals” does not explain how arrival data reaches the app.

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
1. [Error] The drop from 3.0s to 1.5s is a 50% reduction, not a 75% improvement.
2. [Polish] “Cold-start time” does not identify what had finished loading at 1.5s.

**Why**
1. The decrease is 1.5 seconds, which is half the original 3.0 seconds. An incorrect percentage makes the otherwise clear timing result look unreliable.

**How to change it**
1. Replace “a 75% improvement” with “a 50% reduction.”

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
1. [Error] A rise from 30% to 40% is a 10-percentage-point increase, not a 10% increase.
2. [Polish] “Weekly returning riders” sounds like a count, although the figures describe a rate.

**Why**
1. Ten percent of the original 30% would not produce 40%; the relative increase is about 33%. Using “10%” makes the reported change mathematically inconsistent.

**How to change it**
1. Replace “by 10%” with “by 10 percentage points.”

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The entry’s Vue heading conflicts with the bullet’s claim that the booking flow used React and TypeScript.
2. “Worked on the frontend of the booking flow” does not say what you completed.

**Why**
1. A reader cannot tell which framework was used for this work, or whether both had distinct roles. That uncertainty undermines the technical description of the project.
2. The phrase establishes participation but leaves your particular contribution unclear. A reader cannot tell which part of the flow to credit to you.

**How to change it**
1. Correct “Vue” in the heading or “React and TypeScript” in the bullet to reflect [the technologies actually used]. If both were used, briefly distinguish their roles.
2. Replace “Worked on the frontend of” with [a specific verb and the frontend work you completed].

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. “Its tests” does not establish whether the overlapping-booking and time-zone cases were verified.
2. “Handling overlapping bookings and time-zone changes” does not say what the calendar did in those cases.

**Why**
1. The bullet names challenging cases, but it does not connect them specifically to the tests. A reader cannot tell whether those cases were tested or only handled in the component.
2. Those are meaningful booking problems, but “handling” leaves the component’s behavior unspecified. A reader cannot assess what the implementation accomplished.

**How to change it**
1. If accurate, replace “its tests” with [the tests that verified the overlapping-booking and time-zone cases]. Otherwise, keep the test claim separate from those cases.
2. Replace “handling” with [what the calendar actually did for overlapping bookings and time-zone changes].

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
The project description stops at the demo and code handover.

**Why**
Presenting to staff and supplying setup notes show a completed handoff, but not what happened afterward. A reader cannot tell whether the library used the project.

**How to change it**
If known, add [what happened after the handover]. Otherwise, retain the handover as the endpoint without suggesting later use.

## Already working

- s2:e1:b3: Pairs a specific implementation approach with a concise, measured improvement.
- s2:e0:b2: Pairs specific accessibility changes with a clearly scoped audit result.

## Set aside (7)

7 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-c4dae28a.md.

