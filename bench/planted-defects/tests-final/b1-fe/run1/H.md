## Highest-priority changes

1. **Fix the incorrect performance calculation.**  
   The transit app bullet says going from 3.0 seconds to 1.5 seconds was a **75% improvement**. That is a 50% reduction. Correct the percentage or remove it. Incorrect math can undermine confidence in all your metrics.

2. **Correct the JavaScript/image claim.**  
   The university bullet attributes a 60% reduction in a JavaScript bundle to converting PNG images to WebP. Image format changes affect image payload size, not JavaScript bundle size. Verify whether you measured total page weight, image transfer size, or JavaScript size, then name the correct metric.

3. **Reconsider the hero-image lazy-loading claim.**  
   A hero image is often the largest contentful paint element, so lazy-loading it can delay rather than improve LCP. Confirm that this was genuinely the cause of the improvement and that the image was not the LCP element. If the result came from multiple changes, do not attribute the entire improvement to one change.

4. **Resolve the React/Vue inconsistency.**  
   The Library Room Booking project is labeled as a Vue project, but the first bullet says you used React and TypeScript. Clarify which framework was used. If both were used, make the division of work explicit.

5. **Change the tense in the university role.**  
   “Writes” is present tense even though the role ended in August 2024. Use consistent past tense for completed roles. Also verify whether the checklist work was actually ongoing or completed during that position.

6. **Fix the Skills typo.**  
   “Storybok” should be corrected to “Storybook.” Typos in a technical-skills section are especially noticeable.

---

## Header and contact information

- **Make sure the portfolio URL is real and clickable.**  
  The current URL appears to be a placeholder. Replace it with your actual portfolio, GitHub, or code repository URL. Recruiters should not have to infer where your work is hosted.

- **Add LinkedIn if it is professionally complete.**  
  This is optional, but useful for a graduate student applying to software roles. Do not add it if the profile is empty or inconsistent with the resume.

- **Keep the contact line compact.**  
  The current structure is fine. You do not need a full street address.

---

## Education

### M.S. in Computer Science

- **Keep the expected graduation date.**  
  “Expected Jun 2026” is appropriate.

- **Consider adding a specialization, concentration, or selected coursework only if relevant.**  
  This would help for frontend, web performance, accessibility, or systems-oriented roles, but do not add generic coursework just to fill space.

- **Consider including GPA only if it is strong and customary for your target roles.**  
  If it is not a clear strength, leave it out.

### B.S. in Computer Science

- **Consider whether the separate undergraduate degree entry needs additional detail.**  
  Since both degrees are from the same university, you could preserve the entries as they are, but make the formatting clearly consistent so the section is easy to scan.

- **Check chronological ordering against the rest of the resume.**  
  The education section is correctly arranged with the current degree first.

---

## Lumen Travel experience

### Hotel search results bullet

- **Keep this bullet prominent.**  
  It combines a technical change, a performance result, and a business result. That is one of the strongest bullets on the resume.

- **Clarify the scope of the A/B test.**  
  A recruiter may want to know whether the 9% increase was statistically significant, how many users were included, or whether “bookings per search” was the primary success metric. You do not need to include all of that, but validate the claim and add context if space allows.

- **Make sure server-side rendering was actually your contribution.**  
  If you implemented only part of the SSR work, specify your ownership more precisely.

### JavaScript reduction bullet

- **Add the reason the reduction mattered.**  
  The bundle reduction is useful, but it would be stronger if tied to an observable result such as mobile load time, interaction readiness, or conversion. If you do not have a downstream metric, keep the bullet but make the measurement context clear.

- **Verify that the sizes are measured consistently.**  
  State internally whether 410 KB and 260 KB refer to compressed, uncompressed, initial, or total JavaScript. Inconsistent measurement can make the result misleading.

### Accessibility bullet

- **Replace vague wording with specific accessibility scope.**  
  “Screen-reader labels” is broad. The underlying work may have involved accessible names, focus management, keyboard interaction, announcements, or semantics. Identify the actual areas you addressed.

- **Explain what “all 14 issues” means.**  
  Make sure these were issues in the relevant component or page, not all accessibility problems across the product. The claim should be precise and defensible.

- **Mention the standard or audit source if useful.**  
  If the audit was based on WCAG or a recognized tool/process, naming it would make the result more credible.

### Checkout performance bullet

- **Fix the sentence structure and attribution.**  
  The current construction begins with a series of optimization actions and then uses “raised,” which makes the subject difficult to follow. The issue is not merely style: readers may be unsure which changes you personally made and whether the score improvement came from all of them.

- **Verify the Lighthouse comparison.**  
  Specify whether both scores were measured under the same device, network, Lighthouse version, and page state. Otherwise, the increase from 52 to 91 may not be comparable.

- **Check the technical implications of font preloading.**  
  Preloading fonts can help or hurt performance depending on the fonts’ importance and usage. Make sure the claim reflects a measured improvement, not just a list of optimizations.

### LCP bullet

- **Investigate the causal claim before keeping it.**  
  As noted above, lazy-loading a hero image is unusual if that image is responsible for LCP. This bullet could raise technical concerns for frontend reviewers.

- **Avoid presenting one change as the cause of a large improvement unless you measured it.**  
  If multiple factors contributed, distinguish the individual contribution or describe the broader optimization effort.

### Storybook documentation bullet

- **Add a result or scope if available.**  
  The activity is relevant, but it currently ends at documentation. Explain how many tokens or components were documented, how adoption was measured, or what workflow it enabled.

- **Clarify whether designers actually used the Storybook documentation.**  
  “So designers could check…” describes intent. A measured adoption or reduction in back-and-forth would show impact.

---

## Westfield State University experience

### Image and bundle-size bullet

