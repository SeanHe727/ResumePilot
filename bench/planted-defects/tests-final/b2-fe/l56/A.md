> Here is my resume: bench/planted-defects/tests-final/b2-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
I reviewed the four entries with bullets, plus the resume narrative and formatting.

The main changes to make are:

1. **Reorder Experience newest-first.**  
   Move Lumen Travel (Jun–Sep 2025) above Westfield State University (Jul 2023–Aug 2024).

2. **Resolve the Library Room Booking inconsistency.**  
   Its bullets mention React/TypeScript while the heading says Vue. The final bullet describes a travel-search page, load time, and bookings—apparently duplicating an achievement already listed under Lumen Travel. Remove it, move it to the correct entry, or clarify that these are separate projects.

3. **Fix the security bullet under Lumen Travel.**  
   The line saying that storing input in React state and rendering it with `dangerouslySetInnerHTML` prevented XSS is technically unsupported and appears contradictory. State the actual sanitization, escaping, or safe-rendering mechanism used—or remove the claim.

4. **Add actions or outcomes to duty-only bullets.**  
   The lines beginning “Owned the department websites…” and “Worked on the frontend…” describe responsibility without specifying what you built or changed.

5. **Clarify questionable metrics.**  
   Specify the performance metric and baseline for “improved page performance by 35%,” add units to “under 1,” and explain how the accessibility checklist itself produced the audit reduction.

6. **Check the LCP claim.**  
   The reviewer flagged the claim that lazy-loading a hero image reduced LCP from 4.1s to 1.2s as technically questionable. Verify the implementation and measurement before keeping it.

7. **Clean up minor skills and ordering issues.**  
   “Storybok” should be corrected to “Storybook.” Angular is listed in Skills but is not supported elsewhere in the resume.

The PDF is one page, parses cleanly for ATS, and has no layout warnings. The full specialist report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 74 · wording 83 · narrative 76

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

7 errors, 4 important, 11 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jul 2023 - Aug 2024

**Problem**
[Important] Experience is not ordered newest-first.

**Why**
Westfield State University is listed above the more recent Lumen Travel internship even though the role dates are Jul 2023–Aug 2024 and Jun 2025–Sep 2025. A recruiter scanning the section may misread the chronology or assume the ordering is inconsistent.

**How to change it**
Move the Lumen Travel entry above the Westfield State University Web Developer entry.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
[Important] “Owned” does not show what you built, maintained, standardized, or changed, and the line gives no resulting improvement.

**Why**
A hiring reader can see the scope of ownership, but not whether the work improved publishing, consistency, accessibility, developer productivity, or site reliability. The wording frames the work as a duty rather than demonstrating web-development skill or a concrete contribution.

**How to change it**
Replace “Owned” with the specific action you performed, then add [one concrete technical responsibility or library/site change you personally delivered] and [the most measurable change caused by maintaining the sites or library, measured against a baseline].

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Polish] The strongest line is not the opening line.
2. [Polish] “The findings led to” weakens your role in turning the interviews into the preview mode.

> Wrote the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Error] The line incorrectly credits merely writing an accessibility checklist with reducing failed audits from 12 to 2 a semester.
2. [Polish] “Accessibility checklist” does not identify the technical or accessibility practices it contained.

**Why**
1. A checklist does not change pages or audit results simply because it was written. The reduction requires the checklist to have been adopted, consistently applied, and followed by remediation or other implementation work.

**How to change it**
1. Keep the reduction only if accurate by stating that failed audits fell from 12 to 2 a semester after the checklist was adopted and applied; otherwise remove or soften the reduction claim.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Polish] “Cutting search time from 4 seconds to under 1” does not state the measurement type or unit clearly enough.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Polish] “Improved page performance by 35% by” gives a percentage without naming the measured metric or baseline, and the repeated “by” construction is clumsy.

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Error] The claim that keyboard navigation and screen-reader labels fixed “all 14 accessibility issues” overstates what those changes can accomplish.

**Why**
Those changes address keyboard interaction and accessible naming, but an accessibility audit can also identify contrast, focus management, error-state, touch-target, and other issues. A practitioner may doubt the claim because the named fixes cannot, by themselves, resolve every audit finding.

**How to change it**
State that the changes fixed the keyboard-navigation and screen-reader-label issues, or specify the additional fixes that resolved the remaining findings.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] The result is buried after “which caught,” making the release-protection outcome less prominent than the testing method.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Adding `loading="lazy"` to a hero image is incorrectly credited with reducing LCP from 4.1s to 1.2s.

