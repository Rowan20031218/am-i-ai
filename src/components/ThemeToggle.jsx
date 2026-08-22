import { SunIcon, MoonIcon } from './icons'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-btn"
      onClick={onToggle}
      aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}