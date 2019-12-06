import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <HeaderContainer>
      <Header>Burkett Keegan</Header>
      <Link to="/">Go to page 1</Link>
    </HeaderContainer>
  </Layout>
)

export default SecondPage

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`
const Header = styled.h1`
  color: purple;
`
