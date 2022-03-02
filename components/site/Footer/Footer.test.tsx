import { render } from '@testing-library/react'
import Footer from './Footer'
// eslint-disable-next-line import/extensions
import { DefaultFooter } from './Footer.stories'

describe('Footer Stories', () => {
  new Map([['correct default footer', DefaultFooter]]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = <Footer />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
