# ResumePilot 当前架构审查与问题清单

> 审查基线：`deep-research` 分支，commit `24df62e`
>
> 本文只描述当前代码，不把尚未更新的 `README.md` 当作现行设计依据。
>
> 协作约定：Claude 负责具体修改；Codex 负责后续 review、验证和回归检查。

## 1. 文档目的

这份文档回答四类问题：

1. 当前架构实际上如何工作；
2. 哪些问题是上一个架构的残留；
3. 哪些问题属于领域职责重叠、遗漏或接线不完整；
4. 哪些问题现在需要修，哪些可以明确延后。

优先级定义：

- **P0**：阻断主要使用路径，或让功能表面成功、实际没有执行。
- **P1**：影响诊断正确性、报告完整性、安全边界或主要交互。
- **P2**：技术债、边界情况、性能和可维护性问题，可排后处理。
- **观察项**：当前不要求修改，但应保留证据，避免以后把假设写成能力。

## 2. 总体结论

ResumePilot 当前不是“架构没做好”，而是一次从固定批处理 Skill 向对话式协调器迁移后，内部模块已经完成大半，产品闭环还没有全部迁完。

核心设计成立：

- Main Agent 负责理解、派工和转述，不负责诊断；
- Content、Wording、Narrative、JD Match 各自有独立角色；
- Format 使用确定性代码；
- 文档原文与模型结构判断分离；
- Query Engine、Context、Session、Permission、Hook、Memory 都是真实实现；
- 数字防编造是由代码约束，不只依赖 prompt。

主要风险集中在：

- 上一版批处理入口删除后，CLI 和部分命令仍引用旧路径；
- 当前领域职责存在几处真实重叠，也存在 Skills、Summary、Education 等遗漏；
- 新的对话路径没有使用已经实现的批量并发能力；
- 子 Agent 内部工具调用不经过 Hook，缺少观测记录；
- 报告没有完整消费所有专家结果；
- 一些规则、方法和字段已经实现，但生产路径无法到达；
- 单模块测试很强，跨模块纵向测试不足。

## 3. 对当前理解的逐项确认

### 3.1 “仍有上一个架构的残留”——正确

主要残留包括：

- 非交互 CLI 仍调用已经删除的 `/diagnose`；
- `start <file>` 仍按旧语义声称文件已经加载；
- `COMMAND_MANIFEST` 仍列出已删除命令；
- Progress Hook 仍监听旧工具 `analyze_entry`；
- `analyze_entry`、`analyze_wording`、`rewrite_bullet` 等工具仍注册，但当前 Main Agent 路径不可达；
- Session 配置中仍有 `preferSkills`，但 Skill Registry 已删除；
- 一些注释仍描述旧批处理流程。

这些应在架构确定后做一次集中清理，而不是零散删除。

### 3.2 “领域拆分已有，但可能有重合、遗漏或职责不当”——正确，而且是当前值得优先讨论的部分

当前真正需要讨论的不是要不要再加角色，而是：

- Format 到底只负责文件和 ATS，还是也负责简历写作机械规则；
- Content 和 Wording 如何避免对同一现象重复扣分；
- Narrative 如何消费 Content 已经计算出的信息，而不是重复判断；
- Skills、Summary、Education 等非 bullet 内容由谁负责；
- 报告如何完整消费 Wording、Narrative 和 JD 的结果。

详细问题见第 5 节。

### 3.3 “并发能力暂时未应用，优先级不高”——基本正确，但需要区分能力和当前行为

已有能力：

- role pool；
- entry pool；
- `diagnoseAll()`；
- Sub-agent 内部 Agent-as-Tool。

当前实际行为：

- Main Agent 发出的多个外层 tool call 被串行执行；
- `review_content` 每次只调用一个 role；
- `review_wording` 每次只调用一个 role；
- `diagnoseAll()` 没有生产调用点；
- 因此当前完整诊断基本没有利用跨 entry 或跨 role 并发。

这个问题可以延后，但需要准确描述：并发基础设施存在，当前产品路径没有使用它。

建议的未来形态：

