# dsh-quick-phrases

**在 DSH 输入框上方放一排可点的快捷短语，还能用 `/` 菜单或 `/名称` 快速展开——不用每次翻模板。**

> 🇬🇧 **TL;DR** — A DeepSeek Harness client plugin: floating quick-phrase chips above the composer, a `/`-triggered phrase menu (pinned group at top), per-phrase flags, drag-to-place UI, host-file persistence. Pure client-side, no build step. **v0.7.5**.

---

## 它能干嘛

扫一眼就知道值不值得装：

- **点 chip 填草稿** — 空输入框直接填入；已有内容则在后面加空格追加。
- **➤ 可选自动发送** — 每条短语独立开关；写入草稿后先验证确实写进去，再提交（避免空/旧草稿被发出）。
- **`/` 短语菜单** — 输入 `/` 弹出「短语」分组（置顶于命令/技能）；仅显示开了 `/` 标记的短语；★ 置顶优先，名称/内容模糊过滤。
- **`/名称` + 回车** — 草稿为 `/短语名` 时自动展开为完整内容；**对所有短语生效**，不受 `/` 菜单开关限制。
- **浮动快捷条 + ⚙ 管理** — 整条可拖到顺手的位置；管理面板叠在条子**上方**作为一个浮动单元一起移动；隐藏条子后仍留一枚半透明 ⚙ 入口。
- **本地持久化** — 短语表存 `$DSH_HOME/storages/dsh-quick-phrases/phrases.json`（原子写入）；宿主不可达时回退 localStorage；数据不进模型上下文。

---

## 支持

