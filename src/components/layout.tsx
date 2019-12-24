import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar'
import Header from './header'
import { GlobalStyle } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    const localStorageLayout = localStorage.getItem('themeMode')
    console.log('localStorageLayout ', localStorageLayout)
    if (localStorageLayout) {
      setThemeMode(localStorageLayout)
    }
  }, [])

  const changeTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
      localStorage.setItem('themeMode', 'dark')
    } else if (themeMode === 'dark') {
      setThemeMode('light')
      localStorage.setItem('themeMode', 'light')
    }
  }

  console.log('themeMode ', themeMode)

  return (
    <>
      <ThemeProvider theme={themeMode === 'light' ? light : dark}>
        <Sidebar href="/" />
        <GlobalStyle />
        <Header changeTheme={changeTheme} themeMode={themeMode} />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
