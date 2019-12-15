import React from 'react'
import Sidebar from './sidebar'
import { useStaticQuery, graphql } from 'gatsby'
// import Header from './header'
import GlobalStyles from '../styles/GlobalStyles'

interface LayoutProps {
  children: React.ReactNode
}

// alternative:
// const Layout: React.FC<LayoutProps> = ({children}) => {}

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

export default Layout
