# 汉末科技 Web 试玩产品托管规范

> 多个产品的 Web 构建产物集中托管在 HanmoTechnology 的 `docs/demos/` 目录，
> 主页 Vue 工程的 `dist/` 也合并进 `docs/`，整个 `docs/` 是 GitHub Pages 发布根。

| | |
|---|---|
| **版本** | 4.3（v4.2 + §9 离线包走官网仓 Release + `tools/publish-release-direct.ps1` 可双击发布脚本） |
| **生效日期** | 2026-09-05 |
| **线上地址** | `https://livingyang.github.io/HanmoTechnology/demos/<slug>/` |
| **Hub 仓** | `github.com/livingyang/HanmoTechnology` |
| **产品仓** | `github.com/livingyang/<HanmoXxx>`（独立仓库，互不依赖） |

> 注：Pages 把 `docs/` 当发布根，所以线上 `URL` 里的路径仍是 `/demos/<slug>/`，物理位置在 `docs/demos/<slug>/`，URL 不变。

---

## 1. 工作流（一句话）

**工作空间切到产品仓（HanmoXxx） → AI 按本文档 §4.1~§4.4 在产品仓 build + 跨仓 cp 产物、跨仓 `cp` 主页 `dist`、跨仓编辑 products.json → 你在 Hub 仓（HanmoTechnology）手动 `git add + commit + push` → GitHub Pages 内置 Branch 部署自动重部署。**

- AI 在产品仓工作空间下操作，Hub 仓（HanmoTechnology）的本地路径需要你告诉 AI（两个仓都在 `C:\developer\hanmo\` 下面）。
- AI 不需要 Hub 仓的 git push 权限；`git push` 这一步由你手动执行。
- 没有产品仓的 GitHub Actions 工作流，没有 Hub 端的自动脚本；`build` 和 `cp` 是 AI 在本地跑命令完成的。
- 主页样式调试走 `cd website && npm run dev`（Vite HMR），不要走 Pages 远程调试——所见即所得。

---

## 2. 各产品仓需要做什么

只需要 build 出符合规范的产物目录（`dist-web/`）。**产品仓本身不需要任何 HanmoTechnology 相关的文件、workflow、脚本**。

### 2.1 产物目录结构

```
<product>/dist-web/                      ← 各产品仓 build 输出
├── index.html                            ← 入口（必需）
├── manifest.json                         ← 自描述（必需，见 §3）
├── thumbnail.<ext>                       ← 缩略图，png/jpg/webp/svg（必需）
├── assets/...                            ← 其它静态资源
└── ...
```

### 2.2 Vite 用户配置建议

`vite.web.config.ts` 设相对路径 base，避免子目录间相互污染：

```ts
export default defineConfig({
  base: './',
  // ...
})
```

如需精确指向 Hub 子路径，可写绝对路径：

```ts
base: '/HanmoTechnology/demos/<slug>/'
```

---

## 3. manifest.json schema（v3.0）

`docs/demos/<slug>/manifest.json` 是 demo 产物的元数据描述文件，由 validate 脚本校验。

字段分三类。`tools/validate-manifests.mjs` 的校验规则跟下表 1:1 对齐。

### 3.1 必填字段（9 个，缺一即失败）

| 字段 | 类型 | 说明 |
|---|---|---|
| `schemaVersion` | string | manifest schema 版本号，**当前固定填 `"3.0"`**；其他版本给 warning |
| `slug` | string | **必须等于 `docs/demos/` 下的目录名**（如 `HanmoIdleMMO`），不一致即失败 |
| `name` | string | 中文展示名（如 `"汉末放置 MMO"`）。Hub 主页 `/play` 卡片读这个 |
| `nameEn` | string | 英文展示名（用于 URL / 日志 / 兼容性） |
| `tagline` | string | 一句话简介 |
| `thumbnail` | string | 缩略图文件名（**相对 demo 产物目录**），如 `"thumbnail.svg"`；文件必须存在 |
| `version` | string | 语义化版本号，如 `"0.1.0"` |
| `status` | string | 必须是 `alpha` / `beta` / `released` / `archived` 之一。**独立开发者 demo 站统一填 `alpha`**，不做多版本切换 |
| `entry` | string | 入口 HTML 文件名（**相对 demo 产物目录**），如 `"index.html"`；文件必须存在 |

### 3.2 可选字段（6 个）

| 字段 | 类型 | 说明 |
|---|---|---|
| `tags` | string[] | 标签数组（筛选/展示用），如 `["idle", "vue3"]` |
| `updatedAt` | string | 此次更新日期，`YYYY-MM-DD`；与 `products.json` 顶层同名字段独立维护 |
| `embeddable` | boolean | 是否可被主页 iframe 内嵌。**当前 DemoCard 改为新窗口打开后已不消费**，可省略 |
| `sandbox` | string | iframe sandbox 字符串。**同上，已不消费**，可省略 |
| `description` | string | 较 `tagline` 更长的描述（暂未在主页展示） |
| `downloads` | object[] | **离线包清单**（Electron zip / 未来其他平台），见 §9。每个对象含 `os` / `url` / `size` / `updatedAt` 四个键 |

> 旧 manifest 里残留的 `embeddable` / `sandbox` 暂不清（向后兼容，新 demo 不再需要）。Hub 维护 `products.json` 时也不用再写这两个字段。

### 3.3 禁止字段（出现即 warning，违反"主页禁源码"规则）

| 字段 | 原因 |
|---|---|
| `homepage` | 主页对外已禁止任何源码/仓库入口（commit `95114d8`）。manifest 是随 demo 上线的公开文件，若含 `homepage` 可能在未来被读出来泄露仓库 URL。**所有 demo 的 manifest 必须去掉这个字段** |
| `repository` / `repo` / `source` / `code` | 同上，任何指向产品仓代码位置的字段都禁止；产品仓地址是内部工作流信息，不应对外 |

### 3.4 字段示例（最小可用）

```json
{
  "schemaVersion": "3.0",
  "slug": "HanmoIdleMMO",
  "name": "汉末放置 MMO",
  "nameEn": "Hanmo Idle MMO",
  "tagline": "放置类 MMO 单机版",
  "thumbnail": "thumbnail.svg",
  "version": "0.0.1",
  "status": "alpha",
  "tags": ["idle", "mmo", "vue3"],
  "updatedAt": "2026-09-05"
}
```

### 3.5 历史字段备注

- 早期 manifest 曾含 `embeddable` / `sandbox`（用于当时 iframe 内嵌）。DemoCard 改新窗口打开后业务已不消费。
- 早期 manifest 含 `homepage`（产品仓 URL）。**这是 v3.0 schema 禁止字段的来源——已记入 §3.3**，必须去掉。

---

## 4. 一次性发布流程

> 假设同时更新 N 个产品，每个产品独立走一遍 §4.1~§4.3，最后你在 Hub 仓手动整合 + push（§4.4 & §4.5）。
>
> **图例**：[AI·产品仓] = AI 在产品仓工作空间下执行；[AI·Hub仓] = AI 通过绝对路径跨到 Hub 仓执行；[你·Hub仓] = 你手动 cd 到 Hub 仓执行。

### 4.1 [AI·产品仓] build 产物

```bash
cd <产品仓路径>                  # 例如 C:/developer/hanmo/HanmoIdleMMO
git pull
npm install                      # 第一次或依赖变了才需要
npm run build:web                # 输出到 dist-web/
```

完成后产物在 `<产品仓路径>/dist-web/`，含 `index.html`、`manifest.json`、`thumbnail.*`。

### 4.2 [AI·Hub仓] 复制产物

```bash
HUB=<Hub 仓绝对路径>             # 例如 C:/developer/hanmo/HanmoTechnology
cd $HUB
git pull

