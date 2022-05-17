import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
  title: 'components/base/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  text: 'Button',
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  disabled: true,
  text: 'Button',
}

export const ToggleButton = Template.bind({})
ToggleButton.args = {
  text: 'Off',
  toggleText: 'On',
  variant: 'toggle',
}
