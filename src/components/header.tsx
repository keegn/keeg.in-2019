import React from 'react'
import ToggleTheme from './toggleTheme'

interface HeaderProps {
  changeTheme: () => void
  lightTheme: boolean
}

const Header: React.FC<HeaderProps> = ({ changeTheme, lightTheme }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
      </h1>
    </div>
  </header>
)

export default Header
