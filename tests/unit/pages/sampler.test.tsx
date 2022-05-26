import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Sampler from '../../../pages/machines/sampler'
import { makeStore } from '../../../store'

jest.mock(
  '../../../components/machines/PlaybackControl/PlaybackControl',
  () => (props: any) => {
    // @ts-ignore: unknown JSX element
    return <playback-control {...props} />
  }
)

jest.mock(
  '../../../components/machines/StepControl/StepControl',
  () => (props: any) => {
    // @ts-ignore: unknown JSX element
    return <step-control {...props} />
  }
)

jest.mock(
  '../../../components/machines/StepSequencer/StepSequencer',
  () => (props: any) => {
    // @ts-ignore: unknown JSX element
    return <step-sequencer {...props} />
  }
)

let component: any
let store: any

const createConnectedComponent = () => {
  return (
    <Provider store={store}>
      <Sampler />
    </Provider>
  )
}

describe('Sampler', () => {
  beforeEach(() => {
    store = makeStore()
  })
  it('renders sampler page according to snapshot', () => {
    component = createConnectedComponent()
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })
})
