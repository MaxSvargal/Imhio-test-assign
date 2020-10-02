import React, { FC } from 'react'

import { IItem } from '../interfaces/items'
import { ItemsListBox } from './ItemsList.styles'
import { ItemsListItem } from './ItemsListItem'

interface IProps {
  items: IItem[]
}

export const ItemsList: FC<IProps> = ({ items }) => (
  <ItemsListBox>
    {items.map((item) => (
      <ItemsListItem key={item.id} value={item} />
    ))}
  </ItemsListBox>
)
