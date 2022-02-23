import { render } from '@testing-library/react'
import Home from '../../../pages/index'

describe('Home', () => {
  it('renders homepage according to snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
