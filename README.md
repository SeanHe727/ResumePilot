# ResumePilot

上传简历（可选附带 JD），自动诊断质量问题，并对每一条 bullet 给出 before/after 改写建议。

底座是一套**手写的 10 层 Harness**——Agent Loop、tool dispatch、流式解析、上下文压缩、权限门禁全部自己实现，
不用 LangChain、不用 LangGraph、不用 ORM。架构继承自 zero2Agent「面试诊断 Agent」Final Project，
原文存档在 [`docs/reference/`](docs/reference/)。

## 它诊断什么

不是"帮你润色一下"，而是对照可引用的公开规范逐条指出问题、说明为什么是问题、给出改法：

- **Google XYZ 公式**——`Accomplished [X] as measured by [Y] by doing [Z]`，成果 / 度量 / 方法三段是否齐全
- **Harvard FAS 简历规范**——禁人称代词、禁叙述体、主动优于被动、"express not impress"、事实可量化
- **FAANG bullet 惯例**——动词 + 做了什么 + 用了什么技术 + 可度量影响；剔除 "responsible for" 这类旁观者语言

## 架构：10 层

| # | 层 | 职责 | 目录 |
|---|---|---|---|
| 1 | Tools | 原子能力，统一 schema，永不抛异常 | `src/tools/` |
| 2 | Skills | Tool 的有意义组合，可被关键词触发 | `src/skills/` |
| 3 | Query Engine | Provider 抽象 / 流式 / 重试 / 限流 / 缓存 / 路由 / 预算 | `src/query-engine/` |
| 4 | Context | 5 层分区预算 + 3 级压缩 | `src/context/` |
| 5 | Memory | 跨会话画像、弱点趋势，白名单写入 | `src/memory/` |
| 6 | Permission | 默认拒绝 + 风险分级 + 可逆 PII 脱敏 + 审计 | `src/permission/` |
| 7 | Session | 状态机 + checkpoint + 简历版本回溯 | `src/session/` |
| 8 | Command | `/` 前缀确定性入口，在进入 LLM 之前拦截 | `src/command/` |
| 9 | Hook | pre/post 管线，把治理逻辑从 Dispatcher 里剥出来 | `src/hooks/` |
| 10 | Sub-agent | Agent-as-Tool，独立 Context，并发池 | `src/agent/` |

配套模块：`src/document/`（简历解析管线）、`src/knowledge/`（知识库）、`src/db/`（SQLite）。

## 开发路线

| Phase | 内容 | 对应原文 | 状态 |
|---|---|---|---|
| 0 | 脚手架与接口契约 | 02 | 进行中 |
| 1 | Query Engine | 03 | |
| 2 | 简历解析管线 | 替换 10 | |
| 3 | 知识库（12 维语料 + FTS5 + embedding） | 05 | |
| 4 | Tools & Skills | 04 | |
| 5 | Context & Memory | 06 | |
| 6 | Permission & Session | 07 | |
| 7 | Hook & Command | 08 | |
| 8 | Sub-agent 编排 | 09 | |
| 9 | CLI 组装、Demo、测试 | 11 | |

与原项目的顺序差异：简历解析（Phase 2）从原文的第 10 篇提前。
原项目的音频是可选入口，文字稿可以直接粘贴；简历的 PDF 解析是必经之路，
不先做，后面每一层都没有数据可跑。

## 环境要求

- **Node.js >= 22.12**（`better-sqlite3` / `commander` / `chalk` 均要求 >= 22）
- pnpm

若用 Homebrew 安装 `node@24`，它是 keg-only 的，不会链接到 `bin/`，需要手动加进 PATH：

```bash
export PATH="$(brew --prefix)/opt/node@24/bin:$PATH"
```

另外 Homebrew 从源码编译 Node 时会链接到 brew 自己的 `openssl@3`，
若其 post-install 步骤失败，`pnpm install` 会报 `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`——
执行 `brew postinstall openssl@3` 补上 `cert.pem` 软链即可。

## 快速开始

```bash
pnpm install
cp .env.example .env      # 填入 API Key
pnpm build-kb             # 构建知识库
pnpm start                # 启动交互式会话
```

## 技术选型

| 用途 | 选择 |
|---|---|
| Runtime | Node.js + TypeScript 7 (ESM) |
| Agent Loop | 手写，无框架 |
| LLM | `@anthropic-ai/sdk`（主力 `claude-opus-5`）+ `openai`（embedding / DeepSeek 兼容） |
| 存储 | `better-sqlite3` — session / memory / cache / audit / knowledge 五合一 |
| 检索 | SQLite FTS5 全文 + embedding 语义，双通道合并 |
| CLI | Commander + chalk + ora |
| 测试 | Vitest |

**不用什么**：不用 LangChain（模型调用、tool schema、output parser 全部手写，保持透明）；
不用 LangGraph（状态机用 TypeScript 原生实现）；不用 ORM（SQLite 直接写 SQL）。
