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
    </AvatarImg>
  )
}

export default Avatar

const StyledImage = styled(Img)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`
const AvatarImg = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
  z-index: 100;
`