# 单个产品：覆盖 docs/demos/<slug>/
rm -rf docs/demos/HanmoIdleMMO
cp -r <产品仓路径>/dist-web docs/demos/HanmoIdleMMO

# 多个产品一次性复制
for slug in HanmoIdleMMO HanmoXXX HanmoYYY; do
  rm -rf $HUB/docs/demos/$slug
  cp -r <对应产品仓路径>/dist-web $HUB/docs/demos/$slug
done
```

### 4.3 [AI·Hub仓] 更新 products.json

`products.json` 是 Hub 的产品注册表，主页的 `/play` 板块从这里读。

```json
{
  "schemaVersion": "3.0",
  "products": [
    {
      "slug": "HanmoIdleMMO",
      "name": "汉末放置 MMO",
      "nameEn": "Hanmo Idle MMO",
      "tagline": "放置类 MMO 单机版",
      "entry": "demos/HanmoIdleMMO/",
      "thumbnail": "demos/HanmoIdleMMO/thumbnail.svg",
      "version": "0.0.1",
      "status": "alpha",
      "tags": ["idle", "mmo", "vue3"],
      "category": "game",
      "version": "0.0.1",
      "status": "alpha",
      "addedAt": "2026-09-05",
      "order": 10
    }
  ]
}
```

字段说明：
- `schemaVersion`：注册表自身格式版本，固定 `"3.0"`
- `entry`：产物入口；**URL 路径（不含 `docs/` 前缀）**，结尾带斜杠，如 `demos/HanmoIdleMMO/`。⚠️ 物理文件在 `docs/demos/<slug>/`，但 GitHub Pages 把 `docs/` 当站点根，所以 URL 里的路径**从 `demos/` 开始**，不要写 `docs/demos/...`（否则主页拼出 `/HanmoTechnology/docs/demos/` 会 404）。页面渲染时拼成 `${BASE_URL}${entry}`
- `thumbnail`：缩略图 URL 路径（**同样不含 `docs/` 前缀**），如 `demos/HanmoIdleMMO/thumbnail.svg`
- `version`：产品版本号，与 `docs/demos/<slug>/manifest.json` 一致
- `category`：`game` / `tool` / `demo`
- `order`：排序权重，数字小者靠前
- 一次性多个产品：`products` 数组加多个对象即可
- 注册表更新日可加顶层 `updatedAt` 字段（可选）

**禁止字段**（与 §3.3 manifest 同源）：
- `homepage` / `repository` / `repo` 等指向产品仓代码位置的字段一律不要写。Hub 主页对外已禁止任何源码入口（commit `95114d8`），`products.json` 与 manifest 同样不允许出现这些字段。即使业务层当前不读，留着也是冗余+潜在信息暴露风险。

AI 操作：编辑 `$HUB/products.json`，给 `products` 数组追加新条目；如果 slug 已存在则整体替换（更新 version/updatedAt/其他字段）。

### 4.4 [AI·Hub仓] 重新 build 主页并合并到 docs/

```bash
HUB=<Hub 仓绝对路径>
cd $HUB

