# Full review: resume.pdf

**81/100** — format 100 · content 69 · wording 81 · narrative 67

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

4 errors, 7 important, 18 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] The résumé leaves an unaccounted period between the university web-development role and the internship. *(about 5 words to add)*

**Why**
The listed roles end in August 2024 and begin again in June 2025, while the M.S. program is shown as ongoing. A reader may wonder what you were doing during the gap, and the résumé does not answer that question.

**How to change it**
If you had relevant work or another activity to include in that period, add [that activity and its dates]; do not invent a role to fill the gap.

*raised by narrative*

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Prepared drinks for the morning rush of about 200 orders and kept the bar stocked.

**Problem**
1. [Polish] The stocking detail does not show how it affected the rush. *(about 6 words to add)*
2. [Polish] “Prepared drinks” names a task but not a barista skill or technique. *(about 4 words to add)*

**Why**
1. A reader can picture the responsibility but cannot tell whether stocking improved service or prevented interruptions. Without that effect, the detail adds little evidence of your contribution during a rush of about 200 orders.
2. The order volume gives useful context, but the preparation detail could still read as routine work. One specific technique or specialty would give a reader a clearer sense of your skill.

**How to change it**
1. Replace “kept the bar stocked” with [the effect your stocking had during the rush, if you can support it].
2. After “Prepared drinks,” add [one relevant preparation technique or drink specialty you used].

*raised by content*

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
1. [Error] “cafØ” is a corrupted spelling of “café.” *(no words)*
2. [Polish] The opening and cash-counting responsibilities have no stated result. *(about 5 words to add)*
3. [Polish] “Handled” obscures the specific action you took on the cash count. *(no words)*

**Why**
1. The corrupted character makes the word look like a résumé typo rather than the intended spelling. That can distract the reader from the responsibility this bullet describes.
2. A reader can see what you were trusted to do and how often, but not what those responsibilities accomplished. Without an outcome, the bullet is less persuasive as evidence of your contribution.
3. The phrase does not tell a reader whether you counted, reconciled, recorded, or performed another action. That leaves the responsibility less clear than it could be.

**How to change it**
1. Replace “cafØ” with “café.”
2. Add [one outcome of opening or cash counting that you can substantiate], keeping the frequency detail if it helps establish your responsibility.
3. Replace “handled” with [the specific cash-count action you took, if accurate].

*raised by wording, content*

> Barista

**Problem**
[Polish] The Barista entry leads the experience section ahead of the technical experience. *(no words)*

**Why**
A reader sees unrelated work before your technical roles, which can make your software experience less prominent on an initial scan. Keeping the role while reducing its prominence would preserve the experience without letting it lead.

**How to change it**
Move this entry below the technical experience entries, or reduce it to a brief line.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% performance improvement does not name its metric or comparison. *(about 5 words to add)*

**Why**
A reader cannot tell whether the change refers to load time, bundle size, or another measure. Without the baseline or comparison, the percentage has no clear reference and is difficult to interpret.

**How to change it**
Replace “page performance” with [the metric measured] and add [the baseline or comparison used] so the percentage has a clear reference.

*raised by content*

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The test result comes after the test-writing detail, making the impact harder to scan. *(no words)*

**Why**
A scanning reader has to reach the end of the bullet to learn that the tests caught regressions. Leading with that result would put the clearest outcome first.

**How to change it**
Move “caught 3 regressions before release” to the start of the bullet, ahead of the test-writing detail.

*raised by wording*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] React state does not prevent cross-site scripting when untrusted input is rendered with `dangerouslySetInnerHTML`. *(about 3 words to add)*
2. [Important] The XSS prevention claim has no stated verification result. *(about 5 words to add)*

**Why**
1. React state does not sanitize input, and `dangerouslySetInnerHTML` parses it as HTML. Untrusted comments can still contain executable content unless they are safely rendered or sanitized, so the described method does not support the prevention claim.
2. A reader cannot tell what demonstrated that the risk was addressed. Without a test, audit, or other verification, the prevention claim is harder to assess.

**How to change it**
1. If you rendered comments as text or sanitized them before using `dangerouslySetInnerHTML`, name that actual safeguard. If you did not implement an effective safeguard, remove or soften the prevention claim.
2. If you have a supporting verification result, add [the security test, audit, or other verification result]; otherwise, do not present prevention as verified.

*raised by content, wording*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Polish] The load-time and booking results are buried after a long implementation setup. *(no words)*

**Why**
The strongest evidence in the bullet is the measured load-time change and the A/B-test result. A reader may miss those outcomes while scanning the longer setup first.

**How to change it**
Move the load-time and booking results before the React and server-side-rendering implementation detail.

*raised by wording, narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] “Owned” describes responsibility but does not say what you did with the websites or library. *(about 2 words to add)*
2. [Polish] The ownership claim has no stated result. *(about 5 words to add)*
3. [Polish] “Other developers relied on” is a vague justification for the library. *(saves about 4 words)*

**Why**
1. A reader can see the scope of your responsibility but gets little evidence of your web-development contribution or technical work. Naming one representative action would make the experience more concrete.
2. The line establishes that you were responsible for the websites and library, but not what changed for developers or the university’s web presence. One outcome would help a reader judge the value of that work.
3. The phrase does not explain what the library enabled or how it was used. It adds little beyond saying that other developers used it.

