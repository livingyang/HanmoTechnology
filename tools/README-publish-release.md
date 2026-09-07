# 发布离线包到 Hub 仓 Release

> 让 `git push origin main` 之外多一条发布通道：把 Electron 离线包 zip 上传到 Hub 仓
> `HanmoTechnology` 的 GitHub Releases，主页按钮自动指向 release asset。
>
> **为什么要 release 而不是塞 `docs/`**：`HanmoWesnoth` 打包后约 288 MB，超出 git 单文件
> 硬限 100 MB；私有产品仓 release 公开不可见；挂 public Hub release 是唯一正解。

---

## 一次性配置

### 1. 安装 `gh` CLI

```powershell
winget install GitHub.cli
```

装完**新开一个 PowerShell 窗口**（让 PATH 生效），验证：

```powershell
gh --version
# 期望看到 gh version 2.x.x（2024/2025）
```

> 备选：Chocolatey `choco install gh` / Scoop `scoop install gh`，效果一样。

### 2. 配置 GitHub 凭据

**方式 A：OAuth 浏览器授权（推荐，最简单）**

```powershell
gh auth login
```

按交互提示选：
- `GitHub.com`
- `HTTPS`
- `Login with a web browser`（推荐）

会弹浏览器跳转 GitHub → 一键授权 → 回到 shell 提示 `Logged in as livingyang`。

**方式 B：贴 PAT（无管理员、机器不让浏览器跳转时）**

去 <https://github.com/settings/tokens> 生成一个 **classic PAT**，scope 选 `repo`。
然后：

```powershell
$env:GITHUB_TOKEN = 'ghp_xxxxxxxxxxxxxxxxxxxx'
gh auth login --with-token
```

> Token 存在 `gh` 自己的 config 里（`~/.config/gh/hosts.yml`），不会留在 PowerShell
> 历史或本脚本里。

### 3. 验证

```powershell
gh auth status
# 期望：✓ Logged in to github.com as livingyang
```

---

## 日常发布

### 准备 zip

切到产品仓跑 `electron-vite build` + `electron-builder --dir` + Compress-Archive
（详见 `DEMO-HOSTING.md §9.6.1`）。得到的 zip 路径如 `C:/build/HanmoIdleMMO-v0.0.3-win.zip`。

### 第一次发：先 Draft

```powershell
cd C:/developer/hanmo/HanmoTechnology
.\tools\publish-demo-release.ps1 `
    -Tag v0.0.3 `
    -ZipPath C:/build/HanmoIdleMMO-v0.0.3-win.zip `
    -Slug HanmoIdleMMO `
    -Draft
```

打开 <https://github.com/livingyang/HanmoTechnology/releases> 看 draft 信息：
title / notes / zip 大小 / 是否漏传资源等。OK 之后：

```powershell
gh release edit v0.0.3 --repo livingyang/HanmoTechnology --draft=false
```

### 后续发：直接 PUBLIC

脚本默认 `-Draft = $false`，会先让你 `y` 确认再执行（防误发）。

```powershell
.\tools\publish-demo-release.ps1 `
    -Tag v0.0.4 `
    -ZipPath C:/build/HanmoIdleMMO-v0.0.4-win.zip `
    -Slug HanmoIdleMMO
```

输入 `y` → 上传 → 返回 release URL 和 zip 直链。

### 误发重传：`-Replace`

```powershell
.\tools\publish-demo-release.ps1 `
    -Tag v0.0.3 `
    -ZipPath C:/build/HanmoIdleMMO-v0.0.3-win.zip `
    -Slug HanmoIdleMMO `
    -Replace
```

会先 `gh release delete` + `gh tag delete`，再重新创建。

### 不想要脚本？等价裸命令

```powershell
$TAG = "v0.0.3"
$SLUG = "HanmoIdleMMO"
$ZIP = "C:/build/HanmoIdleMMO-v0.0.3-win.zip"
gh release create $TAG $ZIP `
    --repo livingyang/HanmoTechnology `
    --title "$SLUG $TAG" `
    --notes "Web build: https://livingyang.github.io/HanmoTechnology/demos/$SLUG/"
```

---

## 把链接写进 Hub 仓

publish 脚本最后会打印一段 JSON 片段。复制进：

- `docs/demos/<slug>/manifest.json` → `downloads[]`
- `products.json` → 对应 product 的 `downloads[]`

例：

```json
"downloads": [
  {
    "os": "win",
    "url": "https://github.com/livingyang/HanmoTechnology/releases/download/v0.0.3/HanmoIdleMMO-v0.0.3-win.zip",
    "size": 301989888,
    "updatedAt": "2026-09-07"
  }
]
```

然后 `cd website && npm run build`、`cp -r dist/. ../docs/`、`node ../tools/validate-manifests.mjs`
确认 0 ERR，commit + push 主页。

---

## 清理 / 维护

| 场景 | 命令 |
|---|---|
| 取消 draft | `gh release edit <tag> --repo livingyang/HanmoTechnology --draft=false` |
| 删除 release（asset 一起删） | `gh release delete <tag> --repo livingyang/HanmoTechnology --yes` |
| 只删 tag，不删 release | `gh tag delete <tag> --repo livingyang/HanmoTechnology --yes` |
| 删除某个 asset（保留 release） | `gh release delete-asset <tag> <asset.zip> --repo livingyang/HanmoTechnology --yes` |
| 看 release 列表 | `gh release list --repo livingyang/HanmoTechnology --limit 20` |
| 看某个 release 详情 | `gh release view <tag> --repo livingyang/HanmoTechnology` |

---

## 与 `DEMO-HOSTING.md` 的关系

本文档是 `DEMO-HOSTING.md §9.6` 的本地实操补充：

- `DEMO-HOSTING.md §9.6` → **规范层**（zip 形态、字段定义、目录约束）
- 本 README + `publish-demo-release.ps1` → **工具层**（具体怎么发、token 怎么配、踩了哪些坑）

新章节迭代时优先改 `DEMO-HOSTING.md`，本 README 同步更新"日常发布步骤"段。
