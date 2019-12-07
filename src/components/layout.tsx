import React from 'react'
import Sidebar from './sidebar'

import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'

import GlobalStyles from '../styles/GlobalStyles'

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sidebar href="/" />
      <GlobalStyles />
      {children}
    </>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
