# Full review: resume.pdf

**85/100** — format 100 · content 75 · wording 88 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 13 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] The Experience section is not ordered newest first. *(no words)*

**Why**
The Jul 2023–Aug 2024 role appears above the Jun 2025–Sep 2025 internship. Recruiters expect reverse chronology, so the current order makes the timeline harder to scan and initially hides your most recent experience.

**How to change it**
Move the Lumen Travel entry above the Westfield State University Web Developer entry.

*raised by file, narrative*

> Frontend Engineering Intern

**Problem**
[Polish] The move from Web Developer to Frontend Engineering Intern can read as a seniority step backward. *(about 5 words)*

**Why**
Because the internship comes after a full-time developer title, a reader may wonder why the later role has a more junior label. The concurrent master’s dates can explain the sequence, but the relationship is not currently explicit.

**How to change it**
If accurate, append “[graduate internship tied to M.S. program]” to the internship title or context.

*raised by narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] The line states responsibility without showing what changed as a result. *(about 8 words)*
2. [Important] “Owned” does not identify the technical work you performed. *(about 3 words)*

**Why**
1. A hiring manager cannot distinguish routine maintenance from work that improved reliability, consistency, accessibility, or delivery speed. That makes the scope sound substantial but leaves its value unproven.
2. The verb frames the work as a duty rather than an implementation contribution. A web-development interviewer therefore has no concrete technical decision or change to explore.

**How to change it**
1. Add the strongest attributable result and its comparison, such as [specific outcome measured against its prior state].
2. Replace “Owned” with [implemented, migrated, standardized, or maintained what], using the action that accurately describes your most substantive contribution.

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The sentence weakens your agency by making the findings, rather than you, the actor. *(about 1 word)*
2. [Important] The strongest bullet in this entry is not first. *(no words)*

**Why**
1. The interviews and result are strong, but “the findings led to” obscures whether you designed or implemented the preview mode. That makes your ownership of the improvement less clear.
2. The drop from 30 to 6 broken-page reports is the entry’s clearest user-facing result. Leading with a responsibility-only bullet delays the evidence most likely to catch a recruiter’s attention.

**How to change it**
1. Replace “the findings led to a preview mode” with “used the findings to create [or shape] a preview mode,” choosing the verb that matches your role.
2. Move this bullet above “Owned the department websites and the shared component library other developers relied on.”

*raised by wording, narrative*

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Polish] The accessibility checklist does not identify the standard or criteria on which it was based. *(about 3 words)*
2. The figures do not specify whether 12 and 2 count audits, pages, or individual findings. *(about 1 word)*

**Why**
1. Without that anchor, a web-development reader cannot tell whether this was a general reminder list or a technically rigorous compliance tool. The omission weakens the technical credibility of the audit improvement.
2. Those interpretations represent very different scales of improvement. A reader cannot evaluate the result confidently when the unit being counted is unclear.

**How to change it**
1. Replace “the accessibility checklist” with “a [standard and version]-based accessibility checklist,” if accurate.
2. Replace “failed audits” with the exact unit: “[audits/pages/findings] failing per semester.”

*raised by content*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
1. [Important] The comparison omits the unit after “under 1.” *(about 1 word)*
2. [Important] “Search time” does not identify the performance metric being compared. *(about 4 words)*

**Why**
1. The missing unit makes the measurement read as incomplete even though the earlier figure uses seconds. Repeating the unit makes the comparison immediately clear.
2. Response latency, result-render time, and user task-completion time measure different parts of the experience. Without the exact metric, the four-to-under-one-second comparison is difficult to interpret or reproduce.

**How to change it**
1. Change “under 1” to “under 1 second.”
2. Replace “search time” with [the exact measured metric, such as median or P95 result-render time under the same test conditions].

*raised by wording, content*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
1. [Important] The 35% improvement does not identify the performance metric or comparison baseline. *(about 6 words)*
2. [Polish] The repeated “by” makes the cause-and-result phrasing clunky. *(saves about 1 word)*

**Why**
1. A reader cannot determine whether the percentage refers to load time, bundle size, responsiveness, or another measure. Without a baseline, the scale and credibility of the improvement are also difficult to evaluate.
2. The repetition interrupts an otherwise concise performance bullet. A smoother construction makes the result easier to scan.

**How to change it**
1. Replace “page performance” with “[specific measured performance metric]” and add “from [baseline] to [result].”
2. Change “by 35% by code-splitting” to “35% through code-splitting.”

