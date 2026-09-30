# Full review: resume.pdf

**81/100** — format 100 · content 68 · wording 83 · narrative 65

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 5 important, 20 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> raising bookings per search 9%; lifting bookings by about a tenth

**Problem**
[Error] The Lumen internship and Library Room Booking project appear to attribute the same travel-search achievement to different entries and dates. *(about 5 words to add if clarification is needed)*

**Why**
Both entries describe rebuilding a travel-search page with server rendering, more than halving load time, and increasing bookings, but the entries have different dates. A reader may question whether this is duplicated work or whether the achievement has been attributed to the wrong project, which can undermine confidence in both entries.

**How to change it**
Correct the attribution or clarify how the work differed; use [the accurate project, dates, and distinction between the work] based on what you actually did.

*raised by narrative*

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
1. [Polish] The drink-preparation and stocking work has no stated service outcome. *(about 8 words to add)*
2. [Polish] The phrase “Prepared drinks” does not show a barista skill or technique. *(about 4 words to add)*

**Why**
1. A reader can see that the morning rush involved about 200 orders, but not what your preparation or stocking changed for customers or the team. Without that result, the workload is visible but the value of your work is not.
2. The task is clear, but a reader cannot tell whether it involved a particular drink-making technique or level of skill. Naming a relevant technique would make the barista experience more specific.

**How to change it**
1. Keep the order volume as context and add [the service result your preparation or stocking enabled, and how you know], such as fewer stockouts if accurate. If relevant, also add [one specific drink-making technique or skill you used].
2. If it is a meaningful part of your work, add [one specific drink-making technique or skill you used].

*raised by content*

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is misspelled; the correct spelling is “café.” *(no words)*
2. [Polish] Opening the café and counting cash are listed without stating what those duties accomplished. *(about 6 words to add)*
3. [Polish] The cash-count responsibility does not explain how you checked or reconciled the count. *(about 6 words to add)*

**Why**
1. The spelling error is visible in a short responsibility bullet and can distract from the work it describes. Correcting it removes an avoidable credibility issue.
2. A reader can see that you were trusted with opening three days a week and handling the daily count, but not what those duties ensured for the shift or business. A specific result would show the value of that responsibility.
3. The reader knows you handled the count, but cannot tell what made it accurate or how you verified it. A brief process detail would make the cash-handling skill more credible.

**How to change it**
1. Replace “cafØ” with “café.”
2. Add [the specific opening or cash-handling outcome you can support], such as the shift being ready on time if accurate.
3. If accurate, add [the key check you used, such as reconciling the count against the register total].

*raised by wording, content*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% improvement does not identify the performance metric. *(about 1 word to add)*

**Why**
A reader cannot tell whether the change was in load time, bundle size, or another measure. Without the metric, the 35% result is difficult to interpret or compare.

**How to change it**
Replace “page performance” with [the specific performance metric] and keep the 35% change tied to that measure.

*raised by content*

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] The accessibility result comes after the implementation detail, delaying the strongest outcome. *(no words)*

**Why**
A scanning reader reaches the 14 issues fixed only after reading how you changed the date picker. Leading with the result makes the impact apparent sooner.

**How to change it**
Move “fixing all 14 accessibility issues flagged in the audit” to the start of the bullet, before the keyboard-navigation and screen-reader-label details.

*raised by wording*

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The regression result comes after the test-writing detail, delaying the outcome. *(no words)*

**Why**
The reader must get to the end of the bullet to see that the tests caught three regressions. Leading with that result helps the impact register faster.

**How to change it**
Move “caught 3 regressions before release” ahead of the 60-test detail.

*raised by wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The LCP improvement is incorrectly attributed to lazy-loading the hero image. *(no words)*

**Why**
Lazy loading defers fetching an image until it is near the viewport. When the hero image is the LCP element, that delay can make it load later, so the stated improvement cannot be credited to lazy-loading that image as written.

**How to change it**
If the change instead prioritized or eagerly loaded the hero image, describe that change if accurate; otherwise remove the attribution to `loading="lazy"`.

*raised by content*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] React state does not prevent XSS, and rendering user input with `dangerouslySetInnerHTML` can leave attacker-controlled markup executable. *(about 4 words to add if the sanitizer step was done; otherwise no words)*
2. [Important] The claim that you prevented cross-site scripting has no stated evidence. *(about 5 words to add)*

