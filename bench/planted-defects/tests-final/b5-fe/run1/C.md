Your strongest material is the measured frontend work at Lumen, the university, and the transit app. Before polishing anything else, fix **two technical claims that may undermine your credibility**: storing input in React state does not prevent XSS when it is later rendered with `dangerouslySetInnerHTML`, and lazy-loading a hero image would not ordinarily improve largest contentful paint (LCP).

Below is what I’d change, line by line, without rewriting your wording.

### Header and education
- **Contact line:** Make sure the code URL leads directly to a useful portfolio or code profile, not just a generic landing page. Add LinkedIn only if it is current and supports your applications.
- **M.S. and B.S. lines:** Keep both. Confirm that “Expected Jun 2026” is still accurate when you submit the resume.

### Experience
- **Harbor Coffee Roasters role:** If you’re applying for frontend roles, consider placing relevant engineering experience ahead of this job, even if you keep the role to show current employment.
  - **“200 orders”:** Clarify whether you personally prepared that many or the team handled that volume; the distinction affects credibility.
  - **“cafØ” / cash count:** Fix the character-encoding error. Keep the cash responsibility if it demonstrates trust, but this bullet is less relevant than your engineering work and is a candidate to cut if space is tight.

- **Lumen Travel role:**
  - **“Improved page performance by 35%”:** Name the specific metric and how you measured it. “Page performance” is too broad to evaluate.
  - **“all 14 accessibility issues”:** Specify the audit’s scope if it covered only the date picker; otherwise “all” can sound like a claim about the whole product.
  - **“60 component tests”:** Keep the result, but verify that the three regressions were actually caught by those tests before release.
  - **“LCP … by adding `loading="lazy"` to the hero image”:** Recheck the cause and measurement. Lazy-loading an above-the-fold hero commonly *worsens* LCP. Correct or remove the attribution unless you can substantiate it.
  - **“Prevented cross-site scripting … React state … `dangerouslySetInnerHTML`”:** Remove or correct this claim. React state does not sanitize input, and `dangerouslySetInnerHTML` bypasses React’s normal escaping. Only describe an XSS prevention measure you actually implemented and verified.
  - **“Rebuilt the hotel search results page”:** This is a strong bullet. Keep it if the load-time and A/B-test figures are attributable to the work; be ready to explain the experiment and your contribution.

- **Westfield State University role:**
  - **“40 department sites”:** Strong scope and outcome. Check that the build-time comparison uses the same kind of page before and after.
  - **“Interviewed 8 department editors”:** Strong research-to-outcome story. Make sure the drop in broken-page reports is measured over comparable periods.
  - **“Writes the accessibility checklist”:** Change the tense to match this completed role. Also clarify your contribution if others maintained or approved the checklist.
  - **“course-catalog search”:** Keep the result, but identify what “search time” measures if it could mean either response time or a person’s time finding a course.

### Projects
- **Transit Arrival Web App heading:** Keep the dates and technologies current; link directly to the live app or repository if available.
  - **“400 stops / 900 riders”:** Strong numbers. Be prepared to explain how weekly usage was measured.
  - **“0.8s … against 2.9s”:** Keep if both timings came from comparable slow-3G tests.
  - **“city transit agency linked it”:** Keep; it’s useful external validation. Ensure the link is still live.

- **Library Room Booking heading:** Check the date range: a two-month span may prompt questions for a hackathon project. The heading says **Vue**, while the first bullet says **React and TypeScript**; resolve that inconsistency.
  - **“Worked on the frontend”:** Specify your contribution more precisely if the following calendar bullet doesn’t already cover all of it; this is your least distinctive project bullet.
  - **“booking calendar component”:** Keep. Be ready to explain how you tested overlaps and time-zone changes.
  - **“Rebuilt a travel search page”:** Remove it from this project. It appears to duplicate the Lumen hotel-search achievement and does not fit a library-booking hackathon.

### Skills
- **“Tools”:** TypeScript is a language; React, Vue, and Angular are frameworks or libraries. Group them accurately. Keep Angular only if you can discuss hands-on experience with it.
- **“Methods”:** Keep skills you can demonstrate through the entries above. Consider whether this section adds information beyond the bullets; use the space for stronger evidence if the resume runs long.

**Priority order:** correct the security and LCP bullets, remove the misplaced travel-project bullet, resolve Vue versus React, fix “cafØ” and the past-tense error, then tighten the less relevant or less specific bullets.