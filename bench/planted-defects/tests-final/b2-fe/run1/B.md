You have strong quantified results, but several credibility and consistency issues need attention before polishing. The security bullet and the duplicated travel-search bullet are the most important to resolve.

## Header and formatting

- **Name and contact details:** If the `example.com` email and code URL are literal rather than anonymized for this review, replace them with real, working contact links. Recruiters need to be able to reach you and verify your work.
- **Dates and separators throughout:** Standardize date formatting and range separators across Education, Experience, and Projects. Consistency makes the timeline easier to scan.
- **Wrapped bullet lines:** The line breaks in this pasted version are fine if they’re just formatting from the message. In the final document, make sure each bullet has consistent indentation and spacing.

## Education

- **M.S. entry:** Keep the expected graduation date accurate and current. If your enrollment status or expected date has changed, update it; the entry currently signals that the degree is in progress.
- **B.S. entry:** This is clear. Keep the degree and date format consistent with the M.S. entry.

## Experience

- **Order of roles:** Put Lumen Travel before Westfield State University. The roles are currently listed oldest first; reverse chronological order is the usual convention and makes your most recent experience easier to find.
- **Westfield role heading:** The employer, title, location, and dates are clear. Keep the same heading format for both roles.

### Westfield State University bullets

- **“Owned the department websites…”** Clarify the scope of “owned” and what your responsibility involved. As written, it communicates responsibility but not what you actually managed or changed.
- **Editor interviews and preview mode:** Keep the result, but clarify what the broken-page figure counts and how the before-and-after periods compare. That makes the reduction easier to interpret and trust.
- **Accessibility checklist:** Clarify what “failed audits” refers to—such as the number of pages, checks, or audits—and ensure the two semester figures use comparable scope. The improvement is compelling, but the unit is ambiguous.
- **Course-catalog search:** Define what “search time” measures and under what conditions. A change from four seconds to under one is strong, but readers can’t tell whether it means system response time or the time for a person to find a course.

### Lumen Travel bullets

- **Page performance improvement:** Specify which performance measure improved and how it was measured. This bullet overlaps with the later load-time results, so make clear whether it describes a separate change or the same work.
- **Date-picker accessibility:** Clarify the audit’s scope and what “all 14” refers to. This is a useful result, but readers need to know whether those issues were all in the date picker or across a broader audit.
- **Component tests:** The number of tests and regressions found are useful. If you keep the claim, make sure “caught” accurately describes how you know the tests found those regressions.
- **Hero-image lazy loading and LCP:** Recheck both the technical explanation and the attribution. Lazy-loading the image that determines Largest Contentful Paint can delay it, so this claim may sound counterintuitive to frontend reviewers. Verify the implementation and measurement before keeping it.
- **Cross-site scripting:** This bullet is a serious problem as written. Storing input in React state does not prevent XSS, and rendering it with `dangerouslySetInnerHTML` can create a vulnerability. Do not present this as a security fix. Recheck what the code actually did and whether the implementation safely handled untrusted input; remove the claim if you can’t substantiate a safe fix.
- **Server-side rendering and bookings:** Clarify whether the 9% result is a relative increase or a percentage-point change, and provide enough context for the A/B-test result to be credible. Also distinguish this work from the other performance bullets if they concern the same page or feature.

## Projects

- **Project order:** The current newest-first order is appropriate, assuming the dates are accurate.
- **Transit app, usage:** Explain how the weekly rider estimate was measured, if you can. The usage figure adds value, but readers may wonder whether it comes from analytics, an agency, or an estimate.
- **Transit app, offline caching:** Clarify the conditions behind the 0.8-second and 2.9-second comparison—especially whether the measurements used a cached app, the same device, and the same network conditions. That makes the speed claim interpretable.
- **Transit app, agency link:** This is a useful external signal. Make sure the link is live and supports the claim that the agency linked the project, without implying formal adoption if there wasn’t one.
- **Library project, project heading versus first bullet:** The heading lists Vue, while the bullet describes React and TypeScript. Resolve which technologies the project actually used and make the heading and contribution consistent.
- **Library project, booking-flow bullet:** This describes your area of work but gives little detail about your individual contribution. Make sure the other bullets establish what you personally built, rather than leaving your role on a four-person team unclear.
- **Library project, calendar bullet:** This is relevant and specific. If you have a concrete result or scope for the tests, include it only if you can support it; otherwise, the current detail is still useful.
- **Library project, travel-search bullet:** This appears unrelated to a library-room-booking hackathon and closely duplicates the Lumen server-rendering result. Remove it from this project unless it truly belongs here; if it does, verify the project, timeline, and result carefully. As written, it undermines the accuracy of the resume.

## Skills

- **“Tools” line:** TypeScript, React, Vue, and Angular are technologies, not tools. Make the category label fit what you list.
- **“Storybok”:** Correct the misspelling. It should be recognizable as the intended tool.
- **Angular:** It isn’t supported elsewhere in the resume. Keep it only if you can confidently discuss your experience with it and it’s relevant to the roles you’re targeting.
- **“Methods” line:** The items mix an implementation architecture, a quality practice, and a broad area of expertise. Organize the categories so readers can quickly understand what each item represents.

**Priority order:** Fix the XSS claim, remove or verify the duplicate project bullet, reconcile the React/Vue mismatch, and correct the Storybook typo. Then clarify the performance and audit metrics and reorder Experience.