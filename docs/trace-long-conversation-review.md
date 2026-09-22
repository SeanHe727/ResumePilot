# 长对话实测：Agent 行为速览

数据：`tmp/trace/421eb049-b67d-42b8-b832-9b121276e197/trace.jsonl`、`tmp/trace/conversation.md`。本报告只概括外显行为，不复制完整 prompt、简历或报告。括号中的判断是我的 review 意见，**不是模型的内部思考**；trace 未记录 reasoning。

## 范围与总览

脚本先以 `app.start(tests/fixtures/resume_example.pdf)` 加载简历，再发送 4 条用户消息。因此本 trace **没有覆盖用户在聊天框提供路径、上传和 PDF 解析的过程**。4 回合共 462 条事件、32 次模型请求，107 个 span 均闭合、无孤儿父节点；总耗时 516 秒、约 $0.1016。8 次失败全是工具参数/目标错误，不是模型 API 失败。

```text
用户 → Main agent
  ├─ review_format（代码检查）
  ├─ Narrative agent（整份简历）
  ├─ Content + Wording（Experience 第 1 条）
  │    └─ Deep Research ×4：参数错误，未真正启动
  ├─ Content + Wording（Experience 第 2 条）
  │    └─ Deep Research ×3：成功启动、返回 Content
  ├─ Projects 的 Content + Wording ×2：找不到 entry ID
  └─ generate_report → 改进计划模型 → 报告写作模型
后续三轮 → Main 记录事实／索要修改后的原文／暂缓更新报告
```

# 模块一：首次全量诊断（回合 1）

## Main agent

### 输入

用户只说“请认真审阅这份简历并告诉我该改什么”；main 的上下文已有解析后的简历。它可见 Education 2 个条目、Experience 2 个条目，以及 Projects 的标题和散落的 bullet。

### 选择与工具调用

首轮同时提出 `review_format`、`review_narrative`，并对两个 Experience 条目分别提出 Content、Wording；执行链实际串行。随后又用两个项目的**名称**作为 `entryId`，各调用一次 Content 和 Wording，四次均报“找不到该 entry”；最后仍调用 `generate_report`。未派 JD 匹配，因为没有职位描述。（选择全量角色符合宽泛请求；项目目标 ID 选错后没有可用的项目级重试路径。）

### 输出

向用户报告：格式、叙事及两个 Experience 条目已审，Education 无 bullet 可审；Projects 未能逐条审阅；总分 83，详版在 `/report --full`。并逐条解释经验部分的问题、项目归属混乱与日期疑点。

### 分析可见性

没有独立的“为什么此时选这些角色”的 reasoning；能看到的是 main 发出的工具清单、每次 `understanding`/`goal`、失败反馈和最终说明。它没有把项目审阅失败伪装成完成。（但“项目标题存在却无 entry ID”值得作为解析层问题单独复核。）

## Format：代码检查，非 agent

### 输入与工具调用

`review_format` 读取已解析的 `ResumeDocument`，未调用模型。

### 输出与分析

100 分、无 ATS blocker/format issue；一页、604 词。与此同时 Projects 在解析结果中是“两个标题 + 一组共 6 条段级 bullet”，没有项目 entry。（版式得满分与项目结构不可审并存：当前格式分数没有表达这种归属损坏。）

## Narrative agent：整份简历

### 输入

main 的目标是审阅职业顺序、日期清晰度、条目排序和整体叙事；输入覆盖整份解析文本，而非单条 bullet。

### 工具调用

3 次模型调用、6 次知识库查询；没有 Deep Research。

### 输出

叙事 76 分；指出 `20XX` 使时间线不可核、实习与 capstone 时间重叠不明、Projects 的两个标题和 6 条 bullet 没有可靠从属关系；建议 capstone 的较强成果 bullet 前置，并视其真实性质决定放在 Experience 还是 Projects。

### 分析可见性

trace 能看到查询主题和最终 JSON，不能看到内部推理。（它准确捕捉了项目结构问题，但无法替解析器重新分配 bullet。）

## Content agent：Experience 第 1 条（`s2:e0`）

### 输入

main 要它判断四条 bullet 的工作、结果和数字含义；传入条目全文及简短背景。

### 工具调用

5 次模型调用、15 次知识库查询、4 次网页搜索，并对四条 bullet 各调用一次 `examine_technical_depth`。四次都把 **bullet ID 当成 `entryId`**，返回 `no entry s2:e0:b…`；因此这里没有真正启动 Deep Research。（明确的工具参数理解错误；失败后未按正确 entry ID 重试。）

### 输出与分析

条目 77 分；关注 68% backlog 降幅的归因/基线、跨 agent 隔离如何验证、7/9/8% 的度量定义、GRPO 与 SFT 对比条件等。虽然深研失败，Content 仍完成了诊断；本条目的深度核查实际依赖自身查询和判断，不能算 Deep Research 已覆盖。

## Wording agent：Experience 第 1 条

### 输入、工具调用与输出

同一条目的四条 bullet；2 次模型调用、2 次知识库查询；措辞 82 分，重点是句子密度、动词准确度和可扫读性。

