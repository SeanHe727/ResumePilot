## Overall

The resume has useful impact metrics, but **several claims need verification before you submit it**. The most serious issues are a security claim that appears technically incorrect, a performance claim with a questionable cause, and a project bullet that conflicts with the project description and closely repeats an internship bullet.

No target job description was provided, so I can’t assess role fit. As written, the resume is positioned for frontend engineering.

## Contact and education

- **Contact details:** Check that the phone number, email, and code link are real, professional, and accessible. They look like placeholders; if you anonymized them for review, disregard this.
- **Education:** The degrees and dates are clear. Make sure the expected graduation date is current when you apply. Add GPA, relevant coursework, or academic honors only if they strengthen your application and are accurate.

## Experience

### Westfield State University — Web Developer

- **“Owned the department websites and the shared component library…”** Clarify what ownership meant: the systems you maintained, the decisions you made, or the work you personally delivered. As written, the scope is broad but the technical contribution is unclear.
- **Editor interviews and preview mode:** Keep the user research and outcome, but substantiate the link between the interviews, the feature, and the reduction in broken pages. Specify what “broken pages” means and how the monthly counts were measured.
- **Accessibility checklist:** Clarify what audits were performed, what was in scope, and whether the decrease from 12 to 2 reflects comparable audits. The result is strong, but the reader needs to understand the measurement.
- **Course-catalog search:** Define what “search time” measures, how it was tested, and the size or nature of the catalog. Otherwise, it’s unclear whether this is a measured user outcome or a local performance test.

### Lumen Travel — Frontend Engineering Intern

- **35% performance improvement:** Name the performance measure and its baseline, and clarify the page or device conditions. This may overlap with the separate LCP bullet; make sure the two bullets describe distinct results rather than counting the same improvement twice.
- **Keyboard navigation and screen-reader labels:** State what kind of audit flagged the 14 issues and how you verified they were fixed. “All” is a strong claim, so be prepared to support it.
- **60 component tests:** Clarify whether the tests themselves caught the three regressions in CI, or whether they helped identify issues through another process. Also make sure these were meaningful test cases rather than just a test-count metric.
- **LCP reduction attributed to `loading="lazy"`:** Recheck this claim carefully. Lazy-loading a hero image that is visible immediately can delay its loading and worsen LCP, so the stated cause is questionable. Verify the before-and-after measurements and whether other changes contributed. Don’t attribute the improvement to lazy loading unless your evidence supports that explanation.
- **XSS prevention:** This is the most urgent issue. Storing input in React state does **not** make it safe to pass into `dangerouslySetInnerHTML`; that bypasses React’s usual escaping. Remove or correct this claim unless you can verify that the implementation used an appropriate sanitization approach and was actually safe. As written, it suggests a security misunderstanding.
- **SSR and bookings A/B test:** Keep the performance and business outcomes only if you can explain the experiment: sample size, duration, comparison, and whether the 9% result was statistically reliable. Also distinguish this page’s result from the other performance claims.

## Projects

### Transit Arrival Web App

- **400 stops and 900 riders per week:** Verify the stop count and explain how weekly usage was measured. If the number comes from analytics, be ready to distinguish people from sessions or requests.
- **Offline caching and load-time comparison:** Clarify what “opened” means and how the 0.8s and 2.9s measurements were collected, including device and network conditions. Make sure the comparison is like-for-like.
- **Agency link:** Verify that the link is public and current. Describe it accurately; a link from the agency’s developer page shows visibility, but does not by itself establish agency adoption or endorsement.

### Library Room Booking

- **Project stack inconsistency:** The project heading says Vue, while the first contribution says React and TypeScript. Resolve which technologies were actually used; this inconsistency will likely prompt questions.
- **Frontend booking-flow contribution:** Be more specific about your own scope and what you delivered. The current description is broad compared with the more concrete calendar bullet.
- **Calendar component and tests:** Clarify your contribution and what the tests covered. The overlapping-booking and time-zone cases are useful specifics.
- **Travel-search / bookings bullet:** This does not fit a library room-booking project, and it closely resembles the Lumen hotel-search result. Verify its project and ownership. If it belongs to Lumen, it is misplaced; if it belongs here, explain the connection and substantiate the result. **Do not leave it as written without resolving this**, since it raises a credibility concern.

## Skills and ordering

- **Experience order:** Put the 2025 internship before the 2023–2024 role so the experience section is reverse chronological.
- **Spelling:** Correct the misspelling of Storybook.
- **Angular:** Keep it only if you can defend your proficiency with concrete experience. The resume currently gives no evidence for it.
- **Skills categories:** The “Methods” label groups practices and technical concepts together. Make the categories consistent, and include additional skills only if they are relevant to the jobs you’re targeting and supported by your experience.

## Highest-priority changes

1. Resolve the XSS claim and the travel-search project inconsistency.
2. Verify the hero-image/LCP attribution and the other performance measurements.
3. Add enough measurement context to make the metrics credible and comparable.
4. Fix the Vue/React mismatch, correct the Storybook spelling, and reorder experience.
5. Check that every metric and ownership claim is something you can explain and defend in an interview.