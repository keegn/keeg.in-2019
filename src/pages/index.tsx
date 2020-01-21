/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

import Layout from '../components/layout'

import SEO from '../components/seo'

const IndexPage = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transition: { delay: i === 0 ? 0.2 : i * 0.3 },
      opacity: 1,
      y: 0,
    }))
  }, [])
  return (
    <Layout>
      <SEO title="Portfolio" />
      <PageContainer>
        <HeroText
          custom={0}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={controls}
        >
          Keegan Burkett
        </HeroText>
        <P
          custom={0}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={controls}
        >
          Hey, I'm Keegan. I'm a front-end software engineer based in Columbia,
          MO. My current role at Paytient focuses on building consumer software
          that helps folks pay for medical expenses over time, interest free.
        </P>
        <P
          custom={0}
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={controls}
        >
          I spend most of my day writing React/React Native apps. When I'm not
          building software you can find me cruising the back roads of Missouri
          on my gravel bike.
        </P>
        <LinksContainer>
          <SocialLink
            target="blank"
            href="https://github.com/keegn"
            custom={1}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={controls}
          >
            Github
          </SocialLink>
          <SocialLink
            target="blank"
            href="https://dribbble.com/keegin"
            custom={2}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={controls}
          >
            Dribbble
          </SocialLink>
          <SocialLink
            target="blank"
            href="https://linkedin.com/in/keeganburkett"
            custom={3}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={controls}
          >
            LinkedIn
          </SocialLink>
        </LinksContainer>
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.main``

const HeroText = styled(motion.h1)`
  padding: 60px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
  font-size: 24px;
`

const P = styled(motion.p)`
  font-family: ${props => props.theme.font.paragraphLight};
`

const LinksContainer = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`

const SocialLink = styled(motion.a)`
  padding-bottom: 16px;
  font-family: ${props => props.theme.font.paragraphLight};
  color: ${props => props.theme.palette.lightAccent};
`

export default IndexPage
