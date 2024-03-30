import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import React from 'react'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    testId: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Basic = () => {
  return (
    <React.Fragment>
      <Input type="primary">Input</Input>
    </React.Fragment>
  )
}
