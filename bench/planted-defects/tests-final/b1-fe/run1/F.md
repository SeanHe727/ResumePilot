# Resume review

Your strongest material is the measured frontend work: performance improvements, an A/B test, accessibility fixes, and evidence of user adoption. Before polishing wording, fix the accuracy and consistency issues below. I’m describing what to change and why, not rewriting your bullets.

## Highest-priority fixes

1. **Correct the percentage calculations in the Transit project.**
   - The change from 3.0 seconds to 1.5 seconds is a **50% reduction**, not a 75% improvement.
   - Returning riders increasing from 30% to 40% is a **10-percentage-point increase**, not a 10% relative increase.
   - These are easy-to-check inconsistencies that can undermine confidence in the rest of your metrics.

2. **Resolve the Library Room Booking technology mismatch.**
   - The project heading lists Vue, but its first bullet says React and TypeScript. Confirm which framework the project actually used and make the heading and bullets consistent.
   - If you used more than one framework, make clear which one was used for this project.

3. **Check the technical claim about the university JavaScript bundle.**
   - Converting PNG images to WebP ordinarily reduces image-file or page weight, not JavaScript bundle size. Verify what you measured. If the assets were included in a bundle, make that measurement precise; otherwise, correct the metric or describe the impact in the appropriate terms.

4. **Revisit the hero-image lazy-loading claim.**
   - A hero image is usually immediately visible and can be the page’s largest contentful paint element. Lazy-loading it can delay that paint rather than improve it. Verify the change and the measurement; if other changes contributed, don’t attribute the full LCP reduction to lazy-loading alone.

5. **Fix the tense in the two current/past-role bullets.**
   - “Moving image resizing…” is grammatically inconsistent with the past-tense bullets around it.
   - “Writes the accessibility checklist…” is present tense in a role that ended in August 2024. Use a tense that accurately reflects whether this was completed work or an ongoing responsibility.

## Line-by-line feedback

### Lumen Travel — Frontend Engineering Intern

- **Hotel search page / SSR / bookings bullet:** Keep the A/B-test result, but clarify whether the 9% is a relative lift or a percentage-point change, and ensure the test supports attributing the booking change to your work. The before-and-after load-time figures are strong.
- **JavaScript size reduction bullet:** This is clear and quantified. If available, specify how the reduction was measured—such as compressed transfer size or another bundle-size measure—so the metric is interpretable.
- **Accessibility bullet:** The specific audit count is useful. Make sure “all 14” refers to issues you personally resolved, and that the fixes were verified rather than simply implemented.
- **Lighthouse performance bullet:** Fix the tense. Also distinguish the contribution of the listed optimizations if they were implemented at different times; as written, it can sound as though each contributed equally to the score change.
- **LCP / hero-image bullet:** Verify the lazy-loading detail and the causal claim, as noted above. This overlaps with the Lighthouse bullet by presenting another performance result; keep both only if they demonstrate distinct work and measurements.
- **Storybook documentation bullet:** Correct the spelling in your skills list (“Storybok”). This bullet could also make your contribution or the design-team benefit more concrete if you have evidence, since the current impact is qualitative.

### Westfield State University — Web Developer, IT Services

- **PNG-to-WebP / bundle-size bullet:** Resolve the bundle-versus-image-weight measurement issue. The 60% reduction is compelling only if the metric accurately describes what changed.
- **Editor interviews / preview mode bullet:** This is one of your strongest bullets because it connects user research to a product change and a measurable outcome. Clarify whether the reduction from 30 to 6 is monthly and over what period, if that context is available.
- **Accessibility checklist bullet:** Fix the tense. Also clarify whether the audit-failure reduction followed directly from the checklist or was influenced by other changes; otherwise the causal claim may be too strong.
- **Course-catalog search bullet:** Explain what “search time” measures—technical response time or the time for a user to find a result. The distinction matters when assessing the impact of client-side filtering.

### Transit Arrival Web App

- **Live-arrivals / usage bullet:** Useful evidence of real usage. Make sure “900 riders a week” is based on a defined measurement period and represents riders rather than visits or sessions, if that distinction matters.
- **Cold-start / caching bullet:** Correct the percentage, and check that “cold-start” is the right term for the app’s measured delay. Caching an offline stop list may improve startup or data availability, but be precise about what the timing includes.
- **Returning-riders bullet:** Correct the percentage terminology. State the measurement window consistently with “first month,” and be prepared to explain how you measured returning riders and whether the increase can be attributed to saved stops.

### Library Room Booking

- **Frontend-work bullet:** “Worked on” does not show your specific contribution. Add detail about what you owned or delivered, without claiming work beyond your role.
- **Calendar component / tests bullet:** This is more specific and technically useful. Resolve the Vue-versus-React discrepancy, and include the testing approach or scope if it is relevant and accurate.
- **Demo / handoff bullet:** Clarify what the handoff enabled or who used it, if you can support that. Otherwise, prioritize technical work or outcomes over the presentation and setup notes.

## Sections and organization

- **Skills:** “Tools” is not an accurate category for a list containing programming languages and frameworks. Group skills by type so recruiters and ATS systems can quickly find languages, frameworks, testing tools, and relevant practices.
- **Skills coverage:** The list is very short compared with the work shown. Add relevant skills such as JavaScript, HTML/CSS, testing tools, version control, or web performance only if you have used them and can discuss them in an interview. Keep the list focused rather than adding technologies you have only briefly encountered.
- **Storybook:** Correct the spelling wherever it appears.
- **Education placement:** Education first is reasonable for a current graduate student. Since you also have a relevant internship, consider whether leading with experience would better foreground your practical work for the roles you’re targeting.
- **Education details:** Keep the expected graduation date clear. Add GPA only if it is a strength, and coursework only if it directly supports your target roles.
- **Contact information:** Use a real, working GitHub or portfolio URL and consider adding LinkedIn if you maintain a professional profile. Keep your location at city/region level; a full address is not needed.
- **Overall presentation:** Use standard section headings and a simple, single-column layout for ATS compatibility. Your dates and section headings are already easy to scan.

## Before submitting

Verify every performance metric and its measurement method, correct the tense and technology inconsistencies, and make sure you can explain the implementation and evidence behind each quantified result. Those changes will improve credibility without requiring a wholesale rewrite.