| 能力 | 支持 | 说明 |
|---|---|---|
| 快捷条 chip 点击填入 | ✅ | 每条可用 **▬** 单独控制是否上条；不上条的仍可用 `/名称`+回车 |
| ➤ 点击即发送 | ✅ | 逐条开关；验证草稿写入后再发 |
| `/` 菜单 | ✅ | 仅 `slash: true` 的短语出现（默认关，菜单保持清爽）；分组 `order: -1` 置顶 |
| `/名称` + 回车展开 | ✅ | 全部短语，忽略 `/` 菜单标记 |
| ★ 置顶 / ↑↓ 排序 | ✅ | 菜单与条子均按置顶优先 |
| 浮动拖拽 + 位置记忆 | ✅ | 相对输入框偏移，跟随侧栏/布局变化 |
| ⚙ 管理（条子入口） | ✅ | 增删改、各开关、JSON 导入导出、恢复默认；✕ / Esc / **点浮动单元外关闭** |
| 设置页「快捷短语」 | ✅ | 同一编辑器，独立浮动窗；仅 ✕ / Esc 关闭 |
| 宿主文件持久化 | ✅ | 原子 tmp+rename；旧 localStorage 自动迁移 |
| 纯客户端 / 无构建 | ✅ | 手写 `lib/client.js`，改完即部署 |
| 多窗口实时同步 | ❌ | 并发编辑可能回滚新短语，见 [已知缺陷](#️-已知缺陷) |
| 服务端 / 云端短语库 | ❌ | 仅本机 `$DSH_HOME` |

---

## 为什么方便

- **不用翻模板** — 常用话术做成 chip，点一下或 `/名称` 就进输入框；高频的还能开 ➤ 一键发送。
- **拖到你工作的地方** — 快捷条跟着对话区走，侧栏开合也不会漂到别处；管理面板和条子是一体的，改位置不会两套窗口打架。
- **藏起条子也不丢入口** — 关掉「显示快捷条」后仍有 ⚙ 可进管理；设置对话框里永远有「快捷短语」导航。
- **菜单可控、不臃肿** — 默认只有少数短语进 `/` 菜单；其余照样 `/名称`+回车 用，条子也可逐条隐藏。
- **数据在你机器上** — 不进会话日志、不影响模型上下文；重装插件后短语还在（除非手动删存储文件）。

---

## 安装

当前版本 **v0.7.5**。

```powershell
# 1. 拷贝包到 profile 的 node_modules
Copy-Item -Recurse <本包目录> "$env:DSH_HOME\profiles\web\node_modules\dsh-quick-phrases"

# 2. 在 "$env:DSH_HOME\profiles\web\package.json" 里注册两处：
#    dependencies 加 "dsh-quick-phrases": "^0.7.5"
#    dsh.profile.bundles 加 "dsh-quick-phrases"

# 3. 重启 DSH web（新插件需要宿主重启才会被发现）
```

有网络/registry 时也可用官方命令一步完成：`dsh plugin --profile web add <本包路径>`。

## 使用

| 操作 | 效果 |
|---|---|
| 点击 chip | 短语追加到输入框；开了 ➤ 的验证写入后自动发送 |
| 输入 `/` | 菜单最顶部「短语」分组（仅 `/` 标记的短语）；继续输入可模糊过滤 |
| `/继续` + 回车 | 草稿为该短语名时展开为完整内容（**全部**短语，含未进菜单、未上条的） |
| 点击「⚙ 管理」 | 面板出现在条子正上方；拖条子或标题栏移动整体；★ / ➤ / `/` / ▬ / 排序 / JSON / 恢复默认；点单元外 / ✕ / Esc 关闭 |
| 打开「设置」→「快捷短语」 | 弹出同一编辑器（独立浮动窗，仅 ✕ / Esc 关闭）；条子隐藏时也能改 |

## 卸载

从 profile 的 `package.json` 删除 `dsh-quick-phrases`（dependencies 与 bundles 两处），
删除 `node_modules\dsh-quick-phrases` 目录，重启 DSH。短语数据在
`$DSH_HOME/storages/dsh-quick-phrases/phrases.json`，按需删除。

---

## ⚠️ 已知缺陷

### 多窗口同时打开时，新短语可能被旧窗口「回滚」

- **现象**（真实踩坑，2026-08-26）：在窗口 A 添加了一条短语，发完消息后这条短语从列表里消失了；单窗口场景从不复现。
- **根因**：每个 DSH web 页面实例持有**独立的内存状态副本**，持久化是整表覆盖、最后写入者胜，无冲突检测。旧窗口任意一次写入会把宿主文件与 localStorage 覆盖回旧表；异步 `hydrateFromHost` 也可能冲掉刚添加的数据。
- **临时规避**：**编辑短语时只保留一个窗口**；改完后刷新其他窗口即可同步。
- **欢迎 PR**：非破坏化 hydrate、写入校验、按 id 合并或跨窗口广播等方向均可。

---

## 工作原理

```
lib/index.js   宿主入口：GET/POST /plugins/dsh-quick-phrases/phrases 路由（同源 fence + 原子写盘）
lib/client.js  客户端 bundle（window.__ModuleLoader__ 格式，手写无需构建）：
               ├─ InputTriggerSource（trigger '/', order -1 置顶；candidates 按 slash 标记过滤 + matchEnter 展开发送）
               ├─ conversation.input.dock slot（chips 条 + 管理面板，React 18 + useSyncExternalStore）
               │   └─ 浮动单元：barPos 相对 composer 偏移 + 拖拽 + 布局跟随
               ├─ settings.section slot（设置对话框「快捷短语」→ StandaloneManageWindow）
               └─ 持久化：宿主文件为准，localStorage 缓存/回退，旧键自动迁移
```

## 开发

无需构建链——`lib/client.js` 是手写的最终产物（格式对齐官方 `tsdown` 产物），改完直接拷贝部署。

```powershell
node scripts/verify.mjs   # 语法 + 包结构检查
node scripts/smoke.mjs    # 无头逻辑冒烟测试（store / 触发源 / slash 门控 / 持久化迁移 / 浮动单元热区判定）
```

改动后同步到 profile：

```powershell
Copy-Item -Recurse -Force -Path ".\*" -Destination "$env:DSH_HOME\profiles\web\node_modules\dsh-quick-phrases\"
# 然后重启 DSH
```

## 维护者推送

GitHub token 落盘在 **仓库外** 的 `%USERPROFILE%\.github-token`（全局 gitignore 兜底，永远不会被误提交）。
推送时脚本按需注入认证，不写 `.git/config`：

```powershell
powershell -File scripts\push.ps1          # 推当前分支到 origin/master
powershell -File scripts\push.ps1 -Branch master
```

换 token：直接改 `%USERPROFILE%\.github-token` 那一行即可。

---

## 版本要点

| 版本 | 要点 |
|---|---|
| **v0.7.5** | 条子入口的管理窗：点击浮动单元（面板+条子）**以外**关闭；设置页浮动窗行为不变 |
| **v0.7.0–v0.7.4** | 快捷条改为可拖拽浮动窗；管理面板与条子合并为单一单元；位置相对 composer 锚定并跟随布局；修复拖拽与跟随冲突 |
| **v0.6.0** | 每条短语独立 **▬** 控制是否上快捷条 |
| **v0.5.0** | Token 面板式浮动管理窗（拖拽 + 位置记忆） |
| **v0.4.0** | DSH 设置对话框「快捷短语」入口（`settings.section`） |
| **v0.3.x** | 每条 `/` 菜单开关；隐藏条子后保留 ⚙ 入口 |
| **v0.2.0** | 修复 chips 对齐与 `/` 菜单分组沉底（见 [修复记录](#-修复记录)） |
| **v0.1.0** | 初版开源（曾带 2 个 UI 瑕疵，已在 v0.2.0 修复） |

## 🛠 修复记录

v0.1.0 封存时遗留的两个瑕疵，修复思路如下（截图为**修复前**实况，留作档案）。

### 瑕疵 1：chips 行与输入卡左边缘不对齐 —— 已修复 ✅

修复前实况（chips 行比输入卡更靠左，水平偏差 ≈ 75px）：

![瑕疵1：修复前](docs/flaw-1-alignment.png)

- **v0.2.0 做法**：运行时从快捷条向上找与 composer `textarea` 的公共容器，实测输入卡 `getBoundingClientRect()`，镜像其 left/width；挂载后多次校准 + `ResizeObserver` + `window resize` 兜底。

### 瑕疵 2：`/` 菜单里「短语」分组沉底 —— 已修复 ✅

修复前实况（默认视图看不到短语组，方向键滚到底才出现）：

![瑕疵2：修复前](docs/flaw-2-menu-default-view.png)

- **根因**：内置技能源 `order: 2`，本插件原 `order: 3` → 沉底。
- **修复**：`order: 3 → -1`，短语组置顶于全部内置组。

---

## License

MIT
