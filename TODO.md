# TODO

## 已同意,待改

### 1. `EntryDiagnosis.narrative` 被算出来然后丢掉
`prompts.ts` 要求模型给 entry 级判断(`redundantPairs` / `weakLead` / `coherence` /
`suggestedOrder`),`analyze-entry.ts:172` 解析进 `EntryDiagnosis.narrative`,
然后**全项目没有任何地方读它** —— 不进评分,不进报告。每个 entry 都在为这次
跨-bullet 判断付钱。

- 先渲染进报告(改动最小,可直接验证它值不值钱)
- 进不进评分再议:进评分要改权重,影响所有历史分数

**为什么重要**:评分链是纯均值嵌套 —— bullet 分 = mean(impact, measurement,
method)(`analyze-entry.ts:150`),entry 分 = mean(bullet 分)(`:168`),
substanceAvg = mean(entry 分)。这条链上没有任何一项代表"这几条 bullet 合起来
讲通了一个故事",所以工具在算术上就是承诺 bullet 级自洽的。

### 2. measurement 缺第三种判定
四档量表(`prompts.ts:45`)区分了「可测未测」和「原理上不可测」,但没有
**「测了,结果在本 entry 的另一条 bullet 里」**。

Amazon entry 是典型:b0 是 method,b1 是 quality result,b2 是 deployment result。
b0 被判低分,因为它的结果在 b1/b2。一句话进 prompt,不动结构。

## 已讨论,决定不做

### 3. 给 bullet 引入"角色"分类(scope / architecture / capability / result …)
分类错了后面全错,而且要模型先分类再评分,多一次判断链路。原项目没有这层。

## 待定,未讨论出结论

### 4. `verbFirstRatio` 和 `verbStrength` 对同一个词判断相反
`Improved planted-defect localization from 27% to 73%` —— format 层
(`verbFirstRatio` 92/100)认为 `Improved` 是合格的动词开头,wording agent 却把
`verbStrength` 压到 65。两层对同一条规则给出相反判断。

### 5. `topRecurring` 有系统性偏差
按前 5 个词聚类(`generate-report.ts`)。"没有可测结果"这一族是 scope /
architecture / capability bullet 全体都会踩的,所以 recurring weakness 列表天然
偏向这类抱怨。另外 format 层的 "runs past two lines" 在 13 条里命中 11 条 ——
一条规则触发 85% 的文档时,它描述的是文体,不是这份简历。

### 6. issue 没有"改动成本"权重
所有 issue 以同样权重输出,不管改它要一个词还是一整行。像
"8% 是相对还是百分点"这种「意见正确但这个篇幅下不值得改」的,现在没法表达。

### 7. 三级压缩阶梯在生产路径上从未运行
`autoCompact` 全项目只有一个调用点:`loop.ts:108`。sub-agent 从不调它。
两条路互补地把机制锁死了 —— **能触发的那条不调用,调用的那条触发不了**:

| 路径 | 能否超过阈值 | 调 `autoCompact` |
|---|---|---|
| 主交互循环 | 不能(上界 7,006 / 阈值 10,800) | 调 |
| sub-agent | 能(上界 27,818 / 阈值 25,200) | **不调** |

主循环这一侧的算术:

- 阈值 = `(maxTotalTokens 16000 - outputReserve 4000) × 0.9` = **10,800**
- 五层预算之和 = 2000+500+4000+2000+3000 = 11,500,但每层截断实际落在 ~90%,
  真实上界 **10,617**
- 且 `setTaskContext` 只在 sub-agent 里调用,交互路径 task 层恒为 0
  → 实际上界 **7,006**(模拟 600 条消息后 plateau)

