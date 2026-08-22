import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import QuizCard from '../components/QuizCard'
import { shuffledAll } from '../data/questions'
import { recordGame, getStats } from '../utils/storage'

// 连对挑战：答错即止，冲击最高连对纪录
export default function Streak() {
  const navigate = useNavigate()
  const [queue, setQueue] = useState(() => shuffledAll())
  const [index, setIndex] = useState(0)
  const [streak, setStreak] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [pickKey, setPickKey] = useState(null)
  const [details, setDetails] = useState([])
  const [dead, setDead] = useState(false)

  const level = queue[index]
  const best = getStats().bestStreak

  const pick = (key) => {
    if (answered) return
    setPickKey(key)
    setAnswered(true)
    const hit = key === level.answer
    setDetails((d) => [...d, { question: level.question, picked: key, answer: level.answer }])
    if (hit) {
      setStreak((s) => s + 1)
    } else {
      setDead(true)
    }
  }

  const next = () => {
    // 队列用完则重新洗牌继续
    if (index === queue.length - 1) {
      setQueue(shuffledAll())
      setIndex(0)
    } else {
      setIndex((i) => i + 1)
    }
    setAnswered(false)
    setPickKey(null)
  }

  const finish = () => {
    recordGame({ mode: 'streak', score: streak, total: streak + 1, streak })
    navigate('/result', {
      state: { mode: 'streak', score: streak, total: streak + 1, streak, details },
    })
  }

  return (
    <section className="page">
      <TopBar title={`连对挑战 · 当前 ${streak} 连对 · 最高 ${best}`} />
      <div className="progress-track">
        <div className="progress-fill" style={{ width: '100%', opacity: 0.15 }} />
      </div>

      <QuizCard level={level} answered={answered} pickKey={pickKey} onPick={pick} />

      {answered && !dead && (
        <div className="feedback">
          <div className="ok">正确！连对数 +1</div>
          <div className="actions">
            <button className="btn" onClick={next}>
              继续
            </button>
          </div>
        </div>
      )}

      {answered && dead && (
        <div className="feedback">
          <div className="no">答错了，挑战结束。最终连对：{streak}</div>
          <div className="actions">
            <button className="btn" onClick={finish}>
              查看成绩
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
