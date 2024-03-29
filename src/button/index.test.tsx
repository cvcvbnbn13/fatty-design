import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

test('renders Button', () => {
  render(<Button>Click Me</Button>)
  const linkElement = screen.getByText(/Click Me/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders primary Button', () => {
  render(<Button type="primary">Click Me</Button>)
  const linkElement = screen.getByText(/Click Me/i)
  expect(linkElement).toBeInTheDocument()
})
