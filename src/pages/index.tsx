/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PageContainer>
      <HeroText>Keegan Burkett</HeroText>
      <P>
        Hey, I'm Keegan. I'm a front-end software engineer based in Columbia,
        MO. My current role at Paytient focuses on building consumer software
        that helps folks pay for medical expenses over time, interest free.
      </P>
      <P>
        I spend most of my day writing React/React Native apps. When I'm not
        building software you can find me cruising the back roads of Missouri on
        my gravel bike.
      </P>
      <LinksContainer>
        <SocialLink target="blank" href="https://github.com/keegn">
          Github
        </SocialLink>
        <SocialLink target="blank" href="https://dribbble.com/keegin">
          Dribbble
        </SocialLink>
        <SocialLink target="blank" href="https://linkedin.com/in/keeganburkett">
          LinkedIn
        </SocialLink>
      </LinksContainer>
    </PageContainer>
  </Layout>
)

const PageContainer = styled.main``

const HeroText = styled.h1`
  padding: 60px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
  font-size: 24px;
`

const P = styled.p`
  font-family: ${props => props.theme.font.paragraphLight};
`

const LinksContainer = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`

const SocialLink = styled.a`
  padding-bottom: 16px;
  font-family: ${props => props.theme.font.paragraphLight};
  color: ${props => props.theme.palette.lightAccent};
`

export default IndexPage
