# 植入缺陷对比测试

用来比较 ResumePilot 和直接调用通用模型审阅简历的效果。做法：在写得规范的简历里植入已知缺陷，看每个系统能找到多少。标准答案事先写好，打分主要由代码和一个独立的判定模型完成。

## 目录

| 路径 | 内容 |
|---|---|
| `bases/*.json` | 3 份基础简历：计算机 / ML（ce）、产品经理（pm）、量化研究（quant）。每个「缺陷位置」都有一句干净原句和一句缺陷句。 |
| `build.py` | 植入脚本：固定随机种子，从 20 类缺陷里为每份简历抽 10 类，9 份里每类出现 4–5 次；生成 PDF、原文和标准答案。 |
| `tests/<id>/` | 每份测试简历：`resume.pdf`（A 组读取）、`resume.txt`（从同一份 PDF 提取的文本，B / C / D 组读取）、`key.json`（标准答案）、`out/`（各组输出和判定结果）。`clean-*` 是未植入缺陷的基础版，用来确认基础简历本身不会被误报。 |
| `extract.ts` | 用项目自己的解析器从 PDF 提取文本，写成 `resume.txt`。 |
| `arms.ts` | 运行 B / C / D 组（直接调用模型）。 |
| `judge.ts` | 判定：deepseek-v4-pro 逐条判断缺陷是否被找到、有没有说明审阅范围、误报；代码计算引用能否在原文找到、改写里有没有编造数字。 |
| `run-batch.sh` / `run-a.sh` | 按批次运行 4 组 / 只运行 A 组，然后判定。 |
| `timeline-check.ts` | 免费检查：程序计算的日期问题（顺序、空档、不可能日期）是否和标准答案一致。 |
| `round0/` | 第一轮单份简历测试（基于项目自带样例简历），保留作记录。 |

## 20 类缺陷

D1 职责式开头（Responsible for）｜D2 没有基准的百分比｜D3 与职级不符的夸大｜D4 同一段里重复的 bullet｜D5 空洞的流行词｜D6 第一人称完整句｜D7 经历没有按时间倒序｜D8 技能没有证据｜D9 已结束的经历用现在时｜D10 毕业后无法解释的空档｜D11 数字自相矛盾｜D12 同一成果写在两段经历里｜D13 职称和职责不符｜D14 结束早于开始的日期｜D15 范围模糊｜D16 被动语态和冗词｜D17 70 词以上的超长 bullet｜D18 没解释的内部代号｜D19 无关个人信息｜D20 拼写错误

## 参与对比的 4 组

所有组收到同一句请求：「Please review my resume and tell me what to change.」

- A：ResumePilot（gpt-5.6-luna），读 PDF，可以搜索网页
- B：gpt-5.6-luna 直接回答
- C：gpt-5.6-sol 直接回答
- D：gpt-5.6-luna + [Paramchoudhary/ResumeSkills](https://github.com/Paramchoudhary/ResumeSkills) 的 `tech-resume-optimizer` skill（MIT 许可，作为 system prompt）。文件不随仓库分发，运行前用下面的命令下载。

## 复现

在仓库根目录运行，`.env` 里需要 OPENAI_API_KEY、DEEPSEEK_API_KEY，A 组还需要 TAVILY_API_KEY。

```sh
curl -sfL https://raw.githubusercontent.com/Paramchoudhary/ResumeSkills/main/skills/tech-resume-optimizer/SKILL.md \
  -o bench/planted-defects/skill-tech-resume-optimizer.md
python3 bench/planted-defects/build.py          # 重新生成测试简历（结果和仓库里的一致）
npx tsx bench/planted-defects/extract.ts        # 提取文本
bench/planted-defects/run-batch.sh 1            # 跑第 1 批 4 组并判定；第 2、3 批同理
```

不花钱就能核对的：`npx tsx bench/planted-defects/timeline-check.ts`，以及 `tests/*/out/*.judge.json` 里的每条判定和依据。

## 花费（每份简历）

- A：约 $0.11–0.13，约 40 次模型调用、约 20 万输入 token；主要花在 content 专家的多轮调用上。
- B：约 $0.003（1 次调用）；D：约 $0.004；C 用的是 sol，单价更高，但也只有 1 次调用。
- 判定：约 $0.01 / 份 / 组。

## 第 1 批结果（每份 10 个缺陷）

| 组 | ce | pm | quant | 合计 |
|---|---|---|---|---|
| A（修复后，commit 55b2632） | 10 | 9 | 9 | 28/30 |
| A（修复前） | 8 | 8 | 9 | 25/30 |
| B luna | 9 | 9 | 7 | 25/30 |
| C sol | 9 | 10 | 8 | 27/30 |
| D luna + skill | 8 | 9 | 8 | 25/30 |

**第 1 批的 A（修复后）不能算正式成绩**：系统是根据第 1 批的结果修改的，再用第 1 批验证；修复时写进 prompt 的实测例子还引用了第 1 批的原句（已在 2b7e22e 去掉）。正式成绩以系统冻结后的第 2、3 批为准。

## 已知局限

1. 数量少：3 类岗位、9 份简历，每组每份只跑 1 次，几分之差在随机波动范围内。
2. 出题人和被测系统是同一方，缺陷类型可能偏向 ResumePilot 关注的问题。
3. 缺陷偏明显，多为教科书式错误；真实简历的问题更隐蔽。
4. 判定只用一个模型（deepseek-v4-pro），只做了少量人工抽查。
5. 条件不对等：A 读 PDF、可搜索、调用次数多得多；B / C / D 读纯文本、只调用一次。
6. 只衡量「找没找到」，不衡量建议是否好用、排序是否合理。
