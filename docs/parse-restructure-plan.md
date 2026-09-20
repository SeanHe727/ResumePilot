# 解析层重构方案

七步,每步一个最小职责。

```
PDF ─A0─▶ Page[] ─A1─▶ VisualRow[] ─B1─▶ SectionBoundary[] ─B2─▶ RowLabel[] ─B3─▶ Section[] ─B4─▶ +kind ─B5─▶ ResumeDocument
         按页处理    同基线重建行     只切段边界          段内标注         纯状态机组装      判类型      完整性验证
```

**判断集中在 B1 / B2;B3 只执行标签;B4 只贴标签不改结构;A0 / A1 / B5 是几何与对账。**

### 当前格式范围(B3 已落地)

结构化解析**只支持 PDF**。A0–B5 都建立在 PDF 的视觉行、字号、坐标和缩进证据上,不为其他格式编造这些证据。

- PDF —— 走完整 A0–B5,产出结构化 `ResumeDocument`
- **Markdown / TXT / DOCX 文件 —— 入口已删除,现在是不支持的文件类型**,不是 raw-text-only。抽取器、命令帮助、路径识别一并收成 `.pdf`
- `SourceFormat` 的 `'markdown' | 'text' | 'docx'` 作为 **legacy 值保留** —— 旧 session 里存着它们,而 session 是裸转换读回的
- 用户直接粘贴的纯文本仍属纯文本输入,与文件入口无关

以后支持 Markdown / DOCX 时,各自用标题、列表、段落样式产出相同的 `SectionBoundary[]` / `RowLabel[]`;从 B3 开始共用组装、分类和完整性验证。**共用输出协议,不强行共用 PDF 的几何启发式。**

---

## 前置决定:只支持单栏简历

ResumePilot 不实现多栏阅读顺序。`detectColumns` 保留,但角色从"决定怎么读"变成**输入守卫**:

- **单栏** — 继续 VisualRow 重建和后续解析
- **任一页检测到多栏** — 停止结构化解析,返回 `unsupported`,提示用户改用单栏简历

**绝不把多栏 PDF 解析出的错误 `ResumeDocument` 交给 agent。** 多栏版面下抽取顺序本身就是乱的,基于它做的任何诊断都是对一份不存在的简历做的。抽取器在这种情况下返回空 `blocks`,解析器直接抛错,文档根本不会被建出来。

`columnAwareReadingOrder` 与 `readingOrderDivergence` 一并删除。

---

## A0 按页处理

**做什么** — 版面分析改成逐页,每页有自己的尺寸,每页各自做多栏守卫。

**怎么做** — 今天 `geometry` 在页循环里被逐页覆盖,只有最后一页的尺寸活下来,`detectColumns` 却拿它去分析所有页的行。把页循环的产物保留成数组,分栏检测按页跑。

```ts
interface Page {
  number: number;
  geometry: { width: number; height: number };
  fragments: Fragment[];
  columns: ColumnReport;
}

interface Fragment {
  text: string;
  x: number; y: number; width: number;
  fontSize: number; bold: boolean;
  span: SourceSpan;
}
```

---

## A1 VisualRow 重建

**做什么** — 把同一页、同一栏、同一基线的片段拼回一个视觉行,并记住它由哪些片段组成。

**怎么做** — 按 `(page, column, y±2.5pt)` 分组,组内按 x 升序拼接;`fontSize` 取 max、`bold` 取 or。必须限定同栏,否则两栏共用基线的版面会被拼成一行。

**provenance** — 今天 `serialise` 用对象身份的 Map 回查样式,拼行后这条线就断了。`VisualRow` 自带 `fragments`,样式、偏移、页码都能追回。

**多栏守卫在这一步之前** — 到了 A1 已经假定阅读顺序可靠,重建才有意义。

**修掉的 bug(实测)** — pdf.js 绘制顺序不等于视觉顺序:条目标题行最右段(日期)可能在下一行之后才绘制,于是自成一行,且字号大于标题段,导致条目边界被画在日期上。实测某段落解析出 4 个条目(2 个空壳 + 2 个以日期为名),修正后 2 个。

```ts
interface VisualRow {
  index: number;
  page: number; column: number;
  y: number; x: number; width: number;
  text: string;
  fontSize: number;          // max
  bold: boolean;             // any
  fragments: Fragment[];     // provenance
  span: SourceSpan;
}
```

---

## B1 只切分 Section 边界

**做什么** — 找出哪些行是段标题,把文档切成若干 Section 区间。**不判断段是什么类型。**

**怎么做** — 在版面特征上判"这一行是不是段标题":字号高于正文、上方留白大于正文行距、行短、全大写、独占一行。现有 `SECTION_PATTERNS` 词表保留,但用途降级为"这一行像段标题"的一条证据,不再产出 `kind`。

```ts
interface SectionBoundary {
  index: number;
  headingRow?: number;       // 无标题的前导块(联系方式)没有
  fromRow: number;
  toRow: number;             // 半开区间 [fromRow, toRow)
  confidence: number;
  evidence: string[];
}
```

---

## B2 段内标注

**做什么** — 在每个 Section 区间内,给每一行贴一个角色,并标出哪一行开启新条目。

**怎么做** — 先把版面特征算成显式结构,再在特征上写规则。启发式与模型两种实现产出**同一种标签**。

```ts
interface RowFeatures {
  sizeRatio: number;         // fontSize ÷ 本页正文中位数
  bold: boolean;
  capsRatio: number;
  indent: number;            // x − 本栏左边界
  gapAbove: number;          // (上一行 y − 本行 y) ÷ 正文行距   ← 今天完全没用的信号
  startsWithBullet: boolean;
  hasDateRange: boolean;
  hasContact: boolean;
  charCount: number; wordCount: number;
}

type RowRole = 'header' | 'info' | 'bullet' | 'continuation';
type RowOwner = 'section' | 'entry';

interface RowLabel {
  rowIndex: number;
  role: RowRole;
  owner: RowOwner;           // 明确归属,不靠 B3 猜
  startsEntry?: boolean;     // 只在 owner=entry、role=header 时有意义
  contentFrom?: number;      // 正文起始字符偏移,让 B3 不必用正则剥项目符号
  confidence: number;
  evidence: string[];
}
```

