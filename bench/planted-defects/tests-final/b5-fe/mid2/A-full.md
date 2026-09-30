# Full review: resume.pdf

**83/100** — format 100 · content 72 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 7 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Westfield State University | M.S. in Computer Science

**Problem**
[Polish] Education appears before Experience and Projects, so the résumé does not lead with the most relevant development work. *(no words)*

**Why**
A reader sees the education entries before reaching the development experience and projects. Moving those sections forward would put the candidate’s relevant work first, while the ongoing M.S. would still establish current academic context.

**How to change it**
Move Education below Experience and Projects.

*raised by narrative*

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
[Polish] “Prepared drinks for the morning rush” and the order count describe work and workload, not an outcome. *(about 6 words)*

**Why**
A reader can see the responsibility and the scale of the rush, but cannot tell whether your work improved service or helped the café meet a need. The count alone does not show how the service performed.

**How to change it**
Replace the general task description with [what changed for customers or service because of your work], if you can support that result. Keep the order count only if it helps show scale, and add [one measure of the result and what it is compared with], if available.

*raised by content*

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is a corrupted spelling. *(no words)*
2. [Polish] The opening and cash-counting duties have no stated outcome. *(about 5 words)*
3. [Polish] “handled the daily cash count” uses a vague verb. *(no words)*

**Why**
1. The corrupted character makes a common word look like a typo. That can distract a reader from the responsibility the bullet is describing.
2. The reader can see the recurring responsibilities and their frequency, but cannot tell what they helped the café accomplish or maintain. Without an outcome, the bullet shows duties rather than their value.
3. “Handled” does not say what you did with the cash count. A direct action makes the responsibility clearer.

**How to change it**
1. Replace “cafØ” with “cafe” or “café.”
2. Add [the concrete outcome of opening or cash-counting], if you can support it; retain the frequency only if it helps establish your responsibility.
3. Replace “handled the daily cash count” with “counted the daily cash.”

*raised by wording, content*

> Prepared drinks

**Problem**
[Important] The Barista entry lists routine duties but gives little context for your software-development direction. *(saves about 10 words)*

**Why**
A reader can see the service work, but these details do not connect to the development experience elsewhere in the résumé. Keeping both bullets at their current length takes space from more relevant work.

**How to change it**
If you keep the entry, shorten it to one brief line, or remove it.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
1. [Important] “page performance by 35%” does not identify the metric or its comparison. *(about 3 words)*
2. [Polish] The repeated “by” makes the relationship between the performance gain and the implementation clumsy. *(saves about 1 word)*

**Why**
1. A reader cannot tell whether the percentage refers to load time, bundle size, or another measure. Without a baseline and a defined metric, the scale of the improvement is hard to interpret.
2. The line uses “by” for both the percentage gain and the code-splitting method. That repetition makes the link between the result and how you achieved it less direct.

**How to change it**
1. Replace “page performance by 35%” with [the metric measured and its before-and-after values], if available.
2. Remove the repeated “by” by tightening the connection between the performance gain and code-splitting.

*raised by content, wording*

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] “Flagged in the audit” is redundant after “accessibility issues.” *(saves about 3 words)*

**Why**
The phrase repeats information already conveyed by the claim that these were accessibility issues. Removing it keeps the result concise without losing the audit context.

**How to change it**
Replace “accessibility issues flagged in the audit” with “audit issues.”

*raised by wording*

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] “Which caught” makes the connection between the tests and regressions less direct. *(no words)*

**Why**
The clause makes the result feel like an aside instead of a direct outcome of writing the tests. A second verb-led clause makes that relationship easier to scan.

**How to change it**
Replace “which caught” with a direct verb-led clause, such as “and caught.”

*raised by wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Polish] “By adding” can be tightened without losing the implementation detail. *(saves about 1 word)*

**Why**
The phrase takes extra words to introduce the change that produced the result. A shorter connection makes the bullet easier to scan.

**How to change it**
Replace “by adding” with “with.”

*raised by wording*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing user input in React state does not prevent XSS when it is rendered with `dangerouslySetInnerHTML`. *(about 4 words)*
2. [Important] The XSS-prevention claim has no verification result or evidence attached to it. *(about 5 words)*

**Why**
1. React state does not sanitize or neutralize HTML, and `dangerouslySetInnerHTML` bypasses React’s normal escaping. Untrusted input can therefore still introduce executable content, so the stated prevention method is incorrect.
2. A reader can see the intended security outcome, but not what demonstrated that the change prevented the issue. Without a test or audit result, the claim is difficult to assess.

**How to change it**
1. If you sanitized the input with an appropriate HTML sanitizer before rendering, name that step. Otherwise, remove the claim that this prevented XSS and render the input as text or handle it safely; do not present state storage as the protection.
2. Add [the security test or audit used and its result], if available, to show how the prevention was verified.

*raised by content, wording*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The result is buried after the technology and implementation details. *(no words)*

**Why**
A scanning reader encounters the rebuild method before the load-time and booking gains. That delays the strongest evidence of the work’s impact.

**How to change it**
Move the load-time and booking gains to the start of the bullet, then name the rebuild as the method.

