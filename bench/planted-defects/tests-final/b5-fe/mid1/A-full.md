# Full review: resume.pdf

**84/100** — format 100 · content 74 · narrative 69

Read 5 of 5 entries for content, 0 for wording. Career reading done, posting comparison no-posting.

4 errors, 9 important, 7 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Harbor Coffee Roasters | Barista

**Problem**
[Important] Harbor Coffee Roasters leads the engineering story even though the software roles are more relevant. *(no words)*

**Why**
A reader encountering the résumé from the top sees the barista role before the engineering experience. That order can obscure the candidate’s software direction.

**How to change it**
Move the Harbor Coffee Roasters entry below the software roles and keep it to one line or place it under an Additional Experience heading.

*raised by narrative*

> Jul 2023 - Aug 2024; Jun 2025

**Problem**
[Polish] The experience dates leave a gap from August 2024 to June 2025. *(adds about 3–8 words)*

**Why**
The M.S. program begins in September 2024, but the experience dates still leave a period without a listed role. A reader may wonder whether there was relevant work or project activity during that time.

**How to change it**
If you had relevant work or project activity during [Aug 2024 to Jun 2025], add a concise entry; otherwise, the M.S. dates already provide the education context.

*raised by narrative*

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
[Polish] The drink-preparation bullet gives the workload but no service or stock outcome. *(adds about 5–10 words)*

**Why**
The order count shows the rush’s scale, not how well the work served customers. Without an outcome, the reader cannot see the value of the contribution.

**How to change it**
Keep the order volume as context and add one result, such as [share of orders served within the target time] or [stockout frequency compared with before], if available.

*raised by content*

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
[Polish] The opening and cash-count bullet names recurring duties without saying what they achieved. *(adds about 5–10 words)*

**Why**
The three-day cadence shows responsibility, but not whether openings were ready on time or cash counts were accurate. One verifiable outcome would show the value of the work.

**How to change it**
Keep the opening cadence and add the clearest result, such as [opening-readiness measure] or [cash-count discrepancy rate compared with a baseline], if available.

*raised by content*

> Prepared drinks

**Problem**
[Important] The café entry takes space for routine work that does not support the software direction. *(saves about 10 words)*

**Why**
The two bullets describe café duties rather than experience relevant to engineering. Giving this entry space comparable to the software roles can weaken the focus of the engineering story.

**How to change it**
Keep this entry brief, as one line or under an Additional Experience heading, rather than expanding the duty descriptions.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% performance figure does not name the metric or its comparison basis. *(adds about 4–8 words)*

**Why**
A reader cannot tell whether the change was in load time, bundle size, or another measure. Without the metric and baseline, the size of the improvement is hard to interpret.

**How to change it**
Replace “page performance” with [specific performance metric] and add [before-and-after values or measurement baseline], if available.

*raised by content*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The claim that adding lazy loading to the hero image cut LCP is technically incorrect. *(saves about 5–10 words)*

**Why**
A hero image is typically visible immediately and may itself be the largest contentful paint element. Lazy-loading it can delay discovery and worsen LCP, rather than explain the stated reduction.

**How to change it**
If the hero image was lazy-loaded, remove the causal claim; retain the LCP figures only if measured, and name the actual optimization if one produced the improvement.

*raised by content*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state does not prevent cross-site scripting, and the bullet does not name a protective control. *(replaces about 10 words)*
2. [Important] The XSS-prevention result has no stated evidence showing how it was verified. *(adds about 5–8 words)*

**Why**
1. React state stores a value; it does not sanitize it. Rendering untrusted input through `dangerouslySetInnerHTML` can still allow injected markup or scripts to execute, so the stated method does not support the security result.
2. Without an evidence anchor, a reader cannot tell how the prevention was established. That leaves the security result difficult to assess.

**How to change it**
1. If HTML is not needed, replace the `dangerouslySetInnerHTML` approach with ordinary React text rendering. If HTML is needed, name the HTML sanitizer used before rendering; otherwise remove the XSS-prevention claim.
2. Add [security test, scan, or audit used to verify the fix], if one was used.

*raised by content*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
1. [Important] The 9% booking result does not say whether it is a relative lift or a percentage-point change. *(adds about 2–4 words)*
2. [Polish] The strongest internship bullet is not first. *(no words)*

**Why**
1. Those describe different effect sizes, so a reader may interpret the business result incorrectly. Clarifying the basis makes the A/B test result more precise.
2. The hotel-search bullet combines a technical change with measured performance and booking results. Leading with it puts the clearest evidence of impact where a reader is most likely to notice it.

