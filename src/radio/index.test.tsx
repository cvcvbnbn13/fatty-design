import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Radio from './index'

describe('Radio', () => {
  test('renders Radio', () => {
    render(<Radio testId="fatty-radio-basic">Radio</Radio>)

    const element = screen.getByTestId('fatty-radio-basic')

    expect(element).toBeInTheDocument()
  })

  test('renders Disabled Radio', () => {
    render(
      <Radio disabled testId="fatty-radio-disabled">
        Radio
      </Radio>
    )

    const element = screen.getByTestId('fatty-radio-disabled')

    expect(element).toHaveClass('fatty-radio-disabled')
  })

  test('should support onChange', () => {
    const onChange = jest.fn()
    render(
      <Radio testId="fatty-radio-basic" onChange={onChange}>
        Radio
      </Radio>
    )

    const element = screen.getByTestId('fatty-radio-basic')
    fireEvent.click(element)

    expect(onChange).toBeCalled()
  })

  test('should support under control', () => {
    const onChange = jest.fn()
    render(
      <Radio checked testId="fatty-radio-basic" onChange={onChange}>
        Radio
      </Radio>
    )

    const element = screen.getByTestId('fatty-radio-basic')
    fireEvent.click(element)

    expect(onChange).toBeCalledTimes(0)
  })
})
