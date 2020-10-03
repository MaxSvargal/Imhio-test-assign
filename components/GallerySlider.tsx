import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FC } from 'react'

import { sliderCurrentContext } from '../contexts/sliderCurrentContext'
import { Container, OffsetBox } from './GallerySlider.styles'

interface IProps {
  children: JSX.Element[]
  loopMsec: number
}

export const GallerySlider: FC<IProps> = ({ children, loopMsec }) => {
  const [activeId, setActiveId] = useContext(sliderCurrentContext)

  const [isPlay, setIsPlay] = useState(false)
  const [currIndex, setCurrIndex] = useState(0)
  const intervalId = useRef<number>()

  const onToggleScroll = useCallback(() => setIsPlay((state) => !state), [])

  const updateCurrentIndex = useCallback(
    () => setCurrIndex((index) => (index === children.length - 1 ? 0 : index + 1)),
    []
  )

  useEffect(() => {
    if (isPlay) {
      intervalId.current = setInterval(updateCurrentIndex, loopMsec)
      updateCurrentIndex()
      setActiveId(intervalId.current)
    } else {
      if (intervalId.current) clearInterval(intervalId.current)
      setActiveId(undefined)
    }
    return () => clearInterval(intervalId.current)
  }, [isPlay])

  useEffect(() => {
    if (activeId !== intervalId.current) clearInterval(intervalId.current)
  }, [intervalId, activeId])

  return (
    <Container onClick={onToggleScroll}>
      <OffsetBox css={{ transform: `translateX(${currIndex * -100}%)` }}>
        {intervalId.current ? children : children[0]}
      </OffsetBox>
    </Container>
  )
}