# 主页构建（Vue3 + Vite + TS）
cd website
npm install                      # 第一次或依赖变了才需要
npm run build                    # 输出到 website/dist/
cd ..

# 合并到发布根 docs/：先清旧，再把 website/dist 全部拷贝进 docs/
rm -rf docs/index.html docs/assets docs/favicon.svg 2>/dev/null
cp -r website/dist/. docs/
# docs/demos/ 已经在 §4.2 复制好了，保留不动
```

如果 `website/dist/` 在 Hub 仓的 `.gitignore` 里，请确保本步骤之后**不要** `git add website/dist/`。它已经搬到 `docs/` 下，`git add docs/` 即可入库。

### 4.5 [你·Hub仓] 本地校验 + git push 触发 Pages

```bash
cd <Hub 仓绝对路径>
node tools/validate-manifests.mjs    # 本地校验所有 docs/demos/*/manifest.json
git status                          # 确认 docs/ 与 products.json 已改动
git add docs/ products.json
git commit -m "更新 docs: HanmoIdleMMO v0.0.3, HanmoXXX v0.1.0"
git push origin main
```

推送后 GitHub Pages（Source = `Deploy from a branch → main /docs`）会基于 `docs/` 自动重部署：

1. 跑 Pages build
2. 全站部署到 `livingyang.github.io/HanmoTechnology/`

访问 `https://livingyang.github.io/HanmoTechnology/` 验证。

---

## 5. 体积策略

> 适用于 Web 产物（`docs/demos/<slug>/` 下的 `index.html` / `assets/`）。
> Electron zip 离线包的红线稍宽，详见 §9.4。

| 单产物大小 | 处理 |
|---|---|
| ≤ 100 MB | ✅ 直接 `cp -r` |
| 100 ~ 200 MB | ✅ 可接受；考虑 `git add` 慢、Hub 仓膨胀 |
| > 200 MB | ❌ **不入库**，请用 GitHub Releases / 对象存储 / 外链 CDN |

`docs/demos/<slug>/` 与 `docs/` 总量都受 GitHub Pages 单仓 1 GB 软限制；超过请拆分或外链。

---

## 6. 接入清单（新 demo 第一次接入）

- [ ] [AI·产品仓] `npm run build:web` 出 `dist-web/`，确认含 `index.html`、`manifest.json`、`thumbnail.*`
- [ ] [AI·产品仓] 检查 `manifest.json` 必填字段齐全，schemaVersion = "3.0"
- [ ] [AI·Hub仓] 在 Hub 仓执行 §4.2 复制产物、§4.3 编辑 `products.json`、§4.4 重新 build 主页 + 合并到 `docs/`
- [ ] [你·Hub仓] `cd $HUB && node tools/validate-manifests.mjs` 本地校验
- [ ] [你·Hub仓] `git add docs/ products.json && git commit && git push origin main`
- [ ] 等 GitHub Pages Branch 部署完成（Settings → Pages 面板查看进度），访问 `https://livingyang.github.io/HanmoTechnology/` 验证 `/play` 板块

---

## 7. 故障排查

| 现象 | 原因 / 处理 |
|---|---|
| 主页没出现新 demo | 检查 `products.json` 是否 commit、slug 是否匹配 `docs/demos/` 目录 |
| iframe 内白屏 / 加载失败 | 浏览器控制台看 CORS 或路径错；把 `base: './'` 改绝对路径 `/HanmoTechnology/demos/<slug>/` |
| `validate-manifests` 失败 | 看脚本输出的报错行号，去对应 `docs/demos/<slug>/manifest.json` 补字段 |
| `git add` 很慢 / 失败 | 产物太大（>200MB），按 §5 走外链方案 |
| 推送后主页没刷新 | GitHub Pages 缓存，等 1-2 分钟；查看 Settings → Pages 部署进度 |

