import React from 'react'

interface ToggleThemeProps {
  changeTheme: () => void
  lightTheme: boolean
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({
  changeTheme,
  lightTheme,
}) => (
  <button onClick={changeTheme}>
    {lightTheme ? 'Dark mode' : 'Light mode'}
  </button>
)

export default ToggleTheme
