import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => (
  <StyledSidebar>
    <Link to={props.href}>
      <Name>Keegan</Name>
    </Link>
    <About>Columbia, MO based Front End Engineer currently @Paytient</About>
    <Avatar>
      <span role="img" aria-label="peace sign">
        ✌️
      </span>
    </Avatar>
  </StyledSidebar>
)

export default Sidebar

// background-color: ${props => props.theme.colors.secondary};
const StyledSidebar = styled.div`
  width: 100vh;
  height: 5rem;
  position: fixed;
  top: -5rem;
  left: 0;
  z-index: 11;
  background-color: ${props => props.theme.background};
  align-items: center;
  transform: rotateZ(90deg);
  transform-origin: bottom left;
  padding: 0 16px;
  border-top: 1px solid #eee;
  display: flex;
  /* @media screen and (min-width: 52em) {
    display: flex;
  } */
`

// color: ${props => props.theme.colors.primary};
const Name = styled.span`
  text-decoration: none;
  border-bottom: 0;
  color: #444;
  padding: 0px 24px 0px 0px;
`
// color: ${props => props.theme.colors.primary};
const About = styled.span`
  color: #999;
  font-weight: 300;
`

const Avatar = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
  z-index: 100;
`
