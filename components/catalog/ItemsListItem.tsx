import React, { FC } from 'react'

import { IItem } from '../../interfaces/items'
import { CardAdditionalInfo } from './CardAdditionalInfo'
import { CardCommonInfo } from './CardCommonInfo'
import { CardGallerySlider } from './CardGallerySlider'
import { ItemListContainer, ItemListContentBox } from './ItemsListItem.styles'

interface IProps {
  value: IItem
  active: boolean
  onChangeActive: () => void
}

export const ItemsListItem: FC<IProps> = ({ value, active, onChangeActive }) => {
  return (
    <ItemListContainer active={active}>
      <ItemListContentBox active={active}>
        <CardGallerySlider value={value} />
        <CardCommonInfo active={active} value={value} />
      </ItemListContentBox>
      <CardAdditionalInfo active={active} value={value} onChangeActive={onChangeActive} />
    </ItemListContainer>
  )
}
