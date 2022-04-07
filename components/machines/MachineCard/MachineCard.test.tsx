import { fireEvent, render, screen } from '@testing-library/react'
import MachineCard, { MachineCardProps } from './MachineCard'
import { Default } from './MachineCard.stories'

const defaultArgs: MachineCardProps = {
  description:
    '4 track sample-based sequencer with step and probability randomization, preset save and callback.',
  name: 'Sampler',
} as MachineCardProps

describe('MachineCard Stories', () => {
  new Map([['default card', Default]]).forEach(({ args }, key) => {
    it.skip(`renders ${key}`, () => {
      const component = <MachineCard {...defaultArgs} {...args} />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('MachineCard', () => {
  it.skip('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()

    const component = (
      <MachineCard description="test" name="Sampler" to="some/path" />
    )
    render(component)
    fireEvent.click(screen.getByText(/launch/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
