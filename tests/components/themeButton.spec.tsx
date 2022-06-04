import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/theme'
import ThemeButton from '../../components/themeButton'

test('cooler', () => {
  const { getByTestId } = render(
    <ChakraProvider theme={theme}>
      <ThemeButton />
    </ChakraProvider>
  )
  expect(getByTestId('custom-element')).toContainElement(
    getByTestId('custom-element-2')
  )
})
export default test
