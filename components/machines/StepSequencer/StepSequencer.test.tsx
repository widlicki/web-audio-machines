import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '../../../store'
import StepSequencer from './StepSequencer'
import { Default } from './StepSequencer.stories'

let component: any
let store: any

const createConnectedComponent = (args) => {
  return (
    <Provider store={store}>
      <StepSequencer {...args} />
    </Provider>
  )
}

describe('Step Sequencer Stories', () => {
  beforeEach(() => {
    store = makeStore()
  })

  new Map([['default', Default]]).forEach(({ args }, key) => {
    it(`renders ${key}`, () => {
      component = createConnectedComponent(args)
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
