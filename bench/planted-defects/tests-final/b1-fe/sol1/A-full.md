# Full review: resume.pdf

**88/100** — format 100 · content 81 · wording 86 · narrative 79

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 4 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Library Room Booking

**Problem**
[Important] Library Room Booking takes more space than its contribution to the résumé’s frontend story warrants. *(saves about 50 words)*

**Why**
The newer transit app and internship provide stronger accounts of frontend work. Giving the older hackathon three bullets makes them compete for attention with those entries.

**How to change it**
Cut the Library Room Booking entry, or compress it to one line.

*raised by narrative*

> Jun 2023

**Problem**
[Polish] The résumé leaves the period between the B.S. ending in June 2023 and the Web Developer role starting in April 2024 largely unaccounted for. *(about 8 words)*

**Why**
The February–March 2024 hackathon covers only a small part of that interval. A reader may ask what you were doing during the remaining months.

**How to change it**
If there is relevant [study, employment or project work during that interval], add it with its dates. Otherwise, do not imply that the hackathon covers the whole period.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Error] The phrase “raising bookings per search 9%” is missing “by” before the percentage. *(1 word)*

**Why**
The missing word makes an otherwise strong measured result read like an editing error. It interrupts the reader where the A/B-test outcome should be clearest.

**How to change it**
Add “by” before “9%.”

*raised by wording*

> Cut the booking flow’s JavaScript from 410 KB to 260 KB by code-splitting the calendar and map widgets.

**Problem**
[Polish] The JavaScript reduction does not say whether the smaller payload changed the booking experience. *(about 8 words)*

**Why**
A reader can see the engineering gain from 410 KB to 260 KB but cannot tell whether users experienced a faster flow. That leaves the practical effect of the work unproven.

**How to change it**
If measured, add [observed change in booking-flow load time versus before code-splitting] after “260 KB.” Otherwise, keep the payload reduction without implying a user outcome.

*raised by content*

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma in “deferring the analytics script, raised” incorrectly separates the compound subject from its verb. *(no words)*
2. [Important] The long methods list buries the Lighthouse score change. *(no words)*

**Why**
1. The four actions together form the subject of “raised.” The comma makes the sentence stumble just before its Lighthouse result.
2. A reader must get through four implementation details before reaching the improvement from 52 to 91. Leading with that result would make the impact easier to find on a quick scan.

**How to change it**
1. Remove the comma after “script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” ahead of the methods list, then place the existing methods after it.

*raised by wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The line incorrectly credits the LCP reduction to lazy-loading the hero image. *(about 8 words)*

**Why**
A hero image visible on initial load is typically an LCP candidate, and lazy-loading it normally delays its request rather than making it paint sooner. The figures may be real, but this explanation makes a technically informed reader doubt what caused the improvement.

**How to change it**
If the reduction was measured, replace that phrase with [the change that actually caused the LCP reduction] after checking [the before-and-after LCP elements and other changes made]. Otherwise, remove the claim that lazy-loading the hero caused the drop from 4.1s to 1.2s.

*raised by content*

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
[Polish] The line says designers could use the documentation but does not show that they did. *(about 5 words)*

**Why**
The stated benefit is a possibility, not an observed change in the designers’ workflow. A reader cannot tell whether Storybook actually reduced requests to engineers.

**How to change it**
If observed, replace “could check” with [how designers actually used the Storybook documentation]. Otherwise, leave the wording as an enablement claim.

*raised by content*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP does not ordinarily reduce a JavaScript bundle by 60%. *(about 2 words)*

**Why**
Images are normally served as separate assets, so “JavaScript bundle” and “PNG images” appear to describe different things. Unless the images were embedded in the bundle, the mismatch makes the measured result hard to trust.

**How to change it**
Replace “JavaScript bundle” with [the asset or transfer-size metric actually measured]. Keep “JavaScript bundle” only if the converted images were embedded in it.

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The phrase “the findings led to a preview mode” obscures whether you designed, built or only proposed the mode. *(about 2 words)*
2. [Polish] The reduction in broken-page reports is buried late in the bullet. *(no words)*
3. [Polish] This measured preview-mode bullet is not the opening bullet of the entry. *(no words)*

**Why**
1. A reader cannot tell whether your contribution ended with the eight interviews or included the change associated with fewer broken-page reports. That uncertainty weakens the connection between your work and the result.
2. The change from 30 to 6 reports a month is the clearest outcome here. A reader scanning from the start may miss it behind the interview and preview-mode explanation.
3. It connects research with a substantial drop in student-reported broken pages. Placing it first would give a scanning reader that account of your work before the other web-development bullets.

**How to change it**
1. Replace that phrase with [your precise role in the preview-mode change]; if accurate, “used the findings to build a preview mode” is one option.
2. Move the existing reduction from 30 to 6 a month toward the start of the bullet, then follow it with the interviews and your role in the preview mode.
3. Move this entire bullet to the first position under the Web Developer entry.

*raised by content, wording, narrative*

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Important] “Writes” incorrectly uses present tense for a role that ended in August 2024. *(no words)*
2. [Polish] The checklist is not specific enough to show which accessibility requirements it covered. *(about 2 words)*