*raised by content, wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
1. [Error] Adding lazy loading to the hero image cannot credibly explain the claimed Largest Contentful Paint reduction. *(no words)*
2. [Error] The metric name uses incorrect capitalization. *(no words)*

**Why**
1. An above-the-fold hero is commonly the LCP element, and lazy-loading delays its request until the browser determines that it is near the viewport. That generally worsens LCP rather than improving it, so the stated cause makes the entire result technically suspect.
2. Largest Contentful Paint is the official name of the web performance metric. Using its standard capitalization signals familiarity with the terminology.

**How to change it**
1. Replace “by adding loading="lazy" to the hero image” with “by [the optimization actually responsible].” If you changed the hero from lazy to eager loading, state that instead.
2. Change “largest contentful paint” to “Largest Contentful Paint.”

*raised by content, wording*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing untrusted input in React state does not prevent cross-site scripting when it is rendered with dangerouslySetInnerHTML. *(about 2 words)*
2. [Polish] The definitive XSS-prevention claim has no verification result. *(about 10 words)*

**Why**
1. React state provides neither sanitization nor escaping. Passing attacker-controlled content to dangerouslySetInnerHTML can introduce XSS unless the HTML is appropriately sanitized, so the stated prevention mechanism is technically wrong.
2. Security prevention is stronger than an implementation claim and invites a reader to ask how the exploit was tested after the change. Without a test or audit result, the claim remains difficult to verify even after the mechanism is corrected.

**How to change it**
1. Replace the mechanism with “[sanitizing untrusted HTML before rendering it with dangerouslySetInnerHTML],” if that is what you did. If no sanitizer was used, remove the prevention claim and describe rendering the input as escaped text instead.
2. After correcting the mechanism, add “confirmed by [X of X XSS test cases blocked after the change, versus Y before],” if you performed that verification.

*raised by content*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The entry’s strongest result is not the opening bullet. *(no words)*

**Why**
This line combines a specific implementation, a median load-time reduction, and an A/B-tested booking increase. Those details establish technical and commercial impact more quickly than the current opening performance percentage.

**How to change it**
Move this bullet to the first position in the Lumen Travel entry.

*raised by narrative*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Polish] The live-arrival claim does not identify how the app retrieved or refreshed its transit data. *(about 6 words)*
2. [Polish] The weekly adoption figure does not define what “riders” measures or where the figure came from. *(about 5 words)*

**Why**
1. The data integration is likely one of the project’s most technically relevant parts. Omitting it removes a concrete implementation topic that could demonstrate API, feed, or real-time update experience.
2. Unique users, sessions, and other analytics measures are not interchangeable. Without a definition and source, a reader cannot confidently interpret or credit the 900-per-week figure.

**How to change it**
1. After “live bus arrivals,” add “via [named transit feed or API and update mechanism].”
2. Replace “riders” with [the measured user definition] and add “measured via [analytics source].”

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
1. [Important] “Opened” does not define the loading milestone measured at 0.8 seconds. *(about 4 words)*
2. [Polish] The offline-caching claim does not identify the implementation mechanism. *(about 3 words)*
3. [Error] The before-and-after comparison is awkwardly phrased. *(about 3 words)*

**Why**
1. The figure could represent first paint, usable content, time to interactive, or another event. Those milestones describe different user experiences, so the performance result is not precise enough to evaluate.
2. Naming the relevant browser capability would demonstrate progressive-web-app expertise more clearly than the general word “cached.” As written, an interviewer cannot tell whether you used a service worker, Cache API, IndexedDB, or another mechanism.
3. “Against 2.9s before” slows comprehension and makes a straightforward reduction sound unnatural. Standard before-and-after wording foregrounds the improvement.

**How to change it**
1. Replace “opened” with “[measured loading milestone]” and, if available, add “[test tool or run basis].”
2. After “offline,” add “using [specific caching mechanism].”
3. Change the comparison to “in 0.8 seconds on a slow 3G connection, down from 2.9 seconds.”

*raised by content, wording*

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
1. [Polish] “Open-sourced” does not show what work made the project understandable or reusable by others. *(about 3 words)*
2. The agency link establishes recognition but not what that exposure changed. *(about 7 words)*

**Why**
1. A public release alone reveals little technical skill unless the reader can see the repository, packaging, documentation, or deployment contribution behind it. The generic phrasing therefore undersells the work required to release the app.
2. Being linked from the developer page is useful third-party validation, but it does not show whether the link produced users, referrals, contributions, or another result. That leaves the practical effect of the recognition unclear.

