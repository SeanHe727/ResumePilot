# Full review: resume.pdf

**84/100** — format 100 · content 72 · wording 86 · narrative 82

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 11 important, 2 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2023

**Problem**
[Important] The timeline has an unexplained nine-month gap between the bachelor's degree and the university web-development role. *(about 4 words to add)*

**Why**
The résumé ends the bachelor's degree in June 2023 and begins the web-development role in April 2024, with no study or work listed between them. The gap may prompt questions about what happened during that period and can distract from the otherwise continuous education and experience timeline.

**How to change it**
Add [the accurate education, work, project, or other activity] covering this period, or leave the gap unexplained if there is no relevant experience to include.

*raised by narrative*

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The 9% booking result does not specify whether it is a relative lift or a percentage-point increase. *(about 2 words to add)*

**Why**
A hiring reader cannot interpret the business result precisely without knowing what the percentage measures. The ambiguity makes the reported A/B-test impact harder to compare and defend.

**How to change it**
Replace "9%" with the accurate description, such as [a 9% relative lift] or [a 9-percentage-point increase], and retain the A/B-test attribution.

*raised by content*

> Added keyboard navigation and screen-reader labels to the date picker, fixing all 14 accessibility issues flagged in the audit.

**Problem**
[Error] The claim that the described changes fixed all 14 accessibility issues is too broad. *(about 3 words to add)*

**Why**
Keyboard navigation and screen-reader labels address keyboard interaction and accessible naming, but an audit can also identify focus, contrast, semantics, announcements, touch-target, and other issues. A reader may therefore doubt that these two changes resolved every finding.

**How to change it**
Replace "all 14 accessibility issues" with the specific keyboard-navigation and screen-reader-label issues fixed, or name the additional fixes that resolved the remaining findings if accurate.

*raised by content*

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
[Important] The checkout performance result is buried after four implementation details. *(no words)*

**Why**
A scanning reader may reach the end of the bullet before seeing the measurable outcome. That weakens the first impression of work that otherwise has a strong before-and-after result.

**How to change it**
Move "raised the checkout page’s Lighthouse performance score from 52 to 91" to the front of the bullet, then retain only the most telling optimization details after it.

*raised by content, wording*

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] The attribution of the LCP improvement to lazy-loading the hero image is technically backwards in the ordinary case. *(about 5 words to add)*

**Why**
A hero image is commonly the largest contentful element, so lazy-loading it delays its request and normally worsens or leaves LCP unchanged. A technically incorrect attribution can undermine confidence in the rest of the performance claims.

**How to change it**
Remove the lazy-loading attribution and name the actual optimization that produced the LCP improvement; if the hero was not the LCP element, state the measured result without crediting lazy-loading as the cause.

*raised by content*

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
[Polish] The Storybook bullet gives an unmeasured benefit and ends with filler wording. *(saves about 2 words)*

**Why**
The reader can understand the intended benefit but cannot judge its reach or effect, so the bullet reads more like a deliverable than an outcome. "Without asking engineers" is also a negative and less concise description of what designers gained.

**How to change it**
Replace the ending with one checkable result, such as [number of designers or teams using the documentation] or [time or request reduction], and remove "without asking engineers."

*raised by content, wording*

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP cannot ordinarily cut a JavaScript bundle by 60%, and the measured quantity is unclear. *(about 1 word to add)*

**Why**
WebP conversion reduces image-asset size, not JavaScript code, unless the PNG data was embedded in the bundle and accounted for enough of its size. A reader cannot tell whether the 60% compares JavaScript, image assets, or total page weight, so the claim is difficult to defend.

**How to change it**
Replace "JavaScript bundle" with the accurate measured quantity, such as [image-asset size], and retain the 60% comparison; if the images were embedded in the bundle, state that specific setup and verify the bundle measurement.

*raised by content*

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Important] The strongest result should open the bullet instead of following the interview details. *(no words)*

**Why**
The reduction from 30 to 6 broken pages is more persuasive than the research setup and gives the reader an immediate measure of impact. Leading with the interviews makes the bullet sound process-led before revealing the outcome.

**How to change it**
Move "cut broken pages reported by students from 30 to 6 a month" to the front, then retain the editor interviews and preview-mode detail after the result.

*raised by wording, narrative*

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
[Important] The present-tense verb is wrong for a role that ended in August 2024, and the checklist’s practice or standard is unspecified. *(about 3 words to add)*

**Why**
“Writes” makes the work sound current even though the position has ended. The reader also sees the deliverable and audit improvement but not the accessibility practice behind the checklist, which limits the technical credibility of the claim.

**How to change it**
Replace "Writes" with "[created and rolled out]" if accurate, add [the accessibility standard or audit step used] after "checklist," and use past tense throughout the bullet.

