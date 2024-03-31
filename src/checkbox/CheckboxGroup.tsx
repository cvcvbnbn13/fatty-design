import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import './index.scss'
import { CheckboxChangeEvent } from './Checkbox'
import CheckboxContext from './context'

export interface IProps {
  defaultValue?: string[]
  value?: string[]
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  style?: object
  testId?: string
  onChange?: Function
}

const Group: FC<IProps> = ({
  className,
  children,
  testId,
  disabled,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(props.defaultValue || props.value || [])

  useEffect(() => {
    if ('value' in props) {
      setValue(props.value!)
    }
  }, [props, props.value])

  const cls = classNames({
    'fatty-checkbox-group': true,
  })

  const handleChange = (e: CheckboxChangeEvent) => {
    const targetValue = e.target.value
    const idx = value.indexOf(targetValue)
    const checked = e.target.checked

    let nvalue = value
    if (idx === -1 && !checked) {
      nvalue = value.concat([targetValue])
      setValue(nvalue)
    } else if (idx > -1 && checked) {
      value.splice(idx, 1)
      nvalue = value.concat([])
      setValue(nvalue)
    }

    onChange?.(nvalue)
  }

  return (
    <span className={cls}>
      <CheckboxContext.Provider
        value={{
          onChange: handleChange,
          disabled: disabled!,
          value,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </span>
  )
}

export default Group
