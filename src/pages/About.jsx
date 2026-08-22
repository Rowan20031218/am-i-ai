import TopBar from '../components/TopBar'

// 关于页
export default function About() {
  return (
    <section className="page about">
      <TopBar title="关于" />

      <h1>我像AI吗</h1>
      <p>
        这是一款极简风格的互动测试游戏：通过对比判断文本与图像内容，
        检验你对 AI 生成内容的识别能力。
      </p>

      <h3 className="section-title">玩法</h3>
      <ul className="about-list">
        <li>经典模式：6 关固定题，3 关文本 + 3 关图像</li>
        <li>限时挑战：每题只有 10 秒，8 题快节奏</li>
        <li>连对挑战：答错即止，冲击最高连对纪录</li>
        <li>每日挑战：每天同一套题，和朋友比比谁更准</li>
      </ul>

      <h3 className="section-title">技术栈</h3>
      <ul className="about-list">
        <li>React 18 + Vite + React Router（HashRouter，静态托管友好）</li>
        <li>纯 CSS 变量实现明暗主题，SVG 图标，无 Emoji</li>
        <li>战绩数据保存在浏览器 localStorage，不上传任何数据</li>
      </ul>

      <h3 className="section-title">说明</h3>
      <p className="muted">当前题目为占位内容，图像为占位图，后续会替换为真实对比素材。</p>
    </section>
  )
}
