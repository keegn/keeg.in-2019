export const theme = {
  blue: `#2202a9`,
  darkBlue: `#190c65`,
  darkerBlue: `#150956`,
  darkestBlue: `#0f073b`,
  lightBlue: `#1f59cd`,
  lighterBlue: `#279AF1`,
  lightestBlue: `#83aaff`,

  green: `#3f7912`,
  darkGreen: `#0c511a`,
  lightGreen: `#00d69b`,
  paleDarkGreen: `#104F55`,

  yellow: `#f9ff00`,
  darkYellow: `#d0d500`,
  lightYellow: `#fbff6c`,

  orange: `#efbf00`,
  darkOrange: `#ff9100`,
  lightOrange: `#ffbe41`,

  gray: `#464849`,
  darkGray: `#3d3d3d`,
  darkerGray: `#1a1d23`,
  darkestGray: `#060606`,
  lightGray: `#bcbcbc`,
  lighterGray: `#e5e5e5`,
  lightestGray: `#f7f7f7`,
}

export const lightTheme = {
  background: `white`,
  textColor: `black`,
  accentBackground: theme.lightestGray,

  links: theme.green,
  hoveredLinks: theme.orange,

  shadowColor: theme.lighterGray,
  borderColor: theme.lighterGray,

  headerBg: theme.darkerBlue,
  footerBg: theme.darkerGray,

  buttonBg: theme.blue,
  hoveredButtonBg: theme.lightBlue,
  grayButtonBg: theme.lightestGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.lighterGray,
}

export const darkTheme = {
  background: theme.darkerGray,
  textColor: theme.lighterGray,
  accentBackground: theme.darkestGray,

  links: theme.lighterBlue,
  hoveredLinks: theme.orange,

  shadowColor: `black`,
  borderColor: `black`,

  headerBg: theme.darkestBlue,
  footerBg: theme.darkestGray,

  buttonBg: theme.darkGreen,
  hoveredButtonBg: theme.green,
  grayButtonBg: theme.darkGray,
  grayHoveredButtonBg: theme.orange,

  inlineCodeColor: theme.darkGray,
}

export default (darkMode: any) =>
  darkMode ? { ...theme, ...darkTheme } : { ...theme, ...lightTheme }

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
