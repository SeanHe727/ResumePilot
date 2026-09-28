# Resume review

You have several strong, quantified results, especially the performance, accessibility, and booking outcomes. The main priorities are to fix the experience order, correct or remove the security claim, and resolve the inconsistencies in the hackathon project. I’ll describe what to change and why, without rewriting your lines.

## Contact and education

- **Code link:** Make sure the URL works and clearly leads to your GitHub profile, portfolio, or relevant projects. A recruiter should be able to identify what the link is without guessing.
- **Education order:** The order is appropriate, with your current degree first. Keep the expected graduation date clearly marked as expected, as you have it.
- **Degree dates:** Check that the dates and enrollment status are accurate and consistent with your application materials. Your master’s program overlaps with the internship; that can be perfectly valid, but be ready to explain the schedule if asked.

## Experience

- **Reorder the roles:** Put the Lumen Travel internship above the university role because it is more recent. Experience is generally listed in reverse chronological order.
- **University bullet about owning websites and the component library:** Add more specific scope or technical context if you can substantiate it. “Owned” communicates responsibility, but on its own it doesn’t show what you maintained, how widely it was used, or what your contribution involved.
- **University bullet about interviewing editors and adding preview mode:** Keep the result, but make the measurement period and comparison clear if you have that information. This will help readers understand what “30 to 6 a month” measures and how the preview mode contributed.
- **University accessibility-checklist bullet:** Clarify what the audit failures refer to and what was covered—such as the audit scope or number of pages—if available. The before-and-after result is useful, but readers need enough context to judge its scale.
- **University course-search bullet:** Clarify what “search time” measures: user time to find a course, system response time, or another metric. Those mean different things. Mention the relevant implementation details if they demonstrate skills needed for your target roles.
- **Internship performance bullet about code-splitting:** Specify what the 35% performance measure represents and how it was measured. As written, readers can’t tell whether it refers to load time, bundle size, or another metric.
- **Internship accessibility bullet:** Keep the concrete audit result. If space permits, identify the scope of the audit or the affected component so the result is easier to assess.
- **Internship component-test bullet:** This is useful evidence of testing work. Clarify what the tests covered or how the regressions were identified, if you can do so concisely.
- **Internship LCP bullet:** Verify the stated cause before keeping it. Lazy-loading an above-the-fold hero image can delay its loading and typically works against improving Largest Contentful Paint. If the metric improved because of other changes, don’t attribute the improvement to lazy-loading the hero image.
- **Internship XSS bullet:** Correct or remove this claim before applying. Storing input in React state does **not** make rendering it through `dangerouslySetInnerHTML` safe; that approach can still expose the application to cross-site scripting. Only describe a mitigation you actually implemented and can explain technically.
- **Internship hotel-search bullet:** This is one of your strongest bullets because it combines implementation, performance, and a business result. Keep it prominent, and be prepared to explain how the A/B test was run and whether the 9% increase was statistically reliable.

## Projects

- **Transit app bullet about 400 stops and 900 weekly riders:** Keep these scale indicators if you can support them. Clarify how usage was measured if the figure is an estimate.
- **Transit app offline-caching bullet:** The comparison is useful. Make sure the two load times were measured under comparable conditions, since connection quality and test setup can affect the result.
- **Transit app open-source bullet:** Keep the agency link if it is verifiable. This is a useful signal of external adoption; make sure the project link takes reviewers directly to the app or repository.
- **Library booking project metadata and first bullet:** Resolve the mismatch between the listed Vue stack and the React/TypeScript implementation described in the bullet. Make the project’s technologies consistent throughout.
- **Library booking calendar bullet:** Keep the technical detail, but clarify your individual contribution and how you verified the behavior—for example, what the tests covered. The team-of-four context makes it especially important to distinguish your work.
- **Library booking travel-search bullet:** Remove it from this project or verify that it belongs here. A travel-search page and booking uplift appear unrelated to a library-room-booking hackathon, and the claim closely resembles the Lumen Travel work above. As written, it looks like an accidental duplicate or misplaced bullet and may undermine trust in the rest of the resume.
- **Project dates:** Confirm that each date range reflects the actual work period. Keep the current project first if it is still active.

## Skills and formatting

- **“Storybok”:** Correct the spelling to **Storybook**. Misspelled skill keywords can be missed by both recruiters and ATS.
- **Skills categories:** Reorganize the section so languages, frameworks, and tools are distinguishable. The current “Tools” heading groups together technologies from different categories, while “Methods” mixes practices and architectural concepts.
- **Skills coverage:** Include only technologies you can discuss confidently, and make sure the list agrees with the experience and project descriptions. TypeScript, React, and Vue appear in the experience/projects but should be represented consistently in the skills section; add other relevant languages or tools only if they accurately reflect your experience.
- **Role emphasis:** Order skills and bullets around the jobs you’re targeting. For frontend roles, make the relevant frontend, testing, accessibility, and performance experience easiest to find.

## Fix these first

1. Correct the XSS claim or remove it.
2. Move Lumen Travel above the university role.
3. Resolve the Vue/React/TypeScript and travel-search inconsistencies in the hackathon project.
4. Verify the hero-image/LCP attribution.
5. Fix the Storybook spelling and make the skills categories clearer.