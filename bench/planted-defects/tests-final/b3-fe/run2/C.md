Your strongest material is the Lumen internship, university web role, and transit app. The main fixes are two technically questionable claims, one apparent duplicate, and a few inconsistencies. I won’t rewrite the lines; here’s what to change and why.

### Header and education
- **Contact line:** Make sure the code URL leads directly to a working portfolio or repository. A reviewer should be able to inspect your work without searching.
- **Both degree lines:** Keep them if the dates and expected graduation date are accurate. They make your academic timeline clear.

### Experience
**Harbor Coffee Roasters**
- **Morning-rush bullet:** Clarify whether 200 orders were handled by you or the team; the current wording could imply either.
- **Opening/cash bullet:** Fix the corrupted character in “cafØ.” Keep the responsibility, but give this less space than your technical experience if you need room.

**Lumen Travel**
- **35% performance bullet:** Name the metric that improved by 35% and how it was measured. “Page performance” is too broad to verify.
- **Accessibility bullet:** Keep the audit result; check that “all 14” accurately describes the issues you fixed, not just issues identified.
- **Component-tests bullet:** Keep it. The test count and regressions caught show a concrete benefit.
- **Largest-contentful-paint bullet:** Recheck the cause. Lazy-loading a hero image often *worsens* LCP when that image is the LCP element, so the stated explanation may undermine an otherwise strong result.
- **XSS bullet:** Correct or remove the security claim. Putting input in React state does not make `dangerouslySetInnerHTML` safe; the claim needs an actual sanitization or safe-rendering measure you can substantiate.
- **Search-results bullet:** Keep the load-time and A/B-test results if measured as stated. This is one of your strongest bullets.

**Westfield State University**
- **Ownership bullet:** Specify the scope of the sites or library if you can. “Owned” and “relied on” are less persuasive without scale.
- **Editor-interviews bullet:** Keep it; it connects research, a product change, and an outcome.
- **Accessibility-checklist bullet:** Keep it if you can support the before-and-after audit counts.
- **Catalog-search bullet:** Clarify what “search time” measures so the improvement is meaningful.

### Projects
**Transit Arrival Web App**
- **Usage bullet:** Keep it, and be ready to explain how you measured weekly riders.
- **Offline/performance bullet:** Clarify the test conditions behind the 0.8s and 2.9s comparison.
- **Agency-link bullet:** Keep it if the link is live; it is useful external validation.

**Library Room Booking**
- **Project heading and first bullet:** Resolve the Vue-versus-React mismatch. A reader cannot tell which framework the project used.
- **Calendar bullet:** Keep it; the edge cases make your contribution specific.
- **Travel-search bullet:** Remove it from this project unless it genuinely belongs here. It appears to duplicate the Lumen work and is unrelated to library booking.

### Skills
- **Tools line:** Correct “Storybok” to the actual tool name. Include Angular and Vue only if you can discuss your experience with them confidently; the project inconsistency currently makes the Vue claim harder to assess.
- **Methods line:** Keep the methods you can substantiate in the bullets above. Resolve the SSR, accessibility, and testing details first so the skills list reinforces rather than conflicts with your experience.