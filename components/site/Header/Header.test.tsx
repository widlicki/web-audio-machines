import { render } from '@testing-library/react'
import Header, { HeaderProps } from './Header'
import { LoggedIn, LoggedOut } from './Header.stories'

const defaultArgs: HeaderProps = {
  isAuthenticated: false,
} as HeaderProps

describe('Header Stories', () => {
  new Map([
    ['correct header when user is logged in', LoggedIn],
    ['correct header when user is not logged in', LoggedOut],
  ]).forEach(({ args }, key) => {
    it(`renders ${key}`, () => {
      const component = <Header {...defaultArgs} {...args} />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
