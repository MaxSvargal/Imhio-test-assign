import React, { FC } from 'react'

import { IItem } from '../interfaces/items'
import { formatDateTime } from '../utils/date'
import { charlLimit } from '../utils/string'
import { FullDescTagsList } from './FullDescTagsList'
import { GallerySlider } from './GallerySlider'
import {
  GalleryContainer,
  ItemListActiveContainer,
  ItemListInfoRow,
  ItemListOutline,
  ItemListPic
} from './ItemsListItem.styles'

interface IProps {
  value: IItem
  onChangeActive: () => void
}

export const ItemsListItemActive: FC<IProps> = ({ value, onChangeActive }) => (
  <ItemListActiveContainer>
    <button onClick={onChangeActive}>Close</button>

    <GalleryContainer>
      <GallerySlider>
        {value.picture.map((pic, i) => (
          <ItemListPic src={pic.path} key={pic.id} alt={`${i + 1} of ${value.picture.length}`} />
        ))}
      </GallerySlider>
    </GalleryContainer>

    <ItemListInfoRow>
      <div>Added: {formatDateTime(value.added)}</div>
      <div>Duration: {value.duration}</div>
      <div>Source: {value.source}</div>
    </ItemListInfoRow>

    <ItemListOutline>
      <div>
        <strong>Description:</strong> {charlLimit(800, value.description)}
      </div>
      <FullDescTagsList values={value.tag}>Tags</FullDescTagsList>
      <FullDescTagsList values={value.pornstar}>Pornstars</FullDescTagsList>
      <FullDescTagsList values={value.webcam}>Webcam Models</FullDescTagsList>
    </ItemListOutline>
  </ItemListActiveContainer>
)
