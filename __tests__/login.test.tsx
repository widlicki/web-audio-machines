import { render } from '@testing-library/react'
import Login from '../pages/sign-in'

describe('Login', () => {
  it('renders login page according to snapshot', () => {
    const { container } = render(<Login />)
    expect(container).toMatchSnapshot()
  })
})
