## Highest-priority fixes

1. **Correct the two technically inaccurate Lumen bullets.**
   - Lazy-loading an above-the-fold hero image generally delays the LCP image rather than improving LCP.
   - Storing input in React state does not prevent XSS, and `dangerouslySetInnerHTML` bypasses React’s normal escaping.
2. **Resolve the Library Room Booking technology contradiction.** The heading says Vue, while a bullet says React and TypeScript.
3. **Remove or relocate the travel-search bullet under Library Room Booking.** It duplicates the Lumen result and appears unrelated to the project.
4. **Put Lumen above the university role.** Experience should be in reverse chronological order.
5. **Fix “Storybok” to “Storybook.”**

## Header

### Name
- No change needed.

### Phone, email, and code link
- Replace the placeholder phone number, email, and domain if these are not merely anonymized for review.
- Label or use a recognizable GitHub/portfolio URL so recruiters immediately know what the link contains.
- Make the email and URL clickable in the PDF.
- Consider adding your current city or work-location preference if location matters for your search.

## Education

### M.S. line
- Keep it first because it is the current degree.
- Use a consistent date separator and format throughout the résumé.
- Make the expected graduation status visually unambiguous.
- Add GPA only if it is strong and useful; otherwise, no change is necessary.

### B.S. line
- Keep it below the M.S.
- Use the same date formatting as the graduate degree.
- You can reduce repeated institution and location information if space becomes tight, but do not sacrifice clarity for compression.

## Experience

### Section order
- Move **Lumen Travel** above **Westfield State University** because its end date is later.
- Verify that all dates are accurate relative to the date you submit the résumé.

### Westfield State University heading
- Keep the employer, title, location, and dates.
- Ensure the title reflects whether this was full-time, part-time, contract, or student employment if that distinction could otherwise be unclear.

### “Owned the department websites and the shared component library…”
- Replace or clarify “owned,” which is vague and can imply authority beyond your actual role.
- Add scope: number of websites, components, developers, departments, or users supported.
- Include an outcome if possible; this is currently responsibility-focused while the other bullets are results-focused.

### “Interviewed 8 department editors…”
- Keep the user-research count and the before/after incident metric.
- Clarify your role in designing and implementing the preview mode; the sentence currently jumps from research findings to the feature.
- Define what “broken pages reported” means if it includes several types of incidents.
- Make sure the reduction is based on comparable periods and can be defended in an interview.

### “Wrote the accessibility checklist…”
- Clarify whether “12 to 2” refers to failed audits, failed pages, or failed checks. Those are materially different.
- Avoid implying that writing a checklist alone caused the reduction; identify adoption, enforcement, training, or implementation work if you did it.
- Add the accessibility standard used, if applicable and accurate.
- Retain the before/after metric once its unit is clear.

### “Rebuilt the course-catalog search…”
- Define “search time.” It could mean query latency, page-load time, or the time users needed to find a course.
- Add the scale of the dataset if client-side filtering was technically meaningful.
- Mention the relevant technology only if it adds information not already obvious elsewhere.
- Keep the strong before/after performance measurement.

### Lumen Travel heading
- Move this role above the university role.
- Keep the internship designation; it correctly sets expectations about duration and scope.

### “Improved page performance by 35%…”
- Replace “page performance” with the exact metric measured. A percentage without a named metric is difficult to evaluate.
- State how performance was measured if space permits, especially if it came from lab tooling rather than production data.
- Clarify whether you independently implemented the code splitting or contributed to it.

### “Added keyboard navigation and screen-reader labels…”
- Keep the count of resolved audit findings.
- Name the accessibility standard, audit tool, or validation process if accurate.
- Be careful with “all 14” unless the issues were independently retested after the fix.
- If the date picker already had partial support, clarify the scope so you do not overstate building accessibility from scratch.

### “Wrote 60 component tests…”
- Keep the regression outcome; it is more valuable than the raw test count.
- Add the test framework if it is a technology employers commonly request and you genuinely used it.
- Clarify whether the regressions were caught before merge, before deployment, or during a release cycle.
- Consider reducing emphasis on the test count if those tests were very small; coverage or critical behaviors protected may be more meaningful.

### “Cut the landing page’s largest contentful paint… by adding loading='lazy' to the hero image.”
- Correct or remove this bullet unless the mechanism is accurately documented.
- Do not claim lazy-loading the LCP hero image as the cause without strong evidence. Above-the-fold LCP images generally should not be lazy-loaded because doing so delays their discovery and download.
- Recheck the implementation, before/after test conditions, and whether another optimization caused the improvement.
- Preserve the 4.1s-to-1.2s result only if it was measured consistently and can be explained technically.

