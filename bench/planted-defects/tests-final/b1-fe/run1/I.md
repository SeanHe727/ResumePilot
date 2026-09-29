## Highest-priority fixes

1. Correct the two mathematical errors:
   - 3.0s to 1.5s is a **50% reduction**, not 75%.
   - 30% to 40% is a **10-percentage-point increase**, not a 10% increase.
2. Fix claims where the stated technique does not support the result:
   - Converting PNGs to WebP does not reduce a JavaScript bundle.
   - Lazy-loading a hero/LCP image generally delays it rather than improving LCP.
3. Resolve the Library Room Booking stack contradiction: the heading says Vue, while the bullet says React and TypeScript.
4. Change “Writes” to past tense because that role ended.
5. Correct “Storybok.”
6. Review line wrapping. Several bullets split in awkward places, including a hyphenated “time-zone”; this can look poor and interfere with ATS parsing.

## Header

### Name
No change needed.

### Contact line
- Ensure the code URL is a live, polished portfolio or GitHub profile rather than a generic or incomplete link.
- Consider including LinkedIn if it is complete and supports your candidacy.
- Use your actual city only if location is relevant to the roles; otherwise, omitting location is acceptable.
- Confirm that the email, phone number, and URL are clickable in the PDF.

## Education

### M.S. line
- Keep the expected graduation designation, but use one consistent date style throughout the document.
- If the degree is in progress, make sure none of the experience or project dates conflict with the actual submission date.
- Consider adding GPA only if it is strong and helpful.
- If the M.S. and B.S. are from the same institution, you can visually consolidate the school name to save space and reduce repetition.

### B.S. line
- No substantive change is required.
- If space is limited, omit the start date and show only the graduation date; employers usually care more about completion.
- Add honors only if meaningful.

## Experience

### Lumen Travel heading
- Confirm that the dates are accurate and that the internship is completed. If it is ongoing, the end date and bullet tenses should reflect that.
- Keep the title if it was official. Otherwise, use the employer’s exact title to avoid discrepancies during verification.

### “Rebuilt the hotel search results page…”
- Clarify what “load time” measures, such as server response, page load, or a user-centric performance metric. The current term is ambiguous.
- Specify whether bookings per search rose by 9% relative or by 9 percentage points.
- Keep the A/B-test reference, but include the test duration, sample size, or statistical confidence if available. That makes the causal claim more credible.
- This is a strong bullet and should remain near the top.

### “Cut the booking flow’s JavaScript…”
- Clarify whether the numbers are compressed transfer size or uncompressed bundle size; bundle metrics are otherwise difficult to interpret.
- Add the user or business impact if measured, such as a loading or interaction improvement.
- Verify that both widgets were actually excluded from the initial bundle rather than merely split into separate files.

### “Added keyboard navigation…”
- Identify the accessibility standard or audit basis if known.
- Avoid implying universal accessibility from one audit; make the scope of “all 14” clear.
- Add the resulting audit outcome or user impact if available.
- This is relevant and technically credible once the audit scope is specified.

### “Moving image resizing to the CDN…”
- Change the opening construction so it matches the direct action-result structure of the other bullets; the current grammatical form is awkward.
- Consider splitting or shortening the list of four optimizations. The main accomplishment is obscured by the number of implementation details.
- State whether the Lighthouse scores were measured under the same device, network, and test conditions.
- Treat Lighthouse as a lab result rather than a definitive production-user result unless you also have field data.

### “Cut the landing page’s largest contentful paint…”
- Recheck the technical explanation. Lazy-loading the hero image usually worsens LCP because browsers delay loading off-screen or lazily marked content. An above-the-fold hero image is generally not a good lazy-loading candidate.
- Replace the stated cause with the actual optimization responsible for the improvement, if another change was involved.
- Confirm whether the result came from production field data or a controlled lab test.
- Do not leave this claim as written; technically knowledgeable reviewers are likely to question it.

### “Documented the design-system tokens…”
- Add scale: number of tokens, components, designers, or teams affected.
- Add measurable impact if possible, such as fewer clarification requests, faster design reviews, or higher adoption.
- The current result is useful but weaker than the quantified performance bullets, so place it later, as you already have.

### Westfield State University heading
- No major change needed.
- Verify whether “Web Developer” was the official title.
- Since the role lasted about five months, make sure the scope of the claims is plausible within that period.

### “Cut the university sites’ JavaScript bundle…”
- Correct the technical mismatch. Converting PNG images to WebP can reduce image payload or total page weight, but it does not reduce JavaScript bundle size.
- Determine which metric actually fell by 60% and name that metric accurately.
- Clarify how many university sites were affected.
- This is a serious credibility issue in its current form.

