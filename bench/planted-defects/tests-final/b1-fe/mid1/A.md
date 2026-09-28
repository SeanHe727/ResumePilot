> Here is my resume: bench/planted-defects/tests-final/b1-fe/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed all four entries with bullets for content and wording, plus the full-resume narrative and formatting. The two education entries have no bullets to review. No job description was provided, so there’s no role-match review.

The main changes to address:
- **Resolve the Library Room Booking tech-stack conflict:** the heading says Vue, while a bullet says React and TypeScript.
- **Verify the project metrics:** 3.0s to 1.5s is a 50% reduction, not 75%; 30% to 40% is a 10-percentage-point increase, not a 10% relative increase.
- **Check the explanations for two performance claims:** the Web Developer bullet attributes a JavaScript-bundle reduction to converting images to WebP, and the internship bullet attributes an LCP improvement to lazy-loading the hero image. Confirm the changes and results are accurately connected.
- **Clarify or fix other details:** specify whether “bookings per search 9%” is a relative increase or percentage-point change; correct “Storybok” to “Storybook”; and address Angular, which is listed but not demonstrated in the experience or projects.

The full report, including entry-level findings and the timeline note, is available in `/report --full`.

> /report
# Review: resume.pdf

**85/100** — format 100 · content 76 · wording 84 · narrative 78

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

6 errors, 10 important, 9 polish. Errors are marked [Error]; fix those first.

## Across the whole résumé

> Jun 2023 … Apr 2024

**Problem**
[Polish] The timeline has a nine-month gap between the B.S. and the Web Developer role.

## Lumen Travel | Frontend Engineering Intern | Metro City, USA | Jun 2025 - Sep 2025

> Rebuilt the hotel search results page in React with server-side rendering, cutting median load time from 3.8s to 1.6s and raising bookings per search 9% in an A/B test.

**Problem**
[Important] The 9% booking increase does not say whether it is a relative lift or a percentage-point change.

**Why**
Those interpretations describe different-sized effects, so a reader cannot assess the A/B test result precisely. Clarifying the measure would make the outcome easier to evaluate.

**How to change it**
Specify whether the 9% is a relative lift or a percentage-point change, if accurate.

> Moving image resizing to the CDN, inlining critical CSS, preloading the two web fonts and deferring the analytics script, raised the checkout page’s Lighthouse performance score from 52 to 91.

**Problem**
1. [Error] The comma after “analytics script” incorrectly separates the compound subject from its verb.
2. [Important] The list of methods comes before the Lighthouse score improvement, making the result harder to spot while scanning.

**Why**
1. The subject is the list of performance changes beginning with “Moving image resizing,” and “raised” is its verb. The comma interrupts that grammatical connection.
2. A reader has to pass through four implementation details before reaching the measured outcome. Putting the score change first would make the impact more immediate.

**How to change it**
1. Remove the comma after “analytics script.”
2. Move “raised the checkout page’s Lighthouse performance score from 52 to 91” before the list of methods.

> Cut the landing page’s largest contentful paint from 4.1s to 1.2s by adding loading="lazy" to the hero image.

**Problem**
[Error] Lazy-loading the hero image does not support the claimed LCP reduction.

**Why**
A hero image is often the page’s LCP element, and lazy loading can postpone its fetch. As written, the technique does not support the claim that LCP fell from 4.1s to 1.2s.

**How to change it**
If the hero image was instead loaded eagerly or preloaded, describe that change; otherwise remove or soften the causal claim.

> Documented the design-system tokens in Storybook so designers could check spacing and color values without asking engineers.

**Problem**
1. [Important] The line describes what the design-system documentation enabled, not what changed in practice.
2. [Polish] “Without asking engineers” is conversational and less direct than saying designers could find the values themselves.

**Why**
1. A reader cannot tell whether designers used the reference or whether it changed the design handoff. Evidence of actual use or an effect on engineer requests would make the value of the work clearer.

**How to change it**
1. Replace “could check” with the actual outcome and add [number of designers using the reference or another measure of reduced engineer requests], if accurate.

## Westfield State University | Web Developer, IT Services | Metro City, USA | Apr 2024 - Aug 2024

> Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.

**Problem**
[Error] Converting PNG images to WebP does not ordinarily reduce a JavaScript bundle, so the 60% bundle-reduction claim is unsupported as written.

**Why**
Image files are typically served as separate assets, and changing their format reduces image payload rather than JavaScript. The bundle claim would require the images to have been embedded or inlined in it.

**How to change it**
If the images were embedded or inlined, say so and verify the bundle measurement; otherwise describe the change as a reduction in image payload and use its measured figure.

> Interviewed 8 department editors about publishing; the findings led to a preview mode that cut broken pages reported by students from 30 to 6 a month.

**Problem**
[Polish] The strongest result is not the opening part of this line.

> Writes the accessibility checklist for all university web pages, reducing failed audits from 12 to 2 a semester.