---

## 8. 不需要做的事

- ❌ 产品仓不需要 `manifest.json` 副本留在仓库根目录（只在 build 产物里有）
- ❌ 产品仓不需要 `.github/workflows/` 同步脚本
- ❌ Hub 仓不需要 `.github/workflows/` Pages 部署脚本（用 GitHub Pages 内置 Branch 部署）
- ❌ Hub 仓不需要自动 ingest / 自动同步脚本
- ❌ 不需要 alpha/beta/release 多版本切换（demo 场景统一 alpha）
- ❌ 不需要 Secret / Token 配置
- ❌ AI 不需要 Hub 仓的 `git push` 权限（push 由你手动执行）
- ❌ 不需要在产品仓安装 Hub 相关脚本或 workflow

---

## 9. 离线包交付（Electron zip）

> Web 试玩始终是首选（v4.0 拓扑），本节是**额外**的离线交付通道——
> 用户在线试玩后可下载 zip 到本地解压游玩，无需联网、无需安装。

### 9.0 职责边界（AI 协作必读）

> 本节是**产品仓 AI 跨仓自动化的入口规则**。
> Wesnoth / IdleMMO / 未来产品仓的 AI 接到"发布 zip"指令时，**先读此节**再动手。
>
> 详细端到端工作流见 **§9.8（AI 一次跑完）**。

两仓同根目录（用户工作空间 `C:\developer\hanmo\`）的前提下，发布流程的职责切分：

| 步骤 | 谁做 | 在哪 |
|---|---|---|
| ① AI 一次跑完：仓内打包 zip + cp 到 `temp/` + 复制双击脚本到 zip 目录 + 写 downloads[] + rebuild 主页 + commit | **AI 一次跑完** | 产品仓 + Hub 仓（跨仓） |
| ② 双击 `temp/<slug>/<v>/publish-release.ps1` 上传 zip 到 Hub 仓 Release | **你双击脚本** | Hub 仓 `temp/<slug>/<v>/`（沙箱内 gh 不可用） |
| ③ `git push origin main` | **你双击脚本时选项** | Hub 仓（脚本里询问，输入 y 一步执行） |

**AI 不可触越的边界**（即便同根目录也不允许）：

- ❌ **不要跨仓调 `gh release create`** —— AI 沙箱内无 token + `gh` 不在 PATH + HTTPS 受限。`gh` 这一步永远必须由你执行。
- ❌ **不要在产品仓内写 manifest / publish / Hub 相关脚本** —— 违反产品仓零侵入原则。
- ❌ **永远不要 `git push`** —— 全 session 一律由你手动。

**AI 跑完 ① 后的标准交付物**（AI 必须把这一段交给你再停手）：

```
=== §9.8 AI 自动化工作流已跑完，请双击脚本完成发布与部署 ===

1) 打开文件管理器，进入 temp/<HanmoXxx>/<v0.x.y>/
2) 双击 publish-release.ps1
   · 脚本自动推导 tag/slug/zip → 输入 y 确认 → gh release create
   · 成功后询问是否 git push，输入 y 一步触发 Pages 部署

=== 完成后主页「📦 下载 Win 版」按钮立即生效 ===
```

详细流程见 §9.8。

### 9.1 形态

**win-unpacked 目录 → zip 压缩**（解压即玩，符合"下载后本地解压游玩"原话）。

```
dist/                                ← 产品仓 `npm run dist:dir` 产出
├── win-unpacked/
│   ├── HanmoIdleMMO.exe             ← 入口
│   ├── resources/app.asar           ← 应用代码
│   ├── ...（chromium runtime 依赖）  ← 通常 100-200 MB
```

打 zip 命令（在产品仓根目录）：

```bash
# 进入 unpacked 目录上一层，把整个 win-unpacked 压成 zip
cd <产品仓>/dist
# Windows 10+ 自带 Compress-Archive，跨平台最稳
powershell -NoProfile -Command "Compress-Archive -Path 'win-unpacked' -DestinationPath '../HanmoXxx-v0.x.y-win.zip' -Force"
```

也可以用 7-Zip：`7z a -tzip -mx=5 HanmoXxx-v0.x.y-win.zip win-unpacked/`
（`Compress-Archive` 兼容性最稳，体积略大；7z 体积更优但需先装。）

> 📌 完整"打包 → 上传 → 填下载字段"的实操命令，见
> **`tools/README-publish-release.md`**（含 gh CLI 安装、token 配置、日常发布、清理命令）。

### 9.2 命名规范

`<slug>-v<version>-<os>.zip`

示例：
- `HanmoIdleMMO-v0.0.3-win.zip`
- `HanmoArcomage-v0.2.0-win.zip`
- `HanmoWesnoth-v0.1.0-win.zip`

> 当前产品仓都是 `electron-builder --win`，仅 Windows。将来加 Mac / Linux 走 `HanmoXxx-v0.x.y-mac.zip` / `HanmoXxx-v0.x.y-linux.zip` 命名，schema 不变。

### 9.3 目录结构

**主路线（走 Release）：docs/ 不放 zip**，仅 Web 产物：

```
docs/demos/<slug>/
├── index.html
├── manifest.json
├── thumbnail.svg
└── assets/...                       ← Web 产物
```

**备选（小 zip 同仓）**：才需要 `downloads/`：

```
docs/demos/<slug>/
├── ...
└── downloads/
    └── HanmoXxx-v0.x.y-win.zip
