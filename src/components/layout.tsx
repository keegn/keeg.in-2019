import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar'
// import Header from './header'
import { GlobalStyle } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true)

  useEffect(() => {
    const localStorageLayout = localStorage.getItem('lightTheme')
    if (localStorageLayout) {
      setLightTheme(JSON.parse(localStorageLayout))
    }
  }, [])

  const changeTheme = () => {
    setLightTheme(!lightTheme)
    localStorage.setItem('lightTheme', !lightTheme)
  }

  console.log(lightTheme)

  return (
    <>
      <ThemeProvider theme={lightTheme ? light : dark}>
        <Sidebar href="/" />
        <GlobalStyle />
        <button onClick={changeTheme}>toggle theme</button>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
