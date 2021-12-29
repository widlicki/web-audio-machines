import { render } from '@testing-library/react'
import { mockAudioCategories } from '../../mocks/library'
import AudioCategoryList from './audio-category-list'

let component: any

describe('AudioCategoryList', () => {
  beforeEach(() => {
    component = <AudioCategoryList categories={mockAudioCategories} />
  })

  it.skip('Should render AudioCategoryList according to snapshot', () => {
    const { container } = render(component)
    expect(container).toMatchSnapshot({ id: expect.any(String) })
  })

  it('Should render correct categories', () => {
    const { getByText } = render(component)

    mockAudioCategories.forEach((cat) => {
      expect(getByText(cat.name)).toBeTruthy()
    })
  })
})
