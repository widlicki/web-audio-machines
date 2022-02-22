import { render } from '@testing-library/react'
import Loader from './Loader'

describe('Loader', () => {
  it('Should render Loader according to snapshot', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })
})
