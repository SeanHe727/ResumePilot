Your strongest material is the quantified engineering work. The main changes are to correct two technical claims, remove apparent copy-paste errors, and make the remaining bullets more precise.

### Header and education
- **Contact line:** If the URL and contact details are placeholders for this review, no change is needed. On the submitted resume, make sure the link leads directly to relevant work and that all contact details are current.
- **Education:** No substantive change needed.

### Voltline Robotics
1. **Update speed:** Specify what became 60% faster—download time, installation time, or the full update process. “Speed” is ambiguous here.
2. **Test rig:** Keep the test count, but clarify what the rig exercised or caught if space allows. That would show its value beyond test volume.
3. **Crash logger:** Clarify whether it helped identify the causes of five *distinct* field failures. The current wording could overstate what the logger alone established.
4. **Vibration sampling:** **Correct or remove the anti-aliasing claim.** Sampling an 8 kHz signal cannot capture a 5 kHz component without aliasing; the sampling rate must exceed 10 kHz for that component. If another technique was involved, explain it accurately.
5. **Race condition:** **Recheck the technical claim.** Declaring a shared counter `volatile` does not, by itself, make access atomic or resolve every interrupt/main-loop race. State the actual synchronization or access fix, if there was one.
6. **Motor-controller rewrite:** Keep this prominent—it is a strong scope-and-outcome bullet. Check that the 60% fault reduction is supported and that it is not counted again elsewhere as a separate accomplishment.

### Clearwater Sensors
- **End-of-line tests:** Strong as written; ensure the 20,000-unit monthly volume describes the line you affected.
- **Field failures:** Strong; make sure the before-and-after return rates use comparable periods and populations.
- **Calibration procedure:** Specify the timeframe behind “15 to 2 a quarter” if both figures are not quarterly.
- **Test fixture:** Strong, though check that “station throughput” and the per-unit test-time improvement describe distinct gains rather than double-counting the same change.

### Projects
- **Weather station, bullet 1:** Remove the promotional language. It gives no verifiable technical information, unlike the two bullets that follow.
- **Weather station, bullets 2–3:** Keep both. For the current measurement, be ready to explain the measurement conditions; they matter for a low-power claim.
- **Formula Student, all three bullets:** Reconcile these with the project. A warehouse robot fleet and roughly 300 robots appear to belong to your Voltline role, not a student electric-car team; the first and third bullets also duplicate that experience. Check the CAN-bus bullet’s voice and make your own contribution clear. This section currently raises a credibility concern.

### Skills
- Remove or substantiate **FPGA** if it does not appear in your experience or projects. Prioritize skills you can discuss concretely in an interview.
- Consider replacing broad labels such as **firmware** with specific capabilities already demonstrated on the page.