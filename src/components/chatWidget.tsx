import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Avatar from './avatar'
import { X } from 'react-feather'

interface Props {
  onClick?: () => void
}

interface InputData {
  name: string
  email: string
  message: string
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ChatWidget: React.FC<Props> = () => {
  const [openLauncher, setOpenLauncher] = useToggle(false)
  const [openForm, setOpenForm] = useToggle(false)
  const [isLoading, setIsLoading] = useState(false)
  const [inputData, setInputData] = useState<InputData>({
    name: '',
    email: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState(false)

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

  const handleChange = e => {
    const { name, value } = e.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [successMessage])

  const handleSubmit = e => {
    setIsLoading(true)
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...inputData,
      }),
    })
      .then(res => {
        console.log('Form response: ', res)
        setOpenForm(false)
        setSuccessMessage(true)
      })
      .catch(error => alert(error))
  }
  console.log(inputData)
  return (
    <>
      <ChatLauncher onClick={setOpenLauncher}>
        {openLauncher ? (
          <X size={32} />
        ) : (
          <Img fixed={data.file.childImageSharp.fixed} />
        )}
      </ChatLauncher>
      {openLauncher && (
        <ChatConsole>
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
                      Reach out any time.
                    </P>
                  </BodyCardHeader>
                  <BodyCardBody></BodyCardBody>
                  <BodyCardFooter>
                    {!openForm ? (
                      <>
                        {successMessage ? (
                          <p>Thank you for your message.</p>
                        ) : (
                          <StyledButton onClick={setOpenForm}>
                            Start a conversation
                          </StyledButton>
                        )}
                      </>
                    ) : (
                      <form
                        name="contact"
                        method="post"
                        action="/thanks"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                          marginBottom
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          id="name"
                          required
                        />
                        <input
                          marginBottom
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          id="email"
                          required
                        />
                        <textarea
                          marginBottom
                          placeholder="Your Message"
                          name="message"
                          id="message"
                          required
                        />
                        <button type="submit">Send Message</button>
                      </form>
                      // <form
                      //   name="contact"
                      //   method="post"
                      //   onSubmit={handleSubmit}
                      //   data-netlify="true"
                      //   data-netlify-honeypot="bot-field"
                      // >
                      //   <input type="hidden" name="form-name" value="contact" />
                      //   <input type="hidden" name="bot-field" />
                      //   <StyledInput
                      //     marginBottom
                      //     type="text"
                      //     placeholder="Your Name"
                      //     name="name"
                      //     onChange={handleChange}
                      //     value={inputData.name}
                      //     required
                      //   />
                      //   <StyledInput
                      //     marginBottom
                      //     type="email"
                      //     placeholder="Your Email"
                      //     name="email"
                      //     onChange={handleChange}
                      //     value={inputData.email}
                      //     required
                      //   />
                      //   <StyledTextArea
                      //     marginBottom
                      //     placeholder="Your Message"
                      //     type="textarea"
                      //     name="message"
                      //     onChange={handleChange}
                      //     value={inputData.message}
                      //     required
                      //   />
                      //   <StyledButton type="submit">Send Message</StyledButton>
                      // </form>
                    )}
                  </BodyCardFooter>
                </BodyCard>
                <BodyCard>
                  <BodyCardHeader>
                    <P>Credits</P>
                    <P small gray>
                      This custom chat widget you are viewing was built from
                      scratch and heavily inspired by the good folks at
                      Dekks.app. This site was built using Gatsby, React, and
                      Typescript.
                    </P>
                    <P small gray>
                      For styling, I reached for styled-components. The
                      typefaces are Syne and Inter.
                    </P>
                    <P small gray>
                      This site is open source on Github. It relies on Netlify
                      for continuous deployment and Sentry.io for error
                      monitoring.
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

const ChatLauncher = styled.div`
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
  /* background-color: #444444; */
  background: linear-gradient(238.72deg, #0044a9 0%, #f700a3 100%),
    radial-gradient(100% 188.01% at 76.14% 0%, #43ddff 0%, #ff0000 100%),
    linear-gradient(0deg, #db00ff 0%, #14ff00 100%),
    radial-gradient(59.2% 100% at 50% 100%, #6a00d5 0%, #00e0ff 100%),
    radial-gradient(100% 148.07% at 0% 0%, #ff9900 0%, #001aff 100%);
  background-blend-mode: hard-light, overlay, color-burn, color-burn, normal;
  color: white;
  z-index: 720;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`

const ChatConsole = styled.div`
  position: fixed;
  width: 90vw;
  height: 75vh;
  max-height: 430px;
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
  background: linear-gradient(238.72deg, #0044a9 0%, #f700a3 100%),
    radial-gradient(100% 188.01% at 76.14% 0%, #43ddff 0%, #ff0000 100%),
    linear-gradient(0deg, #db00ff 0%, #14ff00 100%),
    radial-gradient(59.2% 100% at 50% 100%, #6a00d5 0%, #00e0ff 100%),
    radial-gradient(100% 148.07% at 0% 0%, #ff9900 0%, #001aff 100%);
  background-blend-mode: hard-light, overlay, color-burn, color-burn, normal;
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

const ContactForm = styled.form``

const StyledInput = styled.input<{ marginBottom?: boolean }>`
  display: block;
  width: 100%;
  height: 2.25rem;
  padding: 0 8px;
  font-size: 14px;
  font-family: ${props => props.theme.font.paragraphLight};
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #f1ede8;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  margin-bottom: ${props => props.marginBottom && '16px'};
`

const StyledTextArea = styled.textarea<{ marginBottom?: boolean }>`
  display: block;
  width: 100%;
  height: 2.25rem;
  padding: 8px;
  font-size: 14px;
  font-family: ${props => props.theme.font.paragraphLight};
  font-weight: 500;
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #f1ede8;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  margin-bottom: ${props => props.marginBottom && '16px'};
`

const StyledButton = styled.button`
  padding: 0 12px;
  height: 2.25rem;
  border-radius: 6px;
  font-family: ${props => props.theme.font.paragraphLight};
  hyphens: none;
  margin: 0;
  font-size: 14px;
  background-color: #555555;
  border: 1px solid transparent;
  color: white;
`
