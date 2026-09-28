Your resume has a good foundation: it shows frontend work, accessibility, performance improvements, and several quantified outcomes. The biggest concern is not wording—it’s a few claims that appear inconsistent or technically implausible. Fix those before polishing anything else. I’ll describe what to change and why, without rewriting your lines.

## Highest-priority fixes

1. **Correct or substantiate the performance claims.** The WebP bullet attributes a JavaScript-bundle reduction to image conversion, and the hero-image bullet attributes a large LCP improvement to lazy-loading. Both need review: image conversion generally affects image payload, not JavaScript size, and lazy-loading an above-the-fold hero image can delay LCP.
2. **Fix the arithmetic in the transit project.** A reduction from 3.0 seconds to 1.5 seconds is a 50% reduction, not a 75% improvement.
3. **Resolve the project’s framework mismatch.** The Library Room Booking entry lists Vue, but its first bullet says React and TypeScript.
4. **Make dates and verbs consistent.** A completed role currently has a present-tense bullet, while another bullet’s opening construction makes its timing and ownership less clear.
5. **Check that every metric is defensible.** Be ready to explain how each one was measured, over what period, and whether the change can reasonably be attributed to your work.

## Line-by-line review

### Header and education

- **Contact details:** If these are anonymized for sharing, no action is needed. For applications, replace any placeholders with working contact details and a portfolio link that loads and shows relevant work.
- **M.S. and B.S. entries:** Keep the expected graduation date accurate and clear. If you are applying before the M.S. program begins or before the stated project dates, make sure the dates reflect the actual timeline.

### Lumen Travel

- **Search-page rebuild, load time, and bookings:** Explain what “load time” measures and how it was collected. For the 9% booking result, be prepared to describe the A/B-test duration, sample size, and whether the result was statistically reliable. Otherwise, readers may interpret the figure as stronger evidence than it is.
- **JavaScript bundle reduction:** State consistently what the KB figures represent—such as compressed or uncompressed size—and how you measured them. This is a clear, relevant result if the comparison is like-for-like.
- **Accessibility audit:** Clarify the scope of the audit and your contribution to the 14 fixes. “All” is a strong claim; make sure the audit findings and completed work support it.
- **Checkout performance bullet:** Make the timing and ownership clearer, and keep the verb tense consistent with the other bullets. Also be prepared to explain the test conditions behind the Lighthouse scores; scores can vary with the environment.
- **LCP and hero-image bullet:** Recheck both the cause and the measurement. Lazy-loading a hero image that is visible immediately can delay its loading, so the claimed improvement may have another cause or the loading change may be described incorrectly.
- **Storybook documentation:** Correct the spelling of “Storybook.” If you have room, make the scope of the documentation more concrete; the current benefit is understandable but difficult to assess.

### Westfield State University

- **PNG-to-WebP and JavaScript bundle:** Recheck this claim first. Converting image formats would normally reduce image bytes, not JavaScript bundle size. Confirm which asset or performance measure actually changed and use the correct one.
- **Editor interviews and preview mode:** This is a strong user-research-to-outcome story. Clarify the period and source for the monthly broken-page counts, and how the preview mode relates to the reduction.
- **Accessibility checklist:** Change the tense to match a completed role. Also verify that the checklist applied to all university pages and that the audit-failure figures use comparable criteria and periods.
- **Course-catalog search:** Define “search time”—for example, whether it means time to results, interaction latency, or a measured user task. The current numbers are useful but ambiguous.

### Projects

**Transit Arrival Web App**

- **400 stops and 900 weekly riders:** Keep these figures only if you can substantiate them, and clarify whether the app was publicly deployed and how usage was counted. For an independent project, real usage is a standout claim and will likely draw follow-up questions.
- **Cold-start improvement:** Correct the percentage: 3.0 seconds to 1.5 seconds is a 50% reduction. Also clarify what “cold-start” means and how the slow-3G measurement was run. Offline caching may improve later or offline visits rather than a truly uncached first load.
- **Returning riders:** Explain the denominator and measurement period. The change from 30% to 40% is a 10-percentage-point increase; avoid presenting it in a way that could be mistaken for a 10% relative increase. Be ready to support the claim that saved stops caused the change.

**Library Room Booking**

- **Framework mismatch:** Resolve the conflict between Vue in the project heading and React/TypeScript in the first bullet. A reviewer may read this as a factual inconsistency.
- **Calendar and tests:** Clarify what you personally implemented versus what the team built, and make sure the listed edge cases were actually tested. “Wrote the tests” is stronger when you can explain their scope.
- **Demo and handoff:** This communicates completion, but it is less informative than the other project bullets. If space is tight, prioritize evidence of your contribution or the project’s result over the handoff details.

### Skills

- **Typo:** Correct “Storybok” to “Storybook.”
- **Tools list:** Keep Angular only if you can discuss your experience with it; otherwise, it may invite questions without strengthening the resume. Consider whether the list leaves out tools you actually used and can support.
- **Methods list:** These items are relevant, but some are broad. If you have used specific testing or performance tools, naming them may make your skills easier to evaluate. Don’t add tools or proficiency claims you can’t substantiate.

## Recommended order of work

1. Recheck the WebP, hero-image, transit-percentage, and framework claims.
2. Verify the source and meaning of each metric, especially the A/B-test, Lighthouse, rider, and retention figures.
3. Fix tense, spelling, and date consistency.
4. Tailor the skills and strongest evidence to the specific role. Without a target job description, it’s not possible to judge which experience should receive the most emphasis.