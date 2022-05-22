import { ComponentMeta, ComponentStory } from '@storybook/react'
import StepPad from './StepPad'

export default {
  title: 'components/machines/StepPad',
  component: StepPad,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof StepPad>

const Template: ComponentStory<typeof StepPad> = (args) => <StepPad {...args} />

export const Default = Template.bind({})
Default.args = {
  isDisabled: false,
  isSet: false,
  isTriggered: false,
}
