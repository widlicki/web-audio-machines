import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'components/site/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const DefaultFooter = Template.bind({})