**How to change it**
1. Replace “Open-sourced the app” with “published [repository, setup documentation, or reusable component],” using the substantive release action you completed.
2. Add the attributable outcome, such as “[referrals, users, or contributions generated by the link],” if measured.

*raised by content*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The entry contradicts itself by identifying Vue in the header but React and TypeScript in the bullet. *(about 3 words)*
2. [Important] The line uses weak participation framing without identifying the capability you delivered. *(about 5 words)*

**Why**
1. Vue and React are distinct frontend frameworks, so the conflicting labels make the project’s actual implementation unclear. That inconsistency can cause a technical reader to doubt how accurately the project is represented.
2. “Worked on” names an area of involvement but not your action or ownership. A reader therefore cannot tell which booking step you implemented or what users could do because of your contribution.

**How to change it**
1. Use the framework actually used: either replace “Vue” in the header with “[React, TypeScript]” or revise this phrase to “using Vue and [language].” If both frameworks were used, state each one’s role.
2. Replace “Worked on the frontend of the booking flow” with “[Built or developed the specific booking step or user action]” and add [the resulting behavior or delivered capability].

*raised by content, wording, narrative*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] “Handling” does not explain the behavior the calendar produced for the named edge cases. *(about 6 words)*
2. [Important] The calendar-ownership bullet should lead this entry. *(no words)*
3. [Polish] The modifier is grammatically unclear about whether the component, the tests, or both handled the edge cases. *(about 4 words)*

**Why**
1. The line signals complexity but does not say whether the component prevented conflicting reservations, detected overlaps, or converted displayed times. That keeps the reader from understanding the actual functionality you delivered.
2. It identifies a specific component you wrote, its tests, and technically meaningful edge cases. That is stronger evidence of ownership than the current opening statement that you merely worked on the frontend.
3. Because “handling” follows “the booking calendar component and its tests,” it can attach to either or both nouns. The ambiguity obscures whether the tests covered the cases or the component implemented the behavior.

**How to change it**
1. Replace “handling” with the precise behavior achieved, such as “preventing conflicting reservations and displaying availability in each user’s local time,” if accurate.
2. Move this bullet to the first position in the Library Room Booking entry.
3. Attach the behavior directly to the component, then state separately that the tests covered [the overlapping-booking and time-zone cases].

*raised by content, narrative, wording*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search accomplishment is in the wrong entry and duplicates the Lumen Travel result. *(no words)*
2. The result does not identify the load-time metric or the basis for comparing bookings. *(no words)*
3. The bullet places its strongest outcomes after the implementation detail. *(no words)*

**Why**
1. Travel search, server rendering, and commercial booking conversion do not fit a library room-booking hackathon. The close match to the Lumen Travel bullet makes this look copied or duplicated, so a reader cannot confidently attribute the accomplishment.
2. Different load milestones can produce different performance claims, while booking changes require a defined denominator or experiment. Even under the correct entry, the approximate wording would be less credible than the specific median and A/B-test figures already used elsewhere.
3. The load-time and booking results carry more scanning value than the server-rendering method. Leading with them would make the impact visible sooner, although the bullet should first be moved to or retained only in its correct entry.

**How to change it**
1. Remove this bullet from the library project and keep the accomplishment only under the correct travel entry, using one consistent set of figures. Replace it here with [an accomplishment actually completed for the library room-booking hackathon].
2. If this claim is retained under its correct entry, replace the approximations with the exact measured load-time metric and comparison basis already given there.
3. If the bullet is retained under the correct entry, move “more than halving its load time and lifting bookings by about a tenth” before the implementation detail.

*raised by content, wording, narrative*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled. *(no words)*

**Why**
The typo is in the name of a common frontend tool and can look especially careless on a technical résumé. It may also prevent an exact keyword match.

**How to change it**
Change “Storybok” to “Storybook.”

*raised by narrative*

## Already working

- s2:e1:b1: Combines concrete accessibility work with a complete audit result.
- s2:e1:b2: Distinguishes test volume from the actual result produced by the tests.

## Set aside (4)

- s2:e0:b2: "reducing failed audits from 12 to 2 a semester" does not specify whether 12 and 2 refer to audits, pages, or individual findings.
- s3:e0:b2: "the city transit agency linked it from its developer page" establishes recognition but not what that exposure changed.
- s3:e1:b2: "more than halving its load time and lifting bookings by about a tenth" does not identify the load-time metric or the basis used to compare bookings.
- s3:e1:b2: "more than halving its load time and lifting bookings by about a tenth" contains the entry's strongest results but follows the implementation detail; move the outcomes earlier for scanability.
