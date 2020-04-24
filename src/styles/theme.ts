import { Palette, palette } from './palette'
import { DefaultTheme } from 'styled-components'

export interface ThemeInterface extends DefaultTheme {
  palette: Palette
  global: {
    fontSize?: string
    background?: string
    textColor?: string
    links?: string
    hoveredLinks?: string
    lineColor?: string
  }
  screen?: {
    xs: string
    sm: string
    md: string
    lg: string
  }
  font?: {
    headlineBold: string
    headlineExtra: string
    paragraph: string
    paragraphLight: string
    paragraphBold: string
  }
}

export const baseTheme: ThemeInterface = {
  palette,
  global: {
    fontSize: `16px`,
  },
  screen: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  font: {
    headlineBold: 'Syne Bold',
    headlineExtra: 'Syne Extra',
    paragraphLight: 'Inter Light',
    paragraph: 'Inter Regular',
    paragraphBold: 'Inter Bold',
  },
}

export const lightTheme: ThemeInterface = {
  ...baseTheme,
  global: {
    background: palette.lightShades,
    textColor: palette.darkShades,
    links: palette.darkShades,
    hoveredLinks: palette.darkAccent,
    lineColor: palette.darkAccent,
  },
}
// console.log('Light Theme: ', lightTheme)

export const darkTheme: ThemeInterface = {
  ...baseTheme,
  global: {
    background: palette.darkShades,
    textColor: palette.lightShades,
    links: palette.lightShades,
    hoveredLinks: palette.lightAccent,
    lineColor: palette.lightAccent,
  },
}
// console.log('Dark Theme ', darkTheme)

export const Theme = (darkMode: boolean): ThemeInterface =>
  darkMode ? { ...darkTheme } : { ...lightTheme }
