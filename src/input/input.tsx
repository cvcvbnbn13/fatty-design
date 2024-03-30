import React, { FC, CSSProperties } from 'react'
import classNames from 'classnames'
import './index.scss'

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link'
  className?: string
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  style?: CSSProperties
  testId?: string
}

const Input: FC<IProps> = ({
  className,
  type = 'normal',
  children,
  style,
  testId,
  size = 'medium',
  ...props
}) => {
  const cls = classNames({
    'fatty-input': true,
    [`fatty-input-${size}`]: size,
    [`fatty-input-${type}`]: type,
    [className as string]: !!className,
  })

  return (
    <Input {...props} style={style} className={cls} data-testid={testId}>
      {children}
    </Input>
  )
}

export default Input
