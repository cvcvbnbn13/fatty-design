import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Input from './index'

describe('Input', () => {
  test('renders normal Input', () => {
    render(<Input value="normal" testId="Input-normal" />)

    const target = screen.getByTestId('Input-normal')

    expect(target).toBeInTheDocument()
  })

  test('should support defaultValue', () => {
    const onChange = jest.fn()
    render(
      <Input
        defaultValue="default"
        testId="Input-with-defaultValut"
        onChange={onChange}
      />
    )

    const element = screen.getByTestId('Input-with-defaultValut')

    expect(element.getAttribute('value')).toBe('default')

    fireEvent.change(element, { target: { value: 'new value' } })
    expect(onChange).toBeCalledTimes(1)
    expect(element.getAttribute('value')).toBe('new value')
  })
})
