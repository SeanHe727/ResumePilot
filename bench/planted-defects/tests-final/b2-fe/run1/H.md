## Highest-priority changes

1. **Fix the security bullet in the Lumen Travel role.**  
   The claim about preventing XSS by storing input in React state and then rendering it with `dangerouslySetInnerHTML` is technically unsafe. React state does not sanitize input, and `dangerouslySetInnerHTML` can introduce XSS unless the content is properly sanitized and handled under an appropriate security model. Correct the technical description to reflect what actually prevented the vulnerability, or remove the bullet if the implementation did not truly address it.

2. **Fix or remove the LCP bullet.**  
   Applying `loading="lazy"` to a hero image generally works against improving Largest Contentful Paint because the hero image is often the LCP element and should be prioritized. Verify the measurement and the actual performance change. If the result came from image compression, responsive sizing, preload behavior, or another change, identify the real cause. Do not retain the claim as written unless you can substantiate it.

3. **Remove or replace the unrelated Library Room Booking bullet.**  
   The bullet about rebuilding a travel search page and increasing bookings clearly belongs to a different project or experience. It undermines credibility and looks copied from another resume section.

4. **Correct the technology inconsistency in Library Room Booking.**  
   The project is labeled as using Vue, but the first bullet says the frontend used React and TypeScript. Clarify which framework you actually used. If both were used, explain the distinction; otherwise, make the project’s technology list and bullets consistent.

5. **Correct “Storybok” to “Storybook.”**  
   This is a visible spelling error in the Skills section.

## Section and ordering changes

### Contact information

- Make the code portfolio URL a complete, clickable URL if the resume will be submitted digitally.
- Confirm that the site contains the projects and technical details referenced in the resume. An empty or inaccessible portfolio link will hurt more than it helps.
- Consider adding a LinkedIn profile only if it is current and supports your application. Do not add more links just to fill space.

### Education

**M.S. in Computer Science**

- The date format is clear. Keep “Expected” because the degree is not complete.
- If your graduate program has a relevant concentration, coursework, thesis, or research area, add only the most relevant item. This is especially useful because your experience section is relatively frontend-focused.
- Since the M.S. overlaps with the Lumen internship, make sure the dates are accurate and that the overlap will not create confusion.

**B.S. in Computer Science**

- This entry is fine as written.
- If you have a strong GPA, honors, scholarships, or especially relevant coursework, include them only if they strengthen your candidacy. Otherwise, avoid adding low-value details.

### Experience ordering

- Put **Lumen Travel** before **Westfield State University** because it ended more recently.
- The current order is not reverse chronological, which is the standard expectation for a resume.
- The fact that the Lumen internship occurred while you were in the M.S. program is normal; it does not need special explanation unless the dates are challenged.

## Westfield State University role

### “Owned the department websites and the shared component library other developers relied on.”

- Replace the vague ownership language with a more specific scope in your actual resume revision.
- Clarify how many sites, developers, departments, components, or users were involved, if you have those numbers.
- “Other developers relied on” is difficult to assess without scale. A measurable scope would make the impact more credible.
- Avoid emphasizing ownership without showing what you changed or improved. The later bullets provide impact, but this first bullet should establish responsibility more precisely.

### Interview and preview-mode bullet

- This is one of your strongest bullets because it includes research, an implementation outcome, and a measurable reduction.
- Clarify what “broken pages reported by students” means and how the reports were counted. The change from 30 to 6 per month is compelling, but the measurement should be defensible.
- Specify the time period used for the comparison if it is not obvious.
- Consider whether “interviewed 8 department editors” belongs as the lead or supporting detail. The important result is that the research led to a product change and a substantial reduction in reports.

### Accessibility checklist bullet

- Clarify what “failed audits” means: pages, checks, violations, or audit categories. Those are different measurements.
- “All university web pages” may sound too broad unless you truly controlled the entire university web estate. Narrow the scope to what you actually covered.
- Explain whether the reduction from 12 to 2 was measured across the same audit process and comparable semesters.
- This is a strong accessibility accomplishment; preserve it, but make the scope and metric precise.

### Course-catalog search bullet

- Clarify what “search time” measures: server response time, time to display results, time to interactive filtering, or user-perceived completion time.
- Client-side filtering can improve interaction speed, but the claim should make clear that the comparison used the same dataset and conditions.
- If the catalog data became too large for client-side filtering, be prepared to explain how you handled bundle size, caching, or stale data. Those details may matter in an interview.
- This bullet would be stronger if it communicated scale, such as the size of the catalog or number of users, provided those facts are available.

## Lumen Travel role

### Performance improvement bullet

- The result is useful, but “page performance” is broad. Identify the actual metric measured and the testing conditions in your revised version.
- Explain whether the 35% improvement applied to the whole page, a specific route, or a particular user segment.
- Code-splitting the calendar and map widgets is technically relevant; make sure the metric directly reflects that change.

### Accessibility bullet

