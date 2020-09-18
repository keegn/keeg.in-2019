import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'
import { ArrowLeft } from 'react-feather'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Thanks = () => {
  const controls = useAnimation()
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "62" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  useEffect(() => {
    controls.start(i => ({
      transition: { delay: i === 0 ? 0.2 : i * 0.3 },
      opacity: 1,
      y: 0,
    }))
  }, [])
  return (
    <Layout>
      <SEO title="Form submission" />
      <StyledImage fluid={data.file.childImageSharp.fluid} />
      <HeroText
        custom={0}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={controls}
      >
        Thank You
      </HeroText>
      <P
        custom={0}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={controls}
      >
        Your form submission has been received.
      </P>
      <MotionLink
        to="/"
        custom={0}
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={controls}
      >
        <ArrowLeft size={20} />
        back to home
      </MotionLink>
    </Layout>
  )
}

export default Thanks

const StyledImage = styled(Img)`
  margin-top: 48px;
  padding: 24px;
  width: 50px;
  @media (min-width: ${props => props.theme.screen?.xs}) {
    width: 75px;
    margin-top: 0px;
  }
`

const HeroText = styled(motion.h1)`
  padding: 40px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
`

const P = styled(motion.p)`
  font-family: ${props => props.theme.font.paragraphLight};
  hyphens: none;
`

const StyledLink = styled(Link)`
  padding-bottom: 16px;
  font-family: ${props => props.theme.font.paragraphLight};
  color: ${props => props.theme.palette.lightAccent};
  display: flex;
  align-items: center;
`

const MotionLink = motion.custom(StyledLink)
