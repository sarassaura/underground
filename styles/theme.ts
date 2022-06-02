import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
} from '@chakra-ui/react'

const styles = {
  global: () => ({
    body: {
      bg: useColorModeValue('#f0e7db', '#202023'),
    },
  }),
}

const fonts = {
  body: `'Kdam Thmor Pro', sans-serif`,
  p: `'Lobster', cursive`,
}

const colors = {
  coolPink: '#cb11d9',
  coolCyan: '#21b89f',
  coolYellow: '#ebd96a',
  coolBlue: '#060fff',
  coolGreen: '#00b212',
  coolRed: '#fe0d26',
  coolPurple: '#8b01ff',
  coolOrange: '#f7841c',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'chakra',
}

const theme = extendTheme({ styles, colors, fonts, config })

export default theme
