import React from 'react'
import DarkMode from './DarkMode/darkMode'
// import ToggleTheme from './toggleTheme'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => (
  <header
    style={{
      background: `${props => props.theme.background}`,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}></h1>
      <DarkMode initial={'light'} />
    </div>
  </header>
)

export default Header
