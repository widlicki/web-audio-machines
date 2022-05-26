import { ComponentMeta, ComponentStory } from '@storybook/react'
import FieldWrapper from './FieldWrapper'

export default {
  title: 'components/base/FieldWrapper',
  component: FieldWrapper,
} as ComponentMeta<typeof FieldWrapper>

const Template: ComponentStory<typeof FieldWrapper> = (args) => (
  <FieldWrapper {...args}>
    <h4>This is some FieldWrapper Content</h4>
  </FieldWrapper>
)

export const DefaultFieldWrapper = Template.bind({})
DefaultFieldWrapper.args = {
  title: 'FieldWrapper Title',
}
