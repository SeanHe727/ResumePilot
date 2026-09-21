# Review Workflow TODO（缩略版）

> PDF 解析重构 A0-B5 与报告链路已完成（`84d7421`）。下一阶段的核心不是先制定 full/partial 规则，而是补齐整套 Agent 可观测性。
>
> 英文版 [`review-workflow-todo.md`](./review-workflow-todo.md) 是完整版，含对照代码的核查结果与实现方案；本文是缩略版。

## 核心目标

建立一条完整的层级 trace，覆盖：

```text
用户
  → Main Agent
    → Specialist
      → Deep Research
        → 内部工具
    → 汇总
    → Report Writer
      → 对话 / /report / 导出报告
```

不要求 Main Agent 先声明请求是 `focused`、`full` 或 `ambiguous`。这些是我们看完实际 trace 后用于 review 的标签。

每一步需要看到：

- 当时收到的有效上下文；
- 选择了什么 role、目标或工具；
- 简短的选择目的，不记录隐藏思维链；
- 输入、结果、失败、耗时和 token；
- 结果是否进入下一层诊断和最终报告。

Trace 是显式开启的开发工具，不是产品日志。它会形成一份新的高敏感数据副本，因此首版必须使用 session 独立目录、仅文件所有者可读写、有限保留期和显式删除，并始终排除凭证。

**首版不保存 reasoning。** 运行时仍可正常传递 provider 需要的 reasoning 状态，但 trace writer 排除 `ParsedResponse.reasoning`、历史 `Message.reasoning` 和 provider 的 `encrypted_content`。先用完整的可见 prompt、message、tool call、模型正文和结果做人工 review；不足时再单独评估 reasoning summary。

## 对照代码核查过的三件事

- **审计库要原样保留**，不扩展。它自己的注释写着「够认出来，不够重建」——参数脱敏、两边各截 200 字，因为逐字存简历就等于存第二份拷贝。而 trace 要的正是「重建」。两者放一个库，必有一个失去意义。
- **参考项目里没有 trace 实现**。它的 hook 清单和本项目一模一样，可借鉴的是 hook 这个**可插拔模式**本身。
- **`pageRoom` 还没有真正传给专家**。`review.ts:66` 只有计算函数，但当前无人调用；`briefingFrom()` 不填它，`briefingContext()` 也不渲染。对话样例中写“缺失”是准确的。

## 当前可见性

```text
用户消息                          没记
  主 agent 模型调用               没记
    工具调用                      有，截到 200 字
      review_content
        Content 专家
          收到的 briefing         没记
          它的模型调用            没记
          examine_technical_depth 没记
            Deep Research
              模型调用 / 内层工具  没记
          返回的结构化结果         有，截到 200 字
```

派发专家**本身是工具调用**，所以那道边界是被 hook 住的；看不见的是它对面的一切。

## 当前优先级

1. **完成报告链路** —— 已完成（`84d7421`）。剩下“对话展示的是节选还是全文”要在 coverage/完成状态中说清楚。

2. **建立可拆卸的 trace**
   - 一个 `Trace` 接口，生产注入 no-op；显式 debug run 才写入。
   - 先同时建立最小 `TraceContext`、安全 writer 和 `QueryEngine.query()` 插桩。当前 `QueryEngine` 参数没有 session、actor、turn、target、parent，不能先记一堆无法归属的 prompt。
   - 用显式 context 传递或 Node `AsyncLocalStorage` 维护父子 span；不能假定异步调用栈会自然形成关联，并发后尤其如此。
   - **四个边界**：`QueryEngine.query()`（所有模型调用）、`SubAgent.callTool()`（内层工具）、现有 hook 管线（主循环工具）、诊断汇总与报告接纳（finding 是否进入产品输出）。
   - actor 使用可扩展的 `{ kind, id }`，不要只写死现有专家；报告 writer、历史压缩、改写等也会调用模型。
   - 完整保存模型**可见**输入输出，不截断；但明确排除 reasoning、opaque/encrypted reasoning、凭证和不可序列化运行时对象。

