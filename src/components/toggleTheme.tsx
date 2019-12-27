import React from 'react'

interface ToggleThemeProps {
  changeTheme: () => void
  themeMode: string
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({
  changeTheme,
  themeMode,
}) => (
  <button onClick={changeTheme}>
    {themeMode === 'light' ? 'Switch to Dark mode' : 'Switch to Light mode'}
  </button>
)

export default ToggleTheme
