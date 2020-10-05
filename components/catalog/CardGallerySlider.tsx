import React, { FC } from 'react'

import { IItem } from '../../interfaces/items'
import { GallerySliderPicture } from './CardGallerySlider.styles'
import { GallerySlider } from './GallerySlider'

interface IProps {
  value: IItem
}

export const CardGallerySlider: FC<IProps> = ({ value }) => (
  <GallerySlider loopMsec={1000} index={value.id}>
    {value.picture.map((pic, i) => (
      <GallerySliderPicture
        src={pic.path}
        key={pic.id}
        alt={`${i + 1} of ${value.picture.length}`}
      />
    ))}
  </GallerySlider>
)
