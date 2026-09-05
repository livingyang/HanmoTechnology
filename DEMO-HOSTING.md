# 汉末科技 Web 试玩产品托管规范

> 多个产品的 Web 构建产物集中托管在 HanmoTechnology 的 `docs/demos/` 目录，
> 主页 Vue 工程的 `dist/` 也合并进 `docs/`，整个 `docs/` 是 GitHub Pages 发布根。

| | |
|---|---|
| **版本** | 4.0（合并到 docs/，去掉 GitHub Actions，本地构建 + Pages 内置 Branch 部署） |
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

`dist-web/manifest.json` 必需字段：

```json
{
  "schemaVersion": "3.0",
  "slug": "HanmoIdleMMO",                  // 必须等于 Hub docs/demos/ 下的目录名
  "name": "汉末放置 MMO",                   // 中文名（展示用）
  "nameEn": "Hanmo Idle MMO",              // 英文名（URL/日志用）
  "tagline": "放置类 MMO 单机版",           // 一句话简介
  "version": "0.0.3",                       // 语义化版本号
  "status": "alpha",                       // demo 场景默认填 alpha
  "tags": ["idle", "mmo", "vue3"],         // 用于筛选（可选）
  "homepage": "https://github.com/livingyang/HanmoIdleMMO",  // 产品仓 URL
  "embeddable": true,                      // true 主页会内嵌 iframe
  "sandbox": "allow-scripts allow-same-origin",  // iframe sandbox
  "updatedAt": "2026-09-05"                // 此次更新日期
}
```

`status` 在 demo 展示场景下统一填 `alpha`，不需要做 alpha/beta/release 多版本切换。

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
      "embeddable": true,
      "sandbox": "allow-scripts allow-same-origin",
      "homepage": "https://github.com/livingyang/HanmoIdleMMO",
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
│       │   └── assets/...
│       └── HanmoXXX/...
├── products.json                      ← 产品注册表，主页 /play 板块消费
├── website/                           ← 主页工程（Vue3 + Vite + TS，源码）
│   ├── src/...
│   └── package.json
├── tools/validate-manifests.mjs       ← 本地 commit 前手动跑
├── DEMO-HOSTING.md                    ← 本文件
└── COMPANY.md                         ← 公司资料
```
