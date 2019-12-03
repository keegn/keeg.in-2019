import React from 'react'

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
      <GlobalStyles />
      {children}
    </>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