**Problem**
1. [Polish] “Accessibility checklist” does not say what criteria or checks the checklist covered.
2. [Polish] “Writes” is in present tense even though this role ended in August 2024.

> Rebuilt the course-catalog search with client-side filtering, cutting search time from 4 seconds to under 1.

**Problem**
[Important] “Search time” does not specify what the 4 seconds and under 1 second measure.

**Why**
A reader cannot tell whether these figures measure the time for a user to find a course or the system’s response time. Those describe different outcomes and change how the improvement should be understood.

**How to change it**
Replace “search time” with [what was timed], such as time to find a course or search response time, if accurate.

## Transit Arrival Web App | Independent Project | TypeScript, React | Oct 2025 - Present

> Built a progressive web app showing live bus arrivals for 400 stops, used by about 900 riders a week.

**Problem**
1. [Important] The line does not say how the app gets or updates live arrival data.
2. [Polish] The usage figure is hedged, making it sound less precise.

**Why**
1. For a transit-arrival app, the data source or update mechanism is the clearest evidence here of technical execution beyond the app’s format. Without it, a technical reader cannot picture that part of the implementation.

**How to change it**
1. Add [the transit data source or how arrival updates are fetched], if it reflects your implementation.

> Cut cold-start time on slow 3G from 3.0s to 1.5s, a 75% improvement, by caching the stop list offline.

**Problem**
[Error] The change from 3.0s to 1.5s is a 50% reduction, not a 75% improvement.

**Why**
The time fell by 1.5 seconds out of an original 3.0 seconds, which is a 50% reduction. The stated 75% figure is mathematically inconsistent with those measurements.

**How to change it**
Replace “a 75% improvement” with “a 50% reduction.”

> Raised weekly returning riders by 10% in the first month, from 30% to 40%, by adding saved stops.

**Problem**
[Error] The rise from 30% to 40% is 10 percentage points, not a 10% relative increase.

**Why**
The difference between the two rates is 10 percentage points; relative to the original 30%, the increase is about 33%. Stating both “by 10%” and the endpoints also repeats the change.

**How to change it**
Replace “by 10%” with “by 10 percentage points” and remove “from 30% to 40%”; or retain the endpoints and say “by about 33%.”

## Library Room Booking | Hackathon, Team of 4 | Vue | Feb 2024 - Mar 2024

> Worked on the frontend of the booking flow using React and TypeScript.

**Problem**
1. [Important] The project heading says Vue, but the frontend bullet says React, so the framework is inconsistent.
2. [Important] “Worked on the frontend” does not say what you built or what your contribution delivered.
3. [Polish] “Using React and TypeScript” names tools but does not show how you applied them.

**Why**
1. These descriptions give different technology stacks for the same project. A reader may question which framework you used, making the project’s technical details less credible.
2. A reader cannot tell what users could do because of your work or why it mattered. The general phrase also obscures the specific action you took.

**How to change it**
1. Make the heading and bullet name the same framework; if React is accurate, replace “Vue” in the heading, and if Vue is accurate, correct the framework named in the bullet.
2. Replace “Worked on the frontend of the booking flow” with [the specific screen or interaction you built], and add [what it enabled or improved, with a comparison if available].

> Wrote the booking calendar component and its tests, handling overlapping bookings and time-zone changes.

**Problem**
1. [Important] The calendar line does not say what the component changed or enabled.
2. [Polish] “Its tests” does not show what the tests verified.
3. [Polish] This is the strongest project line, but it does not open the project entry.

**Why**
1. The edge cases show the technical challenge but not the value of solving it. A result tied to the booking flow would help a reader understand the significance of the work.

**How to change it**
1. Keep the component and edge-case details, and add [what the calendar enabled or improved, with a result or comparison if available].

> Presented the demo to the library staff and handed over the code with setup notes.

**Problem**
[Important] The demo and code handoff are described without an outcome or evidence of the library staff’s response.

**Why**
A reader can see that the project was presented and transferred, but cannot tell whether staff used it, found the notes sufficient, or gave useful feedback. That leaves the value of the handoff uncertain.

**How to change it**
Keep the demo or handoff detail and add [what the staff did with the project or what the handoff enabled], or [one verifiable outcome such as staff feedback or whether they could set up the code using the notes], if accurate.

## Skills

> Storybok

**Problem**
[Error] “Storybok” is misspelled; the correct spelling is “Storybook.”

**Why**
A misspelling in a tools list can make the document look less carefully checked. Correcting it keeps the named skill easy to recognize.

**How to change it**
Replace “Storybok” with “Storybook.”

> Angular

**Problem**
[Important] Angular is listed under Tools, but no entry shows or plausibly requires its use.

**Why**
A reader cannot find evidence for the listed framework in the experience or projects. That can make the skill claim harder to assess.

**How to change it**
Add an entry demonstrating Angular if accurate; otherwise remove it from the skills list.

## Already working

- s2:e0:b1: Connects a concrete implementation change to a clearly measured reduction.
- s2:e0:b2: Pairs specific accessibility improvements with a count of issues resolved.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-94c9d199.md.