`section-heading` 仍由 B1 的 `headingRow` 表达,不重复进入 B2。B2 中的 `header` 是 entry 内部的公司、职位、项目名、学校、日期等标题行;它之所以用通用名字,是因为真正的层级由 `owner` 表达。

**不再先把整个 section 二选一为 entry 型或 loose 型。** B2 逐行判断归属:

- 当前已有 entry 时,属于该条目的 header / info / bullet 标成 `owner: 'entry'`
- 尚无 entry 时,说明文字和 bullet 标成 `owner: 'section'`
- section-level bullet 保留 bullet 身份和原始 marker,不降级成无法区分的 loose 文本
- `continuation` 继承被接续行的 owner

这样 `SUMMARY` / `SKILLS` 可以直接拥有 bullet,`EXPERIENCE` / `PROJECTS` 的 bullet 则属于具体 entry,不需要 B4 先知道 section.kind。

**纯日期规则先于所有开条目规则。** date-only 行永远不能 `startsEntry`;已有 entry 时作为其 header 的延续,尚无 entry 时作为 section info 并留下低置信度证据,不能制造无归属 header。

**`contentFrom` 的用途** — 今天 `stripBulletMarker` 是正则,而 B3 不许用正则。改由标注方给出正文起点,B3 只做切片。

---

## B3 纯状态机组装

**做什么** — 按标签把行折成固定两层嵌套的 Section / Entry / Bullet。

目标语义结构:

```ts
Section {
  heading?: string;
  info: string[];
  bullets: SectionBullet[];
  entries: Entry[];
}

Entry {
  heading: string[];         // 实现中保留现名 headerLines
  info: string[];
  bullets: Bullet[];
}
```

不是无限递归树:层级固定为 `ResumeDocument → Section → Entry → Bullet`。Section 与 Entry 都可以有自己的 info / bullets,从而保留 heading 与内容的真实从属关系。

**怎么做** — B3 只按 `role + owner` 转移:

- `owner=entry + header + startsEntry` —— 开新 entry
- `owner=entry + header` —— 追加到当前 entry.headerLines
- `owner=entry + info/bullet` —— 追加到当前 entry
- `owner=section + info/bullet` —— 追加到当前 section
- `continuation` —— 接到它继承的 owner 中上一项

**约束** — 不读 `kind`、不读字号、不用正则、不重新判断 owner。小型纯函数,同一份实现同时服务启发式和模型两条路。今天的 `isEntryBearing(kind, blocks)` 在这里删除:哪个数组被填由标签决定,不由类型决定。

```ts
function assemble(
  rows: VisualRow[],
  boundaries: SectionBoundary[],
  labels: RowLabel[],
): ResumeSection[]                      // kind 暂空
```

---

## B4 判断 section.kind

**做什么** — 对每个组装好的 section 判类型。

**怎么做** — 每个信号独立给分,取 argmax。不用规则级联,因为级联看不到第二名是谁、差多少。

**输入只有组装完的 section** —— 拿不到行、拿不到字号,所以改不了结构。这是硬保证。

| 类 | 例子 | 权重 |
|---|---|---|
| 标题证据 | 标题命中词表 | 3 |
| 结构证据 | 有 entry 且 entry 有 bullet → experience/project;有 entry 无 bullet 有日期 → education;无 entry + info/section bullet → summary/skills | 2 |
| 内容证据 | 学位词 / 公司后缀 / 职位词 / 代码托管 URL | 1 |

**冲突规则:结构 > 标题。** 标题是候选人写的一个词,结构是整段的形状。叫 `Leadership` 但有三个带日期带 bullet 的条目,按 experience 处理;叫 `EXPERIENCE` 但只有一行逗号分隔的技能,它不是 experience。3:2:1 的效果是词表命中不是否决权,但推翻它需要两条以上结构证据 —— 比例应由 fixture 回归得出。

**`other` 拆成两件事** — kind 落在结构最像的那个(不再有兜底的 `other`);"标题不在词表内"记成一条 evidence,ATS blocker 由这条证据触发。今天这两件事挤在同一个值里。

```ts
interface Classification {
  kind: SectionKind;
  confidence: number;                   // 第一名与第二名的分差
  evidence: Evidence[];
  runnerUp?: { kind: SectionKind; score: number };
}
```

低置信度不做自动处理,只记录,派发时可见。

### headerLines 是唯一 canonical 的标题内容(最终决定)

`parseHeader` 取消,不再拆 `organization` / `title` / `location` / `dateRange`。

- **不能确定的语义字段不猜测、不持久化。** 一行 `A 公司 | 高级工程师 | 上海` 用什么分隔、哪段是哪个,是模板的选择,猜错了就是把一个没人写过的字段写进了文档。
- `ResumeEntry` 上这四个可选字段**保留**,以兼容旧 session;**新解析一律不填**。
- 需要日期等信息的下游,从 `headerLines` **按需派生**,不写回文档。
- B4 可以临时提取日期之类的信息**当分类证据**,但不得改写原文,也不得写进结构。

**连带影响,必须一并处理** — `scoreConsistency` 今天唯一的数据源是各 entry 的 `dateRange`。新解析不再填它之后,这项检查会永远返回"一致",等于静默失效。它必须改成从 `headerLines` 现场派生日期再比格式。这件事随 B4 一起做,不能漏。

---

## B5 完整性验证

**做什么** — 对账,并把"解析失败"变成可观测的。

