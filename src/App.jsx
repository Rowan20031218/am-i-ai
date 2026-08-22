import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Classic from './pages/Classic'
import Blitz from './pages/Blitz'
import Streak from './pages/Streak'
import Daily from './pages/Daily'
import Result from './pages/Result'
import Stats from './pages/Stats'
import About from './pages/About'

const THEME_KEY = 'am-i-ai-theme'

function initialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

// HashRouter：静态部署（如 Cloudflare Pages）无需任何服务端路由配置
export default function App() {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <HashRouter>
      <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/blitz" element={<Blitz />} />
        <Route path="/streak" element={<Streak />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/result" element={<Result />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
