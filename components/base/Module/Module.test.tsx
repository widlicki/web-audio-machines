import { render } from '@testing-library/react'
import Module from './Module'
import { DefaultModule } from './Module.stories'

describe('Module Stories', () => {
  new Map([['Default module', DefaultModule]]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = <Module title="test" />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
