import { render } from '@testing-library/react'
import Home from '../../pages'

test('cooler', () => {
  const { getByText } = render(<Home />)
  expect(getByText('poo')).toBeInTheDocument()
})
export default test
