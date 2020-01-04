import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageContainer>
      <HeroText>Portfolio</HeroText>
      <P>
        Hey, I'm Keegan. I'm a design-focused software engineer based in
        Columbia, MO. My current role at Paytient focuses on building consumer
        software that helps folks pay for medical expenses over time, interest
        free.
      </P>
      <P>
        I spend most of my day writing React/React Native apps. When I'm not
        building software you can find cruising the back roads of Missouri on my
        gravel bike.
      </P>
      <P>Links:</P>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.main``

const HeroText = styled.h1`
  color: orange;
  padding: 60px 0 60px 0;
`
const P = styled.p``

export default IndexPage
