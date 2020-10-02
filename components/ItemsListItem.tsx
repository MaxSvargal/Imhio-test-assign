import React, { FC, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { IItem } from '../interfaces/items'
import { GallerySlider } from './GallerySlider'
import { ItemListBox, ItemListPic } from './ItemsListItem.styles'

interface IProps {
  value: IItem
}

export const ItemsListItem: FC<IProps> = ({ value }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <ItemListBox style={{ height: isActive ? '100vh' : 'auto' }}>
      <a
        href={`/items/${value.id}`}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setIsActive((active) => !active)
        }}>
        <div>
          <GallerySlider>
            {value.picture.map((pic, i) => (
              <ItemListPic src={pic.path} key={pic.id} alt={`${i} of ${value.picture.length}`} />
            ))}
          </GallerySlider>
        </div>
        <div>
          <div>Added: {value.added}</div>
          <div>Duration: {value.duration}</div>
        </div>
        <div>
          <div>{value.description}</div>
        </div>
        <div>
          {value.tag.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <div>
          <button>More info</button>
        </div>
      </a>
    </ItemListBox>
  )
}
