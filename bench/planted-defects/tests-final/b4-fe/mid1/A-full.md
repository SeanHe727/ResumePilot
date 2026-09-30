# Full review: resume.pdf

**84/100** — format 100 · content 76 · wording 82 · narrative 70

Read 5 of 5 entries for content, 5 for wording. Career reading done, posting comparison no-posting.

6 errors, 9 important, 8 polish. Errors are marked [Error]; fix those first.

## Harbor Coffee Roasters | Barista | Metro City, USA | Oct 2025 - Present

> Opened the cafØ three days a week and handled the daily cash count.

**Problem**
[Error] “cafØ” is corrupted text and should be spelled “café.” *(no words)*

**Why**
The visible character Ø makes the sentence look incorrect as written. A reader may take this as a careless résumé error rather than a transcription problem.

**How to change it**
Replace “cafØ” with “café.”

*raised by content, wording*

> Prepared drinks for the morning rush

**Problem**
[Important] This unrelated role should not take two bullets at the front of the technical career story. *(saves about 14 words)*

**Why**
The duties are routine and do not advance the technical career arc. Giving them two bullets before the technical experience makes the unrelated current role more prominent than the work most relevant to a technical reader.

**How to change it**
Shorten Harbor Coffee Roasters to a single line under an Additional Experience section after Projects, rather than giving it two bullets in the primary Experience sequence.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Improved page performance by 35% by code-splitting the calendar and map widgets.

**Problem**
[Important] The 35% improvement has no named performance metric. *(about 5 words to add)*

**Why**
A reader cannot tell whether the figure refers to load time, bundle size, or another measure. Without the metric and its baseline, the percentage is difficult to interpret or assess.

**How to change it**
Replace “page performance” with [the specific performance metric and its pre-change value], keeping the code-splitting method.

*raised by content*

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Polish] Lead with the 14 resolved accessibility issues before describing the implementation. *(no words)*

**Why**
The result is the clearest evidence of impact, but it comes after the keyboard-navigation and labeling details. A scanning reader has to reach the end of the bullet to learn what changed.

**How to change it**
Move “fixing all 14 accessibility issues flagged in the audit” to the beginning of the bullet, before the implementation details.

*raised by wording*

> Wrote 60 component tests for the search filters, which caught 3 regressions before release.

**Problem**
[Polish] Attach the three caught regressions directly to the tests. *(no words)*

**Why**
The outcome is currently delayed in a relative clause. Making the result immediate helps a scanning reader see the value of the tests without working through the full sentence first.

**How to change it**
Move “caught 3 regressions before release” directly after “60 component tests,” rather than leaving it in a relative clause.

*raised by wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
1. [Error] The stated LCP improvement is not plausibly caused by lazy-loading the hero image under ordinary conditions. *(saves about 3 words)*
2. [Polish] Put the LCP result before the implementation method. *(no words)*

**Why**
1. If the hero image was the LCP element, lazy-loading it would typically delay its request rather than improve LCP. A reader is likely to question the causal claim and the technical understanding behind it.
2. The performance result is the key evidence in this bullet, but the reader encounters the method first. Leading with the timing makes the impact easier to find while scanning.

**How to change it**
1. If the hero image was the LCP element, remove the causal claim; if another change produced the measured improvement, name it. Otherwise, report the LCP change as an observed result without attributing it to lazy-loading.
2. Move the LCP result, “from 4.1s to 1.2s,” ahead of the implementation method.

*raised by content, wording*

> Prevented cross-site scripting in comments by storing user input in React state before rendering it with dangerouslySetInnerHTML.

**Problem**
1. [Error] Storing input in React state does not prevent XSS when it is rendered with `dangerouslySetInnerHTML`. *(about 3 words to add if a sanitizer was used; otherwise, no words)*
2. [Important] The XSS-prevention claim has no verification evidence. *(about 5 words to add)*

**Why**
1. React state does not sanitize or escape user content, and rendering untrusted comments as raw HTML can still allow executable markup. As written, the claimed protection is at odds with the described rendering method, so a reader may doubt both the security outcome and the candidate’s security knowledge.
2. The bullet states a security outcome but gives no check or result showing how that outcome was established. Without that evidence, a reader cannot assess whether the prevention was verified.

**How to change it**
1. If the input was separately sanitized with a suitable HTML sanitizer, name that; otherwise, remove the claim that this prevented XSS and render the content as text rather than raw HTML.
2. Add [the security check and result that verified the prevention], if that check was performed.

*raised by content, wording*

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] This hotel-search result should lead the internship bullets. *(no words)*

**Why**
The line combines a specific load-time reduction with an A/B-test booking result, making it a strong impact statement. If it follows less substantial bullets, a reader may not see that evidence early in the entry.

**How to change it**
Move this bullet ahead of the other internship bullets.

*raised by narrative*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Jul 2023 - Aug 2024

> Owned the department websites and the shared component library other developers relied on.

**Problem**
1. [Important] “Owned” does not name the work performed on the websites or component library. *(about 5 words to add)*
2. [Polish] “other developers relied on” is an unnecessary qualifier for “shared component library.” *(saves about 4 words)*

**Why**
1. The line gives broad responsibility but no concrete technical or operational contribution. A reader can see the scope, but cannot picture what the candidate actually did or what improved as a result.
2. The phrase adds length without clarifying the library’s purpose or the candidate’s contribution. It does not supply the missing evidence about the work or its result.

**How to change it**
1. Replace the broad ownership phrasing with [a specific action or technical contribution] on the sites or library, and add [the resulting improvement] if accurate.
2. Cut “other developers relied on.”

