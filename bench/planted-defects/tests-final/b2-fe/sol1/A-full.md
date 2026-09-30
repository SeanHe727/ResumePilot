# Full review: resume.pdf

**86/100** — format 100 · content 77 · wording 84 · narrative 80

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 12 important, 5 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] The Experience entries are not ordered newest-first. *(no words)*

**Why**
The Westfield State University role ends in August 2024, yet it appears above the Lumen Travel internship from June to September 2025. A reader scanning from the top could miss your more recent frontend work.

**How to change it**
Move the Lumen Travel entry above the Westfield State University web developer entry.

*raised by file, narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] The ownership statement does not identify a specific change you made. *(about 5 words)*
2. [Important] The ownership statement does not say what improved for editors, visitors, or developers. *(about 8 words)*

**Why**
1. A reader can see what you were responsible for but cannot tell whether you developed the sites or mainly maintained them. A concrete action would make your hands-on contribution clear.
2. Responsibility establishes scope, but it does not show what that responsibility was worth. Without an observable improvement, a reader cannot judge the effect of this work.

**How to change it**
1. Replace “Owned” with [a specific change you made to the websites or component library].
2. Add [one observable improvement for editors, visitors, or developers compared with the prior state] after the ownership statement.

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Important] The preview-mode result is buried, and your role in creating the mode is unclear. *(about 3 words)*

**Why**
The reduction from 30 to 6 broken-page reports a month is compelling, but “the findings led to” does not say whether you built the preview mode or only supplied research. That ambiguity makes it harder to credit you with the change.

**How to change it**
Move the reduction from 30 to 6 reports earlier. Replace “the findings led to” with “used the findings to build” if accurate, or [your specific contribution to the preview mode].

*raised by content, wording*

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] The accessibility checklist does not say what it checked or how it was used. *(about 6 words)*

**Why**
The drop in failed audits gives the line a result, but the checklist itself remains abstract. One criterion or use would show the accessibility practice behind that result.

**How to change it**
Add [the most telling accessibility criterion it covered or the way editors used it] beside “accessibility checklist.”

*raised by content*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The search-time figure does not identify what interval was measured. *(about 1 word)*

**Why**
Four seconds to under one could describe a query response or the time a person took to find a course. Those are different outcomes, so a reader cannot interpret the improvement precisely.

**How to change it**
Replace “search time” with [the measured interval], such as “query response time” if that is what you measured.

*raised by content*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
1. [Important] The 35% page-performance improvement does not name the metric that changed. *(about 2 words)*
2. [Polish] The sentence repeats “by” in quick succession. *(no words)*

**Why**
1. Code-splitting explains the work, but “page performance” could refer to several measurements. A frontend reader needs the metric to understand what the percentage demonstrates.
2. The repetition makes an otherwise direct result sound awkward. Removing it lets the metric and code-splitting method read cleanly.

**How to change it**
1. Replace “page performance” with [the specific metric that improved], retaining “by 35%” if that is how it was reported.
2. Replace the second “by” with “through.”

*raised by content, wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Attributing the LCP drop to lazy-loading the hero image is wrong if that image was the visible LCP element. *(about 5 words)*

**Why**
Lazy-loading a visible LCP image delays its request and ordinarily worsens largest contentful paint. A reader familiar with the metric will question the stated cause of the drop from 4.1s to 1.2s unless the hero was offscreen and another element determined LCP.

**How to change it**
Replace that attribution with [the change that actually reduced LCP] and identify [the measured LCP element]. If the hero was offscreen and deferring it improved another element’s paint time, say so instead.

*raised by content*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state does not prevent cross-site scripting when it is rendered with dangerouslySetInnerHTML. *(saves about 5 words)*
2. [Important] The XSS-prevention claim gives no evidence that prevention was verified. *(about 6 words)*

**Why**
1. React state does not sanitize input, and dangerouslySetInnerHTML can insert attacker-controlled HTML into the page. A security-minded reader will see the stated prevention method as contradicting the claim.
2. Even with a safe rendering method, a reader needs a concrete validation signal to distinguish a tested security result from an intended one. Without it, “Prevented” overstates what the line establishes.

**How to change it**
1. If accurate, replace the method with “rendering comments as escaped text” or “sanitizing HTML before using dangerouslySetInnerHTML.” Otherwise, remove the XSS-prevention claim.
2. If verified, replace that phrase with wording naming [the tested comment-field XSS behavior] and [the test or review that confirmed it]. If not verified, remove the prevention claim.

