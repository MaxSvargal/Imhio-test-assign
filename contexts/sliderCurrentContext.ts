import { makeStateContext } from './makeStateContext'

export const [sliderCurrentContext, SliderCurrentContextProvider] = makeStateContext<
  number | undefined
>(undefined)
