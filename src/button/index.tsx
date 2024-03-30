import React, { FC } from 'react'
import classNames from 'classnames'
import './index.scss'

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link'
  className?: string
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  style?: React.CSSProperties
  testId?: string
}

const Button: FC<IProps> = ({
  className,
  type = 'normal',
  children,
  style,
  testId,
  size = 'medium',
  ...props
}) => {
  const cls = classNames({
    'fatty-btn': true,
    [`fatty-btn-${size}`]: size,
    [`fatty-btn-${type}`]: type,
    [className as string]: !!className,
  })

  return (
    <button {...props} style={style} className={cls} data-testid={testId}>
      {children}
    </button>
  )
}

export default Button
