import React, { FC, CSSProperties, useState } from 'react'
import classNames from 'classnames'
import './index.scss'
import Radio from './Radio'

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string
  defaultValue?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  className?: string
  children?: React.ReactNode
  style?: CSSProperties
  testId?: string
  disabled?: boolean
}

const RadioGroup: FC<IProps> = ({
  className,
  children,
  style,
  testId,
  disabled,
  onChange,
  value: pValue,
  defaultValue: pDefaultValue,
  ...props
}) => {
  const [value, setValue] = useState(pValue || pDefaultValue)

  const cls = classNames({
    'fatty-radio-group': true,
  })

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    const value = e.target.value
    setValue(value)
  }

  const newChildren = React.Children.map(children, (child: any) => {
    if (child.type !== Radio) {
      return null
    }

    return React.cloneElement(child, {
      checked: child.props.value === value,
      disabled: disabled,
      onChange: handleClick,
    })
  })

  return (
    <span className={cls}>
      <span>{newChildren}</span>
    </span>
  )
}

export default RadioGroup
