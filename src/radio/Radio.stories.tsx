import type { Meta, StoryObj } from '@storybook/react'
import Radio from './index'
import React from 'react'

const meta = {
  title: 'Example/Radio',
  component: Radio,
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
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: 'Radio',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Radio',
    disabled: true,
  },
}

// export const Unchecked = () => {
//   return (
//     <>
//       <Radio checked={false}>Radio</Radio>
//     </>
//   )
// }
