# MEMORY.md · HanmoTechnology 项目长期记忆

## 项目身份

- **仓库**：github.com/livingyang/HanmoTechnology（公开，仅 main 分支）
- **Pages**：GitHub Pages 项目站点，默认域 `livingyang.github.io/HanmoTechnology/`，HTTPS 已开
- **当前 Pages 源**：Deploy from a branch → `main` / `/docs`（GitHub 内置 Branch 部署，无 Action 工作流）

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

- ✅ Vue 3 + Vite + TS（已落地，website/ 6 个 section，DemoCard 改新窗口打开后无 iframe）
- ✅ 主页构建实测通过（vue-tsc + vite，76KB JS + 8.5KB CSS，gzip 后 30KB）
- ✅ DEMO-HOSTING v4.0（v3.1 的 Actions 路线被废，回归本地构建 + Pages 内置 Branch 部署）
- ✅ 主页对外邮箱改为 hanmotech@agent.qq.com（commit d653ebe）
- ✅ 主页去除所有 GitHub/源码入口（ContactSection / SiteFooter / Projects / Products）
- ✅ 品牌图标落地：favicon.ico + apple-touch-icon + 透明 logo.png（mark 设计图派生）
- ✅ manifest v3.0 schema 收尾：DEMO-HOSTING.md §3 拆为必填 9 / 可选 5 / 禁止 5
  + validate-manifests.mjs 加 FORBIDDEN_FIELDS 检测（warning 不阻塞，ce11fd1）
- 待 push：`ce11fd1` → 用户手动 `git push origin main` → Pages 自动 Branch 部署

## Web 试玩产品托管（DEMO-HOSTING v4.0）

> **v4.0 = v3.1 拓扑 + 合并到 docs/ + 去 Actions**。中间产物与发布根收口到 `docs/` 单一目录。

- 规范文件：`HanmoTechnology/DEMO-HOSTING.md`（v4.0，已重写）
- 注册表：`HanmoTechnology/products.json`（路径含 `docs/`，用户手维护或 AI 编辑）
- **产品仓零侵入原则**：产品仓**不写任何 manifest.json / thumbnail.svg / publish-demo.yml**，build 出 `dist-web/` 即可；所有 Hub 接入相关文件只在 Hub 仓里
- 拓扑（v4.0，已废弃 v1.0 各产品自带 Pages、v2.0 zip 中转、v3.0 publish-demo.sh、v3.1 Actions 工作流）：
  - 用户工作空间切到产品仓（HanmoXxx）
  - 用户告诉 AI Hub 仓本地路径，AI 读 DEMO-HOSTING.md §4.1~§4.3
  - AI 在产品仓 build 出 `dist-web/`，再跨仓 `cp -r` 到 Hub 的 `docs/demos/<slug>/`
  - AI 编辑 Hub 仓的 `products.json`（路径含 `docs/`）
  - **AI 在 Hub 仓再 build 主页**：`cd website && npm run build` → `cp -r website/dist/. ../docs/`
  - 用户手动 `git add docs/ + commit + push` Hub 仓
  - GitHub Pages 内置 Branch 部署（无需 Actions）
- 路径：`https://livingyang.github.io/HanmoTechnology/demos/<slug>/`（物理位置在 `docs/demos/<slug>/`）
- 体积阈值：单产品 ≤ 100MB 完美；100-200MB 可接受；>200MB 不入库
- Hub 校验脚本：`tools/validate-manifests.mjs`，commit 前手动跑扫 `docs/demos/*/manifest.json`，缺字段 exit 1
- manifest schema：v3.0，DEMO-HOSTING.md §3.1/§3.2/§3.3 拆为必填 9 / 可选 5 / 禁止 5
  - 必填：schemaVersion / slug / name / nameEn / tagline / thumbnail / version / status / entry
  - 可选：tags / updatedAt / embeddable / sandbox / description（embeddable/sandbox 已不消费，新 demo 可省略）
  - 禁止：homepage / repository / repo / source / code（违反"主页禁源码"规则，commit 95114d8）
  - validate-manifests.mjs 检测禁止字段：出现即 warning（不阻塞 commit）
- **状态机**：独立开发者 demo 场景下所有产品 `status` 统一填 `alpha`；不要做 alpha/beta/released 多版本切换（用户明确否决，理由是 demo 仅展示个人能力）
- 当前已注册产品（3 个）：
  - **HanmoIdleMMO**（v0.0.1, alpha, 542KB）— 旗舰 Vue3+Vite 放置 MMO
  - **HanmoArcomage**（v0.1.0, alpha）— Vue3+PlayCanvas 卡牌爬塔（韩文牌塔牌意背景，已改品牌"汉墨→汉末"）
  - **HanmoWesnoth**（v0.1.0, alpha, 58.9MB）— Vue3+PlayCanvas 回合制战棋（GPL-2.0+ 衍生，含关于/许可区块）
- `HanmoSekiro` 是 UE5 本地项目，**未规划 Web 版**，不要加进注册表

## website 构建踩过的坑（重要！下次少走弯路）

- **`website/tsconfig.json` 的 `include` 必须含 `env.d.ts`**，否则 vite/client 类型不注入，`import.meta.env` 报 TS2339
- **`public/` 资源用 `${import.meta.env.BASE_URL}<filename>`**，不要 `import` 也不要相对路径
- **`website/.gitignore` 必须有**（`dist/`、`*.tsbuildinfo`、`.vite/`）；**`dist/` 始终不入库**——它是中间产物，`cp` 到 `docs/` 才是入库的发布根
- **多行 commit message 用 `git commit -F file` + here-doc**，别在 `git commit -m "..."` 双引号里塞 `\n`（Windows bash 转义陷阱，字面 `\n` 会被写入 commit message）。**here-doc + `&&` 链混用**也容易 EOF 误截断——本轮第一次提交踩坑：临时文件里末尾被混入了 `git commit -F ... && rm ...` 字面命令。正确做法：先用 Write 工具写临时文件，再单独跑 `git commit -F tmpfile`，**不要写在 `cat > tmp <<EOF && git commit` 一行里**
- **YAML 工作流文件不能用 build 通过来推断合法**——pages.yml 那次本地 build 通过但 Pages 红，是因为 YAML 缩进错。改完任何工作流 / YAML 都用解析器（`python -c "import yaml; yaml.safe_load(...)"`）跑一遍
- **AI commit message 应与 git diff 一致**：commit 写"改了 A/B/C"时，提交前必须 git diff 核对每条都真改过。HanmoWesnoth AI 的 ab05617 写"汉墨→汉末"但 products.json 漏改 → 主页 /play 卡片对外显示"汉墨牌塔"，manifest 写"汉末牌塔"，品牌不一致

## 用户偏好（值得记住）

- **轻量优于重**：每轮迭代都倾向于删复杂的东西（自动同步脚本、版本切换、状态机），而不是加
- **零侵入**：不要主动改产品仓，所有接入逻辑收敛在 Hub
- **手动优于自动**：demo 同步场景用户宁可自己手动 cp + push，也不想要自动化（理由：可读、可控、零运维）
- **「不需要 X」的解读**：用户说不需要某个功能时是真的不需要，不要保留兜底逻辑也不要留以备扩展
- **不主动发起大型构建**：除非用户**明确指令**"由你执行 npm run build" 才执行；编译报错定位后提示用户改源码，由用户自己触发重编
- **远程推送**：由用户手动 `git push`