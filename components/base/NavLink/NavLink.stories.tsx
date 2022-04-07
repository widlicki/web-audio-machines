import { ComponentMeta, ComponentStory } from '@storybook/react'
import NavLink from './NavLink'

export default {
  title: 'components/base/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args}>Link</NavLink>
)

export const DefaultNavLink = Template.bind({})

// export const DisabledButton = Template.bind({})
// DisabledButton.args = {
//   disabled: true,
// }
