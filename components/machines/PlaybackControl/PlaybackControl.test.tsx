import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '../../../store'
import PlaybackControl from './PlaybackControl'

let component: any

describe('<PlaybackControl />', () => {
  beforeEach(() => {
    const store = makeStore()
    component = (
      <Provider store={store}>
        <PlaybackControl />
      </Provider>
    )
  })

  it('Renders component according to snapshot', () => {
    const { container } = render(component)
    expect(container).toMatchSnapshot()
  })

  it('Sets playback control to "stopped" by default', () => {
    const { getByRole } = render(component)
    const stopButton = getByRole('button', { name: 'Stop button' })

    fireEvent.click(stopButton)

    expect(stopButton.getAttribute('aria-pressed')).toBe('true')
  })

  it('Sets playback control to "playing" when play button is clicked', () => {
    const { getByRole } = render(component)
    const playButton = getByRole('button', { name: 'Play button' })

    fireEvent.click(playButton)

    expect(playButton.getAttribute('aria-pressed')).toBe('true')
  })

  it('Sets playback control to "paused" when pause button is clicked', () => {
    const { getByRole } = render(component)
    const pauseButton = getByRole('button', { name: 'Pause button' })

    fireEvent.click(pauseButton)

    expect(pauseButton.getAttribute('aria-pressed')).toBe('true')
  })

  it('Sets playback control to "stoped" when stop button is clicked', () => {
    const { getByRole } = render(component)
    const playButton = getByRole('button', { name: 'Play button' })
    const stopButton = getByRole('button', { name: 'Stop button' })

    fireEvent.click(playButton)
    expect(playButton.getAttribute('aria-pressed')).toBe('true')

    fireEvent.click(stopButton)
    expect(stopButton.getAttribute('aria-pressed')).toBe('true')
  })
})
