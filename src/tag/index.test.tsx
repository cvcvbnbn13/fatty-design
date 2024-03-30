import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tag from './index'

describe('Tag', () => {
  test('render Tag', () => {
    render(<Tag>Click Me</Tag>)
    const target = screen.getByText(/Click Me/i)
    expect(target).toBeInTheDocument()
  })
})
