import { ComponentMeta, ComponentStory } from '@storybook/react'
import Module from './Module'

export default {
  title: 'components/base/Module',
  component: Module,
} as ComponentMeta<typeof Module>

const Template: ComponentStory<typeof Module> = (args) => (
  <Module {...args}>
    <h4>Module Content</h4>
  </Module>
)

export const DefaultModule = Template.bind({})
DefaultModule.args = {
  title: 'Module Title',
}
