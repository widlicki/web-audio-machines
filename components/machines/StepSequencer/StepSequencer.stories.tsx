import { ComponentMeta, ComponentStory } from '@storybook/react'
import StepSequencer from './StepSequencer'

export default {
  title: 'components/machines/StepSequencer',
  component: StepSequencer,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof StepSequencer>

const Template: ComponentStory<typeof StepSequencer> = (args) => (
  <StepSequencer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
