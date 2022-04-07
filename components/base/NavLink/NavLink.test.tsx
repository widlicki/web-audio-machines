import { render } from '@testing-library/react'
import NavLink from './NavLink'
import { DefaultNavLink } from './NavLink.stories'

describe('NavLink Stories', () => {
  new Map([
    ['default NavLink', DefaultNavLink],
    // ['disabled button', DisabledButton],
  ]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = <NavLink to="/">Link</NavLink>
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