### “Interviewed 8 department editors…”
- Clarify the attribution between the interviews, preview mode, and decline in reported broken pages. The current statement implies a direct causal chain.
- State the comparison period behind “30 to 6 a month,” so the metric is not interpreted as a one-month fluctuation.
- Keep the user-research detail; it differentiates you from candidates who only describe implementation work.
- This is one of the stronger bullets after the measurement period is clarified.

### “Writes the accessibility checklist…”
- Change the verb to past tense because the role ended.
- Clarify whether you created, maintained, or applied the checklist; “writes” is vague.
- Explain what a “failed audit” means and whether 12 to 2 represents pages, issues, sites, or audit cycles.
- Support the causal link between the checklist and audit reduction if other changes also contributed.

### “Rebuilt the course-catalog search…”
- Clarify what “search time” means: response latency, time to display results, or time users took to find a course.
- Explain how client-side filtering handled the catalog size and data freshness, if relevant.
- State the number of courses or records to show scale.
- Retain the before-and-after metric once its definition is precise.

## Projects

### Transit Arrival Web App heading
- Keep the technology labels consistent with the Skills section and with the technologies actually used.
- If this is publicly available, include a live link and repository link.
- Since it is ongoing, present-tense verbs are appropriate for continuing functionality, while completed improvements can remain in past tense.

### “Built a progressive web app…”
- Clarify how weekly riders are counted, especially whether they are unique users, sessions, or devices.
- Verify that “live” arrivals are genuinely real-time rather than scheduled estimates.
- Consider identifying the data source or transit API if that demonstrates integration work.
- This is a strong opening project bullet.

### “Cut cold-start time…”
- Correct the percentage: 3.0s to 1.5s is a 50% reduction.
- Reconsider the term “cold start.” Offline caching typically benefits repeat visits, while a true first-time cold load cannot use an existing cache.
- Identify exactly what was measured and under what test conditions.
- Ensure the stop-list caching was actually the primary cause of the improvement.

### “Raised weekly returning riders…”
- Correct the metric language. A change from 30% to 40% is 10 percentage points, or approximately a 33% relative increase.
- Define “returning riders” and the comparison cohorts.
- Be cautious about attributing the entire change to saved stops unless you ran an experiment or have other evidence.
- A one-month observation period is short, so include more data if available.

### Library Room Booking heading
- Resolve the technology contradiction. The heading identifies Vue, while the first bullet identifies React and TypeScript.
- List only the stack actually used.
- Verify the dates. A hackathon lasting from February to March may invite questions unless it was a multiweek event.

### “Worked on the frontend…”
- Replace the vague description of participation with the specific scope you owned, but do not duplicate the next bullet.
- Resolve the React/TypeScript conflict with the Vue heading.
- Add an outcome or scale if available.
- “Worked on” understates contribution and is weaker than the action verbs elsewhere.

### “Wrote the booking calendar…”
- Specify the type or extent of testing and the result, such as coverage of important edge cases or defects prevented.
- Clarify what “handling” means in measurable or technical terms.
- Keep the overlapping-booking and time-zone complexity; those are useful details.
- Prevent “time-zone” from splitting across lines in the PDF.

### “Presented the demo…”
- Add the result of the presentation or handoff, such as adoption, feedback, continued development, or selection by judges, if any.
- If there was no meaningful result, this is the first bullet to remove when space is needed.
- The setup notes show professionalism, but the bullet currently lacks impact.

## Skills

### “Tools: TypeScript, React, Vue, Storybok, Angular”
- Correct “Storybok” to the proper product name.
- Change the category label because this list mixes a programming language, frameworks, and a development tool.
- Keep Angular only if you can discuss meaningful experience with it. Nothing elsewhere demonstrates it.
- Make sure Vue remains only if the Library Room Booking project actually used Vue.
- Add core frontend technologies, testing tools, version control, build tooling, and relevant backend or API technologies only if you can use them confidently.
- Order skills by relevance and proficiency rather than arbitrarily.

### “Methods: server-side rendering, accessibility, component testing”
- Use a more accurate category label; these are a mixture of rendering architecture, a quality discipline, and a testing practice.
- Be more specific about accessibility knowledge if you have experience with standards, audits, semantic HTML, or assistive-technology testing.
- Name the component-testing tools elsewhere if they are genuine strengths.
- Consider whether these items are better demonstrated through bullets rather than occupying a separate skills category.

## Overall structure and presentation

- Your strongest material is quantified and product-focused, which is a major advantage.
- Several numbers currently undermine credibility because of incorrect math or mismatched technical causes. Fix those before applying.
- Use consistent punctuation, capitalization, tense, and date formatting.
- Ensure bullets do not break after prepositions or split hyphenated words awkwardly.
- Keep the resume to one page at this career stage unless you have substantial additional experience.
- Prioritize credible business outcomes over Lighthouse scores and implementation details.
- Be prepared to explain how every metric was measured and how confidently the result can be attributed to your work.