Your strongest material is the Lumen internship, university web work, and transit app. Before polishing wording, fix two technical claims that could undermine your credibility: the hero-image performance claim and the XSS claim.

### Header and education
- **Name:** No change needed.
- **Contact line:** Confirm the phone number, email, and code link are real, current, and clickable in the submitted version. A placeholder-looking link can make the resume seem unfinished.
- **M.S. line:** Keep the expected graduation date accurate. Consider whether repeating the university and location on both degree lines is worth the space.
- **B.S. line:** No substantive change needed; use the same date and location formatting as the M.S. line.

### Experience
- **Harbor Coffee Roasters heading:** Keep this role if it explains your current employment, but consider placing relevant technical experience first. Recruiters scanning for frontend work should reach Lumen quickly.
- **“Prepared drinks…”:** Consider shortening or removing it if space is tight. The order volume conveys pace, but not much about your fit for engineering.
- **“Opened the cafØ…”:** Fix the character-encoding error. Keep the responsibility only if you want to emphasize trust and reliability.
- **Lumen heading:** No change needed.
- **“Improved page performance by 35%…”:** Identify the performance measure and how it was measured; “page performance” is too broad to evaluate.
- **“Added keyboard navigation…”:** Specify whether the audit’s 14 issues concerned the date picker or a wider scope. Otherwise, “all 14” may overstate the impact.
- **“Wrote 60 component tests…”:** Strong bullet. Check that the three regressions are documented or that you can explain them in an interview.
- **“Cut the landing page’s largest contentful paint…”:** Recheck the cause and metric. If the hero image was the LCP element, lazy-loading it would generally *delay* LCP, not improve it. Correct the technical explanation before using this claim.
- **“Prevented cross-site scripting…”:** Remove or correct this claim after verifying the implementation. Storing input in React state does not sanitize it, and `dangerouslySetInnerHTML` can introduce XSS risk. This is particularly likely to draw scrutiny in an interview.
- **“Rebuilt the hotel search results page…”:** Strong outcome. Be ready to distinguish the effect of server-side rendering from other changes, and confirm that the A/B test supports attributing the 9% increase to this work.
- **Westfield IT heading:** No change needed.
- **“Owned the department websites…”:** Clarify the scope of “owned” if you can—such as the number of sites or your responsibilities—because it currently relies on a vague term.
- **“Interviewed 8 department editors…”:** Strong connection between research, feature, and outcome. Verify that the before-and-after broken-page counts cover comparable periods.
- **“Wrote the accessibility checklist…”:** Clarify whether the audit reduction applies across all university pages or the sites you supported; the stated scope is broad.
- **“Rebuilt the course-catalog search…”:** Name the measured kind of “search time” if available, and make sure the client-side approach is one you can explain for the catalog’s size.

### Projects
- **Transit app heading:** Good; ensure the project link is easy to find from the contact line or this entry.
- **“Built a progressive web app…”:** Strong. Be prepared to explain how you measured weekly riders.
- **“Cached the stop list offline…”:** Clarify that the before-and-after opening times were measured under comparable conditions.
- **“Open-sourced the app…”:** Strong external validation; verify the agency link still works.
- **Library Room Booking heading:** Resolve the **Vue** label’s conflict with the React/TypeScript bullet. Also check whether a February–March date range accurately describes the hackathon.
- **“Worked on the frontend…”:** Once the technology is corrected, make your specific contribution clearer; this overlaps with the next bullet.
- **“Wrote the booking calendar…”:** Keep it if accurate. It gives a concrete contribution and a useful edge case.
- **“Rebuilt a travel search page…”:** Remove this from the library project. It appears to duplicate the Lumen travel-search result and is unrelated to room booking.

### Skills
- **“Tools…”:** Correct **“Storybok”** to **“Storybook.”** Check that you can substantiate Vue and Angular experience; the Vue project currently contradicts its bullet, and Angular appears nowhere else. The label “Tools” is also imprecise for languages and frameworks.
- **“Methods…”:** Keep only methods you can discuss confidently, particularly server-side rendering given the claims above.