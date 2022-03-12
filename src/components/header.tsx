import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Header: React.FC = () => (
  <Container>
    <HeaderContainer>
      <Name to="/">Keegan</Name>
      <NavLinksContainer>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/">Stats</NavLink>
        <NavLink to="">
          <a href="mailto:keegan.t.burkett@gmail.com">Contact</a>
        </NavLink>
      </NavLinksContainer>
    </HeaderContainer>
    <Line />
  </Container>
)

export default Header

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 24px 0;
  flex-wrap: wrap;
`

const Line = styled.div`
  height: 1px;
  background: ${props => props.theme.global.lineColor};
`
const Name = styled(Link)``

const NavLinksContainer = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

const NavLink = styled(Link)`
  padding: 0 10px 0 10px;
`
