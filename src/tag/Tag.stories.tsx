import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Tag from './index'
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    testId: {
      table: {
        disable: true,
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const log = (e: any) => {
  console.log(e)
}

const preventDefault = (e: any) => {
  e.preventDefault()
  console.log('Clicked! But prevent default.')
}

export const Basic = () => {
  return (
    <>
      <Tag>Tag1</Tag>
      <Tag>
        <a href="https://www.google.com">Google Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag visible closable>
        Tag3
      </Tag>
    </>
  )
}

export const Color = () => {
  return (
    <>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>

      <div style={{ marginTop: '10px' }}>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </>
  )
}
