Your strongest material is the combination of measured results, accessibility work, and a project with real users. Before polishing the wording, fix the **technical and consistency issues** below; they could undermine an otherwise strong resume.

### Header and education
- **Contact line:** Check that the code link leads directly to work you want an employer to see. Otherwise, replace or remove it; the link should support your candidacy.
- **M.S. line:** Keep the expected graduation date current and clearly marked as expected. It helps recruiters understand your availability.
- **Education placement:** If you’re applying to internships or new-grad roles, keeping education first makes sense. For experienced-hire roles, consider putting experience first so the most relevant evidence appears sooner.

### Experience
**Westfield State University**
- **Role dates and ordering:** Put the 2025 Lumen role above the 2023–24 university role. Reverse chronological order makes your timeline easier to scan.
- **“Owned the department websites…”:** Specify the scope of ownership—such as how many sites or what you were responsible for maintaining. “Owned” and “other developers relied on” are broad claims without that context.
- **Editor interviews / preview mode:** Clarify how the before-and-after broken-page counts were measured and over what period. That makes the connection between the feature and the result credible.
- **Accessibility checklist:** Narrow or substantiate “all university web pages,” and explain what “failed audits” counts. The stated scope and result are impressive, so they need to be precise.
- **Course-catalog search:** Identify what “search time” measures and, if relevant, whether client-side filtering remained workable for the catalog’s size. This helps readers interpret the performance claim.

**Lumen Travel**
- **35% performance improvement:** Name the metric and measurement conditions. “Page performance” alone is too vague to evaluate.
- **Date-picker accessibility:** Keep the audit result, but ensure “all 14” refers to issues your changes actually resolved. That distinction matters in accessibility claims.
- **60 component tests:** Indicate the testing tool or what behavior the tests covered, if space permits. The regression result is useful; a little context makes the work more concrete.
- **Hero-image LCP bullet:** Recheck both the implementation and the attribution. Lazy-loading a hero image can *worsen* largest contentful paint if that image is the LCP element. Correct the technical description or remove the causal claim unless you can substantiate it.
- **Comments/XSS bullet:** Remove or correct this before applying. Putting input in React state does not prevent XSS when it is subsequently rendered with `dangerouslySetInnerHTML`. The bullet currently describes a potential vulnerability as a security fix.
- **Hotel search results:** Retain this if the A/B result is attributable to the work, and be ready to explain the measurement and your contribution. It is one of your strongest bullets.

### Projects
**Transit Arrival Web App**
- **Usage bullet:** Say how you measured the roughly 900 weekly riders, and keep the figure current. Real usage is valuable when it is verifiable.
- **Offline/speed bullet:** Clarify whether the 0.8s measurement is for an offline open or a slow-3G open; those describe different conditions.
- **Agency link:** Keep it if the link is live and points to your app. It provides useful external validation.

**Library Room Booking**
- **Project heading vs. frontend bullet:** The heading says Vue, but the bullet says React and TypeScript. Correct the stack so both accurately describe the project.
- **Calendar bullet:** Keep it, but verify that the tests actually cover both overlapping bookings and time-zone changes; those are worthwhile specifics.
- **Travel-search bullet:** Remove it from this project or correct its placement. It describes travel bookings, closely duplicates your Lumen hotel-search result, and appears unrelated to library room booking.

### Skills
- **Tools:** Correct the **Storybok** typo to the tool’s actual name. Keep Angular only if you can discuss or demonstrate working proficiency; an unsupported skill can become an interview problem.
- **Methods:** Make sure each listed method is supported by the experience or projects above. This section should reinforce the evidence, not make new claims.