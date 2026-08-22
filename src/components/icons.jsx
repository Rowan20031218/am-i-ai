// 所有图标均为 SVG（设计规范：不允许使用 Emoji）

function SvgBase({ children, size = 18, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <SvgBase {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.2M12 19.8V22M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2 12h2.2M19.8 12H22M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </SvgBase>
  )
}

export function MoonIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
    </SvgBase>
  )
}

export function BackIcon() {
  return (
    <SvgBase size={14}>
      <path d="M15 18l-6-6 6-6" />
    </SvgBase>
  )
}

export function HomeIcon(props) {
  return (
    <SvgBase {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </SvgBase>
  )
}

export function LogoSvg() {
  return (
    <SvgBase size={56}>
      <rect x="3" y="5" width="18" height="15" rx="4" />
      <path d="M3 10h18M7 15h4" />
    </SvgBase>
  )
}

export function TrophyIcon() {
  return (
    <SvgBase size={64}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5H4a2 2 0 0 0 2 4M17 5h3a2 2 0 0 1-2 4" />
      <path d="M12 14v3M8 21h8M10 18l-.5 3M14 21l-.5-3" />
    </SvgBase>
  )
}

// —— 玩法图标 ——
export function PlayIcon() {
  return (
    <SvgBase size={28}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5 3.5-5 3.5z" />
    </SvgBase>
  )
}

export function ClockIcon() {
  return (
    <SvgBase size={28}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2M9 2h6" />
    </SvgBase>
  )
}

export function FlameIcon() {
  return (
    <SvgBase size={28}>
      <path d="M12 3c2 3.5 6 5.5 6 10a6 6 0 0 1-12 0c0-2 1-3.5 1-3.5s.5 1.5 2 1.5c0-3 1.5-6 3-8z" />
    </SvgBase>
  )
}

export function CalendarIcon() {
  return (
    <SvgBase size={28}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </SvgBase>
  )
}

export function ChartIcon() {
  return (
    <SvgBase size={28}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </SvgBase>
  )
}

export function InfoIcon() {
  return (
    <SvgBase size={28}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </SvgBase>
  )
}

export function CheckIcon({ size = 16 }) {
  return (
    <SvgBase size={size}>
      <path d="M5 13l4 4L19 7" />
    </SvgBase>
  )
}

export function XIcon({ size = 16 }) {
  return (
    <SvgBase size={size}>
      <path d="M6 6l12 12M18 6L6 18" />
    </SvgBase>
  )
}
