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

## 对照代码核查过的三件事

- **审计库要原样保留**，不扩展。它自己的注释写着「够认出来，不够重建」——参数脱敏、两边各截 200 字，因为逐字存简历就等于存第二份拷贝。而 trace 要的正是「重建」。两者放一个库，必有一个失去意义。
- **参考项目里没有 trace 实现**。它的 hook 清单和本项目一模一样，可借鉴的是 hook 这个**可插拔模式**本身。
- **`pageRoom` 已经做完了**（`review.ts:66` 从 session 现场算），第 5 条只剩 `suppliedFacts`。

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

1. **完成报告链路** —— 已完成（`84d7421`）。剩下"对话展示的是节选还是全文"要说清楚，归入第 5 条。

2. **建立可拆卸的 trace**
   - 一个 `Trace` 接口，生产注入 no-op，开销为零；删除就是删三处调用。
   - **三个插入点覆盖全系统**：`QueryEngine.query()`（所有模型调用，一个不漏）、`SubAgent.callTool()`（专家与 Deep Research 的内层工具）、现有 hook 管线（主循环工具调用，改为不截断转发）。
   - **先做 QueryEngine**：杠杆最大，且不需要逐个 agent 插桩。先建 id 关联会得到一副空骨架。
   - 父子关系由调用栈自然形成：`SubAgent` 的一次 run 开一个 span，其下全部继承。
   - **不脱敏、不截断**，JSONL 落到 gitignore 的目录。与刚立的隐私线不冲突：那道线守的是"送进模型的内容"，trace 记的是"已经送了什么"。

3. **补齐 Main Agent 可观测性**
   - 能看到它在什么上下文下选择了哪些 role 和目标。
   - 能看到它何时澄清、复用旧结果、重新诊断或生成报告。
   - 是否属于 full/partial、是否过早或过度，由人事后判断。

4. **补齐 Specialist 可观测性**
   - 记录最终 briefing、工具调用、重试、验证失败和结构化结果。
   - 完整记录 Content → Deep Research → 内部工具的调用链。
   - **不要为此扩展 hook 边界**：现有设计是有意的，子 agent 已在批准过的调用内部，逐次重跑权限/审计/记忆会把三者都乘一遍。trace 只记录，不治理。
   - 记录研究结果是否真正影响 Content diagnosis 和最终报告。

5. **确定性生成 briefing 和 coverage**
   - ~~自动填写 `pageRoom`~~ —— 已完成。只剩自动选择相关 `suppliedFacts`。
   - 保留 Main Agent 提供的 `understanding` 和 `goal`。
   - 区分 `reviewed / failed / not-run / not-applicable`。
   - 不允许 specialist 失败被伪装成成功或主动跳过。

## 先做机械测试，再花钱

用 stub agent 验证 trace 的父子链完整、失败可见、**trace 能自我对账**——派发数 vs 完成数 vs 失败数，`affectedFindingIds` 必须解析到报告里真实存在的 finding。这和解析层 B5 是同一类问题：每层都做了被要求的事，失败活在层与层之间的缝里。

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
