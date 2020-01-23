import React from 'react'
// import Header from './header'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
// import { useDarkMode } from '../hooks/useDarkMode'
import { Theme } from '../styles/theme'

import '../static/fonts/fonts.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const [darkMode] = useDarkMode()
  // to override theme mode pass in a boolean to theme
  return (
    <>
      <ThemeProvider theme={Theme(true)}>
        <GlobalStyle />
        <LayoutPositioning>
          <LayoutContainer>
            {/* <Header /> */}
            {children}
          </LayoutContainer>
        </LayoutPositioning>
      </ThemeProvider>
    </>
  )
}

export default Layout

const LayoutPositioning = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  @media (min-width: ${props => props.theme.screen.xs}) {
    justify-content: center;
    align-items: center;
  }
`
const LayoutContainer = styled.div`
  margin: 0px auto;
  max-width: 540px;
  padding: 0px 24px 0 24px;
`
