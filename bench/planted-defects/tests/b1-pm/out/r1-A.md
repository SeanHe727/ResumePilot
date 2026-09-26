> Here is my resume: bench/planted-defects/tests/b1-pm/resume.pdf. Please review my resume and tell me what to change.
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
hook "memory-weak-point" failed: Cannot read properties of undefined (reading 'impact')
Reviewed the full resume:

- **Content review:** 4 entries, covering all 16 bullets in Experience and Projects.
- **Wording review:** the same 4 entries.
- **Narrative review:** entire resume.
- **Format review:** completed; the PDF is one page, parses cleanly, and has no layout or ATS blockers.
- **Job-description match:** not reviewed because no posting was provided.
- The detailed report is available via `/report --full`.

### Highest-priority changes

1. **Fix the MBA Consulting Practicum entry.**  
   Two bullets concern hospital scheduling, but the third refers to “new merchants,” “first payment,” and 2,300 merchants. Verify whether that bullet belongs to this project or to Harbor Payments.

2. **Clarify the overall career narrative.**  
   The resume supports an operations-to-product-management transition, but the section order currently emphasizes education over your four-plus years of professional experience. The narrative reviewer recommends moving **Education below Experience and Projects**.

3. **Explain the June 2018–March 2019 date gap.**  
   The resume currently leaves this period unexplained.

4. **Strengthen broad claims with the specific decision and result.**  
   This applies especially to:
   - “Set the company’s logistics strategy”
   - “Coordinated the quarterly S&OP review”
   - The consulting bullet describing weekly working sessions  
   
   These currently describe responsibility or activity without clearly identifying the decision enabled or operational result.

5. **Add measurement context to existing figures.**  
   Several results need a baseline, comparison period, denominator, or measurement method, including:
   - 35% checkout-conversion improvement
   - 30% reduction in warehouse pick errors
   - Queue reduced by half
   - Increase from 400 to 1,150 weekly active users
   - 95% fill rate
   - 1,800 driver hours saved annually
   - 9 tonnes diverted

6. **Remove repetition in the Harbor Payments entry.**  
   The dispute self-service bullets overlap: one describes requirements and success metrics, while another describes launch, metrics, and discovery. The narrative reviewer recommends consolidating or clearly separating these contributions.

7. **Check the Skills section against the evidence in the body.**  
   The resume lists A/B testing, PRDs, SQL, Jira, Figma, Amplitude, and Excel, but the entries do not currently demonstrate use of those skills. Verify each one and either support it elsewhere or remove it.

8. **Remove personal information excluded by convention.**  
   The format review flagged “Date of birth” and “Nationality.” The PDF otherwise has clean extraction and consistent formatting.

The strongest material is the **Campus Food Rescue App** project and the bullets that connect a specific intervention to a quantified result.

> /report
# Review: resume.pdf

**80/100** — format 100 · content 69 · wording 79 · narrative 58

Read 4 of 4 entries for content, 4 for wording. Career reading done, posting comparison no-posting.

## Start here

1. Remove age and nationality details from the résumé because they are excluded by convention.
2. Move EDUCATION below EXPERIENCE and PROJECTS so the résumé presents the candidate as an experienced operations professional transitioning into product.
3. Consolidate the two dispute self-service bullets into one chronological bullet because they repeat the same initiative.

## Already working

- s2:e0:b5: Provides an unusually complete outcome, baseline, scope, and intervention in one line.
- s3:e0:b1: Excellent cause-and-effect structure: user research identified a problem, a product change addressed it, and usage increased.
- s2:e1:b3: Connects ownership, implementation scope, user enablement, and quantified value in one line.

## Harbor Payments | Associate Product Manager Intern | Metro City, USA | Jun 2024 - Aug 2024

- Consolidate the two dispute self-service bullets into one chronological bullet because they repeat the same initiative. *(saves about 10 words)*
- Clarify whether the 35% checkout-conversion improvement is relative or percentage-point growth and identify its baseline or comparison group. *(about 6 words to add)*

## MBA Consulting Practicum | Team Lead | Regional Hospital Network | Jan 2024 - May 2024

- Verify that the merchant-onboarding bullet belongs to the Regional Hospital Network practicum before retaining it in this entry. *(no words)*

## Across the whole résumé

- Remove age and nationality details from the résumé because they are excluded by convention. *(saves about 8 words)*
- Move EDUCATION below EXPERIENCE and PROJECTS so the résumé presents the candidate as an experienced operations professional transitioning into product. *(no words)*

## Set aside (5)

Worth knowing, and not worth the space on this page:

- s2:e1:b0, s2:e1:b1, s2:e1:b2, s2:e1:b3, s2:e0:b1, s2:e0:b2, s2:e0:b3, s2:e0:b4, s3:e0:b0, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2: “Set the company’s logistics strategy” claims broad ownership without identifying the decision or initiative that produced a measurable operational result. (and 23 more like it)
- s3:e0:b0, s3:e0:b1, s3:e0:b2, s3:e1:b0, s3:e1:b1, s3:e1:b2, s2:e1:b0, s2:e1:b1, s2:e1:b2, s2:e0:b3, s2:e0:b4, s2:e0:b5: The phrase "that would have been thrown away" is wordy and can be replaced with a shorter equivalent such as "otherwise discarded." (and 15 more like it)
- whole resume, dates: The dates show an 8-month period with no study or work listed from Jun 2018 to Mar 2019, immediately after the B.A. in Economics.
- skills: A/B testing — no entry describes running an experiment, test variant, or measured test result; this matters because it is a core product skill that currently appears only as a claim. (and 6 more like it)
- s2:e1: The role shows increasing operational influence, but the bullets jump between strategy, warehouse execution, planning, and software rollout without a clear progression from analysis to implementation.


> /report --full
Wrote the full review to /Users/sean/Develop/ResumePilot/resume-review-99452248.md.