`manager.ts:57` 的注释已经担心过这件事("the layer budgets cap the total below
the compaction threshold"),当初的修复让 history 不再为空,但账仍然不平。
主循环真正在工作的是滑动窗口逐出,压缩是触发不了的保险。

sub-agent 路径能触发(峰值 27,818 > 阈值 25,200),但 `maxTurns` 6 / 实测峰值
3 轮,所以也没发生过 —— 那是余量不足,不是结构性不可达,性质不同。

**注意别说过头**:死的只是要花模型调用的升级阶梯(L2 摘要历史 / L3 摘要任务块)。
写入路径上的三个机制都是活的 —— 滑动窗口逐出(`manager.ts:61`)、工具输出压缩
(`manager.ts:88`,其实就是 L1 要做的事)、history 截断。窗口不会失控。

**影响简历 bullet**:`staged compaction` 是个雷,面试官问"多久触发一次"答不上来。
要么先修再写,要么改写成写入路径上真实发生的东西。

复现:`tmp/envelope.mts`,纯本地,不调 API。

三个选项,是设计判断不是 bug 修复:
- 降 `maxTotalTokens`(16000 → 12000,阈值 7200) —— 为了让机制能触发而改预算,本末倒置
- 提层预算让和明显超过阈值 —— 同样是倒推
- **承认现状**(倾向):主循环靠逐出,压缩只服务 sub-agent 路径;
  `freeLoop` 那句 `autoCompact` 加注释说明它在当前配置下不触发,
  而不是看起来像在工作

### 8. 没有持久化的用量账本
`TokenCounter.spent` 是 `QueryEngine` 的实例字段(`token-counter.ts:31`),
而 `QueryEngine` 在 `app.ts:67` 每次启动新建一个。所以用量每进程归零。

后果:**`RESUMEPILOT_MAX_COST_USD` 是每进程上限,不是累计上限。**
35 个 session / 30 次完整 run,每次都从 $0 起算,没有任何一次触发预算保护,
但 DeepSeek portal 上累计已经约 5M tokens。

最小改法:`TokenCounter.record` 写进一张表(新建 `data/usage.db` 或复用
`audit.db`),预算检查读累计值。原项目没有这层,动之前先确认。

不加也是一个立场(预算保护只防单次跑飞,不防你自己跑 30 次),
但那样 README 里 `about 36 calls and ~$0.31 per resume` 要注明是单次成本。

### 9. 上下文管理层在这个工作负载上完全不工作
不是余量充足,是**每个机制都被别的上限提前卡死**:

| 机制 | 为什么不触发 |
|---|---|
| `autoCompact` | 唯一调用点在主循环(上界 7,006 / 阈值 10,800);sub-agent 能超阈值但不调用 |
| `compressToolOutput` | 低于预算原样返回(`compressor.ts:60`)。知识库 `MAX_LIMIT = 5` → 最大结果 1,598 / 预算 3,000 |
| 滑动窗口逐出 | sub-agent `recentBudget` 20,000;6 轮全满也只 ~10,000 |

根因是输入域:**整份简历 1,152 tokens**,每角色任务块 293–508,
一次典型 sub-agent 调用约 1,900 tokens —— 用掉 32K 预算的 6%、
最小模型窗口(128K)的 1.5%。三页简历也就 ~3,500 tokens,同样压不动。

复现:`tmp/envelope.mts`(compaction)、`tmp/compress.mts`、`tmp/ctxsize.mts`。

这不是要修的 bug —— 分层预算作为设计是对的,只是这个域用不上它。
但**不能在简历上写 `staged compaction`**:面试官问"跑过吗"答案是没有。

### 10. web_search 没有缓存
**不是配额问题** —— 一次完整 run 约 8-15 次搜索,免费档 1,000/月就够 65-125 次,
而整个项目开发至今一共跑了 30 次。(用户在 researcher 档,额度更高。)

真正的三个理由,都不紧急:

1. **重试**:`orchestrator.ts:194` 的 `retry` 重跑**整个 agent**,不是重发一个
   请求,所以第一次做过的搜索会原样再做一遍
2. **同一次 run 内撞车**:NIO 的 LoRA 和 Amazon 的 LoRA distillation 会问出
   几乎一样的 query,不同 agent 各查各的
3. **延迟**:3 次搜索 x 1.4s,重跑同一份简历时纯属白等

做法:一张自己的表(`QueryCache` 的 key 是 `StreamParams`,形状不同,复用不了),
key = query + purpose + limit,TTL 按 purpose 分(`job_posting` 短,岗位会下架;
`metric_norm` 长,INT8 是 1 byte 这件事不会变)。

### 11. 角色的时间/轮次上限是按"加搜索之前"的负载标定的
`roles.ts` 的注释写着这些上限是 "2-3x what a measured run actually used:
peak 67s and 3 turns"。那次测量在 `web_search` 之前。

加上搜索后第一次完整跑:

```
Entry Substance   2 ok, 2 failed  277s total  peak 165s / 4 turns
no substance      2 — Request aborted
```

180s 从 2.7 倍余量变成 **1.09 倍**,NIO 和 Amazon(技术数字最密的两条)直接撞线。
已放宽到 420s,**但这是临时值** —— 按项目一贯做法,要拿一次干净的完整运行
重新测出峰值,再缩回 2-3 倍。

更一般的问题:**每次给角色加能力,所有按旧负载标定的上限都失效了**,而失效
方式是静默的(`Request aborted`,报告里那一条 entry 直接 0 分)。其他按实测
标定的常量同样有风险:`maxTurns: 6`、`DEFAULT_ENTRY_CONCURRENCY: 2`、
限流器的 `rateCapacity: 4`。

### 12. `OrchestratorConfig.timeoutMs` 是死配置
`orchestrator.ts:28` 声明 `timeoutMs: 300_000`,全项目没有任何地方读它。
真正生效的只有 `sub-agent.ts:81` 的 `config.timeoutMs`(角色自己那个)。
要么接上,要么删掉 —— 现在它看起来像在管事,实际不管。


### 13. 建了但接不到的东西 —— 一次审计
起因:`checkpoints` 表 0 条 / 42 个 session,`memories` 表 0 条。两个完整子系统
从没运行过,而读取它们的代码早就写完在等着。

**已修:**
- `checkpoints`:对话每轮写一条(transcript),诊断每 2 个 entry 写一条(state)
- `memories`:memory hook 只在 Dispatcher 上跑,而诊断流程两条路都刻意绕开它
  (skill 直接 `tool.execute`,sub-agent 明确不走 hook)。改成 skill 显式调
  `ctx.memory` 触发器
- `getSessionLog` / `getSessionExecutions` / `getRules` → `/audit`
- `rewindTo` / `list` → `/rewind`
- `evictExpired` → 启动时调用一次

**剩下没接的**(src 里零调用,不算 bug,但按"留出访问路径"的原则记着):

| 方法 | 在哪 | 说明 |
|---|---|---|
| `sampleEntries` | knowledge | **抽题用的 —— 正是 grill / mock-interview 需要的** |
| `getEntry` | knowledge | 按 id 取单条 |
| `checkOperation` | permission | `operation` 类规则的入口(`memory_write` 那条靠它) |
| `addRule` / `clearApprovalCache` | permission | 运行期改规则,没有命令暴露 |
| `unregister` | hooks | `/hooks` 只能开关,不能注销 |
| `updateProgress` | session | 进度直接赋值,没走这个方法 |
| `deleteAll` | memory | 只有测试用 |
| `open` / `closeAll` / `pathFor` | db/types.ts | **只有类型没有实现** —— 是没落地的设计,不是死代码 |

**教训**:这一类都是"一端接好、另一端从不触发",而且没有测试就发现不了。
今天一共查出五处同类问题(压缩阶梯、`OrchestratorConfig.timeoutMs`、
`EntryDiagnosis.narrative`、checkpoint、memory)。


---

## 实测记录(2026-09-17,架构中立)

这一轮的代码全部回退了,但下面是跑出来的、重建时要用上的事实。

**两个潜伏 bug,都不是那轮引入的,回退后仍然存在:**

1. **零工具 sub-agent 发不出请求。** `sub-agent.ts` 里 `jsonMode` 在
   `tools.length === 0 || finalTurn` 打开,但满足 OpenAI "输入消息须含 json" 那条约束的
   只有 `FINAL_TURN_NUDGE`,而它只在 `finalTurn && turns > 1` 才加。现有角色个个至少一个
   工具、maxTurns ≥ 3,所以第一轮从不开 JSON 模式、最后一轮必带 nudge —— 洞一直空着。
   **一旦出现真正零工具的角色,第一轮就 400,请求到不了模型。**
   报错原文:`400 Response input messages must contain the word 'json' in some form
   to use 'text.format' of type 'json_object'.`

2. **失败的 sub-agent 凭空消失。** `orchestrator.attempt` 抓到异常后返回
   `turns: 0, durationMs: 0`,读取方若只看 `success` 不看 `error`,一个 400 报上来的
   样子就是"这份简历没什么可问的"。

**跑出来的数字:**

| | |
|---|---|
| 整份诊断(4 个有 bullet 的 entry,含领域层) | 51 次调用 · 301,692 in · 113,528 out · **$0.2075** |
| 单个 entry 走完整产品路径 | 3 次调用 · **$0.0216** · 151s |
| 打分 run-to-run 噪声 | **±7 分** |

**关于观测:sub-agent 内部现在没有任何记录。**
`audit.db` 的 `tool_executions` 最后写入停在 9 月 8 日;`sub-agent.ts` 的注释写明工具调用
故意不走 hook / 审计。`cache.db` 只留最终响应,没有 tool_use。所以"某个 agent 六轮里
到底搜了什么、查了哪条 rubric"**无从回答**。

**prompt 写法(用户指正):**
- 不要写成状态机。给目的、目标、一个宽松的建议动作,就够了。
- 不要 "达到 xxx 条件给 xxx 分",要 "综合考虑 A、B、C 等,目的是 D"。
- 角色特殊 prompt 里**只放实测出来的 bug 和要点**,推测的不放。

---

## 解析:项目条目被日期行切开(2026-09-18,实测)

真实简历(未脱敏,不在仓库里)的 PROJECTS 段,每个项目解析成了两条:

```
[s3:e0] 0 条  ResumePilot | Owner | TypeScript, Agent Runtime, Multi-Agent Systems
[s3:e1] 3 条  Aug 2026 - Present ⏎ github.com/SeanHe727/ResumePilot
```

PDF 里项目名和日期排在同一行的两端,文本提取后变成两行;`structure-builder.ts` 的
"日期范围是新 entry 最可靠的开始标记"把日期那行判成了新 entry 的表头。

**后果:**
- 报告里项目标题显示成 GitHub 链接,真正的标题挂在一个 0 分的空条目上
- content 拿到的 entry 表头是 `Aug 2026 - Present`,**它不知道自己在读哪个项目**
- entry 数从 6 变成 8,其中两条永远是 0 分

**没查的:** 是提取阶段(PDF 两端对齐的行拆成两行)还是结构阶段(表头续行的判定)。
两端对齐的表头在简历里很常见,所以这多半不是这一份文件特有的。
