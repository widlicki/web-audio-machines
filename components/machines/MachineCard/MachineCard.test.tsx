import { render } from '@testing-library/react'
import SamplerImg from '../../../resources/images/sampler.png'
import MachineCard, { MachineCardProps } from './MachineCard'
// eslint-disable-next-line import/extensions
import { Default } from './MachineCard.stories'

const defaultArgs: MachineCardProps = {
  description:
    '4 track sample-based sequencer with step and probability randomization, preset save and callback.',
  image: SamplerImg,
  name: 'Sampler',
} as MachineCardProps

describe('MachineCard Stories', () => {
  new Map([['correct default card', Default]]).forEach(({ args }, key) => {
    it(`renders ${key}`, () => {
      const component = <MachineCard {...defaultArgs} {...args} />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})