```

- 主路线下 zip 在官网仓 Release，`docs/` 保持纯 Web 产物（git push 无 100MB 限制困扰）
- 备选 `downloads/` 仅用于 < 100 MiB 且想与 Web 同仓的特殊情况

### 9.4 体积红线与发布通道（核心决策）

> ⚠️ **实测事实**：产品 zip 实际约 **288MB**，超过 GitHub git 单文件硬限 **100 MiB**
> （官方：*"GitHub blocks files larger than 100 MiB"*），**无法塞进 git 仓 / docs/**。
> 且产品仓是 **private** → 它的 release 玩家匿名不可见，也走不通。
>
> 所以**唯一可行且推荐的正解：把 zip 挂到官网仓（HanmoTechnology, public）的 GitHub Releases**。

| zip 大小 | 通道 | 理由 |
|---|---|---|
| 任意（含 288MB） | ✅ **官网仓 Release（主路线）** | release asset 单文件上限 = Git LFS 上限，免费计划 **2GB**，288MB 无压力；release assets **不计入仓库体积**，Pages 不受影响；public 仓 asset **匿名可下** |
| < 100 MiB 且想与 Web 同仓 | （备选）`docs/demos/<slug>/downloads/` | 仅小文件 git push 可行；一般不推荐，走 Release 更干净 |

**为什么必须挂官网仓而不是产品仓**

| 检查项 | 结果 |
|---|---|
| 官网仓是否 public | ✅ `private: false`（已用 API 验证） |
| 产品仓是否 private | ✅ 匿名 API 返回 404（已用 API 验证，确实 private） |
| 官网仓当前 release | ✅ 无任何 release，从 0 开始无 tag 冲突 |
| 288MB 能否上传 | ✅ release asset 单文件上限 2GB，288MB 完全没问题 |
| 是否占仓库体积 | ✅ 不占（release assets 不计入仓库大小，不影响官网 Pages） |
| 匿名玩家能否下载 | ✅ public 仓 release asset 匿名可下 |

**结论**：产品 zip 一律挂官网仓 `HanmoTechnology` 的 Release，主页按钮指向 release asset 下载链接。
`docs/demos/<slug>/downloads/` 仅保留为"极小 zip + 想同仓"的备选，不再作为默认。

### 9.5 manifest / products.json 字段

`downloads` 数组，每项对象结构：

| 键 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `os` | string | ✓ | `win` / `mac` / `linux` |
| `url` | string | ✓ | zip 下载地址，**两种写法**：① **external URL 完整链接（推荐，走 Release）**：`https://github.com/livingyang/HanmoTechnology/releases/download/<tag>/<file>.zip`；② **相对路径（塞 docs/ 备选）**：`downloads/HanmoXxx-v0.0.3-win.zip`。DemoCard 检测 `url` 以 `http(s)://` 开头则直接用，否则拼 `BASE_URL + entry + url` |
| `size` | number | ✓ | zip 字节数（int），主页渲染 `XXX MB` 用 |
| `updatedAt` | string | × | 此 zip 打包/上传日期，`YYYY-MM-DD` |

manifest 示例（走 Release，external URL）：

```json
{
  "schemaVersion": "3.0",
  "slug": "HanmoIdleMMO",
  "name": "汉末放置 MMO",
  "nameEn": "Hanmo Idle MMO",
  "tagline": "放置类 MMO 单机版",
  "thumbnail": "thumbnail.svg",
  "version": "0.0.3",
  "status": "alpha",
  "entry": "index.html",
  "tags": ["idle", "mmo", "vue3"],
  "updatedAt": "2026-09-07",
  "downloads": [
    {
      "os": "win",
      "url": "https://github.com/livingyang/HanmoTechnology/releases/download/v0.0.3/HanmoIdleMMO-v0.0.3-win.zip",
      "size": 301989888,
      "updatedAt": "2026-09-07"
    }
  ]
}
```

products.json 同步在对应 product 对象下加 `downloads`（结构同 manifest，url 同样用完整 external URL）。`size` 可用 `(Get-Item <file>).Length` 取。

### 9.6 一次性离线包发布流程（官网仓 Release）