**怎么做** — 四组检查,分开记录。前两组是错误,第三组是引用完整性,第四组只记录不报错。

**① 行覆盖**

- 每个 `VisualRow` 恰好落进一个 section
- 丢失的行、重复计入的行
- 两套标注(启发式 / 模型)标签不一致的行

**② 非空与合法**

- 空 section(无 entry、info 和 section bullet)
- 空 entry(无 headerLines、info 和 bullet)
- 空 bullet(剥完标记后无内容)
- 非法空 heading(有 `headingRow` 却拿到空字符串)

**③ 引用一致性**

- 重复 ID(section / entry / bullet)
- 失效的 `sectionId` / `entryId`
- 无法映射回原文的 `span`
- **低置信度的 SectionBoundary** —— B1 切分时的疑虑,到这里才第一次有读者

**④ 结构异常(记录,不判错)**

- date-only entry —— 只有日期没有名字的条目,A1 修好后仍出现说明还有别的路径
- orphan bullet —— 声明 `owner=entry` 却没有当前 entry 的 bullet;`owner=section` 的 bullet 合法
- 无目标的 continuation —— 前面没有可接续的行

```ts
interface ParseIntegrity {
  totalRows: number;
  placedRows: number;
  droppedRows: number[];
  duplicatedRows: number[];
  labelDisagreements: number[];
  emptySections: string[];
  emptyEntries: string[];
  emptyBullets: string[];
  invalidHeadings: string[];
  duplicateIds: string[];
  danglingRefs: string[];
  unmappedSpans: string[];
  anomalies: Array<{ kind: 'date-only-entry' | 'orphan-bullet' | 'dangling-continuation'; at: string }>;
}
```

进 `ResumeDocument.meta`。这同时是 ATS 可读性的免费信号源:**我们自己的解析器在哪里卡住,本身就是发现** —— 今天这句话写在 `analyze-format.ts` 的注释里,但没有任何东西在测量它。

---

## 跨步约束

**标注与组装分离** — 启发式和模型只负责标注,产出同一种 `SectionBoundary[]` / `RowLabel[]`,共用同一个 B3。模型换掉、词表换掉,组装不动。

**模型不得生成或改写原文** — 模型的输出只能是行号 + 标签 + 置信度,不含任何文本。B5 校验这一点:标签引用的行号必须存在,且 `VisualRow.text` 与 A1 的产物逐字相同。模型改过的一个字,就是一段候选人没写过的简历。

**每步可独立测试** — 各步输入输出都是纯数据,测试可以从任意一步的产物开始构造,不必跑完整条链。错误也因此能定位到具体一步。

---

## 领域结构兼容策略

- 不做无限递归的通用节点,只增加 Section / Entry 两层明确归属
- `ResumeEntry.headerLines` 保留为 entry heading 的 canonical 内容,不改名
- `ResumeEntry.bullets` 与现有 `Bullet` 保持不变
- `ResumeSection` 新增可选 `infoLines` 与 `bullets`;section bullet 使用单独的 `SectionBullet`,不把 `Bullet.entryId` 改成可选
- `ResumeEntry` 新增可选 `infoLines`
- `ResumeSection.looseLines` 保留用于读取旧 session;新解析写 `infoLines`,下游在迁移期读取 `infoLines ?? looseLines`
- `section.kind` 保留,17 处读它的代码一行不用改
- `ResumeEntry` 的 `organization` / `title` / `location` / `dateRange` 四个可选字段保留(旧 session 里有值),但新解析不再填充
- session 不迁移 —— `checkpoint.ts` 是 `JSON.parse(row.state) as SessionState`,裸转换不校验不迁移,因此只能新增可选字段

```ts
interface SectionBullet {
  id: string;
  sectionId: string;
  index: number;
  text: string;
  span: SourceSpan;
}
```

## 顺序与验证

A0 → A1 → B1 → B2 → B3 → B4 → B5,每步单独可测,全程不调用模型。

- `vitest` 全量 + `tsc --noEmit`
- 真实 PDF 本地重解析,比对段数 / 条目数 / bullet 数 / `dateRange`
- `two-column.pdf` / `banner-two-column.pdf` / `split-two-column.pdf` 必须被判为 `unsupported` 并拒绝解析
- 每一步至少有一条测试走真实 PDF 链路,不能全是合成数据
- 变异测试:逐条还原被删的守卫,确认对应测试转红

`tests/document/parser.test.ts` 的历史红测试已在 B2 修复:fixture 使用 `fontSize`,并补足正文行使中位数落在正文大小。

---

# 进度

**当前状态:B2 初版完成;review 后确定新的嵌套所有权协议。先修订 B2,再进入 B3。**

写这一段是为了让一次全新的会话只读这份文档就能接着做,不需要之前的对话。

## 已完成

### A0 按页处理 ✅

| 文件 | 改动 |
|---|---|
| `src/domain.ts` | `ExtractionQuality` 新增第四个值 `'unsupported'`,与 `degraded` 区分:后者说"仍值得诊断",前者说"抽取顺序本身就错了" |
| `src/document/extractors/pdf.ts` | 新增导出 `StyledLine` / `PageLayout` / `unsupportedLayout()` / `analyseLayout()`。`extract()` 逐页构造 `PageLayout`,不再有被反复覆盖的 `let geometry`。多栏 → 返回 `quality: 'unsupported'` + 空 `blocks` + 空 `rawText` |
| `src/document/layout.ts` | 删除 `columnAwareReadingOrder` 与 `readingOrderDivergence`。`detectColumns` 保留为输入守卫 |
| `src/document/parser.ts` | 新增 `UnsupportedLayoutError`;`parse()` 见到 `unsupported` 直接抛,**绝不建出 `ResumeDocument`** |
| `src/document/index.ts` | 导出 `UnsupportedLayoutError` |
| `src/tools/parse-resume.ts` | 单独分支,把"重新导出成单栏"这句可行动的话直接交给用户 |