**Why**
1. React state does not sanitize or neutralize user input. `dangerouslySetInnerHTML` bypasses React’s normal escaping, so user-controlled markup can still execute unless it is safely sanitized.
2. The bullet makes a security result claim, but gives no checkable result to support it. A reader cannot tell what test or verification established that the vulnerability was prevented.

**How to change it**
1. If you sanitized the input with a suitable HTML sanitizer before rendering, name that step. Otherwise render it as text without `dangerouslySetInnerHTML` and remove the XSS-prevention claim.
2. If you have a checkable result, add [XSS test cases passed out of total cases]; do not add a result you did not verify.

*raised by content, wording*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Polish] The load-time and booking results are buried after the implementation detail. *(no words)*

**Why**
The line leads with the rebuild and server-side-rendering details, so the reader reaches both outcomes late. Putting the results first makes the measured performance and booking impact easier to notice.

**How to change it**
Move the load-time reduction and booking increase before “Rebuilt the hotel search results page in React with server-side rendering.”

*raised by narrative, wording*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Polish] The ownership claim gives no outcome for the websites or component library. *(about 8 words to add)*
2. [Polish] “Owned the department websites” describes responsibility rather than the specific work you did. *(about 3 words to add)*
3. [Polish] “Other developers relied on” is wordy without adding a concrete detail about the library. *(saves about 4 words)*

**Why**
1. A reader can see the scope of your responsibility, but not what improved for editors, students, or developers. One concrete result and its measure would make the ownership more persuasive.
2. The line does not reveal how you worked on the websites or shared component library. A specific technical contribution would help the reader understand your personal web-development work.
3. The phrase does not show what the library contained or how you contributed to it. It takes space without making the technical work more specific.

**How to change it**
1. Add [the most important change your work produced] and, if available, [a measure compared with the prior state].
2. Replace “Owned” with [one concrete implementation or maintenance action you took], rather than a general list of responsibilities.
3. Cut “other developers relied on” and use the space for a concrete library detail if accurate.

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The result of the editor interviews appears after the interview detail, delaying the impact. *(no words)*

**Why**
A reader has to reach the end of the line to learn that broken-page reports fell from 30 to 6 a month. Leading with that outcome makes the result easier to notice while scanning.

**How to change it**
Move the broken-page reduction before the interview detail; keep the interview and preview-mode explanation after it.

*raised by narrative, wording*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The change from 4 seconds to under 1 does not specify what “search time” measures. *(about 1 word to add)*

**Why**
A reader cannot tell whether the figure is system response time or the time users took to find a course. Clarifying the measure makes the performance result interpretable.

**How to change it**
Replace “search time” with [the specific measure, such as query response time or time for users to find a course], if accurate.

*raised by content*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The app’s function is clear, but the change it made for riders is not. *(about 6 words to add)*

**Why**
A reader can see that the app displays live bus arrivals and reaches about 900 riders a week, but not what problem it solves for them. A concrete rider benefit would make the project’s value clearer.

**How to change it**
Replace or expand “showing live bus arrivals” with [what riders can now do or avoid compared with their previous option], if accurate; keep the weekly rider figure.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
1. [Polish] The comparison phrase “against 2.9s before” is awkward and makes the baseline less clear. *(about 1 word to add)*
2. [Polish] The offline-caching claim does not say how you implemented the caching. *(about 4 words to add)*

**Why**
1. The reader can infer that 2.9 seconds is the earlier result, but “against” makes the comparison less natural to read. A clearer comparison keeps the improvement easy to scan.
2. The line states the general approach and gives a speed comparison, but no implementation detail. One specific detail could make the technical work more credible to a reader assessing the project’s engineering depth.

**How to change it**
1. Replace “against 2.9s before” with “compared with 2.9s before.”
2. If accurate, add [the specific service-worker or cache strategy used] after “offline.”

*raised by wording, content*

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
[Polish] Open-sourcing the app describes distribution, not the technical contribution behind it. *(about 6 words to add)*

**Why**
The transit agency link shows external recognition, but a reader still cannot tell what work demonstrated your engineering or transit-domain skill. Naming one substantive contribution would make that evidence more informative.

**How to change it**
Add [the specific technical contribution that led to the agency link], if accurate; avoid adding general publishing details.