> **上传 release 这一步需你在真实环境执行**（沙箱内 gh 不可用 / 无 token / HTTPS 受限，
> git push 都走不通，release 上传同理）。**最简单的方式是双击 AI 放到 zip 目录的
> `publish-release.ps1`**（见 §9.6.2 方式 A）。AI 负责其余：build zip、复制双击脚本、
> 写 `downloads[]`、重建主页。
>
> 与 §4 Web 发布流程并行；如同时更新 Web + 离线包，Web 走 §4，离线包走本节。

#### 9.6.1 [AI·产品仓] build Electron + 打包 zip

```bash
cd <产品仓>
git pull
npm install                          # electron-builder 第一次需要
npm run dist:dir                     # 输出到 dist/win-unpacked/
# zip 打包（进入 dist 上一层目录打，避免把 dist 目录本身卷进去）
cd dist
powershell -NoProfile -Command "Compress-Archive -Path 'win-unpacked' -DestinationPath '../HanmoXxx-v0.x.y-win.zip' -Force"
cd ..
```

#### 9.6.2 [你·手动] 上传 zip 到官网仓 Release

> 真实文件约 288MB，无法 git push，只能走官网仓 Release。
> 你的本机已有 `gh` CLI 且已 `gh auth login`。**推荐直接用 AI 放到 zip 目录的
> 可双击脚本** `publish-release.ps1`，零参数、双击即发布。

**方式 A（推荐）—— 双击 zip 目录下的 `publish-release.ps1`**

AI 打包后会把脚本复制到 `temp/<slug>/<v>/publish-release.ps1`，与 zip 同目录。用户：

1. 打开文件管理器，进入 `temp/<slug>/<v>/`
2. **双击 `publish-release.ps1`**（或用 PowerShell 执行 `.\publish-release.ps1`）

脚本自动完成：
- 从所在目录名推导 `$Tag=v0.x.y`、`$Slug=HanmoXxx`，自动探测同目录唯一的 `*.zip`
- 打印 slug/tag/zip/大小 → 输入 `y` 确认（防手滑）
- 委托核心脚本 `tools/publish-demo-release.ps1` 执行 `gh release create`
- 发布成功后询问是否顺带 `git push origin main`，输入 `y` 一步触发 Pages 部署

safety properties：gh 未装 / 未认证 / 目录下无 zip / 有多个 zip 时都会 `[ERR]` 退出，不会误发；
发布前有轻量确认缓冲。脚本副本在 `.gitignore` 里排除，不入库，用完即删。

**方式 B（备选）—— 手动跑核心脚本**（想精确控制参数时）：

```powershell
cd C:/developer/hanmo/HanmoTechnology
.\tools\publish-demo-release.ps1 `
    -Tag v0.0.3 `
    -ZipPath C:/build/HanmoIdleMMO-v0.0.3-win.zip `
    -Slug HanmoIdleMMO
```

- 输入 `y` 确认 → 自动 `gh release create` + 上传 zip → 打印 release URL + 可直接复制的 JSON
- 想先核对再发布：加 `-Draft`，确认无误后 `gh release edit v0.0.3 --draft=false` 取消草稿
- tag 已存在想重发：加 `-Replace`（先删同名 release + tag）

脚本前置检查：gh 在 PATH、已认证（全过了）、zip 文件存在。三者任一不满足会 `[ERR]` + exit 1 退出，不会误发。

**方式 C（备选）—— 浏览器拖拽**

打开 `https://github.com/livingyang/HanmoTechnology/releases` → **Draft a new release**，填：

| 项 | 值 |
|---|---|
| Tag | `v0.x.y`（与 Web 版版本一致，如 `v0.0.3`；无同名 tag 才不冲突） |
| Release title | `HanmoXxx v0.x.y`（可留空用 tag） |
| Attach binaries | 拖入 `HanmoXxx-v0.x.y-win.zip` |

**方式 D（等价裸命令）**——不想用脚本时：

```bash
gh release create v0.x.y HanmoXxx-v0.x.y-win.zip \
  --repo livingyang/HanmoTechnology --title "HanmoXxx v0.x.y"
```

上传完成后，复制该 asset 的下载链接，格式：

```
https://github.com/livingyang/HanmoTechnology/releases/download/v0.x.y/HanmoXxx-v0.x.y-win.zip
```

#### 9.6.3 [AI·Hub仓] 同步更新 manifest.json + products.json

给两份文件各加 `downloads` 数组，`url` 填第 9.6.2 步复制的完整 external URL：

> 💡 **若用 `publish-demo-release.ps1`（方式 A）**，脚本跑完已经打印好这段 JSON，可直接复制。
> 若不慎丢失，按下模板手动填（`size` = zip 字节数，`(Get-Item <file>).Length` 取）。

