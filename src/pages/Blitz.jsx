import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import QuizCard from '../components/QuizCard'
import { randomLevels } from '../data/questions'
import { recordGame } from '../utils/storage'

const QUESTION_COUNT = 8
const TIME_PER_Q = 10 // 秒

// 限时挑战：每题 10 秒，超时算答错
export default function Blitz() {
  const navigate = useNavigate()
  const [levels] = useState(() => randomLevels(QUESTION_COUNT))
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [pickKey, setPickKey] = useState(null)
  const [details, setDetails] = useState([])
  const [timeLeft, setTimeLeft] = useState(TIME_PER_Q)

  const level = levels[index]
  const total = levels.length
  const isLast = index === total - 1
  const timedOut = answered && pickKey === null

  // 倒计时：未作答时每秒 -1；到 0 自动判错
  useEffect(() => {
    if (answered) return
    if (timeLeft === 0) {
      finish(null)
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, answered])

  const finish = (key) => {
    setPickKey(key)
    setAnswered(true)
    if (key === level.answer) setScore((s) => s + 1)
    setDetails((d) => [...d, { question: level.question, picked: key, answer: level.answer }])
  }

  const next = () => {
    if (isLast) {
      recordGame({ mode: 'blitz', score, total })
      navigate('/result', { state: { mode: 'blitz', score, total, details } })
      return
    }
    setIndex((i) => i + 1)
    setAnswered(false)
    setPickKey(null)
    setTimeLeft(TIME_PER_Q)
  }

  return (
    <section className="page">
      <TopBar title={`限时挑战 · 第 ${index + 1}/${total} 题`} />
      <div className="timer-track">
        <div
          className={`timer-fill${timeLeft <= 3 ? ' danger' : ''}`}
          style={{ width: `${(timeLeft / TIME_PER_Q) * 100}%` }}
        />
      </div>
      <div className="timer-label">剩余 {timeLeft} 秒</div>

      <QuizCard level={level} answered={answered} pickKey={pickKey} onPick={finish} />

      {answered && (
        <div className="feedback">
          <div className={pickKey === level.answer ? 'ok' : 'no'}>
            {timedOut
              ? `超时！正确答案是 ${level.answer}`
              : pickKey === level.answer
                ? '回答正确！'
                : `回答错误，正确答案是 ${level.answer}`}
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