**Why**
1. The present tense implies that you still maintain the checklist despite the entry’s end date. That inconsistency makes the timing of the work unclear.
2. The audit reduction is measurable, but “the accessibility checklist” tells a web-development reader little about the accessibility skill behind it. One concrete basis would make that contribution easier to assess.

**How to change it**
1. If the work ended with the role, replace “Writes” with “Wrote.”
2. If accurate, replace it with “the [accessibility standard] checklist,” or name [one telling check it covered].

*raised by wording, narrative, content*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] “Showing live bus arrivals” does not explain how arrival data reaches the app. *(about 5 words)*

**Why**
For a transit app, the data integration is a useful sign of your technical contribution. Without it, a reader cannot distinguish that work from displaying data already supplied to the frontend.

**How to change it**
If accurate, add a short phrase after “live bus arrivals” naming [the transit feed or API you integrated].

*raised by content*

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
1. [Error] The drop from 3.0s to 1.5s is a 50% reduction, not a 75% improvement. *(no words)*
2. [Polish] “Cold-start time” does not identify what had finished loading at 1.5s. *(about 3 words)*

**Why**
1. The decrease is 1.5 seconds, which is half the original 3.0 seconds. An incorrect percentage makes the otherwise clear timing result look unreliable.
2. A reader cannot tell whether the endpoint was the app opening, the stop list becoming usable or arrivals appearing. That makes it difficult to interpret what caching the stop list improved.

**How to change it**
1. Replace “a 75% improvement” with “a 50% reduction.”
2. Replace “cold-start time” with [the measured start-to-visible-or-usable event]; if accurate, “time to usable stop list” is one option.

*raised by content, wording*

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
1. [Error] A rise from 30% to 40% is a 10-percentage-point increase, not a 10% increase. *(2 words)*
2. [Polish] “Weekly returning riders” sounds like a count, although the figures describe a rate. *(1 word)*

**Why**
1. Ten percent of the original 30% would not produce 40%; the relative increase is about 33%. Using “10%” makes the reported change mathematically inconsistent.
2. The 30% and 40% figures are shares of riders, not numbers of riders. Naming the measure as a rate lets the reader understand the result without resolving that ambiguity.

**How to change it**
1. Replace “by 10%” with “by 10 percentage points.”
2. Replace “weekly returning riders” with “weekly rider return rate.”

*raised by content, wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The entry’s Vue heading conflicts with the bullet’s claim that the booking flow used React and TypeScript. *(about 5 words)*
2. “Worked on the frontend of the booking flow” does not say what you completed. *(about 3 words)*

**Why**
1. A reader cannot tell which framework was used for this work, or whether both had distinct roles. That uncertainty undermines the technical description of the project.
2. The phrase establishes participation but leaves your particular contribution unclear. A reader cannot tell which part of the flow to credit to you.

**How to change it**
1. Correct “Vue” in the heading or “React and TypeScript” in the bullet to reflect [the technologies actually used]. If both were used, briefly distinguish their roles.
2. Replace “Worked on the frontend of” with [a specific verb and the frontend work you completed].

*raised by content, wording, narrative*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. “Its tests” does not establish whether the overlapping-booking and time-zone cases were verified. *(about 5 words)*
2. “Handling overlapping bookings and time-zone changes” does not say what the calendar did in those cases. *(about 5 words)*

**Why**
1. The bullet names challenging cases, but it does not connect them specifically to the tests. A reader cannot tell whether those cases were tested or only handled in the component.
2. Those are meaningful booking problems, but “handling” leaves the component’s behavior unspecified. A reader cannot assess what the implementation accomplished.

**How to change it**
1. If accurate, replace “its tests” with [the tests that verified the overlapping-booking and time-zone cases]. Otherwise, keep the test claim separate from those cases.
2. Replace “handling” with [what the calendar actually did for overlapping bookings and time-zone changes].

*raised by content*

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
The project description stops at the demo and code handover. *(about 6 words)*

**Why**
Presenting to staff and supplying setup notes show a completed handoff, but not what happened afterward. A reader cannot tell whether the library used the project.

**How to change it**
If known, add [what happened after the handover]. Otherwise, retain the handover as the endpoint without suggesting later use.

*raised by content*

## Already working

- s2:e1:b3: Pairs a specific implementation approach with a concise, measured improvement.
- s2:e0:b2: Pairs specific accessibility changes with a clearly scoped audit result.

## Set aside (7)

- s3:e1:b0: "Worked on the frontend of the booking flow" does not say what you completed.
- s3:e1:b0: "using React and TypeScript" conflicts with "Vue" in the entry heading.
- s3:e1:b1: "its tests" does not show whether the overlapping-booking and time-zone cases were verified.
- s3:e1:b1: "handling overlapping bookings and time-zone changes" does not say what the calendar did in those cases.
- s3:e1:b2: "Presented the demo to the library staff and handed over the code with setup notes" stops at the handover.
- s3:e1:b0: “Worked on the frontend of” obscures the action; replace it with a specific verb describing what you did.
- s3:e1:b0: “React and TypeScript” conflicts with “Vue” in the entry heading; correct the heading or bullet to reflect the technology used.
