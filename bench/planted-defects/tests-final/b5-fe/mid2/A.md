> Here is my resume: bench/planted-defects/tests-final/b5-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five experience/project entries for content and wording, plus the resume’s overall narrative and formatting. I did not compare it with a job posting.

The main changes to address are:

- **Resolve the Library Room Booking inconsistencies.** The heading lists Vue while a bullet names React/TypeScript. Another bullet describes a travel-search page and results similar to an internship achievement; clarify whether these are distinct claims and align the technologies and figures.
- **Clarify a few claims and measures.** Specify what the internship’s “35%” performance gain and the university search-time improvement measure. The security bullet also needs a clear explanation of how XSS was prevented and how that was verified.
- **Bring the software-development work forward.** The narrative review recommends moving Education below Experience and Projects, and shortening or removing the current barista entry. Also address the flagged first-person wording, past-tense issue, and corrupted “cafØ” text.

The format check found clean ATS parsing and no layout warnings. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**83/100** — format 100 · content 72 · wording 83 · narrative 68

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

3 errors, 7 important, 17 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Westfield State University | M.S. in Computer Science

**Problem**
[Polish] Education appears before Experience and Projects, so the résumé does not lead with the most relevant development work.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
[Polish] “Prepared drinks for the morning rush” and the order count describe work and workload, not an outcome.

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is a corrupted spelling.
2. [Polish] The opening and cash-counting duties have no stated outcome.
3. [Polish] “handled the daily cash count” uses a vague verb.

**Why**
1. The corrupted character makes a common word look like a typo. That can distract a reader from the responsibility the bullet is describing.

**How to change it**
1. Replace “cafØ” with “cafe” or “café.”

> Prepared drinks

**Problem**
[Important] The Barista entry lists routine duties but gives little context for your software-development direction.

**Why**
A reader can see the service work, but these details do not connect to the development experience elsewhere in the résumé. Keeping both bullets at their current length takes space from more relevant work.

**How to change it**
If you keep the entry, shorten it to one brief line, or remove it.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
1. [Important] “page performance by 35%” does not identify the metric or its comparison.
2. [Polish] The repeated “by” makes the relationship between the performance gain and the implementation clumsy.

**Why**
1. A reader cannot tell whether the percentage refers to load time, bundle size, or another measure. Without a baseline and a defined metric, the scale of the improvement is hard to interpret.

**How to change it**
1. Replace “page performance by 35%” with [the metric measured and its before-and-after values], if available.

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] “Flagged in the audit” is redundant after “accessibility issues.”

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] “Which caught” makes the connection between the tests and regressions less direct.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Polish] “By adding” can be tightened without losing the implementation detail.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing user input in React state does not prevent XSS when it is rendered with `dangerouslySetInnerHTML`.
2. [Important] The XSS-prevention claim has no verification result or evidence attached to it.

**Why**
1. React state does not sanitize or neutralize HTML, and `dangerouslySetInnerHTML` bypasses React’s normal escaping. Untrusted input can therefore still introduce executable content, so the stated prevention method is incorrect.
2. A reader can see the intended security outcome, but not what demonstrated that the change prevented the issue. Without a test or audit result, the claim is difficult to assess.

**How to change it**
1. If you sanitized the input with an appropriate HTML sanitizer before rendering, name that step. Otherwise, remove the claim that this prevented XSS and render the input as text or handle it safely; do not present state storage as the protection.
2. Add [the security test or audit used and its result], if available, to show how the prevention was verified.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The result is buried after the technology and implementation details.

**Why**
A scanning reader encounters the rebuild method before the load-time and booking gains. That delays the strongest evidence of the work’s impact.

**How to change it**
Move the load-time and booking gains to the start of the bullet, then name the rebuild as the method.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Interviewed 8 department editors about publishing; my findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] “my findings” uses a first-person pronoun in a résumé bullet.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] “Writes” is the wrong tense for a role that ended in August 2024.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “search time” does not specify what the 4 seconds to under 1 measures.

**Why**
A reader cannot tell whether the figures describe page time, query response time, or the time a user takes to find a course. Defining the measure makes the improvement interpretable.

**How to change it**
Replace “search time” with [the specific measured time, such as query response time or time to find a course], if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] “showing live bus arrivals” does not explain how the app retrieves or updates arrival information.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] The faster load-time result appears after the implementation detail.

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] The “and” does not clarify the relationship between open-sourcing the app and the agency linking it.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The project heading says Vue, but this bullet says the booking flow used React and TypeScript.
2. [Polish] “Worked on the frontend” is vague and does not name the specific action performed.
3. [Polish] The booking-flow contribution has no stated result.

**Why**
1. A reader cannot tell which framework the project used. The mismatch makes the technology description less credible unless different parts of the project used different frameworks.

**How to change it**
1. Make the heading and bullet agree on the framework, or clarify that different parts used different frameworks; use [the accurate framework or explanation].

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar component and its tests are described without a result.
2. [Polish] The calendar-component result is not the opening point of the project entry.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Important] The travel-search bullet does not clearly belong with the library room-booking project.
2. The travel-search bullet’s booking increase does not specify the booking measure or its comparison.

**Why**
1. The first two bullets describe library booking, but this one describes a travel-search page. A reader may think it belongs to a different project, particularly because the résumé also describes similar travel-search work in the Lumen Travel internship.
2. A reader cannot tell what booking measure changed or what the increase is compared with. Without that context, “about a tenth” is difficult to interpret.

**How to change it**
1. Remove the travel-search bullet from this project, or explain how it belongs here and place it with the work it describes.
2. Replace the increase with [the booking measure and what it is compared with], if accurate.

> Rebuilt a travel search page with server rendering

**Problem**
[Error] The travel-search achievement closely matches the Lumen Travel internship achievement and may look duplicated.

**Why**
Both bullets describe rebuilding a travel-search page with server rendering and a booking gain. A reader may doubt whether they are separate achievements, which can undermine confidence in both entries.

**How to change it**
Remove the duplicate, or clarify how the projects and results are distinct and align the figures; use [the accurate distinction and figures] if they are separate achievements.

## Already working

- s2:e2:b0: Connects the 40-site migration to a clear reduction in new-page build time.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-7a6167b0.md.

