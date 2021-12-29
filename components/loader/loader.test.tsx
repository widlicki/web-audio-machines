import { render } from '@testing-library/react'
import Loader from '../loader/loader'

describe('Loader', () => {
  it('Should render Loader according to snapshot', () => {
    const { container } = render(<Loader />)
    expect(container).toMatchSnapshot()
  })
})