测试:`tests/document/page-layout.test.ts`(新,6 条,合成页构造不依赖 pdf.js);`extractors.test.ts` / `layout.test.ts` / `format.test.ts` 随之更新。

三个守卫做过变异验证(逐个还原,对应测试转红):所有页共用最后一页 geometry、无分栏的页套用外来分栏线、多页不标页号。

### A1 VisualRow 重建 ✅

| 文件 | 改动 |
|---|---|
| `src/document/types.ts` | 新增 `TextRun` / `Fragment` / `RowStyle` / `VisualRow`;`ExtractionResult` 新增可选 `rows` |
| `src/document/layout.ts` | `naiveReadingOrder` 改泛型;`detectColumns` 改成扫描候选分界线 |
| `src/document/extractors/pdf.ts` | 导出 `layOutRows()`。`PageLayout` 新增 `runs`。`serialise` 换成 `toBlock`,不再用对象身份的 Map 回查样式 |
| `tests/fixtures/make-pdfs.py` | 新增 `late-date.pdf`(右对齐日期在下一行之后才绘制,且字号更大)、`banner-two-column.pdf`(全宽姓名栏 + 下方双栏)、`split-two-column.pdf`(页中全宽小标题 + 上下双栏) |

**`ExtractionResult` 同时带 `blocks` 和 `rows`。** `TextBlock` 是有损的:整行一个样式、没有行号、回不到片段。下游今天读 `blocks`,B1 该读 `rows`。`rows` 仍是可选字段,但本轮只有 PDF 进入结构化解析;以后 Markdown / DOCX 使用各自的逻辑行与标签适配器,不给它们编造 PDF 坐标。

**分栏守卫重写(原实现有洞,实测)。** 原来找的是"横跨整页的空白带",而双栏简历几乎都在顶部横排姓名 —— 那一行覆盖了栏间空白经过的每一个桶。实测:六行对六行的双栏页,上面加一行全宽标题,就从"检出"变成"检不出"。

改成扫描候选分界线,并在每条分界线上找**连续的双栏区段**:行按自上而下排,横跨分界线的行**切断**当前区段而不是否决整页;每个区段两侧各 ≥3 行、栏间距够宽、竖直方向重叠过半。

这两点缺一不可:

- 只看整页 → 顶部全宽姓名栏、页中全宽小标题都会让双栏漏检。**漏检最糟** —— 守卫放行之后 A1 会把左右两栏按基线拼成一行。
- 让单条跨栏行否决整页 → 页中带一条全宽小标题的真双栏简历漏检。
- 不切段(跨栏行只是忽略)→ 误伤单栏简历:右对齐日期在 `styled` 里自成一行、位置够靠右,四条就凑成"一栏";是它们之间的全宽 bullet 把页面切成"每段只有一个日期"的区段,而一个日期不是一栏。

**区段之间比"两侧行数之和",不比栏间距。** 按栏间距挑,赢的是"旁边字最少"的那个:六对六的页面上,一条穿过左栏的分界线只把最短的两三行留在左边,报成三对四。拒绝信里会念出这两个数字,少报就是把问题说小了。

**`VisualRow` 除 `fontSize`(max)/ `bold`(any) 外另给 `leading` 与 `dominant`。** max/any 回答的是"这行有没有被强调的东西",拿它判段标题是问错了问题:正文行右边跟一个大一号的日期、或中间一个加粗词,按 max/any 读都像标题。`dominant` 按**字符数**而非片段数统计 —— 一个片段是文件一次吐出多少字,右边的日期是一个片段,旁边的句子常是四个。`toBlock` 仍然发 max,**本步不动下游行为**。

**`continuesWord` 的字号比较改成容差比较**(`SIZE_TOLERANCE_PT = 0.1`)。字号是从文本矩阵 `hypot` 出来的,同一字体的两个片段可能在最后几位上不同;严格相等会把它读成换了字体,于是在一个词中间插空格。

**一页两种视图,必须同时存在:**

- `runs` —— 按绘制顺序的原始片段,A1 从它重建行。
- `styled` —— 同样的片段按朴素抽取器的方式合并(只与紧邻的上一个比基线,并在 `hasEOL` 处断行)。**多栏守卫量的是这一份。**

实测:把重建后的行喂给 `detectColumns`,`two-column.pdf` 从"检出"变成"检不出" —— 按基线分组会把左右两栏拼成一行,栏间空白被填平,守卫就瞎了。所以 `mergeIntoLines` 保持 A0 原样、仍直接读 pdf.js item(为了 `hasEOL`:逐行交错绘制的双栏,左右两栏在同一基线上,只有这个标志能把它们分开)。

**拼行规则(两条,都有实测支撑):**

1. 组内按 x 升序 —— 阅读顺序先按基线再按 x,同一行的片段若基线差 1pt,分组后并非 x 升序。实测退化:`Seattle, WAAmazon x UW`。
2. 仅当"页面没留空隙**且**字号字重都没变"才认为是同一个词被拆开 —— pdf.js 按字距拆片段,补空格会造出候选人没写过的词;但满行的条目标题里,右对齐日期的左缘与描述的右缘只差 0.1pt,只看空隙就会粘成 `BenchmarkingFeb`,日期解析器随后把上一个词的尾巴读成月份(`MONTH_NAME` 带 `i` 标志,`mar[a-z]*` 吃掉了 `markingFeb`)。

**A1 目标达成** —— 把 `isDateOnly` 的两个调用点全部关掉重解析真实简历,项目段仍是 2 个条目,且全文逐行与打补丁时相同。这个补丁现在是可证明多余的,**删除它是 B2 的事**,本步已原样还原。

变异验证(逐个还原,对应测试转红):组内不按 x 排序、分组键去掉页号、去掉字号字重比较、去掉空隙比较、按绘制顺序而非阅读顺序分组、字号容差归零、`dominant` 改成数片段、跨栏行不切段、跨栏行否决整页、区段按栏间距排名。

