import { render } from '@testing-library/react'
import Library from '../pages/library'

describe('Library', () => {
  it('renders library page according to snapshot', () => {
    const { container } = render(<Library />)
    expect(container).toMatchSnapshot()
  })
})
