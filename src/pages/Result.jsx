import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { TrophyIcon, CheckIcon, XIcon } from '../components/icons'
import { MODES, commentFor } from '../data/questions'

// 通用结果页：得分 + 评语 + 逐题回顾
export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()

  // 直接访问 /result（无数据）时回首页
  useEffect(() => {
    if (!state) navigate('/', { replace: true })
  }, [state, navigate])
  if (!state) return null

  const { mode, score, total, details = [], streak } = state
  const modeInfo = MODES[mode] || { name: mode, path: '/' }

  return (
    <section className="result">
      <TrophyIcon />
      <h1>{modeInfo.name} · 结果</h1>
      <div className="score">
        {mode === 'streak' ? `${streak} 连对` : `${score} / ${total}`}
      </div>
      <div className="divider" />
      <div className="msg">{mode === 'streak' ? '冲击更高连对，再来一局！' : commentFor(score)}</div>
      <div className="divider" />
      <div className="actions">
        <Link to={modeInfo.path} className="btn">
          再来一局
        </Link>
        <Link to="/" className="btn ghost">
          返回首页
        </Link>
      </div>

      {details.length > 0 && (
        <div className="review">
          <h3>答题回顾</h3>
          {details.map((d, i) => {
            const ok = d.picked === d.answer
            return (
              <div key={i} className={`review-item ${ok ? 'ok' : 'no'}`}>
                <span className="review-icon">{ok ? <CheckIcon /> : <XIcon />}</span>
                <span className="review-q">第 {i + 1} 题</span>
                <span className="review-a">
                  你的选择：{d.picked ?? '超时'} · 正确答案：{d.answer}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
