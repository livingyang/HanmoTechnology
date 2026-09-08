# temp/ — Hub 仓离线包发布暂存区

> 本目录**不入 git**（已在 `.gitignore` 排除）。仅供 AI 在产品仓完成 §9.6.1
> 打包后暂存 zip、配合用户手动上传 release 使用。release 一发布完即可删除。

## 目录布局

```
temp/
├── README.md                                  ← 本文件
├── .gitkeep                                   ← 占位文件（让空目录能 commit）
└── <HanmoXxx>/                               ← 按产品分（与 docs/demos/ 对齐）
    └── <v0.x.y>/                             ← 按版本分（与 release tag 对齐）
        ├── HanmoXxx-v0.x.y-win.zip           ← cp 自产品仓的 zip 产物
        └── publish-release.ps1               ← 可双击发布脚本（AI 从 tools/ cp 来）
```

## 双击即发布

AI 打包后会把**可双击的发布脚本** `publish-release.ps1` 复制到 zip 同目录。
用户在该目录双击它即可完成发布，无需手动复制任何命令行。

- **零参数**：`$Slug`/`$Tag` 从所在目录名自动推导，`$ZipPath` 自动探测同目录唯一的 `*.zip`
- **发布前**：打印 slug/tag/zip/大小，输入 `y` 确认（防手滑）
- **发布后**：询问是否顺带 `git push origin main`，输入 `y` 一步到位触发 Pages 部署
- **标准件位置**：`tools/publish-release-direct.ps1`（入库）；`temp/<slug>/<v>/` 下的
  副本被 `.gitignore` 排除，不入库，用完即删

## 典型生命周期

```bash
# 1. AI 在产品仓跑 §9.6.1 后 cp 过来
mkdir -p temp/HanmoIdleMMO/v0.0.3/
cp <产品仓>/HanmoIdleMMO-v0.0.3-win.zip temp/HanmoIdleMMO/v0.0.3/
cp tools/publish-release-direct.ps1 temp/HanmoIdleMMO/v0.0.3/publish-release.ps1

# 2. AI 同步写好 products.json + manifest.json 的 downloads[]，
#    url 字段填期望的 release URL（标签一致即可）
#    主页 rebuild 完成、validate 0 ERR

# 3. 你双击 temp/HanmoIdleMMO/v0.0.3/publish-release.ps1
#    脚本自动推导 slug/tag/zip → 轻量确认 → gh release create
#    发布后询问是否 git push（输入 y 一步触发 Pages 部署）
#    【沙箱内 gh 不可用，必须真实环境双击】

# 4. release 一发布 → 主页下载按钮立刻可用（url 已预填好）

# 5. 清理整个 temp/<slug>/<v>/ 子目录
rm -rf temp/HanmoIdleMMO/v0.0.3/
```

## 为什么需要 temp/

| 原因 | 说明 |
|---|---|
| zip 太大塞不进 git | 实际 288MB > git 100MB 红线（详 DEMO-HOSTING.md §9.4） |
| 但 release 必须从 Hub 仓发 | 产品仓 private，匿名玩家看不到；Hub 仓 public，release asset 匿名可下 |
| temp/ 是不入 git 的「Hub 仓内中转站」 | 物理位置在 Hub 仓，AI 跨仓可写，git push 不会卡 |
| 一个 release 一次生命周期 | 配合 release tag 唯一性，旧版本 zip 在 release 历史里可回查，不需要在 Hub 仓保留 |

## 清理规则

- ✅ **保留**：`temp/README.md` + `temp/.gitkeep`（保证空目录能进 git）
- 🗑️ **发布完即可删**：`temp/<HanmoXxx>/<v0.x.y>/` 整个子目录（含 zip + publish-release.ps1 副本）
- ❌ **不要 commit**：`temp/<HanmoXxx>/<v0.x.y>/*.zip` 和 `*/publish-release.ps1`（均被 .gitignore 拒绝）

## 与 docs/demos/<slug>/downloads/ 的区别

| 位置 | 用途 | 入 git | 状态 |
|---|---|---|---|
| `docs/demos/<slug>/downloads/` | 备选：< 100MB 想同仓的小 zip | 入 | 长期（历史版本可保留） |
| `temp/<slug>/<v>/` | 主路线：与 release 配对的中转站 | 不入 | 短期（发布完即删） |

主路线**全部走 `temp/` + Hub release**；`docs/demos/<slug>/downloads/` 仅留作"小 zip 特殊场景"的备选。