3. **补齐 Main Agent 可观测性**
   - 能看到它在什么上下文下选择了哪些 role 和目标。
   - 能看到它何时澄清、复用旧结果、重新诊断或生成报告。
   - 是否属于 full/partial、是否过早或过度，由人事后判断。

4. **补齐 Specialist 可观测性**
   - 记录最终 briefing、工具调用、重试、验证失败和结构化结果。
   - 完整记录 Content → Deep Research → 内部工具的调用链。
   - **不要为此扩展 hook 边界**：现有设计是有意的，子 agent 已在批准过的调用内部，逐次重跑权限/审计/记忆会把三者都乘一遍。trace 只记录，不治理。
   - 记录研究结果是否真正影响 Content diagnosis 和最终报告。

5. **给 finding 和报告点稳定身份与来源链**
   - 仅有调用 trace 仍无法证明专家输出是否被汇总采用；当前 finding 多为字符串，`FullReportPoint` 也没有稳定 id，不能靠改写后的文本匹配。
   - 每个被接纳的 source finding 带 `findingId`、来源 role、简历目标和产出它的 trace event。
   - 每个报告点带自己的 id 与 `sourceFindingIds`；报告 writer 可以合并多个 finding，但只能返回 allowlist 内的来源 id，并在接纳前校验。
   - 汇总和报告构建发出 acceptance event，用 `sourceFindingIds` / `reportPointIds` 串起“执行 → finding → 报告”。

6. **确定性生成 briefing**
   - 从 `resume.meta` 在派发时计算 `pageRoom`，加入最终 briefing 并由 `briefingContext()` 渲染；不要依赖 `review_format` 是否先运行。
   - 自动选择相关 `suppliedFacts`，不要依赖 Main Agent 每次手工复制。
   - 保留 Main Agent 提供的 `understanding` 和 `goal`。

7. **让 completion / failure / coverage 可见**
   - 区分 `reviewed / failed / not-run / not-applicable`。
   - 不允许 specialist 失败被伪装成成功或主动跳过。
   - 对话、`/report` 和导出报告使用同一 coverage，并说明对话显示的是节选还是全文。

## 先做机械测试，再花钱

用 stub agent 验证 trace 的父子链完整、失败可见、**trace 能自我对账**：派发数 vs 完成数 vs 失败数；每个 `sourceFindingId` 和 `reportPointId` 都必须双向解析；完整可见输入输出被保留，但 reasoning、opaque state 和凭证必须缺席；普通运行不产生 trace，debug trace 满足目录、权限、保留和删除策略。这和解析层 B5 是同一类问题：每层都做了被要求的事，失败活在层与层之间的缝里。

## 真实长对话测试

**这一步真花钱，先定预算。** 四 agent 诊断实测约 $0.13–0.17、10 分钟；这个场景是多专家 + Deep Research + 二次 review，按几倍估，而且要跑不止一次才能调出可读的 trace。

完整模拟一次真实使用：

1. 用户上传 PDF。
2. Main Agent 解析并自行决定诊断范围和 role。
3. Specialist 执行诊断，Content 自行决定是否调用 Deep Research。
4. 汇总结果并生成报告。
5. 用户阅读报告、质疑结论、补充事实和约束。
6. 用户修改局部内容并再次要求 review。
7. Main Agent 判断哪些结果可以复用、哪些需要局部或整体重跑。
8. 更新报告，并保留整条 trace。

测试产物包括：完整对话、最终报告、coverage 和层级 trace。我们据此人工 review：

- Main Agent 的选择时机、范围和 role 是否合理；
- Specialist 是否拿到了正确上下文；
- Deep Research 是否在正确的时候被调用；
- 是否隐藏失败、过早生成报告或重复执行无关工作；
- 用户修改后是否正确复用与局部重跑。

先看真实 trace，再决定是否需要费用确认、强制 full/partial 规则或 prompt 调整。

## 后续再做

- Trace 稳定后补纵向机械测试和固定简历质量 eval。
- Role、entry 和内部工具并发。
- 受约束的改写流程。
- 搜索缓存、预算持久化、session 迁移。
- README、旧命令、旧配置和历史文件清理。
- 仅在长对话实测需要时加强上下文压缩。