- This is strong because it names the type of work and gives an audit result.
- Clarify whether “all 14 accessibility issues” means all issues in the date picker or all issues in the entire application.
- If the fixes were verified through automated and manual testing, that distinction could be useful, but only include it if accurate.
- Avoid overstating “fixing all” if the audit was limited in scope.

### Component-testing bullet

- This is a good testing bullet, but “caught 3 regressions” should be tied to a defined period or release if possible.
- Clarify whether the 60 tests were unit, integration, or end-to-end tests.
- If the tests covered particularly complex cases, such as filtering combinations or asynchronous data, that context would help establish their value.

### LCP bullet

- As noted above, investigate this carefully. Lazy-loading a hero image is normally not the correct optimization for LCP.
- Verify that the before-and-after measurements were comparable and that the hero image was not already being prioritized through another mechanism.
- If the result cannot be technically explained, remove the bullet rather than risk a credibility issue.

### XSS bullet

- This requires a technical correction or removal.
- Rendering untrusted input through `dangerouslySetInnerHTML` is potentially dangerous. React state is not a security boundary.
- If you used a sanitizer, output encoding, a safe rendering method, server-side validation, or another control, describe the real control. If not, do not claim that the implementation prevented XSS.
- Security claims receive especially close scrutiny, so accuracy matters more than keeping the bullet.

### Server-side rendering and bookings bullet

- This is likely the strongest Lumen bullet because it connects a technical change to a business result.
- Clarify the scope of “hotel search results page,” the performance metric behind “median load time,” and the duration or sample size of the A/B test if available.
- Make sure the 9% booking increase was statistically meaningful or at least based on a sufficiently large experiment. If it was directional rather than conclusive, do not overstate it.
- Avoid duplicating this accomplishment in the Projects section.

## Transit Arrival Web App

### Live-arrivals bullet

- This is a strong project outcome because it shows real use rather than only implementation.
- Verify that “used by about 900 riders a week” comes from reliable analytics and that you have permission to claim the usage figure.
- Clarify whether the 400 stops are all served by one agency or multiple sources if that affects the project’s complexity.
- Since the project is marked “Present,” make sure the usage number reflects a recent period rather than a short-lived peak.

### Offline caching bullet

- This is technically relevant and measurable.
- Clarify what “opened in 0.8s” measures and how the slow 3G test was conducted.
- The comparison to 2.9 seconds should use the same device, browser, network throttling, and cache conditions. Otherwise, the metric may be questioned.
- Distinguish between loading the application shell and loading live arrival data, since offline caching cannot provide current arrivals without connectivity.

### Open-source and agency-link bullet

- This is valuable evidence of external validation.
- State the project’s repository and confirm that it is public, documented, and easy to run.
- Make sure the transit agency link is current and that you are permitted to claim the relationship or endorsement.
- If the agency merely linked to the project rather than formally adopting it, avoid implying official deployment.

## Library Room Booking

### Frontend contribution bullet

- “Worked on the frontend” is too vague and undersells your contribution.
- Specify the part of the booking flow you owned, the technologies actually used, and the result of your work.
- Resolve the React/Vue inconsistency noted above.
- If this was a team project, make your individual contribution clear rather than describing the team’s work generally.

### Calendar component bullet

- This is a useful technical bullet.
- Clarify whether the tests were unit, integration, or end-to-end tests.
- Explain how you handled overlapping bookings and time-zone changes only if those were meaningful implementation challenges.
- If you have a test count, defect reduction, or user outcome, include it; otherwise, the current content is still reasonable for a hackathon project.

### Unrelated travel-search bullet

- Remove it from this project.
- Check the entire resume for duplicated or misplaced accomplishments; this bullet suggests the document may contain content from multiple versions.

## Skills

- Correct the Storybook spelling.
- “Tools” currently mixes languages, frameworks, and libraries. Organize the section by category if the resume has room, such as languages, frameworks, and tooling.
- Consider adding HTML, CSS, JavaScript, Git, testing tools, build tools, or web-performance tools only if you can discuss them confidently. The current list may make your technical profile look narrower than your experience suggests.
- “Methods” is not the best category for server-side rendering. Accessibility and component testing are practices; server-side rendering is an architecture or rendering technique. Reclassify the items so the categories are conceptually consistent.
- Include only skills supported by the experience and projects. Angular appears only in the skills list, so be prepared to explain your level of experience with it or remove it.
- Storybook also appears only in Skills. That is acceptable, but a recruiter may assume practical experience, so make sure it is accurate.

## Overall presentation

- Your strongest themes are **frontend performance, accessibility, testing, and measurable product impact**. Make those themes easy to see by putting the strongest and most credible bullets first within each role.
- Remove technically questionable claims even if they contain impressive metrics. Accurate, slightly less dramatic accomplishments are better than claims that an engineer may immediately challenge.
- Standardize date formatting and punctuation across all sections.
- Keep bullet formatting consistent and avoid line breaks that split technical terms awkwardly in the submitted PDF.
- If applying for frontend roles, this resume is well aligned once the technical inaccuracies and project inconsistency are fixed. If applying for full-stack or security-focused roles, the current content does not yet demonstrate enough backend or security depth.