*raised by content*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The strongest internship result is not the opening bullet. *(no words)*

**Why**
The hotel-search bullet pairs a measured load-time reduction with a bookings-per-search lift from an A/B test. Placing it first lets a scanning reader see that combined technical and business result immediately.

**How to change it**
Move this bullet above the other Lumen Travel bullets without changing its wording.

*raised by narrative*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The live-arrivals description does not say how arrival data reaches the app. *(about 4 words)*

**Why**
The 400-stop coverage and weekly usage show the feature’s reach. Naming the integration, if there was one, would also show the technical work behind the live data.

**How to change it**
Add [the arrival-data feed or API integrated] after “live bus arrivals,” if accurate.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] The comparison “against 2.9s before” is awkward. *(no words)*

**Why**
The sentence already supplies both opening times, so the unusual comparison briefly slows the reader down. A standard before-and-after phrase makes the improvement easier to scan.

**How to change it**
Replace “against 2.9s before” with “down from 2.9s.”

*raised by wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The booking-flow bullet conflicts with the Vue heading by naming React and TypeScript, and it does not identify what you implemented. *(about 5 words)*
2. [Important] The booking-flow bullet obscures the action you took. *(about 3 words)*
3. [Important] The booking-flow bullet does not say what the work achieved. *(about 7 words)*

**Why**
1. A reader cannot tell which framework belongs to this project or picture your individual contribution. The mismatch also makes the project’s technical description less credible.
2. “Worked on” does not distinguish a built feature from general participation. Naming the part you built or changed would let a reader assess your contribution to the team project.
3. Even once the action is clear, a reader still cannot tell whether the flow became usable, more reliable, or remained in progress. An observable outcome would give the contribution a result.

**How to change it**
1. Replace the broad tool phrase with [the specific frontend feature or behavior you implemented]. Correct “Vue” in the heading or the technologies in this bullet to reflect what was actually used; if both frameworks were used, explain their separate uses.
2. Replace “Worked on the frontend of” with [the specific part of the booking flow you built or changed].
3. Add [the observable result for the booking flow], with [one comparison or test result] if available.

*raised by content, wording, narrative*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar component is not the opening bullet. *(no words)*
2. [Polish] The calendar bullet does not describe how it handled overlapping bookings or time-zone changes. *(about 5 words)*

**Why**
1. Writing the component and its tests gives a clearer account of your library-booking contribution than the broad booking-flow opening. Leading with it makes the relevant work visible on a scan.
2. Those edge cases suggest substantive work, but “handling” does not tell a reader what the calendar did in either case. The resulting behavior would make the implementation easier to judge.

**How to change it**
1. Move this bullet to the top of the Library Room Booking entry.
2. Replace “handling” with [the specific behavior the calendar delivered]; add [the test outcome that demonstrated it] if available.

*raised by narrative, content*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
[Error] The travel-search result is wrongly presented as work from the library-room-booking hackathon. *(saves about 25 words)*

**Why**
This February–March 2024 project is about room booking, while the later Lumen Travel internship reports a closely matching server-rendered search result and bookings lift. Keeping the result under both projects and periods makes a reader question where the work occurred.

**How to change it**
Remove this bullet from the hackathon entry and lead the remaining bullets with the calendar component. If this bullet was intended to describe separate hackathon work, replace it with [the library-room-booking work actually completed during the hackathon].

*raised by content, narrative*

## Skills

> Storybok

**Problem**
[Error] “Storybok” in Tools is misspelled. *(no words)*

**Why**
A reader familiar with the tool will recognize the typo. It creates an avoidable accuracy concern in a section meant to establish your technical skills.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

## Already working

- s3:e0:b2: The agency's developer-page link is a concise, externally checkable result.
- s2:e1:b1: Pairs concrete accessibility work with an audit-based result.
- s2:e1:b2: Reports an observed testing result rather than relying on test count alone.

## Set aside (4)

- s3:e0:b1: "Cached the stop list offline" does not identify how the offline cache was implemented.
- s3:e1:b2: "more than halving its load time and lifting bookings by about a tenth" gives changes without defining what load time or booking comparison was measured.
- s3:e1:b2: “a travel search page” appears unrelated to “Library Room Booking”; move this bullet to the relevant entry or make the connection clear.
- s3:e1:b2: “more than halving its load time and lifting bookings by about a tenth” buries the results after the method; lead with the results so they are visible on a scan.
