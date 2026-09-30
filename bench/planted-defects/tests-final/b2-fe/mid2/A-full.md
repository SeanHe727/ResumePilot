# Full review: resume.pdf

**83/100** — format 100 · content 71 · wording 83 · narrative 73

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

4 errors, 15 important, 3 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Westfield State University | Web Developer, IT Services

**Problem**
[Important] The EXPERIENCE entries are not in newest-first order. *(no words)*

**Why**
The 2025 Lumen Travel role appears after the Westfield role that ended in 2024. A reader scanning for recent experience may miss the more recent position.

**How to change it**
Reverse the two EXPERIENCE entries so Lumen Travel appears before Westfield State University.

*raised by file, narrative*

> Westfield State University | M.S. in Computer Science

**Problem**
[Important] EDUCATION appears before EXPERIENCE, so the relevant web-development work does not lead the page. *(no words)*

**Why**
A reader looking for relevant experience has to pass the education section before reaching the work history. That delays the strongest evidence of your professional web-development work.

**How to change it**
Move EXPERIENCE before EDUCATION without changing the section text.

*raised by narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] The line names ownership but not a concrete contribution to the websites or component library. *(about 4 words)*
2. [Important] The line does not say what value the websites or component library delivered. *(about 5 words)*

**Why**
1. A reader can see that you were responsible for these resources, but cannot tell what web-development work you performed. That leaves the technical skill behind the responsibility unclear.
2. A reader can infer that other developers used the library, but not what that use enabled or improved. Without an outcome, the importance of the work is hard to assess.

**How to change it**
1. Replace “Owned” with [a specific site or library change you implemented or maintained], using the action that accurately describes your work.
2. Replace “other developers relied on” with [the clearest outcome the websites or library enabled], adding a comparison or measure only if available.

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The interview-and-preview result should appear before the other bullets in this entry. *(no words)*
2. [Polish] The phrase “reported by students” adds detail after the key reduction without clarifying the result. *(saves about 3 words)*

**Why**
1. This line connects research with a concrete reduction in broken pages, so it gives a reader a strong example of your impact. Placing it later makes that result less likely to be noticed on a quick scan.
2. The reduction from 30 to 6 a month is the result a reader needs to scan. The extra phrase interrupts that comparison without changing what the stated figures mean.

**How to change it**
1. Move this bullet above the other bullets in the entry without changing its wording.
2. Cut “reported by students” or shorten it if that detail is essential.

*raised by narrative, wording*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The search-time figures do not identify what was timed. *(about 3 words)*

**Why**
A reader cannot tell whether the figures describe the time a user takes to find a course, a response time, or another measure. Without that context, the size and meaning of the improvement are unclear.

**How to change it**
Name [the task or timing measure used] and, if relevant, [the measurement basis] so the figures can be interpreted.

*raised by content*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% performance improvement does not identify the metric or its comparison point. *(about 4 words)*

**Why**
A reader cannot tell whether the percentage refers to load time, bundle size, or another measure. Without a baseline or before-and-after values, the result is difficult to assess.

**How to change it**
Replace “page performance” with [the specific performance metric] and state [the baseline or before-and-after values] if available.

*raised by content*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The claimed LCP reduction is incorrectly attributed to lazy-loading the hero image, which delays loading the LCP image. *(saves about 6 words)*

**Why**
When the hero image is the largest contentful paint element, delaying its fetch does not explain an improvement in LCP. A reader with performance experience may question the causal claim and the accuracy of the result.

**How to change it**
Remove the attribution to lazy loading; if the image was instead eagerly loaded or prioritized, name that method only if you actually used it. Keep the LCP figures only if they were measured.

*raised by content*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state and rendering it with dangerouslySetInnerHTML does not prevent cross-site scripting. *(about 4 words)*
2. [Important] The XSS-prevention claim gives no check or evidence that prevention was established. *(about 5 words)*

**Why**
1. React state does not sanitize input, and dangerouslySetInnerHTML bypasses React’s normal escaping. A reader may conclude that untrusted HTML can still execute and doubt the security claim.
2. An implementation description alone does not show that the security outcome was tested or verified. A reader may ask what confirmed the claim and discount it without a concise validation detail.

**How to change it**
1. If you used a suitable HTML sanitizer, name it; otherwise remove the XSS-prevention claim or describe rendering the input as text if that is what you did.
2. Add [the security test or check and its result] if available; otherwise remove or soften the prevention claim.

*raised by content, wording*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The hotel-search result should appear before the other bullets in this entry. *(no words)*

**Why**
This bullet pairs a technical rebuild with load-time and booking outcomes. Putting it first makes that combination easier for a reader to notice.

**How to change it**
Move this bullet above the other bullets in the entry without changing its wording.

*raised by narrative*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] The line does not explain how the app gets or updates live arrival data. *(about 5 words)*

**Why**
Live data is central to what the app does, but the line describes only what users see. A reader cannot tell what data integration or implementation work made that feature possible.

