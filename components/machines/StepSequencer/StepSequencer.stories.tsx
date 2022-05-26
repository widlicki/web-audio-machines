import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../../../store'
import StepSequencer from './StepSequencer'

export default {
  title: 'components/machines/StepSequencer',
  component: StepSequencer,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof StepSequencer>

const Template: ComponentStory<typeof StepSequencer> = (args) => (
  <StepSequencer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
