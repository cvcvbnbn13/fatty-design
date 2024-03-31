import type { Meta, StoryObj } from '@storybook/react'
import Radio from './index'
import React from 'react'

const RadioGroup = Radio.Group

const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: [
      <Radio value="1" key="1">
        option 1
      </Radio>,
      <Radio value="2" key="2">
        option 2
      </Radio>,
      <Radio value="3" key="3">
        option 3
      </Radio>,
    ],
  },
}

// export const Disabled: Story = {
//   args: {
//     children: 'Radio',
//     disabled: true,
//   },
// }

export const UnderControl: Story = {
  args: {
    value: '3',
    children: [
      <Radio value="1" key="1">
        option 1
      </Radio>,
      <Radio value="2" key="2">
        option 2
      </Radio>,
      <Radio value="3" key="3">
        option 3
      </Radio>,
    ],
  },
}
