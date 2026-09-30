Your strongest material is the quantified frontend work at Lumen, the university, and the transit app. Before polishing wording, fix the technical claims and inconsistencies below; they could undermine the rest of the resume.

### Contact and education
- **Name:** No change needed.
- **Phone, email, link:** Make sure the link goes directly to your work and is clickable in the submitted file. If these are placeholders, replace them before applying.
- **Both education entries:** Check that the school name, location, degrees, and dates are accurate. Keep “Expected” on the M.S. until it is awarded.

### Harbor Coffee Roasters
- **Morning-rush bullet:** Clarify whether roughly 200 orders were handled by you or by the café team; the current wording could imply either.
- **Opening/cash-count bullet:** Fix the corrupted character in “cafØ.” Retain this role if it explains your current employment, but keep it brief for frontend applications.

### Lumen Travel
- **35% performance bullet:** Name the performance measure and, if possible, its before/after values. “Page performance” is too broad to verify.
- **Accessibility bullet:** Specify what the audit covered if “all 14” refers only to the date picker; otherwise it can sound like every product accessibility issue was resolved.
- **60 tests bullet:** Keep it. Check that “caught 3 regressions before release” is attributable to those tests.
- **Largest contentful paint bullet:** Recheck the cause. Lazy-loading a hero image can *worsen* LCP if that image is the LCP element. The claimed improvement is substantial, so confirm both the implementation and measurement.
- **XSS bullet:** Remove or correct this claim after reviewing the code. Storing input in React state does not sanitize it, and `dangerouslySetInnerHTML` can introduce XSS.
- **Search-results bullet:** Keep the load-time and A/B-test results if you can substantiate them. Clarify your contribution to server-side rendering rather than implying that using React alone provided it.

### Westfield State University experience
- **Websites/component-library bullet:** Replace the vague scope of “owned” with concrete scope or responsibility; it is the least specific bullet in this role.
- **Editor interviews/preview-mode bullet:** Clarify your role in implementing preview mode, and confirm that the before/after broken-page counts use comparable periods.
- **Accessibility-checklist bullet:** Confirm how the audit counts were measured and avoid attributing the entire reduction to the checklist unless that is supported.
- **Catalog-search bullet:** Specify what “search time” measures. Client-side filtering may improve interaction speed, but the metric is ambiguous.

### Projects
- **Transit app, usage bullet:** Keep it; clarify whether 900 represents distinct riders or visits if you know.
- **Transit app, offline-speed bullet:** Check that the 0.8s and 2.9s figures were measured under the same conditions.
- **Transit app, agency-link bullet:** Keep it if the link is live and verifiable.
- **Library booking heading and first bullet:** Resolve the Vue-versus-React/TypeScript inconsistency. The listed project stack conflicts with the work you say you did.
- **Booking-calendar bullet:** Keep it; be ready to explain how you tested overlapping bookings and time-zone changes.
- **Travel-search bullet:** Remove it from this project unless that work genuinely belonged to the hackathon. It appears to duplicate the Lumen travel-search result.

### Skills
- **Tools:** Fix “Storybok” to the tool’s correct name. List Vue and Angular only if you can discuss your experience with them; the project-stack inconsistency makes this particularly important.
- **Methods:** These are relevant. Keep only methods supported by work you can explain—especially server-side rendering, given the claim above.