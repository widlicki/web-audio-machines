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

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  disabled: true,
}
