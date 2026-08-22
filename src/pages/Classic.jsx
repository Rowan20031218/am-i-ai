import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import QuizCard from '../components/QuizCard'
import { CLASSIC_LEVELS } from '../data/questions'
import { recordGame } from '../utils/storage'

// 经典模式：固定 6 关（3 文本 + 3 图像）
export default function Classic() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [pickKey, setPickKey] = useState(null)
  const [details, setDetails] = useState([])

  const level = CLASSIC_LEVELS[index]
  const total = CLASSIC_LEVELS.length
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
      recordGame({ mode: 'classic', score, total })
      navigate('/result', { state: { mode: 'classic', score, total, details } })
      return
    }
    setIndex((i) => i + 1)
    setAnswered(false)
    setPickKey(null)
  }

  return (
    <section className="page">
      <TopBar title={`${level.type === 'text' ? '文本' : '图像'} · 第 ${index + 1}/${total} 关`} />
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
              {isLast ? '查看结果' : '下一关'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
