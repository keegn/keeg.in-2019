import React from 'react'

interface HeaderProps {
  changeTheme: () => void
  lightTheme: boolean
}

const Header = ({ changeTheme, lightTheme }: HeaderProps) => (
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
        {lightTheme ? (
          <button onClick={changeTheme}>switch to dark</button>
        ) : (
          <button onClick={changeTheme}>switch to light</button>
        )}
      </h1>
    </div>
  </header>
)

export default Header
