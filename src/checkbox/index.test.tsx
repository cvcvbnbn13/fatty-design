import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Checkbox from './index'

describe('Checkbox', () => {
  test('renders normal Checkbox', () => {
    render(<Checkbox>Click Me</Checkbox>)

    const target = screen.getByText(/Click Me/i)

    expect(target).toBeInTheDocument(
      
    )
  })

/**
  test('renders small Checkbox', () => {
    render(
      <Checkbox type="primary" size="small" testId="fatty-btn-small">
        Click Me
      </Checkbox>
    )

    expect(screen.getByTestId('fatty-btn-small')).toBeInTheDocument()

    expect(screen.getByTestId('fatty-btn-small')).toHaveClass('fatty-btn-small')
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(
      <Checkbox type="primary" testId="fatty-btn-primary" onClick={onClick}>
        Click Me
      </Checkbox>
    )

    const element = screen.getByText(/click me/i)
    fireEvent.click(element)

    expect(onClick).toBeCalled()
  })
**/
})
