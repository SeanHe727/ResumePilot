> Here is my resume: bench/planted-defects/tests-final/b4-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all five experience and project entries for content and wording, plus the full resume’s narrative and ATS formatting. The two education entries have no bullets to review; no job description was provided. The file parses cleanly as a one-page resume.

The main changes to address:
- Clarify the Library Room Booking project’s tech stack and whether its server-rendering/booking result is distinct from the Lumen Travel achievement.
- Verify the internship’s claims about lazy-loading improving LCP and React state preventing XSS; the content review questioned whether those explanations support the stated results.
- Fix the corrupted “cafØ,” the “Storybok” typo, and the current-role verb tense; consider moving the barista role below technical experience and projects.

The full report is available in `/report --full`.

> /report
# Review: resume.pdf

**84/100** — format 100 · content 76 · wording 82 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 9 important, 8 polish. Errors are marked [Error]; fix those first.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
[Error] “cafØ” is corrupted text and should be spelled “café.”

**Why**
The visible character Ø makes the sentence look incorrect as written. A reader may take this as a careless résumé error rather than a transcription problem.

**How to change it**
Replace “cafØ” with “café.”

> Prepared drinks for the morning rush

**Problem**
[Important] This unrelated role should not take two bullets at the front of the technical career story.

**Why**
The duties are routine and do not advance the technical career arc. Giving them two bullets before the technical experience makes the unrelated current role more prominent than the work most relevant to a technical reader.

**How to change it**
Shorten Harbor Coffee Roasters to a single line under an Additional Experience section after Projects, rather than giving it two bullets in the primary Experience sequence.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% improvement has no named performance metric.

**Why**
A reader cannot tell whether the figure refers to load time, bundle size, or another measure. Without the metric and its baseline, the percentage is difficult to interpret or assess.

**How to change it**
Replace “page performance” with [the specific performance metric and its pre-change value], keeping the code-splitting method.

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] Lead with the 14 resolved accessibility issues before describing the implementation.

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] Attach the three caught regressions directly to the tests.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
1. [Error] The stated LCP improvement is not plausibly caused by lazy-loading the hero image under ordinary conditions.
2. [Polish] Put the LCP result before the implementation method.

**Why**
1. If the hero image was the LCP element, lazy-loading it would typically delay its request rather than improve LCP. A reader is likely to question the causal claim and the technical understanding behind it.

**How to change it**
1. If the hero image was the LCP element, remove the causal claim; if another change produced the measured improvement, name it. Otherwise, report the LCP change as an observed result without attributing it to lazy-loading.

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state does not prevent XSS when it is rendered with `dangerouslySetInnerHTML`.
2. [Important] The XSS-prevention claim has no verification evidence.

**Why**
1. React state does not sanitize or escape user content, and rendering untrusted comments as raw HTML can still allow executable markup. As written, the claimed protection is at odds with the described rendering method, so a reader may doubt both the security outcome and the candidate’s security knowledge.
2. The bullet states a security outcome but gives no check or result showing how that outcome was established. Without that evidence, a reader cannot assess whether the prevention was verified.

**How to change it**
1. If the input was separately sanitized with a suitable HTML sanitizer, name that; otherwise, remove the claim that this prevented XSS and render the content as text rather than raw HTML.
2. Add [the security check and result that verified the prevention], if that check was performed.

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] This hotel-search result should lead the internship bullets.

**Why**
The line combines a specific load-time reduction with an A/B-test booking result, making it a strong impact statement. If it follows less substantial bullets, a reader may not see that evidence early in the entry.

**How to change it**
Move this bullet ahead of the other internship bullets.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] “Owned” does not name the work performed on the websites or component library.
2. [Polish] “other developers relied on” is an unnecessary qualifier for “shared component library.”

**Why**
1. The line gives broad responsibility but no concrete technical or operational contribution. A reader can see the scope, but cannot picture what the candidate actually did or what improved as a result.

**How to change it**
1. Replace the broad ownership phrasing with [a specific action or technical contribution] on the sites or library, and add [the resulting improvement] if accurate.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The broken-page reduction should lead this bullet.
2. [Polish] “the findings led to a preview mode” leaves the candidate’s role in creating the mode unclear.

**Why**
1. The reduction from 30 to 6 a month is the clearest evidence of impact, but it appears after the interview and preview-mode details. Putting it first helps a scanning reader find the outcome immediately.

**How to change it**
1. Move the reduction in broken-page reports to the beginning of the bullet, before the interview and preview-mode details.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] The live-arrival bullet does not say how the arrival data reached the app.

**Why**
The line establishes the app’s interface and reach, but leaves out the data-integration work behind live arrivals. Without that detail, a reader cannot picture the technical contribution to the feature.

**How to change it**
After “showing live bus arrivals,” add [the transit data source and how you integrated it], if that detail demonstrates your contribution.

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “against 2.9s before” does not make clear what the baseline describes.

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The booking-flow bullet names React while the project heading names Vue.
2. [Polish] The booking-flow bullet does not name the specific frontend work or what it enabled.

**Why**
1. These are different frontend stacks, so a reader cannot tell which technology was used for the project. The inconsistency also makes the listed project skills harder to assess.

**How to change it**
1. If React was used, change the heading’s Vue to React; if Vue was used, replace React in the bullet with Vue. Keep only the technologies actually used.

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar component should lead the project bullets.
2. [Polish] “its tests” does not say what the tests verified.

**Why**
1. The calendar component and booking-flow work fit the project, while the travel-search result does not. Leading with the calendar contribution makes the project’s relevant work clear first.

**How to change it**
1. Move this calendar bullet ahead of the other project bullets.

> Rebuilt a travel search page

**Problem**
[Error] The travel-search result does not fit the library booking project and duplicates a result attributed to the Lumen internship.

**Why**
The library project is described as a booking calendar and flow, while this bullet describes a travel search page. Its similar server-rendering, load-time, and bookings claims also read like the hotel-search achievement listed under Lumen Travel, despite the different project dates, which makes the attribution difficult to trust.

**How to change it**
Remove this line from the library project as recommended; if it describes distinct work, clarify how it differed and correct the attribution rather than presenting the same achievement twice.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
The misspelling makes a named tool look incorrect and can suggest a lack of care in the skills list. Readers familiar with the tool may not immediately recognize the intended name.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular is listed as a tool without supporting experience or project evidence.

**Why**
A reader cannot connect Angular to any described work in the résumé. That gap may prompt questions about whether the skill is supported by practical experience.

**How to change it**
Remove Angular from Skills—Tools unless you can point to relevant experience or project work elsewhere in the résumé.

## Already working

- s2:e2:b2: Links a concrete deliverable to a measurable reduction in failed audits.
- s2:e2:b3: Pairs a clear technical approach with a quantified performance improvement.
- s3:e0:b2: The agency link gives a specific external outcome rather than relying only on a general claim of recognition.

## Set aside (10)

10 findings were left out as not worth acting on; they are in `/report --full`.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-b05e1b44.md.

