import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useToggle from '../hooks/useToggle'

interface Props {
  onClick?: () => void
}

interface InputData {
  name: string
  email: string
  message: string
}

const encode = data => {
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

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: inputData.name,
        email: inputData.email,
        message: inputData.message,
      }),
    })
      .then(res => {
        if (res.ok) {
          alert('Success!')
          setOpenForm(false)
          setSuccessMessage(true)
        } else {
          throw Error(
            `Something went wrong and your message was not sent! 🤯 ${res.status} ${res.message}`,
          )
        }
      })
      .catch(error => alert(error))

    e.preventDefault()
  }
  console.log(inputData)
  return (
    <>
      <ChatLauncher onClick={setOpenLauncher}>icon</ChatLauncher>
      {openLauncher && (
        <ChatConsole>
          <Container>
            <Header>
              <ChatHeroText>Hi there 👋</ChatHeroText>
            </Header>
            <Body>
              <BodyContainer>
                <BodyCard hasOffset>
                  <BodyCardHeader>
                    <P>Need help to say hello?</P>
                    <P small gray>
                      Reach out any time.
                    </P>
                  </BodyCardHeader>
                  <BodyCardBody>
                    <p>avatar here</p>
                  </BodyCardBody>
                  <BodyCardFooter>
                    {!openForm ? (
                      <>
                        {successMessage ? (
                          <p>Thank you for your message.</p>
                        ) : (
                          <button onClick={setOpenForm}>
                            Start a conversation
                          </button>
                        )}
                      </>
                    ) : (
                      // <ContactForm
                      //   name="contact"
                      //   method="post"
                      //   action="/thanks"
                      //   data-netlify="true"
                      //   data-netlify-honeypot="bot-field"
                      // >
                      //   <input type="hidden" name="bot-field" />
                      //   <StyledInput
                      //     marginBottom
                      //     type="text"
                      //     placeholder="Your Name"
                      //     name="name"
                      //     id="name"
                      //     required
                      //   />
                      //   <StyledInput
                      //     marginBottom
                      //     type="email"
                      //     placeholder="Your Email"
                      //     name="email"
                      //     id="email"
                      //     required
                      //   />
                      //   <StyledTextArea
                      //     marginBottom
                      //     placeholder="Your Message"
                      //     name="message"
                      //     id="message"
                      //     required
                      //   />
                      //   <button type="submit">Send Message</button>
                      // </ContactForm>
                      <form
                        onSubmit={handleSubmit}
                        data-netlify="true"
                        name="contact"
                        method="post"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <StyledInput
                          marginBottom
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          onChange={handleChange}
                          value={inputData.name}
                          required
                        />
                        <StyledInput
                          marginBottom
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          onChange={handleChange}
                          value={inputData.email}
                          required
                        />
                        <StyledTextArea
                          marginBottom
                          placeholder="Your Message"
                          name="message"
                          onChange={handleChange}
                          value={inputData.message}
                          required
                        />
                        <button type="submit">Send Message</button>
                      </form>
                    )}
                  </BodyCardFooter>
                </BodyCard>
                <BodyCard>
                  <BodyCardHeader>
                    <h2>More me around the web.</h2>
                    <p>Strava etc.</p>
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
  background-color: #333;
  color: white;
  z-index: 720;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`
const ChatConsole = styled.div`
  position: fixed;
  width: 380px;
  height: 75vh;
  max-height: 400px;
  bottom: 6rem;
  right: 16px;
  z-index: 320;
  border-radius: 12px;
  font-size: 0.9375rem;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  background: #141419;
  color: white;
  padding: 48px 32px 64px;
`

const ChatHeroText = styled.h3`
  padding: 16px 0 8px 0;
  font-family: ${props => props.theme.font.headlineExtra};
`

const P = styled.p<{ small?: boolean; gray?: boolean }>`
  font-family: ${props => props.theme.font.paragraphLight};
  hyphens: none;
  margin: 0;
  padding: 0 0 8px 0;
  font-size: ${props => props.small && '14px'};
  color: ${props => props.gray && '#8e8e8e'};
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
  padding: 0 12px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #eee;
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
  padding: 0 12px;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #eee;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  margin-bottom: ${props => props.marginBottom && '16px'};
`