*raised by content*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The project heading lists Vue, but the booking-flow bullet names React and TypeScript, leaving the framework used unclear. *(no words if one label is replaced)*
2. [Polish] “Worked on the frontend of the booking flow” gives no outcome from your contribution. *(about 6 words to add)*
3. [Polish] “Worked on the frontend” does not identify what you built or changed. *(about 3 words to add)*

**Why**
1. As written, the heading and the booking-flow description give conflicting frontend stacks for the same project. They could both be accurate only if the project used both frameworks, which the entry does not explain.
2. A reader cannot tell what your work enabled or improved in the booking experience. A concrete result would show why the contribution mattered.
3. React and TypeScript name tools, but the reader still cannot picture your technical contribution. Naming a component or behavior would make your specific work clearer.

**How to change it**
1. Use the framework actually used for the booking flow and align the project’s technology label with it. If both Vue and React were used, clarify which part used each.
2. Replace the broad description with [the specific change you made and what it enabled or improved].
3. Replace “Worked on” with [the specific frontend component or behavior you implemented].

*raised by content, narrative, wording*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar bullet should lead this entry because it is the stronger, more specific project contribution. *(no words)*
2. [Polish] The calendar behavior is stated without describing what it changed for users or the project. *(about 6 words to add)*
3. [Polish] “Its tests” does not say what behavior the tests verified. *(about 4 words to add)*

**Why**
1. The calendar component and its handling of overlapping bookings and time-zone changes are more specific to the project than the broad booking-flow bullet. Leading with the calendar work lets that contribution register first.
2. The reader can see which cases the component supports, but not the value that resulted. A brief consequence would make the contribution more meaningful.
3. Mentioning tests suggests validation, but the reader cannot tell whether they covered the overlapping-booking and time-zone cases. Naming the key behavior verified would make the testing detail informative.

**How to change it**
1. Move the calendar bullet before the booking-flow bullet.
2. Add [the main booking problem this behavior prevented or improved] after this phrase.
3. Replace “its tests” with [the key edge-case behavior the tests verified].

*raised by narrative, content*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. The booking increase does not name its metric or comparison period. *(about 5 words to add)*
2. The impact is buried after the implementation detail, and the approximate results are phrased indirectly. *(no words for moving text)*

**Why**
1. A reader cannot tell what “bookings” counts or what period “about a tenth” is compared with. Without those details, the result is difficult to interpret.
2. The reader reaches both outcomes only after the server-rendering implementation detail. Moving the outcomes forward makes them easier to notice; stating the estimates plainly avoids making them sound less direct than the evidence supports.

**How to change it**
1. Clarify [the booking metric] and [the period or baseline used for comparison], if accurate; keep the stated estimate unless you can support a more exact figure.
2. Move the load-time and booking results before “Rebuilt a travel search page.” If exact gains are verified, use [the verified figures]; otherwise keep the results clearly qualified as estimates.

*raised by content, wording*

> Rebuilt a travel search page with server rendering

**Problem**
[Important] The travel-search-page bullet is a different project and breaks the Library Room Booking entry’s focus. *(saves about 21 words)*

**Why**
The heading and the booking-flow and calendar bullets describe a room-booking project, while this bullet describes a travel search page. Leaving it here makes the project’s scope harder to follow.

**How to change it**
Remove the travel-search-page bullet from this project entry.

*raised by narrative*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.” *(no words)*

**Why**
The misspelling is visible in the skills list and can distract a reader reviewing technical tools. Correcting it avoids an unnecessary accuracy concern.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

> Angular

**Problem**
[Important] The résumé lists Angular without an experience or project entry that supports it. *(saves 1 word if removed)*

**Why**
A reader checking the skills against the work described cannot find evidence of Angular use. That can make the skills list seem less reliable and invite questions about the level of experience.

**How to change it**
Remove Angular from Skills—Tools unless you have relevant experience to support it; if accurate, add [the relevant experience] to the résumé.

*raised by narrative*

## Already working

- s2:e2:b2: Shows a concrete accessibility intervention and an outcome measured over semesters.

## Set aside (2)

- s3:e1:b2: “lifting bookings by about a tenth” does not specify the booking metric or what period it is compared with.
- s3:e1:b2: The impact is buried after the implementation detail, and “more than” and “about” make the results less direct; lead with the load-time and booking gains and state the estimates plainly.
