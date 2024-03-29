import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './index'
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const style = {
  marginLeft: 8,
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
}

export const Basic = () => {
  return (
    <React.Fragment>
      <Button style={style} type="dashed">
        Dashed Button
      </Button>
      <Button style={style} type="primary">
        Primary Button
      </Button>
      <Button style={style} type="text">
        Text Button
      </Button>
      <Button style={style} type="link">
        Link Button
      </Button>
      <Button style={style}>Default Button</Button>
    </React.Fragment>
  )
}

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
}

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// }
