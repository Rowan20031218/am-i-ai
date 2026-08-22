# 我像AI吗（Am I AI?）

> 一款极简风格的互动测试游戏：通过对比判断文本与图像内容，检验你对 AI 生成内容的识别能力。
>
> 纯静态 React 单页应用，无需后端，可部署到 Cloudflare Pages 等任意静态托管。

## ✨ 功能特性

- 🎯 **经典模式**：6 关固定题，3 关文本 + 3 关图像
- ⏱️ **限时挑战**：每题 10 秒倒计时，8 题快节奏，超时判错
- 🔥 **连对挑战**：全题库随机抽题，答错即止，冲击最高连对
- 📅 **每日挑战**：按日期种子出题，同一天所有人题目一致
- 📊 **数据统计**：总场次 / 正确率 / 最高连对 / 单局最佳 + 最近战绩历史
- 🔍 **答题回顾**：结果页逐题展示你的选择与正确答案
- 🌗 **明暗主题**：右上角一键切换，偏好自动记忆，默认跟随系统
- 📱 **响应式**：移动端单列，桌面端双列
- 🔒 **零隐私**：所有数据仅保存在浏览器 localStorage，不上传任何信息

## 🚀 快速开始

前置要求：**Node.js 18+**

```bash
# 1. 克隆仓库
git clone https://github.com/rowan20031218/am-i-ai.git
cd am-i-ai

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 4. 生产构建（产物输出到 dist/）
npm run build

# 5. 本地预览构建产物
npm run preview
```

## ☁️ 部署到 Cloudflare Pages

本项目为**纯静态站点**，推荐部署到 Cloudflare Pages，即可获得免费 `*.pages.dev` 链接。

### 方式一：Git 仓库集成（推荐，支持自动部署）

1. **创建 GitHub 仓库**并将本项目推送上去：

   ```bash
   git remote add origin https://github.com/rowan20031218/am-i-ai.git
   git push -u origin main
   ```

2. 登录 [Cloudflare 控制台](https://dash.cloudflare.com) → 左侧菜单 **Workers & Pages** → **Create** → 选择 **Pages** 标签页 → **Connect to Git**。

3. 授权后选择本项目对应的仓库，**Build and deployments** 填写：

   | 配置项 | 值 |
   |--------|-----|
   | Project name | 自定义（如 `am-i-ai`） |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | 留空 |

4. 点击 **Save and Deploy**，等待构建完成（首次约 1~2 分钟）。

5. 部署完成后获得 `https://<项目名>.pages.dev` 预览链接。

6. （可选）在 **Custom domains** 中绑定自己的域名；后续每次 `git push` 都会自动重新部署。

### 方式二：Direct Upload（不接 Git，手动上传）

1. 本地执行 `npm run build` 生成 `dist/` 目录。

2. Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** → **Upload assets**。

3. 将 `dist/` 目录拖入上传区，填写项目名即可发布。

> 因为应用使用 **HashRouter**（URL 形如 `/#/blitz`），两种部署方式都**不需要**任何服务端路由配置或 `_redirects` 文件。

## 🎮 玩法说明

| 模式 | 题量 | 规则 |
|------|------|------|
| 经典模式 | 6 关 | 3 文本 + 3 图像，答完出分 |
| 限时挑战 | 8 题 | 每题 10 秒，倒计时归零判错 |
| 连对挑战 | 不限 | 题库随机，答错即止，记录连对数 |
| 每日挑战 | 5 题 | 3 文本 + 2 图像，每日固定一套 |

## 📁 项目结构

```
.
├── index.html              # Vite 入口
├── vite.config.js          # Vite 配置（base: './' 适配子路径部署）
├── package.json
└── src/
    ├── main.jsx            # React 挂载入口
    ├── App.jsx             # 路由与主题状态
    ├── index.css           # 全局样式（CSS 变量明暗主题）
    ├── data/
    │   └── questions.js    # 题库、玩法定义、抽题算法
    ├── utils/
    │   └── storage.js      # 战绩统计 localStorage 持久化
    ├── components/         # 共享组件（答题卡片 / 顶栏 / 图标 / 主题切换）
    └── pages/              # 页面（首页 / 四玩法 / 结果 / 统计 / 关于）
```

## 🛠️ 技术栈

- **React 18** + **Vite 5**
- **React Router 6**（HashRouter，静态托管友好）
- 纯 CSS（CSS 变量实现明暗主题），SVG 图标，零 Emoji，零 UI 框架

## 📝 待完善（占位说明）

- [X] **题目内容**：当前文字/图像均为占位素材（图像来自 `placehold.co`），需替换为真实对比内容（`src/data/questions.js`）
**题目内容已经修改，Powered by Unsplash and ChatGPT Images 2.0**

## 📄 License

本项目采用 [MIT License](./LICENSE) 授权。
