import React, { FC, useState, useRef, useEffect, useContext } from 'react'
import classNames from 'classnames'
import './index.scss'
import CheckboxContext from './context'

export interface IProps {
  prefixCls?: string
  value?: string
  checked?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  className?: string
  children?: React.ReactNode
  style?: object
  testId?: string
  onChange?: Function
}

export interface CheckboxChangeEventTarget {
  value: string
  checked: boolean
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget
}

const Checkbox: FC<IProps> = ({
  className,
  children,
  testId,
  defaultChecked,
  disabled,
  onChange,
  prefixCls = 'fatty-',
  ...props
}) => {
  const [checked, setChecked] = useState(defaultChecked || false)
  const inputEl = useRef(null)
  const {
    onChange: conChange,
    disabled: cdisabled,
    value: values,
  } = useContext(CheckboxContext)

  const handleClick = (e: any) => {
    if (disabled || cdisabled) {
      return
    }
    const state = !checked
    if (!('checked' in props)) {
      setChecked(state)
    }

    if (typeof onChange === 'function') {
      e.target = inputEl.current
      e.target.checked = state
      onChange(e)
    }

    if (typeof conChange === 'function') {
      e.target = inputEl.current
      conChange(e)
    }
  }

  const handleChange = () => {}

  const cls = classNames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: cdisabled,
  })

  const wrapperCls = classNames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: cdisabled,
  })

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked! || false)
    }
  }, [props, props.checked])

  useEffect(() => {
    if (values && 'value' in props) {
      setChecked(values.indexOf(props.value!) > -1)
    }
  }, [props, values])

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input
          type="checkbox"
          ref={inputEl}
          value={props.value}
          checked={checked}
          onChange={handleChange}
        />
        <span className="fatty-checkbox-inner"></span>
      </span>
      <span>{children}</span>
    </span>
  )
}

export default Checkbox
