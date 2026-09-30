Your strongest material is the measured engineering work. The two priorities are to correct the technically questionable bullets and remove the Formula Student bullets that appear to belong to your robotics job.

### Contact and education
- **Contact line:** Make sure the code link leads directly to work you want an employer to inspect. If this is a real resume rather than anonymized text, use a complete, working URL.
- **Education:** No change needed.

### Voltline Robotics
- **Firmware-update bullet:** Clarify what “update speed” measures—download time, total installation time, or something else. Compression and download resumption may improve different measures.
- **Hardware-in-the-loop bullet:** State the rig’s effect beyond the number of tests, if you can substantiate one (for example, reduced test time or defects caught). The current line establishes scale but not the result.
- **Crash-logger bullet:** Clarify that the *logged data helped you diagnose* the five failures; a logger alone does not find root causes.
- **Vibration-sampling bullet:** **Check the technical claim before using it.** Sampling a 5 kHz signal at 8 kHz does not, by itself, prevent aliasing; the Nyquist rate would be greater than 10 kHz. Correct the sampling rate, signal frequency, or explanation to match what actually happened.
- **Shared-counter bullet:** **Check this claim too.** Declaring a variable `volatile` does not by itself make access atomic or resolve a race between an interrupt and the main loop. Describe the actual synchronization or access method you used, or remove the claim of having fixed the race.
- **Motor-controller rewrite bullet:** Keep the measurements, but move this near the top. Its fleet scale and outcomes make it one of your strongest bullets.

### Clearwater Sensors
- **End-of-line tests:** Keep. The before-and-after time and production volume make the impact clear.
- **Field-failure investigation:** Keep. It shows a useful chain from diagnosis to process change to lower returns.
- **Calibration procedure:** Clarify whether “15 to 2 a quarter” compares equivalent quarterly periods and whether the complaints can reasonably be attributed to the procedure.
- **Eight-board fixture:** Keep, but be prepared to explain why an eight-board fixture produced a throughput change from 40 to 150 boards/hour rather than a larger increase. Other bottlenecks may make that entirely reasonable.

### Projects
- **Weather station, first bullet:** Remove the promotional language. It says little about what you built and clashes with the concrete engineering detail elsewhere.
- **Weather station, current-draw bullet:** Keep. Specify the operating conditions behind the average-current comparison if they matter to interpreting it.
- **Weather station, publication bullet:** Keep; check that the published work is accessible through your code link.
- **Formula Student, first bullet:** Remove or correct it. A warehouse robot fleet does not appear to belong under an electric-car student project.
- **Formula Student, CAN-bus bullet:** Make your own contribution and the testing outcome clear. The passive wording obscures what you did.
- **Formula Student, final bullet:** Remove or correct it. It duplicates the Voltline achievement, with slightly different figures, under a 2019–2021 project. That discrepancy could undermine confidence in the whole resume.

### Skills and timeline
- **Skills:** Separate languages, hardware/platforms, tools, and methods more accurately; `STM32` is a platform, while `FPGA` is not a tool in the same sense as an oscilloscope. Keep FPGA only if you can discuss relevant hands-on work.
- **Timeline:** If you have relevant work or projects since the Voltline role ended in June 2025, make sure the resume reflects them. Don’t add filler solely to cover the period.