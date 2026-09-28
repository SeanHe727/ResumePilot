## Overall assessment

This is a strong front-end engineering resume on substance: it shows shipped work, accessibility and testing experience, and several concrete results. The biggest changes are to **fix the security claim, resolve the project inconsistencies, and put the experience in reverse chronological order**. I’m assessing the pasted text only, not the original document’s layout or visual presentation. No target job was provided, so these comments assume general front-end engineering roles.

## Highest-priority changes

1. **Correct or remove the XSS bullet.** React state does not make user input safe when it is later inserted with `dangerouslySetInnerHTML`; that bypasses React’s normal escaping. As written, the bullet describes a potentially unsafe practice as a security fix. Only retain a prevention claim if you can accurately describe the actual protection used and verify it.
2. **Resolve the Library Room Booking project’s conflicting details.** Its heading says Vue, one bullet says React and TypeScript, and another describes a travel-search rebuild with results very similar to a Lumen bullet. Confirm what belongs to this project and remove anything that does not.
3. **Reorder Experience.** Lumen (2025) should appear before Westfield (2023–2024) to make the section reverse chronological.
4. **Verify the performance claims and their explanations.** The hero-image lazy-loading bullet is especially questionable: lazy-loading an above-the-fold hero image can delay, rather than improve, Largest Contentful Paint. Confirm what changed and how the metric was measured before keeping that causal claim.
5. **Fix the Skills typo** in “Storybok,” and make sure every listed tool reflects experience you can support.

## Section- and line-specific changes

### Header
- **Contact and code-profile line:** Make sure the code link leads to a current, accessible profile or portfolio with relevant work. The text alone doesn’t tell the reader what the link contains.

### Education
- **M.S. entry:** Keep the expected completion date clearly identified as expected. If your enrollment or expected date has changed, update it.
- **B.S. entry:** No content change is apparent. If you need space, experience is likely more valuable to prioritize for general front-end roles.

### Experience

**Westfield State University — Web Developer, IT Services**
- **“Owned the department websites and the shared component library…”** Clarify the scope of “owned” so readers can understand what you were responsible for. Keep the ownership level accurate.
- **Editor interviews and preview mode:** Preserve this; it connects user research to a specific product change and outcome. Make sure the monthly broken-page counts were measured consistently and that the relationship between the preview mode and the reduction is supportable.
- **Accessibility checklist and audit results:** Preserve this evidence. Clarify, if needed, what “failed audits” means and whether the checklist was adopted across all university pages as stated.
- **Course-catalog search:** Keep the result, but verify what “search time” measures and how it was measured. The phrase could refer to user task time or system response time, which are different claims.

**Lumen Travel — Frontend Engineering Intern**
- **Page performance and code-splitting:** Specify which performance measure the 35% refers to and which pages or experience it covers. “Page performance” is too broad to interpret on its own.
- **Date-picker accessibility:** Keep the audit result. If available and accurate, identify the audit scope or standard; don’t imply broader accessibility compliance than the audit established.
- **Sixty component tests and three regressions:** This is useful evidence. Make clear that the tests caught the regressions before release, as stated, and that the numbers refer to your work.
- **Largest Contentful Paint and `loading="lazy"`:** Recheck this claim before using it. Lazy-loading a hero image that is visible immediately can delay its loading and worsen LCP. Confirm the image’s position, the actual change, and the measurement; otherwise, don’t attribute the improvement to that change.
- **XSS prevention:** Correct or remove this bullet unless the implementation used a real, verifiable defense. Storing input in React state before passing it to `dangerouslySetInnerHTML` is not, by itself, XSS prevention.
- **Server-rendered search results and bookings:** This is a strong product-impact claim. Clarify the scope of “median load time” and the A/B-test result, and ensure the booking increase is attributed only as strongly as the experiment supports.

### Projects

**Transit Arrival Web App**
- **Live arrivals for 400 stops and about 900 riders a week:** Preserve these details if you can substantiate them. Make clear how the rider estimate was obtained, and what “live” means for the data source or update behavior.
- **Offline caching and 0.8s versus 2.9s:** Keep the comparison if both figures came from a fair, consistent measurement. Clarify what the timing measures and the test conditions if those are not evident elsewhere.
- **Open source and agency link:** This is useful external validation. Check that the project repository and the agency’s developer-page link are public and current.

**Library Room Booking**
- **Project heading:** Reconcile the listed Vue stack with the React and TypeScript mentioned in the first bullet. The project title, technologies, and bullets should describe the same project.
- **Frontend booking-flow bullet:** Keep it only with the correct stack and contribution. As a team project, distinguish your own work from the team’s work.
- **Calendar component and tests:** This is relevant detail. Keep the edge cases if they accurately describe what the component and tests handled.
- **Travel-search and bookings bullet:** Verify whether this belongs to this project at all. It appears to repeat the Lumen travel-search result; remove it from this project unless it is a separate, accurate project accomplishment. The current placement makes the project history difficult to trust.

### Skills
- **Tools:** Correct the Storybook spelling. Review whether Angular belongs in the list for the roles you want; a listed skill without an example is not automatically a problem, but it may invite questions about your level of experience.
- **Methods:** These are relevant, but broad. Keep the terms you can discuss with concrete examples, especially accessibility and server-side rendering.

## Presentation and ordering

Consider placing **Experience before Education** for general front-end roles, since your experience and project results are the strongest evidence here. Keep the sections in the order that best supports your target role once you have one in mind.