```text
Main Agent
  └─ review_entries(entryIds, roles)
       ├─ Entry A
       │    ├─ Content role
       │    │    ├─ KB/Web lookup
       │    │    └─ Agent-as-Tool（必要时多个独立问题并发）
       │    └─ Wording role
       └─ Entry B ...
```

Agent-as-Tool 是否并发要由问题独立性决定：同一 Content Agent 连续提出、后一个依赖前一个结果的问题不能并发；一次性提出的多个相互独立领域问题可以并发。

### 3.4 “专家观测性主要来自 tool call 和 tool result，但没有 Hook 获取”——正确

外层 Main Agent 调用 `review_content` 时会经过 Hook；但进入 `SubAgentRuntime.callTool()` 后，KB、Web Search 和 Deep Research 直接执行，不经过 HookPipeline。

因此现在可以看到：

- Main Agent 调了哪个 review tool；
- 外层 review 成功还是失败。

但看不到：

- 专家每轮调用了什么工具；
- KB 查了哪个 dimension；
- Web Search 发了什么 query；
- Deep Research 被问了什么；
- tool result 的摘要；
- 每轮用时、失败和重试。

这里不一定要让所有内部调用重新经过完整 Permission Hook。更合适的是增加一个轻量 trace sink，专门记录 inner tool call/result。

### 3.5 “报告改写暂未完整接入，未来考虑由 Main Agent 做”——需要区分两种含义

如果“Main Agent 做改写”是指：

- Main Agent 理解用户要改哪条；
- Main Agent 调用一个改写能力；
- 把改写结果交给用户讨论；
- 用户确认后写入 working copy；

那么它与当前“协调器不做诊断”的设计兼容。

如果是指 Main Agent 自己直接生成最终 wording，则会带来两个问题：

- 当前 Main Agent prompt 明确禁止改写；
- 它会绕过 `rewrite_bullet` 中数字防编造、数字保留和 placeholder 校验。

建议未来仍由 Main Agent 主导交互，但具体改写经过一个受约束的 rewrite tool/能力。它不一定需要独立 command，也不需要独立常驻 role。

推荐交互：

```text
用户提出改写
→ Main Agent 选择 bullet 和相关诊断
→ rewrite_bullet
→ 机械校验
→ Main Agent 与用户讨论
→ 用户确认
→ apply_revision
→ 可选重新 review
```

### 3.6 “预算生命周期和缓存键完整性优先级不高”——可以延后

这两项当前不是架构阻塞项，但需要保留问题记录：

- 预算实际是每 App/进程，不是每 session，也不跨进程；
- session 中的 `maxCostUsd` 不控制 QueryEngine；
- Query Cache key 未包含 `jsonMode`、完整 tool schema 等全部语义参数。

只要当前没有把预算描述成严格的 session/account 账本，也没有依赖跨模式缓存正确性，这两项可以排在产品闭环之后。

### 3.7 “上下文管理暂时用不到”——大体正确，但并非完全没用

对典型简历诊断：

- 简历文本短；
- Sub-agent 上下文边界窄；
- 每个 role 最多几轮；
- 正常情况下不会接近模型窗口。

因此三级模型压缩不是当前核心能力。

但 Context 层仍有三项现实价值：

1. 长对话中保留 resume 和用户补充事实；
2. 工具输出写入时做结构压缩；
3. 避免 recent history 无限增长。

结论：保留分层 Context 和滑动窗口；不要继续把复杂压缩当作近期优化重点，也不要把“三级压缩”作为尚未被实际工作负载证明的核心卖点。

### 3.8 “当前问题集中在可达入口和权限接线”是什么意思

**可达入口**指代码存在，但真实用户流程没有路径调用它。

例子：

- `rewrite_bullet` 已实现并测试，但 Main Agent 没有这个工具，报告也不调用它；
- `diagnoseAll()` 已实现，但当前生产路径没有调用点；
- `SessionRestorer.resume()` 已实现，但没有 `/resume` 或等价入口；
- `checkOperation()` 已实现，但生产 Memory 写入没有调用它；
- `/new` 能创建新 session，但 REPL 不会切换到它。

