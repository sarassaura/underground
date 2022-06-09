import { render } from '@testing-library/react'
import Trampos from '../../pages/trampos'

test('cooler', () => {
  const { getByText } = render(<Trampos />)
  expect(getByText('Trampos')).toBeInTheDocument()
})
export default test
