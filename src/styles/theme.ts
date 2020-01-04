import { DefaultTheme } from 'styled-components'

export interface Theme extends DefaultTheme {
  palette: Palette
}

// enum ColorPalette {
//   lightShades = '245, 242, 232',
//   lightAccent = '109, 214, 243',
//   mainBrand = '92, 193, 192',
//   darkAccent = '172, 126, 152',
//   darkShades = '36, 57, 79',
// }

// exmaple:
// interface Palette {
//   lightShades: ColorPalette | string
//   etc
// }

interface Palette {
  lightShades: string
  lightAccent: string
  mainBrand: string
  darkAccent: string
  darkShades: string
}

const palette: Palette = {
  lightShades: `#ffffff`,
  lightAccent: `#eeeeee`,
  mainBrand: `palevioletred`,
  darkShades: `#000000`,
  darkAccent: `#333333`,
}

export const baseTheme = {
  palette,
  global: {
    fontSize: `16px`,
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
}

export const lightTheme = {
  ...baseTheme,
  background: baseTheme.palette.lightShades,
  textColor: baseTheme.palette.darkShades,

  links: baseTheme.palette.darkShades,
  hoveredLinks: baseTheme.palette.darkAccent,
}

export const darkTheme = {
  ...baseTheme,
  background: baseTheme.palette.darkShades,
  textColor: baseTheme.palette.lightShades,

  links: baseTheme.palette.lightShades,
  hoveredLinks: baseTheme.palette.lightAccent,
}

export const Theme = (darkMode: any) =>
  darkMode ? { ...darkTheme } : { ...lightTheme }

// export interface Theme extends DefaultTheme {
//   isDark?: boolean
//   global: {
//     bg: string
//     color: string
//     link: string
//     linkHover: string
//     inlineBgColor: string
//     hr?: string
//     sidebarBg: string
//   }
//   code: {
//     highlightCodeLineBg: string
//     highlightLineBorderLeftColor: string
//   }
//   palette: Palette
//   actions: ActionPalette
// }

// enum ColorPalette {
//   lightShades = '245, 242, 232',
//   lightAccent = '109, 214, 243',
//   mainBrand = '92, 193, 192',
//   darkAccent = '172, 126, 152',
//   darkShades = '36, 57, 79',

//   lightYellow = '255,229,100',
//   darkYellow = '#FFDE6B',
//   lightGrey = '#575D61',

//   success = '95, 153, 81',
//   warning = '221, 136, 25',
//   error = '244, 67, 54',
// }

// export interface Palette {
//   lightShades: ColorPalette | string
//   lightAccent: ColorPalette | string
//   mainBrand: ColorPalette | string
//   darkAccent: ColorPalette | string
//   darkShades: ColorPalette | string
// }

// interface ActionPalette {
//   primary: ColorPalette | string
//   info: ColorPalette | string
//   success: ColorPalette | string
//   warning: ColorPalette | string
//   error: ColorPalette | string
// }

// const baseTheme = {
//   actions: {
//     error: ColorPalette.error,
//     info: palette.darkShades,
//     primary: palette.mainBrand,
//     success: ColorPalette.success,
//     warning: ColorPalette.warning,
//   },
//   code: {
//     highlightCodeLineBg: ColorPalette.lightGrey,
//     highlightLineBorderLeftColor: ColorPalette.darkYellow,
//   },
//   palette,
// }

// export const dark: Theme = {
//   ...baseTheme,
//   global: {
//     bg: palette.dark.darkShades,
//     color: palette.dark.lightShades,
//     hr: ColorPalette.lightGrey,
//     inlineBgColor: ColorPalette.lightGrey,
//     link: palette.dark.mainBrand,
//     linkHover: palette.dark.lightAccent,
//     sidebarBg: 'white',
//   },
// }

// export const light: Theme = {
//   ...baseTheme,
//   global: {
//     bg: palette.light.lightShades,
//     color: palette.light.darkShades,
//     inlineBgColor: ColorPalette.lightYellow,
//     link: palette.light.mainBrand,
//     linkHover: palette.light.darkAccent,
//     sidebarBg: 'red',
//   },
// }
