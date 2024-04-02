import React, {
  FC,
  CSSProperties,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import './index.scss'

type autoSizeType = {
  minRows: number
  maxRows: number
}

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
  autoSize?: boolean | autoSizeType
  status?: 'error' | 'warning'
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
  autoSize = false,
  status,
  value: pValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue || pValue || '')
  const [height, setHeight] = useState(0)
  const textAreaRef = useRef(null)

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
      const value = e.target.value
      setValue(value)
      let line = value.split('\n').length

      if (typeof autoSize === 'object') {
        const { minRows, maxRows } = autoSize
        const textAreaStyle = window.getComputedStyle(textAreaRef.current!)
        const minHeight = minRows * parseFloat(textAreaStyle.lineHeight)
        const maxHeight = maxRows * parseFloat(textAreaStyle.lineHeight)

        // @ts-ignore
        textAreaRef.current.setAttribute(
          'style',
          `min-height: ${minHeight}px; max-height: ${maxHeight}px; `
        )
      }

      if (autoSize) {
        if (line < 2) line = 2
        const textAreaStyle = window.getComputedStyle(textAreaRef.current!)

        const textAreaHeight =
          parseFloat(textAreaStyle.paddingTop) +
          parseFloat(textAreaStyle.paddingBottom) +
          parseFloat(textAreaStyle.borderTopWidth) +
          parseFloat(textAreaStyle.borderBottomWidth)

        const contentHeight = line * parseFloat(textAreaStyle.lineHeight)
        const totalHeight = textAreaHeight + contentHeight
        setHeight(totalHeight)
      }
    }
    onChange?.(e)
  }

  useEffect(() => {
    if (pValue) {
      setValue(pValue)
    }
  }, [pValue])

  console.log(height)

  const autoSizeStyle: CSSProperties = {}
  if (height) {
    autoSizeStyle.height = height
  }

  const textarea = (
    <textarea
      {...props}
      className={cls}
      value={value}
      onChange={handleChange}
      ref={textAreaRef}
      style={autoSizeStyle}
    />
  )

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
