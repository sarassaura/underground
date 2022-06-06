import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
} from '@chakra-ui/react'

const styles = {
  global: () => ({
    body: {
      bg: useColorModeValue('lightWhite', 'darkBlack'),
    },
  }),
}

const fonts = {
  body: `'Kdam Thmor Pro', sans-serif`,
  heading: `'Lobster', cursive`,
}

const colors = {
  lightPurple: '#C82FED',
  lightWhite: '#F7F2DA',
  lightBlue: '#39B2E0',
  lightRed: '#F74831',
  lightGreen: '#75ED2F',
  darkGreen: '#30ED2F',
  darkBlack: '#212121',
  darkCyan: '#38B1E0',
  darkBlue: '#3147F7',
  darkPurple: '#8A2BE2',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'chakra',
}

const theme = extendTheme({ styles, colors, fonts, config })

export default theme
