import React from 'react'
import Header from './header'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../hooks/useDarkMode'
import { Theme } from '../styles/theme'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode] = useDarkMode()
  return (
    <>
      <ThemeProvider theme={Theme(darkMode)}>
        <GlobalStyle />
        <LayoutContainer>
          <Header />
          {children}
        </LayoutContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  margin: 0px auto;
  max-width: 600px;
  padding: 0px 5% 120px;
`
