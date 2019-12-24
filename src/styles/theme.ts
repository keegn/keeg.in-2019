import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { palette } from './palette'

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`

export interface Theme extends DefaultTheme {
  isDark?: boolean
  global: {
    bg: string
    color: string
    link: string
    linkHover: string
    inlineBgColor: string
    hr?: string
  }
  code: {
    highlightCodeLineBg: string
    highlightLineBorderLeftColor: string
  }
  palette: Palette
  actions: ActionPalette
}

enum ColorPalette {
  lightShades = '245, 242, 232',
  lightAccent = '109, 214, 243',
  mainBrand = '92, 193, 192',
  darkAccent = '172, 126, 152',
  darkShades = '36, 57, 79',

  lightYellow = '255,229,100',
  darkYellow = '#FFDE6B',
  lightGrey = '#575D61',

  success = '95, 153, 81',
  warning = '221, 136, 25',
  error = '244, 67, 54',
}

export interface Palette {
  lightShades: ColorPalette | string
  lightAccent: ColorPalette | string
  mainBrand: ColorPalette | string
  darkAccent: ColorPalette | string
  darkShades: ColorPalette | string
}

interface ActionPalette {
  primary: ColorPalette | string
  info: ColorPalette | string
  success: ColorPalette | string
  warning: ColorPalette | string
  error: ColorPalette | string
}

const baseTheme = {
  actions: {
    error: ColorPalette.error,
    info: palette.darkShades,
    primary: palette.mainBrand,
    success: ColorPalette.success,
    warning: ColorPalette.warning,
  },
  code: {
    highlightCodeLineBg: ColorPalette.lightGrey,
    highlightLineBorderLeftColor: ColorPalette.darkYellow,
  },
  palette,
}

export const dark: Theme = {
  ...baseTheme,
  global: {
    bg: palette.dark.darkShades,
    color: palette.dark.lightShades,
    hr: ColorPalette.lightGrey,
    inlineBgColor: ColorPalette.lightGrey,
    link: palette.dark.mainBrand,
    linkHover: palette.dark.lightAccent,
  },
}

export const light: Theme = {
  ...baseTheme,
  global: {
    bg: palette.light.lightShades,
    color: palette.light.darkShades,
    inlineBgColor: ColorPalette.lightYellow,
    link: palette.light.mainBrand,
    linkHover: palette.light.darkAccent,
  },
}

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
${normalize};
  body {
    background-color: rgb(${props => props.theme.global.bg});
    color: rgb(${props => props.theme.global.color});
    transition: background 0.2s ease-out;
  }
  
  a {
    color: rgb(${props => props.theme.global.link});
  }
  
  a:hover {
    color: rgb(${props => props.theme.global.linkHover});
  }
  
  blockquote {
    color: inherit;
    border-left-color: inherit;
  } 

  `