```json
"downloads": [
  {
    "os": "win",
    "url": "https://github.com/livingyang/HanmoTechnology/releases/download/v0.x.y/HanmoXxx-v0.x.y-win.zip",
    "size": 301989888,
    "updatedAt": "2026-09-07"
  }
]
```

#### 9.6.4 [AI·Hub仓] 重建主页

跑 §4.4 重建主页（DemoCard 自动识别 `downloads` 字段，若 url 以 `http(s)://` 开头直接用 external 链接）。

### 9.7 主页按钮行为

- **当前 DemoCard**：试玩按钮（`▶ 直接试玩`，新窗口打开 web 版）
- **新增**：当 `downloads.length > 0` 时，下方多渲染一行次要按钮：
  - Win 包：`📦 下载 Win 版 · 288 MB`（`<a href="${url}">`）
  - `url` 以 `http(s)://` 开头 → 直接用 external 链接（走 Release，按钮导航到 GitHub 下载）
  - `url` 为相对路径 → 拼 `BASE_URL + entry + url`（走 docs/ 备选，加 `download` 属性）
- **无 downloads 时**：按钮不渲染，主页表现与 v4.0 完全一致（**无破坏性**）

> 注意：cross-origin 链接（Release 的 `https://github.com/...`）标签上的 `download`
> 属性会被浏览器忽略——但对 zip 这种二进制，浏览器默认"直接下载"，等效可接受。

### 9.8 端到端 AI 自动化工作流（一次跑完）

> 适用：产品仓 AI（如 Wesnoth AI、IdleMMO AI）拿到"发布 zip"指令时按本节执行。
> 设计前提：用户工作空间 `C:\developer\hanmo\` 下产品仓 + Hub 仓**同根目录**，
> AI 在产品仓上下文可 `cd ../HanmoTechnology` 跨仓操作 Hub 仓文件。
>
> **AI 一次跑完全部 ①-⑤ 步**（zip 打包 + temp 暂存 + downloads 字段 + rebuild + commit），
> 只把 `gh release create` + `git push` 留给你手动。

#### 9.8.1 工作流（AI 视角伪代码）

```bash
# ===== 在产品仓内 =====
cd <产品仓>                          # 例: cd ../HanmoWesnoth
git pull                             # 拉最新代码
npm install                           # electron-builder 首次需要
npm run dist:dir                      # → dist/win-unpacked/

# 打成 zip（不卷 dist/ 本身）
cd dist
powershell -NoProfile -Command "Compress-Archive -Path 'win-unpacked' -DestinationPath '../HanmoXxx-v0.x.y-win.zip' -Force"
cd ..
ZIP_PATH="$(pwd)/HanmoXxx-v0.x.y-win.zip"
ZIP_SIZE=$(stat -c %s "$ZIP_PATH")   # Git Bash 下取字节数
TAG="v0.x.y"
SLUG="HanmoXxx"

# ===== 跨仓到 Hub 仓 =====
HUB="C:/developer/hanmo/HanmoTechnology"
mkdir -p "$HUB/temp/$SLUG/$TAG"
cp "$ZIP_PATH" "$HUB/temp/$SLUG/$TAG/"

# ===== 在 Hub 仓内 =====
cd "$HUB"

# 1) 写 products.json 的 downloads[]
python -c "
import json
with open('products.json', encoding='utf-8') as f: data = json.load(f)
for p in data['products']:
    if p['slug'] == '$SLUG':
        p['downloads'] = [{
            'os': 'win',
            'url': 'https://github.com/livingyang/HanmoTechnology/releases/download/$TAG/$SLUG-$TAG-win.zip',
            'size': $ZIP_SIZE,
            'updatedAt': '$(date +%Y-%m-%d)'
        }]
        break
