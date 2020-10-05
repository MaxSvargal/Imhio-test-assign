import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FC } from 'react'

import { sliderCurrentContext } from '../../contexts/sliderCurrentContext'
import { Container, OffsetBox } from './GallerySlider.styles'

interface IProps {
  children: JSX.Element[]
  loopMsec: number
  index: number
}

export const GallerySlider: FC<IProps> = ({ children, loopMsec, index }) => {
  const [activeId, setActiveId] = useContext(sliderCurrentContext)

  const [currPicIndex, setCurrPicIndex] = useState<number>(0)
  const intervalId = useRef<number>()

  const onToggleScroll = useCallback(() => {
    setActiveId(index !== activeId ? index : undefined)
  }, [activeId, index])

  const updateCurrentIndex = useCallback(
    () => setCurrPicIndex((index) => (index === children.length - 1 ? 0 : index + 1)),
    [children.length]
  )

  useEffect(() => {
    if (activeId === index) {
      intervalId.current = setInterval(updateCurrentIndex, loopMsec)
      updateCurrentIndex()
    } else {
      if (intervalId.current) clearInterval(intervalId.current)
    }
    return () => clearInterval(intervalId.current)
  }, [activeId, index])

  return (
    <Container onClick={onToggleScroll}>
      <OffsetBox css={{ transform: `translateX(${currPicIndex * -100}%)` }}>
        {intervalId.current ? children : children[0]}
      </OffsetBox>
    </Container>
  )
}
