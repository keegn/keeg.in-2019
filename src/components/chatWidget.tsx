import React, { useEffect } from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { motion, useAnimation } from 'framer-motion'

import Avatar from './avatar'
import { X } from 'react-feather'

interface Props {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const ChatWidget: React.FC<Props> = () => {
  const [openLauncher, setOpenLauncher] = useToggle(false)

  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transition: {
        delay: i === 0 ? 0 : i * 0.01,
        duration: 0.1,
        y: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
        },
      },
      opacity: 1,
      y: 0,
    }))
  }, [openLauncher])

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "chatbubble" }) {
        childImageSharp {
          fixed(width: 24, height: 26) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <ChatLauncher
        onClick={setOpenLauncher}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.001,
          delay: 1.6,
        }}
      >
        {openLauncher ? (
          <motion.div
            animate={{ rotate: 90, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <X size={30} />
          </motion.div>
        ) : (
          <motion.div
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 0.2,
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Img fixed={data.file.childImageSharp.fixed} />
          </motion.div>
        )}
      </ChatLauncher>
      {openLauncher && (
        <ChatConsole
          initial={{
            opacity: 0,
            y: 20,
          }}
          custom={0}
          animate={controls}
        >
          <Container>
            <Header>
              <Avatar />
              <ChatHeroText>Hi there ✌️ </ChatHeroText>
            </Header>
            <Body>
              <BodyContainer>
                <BodyCard hasOffset>
                  <BodyCardHeader>
                    <P>Want to say hello?</P>
                    <P small gray>
                      Reach out any time. Send me a message via Dribbble,
                      LinkedIn, or Twitter.
                    </P>
                  </BodyCardHeader>
                </BodyCard>
                <BodyCard>
                  <BodyCardHeader>
                    <P>Credits</P>
                    <P small gray>
                      This site is open source on Github. It was built using
                      Gatsby, React, and TypeScript. It uses Cloudflare Pages
                      for continuous deployment from Github.
                    </P>
                    <P small gray>
                      For styling it uses styled-components. The typefaces are
                      Syne and Inter.
                    </P>
                    <P small gray>
                      This chat widget was built from scratch using Framer
                      Motion.
                    </P>
                  </BodyCardHeader>
                  <BodyCardBody></BodyCardBody>
                  <BodyCardFooter></BodyCardFooter>
                </BodyCard>
              </BodyContainer>
            </Body>
          </Container>
        </ChatConsole>
      )}
    </>
  )
}

export default ChatWidget

const ChatLauncher = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-origin: center center;
  backface-visibility: hidden;
  border-radius: 50%;
  background: linear-gradient(
    rgb(204, 235, 205),
    rgb(181, 199, 212),
    rgb(155, 165, 219),
    rgb(123, 131, 224),
    rgb(79, 99, 228)
  );
  color: white;
  z-index: 720;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  &:hover {
    background-color: #5e564d;
  }
`

const ChatConsole = styled(motion.div)`
  position: fixed;
  width: 90vw;
  height: 75vh;
  max-height: 480px;
  bottom: 6rem;
  right: 16px;
  z-index: 320;
  border-radius: 12px;
  font-size: 0.9375rem;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @media (min-width: ${props => props.theme.screen.xs}) {
    width: 380px;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: scroll;
`

const Header = styled.div`
  position: relative;
  background: linear-gradient(
    rgb(204, 235, 205),
    rgb(181, 199, 212),
    rgb(155, 165, 219),
    rgb(123, 131, 224),
    rgb(79, 99, 228)
  );
  color: white;
  padding: 32px 32px 64px;
`

const ChatHeroText = styled.h3`
  padding: 16px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
`

const P = styled.p<{ small?: boolean; gray?: boolean }>`
  font-family: ${props => props.theme.font.paragraphLight};
  hyphens: none;
  margin: 0;
  padding: ${props => (props.small ? '0 0 16px 0' : '0 0 8px 0')};
  font-size: ${props => (props.small ? '14px' : '18px')};
  color: ${props => props.gray && '#8e8e8e'};
  line-height: 1.5;
`

const Body = styled.div`
  background: #fcf8f4;
`

const BodyContainer = styled.div`
  width: 100%;
  padding: 0 16px 16px;
`

const BodyCard = styled.div<{ hasOffset?: boolean }>`
  position: relative;
  z-index: 10;
  padding: 12px 16px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  color: black;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.4s ease;
  margin-top: ${props => props.hasOffset && '-48px'};
`

const BodyCardHeader = styled.div``

const BodyCardBody = styled.div``

const BodyCardFooter = styled.div``
