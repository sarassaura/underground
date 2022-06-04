import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../styles/theme'
import MenuComponent from '../../components/menu'

test('cooler', () => {
  const { getByText } = render(
    <ChakraProvider theme={theme}>
      <MenuComponent />
    </ChakraProvider>
  )
  expect(getByText('Me')).toBeInTheDocument()
})
export default test