**How to change it**
1. Specify whether the 9% was a relative lift or a change in percentage points, if accurate.
2. Move this bullet to the first position in the internship entry.

*raised by content, narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Error] “Writes” conflicts with the role’s ended dates and the past tense of the other bullets. *(no words)*

**Why**
Present tense implies this is an ongoing responsibility, but the role is listed as ending in August 2024. As written, the timeline is inconsistent.

**How to change it**
If this work was done during the role, replace “Writes” with “Wrote.”

*raised by content*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The search-time figures do not specify what interval was timed. *(adds about 5–8 words)*

**Why**
A reader cannot tell whether this measures typing response, time to display results, or another part of the search experience. Defining the interval makes the performance change easier to interpret.

**How to change it**
Replace “search time” with [the interval measured, such as time from query submission to results appearing, if accurate], while keeping the before-and-after figures.

*raised by content*

> my findings led to

**Problem**
[Polish] The personal pronoun “my” makes the research bullet read as a sentence rather than a résumé phrase. *(saves 1 word)*

**Why**
The rest of the résumé uses concise bullet phrasing. This pronoun makes the line less consistent with that style and adds no information about the outcome.

**How to change it**
Cut “my” so the clause begins “findings led to.”

*raised by file*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] The live-arrivals bullet does not explain how the data is delivered. *(adds about 4–8 words)*

**Why**
For a technical project, data integration is one of the clearest ways to show engineering skill. Without it, the reader sees the feature but not the technical contribution behind it.

**How to change it**
Add a brief detail about how arrivals are fetched or updated, such as [transit data source or update approach], if accurate.

*raised by content*

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] The open-source bullet gives external recognition but no technical or domain method. *(adds about 5–10 words)*

**Why**
A technical reader cannot tell what engineering work the project involved from this line alone. A distinct implementation detail could show that skill, if it adds information beyond the other bullets.

**How to change it**
If this line is also meant to show technical skill, add one concise detail about [a distinct implementation choice or contribution]; otherwise, keep its focus on the external recognition.

*raised by content*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
[Important] The booking-flow bullet gives no outcome and conflicts with the Vue heading about which framework the project used. *(adds about 5–12 words)*

**Why**
“Worked on the frontend” does not show what the work enabled or improved, so its value is hard to assess. The React and TypeScript wording also conflicts with the heading’s Vue label, leaving the project stack unclear.

**How to change it**
Clarify which stack was used, or distinguish [where each technology was used] if both belong to the project. Replace “Worked on the frontend” with [what the frontend work enabled or improved] and, if available, its clearest outcome.

*raised by content, narrative*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar bullet does not make clear whether its tests covered the named edge cases or what they established. *(adds about 5–8 words)*
2. [Polish] The strongest Library Room Booking bullet is not first. *(no words)*

**Why**
1. Overlapping bookings and time-zone changes are useful evidence of the calendar’s scope. The reader cannot tell, however, whether the tests covered those cases or what the tests demonstrated.
2. The calendar bullet names a concrete component, tests, and challenging cases. Leading with it gives the reader the clearest view of the project contribution first.

**How to change it**
1. Clarify whether the tests covered overlapping bookings and time-zone changes, and add [one test outcome or coverage detail], if available.
2. Move this bullet to the first position in the project entry.

*raised by content, narrative*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search bullet does not fit the Library Room Booking project and closely echoes the Lumen internship achievement. *(saves about 14 words)*
2. The travel-search bullet gives performance and booking changes without their comparison bases. *(adds about 4–8 words)*

**Why**
1. A travel search page appears unrelated to a library booking project, and the server-rendering and booking-result claims resemble the internship bullet. A reader may doubt whether this is a separate achievement or belongs in this project.
2. “More than halving” does not identify the load-time baseline, and “about a tenth” does not identify the booking baseline. Without those comparisons, the reader cannot interpret the size of either result.

**How to change it**
1. Remove this bullet from the Library Room Booking entry. If it describes a distinct project, place it under that project and clarify how it differs from the Lumen achievement.
2. If the bullet is retained under a distinct project, specify the before-and-after load times and the booking comparison basis; otherwise remove it from this entry.

*raised by content, narrative*

## Already working

- s2:e1:b1: Connects specific accessibility work to a counted set of issues fixed.
- s2:e1:b2: Shows both testing output and a specific pre-release result.
- s2:e2:b1: Shows a clear path from user research to a feature and a student-facing outcome.

## Set aside (2)

- s3:e1:b2: "Rebuilt a travel search page" seems unrelated to the entry's "Library Room Booking" project.
- s3:e1:b2: "more than halving its load time and lifting bookings by about a tenth" gives changes without their comparison bases.
