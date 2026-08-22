// 各玩法共用的答题卡片（题干 + A/B 选项 + 对错高亮）
export default function QuizCard({ level, answered, pickKey, onPick }) {
  const options = [
    { key: 'A', ...level.a },
    { key: 'B', ...level.b },
  ]

  return (
    <div className="quiz-card">
      <h2>{level.question}</h2>
      <div className="options">
        {options.map((opt) => {
          let cls = 'option'
          if (answered) {
            cls += ' locked'
            if (opt.key === level.answer) cls += ' correct'
            else if (opt.key === pickKey) cls += ' wrong'
          }
          return (
            <div key={opt.key} className={cls} onClick={() => !answered && onPick(opt.key)}>
              <div className="tag">【{opt.label}】</div>
              {opt.image ? <img src={opt.image} alt={opt.label} /> : <p>{opt.content}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
