## Highest-priority fixes

1. **Correct the sampling-rate claim at Voltline.** Sampling a 5 kHz signal at 8 kHz is below the Nyquist rate, so it cannot capture that signal without aliasing. Verify the signal frequency and sampling rate, and describe the filtering or sampling approach accurately.
2. **Correct the race-condition claim.** Declaring a shared counter `volatile` does not make access atomic or prevent a race between an interrupt handler and the main loop. Verify what actually fixed the issue and describe that fix; otherwise, this bullet could undermine your technical credibility.
3. **Resolve the Formula Student / Voltline duplication.** The Formula Student project repeats the claim about rewriting motor-control firmware for roughly 300 robots, with nearly the same results as your later Voltline role. The dates also place the project before that job. Keep the accomplishment under the role where it actually happened, and make the project bullet reflect work genuinely done on the Formula Student team.
4. **Replace the weather-station opening bullet.** It is broad marketing language rather than evidence of your work. Use the space for a concrete technical contribution or remove the bullet.

## Header and overall structure

- **Contact information:** Make sure the code-profile link is a complete, working URL and leads directly to relevant work. A generic or inaccessible link adds little.
- **Section order:** With several years of experience, consider putting Experience before Education so your most relevant evidence appears first.
- **Consistency:** Use consistent punctuation, date formatting, and capitalization throughout. The content is more important than the current line wraps, which may change in the final document.

## Education

- **Degree, institution, location, and dates:** These are clear. If you have relevant academic distinctions, a strong technical project, or coursework that fills a gap in your experience, consider including it; otherwise, the entry is sufficient.

## Experience

### Voltline Robotics

- **Firmware update speed:** “Improved update speed by 60%” is ambiguous: it could mean faster transfer or shorter total update time. Clarify what was measured and, if possible, the measurement conditions or baseline. The compression and resume behavior are useful technical details.
- **Hardware-in-the-loop rig:** The count of 400 tests per build gives useful scale. Add evidence of the rig’s value, if available—such as coverage, defects caught, or time saved—so the bullet shows more than test volume.
- **Crash logger:** The last two seconds of sensor data is a specific design detail, and five field failures is a concrete outcome. Be precise about whether the logger itself identified the causes or provided data that helped your investigation identify them.
- **Sampling rate:** Fix this technical claim before keeping it; as written, the “without aliasing” conclusion is incorrect.
- **Shared counter:** Fix or remove this claim unless you can accurately describe a synchronization method that actually addressed the race. `volatile` alone is insufficient.
- **Motor-controller rewrite:** This is your strongest scope-and-impact bullet. Keep the relationship between your work, the 300-unit fleet, the jitter reduction, and the fault reduction clear. If the fault reduction is based on a particular period or definition of “field motor faults,” provide that context. Also check that this is not the same accomplishment repeated in Projects.

### Clearwater Sensors

- **End-of-line testing:** This is strong because it combines a measurable time reduction with production scale. Make sure the 20,000-units-per-month figure clearly describes the production volume covered by the change.
- **Field failures and reflow profile:** The diagnosis and before/after return rates are compelling. Clarify the comparison period or batch scope if it is not obvious, and ensure the return-rate change can reasonably be attributed to the profile update.
- **Calibration procedure:** The reduction in complaints is useful evidence. Specify a comparable time period for the before-and-after figures, and make clear that the complaints relate to calibration drift.
- **Test fixture:** The throughput increase is strong. Confirm that the “boards per hour” figures use the same measurement conditions before and after the fixture.

## Projects

### Low-Power Weather Station

- **Opening bullet:** Remove or replace the generic claims about innovation and redefining sensing. They do not tell a reader what you built or what your contribution was.
- **Power reduction:** This is a useful result. Include the conditions behind the average-current measurements, if available—for example, the operating or sampling assumptions—so the comparison is interpretable.
- **Open publication and school use:** This is distinctive evidence of practical adoption. Ensure the resume links to the schematics and firmware, and that the materials are accessible enough for someone to verify or reproduce the project.

### Formula Student Electric Car

- **Project description and first bullet:** The project is a student electric car, but the bullet refers to a robot fleet. Verify that description and make the work clearly relevant to the actual Formula Student vehicle and your role on the team.
- **CAN-bus/dashboard bullet:** The passive phrasing obscures your personal contribution. Clarify what you owned or implemented and, if you can support it, what the testing before races demonstrated. As written, the result of the testing is unclear.
- **Motor-control firmware bullet:** This appears to duplicate the Voltline accomplishment and conflicts with the project dates and setting. Verify the facts and remove or correct the claim so the resume does not imply that the same 300-robot fleet work happened in both places.

## Skills

- **Tools category:** It mixes programming languages, a microcontroller platform, test equipment, and an FPGA. Separate or regroup these by type so a reader can scan your capabilities accurately.
- **Methods category:** “Firmware” is too broad to function as a method, and CAN is a protocol rather than a method. Use categories that distinguish technical domains, protocols, tools, and practices.
- **Specificity:** Include only skills you can discuss confidently in an interview. If the FPGA entry represents a specific toolchain or level of experience, make that clear rather than leaving it unexplained.