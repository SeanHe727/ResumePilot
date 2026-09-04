# 参考资料

本目录是 zero2Agent「面试诊断 Agent」Final Project 11 篇文章的正文存档（HTML 转 Markdown）。

ResumePilot 的架构直接继承自这套 10 层 Harness 设计，实现每一层时应对照这里的原文。
图片（drawio 架构图）未包含，正文中以 `[IMAGE: ...]` 标记其位置。

| 文件 | 对应 ResumePilot |
|---|---|
| `01-prd.md` | 产品定义。领域从"面试回答"换成"简历" |
| `02-architecture.md` | 目录结构与 10 层接口契约，几乎原样沿用 |
| `03-query-engine.md` | 原样沿用，仅更新 SDK 版本与模型 ID |
| `04-tools-skills.md` | Tool/Skill 接口沿用，具体工具做领域替换 |
| `05-knowledge-base.md` | 解析器与双通道检索沿用，语料自建 |
| `06-context-memory.md` | 原样沿用 |
| `07-permission-session.md` | 沿用，PII 脱敏升级为可逆占位符映射 |
| `08-hook-command.md` | 沿用，命令集做领域替换 |
| `09-sub-agent.md` | 沿用，子 Agent 角色做领域替换 |
| `10-stt-speech.md` | **替换**为文档解析管线（PDF/DOCX/MD） |
| `11-deploy-demo.md` | 沿用 |
