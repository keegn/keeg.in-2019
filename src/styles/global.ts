import { createGlobalStyle } from 'styled-components'

// TODO creat a default theme declaration

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    hyphens: auto;
    /* below rules enable dark mode */
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    a {
      text-decoration: none;
      color: ${props => props.theme.links};
      :hover {
        color: ${props => props.theme.hoveredLinks};
      }
    }
  }
`
