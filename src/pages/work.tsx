import React from 'react'

import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageContainer>
      <HeroText>Work</HeroText>
      <P>Hello</P>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.main``

const HeroText = styled.h1`
  color: orange;
  padding: 60px 0 60px 0;
`
const P = styled.p``

export default SecondPage
