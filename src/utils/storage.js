// 战绩统计的 localStorage 持久化
const KEY = 'am-i-ai-stats-v1'

const DEFAULTS = {
  games: 0,
  totalScore: 0,
  totalQuestions: 0,
  bestScorePct: 0,
  bestStreak: 0,
  history: [], // 最近战绩，最新的在前
}

export function getStats() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULTS }
    return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULTS }
  }
}

// 每局结束时调用
export function recordGame({ mode, score, total, streak = 0 }) {
  const s = getStats()
  s.games += 1
  s.totalScore += score
  s.totalQuestions += total
  if (total > 0) {
    s.bestScorePct = Math.max(s.bestScorePct, Math.round((score / total) * 100))
  }
  s.bestStreak = Math.max(s.bestStreak, streak)
  s.history.unshift({
    date: new Date().toLocaleString('zh-CN', { hour12: false }),
    mode,
    score,
    total,
    streak,
  })
  s.history = s.history.slice(0, 30)
  localStorage.setItem(KEY, JSON.stringify(s))
  return s
}

export function clearStats() {
  localStorage.removeItem(KEY)
}

// 本地日期串 YYYY-MM-DD（每日挑战种子）
export function todayKey() {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

export function accuracy(s) {
  return s.totalQuestions > 0 ? Math.round((s.totalScore / s.totalQuestions) * 100) : 0
}
