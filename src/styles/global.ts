import { createGlobalStyle } from 'styled-components'
import { ThemeInterface } from './theme'

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

export const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`
${normalize};

  body {
    margin: 0;
    font-size: 20px;
    hyphens: auto;
    background: ${props => props.theme.global.background};
    color: ${props => props.theme.global.textColor};
  }

  a {
    font-size: 18px;
    text-decoration: none;
    font-weight: 300;
    color: ${props => props.theme.global.links};
    :hover {
      color: ${props => props.theme.global.hoveredLinks};
    }
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  h1 {
    font-size: 20px;
  }

  p {
    line-height: 1.4;
    font-size: ${props => (props.theme.screen?.xs ? '16px' : '18px')};;
    margin-top: 24px;
    margin-bottom: 24px;
    font-weight: 300;
  }

input {
  display: block;
  width: 100%;
  height: 2.25rem;
  padding: 0 8px;
  font-size: 14px;
  font-family: ${props => props.theme.font?.paragraphLight};
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #f1ede8;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  margin-bottom: 16px;
}

textarea {
  display: block;
  width: 100%;
  height: 4rem;
  padding: 8px;
  font-size: 14px;
  font-family: ${props => props.theme.font?.paragraphLight};
  font-weight: 500;
  letter-spacing: 0.0125em;
  color: #888;
  background-color: #f1ede8;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: none;
  margin-bottom: 16px;
}

button {
  padding: 0 12px;
  height: 2.25rem;
  border-radius: 6px;
  font-family: ${props => props.theme.font?.paragraphLight};
  hyphens: none;
  margin: 0;
  font-size: 14px;
  background-color: #555555;
  border: 1px solid transparent;
  color: white;
}

  @media (min-width: ${props => props.theme.screen?.xs}) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
    a {
      font-size: 20px;
    }
  }
}
`
