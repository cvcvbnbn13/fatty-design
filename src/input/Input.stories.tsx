import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'
import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // layout: 'centered',
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

export const Basic: Story = {
  args: {
    placeholder: 'Basic',
  },
}

export const Prefix = () => {
  return (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    </>
  )
}

export const Size = () => {
  return (
    <>
      <Input size="small" placeholder="small" />
      <Input placeholder="medium" />
      <Input size="large" placeholder="large" />
    </>
  )
}

const onChange = (e: any) => {
  console.log('Change', e.target.value)
}

export const MaxLength = () => {
  return (
    <>
      <Input maxLength={20} onChange={onChange} />
    </>
  )
}

export const TextArea = () => {
  return (
    <>
      <Input.TextArea maxLength={20} showCount onChange={onChange} />
    </>
  )
}

export const TextAreaAutoSize = () => (
  <>
    <Input.TextArea
      placeholder="Autosize height based on content lines"
      autoSize
    />
    <div style={{ margin: '24px 0' }} />
    <Input.TextArea
      placeholder="Autosize height with minimum and maximum number of lines"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
  </>
)