**How to change it**
Add [the data source or integration method used to fetch or update arrivals], if accurate, and keep only the most telling implementation detail.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “Against 2.9s before” is an awkward way to present the earlier load time. *(no words)*

**Why**
The reader has to interpret the comparison rather than scan a straightforward before-and-after result. That makes the improvement less immediate.

**How to change it**
Replace “against 2.9s before” with “from 2.9s” to make the comparison easier to scan.

*raised by wording*

> Open-sourced the app, and the city transit agency linked it from its developer page.

**Problem**
The open-source release and agency link do not show your technical contribution to the app. *(about 5 words)*

**Why**
A reader can see that the app was publicly available and linked by the agency, but not what you built or how you contributed technically. That leaves the project’s relevance to your development skills unclear.

**How to change it**
Add [the clearest technical contribution you made to the app], if accurate.

*raised by content*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The bullet’s React claim conflicts with the project heading’s Vue label. *(no words)*
2. [Important] The booking-flow bullet gives no outcome for the work. *(about 5 words)*
3. [Polish] “Worked on the frontend” does not name a specific action. *(no words)*

**Why**
1. A reader cannot tell which framework the project used, making its technical context unreliable. The conflict may also make the project details look misplaced.
2. A reader cannot tell what the frontend contribution enabled or improved. Without an outcome, the value of the work is hard to judge.
3. A reader knows you contributed to the booking flow but cannot tell what you actually built or changed. That makes your individual role harder to assess.

**How to change it**
1. Confirm which framework the project used and make the heading and bullet agree; if both Vue and React were used, clarify their separate roles.
2. Add [the clearest outcome of your frontend contribution], such as what users could do or what improved; include a measure only if you have one.
3. Replace “Worked on the frontend” with the specific action you took, such as building the booking flow, if accurate.

*raised by content, narrative, wording*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar bullet should appear before the other bullets in this entry. *(no words)*
2. [Important] The calendar component and tests have no stated outcome. *(about 5 words)*

**Why**
1. It names a specific component and the difficult cases it handled, giving a reader a clear example of your technical work. Placing it first makes that contribution easier to notice.
2. A reader can picture the technical work and the edge cases it handled, but cannot tell what the component enabled or what the tests helped prevent. That leaves the value of the contribution unclear.

**How to change it**
1. Move this bullet above the other bullets in the entry without changing its wording.
2. Add [what the component enabled] or [what issue the tests caught or prevented], using a measure only if you have one.

*raised by narrative, content*

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. The booking increase does not identify the booking measure or the period compared. *(about 4 words)*
2. The load-time and booking outcomes appear after the implementation detail instead of leading the bullet. *(no words)*

**Why**
1. A reader cannot tell what “about a tenth” measures or over what period the comparison was made. Without those details, the size and meaning of the result are difficult to evaluate.
2. The outcomes are the most immediate evidence of the result, but the current order makes the reader reach the implementation first. Moving the results forward would make the impact easier to scan.

**How to change it**
1. Name [the booking measure] and [the comparison period] if available.
2. Move the load-time and booking outcomes before “with server rendering,” without changing the figures.

*raised by content, wording*

> Rebuilt a travel search page

**Problem**
[Error] The travel-search bullet does not belong under Library Room Booking and appears to duplicate the Lumen Travel achievement. *(saves about 18 words if cut; no words if moved)*

**Why**
This entry is a library booking project, while the bullet describes a travel-search rebuild with server rendering and booking results. A reader may suspect the same achievement is being presented under two projects, which can undermine confidence in both entries.

**How to change it**
Cut this bullet or place it under the correctly identified project; if it describes distinct work, clarify how it differs, and if it is the same work, align its description and figures with the correct entry.

*raised by narrative*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is a misspelling of “Storybook.” *(no words)*

**Why**
A misspelling in the Tools list can distract a reader and make the skills section look less carefully checked. It can also make the tool harder to recognize on a quick scan.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

> Angular

**Problem**
[Important] The Tools entry lists Angular without support elsewhere in the résumé. *(saves 1 word if removed)*

**Why**
No experience or project shows Angular in use or describes work that requires it. A reader may question whether the listed skill is supported by hands-on experience.

**How to change it**
Add [supporting experience with Angular] if accurate, or remove Angular from Tools.

*raised by narrative*

## Already working

- s2:e0:b2: Shows a university-wide scope and a concrete accessibility outcome.
- s2:e1:b1: Connects specific accessibility improvements to a defined audit outcome.
- s2:e1:b2: Links a defined testing contribution to regressions caught before release.

## Set aside (3)

- s3:e0:b2: “Open-sourced the app” and “the city transit agency linked it from its developer page” do not show how you built or technically contributed to the app.
- s3:e1:b2: “lifting bookings by about a tenth” does not say what booking measure was compared or over what period.
- s3:e1:b2: The result is buried after “with server rendering”; move the load-time and booking outcomes before the implementation detail.
