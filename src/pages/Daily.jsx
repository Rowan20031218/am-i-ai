import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import QuizCard from '../components/QuizCard'
import { dailyLevels } from '../data/questions'
import { recordGame, todayKey } from '../utils/storage'

// 每日挑战：同一天按日期种子出题，所有人题目一致
export default function Daily() {
  const navigate = useNavigate()
  const dateStr = todayKey()
  const [levels] = useState(() => dailyLevels(dateStr))
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [pickKey, setPickKey] = useState(null)
  const [details, setDetails] = useState([])

  const level = levels[index]
  const total = levels.length
  const isLast = index === total - 1
  const correct = answered && pickKey === level.answer

  const pick = (key) => {
    if (answered) return
    setPickKey(key)
    setAnswered(true)
    if (key === level.answer) setScore((s) => s + 1)
    setDetails((d) => [...d, { question: level.question, picked: key, answer: level.answer }])
  }

  const next = () => {
    if (isLast) {
      recordGame({ mode: 'daily', score, total })
      navigate('/result', { state: { mode: 'daily', score, total, details, date: dateStr } })
      return
    }
    setIndex((i) => i + 1)
    setAnswered(false)
    setPickKey(null)
  }

  return (
    <section className="page">
      <TopBar title={`每日挑战 ${dateStr} · 第 ${index + 1}/${total} 题`} />
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${(index / total) * 100}%` }} />
      </div>

      <QuizCard level={level} answered={answered} pickKey={pickKey} onPick={pick} />

      {answered && (
        <div className="feedback">
          <div className={correct ? 'ok' : 'no'}>
            {correct ? '回答正确！' : `回答错误，正确答案是 ${level.answer}`}
          </div>
          <div className="actions">
            <button className="btn" onClick={next}>
              {isLast ? '查看结果' : '下一题'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
