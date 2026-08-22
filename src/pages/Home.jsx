import { Link } from 'react-router-dom'
import { MODES } from '../data/questions'
import { getStats, accuracy } from '../utils/storage'
import {
  LogoSvg,
  PlayIcon,
  ClockIcon,
  FlameIcon,
  CalendarIcon,
  ChartIcon,
  InfoIcon,
} from '../components/icons'

const MODE_ICONS = {
  classic: <PlayIcon />,
  blitz: <ClockIcon />,
  streak: <FlameIcon />,
  daily: <CalendarIcon />,
}

export default function Home() {
  const stats = getStats()

  return (
    <section className="home">
      <LogoSvg />
      <h1>我像AI吗</h1>
      <div className="divider" />
      <div className="sub">你能区分人类与 AI 的边界吗？选择一种玩法开始挑战</div>

      <div className="mode-grid">
        {Object.entries(MODES).map(([key, m]) => (
          <Link key={key} to={m.path} className="mode-card">
            <div className="mode-icon">{MODE_ICONS[key]}</div>
            <div className="mode-name">{m.name}</div>
            <div className="mode-desc">{m.desc}</div>
          </Link>
        ))}
      </div>

      {stats.games > 0 && (
        <div className="stat-strip">
          <span>已玩 {stats.games} 局</span>
          <span>正确率 {accuracy(stats)}%</span>
          <span>最高连对 {stats.bestStreak}</span>
        </div>
      )}

      <div className="footer-links">
        <Link to="/stats" className="btn-link">
          <ChartIcon size={14} />
          <span>数据统计</span>
        </Link>
        <Link to="/about" className="btn-link">
          <InfoIcon size={14} />
          <span>关于</span>
        </Link>
      </div>
    </section>
  )
}
