import React, { FC, CSSProperties, useState, useEffect, ReactNode } from 'react'
import classNames from 'classnames'
import './index.scss'

export interface IProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
  style?: CSSProperties
  testId?: string
  value?: string
  defaultValue?: string
  prefix?: ReactNode
  placeholder?: string
  maxLength?: number
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Input: FC<IProps> = ({
  className,
  children,
  style,
  testId,
  defaultValue,
  prefix,
  value: pValue,
  onChange,
  size = 'medium',
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || pValue || '')

  const cls = classNames({
    'fatty-input': true,
    'fatty-input-lg': size === 'large',
    'fatty-input-sm': size === 'small',
    [className as string]: !!className,
  })

  const wrapperCls = classNames({
    'fatty-input-affix-wrapper': true,
    'fatty-input-affix-wrapper-lg': size === 'large',
    'fatty-input-affix-wrapper-sm': size === 'small',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!pValue) {
      setValue(e.target.value)
    }
    onChange?.(e)
  }

  const input = (
    <input {...props} className={cls} value={value} onChange={handleChange} />
  )

  useEffect(() => {
    if (pValue) {
      setValue(pValue)
    }
  }, [pValue])

  if (props.maxLength || prefix) {
    return (
      <span className={wrapperCls}>
        {prefix && <span className="fatty-input-prefix">{prefix}</span>}
        {input}
        {props.maxLength && (
          <span className="fatty-input-suffix">
            <span className="fatty-input-show-count-suffix">
              {value.length} / {props.maxLength}
            </span>
          </span>
        )}
      </span>
    )
  } else {
    return input
  }
}

export default Input
