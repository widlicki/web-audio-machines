import { render } from '@testing-library/react'
import { mockAudioCategories } from '../../../mocks/library'
import AudioCategoryList, { AudioCategoryListProps } from './AudioCategoryList'
import { WithData, WithoutData } from './AudioCategoryList.stories'

let component: any

const defaultArgs: AudioCategoryListProps = {
  categories: [],
} as AudioCategoryListProps

describe('AudioCategoryList Stories', () => {
  new Map([
    ['correct list when data exists', WithData],
    ['correct text when data does not exist', WithoutData],
  ]).forEach(({ args }, key) => {
    it(`renders ${key}`, () => {
      component = <AudioCategoryList {...defaultArgs} {...args} />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('AudioCategoryList', () => {
  beforeEach(() => {
    component = <AudioCategoryList categories={mockAudioCategories} />
  })

  it('Should render correct categories', () => {
    const { getByText } = render(component)

    mockAudioCategories.forEach((cat) => {
      expect(getByText(cat.name)).toBeTruthy()
    })
  })
})
