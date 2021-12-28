import { render } from '@testing-library/react'
import Login from '../pages/login'

describe('Login', () => {
  it('renders login page according to snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })
})