*raised by content, wording*

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] The search-time result does not define the timed measure, and "under 1" omits its unit. *(about 3 words to add)*

**Why**
A reader cannot tell whether the comparison covers server response time, browser rendering, or the full user interaction. Without the unit, the endpoint is also incomplete and cannot be interpreted confidently as a one-second result.

**How to change it**
Replace "search time" with [the measured quantity] and replace "under 1" with the accurate endpoint, such as "under 1 second," adding [the test condition or measurement basis] if relevant.

*raised by content, wording*

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
[Polish] The audience measure in "900 riders a week" is undefined. *(about 1 word to add)*

**Why**
A hiring reader cannot tell whether the figure counts unique users, visits, or another measure. The 400 stops establish coverage, but the adoption figure cannot be judged without knowing what was counted.

**How to change it**
Replace "riders" with the accurate audience measure, such as [weekly unique riders] or [weekly sessions], if accurate.

*raised by content*

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
[Error] The 75% improvement is mathematically wrong, and caching the stop list alone does not establish the stated total cold-start reduction. *(saves about 2 words)*

**Why**
A decrease from 3.0 seconds to 1.5 seconds is a 50% reduction, not 75%. Cold-start time also includes service-worker startup, JavaScript loading and execution, rendering, other requests, and device performance, so caching may reduce stop-list retrieval time without proving it caused the full change.

**How to change it**
Replace "a 75% improvement" with "a 50% reduction" or "cut cold-start time in half." If measured evidence supports the attribution, identify caching as one contributing change; otherwise describe only its effect on stop-list retrieval and remove the full cold-start attribution.

*raised by content, wording*

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
[Error] The change from 30% to 40% is a 10-percentage-point increase, not a 10% increase. *(about 1 word to add)*

**Why**
A reader may interpret the headline as a relative increase, which would be about 33.3% from the 30% baseline. The conflicting descriptions make the result’s magnitude unclear even though the baseline and endpoint are useful.

**How to change it**
Replace "by 10%" with "by 10 percentage points" or "by 33.3% relative to baseline," and retain the 30%-to-40% comparison if accurate.

*raised by content, wording*

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The entry heading says Vue while the bullet says React, making the technology description inconsistent. *(no words)*
2. [Important] The first bullet uses vague duty framing and does not identify a specific frontend contribution or outcome. *(about 5 words to add)*

**Why**
1. A reader may question which framework the project used or whether the bullet belongs to this entry. That inconsistency weakens technical credibility before an interviewer can assess the contribution.
2. “Worked on the frontend” does not distinguish meaningful ownership from general participation, and the line offers no figure or comparison beyond the booking flow. A recruiter cannot tell what was delivered or why it mattered.

**How to change it**
1. Verify which framework was used and make the heading and bullet consistent; replace either "Vue" or "React" with the accurate framework.
2. Replace the general participation claim with the specific frontend area delivered, such as [built or integrated a specific booking-flow component], and add [the feature or outcome enabled].

*raised by wording, content*

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
[Important] The booking-calendar bullet gives deliverables and edge cases but no outcome or effectiveness measure. *(about 6 words to add)*

**Why**
The component, tests, overlapping bookings, and time-zone changes show scope, but the reader cannot see what they enabled in the booking flow. Without an outcome or figure, the work can read as a task completed rather than an effective contribution.

**How to change it**
Open with the calendar component and retain the edge cases, then add [the booking behavior or user experience enabled] and [the number of test cases or scenarios covered], if available.

*raised by content, narrative*

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Important] The demo and handover bullet does not state what the delivery achieved or provide a measure. *(about 6 words to add)*

**Why**
The reader sees presentation and documentation activity but cannot tell whether staff accepted, ran, evaluated, or continued using the result. The audience is context rather than evidence of reach or effectiveness.

**How to change it**
Keep the presentation and handover, then add [the specific result of the demo or handover] and one anchor such as [number of staff or evaluators reached] or [number of setup steps documented], if accurate.

*raised by content*

## Skills

> Storybok

**Problem**
[Error] The Tools list misspells Storybook as Storybok. *(no words)*

**Why**
The typo is visible in a technical skills section and can make the résumé look insufficiently checked. It also obscures the name of a recognizable tool.

**How to change it**
Replace "Storybok" with "Storybook."

*raised by narrative*

> Angular

**Problem**
[Important] Angular is listed under Tools without supporting experience elsewhere in the résumé. *(saves 1 word)*

**Why**
No entry mentions Angular or describes work that plausibly required it, so a reader cannot assess whether it is a current, practiced skill. The unsupported listing may invite technical questions the experience section cannot answer.

**How to change it**
Remove "Angular" unless the candidate can add [an accurate project or experience using Angular] that supports keeping it.

*raised by narrative*

## Already working

- s2:e0:b1: Uses a precise baseline and endpoint.
