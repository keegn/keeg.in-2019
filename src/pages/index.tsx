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
      <LinksContainer>
        <SocialLink href="https://github.com/keegn">Github</SocialLink>
        <SocialLink href="https://dribbble.com/keegin">Dribbble</SocialLink>
        <SocialLink href="https://linkedin.com/in/keeganburkett">
          LinkedIn
        </SocialLink>
      </LinksContainer>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.main``

const HeroText = styled.h1`
  color: ${props => props.theme.global.textColor};
  padding: 60px 0 36px 0;
`
const P = styled.p``

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialLink = styled.a`
  padding-bottom: 16px;
`

export default IndexPage
