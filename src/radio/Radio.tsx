import React, { FC, CSSProperties, useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import './index.scss'

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string
  children?: React.ReactNode
  style?: CSSProperties
  testId?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Radio: FC<IProps> = ({
  className,
  children,
  style,
  testId,
  disabled,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(false)
  const inputEl = useRef(null)

  const cls = classNames({
    'fatty-radio': true,
    'fatty-radio-checked': checked,
    'fatty-radio-disabled': disabled,
  })

  const wrapperCls = classNames({
    'fatty-radio-wrapper': true,
    'fatty-radio-wrapper-disabled': disabled,
  })

  const handleClick = (e: any) => {
    if (checked || disabled) {
      return
    }
    if (!('checked' in props)) {
      setChecked(true)
    }

    if (typeof onChange === 'function') {
      e.target = inputEl.current
      onChange(e)
    }
  }

  useEffect(() => {
    if ('checked' in props && props.checked !== checked) {
      setChecked(props.checked!)
    }
  }, [checked, props, props.checked])

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls} data-testid={testId}>
        <input type="radio" className="fatty-radio-input" ref={inputEl} />
        <span className="fatty-radio-inner"></span>
      </span>
      <span>{children}</span>
    </span>
  )
}

export default Radio