**权限接线**指 Permission Rule 已定义，但执行敏感操作的那条真实路径没有经过 Permission Gate。

最清楚的例子是：

```text
规则：memory_write → high → confirm
真实路径：post-tool memory hook → MemoryTriggers → store
结果：没有调用 gate.checkOperation('memory_write')
```

所以问题不是“没有权限系统”，而是“权限系统和操作路径没有接上”。

### 3.9 “外层治理链路不是每个工具调用的统一入口”是什么意思

Main Agent 的工具路径是：

```text
runTool
→ pre hooks（permission、budget、trace）
→ tool.execute
→ post hooks（audit、compress、memory、progress、metrics）
```

Sub-agent 内部的路径是：

```text
SubAgentRuntime.callTool
→ tool.execute
```

后者不经过 HookPipeline。

因此“所有工具调用都通过权限、审计和指标”目前不成立。准确说法应是：

- 所有 Main Agent 发起的外层操作经过治理；
- 已获准 review 内部的专家工具调用直接执行；
- QueryEngine 自身预算仍会覆盖内部模型请求；
- 内部工具缺少独立审计和 trace。

这不一定要改成所有内部调用重复跑完整权限链。建议把“操作授权”和“内部观测”拆开：外层授权一次，内部每次记录 trace。

### 3.10 “纵向测试明显不足”是什么意思

现有测试大部分是横向模块测试：

- parser 单独测试；
- loop 单独测试；
- review tool 单独测试；
- orchestrator 单独测试；
- report 单独测试；
- session 单独测试。

它们能证明每个零件在 fake collaborator 下工作，但不能证明零件在真实 composition root 中已经接通。

纵向测试是从公开入口穿过多层，直到用户可见结果。例如：

```text
App
→ /upload fixture.md
→ 用户说“完整检查这份简历”
→ Main Agent 发出 review tools
→ Sub-agent 返回诊断
→ generate_report
→ /report
→ 断言报告包含全部 eligible entries
```

Provider 可以是 scripted fake，不需要真实 API。这样的测试会直接发现：

- `/diagnose` 已删除但 CLI 还在调用；
- `start <file>` 没解析文件；
- `/new` 返回新 session 但 REPL 没切换；
- partial report 被当成完整报告；
- Hook 仍监听旧工具名。

### 3.11 “会做一次残余代码清理”——建议放在架构决策之后

先决定：

- 完整诊断是否恢复确定性 batch service；
- rewrite 是 Main Agent 自写还是 Main Agent 调受约束工具；
- inner tool 是否只 trace，还是也走部分 hook；
- Format 的领域边界；
- 非 bullet section 的负责角色。

决策后再统一删除旧代码，避免刚删完又重新实现同一能力。

## 4. 当前实际架构

```text
CLI / REPL
  ├─ Command channel（确定性、无模型）
  └─ Natural-language channel
       └─ Main Agent / Coordinator
            ├─ parse_resume
            ├─ review_content(entry)
            │    └─ Content Sub-agent
            │         ├─ query_knowledge_base
            │         ├─ web_search（可选）
            │         └─ examine_technical_depth
            │              └─ Deep Research Sub-agent
            ├─ review_wording(entry)
            ├─ review_narrative(document)
            ├─ review_jd_match(document, JD)
            ├─ review_format（确定性代码）
            ├─ generate_report
            ├─ record_fact
            └─ apply_revision
```

持久化分为五个 SQLite 数据库：

- `knowledge.db`
- `cache.db`
- `sessions.db`
- `memory.db`
- `audit.db`

## 5. 领域职责诊断

这是当前最值得在下一轮设计中处理的部分。

### DOMAIN-01 [P1] Format 与 Content 对“量化”重复判断和重复计分

Format 当前包含：

- quantified ratio；
- 每条 bullet 的 missing measurement issue。

Content 又对每条 bullet 的 measurement 进行语义评分。

结果：

- 同一缺少数字的问题可能同时进入 Format issues 和 Content issues；
- 总分中 measurement 既影响 substance，又通过 format 的 quantified ratio 再影响一次；
- `topWeaknesses` 容易被同一问题重复占据。

