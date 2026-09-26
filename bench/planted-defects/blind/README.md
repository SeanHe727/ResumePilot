# 盲评材料

- `bundle/`：交给评委模型的全部内容。`JUDGE.md` 是评分说明，`case-1.md` 到 `case-3.md` 各含一份简历原文和四份匿名审阅（Reviewer 1–4，每份的顺序都不同）。
- `mapping.json`：Reviewer 编号和组别的对应表（A = ResumePilot，B = gpt-5.6-luna，C = gpt-5.6-sol，D = gpt-5.6-luna + skill）。**不要交给评委**，评完后用它还原。
- `my-review-zh.md`：执行测试的 Claude 写的质量点评，不是中立评审。

生成方式：`python3 bench/planted-defects/pack.py b1-ce b1-pm b1-quant`（先运行 `npx tsx bench/planted-defects/ids.ts b1-ce b1-pm b1-quant`）。ResumePilot 的输出取的是它交给用户的报告；行号 id 换成了该行开头的几个词，分数行、覆盖行和篇幅标注已去掉，避免评委认出来源。
