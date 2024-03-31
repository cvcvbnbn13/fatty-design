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

const Checkbox : FC<IProps> = ({
  className,
  type = 'normal',
  children,
  style,
  testId,
  size = 'medium',
  ...props
}) => {
  const cls = classNames({
    'fatty-Checkbox': true,
    [`fatty-Checkbox-${size}`]: size,
    [`fatty-Checkbox-${type}`]: type,
    [className as string]: !!className,
  })

  return (
    <span  {...props} style={style} className={cls} data-testid={testId}>
      {children}
    </span >
  )
}

export default Checkbox 
