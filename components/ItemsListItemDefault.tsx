import React, { FC } from 'react'

import { IItem } from '../interfaces/items'
import { formatDateTime } from '../utils/date'
import { capitalize } from '../utils/string'
import { Hidden } from './atoms/Hidden'
import {
  ItemListContainer,
  ItemListDescText,
  ItemListInfoRow,
  ItemListPic,
  ItemListPicContainer,
  MoreBtn,
  TagButton,
  TagsList
} from './ItemsListItem.styles'

interface IProps {
  value: IItem
  onChangeActive: () => void
}

export const ItemsListItemDefault: FC<IProps> = ({ value, onChangeActive }) => (
  <ItemListContainer>
    <ItemListPicContainer>
      <ItemListPic
        src={value.picture[0].path}
        key={value.picture[0].id}
        alt={`1 of ${value.picture.length}`}
      />
    </ItemListPicContainer>

    <ItemListInfoRow>
      <div>Added: {formatDateTime(value.added)}</div>
      <div>Duration: {value.duration}</div>
    </ItemListInfoRow>

    <Hidden>Source: {value.source}</Hidden>

    <ItemListDescText>{value.description}</ItemListDescText>

    <TagsList>
      {value.tag.map((tag) => (
        <TagButton key={tag}>{capitalize(tag)}</TagButton>
      ))}
    </TagsList>

    <div>
      <MoreBtn onClick={onChangeActive}>More info</MoreBtn>
    </div>
  </ItemListContainer>
)
