import { render } from '@testing-library/react'
import Sampler from '../pages/machines/sampler'

describe('Sampler', () => {
  it('renders sampler page according to snapshot', () => {
    const { container } = render(<Sampler />)
    expect(container).toMatchSnapshot()
  })
})