with open('products.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2); f.write('\n')
"

# 2) 写 docs/demos/<slug>/manifest.json 的 downloads[]
python -c "
import json
p = 'docs/demos/$SLUG/manifest.json'
with open(p, encoding='utf-8') as f: data = json.load(f)
data['downloads'] = [{
    'os': 'win',
    'url': 'https://github.com/livingyang/HanmoTechnology/releases/download/$TAG/$SLUG-$TAG-win.zip',
    'size': $ZIP_SIZE,
    'updatedAt': '$(date +%Y-%m-%d)'
}]
with open(p, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2); f.write('\n')
"

# 3) Rebuild 主页
cd website && npm run build
cd ..
cp -r website/dist/. docs/

# 4) 跑 validate
node tools/validate-manifests.mjs    # 期望: 0 ERR

# 5) 复制可双击发布脚本到 zip 目录
cp tools/publish-release-direct.ps1 temp/$SLUG/$TAG/publish-release.ps1

# 6) Hub 仓本地 commit（不 push，脚本副本在 .gitignore 里排除）
git add -A
git commit -m "feat(<HanmoXxx> v0.x.y): 离线包交付通道"

# ===== 交付物输出给用户 =====
echo "=== §9.8 AI 自动化工作流已跑完，请双击脚本完成发布与部署 ==="
echo ""
echo "1) 打开文件管理器，进入 temp/$SLUG/$TAG/"
echo "2) 双击 publish-release.ps1"
echo "   - 脚本自动推导 tag/slug/zip → 输入 y 确认 → gh release create"
echo "   - 成功后询问是否 git push，输入 y 一步触发 Pages 部署"
echo ""
echo "=== 完成后主页「📦 下载 Win 版」按钮立即生效 ==="
```

#### 9.8.2 关键设计决策

| 决策 | 理由 |
|---|---|
| `downloads[].url` 预填期望 release URL | 用户跑完 release 后**按钮立刻可用**——避免"先 release 后回填 url"的两段式 |
| `temp/<slug>/<v>/` 暂存 zip | 不入 git（`.gitignore` 已加 `temp/**/*.zip`），physical 位置在 Hub 仓 AI 跨仓可写 |
| 双击脚本 `publish-release.ps1` 放到 zip 目录 | 用户"双击即发布"，不用复制命令行；标准件在 `tools/publish-release-direct.ps1`，副本 cp 到 `temp/<slug>/<v>/` 且被 `.gitignore` 排除，不入库 |
| 主页 rebuild 一次 | downloads[] 字段 + DemoCard 模板配合，url 是 external URL 直接用 |
| validate 必须 0 ERR | 阻塞 commit，发现配置错误立即报 |
| **不 push** | push 一律用户手动（v4.0 原则） |

#### 9.8.3 AI 提示词模板（产品仓 AI 拿到发布指令时可直接用）

```markdown
请按 https://github.com/livingyang/HanmoTechnology/blob/main/DEMO-HOSTING.md §9.8
执行「端到端 AI 自动化工作流」。

输入参数（请替换）：
- SLUG: HanmoWesnoth
- TAG: v0.x.y
- 产品仓本地路径: C:/developer/hanmo/HanmoWesnoth
- Hub 仓本地路径: C:/developer/hanmo/HanmoTechnology

约束：
- 不要跨仓调 `gh release create`（沙箱内 gh 不可用、无 token）
- 不要在产品仓内写 manifest / publish / Hub 相关脚本
- 不要 `git push`
- 打包完 zip 后，把 `tools/publish-release-direct.ps1` 复制到
  `temp/<SLUG>/<TAG>/publish-release.ps1`（给用户双击用）
- 跑完按 §9.0 末尾「标准交付物」格式输出给用户
```

### 9.9 校验扩展

`tools/validate-manifests.mjs` 在原校验基础上加：

- 若 `downloads` 存在，每项必填 `os` / `url` / `size`，否则 `[ERR]`
- `os` 必须是 `win` / `mac` / `linux` 之一，否则 `[ERR]`
- `url` 以 `http(s)://` 开头（external / Release）：校验必须指向
  `https://github.com/livingyang/HanmoTechnology/releases/download/` 前缀，
  防止外链到别的域；**不做本地存在性检查**
- `url` 为相对路径（docs/ 备选）：`existsSync(slugDir/<url>)`，否则 `[ERR]`
- products.json 同步校验（可选：同样遍历 products[].downloads）

> 当前 3 个 manifest 都没有 `downloads` 字段，**新逻辑对存量无影响**——脚本只在字段存在时校验，不存在则跳过。

---

## 10. 目录速查

```
Hub 仓（HanmoTechnology）
├── docs/                              ← GitHub Pages 发布根
│   ├── index.html                     ← cp 自 website/dist/
│   ├── assets/                        ← cp 自 website/dist/
│   ├── favicon.svg                    ← cp 自 website/dist/
│   └── demos/                         ← 产品构建产物集中托管
│       ├── HanmoIdleMMO/
│       │   ├── index.html
│       │   ├── manifest.json
│       │   ├── thumbnail.svg
│       │   ├── assets/...              ← Web 产物
│       │   └── downloads/              ← 【备选】小 zip 同仓（<100MB 才用；主路线走 Release）
│       │       └── HanmoIdleMMO-v0.x.y-win.zip
│       └── HanmoXXX/...
├── products.json                      ← 产品注册表，主页 /play 板块消费
├── website/                           ← 主页工程（Vue3 + Vite + TS，源码）
│   ├── src/...
│   └── package.json
├── tools/
│   ├── validate-manifests.mjs         ← 本地 commit 前手动跑（manifest + downloads 校验）
│   ├── publish-demo-release.ps1       ← 发布 zip 到官网仓 Release（core，带参数）
│   ├── publish-release-direct.ps1     ← 可双击发布脚本（零参数，AI 复制到 zip 目录）
│   └── README-publish-release.md      ← gh CLI / token / 发布 / 清理 实操
├── DEMO-HOSTING.md                    ← 本文件
└── COMPANY.md                         ← 公司资料
```
