import React, { FC } from 'react'
import classNames from 'classnames'
import './index.css'

interface IProps {
  type?: 'normal' | 'primary' | 'dashed' | 'text' | 'link'
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Button: FC<IProps> = ({ className, type, children, style }) => {
  const cls = classNames({
    'fatty-btn': true,
    [`fatty-btn-${type}`]: type,
    [className as string]: !!className,
  })

  return (
    <button style={style} className={cls}>
      {children}
    </button>
  )
}

export default Button
