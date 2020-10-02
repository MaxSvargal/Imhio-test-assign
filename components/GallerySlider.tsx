import { FC } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { mod } from 'react-swipeable-views-core'
import { SlideRendererArgs, virtualize } from 'react-swipeable-views-utils'

const VirtualizeSwipeableViews = virtualize(SwipeableViews)
interface IProps {
  children: JSX.Element[]
}

export const GallerySlider: FC<IProps> = ({ children }) => (
  <VirtualizeSwipeableViews
    slideRenderer={({ index }: SlideRendererArgs) => {
      const item = children[mod(index, children.length)]
      return item
    }}
  />
)