建议选择一种边界：

**方案 A（更清楚）**

- Format 只保留 ATS、布局、长度、日期/标点一致性；
- quantified ratio 作为统计信息展示，不进入 Format score；
- “该不该有数字”完全归 Content。

**方案 B**

- Format 改名为 Resume Mechanics；
- 明确它包含扫描友好度和机械写作信号；
- 汇总时对重叠信号去重，不双重计分。

### DOMAIN-02 [P1] Format 与 Wording 对动词重复判断

Format 使用 `startsWithActionVerb()` 计算 verb-first ratio；Wording 使用模型判断 `verbStrength`。

它们不是完全相同的问题：

- Format：是否以动作动词开头；
- Wording：这个动词是否准确、有区分度、能引出具体追问。

但当前报告和总分没有解释这种区别，实际可能出现：

```text
Format：Improved 是合格动作动词
Wording：Improved 的 verbStrength 只有 65
```

建议：

- 保留 deterministic verb-first 作为机械检查；
- 不让 verb-first ratio 参与总分，或降低权重；
- Wording 负责语义强度；
- 报告明确一个是“结构命中”，另一个是“表达质量”。

### DOMAIN-03 [P1] Content prompt 自己也侵入了 Wording 边界

Content prompt 一方面说 writing、verbs、filler、length 属于别的 reader；另一方面又写：

> Compact and clear is worth marks of its own.

这会让 Content 在 impact/method 评分里再次惩罚措辞和长度。

建议改为：

- Content 只判断事实关系能否被理解；
- 如果句法导致无法确认事实，可指出“内容关系不清”；
- 不评价词语是否简洁、动词是否强、是否超过两行。

### DOMAIN-04 [P1] Narrative 与 Content 的 entry-level 信息没有完全合并

Narrative 现在负责：

- redundant pairs；
- coherence；
- suggested order。

Content 负责 bullet substance。这一拆分总体合理。

但 `weakLead(diagnosis)` 已经有确定性计算函数，却没有生产调用点，也没有合并进 `narrative.withinEntries`。报告支持渲染 `weakLead`，但当前永远不会出现。

建议在报告聚合或 narrative 结果归一化时，用 Content 分数补入：

```text
withinEntry.weakLead = strongest content score is not first
```

不要让 Narrative Agent 再判断哪条最强。

### DOMAIN-05 [P1] 跨 bullet 的 outcome 关系需要进入 Content 规则

某条 bullet 描述 method，下一条描述同一工作的 result 时，当前 measurement 可能把 method bullet 判成“没有结果”。

Content 虽然看到整个 entry，但评分规则仍以单 bullet 为中心。

建议明确增加：

- 如果结果在本 entry 的相邻 bullet 中，不能把它当作完全未测；
- 可以指出拆分后单条自洽性不足，但应区分“没有结果”和“结果在同一 entry 的另一行”；
- Narrative 决定是否合并或重新排序，Content 只调整 measurement/impact 的解释。

### DOMAIN-06 [P1] Skills 和 Summary 基本不进入 whole-document 专家

`renderResume()` 只渲染 `entries.length > 0` 的 section。

因此通常只有 `looseLines` 的 section 会被丢掉：

- Skills；
- Summary；
- 其他无 entry 的 section。

直接影响：

- JD Match 看不到 Skills section，关键字覆盖会误判；
- Narrative 看不到 Summary，无法判断 summary 是否与职业路径一致；
- 知识库中的 `skills-section` 维度很难被实际使用。

建议让 whole-document renderer 包含所有非 contact section：

```text
# SKILLS
<loose lines>

# SUMMARY
<loose lines>
```

并根据 role 决定是否过滤，而不是在通用 `renderResume()` 中统一丢弃。

### DOMAIN-07 [P1] Education / Early Career 知识维度缺少稳定消费路径

Education entry 通常没有 bullet，因此 Content 和 Wording 不运行。Narrative 可以看到 education entry，但不一定会查询 `education-early-career`。

需要明确由谁负责：