测试:`tests/document/visual-rows.test.ts`(新,18 条,合成片段不依赖 pdf.js);`extractors.test.ts` 增 5 条(`late-date.pdf` 两条、`banner-two-column.pdf` 与 `split-two-column.pdf` 各一条、`rows` 与 `blocks` 对齐一条),并对 `two-column.pdf` 断言报出的行数;`layout.test.ts` 增 3 条(全宽标题下的双栏、页中全宽标题分开的上下双栏、全宽行之间的右对齐日期);`page-layout.test.ts` 的 `pageOf` 补上 `runs`。

**注意:`tsconfig.json` 的 `exclude` 含 `tests`,`tsc --noEmit` 不检查测试。** A0 的测试辅助函数少了新字段是靠人看出来的,不是靠 tsc。

### B1 只切分 Section 边界 ✅

| 文件 | 改动 |
|---|---|
| `src/document/vocabulary.ts` | 新增。`SECTION_PATTERNS` 与 `isBulletLine` / `stripBulletMarker` 从 `section-detector.ts` 抽出,B1 与 B4 共用。`section-detector.ts` 暂时 re-export 后两个,等组装器重建时随它一起搬走 |
| `src/document/types.ts` | 新增 `SectionBoundary` |
| `src/document/section-boundaries.ts` | 新增。`findSectionBoundaries(rows): SectionBoundary[]` |
| `tests/fixtures/make-pdfs.py` | 新增 `caps-headings.pdf` |

**没有接线。** 切分与分类分家要到 B3 重建组装器才落地,现在 `HeuristicSectionDetector` 一行没动,解析结果与 A1 完成时逐行相同。B1 是纯函数 + 测试,按计划"每步可独立测试"。

**核心发现:没有任何单一版面特征能同时管用于两份模板(实测)。**

| | 段标题 | 条目标题 |
|---|---|---|
| 真实简历 | 字号比 1.00、**全大写**、1 词 | 字号比 **1.10**、大写率 0.11–0.38 |
| `single-column.pdf` | 字号比 **1.30**、大写率 0.10 | 字号比 1.00 |

按字号排名,真实简历里**每个雇主都比 EXPERIENCE 大**,段标题全成了正文;按全大写排名,fixture 一个段标题都没有。**两种读法各把一份文档判反。**

`gapAbove` 也测了,比预想弱:真实简历段标题 1.21 / 1.53,条目标题 1.05–1.66 —— 区间重叠,`ResumePilot | Owner | ...` 的 1.66 比任何段标题都大。它只够当一条旁证,不能当判据。这条要带进 B2。

**所以:词表锚定尺度,版面泛化它。** 被词表认出的行,它们在**这份文档上**是怎么排的,就是段标题的排法;排法相同的行也是段标题,不管它自己的词认不认得(`LEADERSHIP` / `AWARDS` / `PUBLICATIONS`)。这样既不会把雇主提成段,也不会把生僻标题读成正文。

三条路径,置信度分开记:

| 路径 | 条件 | conf |
|---|---|---|
| named | 命中词表 | 0.95 |
| ranked | 排法与词表行一致(字号比 ±2%、全大写、粗体),**且上方留白不少于这份文档给自己标题的留白**,且 ≤5 词 | 0.75 |
| guessed | 整份文档没有一个词表命中 —— 短、被强调、上方有空,**且与其他候选排法成家族** | 0.45 |

**排法一致还不够,必须还有断点(实测)。** 在"段标题是正文字号的全大写"这种模板里,段内一个全大写的职位名与段标题排法完全相同。`caps-headings.pdf` 实测:`SENIOR ENGINEER` 把雇主那条和它的两条 bullet 拆开,自成一段。它缺的是留白 —— 标题开启一个块,职位名坐在块里面。

**留白阈值也不能是常数。** 实测正文行距 0.80–1.13 倍、标题 0.93–1.53 倍,两个区间重叠;`LEADERSHIP` 的 1.20 低于我最初写死的 1.25。改成同样按文档自身锚定:阈值取"词表行留白中位数 × 0.85",并以 1.15 为下限兜底。

**词表行排法与正文无异时,不做泛化。** 若被认出的标题既不大、不粗、也非全大写,就没有可泛化的东西 —— 短行全都会匹配。中日文简历没有大小写可读,这一条尤其要紧。此时只认词表。

**guessed 路径要求候选成家族。** 这一层的切分会直接变成结构而没有东西能校对它,所以猜必须是规律而不是集合:排法三种不同的行是三种不同的东西,其中至多一种是段标题。只保留最大的同排法家族。

**置信度不会让切分变软。** 文档要么在这里切开、要么不切,压住一个低置信度边界就等于静默地把两段合并。`confidence` / `evidence` 的作用是把疑虑带下去给后面的阶段 —— **B5 的 `ParseIntegrity` 要记录低置信度边界**,在那之前这个数字没有读者。这一点之前写成"低置信度不做自动处理",与实际行为不符,现已改正。

**分页断点算"上方有空"。** `gapAbove` 在页首恒为 0,第二页顶部的段标题按行距量等于"上面什么都没有"。分页本身就是断点。文档第一行仍然不算 —— 它两样都没有,而这正是把候选人姓名挡在外面的那条规则(姓名是整页最大、最短、最被强调的行)。

`headingRow` **不在** `[fromRow, toRow)` 里:区间是正文。一个 section 覆盖"标题行 ∪ 正文区间",而联系方式那一块是有正文、没标题的 section。

变异验证十五条,逐条转红:忽略大写/粗体一致性、字号只判下界、字号"大于等于即可"、去掉上方留白下限、页首当成有留白、允许 bullet 当标题、允许句末标点、标题长度上限放大、全大写阈值降到 0.05、分页不算留白、泛化时不要求断点、留白阈值改回常数、从正文排法泛化、guessed 不要求成家族、去掉 ≤5 词上限。

