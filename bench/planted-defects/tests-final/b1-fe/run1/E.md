## Overall assessment

This is a strong frontend/web-development resume: it shows relevant hands-on work and several measurable outcomes. The highest-priority changes are to fix a few technical or mathematical inconsistencies that could undermine otherwise good evidence, then clarify how some results were measured and what you personally owned.

I’m assessing the pasted text only; the original document’s layout and parsing are **not assessed**. With no job description, I’m treating frontend or web-development roles as the likely target.

## Changes to make, in priority order

### Lumen Travel

- **“Rebuilt the hotel search results page…”** — Keep this result, but clarify whether the 9% booking increase is a relative lift or a percentage-point change, and add the test context if you have it. The performance result is specific; the conversion result will be easier to interpret with those details.
- **“Cut the booking flow’s JavaScript…”** — Clarify what the 410 KB and 260 KB figures measure: for example, whether they are initial or total transferred JavaScript, and whether they use the same compression and measurement conditions. Code-splitting can reduce what loads initially without necessarily reducing the total JavaScript for the flow.
- **“Added keyboard navigation and screen-reader labels…”** — Specify the scope of the audit, if known, and what “all 14 accessibility issues” refers to. This helps distinguish resolving a defined list of findings from claiming broad accessibility compliance.
- **“Moving image resizing to the CDN…”** — Fix the verb tense, since this internship is dated in the past. Also identify the Lighthouse test conditions if available, such as mobile or desktop and whether the scores were measured under comparable settings. The bullet combines several changes, so make clear that the score change reflects the overall set of optimizations rather than implying each had a separately measured effect.
- **“Cut the landing page’s largest contentful paint…”** — Check this claim carefully before keeping the causal link to lazy-loading the hero image. A hero is often the largest, above-the-fold image, and lazy-loading it can delay its loading rather than improve LCP. Verify the actual implementation and before/after measurement; if lazy-loading was not the cause of the improvement, don’t attribute the result to it.
- **“Documented the design-system tokens in Storybook…”** — Keep the qualitative outcome, but add scope or evidence of use if you know it—for example, how many tokens or teams/pages were covered, or whether designers actually used the documentation. The current benefit is plausible but not quantified.

### Westfield State University — Web Developer, IT Services

- **“Cut the university sites’ JavaScript bundle by 60% by converting their PNG images to WebP.”** — Verify and correct the metric or the stated cause. Converting PNG images to WebP reduces image-file size, not JavaScript bundle size. If the 60% refers to image or total page payload, label the measured resource accurately; if it truly refers to JavaScript, identify the change that reduced JavaScript.
- **“Interviewed 8 department editors…”** — Clarify your contribution to the preview-mode work, since the current wording says the findings led to it but doesn’t establish whether you designed or implemented the feature. If you know how broken-page reports were counted, include that context; it would make the reduction from 30 to 6 per month more interpretable.
- **“Writes the accessibility checklist…”** — Change the tense to match the completed role. Also clarify what the audit counts represent, if known, and whether you authored or maintained the checklist. The reduction is useful evidence, but the scope of “failed audits” is unclear.
- **“Rebuilt the course-catalog search…”** — Define what “search time” measures: user-perceived time, filtering response time, or another measure. That matters because client-side filtering most directly affects the interaction after the data is available.

### Projects

**Transit Arrival Web App**

- **“Built a progressive web app…”** — Clarify how the 900 weekly riders figure was measured and whether it means unique riders, users, or visits. If the app is live, make that context clear; don’t imply a particular deployment status unless accurate.
- **“Cut cold-start time…from 3.0s to 1.5s, a 75% improvement…”** — Correct the arithmetic: a drop from 3.0 seconds to 1.5 seconds is a **50% reduction** in time, not 75%. Also state what “cold-start time” measures and how the slow-3G comparison was made, if available.
- **“Raised weekly returning riders by 10%…from 30% to 40%…”** — These figures describe a **10-percentage-point** increase; the relative increase is different. Make the percentage change unambiguous. Also be careful about attributing the change to saved stops unless you measured that causal effect; a before-and-after increase alone may not establish cause.

**Library Room Booking**

- **Project technology line and first bullet** — Resolve the Vue versus React/TypeScript discrepancy. Confirm which technologies were actually used for this project and make the project heading and experience bullets consistent.
- **“Worked on the frontend of the booking flow…”** — Make your individual contribution more specific. As written, this doesn’t show what you did, especially alongside the more detailed calendar-component bullet.
- **“Wrote the booking calendar component and its tests…”** — Keep the technical detail. If accurate, clarify whether the tests covered both overlapping bookings and time-zone changes, or whether those were component behaviors you implemented. That distinction makes your contribution easier to assess.
- **“Presented the demo… and handed over the code…”** — This is useful evidence of communication and handoff. Add the recipient or how the handoff was used only if you know and can support that detail.

### Skills

- **“Storybok”** — Correct the spelling to **Storybook**.
- **“Tools” list** — Check that each listed technology reflects experience you can discuss. The resume currently gives no supporting example for Angular; that doesn’t make the skill invalid, but it is less evidenced here than React, TypeScript, and Vue.
- **“Methods” list** — Consider whether this category accurately groups the entries. “Server-side rendering,” accessibility, and component testing are different kinds of capabilities; organize them consistently if the layout allows. Keep the list focused on skills relevant to the roles you’re targeting.

### Education and contact details

- **Education entries** — The school, degree, location, and dates are clear. Keep the expected graduation date current as your status changes.
- **Contact line** — The information is clear in the pasted text. Confirm that the portfolio link is clickable and that the portfolio demonstrates the work most relevant to the roles you’re targeting.

## Before submitting

Prioritize correcting the JavaScript-bundle claim, the cold-start percentage, the Vue/React discrepancy, and the hero-image/LCP attribution. Then fix the tense and spelling issues. Those are more important than adding more metrics: the resume already has plenty of numbers, and unclear or inaccurate ones can weaken the evidence.