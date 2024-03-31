import { createContext } from 'react'

export interface ICheckboxContextProps {
  value: string[]
  onChange: Function
  disabled: boolean
}

const CheckboxContext = createContext<ICheckboxContextProps>({
  value: [],
  onChange: () => {},
  disabled: false,
})

export default CheckboxContext