### “Prevented cross-site scripting… by storing user input in React state…”
- Remove or fundamentally correct the technical explanation.
- React state does not sanitize input or prevent XSS.
- `dangerouslySetInnerHTML` creates an XSS risk because it bypasses React’s default escaping.
- Only retain an XSS-prevention claim if you used a real control such as avoiding raw HTML rendering, applying appropriate output encoding, sanitizing with a suitable library, or enforcing server-side validation and sanitization.
- Be prepared to explain the threat model and validation approach in an interview.

### “Rebuilt the hotel search results page…”
- Move this to the first or second bullet under Lumen because it combines substantial technical scope, performance improvement, and business impact.
- Keep the exact load-time and conversion metrics.
- Clarify whether the 9% booking improvement is relative or absolute.
- State your ownership level if “rebuilt” overstates a team effort.
- Consider naming the SSR framework if relevant and accurate.

## Projects

### Transit Arrival Web App heading
- Keep the technology list and current date.
- Add a repository or live-product link if the header link does not lead directly to this project.
- Include other central technologies only if they strengthen your candidacy and you used them substantially.

### “Built a progressive web app…”
- Keep the user and stop counts; they establish real adoption and scale.
- Clarify how weekly riders were measured so the number is credible.
- Ensure “live” is accurate if arrivals are predictions or periodically refreshed data rather than truly real-time data.

### “Cached the stop list offline…”
- Keep the before/after metric.
- Change “against” to a clearer comparison construction, without altering the substance.
- State how the slow-3G measurement was produced if it was a simulated benchmark.
- Clarify whether 0.8s refers to first load, repeat load, or offline launch; caching usually affects those scenarios differently.

### “Open-sourced the app…”
- Keep this bullet; third-party recognition from the transit agency is strong.
- Add the repository link and, if available, objective open-source adoption information.
- Clarify whether the agency link drove usage if you can support that connection.

### Library Room Booking heading
- Resolve the mismatch between Vue in the heading and React/TypeScript in the first bullet.
- List only the technologies actually used in this project.
- Verify the event dates. A two-month “hackathon” may raise questions unless it was an extended event.
- Keep “Team of 4” because it provides collaboration context.

### “Worked on the frontend…”
- Replace the weak “worked on” framing with your specific ownership and contribution.
- Correct the technology inconsistency with the project heading.
- Add a result, user flow, or delivered scope; this currently says little beyond participation.
- Avoid repeating technologies here if they are already listed accurately in the project heading.

### “Wrote the booking calendar component…”
- Keep the technical edge cases; overlapping reservations and time-zone behavior are substantive.
- Add the testing framework if useful.
- Clarify what the component did when conflicts occurred, without overloading the bullet.
- Prevent automatic or manual line breaks from splitting “time-zone” awkwardly in the final PDF.

### “Rebuilt a travel search page…”
- Remove this from the project.
- It appears unrelated to room booking and duplicates the final Lumen bullet.
- If it describes the Lumen work, keep only the more specific, quantified version under Lumen.
- Do not repeat the same accomplishment in two sections.

## Skills

### “Tools: TypeScript, React, Vue, Storybok, Angular”
- Correct **Storybok** to **Storybook**.
- Change the category name because this list mixes a programming language, frameworks/libraries, and a development tool.
- Separate languages, frameworks/libraries, and testing/development tools for easier scanning.
- Include only technologies you could discuss and use in a technical interview.
- Resolve the project-level Vue/React inconsistency before listing both.
- Consider adding core web technologies and the test framework you used, but only if they reflect genuine proficiency.

### “Methods: server-side rendering, accessibility, component testing”
- “Methods” is vague; use a category that more accurately describes these competencies.
- Make accessibility more specific if you know the relevant standards and testing approaches.
- Include SSR only if you can explain architecture, hydration, rendering tradeoffs, and the framework used.
- Add testing tools rather than relying only on the broad phrase “component testing.”

## Formatting and consistency

- Use reverse chronological order within sections.
- Use one date style throughout, preferably with consistent punctuation and dash characters.
- Check that line wrapping is automatic and that words are not manually split across lines.
- Keep bullet punctuation consistent; your current use of periods is already consistent.
- Keep the résumé to one page at this experience level unless you have substantial additional material.
- Test the final PDF with text extraction or an ATS checker to ensure the pipe-separated headings and links parse correctly.