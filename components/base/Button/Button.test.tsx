import { render } from '@testing-library/react'
import AppButton from './Button'
import { DefaultButton, DisabledButton } from './Button.stories'

describe('Button Stories', () => {
  new Map([
    ['default button', DefaultButton],
    ['disabled button', DisabledButton],
  ]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = <AppButton>test</AppButton>
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
