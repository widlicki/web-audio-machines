import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'

export default {
  title: 'components/site/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  isAuthenticated: true,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  isAuthenticated: false,
}
