import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import GlobalStyles from "../styles/GlobalStyles"

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
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer></footer>
    </>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
