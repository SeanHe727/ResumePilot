> Here is my resume: bench/planted-defects/tests-final/b4-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five entries with bullets for content and wording, plus the full-resume narrative and ATS formatting. The two education entries have no bullets to review. I didn’t compare against a job posting because none was provided.

The main changes to address:
- **Resolve conflicts in the Library Room Booking project:** its heading says Vue, while a bullet says React and TypeScript. Another bullet describes a travel-search result that appears to duplicate an accomplishment in the Lumen Travel internship; clarify which project the work belongs to.
- **Revisit the XSS claim in the Lumen Travel internship:** the bullet says user input was rendered with `dangerouslySetInnerHTML`, but doesn’t identify a safeguard that would support the claim that cross-site scripting was prevented.
- **Clarify results and measures:** specify what “page performance by 35%” and “search time from 4 seconds to under 1” measure, and give the baseline for the internship’s performance change.
- **Reorder Experience:** move the barista role below the technical roles. The narrative review also flagged the Aug 2024–Jun 2025 gap and unsupported Angular listing for you to check.

The resume parses cleanly as a one-page document. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**81/100** — format 100 · content 69 · wording 81 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] The résumé leaves an unaccounted period between the university web-development role and the internship.

**Why**
The listed roles end in August 2024 and begin again in June 2025, while the M.S. program is shown as ongoing. A reader may wonder what you were doing during the gap, and the résumé does not answer that question.

**How to change it**
If you had relevant work or another activity to include in that period, add [that activity and its dates]; do not invent a role to fill the gap.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
1. [Polish] The stocking detail does not show how it affected the rush.
2. [Polish] “Prepared drinks” names a task but not a barista skill or technique.

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is a corrupted spelling of “café.”
2. [Polish] The opening and cash-counting responsibilities have no stated result.
3. [Polish] “Handled” obscures the specific action you took on the cash count.

**Why**
1. The corrupted character makes the word look like a résumé typo rather than the intended spelling. That can distract the reader from the responsibility this bullet describes.

**How to change it**
1. Replace “cafØ” with “café.”

> Barista

**Problem**
[Polish] The Barista entry leads the experience section ahead of the technical experience.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% performance improvement does not name its metric or comparison.

**Why**
A reader cannot tell whether the change refers to load time, bundle size, or another measure. Without the baseline or comparison, the percentage has no clear reference and is difficult to interpret.

**How to change it**
Replace “page performance” with [the metric measured] and add [the baseline or comparison used] so the percentage has a clear reference.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The test result comes after the test-writing detail, making the impact harder to scan.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] React state does not prevent cross-site scripting when untrusted input is rendered with `dangerouslySetInnerHTML`.
2. [Important] The XSS prevention claim has no stated verification result.

**Why**
1. React state does not sanitize input, and `dangerouslySetInnerHTML` parses it as HTML. Untrusted comments can still contain executable content unless they are safely rendered or sanitized, so the described method does not support the prevention claim.
2. A reader cannot tell what demonstrated that the risk was addressed. Without a test, audit, or other verification, the prevention claim is harder to assess.

**How to change it**
1. If you rendered comments as text or sanitized them before using `dangerouslySetInnerHTML`, name that actual safeguard. If you did not implement an effective safeguard, remove or soften the prevention claim.
2. If you have a supporting verification result, add [the security test, audit, or other verification result]; otherwise, do not present prevention as verified.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Polish] The load-time and booking results are buried after a long implementation setup.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] “Owned” describes responsibility but does not say what you did with the websites or library.
2. [Polish] The ownership claim has no stated result.
3. [Polish] “Other developers relied on” is a vague justification for the library.

**Why**
1. A reader can see the scope of your responsibility but gets little evidence of your web-development contribution or technical work. Naming one representative action would make the experience more concrete.

**How to change it**
1. Replace the ownership framing with [one representative change or technical responsibility], if accurate.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The broken-page reduction appears after the interview detail, making the result harder to scan.

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] The checklist description does not say what it covered.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not say what was timed.

**Why**
Page response time and the time a user takes to find a course describe different improvements. Without clarifying the measure, a reader cannot tell what became faster.

**How to change it**
Replace “search time” with [what was timed, such as response time or time to find a course], if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The live-arrival detail does not say how the app obtains the data.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
1. [Polish] “Opened in 0.8s” does not define what counted as opening.
2. [Polish] “Against 2.9s before” is an awkward, clipped comparison.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The React and TypeScript claim conflicts with the Vue stack in the heading.
2. [Polish] “Worked on the frontend” is vague participation framing.
3. [Polish] The booking-flow contribution has no stated result or benefit.

**Why**
1. A reader cannot tell which framework the project used or which stack you worked in. The conflicting descriptions also make the project details less trustworthy.

**How to change it**
1. If accurate, replace the framework name in the heading or bullet so both identify the same stack.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar-component detail has no stated outcome.
2. [Polish] The calendar-component bullet is not the opening bullet, though it is the stronger project accomplishment.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search bullet does not describe work on the Library Room Booking project.
2. The travel-search results do not identify their measures or comparison points.
3. The impact is buried after the implementation detail.
4. “More than” and “about” soften the results and add wording.

**Why**
1. This entry is for a library room-booking hackathon, but the bullet describes a travel-search rebuild and its performance and booking results. Those results closely match the Lumen Travel internship bullet, despite the projects having different dates, so a reader may doubt which entry the achievement belongs to.
2. A reader cannot tell what load-time measure was more than halved or what baseline and period the booking change uses. Without those references, the results are difficult to interpret, even if the figures are accurate.
3. The load-time and booking results are the bullet’s main outcomes, but a reader encounters the implementation first. Leading with the impact would make the accomplishment faster to scan.
4. Those qualifiers make the impact less direct and less precise. If the figures are accurate, concise quantified phrasing would communicate them more clearly.

**How to change it**
1. Correct the attribution or clarify how the work differed. Replace this with [the actual library-booking work and result], or remove it if it does not belong to this project.
2. If this achievement belongs here, replace the vague results with [the load-time measure and baseline] and [the booking comparison period and baseline].
3. Move the load-time and booking results before the implementation detail, if this achievement belongs in the entry.
4. Remove “more than” and “about” and use concise quantified phrasing only if the figures are accurate.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled in Skills—Tools.

**Why**
The misspelling can make a reader question the accuracy of the skills list. It is a small correction that prevents an avoidable distraction.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular appears in Skills—Tools without a supporting role or project entry.

**Why**
A reader cannot connect Angular to any experience described in the résumé. Listing it without supporting evidence may prompt questions about your actual experience with the tool.

**How to change it**
Remove Angular unless [relevant experience you can substantiate] belongs on the résumé.

## Already working

- s2:e1:b1: Connects specific accessibility changes to a measurable audit outcome.
- s2:e1:b3: Pairs a named performance measure with before-and-after values.
- s3:e0:b2: The agency link is a specific third-party signal rather than a general claim of recognition.

## Set aside (3)

3 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-f000e641.md.

