import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderContainer>
      <Header>Keegan Burkett</Header>

      <Link to="/page-2/">Go to page 2</Link>
    </HeaderContainer>
  </Layout>
)

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`
const Header = styled.h1`
  color: orange;
`

export default IndexPage
