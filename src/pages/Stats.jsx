import { useState } from 'react'
import TopBar from '../components/TopBar'
import { getStats, clearStats, accuracy } from '../utils/storage'
import { MODES } from '../data/questions'

// 数据统计页：总览 + 最近战绩
export default function Stats() {
  const [stats, setStats] = useState(getStats)

  const onClear = () => {
    if (window.confirm('确定清空全部战绩数据吗？')) {
      clearStats()
      setStats(getStats())
    }
  }

  return (
    <section className="page">
      <TopBar title="数据统计" />

      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-num">{stats.games}</div>
          <div className="stat-label">总场次</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{accuracy(stats)}%</div>
          <div className="stat-label">总正确率</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{stats.bestStreak}</div>
          <div className="stat-label">最高连对</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{stats.bestScorePct}%</div>
          <div className="stat-label">单局最佳</div>
        </div>
      </div>

      <h3 className="section-title">最近战绩</h3>
      {stats.history.length === 0 ? (
        <p className="empty">还没有记录，去玩一局吧！</p>
      ) : (
        <div className="history-list">
          {stats.history.map((h, i) => (
            <div key={i} className="history-item">
              <span className="history-mode">{MODES[h.mode]?.name ?? h.mode}</span>
              <span className="history-score">
                {h.mode === 'streak' ? `${h.streak} 连对` : `${h.score}/${h.total}`}
              </span>
              <span className="history-date">{h.date}</span>
            </div>
          ))}
        </div>
      )}

      {stats.games > 0 && (
        <div className="actions">
          <button className="btn ghost danger-text" onClick={onClear}>
            清空数据
          </button>
        </div>
      )}
    </section>
  )
}