- Narrative 负责 education 的排序、时间和职业路径意义；
- Format 负责日期/结构；
- 一个轻量 section review 负责 early-career 教育内容是否应保留；
- 或明确当前不做 education 内容诊断，并移除相应产品承诺。

### DOMAIN-08 [P1] Report Improvement Plan 没有消费全部专家输出

当前 Improvement Plan 的 findings 只包含：

- Format issues；
- Content bullet issues。

没有包含：

- Wording issues；
- Narrative gaps；
- Narrative ordering notes；
- within-entry redundancy/coherence；
- JD missing requirements 和 gaps。

因此“看到所有问题后统一选择页面预算”的设计目前并未真正覆盖所有 reader。

建议先把所有角色结果转换为统一 `PrioritizableFinding`：

```ts
interface PrioritizableFinding {
  source: 'content' | 'wording' | 'format' | 'narrative' | 'jd';
  target: string;
  what: string;
  costWords?: number;
  actionCost: 'mechanical' | 'needs-fact' | 'needs-experience';
}
```

再统一进入 Improvement Plan。

### DOMAIN-09 [P1] “未诊断”“不适用”“失败”和真实 0 分混在一起

当前报告对缺失 diagnosis 使用 0 分。需要区分：

- `diagnosed`；
- `not-run`；
- `not-applicable`；
- `failed`。

否则无 bullet 的 Education 和真正极差的 entry 在报告中不可区分。

### DOMAIN-10 [P2] Wording 是否需要知识库与代码注释不一致

领域注释说 Wording 不需要知识库，但当前 Wording role 持有 `query_knowledge_base`，并附加 Retrieval Addendum。

这不是一定错误，但应作出明确决定：

- 若 action verbs / concision 需要 corpus 例子，就保留并修正文档；
- 若 wording 是纯语言判断，就移除检索，减少轮次和成本。

### DOMAIN-11 [P2] `claimsToVerify` 名称与实际内容不一致

字段实际保存的是已经完成的 checks，而不是仍待验证的 claims。

建议改名为：

- `claimChecks`；
- `verificationChecks`；
- `evidenceChecks`。

## 6. 产品路径与可达性问题

### FLOW-01 [P0] 非交互 `diagnose` 入口调用不存在的命令

现状：`pnpm diagnose` 输出 `Unknown command /diagnose`，且产生 0 次模型调用。

建议在架构确定后选择：

- 恢复一个确定性 full-review application service；
- 或暂时移除非交互命令，避免假成功。

### FLOW-02 [P0] `start <file>` 不解析文件

`App.start(file)` 只创建 session 和写 source path，没有调用 parser。

验收：启动带文件时，第一次用户输入前 `state.resume` 必须存在，或者 CLI 明确提示尚未加载，不得声称 Loaded。

### FLOW-03 [P1] `/new` 和 upload-created session 不会切换当前 session

CommandResult 的 `action: new_session` 被 `handleInput()` 丢弃。

建议让 App/REPL 持有可替换 current session，命令返回后统一处理 session transition。

### FLOW-04 [P1] Full report 没有完成协议

当前只要有 format 和一个 content diagnosis 就能生成报告。

建议定义：

- eligible entry；
- required roles；
- optional roles；
- completed/partial coverage；
- failed role 的呈现方式。

### FLOW-05 [P1] Rewrite 能力不可达

`rewrite_bullet` 已实现并测试，但 Main Agent 没有能力调用，报告也不会生成 rewrites。

建议架构确定后，通过 Main Agent 调受约束 rewrite tool 接入，不要求恢复独立 command。

## 7. 治理、权限与观测问题

### GOV-01 [P1] Memory permission rule 没接到 Memory 写入路径

生产路径必须在写入前调用：

```ts
gate.checkOperation('memory_write', session.id)
```

或明确撤销“每次长期记忆写入需要确认”的产品规则。

### GOV-02 [P1] Inner tool call 没有 trace

建议增加 `SubAgentTraceSink`，至少记录：

- sessionId；
- agentId；
- turn；
- tool name；
- input summary；
- result summary；
- success；
- duration；
- token usage（模型回合级）。

