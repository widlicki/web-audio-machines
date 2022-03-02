import { ComponentMeta, ComponentStory } from '@storybook/react'
import SamplerImg from '../../../resources/images/sampler.png'
import MachineCard from './MachineCard'

export default {
  title: 'Machines/MachineCard',
  component: MachineCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MachineCard>

const Template: ComponentStory<typeof MachineCard> = (args) => (
  <MachineCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  description:
    '4 track sample-based sequencer with step and probability randomization, preset save and callback.',
  image: SamplerImg,
  name: 'Sampler',
}