测试:`tests/document/section-boundaries.test.ts`(新,27 条)。前 23 条用合成行,最后 4 条走 **`PdfExtractor` → `rows` → `findSectionBoundaries` 的真实链路**,确保真实字号、间距、分页数据与合成行的假设一致。新增 fixture `caps-headings.pdf` —— 正文字号全大写段标题 + 更大的条目标题 + 段内全大写职位名 + 词表外的 `LEADERSHIP`,真实简历的形状,其余 fixture 都不覆盖。

### B2 段内标注 ✅

| 文件 | 改动 |
|---|---|
| `src/document/vocabulary.ts` | `DATE_RANGE` 从 `structure-builder.ts` 搬入,B2 读它、B4 会拿它当分类证据 |
| `src/document/types.ts` | 新增 `RowFeatures`(含 `endsSentence` / `listSeparators`)/ `RowRole` / `RowOwner` / `RowLabel` |
| `src/document/row-labels.ts` | 新增。`labelRows(rows, boundaries): RowLabel[]` |
| `src/document/structure-builder.ts` | 删除 `isDateOnly` 与两个调用点 |
| `tests/fixtures/make-pdfs.py` | 新增 `hanging-indent.pdf` |
| `tests/document/parser.test.ts` | 修掉遗留红测试 |

**没有接线。** 组装器换掉是 B3。真实简历解析结果逐行未变,B2 产出的标签与今天的解析一一对应(6 个 entry:教育 2、经历 2、项目 2)。

**核心发现:`indent` 是这一层最强的信号,而且之前整条管线都没在读它。** 同一段内实测:

| 角色 | 距段落左边界 |
|---|---|
| header | 0.0pt |
| bullet | 1.7pt(标记悬挂在正文左边) |
| continuation | **10.8pt**(与上一行的正文对齐) |

换行的 bullet 要缩进让开自己的标记,这条线比字号(三者都是 1.00)和上方留白(bullet 与 continuation 都是 1.00)都锐利得多。**计划原本寄予厚望的 `gapAbove` 在这一层同样没用**,只留作证据。

**兜底仍然保留**:不是每个模板都做悬挂缩进,此时退回"上一行是被截断还是写完了"——按标点判断。两者不一致时**以缩进为准**:一条 bullet 可以以句号结尾却仍然换行。有测试专门锁这一条。

**带标记的行先判为 bullet,再谈续行。** 标记不含糊而换行含糊:一条 bullet 跟在"被截断的续行"之后,若先走续行判断就会被吃成那条续行的一部分。实测踩到过。

#### 归属逐行判定

`owner: 'section' | 'entry'`,不再用 `bearsEntries` 把整段提前二选一。

- 尚未开启 entry 的 bullet → `owner: 'section'`,**保留 bullet 身份与 `contentFrom`**,不降级成无法区分的散文
- 开启 entry 后的 bullet → `owner: 'entry'`
- `continuation` 继承上一条非续行的 owner,不自己猜:两条换行排法完全相同,差别只在它们是谁的后半句

`SUMMARY` / `SKILLS` 因此可以直接拥有 bullet,不需要 B4 先知道 `section.kind`。

#### `place()` 里判定顺序就是设计本身

1. **纯日期最先**。date-only 行永远不 `startsEntry`:已有 entry 时作为其 header 延续;没有 entry 时作为 `section/info`,置信度 0.35 记下来。
2. **被强调则开新条目**,必须排在"进入条目内部"之前 —— 教育段没有 bullet 来关闭上一个条目,唯一说明第二个学位从哪开始的就是校名被强调。初版把这条排在后面,实测真实简历的第二个学位直接丢了。
3. **带日期范围且(尚无 entry,或上一个 entry 已被 bullet 关闭)则开新条目** —— 整页没有任何东西被强调时,日期是仅有的线索。已有 entry 且其后尚无 bullet 的情形不在此列:那时表头还在写,第 4 条会把它读成表头的一部分。
4. **已有 entry:分 header 还是 info**(见下)。
5. 剩下的既不命名也不开启任何东西,归 `section/info`。

**bullet 之后不再无条件开新条目。** 旧规则"bullet 后的第一行开新条目"会把同一段经历里的第二个项目名当成新雇主,把上一个条目的 bullet 一起带走。现在只有**强证据**才开:被强调,或带非纯日期的日期范围。没有强证据的项目名、说明句留在当前 entry,标成 `entry/info` —— 同一份工作里的多个项目因此扁平地留在一个 entry 里,不需要额外加一层 group。

#### entry 内部:header 还是 info

`within()`。日期给身份,链接/句子/列表给说明,都没有时看在 bullet 的哪一侧。

| 证据 | 结果 | conf |
|---|---|---|
| 带日期范围 | `entry/header` —— 日期和雇主一样是身份 | 0.80 |
| 含链接、邮箱、电话 | `entry/info` —— 是链接不是名字 | 0.80 |
| 以句号等终止标点结尾 | `entry/info` —— 是写完的句子不是标签 | 0.80 |
| ≥2 个逗号 | `entry/info` —— 是一串东西不是名字 | 0.80 |
| 都没有,**在 bullet 之前** | `entry/header` —— 表头还在写 | 0.35 |
| 都没有,**在 bullet 之后** | `entry/info` —— 表头已随 bullet 关闭 | 0.35 |

**无法可靠区分时优先留作 header**(计划要求):把公司名错放进说明会让条目丢掉名字,而一行杂项混在表头里对读者没有代价。两个方向的存疑都写进 `evidence` 并压低置信度。

