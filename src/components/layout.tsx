import React from 'react'
import Header from './header'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode'
import { Theme } from '../styles/theme'

// create new branch and refactor using this
// https://janosh.io/blog/use-dark-mode
// then start on figma layout then code site layout

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode] = useDarkMode()
  return (
    <>
      <ThemeProvider theme={Theme(darkMode)}>
        <GlobalStyle />
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