*raised by narrative, wording*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Interviewed 8 department editors about publishing; my findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] “my findings” uses a first-person pronoun in a résumé bullet. *(saves 1 word)*

**Why**
The pronoun makes the bullet read like a sentence in prose rather than a résumé phrase. It is unnecessary because the preceding verb already identifies your work.

**How to change it**
Remove “my” and connect the findings directly to the preview-mode result.

*raised by wording, file*

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] “Writes” is the wrong tense for a role that ended in August 2024. *(no words)*

**Why**
The role dates show that this work is in the past, while “Writes” reads as present-tense work. The tense mismatch can make the timeline unclear.

**How to change it**
Replace “Writes” with “Wrote.”

*raised by wording*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “search time” does not specify what the 4 seconds to under 1 measures. *(about 2 words)*

**Why**
A reader cannot tell whether the figures describe page time, query response time, or the time a user takes to find a course. Defining the measure makes the improvement interpretable.

**How to change it**
Replace “search time” with [the specific measured time, such as query response time or time to find a course], if accurate.

*raised by content*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] “showing live bus arrivals” does not explain how the app retrieves or updates arrival information. *(about 5 words)*

**Why**
A reader can see the app’s core feature, but not how it provides live data. One accurate technical detail would help the reader understand how that feature works.

**How to change it**
After “showing live bus arrivals,” add [the data source or update approach], such as “via the agency’s real-time API,” if accurate.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] The faster load-time result appears after the implementation detail. *(no words)*

**Why**
A scanning reader reaches the offline-cache detail before the outcome. This makes the improvement in opening time easier to miss.

**How to change it**
Move the 0.8s-versus-2.9s outcome to the start of the bullet, then name the offline caching as the method.

*raised by wording*

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] The “and” does not clarify the relationship between open-sourcing the app and the agency linking it. *(no words)*

**Why**
The line reports two actions, but the coordinating word leaves unclear whether one led to the other or they are separate facts. A clearer connection helps readers interpret the agency link as evidence of the app’s reach.

**How to change it**
Replace the coordinating “and” with wording that states the relationship, if known, or separate the two facts more clearly.

*raised by wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The project heading says Vue, but this bullet says the booking flow used React and TypeScript. *(about 2 words)*
2. [Polish] “Worked on the frontend” is vague and does not name the specific action performed. *(no words)*
3. [Polish] The booking-flow contribution has no stated result. *(about 5 words)*

**Why**
1. A reader cannot tell which framework the project used. The mismatch makes the technology description less credible unless different parts of the project used different frameworks.
2. A reader cannot tell what your contribution to the booking flow involved. Naming the action would make your role clearer.
3. The reader can see the area you worked on, but not what the contribution enabled or improved. A concrete outcome would show why the work mattered.

**How to change it**
1. Make the heading and bullet agree on the framework, or clarify that different parts used different frameworks; use [the accurate framework or explanation].
2. Replace “Worked on” with the specific action you performed.
3. Add [what improved and compared with what], if you have a concrete result.

*raised by wording, narrative, content*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar component and its tests are described without a result. *(about 5 words)*
2. [Polish] The calendar-component result is not the opening point of the project entry. *(no words)*

**Why**
1. The implementation details show what you built and which cases it handled, but not how that improved the booking experience or project. The outcome is what would help a reader judge the contribution.
2. The component and its tests are the clearest contribution in the first two bullets. Leading with that work would give a reader a stronger first impression of the project.

**How to change it**
1. Add [what users or the project could do better afterward], with a comparison if available.
2. Move the calendar-component bullet before the frontend bullet.

*raised by content, narrative*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Important] The travel-search bullet does not clearly belong with the library room-booking project. *(saves about 12 words)*
2. The travel-search bullet’s booking increase does not specify the booking measure or its comparison. *(about 4 words)*

**Why**
1. The first two bullets describe library booking, but this one describes a travel-search page. A reader may think it belongs to a different project, particularly because the résumé also describes similar travel-search work in the Lumen Travel internship.
2. A reader cannot tell what booking measure changed or what the increase is compared with. Without that context, “about a tenth” is difficult to interpret.

**How to change it**
1. Remove the travel-search bullet from this project, or explain how it belongs here and place it with the work it describes.
2. Replace the increase with [the booking measure and what it is compared with], if accurate.

*raised by wording, narrative, content*

> Rebuilt a travel search page with server rendering

**Problem**
[Error] The travel-search achievement closely matches the Lumen Travel internship achievement and may look duplicated. *(saves about 10 words)*

**Why**
Both bullets describe rebuilding a travel-search page with server rendering and a booking gain. A reader may doubt whether they are separate achievements, which can undermine confidence in both entries.

**How to change it**
Remove the duplicate, or clarify how the projects and results are distinct and align the figures; use [the accurate distinction and figures] if they are separate achievements.

*raised by narrative*

## Already working

- s2:e2:b0: Connects the 40-site migration to a clear reduction in new-page build time.

## Set aside (2)

- s3:e1:b2: “lifting bookings by about a tenth” does not specify what booking measure changed or what the increase is compared with.
- s3:e1:b2: “A travel search page” does not clearly connect to the library room-booking project described in the heading.