### 分析可见性

它没有调用 Deep Research，也未改写简历，只返回评分和措辞问题。（角色边界正常。）

## Content agent：Experience 第 2 条（`s2:e1`，Capstone）

### 输入与工具调用

审三条量化/部署 bullet；自身 3 次模型调用、6 次知识库查询、3 次网页搜索。对三条 bullet 分别调用 `examine_technical_depth`，这次传的是正确的条目 ID，三次均启动了下面的子 agent。

### 输出与分析

条目 67 分；指出“quality recovery”无质量指标、MSE 与方差定义不明、VRAM/延迟和 TensorRT INT8 的比较协议不清。最终问题与子 agent 返回的核查点相符；trace 可证明其结果进入 Content 的工具上下文，不能证明模型内部给每条结果分配了多少权重。

### Deep Research：Content 的嵌套子 agent（三次）

#### 输入

每次收到一个具体技术问题和整个 capstone 条目：① LoRA/Q-DQ/INT8 方法链是否自洽；② 24% MSE、27% 方差如何解释；③ VRAM、延迟和直接 INT8 对照是否可比。

#### 工具调用与输出

分别经过 3、2、2 次模型调用，合计 6 次网页搜索。结构化结果为 `{domain, findings:[{bulletId, what, why}]}`，经 `examine_technical_depth` 返回 Content。主要结论是方法有条件地成立，但训练/部署路径、MSE 参照物和 benchmark 条件缺失；它没有替候选人验证私有实验数字。

#### 分析可见性

可以沿父子 span 追到“哪次 Content 工具调用启动哪次 Deep Research”、其 prompt、搜索和返回；**没有内部 reasoning**。（子 agent 的外部可观测链路已工作。）

## Wording agent：Experience 第 2 条

### 输入、工具调用与输出

三条 capstone bullet；2 次模型调用、2 次知识库查询；措辞 79 分，重点是技术细节过密、比较项太多和动词表达。

### 分析可见性

未调用深入研究；与 Content 的技术可信度判断基本分工清楚。

## 报告生成：主代理工具内的两次模型调用

### 输入与工具调用

汇集 42 条 finding：Content 22、Wording 13、Narrative 7；Format 本次没有 issue，因此没有 format finding。改进计划模型选出立即项 9、短期项 7、长期项 0、暂放项 10；报告写作模型再生成分组报告。

### 输出

最终保留 16 个报告点；12 条 finding 未被引用，2 个模型声称的 finding ID 不在清单中、已被校验剔除；无无来源报告点、无未知 entry 目标。trace 存有每个报告点到 finding 的逐点链接。报告覆盖 2/2 个可审 Experience 条目；两个 Education 条目不适用，Projects 没有可审 entry。

### 分析可见性

能看到两次模型的完整输入/输出以及来源校验结果，**看不到模型为何舍弃那 12 条 finding 的内部取舍**。（2 个虚构 ID 被安全过滤，但也说明模型并未可靠地逐字复制长 ID。）

# 模块二：后续对话（回合 2–4）

## Main agent：回合 2，用户补充事实

### 输入与工具调用

用户说第一条“没有可公开的数字”，但补充诊断服务 p99 延迟从 800ms 降到 90ms。main 只调用 `record_fact`，挂到 `s2:e0:b0`；没有重新派发专家或生成报告。

### 输出与分析

确认已记录事实。（用户复述“第一条没有可量化结果”与先前报告不完全一致：原 bullet 已有 68% 降幅，问题主要是归因和测量条件；main 没有澄清这一点。）

## Main agent：回合 3，要求局部重评

### 输入与工具调用

用户称已改写第一条，但没有贴修改后的文字。main 没调用工具，要求提供 `s2:e0:b0` 的新原文。

### 输出与分析

选择暂不重评是合理的：只有新增事实，无法确认简历实际写成了什么。（因此这次实测**没有测试真正的局部重评**。）

## Main agent：回合 4，要求更新报告

### 输入与工具调用

用户只说“更新报告”，仍未提供新 bullet。main 未调用工具，再次要求原文，未生成新版报告。

### 输出与分析

避免用想象中的修改更新诊断；但本轮也**没有测试重新汇总或前后报告比较**。完整报告仍是回合 1 的版本。

# 快速 review 结论

1. **角色选择基本合理**：宽泛请求触发格式、叙事、Content、Wording；无 JD 就不做匹配，Content 在技术复杂条目下按需调用 Deep Research。
2. **最明显的行为错误是 ID 使用**：main 用项目名称当 entry ID；Content 用 bullet ID 当 Deep Research 的 entry ID。两类错误都被工具拒绝并留在 trace，但相应覆盖缺失。
3. **最大结果风险是 Projects 的结构**：解析未生成项目 entry，格式却是 100 分；main 诚实披露了缺口，叙事也指出归属不明，但项目内容本身未被审。
4. **本次实测范围比“完整长对话”窄**：简历预加载，用户未贴实际修改，因此没覆盖聊天上传、真正局部重评、再次生成报告。不要把这次结果视为这些路径已通过。
