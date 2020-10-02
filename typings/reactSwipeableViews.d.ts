declare module 'react-swipeable-views-core' {
  import { mod } from 'react-swipeable-views-core'

  function mod(index: number, length: number): number

  export { mod }
}

declare module 'react-swipeable-views-utils' {
  import SwipeableViews, { SwipeableViewsProps, SwipeableViewsState } from 'react-swipeable-views'
  import { virtualize } from 'react-swipeable-views-core'
  import { autoPlay } from 'react-swipeable-views-utils'

  export interface SlideRendererArgs {
    index: number
    key: number
  }

  interface VirtualizedSwipeableViewsProps extends SwipeableViewsProps {
    overscanSlideAfter?: number
    overscanSlideBefore?: number
    public slideRenderer({ index, key }: SlideRendererArgs): JSX.Element
  }

  class VirtualizedSwipeableViews extends React.Component<
    VirtualizedSwipeableViewsProps,
    SwipeableViewsState
  > {}

  interface AutoPlaySwipeableViewsProps extends SwipeableViewsProps {
    autoplay?: boolean
    direction?: 'incremental' | 'decremental'
    interval?: number
    overscanSlideAfter?: number
    overscanSlideBefore?: number
  }

  class AutoPlaySwipeableViews extends React.Component<
    AutoPlaySwipeableViewsProps,
    SwipeableViewsState
  > {}

  function virtualize(component: typeof SwipeableViews): typeof VirtualizedSwipeableViews
  function autoPlay(component: typeof SwipeableViews): typeof AutoPlaySwipeableViews

  export { virtualize, autoPlay }
}
