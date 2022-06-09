import { render } from '@testing-library/react'
import Contato from '../../pages/contato'

test('cooler', () => {
  const { getByText } = render(<Contato />)
  expect(getByText('Contato')).toBeInTheDocument()
})
export default test