默认不要保存整份 resume/tool result，避免审计数据库变成第二份隐私数据仓库。

### GOV-03 [P1] 模型可自由给 `parse_resume` 提供本地路径

当前 Permission Rule 假设路径来自用户，但代码没有验证来源。

建议：

- 命令 `/upload` 继续视为用户明确授权；
- Main Agent 的 parse tool 只接受本轮用户消息中明确出现的路径；
- 或通过 opaque upload handle，而不是任意 filesystem path；
- 或对模型触发的路径读取进行确认。

### GOV-04 [P2] “所有工具都经过治理”需要改成更准确的架构描述

建议术语：

- **Outer operation governance**：Main Agent 发起的用户级操作；
- **Inner agent tracing**：已授权 review 内部的只读查询和研究步骤。

这样无需重复权限确认，同时保留可审计性。

## 8. 并发与性能

### PERF-01 [延后] 当前产品路径未使用 `diagnoseAll()`

这是已知、可接受的延期项。架构确定后再接，不要求立即处理。

### PERF-02 [延后] Role 并发目前也未真正使用

因为一个 review tool 每次只传一个 role。未来批量工具可同时传 content + wording。

### PERF-03 [延后] Agent-as-Tool 并发需要显式问题列表

当前 Content Agent 是逐轮决定是否调用 Deep Research。要并发，需要它一次产出多个独立 research questions，或新增 research batch tool。

不建议为了并发让所有领域问题提前固定，因为那会削弱 Agent loop 根据前一个结果调整问题的价值。

### PERF-04 [P2] Web Search 无缓存

可在产品闭环之后处理。建议 key 为 `query + purpose + limit`，按 purpose 设置 TTL。

## 9. Context 与 Memory

### CTX-01 [观察项] 三级压缩不是当前工作负载的核心能力

保留实现，但不继续围绕它做近期优化。

### CTX-02 [P2] Token 估算未完整计算 tool call input

`countMessageTokens()` 应把 tool name 和 JSON input 计入，避免 Context 低估真实请求。

### CTX-03 [良好] Resume 与 supplied facts 放在 task layer

这解决了长对话中用户数字被 recent window 淘汰后再次询问的问题，应保留。

### MEM-01 [P2] 预算和记忆生命周期需要文案准确

预算是进程级，Memory 是跨 session 持久化，两者生命周期不同。后续 UI/命令不要把二者描述成统一 session state。

## 10. Query Engine 延后问题

### QE-01 [延后] Budget lifecycle

当前行为：

- 同一 App 中跨 session 累计；
- 进程重启归零；
- session config 不控制真实 counter。

短期只需准确说明；长期再决定 session ledger 或全局 usage ledger。

### QE-02 [延后] Cache key 完整性

应最终加入：

- json mode；
- reasoning mode；
- tool schema hash；
- 其他影响输出的语义参数。

### QE-03 [清理] `secondary` 模型配置未使用

架构确定后删除，或明确路由任务。

### QE-04 [清理] Session effort 未参与路由

删除死配置或接入 QueryParams，不保留看似有效的字段。

## 11. 解析问题

### PARSE-01 [P1] PDF 两端对齐 header 被拆成两个 entry

为真实常见格式，建议使用真实 PDF fixture 回归。

### PARSE-02 [P1] 模型分段路径丢失精确 SourceSpan

`buildFromLabels()` 中 bullet span 为 `{ start: 0, end: 0 }`。

若未来需要高亮、差异或精确替换，应从原 block 继承 span。

### PARSE-03 [P2] 最新日期前置可能与 raw header 重复

commit `24df62e` 的方向正确，但应增加测试并决定日期展示协议。

## 12. 报告问题

### REPORT-01 [良好] 完整报告不再截断已有内容

最新提交将 bullet 和 issue 改成 wrap，是正确修改。

### REPORT-02 [P1] Report coverage 未显示

应增加：

```text
reviewed 4/6 eligible entries
content 4/6
wording 4/6
narrative completed
JD not requested
```

### REPORT-03 [P1] Improvement Plan 未消费全部角色

