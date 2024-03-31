import InternalRadio from './Radio'
import Group from './RadioGroup'

type RadioType = typeof InternalRadio

interface IRadio extends RadioType {
  Group: typeof Group
}

const Radio = InternalRadio as IRadio

Radio.Group = Group
export default Radio