- **Correct the metric, as noted above.**  
  Converting PNGs to WebP should not be described as reducing a JavaScript bundle unless there was another change involved.

- **Add the measured scope.**  
  State internally whether the 60% reduction applied to image transfer size, total page weight, or a group of university sites. The plural “sites” makes the measurement scope important.

### Editor interviews and preview mode bullet

- **Keep this bullet.**  
  It demonstrates user research, product thinking, and measurable impact—not just implementation.

- **Clarify your ownership of the preview mode.**  
  The current wording shows that research led to the feature, but it does not clearly establish whether you designed, implemented, or helped deliver it.

- **Define “broken pages” if the metric is informal.**  
  If the number came from support reports, monitoring, or a ticketing system, the source matters. Make sure the before-and-after period was comparable.

### Accessibility checklist bullet

- **Change the tense.**  
  The role ended, so this should not be written as ongoing unless you still perform the work separately.

- **Clarify your level of ownership.**  
  “Writes the accessibility checklist for all university web pages” suggests an ongoing institutional responsibility. Make sure that accurately represents your role.

- **Identify the audit scope.**  
  “Failed audits” could mean automated checks, manual reviews, or a formal compliance process. Specify the type internally and include it if it strengthens credibility.

### Course-catalog search bullet

- **Explain what “search time” measures.**  
  It could refer to filtering latency, user task completion time, or perceived response time. Use the most defensible interpretation.

- **Check whether “client-side filtering” is technically accurate.**  
  If the full dataset was downloaded to the browser, this is fine; if only part of the data was client-side, describe the architecture accurately.

- **Consider adding the result’s scope.**  
  For example, the number of courses, users, or searches involved would help establish the significance of the improvement.

---

## Projects

### Transit Arrival Web App

- **Clarify how usage was measured.**  
  “Used by about 900 riders a week” is valuable, but explain whether this means unique users, sessions, or riders estimated through another method. Also make sure the number is current and reproducible.

- **Check the project date against your current status.**  
  Because this project is marked “Present,” make sure the dates and bullets clearly distinguish ongoing work from results achieved during the first month.

- **Correct the percentage calculation.**  
  This is the most urgent project-level issue.

- **Explain the relationship between offline caching and cold-start performance.**  
  Offline caching may improve subsequent loads, but it does not necessarily improve a first-ever cold start. Confirm that your test scenario matches the wording.

- **Clarify the returning-rider metric.**  
  The change from 30% to 40% is a 10-percentage-point increase and approximately a 33% relative increase. Decide which interpretation is intended and label it correctly.

- **Add the deployment and data-source details if space permits.**  
  A live transit app would be more compelling if you identify the transit API, hosting environment, PWA features, or monitoring used. Prioritize details relevant to the jobs you want.

### Library Room Booking

- **Resolve the framework contradiction.**  
  The project title says Vue while the bullet says React. This must be corrected or explained.

- **Clarify your contribution in the team.**  
  “Worked on the frontend” is generic. Identify the specific ownership already implied by the calendar-component bullet, such as implementation, testing, integration, or UX behavior.

- **Keep the testing detail.**  
  Handling overlapping bookings and time-zone changes shows attention to edge cases and is stronger than a generic statement about writing tests.

- **Explain the handoff outcome if available.**  
  The presentation and setup notes are useful, but the bullet would be more impactful if you can document whether the library staff actually adopted or ran the system.

- **Verify the technology list.**  
  If TypeScript was used, include it consistently in the project’s technology line. If the project used both React and Vue at different stages, explain that clearly rather than leaving recruiters to reconcile it.

---

## Skills

- **Correct “Storybok” to “Storybook.”**

- **Group skills by type more consistently.**  
  React, Vue, Angular, and TypeScript are technologies; server-side rendering and accessibility are technical areas; component testing is a practice. The current categories are understandable but somewhat uneven.

- **Only list skills you can discuss in an interview.**  
  Angular appears nowhere else in the resume. Keep it if you have meaningful experience, but be prepared for questions about it. Otherwise, deprioritize it.

- **Add relevant tools that are demonstrated in the experience section.**  
  Depending on what you actually used, this could include testing libraries, Git, CI/CD, Storybook, performance tools, or cloud/CDN technologies. Do not add a long inventory of tools without evidence.

- **Consider separating “Methods” into technical areas and practices.**  
  Accessibility and server-side rendering are areas of expertise; component testing is a testing practice. Clearer categorization improves scanability.

- **Add database or backend skills only if you genuinely have them.**  
  The resume currently positions you strongly as a frontend/web-performance engineer, which is coherent. Do not broaden the list just to appear more full-stack.

---

## Overall structure and presentation

- **Prioritize the strongest results.**  
  Your best themes are frontend performance, accessibility, experimentation, and user-facing product improvements. Make those the visual and content focus.

- **Reduce claims that are merely activity descriptions.**  
  The Storybook, presentation, and setup-notes bullets are valid, but they are weaker than the quantified performance and adoption results. Keep them only if they demonstrate an important skill not shown elsewhere.

- **Use consistent punctuation and formatting.**  
  Decide whether bullets end with periods and apply the choice throughout. Keep date formatting, location formatting, technology separators, and title formatting consistent.

- **Avoid line wrapping that splits technical terms awkwardly.**  
  Ensure terms such as “time-zone,” “loading,” and technology names remain easy to read in the final PDF. This is a layout issue, but it affects professionalism.

- **Keep the resume focused on the target role.**  
  For frontend roles, the current content is directionally strong. For general software engineering roles, add evidence of broader engineering work only if you have it.

- **Validate every metric.**  
  Several bullets contain excellent numbers, but the incorrect 75% calculation and questionable image/bundle attribution create risk. Confirm baselines, measurement methods, time periods, and causality before submitting.