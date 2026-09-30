Your strongest material is the Lumen internship, university web work, and transit app. Before polishing wording, fix the technical inconsistencies: they are more likely to hurt your credibility than a weak bullet.

## Highest-priority fixes

- **Lumen, hero-image bullet:** Verify the cause of the LCP improvement. Lazy-loading a hero image can *delay* the largest contentful paint, so the stated fix and result appear to conflict. Describe the change that actually produced the measurement, or remove the claim if you cannot substantiate it.
- **Lumen, comments/XSS bullet:** Do not claim that putting input in React state prevents XSS, especially when using `dangerouslySetInnerHTML`. State is not a sanitizer. Correctly identify the protection you implemented and how you verified it, or remove this bullet.
- **Library Room Booking, final bullet:** Remove it from this project. It describes travel search and closely duplicates the Lumen internship result, making the project’s scope unclear.
- **Library Room Booking, heading and first bullet:** Resolve the **Vue** versus **React and TypeScript** mismatch. List the technologies actually used on this project.
- **Skills:** Correct **“Storybok”** if you mean Storybook. Remove any tool you cannot discuss comfortably in an interview.

## Section-by-section notes

**Header and education**
- Check that the portfolio/code URL goes directly to work you want employers to see; use a working, specific link rather than a placeholder.
- Confirm the M.S. expected graduation date is still accurate. You could place relevant experience before education if applying for frontend roles; your recent work is a stronger opening than degree dates.

**Harbor Coffee Roasters**
- First bullet: Clarify whether **200 orders** was the café’s morning volume or orders you personally prepared. The current attribution could be read as the latter.
- Second bullet: Fix the character-encoding error in **“cafØ.”** Keep this role brief so it does not crowd out engineering work.

**Lumen Travel**
- Performance bullet: Say what the **35%** measures and how it was measured; “page performance” is too broad to evaluate.
- Accessibility bullet: Keep the concrete audit count, but make sure “all 14” refers to issues within your scope and that the audit result can be supported.
- Test bullet: Strong as written in substance. Check that **60 tests** and **3 regressions** are accurate, and distinguish tests you wrote from an existing suite.
- Hotel-search bullet: This is one of your strongest results. Retain it if you can explain the baseline, measurement, and A/B-test attribution. Its search-page work should not also appear under the library project.
- Consider putting the hotel-search and defensible performance work before narrower implementation bullets.

**Westfield State University — Web Developer**
- First bullet: “Owned” and “relied on” leave your scope vague. Specify the scale or responsibility you actually held—such as sites, components, maintainers, or releases.
- Editor-interview and accessibility-checklist bullets: Strong outcomes. Be ready to explain how the before-and-after counts were tracked and what part of each improvement you drove.
- Course-catalog bullet: Define **“search time”**—response latency, time to find a result, or another measure—so the four-second-to-under-one-second claim is clear.

**Transit Arrival Web App**
- Usage bullet: Clarify how **900 weekly riders** was measured; avoid calling users “riders” if the data only shows visits.
- Offline/performance bullet: Check that the **0.8s versus 2.9s** comparison uses the same device/network conditions and a clearly defined start point.
- Transit-agency bullet: Good external validation; keep it if the link is live and attributable to this app.

**Library Room Booking**
- The heading gives a **two-month span** for a hackathon. Check whether those dates describe the event, later development, or something else.
- The calendar bullet is the most distinctive part of this project. Keep it if the overlap and time-zone handling were implemented and tested, not merely planned.

Finally, keep only metrics you can explain succinctly in an interview. Specific numbers help this resume, but several currently need clearer definitions or corrected technical explanations.