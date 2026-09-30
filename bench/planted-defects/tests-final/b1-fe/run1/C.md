Your resume has strong, quantified work. The most important changes are to fix a few technical and numerical inconsistencies; those could make a reviewer doubt otherwise credible results. I’ll go in order and suggest changes without rewriting your lines.

### Header and education
- **Contact line:** Make sure the code URL leads directly to a public profile or portfolio and that all contact details are the ones you intend to use. If the address and phone number here are placeholders, replace them before applying.
- **M.S. and B.S. lines:** Keep both. Confirm that the M.S. expected graduation date is still accurate when you submit the resume.

### Lumen Travel
- **Hotel search results:** Keep the metrics. Specify what “load time” measures if it could be confused with another performance metric, and make sure the A/B test supports attributing the booking increase to this change.
- **Booking-flow JavaScript:** Keep. Clarify whether 410 KB and 260 KB are transferred, compressed, or uncompressed sizes so the comparison is unambiguous.
- **Date-picker accessibility:** Keep. Scope “all 14” clearly to the issues identified in that audit, rather than implying the date picker has no remaining accessibility issues.
- **Checkout Lighthouse score:** Change the opening construction so it reads as a completed action, consistent with your other bullets. Consider whether you can identify which changes you made yourself; listing four changes makes your contribution harder to distinguish.
- **Landing-page LCP:** Verify the explanation before keeping this bullet. Lazy-loading a hero image generally *delays* an above-the-fold LCP image, so the stated cause and improvement appear inconsistent. Correct the technique or remove the causal claim if you cannot substantiate it.
- **Storybook tokens:** Keep, but add evidence of adoption or time saved if you have it. The current benefit is plausible but less concrete than your other bullets.

### Westfield State University experience
- **JavaScript bundle / WebP:** Correct this claim. Converting PNGs to WebP can reduce image bytes or page weight, but would not ordinarily reduce a **JavaScript bundle** by 60%. Identify the metric that actually fell.
- **Editor interviews / preview mode:** Keep. Make sure the before-and-after broken-page counts cover comparable periods and that you can support the connection to preview mode.
- **Accessibility checklist:** Change “Writes” to past tense for a role that ended in August 2024. Clarify whether you authored the checklist, maintained it, or both.
- **Course-catalog search:** Keep if the measurement is sound. Define what the four-to-under-one-second figure measures, particularly because client-side filtering does not necessarily make initial page loading faster.

### Transit Arrival Web App
- **App and weekly riders:** Keep. Be ready to explain how you measure approximately 900 weekly riders.
- **Cold-start time:** Fix the math: 3.0s to 1.5s is a **50% reduction in time**, not 75%. Also check whether caching an offline stop list affects the “cold-start” condition you measured; those terms may conflict.
- **Returning riders:** Distinguish a **10-percentage-point** increase (30% to 40%) from a 10% relative increase. Keep the first-month timeframe if that is the period measured.

### Library Room Booking
- **Project heading and frontend bullet:** Resolve the framework contradiction: the heading says **Vue**, while the bullet says **React and TypeScript**. List the technologies actually used and align both places.
- **Calendar and tests:** Keep. This is a useful description of your specific contribution; confirm that the overlap and time-zone cases were covered by the component or its tests, as implied.
- **Demo and handoff:** Keep if space allows. If you need room, this is less compelling than the calendar bullet because it says less about the software or its outcome.

### Skills
- **Tools:** Correct **“Storybok”** to **“Storybook.”** Include Angular only if you can discuss work you’ve done with it. Consider separating languages, frameworks, and tools so the list is easier to scan.
- **Methods:** Keep only methods you can substantiate through your experience or projects. “Component testing,” for instance, is supported by the booking-calendar bullet.