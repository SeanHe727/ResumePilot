> Here is my resume: bench/planted-defects/tests-final/b3-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed all five entries with bullets, plus the resume’s overall narrative and ATS formatting. I didn’t compare it with a job posting.

The main changes to address:

- **Resolve two credibility conflicts:** the Library Room Booking entry lists Vue but mentions React and TypeScript; also, its server-rendering and bookings result resembles the result claimed in the Lumen Travel internship. Clarify which technologies and work belong to each project.
- **Check the security claim** in the Lumen Travel entry: the reviewer flagged that storing input in React state does not, by itself, prevent XSS when using `dangerouslySetInnerHTML`. Clarify what protection was actually implemented and how it was verified.
- **Lead with relevant experience:** put Experience before Education, and shorten the barista entry to make more room for development work. For the development roles, put the clearest outcomes earlier; consider whether the library booking project’s travel-search result belongs there.
- **Clean up details:** clarify the performance measure behind the internship’s “35%” improvement, fix the corrupted “cafØ” text and “Storybok” spelling, and check the unsupported Angular skill against your actual experience.

The file parses cleanly for ATS. The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 83 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 17 important, 8 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> “server-side rendering”

**Problem**
[Error] The hotel-search results are attributed to two entries with dates a year apart, and the descriptions read as the same achievement.

**Why**
The Lumen internship dates are Jun–Sep 2025, while the Library Room Booking dates are Feb–Mar 2024; both descriptions claim a server-rendered search-page rebuild, a load-time reduction of more than half, and higher bookings. A reader may question which entry owns the achievement or whether the projects differed, which can undermine confidence in both accounts.

**How to change it**
Correct the attribution or clarify how the work differed [using the accurate project and result details].

> “EDUCATION”

**Problem**
[Important] The résumé places EDUCATION ahead of EXPERIENCE.

**Why**
A frontend engineering reader sees education before the development work most relevant to the role. That ordering delays the experience that could make the strongest first impression.

**How to change it**
Move EXPERIENCE ahead of EDUCATION.

> “Barista”

**Problem**
[Important] The Barista entry takes space from development experience with routine duties.

**Why**
The two responsibility-focused bullets occupy space without showing outcomes. Keeping the entry to one line gives more room to the development experience.

**How to change it**
Shorten the Barista entry to one line, retaining only the most relevant information and any verified outcome.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
1. [Polish] The drinks and stocking duties have no stated outcome.
2. [Polish] “Prepared” is past tense even though this is a current role.

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” contains a corrupted character; the correct spelling is “café.”
2. [Polish] The opening and cash-count responsibilities have no stated outcome.
3. [Polish] “Opened” and “handled” are past tense even though this is a current role.

**Why**
1. The corrupted character is visibly not the correct spelling. It can make the résumé look unproofread and distract from the responsibility described.

**How to change it**
1. Replace “cafØ” with “café.”

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] “Page performance” does not identify the measure behind the 35% improvement or its comparison point.

**Why**
A reader cannot tell whether the change affected load time, bundle size, or another measure, or judge the starting point. Naming the measure and comparison makes the result interpretable.

**How to change it**
Replace “page performance” with [the performance metric] and add the comparison, such as “from [baseline]”; include only figures you can verify.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The tests’ result is framed as an aside rather than their outcome.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing user input in React state does not prevent cross-site scripting when it is rendered with `dangerouslySetInnerHTML`.
2. [Important] The claim that cross-site scripting was prevented has no stated verification.

**Why**
1. That rendering method bypasses React’s normal text escaping, and React state does not sanitize the content. As written, the claimed prevention method leaves the XSS risk in place.
2. Without a checkable result, a reader cannot see what supports the prevention claim. One validation detail would make the outcome more credible without adding a technical report.

**How to change it**
1. Render comments as text, or, if HTML is required, sanitize it with a suitable HTML sanitizer before using `dangerouslySetInnerHTML` [if that was done].
2. After the outcome, add [a security test or audit result demonstrating the prevention], if available.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The strongest result in the hotel-search bullet does not lead the line.

**Why**
The load-time and bookings results are the clearest evidence of impact, but they follow the rebuild description. Putting the results first makes the line’s strongest information easier to notice.

**How to change it**
Move the result phrase to the beginning of the bullet; leave the existing figures and method attached to the achievement.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] “Owned” describes responsibility without saying what action you took with the websites and library.
2. [Important] The websites and library responsibility has no stated outcome.