见 `DOMAIN-08`。

### REPORT-04 [P2] 总分缺失维度使用 substance 替代

需要决定改成重新归一化，还是要求完整维度后才显示 overall score。

### REPORT-05 [P2] `topRecurring` 前五词聚类偏差

长期应使用稳定 issue kind，而不是自由文本前缀。

## 13. 测试问题

### TEST-01 [P0] 缺少 CLI smoke test

必须覆盖：

- `diagnose` 不得输出 Unknown command；
- 启动带文件时实际解析；
- 退出码和报告文件正确。

### TEST-02 [P1] 缺少 composition-root vertical test

使用 fake QueryEngine，从 `App` 入口跑通：

```text
upload → review → report → export
```

### TEST-03 [P1] `test:e2e` 当前没有测试且退出成功

应让“没有 E2E 测试”失败，或把命令改名为尚未启用的 placeholder，不能制造绿色信号。

### TEST-04 [P1] 最新提交缺少针对性回归测试

至少覆盖：

- `renderEntry()` 日期前置；
- 长 bullet/issue 完整保留；
- word-boundary truncation；
- 超长无空格 token。

## 14. 残余代码清理候选

清理前先确认最终架构。

候选清单：

- 旧 `/diagnose`、`/status`、`/continue`、`/detail` 相关文案；
- `COMMAND_MANIFEST` 中未实现项；
- `preferSkills`；
- 未使用的 `secondary`；
- 未使用的 session effort；
- `OrchestratorConfig.timeoutMs`；
- 无生产调用的 `renderSections()`；
- 当前不可达的 direct analysis tool 对象；
- `diagnoseAll()`：不要直接删，先决定未来批量派工设计；
- `rewrite_bullet`：不要删，先决定 Main Agent 改写协议；
- `checkOperation()`：不要删，应优先把 Memory 接上。

## 15. 建议实施顺序

### 阶段 A：领域边界决策

先回答：

1. Format 是 ATS-only 还是 Resume Mechanics？
2. 量化和动词是否允许双重计分？
3. Skills、Summary、Education 分别由谁负责？
4. Full report 最低完成协议是什么？
5. Main Agent 是自己写 rewrite，还是调用受约束 rewrite capability？

### 阶段 B：产品闭环

1. 修复入口；
2. 修复 session transition；
3. 定义 report coverage；
4. 接通 full-review completion contract；
5. 增加 vertical test。

### 阶段 C：领域结果完整消费

1. whole-document renderer 包含 Skills/Summary；
2. Improvement Plan 纳入所有角色；
3. 合并 weakLead；
4. 区分 not-run / not-applicable / failed / zero；
5. 接入 rewrite conversation flow。

### 阶段 D：治理和观测

1. Memory permission 接线；
2. inner tool trace；
3. parse path 来源约束；
4. Progress Hook 迁移到新工具名。

### 阶段 E：性能与清理

1. 按需要接入 role/entry 并发；
2. 搜索缓存；
3. Context token 估算；
4. 预算/cache 延后项；
5. 集中清理上一架构残留。

## 16. Claude 实施与 Codex Review 约定

Claude 每次修改建议围绕一个问题 ID，例如 `DOMAIN-06` 或 `FLOW-03`，不要一次混合多个架构决策。

每个修改应附：

1. 选择的设计；
2. 修改的生产路径；
3. 新增或更新的测试；
4. 是否改变现有报告/分数语义；
5. 是否有数据迁移或缓存失效影响。

Codex review 时重点检查：

- 问题是否真的接入生产路径，而不是只新增了方法；
- 测试是否从真实调用者触发，而不是只直接调用新函数；
- 是否制造新的职责重叠；
- 是否把 not-run 静默变成 0；
- 是否绕过数字防编造、权限或审计边界；
- 是否保留旧架构的第二条平行路径。

## 17. 当前验证基线

在 commit `24df62e` 上：

```text
pnpm typecheck  通过
pnpm test       28 files / 609 tests passed
pnpm test:e2e   没有测试文件，但退出码为 0
```

这意味着单模块基线稳定，但不代表完整用户路径已接通。
