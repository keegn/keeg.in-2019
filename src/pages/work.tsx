import React from 'react'

import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Work" />
    <PageContainer>
      <HeroText>Work</HeroText>
      <p>Hello</p>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.main``

const HeroText = styled.h1`
  color: orange;
  padding: 60px 0 60px 0;
`

export default SecondPage
