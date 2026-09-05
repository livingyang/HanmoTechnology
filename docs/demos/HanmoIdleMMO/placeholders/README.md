# 占位美术资源（PLACEHOLDERS — 禁止进入发布版本）

本目录全部图片拷贝自 `ref/idle-mmorpg`（MIT 许可代码项目），**仅用于开发期 UI 占位**。

- 这些图风格疑似 Tibia（CipSoft）素材衍生，存在版权风险，**M5 美术替换阶段必须全部删除或替换为原创资产**。
- 打包配置（electron-builder）在发布构建中应排除本目录。
- 正式资源目录为 `public/assets/`（M5 建立），规格：物品/技能/货币 32×32、怪物 64×64+ 透明底 PNG。

子目录：

- `coins/` 铜币/银币/金币图标（32×32 gif）
- `slots/` 装备槽位剪影（32×32 png，底色烤死，仅深色面板可用）
- `items/` 物品图标（32×32 png/gif）
- `creatures/` 怪物精灵（64×64 gif，等距俯视视角）
- `spells/` 法术图标（38×38 gif）
