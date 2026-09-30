> Here is my resume: bench/planted-defects/tests-final/b3-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all 5 entries with bullets for content and wording, plus the full resume for narrative and format. The 2 education entries have no bullets; no job description was provided, so no job-match review was run.

The main changes to address:
- **Resolve two project inconsistencies:** Library Room Booking is labeled Vue, but a bullet says React/TypeScript. Also, a travel-search-page achievement appears under both Lumen Travel and the library project; clarify where it belongs.
- **Fix specific credibility and clarity issues:** correct “Storybok” to “Storybook”; name the performance metric behind the internship’s 35% improvement; and clarify the security claim about `dangerouslySetInnerHTML`.
- **Strengthen weaker bullets:** reviewers flagged the barista bullets and the university role’s “Owned the department websites…” bullet as duties without clear outcomes. Several other bullets would benefit from stating exactly what was built or measured.

The resume is one page and parses cleanly for ATS. The full report is available at `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 68 · wording 83 · narrative 65

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 5 important, 20 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> raising bookings per search 9%; lifting bookings by about a tenth

**Problem**
[Error] The Lumen internship and Library Room Booking project appear to attribute the same travel-search achievement to different entries and dates.

**Why**
Both entries describe rebuilding a travel-search page with server rendering, more than halving load time, and increasing bookings, but the entries have different dates. A reader may question whether this is duplicated work or whether the achievement has been attributed to the wrong project, which can undermine confidence in both entries.

**How to change it**
Correct the attribution or clarify how the work differed; use [the accurate project, dates, and distinction between the work] based on what you actually did.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
1. [Polish] The drink-preparation and stocking work has no stated service outcome.
2. [Polish] The phrase “Prepared drinks” does not show a barista skill or technique.

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is misspelled; the correct spelling is “café.”
2. [Polish] Opening the café and counting cash are listed without stating what those duties accomplished.
3. [Polish] The cash-count responsibility does not explain how you checked or reconciled the count.

**Why**
1. The spelling error is visible in a short responsibility bullet and can distract from the work it describes. Correcting it removes an avoidable credibility issue.

**How to change it**
1. Replace “cafØ” with “café.”

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% improvement does not identify the performance metric.

**Why**
A reader cannot tell whether the change was in load time, bundle size, or another measure. Without the metric, the 35% result is difficult to interpret or compare.

**How to change it**
Replace “page performance” with [the specific performance metric] and keep the 35% change tied to that measure.

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] The accessibility result comes after the implementation detail, delaying the strongest outcome.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The regression result comes after the test-writing detail, delaying the outcome.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The LCP improvement is incorrectly attributed to lazy-loading the hero image.

**Why**
Lazy loading defers fetching an image until it is near the viewport. When the hero image is the LCP element, that delay can make it load later, so the stated improvement cannot be credited to lazy-loading that image as written.

**How to change it**
If the change instead prioritized or eagerly loaded the hero image, describe that change if accurate; otherwise remove the attribution to `loading="lazy"`.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] React state does not prevent XSS, and rendering user input with `dangerouslySetInnerHTML` can leave attacker-controlled markup executable.
2. [Important] The claim that you prevented cross-site scripting has no stated evidence.

**Why**
1. React state does not sanitize or neutralize user input. `dangerouslySetInnerHTML` bypasses React’s normal escaping, so user-controlled markup can still execute unless it is safely sanitized.
2. The bullet makes a security result claim, but gives no checkable result to support it. A reader cannot tell what test or verification established that the vulnerability was prevented.

**How to change it**
1. If you sanitized the input with a suitable HTML sanitizer before rendering, name that step. Otherwise render it as text without `dangerouslySetInnerHTML` and remove the XSS-prevention claim.
2. If you have a checkable result, add [XSS test cases passed out of total cases]; do not add a result you did not verify.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Polish] The load-time and booking results are buried after the implementation detail.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Polish] The ownership claim gives no outcome for the websites or component library.
2. [Polish] “Owned the department websites” describes responsibility rather than the specific work you did.
3. [Polish] “Other developers relied on” is wordy without adding a concrete detail about the library.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The result of the editor interviews appears after the interview detail, delaying the impact.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The change from 4 seconds to under 1 does not specify what “search time” measures.

**Why**
A reader cannot tell whether the figure is system response time or the time users took to find a course. Clarifying the measure makes the performance result interpretable.

**How to change it**
Replace “search time” with [the specific measure, such as query response time or time for users to find a course], if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The app’s function is clear, but the change it made for riders is not.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
1. [Polish] The comparison phrase “against 2.9s before” is awkward and makes the baseline less clear.
2. [Polish] The offline-caching claim does not say how you implemented the caching.

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] Open-sourcing the app describes distribution, not the technical contribution behind it.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The project heading lists Vue, but the booking-flow bullet names React and TypeScript, leaving the framework used unclear.
2. [Polish] “Worked on the frontend of the booking flow” gives no outcome from your contribution.
3. [Polish] “Worked on the frontend” does not identify what you built or changed.

**Why**
1. As written, the heading and the booking-flow description give conflicting frontend stacks for the same project. They could both be accurate only if the project used both frameworks, which the entry does not explain.

**How to change it**
1. Use the framework actually used for the booking flow and align the project’s technology label with it. If both Vue and React were used, clarify which part used each.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar bullet should lead this entry because it is the stronger, more specific project contribution.
2. [Polish] The calendar behavior is stated without describing what it changed for users or the project.
3. [Polish] “Its tests” does not say what behavior the tests verified.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. The booking increase does not name its metric or comparison period.
2. The impact is buried after the implementation detail, and the approximate results are phrased indirectly.

**Why**
1. A reader cannot tell what “bookings” counts or what period “about a tenth” is compared with. Without those details, the result is difficult to interpret.
2. The reader reaches both outcomes only after the server-rendering implementation detail. Moving the outcomes forward makes them easier to notice; stating the estimates plainly avoids making them sound less direct than the evidence supports.

**How to change it**
1. Clarify [the booking metric] and [the period or baseline used for comparison], if accurate; keep the stated estimate unless you can support a more exact figure.
2. Move the load-time and booking results before “Rebuilt a travel search page.” If exact gains are verified, use [the verified figures]; otherwise keep the results clearly qualified as estimates.

> Rebuilt a travel search page with server rendering

**Problem**
[Important] The travel-search-page bullet is a different project and breaks the Library Room Booking entry’s focus.

**Why**
The heading and the booking-flow and calendar bullets describe a room-booking project, while this bullet describes a travel search page. Leaving it here makes the project’s scope harder to follow.

**How to change it**
Remove the travel-search-page bullet from this project entry.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
The misspelling is visible in the skills list and can distract a reader reviewing technical tools. Correcting it avoids an unnecessary accuracy concern.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] The résumé lists Angular without an experience or project entry that supports it.

**Why**
A reader checking the skills against the work described cannot find evidence of Angular use. That can make the skills list seem less reliable and invite questions about the level of experience.

**How to change it**
Remove Angular from Skills—Tools unless you have relevant experience to support it; if accurate, add [the relevant experience] to the résumé.

## Already working

- s2:e2:b2: Shows a concrete accessibility intervention and an outcome measured over semesters.

## Set aside (2)

2 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-5f198757.md.

