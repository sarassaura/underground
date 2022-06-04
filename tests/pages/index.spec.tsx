import { render } from '@testing-library/react'
import Home from '../../pages/index'

test('cooler', () => {
  const { getByText } = render(<Home />)
  expect(getByText('Expert')).toBeInTheDocument()
})
export default test