*raised by content, wording*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
1. [Important] The broken-page reduction should lead this bullet. *(no words)*
2. [Polish] “the findings led to a preview mode” leaves the candidate’s role in creating the mode unclear. *(about 2 words to add)*

**Why**
1. The reduction from 30 to 6 a month is the clearest evidence of impact, but it appears after the interview and preview-mode details. Putting it first helps a scanning reader find the outcome immediately.
2. The wording connects the interviews to the preview mode but does not say whether the candidate designed, built, or otherwise contributed to it. A reader may not know what work the candidate personally performed.

**How to change it**
1. Move the reduction in broken-page reports to the beginning of the bullet, before the interview and preview-mode details.
2. Replace that phrase with [the candidate’s specific role in creating the preview mode], if accurate.

*raised by narrative, wording*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Important] The live-arrival bullet does not say how the arrival data reached the app. *(about 5 words to add)*

**Why**
The line establishes the app’s interface and reach, but leaves out the data-integration work behind live arrivals. Without that detail, a reader cannot picture the technical contribution to the feature.

**How to change it**
After “showing live bus arrivals,” add [the transit data source and how you integrated it], if that detail demonstrates your contribution.

*raised by content*

> Cached the stop list offline, so the app opened in 0.8s on a slow 3G connection against 2.9s before.

**Problem**
[Polish] “against 2.9s before” does not make clear what the baseline describes. *(about 2 words to add)*

**Why**
The reader can see the two timings but cannot tell what the app was being compared against before the change. That ambiguity makes the size of the improvement harder to assess.

**How to change it**
Replace “against 2.9s before” with wording that identifies what the 2.9s measured before the change, using the actual baseline.

*raised by wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Error] The booking-flow bullet names React while the project heading names Vue. *(no words)*
2. [Polish] The booking-flow bullet does not name the specific frontend work or what it enabled. *(about 5 words to add)*

**Why**
1. These are different frontend stacks, so a reader cannot tell which technology was used for the project. The inconsistency also makes the listed project skills harder to assess.
2. “Worked on” describes participation, not an action, and the line gives no outcome or user benefit. A reader cannot judge the candidate’s contribution to the booking flow from this description.

**How to change it**
1. If React was used, change the heading’s Vue to React; if Vue was used, replace React in the bullet with Vue. Keep only the technologies actually used.
2. Replace “Worked on the frontend” with [the specific booking-flow change you made] and add [the outcome or user benefit] if accurate.

*raised by wording, narrative, content*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar component should lead the project bullets. *(no words)*
2. [Polish] “its tests” does not say what the tests verified. *(about 5 words to add)*

**Why**
1. The calendar component and booking-flow work fit the project, while the travel-search result does not. Leading with the calendar contribution makes the project’s relevant work clear first.
2. The line names overlapping bookings and time-zone changes as edge cases, but does not establish whether the tests covered or confirmed them. A reader may therefore be unsure how much evidence the tests provide for the component’s handling of those cases.

**How to change it**
1. Move this calendar bullet ahead of the other project bullets.
2. Clarify the test evidence with [what the tests confirmed about overlapping bookings and time-zone changes], if you can state it compactly.

*raised by narrative, content*

> Rebuilt a travel search page

**Problem**
[Error] The travel-search result does not fit the library booking project and duplicates a result attributed to the Lumen internship. *(saves about 20 words)*

**Why**
The library project is described as a booking calendar and flow, while this bullet describes a travel search page. Its similar server-rendering, load-time, and bookings claims also read like the hotel-search achievement listed under Lumen Travel, despite the different project dates, which makes the attribution difficult to trust.

**How to change it**
Remove this line from the library project as recommended; if it describes distinct work, clarify how it differed and correct the attribution rather than presenting the same achievement twice.

*raised by narrative*

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.” *(no words)*

**Why**
The misspelling makes a named tool look incorrect and can suggest a lack of care in the skills list. Readers familiar with the tool may not immediately recognize the intended name.

**How to change it**
Replace “Storybok” with “Storybook.”

*raised by narrative*

> Angular

**Problem**
[Important] Angular is listed as a tool without supporting experience or project evidence. *(saves 1 word)*

**Why**
A reader cannot connect Angular to any described work in the résumé. That gap may prompt questions about whether the skill is supported by practical experience.

**How to change it**
Remove Angular from Skills—Tools unless you can point to relevant experience or project work elsewhere in the résumé.

*raised by narrative*

## Already working

- s2:e2:b2: Links a concrete deliverable to a measurable reduction in failed audits.
- s2:e2:b3: Pairs a clear technical approach with a quantified performance improvement.
- s3:e0:b2: The agency link gives a specific external outcome rather than relying only on a general claim of recognition.

## Set aside (10)

- s2:e0:b0: Because this is a current role, “Prepared” should be in the present tense.
- s2:e0:b1: For a current role, “Opened” should be present tense: “Open.”
- s2:e0:b1: “Handled the daily cash count” does not specify the action, so use a more precise verb if accurate.
- s2:e0:b0: “Prepared drinks for the morning rush of about 200 orders and kept the bar stocked” gives the workload and tasks, but no result of keeping service moving or avoiding stock problems.
- s2:e0:b0: “Prepared drinks” does not specify a beverage-preparation skill or technique.
- s2:e0:b1: “Opened the café three days a week and handled the daily cash count” states responsibilities and frequency, but not what those duties achieved.
- s2:e0:b1: “handled the daily cash count” does not say how the count was completed or checked.
- s3:e1:b2: “more than halving its load time” and “lifting bookings by about a tenth” do not say what periods or comparison each figure uses.
- s2:e1:b5: The load-time and booking results come after the implementation details, so moving them earlier would make the impact easier to scan.
- s3:e1:b2: The load-time and booking results come after the implementation detail, so move them to the front for faster scanning.
