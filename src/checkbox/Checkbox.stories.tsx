import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './index'
import React from 'react'

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: 'Checkbox',
  },
}

export const UnderControl: Story = {
  args: {
    checked: false,
    children: 'Checkbox',
  },
}

export const Disabled = () => {
  return (
    <>
      <Checkbox defaultChecked={false} disabled>
        Hi
      </Checkbox>
      <br />
      <Checkbox defaultChecked disabled />
    </>
  )
}
