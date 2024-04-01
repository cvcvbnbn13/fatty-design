import React, { FC, CSSProperties, useState, useEffect, ReactNode } from 'react'
import classNames from 'classnames'
import './index.scss'

export interface IProps {
  className?: string
  children?: ReactNode
  style?: CSSProperties
  showCount?: boolean
  testId?: string
  value?: string
  defaultValue?: string
  prefix?: ReactNode
  placeholder?: string
  maxLength?: number
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<IProps> = ({
  className,
  children,
  style,
  testId,
  defaultValue,
  prefix,
  showCount,
  value: pValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || pValue || '')

  const cls = classNames({
    'fatty-input': true,
    [className as string]: !!className,
  })

  const wrapperCls = classNames({
    'fatty-input-textarea': true,
    'fatty-input-textarea-show-count': showCount,
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!pValue) {
      setValue(e.target.value)
    }
    onChange?.(e)
  }

  const textarea = (
    <textarea
      {...props}
      className={cls}
      value={value}
      onChange={handleChange}
    />
  )

  useEffect(() => {
    if (pValue) {
      setValue(pValue)
    }
  }, [pValue])

  if (showCount) {
    return (
      <span
        className={wrapperCls}
        data-count={`${value.length} / ${props.maxLength}`}
      >
        {textarea}
      </span>
    )
  } else {
    return textarea
  }
}

export default TextArea
