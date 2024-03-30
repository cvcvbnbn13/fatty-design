import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Icon from './index'

describe('Icon', () => {
  test('render fixed Icon', () => {
    render(<Icon type="fixed" />)

    expect(screen.getByTestId('fatty-icon-fixed')).toBeInTheDocument()
  })

  test('render copy Icon', () => {
    render(<Icon type="copy" />)

    expect(screen.getByTestId('fatty-icon-copy')).toBeInTheDocument()
  })

  test('render close Icon', () => {
    render(<Icon type="close" />)

    expect(screen.getByTestId('fatty-icon-close')).toBeInTheDocument()
  })

  test('custom className', () => {
    render(<Icon type="fixed" className="custom" />)

    expect(screen.getByTestId('fatty-icon-fixed')).toHaveClass('custom')
  })
})
