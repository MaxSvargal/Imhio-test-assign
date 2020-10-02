import React, { FC } from 'react'

import { IItem } from '../interfaces/items'
import { ItemsListItemActive } from './ItemsListItemActive'
import { ItemsListItemDefault } from './ItemsListItemDefault'

interface IProps {
  value: IItem
  active: boolean
  onChangeActive: () => void
}

export const ItemsListItem: FC<IProps> = ({ active, ...rest }) =>
  active ? <ItemsListItemActive {...rest} /> : <ItemsListItemDefault {...rest} />
