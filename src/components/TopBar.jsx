import { Link } from 'react-router-dom'
import { BackIcon, HomeIcon } from './icons'

// 页面顶栏：左侧返回，右侧标题/进度文字
export default function TopBar({ title, to = '/', useHomeIcon = true }) {
  return (
    <div className="topnav">
      <Link to={to} className="btn-link">
        {useHomeIcon ? <HomeIcon size={14} /> : <BackIcon />}
        <span>{useHomeIcon ? '首页' : '返回'}</span>
      </Link>
      {title && <span>{title}</span>}
    </div>
  )
}