实测真实简历:6 条非开条目的 header 里,4 条带日期(留 header)、2 条是裸 URL(改判 `entry/info`)。第 5 条 `M.S. ... Sep 2025 - Expected Jun 2027` 落到 0.35 —— `DATE_RANGE` 认不出中间夹着 `Expected` 的范围,于是走了保守默认。标签仍是 header,正确,但这条正则是 B4 要看的。

#### 仍然保留的唯一段级判断

**没有标题的前导块不开启任何 entry。** 这是关于**切分**而非关于**内容**的事实:条目属于介绍过它的段落,而没人介绍过的块是页眉——姓名、一行链接、也许一句话。反过来读,姓名是整页最大最短的行,会变成一个雇主,候选人自己的邮箱被当成它下面的成绩。该块里的 bullet 仍是 `section/bullet`,身份不丢。

**`isDateOnly` 已从 `structure-builder.ts` 删除**,发现搬进 `place()`。A1 之后这个补丁可证明多余(关掉重解析输出逐行相同),但规则留着——没有任何东西保证模板不会把日期单独放一行。`parser.test.ts` 里专测它的那条测试一并删除:主题搬到了 `row-labels.test.ts`,而且它恒真(fixture 6 个 block 字号中位数正好 12、日期行也是 12,`isEmphasized` 永远为假)。

**一个敞口,B3 关闭。** 旧组装器的模型标注路径现在没有 date-only 守卫。PDF 走不到(A1 后日期被拼回所在行),Markdown / DOCX 不带字号字重也走不到,只有模型主动标 `startsEntry` 时才可能。B3 把标注改走 B2 就关上。

变异验证二十一条,逐条转红。

- 初版七条:去掉悬挂缩进判断、去掉句末标点兜底、去掉只有日期的例外、bullet 之后不开新条目、无标题块也承载条目、所有段都承载条目、标注越过区间右界。
- 归属改版七条:bullet 恒为 entry 所有、continuation 不继承 owner、去掉 date-only 分支、date-only 反过来开条目、去掉"被强调优先"、无标题块也开条目、bullet 不给 `contentFrom`。
- header/info 改版七条:bullet 之后什么都能开条目、日期不算身份、链接不算说明、句子不算说明、列表不算说明、bullet 前默认 info、bullet 后默认 header。

测试:`tests/document/row-labels.test.ts`(34 条)。29 条用合成行(缩进值取自实测),5 条走 **`PdfExtractor` → `rows` → `findSectionBoundaries` → `labelRows` 的真实链路**。新增 fixture `hanging-indent.pdf`:悬挂缩进的换行、SUMMARY 的 section-level bullet、EXPERIENCE 的 entry bullet,以及纯日期的两个位置(bullet 之后接续 entry 表头、无 entry 时归 section)。

### B3 纯状态机组装 ✅(含接线)

| 文件 | 改动 |
|---|---|
| `src/domain.ts` | 新增 `SectionBullet`;`ResumeSection` 新增 `infoLines?` / `bullets?`;`ResumeEntry` 新增 `infoLines?`;`SourceFormat` 旧值标 legacy |
| `src/document/assemble.ts` | 新增。`assemble(rows, boundaries, labels): ResumeSection[]` |
| `src/document/parser.ts` | 只剩 PDF 一个抽取器;`fromRows()` 串起 B1→B2→B3;`provisionalKind()` 是 B4 的占位 |
| `src/document/types.ts` | 新增 `LabelledRow`;删除 `LineRole` / `LabelledLine` / `SectionCandidate` / `SectionDetector` / `StructureBuilder` / `DocumentSegmenter` |
| `src/document/render.ts` | 输出 section info、section bullet、**entry info** |
| `src/tools/analyze-format.ts` | `scoreConsistency` 改从 `headerLines` 现场派生日期;全局检查补 entry info 与 section bullet |
| **删除** | `extractors/markdown.ts`、`extractors/docx.ts`、`section-detector.ts`、`structure-builder.ts`、`segmenter.ts`、`segmenterPrompt` |
| 入口 | `upload.ts` 只收 `.pdf`;`granted-paths.ts` 只认 `.pdf`;`parse-resume.ts` 不再建议 `.docx`,不再接模型标注器 |

**`assemble` 的入参窄化成 `LabelledRow`(只有 `text` 和 `span`)。** "不读字号、不读缩进"因此是编译期保证,也是没有几何信息的格式将来能满足的类型。

**`kind` 不由 B3 设定**,一律留 `'other'`,由 `provisionalKind()` 按标题词表临时填,B4 替换。

**continuation 接到"上一行去了哪里"而不是"上一行是什么 owner"** —— 五种落点各有一条测试。**没有标签的行不放置**,留给 B5 的覆盖检查。

变异验证六条:忽略 owner、忽略 `startsEntry`、忽略 `contentFrom`、continuation 一律归 section info、放置未标注的行、section bullet 降级成 info。

### B3 接线时补的三件事

**一、`bold` 之前恒为 false。** `pdf.ts` 拿 `item.fontName` 匹配 `/bold|black|heavy/i`,但 pdf.js 给嵌入子集字体的是生成 id(`g_d0_f1`)。两份真实简历上这个信号从来没有为真过。修法:每页先 `getOperatorList()` 填充 `commonObjs`,再解析真名(`MHZSXI+TimesNewRomanPS-BoldMT`);解析不到时回落为非粗体。

**二、bold 变活之后 `setApart` 过火了。** 实测:两份简历的 EXPERIENCE 都从 2 条目裂成 4 —— 这个模板里雇主行和职位行**都是粗体**。

改成**entry header block**:条目标题是一个块(雇主、职位、日期、地点),**只有块的第一行 `startsEntry`**。三条转移:

- 尚无条目开着 → 被强调即开
- 上一条目已被 bullet 关闭 → 被强调即开
- **条目开着且尚无 bullet → 被强调还不够,要有第二种边界证据:留白**

