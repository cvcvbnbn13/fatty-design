import React, { FC, useState } from 'react'
import classNames from 'classnames'
import './index.css'
import Icon from '../icon'
import { CloseOutlined } from '@ant-design/icons'

interface IProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  className?: string
  closable?: boolean
  color?: string
  visible?: boolean
  testId?: string
  onClose?: Function
  children?: React.ReactNode
}

const Tag: FC<IProps> = ({
  className,
  children,
  closable,
  color,
  visible: pvisible,
  onClose,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(pvisible || true)

  const customColor = color && color.match(/^#/)

  const cls = classNames({
    'fatty-tag': true,
    [`fatty-tag-${color}`]: color && !customColor,
    [className as string]: !!className,
  })

  const style: React.CSSProperties = { ...props.style }
  if (customColor) {
    style.backgroundColor = color
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClose?.(e)
    if (e.defaultPrevented) return
    if (!pvisible) {
      setVisible(false)
    }
  }

  if (!visible) {
    return null
  }
  return (
    <span {...props} className={cls} style={style}>
      {children}
      {closable && (
        <span>
          <CloseOutlined onClick={handleClick} />
        </span>
      )}
    </span>
  )
}

export default Tag
