Your strongest material is the Lumen internship, university web-development role, and transit app. Before polishing, fix two technical claims that could undermine credibility: the XSS bullet and the hero-image LCP bullet.

### Header and education
- **Name:** Keep it.
- **Phone, email, link:** Make sure the link goes directly to a portfolio or code profile and works. `example.com` reads as a placeholder.
- **M.S. line:** Keep the expected graduation date if it is still accurate. Use consistent date formatting throughout.
- **B.S. line:** Keep it; no substantive change needed.

### Experience

**Harbor Coffee Roasters**
- **Role line:** Keep the job, but consider placing it below your technical experience if you’re applying for engineering roles. Its current position makes it the first thing a recruiter reads.
- **Morning-rush bullet:** Clarify whether 200 orders were handled by you or the whole café, so the number doesn’t overstate your contribution.
- **Opening/cash bullet:** Fix the character-encoding error in “cafØ.” Keep this bullet if you want to show reliability and responsibility.

**Lumen Travel**
- **Performance/code-splitting bullet:** Keep it, but specify what the 35% measures and how it was measured.
- **Accessibility bullet:** Keep it. Clarify whether all 14 issues concerned the date picker, so “all” has a clear scope.
- **Component-tests bullet:** Keep it; the test count and regressions make the contribution concrete.
- **Hero-image/LCP bullet:** Recheck the claim. Lazy-loading a hero image commonly *worsens* LCP because the hero is often the LCP element. Correct the technical explanation and retain the numbers only if measurements support them.
- **XSS bullet:** Remove or fundamentally correct the claim. React state does not sanitize input, and `dangerouslySetInnerHTML` can introduce XSS. As written, this raises a serious security concern.
- **Hotel-results bullet:** Keep it if you can substantiate both the speed and A/B-test figures. It is strong, but make your specific contribution to the rebuild clear.

**Westfield State University**
- **Component-library bullet:** Keep it; the before-and-after build time is useful.
- **Editor-interviews bullet:** Keep it. Make clear how the reported broken-page counts were tracked if asked.
- **Accessibility-checklist bullet:** Change “Writes” to past tense to match the role’s end date, and clarify whether you authored, maintained, or introduced the checklist.
- **Course-catalog bullet:** Keep it, but specify what “search time” measures so the improvement is credible.

### Projects

**Transit Arrival Web App**
- **Project line:** Keep the stack and dates; verify that “Present” remains accurate.
- **Arrivals/usage bullet:** Keep it. Be ready to explain how you measured 900 weekly riders.
- **Offline/performance bullet:** Keep it if the comparison used the same device and network conditions; otherwise qualify the measurement.
- **Open-source/agency bullet:** Keep it. Ensure the project link makes the repository and agency link easy to verify.

**Library Room Booking**
- **Project line:** Resolve the **Vue** versus **React/TypeScript** mismatch in the next bullet. List the technologies actually used for this project.
- **Frontend bullet:** Once the stack is corrected, add what part of the booking flow you owned; “worked on” gives little sense of scope.
- **Calendar bullet:** Keep it; the edge cases show useful engineering depth.
- **Travel-search bullet:** Remove it from this project. It appears to duplicate the Lumen hotel-search achievement and is unrelated to library booking; duplication makes both entries less trustworthy.

### Skills
- **Tools:** Separate languages from frameworks/tools if space permits, and keep only skills you can discuss comfortably. Check whether Angular is supported by the experience or projects shown.
- **Methods:** Keep skills you can back up with the bullets. Revisit “accessibility” after correcting the checklist tense, and “server-side rendering” after confirming exactly what you implemented at Lumen.