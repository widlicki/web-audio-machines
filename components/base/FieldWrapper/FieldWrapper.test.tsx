import { render } from '@testing-library/react'
import FieldWrapper from './FieldWrapper'
import { DefaultFieldWrapper } from './FieldWrapper.stories'

describe('FieldWrapper Stories', () => {
  new Map([['Default FieldWrapper', DefaultFieldWrapper]]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = (
        <FieldWrapper title="test">
          <h2>some content</h2>
        </FieldWrapper>
      )
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
