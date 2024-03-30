import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Input from './index'

describe('Input', () => {
  test('renders normal Input', () => {
    render(<Input>Click Me</Input>)

    const target = screen.getByText(/Click Me/i)

    expect(target).toBeInTheDocument(
      
    )
  })

/**
  test('renders small Input', () => {
    render(
      <Input type="primary" size="small" testId="fatty-btn-small">
        Click Me
      </Input>
    )

    expect(screen.getByTestId('fatty-btn-small')).toBeInTheDocument()

    expect(screen.getByTestId('fatty-btn-small')).toHaveClass('fatty-btn-small')
  })

  test('should support click', () => {
    const onClick = jest.fn()
    render(
      <Input type="primary" testId="fatty-btn-primary" onClick={onClick}>
        Click Me
      </Input>
    )

    const element = screen.getByText(/click me/i)
    fireEvent.click(element)

    expect(onClick).toBeCalled()
  })
**/
})
