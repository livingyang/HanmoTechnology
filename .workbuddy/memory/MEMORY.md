# MEMORY.md · HanmoTechnology 项目长期记忆

## 项目身份

- **仓库**：github.com/livingyang/HanmoTechnology（公开，仅 main 分支）
- **Pages**：GitHub Pages 项目站点，默认域 `livingyang.github.io/HanmoTechnology/`，HTTPS 已开
- **当前 Pages 源**：Deploy from a branch → `main` / `/docs`（计划改为 GitHub Actions）

## 公司信息（权威数据源：`COMPANY.md`）

- 中文全称：**深圳市汉末科技有限公司**
- 英文全称：**Shenzhen Hanmo Technology Co., Ltd.**
- 简称：汉末科技 / Hanmo Technology（注意是"汉末"不是"汉默"）

## 业务

- 独立开发者工作室，所有 demo 仅用于展示个人能力
- UE5 游戏开发（HanmoSekiro，类魂动作）
- UE5 工具链 / 插件研发（SmartNavigationWidget，已上架 Fab）
- 技术栈：UE 5.8 + Puerts（TS）+ Vue 3

## 仓库约定

- 所有文档 / 文件名一律英文，文件内容中文
- 仅用 `.md` 格式，不生成 Office 二进制
- `tools/` 是 Fab 打包脚本 + 部署校验脚本的领地，主页改造时不要碰

## 进行中：仓库 → 公司主页

- ✅ Vue 3 + Vite + TS + GitHub Actions（已落地）
- ✅ website/ 工程已搭好（22 个文件，含 6 个 section、products.json 集成、iframe 嵌入）
- ✅ npm install + npm run build 实测通过（vue-tsc + vite v6.4.3，产出 76KB JS + 8.5KB CSS）
- ✅ 本地 2 个 commit 已就绪（212f5df + 7ae5497，ahead of origin/main by 2）
- ✅ DEMO-HOSTING v3.1 已落地（v3.0 的 publish-demo.sh 已废弃）
- ✅ Hub `.github/workflows/pages.yml`：校验 demos/ → 构建 website/（`npm ci` + `npm run build`）→ 一次性 Pages 部署
- 待执行：用户手动 `git push origin main` → 切 Pages Source 到 **GitHub Actions** → 验证线上

## Web 试玩产品托管（DEMO-HOSTING v3.1）

- 规范文件：`HanmoTechnology/DEMO-HOSTING.md`（v3.1，替代 v3.0 的 publish-demo.sh 方案）
- 注册表：`HanmoTechnology/products.json`（用户手维护或 AI 编辑）
- **产品仓零侵入原则**（用户明确要求）：产品仓**不写任何 manifest.json / thumbnail.svg / publish-demo.yml**，build 出 `dist-web/` 即可；所有 Hub 接入相关文件只在 Hub 仓里
- 拓扑（v3.1，已废弃 v1.0 各产品自带 Pages、v2.0 zip 中转、v3.0 AI agent publish-demo 脚本）：
  - 用户工作空间切到产品仓（HanmoXxx）
  - 用户告诉 AI Hub 仓本地路径，AI 读 DEMO-HOSTING.md
  - AI 在产品仓 build 出 `dist-web/`
  - AI 跨仓 cd 到 Hub 仓 `cp -r` 到 `demos/<slug>/`
  - AI 编辑 Hub 仓的 `products.json`
  - 用户手动 `git add + commit + push` Hub 仓
  - Hub `pages.yml` 自动部署（demos/ + website/）
- 路径：`https://livingyang.github.io/HanmoTechnology/demos/<slug>/`
- 体积阈值：单产品 ≤ 100MB 完美；100-200MB 可接受；>200MB 不入库（pages.yml 部署时校验）
- Hub 校验脚本：`tools/validate-manifests.mjs`，部署前扫所有 `demos/*/manifest.json`，缺字段阻塞部署
- manifest schema：v3.0，必填字段在 DEMO-HOSTING.md §3
- **状态机**：独立开发者 demo 场景下所有产品 `status` 统一填 `alpha`；不要做 alpha/beta/released 多版本切换（用户明确否决，理由是 demo 仅展示个人能力）
- 当前已注册产品：**HanmoIdleMMO（v0.0.1, alpha, 542KB, 7ae5497 已首次提交）**
- `HanmoSekiro` 是 UE5 本地项目，**未规划 Web 版**，不要加进注册表

## website 构建踩过的坑（重要！下次少走弯路）

- **`website/tsconfig.json` 的 `include` 必须含 `env.d.ts`**，否则 vite/client 类型不注入，`import.meta.env` 报 TS2339
- **`public/` 资源用 `${import.meta.env.BASE_URL}<filename>`**，不要 `import` 也不要相对路径
- **`website/.gitignore` 必须有**（`dist/`、`*.tsbuildinfo`、`.vite/`），否则 build 产物会污染仓库
- **`package-lock.json` 必须 commit**（pages.yml 用 `npm ci`，没 lockfile 会装到不同版本）
- **多行 commit message 用 `git commit -F file` + here-doc**，别在 `git commit -m "..."` 双引号里塞 `\n`（Windows bash 转义陷阱，字面 `\n` 会被写入 commit message）

## 用户偏好（值得记住）

- **轻量优于重**：每轮迭代都倾向于删复杂的东西（自动同步脚本、版本切换、状态机），而不是加
- **零侵入**：不要主动改产品仓，所有接入逻辑收敛在 Hub
- **手动优于自动**：demo 同步场景用户宁可自己手动 cp + push，也不想要自动化（理由：可读、可控、零运维）
- **「不需要 X」的解读**：用户说不需要某个功能时是真的不需要，不要保留兜底逻辑也不要留以备扩展
- **不主动发起大型构建**：除非用户**明确指令**"由你执行 npm run build" 才执行；编译报错定位后提示用户改源码，由用户自己触发重编
- **远程推送**：由用户手动 `git push`