**Why**
Above-the-fold hero images should generally be prioritized rather than lazy-loaded because lazy-loading the likely LCP element delays it. The stated improvement cannot be attributed to this change alone and the change would commonly worsen, not improve, LCP.

**How to change it**
Remove the causal claim or name the actual performance change that produced the measured LCP reduction; if the hero image was not the LCP element, state the relevant evidence.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state before rendering it with `dangerouslySetInnerHTML` does not prevent cross-site scripting and makes the stated protection method appear self-contradictory.
2. [Polish] “Prevented cross-site scripting in comments” gives no measurement or evidence showing the scope of the prevention.

**Why**
1. React state does not sanitize user-controlled HTML, and `dangerouslySetInnerHTML` can execute injected markup or scripts unless the content is sanitized before rendering. A frontend reader therefore cannot identify what actually blocked unsafe markup.

**How to change it**
1. Replace the method description with [the sanitizer or escaping method used] before rendering, or avoid `dangerouslySetInnerHTML` and describe the safe rendering approach actually used.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Polish] The strongest line is not the opening line.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] “Showing live bus arrivals” does not explain either how the data was obtained and delivered or what changed for riders.

**Why**
The bullet shows what the app displays, but not a concrete implementation skill beyond the interface or a user benefit beyond the product's existence. The 900-riders-per-week figure proves adoption, but a reader still has to infer the technical integration and rider outcome.

**How to change it**
Add [the transit data source or integration approach] and replace or supplement the function description with [the rider or transit outcome this enabled], while retaining the 900 riders per week figure.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “Against 2.9s before” is an awkward comparison that buries the app-open result.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The entry says Vue while the bullet says React and TypeScript, creating an unexplained technology inconsistency.
2. [Important] “Worked on the frontend of the booking flow” does not show what you built, changed, enabled, or how substantial the contribution was.

**Why**
1. React and Vue are different frontend frameworks, so a practitioner cannot tell which one was used for the booking flow. The inconsistency makes both the technology and the scope of your contribution difficult to trust or place within the project.
2. A reader cannot tell whether you delivered a key user feature, improved the booking experience, or provided limited implementation assistance. Without a scale or result, the line does not distinguish a substantial hackathon contribution from minor frontend work.

**How to change it**
1. Replace “React” with “Vue” if the booking flow used Vue; otherwise change the project technology label from “Vue” to the framework actually used, then name the specific component or frontend work performed.
2. Replace the broad contribution description with [the specific booking feature or result you owned], and add [the number of screens or interactions delivered] or [a measured usability or booking result], if available.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
[Polish] “Handling overlapping bookings and time-zone changes” describes supported cases but not what improved, and “its tests” does not show how the implementation was verified.

> Rebuilt a travel search page with server rendering, more than halving its load time and lifting bookings by about a tenth.

**Problem**
1. [Error] The travel-search result is unrelated or insufficiently connected to the Library Room Booking entry and appears to duplicate the Lumen Travel achievement.
2. The travel-search performance and booking result use awkward and imprecise wording: “more than halving” is less direct, and “about a tenth” does not identify the metric or state that the increase was relative.

**Why**
1. The first two bullets establish a library booking project, so a travel-search page makes the entry's scope unclear. It also appears to restate the Lumen Travel hotel-search result with different wording and figures, which can make the résumé look inconsistent rather than broader.
2. A reader cannot tell whether “bookings” means booking count, conversion rate, or another measure, nor how the claimed increase compares with the baseline. The phrasing makes a potentially strong result less precise and harder to reconcile with the 9% A/B-test figure elsewhere.

**How to change it**
1. Cut this bullet or move it to the relevant experience; if it is a distinct project, clarify that connection and align its metrics with the corresponding Lumen Travel account.
2. If this bullet is retained, replace “more than halving its load time” with a direct before-and-after or percentage reduction, and replace “lifting bookings by about a tenth” with [the exact booking metric] and [the relative increase], if accurate.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled in the Tools skills list.

**Why**
The intended tool is recognizable, but the spelling error looks careless in a section meant to communicate technical fluency. It can also interfere with keyword matching for the tool.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Polish] The Skills list includes Angular, but no entry describes using Angular or work that requires it.

## Already working

- s3:e0:b2: Shows external validation beyond personal project completion.

## Set aside (5)

5 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-066e27c6.md.

