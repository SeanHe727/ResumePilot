> Here is my resume: bench/planted-defects/tests-final/b2-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 4 entries with bullets for content and wording, plus the full resume for narrative and formatting. The 2 education entries have no bullets to review. No job posting was provided, so I did not assess job-description match.

The main changes to address:
- **Resolve the project conflict:** Library Room Booking is labeled Vue, but a bullet says React and TypeScript. Another bullet describes a travel-search-page result that appears to duplicate the Lumen Travel achievement; clarify whether it belongs there or is separate.
- **Clarify technical claims and measures:** Specify what “page performance by 35%” measures, and explain what made user input safe before rendering it with `dangerouslySetInnerHTML`. The content review flagged that the described steps alone don’t support the cross-site-scripting claim.
- **Reorder for clarity:** Put Lumen Travel before the older university role, and consider moving Experience above Education.

The format check found a clean, one-page file that parses well in ATS systems. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 81 · narrative 74

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

5 errors, 12 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] Experience is not in newest-first order.

**Why**
The July 2023–August 2024 Westfield role appears above the June–September 2025 Lumen role. Readers expect the more recent experience first, and the current order can make the chronology harder to scan.

**How to change it**
Move the Lumen Travel role above the Westfield State University role in Experience.

> M.S. in Computer Science

**Problem**
[Important] Experience should appear before Education.

**Why**
The development work is the strongest evidence for the direction of the résumé. Placing Education first delays that evidence for a reader deciding whether your experience fits.

**How to change it**
Move the Experience section above Education.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] The opening bullet describes responsibility rather than a concrete action.
2. [Important] The shared library’s value to other developers is not stated.

**Why**
1. A reader sees that you owned the websites, but not what you did to develop or maintain them. That makes it harder to assess your technical contribution.
2. A reader can tell that developers used the library, but not what improved as a result. Without that link, the library sounds like a responsibility rather than a contribution with a clear benefit.

**How to change it**
1. Replace “Owned” with a concrete action and add one implementation or maintenance contribution, such as [a component, feature, or improvement you implemented], if accurate.
2. Replace this phrase with [the specific improvement the library enabled, such as faster or more consistent page development], if accurate; otherwise cut the aside.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Important] The editor-interview and preview-mode result should lead this entry.

**Why**
This bullet connects user research to a measurable reduction in broken pages. Leading with it gives a reader the result before the less specific ownership bullet.

**How to change it**
Move this bullet above the opening bullet in the entry.

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] The accessibility checklist does not identify the standard or checks behind it.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Polish] The method appears before the measurable result.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
1. [Important] The 35% performance improvement does not name the metric measured.
2. [Polish] The repeated “by” blurs the result and the method.

**Why**
1. A reader cannot tell whether the percentage refers to load time, bundle size, or another measure. Without a clear metric, the result is difficult to interpret or compare.

**How to change it**
1. Replace “page performance” with [the specific metric that improved], if accurate.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The test result is presented as an aside rather than a direct outcome.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
1. [Error] The claim that lazy-loading the hero image cut LCP is technically unsupported.
2. [Polish] The loading-attribute detail comes after the full result.

**Why**
1. If the hero image is the LCP element, lazy-loading can delay its fetch and worsen LCP. The stated method does not support the claimed reduction.

**How to change it**
1. If another change produced the reduction, name that change; otherwise remove the attribution to `loading="lazy"` and report only a result you can substantiate.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] React state does not sanitize input, and `dangerouslySetInnerHTML` still interprets it as HTML.
2. [Important] The XSS-prevention outcome has no stated supporting check.
3. [Polish] The long implementation clause buries the outcome and uses a dense technical expression.

**Why**
1. Storing untrusted input in React state does not make it safe, so the described approach does not prevent XSS. A reader may doubt the security claim and the accuracy of the implementation detail.
2. The bullet claims a security outcome without showing how it was assessed. A reader may ask what evidence supports the claim, especially given the unsafe rendering approach described.

**How to change it**
1. If you sanitized input before rendering, name [the sanitizer]; otherwise remove the XSS-prevention claim and describe a safe rendering approach only if you implemented one.
2. If you performed one, add [a security test or audit result]; otherwise remove or soften the prevention claim.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The hotel-search result should lead the internship entry.

**Why**
This bullet pairs a specific load-time reduction with a booking increase in an A/B test. Leading with it helps a reader notice the clearest result before the other bullets.

**How to change it**
Move this bullet to the top of the Lumen Travel entry.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] The live-arrivals bullet does not say how the app obtains or presents arrival data.
2. [Polish] The weekly rider count could be read as describing the stops rather than the app.

**Why**
1. A reader can see what the app does, but not the technical work behind its live-data feature. One integration detail would make that contribution easier to assess.

**How to change it**
1. After this phrase, add [the arrival-data source or integration you implemented], naming a specific API only if accurate.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “Against 2.9s before” is an indirect way to state the baseline.

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
1. [Polish] The open-source bullet does not identify a technical or release contribution.
2. [Polish] The open-source phrase is awkwardly joined to a full clause.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The booking-flow bullet names React while the project heading names Vue.
2. [Important] The booking-flow bullet does not name a concrete contribution or result.

**Why**
1. Both framework labels appear to describe the same project, so a reader cannot tell which stack was used. That uncertainty makes the technical contribution harder to interpret.
2. A reader sees the area you worked on, but not what changed for users or how the work can be checked. That makes the contribution difficult to evaluate.

**How to change it**
1. Confirm which framework the project used and make the heading and bullet consistent; keep TypeScript only if it was part of the implementation.
2. Replace “Worked on the frontend” with [a specific change you made] and add [a user-facing result or checkable outcome], if accurate.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar bullet should lead the hackathon entry.
2. [Polish] The calendar component and its tests do not state what they enabled or verified.

**Why**
1. It names a specific component and the booking edge cases it handled. Leading with it gives a reader a clearer account of your contribution than the general booking-flow bullet.

**How to change it**
1. Move this bullet above the booking-flow bullet.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search bullet does not fit the Library Room Booking entry and appears to duplicate the Lumen Travel achievement.
2. The booking increase has no stated comparison or time period.
3. The implementation detail comes before the performance and booking results.

**Why**
1. As written, the bullet attributes travel-search work to a library booking project, while the internship entry describes a similar server-rendered search-page result. A reader may doubt which project produced the result or whether the same work is being counted twice.
2. A reader cannot tell what the approximate tenth is measured against or when the increase occurred. That makes the result difficult to interpret and verify.
3. A scanning reader reaches the outcome only after the rebuild and rendering details. Putting the results first would make the impact easier to notice.

**How to change it**
1. Replace this bullet with work and results from the library booking project; if the travel-search result belongs to Lumen Travel, keep it there. If it is distinct, explain that connection and align the figures if it is the same work.
2. If accurate, add [the comparison or baseline] and [the period measured]; otherwise remove the booking-lift claim.
3. Move the performance and booking results before the implementation detail, if this bullet remains and the results are accurate.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled.

**Why**
The misspelling can make a reader question the care taken with the skills list. It also makes the tool harder to recognize at a glance.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular is listed without supporting experience in the résumé.

**Why**
A reader cannot see where you used Angular or what work demonstrates the skill. The unsupported listing may invite questions about your level of experience.

**How to change it**
Remove “Angular” from Tools unless you can add accurate supporting experience.

## Already working

- s2:e1:b1: Connects specific accessibility improvements to a clear audit outcome.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-0e66975e.md.

