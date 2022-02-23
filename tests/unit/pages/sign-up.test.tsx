import { render } from '@testing-library/react'
import SignUp from '../../../pages/sign-up'

describe('Sign Up', () => {
  it('renders sign-up page according to snapshot', () => {
    const { container } = render(<SignUp />)
    expect(container).toMatchSnapshot()
  })
})
