import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './index'
import React from 'react'

const CheckboxGroup = Checkbox.Group

const meta = {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
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
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: [
      <Checkbox value="1" key="1">
        option 1
      </Checkbox>,
      <Checkbox value="2" key="2">
        option 2
      </Checkbox>,
      <Checkbox value="3" key="3">
        option 3
      </Checkbox>,
    ],
  },
}

export const ContextDemo = () => {
  return (
    <CheckboxGroup defaultValue={['2']}>
      <span>
        <Checkbox value="1" key="1">
          option 1
        </Checkbox>
      </span>
      <span>
        <Checkbox value="2" key="2">
          option 2
        </Checkbox>
      </span>
      <Checkbox value="3" key="3">
        option 3
      </Checkbox>
    </CheckboxGroup>
  )
}
