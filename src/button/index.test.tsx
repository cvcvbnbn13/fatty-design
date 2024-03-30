import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  test('renders normal Button', () => {
    render(
      <Button type="normal" testId="fatty-btn-normal">
        Click Me
      </Button>
    )

    expect(screen.getByTestId('fatty-btn-normal')).toHaveClass(
      'fatty-btn-normal'
    )
  })

  test('renders primary Button', () => {
    render(
      <Button type="primary" testId="fatty-btn-primary">
        Click Me
      </Button>
    )

    expect(screen.getByTestId('fatty-btn-primary')).toHaveClass(
      'fatty-btn-primary'
    )
  })

  test('renders small Button', () => {
    render(
      <Button type="primary" size="small" testId="fatty-btn-small">
        Click Me
      </Button>
    )

    expect(screen.getByTestId('fatty-btn-small')).toBeInTheDocument()

    expect(screen.getByTestId('fatty-btn-small')).toHaveClass('fatty-btn-small')
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(
      <Button type="primary" testId="fatty-btn-primary" onClick={onClick}>
        Click Me
      </Button>
    )

    const element = screen.getByText(/click me/i)
    fireEvent.click(element)

    expect(onClick).toBeCalled()
  })

  test('should support blur', () => {
    const onBlur = jest.fn()
    render(
      <Button type="primary" testId="fatty-btn-primary" onBlur={onBlur}>
        Click Me
      </Button>
    )

    const element = screen.getByText(/click me/i)
    fireEvent.click(element)
    fireEvent.blur(element)

    expect(onBlur).toBeCalled()
  })

  test('should support onFocus', () => {
    const onFocus = jest.fn()
    render(
      <Button type="primary" testId="fatty-btn-primary" onFocus={onFocus}>
        Click Me
      </Button>
    )

    const element = screen.getByText(/click me/i)
    fireEvent.focus(element)

    expect(onFocus).toBeCalled()
  })
})
