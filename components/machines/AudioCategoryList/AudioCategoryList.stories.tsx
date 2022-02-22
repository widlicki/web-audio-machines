import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mockAudioCategories } from '../../../mocks/library'
import AudioCategoryList from './AudioCategoryList'

export default {
  title: 'Machines/AudioCategoryList',
  component: AudioCategoryList,
} as ComponentMeta<typeof AudioCategoryList>

const Template: ComponentStory<typeof AudioCategoryList> = (args) => (
  <AudioCategoryList {...args} />
)

export const WithData = Template.bind({})
WithData.args = {
  categories: mockAudioCategories,
}

export const WithoutData = Template.bind({})
WithoutData.args = {
  categories: [],
}
