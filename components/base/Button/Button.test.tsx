import { fireEvent, render, screen } from '@testing-library/react'
import AppButton from './Button'
import { DefaultButton, DisabledButton, ToggleButton } from './Button.stories'

describe('Button Stories', () => {
  new Map([
    ['Default button', DefaultButton],
    ['Disabled button', DisabledButton],
    ['Toggle button', ToggleButton],
  ]).forEach((key) => {
    it(`renders ${key}`, () => {
      const component = <AppButton text="test" />
      const { container } = render(component)
      expect(container).toMatchSnapshot()
    })
  })
})

describe('Button', () => {
  it('Should call onClick method when clicked', () => {
    const handleClick = jest.fn()

    const component = <AppButton onClick={handleClick} text="button" />
    render(component)
    fireEvent.click(screen.getByText(/button/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
