import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "keegin-avatar" }
      ) {
        childImageSharp {
          fixed(width: 44, height: 44) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AvatarImg>
      <StyledImage fixed={data.file.childImageSharp.fixed} />
      <Online />
    </AvatarImg>
  )
}

export default Avatar

const StyledImage = styled(Img)`
  width: 44px;
  height: 44px;
  border-radius: 8px;
`

const Online = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 3px solid #a9aad9;
  background-color: #13ffa7;
  bottom: 0px;
  right: -4px;
  z-index: 1000;
`
const AvatarImg = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
  z-index: 1;
  position: relative;
`
