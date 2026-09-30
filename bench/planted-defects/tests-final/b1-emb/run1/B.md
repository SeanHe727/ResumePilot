## Highest-priority changes

1. **Put Voltline Robotics before Clearwater Sensors.** Experience is usually listed newest first, and Voltline is your most recent role.
2. **Fix the Formula Student section.** Its motor-controller bullets appear to repeat work attributed to Voltline’s 300-robot fleet. That mismatch could seriously undermine credibility.
3. **Revisit the `volatile` bullet.** In C, declaring a shared counter `volatile` does not by itself make concurrent access safe or fix a race condition.
4. **Verify the sampling claim.** Sampling a 5 kHz signal at 8 kHz does not, by itself, support the claim that the signal is captured without aliasing. Check the signal’s actual bandwidth and any filtering or sampling approach involved.

## Header and structure

- **Contact details:** Make the code portfolio address a complete, clickable URL. If the portfolio contains relevant work, make sure the link goes directly to it.
- **Section order:** Keep Education below Experience, as you have it, unless you are applying for a role where your degree or academic projects are more relevant than your work history.
- **Dates:** Use one consistent date style throughout. Your date ranges are understandable, but the resume would look more polished if their formatting were uniform.
- **Current project dates:** The weather-station project overlaps with your Voltline role. That is plausible, but be prepared to explain whether it was a personal project outside work.

## Education

- **Clearwater Institute of Technology line:** Consider adding a relevant concentration, honors, or coursework only if it strengthens your fit for the jobs you’re targeting. The degree and dates are otherwise clear.
- **Gap after graduation:** There is a gap between graduation and your first listed role. You do not need to explain it on the resume unless you have relevant work, projects, or other experience from that period to include.

## Experience

### Clearwater Sensors — Hardware Test Engineer

- **Automated-test bullet:** Keep the before-and-after time and monthly volume, but make sure the time unit is unambiguous and the volume clearly describes the production scale affected. This is a strong quantified result.
- **Field-failure bullet:** Clarify what the percentages measure—such as return rate—and the period or batch used for comparison. That makes the reduction easier to assess.
- **Calibration-procedure bullet:** Specify what “calibration drift complaints” refers to and the time period for the comparison. As written, the improvement is useful but the measure is not fully defined.
- **Test-fixture bullet:** The throughput figures are compelling. Make clear that both figures use the same measurement basis and refer to the same station or process.

### Voltline Robotics — Embedded Software Engineer

- **Update-speed bullet:** Define what “update speed” measures, such as elapsed update time or download throughput, and identify the comparison baseline. Otherwise, a 60% improvement is hard to interpret.
- **Hardware-in-the-loop bullet:** Add a useful result if you have one, such as test duration, coverage, or a defect caught. The test count shows scale, but not the rig’s impact.
- **Crash-logger bullet:** Distinguish between the logger capturing data and your subsequent analysis finding the root causes. Also clarify whether the five failures were separate incidents or failure types.
- **Sampling bullet:** Recheck the technical claim. An 8 kHz sampling rate cannot generally capture a 5 kHz component without aliasing under the usual Nyquist condition. If filtering, a different signal definition, or another technique made this valid, make that clear; otherwise correct or remove the claim.
- **Race-condition bullet:** Do not claim that `volatile` fixed a race unless there was also a proper synchronization or atomicity mechanism. `volatile` alone does not make shared access safe. Describe the actual fix accurately, or remove the bullet if that was the only change.
- **Motor-controller-firmware bullet:** This is your strongest quantified embedded-systems accomplishment, so consider placing it first under Voltline. Clarify what the firmware rewrite covered and, if available, the period or basis for measuring the field-fault reduction.

## Projects

### Low-Power Weather Station

- **“Next-generation…” bullet:** Remove it or replace the space with concrete technical work or a verifiable outcome. The current language is promotional but does not tell a hiring manager what you built.
- **Current-reduction bullet:** Keep the before-and-after current figures. Add measurement conditions or operating assumptions if they materially affect the comparison.
- **Open-source/school bullet:** This is distinctive and worth keeping. Make sure the public schematics and firmware are easy to find from your portfolio link, and clarify your role in the school’s builds if it was more than publishing the materials.

### Formula Student Electric Car

- **Project title and leadership role:** The title and “Electronics Lead, Team of 12” suggest a student race-car project, but the bullets refer to a robot fleet. Resolve that mismatch before submitting the resume.
- **Firmware-and-testing bullet:** “Worked on” is vague and does not show your contribution. Specify the work you personally owned, or remove the bullet if the later bullets cover the same work.
- **Dashboard CAN-bus bullet:** The passive construction obscures your role. Clarify what you personally implemented or tested and what the testing verified. Also check that the dashboard work is relevant to the positions you’re targeting.
- **Motor-controller-firmware bullet:** This closely duplicates the Voltline accomplishment, including the robot-fleet scale and performance results. Verify that it genuinely belongs to this project. If it does not, remove it; if it does, explain the distinct scope so it cannot be mistaken for copied or double-counted work.

## Skills

- **Tools line:** C and C++ are languages, and STM32 is a platform rather than a tool. Organize the skills by type so hiring teams and screening systems can identify languages, platforms, and equipment easily.
- **Methods line:** “Firmware” is broad, and CAN is a protocol rather than a method. Use this section for specific methods or technical areas you can substantiate, and add relevant tools or platforms you have actually used. Avoid adding skills you cannot discuss in an interview.

Finally, check that the final PDF preserves consistent bullet indentation, spacing, and date alignment. Several entries wrap across lines in the supplied text; make sure those wraps look intentional in the document.