**Why**
1. A reader can see the scope of your responsibility, but cannot tell what you did with the websites or shared library. That leaves the work itself harder to assess.
2. A reader can see what you were responsible for, but not what your work made better for the department or other developers. The line therefore shows scope without showing the value of that ownership.

**How to change it**
1. Replace “Owned” with [the specific action you took with the websites and library].
2. Replace “other developers relied on” with [what the library enabled or improved, and evidence of that result if available].

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Important] The reduction in broken-page reports is the key result, but it comes after the interview and preview-mode details.

**Why**
The reader has to get through the process description before seeing the result. Leading with the drop from 30 to 6 reports makes the impact easier to find.

**How to change it**
Move the reduction in broken-page reports to the start of the bullet, before the interview and preview-mode details.

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Important] The reduction in failed audits is the strongest information, but it follows the checklist description.

**Why**
The result is the clearest evidence of the checklist’s effect, yet a reader encounters the action before the outcome. Leading with the reduction makes the impact more immediate.

**How to change it**
Move “reducing failed audits from 12 to 2 a semester” to the start of the bullet, before the checklist description.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The reduction in search time is the main result, but it comes after the rebuild and filtering details.

**Why**
A reader sees the implementation before the clearest evidence of its effect. Leading with the time reduction makes the result easier to notice.

**How to change it**
Move “cutting search time from 4 seconds to under 1” to the start of the bullet, before the rebuild and filtering details.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] The live-arrivals bullet does not say how the live data reached the app.

**Why**
A reader can see the feature and its reach, but not the technical contribution behind it. One detail about the data source or integration would make your skill easier to assess.

**How to change it**
Add [the arrival-data source or API integration], if accurate.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “Against 2.9s before” makes the previous load time awkward to parse.

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] The comma and “and” make the agency link’s connection to open-sourcing the app less direct.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The entry heading names Vue, but the booking-flow bullet names React and TypeScript; the technology is inconsistent within the project.
2. [Important] “Worked on” is vague, and the bullet does not state an outcome of the frontend work.
3. [Polish] “Using React and TypeScript” names tools without showing how they were used to build the booking flow.

**Why**
1. A reader cannot tell which frontend stack this project used. That inconsistency can make the project description seem unreliable, so the heading and bullet need to agree on what was actually used.
2. A reader can see the general area of contribution but not what you specifically did or what it accomplished. Without an outcome, the line gives little evidence of why the contribution mattered.

**How to change it**
1. Confirm which stack was used and change the heading or bullet to match; if both were used, clarify their respective roles [if accurate].
2. Replace “Worked on” with [the action performed] and add [the outcome of the frontend work], with [a measure compared with a baseline or prior state] if available.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar component and tests have no stated outcome.
2. [Important] The calendar-component bullet should come before the opening booking-flow bullet.

**Why**
1. The edge cases make the scope of the work clearer, but a reader cannot tell what benefit the component or tests delivered. One concrete outcome would show its value.
2. The calendar component and its tests are the more specific contribution in the two booking-related bullets. Putting that work first gives the reader a clearer account of your project contribution sooner.

**How to change it**
1. Add [the outcome the component or tests enabled], such as a specific defect caught or behavior supported, if accurate.
2. Move this bullet ahead of the booking-flow bullet.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
“Lifting bookings by about a tenth” does not say whether the change is relative or in percentage points, or what period it covers.

**Why**
A reader cannot interpret the size or measurement period of the bookings result. Clarifying both would make the claim more precise without changing the reported result.

**How to change it**
Replace “about a tenth” with [the verified relative increase or percentage-point change] and add [the period covered].

> “Rebuilt a travel search page”

**Problem**
[Important] The travel-search and bookings bullet reads as unrelated work for this booking project.

**Why**
The booking-flow and calendar bullets fit the project, but the travel-search result does not. Keeping it here can make a reader question whether the project details have been attributed correctly.

**How to change it**
Cut this bullet from the Library Room Booking entry.

## Skills

> “Storybok”

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
The tool name is written incorrectly, which can look like a proofreading error and distract a reader familiar with it.

**How to change it**
Replace “Storybok” with “Storybook.”

> “Angular”

**Problem**
[Important] “Angular” is listed without a corresponding experience or project that plausibly used it.

**Why**
A reader cannot connect the tool to any described work. The unexplained listing may raise questions about how the skill was used.

**How to change it**
Remove “Angular” unless you can add relevant work that accurately demonstrates its use.

## Already working

- s2:e1:b1: Connects specific accessibility improvements to a counted audit result.
- s2:e1:b3: Provides a specific before-and-after performance measure.

## Set aside (1)

1 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-39880f93.md.