**排版相似不能单独开条目。** 同字号同粗体只说明设法像,很多模板的雇主行和职位行就设成一样。分开两个块的是**空气**:实测两份简历,同一个表头内部的行距是 1.13,下一个条目起始行是 1.39。这也是**唯一**能把两个无 bullet 的学位分开的证据。

留白判据两半都要:既要多于一个普通行距(1.15),又要多于**这个表头自己**的内部行距——只有前者,一个行距设得宽松的表头会自己裂开。**紧跟开启行的那一行永远不开**,因为那个间距正是用来学习的基准。

**`leading.bold` 没有采用。** 试过,会让 SKILLS 三行全变条目:`Programming:` / `LLM & Agents:` / `Post-Training & Optimization:` 都是粗体前缀,而 `dominant` 按字符数投票正好挡住它们。

**三、`entry.infoLines` 之前进不了 agent。** `renderEntry()` 只渲染 header 和 bullets,项目描述、技术栈、仓库链接虽然被 B2/B3 存下来了,模型看不到;更糟的是"只有 info 没有 bullet"的条目会被标成 `no bullets — nothing for a line reader to score`,与实际内容矛盾。现在 info 排在 header 与 bullets 之间,且只有两者都空时才说那句话。

变异验证三条:不解析字体名、去掉 header block 约束、entry info 不进渲染。

### 解析结果(实测)

| 段 | `resume_example.pdf` | 真实简历 |
|---|---|---|
| 前导块 | 0 条目 / 2 info | 0 条目 / 2 info |
| EDUCATION | **2 条目** | **2 条目** |
| EXPERIENCE | **2 条目** | **2 条目** |
| PROJECTS | 0 条目 / 4 info / 6 bullet ✗ | **2 条目** |
| SKILLS | **0 条目** / 3 info | **0 条目** / 3 info |

新增 fixture `dated-projects.pdf`(两个带合法虚构年份的项目、各自带 bullet)端到端断言 2 条目,补上 `resume_example.pdf` 覆盖不到的形状。原 PDF 不动,继续用于真实嵌入字体的测试。

`resume_example.pdf` 的 PROJECTS 是 fixture 的问题,不是解析器的:项目标题行的字号与正文相同、粗体只是前缀(`dominant` 判为常规),唯一能救它的是行尾日期 `Aug 20XX - Present` —— 而 `20XX` 不是年份。真实简历同位置是 `Aug 2026 - Present`,走日期规则正确开条目。**该 fixture 的文本是十六进制字形索引,无法就地改年份,需要用源文件重新导出。**

## 验证方式(全部本地,不调模型)

```bash
export PATH=/Users/sean/homebrew/opt/node@24/bin:$PATH
npx tsc --noEmit
npx vitest run
npx tsx tmp/ats-probe.mts <真实简历 PDF 路径>     # 解析全链路 + 格式打分
npx tsx tmp/line-probe.mts <同上>                # pdf.js 原始片段,带基线和 EOL 标记
npx tsx tmp/block-probe.mts <同上>               # 抽取后的 blocks,带 y/x/字号
npx tsx tmp/fixture-probe.mts                    # fixture 的 quality 与 warnings
npx tsx tmp/assemble-probe.mts <同上>            # 整条链:段 / 条目 / bullet / info
npx tsx tmp/row-probe.mts <同上>                 # 重建后的 VisualRow,带页码/基线/字号
npx tsx tmp/feature-probe.mts <同上>             # 每行的版面特征:字号比/大写率/gapAbove/词数
npx tsx tmp/boundary-probe.mts <同上>            # B1 切出的区间,带置信度与证据
npx tsx tmp/role-probe.mts <同上>                # 段内每行的 x/缩进/字号比/bullet/日期
npx tsx tmp/label-probe.mts <同上>               # B2 的标注,带置信度与剥好的正文
```

真实简历的路径记录在 `data/sessions.db` 的 `source_path` 列;`/tmp` 下那几份已被系统清掉,还在的是 `~/Downloads/sean_0908.pdf`。`tmp/` 已被 gitignore。

## A1 要移动的基线(实测)

A1 之前,真实简历的项目段解析如下 —— 这是 `isDateOnly` **打上补丁之后**的结果:

```
[project] entries=2
    s3:e0  dates="Aug 2026 - Present"   bullets=3   headerLines[0] = 项目名那一行
    s3:e1  dates="Feb 2026 - Jul 2026"  bullets=3
```

把 `isDateOnly` 的两个调用点暂时关掉,会退回 4 个条目(两个空壳 + 两个以日期为名)。

**A1 的目标是:关掉 `isDateOnly` 也能得到 2 个条目。** 验证时可以临时关掉它比对,但**比对完必须原样还原** —— 删除它是 B2 的事。

根因(实测,`tmp/line-probe.mts` 可复现):pdf.js 的绘制顺序不等于视觉顺序。条目标题行最右段(日期)在下一行之后才被绘制,`mergeIntoLines` 只与紧邻的上一个片段比基线,于是它自成一行。该片段字号大于标题段,`isEmphasized` 因此挑中它而非标题。

## 工作区状态

**有大量与本重构无关的未提交改动**,来自更早的几批工作(两种报告、prompt 调整、generate_report 选择逻辑等)。动手前先 `git status`,不要把它们和本重构混为一谈,也不要顺手清理。

当前 B2 提交后全量测试已转绿。下一次改动必须继续保留完整测试与真实 PDF 链路验证。

## 工作约定

- **严格按阶段**。当前阶段之外的文件不碰,哪怕它显然要改。真有妨碍就说出来,让 Sean 决定。
- **任何花钱的测试都要先确认**。本地 vitest / tsc / tsx 探针随便跑。完整四 agent 诊断约 $0.13–0.17、10 分钟,必须先问。
- **源文件里不出现简历原文**。注释举例用通用描述。
- **提交要等 Sean 说**。提交信息用 `add: xxx` / `fix: xxx`。
- 回复用中文,代码注释用英文。