**How to change it**
1. Replace the ownership framing with [one representative change or technical responsibility], if accurate.
2. Add [the most important improvement your ownership produced], such as a change in publishing, consistency, or maintenance, if accurate.
3. Cut “other developers relied on” or replace it with [a specific use or benefit of the library, if accurate].

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The broken-page reduction appears after the interview detail, making the result harder to scan. *(no words)*

**Why**
The reduction from 30 to 6 reports a month is the clearest outcome in the bullet. Leading with it would make the impact easier to notice before the process detail.

**How to change it**
Move the reduction in broken-page reports to the beginning of the bullet, ahead of the interview detail.

*raised by wording, narrative*

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Polish] The checklist description does not say what it covered. *(about 4 words to add)*

**Why**
A reader can see that the checklist applied across university web pages, but not what accessibility knowledge informed it. One representative standard or criterion would make the method more credible if it was part of the checklist.

**How to change it**
Add [one key accessibility standard or criterion the checklist covered], if accurate.

*raised by content*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not say what was timed. *(no words)*

**Why**
Page response time and the time a user takes to find a course describe different improvements. Without clarifying the measure, a reader cannot tell what became faster.

**How to change it**
Replace “search time” with [what was timed, such as response time or time to find a course], if accurate.

*raised by content*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The live-arrival detail does not say how the app obtains the data. *(about 4 words to add)*

**Why**
A reader can understand the feature but cannot see the relevant integration or data-handling work behind it. Naming the source would make that part of the project clearer.

**How to change it**
After “live bus arrivals,” add [the transit-data feed or API used], if accurate.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
1. [Polish] “Opened in 0.8s” does not define what counted as opening. *(no words)*
2. [Polish] “Against 2.9s before” is an awkward, clipped comparison. *(about 1 word to add)*

**Why**
1. A reader cannot tell whether the timing measures app startup, first content, or a fully usable screen. That makes it harder to interpret the speed improvement.
2. The phrasing makes the baseline less clear and interrupts the otherwise direct before-and-after comparison. A standard comparison phrase would make the result easier to read.

**How to change it**
1. Replace “opened” with [the actual measured event, such as time to first usable screen], if accurate.
2. Replace “against 2.9s before” with “compared with 2.9s before.”

*raised by content, wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The React and TypeScript claim conflicts with the Vue stack in the heading. *(no words)*
2. [Polish] “Worked on the frontend” is vague participation framing. *(about 2 words to add)*
3. [Polish] The booking-flow contribution has no stated result or benefit. *(about 5 words to add)*

**Why**
1. A reader cannot tell which framework the project used or which stack you worked in. The conflicting descriptions also make the project details less trustworthy.
2. A reader cannot tell what you specifically contributed to the booking flow. That makes it harder to assess your role in the team’s work.
3. A reader cannot tell what your frontend work changed for the project or its users. Without an outcome, the contribution is harder to assess.

**How to change it**
1. If accurate, replace the framework name in the heading or bullet so both identify the same stack.
2. Replace “Worked on the frontend” with [a specific contribution you made], if accurate.
3. Add [the main result of the booking-flow work and, if available, a measure of it].

*raised by content, narrative, wording*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Polish] The calendar-component detail has no stated outcome. *(about 4 words to add)*
2. [Polish] The calendar-component bullet is not the opening bullet, though it is the stronger project accomplishment. *(no words)*

**Why**
1. A reader can see that the component handled overlapping bookings and time-zone changes, but not what that enabled or improved. A concise result would show why the work mattered.
2. The component and tests are a more specific account of your work than the general booking-flow description. Placing this bullet first would give a reader a concrete contribution sooner.

**How to change it**
1. Add [the main booking-flow or user outcome], and include a measure only if you have one.
2. Move this bullet to the beginning of the entry.

*raised by content, narrative*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search bullet does not describe work on the Library Room Booking project. *(about 8 words to add)*
2. The travel-search results do not identify their measures or comparison points. *(about 6 words to add)*
3. The impact is buried after the implementation detail. *(no words)*
4. “More than” and “about” soften the results and add wording. *(saves about 2 words)*

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

*raised by content, narrative, wording*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled in Skills—Tools. *(no words)*

**Why**
The misspelling can make a reader question the accuracy of the skills list. It is a small correction that prevents an avoidable distraction.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

> Angular

**Problem**
[Important] Angular appears in Skills—Tools without a supporting role or project entry. *(saves 1 word)*

**Why**
A reader cannot connect Angular to any experience described in the résumé. Listing it without supporting evidence may prompt questions about your actual experience with the tool.

**How to change it**
Remove Angular unless [relevant experience you can substantiate] belongs on the résumé.

*raised by narrative*

## Already working

- s2:e1:b1: Connects specific accessibility changes to a measurable audit outcome.
- s2:e1:b3: Pairs a named performance measure with before-and-after values.
- s3:e0:b2: The agency link is a specific third-party signal rather than a general claim of recognition.

## Set aside (3)

- s3:e1:b2: “more than halving its load time” does not name the load-time measure or baseline, and “lifting bookings by about a tenth” does not say what period or baseline it is compared with.
- s3:e1:b2: The impact is buried after the implementation detail; lead with the load-time and booking results for faster scanning.
- s3:e1:b2: “More than” and “about” soften the results and add wording; use concise quantified phrasing if the figures are accurate.
